goog.module('org.patternfly.component.menu.SingleSelect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SingleMenuToggleMenu = goog.require('org.patternfly.component.menu.SingleMenuToggleMenu$impl');

let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');

/**
 * @extends {SingleMenuToggleMenu<SingleSelect>}
 */
class SingleSelect extends SingleMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {SingleSelect} */
 static m_singleSelect__java_lang_String__org_patternfly_component_menu_SingleSelect(/** ?string */ text) {
  SingleSelect.$clinit();
  return SingleSelect.$create__org_patternfly_component_menu_MenuToggle(MenuToggle.m_menuToggle__java_lang_String__org_patternfly_component_menu_MenuToggle(text));
 }
 /** @nodts @return {SingleSelect} */
 static m_singleSelect__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_SingleSelect(/** MenuToggle */ menuToggle) {
  SingleSelect.$clinit();
  return SingleSelect.$create__org_patternfly_component_menu_MenuToggle(menuToggle);
 }
 /** @nodts @return {!SingleSelect} */
 static $create__org_patternfly_component_menu_MenuToggle(/** MenuToggle */ menuToggle) {
  SingleSelect.$clinit();
  let $instance = new SingleSelect();
  $instance.$ctor__org_patternfly_component_menu_SingleSelect__org_patternfly_component_menu_MenuToggle__void(menuToggle);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_SingleSelect__org_patternfly_component_menu_MenuToggle__void(/** MenuToggle */ menuToggle) {
  this.$ctor__org_patternfly_component_menu_SingleMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__void(ComponentType.f_SingleSelect__org_patternfly_component_ComponentType, menuToggle);
 }
 /** @override @nodts */
 m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {
  this.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_text__java_lang_String__org_patternfly_component_menu_MenuToggle(item.m_text__java_lang_String());
 }
 /** @nodts @return {SingleSelect} */
 m_that__org_patternfly_component_menu_SingleSelect() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleSelect} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_SingleSelect();
 }
 /** @nodts */
 static $clinit() {
  SingleSelect.$clinit = () =>{};
  SingleSelect.$loadModules();
  SingleMenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingleSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
 }
}
$Util.$setClassMetadata(SingleSelect, 'org.patternfly.component.menu.SingleSelect');

exports = SingleSelect;

//# sourceMappingURL=SingleSelect.js.map
