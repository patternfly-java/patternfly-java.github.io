goog.module('org.patternfly.showcase.ApiDoc.Type$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Color = goog.forwardDeclare('org.patternfly.style.Color$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Type>}
 */
class Type extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_showcase_ApiDoc_Type;
  /**@type {Color} @nodts*/
  this.f_color__org_patternfly_showcase_ApiDoc_Type;
 }
 /** @nodts @return {!Type} */
 static $create__java_lang_String__int__java_lang_String__org_patternfly_style_Color(/** ?string */ $name, /** number */ $ordinal, /** ?string */ name, /** Color */ color) {
  let $instance = new Type();
  $instance.$ctor__org_patternfly_showcase_ApiDoc_Type__java_lang_String__int__java_lang_String__org_patternfly_style_Color__void($name, $ordinal, name, color);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ApiDoc_Type__java_lang_String__int__java_lang_String__org_patternfly_style_Color__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ name, /** Color */ color) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_name__org_patternfly_showcase_ApiDoc_Type = name;
  this.f_color__org_patternfly_showcase_ApiDoc_Type = color;
 }
 /** @nodts @return {!Type} */
 static m_valueOf__java_lang_String__org_patternfly_showcase_ApiDoc_Type(/** string */ name) {
  Type.$clinit();
  if ($Equality.$same(Type.f_namesToValuesMap__org_patternfly_showcase_ApiDoc_Type_, null)) {
   Type.f_namesToValuesMap__org_patternfly_showcase_ApiDoc_Type_ = (/**@type {Map<?string, !Type>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Type.m_values__arrayOf_org_patternfly_showcase_ApiDoc_Type())));
  }
  return /**@type {Type}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Type.f_namesToValuesMap__org_patternfly_showcase_ApiDoc_Type_));
 }
 /** @nodts @return {!Array<!Type>} */
 static m_values__arrayOf_org_patternfly_showcase_ApiDoc_Type() {
  Type.$clinit();
  return /**@type {!Array<!Type>}*/ ($Arrays.$stampType([Type.$static_chart__org_patternfly_showcase_ApiDoc_Type, Type.$static_component__org_patternfly_showcase_ApiDoc_Type, Type.$static_subcomponent__org_patternfly_showcase_ApiDoc_Type, Type.$static_layout__org_patternfly_showcase_ApiDoc_Type, Type.$static_modifier__org_patternfly_showcase_ApiDoc_Type, Type.$static_handler__org_patternfly_showcase_ApiDoc_Type, Type.$static_other__org_patternfly_showcase_ApiDoc_Type], Type));
 }
 /** @nodts @return {!Type} */
 static get f_chart__org_patternfly_showcase_ApiDoc_Type() {
  return (Type.$clinit(), Type.$static_chart__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts @return {!Type} */
 static get f_component__org_patternfly_showcase_ApiDoc_Type() {
  return (Type.$clinit(), Type.$static_component__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts @return {!Type} */
 static get f_subcomponent__org_patternfly_showcase_ApiDoc_Type() {
  return (Type.$clinit(), Type.$static_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts @return {!Type} */
 static get f_layout__org_patternfly_showcase_ApiDoc_Type() {
  return (Type.$clinit(), Type.$static_layout__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts @return {!Type} */
 static get f_modifier__org_patternfly_showcase_ApiDoc_Type() {
  return (Type.$clinit(), Type.$static_modifier__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts @return {!Type} */
 static get f_handler__org_patternfly_showcase_ApiDoc_Type() {
  return (Type.$clinit(), Type.$static_handler__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts @return {!Type} */
 static get f_other__org_patternfly_showcase_ApiDoc_Type() {
  return (Type.$clinit(), Type.$static_other__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  Type.$clinit = () =>{};
  Type.$loadModules();
  Enum.$clinit();
  Type.$static_chart__org_patternfly_showcase_ApiDoc_Type = Type.$create__java_lang_String__int__java_lang_String__org_patternfly_style_Color($Util.$makeEnumName('chart'), Type.$ordinal_chart__org_patternfly_showcase_ApiDoc_Type, 'Chart', Color.f_green__org_patternfly_style_Color);
  Type.$static_component__org_patternfly_showcase_ApiDoc_Type = Type.$create__java_lang_String__int__java_lang_String__org_patternfly_style_Color($Util.$makeEnumName('component'), Type.$ordinal_component__org_patternfly_showcase_ApiDoc_Type, 'Component', Color.f_blue__org_patternfly_style_Color);
  Type.$static_subcomponent__org_patternfly_showcase_ApiDoc_Type = Type.$create__java_lang_String__int__java_lang_String__org_patternfly_style_Color($Util.$makeEnumName('subcomponent'), Type.$ordinal_subcomponent__org_patternfly_showcase_ApiDoc_Type, 'Subcomponent', Color.f_teal__org_patternfly_style_Color);
  Type.$static_layout__org_patternfly_showcase_ApiDoc_Type = Type.$create__java_lang_String__int__java_lang_String__org_patternfly_style_Color($Util.$makeEnumName('layout'), Type.$ordinal_layout__org_patternfly_showcase_ApiDoc_Type, 'Layout', Color.f_red__org_patternfly_style_Color);
  Type.$static_modifier__org_patternfly_showcase_ApiDoc_Type = Type.$create__java_lang_String__int__java_lang_String__org_patternfly_style_Color($Util.$makeEnumName('modifier'), Type.$ordinal_modifier__org_patternfly_showcase_ApiDoc_Type, 'Modifier', Color.f_orange__org_patternfly_style_Color);
  Type.$static_handler__org_patternfly_showcase_ApiDoc_Type = Type.$create__java_lang_String__int__java_lang_String__org_patternfly_style_Color($Util.$makeEnumName('handler'), Type.$ordinal_handler__org_patternfly_showcase_ApiDoc_Type, 'Event handler', Color.f_purple__org_patternfly_style_Color);
  Type.$static_other__org_patternfly_showcase_ApiDoc_Type = Type.$create__java_lang_String__int__java_lang_String__org_patternfly_style_Color($Util.$makeEnumName('other'), Type.$ordinal_other__org_patternfly_showcase_ApiDoc_Type, 'Other', Color.f_grey__org_patternfly_style_Color);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Type;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Color = goog.module.get('org.patternfly.style.Color$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Type.$ordinal_chart__org_patternfly_showcase_ApiDoc_Type = 0;
/**@const {number} @nodts*/
Type.$ordinal_component__org_patternfly_showcase_ApiDoc_Type = 1;
/**@const {number} @nodts*/
Type.$ordinal_subcomponent__org_patternfly_showcase_ApiDoc_Type = 2;
/**@const {number} @nodts*/
Type.$ordinal_layout__org_patternfly_showcase_ApiDoc_Type = 3;
/**@const {number} @nodts*/
Type.$ordinal_modifier__org_patternfly_showcase_ApiDoc_Type = 4;
/**@const {number} @nodts*/
Type.$ordinal_handler__org_patternfly_showcase_ApiDoc_Type = 5;
/**@const {number} @nodts*/
Type.$ordinal_other__org_patternfly_showcase_ApiDoc_Type = 6;
/**@private {!Type} @nodts*/
Type.$static_chart__org_patternfly_showcase_ApiDoc_Type;
/**@private {!Type} @nodts*/
Type.$static_component__org_patternfly_showcase_ApiDoc_Type;
/**@private {!Type} @nodts*/
Type.$static_subcomponent__org_patternfly_showcase_ApiDoc_Type;
/**@private {!Type} @nodts*/
Type.$static_layout__org_patternfly_showcase_ApiDoc_Type;
/**@private {!Type} @nodts*/
Type.$static_modifier__org_patternfly_showcase_ApiDoc_Type;
/**@private {!Type} @nodts*/
Type.$static_handler__org_patternfly_showcase_ApiDoc_Type;
/**@private {!Type} @nodts*/
Type.$static_other__org_patternfly_showcase_ApiDoc_Type;
/**@type {Map<?string, !Type>} @nodts*/
Type.f_namesToValuesMap__org_patternfly_showcase_ApiDoc_Type_;
$Util.$setClassMetadataForEnum(Type, 'org.patternfly.showcase.ApiDoc$Type');

exports = Type;

//# sourceMappingURL=ApiDoc$Type.js.map
