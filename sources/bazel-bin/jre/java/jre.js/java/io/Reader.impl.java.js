goog.module('java.io.Reader$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOException = goog.forwardDeclare('java.io.IOException$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $char = goog.forwardDeclare('javaemul.internal.primitives.$char$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @abstract
 */
class Reader extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_io_Reader__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @abstract @nodts */
 m_close__void() {}
 /** @nodts */
 m_mark__int__void(/** number */ readAheadLimit) {
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IOException.$create__java_lang_String('Not supported'));
 }
 /** @nodts @return {boolean} */
 m_markSupported__boolean() {
  return false;
 }
 /** @nodts @return {number} */
 m_read__int() {
  let chr = /**@type {!Array<number>}*/ ($Arrays.$create([1], $char));
  return this.m_read__arrayOf_char__int(chr) == -1 ? -1 : chr[0];
 }
 /** @nodts @return {number} */
 m_read__arrayOf_char__int(/** Array<number> */ buf) {
  return this.m_read__arrayOf_char__int__int__int(buf, 0, buf.length);
 }
 /** @abstract @nodts @return {number} */
 m_read__arrayOf_char__int__int__int(/** Array<number> */ buf, /** number */ off, /** number */ len) {}
 /** @nodts @return {boolean} */
 m_ready__boolean() {
  return false;
 }
 /** @nodts */
 m_reset__void() {
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IOException.$create__java_lang_String('Not supported'));
 }
 /** @nodts @return {!$Long} */
 m_skip__long__long(/** !$Long */ n) {
  let remaining = n;
  let bufferSize = Math.min(Primitives.m_narrowLongToInt__long__int(n), Reader.f_MAX_SKIP_BUFFER_SIZE__java_io_Reader_);
  let skipBuffer = /**@type {!Array<number>}*/ ($Arrays.$create([bufferSize], $char));
  while ($LongUtils.greater(remaining, $Long.fromInt(0))) {
   let numRead = Primitives.m_widenIntToLong__int__long(this.m_read__arrayOf_char__int__int__int(skipBuffer, 0, Primitives.m_narrowLongToInt__long__int(remaining)));
   if ($LongUtils.less(numRead, $Long.fromInt(0))) {
    break;
   }
   remaining = $LongUtils.minus(remaining, numRead);
  }
  return $LongUtils.minus(n, remaining);
 }
 /** @nodts */
 static $clinit() {
  Reader.$clinit = () =>{};
  Reader.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Reader;
 }
 
 /** @nodts */
 static $loadModules() {
  IOException = goog.module.get('java.io.IOException$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $char = goog.module.get('javaemul.internal.primitives.$char$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
/**@const {number} @nodts*/
Reader.f_MAX_SKIP_BUFFER_SIZE__java_io_Reader_ = 1024;
$Util.$setClassMetadata(Reader, 'java.io.Reader');

exports = Reader;

//# sourceMappingURL=Reader.js.map
