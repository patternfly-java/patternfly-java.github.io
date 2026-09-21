goog.module('java.lang.invoke.TypeDescriptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class TypeDescriptor extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TypeDescriptor} */
 static $create__() {
  TypeDescriptor.$clinit();
  let $instance = new TypeDescriptor();
  $instance.$ctor__java_lang_invoke_TypeDescriptor__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_TypeDescriptor__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  TypeDescriptor.$clinit = () =>{};
  TypeDescriptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TypeDescriptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(TypeDescriptor, 'java.lang.invoke.TypeDescriptor');

exports = TypeDescriptor;

//# sourceMappingURL=TypeDescriptor.js.map
