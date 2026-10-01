goog.module('org.patternfly.component.toolbar.RowWrap$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<RowWrap>}
 * @implements {TypedModifier}
 */
class RowWrap extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_toolbar_RowWrap_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_toolbar_RowWrap_;
 }
 /** @nodts @return {!RowWrap} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new RowWrap();
  $instance.$ctor__org_patternfly_component_toolbar_RowWrap__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_RowWrap__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_toolbar_RowWrap_ = value;
  this.f_modifier__org_patternfly_component_toolbar_RowWrap_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_toolbar_RowWrap_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_toolbar_RowWrap_;
 }
 /** @nodts @return {!RowWrap} */
 static m_valueOf__java_lang_String__org_patternfly_component_toolbar_RowWrap(/** string */ name) {
  RowWrap.$clinit();
  if ($Equality.$same(RowWrap.f_namesToValuesMap__org_patternfly_component_toolbar_RowWrap_, null)) {
   RowWrap.f_namesToValuesMap__org_patternfly_component_toolbar_RowWrap_ = (/**@type {Map<?string, !RowWrap>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(RowWrap.m_values__arrayOf_org_patternfly_component_toolbar_RowWrap())));
  }
  return /**@type {RowWrap}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, RowWrap.f_namesToValuesMap__org_patternfly_component_toolbar_RowWrap_));
 }
 /** @nodts @return {!Array<!RowWrap>} */
 static m_values__arrayOf_org_patternfly_component_toolbar_RowWrap() {
  RowWrap.$clinit();
  return /**@type {!Array<!RowWrap>}*/ ($Arrays.$stampType([RowWrap.$static_wrap__org_patternfly_component_toolbar_RowWrap, RowWrap.$static_noWrap__org_patternfly_component_toolbar_RowWrap], RowWrap));
 }
 /** @nodts @return {!RowWrap} */
 static get f_wrap__org_patternfly_component_toolbar_RowWrap() {
  return (RowWrap.$clinit(), RowWrap.$static_wrap__org_patternfly_component_toolbar_RowWrap);
 }
 /** @nodts @return {!RowWrap} */
 static get f_noWrap__org_patternfly_component_toolbar_RowWrap() {
  return (RowWrap.$clinit(), RowWrap.$static_noWrap__org_patternfly_component_toolbar_RowWrap);
 }
 /** @nodts */
 static $clinit() {
  RowWrap.$clinit = () =>{};
  RowWrap.$loadModules();
  Enum.$clinit();
  RowWrap.$static_wrap__org_patternfly_component_toolbar_RowWrap = RowWrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('wrap'), RowWrap.$ordinal_wrap__org_patternfly_component_toolbar_RowWrap, 'wrap');
  RowWrap.$static_noWrap__org_patternfly_component_toolbar_RowWrap = RowWrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('noWrap'), RowWrap.$ordinal_noWrap__org_patternfly_component_toolbar_RowWrap, 'nowrap');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RowWrap;
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
RowWrap.$ordinal_wrap__org_patternfly_component_toolbar_RowWrap = 0;
/**@const {number} @nodts*/
RowWrap.$ordinal_noWrap__org_patternfly_component_toolbar_RowWrap = 1;
/**@private {!RowWrap} @nodts*/
RowWrap.$static_wrap__org_patternfly_component_toolbar_RowWrap;
/**@private {!RowWrap} @nodts*/
RowWrap.$static_noWrap__org_patternfly_component_toolbar_RowWrap;
/**@type {Map<?string, !RowWrap>} @nodts*/
RowWrap.f_namesToValuesMap__org_patternfly_component_toolbar_RowWrap_;
TypedModifier.$markImplementor(RowWrap);
$Util.$setClassMetadataForEnum(RowWrap, 'org.patternfly.component.toolbar.RowWrap');

exports = RowWrap;

//# sourceMappingURL=RowWrap.js.map
