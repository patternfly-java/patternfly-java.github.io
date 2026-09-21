goog.module('org.patternfly.component.wizard.WizardStepNextHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepNextHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class WizardStepNextHandler {
 /** @abstract @nodts @return {boolean} */
 m_onNext__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean(/** Wizard */ wizard, /** WizardStep */ current, /** WizardStep */ next) {}
 /** @nodts @return {!WizardStepNextHandler} */
 static $adapt(/** ?function(Wizard, WizardStep, WizardStep):boolean */ fn) {
  WizardStepNextHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  WizardStepNextHandler.$clinit = () =>{};
  WizardStepNextHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_wizard_WizardStepNextHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_wizard_WizardStepNextHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.wizard.WizardStepNextHandler.$LambdaAdaptor$impl');
 }
}
WizardStepNextHandler.$markImplementor(/**@type {Function}*/ (WizardStepNextHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (WizardStepNextHandler), 'org.patternfly.component.wizard.WizardStepNextHandler');

exports = WizardStepNextHandler;

//# sourceMappingURL=WizardStepNextHandler.js.map
