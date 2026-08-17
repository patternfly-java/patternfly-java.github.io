goog.module('org.patternfly.component.progressstepper.ProgressStep$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Popover = goog.forwardDeclare('org.patternfly.component.popover.Popover$impl');
let ProgressStepVariant = goog.forwardDeclare('org.patternfly.component.progressstepper.ProgressStepVariant$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLLIElement, ProgressStep>}
 * @implements {ElementTextDelegate<HTMLLIElement, ProgressStep>}
 * @implements {HasIdentifier<HTMLLIElement, ProgressStep>}
 * @implements {ComponentIcon<HTMLLIElement, ProgressStep>}
 */
class ProgressStep extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_stepIcon__org_patternfly_component_progressstepper_ProgressStep_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_progressstepper_ProgressStep_;
  /**@type {boolean} @nodts*/
  this.f_isCurrent__org_patternfly_component_progressstepper_ProgressStep_ = false;
  /**@type {?string} @nodts*/
  this.f_description__org_patternfly_component_progressstepper_ProgressStep_;
  /**@type {Element} @nodts*/
  this.f_icon__org_patternfly_component_progressstepper_ProgressStep_;
  /**@type {boolean} @nodts*/
  this.f_isCustomIcon__org_patternfly_component_progressstepper_ProgressStep_ = false;
  /**@type {ProgressStepVariant} @nodts*/
  this.f_progressStepVariant__org_patternfly_component_progressstepper_ProgressStep_;
  /**@type {Popover} @nodts*/
  this.f_popover__org_patternfly_component_progressstepper_ProgressStep_;
 }
 /** @nodts @return {ProgressStep} */
 static m_progressStep__java_lang_String__org_patternfly_component_progressstepper_ProgressStep(/** ?string */ identifier) {
  ProgressStep.$clinit();
  return ProgressStep.$create__java_lang_String(identifier);
 }
 /** @nodts @return {ProgressStep} */
 static m_progressStep__java_lang_String__java_lang_String__org_patternfly_component_progressstepper_ProgressStep(/** ?string */ identifier, /** ?string */ text) {
  ProgressStep.$clinit();
  return /**@type {ProgressStep}*/ ($Casts.$to(ProgressStep.$create__java_lang_String(identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), ProgressStep));
 }
 /** @nodts @return {!ProgressStep} */
 static $create__java_lang_String(/** ?string */ identifier) {
  ProgressStep.$clinit();
  let $instance = new ProgressStep();
  $instance.$ctor__org_patternfly_component_progressstepper_ProgressStep__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_progressstepper_ProgressStep__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_ProgressStepper__org_patternfly_component_ComponentType, ProgressStep.f_SUB_COMPONENT_ID__org_patternfly_component_progressstepper_ProgressStep, ProgressStep.f_SUB_COMPONENT_NAME__org_patternfly_component_progressstepper_ProgressStep, /**@type {HTMLLIElement}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.$init__void_$p_org_patternfly_component_progressstepper_ProgressStep();
  this.f_identifier__org_patternfly_component_progressstepper_ProgressStep_ = identifier;
  let stepConnector = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ProgressStep.f_STEP_CONNECTOR__org_patternfly_component_progressstepper_ProgressStep_], j_l_String)))], j_l_String))), HTMLContainerBuilder));
  this.f_stepIcon__org_patternfly_component_progressstepper_ProgressStep_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ProgressStep.f_STEP_ICON__org_patternfly_component_progressstepper_ProgressStep_], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
  this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_ = (/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ProgressStep.f_STEP_MAIN__org_patternfly_component_progressstepper_ProgressStep_], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(stepConnector.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  stepConnector.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_stepIcon__org_patternfly_component_progressstepper_ProgressStep_);
  (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ProgressStep.f_STEP_TITLE__org_patternfly_component_progressstepper_ProgressStep_], j_l_String)))], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_step__org_patternfly_style_Classes], j_l_String)))], j_l_String)));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), Attributes.f_role__org_patternfly_core_Attributes, ProgressStep.f_LIST_ITEM__org_patternfly_component_progressstepper_ProgressStep_);
 }
 /** @nodts @return {ProgressStep} */
 m_that__org_patternfly_component_progressstepper_ProgressStep() {
  return this;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.m_getStepTitleElement__elemental2_dom_Element_$p_org_patternfly_component_progressstepper_ProgressStep();
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_progressstepper_ProgressStep_;
 }
 /** @nodts @return {ProgressStep} */
 m_description__java_lang_String__org_patternfly_component_progressstepper_ProgressStep(/** ?string */ description) {
  if (Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_description__org_patternfly_component_progressstepper_ProgressStep_, description)) {
   return this;
  }
  this.f_description__org_patternfly_component_progressstepper_ProgressStep_ = description;
  if ($Equality.$same(description, null) || j_l_String.m_isEmpty__java_lang_String__boolean(description)) {
   if (Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_)) {
    this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_ = null;
   }
   return this;
  }
  this.m_failSafeStepDescription__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_progressstepper_ProgressStep().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(description);
  return this;
 }
 /** @nodts @return {ProgressStep} */
 m_variant__org_patternfly_component_progressstepper_ProgressStepVariant__org_patternfly_component_progressstepper_ProgressStep(/** ProgressStepVariant */ progressStepVariant) {
  if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_progressStepVariant__org_patternfly_component_progressstepper_ProgressStep_, progressStepVariant)) {
   return this;
  }
  if ($Equality.$same(progressStepVariant, null)) {
   ProgressStep.f_logger__org_patternfly_component_progressstepper_ProgressStep_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('ProgressStep variant cannot be null, using default variant instead.', []);
   progressStepVariant = ProgressStepVariant.f_default___org_patternfly_component_progressstepper_ProgressStepVariant;
  }
  if (!$Equality.$same(this.f_progressStepVariant__org_patternfly_component_progressstepper_ProgressStep_.f_style__org_patternfly_component_progressstepper_ProgressStepVariant, null)) {
   (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).classList.remove(this.f_progressStepVariant__org_patternfly_component_progressstepper_ProgressStep_.f_style__org_patternfly_component_progressstepper_ProgressStepVariant);
  }
  if (!this.f_isCustomIcon__org_patternfly_component_progressstepper_ProgressStep_) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_icon__org_patternfly_component_progressstepper_ProgressStep_);
   this.f_icon__org_patternfly_component_progressstepper_ProgressStep_ = null;
  }
  this.f_progressStepVariant__org_patternfly_component_progressstepper_ProgressStep_ = progressStepVariant;
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([progressStepVariant.f_style__org_patternfly_component_progressstepper_ProgressStepVariant], j_l_String)));
  if (!this.f_isCustomIcon__org_patternfly_component_progressstepper_ProgressStep_ && !$Equality.$same(progressStepVariant.m_icon__elemental2_dom_Element(), null)) {
   this.f_icon__org_patternfly_component_progressstepper_ProgressStep_ = progressStepVariant.m_icon__elemental2_dom_Element();
   this.f_stepIcon__org_patternfly_component_progressstepper_ProgressStep_.appendChild(this.f_icon__org_patternfly_component_progressstepper_ProgressStep_);
  }
  return this;
 }
 /** @nodts @return {ProgressStep} */
 m_icon__elemental2_dom_Element__org_patternfly_component_progressstepper_ProgressStep(/** Element */ icon) {
  if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_icon__org_patternfly_component_progressstepper_ProgressStep_, icon)) {
   return this;
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_stepIcon__org_patternfly_component_progressstepper_ProgressStep_);
  this.f_icon__org_patternfly_component_progressstepper_ProgressStep_ = icon;
  this.f_isCustomIcon__org_patternfly_component_progressstepper_ProgressStep_ = !$Equality.$same(icon, null);
  if (this.f_isCustomIcon__org_patternfly_component_progressstepper_ProgressStep_) {
   this.f_stepIcon__org_patternfly_component_progressstepper_ProgressStep_.appendChild(icon);
  }
  return this;
 }
 /** @nodts @return {ProgressStep} */
 m_removeIcon__org_patternfly_component_progressstepper_ProgressStep() {
  if (!this.f_isCustomIcon__org_patternfly_component_progressstepper_ProgressStep_) {
   return this;
  }
  this.f_isCustomIcon__org_patternfly_component_progressstepper_ProgressStep_ = false;
  this.f_icon__org_patternfly_component_progressstepper_ProgressStep_ = null;
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_stepIcon__org_patternfly_component_progressstepper_ProgressStep_);
  if (!$Equality.$same(this.f_progressStepVariant__org_patternfly_component_progressstepper_ProgressStep_.m_icon__elemental2_dom_Element(), null)) {
   this.f_stepIcon__org_patternfly_component_progressstepper_ProgressStep_.appendChild(this.f_progressStepVariant__org_patternfly_component_progressstepper_ProgressStep_.m_icon__elemental2_dom_Element());
  }
  return this;
 }
 /** @nodts @return {ProgressStep} */
 m_popover__org_patternfly_component_popover_Popover__org_patternfly_component_progressstepper_ProgressStep(/** Popover */ popover) {
  if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(popover, this.f_popover__org_patternfly_component_progressstepper_ProgressStep_)) {
   return this;
  }
  if (!$Equality.$same(this.f_popover__org_patternfly_component_progressstepper_ProgressStep_, null)) {
   this.m_removePopover__org_patternfly_component_progressstepper_ProgressStep();
  }
  this.f_popover__org_patternfly_component_progressstepper_ProgressStep_ = popover;
  if ($Equality.$same(popover, null)) {
   return this;
  }
  let title = this.m_text__java_lang_String();
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_);
  let textButton = /**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ProgressStep.f_STEP_TITLE__org_patternfly_component_progressstepper_ProgressStep_], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_helpText__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(title), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay));
  this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(textButton);
  this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(popover.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(textButton));
  if (!$Equality.$same(this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_, null)) {
   this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_);
  }
  return this;
 }
 /** @nodts @return {ProgressStep} */
 m_removePopover__org_patternfly_component_progressstepper_ProgressStep() {
  this.f_popover__org_patternfly_component_progressstepper_ProgressStep_ = null;
  let title = this.m_text__java_lang_String();
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_);
  this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ProgressStep.f_STEP_TITLE__org_patternfly_component_progressstepper_ProgressStep_], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(title), HTMLContainerBuilder)));
  if (!$Equality.$same(this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_, null)) {
   this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_);
  }
  return this;
 }
 /** @nodts @return {ProgressStep} */
 m_ariaLabel__java_lang_String__org_patternfly_component_progressstepper_ProgressStep(/** ?string */ ariaLabel) {
  return /**@type {ProgressStep}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, ariaLabel), ProgressStep));
 }
 /** @nodts @return {ProgressStep} */
 m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(/** boolean */ isCurrent) {
  if (this.f_isCurrent__org_patternfly_component_progressstepper_ProgressStep_ == isCurrent) {
   return this;
  }
  this.f_isCurrent__org_patternfly_component_progressstepper_ProgressStep_ = isCurrent;
  if (isCurrent) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_current__org_patternfly_core_Aria, ProgressStep.f_STEP__org_patternfly_component_progressstepper_ProgressStep_);
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
  } else {
   (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).removeAttribute(Aria.f_current__org_patternfly_core_Aria);
   (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {boolean} */
 m_isCurrent__boolean_$pp_org_patternfly_component_progressstepper() {
  return this.f_isCurrent__org_patternfly_component_progressstepper_ProgressStep_;
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLDivElement>} */
 m_failSafeStepDescription__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_progressstepper_ProgressStep() {
  if ($Equality.$same(this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_, null)) {
   this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_ = (/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ProgressStep.f_STEP_DESCRIPTION__org_patternfly_component_progressstepper_ProgressStep_], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
   this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_);
  }
  return this.f_stepDescription__org_patternfly_component_progressstepper_ProgressStep_;
 }
 /** @nodts @return {Element} */
 m_getStepTitleElement__elemental2_dom_Element_$p_org_patternfly_component_progressstepper_ProgressStep() {
  return (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_stepMain__org_patternfly_component_progressstepper_ProgressStep_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).firstElementChild;
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStep} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_progressstepper_ProgressStep();
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStep} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ProgressStep}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStep));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStep} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {ProgressStep}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStep));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStep} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_progressstepper_ProgressStep(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStep} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_progressstepper_ProgressStep();
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStep} */
 m_text__java_lang_String__org_patternfly_component_progressstepper_ProgressStep(/** ?string */ arg0) {
  return /**@type {ProgressStep}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStep));
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStep} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_progressstepper_ProgressStep(/** PredefinedIcon */ arg0) {
  return /**@type {ProgressStep}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStep));
 }
 /** @private @nodts */
 $init__void_$p_org_patternfly_component_progressstepper_ProgressStep() {
  this.f_isCustomIcon__org_patternfly_component_progressstepper_ProgressStep_ = false;
  this.f_progressStepVariant__org_patternfly_component_progressstepper_ProgressStep_ = ProgressStepVariant.f_default___org_patternfly_component_progressstepper_ProgressStepVariant;
 }
 /** @nodts */
 static $clinit() {
  ProgressStep.$clinit = () =>{};
  ProgressStep.$loadModules();
  SubComponent.$clinit();
  ElementTextDelegate.$clinit();
  ComponentIcon.$clinit();
  ProgressStep.f_logger__org_patternfly_component_progressstepper_ProgressStep_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(ProgressStep).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProgressStep;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ProgressStepVariant = goog.module.get('org.patternfly.component.progressstepper.ProgressStepVariant$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ProgressStep.f_SUB_COMPONENT_ID__org_patternfly_component_progressstepper_ProgressStep = 'pss';
/**@const {string} @nodts*/
ProgressStep.f_SUB_COMPONENT_NAME__org_patternfly_component_progressstepper_ProgressStep = 'ProgressStep';
/**@type {Logger} @nodts*/
ProgressStep.f_logger__org_patternfly_component_progressstepper_ProgressStep_;
/**@const {string} @nodts*/
ProgressStep.f_STEP__org_patternfly_component_progressstepper_ProgressStep_ = 'step';
/**@const {string} @nodts*/
ProgressStep.f_STEP_CONNECTOR__org_patternfly_component_progressstepper_ProgressStep_ = 'step-connector';
/**@const {string} @nodts*/
ProgressStep.f_STEP_ICON__org_patternfly_component_progressstepper_ProgressStep_ = 'step-icon';
/**@const {string} @nodts*/
ProgressStep.f_STEP_MAIN__org_patternfly_component_progressstepper_ProgressStep_ = 'step-main';
/**@const {string} @nodts*/
ProgressStep.f_STEP_TITLE__org_patternfly_component_progressstepper_ProgressStep_ = 'step-title';
/**@const {string} @nodts*/
ProgressStep.f_STEP_DESCRIPTION__org_patternfly_component_progressstepper_ProgressStep_ = 'step-description';
/**@const {string} @nodts*/
ProgressStep.f_LIST_ITEM__org_patternfly_component_progressstepper_ProgressStep_ = 'list-item';
ElementTextDelegate.$markImplementor(ProgressStep);
HasIdentifier.$markImplementor(ProgressStep);
ComponentIcon.$markImplementor(ProgressStep);
$Util.$setClassMetadata(ProgressStep, 'org.patternfly.component.progressstepper.ProgressStep');

exports = ProgressStep;

//# sourceMappingURL=ProgressStep.js.map
