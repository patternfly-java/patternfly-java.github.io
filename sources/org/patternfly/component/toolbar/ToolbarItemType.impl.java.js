goog.module('org.patternfly.component.toolbar.ToolbarItemType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<ToolbarItemType>}
 * @implements {TypedModifier}
 */
class ToolbarItemType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_toolbar_ToolbarItemType_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_toolbar_ToolbarItemType_;
 }
 /** @nodts @return {!ToolbarItemType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ToolbarItemType();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarItemType__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarItemType__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_toolbar_ToolbarItemType_ = value;
  this.f_modifier__org_patternfly_component_toolbar_ToolbarItemType_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_toolbar_ToolbarItemType_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_toolbar_ToolbarItemType_;
 }
 /** @nodts @return {!ToolbarItemType} */
 static m_valueOf__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType(/** string */ name) {
  ToolbarItemType.$clinit();
  if ($Equality.$same(ToolbarItemType.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarItemType_, null)) {
   ToolbarItemType.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarItemType_ = (/**@type {Map<?string, !ToolbarItemType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ToolbarItemType.m_values__arrayOf_org_patternfly_component_toolbar_ToolbarItemType())));
  }
  return /**@type {ToolbarItemType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ToolbarItemType.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarItemType_));
 }
 /** @nodts @return {!Array<!ToolbarItemType>} */
 static m_values__arrayOf_org_patternfly_component_toolbar_ToolbarItemType() {
  ToolbarItemType.$clinit();
  return /**@type {!Array<!ToolbarItemType>}*/ ($Arrays.$stampType([ToolbarItemType.$static_bulkSelect__org_patternfly_component_toolbar_ToolbarItemType, ToolbarItemType.$static_overflowMenu__org_patternfly_component_toolbar_ToolbarItemType, ToolbarItemType.$static_pagination__org_patternfly_component_toolbar_ToolbarItemType, ToolbarItemType.$static_searchFilter__org_patternfly_component_toolbar_ToolbarItemType, ToolbarItemType.$static_label__org_patternfly_component_toolbar_ToolbarItemType, ToolbarItemType.$static_labelGroup__org_patternfly_component_toolbar_ToolbarItemType, ToolbarItemType.$static_expandAll__org_patternfly_component_toolbar_ToolbarItemType], ToolbarItemType));
 }
 /** @nodts @return {!ToolbarItemType} */
 static get f_bulkSelect__org_patternfly_component_toolbar_ToolbarItemType() {
  return (ToolbarItemType.$clinit(), ToolbarItemType.$static_bulkSelect__org_patternfly_component_toolbar_ToolbarItemType);
 }
 /** @nodts @return {!ToolbarItemType} */
 static get f_overflowMenu__org_patternfly_component_toolbar_ToolbarItemType() {
  return (ToolbarItemType.$clinit(), ToolbarItemType.$static_overflowMenu__org_patternfly_component_toolbar_ToolbarItemType);
 }
 /** @nodts @return {!ToolbarItemType} */
 static get f_pagination__org_patternfly_component_toolbar_ToolbarItemType() {
  return (ToolbarItemType.$clinit(), ToolbarItemType.$static_pagination__org_patternfly_component_toolbar_ToolbarItemType);
 }
 /** @nodts @return {!ToolbarItemType} */
 static get f_searchFilter__org_patternfly_component_toolbar_ToolbarItemType() {
  return (ToolbarItemType.$clinit(), ToolbarItemType.$static_searchFilter__org_patternfly_component_toolbar_ToolbarItemType);
 }
 /** @nodts @return {!ToolbarItemType} */
 static get f_label__org_patternfly_component_toolbar_ToolbarItemType() {
  return (ToolbarItemType.$clinit(), ToolbarItemType.$static_label__org_patternfly_component_toolbar_ToolbarItemType);
 }
 /** @nodts @return {!ToolbarItemType} */
 static get f_labelGroup__org_patternfly_component_toolbar_ToolbarItemType() {
  return (ToolbarItemType.$clinit(), ToolbarItemType.$static_labelGroup__org_patternfly_component_toolbar_ToolbarItemType);
 }
 /** @nodts @return {!ToolbarItemType} */
 static get f_expandAll__org_patternfly_component_toolbar_ToolbarItemType() {
  return (ToolbarItemType.$clinit(), ToolbarItemType.$static_expandAll__org_patternfly_component_toolbar_ToolbarItemType);
 }
 /** @nodts */
 static $clinit() {
  ToolbarItemType.$clinit = () =>{};
  ToolbarItemType.$loadModules();
  Enum.$clinit();
  ToolbarItemType.$static_bulkSelect__org_patternfly_component_toolbar_ToolbarItemType = ToolbarItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bulkSelect'), ToolbarItemType.$ordinal_bulkSelect__org_patternfly_component_toolbar_ToolbarItemType, 'bulk-select');
  ToolbarItemType.$static_overflowMenu__org_patternfly_component_toolbar_ToolbarItemType = ToolbarItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('overflowMenu'), ToolbarItemType.$ordinal_overflowMenu__org_patternfly_component_toolbar_ToolbarItemType, 'overflow-menu');
  ToolbarItemType.$static_pagination__org_patternfly_component_toolbar_ToolbarItemType = ToolbarItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('pagination'), ToolbarItemType.$ordinal_pagination__org_patternfly_component_toolbar_ToolbarItemType, 'pagination');
  ToolbarItemType.$static_searchFilter__org_patternfly_component_toolbar_ToolbarItemType = ToolbarItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('searchFilter'), ToolbarItemType.$ordinal_searchFilter__org_patternfly_component_toolbar_ToolbarItemType, 'search-filter');
  ToolbarItemType.$static_label__org_patternfly_component_toolbar_ToolbarItemType = ToolbarItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('label'), ToolbarItemType.$ordinal_label__org_patternfly_component_toolbar_ToolbarItemType, 'label');
  ToolbarItemType.$static_labelGroup__org_patternfly_component_toolbar_ToolbarItemType = ToolbarItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('labelGroup'), ToolbarItemType.$ordinal_labelGroup__org_patternfly_component_toolbar_ToolbarItemType, 'label-group');
  ToolbarItemType.$static_expandAll__org_patternfly_component_toolbar_ToolbarItemType = ToolbarItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('expandAll'), ToolbarItemType.$ordinal_expandAll__org_patternfly_component_toolbar_ToolbarItemType, 'expand-all');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarItemType;
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
ToolbarItemType.$ordinal_bulkSelect__org_patternfly_component_toolbar_ToolbarItemType = 0;
/**@const {number} @nodts*/
ToolbarItemType.$ordinal_overflowMenu__org_patternfly_component_toolbar_ToolbarItemType = 1;
/**@const {number} @nodts*/
ToolbarItemType.$ordinal_pagination__org_patternfly_component_toolbar_ToolbarItemType = 2;
/**@const {number} @nodts*/
ToolbarItemType.$ordinal_searchFilter__org_patternfly_component_toolbar_ToolbarItemType = 3;
/**@const {number} @nodts*/
ToolbarItemType.$ordinal_label__org_patternfly_component_toolbar_ToolbarItemType = 4;
/**@const {number} @nodts*/
ToolbarItemType.$ordinal_labelGroup__org_patternfly_component_toolbar_ToolbarItemType = 5;
/**@const {number} @nodts*/
ToolbarItemType.$ordinal_expandAll__org_patternfly_component_toolbar_ToolbarItemType = 6;
/**@private {!ToolbarItemType} @nodts*/
ToolbarItemType.$static_bulkSelect__org_patternfly_component_toolbar_ToolbarItemType;
/**@private {!ToolbarItemType} @nodts*/
ToolbarItemType.$static_overflowMenu__org_patternfly_component_toolbar_ToolbarItemType;
/**@private {!ToolbarItemType} @nodts*/
ToolbarItemType.$static_pagination__org_patternfly_component_toolbar_ToolbarItemType;
/**@private {!ToolbarItemType} @nodts*/
ToolbarItemType.$static_searchFilter__org_patternfly_component_toolbar_ToolbarItemType;
/**@private {!ToolbarItemType} @nodts*/
ToolbarItemType.$static_label__org_patternfly_component_toolbar_ToolbarItemType;
/**@private {!ToolbarItemType} @nodts*/
ToolbarItemType.$static_labelGroup__org_patternfly_component_toolbar_ToolbarItemType;
/**@private {!ToolbarItemType} @nodts*/
ToolbarItemType.$static_expandAll__org_patternfly_component_toolbar_ToolbarItemType;
/**@type {Map<?string, !ToolbarItemType>} @nodts*/
ToolbarItemType.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarItemType_;
TypedModifier.$markImplementor(ToolbarItemType);
$Util.$setClassMetadataForEnum(ToolbarItemType, 'org.patternfly.component.toolbar.ToolbarItemType');

exports = ToolbarItemType;

//# sourceMappingURL=ToolbarItemType.js.map
