goog.module('org.patternfly.component.menu.MenuList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const HasAsyncItems = goog.require('org.patternfly.component.HasAsyncItems$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ElementContainerMethods = goog.forwardDeclare('org.jboss.elemento.ElementContainerMethods$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.component.AsyncItems$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let AsyncStatus = goog.forwardDeclare('org.patternfly.core.AsyncStatus$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLUListElement, MenuList>}
 * @implements {HasAsyncItems<HTMLUListElement, MenuList, MenuItem>}
 * @implements {Ordered<HTMLUListElement, MenuList, MenuItem>}
 * @implements {Attachable}
 */
class MenuList extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, MenuItem>} @nodts*/
  this.f_items__org_patternfly_component_menu_MenuList;
  /**@type {AurHandler<MenuList, MenuItem>} @nodts*/
  this.f_aur__org_patternfly_component_menu_MenuList_;
  /**@type {AsyncStatus} @nodts*/
  this.f_status__org_patternfly_component_menu_MenuList_;
  /**@type {MenuItem} @nodts*/
  this.f_loadingItem__org_patternfly_component_menu_MenuList_;
  /**@type {MenuItem} @nodts*/
  this.f_noItemsItem__org_patternfly_component_menu_MenuList_;
  /**@type {MenuItem} @nodts*/
  this.f_errorItem__org_patternfly_component_menu_MenuList_;
  /**@type {AsyncItems<MenuList, MenuItem>} @nodts*/
  this.f_asyncItems__org_patternfly_component_menu_MenuList_;
  /**@type {Comparator<MenuItem>} @nodts*/
  this.f_comparator__org_patternfly_component_menu_MenuList_;
 }
 /** @nodts @return {MenuList} */
 static m_menuList__org_patternfly_component_menu_MenuList() {
  MenuList.$clinit();
  return MenuList.$create__();
 }
 /** @nodts @return {!MenuList} */
 static $create__() {
  MenuList.$clinit();
  let $instance = new MenuList();
  $instance.$ctor__org_patternfly_component_menu_MenuList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuList__void() {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MenuList.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuList, MenuList.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuList, /**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_menu_MenuList = (/**@type {!LinkedHashMap<?string, MenuItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_menu_MenuList_ = (/**@type {!AurHandler<MenuList, MenuItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_status__org_patternfly_component_menu_MenuList_ = AsyncStatus.f_static___org_patternfly_core_AsyncStatus;
  this.m_storeSubComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Menu));
  switch (menu.f_menuType__org_patternfly_component_menu_Menu.ordinal()) {
   case MenuType.$ordinal_menu__org_patternfly_component_menu_MenuType:
   case MenuType.$ordinal_checkbox__org_patternfly_component_menu_MenuType:
    this.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_menu__org_patternfly_core_Roles);
    break;
   case MenuType.$ordinal_select__org_patternfly_component_menu_MenuType:
    this.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_listbox__org_patternfly_core_Roles);
    if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
     this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_multiSelectable__org_patternfly_core_Aria, false);
    } else if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
     this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_multiSelectable__org_patternfly_core_Aria, true);
    }
    break;
  }
 }
 /** @nodts @return {MenuList} */
 m_add__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/** MenuItem */ item) {
  this.m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, item);
  this.f_items__org_patternfly_component_menu_MenuList.put(item.m_identifier__java_lang_String(), item);
  return /**@type {MenuList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_menu_MenuList_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), MenuList));
 }
 /** @nodts @return {MenuList} */
 m_add__org_patternfly_component_AsyncItems__org_patternfly_component_menu_MenuList(/** AsyncItems<MenuList, MenuItem> */ items) {
  this.f_status__org_patternfly_component_menu_MenuList_ = AsyncStatus.f_pending__org_patternfly_core_AsyncStatus;
  this.f_asyncItems__org_patternfly_component_menu_MenuList_ = items;
  return this;
 }
 /** @nodts @return {MenuList} */
 m_addDivider__org_patternfly_component_menu_MenuList() {
  return /**@type {MenuList}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType)), MenuList));
 }
 /** @nodts @return {MenuList} */
 m_ordered__java_util_Comparator__org_patternfly_component_menu_MenuList(/** Comparator<MenuItem> */ comparator) {
  this.f_comparator__org_patternfly_component_menu_MenuList_ = comparator;
  return this;
 }
 /** @nodts @return {MenuList} */
 m_that__org_patternfly_component_menu_MenuList() {
  return this;
 }
 /** @nodts @return {MenuList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_menu_MenuList(/** AddItemHandler<MenuList, MenuItem> */ onAdd) {
  return /**@type {MenuList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_menu_MenuList_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), MenuList));
 }
 /** @nodts @return {MenuList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_menu_MenuList(/** UpdateItemHandler<MenuList, MenuItem> */ onUpdate) {
  return /**@type {MenuList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_menu_MenuList_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), MenuList));
 }
 /** @nodts @return {MenuList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_menu_MenuList(/** RemoveItemHandler<MenuList, MenuItem> */ onRemove) {
  return /**@type {MenuList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_menu_MenuList_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), MenuList));
 }
 /** @override @nodts @return {Comparator<MenuItem>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_component_menu_MenuList_;
 }
 /** @override @nodts @return {Promise<Iterable<MenuItem>>} */
 m_load__elemental2_promise_Promise() {
  if ($Equality.$same(this.f_status__org_patternfly_component_menu_MenuList_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus) && !$Equality.$same(this.f_asyncItems__org_patternfly_component_menu_MenuList_, null)) {
   this.f_loadingItem__org_patternfly_component_menu_MenuList_ = (/**@type {MenuItem}*/ ($Casts.$to(MenuList.f_loading__org_patternfly_component_menu_MenuList_.m_get__java_lang_Object(), MenuItem)));
   this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this.f_loadingItem__org_patternfly_component_menu_MenuList_);
   return /**@type {!Promise<!Iterable<!MenuItem>>}*/ ((/**@type {!Promise<!Iterable<!MenuItem>>}*/ ((/**@type {Promise<Iterable<MenuItem>>}*/ ($Casts.$to(this.f_asyncItems__org_patternfly_component_menu_MenuList_.m_apply__java_lang_Object__java_lang_Object(this), Promise_$Overlay))).then(/**  @return {IThenable<Iterable<MenuItem>>}*/ ((/** Iterable<MenuItem> */ items) =>{
    let items_1 = /**@type {Iterable<MenuItem>}*/ ($Casts.$to(items, /**@type {Function}*/ (Iterable)));
    this.f_status__org_patternfly_component_menu_MenuList_ = AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus;
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_loadingItem__org_patternfly_component_menu_MenuList_);
    let count = 0;
    for (let $iterator = items_1.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let item = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
     {
      this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
      count = count + 1 | 0;
     }
    }
    if (count == 0) {
     this.f_noItemsItem__org_patternfly_component_menu_MenuList_ = (/**@type {MenuItem}*/ ($Casts.$to(MenuList.f_noItems__org_patternfly_component_menu_MenuList_.m_get__java_lang_Object(), MenuItem)));
     this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this.f_noItemsItem__org_patternfly_component_menu_MenuList_);
    }
    return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(items_1));
   })))).catch(/**  @return {IThenable<Iterable<MenuItem>>}*/ ((/** !* */ error) =>{
    this.f_status__org_patternfly_component_menu_MenuList_ = AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus;
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_loadingItem__org_patternfly_component_menu_MenuList_);
    MenuList.f_logger__org_patternfly_component_menu_MenuList_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to load items for %o: %s', [/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), error]);
    this.f_errorItem__org_patternfly_component_menu_MenuList_ = (/**@type {MenuItem}*/ ($Casts.$to(MenuList.f_error__org_patternfly_component_menu_MenuList_.m_get__java_lang_Object(), MenuItem)));
    this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this.f_errorItem__org_patternfly_component_menu_MenuList_);
    return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (Promise.reject(error));
   })));
  } else {
   return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {List<MenuItem>}*/ (Collections.m_emptyList__java_util_List())));
  }
 }
 /** @override @nodts @return {Promise<Iterable<MenuItem>>} */
 m_reload__elemental2_promise_Promise() {
  if (!$Equality.$same(this.f_status__org_patternfly_component_menu_MenuList_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus)) {
   let selected = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
   for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let menuItem = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
    {
     if (menuItem.m_isSelected__boolean_$pp_org_patternfly_component_menu()) {
      selected.add(menuItem.m_identifier__java_lang_String());
     }
    }
   }
   this.m_reset__void();
   return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (this.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<Iterable<MenuItem>>}*/ ((/** Iterable<MenuItem> */ value) =>{
    let value_1 = /**@type {Iterable<MenuItem>}*/ ($Casts.$to(value, /**@type {Function}*/ (Iterable)));
    let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__boolean__org_patternfly_component_BaseComponent(true), Menu));
    if (!$Equality.$same(menu, null)) {
     for (let $iterator_1 = selected.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
      let identifier = /**@type {?string}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), j_l_String));
      {
       menu.m_select__java_lang_String__boolean__boolean__void(identifier, true, false);
      }
     }
    }
    return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(value_1));
   })));
  } else {
   return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {List<MenuItem>}*/ (Collections.m_emptyList__java_util_List())));
  }
 }
 /** @override @nodts */
 m_reset__void() {
  if ($Equality.$same(this.f_status__org_patternfly_component_menu_MenuList_, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_component_menu_MenuList_, AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus)) {
   this.f_status__org_patternfly_component_menu_MenuList_ = AsyncStatus.f_pending__org_patternfly_core_AsyncStatus;
   this.m_internalClear__void_$p_org_patternfly_component_menu_MenuList();
  }
 }
 /** @override @nodts @return {AsyncStatus} */
 m_status__org_patternfly_core_AsyncStatus() {
  return this.f_status__org_patternfly_component_menu_MenuList_;
 }
 /** @override @nodts @return {Iterator<MenuItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_menu_MenuList.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_menu_MenuList.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_menu_MenuList.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_menu_MenuList.containsKey(identifier);
 }
 /** @nodts @return {MenuItem} */
 m_item__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ identifier) {
  return /**@type {MenuItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_menu_MenuList.get(identifier), MenuItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_menu_MenuItem__void(/** MenuItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** MenuItem */ oldItem, /** MenuItem */ newItem) =>{
   let oldItem_1 = /**@type {MenuItem}*/ ($Casts.$to(oldItem, MenuItem));
   let newItem_1 = /**@type {MenuItem}*/ ($Casts.$to(newItem, MenuItem));
   this.f_items__org_patternfly_component_menu_MenuList.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_menu_MenuList_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {MenuItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_menu_MenuList.remove(identifier), MenuItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_menu_MenuList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  if ($Equality.$same(this.f_status__org_patternfly_component_menu_MenuList_, AsyncStatus.f_static___org_patternfly_core_AsyncStatus)) {
   this.m_internalClear__void_$p_org_patternfly_component_menu_MenuList();
  } else if ($Equality.$same(this.f_status__org_patternfly_component_menu_MenuList_, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_component_menu_MenuList_, AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_component_menu_MenuList_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus)) {
   this.m_reset__void();
  }
 }
 /** @nodts */
 m_removeItem__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {
  this.f_items__org_patternfly_component_menu_MenuList.remove(item.m_identifier__java_lang_String());
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_menu_MenuList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @nodts */
 m_internalClear__void_$p_org_patternfly_component_menu_MenuList() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_loadingItem__org_patternfly_component_menu_MenuList_);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_noItemsItem__org_patternfly_component_menu_MenuList_);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_errorItem__org_patternfly_component_menu_MenuList_);
  let iterator = this.f_items__org_patternfly_component_menu_MenuList.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {MenuItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), MenuItem));
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_menu_MenuList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** AsyncItems<MenuList, MenuItem> */ arg0) {
  return /**@type {MenuList}*/ ($Casts.$to(HasAsyncItems.m_addItems__$default__org_patternfly_component_HasAsyncItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(this, arg0), MenuList));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_add__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** AsyncItems<MenuList, MenuItem> */ arg0) {
  return this.m_add__org_patternfly_component_AsyncItems__org_patternfly_component_menu_MenuList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<MenuItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<MenuItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuList();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {MenuList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, MenuItem> */ arg1) {
  return /**@type {MenuList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), MenuList));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** MenuItem */ arg0) {
  return /**@type {MenuList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem))), MenuList));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** MenuItem */ arg0) {
  return this.m_add__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<MenuList, MenuItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_menu_MenuList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<MenuItem>} */
 m_items__java_util_List() {
  return /**@type {List<MenuItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_menu_MenuItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, MenuItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** MenuItem */ arg0) {
  this.m_updateItem__org_patternfly_component_menu_MenuItem__void(/**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<MenuList, MenuItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_menu_MenuList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** MenuItem */ arg0, /** BiConsumer<MenuItem, MenuItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<MenuList, MenuItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_menu_MenuList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ arg0, /** MenuItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, /**@type {MenuItem}*/ ($Casts.$to(arg1, MenuItem)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<MenuItem>} */
 m_defaultOrder__java_util_Comparator() {
  return /**@type {Comparator<MenuItem>}*/ (Ordered.m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {MenuList}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), MenuList));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuList} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<MenuItem> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_component_menu_MenuList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuList} */
 m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_menu_MenuList(/** AsyncItems<MenuList, MenuItem> */ arg0) {
  return /**@type {MenuList}*/ ($Casts.$to(HasAsyncItems.m_addItems__$default__org_patternfly_component_HasAsyncItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(this, arg0), MenuList));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {MenuList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_menu_MenuList(/** Iterable<T> */ arg0, /** j_u_function_Function<T, MenuItem> */ arg1) {
  return /**@type {MenuList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), MenuList));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuList} */
 m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/** MenuItem */ arg0) {
  return /**@type {MenuList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), MenuList));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_menu_MenuItem__java_util_function_BiConsumer__void(/** MenuItem */ arg0, /** BiConsumer<MenuItem, MenuItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_menu_MenuItem__void(/** ElementContainerMethods<?, ?> */ arg0, /** MenuItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuList} */
 m_ordered__org_patternfly_component_menu_MenuList() {
  return /**@type {MenuList}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), MenuList));
 }
 /** @nodts */
 static $clinit() {
  MenuList.$clinit = () =>{};
  MenuList.$loadModules();
  MenuSubComponent.$clinit();
  HasAsyncItems.$clinit();
  Ordered.$clinit();
  Attachable.$clinit();
  MenuList.f_logger__org_patternfly_component_menu_MenuList_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(MenuList).m_getName__java_lang_String());
  MenuList.f_loading__org_patternfly_component_menu_MenuList_ = Supplier.$adapt(/**  @return {MenuItem}*/ (() =>{
   return MenuItem.m_skeletonMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Menu__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([MenuList.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuList, 'loading'], j_l_String))), 'Loading items...');
  }));
  MenuList.f_noItems__org_patternfly_component_menu_MenuList_ = Supplier.$adapt(/**  @return {MenuItem}*/ (() =>{
   return /**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Menu__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([MenuList.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuList, 'no-items'], j_l_String))), 'No items found').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem));
  }));
  MenuList.f_error__org_patternfly_component_menu_MenuList_ = Supplier.$adapt(/**  @return {MenuItem}*/ (() =>{
   return /**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Menu__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([MenuList.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuList, 'error'], j_l_String))), 'Error').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_errorFill__org_patternfly_icon_PredefinedIcon()), MenuItem));
  }));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  AsyncStatus = goog.module.get('org.patternfly.core.AsyncStatus$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuList.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuList = 'ml';
/**@const {string} @nodts*/
MenuList.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuList = 'MenuList';
/**@type {Logger} @nodts*/
MenuList.f_logger__org_patternfly_component_menu_MenuList_;
/**@type {Supplier<MenuItem>} @nodts*/
MenuList.f_loading__org_patternfly_component_menu_MenuList_;
/**@type {Supplier<MenuItem>} @nodts*/
MenuList.f_noItems__org_patternfly_component_menu_MenuList_;
/**@type {Supplier<MenuItem>} @nodts*/
MenuList.f_error__org_patternfly_component_menu_MenuList_;
HasAsyncItems.$markImplementor(MenuList);
Ordered.$markImplementor(MenuList);
Attachable.$markImplementor(MenuList);
$Util.$setClassMetadata(MenuList, 'org.patternfly.component.menu.MenuList');

exports = MenuList;

//# sourceMappingURL=MenuList.js.map
