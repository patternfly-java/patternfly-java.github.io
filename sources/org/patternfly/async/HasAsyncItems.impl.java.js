goog.module('org.patternfly.async.HasAsyncItems$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.async.AsyncItems$impl');
let AsyncStatus = goog.forwardDeclare('org.patternfly.async.AsyncStatus$impl');

/**
 * @interface
 * @template C, S
 */
class HasAsyncItems {
 /** @abstract @nodts @return {C} */
 m_addItems__org_patternfly_async_AsyncItems__java_lang_Object(/** AsyncItems<C, S> */ items) {}
 /** @abstract @nodts @return {C} */
 m_add__org_patternfly_async_AsyncItems__java_lang_Object(/** AsyncItems<C, S> */ items) {}
 /** @abstract @nodts @return {Promise<Iterable<S>>} */
 m_load__elemental2_promise_Promise() {}
 /** @abstract @nodts @return {Promise<Iterable<S>>} */
 m_reload__elemental2_promise_Promise() {}
 /** @abstract @nodts */
 m_reset__void() {}
 /** @abstract @nodts @return {AsyncStatus} */
 m_status__org_patternfly_async_AsyncStatus() {}
 /** @nodts @template C, S @return {C} */
 static m_addItems__$default__org_patternfly_async_HasAsyncItems__org_patternfly_async_AsyncItems__java_lang_Object(/** !HasAsyncItems<C, S> */ $thisArg, /** AsyncItems<C, S> */ items) {
  HasAsyncItems.$clinit();
  return $thisArg.m_add__org_patternfly_async_AsyncItems__java_lang_Object(items);
 }
 /** @nodts */
 static $clinit() {
  HasAsyncItems.$clinit = () =>{};
  HasAsyncItems.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_async_HasAsyncItems = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_async_HasAsyncItems;
 }
 
 /** @nodts */
 static $loadModules() {}
}
HasAsyncItems.$markImplementor(/**@type {Function}*/ (HasAsyncItems));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HasAsyncItems), 'org.patternfly.async.HasAsyncItems');

exports = HasAsyncItems;

//# sourceMappingURL=HasAsyncItems.js.map
