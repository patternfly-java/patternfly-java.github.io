goog.module('javaemul.internal.Enums.BoxedComparableLightEnum$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const BoxedLightEnum = goog.require('javaemul.internal.Enums.BoxedLightEnum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ClassCastException = goog.forwardDeclare('java.lang.ClassCastException$impl');
let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');
let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BoxedLightEnum<T>}
 * @implements {Comparable<BoxedComparableLightEnum<T>>}
 */
class BoxedComparableLightEnum extends BoxedLightEnum {
 
 constructor(/** T */ value, /** Constructor */ ctor) {
  BoxedComparableLightEnum.$clinit();
  super(value, ctor);
  this.$ctor__javaemul_internal_Enums_BoxedComparableLightEnum__java_lang_Object__javaemul_internal_Constructor__void(value, ctor);
 }
 /** @nodts */
 $ctor__javaemul_internal_Enums_BoxedComparableLightEnum__java_lang_Object__javaemul_internal_Constructor__void(/** T */ value, /** Constructor */ ctor) {}
 /** @nodts @return {number} */
 m_compareTo__javaemul_internal_Enums_BoxedComparableLightEnum__int(/** BoxedComparableLightEnum<T> */ o) {
  if (!$Equality.$same(this.constructor, o.constructor)) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(ClassCastException.$create__());
  }
  return Enums.m_compareTo__java_lang_Object__java_lang_Object__int(this.f_value__javaemul_internal_Enums_BoxedLightEnum, o.f_value__javaemul_internal_Enums_BoxedLightEnum);
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** BoxedComparableLightEnum<T> */ arg0) {
  return this.m_compareTo__javaemul_internal_Enums_BoxedComparableLightEnum__int(/**@type {BoxedComparableLightEnum<T>}*/ ($Casts.$to(arg0, BoxedComparableLightEnum)));
 }
 /** @nodts */
 static $clinit() {
  BoxedComparableLightEnum.$clinit = () =>{};
  BoxedComparableLightEnum.$loadModules();
  BoxedLightEnum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedComparableLightEnum;
 }
 
 /** @nodts */
 static $loadModules() {
  ClassCastException = goog.module.get('java.lang.ClassCastException$impl');
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Comparable.$markImplementor(BoxedComparableLightEnum);
$Util.$setClassMetadata(BoxedComparableLightEnum, 'javaemul.internal.Enums$BoxedComparableLightEnum');

exports = BoxedComparableLightEnum;

//# sourceMappingURL=Enums$BoxedComparableLightEnum.js.map
