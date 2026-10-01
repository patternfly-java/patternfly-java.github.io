goog.module('org.patternfly.component.wizard.WizardStepEnterHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WizardStepEnterHandler = goog.require('org.patternfly.component.wizard.WizardStepEnterHandler$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');

/**
 * @implements {WizardStepEnterHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Wizard, WizardStep):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Wizard, WizardStep):void} @nodts*/
  this.f_fn__org_patternfly_component_wizard_WizardStepEnterHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_wizard_WizardStepEnterHandler_$LambdaAdaptor__org_patternfly_component_wizard_WizardStepEnterHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardStepEnterHandler_$LambdaAdaptor__org_patternfly_component_wizard_WizardStepEnterHandler_$JsFunction__void(/** ?function(Wizard, WizardStep):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_wizard_WizardStepEnterHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onEnter__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__void(/** Wizard */ arg0, /** WizardStep */ arg1) {
  {
   let $function = this.f_fn__org_patternfly_component_wizard_WizardStepEnterHandler_$LambdaAdaptor;
   $function(arg0, arg1);
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
WizardStepEnterHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.wizard.WizardStepEnterHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=WizardStepEnterHandler$$LambdaAdaptor.js.map
