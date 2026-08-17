goog.module('org.patternfly.component.wizard.WizardStepEnterHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepEnterHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class WizardStepEnterHandler {
 /** @abstract @nodts */
 m_onEnter__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__void(/** Wizard */ wizard, /** WizardStep */ step) {}
 /** @nodts @return {!WizardStepEnterHandler} */
 static $adapt(/** ?function(Wizard, WizardStep):void */ fn) {
  WizardStepEnterHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  WizardStepEnterHandler.$clinit = () =>{};
  WizardStepEnterHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_wizard_WizardStepEnterHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_wizard_WizardStepEnterHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.wizard.WizardStepEnterHandler.$LambdaAdaptor$impl');
 }
}
WizardStepEnterHandler.$markImplementor(/**@type {Function}*/ (WizardStepEnterHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (WizardStepEnterHandler), 'org.patternfly.component.wizard.WizardStepEnterHandler');

exports = WizardStepEnterHandler;

//# sourceMappingURL=WizardStepEnterHandler.js.map
