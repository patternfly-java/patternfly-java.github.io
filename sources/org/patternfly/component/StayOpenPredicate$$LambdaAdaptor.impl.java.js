goog.module('org.patternfly.component.StayOpenPredicate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const StayOpenPredicate = goog.require('org.patternfly.component.StayOpenPredicate$impl');

let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');

/**
 * @template C
 * @implements {StayOpenPredicate<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, C, Menu):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, C, Menu):boolean} @nodts*/
  this.f_fn__org_patternfly_component_StayOpenPredicate_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_StayOpenPredicate_$LambdaAdaptor__org_patternfly_component_StayOpenPredicate_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_StayOpenPredicate_$LambdaAdaptor__org_patternfly_component_StayOpenPredicate_$JsFunction__void(/** ?function(Event, C, Menu):boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_StayOpenPredicate_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {boolean} */
 m_test__elemental2_dom_Event__java_lang_Object__org_patternfly_component_menu_Menu__boolean(/** Event */ arg0, /** C */ arg1, /** Menu */ arg2) {
  let /** ?function(Event, C, Menu):boolean */ $function;
  return ($function = this.f_fn__org_patternfly_component_StayOpenPredicate_$LambdaAdaptor, $function(arg0, arg1, arg2));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {StayOpenPredicate<C>} */
 m_and__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate(/** StayOpenPredicate<C> */ arg0) {
  return StayOpenPredicate.m_and__$default__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {StayOpenPredicate<C>} */
 m_or__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate(/** StayOpenPredicate<C> */ arg0) {
  return StayOpenPredicate.m_or__$default__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate__org_patternfly_component_StayOpenPredicate(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  StayOpenPredicate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
StayOpenPredicate.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.StayOpenPredicate$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=StayOpenPredicate$$LambdaAdaptor.js.map
