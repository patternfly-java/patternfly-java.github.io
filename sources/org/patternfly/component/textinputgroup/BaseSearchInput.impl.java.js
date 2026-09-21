goog.module('org.patternfly.component.textinputgroup.BaseSearchInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const BaseTextInputGroup = goog.require('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Void = goog.forwardDeclare('java.lang.Void$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let StayOpenPredicate = goog.forwardDeclare('org.patternfly.component.textinputgroup.StayOpenPredicate$impl');
let TextInputGroupUtilities = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let CssPositioning = goog.forwardDeclare('org.patternfly.overlay.CssPositioning$impl');
let Overlay = goog.forwardDeclare('org.patternfly.overlay.Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Placement = goog.forwardDeclare('org.patternfly.style.Placement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @extends {BaseTextInputGroup<T>}
 * @implements {Attachable}
 * @implements {Expandable<HTMLElement, T>}
 */
class BaseSearchInput extends BaseTextInputGroup {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<ComponentHandler<T>>} @nodts*/
  this.f_onClear__org_patternfly_component_textinputgroup_BaseSearchInput;
  /**@type {ComponentHandler<T>} @nodts*/
  this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput;
  /**@type {BiFunction<T, ?string, ?boolean>} @nodts*/
  this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput;
  /**@type {List<ToggleHandler<T>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {List<ComponentHandler<T>>} @nodts*/
  this.f_loadedHandler__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {?string} @nodts*/
  this.f_hint__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {boolean} @nodts*/
  this.f_typeahead__org_patternfly_component_textinputgroup_BaseSearchInput_ = false;
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {Overlay} @nodts*/
  this.f_overlay__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {SearchFilter} @nodts*/
  this.f_searchFilter__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {StayOpenPredicate} @nodts*/
  this.f_stayOpen__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {HTMLInputElement} @nodts*/
  this.f_hintInput__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_menuClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_keyHandler__org_patternfly_component_textinputgroup_BaseSearchInput_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_outsideClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ componentType, /** ?string */ id) {
  this.$ctor__org_patternfly_component_textinputgroup_BaseTextInputGroup__org_patternfly_component_ComponentType__java_lang_String__void(componentType, id);
  this.f_hint__org_patternfly_component_textinputgroup_BaseSearchInput_ = null;
  this.f_typeahead__org_patternfly_component_textinputgroup_BaseSearchInput_ = false;
  this.f_onClear__org_patternfly_component_textinputgroup_BaseSearchInput = (/**@type {!ArrayList<ComponentHandler<T>>}*/ (ArrayList.$create__()));
  this.f_toggleHandler__org_patternfly_component_textinputgroup_BaseSearchInput_ = (/**@type {!ArrayList<ToggleHandler<T>>}*/ (ArrayList.$create__()));
  this.f_loadedHandler__org_patternfly_component_textinputgroup_BaseSearchInput_ = (/**@type {!ArrayList<ComponentHandler<T>>}*/ (ArrayList.$create__()));
  this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput = ComponentHandler.$adapt((/** Event */ e, /** T */ si) =>{
   let si_1 = /**@type {T}*/ ($Casts.$to(si, BaseSearchInput));
   (/**@type {!BaseSearchInput<T>}*/ (si_1)).m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput('');
  });
  this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput = BiFunction.$adapt(/**  @return {?boolean}*/ ((/** T */ si_2, /** ?string */ value) =>{
   let si_3 = /**@type {T}*/ ($Casts.$to(si_2, BaseSearchInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   return !j_l_String.m_isEmpty__java_lang_String__boolean(value_1);
  }));
  this.f_searchFilter__org_patternfly_component_textinputgroup_BaseSearchInput_ = SearchFilter.m_contains__org_patternfly_component_menu_SearchFilter();
  this.m_toggleUtilities__java_lang_String__void(this.m_value__java_lang_String());
  this.m_onClear__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(ComponentHandler.$adapt((/** Event */ e_1, /** T */ si_4) =>{
   let si_5 = /**@type {T}*/ ($Casts.$to(si_4, BaseSearchInput));
   this.m_clearHint__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput();
  }));
  this.m_onLoaded__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(ComponentHandler.$adapt((/** Event */ e_2, /** T */ c) =>{
   let c_1 = /**@type {T}*/ ($Casts.$to(c, BaseSearchInput));
   this.m_search__java_lang_String__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(this.m_value__java_lang_String());
  }));
  this.m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_3, /** T */ si_6, /** ?string */ value_2) =>{
   let si_7 = /**@type {T}*/ ($Casts.$to(si_6, BaseSearchInput));
   let value_3 = /**@type {?string}*/ ($Casts.$to(value_2, j_l_String));
   this.m_toggleUtilities__java_lang_String__void(value_3);
  }));
  this.m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_4, /** T */ si_8, /** ?string */ value_4) =>{
   let si_9 = /**@type {T}*/ ($Casts.$to(si_8, BaseSearchInput));
   let value_5 = /**@type {?string}*/ ($Casts.$to(value_4, j_l_String));
   this.m_toggleUtilities__java_lang_String__void(value_5);
  }));
  this.m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_5, /** T */ si_10, /** ?string */ value_6) =>{
   let si_11 = /**@type {T}*/ ($Casts.$to(si_10, BaseSearchInput));
   let value_7 = /**@type {?string}*/ ($Casts.$to(value_6, j_l_String));
   this.m_toggleUtilities__java_lang_String__void(value_7);
  }));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_typeahead__org_patternfly_component_textinputgroup_BaseSearchInput_) {
   this.f_overlay__org_patternfly_component_textinputgroup_BaseSearchInput_.m_attach__elemental2_dom_HTMLElement();
   this.f_menuClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_ = EventType.m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_, EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
    let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
    this.m_onMenuClick__elemental2_dom_Event__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(arg0_1);
   });
   this.f_keyHandler__org_patternfly_component_textinputgroup_BaseSearchInput_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ arg0_2) =>{
    let arg0_3 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0_2, KeyboardEvent_$Overlay));
    this.m_keyHandler__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(arg0_3);
   });
   this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_menu_Menu(SelectHandler.$adapt((/** Event */ e, /** MenuItem */ item, /** boolean */ selected) =>{
    let item_1 = /**@type {MenuItem}*/ ($Casts.$to(item, MenuItem));
    this.m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput(item_1.m_text__java_lang_String());
    this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup.focus();
   }));
   this.m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_1, /** T */ c, /** ?string */ value) =>{
    let c_1 = /**@type {T}*/ ($Casts.$to(c, BaseSearchInput));
    let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
    if (!$Equality.$same(value_1, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(value_1)) {
     if (this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_hasAsyncItems__boolean()) {
      this.m_expand__boolean__void(false);
     } else {
      this.m_search__java_lang_String__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(value_1);
     }
    } else {
     this.m_collapse__boolean__void(false);
    }
   }));
   this.m_onClear__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(ComponentHandler.$adapt((/** Event */ e_2, /** T */ si) =>{
    let si_1 = /**@type {T}*/ ($Casts.$to(si, BaseSearchInput));
    this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_clearSearch__void();
    this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup.focus();
   }));
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_outsideClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_, null)) {
   this.f_outsideClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_keyHandler__org_patternfly_component_textinputgroup_BaseSearchInput_, null)) {
   this.f_keyHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_menuClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_, null)) {
   this.f_menuClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_overlay__org_patternfly_component_textinputgroup_BaseSearchInput_, null)) {
   this.f_overlay__org_patternfly_component_textinputgroup_BaseSearchInput_.m_detach__void();
  }
 }
 /** @nodts @return {T} */
 m_addMenu__org_patternfly_component_menu_Menu__org_patternfly_component_textinputgroup_BaseSearchInput(/** Menu */ menu) {
  return this.m_add__org_patternfly_component_menu_Menu__org_patternfly_component_textinputgroup_BaseSearchInput(menu);
 }
 /** @nodts @return {T} */
 m_add__org_patternfly_component_menu_Menu__org_patternfly_component_textinputgroup_BaseSearchInput(/** Menu */ menu) {
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this)) {
   BaseSearchInput.f_logger__org_patternfly_component_textinputgroup_BaseSearchInput_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Menu cannot be added to a already attached search input: %o', [this.m_element__elemental2_dom_HTMLElement()]);
   return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
  }
  if (this.f_typeahead__org_patternfly_component_textinputgroup_BaseSearchInput_) {
   BaseSearchInput.f_logger__org_patternfly_component_textinputgroup_BaseSearchInput_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Menu cannot be added to a search input that already has a menu: %o', [this.m_element__elemental2_dom_HTMLElement()]);
   return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
  }
  this.f_typeahead__org_patternfly_component_textinputgroup_BaseSearchInput_ = true;
  this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_ = menu;
  menu.m_noItems__java_util_function_Supplier__org_patternfly_component_menu_Menu(null);
  let menuPopover = /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_overlay__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(menu), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  this.f_overlay__org_patternfly_component_textinputgroup_BaseSearchInput_ = Overlay.m_overlay__elemental2_dom_HTMLElement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(menuPopover, Placement.f_bottomStart__org_patternfly_style_Placement).m_trigger__elemental2_dom_HTMLElement__org_patternfly_overlay_Overlay(this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup).m_cssPositioning__boolean__org_patternfly_overlay_Overlay(CssPositioning.m_anchorNameSupported__boolean()).m_matchTriggerWidth__boolean__org_patternfly_overlay_Overlay(true);
  return /**@type {T}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(menuPopover), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_noDefaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput() {
  this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput = null;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_showUtilitiesIf__java_util_function_BiFunction__org_patternfly_component_textinputgroup_BaseSearchInput(/** BiFunction<T, ?string, ?boolean> */ visibility) {
  this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput = visibility;
  this.m_toggleUtilities__java_lang_String__void(this.m_value__java_lang_String());
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_stayOpen__org_patternfly_component_textinputgroup_StayOpenPredicate__org_patternfly_component_textinputgroup_BaseSearchInput(/** StayOpenPredicate */ stayOpen) {
  this.f_stayOpen__org_patternfly_component_textinputgroup_BaseSearchInput_ = stayOpen;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_onClear__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(/** ComponentHandler<T> */ onClear) {
  this.f_onClear__org_patternfly_component_textinputgroup_BaseSearchInput.add(onClear);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_onLoaded__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(/** ComponentHandler<T> */ loadedHandler) {
  this.f_loadedHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.add(loadedHandler);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_textinputgroup_BaseSearchInput(/** SearchFilter */ searchFilter) {
  this.f_searchFilter__org_patternfly_component_textinputgroup_BaseSearchInput_ = searchFilter;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_textinputgroup_BaseSearchInput(/** ToggleHandler<T> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.add(toggleHandler);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (this.m_expanded__boolean()) {
   this.f_overlay__org_patternfly_component_textinputgroup_BaseSearchInput_.m_hide__void();
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.m_element__elemental2_dom_HTMLElement(), null);
   if (!$Equality.$same(this.f_outsideClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_, null)) {
    this.f_outsideClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.m_removeHandler__void();
    this.f_outsideClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_ = null;
   }
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<T> */ th) =>{
     let th_1 = /**@type {ToggleHandler<T>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)), false);
    }));
   }
   this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup.focus();
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  if (!this.m_expanded__boolean() && !this.m_isDisabled__boolean()) {
   this.f_overlay__org_patternfly_component_textinputgroup_BaseSearchInput_.m_show__void();
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.m_element__elemental2_dom_HTMLElement(), null);
   this.f_outsideClickHandler__org_patternfly_component_textinputgroup_BaseSearchInput_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
    let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
    this.m_onOutsideClick__elemental2_dom_Event__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(arg0_1);
   });
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<T> */ th) =>{
     let th_1 = /**@type {ToggleHandler<T>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)), true);
    }));
   }
   if (this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_hasAsyncItems__boolean()) {
    this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<*>}*/ ((/** ?void */ __) =>{
     let ___1 = /**@type {?void}*/ ($Casts.$to(__, Void));
     this.f_loadedHandler__org_patternfly_component_textinputgroup_BaseSearchInput_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<T> */ lh) =>{
      let lh_1 = /**@type {ComponentHandler<T>}*/ ($Casts.$to(lh, /**@type {Function}*/ (ComponentHandler)));
      lh_1.m_handle__elemental2_dom_Event__java_lang_Object__void(new Event(''), /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)));
     }));
     return null;
    }));
   }
  }
 }
 /** @nodts @return {Menu} */
 m_menu__org_patternfly_component_menu_Menu() {
  return this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_;
 }
 /** @nodts @return {boolean} */
 m_typeahead__boolean() {
  return this.f_typeahead__org_patternfly_component_textinputgroup_BaseSearchInput_;
 }
 /** @nodts @return {T} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput(/** ?string */ value) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseSearchInput(value, false);
 }
 /** @nodts @return {T} */
 m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseSearchInput(/** ?string */ value, /** boolean */ fireEvent) {
  super.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(value, fireEvent);
  this.m_toggleUtilities__java_lang_String__void(value);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts */
 m_toggleUtilities__java_lang_String__void(/** ?string */ value) {
  if (Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)), value), Boolean)))) {
   if ($Equality.$same(this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup, null)) {
    this.m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_BaseTextInputGroup(/**@type {TextInputGroupUtilities}*/ ($Casts.$to(TextInputGroupUtilities.m_textInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()), Button))).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ b) =>{
     let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
     if (!$Equality.$same(this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput, null)) {
      this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput.m_handle__elemental2_dom_Event__java_lang_Object__void(e, /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)));
     }
     this.f_onClear__org_patternfly_component_textinputgroup_BaseSearchInput.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<T> */ handler) =>{
      let handler_1 = /**@type {ComponentHandler<T>}*/ ($Casts.$to(handler, /**@type {Function}*/ (ComponentHandler)));
      handler_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e, /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)));
     }));
    }))), TextInputGroupUtilities)));
   }
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup);
   this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup = null;
  }
 }
 /** @nodts */
 m_search__java_lang_String__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(/** ?string */ value) {
  let matching = this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__java_util_List(this.f_searchFilter__org_patternfly_component_textinputgroup_BaseSearchInput_, null, value);
  if (matching.isEmpty()) {
   this.m_collapse__boolean__void(false);
   this.m_clearHint__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput();
  } else {
   this.m_expand__boolean__void(false);
   if (matching.size() == 1) {
    this.f_hint__org_patternfly_component_textinputgroup_BaseSearchInput_ = (/**@type {MenuItem}*/ ($Casts.$to(matching.getAtIndex(0), MenuItem))).m_text__java_lang_String();
    this.m_failSafeHintInput__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_textinputgroup_BaseSearchInput().value = this.f_hint__org_patternfly_component_textinputgroup_BaseSearchInput_;
   } else {
    this.m_clearHint__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput();
   }
  }
 }
 /** @nodts @return {HTMLInputElement} */
 m_failSafeHintInput__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_textinputgroup_BaseSearchInput() {
  if ($Equality.$same(this.f_hintInput__org_patternfly_component_textinputgroup_BaseSearchInput_, null)) {
   let id = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup.id, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['hint'], j_l_String)));
   this.f_hintInput__org_patternfly_component_textinputgroup_BaseSearchInput_ = (/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_HTMLInputElementBuilder(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_textInput__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_hint__org_patternfly_style_Classes)], j_l_String))), HTMLInputElementBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLInputElementBuilder))).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLInputElementBuilder))).m_disabled__boolean__org_jboss_elemento_TypedBuilder(true), HTMLInputElementBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLInputElementBuilder))).m_element__elemental2_dom_HTMLInputElement();
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_textContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup, this.f_hintInput__org_patternfly_component_textinputgroup_BaseSearchInput_);
  }
  return this.f_hintInput__org_patternfly_component_textinputgroup_BaseSearchInput_;
 }
 /** @nodts */
 m_clearHint__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput() {
  if (this.f_typeahead__org_patternfly_component_textinputgroup_BaseSearchInput_) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_hintInput__org_patternfly_component_textinputgroup_BaseSearchInput_);
   this.f_hint__org_patternfly_component_textinputgroup_BaseSearchInput_ = null;
   this.f_hintInput__org_patternfly_component_textinputgroup_BaseSearchInput_ = null;
  }
 }
 /** @nodts */
 m_keyHandler__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(/** KeyboardEvent */ event) {
  if (this.m_expanded__boolean()) {
   if (Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    this.m_collapse__void();
    return;
   }
   if (!$Equality.$same(this.f_hint__org_patternfly_component_textinputgroup_BaseSearchInput_, null) && Key.f_ArrowRight__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    event.preventDefault();
    this.m_collapse__void();
    this.m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput(this.f_hint__org_patternfly_component_textinputgroup_BaseSearchInput_);
    this.m_clearHint__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput();
   }
   if ((this.f_textContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup.contains(/**@type {Node}*/ ($Casts.$to(event.target, Node_$Overlay))) || (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).contains(/**@type {Node}*/ ($Casts.$to(event.target, Node_$Overlay)))) && Key.f_Tab__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    this.m_collapse__void();
   }
  }
  if (this.m_expanded__boolean() && this.f_textContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup.contains(/**@type {Node}*/ ($Casts.$to(event.target, Node_$Overlay)))) {
   this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_cursorNavigation__elemental2_dom_Event__void(event);
  }
 }
 /** @nodts */
 m_onMenuClick__elemental2_dom_Event__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(/** Event */ event) {
  if (this.m_expanded__boolean()) {
   if (!$Equality.$same(this.f_stayOpen__org_patternfly_component_textinputgroup_BaseSearchInput_, null) && this.f_stayOpen__org_patternfly_component_textinputgroup_BaseSearchInput_.m_test__elemental2_dom_Event__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_menu_Menu__boolean(event, this, this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_)) {
    return;
   }
   this.m_collapse__void();
  }
 }
 /** @nodts */
 m_onOutsideClick__elemental2_dom_Event__void_$p_org_patternfly_component_textinputgroup_BaseSearchInput(/** Event */ event) {
  if (this.m_expanded__boolean()) {
   let target = /**@type {Node}*/ ($Casts.$to(event.target, Node_$Overlay));
   let insideMenu = (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).contains(target);
   let insideSearchInput = this.f_textContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup.contains(target);
   if (!insideMenu && !insideSearchInput) {
    if (!$Equality.$same(this.f_stayOpen__org_patternfly_component_textinputgroup_BaseSearchInput_, null) && this.f_stayOpen__org_patternfly_component_textinputgroup_BaseSearchInput_.m_test__elemental2_dom_Event__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_menu_Menu__boolean(event, this, this.f_menu__org_patternfly_component_textinputgroup_BaseSearchInput_)) {
     return;
    }
    this.m_collapse__void();
   }
  }
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
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ?string */ arg0) {
  return this.m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ?string */ arg0, /** boolean */ arg1) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseSearchInput(arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  BaseSearchInput.$clinit = () =>{};
  BaseSearchInput.$loadModules();
  BaseTextInputGroup.$clinit();
  Attachable.$clinit();
  Expandable.$clinit();
  BaseSearchInput.f_logger__org_patternfly_component_textinputgroup_BaseSearchInput_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(BaseSearchInput).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseSearchInput;
 }
 /** @abstract @override @nodts @return {T} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Void = goog.module.get('java.lang.Void$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  SearchFilter = goog.module.get('org.patternfly.component.menu.SearchFilter$impl');
  TextInputGroupUtilities = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  CssPositioning = goog.module.get('org.patternfly.overlay.CssPositioning$impl');
  Overlay = goog.module.get('org.patternfly.overlay.Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Placement = goog.module.get('org.patternfly.style.Placement$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
BaseSearchInput.f_logger__org_patternfly_component_textinputgroup_BaseSearchInput_;
Attachable.$markImplementor(BaseSearchInput);
Expandable.$markImplementor(BaseSearchInput);
$Util.$setClassMetadata(BaseSearchInput, 'org.patternfly.component.textinputgroup.BaseSearchInput');

exports = BaseSearchInput;

//# sourceMappingURL=BaseSearchInput.js.map
