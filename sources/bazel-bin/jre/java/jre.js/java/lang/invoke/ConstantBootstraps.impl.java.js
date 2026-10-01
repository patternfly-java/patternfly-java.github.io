goog.module('java.lang.invoke.ConstantBootstraps$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');

class ConstantBootstraps extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ConstantBootstraps} */
 static $create__() {
  ConstantBootstraps.$clinit();
  let $instance = new ConstantBootstraps();
  $instance.$ctor__java_lang_invoke_ConstantBootstraps__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_ConstantBootstraps__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {*} */
 static m_invoke__arrayOf_java_lang_Object__java_lang_Object(/** Array<*> */ args) {
  ConstantBootstraps.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(UnsupportedOperationException.$create__());
 }
 /** @nodts */
 static $clinit() {
  ConstantBootstraps.$clinit = () =>{};
  ConstantBootstraps.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConstantBootstraps;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
 }
}
$Util.$setClassMetadata(ConstantBootstraps, 'java.lang.invoke.ConstantBootstraps');

exports = ConstantBootstraps;

//# sourceMappingURL=ConstantBootstraps.js.map
