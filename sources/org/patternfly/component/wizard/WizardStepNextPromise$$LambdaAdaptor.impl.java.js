goog.module('org.patternfly.component.wizard.WizardStepNextPromise.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WizardStepNextPromise = goog.require('org.patternfly.component.wizard.WizardStepNextPromise$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');

/**
 * @implements {WizardStepNextPromise}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Wizard, WizardStep, WizardStep):Promise<?boolean> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Wizard, WizardStep, WizardStep):Promise<?boolean>} @nodts*/
  this.f_fn__org_patternfly_component_wizard_WizardStepNextPromise_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_wizard_WizardStepNextPromise_$LambdaAdaptor__org_patternfly_component_wizard_WizardStepNextPromise_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardStepNextPromise_$LambdaAdaptor__org_patternfly_component_wizard_WizardStepNextPromise_$JsFunction__void(/** ?function(Wizard, WizardStep, WizardStep):Promise<?boolean> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_wizard_WizardStepNextPromise_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Promise<?boolean>} */
 m_onNext__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__elemental2_promise_Promise(/** Wizard */ arg0, /** WizardStep */ arg1, /** WizardStep */ arg2) {
  let /** ?function(Wizard, WizardStep, WizardStep):Promise<?boolean> */ $function;
  return ($function = this.f_fn__org_patternfly_component_wizard_WizardStepNextPromise_$LambdaAdaptor, $function(arg0, arg1, arg2));
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
WizardStepNextPromise.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.wizard.WizardStepNextPromise$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=WizardStepNextPromise$$LambdaAdaptor.js.map
