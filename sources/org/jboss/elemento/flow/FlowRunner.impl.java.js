goog.module('org.jboss.elemento.flow.FlowRunner$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Promisable = goog.require('org.jboss.elemento.flow.Promisable$impl');
const Subscription = goog.require('org.jboss.elemento.flow.Subscription$impl');

let $Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let FlowCallback = goog.forwardDeclare('org.jboss.elemento.flow.FlowCallback$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let FlowStatus = goog.forwardDeclare('org.jboss.elemento.flow.FlowStatus$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template C
 * @implements {Promisable<C>}
 * @implements {Subscription<C>}
 */
class FlowRunner extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {C} @nodts*/
  this.f_context__org_jboss_elemento_flow_FlowRunner;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_FlowRunner__org_jboss_elemento_flow_FlowContext__int__void(/** C */ context, /** number */ tasks) {
  this.$ctor__java_lang_Object__void();
  this.f_context__org_jboss_elemento_flow_FlowRunner = context;
  if (tasks > 1) {
   (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_progress__org_jboss_elemento_flow_FlowContext.m_reset__int__void(tasks);
  } else {
   (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_progress__org_jboss_elemento_flow_FlowContext.m_reset__void();
  }
 }
 /** @override @nodts @template V @return {Promise<V>} */
 m_then__elemental2_promise_IThenable_ThenOnFulfilledCallbackFn__elemental2_promise_Promise(/** ?function(?):IThenable<?> */ onFulfilled) {
  return /**@type {!Promise<V>}*/ (this.m_runAndCatch__boolean__elemental2_promise_Promise_$pp_org_jboss_elemento_flow(true).then(onFulfilled));
 }
 /** @override @nodts @template V @return {Promise<V>} */
 m_then__elemental2_promise_IThenable_ThenOnFulfilledCallbackFn__elemental2_promise_IThenable_ThenOnRejectedCallbackFn__elemental2_promise_Promise(/** ?function(?):IThenable<?> */ onFulfilled, /** ?function(!*):IThenable<?> */ onRejected) {
  return /**@type {!Promise<V>}*/ (this.m_runAndCatch__boolean__elemental2_promise_Promise_$pp_org_jboss_elemento_flow(true).then(onFulfilled, onRejected));
 }
 /** @override @nodts @template V @return {Promise<V>} */
 m_catch___elemental2_promise_Promise_CatchOnRejectedCallbackFn__elemental2_promise_Promise(/** ?function(!*):IThenable<?> */ onRejected) {
  return /**@type {!Promise<V>}*/ (this.m_runAndCatch__boolean__elemental2_promise_Promise_$pp_org_jboss_elemento_flow(true).catch(onRejected));
 }
 /** @override @nodts @return {Promise<C>} */
 m_finally___elemental2_promise_Promise_FinallyOnFinallyCallbackFn__elemental2_promise_Promise(/** ?function():void */ onFinally) {
  return this.m_runAndCatch__boolean__elemental2_promise_Promise_$pp_org_jboss_elemento_flow(true).finally(onFinally);
 }
 /** @override @nodts @return {Promise<C>} */
 m_promise__elemental2_promise_Promise() {
  return this.m_runAndCatch__boolean__elemental2_promise_Promise_$pp_org_jboss_elemento_flow(true);
 }
 /** @override @nodts */
 m_subscribe__org_jboss_elemento_flow_FlowCallback__void(/** FlowCallback<C> */ callback) {
  this.m_runAndCatch__boolean__elemental2_promise_Promise_$pp_org_jboss_elemento_flow(false).then(/**  @return {IThenable<*>}*/ ((/** C */ c) =>{
   let c_1 = /**@type {C}*/ ($Casts.$to(c, FlowContext));
   callback.m_finish__org_jboss_elemento_flow_FlowContext__void(c_1);
   return null;
  }));
 }
 /** @nodts @return {Promise<C>} */
 m_runAndCatch__boolean__elemental2_promise_Promise_$pp_org_jboss_elemento_flow(/** boolean */ rejectOnError) {
  (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_status__org_jboss_elemento_flow_FlowContext = FlowStatus.f_IN_PROGRESS__org_jboss_elemento_flow_FlowStatus;
  return /**@type {!Promise<C>}*/ ((/**@type {!Promise<C>}*/ (this.m_run__elemental2_promise_Promise_$pp_org_jboss_elemento_flow().then(/**  @return {IThenable<C>}*/ ((/** C */ c) =>{
   let c_1 = /**@type {C}*/ ($Casts.$to(c, FlowContext));
   (/**@type {!FlowContext}*/ (c_1)).f_status__org_jboss_elemento_flow_FlowContext = FlowStatus.f_SUCCESS__org_jboss_elemento_flow_FlowStatus;
   return /**@type {!Promise<C>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(c_1));
  })))).catch(/**  @return {IThenable<C>}*/ ((/** !* */ error) =>{
   if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(FlowRunner.f_TIMEOUT_ERROR__org_jboss_elemento_flow_FlowRunner, error)) {
    (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_status__org_jboss_elemento_flow_FlowContext = FlowStatus.f_TIMEOUT__org_jboss_elemento_flow_FlowStatus;
   } else {
    (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_status__org_jboss_elemento_flow_FlowContext = FlowStatus.f_FAILURE__org_jboss_elemento_flow_FlowStatus;
    (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_failure__org_jboss_elemento_flow_FlowContext = j_l_String.m_valueOf__java_lang_Object__java_lang_String(error);
   }
   if (rejectOnError) {
    return /**@type {!Promise<C>}*/ (Promise.reject(error));
   } else {
    return /**@type {!Promise<C>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(this.f_context__org_jboss_elemento_flow_FlowRunner));
   }
  })));
 }
 /** @abstract @nodts @return {Promise<C>} */
 m_run__elemental2_promise_Promise_$pp_org_jboss_elemento_flow() {}
 /** @nodts */
 static $clinit() {
  FlowRunner.$clinit = () =>{};
  FlowRunner.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FlowRunner;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  FlowContext = goog.module.get('org.jboss.elemento.flow.FlowContext$impl');
  FlowStatus = goog.module.get('org.jboss.elemento.flow.FlowStatus$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FlowRunner.f_TIMEOUT_ERROR__org_jboss_elemento_flow_FlowRunner = 'flow.timeout';
Promisable.$markImplementor(FlowRunner);
Subscription.$markImplementor(FlowRunner);
$Util.$setClassMetadata(FlowRunner, 'org.jboss.elemento.flow.FlowRunner');

exports = FlowRunner;

//# sourceMappingURL=FlowRunner.js.map
