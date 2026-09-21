goog.module('javaemul.internal.Enums$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ClassCastException = goog.forwardDeclare('java.lang.ClassCastException$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');
let Constructor_$Overlay = goog.forwardDeclare('javaemul.internal.Constructor.$Overlay$impl');
let BoxedComparableLightEnum = goog.forwardDeclare('javaemul.internal.Enums.BoxedComparableLightEnum$impl');
let BoxedLightEnum = goog.forwardDeclare('javaemul.internal.Enums.BoxedLightEnum$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Enums extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Enums} */
 static $create__() {
  Enums.$clinit();
  let $instance = new Enums();
  $instance.$ctor__javaemul_internal_Enums__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Enums__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @template T @return {Map<?string, T>} */
 static m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(/** Array<T> */ values) {
  Enums.$clinit();
  let map = /**@type {!Map<?string, T>}*/ (new Map());
  for (let i = 0; i < values.length; i = i + 1 | 0) {
   let name = (/**@type {!Enum<T>}*/ (values[i])).name();
   map.set(name, values[i]);
  }
  return map;
 }
 /** @nodts @template V @return {V} */
 static m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(/** ?string */ name, /** Map<?string, V> */ map) {
  Enums.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(name);
  let enumValue = map.get(name);
  if ($Equality.$same(enumValue, null)) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__());
  }
  return enumValue;
 }
 /** @nodts @template T @return {BoxedLightEnum<T>} */
 static m_box__java_lang_Object__javaemul_internal_Constructor__javaemul_internal_Enums_BoxedLightEnum(/** T */ value, /** Constructor */ ctor) {
  Enums.$clinit();
  if ($Equality.$same(value, null)) {
   return null;
  }
  InternalPreconditions.m_checkArgument__boolean__void(!BoxedLightEnum.$isInstance(value));
  return /**@type {BoxedLightEnum<T>}*/ (Constructor_$Overlay.m_cache__$devirt__javaemul_internal_Constructor__java_lang_String__javaemul_internal_Constructor_Supplier__java_lang_Object(ctor, '$$enumValues/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value), /**  @return {BoxedLightEnum<T>}*/ (() =>{
   return /**@type {!BoxedLightEnum<T>}*/ (new BoxedLightEnum(value, ctor));
  })));
 }
 /** @nodts @template T @return {BoxedComparableLightEnum<T>} */
 static m_boxComparable__java_lang_Object__javaemul_internal_Constructor__javaemul_internal_Enums_BoxedComparableLightEnum(/** T */ value, /** Constructor */ ctor) {
  Enums.$clinit();
  if ($Equality.$same(value, null)) {
   return null;
  }
  InternalPreconditions.m_checkArgument__boolean__void(!BoxedLightEnum.$isInstance(value));
  return /**@type {BoxedComparableLightEnum<T>}*/ (Constructor_$Overlay.m_cache__$devirt__javaemul_internal_Constructor__java_lang_String__javaemul_internal_Constructor_Supplier__java_lang_Object(ctor, '$$enumValues/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value), /**  @return {BoxedComparableLightEnum<T>}*/ (() =>{
   return /**@type {!BoxedComparableLightEnum<T>}*/ (new BoxedComparableLightEnum(value, ctor));
  })));
 }
 /** @nodts @return {*} */
 static m_unbox__java_lang_Object__javaemul_internal_Constructor__java_lang_Object(/** * */ object, /** Constructor */ ctor) {
  Enums.$clinit();
  if ($Equality.$same(object, null)) {
   return null;
  }
  if (InternalPreconditions.m_isTypeChecked__boolean()) {
   if (!Enums.m_isInstanceOf__java_lang_Object__javaemul_internal_Constructor__boolean(object, ctor)) {
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(ClassCastException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String($Objects.m_getClass__java_lang_Object__java_lang_Class(object).m_getName__java_lang_String()) + ' cannot be cast to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Constructor_$Overlay.m_getClassName__$devirt__javaemul_internal_Constructor__java_lang_String(ctor))));
   }
  }
  let boxedEnum = /**@type {BoxedLightEnum<*>}*/ ($Casts.$to(object, BoxedLightEnum));
  return boxedEnum.f_value__javaemul_internal_Enums_BoxedLightEnum;
 }
 /** @nodts @return {boolean} */
 static m_isInstanceOf__java_lang_Object__javaemul_internal_Constructor__boolean(/** * */ instance, /** Constructor */ ctor) {
  Enums.$clinit();
  return BoxedLightEnum.$isInstance(instance) && $Equality.$same((/**@type {BoxedLightEnum}*/ ($Casts.$to(instance, BoxedLightEnum))).constructor, ctor);
 }
 /** @nodts @return {boolean} */
 static m_equals__java_lang_Object__java_lang_Object__boolean(/** * */ instance, /** * */ other) {
  Enums.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(instance);
  return $Equality.$same(instance, other);
 }
 /** @nodts @return {number} */
 static m_compareTo__java_lang_Object__java_lang_Object__int(/** * */ instance, /** * */ other) {
  Enums.$clinit();
  return Double.m_compareTo__java_lang_Double__java_lang_Double__int(/**@type {?number}*/ ($Casts.$to(instance, Double)), /**@type {?number}*/ ($Casts.$to(other, Double)));
 }
 /** @nodts */
 static $clinit() {
  Enums.$clinit = () =>{};
  Enums.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Enums;
 }
 
 /** @nodts */
 static $loadModules() {
  ClassCastException = goog.module.get('java.lang.ClassCastException$impl');
  Double = goog.module.get('java.lang.Double$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Constructor_$Overlay = goog.module.get('javaemul.internal.Constructor.$Overlay$impl');
  BoxedComparableLightEnum = goog.module.get('javaemul.internal.Enums.BoxedComparableLightEnum$impl');
  BoxedLightEnum = goog.module.get('javaemul.internal.Enums.BoxedLightEnum$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Enums, 'javaemul.internal.Enums');

exports = Enums;

//# sourceMappingURL=Enums.js.map
