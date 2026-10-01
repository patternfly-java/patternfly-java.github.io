goog.module('java.lang.JsException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class JsException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'JsException(String)'.
 /** @nodts @return {!JsException} */
 static $create__java_lang_String(/** ?string */ msg) {
  JsException.$clinit();
  let $instance = new JsException();
  $instance.$ctor__java_lang_JsException__java_lang_String__void(msg);
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'JsException(String)'.
 /** @nodts */
 $ctor__java_lang_JsException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(msg);
 }
 //Factory method corresponding to constructor 'JsException()'.
 /** @nodts @return {!JsException} */
 static $create__() {
  JsException.$clinit();
  let $instance = new JsException();
  $instance.$ctor__java_lang_JsException__void();
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'JsException()'.
 /** @nodts */
 $ctor__java_lang_JsException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 /** @nodts */
 static $clinit() {
  JsException.$clinit = () =>{};
  JsException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(JsException, 'java.lang.JsException');

exports = JsException;

//# sourceMappingURL=JsException.js.map
