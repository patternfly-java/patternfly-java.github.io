goog.module('org.patternfly.component.HasAsyncItems$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.component.AsyncItems$impl');
let HasIdentifier = goog.forwardDeclare('org.patternfly.component.HasIdentifier$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let AsyncStatus = goog.forwardDeclare('org.patternfly.core.AsyncStatus$impl');

/**
 * @interface
 * @template E, C, S
 */
class HasAsyncItems {
 /** @abstract @nodts @return {C} */
 m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** AsyncItems<C, S> */ items) {}
 /** @abstract @nodts @return {C} */
 m_add__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** AsyncItems<C, S> */ items) {}
 /** @abstract @nodts @return {Promise<Iterable<S>>} */
 m_load__elemental2_promise_Promise() {}
 /** @abstract @nodts @return {Promise<Iterable<S>>} */
 m_reload__elemental2_promise_Promise() {}
 /** @abstract @nodts */
 m_reset__void() {}
 /** @abstract @nodts @return {AsyncStatus} */
 m_status__org_patternfly_core_AsyncStatus() {}
 /** @nodts @template E, C, S @return {C} */
 static m_addItems__$default__org_patternfly_component_HasAsyncItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** !HasAsyncItems<E, C, S> */ $thisArg, /** AsyncItems<C, S> */ items) {
  HasAsyncItems.$clinit();
  return $thisArg.m_add__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(items);
 }
 /** @nodts */
 static $clinit() {
  HasAsyncItems.$clinit = () =>{};
  HasAsyncItems.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_HasAsyncItems = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_HasAsyncItems;
 }
 
 /** @nodts */
 static $loadModules() {}
}
HasAsyncItems.$markImplementor(/**@type {Function}*/ (HasAsyncItems));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HasAsyncItems), 'org.patternfly.component.HasAsyncItems');

exports = HasAsyncItems;

//# sourceMappingURL=HasAsyncItems.js.map
