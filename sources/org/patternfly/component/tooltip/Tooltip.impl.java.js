goog.module('org.patternfly.component.tooltip.Tooltip$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let TriggerAria = goog.forwardDeclare('org.patternfly.component.tooltip.TriggerAria$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let OverlayHandler = goog.forwardDeclare('org.patternfly.handler.OverlayHandler$impl');
let CssPositioning = goog.forwardDeclare('org.patternfly.overlay.CssPositioning$impl');
let Overlay = goog.forwardDeclare('org.patternfly.overlay.Overlay$impl');
let TriggerMode = goog.forwardDeclare('org.patternfly.overlay.TriggerMode$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Placement = goog.forwardDeclare('org.patternfly.style.Placement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Tooltip>}
 * @implements {Attachable}
 * @implements {Closeable<HTMLDivElement, Tooltip>}
 * @implements {ElementContainerDelegate<HTMLDivElement, Tooltip>}
 * @implements {ElementTextDelegate<HTMLDivElement, Tooltip>}
 */
class Tooltip extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_tooltip_Tooltip_;
  /**@type {Overlay} @nodts*/
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_tooltip_Tooltip_;
  /**@type {List<CloseHandler<Tooltip>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_;
  /**@type {TriggerAria} @nodts*/
  this.f_aria__org_patternfly_component_tooltip_Tooltip_;
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__org_patternfly_component_tooltip_Tooltip() {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String(null, null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** ?string */ text) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String(null, text);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__org_jboss_elemento_By__org_patternfly_component_tooltip_Tooltip(/** By */ trigger) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  })), null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** By */ trigger, /** ?string */ text) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  })), text);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_Tooltip(/** HTMLElement */ trigger) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return trigger;
  })), null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__elemental2_dom_HTMLElement__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** HTMLElement */ trigger, /** ?string */ text) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return trigger;
  })), text);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__java_util_function_Supplier__org_patternfly_component_tooltip_Tooltip(/** Supplier<HTMLElement> */ trigger) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String(trigger, null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__java_util_function_Supplier__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** Supplier<HTMLElement> */ trigger, /** ?string */ text) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String(trigger, text);
 }
 /** @nodts @return {!Tooltip} */
 static $create__java_util_function_Supplier__java_lang_String(/** Supplier<HTMLElement> */ trigger, /** ?string */ text) {
  Tooltip.$clinit();
  let $instance = new Tooltip();
  $instance.$ctor__org_patternfly_component_tooltip_Tooltip__java_util_function_Supplier__java_lang_String__void(trigger, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tooltip_Tooltip__java_util_function_Supplier__java_lang_String__void(/** Supplier<HTMLElement> */ trigger, /** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Tooltip__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_tooltip__org_patternfly_core_Roles), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_live__org_patternfly_core_Aria, 'polite'), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_id__org_patternfly_component_tooltip_Tooltip_ = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)));
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_ = Overlay.m_overlay__elemental2_dom_HTMLElement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), Placement.f_top__org_patternfly_style_Placement).m_triggerMode__org_patternfly_overlay_TriggerMode__org_patternfly_overlay_Overlay(TriggerMode.f_hover__org_patternfly_overlay_TriggerMode).m_trigger__java_util_function_Supplier__org_patternfly_overlay_Overlay(trigger).m_distance__int__org_patternfly_overlay_Overlay(Tooltip.f_DISTANCE__org_patternfly_component_tooltip_Tooltip).m_entryDelay__int__org_patternfly_overlay_Overlay(Tooltip.f_ENTRY_DELAY__org_patternfly_component_tooltip_Tooltip).m_exitDelay__int__org_patternfly_overlay_Overlay(Tooltip.f_EXIT_DELAY__org_patternfly_component_tooltip_Tooltip).m_cssPositioning__boolean__org_patternfly_overlay_Overlay(CssPositioning.m_containerTypeAnchoredSupported__boolean());
  this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_ = (/**@type {!ArrayList<CloseHandler<Tooltip>>}*/ (ArrayList.$create__()));
  this.f_aria__org_patternfly_component_tooltip_Tooltip_ = TriggerAria.f_describedBy__org_patternfly_component_tooltip_TriggerAria;
  this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_id__org_patternfly_component_tooltip_Tooltip_);
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_arrow__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).appendChild(this.f_contentElement__org_patternfly_component_tooltip_Tooltip_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  if (!$Equality.$same(text, null)) {
   this.f_contentElement__org_patternfly_component_tooltip_Tooltip_.textContent = text;
  }
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_contentElement__org_patternfly_component_tooltip_Tooltip_;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_contentElement__org_patternfly_component_tooltip_Tooltip_;
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_onToggle__org_patternfly_handler_OverlayHandler__org_patternfly_overlay_Overlay(OverlayHandler.$adapt((/** Event */ event, /** boolean */ open) =>{
   let trigger = this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_trigger__elemental2_dom_HTMLElement();
   if (open) {
    if (!$Equality.$same(this.f_aria__org_patternfly_component_tooltip_Tooltip_, TriggerAria.f_none__org_patternfly_component_tooltip_TriggerAria) && !$Equality.$same(trigger, null)) {
     Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(trigger, this.f_aria__org_patternfly_component_tooltip_Tooltip_.f_attribute__org_patternfly_component_tooltip_TriggerAria, this.f_id__org_patternfly_component_tooltip_Tooltip_);
    }
   } else {
    if (!$Equality.$same(this.f_aria__org_patternfly_component_tooltip_Tooltip_, TriggerAria.f_none__org_patternfly_component_tooltip_TriggerAria) && !$Equality.$same(trigger, null)) {
     trigger.removeAttribute(this.f_aria__org_patternfly_component_tooltip_Tooltip_.f_attribute__org_patternfly_component_tooltip_TriggerAria);
    }
    CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_, event, true);
   }
  }));
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_attach__elemental2_dom_HTMLElement();
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_detach__void();
 }
 /** @nodts @return {Tooltip} */
 m_distance__int__org_patternfly_component_tooltip_Tooltip(/** number */ distance) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_distance__int__org_patternfly_overlay_Overlay(distance);
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_entryDelay__int__org_patternfly_component_tooltip_Tooltip(/** number */ delay) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_entryDelay__int__org_patternfly_overlay_Overlay(delay);
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_exitDelay__int__org_patternfly_component_tooltip_Tooltip(/** number */ delay) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_exitDelay__int__org_patternfly_overlay_Overlay(delay);
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_leftAligned__org_patternfly_component_tooltip_Tooltip() {
  this.f_contentElement__org_patternfly_component_tooltip_Tooltip_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_textAlignLeft__org_patternfly_style_Classes));
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_placement__org_patternfly_style_Placement__org_patternfly_component_tooltip_Tooltip(/** Placement */ placement) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_placement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(placement);
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_trigger__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** ?string */ trigger) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_trigger__java_lang_String__org_patternfly_overlay_Overlay(trigger);
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_trigger__org_jboss_elemento_By__org_patternfly_component_tooltip_Tooltip(/** By */ trigger) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_trigger__org_jboss_elemento_By__org_patternfly_overlay_Overlay(trigger);
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_Tooltip(/** HTMLElement */ trigger) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_trigger__elemental2_dom_HTMLElement__org_patternfly_overlay_Overlay(trigger);
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_Tooltip(/** Supplier<HTMLElement> */ trigger) {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_trigger__java_util_function_Supplier__org_patternfly_overlay_Overlay(trigger);
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_that__org_patternfly_component_tooltip_Tooltip() {
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_aria__org_patternfly_component_tooltip_TriggerAria__org_patternfly_component_tooltip_Tooltip(/** TriggerAria */ aria) {
  this.f_aria__org_patternfly_component_tooltip_Tooltip_ = aria;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_Tooltip(/** CloseHandler<Tooltip> */ closeHandler) {
  if (!$Equality.$same(closeHandler, null)) {
   this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_.add(closeHandler);
  }
  return this;
 }
 /** @nodts */
 m_show__void() {
  this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_show__void();
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_, event, fireEvent)) {
   this.f_overlay__org_patternfly_component_tooltip_Tooltip_.m_hide__elemental2_dom_Event__void(event);
  }
 }
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return Elements.m_textNode__elemental2_dom_Element__java_lang_String(this.f_contentElement__org_patternfly_component_tooltip_Tooltip_);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tooltip} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tooltip_Tooltip();
 }
 //Bridge method.
 /** @final @override @nodts @return {Tooltip} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Tooltip> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_Tooltip(arg0);
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
 /** @final @override @nodts @return {Tooltip} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {Tooltip}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Tooltip));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tooltip} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {Tooltip}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), Tooltip));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tooltip} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {Tooltip}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), Tooltip));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tooltip} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {Tooltip}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Tooltip));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tooltip} */
 m_add__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** ?string */ arg0) {
  return /**@type {Tooltip}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Tooltip));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tooltip} */
 m_add__elemental2_dom_Node__org_patternfly_component_tooltip_Tooltip(/** Node */ arg0) {
  return /**@type {Tooltip}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), Tooltip));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tooltip} */
 m_add__java_util_function_Supplier__org_patternfly_component_tooltip_Tooltip(/** Supplier<Node> */ arg0) {
  return /**@type {Tooltip}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), Tooltip));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tooltip} */
 m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** ?string */ arg0) {
  return /**@type {Tooltip}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Tooltip));
 }
 /** @nodts */
 static $clinit() {
  Tooltip.$clinit = () =>{};
  Tooltip.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Closeable.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tooltip;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  TriggerAria = goog.module.get('org.patternfly.component.tooltip.TriggerAria$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  OverlayHandler = goog.module.get('org.patternfly.handler.OverlayHandler$impl');
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
Tooltip.f_DISTANCE__org_patternfly_component_tooltip_Tooltip = 15;
/**@const {number} @nodts*/
Tooltip.f_ENTRY_DELAY__org_patternfly_component_tooltip_Tooltip = 300;
/**@const {number} @nodts*/
Tooltip.f_EXIT_DELAY__org_patternfly_component_tooltip_Tooltip = 300;
Attachable.$markImplementor(Tooltip);
Closeable.$markImplementor(Tooltip);
ElementContainerDelegate.$markImplementor(Tooltip);
ElementTextDelegate.$markImplementor(Tooltip);
$Util.$setClassMetadata(Tooltip, 'org.patternfly.component.tooltip.Tooltip');

exports = Tooltip;

//# sourceMappingURL=Tooltip.js.map
