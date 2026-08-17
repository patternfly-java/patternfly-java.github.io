goog.module('org.patternfly.component.tooltip.PopperTooltip$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let TriggerAria = goog.forwardDeclare('org.patternfly.component.tooltip.TriggerAria$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.popper.Modifiers$impl');
let Popper = goog.forwardDeclare('org.patternfly.popper.Popper$impl');
let PopperBuilder = goog.forwardDeclare('org.patternfly.popper.PopperBuilder$impl');
let PopperPlacement = goog.forwardDeclare('org.patternfly.popper.PopperPlacement$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, PopperTooltip>}
 * @implements {Attachable}
 * @implements {Closeable<HTMLDivElement, PopperTooltip>}
 * @implements {ElementTextMethods<HTMLDivElement, PopperTooltip>}
 * @deprecated
 */
class PopperTooltip extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_tooltip_PopperTooltip_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_tooltip_PopperTooltip_;
  /**@type {Set<TriggerAction>} @nodts*/
  this.f_triggerActions__org_patternfly_component_tooltip_PopperTooltip_;
  /**@type {List<CloseHandler<PopperTooltip>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_tooltip_PopperTooltip_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_;
  /**@type {boolean} @nodts*/
  this.f_flip__org_patternfly_component_tooltip_PopperTooltip_ = false;
  /**@type {number} @nodts*/
  this.f_distance__org_patternfly_component_tooltip_PopperTooltip_ = 0;
  /**@type {number} @nodts*/
  this.f_animationDuration__org_patternfly_component_tooltip_PopperTooltip_ = 0;
  /**@type {number} @nodts*/
  this.f_entryDelay__org_patternfly_component_tooltip_PopperTooltip_ = 0;
  /**@type {number} @nodts*/
  this.f_exitDelay__org_patternfly_component_tooltip_PopperTooltip_ = 0;
  /**@type {number} @nodts*/
  this.f_zIndex__org_patternfly_component_tooltip_PopperTooltip_ = 0;
  /**@type {Popper} @nodts*/
  this.f_popper__org_patternfly_component_tooltip_PopperTooltip_;
  /**@type {TriggerAria} @nodts*/
  this.f_aria__org_patternfly_component_tooltip_PopperTooltip_;
  /**@type {PopperPlacement} @nodts*/
  this.f_placement__org_patternfly_component_tooltip_PopperTooltip_;
 }
 /** @nodts @return {PopperTooltip} */
 static m_tooltip__org_patternfly_component_tooltip_PopperTooltip() {
  PopperTooltip.$clinit();
  return PopperTooltip.$create__java_util_function_Supplier__java_lang_String(null, null);
 }
 /** @nodts @return {PopperTooltip} */
 static m_tooltip__java_lang_String__org_patternfly_component_tooltip_PopperTooltip(/** ?string */ text) {
  PopperTooltip.$clinit();
  return PopperTooltip.$create__java_util_function_Supplier__java_lang_String(null, text);
 }
 /** @nodts @return {PopperTooltip} */
 static m_tooltip__org_jboss_elemento_By__org_patternfly_component_tooltip_PopperTooltip(/** By */ trigger) {
  PopperTooltip.$clinit();
  return PopperTooltip.$create__java_util_function_Supplier__java_lang_String(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  })), null);
 }
 /** @nodts @return {PopperTooltip} */
 static m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_PopperTooltip(/** By */ trigger, /** ?string */ text) {
  PopperTooltip.$clinit();
  return PopperTooltip.$create__java_util_function_Supplier__java_lang_String(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  })), text);
 }
 /** @nodts @return {PopperTooltip} */
 static m_tooltip__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_PopperTooltip(/** HTMLElement */ trigger) {
  PopperTooltip.$clinit();
  return PopperTooltip.$create__java_util_function_Supplier__java_lang_String(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return trigger;
  })), null);
 }
 /** @nodts @return {PopperTooltip} */
 static m_tooltip__elemental2_dom_HTMLElement__java_lang_String__org_patternfly_component_tooltip_PopperTooltip(/** HTMLElement */ trigger, /** ?string */ text) {
  PopperTooltip.$clinit();
  return PopperTooltip.$create__java_util_function_Supplier__java_lang_String(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return trigger;
  })), text);
 }
 /** @nodts @return {PopperTooltip} */
 static m_tooltip__java_util_function_Supplier__org_patternfly_component_tooltip_PopperTooltip(/** Supplier<HTMLElement> */ trigger) {
  PopperTooltip.$clinit();
  return PopperTooltip.$create__java_util_function_Supplier__java_lang_String(trigger, null);
 }
 /** @nodts @return {PopperTooltip} */
 static m_tooltip__java_util_function_Supplier__java_lang_String__org_patternfly_component_tooltip_PopperTooltip(/** Supplier<HTMLElement> */ trigger, /** ?string */ text) {
  PopperTooltip.$clinit();
  return PopperTooltip.$create__java_util_function_Supplier__java_lang_String(trigger, text);
 }
 /** @nodts @return {!PopperTooltip} */
 static $create__java_util_function_Supplier__java_lang_String(/** Supplier<HTMLElement> */ trigger, /** ?string */ text) {
  PopperTooltip.$clinit();
  let $instance = new PopperTooltip();
  $instance.$ctor__org_patternfly_component_tooltip_PopperTooltip__java_util_function_Supplier__java_lang_String__void(trigger, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tooltip_PopperTooltip__java_util_function_Supplier__java_lang_String__void(/** Supplier<HTMLElement> */ trigger, /** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_PopperTooltip__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('display', 'none'), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_tooltip__org_patternfly_core_Roles), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_live__org_patternfly_core_Aria, 'polite'), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_id__org_patternfly_component_tooltip_PopperTooltip_ = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)));
  this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_ = trigger;
  this.f_triggerActions__org_patternfly_component_tooltip_PopperTooltip_ = (/**@type {EnumSet<TriggerAction>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(TriggerAction.f_mouseenter__org_patternfly_popper_TriggerAction, /**@type {!Array<TriggerAction>}*/ ($Arrays.$stampType([TriggerAction.f_focus__org_patternfly_popper_TriggerAction], TriggerAction)))));
  this.f_closeHandler__org_patternfly_component_tooltip_PopperTooltip_ = (/**@type {!ArrayList<CloseHandler<PopperTooltip>>}*/ (ArrayList.$create__()));
  this.f_flip__org_patternfly_component_tooltip_PopperTooltip_ = true;
  this.f_placement__org_patternfly_component_tooltip_PopperTooltip_ = PopperPlacement.f_top__org_patternfly_popper_PopperPlacement;
  this.f_aria__org_patternfly_component_tooltip_PopperTooltip_ = TriggerAria.f_describedBy__org_patternfly_component_tooltip_TriggerAria;
  this.f_zIndex__org_patternfly_component_tooltip_PopperTooltip_ = PopperTooltip.f_Z_INDEX__org_patternfly_component_tooltip_PopperTooltip;
  this.f_distance__org_patternfly_component_tooltip_PopperTooltip_ = PopperTooltip.f_DISTANCE__org_patternfly_component_tooltip_PopperTooltip;
  this.f_entryDelay__org_patternfly_component_tooltip_PopperTooltip_ = PopperTooltip.f_ENTRY_DELAY__org_patternfly_component_tooltip_PopperTooltip;
  this.f_exitDelay__org_patternfly_component_tooltip_PopperTooltip_ = PopperTooltip.f_EXIT_DELAY__org_patternfly_component_tooltip_PopperTooltip;
  this.f_animationDuration__org_patternfly_component_tooltip_PopperTooltip_ = PopperTooltip.f_ANIMATION_DURATION__org_patternfly_component_tooltip_PopperTooltip;
  this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_id__org_patternfly_component_tooltip_PopperTooltip_);
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_arrow__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_contentElement__org_patternfly_component_tooltip_PopperTooltip_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  if (!$Equality.$same(text, null)) {
   this.f_contentElement__org_patternfly_component_tooltip_PopperTooltip_.textContent = text;
  }
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_, null)) {
   let triggerElement = /**@type {HTMLElement}*/ ($Casts.$to(this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_.m_get__java_lang_Object(), $Overlay));
   if (!$Equality.$same(triggerElement, null)) {
    this.f_popper__org_patternfly_component_tooltip_PopperTooltip_ = PopperBuilder.$create__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, triggerElement, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).m_animationDuration__int__org_patternfly_popper_PopperBuilder(this.f_animationDuration__org_patternfly_component_tooltip_PopperTooltip_).m_entryDelay__int__org_patternfly_popper_PopperBuilder(this.f_entryDelay__org_patternfly_component_tooltip_PopperTooltip_).m_exitDelay__int__org_patternfly_popper_PopperBuilder(this.f_exitDelay__org_patternfly_component_tooltip_PopperTooltip_).m_zIndex__int__org_patternfly_popper_PopperBuilder(this.f_zIndex__org_patternfly_component_tooltip_PopperTooltip_).m_placement__org_patternfly_popper_PopperPlacement__org_patternfly_popper_PopperBuilder(this.f_placement__org_patternfly_component_tooltip_PopperTooltip_).m_addModifier__arrayOf_org_patternfly_popper_Modifier__org_patternfly_popper_PopperBuilder([Modifiers.m_offset__int__org_patternfly_popper_Modifier(this.f_distance__org_patternfly_component_tooltip_PopperTooltip_), Modifiers.m_noOverflow__org_patternfly_popper_Modifier(), Modifiers.m_hide__org_patternfly_popper_Modifier(), Modifiers.m_flip__boolean__org_patternfly_popper_Modifier($Equality.$same(this.f_placement__org_patternfly_component_tooltip_PopperTooltip_, PopperPlacement.f_auto__org_patternfly_popper_PopperPlacement) || this.f_flip__org_patternfly_component_tooltip_PopperTooltip_), Modifiers.m_placement__org_patternfly_popper_Modifier(), Modifiers.m_eventListeners__boolean__org_patternfly_popper_Modifier(false)]).m_registerHandler__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(this.f_triggerActions__org_patternfly_component_tooltip_PopperTooltip_, Consumer.$adapt((/** Event */ arg0) =>{
     let arg0_1 = /**@type {Event}*/ ($Casts.$to(arg0, Event_$Overlay));
     this.m_show__elemental2_dom_Event__void(arg0_1);
    }), Consumer.$adapt((/** Event */ arg0_2) =>{
     let arg0_3 = /**@type {Event}*/ ($Casts.$to(arg0_2, Event_$Overlay));
     this.m_close__elemental2_dom_Event__void(arg0_3);
    })).m_removePopperOnTriggerDetach__org_patternfly_popper_PopperBuilder().m_build__org_patternfly_popper_Popper();
   } else {
    PopperTooltip.f_logger__org_patternfly_component_tooltip_PopperTooltip_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to find trigger element for tooltip %o', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
   }
  } else {
   PopperTooltip.f_logger__org_patternfly_component_tooltip_PopperTooltip_.m_error__java_lang_String__arrayOf_java_lang_Object__void('No trigger element defined for tooltip %o', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_popper__org_patternfly_component_tooltip_PopperTooltip_.m_cleanup__void();
 }
 /** @nodts @return {PopperTooltip} */
 m_appendToBody__org_patternfly_component_tooltip_PopperTooltip() {
  return this.m_appendTo__elemental2_dom_Node__org_patternfly_component_tooltip_PopperTooltip(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body);
 }
 /** @nodts @return {PopperTooltip} */
 m_appendTo__elemental2_dom_Node__org_patternfly_component_tooltip_PopperTooltip(/** Node */ node) {
  if (!$Equality.$same(node, null)) {
   node.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_animationDuration__int__org_patternfly_component_tooltip_PopperTooltip(/** number */ animationDuration) {
  this.f_animationDuration__org_patternfly_component_tooltip_PopperTooltip_ = animationDuration;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_distance__int__org_patternfly_component_tooltip_PopperTooltip(/** number */ distance) {
  this.f_distance__org_patternfly_component_tooltip_PopperTooltip_ = distance;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_flip__boolean__org_patternfly_component_tooltip_PopperTooltip(/** boolean */ flip) {
  this.f_flip__org_patternfly_component_tooltip_PopperTooltip_ = flip;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_entryDelay__int__org_patternfly_component_tooltip_PopperTooltip(/** number */ delay) {
  this.f_entryDelay__org_patternfly_component_tooltip_PopperTooltip_ = delay;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_exitDelay__int__org_patternfly_component_tooltip_PopperTooltip(/** number */ delay) {
  this.f_exitDelay__org_patternfly_component_tooltip_PopperTooltip_ = delay;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_leftAligned__org_patternfly_component_tooltip_PopperTooltip() {
  this.f_contentElement__org_patternfly_component_tooltip_PopperTooltip_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_textAlignLeft__org_patternfly_style_Classes));
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_placement__org_patternfly_popper_PopperPlacement__org_patternfly_component_tooltip_PopperTooltip(/** PopperPlacement */ placement) {
  if ($Equality.$same(placement, PopperPlacement.f_auto__org_patternfly_popper_PopperPlacement)) {
   this.f_flip__org_patternfly_component_tooltip_PopperTooltip_ = true;
  }
  this.f_placement__org_patternfly_component_tooltip_PopperTooltip_ = placement;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_text__java_lang_String__org_patternfly_component_tooltip_PopperTooltip(/** ?string */ text) {
  Elements.m_textNode__elemental2_dom_Element__java_lang_String__void(this.f_contentElement__org_patternfly_component_tooltip_PopperTooltip_, text);
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this) && Elements.m_isVisible__org_jboss_elemento_IsElement__boolean(this)) {
   this.f_popper__org_patternfly_component_tooltip_PopperTooltip_.m_update__elemental2_promise_Promise();
  }
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_trigger__java_lang_String__org_patternfly_component_tooltip_PopperTooltip(/** ?string */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_PopperTooltip(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, By.m_selector__java_lang_String__org_jboss_elemento_By(trigger));
  })));
 }
 /** @nodts @return {PopperTooltip} */
 m_trigger__org_jboss_elemento_By__org_patternfly_component_tooltip_PopperTooltip(/** By */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_PopperTooltip(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  })));
 }
 /** @nodts @return {PopperTooltip} */
 m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_PopperTooltip(/** HTMLElement */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_PopperTooltip(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return trigger;
  })));
 }
 /** @nodts @return {PopperTooltip} */
 m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_PopperTooltip(/** Supplier<HTMLElement> */ trigger) {
  this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_ = trigger;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_triggerActions__arrayOf_org_patternfly_popper_TriggerAction__org_patternfly_component_tooltip_PopperTooltip(/** Array<TriggerAction> */ triggerActions) {
  if (!$Equality.$same(triggerActions, null)) {
   this.f_triggerActions__org_patternfly_component_tooltip_PopperTooltip_.clear();
   this.f_triggerActions__org_patternfly_component_tooltip_PopperTooltip_.addAll(/**@type {List<TriggerAction>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(triggerActions)));
  }
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_zIndex__int__org_patternfly_component_tooltip_PopperTooltip(/** number */ zIndex) {
  this.f_zIndex__org_patternfly_component_tooltip_PopperTooltip_ = zIndex;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_that__org_patternfly_component_tooltip_PopperTooltip() {
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_aria__org_patternfly_component_tooltip_TriggerAria__org_patternfly_component_tooltip_PopperTooltip(/** TriggerAria */ aria) {
  this.f_aria__org_patternfly_component_tooltip_PopperTooltip_ = aria;
  return this;
 }
 /** @nodts @return {PopperTooltip} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_PopperTooltip(/** CloseHandler<PopperTooltip> */ closeHandler) {
  if (!$Equality.$same(closeHandler, null)) {
   this.f_closeHandler__org_patternfly_component_tooltip_PopperTooltip_.add(closeHandler);
  }
  return this;
 }
 /** @nodts */
 m_show__void() {
  this.m_show__elemental2_dom_Event__void(new Event(''));
 }
 /** @nodts */
 m_show__elemental2_dom_Event__void(/** Event */ event) {
  this.f_popper__org_patternfly_component_tooltip_PopperTooltip_.m_show__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
   if (!$Equality.$same(this.f_aria__org_patternfly_component_tooltip_PopperTooltip_, TriggerAria.f_none__org_patternfly_component_tooltip_TriggerAria) && !$Equality.$same(this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_.m_get__java_lang_Object(), null)) {
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(/**@type {HTMLElement}*/ ($Casts.$to(this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_.m_get__java_lang_Object(), $Overlay)), this.f_aria__org_patternfly_component_tooltip_PopperTooltip_.f_attribute__org_patternfly_component_tooltip_TriggerAria, this.f_id__org_patternfly_component_tooltip_PopperTooltip_);
   }
  }));
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_tooltip_PopperTooltip_, event, fireEvent)) {
   this.f_popper__org_patternfly_component_tooltip_PopperTooltip_.m_hide__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
    if (!$Equality.$same(this.f_aria__org_patternfly_component_tooltip_PopperTooltip_, TriggerAria.f_none__org_patternfly_component_tooltip_TriggerAria) && !$Equality.$same(this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_.m_get__java_lang_Object(), null)) {
     (/**@type {HTMLElement}*/ ($Casts.$to(this.f_trigger__org_patternfly_component_tooltip_PopperTooltip_.m_get__java_lang_Object(), $Overlay))).removeAttribute(this.f_aria__org_patternfly_component_tooltip_PopperTooltip_.f_attribute__org_patternfly_component_tooltip_TriggerAria);
    }
    CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_tooltip_PopperTooltip_, event, fireEvent);
   }));
  }
 }
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return Elements.m_textNode__elemental2_dom_Element__java_lang_String(this.f_contentElement__org_patternfly_component_tooltip_PopperTooltip_);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperTooltip} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tooltip_PopperTooltip();
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperTooltip} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<PopperTooltip> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_PopperTooltip(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__void() {
  Closeable.m_close__$default__org_patternfly_component_Closeable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__elemental2_dom_Event__void(/** Event */ arg0) {
  Closeable.m_close__$default__org_patternfly_component_Closeable__elemental2_dom_Event__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperTooltip} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_tooltip_PopperTooltip(arg0);
 }
 /** @nodts */
 static $clinit() {
  PopperTooltip.$clinit = () =>{};
  PopperTooltip.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Closeable.$clinit();
  ElementTextMethods.$clinit();
  PopperTooltip.f_logger__org_patternfly_component_tooltip_PopperTooltip_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(PopperTooltip).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperTooltip;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  Event_$Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  TriggerAria = goog.module.get('org.patternfly.component.tooltip.TriggerAria$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  Modifiers = goog.module.get('org.patternfly.popper.Modifiers$impl');
  PopperBuilder = goog.module.get('org.patternfly.popper.PopperBuilder$impl');
  PopperPlacement = goog.module.get('org.patternfly.popper.PopperPlacement$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
PopperTooltip.f_logger__org_patternfly_component_tooltip_PopperTooltip_;
/**@const {number} @nodts*/
PopperTooltip.f_ANIMATION_DURATION__org_patternfly_component_tooltip_PopperTooltip = 300;
/**@const {number} @nodts*/
PopperTooltip.f_ENTRY_DELAY__org_patternfly_component_tooltip_PopperTooltip = 300;
/**@const {number} @nodts*/
PopperTooltip.f_EXIT_DELAY__org_patternfly_component_tooltip_PopperTooltip = 300;
/**@const {number} @nodts*/
PopperTooltip.f_DISTANCE__org_patternfly_component_tooltip_PopperTooltip = 15;
/**@const {number} @nodts*/
PopperTooltip.f_Z_INDEX__org_patternfly_component_tooltip_PopperTooltip = 9999;
Attachable.$markImplementor(PopperTooltip);
Closeable.$markImplementor(PopperTooltip);
ElementTextMethods.$markImplementor(PopperTooltip);
$Util.$setClassMetadata(PopperTooltip, 'org.patternfly.component.tooltip.PopperTooltip');

exports = PopperTooltip;

//# sourceMappingURL=PopperTooltip.js.map
