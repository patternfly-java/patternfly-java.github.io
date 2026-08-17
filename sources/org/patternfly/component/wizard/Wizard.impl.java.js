goog.module('org.patternfly.component.wizard.Wizard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let WizardContext = goog.forwardDeclare('org.patternfly.component.wizard.WizardContext$impl');
let WizardFooter = goog.forwardDeclare('org.patternfly.component.wizard.WizardFooter$impl');
let WizardHeader = goog.forwardDeclare('org.patternfly.component.wizard.WizardHeader$impl');
let WizardNav = goog.forwardDeclare('org.patternfly.component.wizard.WizardNav$impl');
let WizardNavItem = goog.forwardDeclare('org.patternfly.component.wizard.WizardNavItem$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let WizardStepChangeHandler = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepChangeHandler$impl');
let WizardStepType = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Wizard>}
 * @implements {HasItems<HTMLElement, Wizard, WizardStep>}
 * @implements {Plain<HTMLElement, Wizard>}
 */
class Wizard extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {WizardContext} @nodts*/
  this.f_context__org_patternfly_component_wizard_Wizard_;
  /**@type {Map<?string, WizardStep>} @nodts*/
  this.f_items__org_patternfly_component_wizard_Wizard_;
  /**@type {List<ComponentHandler<Wizard>>} @nodts*/
  this.f_cancelHandler__org_patternfly_component_wizard_Wizard_;
  /**@type {List<ComponentHandler<Wizard>>} @nodts*/
  this.f_finishHandler__org_patternfly_component_wizard_Wizard_;
  /**@type {AurHandler<Wizard, WizardStep>} @nodts*/
  this.f_aur__org_patternfly_component_wizard_Wizard_;
  /**@type {List<WizardStepChangeHandler>} @nodts*/
  this.f_stepChangeHandlers__org_patternfly_component_wizard_Wizard_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_innerWrap__org_patternfly_component_wizard_Wizard_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_toggleButton__org_patternfly_component_wizard_Wizard_;
  /**@type {boolean} @nodts*/
  this.f_progressive__org_patternfly_component_wizard_Wizard_ = false;
  /**@type {boolean} @nodts*/
  this.f_visitRequired__org_patternfly_component_wizard_Wizard_ = false;
  /**@type {WizardStep} @nodts*/
  this.f_head__org_patternfly_component_wizard_Wizard_;
  /**@type {WizardStep} @nodts*/
  this.f_current__org_patternfly_component_wizard_Wizard_;
  /**@type {WizardStep} @nodts*/
  this.f_tail__org_patternfly_component_wizard_Wizard_;
  /**@type {WizardHeader} @nodts*/
  this.f_header__org_patternfly_component_wizard_Wizard_;
  /**@type {WizardNav} @nodts*/
  this.f_nav__org_patternfly_component_wizard_Wizard;
  /**@type {WizardFooter} @nodts*/
  this.f_footer__org_patternfly_component_wizard_Wizard;
 }
 /** @nodts @return {Wizard} */
 static m_wizard__org_patternfly_component_wizard_Wizard() {
  Wizard.$clinit();
  return Wizard.$create__();
 }
 /** @nodts @return {!Wizard} */
 static $create__() {
  Wizard.$clinit();
  let $instance = new Wizard();
  $instance.$ctor__org_patternfly_component_wizard_Wizard__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_Wizard__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Wizard__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_context__org_patternfly_component_wizard_Wizard_ = WizardContext.$create__org_patternfly_component_wizard_Wizard(this);
  this.f_items__org_patternfly_component_wizard_Wizard_ = (/**@type {!LinkedHashMap<?string, WizardStep>}*/ (LinkedHashMap.$create__()));
  this.f_cancelHandler__org_patternfly_component_wizard_Wizard_ = (/**@type {!ArrayList<ComponentHandler<Wizard>>}*/ (ArrayList.$create__()));
  this.f_finishHandler__org_patternfly_component_wizard_Wizard_ = (/**@type {!ArrayList<ComponentHandler<Wizard>>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_wizard_Wizard_ = (/**@type {!AurHandler<Wizard, WizardStep>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_stepChangeHandlers__org_patternfly_component_wizard_Wizard_ = (/**@type {!ArrayList<WizardStepChangeHandler>}*/ (ArrayList.$create__()));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_wizard_Wizard_ = (/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Wizard toggle'), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLContainerBuilder))));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_outerWrap__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_innerWrap__org_patternfly_component_wizard_Wizard_ = (/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_innerWrap__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_nav__org_patternfly_component_wizard_Wizard = WizardNav.$create__()), HTMLContainerBuilder)))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_footer__org_patternfly_component_wizard_Wizard = WizardFooter.$create__()), HTMLContainerBuilder)));
  this.m_storeComponent__void();
 }
 /** @nodts @return {Wizard} */
 m_add__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_Wizard(/** WizardStep */ item) {
  if (this.f_items__org_patternfly_component_wizard_Wizard_.containsKey(item.m_identifier__java_lang_String())) {
   Wizard.f_logger__org_patternfly_component_wizard_Wizard_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Wizard \'%o\' already contains step with identifier \'%s\'.', [this.m_element__elemental2_dom_HTMLElement(), item.m_identifier__java_lang_String()]);
  } else {
   let /** WizardNavItem */ navItem = null;
   if (this.f_progressive__org_patternfly_component_wizard_Wizard_ && $Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, null) || !this.f_progressive__org_patternfly_component_wizard_Wizard_ && ($Equality.$same(item.f_type__org_patternfly_component_wizard_WizardStep, WizardStepType.f_step__org_patternfly_component_wizard_WizardStepType) || $Equality.$same(item.f_type__org_patternfly_component_wizard_WizardStep, WizardStepType.f_review__org_patternfly_component_wizard_WizardStepType))) {
    navItem = WizardNavItem.$create__java_lang_String__java_lang_String(item.m_identifier__java_lang_String(), item.f_title__org_patternfly_component_wizard_WizardStep);
    if (item.f_disabled__org_patternfly_component_wizard_WizardStep) {
     navItem.m_disabled__boolean__org_patternfly_component_wizard_WizardNavItem(true);
    }
    this.f_nav__org_patternfly_component_wizard_Wizard.m_add__org_patternfly_component_wizard_WizardNavItem__org_patternfly_component_wizard_WizardNav(navItem);
   }
   this.f_items__org_patternfly_component_wizard_Wizard_.put(item.m_identifier__java_lang_String(), item);
   this.f_innerWrap__org_patternfly_component_wizard_Wizard_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item);
   if ($Equality.$same(this.f_tail__org_patternfly_component_wizard_Wizard_, null)) {
    this.f_head__org_patternfly_component_wizard_Wizard_ = this.f_tail__org_patternfly_component_wizard_Wizard_ = item;
   } else {
    this.f_tail__org_patternfly_component_wizard_Wizard_.f_next__org_patternfly_component_wizard_WizardStep = item;
    item.f_previous__org_patternfly_component_wizard_WizardStep = this.f_tail__org_patternfly_component_wizard_Wizard_;
    this.f_tail__org_patternfly_component_wizard_Wizard_ = item;
   }
   if ($Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, null)) {
    this.m_select__org_patternfly_component_wizard_WizardStep__void(item);
   } else {
    item.m_select__boolean__void_$pp_org_patternfly_component_wizard(false);
    if (this.f_visitRequired__org_patternfly_component_wizard_Wizard_ && !$Equality.$same(navItem, null)) {
     navItem.m_disabled__boolean__org_patternfly_component_wizard_WizardNavItem(true);
    }
   }
   this.f_aur__org_patternfly_component_wizard_Wizard_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
  return this;
 }
 /** @nodts @return {Wizard} */
 m_addHeader__org_patternfly_component_wizard_WizardHeader__org_patternfly_component_wizard_Wizard(/** WizardHeader */ header) {
  return this.m_add__org_patternfly_component_wizard_WizardHeader__org_patternfly_component_wizard_Wizard(header);
 }
 /** @nodts @return {Wizard} */
 m_add__org_patternfly_component_wizard_WizardHeader__org_patternfly_component_wizard_Wizard(/** WizardHeader */ header) {
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), header.m_element__elemental2_dom_HTMLElement());
  this.f_header__org_patternfly_component_wizard_Wizard_ = header;
  return this;
 }
 /** @nodts @return {Wizard} */
 m_height__int__org_patternfly_component_wizard_Wizard(/** number */ height) {
  return /**@type {Wizard}*/ ($Casts.$to(this.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('--pf-v6-c-wizard--Height', height + 'px'), Wizard));
 }
 /** @nodts @return {Wizard} */
 m_progressive__org_patternfly_component_wizard_Wizard() {
  return this.m_progressive__boolean__org_patternfly_component_wizard_Wizard(true);
 }
 /** @nodts @return {Wizard} */
 m_progressive__boolean__org_patternfly_component_wizard_Wizard(/** boolean */ progressive) {
  this.f_progressive__org_patternfly_component_wizard_Wizard_ = progressive;
  return this;
 }
 /** @nodts @return {Wizard} */
 m_visitRequired__org_patternfly_component_wizard_Wizard() {
  return this.m_visitRequired__boolean__org_patternfly_component_wizard_Wizard(true);
 }
 /** @nodts @return {Wizard} */
 m_visitRequired__boolean__org_patternfly_component_wizard_Wizard(/** boolean */ visitRequired) {
  this.f_visitRequired__org_patternfly_component_wizard_Wizard_ = visitRequired;
  return this;
 }
 /** @nodts @return {Wizard} */
 m_that__org_patternfly_component_wizard_Wizard() {
  return this;
 }
 /** @nodts @return {Wizard} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_wizard_Wizard(/** AddItemHandler<Wizard, WizardStep> */ onAdd) {
  return /**@type {Wizard}*/ ($Casts.$to(this.f_aur__org_patternfly_component_wizard_Wizard_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Wizard));
 }
 /** @nodts @return {Wizard} */
 m_onCancel__org_patternfly_handler_ComponentHandler__org_patternfly_component_wizard_Wizard(/** ComponentHandler<Wizard> */ handler) {
  this.f_cancelHandler__org_patternfly_component_wizard_Wizard_.add(handler);
  return this;
 }
 /** @nodts @return {Wizard} */
 m_onFinish__org_patternfly_handler_ComponentHandler__org_patternfly_component_wizard_Wizard(/** ComponentHandler<Wizard> */ handler) {
  this.f_finishHandler__org_patternfly_component_wizard_Wizard_.add(handler);
  return this;
 }
 /** @nodts @return {Wizard} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_wizard_Wizard(/** UpdateItemHandler<Wizard, WizardStep> */ onUpdate) {
  return /**@type {Wizard}*/ ($Casts.$to(this.f_aur__org_patternfly_component_wizard_Wizard_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Wizard));
 }
 /** @nodts @return {Wizard} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_wizard_Wizard(/** RemoveItemHandler<Wizard, WizardStep> */ onRemove) {
  return /**@type {Wizard}*/ ($Casts.$to(this.f_aur__org_patternfly_component_wizard_Wizard_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Wizard));
 }
 /** @nodts @return {Wizard} */
 m_onStepChange__org_patternfly_component_wizard_WizardStepChangeHandler__org_patternfly_component_wizard_Wizard(/** WizardStepChangeHandler */ stepChangeHandler) {
  this.f_stepChangeHandlers__org_patternfly_component_wizard_Wizard_.add(stepChangeHandler);
  return this;
 }
 /** @override @nodts @return {Iterator<WizardStep>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_wizard_Wizard_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_wizard_Wizard_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_wizard_Wizard_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_wizard_Wizard_.containsKey(identifier);
 }
 /** @nodts @return {WizardStep} */
 m_item__java_lang_String__org_patternfly_component_wizard_WizardStep(/** ?string */ identifier) {
  return /**@type {WizardStep}*/ ($Casts.$to(this.f_items__org_patternfly_component_wizard_Wizard_.get(identifier), WizardStep));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_wizard_WizardStep__void(/** WizardStep */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** WizardStep */ oldItem, /** WizardStep */ newItem) =>{
   let oldItem_1 = /**@type {WizardStep}*/ ($Casts.$to(oldItem, WizardStep));
   let newItem_1 = /**@type {WizardStep}*/ ($Casts.$to(newItem, WizardStep));
   this.f_items__org_patternfly_component_wizard_Wizard_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_wizard_Wizard_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  this.f_nav__org_patternfly_component_wizard_Wizard.m_removeItem__java_lang_String__void(identifier);
  let item = /**@type {WizardStep}*/ ($Casts.$to(this.f_items__org_patternfly_component_wizard_Wizard_.remove(identifier), WizardStep));
  if (!$Equality.$same(item, null)) {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
   if (!$Equality.$same(item.f_previous__org_patternfly_component_wizard_WizardStep, null)) {
    item.f_previous__org_patternfly_component_wizard_WizardStep.f_next__org_patternfly_component_wizard_WizardStep = item.f_next__org_patternfly_component_wizard_WizardStep;
   } else {
    this.f_head__org_patternfly_component_wizard_Wizard_ = item.f_next__org_patternfly_component_wizard_WizardStep;
   }
   if (!$Equality.$same(item.f_next__org_patternfly_component_wizard_WizardStep, null)) {
    item.f_next__org_patternfly_component_wizard_WizardStep.f_previous__org_patternfly_component_wizard_WizardStep = item.f_previous__org_patternfly_component_wizard_WizardStep;
   } else {
    this.f_tail__org_patternfly_component_wizard_Wizard_ = item.f_previous__org_patternfly_component_wizard_WizardStep;
   }
   if ($Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, item)) {
    this.f_current__org_patternfly_component_wizard_Wizard_ = !$Equality.$same(item.f_next__org_patternfly_component_wizard_WizardStep, null) ? item.f_next__org_patternfly_component_wizard_WizardStep : item.f_previous__org_patternfly_component_wizard_WizardStep;
    this.m_select__org_patternfly_component_wizard_WizardStep__void(this.f_current__org_patternfly_component_wizard_Wizard_);
   }
   this.f_aur__org_patternfly_component_wizard_Wizard_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @override @nodts */
 m_clear__void() {
  this.f_nav__org_patternfly_component_wizard_Wizard.m_clear__void();
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_innerWrap__org_patternfly_component_wizard_Wizard_);
  this.f_head__org_patternfly_component_wizard_Wizard_ = this.f_tail__org_patternfly_component_wizard_Wizard_ = this.f_current__org_patternfly_component_wizard_Wizard_ = null;
  let iterator = this.f_items__org_patternfly_component_wizard_Wizard_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {WizardStep}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), WizardStep));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_wizard_Wizard_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
  this.f_footer__org_patternfly_component_wizard_Wizard.m_disableButtons__void_$pp_org_patternfly_component_wizard();
 }
 /** @nodts @return {WizardContext} */
 m_context__org_patternfly_component_wizard_WizardContext() {
  return this.f_context__org_patternfly_component_wizard_Wizard_;
 }
 /** @nodts @return {WizardHeader} */
 m_header__org_patternfly_component_wizard_WizardHeader() {
  return this.f_header__org_patternfly_component_wizard_Wizard_;
 }
 /** @nodts @return {WizardNav} */
 m_nav__org_patternfly_component_wizard_WizardNav() {
  return this.f_nav__org_patternfly_component_wizard_Wizard;
 }
 /** @nodts @return {WizardFooter} */
 m_footer__org_patternfly_component_wizard_WizardFooter() {
  return this.f_footer__org_patternfly_component_wizard_Wizard;
 }
 /** @nodts @return {WizardStep} */
 m_firstStep__org_patternfly_component_wizard_WizardStep() {
  return this.f_head__org_patternfly_component_wizard_Wizard_;
 }
 /** @nodts @return {WizardStep} */
 m_lastStep__org_patternfly_component_wizard_WizardStep() {
  return this.f_tail__org_patternfly_component_wizard_Wizard_;
 }
 /** @nodts @return {WizardStep} */
 m_currentStep__org_patternfly_component_wizard_WizardStep() {
  return this.f_current__org_patternfly_component_wizard_Wizard_;
 }
 /** @nodts */
 m_previous__void() {
  if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, null)) {
   let previousStep = this.m_previousEnabledStep__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep_$p_org_patternfly_component_wizard_Wizard(this.f_current__org_patternfly_component_wizard_Wizard_.f_previous__org_patternfly_component_wizard_WizardStep);
   if (!$Equality.$same(previousStep, null)) {
    this.m_navigateBack__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(previousStep);
   }
  }
 }
 /** @nodts */
 m_next__void() {
  if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, null)) {
   let nextStep = this.m_nextEnabledStep__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep_$p_org_patternfly_component_wizard_Wizard(this.f_current__org_patternfly_component_wizard_Wizard_.f_next__org_patternfly_component_wizard_WizardStep);
   if (!$Equality.$same(nextStep, null)) {
    this.m_navigateForward__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(nextStep);
   } else if ($Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, this.f_tail__org_patternfly_component_wizard_Wizard_) || $Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_.f_type__org_patternfly_component_wizard_WizardStep, WizardStepType.f_review__org_patternfly_component_wizard_WizardStepType)) {
    this.m_finish__void_$p_org_patternfly_component_wizard_Wizard();
   }
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_wizard_WizardStep__void(this.m_item__java_lang_String__org_patternfly_component_wizard_WizardStep(identifier));
 }
 /** @nodts */
 m_select__org_patternfly_component_wizard_WizardStep__void(/** WizardStep */ step) {
  if (!$Equality.$same(step, null) && !$Equality.$same(step, this.f_current__org_patternfly_component_wizard_Wizard_) && !step.f_disabled__org_patternfly_component_wizard_WizardStep) {
   if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, null)) {
    if (this.m_isBefore__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean_$p_org_patternfly_component_wizard_Wizard(step, this.f_current__org_patternfly_component_wizard_Wizard_)) {
     this.m_navigateBack__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(step);
    } else if (this.m_isAfter__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean_$p_org_patternfly_component_wizard_Wizard(step, this.f_current__org_patternfly_component_wizard_Wizard_)) {
     this.m_navigateForward__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(step);
    }
   } else {
    this.m_navigateTo__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(step);
   }
  }
 }
 /** @nodts */
 m_cancel__void() {
  for (let $iterator = this.f_cancelHandler__org_patternfly_component_wizard_Wizard_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let handler = /**@type {ComponentHandler<Wizard>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (ComponentHandler)));
   {
    handler.m_handle__elemental2_dom_Event__java_lang_Object__void(new Event(''), this);
   }
  }
 }
 /** @nodts */
 m_navigateBack__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(/** WizardStep */ step) {
  if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_.f_previousHandler__org_patternfly_component_wizard_WizardStep, null)) {
   if (this.f_current__org_patternfly_component_wizard_Wizard_.f_previousHandler__org_patternfly_component_wizard_WizardStep.m_onPrevious__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean(this, this.f_current__org_patternfly_component_wizard_Wizard_, step)) {
    this.m_navigateTo__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(step);
   }
  } else if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_.f_previousPromise__org_patternfly_component_wizard_WizardStep, null)) {
   this.f_footer__org_patternfly_component_wizard_Wizard.m_disableButtons__void_$pp_org_patternfly_component_wizard();
   (/**@type {!Promise<!*>}*/ ((/**@type {!Promise<!*>}*/ (this.f_current__org_patternfly_component_wizard_Wizard_.f_previousPromise__org_patternfly_component_wizard_WizardStep.m_onPrevious__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__elemental2_promise_Promise(this, this.f_current__org_patternfly_component_wizard_Wizard_, step).then(/**  @return {IThenable<*>}*/ ((/** ?boolean */ proceed) =>{
    let proceed_1 = /**@type {?boolean}*/ ($Casts.$to(proceed, Boolean));
    if (Boolean.m_booleanValue__java_lang_Boolean__boolean(proceed_1)) {
     this.m_navigateTo__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(step);
    }
    return null;
   })))).catch(/**  @return {IThenable<*>}*/ ((/** !* */ error) =>{
    return null;
   })))).finally(() =>{
    this.f_footer__org_patternfly_component_wizard_Wizard.m_updateButtons__int__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__void_$pp_org_patternfly_component_wizard(this.m_size__int(), this.f_head__org_patternfly_component_wizard_Wizard_, this.f_current__org_patternfly_component_wizard_Wizard_, this.f_tail__org_patternfly_component_wizard_Wizard_);
   });
  } else {
   this.m_navigateTo__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(step);
  }
 }
 /** @nodts */
 m_navigateForward__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(/** WizardStep */ step) {
  this.m_forwardThen__org_jboss_elemento_Callback__void_$p_org_patternfly_component_wizard_Wizard(Callback.$adapt(() =>{
   this.m_navigateTo__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(step);
  }));
 }
 /** @nodts */
 m_finish__void_$p_org_patternfly_component_wizard_Wizard() {
  this.m_forwardThen__org_jboss_elemento_Callback__void_$p_org_patternfly_component_wizard_Wizard(Callback.$adapt(() =>{
   for (let $iterator = this.f_finishHandler__org_patternfly_component_wizard_Wizard_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let handler = /**@type {ComponentHandler<Wizard>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (ComponentHandler)));
    {
     handler.m_handle__elemental2_dom_Event__java_lang_Object__void(new Event(''), this);
    }
   }
  }));
 }
 /** @nodts */
 m_forwardThen__org_jboss_elemento_Callback__void_$p_org_patternfly_component_wizard_Wizard(/** Callback */ callback) {
  if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_.f_nextHandler__org_patternfly_component_wizard_WizardStep, null)) {
   if (this.f_current__org_patternfly_component_wizard_Wizard_.f_nextHandler__org_patternfly_component_wizard_WizardStep.m_onNext__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean(this, this.f_current__org_patternfly_component_wizard_Wizard_, null)) {
    callback.m_call__void();
   }
  } else if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_.f_nextPromise__org_patternfly_component_wizard_WizardStep, null)) {
   this.f_footer__org_patternfly_component_wizard_Wizard.m_disableButtons__void_$pp_org_patternfly_component_wizard();
   (/**@type {!Promise<!*>}*/ ((/**@type {!Promise<!*>}*/ (this.f_current__org_patternfly_component_wizard_Wizard_.f_nextPromise__org_patternfly_component_wizard_WizardStep.m_onNext__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__elemental2_promise_Promise(this, this.f_current__org_patternfly_component_wizard_Wizard_, null).then(/**  @return {IThenable<*>}*/ ((/** ?boolean */ proceed) =>{
    let proceed_1 = /**@type {?boolean}*/ ($Casts.$to(proceed, Boolean));
    if (Boolean.m_booleanValue__java_lang_Boolean__boolean(proceed_1)) {
     callback.m_call__void();
    }
    return null;
   })))).catch(/**  @return {IThenable<*>}*/ ((/** !* */ error) =>{
    return null;
   })))).finally(() =>{
    this.f_footer__org_patternfly_component_wizard_Wizard.m_updateButtons__int__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__void_$pp_org_patternfly_component_wizard(this.m_size__int(), this.f_head__org_patternfly_component_wizard_Wizard_, this.f_current__org_patternfly_component_wizard_Wizard_, this.f_tail__org_patternfly_component_wizard_Wizard_);
   });
  } else {
   callback.m_call__void();
  }
 }
 /** @nodts */
 m_navigateTo__org_patternfly_component_wizard_WizardStep__void_$p_org_patternfly_component_wizard_Wizard(/** WizardStep */ step) {
  if (!$Equality.$same(step, null) && !$Equality.$same(step, this.f_current__org_patternfly_component_wizard_Wizard_) && !step.f_disabled__org_patternfly_component_wizard_WizardStep) {
   let currentBackup = this.f_current__org_patternfly_component_wizard_Wizard_;
   if (this.f_progressive__org_patternfly_component_wizard_Wizard_ && !$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, null)) {
    if (this.m_isBefore__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean_$p_org_patternfly_component_wizard_Wizard(step, this.f_current__org_patternfly_component_wizard_Wizard_)) {
     for (let remove = step.f_next__org_patternfly_component_wizard_WizardStep; !$Equality.$same(remove, null); remove = remove.f_next__org_patternfly_component_wizard_WizardStep) {
      this.f_nav__org_patternfly_component_wizard_Wizard.m_removeItem__java_lang_String__void(remove.m_identifier__java_lang_String());
     }
    } else if (this.m_isAfter__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean_$p_org_patternfly_component_wizard_Wizard(step, this.f_current__org_patternfly_component_wizard_Wizard_)) {
     for (let add = this.f_current__org_patternfly_component_wizard_Wizard_.f_next__org_patternfly_component_wizard_WizardStep; !$Equality.$same(add, null); add = add.f_next__org_patternfly_component_wizard_WizardStep) {
      this.f_nav__org_patternfly_component_wizard_Wizard.m_add__org_patternfly_component_wizard_WizardNavItem__org_patternfly_component_wizard_WizardNav(WizardNavItem.$create__java_lang_String__java_lang_String(add.m_identifier__java_lang_String(), add.f_title__org_patternfly_component_wizard_WizardStep));
      if ($Equality.$same(add, step)) {
       break;
      }
     }
    }
   }
   if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, null) && !$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_.f_leaveHandler__org_patternfly_component_wizard_WizardStep, null)) {
    this.f_current__org_patternfly_component_wizard_Wizard_.f_leaveHandler__org_patternfly_component_wizard_WizardStep.m_onLeave__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__void(this, this.f_current__org_patternfly_component_wizard_Wizard_);
   }
   this.f_current__org_patternfly_component_wizard_Wizard_ = step;
   this.f_current__org_patternfly_component_wizard_Wizard_.f_visited__org_patternfly_component_wizard_WizardStep = true;
   this.m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_finished__org_patternfly_style_Classes), $Equality.$same(step.f_type__org_patternfly_component_wizard_WizardStep, WizardStepType.f_progress__org_patternfly_component_wizard_WizardStepType) || $Equality.$same(step.f_type__org_patternfly_component_wizard_WizardStep, WizardStepType.f_summary__org_patternfly_component_wizard_WizardStepType));
   for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let ws = /**@type {WizardStep}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), WizardStep));
    {
     ws.m_select__boolean__void_$pp_org_patternfly_component_wizard($Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_, ws));
    }
   }
   this.f_nav__org_patternfly_component_wizard_Wizard.m_select__java_lang_String__void_$pp_org_patternfly_component_wizard(this.f_current__org_patternfly_component_wizard_Wizard_.m_identifier__java_lang_String());
   this.f_footer__org_patternfly_component_wizard_Wizard.m_updateButtons__int__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__void_$pp_org_patternfly_component_wizard(this.m_size__int(), this.f_head__org_patternfly_component_wizard_Wizard_, this.f_current__org_patternfly_component_wizard_Wizard_, this.f_tail__org_patternfly_component_wizard_Wizard_);
   if (!$Equality.$same(this.f_current__org_patternfly_component_wizard_Wizard_.f_enterHandler__org_patternfly_component_wizard_WizardStep, null)) {
    this.f_current__org_patternfly_component_wizard_Wizard_.f_enterHandler__org_patternfly_component_wizard_WizardStep.m_onEnter__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__void(this, this.f_current__org_patternfly_component_wizard_Wizard_);
   }
   for (let $iterator_1 = this.f_stepChangeHandlers__org_patternfly_component_wizard_Wizard_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let handler = /**@type {WizardStepChangeHandler}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), /**@type {Function}*/ (WizardStepChangeHandler)));
    {
     handler.m_onStepChange__org_patternfly_component_wizard_Wizard__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__void(this, currentBackup, this.f_current__org_patternfly_component_wizard_Wizard_);
    }
   }
  }
 }
 /** @nodts @return {WizardStep} */
 m_previousEnabledStep__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep_$p_org_patternfly_component_wizard_Wizard(/** WizardStep */ from) {
  let step = from;
  while (!$Equality.$same(step, null) && step.f_disabled__org_patternfly_component_wizard_WizardStep) {
   step = step.f_previous__org_patternfly_component_wizard_WizardStep;
  }
  return step;
 }
 /** @nodts @return {WizardStep} */
 m_nextEnabledStep__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep_$p_org_patternfly_component_wizard_Wizard(/** WizardStep */ from) {
  let step = from;
  while (!$Equality.$same(step, null) && step.f_disabled__org_patternfly_component_wizard_WizardStep) {
   step = step.f_next__org_patternfly_component_wizard_WizardStep;
  }
  return step;
 }
 /** @nodts @return {boolean} */
 m_isBefore__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean_$p_org_patternfly_component_wizard_Wizard(/** WizardStep */ start, /** WizardStep */ end) {
  if ($Equality.$same(start, null) || $Equality.$same(end, null)) {
   return false;
  }
  let current = start;
  while (!$Equality.$same(current, null)) {
   if ($Equality.$same(current, end)) {
    return true;
   }
   current = current.f_next__org_patternfly_component_wizard_WizardStep;
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_isAfter__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__boolean_$p_org_patternfly_component_wizard_Wizard(/** WizardStep */ start, /** WizardStep */ end) {
  if ($Equality.$same(start, null) || $Equality.$same(end, null)) {
   return false;
  }
  let current = start;
  while (!$Equality.$same(current, null)) {
   if ($Equality.$same(current, end)) {
    return true;
   }
   current = current.f_previous__org_patternfly_component_wizard_WizardStep;
  }
  return false;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<WizardStep>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<WizardStep>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Wizard} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_Wizard();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Wizard} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, WizardStep> */ arg1) {
  return /**@type {Wizard}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Wizard));
 }
 //Bridge method.
 /** @final @override @nodts @return {Wizard} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** WizardStep */ arg0) {
  return /**@type {Wizard}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {WizardStep}*/ ($Casts.$to(arg0, WizardStep))), Wizard));
 }
 //Bridge method.
 /** @final @override @nodts @return {Wizard} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** WizardStep */ arg0) {
  return this.m_add__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_Wizard(/**@type {WizardStep}*/ ($Casts.$to(arg0, WizardStep)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Wizard} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Wizard, WizardStep> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_wizard_Wizard(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<WizardStep>} */
 m_items__java_util_List() {
  return /**@type {List<WizardStep>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardStep} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_wizard_WizardStep(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, WizardStep> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** WizardStep */ arg0) {
  this.m_updateItem__org_patternfly_component_wizard_WizardStep__void(/**@type {WizardStep}*/ ($Casts.$to(arg0, WizardStep)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Wizard} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Wizard, WizardStep> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_wizard_Wizard(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** WizardStep */ arg0, /** BiConsumer<WizardStep, WizardStep> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {WizardStep}*/ ($Casts.$to(arg0, WizardStep)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Wizard} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Wizard, WizardStep> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_wizard_Wizard(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Wizard} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {Wizard}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Wizard));
 }
 //Bridge method.
 /** @final @override @nodts @return {Wizard} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Wizard}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Wizard));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {Wizard} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_wizard_Wizard(/** Iterable<T> */ arg0, /** j_u_function_Function<T, WizardStep> */ arg1) {
  return /**@type {Wizard}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Wizard));
 }
 //Default method forwarding stub.
 /** @nodts @return {Wizard} */
 m_addItem__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_Wizard(/** WizardStep */ arg0) {
  return /**@type {Wizard}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), Wizard));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_wizard_WizardStep__java_util_function_BiConsumer__void(/** WizardStep */ arg0, /** BiConsumer<WizardStep, WizardStep> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {Wizard} */
 m_plain__org_patternfly_component_wizard_Wizard() {
  return /**@type {Wizard}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Wizard));
 }
 //Default method forwarding stub.
 /** @nodts @return {Wizard} */
 m_plain__boolean__org_patternfly_component_wizard_Wizard(/** boolean */ arg0) {
  return /**@type {Wizard}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Wizard));
 }
 /** @nodts */
 static $clinit() {
  Wizard.$clinit = () =>{};
  Wizard.$loadModules();
  BaseComponent.$clinit();
  HasItems.$clinit();
  Plain.$clinit();
  Wizard.f_logger__org_patternfly_component_wizard_Wizard_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Wizard).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Wizard;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  WizardContext = goog.module.get('org.patternfly.component.wizard.WizardContext$impl');
  WizardFooter = goog.module.get('org.patternfly.component.wizard.WizardFooter$impl');
  WizardNav = goog.module.get('org.patternfly.component.wizard.WizardNav$impl');
  WizardNavItem = goog.module.get('org.patternfly.component.wizard.WizardNavItem$impl');
  WizardStep = goog.module.get('org.patternfly.component.wizard.WizardStep$impl');
  WizardStepChangeHandler = goog.module.get('org.patternfly.component.wizard.WizardStepChangeHandler$impl');
  WizardStepType = goog.module.get('org.patternfly.component.wizard.WizardStepType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Wizard.f_logger__org_patternfly_component_wizard_Wizard_;
HasItems.$markImplementor(Wizard);
Plain.$markImplementor(Wizard);
$Util.$setClassMetadata(Wizard, 'org.patternfly.component.wizard.Wizard');

exports = Wizard;

//# sourceMappingURL=Wizard.js.map
