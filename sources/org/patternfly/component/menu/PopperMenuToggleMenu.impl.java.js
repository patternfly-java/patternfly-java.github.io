goog.module('org.patternfly.component.menu.PopperMenuToggleMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const ComponentDelegate = goog.require('org.patternfly.component.ComponentDelegate$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Void = goog.forwardDeclare('java.lang.Void$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.popper.Modifiers$impl');
let Popper = goog.forwardDeclare('org.patternfly.popper.Popper$impl');
let PopperBuilder = goog.forwardDeclare('org.patternfly.popper.PopperBuilder$impl');
let PopperPlacement = goog.forwardDeclare('org.patternfly.popper.PopperPlacement$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template B
 * @extends {ComponentDelegate<HTMLElement, B>}
 * @implements {Disabled<HTMLElement, B>}
 * @implements {Expandable<HTMLElement, B>}
 * @implements {Attachable}
 * @deprecated
 */
class PopperMenuToggleMenu extends ComponentDelegate {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {MenuToggle} @nodts*/
  this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu;
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu;
  /**@type {Set<TriggerAction>} @nodts*/
  this.f_triggerActions__org_patternfly_component_menu_PopperMenuToggleMenu_;
  /**@type {List<ToggleHandler<B>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_menu_PopperMenuToggleMenu_;
  /**@type {List<ComponentHandler<B>>} @nodts*/
  this.f_loadedHandler__org_patternfly_component_menu_PopperMenuToggleMenu_;
  /**@type {number} @nodts*/
  this.f_zIndex__org_patternfly_component_menu_PopperMenuToggleMenu_ = 0;
  /**@type {boolean} @nodts*/
  this.f_flip__org_patternfly_component_menu_PopperMenuToggleMenu_ = false;
  /**@type {boolean} @nodts*/
  this.f_disabled__org_patternfly_component_menu_PopperMenuToggleMenu_ = false;
  /**@type {PopperPlacement} @nodts*/
  this.f_placement__org_patternfly_component_menu_PopperMenuToggleMenu_;
  /**@type {Popper} @nodts*/
  this.f_popper__org_patternfly_component_menu_PopperMenuToggleMenu_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_keyHandler__org_patternfly_component_menu_PopperMenuToggleMenu_;
  /**@type {Predicate<Event>} @nodts*/
  this.f_stayOpen__org_patternfly_component_menu_PopperMenuToggleMenu_;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_PopperMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(/** ComponentType */ componentType, /** MenuToggle */ menuToggle, /** TriggerAction */ triggerAction) {
  this.$ctor__org_patternfly_component_ComponentDelegate__org_patternfly_component_ComponentType__void(componentType);
  this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu = menuToggle;
  this.f_toggleHandler__org_patternfly_component_menu_PopperMenuToggleMenu_ = (/**@type {!ArrayList<ToggleHandler<B>>}*/ (ArrayList.$create__()));
  this.f_loadedHandler__org_patternfly_component_menu_PopperMenuToggleMenu_ = (/**@type {!ArrayList<ComponentHandler<B>>}*/ (ArrayList.$create__()));
  this.f_triggerActions__org_patternfly_component_menu_PopperMenuToggleMenu_ = (/**@type {EnumSet<TriggerAction>}*/ (EnumSet.m_of__java_lang_Enum__java_util_EnumSet(triggerAction)));
  this.f_flip__org_patternfly_component_menu_PopperMenuToggleMenu_ = true;
  this.f_placement__org_patternfly_component_menu_PopperMenuToggleMenu_ = PopperPlacement.f_bottomStart__org_patternfly_popper_PopperPlacement;
  this.f_zIndex__org_patternfly_component_menu_PopperMenuToggleMenu_ = PopperMenuToggleMenu.f_Z_INDEX__org_patternfly_component_menu_PopperMenuToggleMenu_;
  this.m_delegateTo__elemental2_dom_HTMLElement__void(menuToggle.m_element__elemental2_dom_HTMLElement());
  Attachable.m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable__void(menuToggle.m_element__elemental2_dom_HTMLElement(), this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu, null) && !$Equality.$same(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu, null)) {
   if (this.f_disabled__org_patternfly_component_menu_PopperMenuToggleMenu_) {
    this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_disabled__boolean__org_patternfly_component_menu_MenuToggle(true);
   }
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu, false);
   DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
   this.f_popper__org_patternfly_component_menu_PopperMenuToggleMenu_ = PopperBuilder.$create__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).m_addModifier__arrayOf_org_patternfly_popper_Modifier__org_patternfly_popper_PopperBuilder([Modifiers.m_eventListeners__boolean__org_patternfly_popper_Modifier(false), Modifiers.m_flip__boolean__org_patternfly_popper_Modifier($Equality.$same(this.f_placement__org_patternfly_component_menu_PopperMenuToggleMenu_, PopperPlacement.f_auto__org_patternfly_popper_PopperPlacement) || this.f_flip__org_patternfly_component_menu_PopperMenuToggleMenu_), Modifiers.m_hide__org_patternfly_popper_Modifier(), Modifiers.m_noOverflow__org_patternfly_popper_Modifier(), Modifiers.m_placement__org_patternfly_popper_Modifier(), Modifiers.m_widths__org_patternfly_popper_Modifier()]).m_placement__org_patternfly_popper_PopperPlacement__org_patternfly_popper_PopperBuilder(this.f_placement__org_patternfly_component_menu_PopperMenuToggleMenu_).m_registerHandler__elemental2_dom_HTMLElement__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.f_toggleElement__org_patternfly_component_menu_MenuToggle, this.f_triggerActions__org_patternfly_component_menu_PopperMenuToggleMenu_, Consumer.$adapt((/** Event */ event) =>{
    let event_1 = /**@type {Event}*/ ($Casts.$to(event, Event_$Overlay));
    this.m_expand__void();
   }), Consumer.$adapt((/** Event */ event_2) =>{
    let event_3 = /**@type {Event}*/ ($Casts.$to(event_2, Event_$Overlay));
    this.m_collapse__void();
   })).m_stayOpen__java_util_function_Predicate__org_patternfly_popper_PopperBuilder(this.f_stayOpen__org_patternfly_component_menu_PopperMenuToggleMenu_).m_zIndex__int__org_patternfly_popper_PopperBuilder(this.f_zIndex__org_patternfly_component_menu_PopperMenuToggleMenu_).m_build__org_patternfly_popper_Popper();
   this.f_keyHandler__org_patternfly_component_menu_PopperMenuToggleMenu_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ arg0) =>{
    let arg0_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0, KeyboardEvent_$Overlay));
    this.m_keyHandler__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_menu_PopperMenuToggleMenu(arg0_1);
   });
  } else {
   PopperMenuToggleMenu.f_logger__org_patternfly_component_menu_PopperMenuToggleMenu_.m_error__java_lang_String__arrayOf_java_lang_Object__void('No toggle and/or menu defined for %s %o', [this.m_componentType__org_patternfly_component_ComponentType().name(), this.m_element__elemental2_dom_HTMLElement()]);
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_keyHandler__org_patternfly_component_menu_PopperMenuToggleMenu_, null)) {
   this.f_keyHandler__org_patternfly_component_menu_PopperMenuToggleMenu_.m_removeHandler__void();
  }
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu);
  this.f_popper__org_patternfly_component_menu_PopperMenuToggleMenu_.m_cleanup__void();
 }
 /** @nodts @return {B} */
 m_addMenu__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ menu) {
  return this.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(menu);
 }
 /** @nodts @return {B} */
 m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ menu) {
  this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu = menu;
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_applyToMenuToggle__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<MenuToggle> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu);
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @override @nodts @return {B} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu, null)) {
   this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_disabled__boolean__org_patternfly_component_menu_MenuToggle(disabled);
  } else {
   this.f_disabled__org_patternfly_component_menu_PopperMenuToggleMenu_ = disabled;
  }
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return $Equality.$same(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu, null) ? this.f_disabled__org_patternfly_component_menu_PopperMenuToggleMenu_ : this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_isDisabled__boolean();
 }
 /** @nodts @return {B} */
 m_flip__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ flip) {
  this.f_flip__org_patternfly_component_menu_PopperMenuToggleMenu_ = flip;
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_placement__org_patternfly_popper_PopperPlacement__org_jboss_elemento_TypedBuilder(/** PopperPlacement */ placement) {
  if ($Equality.$same(placement, PopperPlacement.f_auto__org_patternfly_popper_PopperPlacement)) {
   this.f_flip__org_patternfly_component_menu_PopperMenuToggleMenu_ = true;
  }
  this.f_placement__org_patternfly_component_menu_PopperMenuToggleMenu_ = placement;
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_stayOpen__org_jboss_elemento_TypedBuilder() {
  this.f_triggerActions__org_patternfly_component_menu_PopperMenuToggleMenu_.clear();
  this.f_triggerActions__org_patternfly_component_menu_PopperMenuToggleMenu_.add(TriggerAction.f_stayOpen__org_patternfly_popper_TriggerAction);
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_stayOpen__java_util_function_Predicate__org_jboss_elemento_TypedBuilder(/** Predicate<Event> */ stayOpen) {
  this.f_stayOpen__org_patternfly_component_menu_PopperMenuToggleMenu_ = stayOpen;
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_zIndex__int__org_jboss_elemento_TypedBuilder(/** number */ zIndex) {
  this.f_zIndex__org_patternfly_component_menu_PopperMenuToggleMenu_ = zIndex;
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_ariaLabel__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ label) {
  return this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
 }
 /** @nodts @return {B} */
 m_onLoaded__org_patternfly_handler_ComponentHandler__org_jboss_elemento_TypedBuilder(/** ComponentHandler<B> */ loadedHandler) {
  this.f_loadedHandler__org_patternfly_component_menu_PopperMenuToggleMenu_.add(loadedHandler);
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_jboss_elemento_TypedBuilder(/** ToggleHandler<B> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_menu_PopperMenuToggleMenu_.add(toggleHandler);
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  this.f_popper__org_patternfly_component_menu_PopperMenuToggleMenu_.m_hide__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.m_element__elemental2_dom_HTMLElement(), null);
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_menu_PopperMenuToggleMenu_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<B> */ th) =>{
     let th_1 = /**@type {ToggleHandler<B>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this.m_that__org_jboss_elemento_TypedBuilder(), false);
    }));
   }
   this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_element__elemental2_dom_HTMLElement().focus();
  }));
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  this.f_popper__org_patternfly_component_menu_PopperMenuToggleMenu_.m_show__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.m_element__elemental2_dom_HTMLElement(), null);
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_menu_PopperMenuToggleMenu_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<B> */ th) =>{
     let th_1 = /**@type {ToggleHandler<B>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this.m_that__org_jboss_elemento_TypedBuilder(), true);
    }));
   }
   if (this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_hasAsyncItems__boolean()) {
    this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<*>}*/ ((/** ?void */ __) =>{
     let ___1 = /**@type {?void}*/ ($Casts.$to(__, Void));
     this.f_loadedHandler__org_patternfly_component_menu_PopperMenuToggleMenu_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<B> */ th_2) =>{
      let th_3 = /**@type {ComponentHandler<B>}*/ ($Casts.$to(th_2, /**@type {Function}*/ (ComponentHandler)));
      th_3.m_handle__elemental2_dom_Event__java_lang_Object__void(new Event(''), this.m_that__org_jboss_elemento_TypedBuilder());
     }));
     return null;
    }));
   }
  }));
 }
 /** @nodts @return {MenuToggle} */
 m_menuToggle__org_patternfly_component_menu_MenuToggle() {
  return this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu;
 }
 /** @nodts @return {Menu} */
 m_menu__org_patternfly_component_menu_Menu() {
  return this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu;
 }
 /** @nodts */
 m_searchInputControlsMenuList__void_$pp_org_patternfly_component_menu() {
  if (!$Equality.$same(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu, null) && !$Equality.$same(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu, null) && !$Equality.$same(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput(), null)) {
   let menuListElement = this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))));
   if (!$Equality.$same(menuListElement, null)) {
    let id = menuListElement.getAttribute('id');
    if ($Equality.$same(id, null) || j_l_String.m_isEmpty__java_lang_String__boolean(id)) {
     id = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Menu__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['list'], j_l_String)));
    }
    this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_input__org_jboss_elemento_HTMLInputElementBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, id);
   }
  }
 }
 /** @nodts */
 m_keyHandler__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_menu_PopperMenuToggleMenu(/** KeyboardEvent */ event) {
  if (this.m_expanded__boolean() && (this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_element__elemental2_dom_HTMLElement().contains(/**@type {Node}*/ ($Casts.$to(event.target, Node_$Overlay))) || (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).contains(/**@type {Node}*/ ($Casts.$to(event.target, Node_$Overlay))))) {
   if (Key.f_Tab__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    this.m_collapse__void();
   }
  }
  if (this.m_expanded__boolean() && this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_element__elemental2_dom_HTMLElement().contains(/**@type {Node}*/ ($Casts.$to(event.target, Node_$Overlay)))) {
   let arrowUp = Key.f_ArrowUp__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event);
   let arrowDown = Key.f_ArrowDown__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event);
   if (arrowUp || arrowDown) {
    event.preventDefault();
    let /** HTMLElement */ focusableElement;
    let listItems = /**@type {Array<HTMLElement>}*/ (JsArray_$Overlay.m_from__elemental2_core_JsIterable__elemental2_core_JsArray((/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).querySelectorAll('li').values()));
    let focusableElements = (/**@type {Array<HTMLElement>}*/ (listItems.filter(/**  @return {*}*/ ((/** HTMLElement */ li, /** number */ __) =>{
     let li_1 = /**@type {HTMLElement}*/ ($Casts.$to(li, $Overlay));
     return Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(li_1);
    })).map(/**  @return {HTMLElement}*/ ((/** HTMLElement */ li_2, /** number */ ___1) =>{
     let li_3 = /**@type {HTMLElement}*/ ($Casts.$to(li_2, $Overlay));
     return /**@type {HTMLElement}*/ ($Casts.$to(li_3.querySelector('button:not(:disabled),input:not(:disabled),a:not([aria-disabled=\"true\"])'), $Overlay));
    })))).filter(/**  @return {*}*/ ((/** HTMLElement */ li_4, /** number */ ___2) =>{
     let li_5 = /**@type {HTMLElement}*/ ($Casts.$to(li_4, $Overlay));
     return !$Equality.$same(li_5, null);
    }));
    if (arrowDown) {
     focusableElement = (/**@type {HTMLElement}*/ ($Casts.$to(focusableElements.at(0), $Overlay)));
    } else {
     focusableElement = (/**@type {HTMLElement}*/ ($Casts.$to(focusableElements.at(focusableElements.length - 1 | 0), $Overlay)));
    }
    if (!$Equality.$same(focusableElement, null)) {
     focusableElement.focus();
    }
   }
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 /** @nodts */
 static $clinit() {
  PopperMenuToggleMenu.$clinit = () =>{};
  PopperMenuToggleMenu.$loadModules();
  ComponentDelegate.$clinit();
  Disabled.$clinit();
  Expandable.$clinit();
  Attachable.$clinit();
  PopperMenuToggleMenu.f_logger__org_patternfly_component_menu_PopperMenuToggleMenu_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(PopperMenuToggleMenu).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperMenuToggleMenu;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Event_$Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Void = goog.module.get('java.lang.Void$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
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
PopperMenuToggleMenu.f_logger__org_patternfly_component_menu_PopperMenuToggleMenu_;
/**@const {number} @nodts*/
PopperMenuToggleMenu.f_Z_INDEX__org_patternfly_component_menu_PopperMenuToggleMenu_ = 9999;
Disabled.$markImplementor(PopperMenuToggleMenu);
Expandable.$markImplementor(PopperMenuToggleMenu);
Attachable.$markImplementor(PopperMenuToggleMenu);
$Util.$setClassMetadata(PopperMenuToggleMenu, 'org.patternfly.component.menu.PopperMenuToggleMenu');

exports = PopperMenuToggleMenu;

//# sourceMappingURL=PopperMenuToggleMenu.js.map
