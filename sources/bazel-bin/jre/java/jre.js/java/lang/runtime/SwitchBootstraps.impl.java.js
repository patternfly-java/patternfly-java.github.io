goog.module('java.lang.runtime.SwitchBootstraps$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let CallSite = goog.forwardDeclare('java.lang.invoke.CallSite$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');

class SwitchBootstraps extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SwitchBootstraps} */
 static $create__() {
  SwitchBootstraps.$clinit();
  let $instance = new SwitchBootstraps();
  $instance.$ctor__java_lang_runtime_SwitchBootstraps__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_runtime_SwitchBootstraps__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {CallSite} */
 static m_typeSwitch__arrayOf_java_lang_Object__java_lang_invoke_CallSite(/** Array<*> */ args) {
  SwitchBootstraps.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(UnsupportedOperationException.$create__());
 }
 /** @nodts @return {CallSite} */
 static m_enumSwitch__arrayOf_java_lang_Object__java_lang_invoke_CallSite(/** Array<*> */ args) {
  SwitchBootstraps.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(UnsupportedOperationException.$create__());
 }
 /** @nodts */
 static $clinit() {
  SwitchBootstraps.$clinit = () =>{};
  SwitchBootstraps.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SwitchBootstraps;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
 }
}
$Util.$setClassMetadata(SwitchBootstraps, 'java.lang.runtime.SwitchBootstraps');

exports = SwitchBootstraps;

//# sourceMappingURL=SwitchBootstraps.js.map
