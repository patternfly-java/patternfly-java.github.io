goog.module('org.patternfly.component.wizard.WizardStepPreviousPromise$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepPreviousPromise.$LambdaAdaptor$impl');

/**
 * @interface
 */
class WizardStepPreviousPromise {
 /** @abstract @nodts @return {Promise<?boolean>} */
 m_onPrevious__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__elemental2_promise_Promise(/** Wizard */ wizard, /** WizardStep */ current, /** WizardStep */ previous) {}
 /** @nodts @return {!WizardStepPreviousPromise} */
 static $adapt(/** ?function(Wizard, WizardStep, WizardStep):Promise<?boolean> */ fn) {
  WizardStepPreviousPromise.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  WizardStepPreviousPromise.$clinit = () =>{};
  WizardStepPreviousPromise.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_wizard_WizardStepPreviousPromise = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_wizard_WizardStepPreviousPromise;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.wizard.WizardStepPreviousPromise.$LambdaAdaptor$impl');
 }
}
WizardStepPreviousPromise.$markImplementor(/**@type {Function}*/ (WizardStepPreviousPromise));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (WizardStepPreviousPromise), 'org.patternfly.component.wizard.WizardStepPreviousPromise');

exports = WizardStepPreviousPromise;

//# sourceMappingURL=WizardStepPreviousPromise.js.map
