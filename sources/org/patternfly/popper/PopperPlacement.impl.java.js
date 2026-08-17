goog.module('org.patternfly.popper.PopperPlacement$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let IntFunction = goog.forwardDeclare('java.util.function.IntFunction$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @extends {Enum<PopperPlacement>}
 * @implements {TypedModifier}
 * @deprecated
 */
class PopperPlacement extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_popper_PopperPlacement_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_popper_PopperPlacement_;
 }
 /** @nodts @return {PopperPlacement} */
 static m_of__java_lang_String__org_patternfly_popper_PopperPlacement(/** ?string */ value) {
  PopperPlacement.$clinit();
  for (let $array = PopperPlacement.m_values__arrayOf_org_patternfly_popper_PopperPlacement(), $index = 0; $index < $array.length; $index++) {
   let placement = $array[$index];
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(placement.f_value__org_patternfly_popper_PopperPlacement_, value)) {
     return placement;
    }
   }
  }
  return null;
 }
 /** @nodts @return {!PopperPlacement} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ modifier) {
  let $instance = new PopperPlacement();
  $instance.$ctor__org_patternfly_popper_PopperPlacement__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, value, modifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_popper_PopperPlacement__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ modifier) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_popper_PopperPlacement_ = value;
  this.f_modifier__org_patternfly_popper_PopperPlacement_ = modifier;
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_popper_PopperPlacement_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_popper_PopperPlacement_;
 }
 /** @nodts @return {!PopperPlacement} */
 static m_valueOf__java_lang_String__org_patternfly_popper_PopperPlacement(/** string */ name) {
  PopperPlacement.$clinit();
  if ($Equality.$same(PopperPlacement.f_namesToValuesMap__org_patternfly_popper_PopperPlacement_, null)) {
   PopperPlacement.f_namesToValuesMap__org_patternfly_popper_PopperPlacement_ = (/**@type {Map<?string, !PopperPlacement>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(PopperPlacement.m_values__arrayOf_org_patternfly_popper_PopperPlacement())));
  }
  return /**@type {PopperPlacement}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, PopperPlacement.f_namesToValuesMap__org_patternfly_popper_PopperPlacement_));
 }
 /** @nodts @return {!Array<!PopperPlacement>} */
 static m_values__arrayOf_org_patternfly_popper_PopperPlacement() {
  PopperPlacement.$clinit();
  return /**@type {!Array<!PopperPlacement>}*/ ($Arrays.$stampType([PopperPlacement.$static_auto__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_top__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_topStart__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_topEnd__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_bottom__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_bottomStart__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_bottomEnd__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_left__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_leftStart__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_leftEnd__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_right__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_rightStart__org_patternfly_popper_PopperPlacement, PopperPlacement.$static_rightEnd__org_patternfly_popper_PopperPlacement], PopperPlacement));
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_auto__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_auto__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_top__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_top__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_topStart__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_topStart__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_topEnd__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_topEnd__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_bottom__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_bottom__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_bottomStart__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_bottomStart__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_bottomEnd__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_bottomEnd__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_left__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_left__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_leftStart__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_leftStart__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_leftEnd__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_leftEnd__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_right__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_right__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_rightStart__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_rightStart__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {!PopperPlacement} */
 static get f_rightEnd__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_rightEnd__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts @return {Array<?string>} */
 static get f_modifiers__org_patternfly_popper_PopperPlacement() {
  return (PopperPlacement.$clinit(), PopperPlacement.$static_modifiers__org_patternfly_popper_PopperPlacement);
 }
 /** @nodts */
 static $clinit() {
  PopperPlacement.$clinit = () =>{};
  PopperPlacement.$loadModules();
  Enum.$clinit();
  PopperPlacement.$static_auto__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('auto'), PopperPlacement.$ordinal_auto__org_patternfly_popper_PopperPlacement, 'auto', '');
  PopperPlacement.$static_top__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('top'), PopperPlacement.$ordinal_top__org_patternfly_popper_PopperPlacement, 'top', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes));
  PopperPlacement.$static_topStart__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('topStart'), PopperPlacement.$ordinal_topStart__org_patternfly_popper_PopperPlacement, 'top-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes)) + '-left');
  PopperPlacement.$static_topEnd__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('topEnd'), PopperPlacement.$ordinal_topEnd__org_patternfly_popper_PopperPlacement, 'top-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes)) + '-right');
  PopperPlacement.$static_bottom__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('bottom'), PopperPlacement.$ordinal_bottom__org_patternfly_popper_PopperPlacement, 'bottom', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes));
  PopperPlacement.$static_bottomStart__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('bottomStart'), PopperPlacement.$ordinal_bottomStart__org_patternfly_popper_PopperPlacement, 'bottom-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes)) + '-left');
  PopperPlacement.$static_bottomEnd__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('bottomEnd'), PopperPlacement.$ordinal_bottomEnd__org_patternfly_popper_PopperPlacement, 'bottom-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes)) + '-right');
  PopperPlacement.$static_left__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('left'), PopperPlacement.$ordinal_left__org_patternfly_popper_PopperPlacement, 'left', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes));
  PopperPlacement.$static_leftStart__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('leftStart'), PopperPlacement.$ordinal_leftStart__org_patternfly_popper_PopperPlacement, 'left-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes)) + '-top');
  PopperPlacement.$static_leftEnd__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('leftEnd'), PopperPlacement.$ordinal_leftEnd__org_patternfly_popper_PopperPlacement, 'left-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes)) + '-bottom');
  PopperPlacement.$static_right__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('right'), PopperPlacement.$ordinal_right__org_patternfly_popper_PopperPlacement, 'right', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes));
  PopperPlacement.$static_rightStart__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('rightStart'), PopperPlacement.$ordinal_rightStart__org_patternfly_popper_PopperPlacement, 'right-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes)) + '-bottom');
  PopperPlacement.$static_rightEnd__org_patternfly_popper_PopperPlacement = PopperPlacement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('rightEnd'), PopperPlacement.$ordinal_rightEnd__org_patternfly_popper_PopperPlacement, 'right-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes)) + '-bottom');
  PopperPlacement.$static_modifiers__org_patternfly_popper_PopperPlacement = (/**@type {Array<?string>}*/ ($Arrays.$castTo((/**@type {Stream<?string>}*/ ((/**@type {Stream<PopperPlacement>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(PopperPlacement.m_values__arrayOf_org_patternfly_popper_PopperPlacement()))).m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** PopperPlacement */ p) =>{
   let p_1 = /**@type {PopperPlacement}*/ ($Casts.$to(p, PopperPlacement));
   return !$Equality.$same(p_1, PopperPlacement.$static_auto__org_patternfly_popper_PopperPlacement);
  }))).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** PopperPlacement */ p_2) =>{
   let p_3 = /**@type {PopperPlacement}*/ ($Casts.$to(p_2, PopperPlacement));
   return p_3.f_modifier__org_patternfly_popper_PopperPlacement_;
  }))))).m_toArray__java_util_function_IntFunction__arrayOf_java_lang_Object(IntFunction.$adapt(/**  @return {Array<?string>}*/ ((/** number */ arg0) =>{
   return /**@type {!Array<?string>}*/ ($Arrays.$create([arg0], j_l_String));
  }))), j_l_String, 1)));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperPlacement;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  IntFunction = goog.module.get('java.util.function.IntFunction$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
PopperPlacement.$ordinal_auto__org_patternfly_popper_PopperPlacement = 0;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_top__org_patternfly_popper_PopperPlacement = 1;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_topStart__org_patternfly_popper_PopperPlacement = 2;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_topEnd__org_patternfly_popper_PopperPlacement = 3;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_bottom__org_patternfly_popper_PopperPlacement = 4;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_bottomStart__org_patternfly_popper_PopperPlacement = 5;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_bottomEnd__org_patternfly_popper_PopperPlacement = 6;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_left__org_patternfly_popper_PopperPlacement = 7;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_leftStart__org_patternfly_popper_PopperPlacement = 8;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_leftEnd__org_patternfly_popper_PopperPlacement = 9;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_right__org_patternfly_popper_PopperPlacement = 10;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_rightStart__org_patternfly_popper_PopperPlacement = 11;
/**@const {number} @nodts*/
PopperPlacement.$ordinal_rightEnd__org_patternfly_popper_PopperPlacement = 12;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_auto__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_top__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_topStart__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_topEnd__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_bottom__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_bottomStart__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_bottomEnd__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_left__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_leftStart__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_leftEnd__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_right__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_rightStart__org_patternfly_popper_PopperPlacement;
/**@private {!PopperPlacement} @nodts*/
PopperPlacement.$static_rightEnd__org_patternfly_popper_PopperPlacement;
/**@private {Array<?string>} @nodts*/
PopperPlacement.$static_modifiers__org_patternfly_popper_PopperPlacement;
/**@type {Map<?string, !PopperPlacement>} @nodts*/
PopperPlacement.f_namesToValuesMap__org_patternfly_popper_PopperPlacement_;
TypedModifier.$markImplementor(PopperPlacement);
$Util.$setClassMetadataForEnum(PopperPlacement, 'org.patternfly.popper.PopperPlacement');

exports = PopperPlacement;

//# sourceMappingURL=PopperPlacement.js.map
