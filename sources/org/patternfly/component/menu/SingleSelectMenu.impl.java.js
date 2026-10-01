goog.module('org.patternfly.component.menu.SingleSelectMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Menu = goog.require('org.patternfly.component.menu.Menu$impl');

let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');

class SingleSelectMenu extends Menu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {SingleSelectMenu} */
 static m_singleSelectMenu__org_patternfly_component_menu_SingleSelectMenu() {
  SingleSelectMenu.$clinit();
  return SingleSelectMenu.$create__();
 }
 /** @nodts @return {!SingleSelectMenu} */
 static $create__() {
  SingleSelectMenu.$clinit();
  let $instance = new SingleSelectMenu();
  $instance.$ctor__org_patternfly_component_menu_SingleSelectMenu__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_SingleSelectMenu__void() {
  this.$ctor__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(MenuType.f_select__org_patternfly_component_menu_MenuType, SelectionMode.f_single__org_patternfly_component_SelectionMode);
 }
 /** @nodts @return {SingleSelectMenu} */
 m_that__org_patternfly_component_menu_SingleSelectMenu() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleSelectMenu} */
 m_that__org_patternfly_component_menu_Menu() {
  return this.m_that__org_patternfly_component_menu_SingleSelectMenu();
 }
 /** @nodts */
 static $clinit() {
  SingleSelectMenu.$clinit = () =>{};
  SingleSelectMenu.$loadModules();
  Menu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingleSelectMenu;
 }
 
 /** @nodts */
 static $loadModules() {
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
 }
}
$Util.$setClassMetadata(SingleSelectMenu, 'org.patternfly.component.menu.SingleSelectMenu');

exports = SingleSelectMenu;

//# sourceMappingURL=SingleSelectMenu.js.map
