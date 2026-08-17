goog.module('org.patternfly.component.menu.PopperMultiSelect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopperMultiMenuToggleMenu = goog.require('org.patternfly.component.menu.PopperMultiMenuToggleMenu$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');

/**
 * @extends {PopperMultiMenuToggleMenu<PopperMultiSelect>}
 * @deprecated
 */
class PopperMultiSelect extends PopperMultiMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PopperMultiSelect} */
 static m_multiSelect__java_lang_String__org_patternfly_component_menu_PopperMultiSelect(/** ?string */ text) {
  PopperMultiSelect.$clinit();
  return PopperMultiSelect.$create__org_patternfly_component_menu_MenuToggle(MenuToggle.m_menuToggle__java_lang_String__org_patternfly_component_menu_MenuToggle(text).m_addBadge__org_patternfly_component_badge_Badge__org_patternfly_component_menu_MenuToggle(Badge.m_badge__int__org_patternfly_component_badge_Badge(0).m_read__org_patternfly_component_badge_Badge()));
 }
 /** @nodts @return {PopperMultiSelect} */
 static m_multiSelect__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_PopperMultiSelect(/** MenuToggle */ menuToggle) {
  PopperMultiSelect.$clinit();
  return PopperMultiSelect.$create__org_patternfly_component_menu_MenuToggle(menuToggle);
 }
 /** @nodts @return {!PopperMultiSelect} */
 static $create__org_patternfly_component_menu_MenuToggle(/** MenuToggle */ menuToggle) {
  PopperMultiSelect.$clinit();
  let $instance = new PopperMultiSelect();
  $instance.$ctor__org_patternfly_component_menu_PopperMultiSelect__org_patternfly_component_menu_MenuToggle__void(menuToggle);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_PopperMultiSelect__org_patternfly_component_menu_MenuToggle__void(/** MenuToggle */ menuToggle) {
  this.$ctor__org_patternfly_component_menu_PopperMultiMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(ComponentType.f_PopperMultiSelect__org_patternfly_component_ComponentType, menuToggle, TriggerAction.f_stayOpen__org_patternfly_popper_TriggerAction);
  if (!$Equality.$same(menuToggle.m_badge__org_patternfly_component_badge_Badge(), null)) {
   menuToggle.m_badge__org_patternfly_component_badge_Badge().m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('visibility', 'hidden', true);
  }
 }
 /** @override @nodts */
 m_updateMenuToggle__java_util_List__void_$pp_org_patternfly_component_menu(/** List<MenuItem> */ items) {
  let badge = this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_badge__org_patternfly_component_badge_Badge();
  if (!$Equality.$same(badge, null)) {
   let size = items.size();
   badge.m_count__int__org_patternfly_component_badge_Badge(size);
   if (size == 0) {
    badge.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('visibility', 'hidden', true);
   } else {
    badge.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('visibility', 'unset');
   }
  }
 }
 /** @nodts @return {PopperMultiSelect} */
 m_that__org_patternfly_component_menu_PopperMultiSelect() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperMultiSelect} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_PopperMultiSelect();
 }
 /** @nodts */
 static $clinit() {
  PopperMultiSelect.$clinit = () =>{};
  PopperMultiSelect.$loadModules();
  PopperMultiMenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperMultiSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Badge = goog.module.get('org.patternfly.component.badge.Badge$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
 }
}
$Util.$setClassMetadata(PopperMultiSelect, 'org.patternfly.component.menu.PopperMultiSelect');

exports = PopperMultiSelect;

//# sourceMappingURL=PopperMultiSelect.js.map
