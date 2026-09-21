goog.module('org.patternfly.component.menu.DropdownMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Menu = goog.require('org.patternfly.component.menu.Menu$impl');

let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');

class DropdownMenu extends Menu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DropdownMenu} */
 static m_dropdownMenu__org_patternfly_component_menu_DropdownMenu() {
  DropdownMenu.$clinit();
  return DropdownMenu.$create__();
 }
 /** @nodts @return {!DropdownMenu} */
 static $create__() {
  DropdownMenu.$clinit();
  let $instance = new DropdownMenu();
  $instance.$ctor__org_patternfly_component_menu_DropdownMenu__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_DropdownMenu__void() {
  this.$ctor__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(MenuType.f_menu__org_patternfly_component_menu_MenuType, SelectionMode.f_click__org_patternfly_component_SelectionMode);
 }
 /** @nodts @return {DropdownMenu} */
 m_that__org_patternfly_component_menu_DropdownMenu() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DropdownMenu} */
 m_that__org_patternfly_component_menu_Menu() {
  return this.m_that__org_patternfly_component_menu_DropdownMenu();
 }
 /** @nodts */
 static $clinit() {
  DropdownMenu.$clinit = () =>{};
  DropdownMenu.$loadModules();
  Menu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DropdownMenu;
 }
 
 /** @nodts */
 static $loadModules() {
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
 }
}
$Util.$setClassMetadata(DropdownMenu, 'org.patternfly.component.menu.DropdownMenu');

exports = DropdownMenu;

//# sourceMappingURL=DropdownMenu.js.map
