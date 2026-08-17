goog.module('org.patternfly.component.menu.StayOpenPredicate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.menu.StayOpenPredicate.$LambdaAdaptor$impl');

/**
 * @interface
 */
class StayOpenPredicate {
 /** @abstract @nodts @return {boolean} */
 m_test__elemental2_dom_Event__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Menu__boolean(/** Event */ event, /** MenuToggle */ menuToggle, /** Menu */ menu) {}
 /** @abstract @nodts @return {StayOpenPredicate} */
 m_and__org_patternfly_component_menu_StayOpenPredicate__org_patternfly_component_menu_StayOpenPredicate(/** StayOpenPredicate */ other) {}
 /** @abstract @nodts @return {StayOpenPredicate} */
 m_or__org_patternfly_component_menu_StayOpenPredicate__org_patternfly_component_menu_StayOpenPredicate(/** StayOpenPredicate */ other) {}
 /** @nodts @return {!StayOpenPredicate} */
 static $adapt(/** ?function(Event, MenuToggle, Menu):boolean */ fn) {
  StayOpenPredicate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {StayOpenPredicate} */
 static m_and__$default__org_patternfly_component_menu_StayOpenPredicate__org_patternfly_component_menu_StayOpenPredicate__org_patternfly_component_menu_StayOpenPredicate(/** !StayOpenPredicate */ $thisArg, /** StayOpenPredicate */ other) {
  StayOpenPredicate.$clinit();
  Objects.m_requireNonNull__java_lang_Object__java_lang_Object(other);
  return StayOpenPredicate.$adapt(/**  @return {boolean}*/ ((/** Event */ event, /** MenuToggle */ menuToggle, /** Menu */ menu) =>{
   return $thisArg.m_test__elemental2_dom_Event__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Menu__boolean(event, menuToggle, menu) && other.m_test__elemental2_dom_Event__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Menu__boolean(event, menuToggle, menu);
  }));
 }
 /** @nodts @return {StayOpenPredicate} */
 static m_or__$default__org_patternfly_component_menu_StayOpenPredicate__org_patternfly_component_menu_StayOpenPredicate__org_patternfly_component_menu_StayOpenPredicate(/** !StayOpenPredicate */ $thisArg, /** StayOpenPredicate */ other) {
  StayOpenPredicate.$clinit();
  Objects.m_requireNonNull__java_lang_Object__java_lang_Object(other);
  return StayOpenPredicate.$adapt(/**  @return {boolean}*/ ((/** Event */ event, /** MenuToggle */ menuToggle, /** Menu */ menu) =>{
   return $thisArg.m_test__elemental2_dom_Event__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Menu__boolean(event, menuToggle, menu) || other.m_test__elemental2_dom_Event__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Menu__boolean(event, menuToggle, menu);
  }));
 }
 /** @nodts */
 static $clinit() {
  StayOpenPredicate.$clinit = () =>{};
  StayOpenPredicate.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_menu_StayOpenPredicate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_menu_StayOpenPredicate;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  $LambdaAdaptor = goog.module.get('org.patternfly.component.menu.StayOpenPredicate.$LambdaAdaptor$impl');
 }
}
StayOpenPredicate.$markImplementor(/**@type {Function}*/ (StayOpenPredicate));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (StayOpenPredicate), 'org.patternfly.component.menu.StayOpenPredicate');

exports = StayOpenPredicate;

//# sourceMappingURL=StayOpenPredicate.js.map
