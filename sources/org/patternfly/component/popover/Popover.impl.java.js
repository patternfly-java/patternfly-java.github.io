goog.module('org.patternfly.component.popover.Popover$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let PopoverBody = goog.forwardDeclare('org.patternfly.component.popover.PopoverBody$impl');
let PopoverFooter = goog.forwardDeclare('org.patternfly.component.popover.PopoverFooter$impl');
let PopoverHeader = goog.forwardDeclare('org.patternfly.component.popover.PopoverHeader$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let OverlayHandler = goog.forwardDeclare('org.patternfly.handler.OverlayHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let CssPositioning = goog.forwardDeclare('org.patternfly.overlay.CssPositioning$impl');
let Overlay = goog.forwardDeclare('org.patternfly.overlay.Overlay$impl');
let TriggerMode = goog.forwardDeclare('org.patternfly.overlay.TriggerMode$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Placement = goog.forwardDeclare('org.patternfly.style.Placement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Popover>}
 * @implements {Attachable}
 * @implements {Closeable<HTMLDivElement, Popover>}
 * @implements {ComponentIcon<HTMLDivElement, Popover>}
 * @implements {NoPadding<HTMLDivElement, Popover>}
 */
class Popover extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Overlay} @nodts*/
  this.f_overlay__org_patternfly_component_popover_Popover_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_popover_Popover_;
  /**@type {List<CloseHandler<Popover>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_popover_Popover_;
  /**@type {boolean} @nodts*/
  this.f_showClose__org_patternfly_component_popover_Popover_ = false;
  /**@type {boolean} @nodts*/
  this.f_hoverable__org_patternfly_component_popover_Popover_ = false;
  /**@type {Severity} @nodts*/
  this.f_severity__org_patternfly_component_popover_Popover_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_popover_Popover_;
  /**@type {PopoverHeader} @nodts*/
  this.f_header__org_patternfly_component_popover_Popover_;
 }
 /** @nodts @return {Popover} */
 static m_popover__org_patternfly_component_popover_Popover() {
  Popover.$clinit();
  return Popover.$create__java_util_function_Supplier(null);
 }
 /** @nodts @return {Popover} */
 static m_popover__org_jboss_elemento_By__org_patternfly_component_popover_Popover(/** By */ trigger) {
  Popover.$clinit();
  return Popover.$create__java_util_function_Supplier(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  })));
 }
 /** @nodts @return {Popover} */
 static m_popover__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(/** HTMLElement */ trigger) {
  Popover.$clinit();
  return Popover.$create__java_util_function_Supplier(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return trigger;
  })));
 }
 /** @nodts @return {Popover} */
 static m_popover__java_util_function_Supplier__org_patternfly_component_popover_Popover(/** Supplier<HTMLElement> */ trigger) {
  Popover.$clinit();
  return Popover.$create__java_util_function_Supplier(trigger);
 }
 /** @nodts @return {!Popover} */
 static $create__java_util_function_Supplier(/** Supplier<HTMLElement> */ trigger) {
  Popover.$clinit();
  let $instance = new Popover();
  $instance.$ctor__org_patternfly_component_popover_Popover__java_util_function_Supplier__void(trigger);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_popover_Popover__java_util_function_Supplier__void(/** Supplier<HTMLElement> */ trigger) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Popover__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), Placement.f_top__org_patternfly_style_Placement.m_modifier__java_lang_String()], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_dialog__org_patternfly_core_Roles), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_modal__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_overlay__org_patternfly_component_popover_Popover_ = Overlay.m_overlay__elemental2_dom_HTMLElement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), Placement.f_top__org_patternfly_style_Placement).m_trigger__java_util_function_Supplier__org_patternfly_overlay_Overlay(trigger).m_distance__int__org_patternfly_overlay_Overlay(Popover.f_DISTANCE__org_patternfly_component_popover_Popover).m_entryDelay__int__org_patternfly_overlay_Overlay(Popover.f_ENTRY_DELAY__org_patternfly_component_popover_Popover).m_exitDelay__int__org_patternfly_overlay_Overlay(Popover.f_EXIT_DELAY__org_patternfly_component_popover_Popover).m_cssPositioning__boolean__org_patternfly_overlay_Overlay(CssPositioning.m_containerTypeAnchoredSupported__boolean());
  this.f_closeHandler__org_patternfly_component_popover_Popover_ = (/**@type {!ArrayList<CloseHandler<Popover>>}*/ (ArrayList.$create__()));
  this.f_showClose__org_patternfly_component_popover_Popover_ = true;
  this.f_hoverable__org_patternfly_component_popover_Popover_ = false;
  let bodyId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['body'], j_l_String)));
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_arrow__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).appendChild(this.f_contentElement__org_patternfly_component_popover_Popover_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_describedBy__org_patternfly_core_Aria, bodyId);
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_showClose__org_patternfly_component_popover_Popover_) {
   this.m_closable__org_patternfly_component_popover_Popover();
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_closeButton__org_patternfly_component_popover_Popover_);
  }
  this.f_overlay__org_patternfly_component_popover_Popover_.m_triggerMode__org_patternfly_overlay_TriggerMode__org_patternfly_overlay_Overlay(this.f_hoverable__org_patternfly_component_popover_Popover_ ? TriggerMode.f_hover__org_patternfly_overlay_TriggerMode : TriggerMode.f_click__org_patternfly_overlay_TriggerMode);
  this.f_overlay__org_patternfly_component_popover_Popover_.m_onToggle__org_patternfly_handler_OverlayHandler__org_patternfly_overlay_Overlay(OverlayHandler.$adapt((/** Event */ event, /** boolean */ open) =>{
   if (!open) {
    CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_popover_Popover_, event, true);
   }
  }));
  this.f_overlay__org_patternfly_component_popover_Popover_.m_attach__elemental2_dom_HTMLElement();
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_detach__void();
 }
 /** @nodts @return {Popover} */
 m_addHeader__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ header) {
  if (!$Equality.$same(this.f_header__org_patternfly_component_popover_Popover_, null)) {
   this.f_header__org_patternfly_component_popover_Popover_.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(header);
   return this;
  } else {
   return this.m_add__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(/**@type {PopoverHeader}*/ ($Casts.$to(PopoverHeader.m_popoverHeader__org_patternfly_component_popover_PopoverHeader().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(header), PopoverHeader)));
  }
 }
 /** @nodts @return {Popover} */
 m_addHeader__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(/** PopoverHeader */ header) {
  return this.m_add__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(header);
 }
 /** @nodts @return {Popover} */
 m_add__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(/** PopoverHeader */ header) {
  this.f_header__org_patternfly_component_popover_Popover_ = header;
  this.f_contentElement__org_patternfly_component_popover_Popover_.appendChild(header.m_element__elemental2_dom_HTMLElement());
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, header.f_headerId__org_patternfly_component_popover_PopoverHeader);
  return this;
 }
 /** @nodts @return {Popover} */
 m_addBody__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ body) {
  return this.m_add__org_patternfly_component_popover_PopoverBody__org_patternfly_component_popover_Popover(/**@type {PopoverBody}*/ ($Casts.$to(PopoverBody.m_popoverBody__org_patternfly_component_popover_PopoverBody().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(body), PopoverBody)));
 }
 /** @nodts @return {Popover} */
 m_addBody__org_patternfly_component_popover_PopoverBody__org_patternfly_component_popover_Popover(/** PopoverBody */ body) {
  return this.m_add__org_patternfly_component_popover_PopoverBody__org_patternfly_component_popover_Popover(body);
 }
 /** @nodts @return {Popover} */
 m_add__org_patternfly_component_popover_PopoverBody__org_patternfly_component_popover_Popover(/** PopoverBody */ body) {
  this.f_contentElement__org_patternfly_component_popover_Popover_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(body.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Popover} */
 m_addFooter__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ footer) {
  return this.m_add__org_patternfly_component_popover_PopoverFooter__org_patternfly_component_popover_Popover(/**@type {PopoverFooter}*/ ($Casts.$to(PopoverFooter.m_popoverFooter__org_patternfly_component_popover_PopoverFooter().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(footer), PopoverFooter)));
 }
 /** @nodts @return {Popover} */
 m_addFooter__org_patternfly_component_popover_PopoverFooter__org_patternfly_component_popover_Popover(/** PopoverFooter */ footer) {
  return this.m_add__org_patternfly_component_popover_PopoverFooter__org_patternfly_component_popover_Popover(footer);
 }
 /** @nodts @return {Popover} */
 m_add__org_patternfly_component_popover_PopoverFooter__org_patternfly_component_popover_Popover(/** PopoverFooter */ footer) {
  this.f_contentElement__org_patternfly_component_popover_Popover_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(footer.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Popover} */
 m_autoWidth__org_patternfly_component_popover_Popover() {
  return /**@type {Popover}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_widthAuto__org_patternfly_style_Classes)], j_l_String))), Popover));
 }
 /** @nodts @return {Popover} */
 m_closable__org_patternfly_component_popover_Popover() {
  return this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(null);
 }
 /** @nodts @return {Popover} */
 m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(/** CloseHandler<Popover> */ closeHandler) {
  if ($Equality.$same(this.f_closeButton__org_patternfly_component_popover_Popover_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_contentElement__org_patternfly_component_popover_Popover_, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_popover_Popover_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close'), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ event) =>{
    let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
    event_1.stopPropagation();
    this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
   }), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(closeHandler);
 }
 /** @nodts @return {Popover} */
 m_distance__int__org_patternfly_component_popover_Popover(/** number */ distance) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_distance__int__org_patternfly_overlay_Overlay(distance);
  return this;
 }
 /** @nodts @return {Popover} */
 m_entryDelay__int__org_patternfly_component_popover_Popover(/** number */ delay) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_entryDelay__int__org_patternfly_overlay_Overlay(delay);
  return this;
 }
 /** @nodts @return {Popover} */
 m_exitDelay__int__org_patternfly_component_popover_Popover(/** number */ delay) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_exitDelay__int__org_patternfly_overlay_Overlay(delay);
  return this;
 }
 /** @nodts @return {Popover} */
 m_hoverable__org_patternfly_component_popover_Popover() {
  return this.m_hoverable__boolean__org_patternfly_component_popover_Popover(true);
 }
 /** @nodts @return {Popover} */
 m_hoverable__boolean__org_patternfly_component_popover_Popover(/** boolean */ hoverable) {
  this.f_hoverable__org_patternfly_component_popover_Popover_ = hoverable;
  return this;
 }
 /** @nodts @return {Popover} */
 m_icon__elemental2_dom_Element__org_patternfly_component_popover_Popover(/** Element */ icon) {
  this.m_failSafeHeader__org_patternfly_component_popover_PopoverHeader_$p_org_patternfly_component_popover_Popover().m_removeIcon__void_$pp_org_patternfly_component_popover();
  this.m_failSafeHeader__org_patternfly_component_popover_PopoverHeader_$p_org_patternfly_component_popover_Popover().m_icon__elemental2_dom_Element__void_$pp_org_patternfly_component_popover(icon);
  return this;
 }
 /** @nodts @return {Popover} */
 m_removeIcon__org_patternfly_component_popover_Popover() {
  if (!$Equality.$same(this.f_header__org_patternfly_component_popover_Popover_, null)) {
   this.f_header__org_patternfly_component_popover_Popover_.m_removeIcon__void_$pp_org_patternfly_component_popover();
  }
  return this;
 }
 /** @nodts @return {Popover} */
 m_noClose__org_patternfly_component_popover_Popover() {
  this.f_showClose__org_patternfly_component_popover_Popover_ = false;
  return this;
 }
 /** @nodts @return {Popover} */
 m_placement__org_patternfly_style_Placement__org_patternfly_component_popover_Popover(/** Placement */ placement) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_placement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(placement);
  return this;
 }
 /** @nodts @return {Popover} */
 m_status__org_patternfly_component_Severity__org_patternfly_component_popover_Popover(/** Severity */ severity) {
  return this.m_status__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_popover_Popover(severity, j_l_String.m_valueOf__java_lang_Object__java_lang_String(severity.name()) + ' popover');
 }
 /** @nodts @return {Popover} */
 m_status__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_popover_Popover(/** Severity */ severity, /** ?string */ screenReaderText) {
  if (!$Equality.$same(this.f_severity__org_patternfly_component_popover_Popover_, null)) {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.remove(this.f_severity__org_patternfly_component_popover_Popover_.f_status__org_patternfly_component_Severity.m_modifier__java_lang_String());
  }
  this.f_severity__org_patternfly_component_popover_Popover_ = severity;
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([severity.f_status__org_patternfly_component_Severity.m_modifier__java_lang_String()], j_l_String)));
  this.m_icon__elemental2_dom_Element__org_patternfly_component_popover_Popover(severity.m_icon__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement());
  return this;
 }
 /** @nodts @return {Popover} */
 m_trigger__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ trigger) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_trigger__java_lang_String__org_patternfly_overlay_Overlay(trigger);
  return this;
 }
 /** @nodts @return {Popover} */
 m_trigger__org_jboss_elemento_By__org_patternfly_component_popover_Popover(/** By */ trigger) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_trigger__org_jboss_elemento_By__org_patternfly_overlay_Overlay(trigger);
  return this;
 }
 /** @nodts @return {Popover} */
 m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(/** HTMLElement */ trigger) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_trigger__elemental2_dom_HTMLElement__org_patternfly_overlay_Overlay(trigger);
  return this;
 }
 /** @nodts @return {Popover} */
 m_trigger__java_util_function_Supplier__org_patternfly_component_popover_Popover(/** Supplier<HTMLElement> */ trigger) {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_trigger__java_util_function_Supplier__org_patternfly_overlay_Overlay(trigger);
  return this;
 }
 /** @nodts @return {Popover} */
 m_that__org_patternfly_component_popover_Popover() {
  return this;
 }
 /** @nodts @return {Popover} */
 m_ariaLabel__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ label) {
  return /**@type {Popover}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Popover));
 }
 /** @nodts @return {Popover} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_popover_Popover_, null)) {
   this.f_closeButton__org_patternfly_component_popover_Popover_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Popover} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(/** CloseHandler<Popover> */ closeHandler) {
  if (!$Equality.$same(closeHandler, null)) {
   this.f_closeHandler__org_patternfly_component_popover_Popover_.add(closeHandler);
  }
  return this;
 }
 /** @nodts */
 m_show__void() {
  this.f_overlay__org_patternfly_component_popover_Popover_.m_show__void();
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_popover_Popover_, event, fireEvent)) {
   this.f_overlay__org_patternfly_component_popover_Popover_.m_hide__elemental2_dom_Event__void(event);
  }
 }
 /** @nodts @return {PopoverHeader} */
 m_failSafeHeader__org_patternfly_component_popover_PopoverHeader_$p_org_patternfly_component_popover_Popover() {
  if ($Equality.$same(this.f_header__org_patternfly_component_popover_Popover_, null)) {
   this.m_add__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(PopoverHeader.m_popoverHeader__org_patternfly_component_popover_PopoverHeader());
  }
  return this.f_header__org_patternfly_component_popover_Popover_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_popover_Popover();
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Popover> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(arg0);
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
 /** @final @override @nodts @return {Popover} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {Popover}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Popover));
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_popover_Popover(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_popover_Popover();
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {Popover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), Popover));
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Popover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Popover));
 }
 //Default method forwarding stub.
 /** @nodts @return {Popover} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_popover_Popover(/** PredefinedIcon */ arg0) {
  return /**@type {Popover}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Popover));
 }
 //Default method forwarding stub.
 /** @nodts @return {Popover} */
 m_noPadding__org_patternfly_component_popover_Popover() {
  return /**@type {Popover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), Popover));
 }
 //Default method forwarding stub.
 /** @nodts @return {Popover} */
 m_noPadding__boolean__org_patternfly_component_popover_Popover(/** boolean */ arg0) {
  return /**@type {Popover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Popover));
 }
 /** @nodts */
 static $clinit() {
  Popover.$clinit = () =>{};
  Popover.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Closeable.$clinit();
  ComponentIcon.$clinit();
  NoPadding.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Popover;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  PopoverBody = goog.module.get('org.patternfly.component.popover.PopoverBody$impl');
  PopoverFooter = goog.module.get('org.patternfly.component.popover.PopoverFooter$impl');
  PopoverHeader = goog.module.get('org.patternfly.component.popover.PopoverHeader$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  OverlayHandler = goog.module.get('org.patternfly.handler.OverlayHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  CssPositioning = goog.module.get('org.patternfly.overlay.CssPositioning$impl');
  Overlay = goog.module.get('org.patternfly.overlay.Overlay$impl');
  TriggerMode = goog.module.get('org.patternfly.overlay.TriggerMode$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Placement = goog.module.get('org.patternfly.style.Placement$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
Popover.f_DISTANCE__org_patternfly_component_popover_Popover = 20;
/**@const {number} @nodts*/
Popover.f_ENTRY_DELAY__org_patternfly_component_popover_Popover = 300;
/**@const {number} @nodts*/
Popover.f_EXIT_DELAY__org_patternfly_component_popover_Popover = 300;
Attachable.$markImplementor(Popover);
Closeable.$markImplementor(Popover);
ComponentIcon.$markImplementor(Popover);
NoPadding.$markImplementor(Popover);
$Util.$setClassMetadata(Popover, 'org.patternfly.component.popover.Popover');

exports = Popover;

//# sourceMappingURL=Popover.js.map
