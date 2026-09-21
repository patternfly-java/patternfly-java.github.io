goog.module('org.patternfly.component.toolbar.ToolbarGroupType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<ToolbarGroupType>}
 * @implements {TypedModifier}
 */
class ToolbarGroupType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_toolbar_ToolbarGroupType_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_toolbar_ToolbarGroupType_;
 }
 /** @nodts @return {!ToolbarGroupType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ToolbarGroupType();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarGroupType__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarGroupType__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_toolbar_ToolbarGroupType_ = value;
  this.f_modifier__org_patternfly_component_toolbar_ToolbarGroupType_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_toolbar_ToolbarGroupType_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_toolbar_ToolbarGroupType_;
 }
 /** @nodts @return {!ToolbarGroupType} */
 static m_valueOf__java_lang_String__org_patternfly_component_toolbar_ToolbarGroupType(/** string */ name) {
  ToolbarGroupType.$clinit();
  if ($Equality.$same(ToolbarGroupType.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarGroupType_, null)) {
   ToolbarGroupType.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarGroupType_ = (/**@type {Map<?string, !ToolbarGroupType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ToolbarGroupType.m_values__arrayOf_org_patternfly_component_toolbar_ToolbarGroupType())));
  }
  return /**@type {ToolbarGroupType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ToolbarGroupType.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarGroupType_));
 }
 /** @nodts @return {!Array<!ToolbarGroupType>} */
 static m_values__arrayOf_org_patternfly_component_toolbar_ToolbarGroupType() {
  ToolbarGroupType.$clinit();
  return /**@type {!Array<!ToolbarGroupType>}*/ ($Arrays.$stampType([ToolbarGroupType.$static_actionGroup__org_patternfly_component_toolbar_ToolbarGroupType, ToolbarGroupType.$static_actionGroupPlain__org_patternfly_component_toolbar_ToolbarGroupType, ToolbarGroupType.$static_filterGroup__org_patternfly_component_toolbar_ToolbarGroupType, ToolbarGroupType.$static_buttonGroup__org_patternfly_component_toolbar_ToolbarGroupType], ToolbarGroupType));
 }
 /** @nodts @return {!ToolbarGroupType} */
 static get f_actionGroup__org_patternfly_component_toolbar_ToolbarGroupType() {
  return (ToolbarGroupType.$clinit(), ToolbarGroupType.$static_actionGroup__org_patternfly_component_toolbar_ToolbarGroupType);
 }
 /** @nodts @return {!ToolbarGroupType} */
 static get f_actionGroupPlain__org_patternfly_component_toolbar_ToolbarGroupType() {
  return (ToolbarGroupType.$clinit(), ToolbarGroupType.$static_actionGroupPlain__org_patternfly_component_toolbar_ToolbarGroupType);
 }
 /** @nodts @return {!ToolbarGroupType} */
 static get f_filterGroup__org_patternfly_component_toolbar_ToolbarGroupType() {
  return (ToolbarGroupType.$clinit(), ToolbarGroupType.$static_filterGroup__org_patternfly_component_toolbar_ToolbarGroupType);
 }
 /** @nodts @return {!ToolbarGroupType} */
 static get f_buttonGroup__org_patternfly_component_toolbar_ToolbarGroupType() {
  return (ToolbarGroupType.$clinit(), ToolbarGroupType.$static_buttonGroup__org_patternfly_component_toolbar_ToolbarGroupType);
 }
 /** @nodts */
 static $clinit() {
  ToolbarGroupType.$clinit = () =>{};
  ToolbarGroupType.$loadModules();
  Enum.$clinit();
  ToolbarGroupType.$static_actionGroup__org_patternfly_component_toolbar_ToolbarGroupType = ToolbarGroupType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('actionGroup'), ToolbarGroupType.$ordinal_actionGroup__org_patternfly_component_toolbar_ToolbarGroupType, 'action-group');
  ToolbarGroupType.$static_actionGroupPlain__org_patternfly_component_toolbar_ToolbarGroupType = ToolbarGroupType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('actionGroupPlain'), ToolbarGroupType.$ordinal_actionGroupPlain__org_patternfly_component_toolbar_ToolbarGroupType, 'action-group-plain');
  ToolbarGroupType.$static_filterGroup__org_patternfly_component_toolbar_ToolbarGroupType = ToolbarGroupType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('filterGroup'), ToolbarGroupType.$ordinal_filterGroup__org_patternfly_component_toolbar_ToolbarGroupType, 'filter-group');
  ToolbarGroupType.$static_buttonGroup__org_patternfly_component_toolbar_ToolbarGroupType = ToolbarGroupType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('buttonGroup'), ToolbarGroupType.$ordinal_buttonGroup__org_patternfly_component_toolbar_ToolbarGroupType, 'button-group');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarGroupType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ToolbarGroupType.$ordinal_actionGroup__org_patternfly_component_toolbar_ToolbarGroupType = 0;
/**@const {number} @nodts*/
ToolbarGroupType.$ordinal_actionGroupPlain__org_patternfly_component_toolbar_ToolbarGroupType = 1;
/**@const {number} @nodts*/
ToolbarGroupType.$ordinal_filterGroup__org_patternfly_component_toolbar_ToolbarGroupType = 2;
/**@const {number} @nodts*/
ToolbarGroupType.$ordinal_buttonGroup__org_patternfly_component_toolbar_ToolbarGroupType = 3;
/**@private {!ToolbarGroupType} @nodts*/
ToolbarGroupType.$static_actionGroup__org_patternfly_component_toolbar_ToolbarGroupType;
/**@private {!ToolbarGroupType} @nodts*/
ToolbarGroupType.$static_actionGroupPlain__org_patternfly_component_toolbar_ToolbarGroupType;
/**@private {!ToolbarGroupType} @nodts*/
ToolbarGroupType.$static_filterGroup__org_patternfly_component_toolbar_ToolbarGroupType;
/**@private {!ToolbarGroupType} @nodts*/
ToolbarGroupType.$static_buttonGroup__org_patternfly_component_toolbar_ToolbarGroupType;
/**@type {Map<?string, !ToolbarGroupType>} @nodts*/
ToolbarGroupType.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarGroupType_;
TypedModifier.$markImplementor(ToolbarGroupType);
$Util.$setClassMetadataForEnum(ToolbarGroupType, 'org.patternfly.component.toolbar.ToolbarGroupType');

exports = ToolbarGroupType;

//# sourceMappingURL=ToolbarGroupType.js.map
