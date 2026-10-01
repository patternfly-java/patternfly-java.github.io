goog.module('javaemul.internal.Ref$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 * @template T
 */
class Ref extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {T} @nodts*/
  this.f_element__javaemul_internal_Ref;
 }
 /** @nodts @template T @return {!Ref<T>} */
 static $create__java_lang_Object(/** T */ element) {
  Ref.$clinit();
  let $instance = new Ref();
  $instance.$ctor__javaemul_internal_Ref__java_lang_Object__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Ref__java_lang_Object__void(/** T */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__javaemul_internal_Ref = element;
 }
 /** @nodts */
 static $clinit() {
  Ref.$clinit = () =>{};
  Ref.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Ref;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(Ref, 'javaemul.internal.Ref');

exports = Ref;

//# sourceMappingURL=Ref.js.map
