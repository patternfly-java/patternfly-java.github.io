goog.module('org.patternfly.component.menu.PopperSingleSelect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopperSingleMenuToggleMenu = goog.require('org.patternfly.component.menu.PopperSingleMenuToggleMenu$impl');

let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');

/**
 * @extends {PopperSingleMenuToggleMenu<PopperSingleSelect>}
 * @deprecated
 */
class PopperSingleSelect extends PopperSingleMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PopperSingleSelect} */
 static m_singleSelect__java_lang_String__org_patternfly_component_menu_PopperSingleSelect(/** ?string */ text) {
  PopperSingleSelect.$clinit();
  return PopperSingleSelect.$create__org_patternfly_component_menu_MenuToggle(MenuToggle.m_menuToggle__java_lang_String__org_patternfly_component_menu_MenuToggle(text));
 }
 /** @nodts @return {PopperSingleSelect} */
 static m_singleSelect__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_PopperSingleSelect(/** MenuToggle */ menuToggle) {
  PopperSingleSelect.$clinit();
  return PopperSingleSelect.$create__org_patternfly_component_menu_MenuToggle(menuToggle);
 }
 /** @nodts @return {!PopperSingleSelect} */
 static $create__org_patternfly_component_menu_MenuToggle(/** MenuToggle */ menuToggle) {
  PopperSingleSelect.$clinit();
  let $instance = new PopperSingleSelect();
  $instance.$ctor__org_patternfly_component_menu_PopperSingleSelect__org_patternfly_component_menu_MenuToggle__void(menuToggle);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_PopperSingleSelect__org_patternfly_component_menu_MenuToggle__void(/** MenuToggle */ menuToggle) {
  this.$ctor__org_patternfly_component_menu_PopperSingleMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(ComponentType.f_PopperSingleSelect__org_patternfly_component_ComponentType, menuToggle, TriggerAction.f_click__org_patternfly_popper_TriggerAction);
 }
 /** @override @nodts */
 m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {
  this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_text__java_lang_String__org_patternfly_component_menu_MenuToggle(item.m_text__java_lang_String());
 }
 /** @nodts @return {PopperSingleSelect} */
 m_that__org_patternfly_component_menu_PopperSingleSelect() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperSingleSelect} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_PopperSingleSelect();
 }
 /** @nodts */
 static $clinit() {
  PopperSingleSelect.$clinit = () =>{};
  PopperSingleSelect.$loadModules();
  PopperSingleMenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperSingleSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
 }
}
$Util.$setClassMetadata(PopperSingleSelect, 'org.patternfly.component.menu.PopperSingleSelect');

exports = PopperSingleSelect;

//# sourceMappingURL=PopperSingleSelect.js.map
