goog.module('org.patternfly.component.wizard.WizardContext$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');

/**
 * @implements {ComponentContext<HTMLElement, WizardContext>}
 */
class WizardContext extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Wizard} @nodts*/
  this.f_wizard__org_patternfly_component_wizard_WizardContext_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_wizard_WizardContext_;
 }
 /** @nodts @return {!WizardContext} */
 static $create__org_patternfly_component_wizard_Wizard(/** Wizard */ wizard) {
  WizardContext.$clinit();
  let $instance = new WizardContext();
  $instance.$ctor__org_patternfly_component_wizard_WizardContext__org_patternfly_component_wizard_Wizard__void(wizard);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardContext__org_patternfly_component_wizard_Wizard__void(/** Wizard */ wizard) {
  this.$ctor__java_lang_Object__void();
  this.f_wizard__org_patternfly_component_wizard_WizardContext_ = wizard;
  this.f_data__org_patternfly_component_wizard_WizardContext_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_wizard_WizardContext_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_wizard_WizardContext_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_wizard_WizardContext_.get(key));
  }
  return null;
 }
 /** @nodts @template T @return {WizardContext} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_wizard_WizardContext(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_wizard_WizardContext_.put(key, value);
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_wizard__org_patternfly_component_wizard_WizardContext_.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts @return {WizardContext} */
 m_that__org_patternfly_component_wizard_WizardContext() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardContext} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_WizardContext();
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {WizardContext} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_wizard_WizardContext(arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ arg0, /** T */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ arg0, /** Supplier<T> */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  WizardContext.$clinit = () =>{};
  WizardContext.$loadModules();
  j_l_Object.$clinit();
  ComponentContext.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardContext;
 }
 
 /** @nodts */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
 }
}
ComponentContext.$markImplementor(WizardContext);
$Util.$setClassMetadata(WizardContext, 'org.patternfly.component.wizard.WizardContext');

exports = WizardContext;

//# sourceMappingURL=WizardContext.js.map
