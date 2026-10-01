goog.module('org.patternfly.overlay.Overlay$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let FocusEvent_$Overlay = goog.forwardDeclare('elemental2.dom.FocusEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let HandlerRegistrations = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistrations$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let OverlayHandler = goog.forwardDeclare('org.patternfly.handler.OverlayHandler$impl');
let TriggerMode = goog.forwardDeclare('org.patternfly.overlay.TriggerMode$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Placement = goog.forwardDeclare('org.patternfly.style.Placement$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Overlay extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_overlay_Overlay_;
  /**@type {HTMLElement} @nodts*/
  this.f_overlayElement__org_patternfly_overlay_Overlay_;
  /**@type {List<OverlayHandler>} @nodts*/
  this.f_toggleHandlers__org_patternfly_overlay_Overlay_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_triggerSupplier__org_patternfly_overlay_Overlay_;
  /**@type {HTMLElement} @nodts*/
  this.f_trigger__org_patternfly_overlay_Overlay_;
  /**@type {boolean} @nodts*/
  this.f_cssPositioning__org_patternfly_overlay_Overlay_ = false;
  /**@type {boolean} @nodts*/
  this.f_matchTriggerWidth__org_patternfly_overlay_Overlay_ = false;
  /**@type {number} @nodts*/
  this.f_distance__org_patternfly_overlay_Overlay_ = 0;
  /**@type {Placement} @nodts*/
  this.f_placement__org_patternfly_overlay_Overlay_;
  /**@type {TriggerMode} @nodts*/
  this.f_triggerMode__org_patternfly_overlay_Overlay_;
  /**@type {number} @nodts*/
  this.f_entryDelay__org_patternfly_overlay_Overlay_ = 0;
  /**@type {number} @nodts*/
  this.f_exitDelay__org_patternfly_overlay_Overlay_ = 0;
  /**@type {number} @nodts*/
  this.f_showTimeout__org_patternfly_overlay_Overlay_ = 0;
  /**@type {number} @nodts*/
  this.f_hideTimeout__org_patternfly_overlay_Overlay_ = 0;
  /**@type {boolean} @nodts*/
  this.f_visible__org_patternfly_overlay_Overlay_ = false;
  /**@type {HandlerRegistration} @nodts*/
  this.f_triggerHandlers__org_patternfly_overlay_Overlay_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_overlayHandlers__org_patternfly_overlay_Overlay_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_outsideClickHandler__org_patternfly_overlay_Overlay_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_scrollHandler__org_patternfly_overlay_Overlay_;
 }
 /** @nodts @return {Overlay} */
 static m_overlay__elemental2_dom_HTMLElement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(/** HTMLElement */ overlayElement, /** Placement */ placement) {
  Overlay.$clinit();
  return Overlay.$create__elemental2_dom_HTMLElement__org_patternfly_style_Placement(overlayElement, placement);
 }
 /** @nodts @return {!Overlay} */
 static $create__elemental2_dom_HTMLElement__org_patternfly_style_Placement(/** HTMLElement */ overlayElement, /** Placement */ placement) {
  Overlay.$clinit();
  let $instance = new Overlay();
  $instance.$ctor__org_patternfly_overlay_Overlay__elemental2_dom_HTMLElement__org_patternfly_style_Placement__void(overlayElement, placement);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_overlay_Overlay__elemental2_dom_HTMLElement__org_patternfly_style_Placement__void(/** HTMLElement */ overlayElement, /** Placement */ placement) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_patternfly_overlay_Overlay_ = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('overlay', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)));
  this.f_overlayElement__org_patternfly_overlay_Overlay_ = overlayElement;
  this.f_toggleHandlers__org_patternfly_overlay_Overlay_ = (/**@type {!ArrayList<OverlayHandler>}*/ (ArrayList.$create__()));
  this.f_triggerMode__org_patternfly_overlay_Overlay_ = TriggerMode.f_manual__org_patternfly_overlay_TriggerMode;
  this.f_cssPositioning__org_patternfly_overlay_Overlay_ = false;
  this.f_matchTriggerWidth__org_patternfly_overlay_Overlay_ = false;
  this.f_visible__org_patternfly_overlay_Overlay_ = false;
  this.f_distance__org_patternfly_overlay_Overlay_ = 0;
  this.f_entryDelay__org_patternfly_overlay_Overlay_ = 0;
  this.f_exitDelay__org_patternfly_overlay_Overlay_ = 0;
  this.f_showTimeout__org_patternfly_overlay_Overlay_ = 0;
  this.f_hideTimeout__org_patternfly_overlay_Overlay_ = 0;
  this.m_placement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(placement);
 }
 /** @nodts @return {Overlay} */
 m_triggerMode__org_patternfly_overlay_TriggerMode__org_patternfly_overlay_Overlay(/** TriggerMode */ mode) {
  this.f_triggerMode__org_patternfly_overlay_Overlay_ = mode;
  return this;
 }
 /** @nodts @return {Overlay} */
 m_trigger__java_lang_String__org_patternfly_overlay_Overlay(/** ?string */ selector) {
  this.f_triggerSupplier__org_patternfly_overlay_Overlay_ = Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, By.m_selector__java_lang_String__org_jboss_elemento_By(selector));
  }));
  return this;
 }
 /** @nodts @return {Overlay} */
 m_trigger__org_jboss_elemento_By__org_patternfly_overlay_Overlay(/** By */ selector) {
  this.f_triggerSupplier__org_patternfly_overlay_Overlay_ = Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, selector);
  }));
  return this;
 }
 /** @nodts @return {Overlay} */
 m_trigger__elemental2_dom_HTMLElement__org_patternfly_overlay_Overlay(/** HTMLElement */ element) {
  this.f_triggerSupplier__org_patternfly_overlay_Overlay_ = Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return element;
  }));
  return this;
 }
 /** @nodts @return {Overlay} */
 m_trigger__java_util_function_Supplier__org_patternfly_overlay_Overlay(/** Supplier<HTMLElement> */ supplier) {
  this.f_triggerSupplier__org_patternfly_overlay_Overlay_ = supplier;
  return this;
 }
 /** @nodts @return {Overlay} */
 m_placement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(/** Placement */ placement) {
  this.f_placement__org_patternfly_overlay_Overlay_ = placement;
  return this;
 }
 /** @nodts @return {Overlay} */
 m_distance__int__org_patternfly_overlay_Overlay(/** number */ distance) {
  this.f_distance__org_patternfly_overlay_Overlay_ = distance;
  return this;
 }
 /** @nodts @return {Overlay} */
 m_entryDelay__int__org_patternfly_overlay_Overlay(/** number */ delay) {
  this.f_entryDelay__org_patternfly_overlay_Overlay_ = delay;
  return this;
 }
 /** @nodts @return {Overlay} */
 m_exitDelay__int__org_patternfly_overlay_Overlay(/** number */ delay) {
  this.f_exitDelay__org_patternfly_overlay_Overlay_ = delay;
  return this;
 }
 /** @nodts @return {Overlay} */
 m_cssPositioning__boolean__org_patternfly_overlay_Overlay(/** boolean */ enabled) {
  this.f_cssPositioning__org_patternfly_overlay_Overlay_ = enabled;
  return this;
 }
 /** @nodts @return {Overlay} */
 m_matchTriggerWidth__boolean__org_patternfly_overlay_Overlay(/** boolean */ match) {
  this.f_matchTriggerWidth__org_patternfly_overlay_Overlay_ = match;
  return this;
 }
 /** @nodts @return {Overlay} */
 m_onToggle__org_patternfly_handler_OverlayHandler__org_patternfly_overlay_Overlay(/** OverlayHandler */ handler) {
  if (!$Equality.$same(handler, null)) {
   this.f_toggleHandlers__org_patternfly_overlay_Overlay_.add(handler);
  }
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_attach__elemental2_dom_HTMLElement() {
  if (!$Equality.$same(this.f_triggerSupplier__org_patternfly_overlay_Overlay_, null)) {
   this.f_trigger__org_patternfly_overlay_Overlay_ = (/**@type {HTMLElement}*/ ($Casts.$to(this.f_triggerSupplier__org_patternfly_overlay_Overlay_.m_get__java_lang_Object(), $Overlay)));
   if (!$Equality.$same(this.f_trigger__org_patternfly_overlay_Overlay_, null)) {
    this.m_setupOverlayAndTrigger__void_$p_org_patternfly_overlay_Overlay();
    switch (this.f_triggerMode__org_patternfly_overlay_Overlay_.ordinal()) {
     case TriggerMode.$ordinal_hover__org_patternfly_overlay_TriggerMode:
      this.m_registerHoverListeners__void_$p_org_patternfly_overlay_Overlay();
      break;
     case TriggerMode.$ordinal_click__org_patternfly_overlay_TriggerMode:
      this.m_registerClickListeners__void_$p_org_patternfly_overlay_Overlay();
      break;
     case TriggerMode.$ordinal_manual__org_patternfly_overlay_TriggerMode:
      break;
    }
   } else {
    Overlay.f_logger__org_patternfly_overlay_Overlay_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to find trigger element for overlay %o', [this.f_overlayElement__org_patternfly_overlay_Overlay_]);
   }
  } else {
   Overlay.f_logger__org_patternfly_overlay_Overlay_.m_error__java_lang_String__arrayOf_java_lang_Object__void('No trigger element defined for overlay %o', [this.f_overlayElement__org_patternfly_overlay_Overlay_]);
  }
  return this.f_trigger__org_patternfly_overlay_Overlay_;
 }
 /** @nodts */
 m_detach__void() {
  this.m_cancelTimers__void_$p_org_patternfly_overlay_Overlay();
  if (this.f_visible__org_patternfly_overlay_Overlay_) {
   this.m_internalHide__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(new Event(''));
  }
  if (!$Equality.$same(this.f_scrollHandler__org_patternfly_overlay_Overlay_, null)) {
   this.f_scrollHandler__org_patternfly_overlay_Overlay_.m_removeHandler__void();
   this.f_scrollHandler__org_patternfly_overlay_Overlay_ = null;
  }
  if (!$Equality.$same(this.f_overlayHandlers__org_patternfly_overlay_Overlay_, null)) {
   this.f_overlayHandlers__org_patternfly_overlay_Overlay_.m_removeHandler__void();
   this.f_overlayHandlers__org_patternfly_overlay_Overlay_ = null;
  }
  if (!$Equality.$same(this.f_outsideClickHandler__org_patternfly_overlay_Overlay_, null)) {
   this.f_outsideClickHandler__org_patternfly_overlay_Overlay_.m_removeHandler__void();
   this.f_outsideClickHandler__org_patternfly_overlay_Overlay_ = null;
  }
  if (!$Equality.$same(this.f_triggerHandlers__org_patternfly_overlay_Overlay_, null)) {
   this.f_triggerHandlers__org_patternfly_overlay_Overlay_.m_removeHandler__void();
   this.f_triggerHandlers__org_patternfly_overlay_Overlay_ = null;
  }
  this.m_teardownOverlayAndTrigger__void_$p_org_patternfly_overlay_Overlay();
 }
 /** @nodts */
 m_show__void() {
  this.m_show__elemental2_dom_Event__void(new Event(''));
 }
 /** @nodts */
 m_show__elemental2_dom_Event__void(/** Event */ event) {
  if (this.f_visible__org_patternfly_overlay_Overlay_ || $Equality.$same(this.f_trigger__org_patternfly_overlay_Overlay_, null)) {
   return;
  }
  this.m_internalShow__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(event);
 }
 /** @nodts */
 m_hide__void() {
  this.m_hide__elemental2_dom_Event__void(new Event(''));
 }
 /** @nodts */
 m_hide__elemental2_dom_Event__void(/** Event */ event) {
  if (!this.f_visible__org_patternfly_overlay_Overlay_) {
   return;
  }
  this.m_internalHide__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(event);
 }
 /** @nodts */
 m_toggle__void() {
  this.m_toggle__elemental2_dom_Event__void(new Event(''));
 }
 /** @nodts */
 m_toggle__elemental2_dom_Event__void(/** Event */ event) {
  if (this.f_visible__org_patternfly_overlay_Overlay_) {
   this.m_hide__elemental2_dom_Event__void(event);
  } else {
   this.m_show__elemental2_dom_Event__void(event);
  }
 }
 /** @nodts @return {HTMLElement} */
 m_overlayElement__elemental2_dom_HTMLElement() {
  return this.f_overlayElement__org_patternfly_overlay_Overlay_;
 }
 /** @nodts @return {HTMLElement} */
 m_trigger__elemental2_dom_HTMLElement() {
  return this.f_trigger__org_patternfly_overlay_Overlay_;
 }
 /** @nodts @return {boolean} */
 m_cssPositioning__boolean() {
  return this.f_cssPositioning__org_patternfly_overlay_Overlay_;
 }
 /** @nodts @return {number} */
 m_distance__int() {
  return this.f_distance__org_patternfly_overlay_Overlay_;
 }
 /** @nodts @return {boolean} */
 m_visible__boolean() {
  return this.f_visible__org_patternfly_overlay_Overlay_;
 }
 /** @nodts */
 m_setupOverlayAndTrigger__void_$p_org_patternfly_overlay_Overlay() {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_overlayElement__org_patternfly_overlay_Overlay_, 'popover', 'manual');
  let anchorName = '--' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_id__org_patternfly_overlay_Overlay_);
  this.f_trigger__org_patternfly_overlay_Overlay_.style.setProperty('anchor-name', anchorName);
  this.f_overlayElement__org_patternfly_overlay_Overlay_.style.setProperty('position-anchor', anchorName);
  this.f_overlayElement__org_patternfly_overlay_Overlay_.style.setProperty('margin', this.f_distance__org_patternfly_overlay_Overlay_ + 'px');
  this.f_overlayElement__org_patternfly_overlay_Overlay_.classList.add(this.f_placement__org_patternfly_overlay_Overlay_.m_modifier__java_lang_String());
  if (this.f_cssPositioning__org_patternfly_overlay_Overlay_) {
   this.f_overlayElement__org_patternfly_overlay_Overlay_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_cssPositioning__org_patternfly_style_Classes));
  }
 }
 /** @nodts */
 m_applyMinWidth__void_$p_org_patternfly_overlay_Overlay() {
  if (this.f_matchTriggerWidth__org_patternfly_overlay_Overlay_ && !$Equality.$same(this.f_trigger__org_patternfly_overlay_Overlay_, null)) {
   this.f_overlayElement__org_patternfly_overlay_Overlay_.style.setProperty('min-width', this.f_trigger__org_patternfly_overlay_Overlay_.offsetWidth + 'px');
  }
 }
 /** @nodts */
 m_teardownOverlayAndTrigger__void_$p_org_patternfly_overlay_Overlay() {
  this.f_overlayElement__org_patternfly_overlay_Overlay_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_cssPositioning__org_patternfly_style_Classes));
  for (let $array = Placement.m_values__arrayOf_org_patternfly_style_Placement(), $index = 0; $index < $array.length; $index++) {
   let p = $array[$index];
   {
    this.f_overlayElement__org_patternfly_overlay_Overlay_.classList.remove(p.m_modifier__java_lang_String());
   }
  }
  this.f_overlayElement__org_patternfly_overlay_Overlay_.style.removeProperty('margin');
  this.f_overlayElement__org_patternfly_overlay_Overlay_.style.removeProperty('position-anchor');
  if (!$Equality.$same(this.f_trigger__org_patternfly_overlay_Overlay_, null)) {
   this.f_trigger__org_patternfly_overlay_Overlay_.style.removeProperty('anchor-name');
   this.f_trigger__org_patternfly_overlay_Overlay_ = null;
  }
  this.f_overlayElement__org_patternfly_overlay_Overlay_.removeAttribute('popover');
 }
 /** @nodts */
 m_registerHoverListeners__void_$p_org_patternfly_overlay_Overlay() {
  this.f_triggerHandlers__org_patternfly_overlay_Overlay_ = HandlerRegistrations.m_compose__arrayOf_org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration(/**@type {!Array<HandlerRegistration>}*/ ($Arrays.$stampType([EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_trigger__org_patternfly_overlay_Overlay_, EventType.f_mouseenter__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_scheduleShow__void_$p_org_patternfly_overlay_Overlay();
  }), EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_trigger__org_patternfly_overlay_Overlay_, EventType.f_mouseleave__org_jboss_elemento_EventType, (/** MouseEvent */ e_2) =>{
   let e_3 = /**@type {MouseEvent}*/ ($Casts.$to(e_2, MouseEvent_$Overlay));
   this.m_scheduleHide__void_$p_org_patternfly_overlay_Overlay();
  }), EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_trigger__org_patternfly_overlay_Overlay_, EventType.f_focusin__org_jboss_elemento_EventType, (/** FocusEvent */ e_4) =>{
   let e_5 = /**@type {FocusEvent}*/ ($Casts.$to(e_4, FocusEvent_$Overlay));
   this.m_scheduleShow__void_$p_org_patternfly_overlay_Overlay();
  }), EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_trigger__org_patternfly_overlay_Overlay_, EventType.f_focusout__org_jboss_elemento_EventType, (/** FocusEvent */ e_6) =>{
   let e_7 = /**@type {FocusEvent}*/ ($Casts.$to(e_6, FocusEvent_$Overlay));
   this.m_scheduleHide__void_$p_org_patternfly_overlay_Overlay();
  })], /**@type {Function}*/ (HandlerRegistration))));
  this.f_overlayHandlers__org_patternfly_overlay_Overlay_ = HandlerRegistrations.m_compose__arrayOf_org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration(/**@type {!Array<HandlerRegistration>}*/ ($Arrays.$stampType([EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_overlayElement__org_patternfly_overlay_Overlay_, EventType.f_mouseenter__org_jboss_elemento_EventType, (/** MouseEvent */ e_8) =>{
   let e_9 = /**@type {MouseEvent}*/ ($Casts.$to(e_8, MouseEvent_$Overlay));
   this.m_cancelTimers__void_$p_org_patternfly_overlay_Overlay();
  }), EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_overlayElement__org_patternfly_overlay_Overlay_, EventType.f_mouseleave__org_jboss_elemento_EventType, (/** MouseEvent */ e_10) =>{
   let e_11 = /**@type {MouseEvent}*/ ($Casts.$to(e_10, MouseEvent_$Overlay));
   this.m_scheduleHide__void_$p_org_patternfly_overlay_Overlay();
  })], /**@type {Function}*/ (HandlerRegistration))));
 }
 /** @nodts */
 m_registerClickListeners__void_$p_org_patternfly_overlay_Overlay() {
  this.f_triggerHandlers__org_patternfly_overlay_Overlay_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_trigger__org_patternfly_overlay_Overlay_, EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
   let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
   this.m_toggleOnClick__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(arg0_1);
  });
 }
 /** @nodts */
 m_toggleOnClick__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(/** Event */ event) {
  if (this.f_visible__org_patternfly_overlay_Overlay_) {
   this.m_hide__elemental2_dom_Event__void(event);
  } else {
   this.m_show__elemental2_dom_Event__void(event);
  }
 }
 /** @nodts */
 m_onOutsideClick__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(/** Event */ event) {
  if (this.f_visible__org_patternfly_overlay_Overlay_ && !$Equality.$same(this.f_trigger__org_patternfly_overlay_Overlay_, null)) {
   let target = /**@type {Element}*/ ($Casts.$to(event.target, Element_$Overlay));
   if (!this.f_overlayElement__org_patternfly_overlay_Overlay_.contains(target) && !this.f_trigger__org_patternfly_overlay_Overlay_.contains(target)) {
    this.m_hide__elemental2_dom_Event__void(event);
   }
  }
 }
 /** @nodts */
 m_scheduleShow__void_$p_org_patternfly_overlay_Overlay() {
  this.m_cancelTimers__void_$p_org_patternfly_overlay_Overlay();
  this.f_showTimeout__org_patternfly_overlay_Overlay_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ e) =>{
   this.m_show__void();
  }, this.f_entryDelay__org_patternfly_overlay_Overlay_, []);
 }
 /** @nodts */
 m_scheduleHide__void_$p_org_patternfly_overlay_Overlay() {
  this.m_cancelTimers__void_$p_org_patternfly_overlay_Overlay();
  this.f_hideTimeout__org_patternfly_overlay_Overlay_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ e) =>{
   this.m_hide__void();
  }, this.f_exitDelay__org_patternfly_overlay_Overlay_, []);
 }
 /** @nodts */
 m_cancelTimers__void_$p_org_patternfly_overlay_Overlay() {
  goog.global.clearTimeout(this.f_showTimeout__org_patternfly_overlay_Overlay_);
  goog.global.clearTimeout(this.f_hideTimeout__org_patternfly_overlay_Overlay_);
 }
 /** @nodts */
 m_internalShow__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(/** Event */ event) {
  this.m_applyMinWidth__void_$p_org_patternfly_overlay_Overlay();
  if (this.f_cssPositioning__org_patternfly_overlay_Overlay_) {
   this.f_overlayElement__org_patternfly_overlay_Overlay_.showPopover();
  } else {
   this.f_overlayElement__org_patternfly_overlay_Overlay_.style.setProperty('visibility', 'hidden');
   this.f_overlayElement__org_patternfly_overlay_Overlay_.showPopover();
   this.m_recalculatePlacement__void_$p_org_patternfly_overlay_Overlay();
   this.f_overlayElement__org_patternfly_overlay_Overlay_.style.removeProperty('visibility');
   this.f_scrollHandler__org_patternfly_overlay_Overlay_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_scroll__org_jboss_elemento_EventType, true, (/** Event */ e) =>{
    this.m_recalculatePlacement__void_$p_org_patternfly_overlay_Overlay();
   });
  }
  this.f_visible__org_patternfly_overlay_Overlay_ = true;
  if ($Equality.$same(this.f_triggerMode__org_patternfly_overlay_Overlay_, TriggerMode.f_click__org_patternfly_overlay_TriggerMode)) {
   this.f_outsideClickHandler__org_patternfly_overlay_Overlay_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ arg0) =>{
    this.m_onOutsideClick__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(arg0);
   }));
  }
  for (let $iterator = this.f_toggleHandlers__org_patternfly_overlay_Overlay_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let handler = /**@type {OverlayHandler}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (OverlayHandler)));
   {
    handler.m_handle__elemental2_dom_Event__boolean__void(event, true);
   }
  }
 }
 /** @nodts */
 m_internalHide__elemental2_dom_Event__void_$p_org_patternfly_overlay_Overlay(/** Event */ event) {
  this.f_overlayElement__org_patternfly_overlay_Overlay_.hidePopover();
  this.f_visible__org_patternfly_overlay_Overlay_ = false;
  if (!$Equality.$same(this.f_scrollHandler__org_patternfly_overlay_Overlay_, null)) {
   this.f_scrollHandler__org_patternfly_overlay_Overlay_.m_removeHandler__void();
   this.f_scrollHandler__org_patternfly_overlay_Overlay_ = null;
  }
  if (!$Equality.$same(this.f_outsideClickHandler__org_patternfly_overlay_Overlay_, null)) {
   this.f_outsideClickHandler__org_patternfly_overlay_Overlay_.m_removeHandler__void();
   this.f_outsideClickHandler__org_patternfly_overlay_Overlay_ = null;
  }
  for (let $iterator = this.f_toggleHandlers__org_patternfly_overlay_Overlay_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let handler = /**@type {OverlayHandler}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (OverlayHandler)));
   {
    handler.m_handle__elemental2_dom_Event__boolean__void(event, false);
   }
  }
 }
 /** @nodts */
 m_recalculatePlacement__void_$p_org_patternfly_overlay_Overlay() {
  if ($Equality.$same(this.f_trigger__org_patternfly_overlay_Overlay_, null)) {
   return;
  }
  let best = this.m_bestPlacement__org_patternfly_style_Placement_$p_org_patternfly_overlay_Overlay();
  if (!this.f_overlayElement__org_patternfly_overlay_Overlay_.classList.contains(best.m_modifier__java_lang_String())) {
   Overlay.f_logger__org_patternfly_overlay_Overlay_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Best placement for %s is now %s', [this.f_id__org_patternfly_overlay_Overlay_, best.name()]);
   TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(null, this.f_overlayElement__org_patternfly_overlay_Overlay_, best, Placement.m_values__arrayOf_org_patternfly_style_Placement());
  }
 }
 /** @nodts @return {Placement} */
 m_bestPlacement__org_patternfly_style_Placement_$p_org_patternfly_overlay_Overlay() {
  let triggerRect = this.f_trigger__org_patternfly_overlay_Overlay_.getBoundingClientRect();
  let overlayRect = this.f_overlayElement__org_patternfly_overlay_Overlay_.getBoundingClientRect();
  let above = triggerRect.top;
  let below = goog.global.window.innerHeight - triggerRect.bottom;
  let toLeft = triggerRect.left;
  let toRight = goog.global.window.innerWidth - triggerRect.right;
  let topFits = above >= overlayRect.height + this.f_distance__org_patternfly_overlay_Overlay_;
  let bottomFits = below >= overlayRect.height + this.f_distance__org_patternfly_overlay_Overlay_;
  let leftFits = toLeft >= overlayRect.width / 3 + this.f_distance__org_patternfly_overlay_Overlay_;
  let rightFits = toRight >= overlayRect.width / 3 + this.f_distance__org_patternfly_overlay_Overlay_;
  let /** Placement */ result;
  if (this.m_directionFits__org_patternfly_style_Placement__boolean__boolean__boolean__boolean__boolean_$p_org_patternfly_overlay_Overlay(this.f_placement__org_patternfly_overlay_Overlay_.m_base__org_patternfly_style_Placement(), topFits, bottomFits, leftFits, rightFits)) {
   result = this.f_placement__org_patternfly_overlay_Overlay_;
  } else {
   let /** Placement */ fallbackBase;
   if (topFits && leftFits && rightFits) {
    fallbackBase = Placement.f_top__org_patternfly_style_Placement;
   } else if (rightFits && !leftFits) {
    fallbackBase = Placement.f_right__org_patternfly_style_Placement;
   } else if (leftFits && !rightFits) {
    fallbackBase = Placement.f_left__org_patternfly_style_Placement;
   } else if (topFits) {
    fallbackBase = Placement.f_top__org_patternfly_style_Placement;
   } else if (bottomFits) {
    fallbackBase = Placement.f_bottom__org_patternfly_style_Placement;
   } else {
    fallbackBase = toRight >= toLeft ? Placement.f_right__org_patternfly_style_Placement : Placement.f_left__org_patternfly_style_Placement;
   }
   result = this.f_placement__org_patternfly_overlay_Overlay_.m_withBase__org_patternfly_style_Placement__org_patternfly_style_Placement(fallbackBase);
  }
  return result;
 }
 /** @nodts @return {boolean} */
 m_directionFits__org_patternfly_style_Placement__boolean__boolean__boolean__boolean__boolean_$p_org_patternfly_overlay_Overlay(/** Placement */ base, /** boolean */ topFits, /** boolean */ bottomFits, /** boolean */ leftFits, /** boolean */ rightFits) {
  return (() =>{
   switch (base.ordinal()) {
    case Placement.$ordinal_top__org_patternfly_style_Placement:
     return topFits;
    case Placement.$ordinal_bottom__org_patternfly_style_Placement:
     return bottomFits;
    case Placement.$ordinal_left__org_patternfly_style_Placement:
     return leftFits;
    case Placement.$ordinal_right__org_patternfly_style_Placement:
     return rightFits;
    default:
     return false;
   }
  })();
 }
 /** @nodts */
 static $clinit() {
  Overlay.$clinit = () =>{};
  Overlay.$loadModules();
  j_l_Object.$clinit();
  Overlay.f_logger__org_patternfly_overlay_Overlay_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Overlay).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Overlay;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  FocusEvent_$Overlay = goog.module.get('elemental2.dom.FocusEvent.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  HandlerRegistrations = goog.module.get('org.gwtproject.event.shared.HandlerRegistrations$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  OverlayHandler = goog.module.get('org.patternfly.handler.OverlayHandler$impl');
  TriggerMode = goog.module.get('org.patternfly.overlay.TriggerMode$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Placement = goog.module.get('org.patternfly.style.Placement$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Overlay.f_logger__org_patternfly_overlay_Overlay_;
$Util.$setClassMetadata(Overlay, 'org.patternfly.overlay.Overlay');

exports = Overlay;

//# sourceMappingURL=Overlay.js.map
