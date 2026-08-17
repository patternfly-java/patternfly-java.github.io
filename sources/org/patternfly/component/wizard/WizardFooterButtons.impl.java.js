goog.module('org.patternfly.component.wizard.WizardFooterButtons$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<WizardFooterButtons>}
 */
class WizardFooterButtons extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!WizardFooterButtons} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new WizardFooterButtons();
  $instance.$ctor__org_patternfly_component_wizard_WizardFooterButtons__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardFooterButtons__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!WizardFooterButtons} */
 static m_valueOf__java_lang_String__org_patternfly_component_wizard_WizardFooterButtons(/** string */ name) {
  WizardFooterButtons.$clinit();
  if ($Equality.$same(WizardFooterButtons.f_namesToValuesMap__org_patternfly_component_wizard_WizardFooterButtons_, null)) {
   WizardFooterButtons.f_namesToValuesMap__org_patternfly_component_wizard_WizardFooterButtons_ = (/**@type {Map<?string, !WizardFooterButtons>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(WizardFooterButtons.m_values__arrayOf_org_patternfly_component_wizard_WizardFooterButtons())));
  }
  return /**@type {WizardFooterButtons}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, WizardFooterButtons.f_namesToValuesMap__org_patternfly_component_wizard_WizardFooterButtons_));
 }
 /** @nodts @return {!Array<!WizardFooterButtons>} */
 static m_values__arrayOf_org_patternfly_component_wizard_WizardFooterButtons() {
  WizardFooterButtons.$clinit();
  return /**@type {!Array<!WizardFooterButtons>}*/ ($Arrays.$stampType([WizardFooterButtons.f_back__org_patternfly_component_wizard_WizardFooterButtons, WizardFooterButtons.f_next__org_patternfly_component_wizard_WizardFooterButtons, WizardFooterButtons.f_cancel__org_patternfly_component_wizard_WizardFooterButtons], WizardFooterButtons));
 }
 /** @nodts */
 static $clinit() {
  WizardFooterButtons.$clinit = () =>{};
  WizardFooterButtons.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardFooterButtons;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
WizardFooterButtons.$ordinal_back__org_patternfly_component_wizard_WizardFooterButtons = 0;
/**@const {number} @nodts*/
WizardFooterButtons.$ordinal_next__org_patternfly_component_wizard_WizardFooterButtons = 1;
/**@const {number} @nodts*/
WizardFooterButtons.$ordinal_cancel__org_patternfly_component_wizard_WizardFooterButtons = 2;
/**@const {!WizardFooterButtons} @nodts*/
WizardFooterButtons.f_back__org_patternfly_component_wizard_WizardFooterButtons = /**@pureOrBreakMyCode*/ WizardFooterButtons.$create__java_lang_String__int($Util.$makeEnumName('back'), WizardFooterButtons.$ordinal_back__org_patternfly_component_wizard_WizardFooterButtons);
/**@const {!WizardFooterButtons} @nodts*/
WizardFooterButtons.f_next__org_patternfly_component_wizard_WizardFooterButtons = /**@pureOrBreakMyCode*/ WizardFooterButtons.$create__java_lang_String__int($Util.$makeEnumName('next'), WizardFooterButtons.$ordinal_next__org_patternfly_component_wizard_WizardFooterButtons);
/**@const {!WizardFooterButtons} @nodts*/
WizardFooterButtons.f_cancel__org_patternfly_component_wizard_WizardFooterButtons = /**@pureOrBreakMyCode*/ WizardFooterButtons.$create__java_lang_String__int($Util.$makeEnumName('cancel'), WizardFooterButtons.$ordinal_cancel__org_patternfly_component_wizard_WizardFooterButtons);
/**@type {Map<?string, !WizardFooterButtons>} @nodts*/
WizardFooterButtons.f_namesToValuesMap__org_patternfly_component_wizard_WizardFooterButtons_;
$Util.$setClassMetadataForEnum(WizardFooterButtons, 'org.patternfly.component.wizard.WizardFooterButtons');

exports = WizardFooterButtons;

//# sourceMappingURL=WizardFooterButtons.js.map
