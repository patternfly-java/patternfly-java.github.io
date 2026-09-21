goog.module('java.lang.IncompatibleClassChangeError$impl');

const j_l_Error = goog.require('java.lang.Error$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class IncompatibleClassChangeError extends j_l_Error {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!IncompatibleClassChangeError} */
 static $create__() {
  IncompatibleClassChangeError.$clinit();
  let $instance = new IncompatibleClassChangeError();
  $instance.$ctor__java_lang_IncompatibleClassChangeError__void();
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_IncompatibleClassChangeError__void() {
  this.$ctor__java_lang_Error__void();
 }
 /** @nodts */
 static $clinit() {
  IncompatibleClassChangeError.$clinit = () =>{};
  IncompatibleClassChangeError.$loadModules();
  j_l_Error.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IncompatibleClassChangeError;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(IncompatibleClassChangeError, 'java.lang.IncompatibleClassChangeError');

exports = IncompatibleClassChangeError;

//# sourceMappingURL=IncompatibleClassChangeError.js.map
