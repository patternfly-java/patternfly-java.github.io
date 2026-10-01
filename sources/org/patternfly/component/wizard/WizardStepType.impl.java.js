goog.module('org.patternfly.component.wizard.WizardStepType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<WizardStepType>}
 */
class WizardStepType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!WizardStepType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new WizardStepType();
  $instance.$ctor__org_patternfly_component_wizard_WizardStepType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardStepType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!WizardStepType} */
 static m_valueOf__java_lang_String__org_patternfly_component_wizard_WizardStepType(/** string */ name) {
  WizardStepType.$clinit();
  if ($Equality.$same(WizardStepType.f_namesToValuesMap__org_patternfly_component_wizard_WizardStepType_, null)) {
   WizardStepType.f_namesToValuesMap__org_patternfly_component_wizard_WizardStepType_ = (/**@type {Map<?string, !WizardStepType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(WizardStepType.m_values__arrayOf_org_patternfly_component_wizard_WizardStepType())));
  }
  return /**@type {WizardStepType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, WizardStepType.f_namesToValuesMap__org_patternfly_component_wizard_WizardStepType_));
 }
 /** @nodts @return {!Array<!WizardStepType>} */
 static m_values__arrayOf_org_patternfly_component_wizard_WizardStepType() {
  WizardStepType.$clinit();
  return /**@type {!Array<!WizardStepType>}*/ ($Arrays.$stampType([WizardStepType.f_step__org_patternfly_component_wizard_WizardStepType, WizardStepType.f_review__org_patternfly_component_wizard_WizardStepType, WizardStepType.f_progress__org_patternfly_component_wizard_WizardStepType, WizardStepType.f_summary__org_patternfly_component_wizard_WizardStepType], WizardStepType));
 }
 /** @nodts */
 static $clinit() {
  WizardStepType.$clinit = () =>{};
  WizardStepType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardStepType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
WizardStepType.$ordinal_step__org_patternfly_component_wizard_WizardStepType = 0;
/**@const {number} @nodts*/
WizardStepType.$ordinal_review__org_patternfly_component_wizard_WizardStepType = 1;
/**@const {number} @nodts*/
WizardStepType.$ordinal_progress__org_patternfly_component_wizard_WizardStepType = 2;
/**@const {number} @nodts*/
WizardStepType.$ordinal_summary__org_patternfly_component_wizard_WizardStepType = 3;
/**@const {!WizardStepType} @nodts*/
WizardStepType.f_step__org_patternfly_component_wizard_WizardStepType = /**@pureOrBreakMyCode*/ WizardStepType.$create__java_lang_String__int($Util.$makeEnumName('step'), WizardStepType.$ordinal_step__org_patternfly_component_wizard_WizardStepType);
/**@const {!WizardStepType} @nodts*/
WizardStepType.f_review__org_patternfly_component_wizard_WizardStepType = /**@pureOrBreakMyCode*/ WizardStepType.$create__java_lang_String__int($Util.$makeEnumName('review'), WizardStepType.$ordinal_review__org_patternfly_component_wizard_WizardStepType);
/**@const {!WizardStepType} @nodts*/
WizardStepType.f_progress__org_patternfly_component_wizard_WizardStepType = /**@pureOrBreakMyCode*/ WizardStepType.$create__java_lang_String__int($Util.$makeEnumName('progress'), WizardStepType.$ordinal_progress__org_patternfly_component_wizard_WizardStepType);
/**@const {!WizardStepType} @nodts*/
WizardStepType.f_summary__org_patternfly_component_wizard_WizardStepType = /**@pureOrBreakMyCode*/ WizardStepType.$create__java_lang_String__int($Util.$makeEnumName('summary'), WizardStepType.$ordinal_summary__org_patternfly_component_wizard_WizardStepType);
/**@type {Map<?string, !WizardStepType>} @nodts*/
WizardStepType.f_namesToValuesMap__org_patternfly_component_wizard_WizardStepType_;
$Util.$setClassMetadataForEnum(WizardStepType, 'org.patternfly.component.wizard.WizardStepType');

exports = WizardStepType;

//# sourceMappingURL=WizardStepType.js.map
