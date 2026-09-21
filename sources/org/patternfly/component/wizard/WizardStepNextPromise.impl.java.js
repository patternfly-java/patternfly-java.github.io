goog.module('org.patternfly.component.wizard.WizardStepNextPromise$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepNextPromise.$LambdaAdaptor$impl');

/**
 * @interface
 */
class WizardStepNextPromise {
 /** @abstract @nodts @return {Promise<?boolean>} */
 m_onNext__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__elemental2_promise_Promise(/** Wizard */ wizard, /** WizardStep */ current, /** WizardStep */ next) {}
 /** @nodts @return {!WizardStepNextPromise} */
 static $adapt(/** ?function(Wizard, WizardStep, WizardStep):Promise<?boolean> */ fn) {
  WizardStepNextPromise.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  WizardStepNextPromise.$clinit = () =>{};
  WizardStepNextPromise.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_wizard_WizardStepNextPromise = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_wizard_WizardStepNextPromise;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.wizard.WizardStepNextPromise.$LambdaAdaptor$impl');
 }
}
WizardStepNextPromise.$markImplementor(/**@type {Function}*/ (WizardStepNextPromise));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (WizardStepNextPromise), 'org.patternfly.component.wizard.WizardStepNextPromise');

exports = WizardStepNextPromise;

//# sourceMappingURL=WizardStepNextPromise.js.map
