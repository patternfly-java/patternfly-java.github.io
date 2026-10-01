goog.module('org.patternfly.component.StayOpenPredicate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.StayOpenPredicate.$LambdaAdaptor$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');

/**
 * @interface
 * @template C
 */
class StayOpenPredicate {
 /** @abstract @nodts @return {boolean} */
 m_test__elemental2_dom_Event__java_lang_Object__org_patternfly_component_menu_Menu__boolean(/** Event */ event, /** C */ component, /** Menu */ menu) {}
 /** @abstract @nodts @return {StayOpenPredicate<C>} */
 m_and__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate(/** StayOpenPredicate<C> */ other) {}
 /** @abstract @nodts @return {StayOpenPredicate<C>} */
 m_or__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate(/** StayOpenPredicate<C> */ other) {}
 /** @nodts @template C @return {!StayOpenPredicate<C>} */
 static $adapt(/** ?function(Event, C, Menu):boolean */ fn) {
  StayOpenPredicate.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template C @return {StayOpenPredicate<C>} */
 static m_and__$default__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate(/** !StayOpenPredicate<C> */ $thisArg, /** StayOpenPredicate<C> */ other) {
  StayOpenPredicate.$clinit();
  Objects.m_requireNonNull__java_lang_Object__java_lang_Object(other);
  return StayOpenPredicate.$adapt(/**  @return {boolean}*/ ((/** Event */ event, /** C */ component, /** Menu */ menu) =>{
   return $thisArg.m_test__elemental2_dom_Event__java_lang_Object__org_patternfly_component_menu_Menu__boolean(event, component, menu) && other.m_test__elemental2_dom_Event__java_lang_Object__org_patternfly_component_menu_Menu__boolean(event, component, menu);
  }));
 }
 /** @nodts @template C @return {StayOpenPredicate<C>} */
 static m_or__$default__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate(/** !StayOpenPredicate<C> */ $thisArg, /** StayOpenPredicate<C> */ other) {
  StayOpenPredicate.$clinit();
  Objects.m_requireNonNull__java_lang_Object__java_lang_Object(other);
  return StayOpenPredicate.$adapt(/**  @return {boolean}*/ ((/** Event */ event, /** C */ component, /** Menu */ menu) =>{
   return $thisArg.m_test__elemental2_dom_Event__java_lang_Object__org_patternfly_component_menu_Menu__boolean(event, component, menu) || other.m_test__elemental2_dom_Event__java_lang_Object__org_patternfly_component_menu_Menu__boolean(event, component, menu);
  }));
 }
 /** @nodts */
 static $clinit() {
  StayOpenPredicate.$clinit = () =>{};
  StayOpenPredicate.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_StayOpenPredicate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_StayOpenPredicate;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  $LambdaAdaptor = goog.module.get('org.patternfly.component.StayOpenPredicate.$LambdaAdaptor$impl');
 }
}
StayOpenPredicate.$markImplementor(/**@type {Function}*/ (StayOpenPredicate));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (StayOpenPredicate), 'org.patternfly.component.StayOpenPredicate');

exports = StayOpenPredicate;

//# sourceMappingURL=StayOpenPredicate.js.map
