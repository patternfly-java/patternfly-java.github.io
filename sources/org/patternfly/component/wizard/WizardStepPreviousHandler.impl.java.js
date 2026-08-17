goog.module('org.patternfly.component.wizard.WizardStepPreviousHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepPreviousHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class WizardStepPreviousHandler {
 /** @abstract @nodts @return {boolean} */
 m_onPrevious__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean(/** Wizard */ wizard, /** WizardStep */ current, /** WizardStep */ previous) {}
 /** @nodts @return {!WizardStepPreviousHandler} */
 static $adapt(/** ?function(Wizard, WizardStep, WizardStep):boolean */ fn) {
  WizardStepPreviousHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  WizardStepPreviousHandler.$clinit = () =>{};
  WizardStepPreviousHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_wizard_WizardStepPreviousHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_wizard_WizardStepPreviousHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.wizard.WizardStepPreviousHandler.$LambdaAdaptor$impl');
 }
}
WizardStepPreviousHandler.$markImplementor(/**@type {Function}*/ (WizardStepPreviousHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (WizardStepPreviousHandler), 'org.patternfly.component.wizard.WizardStepPreviousHandler');

exports = WizardStepPreviousHandler;

//# sourceMappingURL=WizardStepPreviousHandler.js.map
