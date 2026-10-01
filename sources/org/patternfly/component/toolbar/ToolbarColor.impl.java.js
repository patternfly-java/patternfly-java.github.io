goog.module('org.patternfly.component.toolbar.ToolbarColor$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<ToolbarColor>}
 * @implements {TypedModifier}
 */
class ToolbarColor extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_toolbar_ToolbarColor_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_toolbar_ToolbarColor_;
 }
 /** @nodts @return {!ToolbarColor} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ToolbarColor();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarColor__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarColor__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_toolbar_ToolbarColor_ = value;
  this.f_modifier__org_patternfly_component_toolbar_ToolbarColor_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_toolbar_ToolbarColor_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_toolbar_ToolbarColor_;
 }
 /** @nodts @return {!ToolbarColor} */
 static m_valueOf__java_lang_String__org_patternfly_component_toolbar_ToolbarColor(/** string */ name) {
  ToolbarColor.$clinit();
  if ($Equality.$same(ToolbarColor.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarColor_, null)) {
   ToolbarColor.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarColor_ = (/**@type {Map<?string, !ToolbarColor>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ToolbarColor.m_values__arrayOf_org_patternfly_component_toolbar_ToolbarColor())));
  }
  return /**@type {ToolbarColor}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ToolbarColor.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarColor_));
 }
 /** @nodts @return {!Array<!ToolbarColor>} */
 static m_values__arrayOf_org_patternfly_component_toolbar_ToolbarColor() {
  ToolbarColor.$clinit();
  return /**@type {!Array<!ToolbarColor>}*/ ($Arrays.$stampType([ToolbarColor.$static_noBackground__org_patternfly_component_toolbar_ToolbarColor, ToolbarColor.$static_primary__org_patternfly_component_toolbar_ToolbarColor, ToolbarColor.$static_secondary__org_patternfly_component_toolbar_ToolbarColor], ToolbarColor));
 }
 /** @nodts @return {!ToolbarColor} */
 static get f_noBackground__org_patternfly_component_toolbar_ToolbarColor() {
  return (ToolbarColor.$clinit(), ToolbarColor.$static_noBackground__org_patternfly_component_toolbar_ToolbarColor);
 }
 /** @nodts @return {!ToolbarColor} */
 static get f_primary__org_patternfly_component_toolbar_ToolbarColor() {
  return (ToolbarColor.$clinit(), ToolbarColor.$static_primary__org_patternfly_component_toolbar_ToolbarColor);
 }
 /** @nodts @return {!ToolbarColor} */
 static get f_secondary__org_patternfly_component_toolbar_ToolbarColor() {
  return (ToolbarColor.$clinit(), ToolbarColor.$static_secondary__org_patternfly_component_toolbar_ToolbarColor);
 }
 /** @nodts */
 static $clinit() {
  ToolbarColor.$clinit = () =>{};
  ToolbarColor.$loadModules();
  Enum.$clinit();
  ToolbarColor.$static_noBackground__org_patternfly_component_toolbar_ToolbarColor = ToolbarColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('noBackground'), ToolbarColor.$ordinal_noBackground__org_patternfly_component_toolbar_ToolbarColor, 'no-background');
  ToolbarColor.$static_primary__org_patternfly_component_toolbar_ToolbarColor = ToolbarColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('primary'), ToolbarColor.$ordinal_primary__org_patternfly_component_toolbar_ToolbarColor, 'primary');
  ToolbarColor.$static_secondary__org_patternfly_component_toolbar_ToolbarColor = ToolbarColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('secondary'), ToolbarColor.$ordinal_secondary__org_patternfly_component_toolbar_ToolbarColor, 'secondary');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarColor;
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
ToolbarColor.$ordinal_noBackground__org_patternfly_component_toolbar_ToolbarColor = 0;
/**@const {number} @nodts*/
ToolbarColor.$ordinal_primary__org_patternfly_component_toolbar_ToolbarColor = 1;
/**@const {number} @nodts*/
ToolbarColor.$ordinal_secondary__org_patternfly_component_toolbar_ToolbarColor = 2;
/**@private {!ToolbarColor} @nodts*/
ToolbarColor.$static_noBackground__org_patternfly_component_toolbar_ToolbarColor;
/**@private {!ToolbarColor} @nodts*/
ToolbarColor.$static_primary__org_patternfly_component_toolbar_ToolbarColor;
/**@private {!ToolbarColor} @nodts*/
ToolbarColor.$static_secondary__org_patternfly_component_toolbar_ToolbarColor;
/**@type {Map<?string, !ToolbarColor>} @nodts*/
ToolbarColor.f_namesToValuesMap__org_patternfly_component_toolbar_ToolbarColor_;
TypedModifier.$markImplementor(ToolbarColor);
$Util.$setClassMetadataForEnum(ToolbarColor, 'org.patternfly.component.toolbar.ToolbarColor');

exports = ToolbarColor;

//# sourceMappingURL=ToolbarColor.js.map
