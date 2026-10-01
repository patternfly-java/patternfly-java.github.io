goog.module('org.patternfly.component.wizard.WizardStepChangeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WizardStepChangeHandler = goog.require('org.patternfly.component.wizard.WizardStepChangeHandler$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');

/**
 * @implements {WizardStepChangeHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Wizard, WizardStep, WizardStep):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Wizard, WizardStep, WizardStep):void} @nodts*/
  this.f_fn__org_patternfly_component_wizard_WizardStepChangeHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_wizard_WizardStepChangeHandler_$LambdaAdaptor__org_patternfly_component_wizard_WizardStepChangeHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardStepChangeHandler_$LambdaAdaptor__org_patternfly_component_wizard_WizardStepChangeHandler_$JsFunction__void(/** ?function(Wizard, WizardStep, WizardStep):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_wizard_WizardStepChangeHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onStepChange__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__void(/** Wizard */ arg0, /** WizardStep */ arg1, /** WizardStep */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_component_wizard_WizardStepChangeHandler_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
  }
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
WizardStepChangeHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.wizard.WizardStepChangeHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=WizardStepChangeHandler$$LambdaAdaptor.js.map
