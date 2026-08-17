goog.module('org.patternfly.component.menu.Menu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let MenuActionHandler = goog.forwardDeclare('org.patternfly.component.menu.MenuActionHandler$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuFooter = goog.forwardDeclare('org.patternfly.component.menu.MenuFooter$impl');
let MenuGroup = goog.forwardDeclare('org.patternfly.component.menu.MenuGroup$impl');
let MenuHeader = goog.forwardDeclare('org.patternfly.component.menu.MenuHeader$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuSearch = goog.forwardDeclare('org.patternfly.component.menu.MenuSearch$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let AsyncStatus = goog.forwardDeclare('org.patternfly.core.AsyncStatus$impl');
let MultiSelectHandler = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let HTMLBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Menu>}
 * @implements {Attachable}
 * @implements {Plain<HTMLDivElement, Menu>}
 */
class Menu extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_menuName__org_patternfly_component_menu_Menu;
  /**@type {MenuType} @nodts*/
  this.f_menuType__org_patternfly_component_menu_Menu;
  /**@type {SelectionMode} @nodts*/
  this.f_selectionMode__org_patternfly_component_menu_Menu;
  /**@type {List<MenuActionHandler>} @nodts*/
  this.f_actionHandler__org_patternfly_component_menu_Menu;
  /**@type {boolean} @nodts*/
  this.f_favorites__org_patternfly_component_menu_Menu = false;
  /**@type {MenuContent} @nodts*/
  this.f_content__org_patternfly_component_menu_Menu;
  /**@type {List<SelectHandler<MenuItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_menu_Menu_;
  /**@type {List<MultiSelectHandler<Menu, MenuItem>>} @nodts*/
  this.f_multiSelectHandler__org_patternfly_component_menu_Menu_;
  /**@type {MenuItem} @nodts*/
  this.f_noResultsItem__org_patternfly_component_menu_Menu_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_keyHandler__org_patternfly_component_menu_Menu_;
 }
 /** @nodts @return {Menu} */
 static m_menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__org_patternfly_component_menu_Menu(/** MenuType */ menuType, /** SelectionMode */ selectionMode) {
  Menu.$clinit();
  return Menu.$create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(menuType, selectionMode);
 }
 /** @nodts @return {!Menu} */
 static $create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(/** MenuType */ menuType, /** SelectionMode */ selectionMode) {
  Menu.$clinit();
  let $instance = new Menu();
  $instance.$ctor__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(menuType, selectionMode);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(/** MenuType */ menuType, /** SelectionMode */ selectionMode) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Menu__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_menuType__org_patternfly_component_menu_Menu = menuType;
  this.f_selectionMode__org_patternfly_component_menu_Menu = selectionMode;
  this.f_menuName__org_patternfly_component_menu_Menu = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['name'], j_l_String)));
  this.f_actionHandler__org_patternfly_component_menu_Menu = (/**@type {!ArrayList<MenuActionHandler>}*/ (ArrayList.$create__()));
  this.f_selectHandler__org_patternfly_component_menu_Menu_ = (/**@type {!ArrayList<SelectHandler<MenuItem>>}*/ (ArrayList.$create__()));
  this.f_multiSelectHandler__org_patternfly_component_menu_Menu_ = (/**@type {!ArrayList<MultiSelectHandler<Menu, MenuItem>>}*/ (ArrayList.$create__()));
  (/**@type {HTMLBuilder<HTMLDivElement, Menu>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['TransitionDuration'], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__int__org_jboss_elemento_TypedBuilder(0);
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.m_allowTabFirstItem__void();
  this.f_keyHandler__org_patternfly_component_menu_Menu_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ arg0) =>{
   let arg0_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0, KeyboardEvent_$Overlay));
   this.m_keyHandler__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_menu_Menu(arg0_1);
  });
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_keyHandler__org_patternfly_component_menu_Menu_, null)) {
   this.f_keyHandler__org_patternfly_component_menu_Menu_.m_removeHandler__void();
  }
 }
 /** @nodts @return {Menu} */
 m_addHeader__java_lang_String__org_patternfly_component_menu_Menu(/** ?string */ text) {
  return this.m_addHeader__org_patternfly_component_menu_MenuHeader__org_patternfly_component_menu_Menu(MenuHeader.m_menuHeader__java_lang_String__org_patternfly_component_menu_MenuHeader(text));
 }
 /** @nodts @return {Menu} */
 m_addHeader__org_patternfly_component_menu_MenuHeader__org_patternfly_component_menu_Menu(/** MenuHeader */ header) {
  return /**@type {Menu}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(header), Menu));
 }
 /** @nodts @return {Menu} */
 m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(/** MenuContent */ content) {
  return this.m_add__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(content);
 }
 /** @nodts @return {Menu} */
 m_add__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(/** MenuContent */ content) {
  this.f_content__org_patternfly_component_menu_Menu = content;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(content.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {Menu} */
 m_addFooter__java_lang_String__org_patternfly_component_menu_Menu(/** ?string */ text) {
  return this.m_addFooter__org_patternfly_component_menu_MenuFooter__org_patternfly_component_menu_Menu(MenuFooter.m_menuFooter__java_lang_String__org_patternfly_component_menu_MenuFooter(text));
 }
 /** @nodts @return {Menu} */
 m_addFooter__org_patternfly_component_menu_MenuFooter__org_patternfly_component_menu_Menu(/** MenuFooter */ footer) {
  return /**@type {Menu}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(footer), Menu));
 }
 /** @nodts @return {Menu} */
 m_addSearch__org_patternfly_component_menu_MenuSearch__org_patternfly_component_menu_Menu(/** MenuSearch */ search) {
  return /**@type {Menu}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(search), Menu));
 }
 /** @nodts @return {Menu} */
 m_addDivider__org_patternfly_component_menu_Menu() {
  return /**@type {Menu}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType)), Menu));
 }
 /** @nodts @return {Menu} */
 m_favorites__org_patternfly_component_menu_Menu() {
  this.f_favorites__org_patternfly_component_menu_Menu = true;
  return this;
 }
 /** @nodts @return {Menu} */
 m_flyout__org_patternfly_component_menu_Menu() {
  return /**@type {Menu}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_flyout__org_patternfly_style_Classes)], j_l_String))), Menu));
 }
 /** @nodts @return {Menu} */
 m_height__java_lang_String__org_patternfly_component_menu_Menu(/** ?string */ height) {
  return /**@type {Menu}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLDivElement, Menu>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_MaxHeight__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__java_lang_String__org_jboss_elemento_TypedBuilder(height), Menu));
 }
 /** @nodts @return {Menu} */
 m_scrollable__org_patternfly_component_menu_Menu() {
  return /**@type {Menu}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_scrollable__org_patternfly_style_Classes)], j_l_String))), Menu));
 }
 /** @nodts @return {Menu} */
 m_that__org_patternfly_component_menu_Menu() {
  return this;
 }
 /** @nodts @return {Menu} */
 m_onAction__org_patternfly_component_menu_MenuActionHandler__org_patternfly_component_menu_Menu(/** MenuActionHandler */ actionHandler) {
  this.f_actionHandler__org_patternfly_component_menu_Menu.add(actionHandler);
  return this;
 }
 /** @nodts @return {Menu} */
 m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_menu_Menu(/** SelectHandler<MenuItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_menu_Menu_.add(selectHandler);
  return this;
 }
 /** @nodts @return {Menu} */
 m_onMultiSelect__org_patternfly_handler_MultiSelectHandler__org_patternfly_component_menu_Menu(/** MultiSelectHandler<Menu, MenuItem> */ selectHandler) {
  this.f_multiSelectHandler__org_patternfly_component_menu_Menu_.add(selectHandler);
  return this;
 }
 /** @nodts */
 m_allowTabFirstItem__void() {
  let first = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_selector__java_lang_String__org_jboss_elemento_By('ul button:not(:disabled), ul a:not(:disabled)'));
  if (!$Equality.$same(first, null)) {
   first.tabIndex = 0;
  }
 }
 /** @nodts @return {MenuItem} */
 m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ identifier) {
  let /** MenuItem */ menuItem = null;
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null)) {
   for (let iterator = this.f_content__org_patternfly_component_menu_Menu.f_groups__org_patternfly_component_menu_MenuContent.m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean() && $Equality.$same(menuItem, null); ) {
    let group = /**@type {MenuGroup}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), MenuGroup));
    if (!$Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup, null)) {
     menuItem = (/**@type {MenuItem}*/ ($Casts.$to(group.f_list__org_patternfly_component_menu_MenuGroup.f_items__org_patternfly_component_menu_MenuList.get(identifier), MenuItem)));
    }
   }
   if ($Equality.$same(menuItem, null)) {
    if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent, null)) {
     menuItem = (/**@type {MenuItem}*/ ($Casts.$to(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent.f_items__org_patternfly_component_menu_MenuList.get(identifier), MenuItem)));
    }
   }
  }
  return menuItem;
 }
 /** @nodts @return {boolean} */
 m_hasAsyncItems__boolean() {
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null)) {
   for (let $iterator = this.f_content__org_patternfly_component_menu_Menu.f_groups__org_patternfly_component_menu_MenuContent.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {MenuGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuGroup));
    {
     if (!$Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup, null)) {
      if ($Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup.m_status__org_patternfly_core_AsyncStatus(), AsyncStatus.f_pending__org_patternfly_core_AsyncStatus)) {
       return true;
      }
     }
    }
   }
   return !$Equality.$same(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent, null) && $Equality.$same(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent.m_status__org_patternfly_core_AsyncStatus(), AsyncStatus.f_pending__org_patternfly_core_AsyncStatus);
  }
  return false;
 }
 /** @nodts @return {List<MenuItem>} */
 m_items__java_util_List() {
  let items = /**@type {!ArrayList<MenuItem>}*/ (ArrayList.$create__());
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null)) {
   for (let $iterator = this.f_content__org_patternfly_component_menu_Menu.f_groups__org_patternfly_component_menu_MenuContent.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {MenuGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuGroup));
    {
     if (!$Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup, null)) {
      items.addAll(group.f_list__org_patternfly_component_menu_MenuGroup.f_items__org_patternfly_component_menu_MenuList.values());
     }
    }
   }
   if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent, null)) {
    items.addAll(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent.f_items__org_patternfly_component_menu_MenuList.values());
   }
  }
  return items;
 }
 /** @nodts @return {Promise<?void>} */
 m_load__elemental2_promise_Promise() {
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null)) {
   let promises = /**@type {!ArrayList<Promise<Iterable<MenuItem>>>}*/ (ArrayList.$create__());
   for (let $iterator = this.f_content__org_patternfly_component_menu_Menu.f_groups__org_patternfly_component_menu_MenuContent.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {MenuGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuGroup));
    {
     if (!$Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup, null)) {
      promises.add(group.f_list__org_patternfly_component_menu_MenuGroup.m_load__elemental2_promise_Promise());
     }
    }
   }
   if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent, null)) {
    promises.add(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent.m_load__elemental2_promise_Promise());
   }
   return /**@type {!Promise}*/ ((/**@type {!Promise}*/ (Promise_$Overlay.m_all__arrayOf_elemental2_promise_IThenable__elemental2_promise_Promise(/**@type {!Array<!IThenable<?>>}*/ ($Arrays.$castToNative(promises.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(new Array(0))))))).then(/**  @return {IThenable<*>}*/ ((/** * */ __) =>{
    return /**@type {!Promise<void>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {?void}*/ (null)));
   })));
  }
  return /**@type {!Promise<void>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {?void}*/ (null)));
 }
 /** @nodts @return {Promise<?void>} */
 m_reload__elemental2_promise_Promise() {
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null)) {
   let promises = /**@type {!ArrayList<Promise<Iterable<MenuItem>>>}*/ (ArrayList.$create__());
   for (let $iterator = this.f_content__org_patternfly_component_menu_Menu.f_groups__org_patternfly_component_menu_MenuContent.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {MenuGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuGroup));
    {
     if (!$Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup, null)) {
      promises.add(group.f_list__org_patternfly_component_menu_MenuGroup.m_reload__elemental2_promise_Promise());
     }
    }
   }
   if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent, null)) {
    promises.add(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent.m_reload__elemental2_promise_Promise());
   }
   return /**@type {!Promise}*/ ((/**@type {!Promise}*/ (Promise_$Overlay.m_all__arrayOf_elemental2_promise_IThenable__elemental2_promise_Promise(/**@type {!Array<!IThenable<?>>}*/ ($Arrays.$castToNative(promises.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(new Array(0))))))).then(/**  @return {IThenable<*>}*/ ((/** * */ __) =>{
    return /**@type {!Promise<void>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {?void}*/ (null)));
   })));
  }
  return /**@type {!Promise<void>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {?void}*/ (null)));
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier), true, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ selected) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier), selected, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__boolean__void(/** ?string */ identifier, /** boolean */ selected, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier), selected, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__void(/** MenuItem */ item) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__boolean__void(/** MenuItem */ item, /** boolean */ selected) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, selected, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(/** MenuItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   if ($Equality.$same(this.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_click__org_patternfly_component_SelectionMode) || $Equality.$same(this.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
    this.m_unselectAllItems__void_$pp_org_patternfly_component_menu();
   } else if ($Equality.$same(this.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_group__org_patternfly_component_SelectionMode)) {
    this.m_unselectAllInGroup__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_menu_Menu(item);
   }
   switch (this.f_selectionMode__org_patternfly_component_menu_Menu.ordinal()) {
    case SelectionMode.$ordinal_click__org_patternfly_component_SelectionMode:
     item.m_makeCurrent__boolean__void_$pp_org_patternfly_component_menu(selected);
     break;
    case SelectionMode.$ordinal_single__org_patternfly_component_SelectionMode:
    case SelectionMode.$ordinal_group__org_patternfly_component_SelectionMode:
    case SelectionMode.$ordinal_multi__org_patternfly_component_SelectionMode:
     item.m_markSelected__boolean__void_$pp_org_patternfly_component_menu(selected);
     break;
   }
   if (fireEvent) {
    this.m_fireSingleSelection__org_patternfly_component_menu_MenuItem__boolean__void_$pp_org_patternfly_component_menu(item, selected);
    if (!this.f_multiSelectHandler__org_patternfly_component_menu_Menu_.isEmpty()) {
     this.m_fireMultiSelection__void_$pp_org_patternfly_component_menu();
    }
   }
  }
 }
 /** @nodts @return {List<MenuItem>} */
 m_selectedItems__java_util_List() {
  let selectedItems = /**@type {!ArrayList<MenuItem>}*/ (ArrayList.$create__());
  for (let $iterator = this.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let menuItem = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
   {
    if (menuItem.m_isSelected__boolean_$pp_org_patternfly_component_menu()) {
     selectedItems.add(menuItem);
    }
   }
  }
  return selectedItems;
 }
 /** @nodts */
 m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__void_$pp_org_patternfly_component_menu(/** SearchFilter */ searchFilter, /** NoResults */ noResults, /** ?string */ value) {
  if (this.m_hasAsyncItems__boolean()) {
   return;
  }
  let visibleItems = 0;
  for (let $iterator = this.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let menuItem = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
   {
    let visible = searchFilter.m_test__java_lang_Object__java_lang_Object__boolean(menuItem, value);
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(menuItem, visible);
    if (visible) {
     visibleItems = visibleItems + 1 | 0;
    }
   }
  }
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_noResultsItem__org_patternfly_component_menu_Menu_);
  if (visibleItems == 0) {
   if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null) && !$Equality.$same(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent, null)) {
    this.f_noResultsItem__org_patternfly_component_menu_Menu_ = noResults.m_noResults__org_patternfly_component_menu_MenuList__java_lang_String__org_patternfly_component_menu_MenuItem(this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent, value);
    this.f_content__org_patternfly_component_menu_Menu.f_list__org_patternfly_component_menu_MenuContent.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_noResultsItem__org_patternfly_component_menu_Menu_.m_element__elemental2_dom_HTMLElement());
   }
  } else {
   this.m_allowTabFirstItem__void();
  }
 }
 /** @nodts */
 m_clearSearch__void_$pp_org_patternfly_component_menu() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_noResultsItem__org_patternfly_component_menu_Menu_);
  for (let $iterator = this.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let menuItem = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
   {
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(menuItem, true);
   }
  }
  this.m_allowTabFirstItem__void();
 }
 /** @nodts */
 m_toggleFavorite__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null) && !$Equality.$same(item.f_markAsFavorite__org_patternfly_component_menu_MenuItem, null)) {
   item.f_markAsFavorite__org_patternfly_component_menu_MenuItem.m_element__elemental2_dom_HTMLElement().classList.toggle(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorited__org_patternfly_style_Classes));
   let isFavorite = item.f_markAsFavorite__org_patternfly_component_menu_MenuItem.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorited__org_patternfly_style_Classes));
   if (isFavorite) {
    let favItem = MenuItem.$create__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem(this, item);
    this.f_content__org_patternfly_component_menu_Menu.m_addToFavorites__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(favItem);
   } else {
    if (!$Equality.$same(item.f_favoriteItem__org_patternfly_component_menu_MenuItem, null)) {
     this.f_content__org_patternfly_component_menu_Menu.m_removeFromFavorites__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(item.f_favoriteItem__org_patternfly_component_menu_MenuItem);
     item.f_favoriteItem__org_patternfly_component_menu_MenuItem = null;
    }
   }
  }
 }
 /** @nodts */
 m_removeFavorite__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ favoriteItem) {
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null) && !$Equality.$same(favoriteItem.f_sourceItem__org_patternfly_component_menu_MenuItem, null) && !$Equality.$same(favoriteItem.f_sourceItem__org_patternfly_component_menu_MenuItem.f_markAsFavorite__org_patternfly_component_menu_MenuItem, null)) {
   this.f_content__org_patternfly_component_menu_Menu.m_removeFromFavorites__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(favoriteItem);
   let sourceItem = favoriteItem.f_sourceItem__org_patternfly_component_menu_MenuItem;
   sourceItem.f_markAsFavorite__org_patternfly_component_menu_MenuItem.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorited__org_patternfly_style_Classes));
   sourceItem.f_favoriteItem__org_patternfly_component_menu_MenuItem = null;
  }
 }
 /** @nodts */
 m_fireSingleSelection__org_patternfly_component_menu_MenuItem__boolean__void_$pp_org_patternfly_component_menu(/** MenuItem */ item, /** boolean */ selected) {
  this.f_selectHandler__org_patternfly_component_menu_Menu_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<MenuItem> */ sh) =>{
   let sh_1 = /**@type {SelectHandler<MenuItem>}*/ ($Casts.$to(sh, /**@type {Function}*/ (SelectHandler)));
   sh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
  }));
 }
 /** @nodts */
 m_fireMultiSelection__void_$pp_org_patternfly_component_menu() {
  let selection = /**@type {List<MenuItem>}*/ ($Casts.$to(this.m_items__java_util_List().m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** MenuItem */ arg0) =>{
   let arg0_1 = /**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem));
   return arg0_1.m_isSelected__boolean_$pp_org_patternfly_component_menu();
  }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<MenuItem, *, List<MenuItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List)));
  this.f_multiSelectHandler__org_patternfly_component_menu_Menu_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** MultiSelectHandler<Menu, MenuItem> */ msh) =>{
   let msh_1 = /**@type {MultiSelectHandler<Menu, MenuItem>}*/ ($Casts.$to(msh, /**@type {Function}*/ (MultiSelectHandler)));
   msh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__java_util_List__void(new Event(''), this, selection);
  }));
 }
 /** @nodts */
 m_unselectAllItems__void_$pp_org_patternfly_component_menu() {
  for (let $iterator = this.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let menuItem = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
   {
    if ($Equality.$same(this.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_click__org_patternfly_component_SelectionMode)) {
     menuItem.m_makeCurrent__boolean__void_$pp_org_patternfly_component_menu(false);
    } else {
     menuItem.m_markSelected__boolean__void_$pp_org_patternfly_component_menu(false);
    }
   }
  }
 }
 /** @nodts */
 m_unselectAllInGroup__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_menu_Menu(/** MenuItem */ item) {
  let /** MenuGroup */ groupOfItem = null;
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu, null)) {
   for (let $iterator = this.f_content__org_patternfly_component_menu_Menu.f_groups__org_patternfly_component_menu_MenuContent.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {MenuGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuGroup));
    {
     if (!$Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup, null)) {
      if (group.f_list__org_patternfly_component_menu_MenuGroup.f_items__org_patternfly_component_menu_MenuList.containsKey(item.m_identifier__java_lang_String())) {
       groupOfItem = group;
       break;
      }
     }
    }
   }
  }
  if (!$Equality.$same(groupOfItem, null)) {
   for (let $iterator_1 = groupOfItem.f_list__org_patternfly_component_menu_MenuGroup.f_items__org_patternfly_component_menu_MenuList.values().m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let menuItem = /**@type {MenuItem}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), MenuItem));
    {
     menuItem.m_markSelected__boolean__void_$pp_org_patternfly_component_menu(false);
    }
   }
  }
 }
 /** @nodts */
 m_keyHandler__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_menu_Menu(/** KeyboardEvent */ event) {
  let activeElement = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement, HTMLElement_$Overlay));
  if ((/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).contains(/**@type {Node}*/ ($Casts.$to(event.target, Node_$Overlay)))) {
   let navigableElements = this.m_navigableElement__elemental2_dom_HTMLElement__elemental2_core_JsArray_$p_org_patternfly_component_menu_Menu(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
   if (navigableElements.length == 0) {
    Menu.f_logger__org_patternfly_component_menu_Menu_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Menu %o has no navigable elements. Keyboard navigation will be ignored.', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))]);
   }
   if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    event.preventDefault();
    event.stopImmediatePropagation();
    activeElement.click();
   } else if (Key.f_Spacebar__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    event.preventDefault();
    event.stopImmediatePropagation();
    activeElement.click();
   }
   this.m_handleArrows__elemental2_dom_KeyboardEvent__elemental2_dom_HTMLElement__elemental2_core_JsArray__void_$p_org_patternfly_component_menu_Menu(event, activeElement, navigableElements);
  }
 }
 /** @nodts */
 m_handleArrows__elemental2_dom_KeyboardEvent__elemental2_dom_HTMLElement__elemental2_core_JsArray__void_$p_org_patternfly_component_menu_Menu(/** KeyboardEvent */ event, /** HTMLElement */ activeElement, /** Array<HTMLElement> */ navigableElements) {
  let /** HTMLElement */ moveTarget = null;
  let arrowUp = Key.f_ArrowUp__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event);
  let arrowDown = Key.f_ArrowDown__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event);
  let arrowLeft = Key.f_ArrowLeft__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event);
  let arrowRight = Key.f_ArrowRight__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event);
  if (arrowUp || arrowDown) {
   event.preventDefault();
   event.stopImmediatePropagation();
   let /** number */ currentIndex;
   for (let index = 0; index < navigableElements.length; index = index + 1 | 0) {
    let element = /**@type {HTMLElement}*/ ($Casts.$to(navigableElements.at(index), HTMLElement_$Overlay));
    if (this.m_isActiveElement__elemental2_dom_HTMLElement__boolean_$p_org_patternfly_component_menu_Menu(element)) {
     let increment = 0;
     while ($Equality.$same(moveTarget, null) && increment < navigableElements.length && Math.imul(increment, -1) < navigableElements.length) {
      increment = arrowUp ? increment - 1 | 0 : increment + 1 | 0;
      currentIndex = index + increment | 0;
      if (currentIndex >= navigableElements.length) {
       currentIndex = 0;
      }
      if (currentIndex < 0) {
       currentIndex = navigableElements.length - 1 | 0;
      }
      moveTarget = this.m_getFocusableElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_menu_Menu(/**@type {HTMLElement}*/ ($Casts.$to(navigableElements.at(currentIndex), HTMLElement_$Overlay)));
     }
    }
   }
  } else {
   if (arrowLeft || arrowRight) {
    event.preventDefault();
    event.stopImmediatePropagation();
    let validSiblingTags = /**@type {Array<?string>}*/ (Array.of('BUTTON', 'A'));
    for (let i = 0; i < navigableElements.length; i = i + 1 | 0) {
     let element_1 = /**@type {HTMLElement}*/ ($Casts.$to(navigableElements.at(i), HTMLElement_$Overlay));
     if (this.m_isActiveElement__elemental2_dom_HTMLElement__boolean_$p_org_patternfly_component_menu_Menu(element_1)) {
      let activeRow = element_1.querySelectorAll(validSiblingTags.join(','));
      if (activeRow.length > 0) {
       let nextSibling = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement, HTMLElement_$Overlay));
       while (!$Equality.$same(nextSibling, null)) {
        let isDirectChildOfNavigableElement = $Equality.$same(nextSibling.parentElement, element_1);
        let nextSiblingMainElement = isDirectChildOfNavigableElement ? nextSibling : /**@type {HTMLElement}*/ ($Casts.$to(nextSibling.parentElement, HTMLElement_$Overlay));
        nextSibling = (/**@type {HTMLElement}*/ ($Casts.$to(arrowLeft ? nextSiblingMainElement.previousElementSibling : nextSiblingMainElement.nextElementSibling, HTMLElement_$Overlay)));
        if (!$Equality.$same(nextSibling, null)) {
         if (validSiblingTags.includes(nextSibling.tagName)) {
          moveTarget = nextSibling;
          break;
         }
         if (!$Equality.$same(nextSibling.firstElementChild, null) && validSiblingTags.includes(nextSibling.firstElementChild.tagName)) {
          moveTarget = (/**@type {HTMLElement}*/ ($Casts.$to(nextSibling.firstElementChild, HTMLElement_$Overlay)));
          break;
         }
        }
       }
      }
     }
    }
   }
  }
  if (!$Equality.$same(moveTarget, null)) {
   activeElement.tabIndex = -1;
   moveTarget.tabIndex = 0;
   moveTarget.focus();
  }
 }
 /** @nodts @return {Array<HTMLElement>} */
 m_navigableElement__elemental2_dom_HTMLElement__elemental2_core_JsArray_$p_org_patternfly_component_menu_Menu(/** HTMLElement */ element) {
  let elements = /**@type {Array<HTMLElement>}*/ (JsArray_$Overlay.m_from__elemental2_core_JsIterable__elemental2_core_JsArray(element.querySelectorAll('li').values()));
  return elements.filter(/**  @return {*}*/ ((/** HTMLElement */ e, /** number */ i) =>{
   let e_1 = /**@type {HTMLElement}*/ ($Casts.$to(e, HTMLElement_$Overlay));
   return Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(e_1) && !(e_1.classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes)) || e_1.classList.contains(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_divider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))));
  }));
 }
 /** @nodts @return {HTMLElement} */
 m_getFocusableElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_menu_Menu(/** HTMLElement */ navigableElement) {
  let /** HTMLElement */ focusableElement = null;
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('DIV', navigableElement.tagName)) {
   focusableElement = (/**@type {HTMLElement}*/ ($Casts.$to(navigableElement.querySelector('input'), HTMLElement_$Overlay)));
  }
  if ($Equality.$same(focusableElement, null)) {
   let firstChild = /**@type {HTMLElement}*/ ($Casts.$to(navigableElement.firstChild, HTMLElement_$Overlay));
   if (!$Equality.$same(firstChild, null)) {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('LABEL', firstChild.tagName)) {
     focusableElement = (/**@type {HTMLElement}*/ ($Casts.$to(navigableElement.querySelector('input'), HTMLElement_$Overlay)));
    } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('DIV', firstChild.tagName)) {
     focusableElement = (/**@type {HTMLElement}*/ ($Casts.$to(navigableElement.querySelector('a, button, input'), HTMLElement_$Overlay)));
    } else {
     focusableElement = firstChild;
    }
   }
  }
  return focusableElement;
 }
 /** @nodts @return {boolean} */
 m_isActiveElement__elemental2_dom_HTMLElement__boolean_$p_org_patternfly_component_menu_Menu(/** HTMLElement */ element) {
  return $Equality.$same(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement.closest('li'), element) || $Equality.$same(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement.parentElement, element) || $Equality.$same(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement.closest(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_search__org_patternfly_style_Classes], j_l_String)))), element) || !$Equality.$same(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement.closest('ol'), null) && $Equality.$same(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement.closest('ol').firstChild, element);
 }
 //Bridge method.
 /** @final @override @nodts @return {Menu} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_Menu();
 }
 //Bridge method.
 /** @final @override @nodts @return {Menu} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {Menu}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Menu));
 }
 //Bridge method.
 /** @final @override @nodts @return {Menu} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Menu}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Menu));
 }
 //Default method forwarding stub.
 /** @nodts @return {Menu} */
 m_plain__org_patternfly_component_menu_Menu() {
  return /**@type {Menu}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Menu));
 }
 //Default method forwarding stub.
 /** @nodts @return {Menu} */
 m_plain__boolean__org_patternfly_component_menu_Menu(/** boolean */ arg0) {
  return /**@type {Menu}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Menu));
 }
 /** @nodts */
 static $clinit() {
  Menu.$clinit = () =>{};
  Menu.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Plain.$clinit();
  Menu.f_logger__org_patternfly_component_menu_Menu_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Menu).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Menu;
 }
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  List = goog.module.get('java.util.List$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  MenuFooter = goog.module.get('org.patternfly.component.menu.MenuFooter$impl');
  MenuGroup = goog.module.get('org.patternfly.component.menu.MenuGroup$impl');
  MenuHeader = goog.module.get('org.patternfly.component.menu.MenuHeader$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  AsyncStatus = goog.module.get('org.patternfly.core.AsyncStatus$impl');
  MultiSelectHandler = goog.module.get('org.patternfly.handler.MultiSelectHandler$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Menu.f_logger__org_patternfly_component_menu_Menu_;
Attachable.$markImplementor(Menu);
Plain.$markImplementor(Menu);
$Util.$setClassMetadata(Menu, 'org.patternfly.component.menu.Menu');

exports = Menu;

//# sourceMappingURL=Menu.js.map
