goog.module('org.patternfly.component.wizard.WizardStepLeaveHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WizardStepLeaveHandler = goog.require('org.patternfly.component.wizard.WizardStepLeaveHandler$impl');

let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');

/**
 * @implements {WizardStepLeaveHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Wizard, WizardStep):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Wizard, WizardStep):void} @nodts*/
  this.f_fn__org_patternfly_component_wizard_WizardStepLeaveHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_wizard_WizardStepLeaveHandler_$LambdaAdaptor__org_patternfly_component_wizard_WizardStepLeaveHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardStepLeaveHandler_$LambdaAdaptor__org_patternfly_component_wizard_WizardStepLeaveHandler_$JsFunction__void(/** ?function(Wizard, WizardStep):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_wizard_WizardStepLeaveHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onLeave__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__void(/** Wizard */ arg0, /** WizardStep */ arg1) {
  {
   let $function = this.f_fn__org_patternfly_component_wizard_WizardStepLeaveHandler_$LambdaAdaptor;
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
WizardStepLeaveHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.wizard.WizardStepLeaveHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=WizardStepLeaveHandler$$LambdaAdaptor.js.map
