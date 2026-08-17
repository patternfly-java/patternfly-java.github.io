goog.module('org.patternfly.component.menu.Dropdown$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuToggleMenu = goog.require('org.patternfly.component.menu.MenuToggleMenu$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let DropdownMenu = goog.forwardDeclare('org.patternfly.component.menu.DropdownMenu$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');

/**
 * @extends {MenuToggleMenu<Dropdown>}
 */
class Dropdown extends MenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {MenuContent} @nodts*/
  this.f_menuContent__org_patternfly_component_menu_Dropdown_;
  /**@type {MenuList} @nodts*/
  this.f_menuList__org_patternfly_component_menu_Dropdown_;
 }
 /** @nodts @return {Dropdown} */
 static m_dropdown__java_lang_String__org_patternfly_component_menu_Dropdown(/** ?string */ text) {
  Dropdown.$clinit();
  return Dropdown.$create__org_patternfly_component_menu_MenuToggle(MenuToggle.m_menuToggle__java_lang_String__org_patternfly_component_menu_MenuToggle(text));
 }
 /** @nodts @return {Dropdown} */
 static m_dropdown__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_menu_Dropdown(/** PredefinedIcon */ icon, /** ?string */ label) {
  Dropdown.$clinit();
  return Dropdown.$create__org_patternfly_component_menu_MenuToggle(MenuToggle.m_menuToggle__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(icon, label));
 }
 /** @nodts @return {Dropdown} */
 static m_dropdown__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(/** MenuToggle */ menuToggle) {
  Dropdown.$clinit();
  return Dropdown.$create__org_patternfly_component_menu_MenuToggle(menuToggle);
 }
 /** @nodts @return {!Dropdown} */
 static $create__org_patternfly_component_menu_MenuToggle(/** MenuToggle */ menuToggle) {
  Dropdown.$clinit();
  let $instance = new Dropdown();
  $instance.$ctor__org_patternfly_component_menu_Dropdown__org_patternfly_component_menu_MenuToggle__void(menuToggle);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_Dropdown__org_patternfly_component_menu_MenuToggle__void(/** MenuToggle */ menuToggle) {
  this.$ctor__org_patternfly_component_menu_MenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__void(ComponentType.f_Dropdown__org_patternfly_component_ComponentType, menuToggle);
 }
 /** @nodts @return {Dropdown} */
 m_applyToMenuList__java_util_function_Consumer__org_patternfly_component_menu_Dropdown(/** Consumer<MenuList> */ consumer) {
  if ($Equality.$same(this.f_menu__org_patternfly_component_menu_MenuToggleMenu, null)) {
   this.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(DropdownMenu.m_dropdownMenu__org_patternfly_component_menu_DropdownMenu());
  }
  if ($Equality.$same(this.f_menuContent__org_patternfly_component_menu_Dropdown_, null)) {
   this.f_menuContent__org_patternfly_component_menu_Dropdown_ = MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent();
   this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(this.f_menuContent__org_patternfly_component_menu_Dropdown_);
  }
  if ($Equality.$same(this.f_menuList__org_patternfly_component_menu_Dropdown_, null)) {
   this.f_menuList__org_patternfly_component_menu_Dropdown_ = MenuList.m_menuList__org_patternfly_component_menu_MenuList();
   this.f_menuContent__org_patternfly_component_menu_Dropdown_.m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(this.f_menuList__org_patternfly_component_menu_Dropdown_);
  }
  consumer.m_accept__java_lang_Object__void(this.f_menuList__org_patternfly_component_menu_Dropdown_);
  return this;
 }
 /** @nodts @return {Dropdown} */
 m_that__org_patternfly_component_menu_Dropdown() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Dropdown} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_Dropdown();
 }
 /** @nodts */
 static $clinit() {
  Dropdown.$clinit = () =>{};
  Dropdown.$loadModules();
  MenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Dropdown;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  DropdownMenu = goog.module.get('org.patternfly.component.menu.DropdownMenu$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
 }
}
$Util.$setClassMetadata(Dropdown, 'org.patternfly.component.menu.Dropdown');

exports = Dropdown;

//# sourceMappingURL=Dropdown.js.map
