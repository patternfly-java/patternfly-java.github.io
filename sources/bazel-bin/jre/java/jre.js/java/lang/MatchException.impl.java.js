goog.module('java.lang.MatchException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class MatchException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'MatchException()'.
 /** @nodts @return {!MatchException} */
 static $create__() {
  MatchException.$clinit();
  let $instance = new MatchException();
  $instance.$ctor__java_lang_MatchException__void();
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'MatchException()'.
 /** @nodts */
 $ctor__java_lang_MatchException__void() {
  this.$ctor__java_lang_MatchException__java_lang_String__java_lang_Throwable__void('', null);
 }
 //Factory method corresponding to constructor 'MatchException(String, Throwable)'.
 /** @nodts @return {!MatchException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  MatchException.$clinit();
  let $instance = new MatchException();
  $instance.$ctor__java_lang_MatchException__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'MatchException(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_MatchException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 /** @nodts */
 static $clinit() {
  MatchException.$clinit = () =>{};
  MatchException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MatchException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(MatchException, 'java.lang.MatchException');

exports = MatchException;

//# sourceMappingURL=MatchException.js.map
