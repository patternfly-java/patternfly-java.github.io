goog.module('java.lang.constant.ClassDesc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');

/**
 * @interface
 */
class ClassDesc {
 /** @nodts @return {ClassDesc} */
 static m_of__java_lang_String__java_lang_constant_ClassDesc(/** ?string */ name) {
  ClassDesc.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(UnsupportedOperationException.$create__());
 }
 /** @nodts */
 static $clinit() {
  ClassDesc.$clinit = () =>{};
  ClassDesc.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_constant_ClassDesc = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_constant_ClassDesc;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
 }
}
ClassDesc.$markImplementor(/**@type {Function}*/ (ClassDesc));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ClassDesc), 'java.lang.constant.ClassDesc');

exports = ClassDesc;

//# sourceMappingURL=ClassDesc.js.map
