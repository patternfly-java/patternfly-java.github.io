goog.module('org.patternfly.component.menu.SingleMenuToggleMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuToggleMenu = goog.require('org.patternfly.component.menu.MenuToggleMenu$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let SingleSelectMenu = goog.forwardDeclare('org.patternfly.component.menu.SingleSelectMenu$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template B
 * @extends {MenuToggleMenu<B>}
 */
class SingleMenuToggleMenu extends MenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_defaultSelectHandler__org_patternfly_component_menu_SingleMenuToggleMenu = false;
  /**@type {MenuContent} @nodts*/
  this.f_menuContent__org_patternfly_component_menu_SingleMenuToggleMenu_;
  /**@type {MenuList} @nodts*/
  this.f_menuList__org_patternfly_component_menu_SingleMenuToggleMenu_;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_SingleMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__void(/** ComponentType */ componentType, /** MenuToggle */ menuToggle) {
  this.$ctor__org_patternfly_component_menu_MenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__void(componentType, menuToggle);
  this.f_defaultSelectHandler__org_patternfly_component_menu_SingleMenuToggleMenu = true;
 }
 /** @abstract @nodts */
 m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {}
 /** @override @nodts @return {B} */
 m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ menu) {
  super.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(menu);
  if ($Equality.$same(menu.f_menuType__org_patternfly_component_menu_Menu, MenuType.f_select__org_patternfly_component_menu_MenuType) && $Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_component_SelectionMode) && this.f_defaultSelectHandler__org_patternfly_component_menu_SingleMenuToggleMenu) {
   menu.m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_menu_Menu(SelectHandler.$adapt((/** Event */ e, /** MenuItem */ menuItem, /** boolean */ s) =>{
    let menuItem_1 = /**@type {MenuItem}*/ ($Casts.$to(menuItem, MenuItem));
    this.m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(menuItem_1);
   }));
  }
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_applyToMenuList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<MenuList> */ consumer) {
  if ($Equality.$same(this.f_menu__org_patternfly_component_menu_MenuToggleMenu, null)) {
   this.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(SingleSelectMenu.m_singleSelectMenu__org_patternfly_component_menu_SingleSelectMenu());
  }
  if ($Equality.$same(this.f_menuContent__org_patternfly_component_menu_SingleMenuToggleMenu_, null)) {
   this.f_menuContent__org_patternfly_component_menu_SingleMenuToggleMenu_ = MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent();
   this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(this.f_menuContent__org_patternfly_component_menu_SingleMenuToggleMenu_);
  }
  if ($Equality.$same(this.f_menuList__org_patternfly_component_menu_SingleMenuToggleMenu_, null)) {
   this.f_menuList__org_patternfly_component_menu_SingleMenuToggleMenu_ = MenuList.m_menuList__org_patternfly_component_menu_MenuList();
   this.f_menuContent__org_patternfly_component_menu_SingleMenuToggleMenu_.m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(this.f_menuList__org_patternfly_component_menu_SingleMenuToggleMenu_);
  }
  consumer.m_accept__java_lang_Object__void(this.f_menuList__org_patternfly_component_menu_SingleMenuToggleMenu_);
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_noDefaultSelectHandler__org_jboss_elemento_TypedBuilder() {
  this.f_defaultSelectHandler__org_patternfly_component_menu_SingleMenuToggleMenu = false;
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 m_clear__void() {
  this.m_clear__boolean__void(true);
 }
 /** @nodts */
 m_clear__boolean__void(/** boolean */ fireEvent) {
  let selectedItems = this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_selectedItems__java_util_List();
  this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
  this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_unselectAllItems__void_$pp_org_patternfly_component_menu();
  this.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_text__java_lang_String__org_patternfly_component_menu_MenuToggle('');
  if (fireEvent && !selectedItems.isEmpty()) {
   this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_fireSingleSelection__org_patternfly_component_menu_MenuItem__boolean__void_$pp_org_patternfly_component_menu(/**@type {MenuItem}*/ ($Casts.$to(selectedItems.getAtIndex(0), MenuItem)), false);
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__void(this.m_menu__org_patternfly_component_menu_Menu().m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier), true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__void(this.m_menu__org_patternfly_component_menu_Menu().m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier), fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__void(/** MenuItem */ item) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__void(item, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__boolean__void(/** MenuItem */ item, /** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_menu__org_patternfly_component_menu_MenuToggleMenu, null) && !$Equality.$same(this.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu, null) && !$Equality.$same(item, null)) {
   this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, true, fireEvent);
   if (!fireEvent && this.f_defaultSelectHandler__org_patternfly_component_menu_SingleMenuToggleMenu) {
    this.m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(item);
   }
  }
 }
 /** @nodts */
 static $clinit() {
  SingleMenuToggleMenu.$clinit = () =>{};
  SingleMenuToggleMenu.$loadModules();
  MenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingleMenuToggleMenu;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  SingleSelectMenu = goog.module.get('org.patternfly.component.menu.SingleSelectMenu$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SingleMenuToggleMenu, 'org.patternfly.component.menu.SingleMenuToggleMenu');

exports = SingleMenuToggleMenu;

//# sourceMappingURL=SingleMenuToggleMenu.js.map
