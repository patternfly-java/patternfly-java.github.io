goog.module('org.jboss.elemento.flow.Promisable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');

/**
 * @interface
 * @template C
 */
class Promisable {
 /** @abstract @nodts @template V @return {Promise<V>} */
 m_then__elemental2_promise_IThenable_ThenOnFulfilledCallbackFn__elemental2_promise_Promise(/** ?function(?):IThenable<?> */ onFulfilled) {}
 /** @abstract @nodts @template V @return {Promise<V>} */
 m_then__elemental2_promise_IThenable_ThenOnFulfilledCallbackFn__elemental2_promise_IThenable_ThenOnRejectedCallbackFn__elemental2_promise_Promise(/** ?function(?):IThenable<?> */ onFulfilled, /** ?function(!*):IThenable<?> */ onRejected) {}
 /** @abstract @nodts @template V @return {Promise<V>} */
 m_catch___elemental2_promise_Promise_CatchOnRejectedCallbackFn__elemental2_promise_Promise(/** ?function(!*):IThenable<?> */ onRejected) {}
 /** @abstract @nodts @return {Promise<C>} */
 m_finally___elemental2_promise_Promise_FinallyOnFinallyCallbackFn__elemental2_promise_Promise(/** ?function():void */ onFinally) {}
 /** @abstract @nodts @return {Promise<C>} */
 m_promise__elemental2_promise_Promise() {}
 /** @nodts */
 static $clinit() {
  Promisable.$clinit = () =>{};
  Promisable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_flow_Promisable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_flow_Promisable;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Promisable.$markImplementor(/**@type {Function}*/ (Promisable));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Promisable), 'org.jboss.elemento.flow.Promisable');

exports = Promisable;

//# sourceMappingURL=Promisable.js.map
