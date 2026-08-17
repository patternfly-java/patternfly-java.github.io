goog.module('org.patternfly.component.menu.PopperSingleMenuToggleMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopperMenuToggleMenu = goog.require('org.patternfly.component.menu.PopperMenuToggleMenu$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template B
 * @extends {PopperMenuToggleMenu<B>}
 * @deprecated
 */
class PopperSingleMenuToggleMenu extends PopperMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_defaultSelectHandler__org_patternfly_component_menu_PopperSingleMenuToggleMenu = false;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_PopperSingleMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(/** ComponentType */ componentType, /** MenuToggle */ menuToggle, /** TriggerAction */ triggerAction) {
  this.$ctor__org_patternfly_component_menu_PopperMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(componentType, menuToggle, triggerAction);
  this.f_defaultSelectHandler__org_patternfly_component_menu_PopperSingleMenuToggleMenu = true;
 }
 /** @abstract @nodts */
 m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {}
 /** @override @nodts @return {B} */
 m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ menu) {
  super.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(menu);
  if ($Equality.$same(menu.f_menuType__org_patternfly_component_menu_Menu, MenuType.f_select__org_patternfly_component_menu_MenuType) && $Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_component_SelectionMode) && this.f_defaultSelectHandler__org_patternfly_component_menu_PopperSingleMenuToggleMenu) {
   menu.m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_menu_Menu(SelectHandler.$adapt((/** Event */ e, /** MenuItem */ menuItem, /** boolean */ s) =>{
    let menuItem_1 = /**@type {MenuItem}*/ ($Casts.$to(menuItem, MenuItem));
    this.m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(menuItem_1);
   }));
  }
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_noDefaultSelectHandler__org_jboss_elemento_TypedBuilder() {
  this.f_defaultSelectHandler__org_patternfly_component_menu_PopperSingleMenuToggleMenu = false;
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 m_clear__void() {
  this.m_clear__boolean__void(true);
 }
 /** @nodts */
 m_clear__boolean__void(/** boolean */ fireEvent) {
  let selectedItems = this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_selectedItems__java_util_List();
  this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
  this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_unselectAllItems__void_$pp_org_patternfly_component_menu();
  this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_text__java_lang_String__org_patternfly_component_menu_MenuToggle('');
  if (fireEvent && !selectedItems.isEmpty()) {
   this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_fireSingleSelection__org_patternfly_component_menu_MenuItem__boolean__void_$pp_org_patternfly_component_menu(/**@type {MenuItem}*/ ($Casts.$to(selectedItems.getAtIndex(0), MenuItem)), false);
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
  if (!$Equality.$same(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu, null) && !$Equality.$same(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu, null) && !$Equality.$same(item, null)) {
   this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, true, fireEvent);
   if (!fireEvent && this.f_defaultSelectHandler__org_patternfly_component_menu_PopperSingleMenuToggleMenu) {
    this.m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(item);
   }
  }
 }
 /** @nodts */
 static $clinit() {
  PopperSingleMenuToggleMenu.$clinit = () =>{};
  PopperSingleMenuToggleMenu.$loadModules();
  PopperMenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperSingleMenuToggleMenu;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PopperSingleMenuToggleMenu, 'org.patternfly.component.menu.PopperSingleMenuToggleMenu');

exports = PopperSingleMenuToggleMenu;

//# sourceMappingURL=PopperSingleMenuToggleMenu.js.map
