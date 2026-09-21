goog.module('org.patternfly.component.wizard.WizardStepChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class WizardStepChangeHandler {
 /** @abstract @nodts */
 m_onStepChange__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__void(/** Wizard */ wizard, /** WizardStep */ previous, /** WizardStep */ current) {}
 /** @nodts @return {!WizardStepChangeHandler} */
 static $adapt(/** ?function(Wizard, WizardStep, WizardStep):void */ fn) {
  WizardStepChangeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  WizardStepChangeHandler.$clinit = () =>{};
  WizardStepChangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_wizard_WizardStepChangeHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_wizard_WizardStepChangeHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.wizard.WizardStepChangeHandler.$LambdaAdaptor$impl');
 }
}
WizardStepChangeHandler.$markImplementor(/**@type {Function}*/ (WizardStepChangeHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (WizardStepChangeHandler), 'org.patternfly.component.wizard.WizardStepChangeHandler');

exports = WizardStepChangeHandler;

//# sourceMappingURL=WizardStepChangeHandler.js.map
