goog.module('org.patternfly.component.wizard.WizardStep$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const WizardSubComponent = goog.require('org.patternfly.component.wizard.WizardSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EnumMap = goog.forwardDeclare('java.util.EnumMap$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardFooterButtons = goog.forwardDeclare('org.patternfly.component.wizard.WizardFooterButtons$impl');
let WizardNavItem = goog.forwardDeclare('org.patternfly.component.wizard.WizardNavItem$impl');
let WizardStepEnterHandler = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepEnterHandler$impl');
let WizardStepLeaveHandler = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepLeaveHandler$impl');
let WizardStepNextHandler = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepNextHandler$impl');
let WizardStepNextPromise = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepNextPromise$impl');
let WizardStepPreviousHandler = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepPreviousHandler$impl');
let WizardStepPreviousPromise = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepPreviousPromise$impl');
let WizardStepType = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepType$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {WizardSubComponent<HTMLElement, WizardStep>}
 * @implements {ComponentContext<HTMLElement, WizardStep>}
 * @implements {Disabled<HTMLElement, WizardStep>}
 * @implements {ElementContainerDelegate<HTMLElement, WizardStep>}
 * @implements {HasIdentifier<HTMLElement, WizardStep>}
 */
class WizardStep extends WizardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_wizard_WizardStep_;
  /**@type {HTMLElement} @nodts*/
  this.f_bodyElement__org_patternfly_component_wizard_WizardStep_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_wizard_WizardStep_;
  /**@type {ValidationStatus} @nodts*/
  this.f_status__org_patternfly_component_wizard_WizardStep_;
  /**@type {?string} @nodts*/
  this.f_title__org_patternfly_component_wizard_WizardStep;
  /**@type {WizardStepType} @nodts*/
  this.f_type__org_patternfly_component_wizard_WizardStep;
  /**@type {EnumMap<WizardFooterButtons, ?string>} @nodts*/
  this.f_customButtonNames__org_patternfly_component_wizard_WizardStep;
  /**@type {boolean} @nodts*/
  this.f_disabled__org_patternfly_component_wizard_WizardStep = false;
  /**@type {boolean} @nodts*/
  this.f_visited__org_patternfly_component_wizard_WizardStep = false;
  /**@type {WizardStep} @nodts*/
  this.f_previous__org_patternfly_component_wizard_WizardStep;
  /**@type {WizardStep} @nodts*/
  this.f_next__org_patternfly_component_wizard_WizardStep;
  /**@type {WizardStepPreviousHandler} @nodts*/
  this.f_previousHandler__org_patternfly_component_wizard_WizardStep;
  /**@type {WizardStepPreviousPromise} @nodts*/
  this.f_previousPromise__org_patternfly_component_wizard_WizardStep;
  /**@type {WizardStepNextHandler} @nodts*/
  this.f_nextHandler__org_patternfly_component_wizard_WizardStep;
  /**@type {WizardStepNextPromise} @nodts*/
  this.f_nextPromise__org_patternfly_component_wizard_WizardStep;
  /**@type {WizardStepEnterHandler} @nodts*/
  this.f_enterHandler__org_patternfly_component_wizard_WizardStep;
  /**@type {WizardStepLeaveHandler} @nodts*/
  this.f_leaveHandler__org_patternfly_component_wizard_WizardStep;
 }
 /** @nodts @return {WizardStep} */
 static m_wizardStep__java_lang_String__java_lang_String__org_patternfly_component_wizard_WizardStep(/** ?string */ identifier, /** ?string */ title) {
  WizardStep.$clinit();
  return WizardStep.$create__java_lang_String__java_lang_String__org_patternfly_component_wizard_WizardStepType(identifier, title, WizardStepType.f_step__org_patternfly_component_wizard_WizardStepType);
 }
 /** @nodts @return {WizardStep} */
 static m_wizardStep__java_lang_String__java_lang_String__org_patternfly_component_wizard_WizardStepType__org_patternfly_component_wizard_WizardStep(/** ?string */ identifier, /** ?string */ title, /** WizardStepType */ type) {
  WizardStep.$clinit();
  return WizardStep.$create__java_lang_String__java_lang_String__org_patternfly_component_wizard_WizardStepType(identifier, title, type);
 }
 /** @nodts @return {!WizardStep} */
 static $create__java_lang_String__java_lang_String__org_patternfly_component_wizard_WizardStepType(/** ?string */ identifier, /** ?string */ title, /** WizardStepType */ type) {
  WizardStep.$clinit();
  let $instance = new WizardStep();
  $instance.$ctor__org_patternfly_component_wizard_WizardStep__java_lang_String__java_lang_String__org_patternfly_component_wizard_WizardStepType__void(identifier, title, type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardStep__java_lang_String__java_lang_String__org_patternfly_component_wizard_WizardStepType__void(/** ?string */ identifier, /** ?string */ title, /** WizardStepType */ type) {
  this.$ctor__org_patternfly_component_wizard_WizardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(WizardStep.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardStep, WizardStep.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardStep, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_identifier__org_patternfly_component_wizard_WizardStep_ = identifier;
  this.f_title__org_patternfly_component_wizard_WizardStep = title;
  this.f_type__org_patternfly_component_wizard_WizardStep = type;
  this.f_visited__org_patternfly_component_wizard_WizardStep = false;
  this.f_data__org_patternfly_component_wizard_WizardStep_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_customButtonNames__org_patternfly_component_wizard_WizardStep = (/**@type {!EnumMap<WizardFooterButtons, ?string>}*/ (EnumMap.$create__java_lang_Class(Class.$get(WizardFooterButtons))));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_bodyElement__org_patternfly_component_wizard_WizardStep_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_bodyElement__org_patternfly_component_wizard_WizardStep_;
 }
 /** @nodts @return {WizardStep} */
 m_customButtonName__org_patternfly_component_wizard_WizardFooterButtons__java_lang_String__org_patternfly_component_wizard_WizardStep(/** WizardFooterButtons */ button, /** ?string */ name) {
  this.f_customButtonNames__org_patternfly_component_wizard_WizardStep.m_put__java_lang_Enum__java_lang_Object__java_lang_Object(button, name);
  return this;
 }
 /** @nodts @return {WizardStep} */
 m_disabled__boolean__org_patternfly_component_wizard_WizardStep(/** boolean */ disabled) {
  this.f_disabled__org_patternfly_component_wizard_WizardStep = disabled;
  this.m_applyToNavItem__java_util_function_Consumer__void_$p_org_patternfly_component_wizard_WizardStep(Consumer.$adapt((/** WizardNavItem */ navItem) =>{
   let navItem_1 = /**@type {WizardNavItem}*/ ($Casts.$to(navItem, WizardNavItem));
   navItem_1.m_disabled__boolean__org_patternfly_component_wizard_WizardNavItem(disabled);
  }));
  return this;
 }
 /** @nodts @template T @return {WizardStep} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_wizard_WizardStep(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_wizard_WizardStep_.put(key, value);
  return this;
 }
 /** @nodts @return {WizardStep} */
 m_that__org_patternfly_component_wizard_WizardStep() {
  return this;
 }
 /** @nodts @return {WizardStep} */
 m_previousIf__org_patternfly_component_wizard_WizardStepPreviousHandler__org_patternfly_component_wizard_WizardStep(/** WizardStepPreviousHandler */ handler) {
  if (!$Equality.$same(this.f_previousPromise__org_patternfly_component_wizard_WizardStep, null)) {
   WizardStep.f_logger__org_patternfly_component_wizard_WizardStep_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Previous promise already set for step \'{}\'. Overwriting with callback.', [this.f_identifier__org_patternfly_component_wizard_WizardStep_]);
   this.f_previousPromise__org_patternfly_component_wizard_WizardStep = null;
  }
  this.f_previousHandler__org_patternfly_component_wizard_WizardStep = handler;
  return this;
 }
 /** @nodts @return {WizardStep} */
 m_previousIfPromised__org_patternfly_component_wizard_WizardStepPreviousPromise__org_patternfly_component_wizard_WizardStep(/** WizardStepPreviousPromise */ promise) {
  if (!$Equality.$same(this.f_previousHandler__org_patternfly_component_wizard_WizardStep, null)) {
   WizardStep.f_logger__org_patternfly_component_wizard_WizardStep_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Previous callback already set for step \'{}\'. Overwriting with promise.', [this.f_identifier__org_patternfly_component_wizard_WizardStep_]);
   this.f_previousHandler__org_patternfly_component_wizard_WizardStep = null;
  }
  this.f_previousPromise__org_patternfly_component_wizard_WizardStep = promise;
  return this;
 }
 /** @nodts @return {WizardStep} */
 m_nextIf__org_patternfly_component_wizard_WizardStepNextHandler__org_patternfly_component_wizard_WizardStep(/** WizardStepNextHandler */ handler) {
  if (!$Equality.$same(this.f_nextPromise__org_patternfly_component_wizard_WizardStep, null)) {
   WizardStep.f_logger__org_patternfly_component_wizard_WizardStep_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Next promise already set for step \'%s\'. Overwriting with callback.', [this.f_identifier__org_patternfly_component_wizard_WizardStep_]);
   this.f_nextPromise__org_patternfly_component_wizard_WizardStep = null;
  }
  this.f_nextHandler__org_patternfly_component_wizard_WizardStep = handler;
  return this;
 }
 /** @nodts @return {WizardStep} */
 m_nextIfPromised__org_patternfly_component_wizard_WizardStepNextPromise__org_patternfly_component_wizard_WizardStep(/** WizardStepNextPromise */ promise) {
  if (!$Equality.$same(this.f_nextHandler__org_patternfly_component_wizard_WizardStep, null)) {
   WizardStep.f_logger__org_patternfly_component_wizard_WizardStep_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Next callback already set for step \'%s\'. Overwriting with promise.', [this.f_identifier__org_patternfly_component_wizard_WizardStep_]);
   this.f_nextHandler__org_patternfly_component_wizard_WizardStep = null;
  }
  this.f_nextPromise__org_patternfly_component_wizard_WizardStep = promise;
  return this;
 }
 /** @nodts @return {WizardStep} */
 m_onEnter__org_patternfly_component_wizard_WizardStepEnterHandler__org_patternfly_component_wizard_WizardStep(/** WizardStepEnterHandler */ handler) {
  this.f_enterHandler__org_patternfly_component_wizard_WizardStep = handler;
  return this;
 }
 /** @nodts @return {WizardStep} */
 m_onLeave__org_patternfly_component_wizard_WizardStepLeaveHandler__org_patternfly_component_wizard_WizardStep(/** WizardStepLeaveHandler */ handler) {
  this.f_leaveHandler__org_patternfly_component_wizard_WizardStep = handler;
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_wizard_WizardStep_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_wizard_WizardStep_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_wizard_WizardStep_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_wizard_WizardStep_.get(key));
  }
  return null;
 }
 /** @nodts @return {WizardStep} */
 m_next__org_patternfly_component_wizard_WizardStep() {
  return this.f_next__org_patternfly_component_wizard_WizardStep;
 }
 /** @nodts @return {WizardStep} */
 m_previous__org_patternfly_component_wizard_WizardStep() {
  return this.f_previous__org_patternfly_component_wizard_WizardStep;
 }
 /** @nodts @return {ValidationStatus} */
 m_status__org_patternfly_component_ValidationStatus() {
  return this.f_status__org_patternfly_component_wizard_WizardStep_;
 }
 /** @nodts */
 m_status__org_patternfly_component_ValidationStatus__void(/** ValidationStatus */ status) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_element__elemental2_dom_HTMLElement(), 'status', status, ValidationStatus.f_success__org_patternfly_component_ValidationStatus, /**@type {!Array<ValidationStatus>}*/ ($Arrays.$stampType([ValidationStatus.f_warning__org_patternfly_component_ValidationStatus, ValidationStatus.f_error__org_patternfly_component_ValidationStatus], ValidationStatus)))) {
   this.f_status__org_patternfly_component_wizard_WizardStep_ = status;
   this.m_applyToNavItem__java_util_function_Consumer__void_$p_org_patternfly_component_wizard_WizardStep(Consumer.$adapt((/** WizardNavItem */ navItem) =>{
    let navItem_1 = /**@type {WizardNavItem}*/ ($Casts.$to(navItem, WizardNavItem));
    navItem_1.m_status__org_patternfly_component_ValidationStatus__void_$pp_org_patternfly_component_wizard(status);
   }));
  }
 }
 /** @nodts */
 m_clearStatus__void() {
  this.f_status__org_patternfly_component_wizard_WizardStep_ = null;
  this.m_applyToNavItem__java_util_function_Consumer__void_$p_org_patternfly_component_wizard_WizardStep(Consumer.$adapt((/** WizardNavItem */ navItem) =>{
   let navItem_1 = /**@type {WizardNavItem}*/ ($Casts.$to(navItem, WizardNavItem));
   navItem_1.m_status__org_patternfly_component_ValidationStatus__void_$pp_org_patternfly_component_wizard(null);
  }));
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return this.f_disabled__org_patternfly_component_wizard_WizardStep;
 }
 /** @nodts @return {boolean} */
 m_visited__boolean() {
  return this.f_visited__org_patternfly_component_wizard_WizardStep;
 }
 /** @nodts */
 m_select__boolean__void_$pp_org_patternfly_component_wizard(/** boolean */ selected) {
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.m_element__elemental2_dom_HTMLElement(), selected);
  this.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes], j_l_String))), selected);
  if (selected) {
   this.m_element__elemental2_dom_HTMLElement().tabIndex = -1;
  } else {
   this.m_element__elemental2_dom_HTMLElement().removeAttribute(Attributes.f_tabindex__org_patternfly_core_Attributes);
  }
 }
 /** @nodts */
 m_applyToNavItem__java_util_function_Consumer__void_$p_org_patternfly_component_wizard_WizardStep(/** Consumer<WizardNavItem> */ consumer) {
  let wizard = /**@type {Wizard}*/ ($Casts.$to(this.m_lookupComponent__boolean__org_patternfly_component_BaseComponent(true), Wizard));
  if (!$Equality.$same(wizard, null)) {
   let navItem = wizard.f_nav__org_patternfly_component_wizard_Wizard.m_item__java_lang_String__org_patternfly_component_wizard_WizardNavItem(this.f_identifier__org_patternfly_component_wizard_WizardStep_);
   if (!$Equality.$same(navItem, null)) {
    consumer.m_accept__java_lang_Object__void(navItem);
   } else {
    WizardStep.f_logger__org_patternfly_component_wizard_WizardStep_.m_error__java_lang_String__arrayOf_java_lang_Object__void('No nav item found for wizard step %s. Identifiers do not match!', [this.f_identifier__org_patternfly_component_wizard_WizardStep_]);
   }
  } else {
   WizardStep.f_logger__org_patternfly_component_wizard_WizardStep_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Cannot modify wizard nav item of wizard step %s. Wizard is not yet attached to the DOM.', [this.f_identifier__org_patternfly_component_wizard_WizardStep_]);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardStep} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_WizardStep();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {WizardStep} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_wizard_WizardStep(arg0, arg1);
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
 //Bridge method.
 /** @final @override @nodts @return {WizardStep} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {WizardStep}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), WizardStep));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardStep} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_wizard_WizardStep(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardStep} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {WizardStep}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), WizardStep));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardStep} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {WizardStep}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), WizardStep));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardStep} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {WizardStep}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), WizardStep));
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardStep} */
 m_disabled__org_patternfly_component_wizard_WizardStep() {
  return /**@type {WizardStep}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), WizardStep));
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardStep} */
 m_add__java_lang_String__org_patternfly_component_wizard_WizardStep(/** ?string */ arg0) {
  return /**@type {WizardStep}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), WizardStep));
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardStep} */
 m_add__elemental2_dom_Node__org_patternfly_component_wizard_WizardStep(/** Node */ arg0) {
  return /**@type {WizardStep}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), WizardStep));
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardStep} */
 m_add__java_util_function_Supplier__org_patternfly_component_wizard_WizardStep(/** Supplier<Node> */ arg0) {
  return /**@type {WizardStep}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), WizardStep));
 }
 /** @nodts */
 static $clinit() {
  WizardStep.$clinit = () =>{};
  WizardStep.$loadModules();
  WizardSubComponent.$clinit();
  ComponentContext.$clinit();
  Disabled.$clinit();
  ElementContainerDelegate.$clinit();
  WizardStep.f_logger__org_patternfly_component_wizard_WizardStep_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(WizardStep).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardStep;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumMap = goog.module.get('java.util.EnumMap$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Wizard = goog.module.get('org.patternfly.component.wizard.Wizard$impl');
  WizardFooterButtons = goog.module.get('org.patternfly.component.wizard.WizardFooterButtons$impl');
  WizardNavItem = goog.module.get('org.patternfly.component.wizard.WizardNavItem$impl');
  WizardStepType = goog.module.get('org.patternfly.component.wizard.WizardStepType$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
WizardStep.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardStep = 'wzs';
/**@const {string} @nodts*/
WizardStep.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardStep = 'WizardStep';
/**@type {Logger} @nodts*/
WizardStep.f_logger__org_patternfly_component_wizard_WizardStep_;
ComponentContext.$markImplementor(WizardStep);
Disabled.$markImplementor(WizardStep);
ElementContainerDelegate.$markImplementor(WizardStep);
HasIdentifier.$markImplementor(WizardStep);
$Util.$setClassMetadata(WizardStep, 'org.patternfly.component.wizard.WizardStep');

exports = WizardStep;

//# sourceMappingURL=WizardStep.js.map
