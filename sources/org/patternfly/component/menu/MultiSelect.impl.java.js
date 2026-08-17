goog.module('org.patternfly.component.menu.MultiSelect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MultiMenuToggleMenu = goog.require('org.patternfly.component.menu.MultiMenuToggleMenu$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let StayOpenPredicate = goog.forwardDeclare('org.patternfly.component.menu.StayOpenPredicate$impl');

/**
 * @extends {MultiMenuToggleMenu<MultiSelect>}
 */
class MultiSelect extends MultiMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MultiSelect} */
 static m_multiSelect__java_lang_String__org_patternfly_component_menu_MultiSelect(/** ?string */ text) {
  MultiSelect.$clinit();
  return MultiSelect.$create__org_patternfly_component_menu_MenuToggle(MenuToggle.m_menuToggle__java_lang_String__org_patternfly_component_menu_MenuToggle(text).m_addBadge__org_patternfly_component_badge_Badge__org_patternfly_component_menu_MenuToggle(Badge.m_badge__int__org_patternfly_component_badge_Badge(0).m_read__org_patternfly_component_badge_Badge()));
 }
 /** @nodts @return {MultiSelect} */
 static m_multiSelect__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_MultiSelect(/** MenuToggle */ menuToggle) {
  MultiSelect.$clinit();
  return MultiSelect.$create__org_patternfly_component_menu_MenuToggle(menuToggle);
 }
 /** @nodts @return {!MultiSelect} */
 static $create__org_patternfly_component_menu_MenuToggle(/** MenuToggle */ menuToggle) {
  MultiSelect.$clinit();
  let $instance = new MultiSelect();
  $instance.$ctor__org_patternfly_component_menu_MultiSelect__org_patternfly_component_menu_MenuToggle__void(menuToggle);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MultiSelect__org_patternfly_component_menu_MenuToggle__void(/** MenuToggle */ menuToggle) {
  this.$ctor__org_patternfly_component_menu_MultiMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__void(ComponentType.f_MultiSelect__org_patternfly_component_ComponentType, menuToggle);
  if (!$Equality.$same(menuToggle.m_badge__org_patternfly_component_badge_Badge(), null)) {
   menuToggle.m_badge__org_patternfly_component_badge_Badge().m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('visibility', 'hidden', true);
  }
  this.m_stayOpen__org_patternfly_component_menu_StayOpenPredicate__org_jboss_elemento_TypedBuilder(StayOpenPredicate.$adapt(/**  @return {boolean}*/ ((/** Event */ e, /** MenuToggle */ mt, /** Menu */ m) =>{
   return this.m_menuItemClick__elemental2_dom_Event__boolean_$pp_org_patternfly_component_menu(e);
  })));
 }
 /** @override @nodts */
 m_updateMenuToggle__java_util_List__void_$pp_org_patternfly_component_menu(/** List<MenuItem> */ items) {
  let badge = this.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_badge__org_patternfly_component_badge_Badge();
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
 /** @nodts @return {MultiSelect} */
 m_that__org_patternfly_component_menu_MultiSelect() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiSelect} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MultiSelect();
 }
 /** @nodts */
 static $clinit() {
  MultiSelect.$clinit = () =>{};
  MultiSelect.$loadModules();
  MultiMenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MultiSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Badge = goog.module.get('org.patternfly.component.badge.Badge$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  StayOpenPredicate = goog.module.get('org.patternfly.component.menu.StayOpenPredicate$impl');
 }
}
$Util.$setClassMetadata(MultiSelect, 'org.patternfly.component.menu.MultiSelect');

exports = MultiSelect;

//# sourceMappingURL=MultiSelect.js.map
