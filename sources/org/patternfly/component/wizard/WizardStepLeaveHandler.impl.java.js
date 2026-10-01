goog.module('org.patternfly.component.wizard.WizardStepLeaveHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepLeaveHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class WizardStepLeaveHandler {
 /** @abstract @nodts */
 m_onLeave__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__void(/** Wizard */ wizard, /** WizardStep */ step) {}
 /** @nodts @return {!WizardStepLeaveHandler} */
 static $adapt(/** ?function(Wizard, WizardStep):void */ fn) {
  WizardStepLeaveHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  WizardStepLeaveHandler.$clinit = () =>{};
  WizardStepLeaveHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_wizard_WizardStepLeaveHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_wizard_WizardStepLeaveHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.wizard.WizardStepLeaveHandler.$LambdaAdaptor$impl');
 }
}
WizardStepLeaveHandler.$markImplementor(/**@type {Function}*/ (WizardStepLeaveHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (WizardStepLeaveHandler), 'org.patternfly.component.wizard.WizardStepLeaveHandler');

exports = WizardStepLeaveHandler;

//# sourceMappingURL=WizardStepLeaveHandler.js.map
