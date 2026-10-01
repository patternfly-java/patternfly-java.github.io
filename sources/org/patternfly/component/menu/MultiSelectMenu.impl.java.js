goog.module('org.patternfly.component.menu.MultiSelectMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Menu = goog.require('org.patternfly.component.menu.Menu$impl');

let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');

class MultiSelectMenu extends Menu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MultiSelectMenu} */
 static m_multiSelectMenu__org_patternfly_component_menu_MultiSelectMenu() {
  MultiSelectMenu.$clinit();
  return MultiSelectMenu.$create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(MenuType.f_select__org_patternfly_component_menu_MenuType, SelectionMode.f_multi__org_patternfly_component_SelectionMode);
 }
 /** @nodts @return {MultiSelectMenu} */
 static m_multiSelectGroupMenu__org_patternfly_component_menu_MultiSelectMenu() {
  MultiSelectMenu.$clinit();
  return MultiSelectMenu.$create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(MenuType.f_select__org_patternfly_component_menu_MenuType, SelectionMode.f_group__org_patternfly_component_SelectionMode);
 }
 /** @nodts @return {MultiSelectMenu} */
 static m_multiSelectCheckboxMenu__org_patternfly_component_menu_MultiSelectMenu() {
  MultiSelectMenu.$clinit();
  return MultiSelectMenu.$create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(MenuType.f_checkbox__org_patternfly_component_menu_MenuType, SelectionMode.f_multi__org_patternfly_component_SelectionMode);
 }
 /** @nodts @return {!MultiSelectMenu} */
 static $create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(/** MenuType */ menuType, /** SelectionMode */ selectionMode) {
  MultiSelectMenu.$clinit();
  let $instance = new MultiSelectMenu();
  $instance.$ctor__org_patternfly_component_menu_MultiSelectMenu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(menuType, selectionMode);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MultiSelectMenu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(/** MenuType */ menuType, /** SelectionMode */ selectionMode) {
  this.$ctor__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(menuType, selectionMode);
 }
 /** @nodts @return {MultiSelectMenu} */
 m_that__org_patternfly_component_menu_MultiSelectMenu() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiSelectMenu} */
 m_that__org_patternfly_component_menu_Menu() {
  return this.m_that__org_patternfly_component_menu_MultiSelectMenu();
 }
 /** @nodts */
 static $clinit() {
  MultiSelectMenu.$clinit = () =>{};
  MultiSelectMenu.$loadModules();
  Menu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MultiSelectMenu;
 }
 
 /** @nodts */
 static $loadModules() {
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
 }
}
$Util.$setClassMetadata(MultiSelectMenu, 'org.patternfly.component.menu.MultiSelectMenu');

exports = MultiSelectMenu;

//# sourceMappingURL=MultiSelectMenu.js.map
