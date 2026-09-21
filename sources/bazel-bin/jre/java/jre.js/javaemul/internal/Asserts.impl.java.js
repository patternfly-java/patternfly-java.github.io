goog.module('javaemul.internal.Asserts$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AssertionError = goog.forwardDeclare('java.lang.AssertionError$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class Asserts extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Asserts} */
 static $create__() {
  Asserts.$clinit();
  let $instance = new Asserts();
  $instance.$ctor__javaemul_internal_Asserts__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Asserts__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 static m_areWasmAssertionsEnabled__boolean() {
  Asserts.$clinit();
  return Asserts.f_WASM_ASSERTIONS_ENABLED__javaemul_internal_Asserts_;
 }
 /** @nodts */
 static $assert__boolean__void(/** boolean */ condition) {
  Asserts.$clinit();
  if (!condition) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(AssertionError.$create__());
  }
 }
 /** @nodts */
 static $assertWithMessage__boolean__java_lang_Object__void(/** boolean */ condition, /** * */ message) {
  Asserts.$clinit();
  if (!condition) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(AssertionError.$create__java_lang_Object(message));
  }
 }
 /** @nodts */
 static $clinit() {
  Asserts.$clinit = () =>{};
  Asserts.$loadModules();
  j_l_Object.$clinit();
  Asserts.f_WASM_ASSERTIONS_ENABLED__javaemul_internal_Asserts_ = $Equality.$same($Util.$getDefine('J2WASM_DEBUG'), 'TRUE');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Asserts;
 }
 
 /** @nodts */
 static $loadModules() {
  AssertionError = goog.module.get('java.lang.AssertionError$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
/**@type {boolean} @nodts*/
Asserts.f_WASM_ASSERTIONS_ENABLED__javaemul_internal_Asserts_ = false;
$Util.$setClassMetadata(Asserts, 'javaemul.internal.Asserts');

exports = Asserts;

//# sourceMappingURL=Asserts.js.map
