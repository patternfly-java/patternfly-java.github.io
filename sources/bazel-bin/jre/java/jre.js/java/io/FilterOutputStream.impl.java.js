goog.module('java.io.FilterOutputStream$impl');

const OutputStream = goog.require('java.io.OutputStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOException = goog.forwardDeclare('java.io.IOException$impl');
let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class FilterOutputStream extends OutputStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OutputStream} @nodts*/
  this.f_out__java_io_FilterOutputStream;
 }
 /** @nodts @return {!FilterOutputStream} */
 static $create__java_io_OutputStream(/** OutputStream */ out) {
  FilterOutputStream.$clinit();
  let $instance = new FilterOutputStream();
  $instance.$ctor__java_io_FilterOutputStream__java_io_OutputStream__void(out);
  return $instance;
 }
 /** @nodts */
 $ctor__java_io_FilterOutputStream__java_io_OutputStream__void(/** OutputStream */ out) {
  this.$ctor__java_io_OutputStream__void();
  this.f_out__java_io_FilterOutputStream = out;
 }
 /** @override @nodts */
 m_close__void() {
  let /** Throwable */ thrown = null;
  try {
   this.m_flush__void();
  } catch (__$jsexc) {
   let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
   {
    let e = /**@type {Throwable}*/ (__$exc);
    thrown = e;
   }
  }
  try {
   this.f_out__java_io_FilterOutputStream.m_close__void();
  } catch (__$jsexc_1) {
   let __$exc_1 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_1);
   {
    let e_1 = /**@type {Throwable}*/ (__$exc_1);
    if ($Equality.$same(thrown, null)) {
     thrown = e_1;
    }
   }
  }
  if (!$Equality.$same(thrown, null)) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IOException.$create__java_lang_Throwable(thrown));
  }
 }
 /** @override @nodts */
 m_flush__void() {
  this.f_out__java_io_FilterOutputStream.m_flush__void();
 }
 /** @override @nodts */
 m_write__arrayOf_byte__int__int__void(/** Array<number> */ buffer, /** number */ offset, /** number */ length) {
  IOUtils.m_checkOffsetAndCount__arrayOf_byte__int__int__void(buffer, offset, length);
  for (let i = 0; i < length; i = i + 1 | 0) {
   this.m_write__int__void(buffer[offset + i | 0]);
  }
 }
 /** @override @nodts */
 m_write__int__void(/** number */ oneByte) {
  this.f_out__java_io_FilterOutputStream.m_write__int__void(oneByte);
 }
 /** @nodts */
 static $clinit() {
  FilterOutputStream.$clinit = () =>{};
  FilterOutputStream.$loadModules();
  OutputStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterOutputStream;
 }
 
 /** @nodts */
 static $loadModules() {
  IOException = goog.module.get('java.io.IOException$impl');
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(FilterOutputStream, 'java.io.FilterOutputStream');

exports = FilterOutputStream;

//# sourceMappingURL=FilterOutputStream.js.map
