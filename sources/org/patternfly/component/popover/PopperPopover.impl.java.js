goog.module('org.patternfly.component.popover.PopperPopover$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
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
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let PopperPopoverBody = goog.forwardDeclare('org.patternfly.component.popover.PopperPopoverBody$impl');
let PopperPopoverFooter = goog.forwardDeclare('org.patternfly.component.popover.PopperPopoverFooter$impl');
let PopperPopoverHeader = goog.forwardDeclare('org.patternfly.component.popover.PopperPopoverHeader$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.popper.Modifiers$impl');
let Popper = goog.forwardDeclare('org.patternfly.popper.Popper$impl');
let PopperBuilder = goog.forwardDeclare('org.patternfly.popper.PopperBuilder$impl');
let PopperPlacement = goog.forwardDeclare('org.patternfly.popper.PopperPlacement$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, PopperPopover>}
 * @implements {Closeable<HTMLDivElement, PopperPopover>}
 * @implements {NoPadding<HTMLDivElement, PopperPopover>}
 * @implements {ComponentIcon<HTMLDivElement, PopperPopover>}
 * @implements {Attachable}
 * @deprecated
 */
class PopperPopover extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_popover_PopperPopover_;
  /**@type {Set<TriggerAction>} @nodts*/
  this.f_triggerActions__org_patternfly_component_popover_PopperPopover_;
  /**@type {List<CloseHandler<PopperPopover>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_popover_PopperPopover_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_trigger__org_patternfly_component_popover_PopperPopover_;
  /**@type {boolean} @nodts*/
  this.f_flip__org_patternfly_component_popover_PopperPopover_ = false;
  /**@type {boolean} @nodts*/
  this.f_showClose__org_patternfly_component_popover_PopperPopover_ = false;
  /**@type {number} @nodts*/
  this.f_distance__org_patternfly_component_popover_PopperPopover_ = 0;
  /**@type {number} @nodts*/
  this.f_animationDuration__org_patternfly_component_popover_PopperPopover_ = 0;
  /**@type {number} @nodts*/
  this.f_zIndex__org_patternfly_component_popover_PopperPopover_ = 0;
  /**@type {Popper} @nodts*/
  this.f_popper__org_patternfly_component_popover_PopperPopover_;
  /**@type {PopperPlacement} @nodts*/
  this.f_placement__org_patternfly_component_popover_PopperPopover_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_popover_PopperPopover_;
  /**@type {Severity} @nodts*/
  this.f_severity__org_patternfly_component_popover_PopperPopover_;
  /**@type {PopperPopoverHeader} @nodts*/
  this.f_header__org_patternfly_component_popover_PopperPopover_;
  /**@type {HTMLElement} @nodts*/
  this.f_screenReaderElement__org_patternfly_component_popover_PopperPopover_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_popover_PopperPopover_;
 }
 /** @nodts @return {PopperPopover} */
 static m_popover__org_patternfly_component_popover_PopperPopover() {
  PopperPopover.$clinit();
  return PopperPopover.$create__java_util_function_Supplier(null);
 }
 /** @nodts @return {PopperPopover} */
 static m_popover__org_jboss_elemento_By__org_patternfly_component_popover_PopperPopover(/** By */ trigger) {
  PopperPopover.$clinit();
  return PopperPopover.$create__java_util_function_Supplier(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  })));
 }
 /** @nodts @return {PopperPopover} */
 static m_popover__elemental2_dom_HTMLElement__org_patternfly_component_popover_PopperPopover(/** HTMLElement */ trigger) {
  PopperPopover.$clinit();
  return PopperPopover.$create__java_util_function_Supplier(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return trigger;
  })));
 }
 /** @nodts @return {PopperPopover} */
 static m_popover__java_util_function_Supplier__org_patternfly_component_popover_PopperPopover(/** Supplier<HTMLElement> */ trigger) {
  PopperPopover.$clinit();
  return PopperPopover.$create__java_util_function_Supplier(trigger);
 }
 /** @nodts @return {!PopperPopover} */
 static $create__java_util_function_Supplier(/** Supplier<HTMLElement> */ trigger) {
  PopperPopover.$clinit();
  let $instance = new PopperPopover();
  $instance.$ctor__org_patternfly_component_popover_PopperPopover__java_util_function_Supplier__void(trigger);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_popover_PopperPopover__java_util_function_Supplier__void(/** Supplier<HTMLElement> */ trigger) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_PopperPopover__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('display', 'none'), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_dialog__org_patternfly_core_Roles), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_modal__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_trigger__org_patternfly_component_popover_PopperPopover_ = trigger;
  this.f_triggerActions__org_patternfly_component_popover_PopperPopover_ = (/**@type {EnumSet<TriggerAction>}*/ (EnumSet.m_of__java_lang_Enum__java_util_EnumSet(TriggerAction.f_click__org_patternfly_popper_TriggerAction)));
  this.f_closeHandler__org_patternfly_component_popover_PopperPopover_ = (/**@type {!ArrayList<CloseHandler<PopperPopover>>}*/ (ArrayList.$create__()));
  this.f_flip__org_patternfly_component_popover_PopperPopover_ = true;
  this.f_showClose__org_patternfly_component_popover_PopperPopover_ = true;
  this.f_placement__org_patternfly_component_popover_PopperPopover_ = PopperPlacement.f_top__org_patternfly_popper_PopperPlacement;
  this.f_zIndex__org_patternfly_component_popover_PopperPopover_ = PopperPopover.f_Z_INDEX__org_patternfly_component_popover_PopperPopover;
  this.f_distance__org_patternfly_component_popover_PopperPopover_ = PopperPopover.f_DISTANCE__org_patternfly_component_popover_PopperPopover;
  this.f_animationDuration__org_patternfly_component_popover_PopperPopover_ = PopperPopover.f_ANIMATION_DURATION__org_patternfly_component_popover_PopperPopover;
  let bodyId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['body'], j_l_String)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_arrow__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_contentElement__org_patternfly_component_popover_PopperPopover_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_describedBy__org_patternfly_core_Aria, bodyId);
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_showClose__org_patternfly_component_popover_PopperPopover_) {
   this.m_closable__org_patternfly_component_popover_PopperPopover();
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_closeButton__org_patternfly_component_popover_PopperPopover_);
  }
  if (!$Equality.$same(this.f_trigger__org_patternfly_component_popover_PopperPopover_, null)) {
   let triggerElement = /**@type {HTMLElement}*/ ($Casts.$to(this.f_trigger__org_patternfly_component_popover_PopperPopover_.m_get__java_lang_Object(), $Overlay));
   if (!$Equality.$same(triggerElement, null)) {
    this.f_popper__org_patternfly_component_popover_PopperPopover_ = PopperBuilder.$create__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, triggerElement, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).m_addModifier__arrayOf_org_patternfly_popper_Modifier__org_patternfly_popper_PopperBuilder([Modifiers.m_eventListeners__boolean__org_patternfly_popper_Modifier(false), Modifiers.m_flip__boolean__org_patternfly_popper_Modifier($Equality.$same(this.f_placement__org_patternfly_component_popover_PopperPopover_, PopperPlacement.f_auto__org_patternfly_popper_PopperPlacement) || this.f_flip__org_patternfly_component_popover_PopperPopover_), Modifiers.m_hide__org_patternfly_popper_Modifier(), Modifiers.m_noOverflow__org_patternfly_popper_Modifier(), Modifiers.m_offset__int__org_patternfly_popper_Modifier(this.f_distance__org_patternfly_component_popover_PopperPopover_), Modifiers.m_placement__org_patternfly_popper_Modifier()]).m_animationDuration__int__org_patternfly_popper_PopperBuilder(this.f_animationDuration__org_patternfly_component_popover_PopperPopover_).m_placement__org_patternfly_popper_PopperPlacement__org_patternfly_popper_PopperBuilder(this.f_placement__org_patternfly_component_popover_PopperPopover_).m_registerHandler__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(this.f_triggerActions__org_patternfly_component_popover_PopperPopover_, Consumer.$adapt((/** Event */ arg0) =>{
     let arg0_1 = /**@type {Event}*/ ($Casts.$to(arg0, Event_$Overlay));
     this.m_show__elemental2_dom_Event__void(arg0_1);
    }), Consumer.$adapt((/** Event */ arg0_2) =>{
     let arg0_3 = /**@type {Event}*/ ($Casts.$to(arg0_2, Event_$Overlay));
     this.m_close__elemental2_dom_Event__void(arg0_3);
    })).m_removePopperOnTriggerDetach__org_patternfly_popper_PopperBuilder().m_zIndex__int__org_patternfly_popper_PopperBuilder(this.f_zIndex__org_patternfly_component_popover_PopperPopover_).m_build__org_patternfly_popper_Popper();
   } else {
    PopperPopover.f_logger__org_patternfly_component_popover_PopperPopover_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to find trigger element for popover %o', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
   }
  } else {
   PopperPopover.f_logger__org_patternfly_component_popover_PopperPopover_.m_error__java_lang_String__arrayOf_java_lang_Object__void('No trigger element defined for popover %o', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_popper__org_patternfly_component_popover_PopperPopover_.m_cleanup__void();
 }
 /** @nodts @return {PopperPopover} */
 m_addHeader__java_lang_String__org_patternfly_component_popover_PopperPopover(/** ?string */ header) {
  if (!$Equality.$same(this.f_header__org_patternfly_component_popover_PopperPopover_, null)) {
   this.f_header__org_patternfly_component_popover_PopperPopover_.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(header);
   return this;
  } else {
   return this.m_add__org_patternfly_component_popover_PopperPopoverHeader__org_patternfly_component_popover_PopperPopover(/**@type {PopperPopoverHeader}*/ ($Casts.$to(PopperPopoverHeader.m_popoverHeader__org_patternfly_component_popover_PopperPopoverHeader().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(header), PopperPopoverHeader)));
  }
 }
 /** @nodts @return {PopperPopover} */
 m_addHeader__org_patternfly_component_popover_PopperPopoverHeader__org_patternfly_component_popover_PopperPopover(/** PopperPopoverHeader */ header) {
  return this.m_add__org_patternfly_component_popover_PopperPopoverHeader__org_patternfly_component_popover_PopperPopover(header);
 }
 /** @nodts @return {PopperPopover} */
 m_add__org_patternfly_component_popover_PopperPopoverHeader__org_patternfly_component_popover_PopperPopover(/** PopperPopoverHeader */ header) {
  this.f_header__org_patternfly_component_popover_PopperPopover_ = header;
  this.f_contentElement__org_patternfly_component_popover_PopperPopover_.appendChild(header.m_element__elemental2_dom_HTMLElement());
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, header.f_headerId__org_patternfly_component_popover_PopperPopoverHeader);
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_addBody__java_lang_String__org_patternfly_component_popover_PopperPopover(/** ?string */ body) {
  return this.m_add__org_patternfly_component_popover_PopperPopoverBody__org_patternfly_component_popover_PopperPopover(/**@type {PopperPopoverBody}*/ ($Casts.$to(PopperPopoverBody.m_popoverBody__org_patternfly_component_popover_PopperPopoverBody().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(body), PopperPopoverBody)));
 }
 /** @nodts @return {PopperPopover} */
 m_addBody__org_patternfly_component_popover_PopperPopoverBody__org_patternfly_component_popover_PopperPopover(/** PopperPopoverBody */ body) {
  return this.m_add__org_patternfly_component_popover_PopperPopoverBody__org_patternfly_component_popover_PopperPopover(body);
 }
 /** @nodts @return {PopperPopover} */
 m_add__org_patternfly_component_popover_PopperPopoverBody__org_patternfly_component_popover_PopperPopover(/** PopperPopoverBody */ body) {
  this.f_contentElement__org_patternfly_component_popover_PopperPopover_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(body.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_addFooter__java_lang_String__org_patternfly_component_popover_PopperPopover(/** ?string */ footer) {
  return this.m_add__org_patternfly_component_popover_PopperPopoverFooter__org_patternfly_component_popover_PopperPopover(/**@type {PopperPopoverFooter}*/ ($Casts.$to(PopperPopoverFooter.m_popoverFooter__org_patternfly_component_popover_PopperPopoverFooter().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(footer), PopperPopoverFooter)));
 }
 /** @nodts @return {PopperPopover} */
 m_addFooter__org_patternfly_component_popover_PopperPopoverFooter__org_patternfly_component_popover_PopperPopover(/** PopperPopoverFooter */ footer) {
  return this.m_add__org_patternfly_component_popover_PopperPopoverFooter__org_patternfly_component_popover_PopperPopover(footer);
 }
 /** @nodts @return {PopperPopover} */
 m_add__org_patternfly_component_popover_PopperPopoverFooter__org_patternfly_component_popover_PopperPopover(/** PopperPopoverFooter */ footer) {
  this.f_contentElement__org_patternfly_component_popover_PopperPopover_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(footer.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_appendToBody__org_patternfly_component_popover_PopperPopover() {
  return this.m_appendTo__elemental2_dom_Node__org_patternfly_component_popover_PopperPopover(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body);
 }
 /** @nodts @return {PopperPopover} */
 m_appendTo__elemental2_dom_Node__org_patternfly_component_popover_PopperPopover(/** Node */ node) {
  if (!$Equality.$same(node, null)) {
   node.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_animationDuration__int__org_patternfly_component_popover_PopperPopover(/** number */ animationDuration) {
  this.f_animationDuration__org_patternfly_component_popover_PopperPopover_ = animationDuration;
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_autoWidth__org_patternfly_component_popover_PopperPopover() {
  return /**@type {PopperPopover}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_widthAuto__org_patternfly_style_Classes)], j_l_String))), PopperPopover));
 }
 /** @nodts @return {PopperPopover} */
 m_closable__org_patternfly_component_popover_PopperPopover() {
  return this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_PopperPopover(null);
 }
 /** @nodts @return {PopperPopover} */
 m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_PopperPopover(/** CloseHandler<PopperPopover> */ closeHandler) {
  if ($Equality.$same(this.f_closeButton__org_patternfly_component_popover_PopperPopover_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_contentElement__org_patternfly_component_popover_PopperPopover_, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_popover_PopperPopover_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close'), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ event) =>{
    let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
    this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
   }), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_PopperPopover(closeHandler);
 }
 /** @nodts @return {PopperPopover} */
 m_distance__int__org_patternfly_component_popover_PopperPopover(/** number */ distance) {
  this.f_distance__org_patternfly_component_popover_PopperPopover_ = distance;
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_flip__boolean__org_patternfly_component_popover_PopperPopover(/** boolean */ flip) {
  this.f_flip__org_patternfly_component_popover_PopperPopover_ = flip;
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_icon__elemental2_dom_Element__org_patternfly_component_popover_PopperPopover(/** Element */ icon) {
  this.m_failSafeHeader__org_patternfly_component_popover_PopperPopoverHeader_$p_org_patternfly_component_popover_PopperPopover().m_removeIcon__void_$pp_org_patternfly_component_popover();
  this.m_failSafeHeader__org_patternfly_component_popover_PopperPopoverHeader_$p_org_patternfly_component_popover_PopperPopover().m_icon__elemental2_dom_Element__void_$pp_org_patternfly_component_popover(icon);
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_removeIcon__org_patternfly_component_popover_PopperPopover() {
  if (!$Equality.$same(this.f_header__org_patternfly_component_popover_PopperPopover_, null)) {
   this.f_header__org_patternfly_component_popover_PopperPopover_.m_removeIcon__void_$pp_org_patternfly_component_popover();
  }
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_noClose__org_patternfly_component_popover_PopperPopover() {
  this.f_showClose__org_patternfly_component_popover_PopperPopover_ = false;
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_placement__org_patternfly_popper_PopperPlacement__org_patternfly_component_popover_PopperPopover(/** PopperPlacement */ placement) {
  if ($Equality.$same(placement, PopperPlacement.f_auto__org_patternfly_popper_PopperPlacement)) {
   this.f_flip__org_patternfly_component_popover_PopperPopover_ = true;
  }
  this.f_placement__org_patternfly_component_popover_PopperPopover_ = placement;
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_status__org_patternfly_component_Severity__org_patternfly_component_popover_PopperPopover(/** Severity */ severity) {
  return this.m_status__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_popover_PopperPopover(severity, j_l_String.m_valueOf__java_lang_Object__java_lang_String(severity.name()) + ' popover');
 }
 /** @nodts @return {PopperPopover} */
 m_status__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_popover_PopperPopover(/** Severity */ severity, /** ?string */ screenReaderText) {
  if (!$Equality.$same(this.f_severity__org_patternfly_component_popover_PopperPopover_, null)) {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.remove(this.f_severity__org_patternfly_component_popover_PopperPopover_.f_status__org_patternfly_component_Severity.m_modifier__java_lang_String());
  }
  this.f_severity__org_patternfly_component_popover_PopperPopover_ = severity;
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([severity.f_status__org_patternfly_component_Severity.m_modifier__java_lang_String()], j_l_String)));
  this.m_icon__elemental2_dom_Element__org_patternfly_component_popover_PopperPopover(severity.m_icon__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement());
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_trigger__java_lang_String__org_patternfly_component_popover_PopperPopover(/** ?string */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_popover_PopperPopover(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, By.m_selector__java_lang_String__org_jboss_elemento_By(trigger));
  })));
 }
 /** @nodts @return {PopperPopover} */
 m_trigger__org_jboss_elemento_By__org_patternfly_component_popover_PopperPopover(/** By */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_popover_PopperPopover(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  })));
 }
 /** @nodts @return {PopperPopover} */
 m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_PopperPopover(/** HTMLElement */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_popover_PopperPopover(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return trigger;
  })));
 }
 /** @nodts @return {PopperPopover} */
 m_trigger__java_util_function_Supplier__org_patternfly_component_popover_PopperPopover(/** Supplier<HTMLElement> */ trigger) {
  this.f_trigger__org_patternfly_component_popover_PopperPopover_ = trigger;
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_triggerActions__arrayOf_org_patternfly_popper_TriggerAction__org_patternfly_component_popover_PopperPopover(/** Array<TriggerAction> */ triggerActions) {
  if (!$Equality.$same(triggerActions, null)) {
   this.f_triggerActions__org_patternfly_component_popover_PopperPopover_.clear();
   this.f_triggerActions__org_patternfly_component_popover_PopperPopover_.addAll(/**@type {List<TriggerAction>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(triggerActions)));
  }
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_zIndex__int__org_patternfly_component_popover_PopperPopover(/** number */ zIndex) {
  this.f_zIndex__org_patternfly_component_popover_PopperPopover_ = zIndex;
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_that__org_patternfly_component_popover_PopperPopover() {
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_ariaLabel__java_lang_String__org_patternfly_component_popover_PopperPopover(/** ?string */ label) {
  return /**@type {PopperPopover}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), PopperPopover));
 }
 /** @nodts @return {PopperPopover} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_popover_PopperPopover(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_popover_PopperPopover_, null)) {
   this.f_closeButton__org_patternfly_component_popover_PopperPopover_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {PopperPopover} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_PopperPopover(/** CloseHandler<PopperPopover> */ closeHandler) {
  if ($Equality.$same(this.f_closeButton__org_patternfly_component_popover_PopperPopover_, null)) {
   this.f_closeHandler__org_patternfly_component_popover_PopperPopover_.add(closeHandler);
  }
  return this;
 }
 /** @nodts */
 m_show__void() {
  this.m_show__elemental2_dom_Event__void(new Event(''));
 }
 /** @nodts */
 m_show__elemental2_dom_Event__void(/** Event */ event) {
  this.f_popper__org_patternfly_component_popover_PopperPopover_.m_show__org_jboss_elemento_Callback__void(null);
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_popover_PopperPopover_, event, fireEvent)) {
   this.f_popper__org_patternfly_component_popover_PopperPopover_.m_hide__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
    CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_popover_PopperPopover_, event, fireEvent);
   }));
  }
 }
 /** @nodts @return {PopperPopoverHeader} */
 m_failSafeHeader__org_patternfly_component_popover_PopperPopoverHeader_$p_org_patternfly_component_popover_PopperPopover() {
  if ($Equality.$same(this.f_header__org_patternfly_component_popover_PopperPopover_, null)) {
   this.m_add__org_patternfly_component_popover_PopperPopoverHeader__org_patternfly_component_popover_PopperPopover(PopperPopoverHeader.m_popoverHeader__org_patternfly_component_popover_PopperPopoverHeader());
  }
  return this.f_header__org_patternfly_component_popover_PopperPopover_;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperPopover} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_popover_PopperPopover();
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperPopover} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<PopperPopover> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_PopperPopover(arg0);
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
 /** @final @override @nodts @return {PopperPopover} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {PopperPopover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), PopperPopover));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperPopover} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PopperPopover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PopperPopover));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperPopover} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {PopperPopover}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), PopperPopover));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperPopover} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_popover_PopperPopover(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperPopover} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_popover_PopperPopover();
 }
 //Default method forwarding stub.
 /** @nodts @return {PopperPopover} */
 m_noPadding__org_patternfly_component_popover_PopperPopover() {
  return /**@type {PopperPopover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), PopperPopover));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopperPopover} */
 m_noPadding__boolean__org_patternfly_component_popover_PopperPopover(/** boolean */ arg0) {
  return /**@type {PopperPopover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PopperPopover));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopperPopover} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_popover_PopperPopover(/** PredefinedIcon */ arg0) {
  return /**@type {PopperPopover}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), PopperPopover));
 }
 /** @nodts */
 static $clinit() {
  PopperPopover.$clinit = () =>{};
  PopperPopover.$loadModules();
  BaseComponent.$clinit();
  Closeable.$clinit();
  NoPadding.$clinit();
  ComponentIcon.$clinit();
  Attachable.$clinit();
  PopperPopover.f_logger__org_patternfly_component_popover_PopperPopover_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(PopperPopover).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperPopover;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Event_$Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
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
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  PopperPopoverBody = goog.module.get('org.patternfly.component.popover.PopperPopoverBody$impl');
  PopperPopoverFooter = goog.module.get('org.patternfly.component.popover.PopperPopoverFooter$impl');
  PopperPopoverHeader = goog.module.get('org.patternfly.component.popover.PopperPopoverHeader$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
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
PopperPopover.f_logger__org_patternfly_component_popover_PopperPopover_;
/**@const {number} @nodts*/
PopperPopover.f_ANIMATION_DURATION__org_patternfly_component_popover_PopperPopover = 300;
/**@const {number} @nodts*/
PopperPopover.f_DISTANCE__org_patternfly_component_popover_PopperPopover = 25;
/**@const {number} @nodts*/
PopperPopover.f_Z_INDEX__org_patternfly_component_popover_PopperPopover = 9999;
Closeable.$markImplementor(PopperPopover);
NoPadding.$markImplementor(PopperPopover);
ComponentIcon.$markImplementor(PopperPopover);
Attachable.$markImplementor(PopperPopover);
$Util.$setClassMetadata(PopperPopover, 'org.patternfly.component.popover.PopperPopover');

exports = PopperPopover;

//# sourceMappingURL=PopperPopover.js.map
