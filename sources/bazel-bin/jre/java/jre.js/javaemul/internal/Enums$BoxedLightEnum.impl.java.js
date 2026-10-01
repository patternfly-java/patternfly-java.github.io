goog.module('javaemul.internal.Enums.BoxedLightEnum$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @implements {Serializable}
 */
class BoxedLightEnum extends j_l_Object {
 
 constructor(/** T */ value, /** Constructor */ ctor) {
  BoxedLightEnum.$clinit();
  super();
  /**@type {T} @nodts*/
  this.f_value__javaemul_internal_Enums_BoxedLightEnum;
  /**@type {Constructor}*/
  this.constructor;
  this.$ctor__javaemul_internal_Enums_BoxedLightEnum__java_lang_Object__javaemul_internal_Constructor__void(value, ctor);
 }
 /** @nodts */
 $ctor__javaemul_internal_Enums_BoxedLightEnum__java_lang_Object__javaemul_internal_Constructor__void(/** T */ value, /** Constructor */ ctor) {
  this.$ctor__java_lang_Object__void();
  this.f_value__javaemul_internal_Enums_BoxedLightEnum = value;
  this.constructor = ctor;
 }
 /** @override @return {?string} */
 toString() {
  return $Objects.m_toString__java_lang_Object__java_lang_String(this.f_value__javaemul_internal_Enums_BoxedLightEnum);
 }
 /** @nodts */
 static $clinit() {
  BoxedLightEnum.$clinit = () =>{};
  BoxedLightEnum.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedLightEnum;
 }
 
 /** @nodts */
 static $loadModules() {
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Serializable.$markImplementor(BoxedLightEnum);
$Util.$setClassMetadata(BoxedLightEnum, 'javaemul.internal.Enums$BoxedLightEnum');

exports = BoxedLightEnum;

//# sourceMappingURL=Enums$BoxedLightEnum.js.map
