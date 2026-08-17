goog.module('org.patternfly.component.menu.PopperDropdown$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopperMenuToggleMenu = goog.require('org.patternfly.component.menu.PopperMenuToggleMenu$impl');

let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');

/**
 * @extends {PopperMenuToggleMenu<PopperDropdown>}
 * @deprecated
 */
class PopperDropdown extends PopperMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PopperDropdown} */
 static m_dropdown__java_lang_String__org_patternfly_component_menu_PopperDropdown(/** ?string */ text) {
  PopperDropdown.$clinit();
  return PopperDropdown.$create__org_patternfly_component_menu_MenuToggle(MenuToggle.m_menuToggle__java_lang_String__org_patternfly_component_menu_MenuToggle(text));
 }
 /** @nodts @return {PopperDropdown} */
 static m_dropdown__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_menu_PopperDropdown(/** PredefinedIcon */ icon, /** ?string */ label) {
  PopperDropdown.$clinit();
  return PopperDropdown.$create__org_patternfly_component_menu_MenuToggle(MenuToggle.m_menuToggle__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(icon, label));
 }
 /** @nodts @return {PopperDropdown} */
 static m_dropdown__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_PopperDropdown(/** MenuToggle */ menuToggle) {
  PopperDropdown.$clinit();
  return PopperDropdown.$create__org_patternfly_component_menu_MenuToggle(menuToggle);
 }
 /** @nodts @return {!PopperDropdown} */
 static $create__org_patternfly_component_menu_MenuToggle(/** MenuToggle */ menuToggle) {
  PopperDropdown.$clinit();
  let $instance = new PopperDropdown();
  $instance.$ctor__org_patternfly_component_menu_PopperDropdown__org_patternfly_component_menu_MenuToggle__void(menuToggle);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_PopperDropdown__org_patternfly_component_menu_MenuToggle__void(/** MenuToggle */ menuToggle) {
  this.$ctor__org_patternfly_component_menu_PopperMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(ComponentType.f_PopperDropdown__org_patternfly_component_ComponentType, menuToggle, TriggerAction.f_click__org_patternfly_popper_TriggerAction);
 }
 /** @nodts @return {PopperDropdown} */
 m_that__org_patternfly_component_menu_PopperDropdown() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperDropdown} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_PopperDropdown();
 }
 /** @nodts */
 static $clinit() {
  PopperDropdown.$clinit = () =>{};
  PopperDropdown.$loadModules();
  PopperMenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperDropdown;
 }
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
 }
}
$Util.$setClassMetadata(PopperDropdown, 'org.patternfly.component.menu.PopperDropdown');

exports = PopperDropdown;

//# sourceMappingURL=PopperDropdown.js.map
