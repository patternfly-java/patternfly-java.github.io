goog.module('java.io.InputStream$impl');

const Closeable = goog.require('java.io.Closeable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOException = goog.forwardDeclare('java.io.IOException$impl');
let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $byte = goog.forwardDeclare('javaemul.internal.primitives.$byte$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @abstract
 * @implements {Closeable}
 */
class InputStream extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_io_InputStream__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 m_available__int() {
  return 0;
 }
 /** @override @nodts */
 m_close__void() {}
 /** @nodts */
 m_mark__int__void(/** number */ readlimit) {}
 /** @nodts @return {boolean} */
 m_markSupported__boolean() {
  return false;
 }
 /** @abstract @nodts @return {number} */
 m_read__int() {}
 /** @nodts @return {number} */
 m_read__arrayOf_byte__int(/** Array<number> */ buffer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(buffer);
  return this.m_read__arrayOf_byte__int__int__int(buffer, 0, buffer.length);
 }
 /** @nodts @return {number} */
 m_read__arrayOf_byte__int__int__int(/** Array<number> */ buffer, /** number */ byteOffset, /** number */ byteCount) {
  IOUtils.m_checkOffsetAndCount__arrayOf_byte__int__int__void(buffer, byteOffset, byteCount);
  for (let i = 0; i < byteCount; i = i + 1 | 0) {
   let /** number */ c;
   try {
    if ((c = this.m_read__int()) == -1) {
     return i == 0 ? -1 : i;
    }
   } catch (__$jsexc) {
    let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
    if (IOException.$isInstance(__$exc)) {
     let e = /**@type {IOException}*/ (__$exc);
     if (i != 0) {
      return i;
     }
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(e);
    } else {
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
    }
   }
   $Arrays.$set(buffer, byteOffset + i | 0, Primitives.m_narrowIntToByte__int__int(c));
  }
  return byteCount;
 }
 /** @nodts */
 m_reset__void() {
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IOException.$create__());
 }
 /** @nodts @return {!$Long} */
 m_skip__long__long(/** !$Long */ byteCount) {
  if ($LongUtils.lessEquals(byteCount, $Long.fromInt(0))) {
   return $Long.fromInt(0);
  }
  let bSize = Primitives.m_narrowLongToInt__long__int(Math.m_min__long__long__long(Primitives.m_widenIntToLong__int__long(InputStream.f_MAX_SKIP_BUFFER_SIZE__java_io_InputStream_), byteCount));
  let b = /**@type {!Array<number>}*/ ($Arrays.$create([bSize], $byte));
  let skipped = $Long.fromInt(0);
  while ($LongUtils.less(skipped, byteCount)) {
   let toRead = Primitives.m_narrowLongToInt__long__int(Math.m_min__long__long__long($LongUtils.minus(byteCount, skipped), Primitives.m_widenIntToLong__int__long(b.length)));
   let readCount = this.m_read__arrayOf_byte__int__int__int(b, 0, toRead);
   if (readCount == -1) {
    break;
   }
   skipped = $LongUtils.plus(skipped, Primitives.m_widenIntToLong__int__long(readCount));
   if (readCount < toRead) {
    break;
   }
  }
  return skipped;
 }
 /** @nodts */
 static $clinit() {
  InputStream.$clinit = () =>{};
  InputStream.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputStream;
 }
 
 /** @nodts */
 static $loadModules() {
  IOException = goog.module.get('java.io.IOException$impl');
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  Math = goog.module.get('java.lang.Math$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $byte = goog.module.get('javaemul.internal.primitives.$byte$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
/**@const {number} @nodts*/
InputStream.f_MAX_SKIP_BUFFER_SIZE__java_io_InputStream_ = 4096;
Closeable.$markImplementor(InputStream);
$Util.$setClassMetadata(InputStream, 'java.io.InputStream');

exports = InputStream;

//# sourceMappingURL=InputStream.js.map
