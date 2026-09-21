goog.module('java.lang.runtime.ObjectMethods$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ObjectMethods extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {*} */
 m_bootstrap__arrayOf_java_lang_Object__java_lang_Object(/** Array<*> */ args) {
  return null;
 }
 /** @nodts @return {!ObjectMethods} */
 static $create__() {
  let $instance = new ObjectMethods();
  $instance.$ctor__java_lang_runtime_ObjectMethods__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_runtime_ObjectMethods__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  ObjectMethods.$clinit = () =>{};
  ObjectMethods.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ObjectMethods;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ObjectMethods, 'java.lang.runtime.ObjectMethods');

exports = ObjectMethods;

//# sourceMappingURL=ObjectMethods.js.map
