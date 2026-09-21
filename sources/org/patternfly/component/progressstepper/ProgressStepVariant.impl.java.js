goog.module('org.patternfly.component.progressstepper.ProgressStepVariant$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let J2clSealedTypeMarker = goog.forwardDeclare('javaemul.internal.J2clSealedTypeMarker');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.component.progressstepper.ProgressStepVariant.$1$impl');
let $2 = goog.forwardDeclare('org.patternfly.component.progressstepper.ProgressStepVariant.$2$impl');
let $3 = goog.forwardDeclare('org.patternfly.component.progressstepper.ProgressStepVariant.$3$impl');
let $4 = goog.forwardDeclare('org.patternfly.component.progressstepper.ProgressStepVariant.$4$impl');
let $5 = goog.forwardDeclare('org.patternfly.component.progressstepper.ProgressStepVariant.$5$impl');
let $6 = goog.forwardDeclare('org.patternfly.component.progressstepper.ProgressStepVariant.$6$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @abstract
 * @extends {Enum<ProgressStepVariant>}
 * @implements {J2clSealedTypeMarker}
 */
class ProgressStepVariant extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_style__org_patternfly_component_progressstepper_ProgressStepVariant;
 }
 /** @nodts */
 $ctor__org_patternfly_component_progressstepper_ProgressStepVariant__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ style) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_style__org_patternfly_component_progressstepper_ProgressStepVariant = style;
 }
 /** @abstract @nodts @return {Element} */
 m_icon__elemental2_dom_Element() {}
 /** @nodts @return {!ProgressStepVariant} */
 static m_valueOf__java_lang_String__org_patternfly_component_progressstepper_ProgressStepVariant(/** string */ name) {
  ProgressStepVariant.$clinit();
  if ($Equality.$same(ProgressStepVariant.f_namesToValuesMap__org_patternfly_component_progressstepper_ProgressStepVariant_, null)) {
   ProgressStepVariant.f_namesToValuesMap__org_patternfly_component_progressstepper_ProgressStepVariant_ = (/**@type {Map<?string, !ProgressStepVariant>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ProgressStepVariant.m_values__arrayOf_org_patternfly_component_progressstepper_ProgressStepVariant())));
  }
  return /**@type {ProgressStepVariant}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ProgressStepVariant.f_namesToValuesMap__org_patternfly_component_progressstepper_ProgressStepVariant_));
 }
 /** @nodts @return {!Array<!ProgressStepVariant>} */
 static m_values__arrayOf_org_patternfly_component_progressstepper_ProgressStepVariant() {
  ProgressStepVariant.$clinit();
  return /**@type {!Array<!ProgressStepVariant>}*/ ($Arrays.$stampType([ProgressStepVariant.$static_default___org_patternfly_component_progressstepper_ProgressStepVariant, ProgressStepVariant.$static_success__org_patternfly_component_progressstepper_ProgressStepVariant, ProgressStepVariant.$static_info__org_patternfly_component_progressstepper_ProgressStepVariant, ProgressStepVariant.$static_pending__org_patternfly_component_progressstepper_ProgressStepVariant, ProgressStepVariant.$static_warning__org_patternfly_component_progressstepper_ProgressStepVariant, ProgressStepVariant.$static_danger__org_patternfly_component_progressstepper_ProgressStepVariant], ProgressStepVariant));
 }
 /** @nodts @return {!ProgressStepVariant} */
 static get f_default___org_patternfly_component_progressstepper_ProgressStepVariant() {
  return (ProgressStepVariant.$clinit(), ProgressStepVariant.$static_default___org_patternfly_component_progressstepper_ProgressStepVariant);
 }
 /** @nodts @return {!ProgressStepVariant} */
 static get f_success__org_patternfly_component_progressstepper_ProgressStepVariant() {
  return (ProgressStepVariant.$clinit(), ProgressStepVariant.$static_success__org_patternfly_component_progressstepper_ProgressStepVariant);
 }
 /** @nodts @return {!ProgressStepVariant} */
 static get f_info__org_patternfly_component_progressstepper_ProgressStepVariant() {
  return (ProgressStepVariant.$clinit(), ProgressStepVariant.$static_info__org_patternfly_component_progressstepper_ProgressStepVariant);
 }
 /** @nodts @return {!ProgressStepVariant} */
 static get f_pending__org_patternfly_component_progressstepper_ProgressStepVariant() {
  return (ProgressStepVariant.$clinit(), ProgressStepVariant.$static_pending__org_patternfly_component_progressstepper_ProgressStepVariant);
 }
 /** @nodts @return {!ProgressStepVariant} */
 static get f_warning__org_patternfly_component_progressstepper_ProgressStepVariant() {
  return (ProgressStepVariant.$clinit(), ProgressStepVariant.$static_warning__org_patternfly_component_progressstepper_ProgressStepVariant);
 }
 /** @nodts @return {!ProgressStepVariant} */
 static get f_danger__org_patternfly_component_progressstepper_ProgressStepVariant() {
  return (ProgressStepVariant.$clinit(), ProgressStepVariant.$static_danger__org_patternfly_component_progressstepper_ProgressStepVariant);
 }
 /** @nodts */
 static $clinit() {
  ProgressStepVariant.$clinit = () =>{};
  ProgressStepVariant.$loadModules();
  Enum.$clinit();
  ProgressStepVariant.$static_default___org_patternfly_component_progressstepper_ProgressStepVariant = $1.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('default_'), ProgressStepVariant.$ordinal_default___org_patternfly_component_progressstepper_ProgressStepVariant, null);
  ProgressStepVariant.$static_success__org_patternfly_component_progressstepper_ProgressStepVariant = $2.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('success'), ProgressStepVariant.$ordinal_success__org_patternfly_component_progressstepper_ProgressStepVariant, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_success__org_patternfly_style_Classes));
  ProgressStepVariant.$static_info__org_patternfly_component_progressstepper_ProgressStepVariant = $3.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('info'), ProgressStepVariant.$ordinal_info__org_patternfly_component_progressstepper_ProgressStepVariant, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_info__org_patternfly_style_Classes));
  ProgressStepVariant.$static_pending__org_patternfly_component_progressstepper_ProgressStepVariant = $4.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('pending'), ProgressStepVariant.$ordinal_pending__org_patternfly_component_progressstepper_ProgressStepVariant, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_pending__org_patternfly_style_Classes));
  ProgressStepVariant.$static_warning__org_patternfly_component_progressstepper_ProgressStepVariant = $5.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('warning'), ProgressStepVariant.$ordinal_warning__org_patternfly_component_progressstepper_ProgressStepVariant, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_warning__org_patternfly_style_Classes));
  ProgressStepVariant.$static_danger__org_patternfly_component_progressstepper_ProgressStepVariant = $6.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('danger'), ProgressStepVariant.$ordinal_danger__org_patternfly_component_progressstepper_ProgressStepVariant, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_danger__org_patternfly_style_Classes));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProgressStepVariant;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.component.progressstepper.ProgressStepVariant.$1$impl');
  $2 = goog.module.get('org.patternfly.component.progressstepper.ProgressStepVariant.$2$impl');
  $3 = goog.module.get('org.patternfly.component.progressstepper.ProgressStepVariant.$3$impl');
  $4 = goog.module.get('org.patternfly.component.progressstepper.ProgressStepVariant.$4$impl');
  $5 = goog.module.get('org.patternfly.component.progressstepper.ProgressStepVariant.$5$impl');
  $6 = goog.module.get('org.patternfly.component.progressstepper.ProgressStepVariant.$6$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ProgressStepVariant.$ordinal_default___org_patternfly_component_progressstepper_ProgressStepVariant = 0;
/**@const {number} @nodts*/
ProgressStepVariant.$ordinal_success__org_patternfly_component_progressstepper_ProgressStepVariant = 1;
/**@const {number} @nodts*/
ProgressStepVariant.$ordinal_info__org_patternfly_component_progressstepper_ProgressStepVariant = 2;
/**@const {number} @nodts*/
ProgressStepVariant.$ordinal_pending__org_patternfly_component_progressstepper_ProgressStepVariant = 3;
/**@const {number} @nodts*/
ProgressStepVariant.$ordinal_warning__org_patternfly_component_progressstepper_ProgressStepVariant = 4;
/**@const {number} @nodts*/
ProgressStepVariant.$ordinal_danger__org_patternfly_component_progressstepper_ProgressStepVariant = 5;
/**@private {!ProgressStepVariant} @nodts*/
ProgressStepVariant.$static_default___org_patternfly_component_progressstepper_ProgressStepVariant;
/**@private {!ProgressStepVariant} @nodts*/
ProgressStepVariant.$static_success__org_patternfly_component_progressstepper_ProgressStepVariant;
/**@private {!ProgressStepVariant} @nodts*/
ProgressStepVariant.$static_info__org_patternfly_component_progressstepper_ProgressStepVariant;
/**@private {!ProgressStepVariant} @nodts*/
ProgressStepVariant.$static_pending__org_patternfly_component_progressstepper_ProgressStepVariant;
/**@private {!ProgressStepVariant} @nodts*/
ProgressStepVariant.$static_warning__org_patternfly_component_progressstepper_ProgressStepVariant;
/**@private {!ProgressStepVariant} @nodts*/
ProgressStepVariant.$static_danger__org_patternfly_component_progressstepper_ProgressStepVariant;
/**@type {Map<?string, !ProgressStepVariant>} @nodts*/
ProgressStepVariant.f_namesToValuesMap__org_patternfly_component_progressstepper_ProgressStepVariant_;
$Util.$setClassMetadataForEnum(ProgressStepVariant, 'org.patternfly.component.progressstepper.ProgressStepVariant');

exports = ProgressStepVariant;

//# sourceMappingURL=ProgressStepVariant.js.map
