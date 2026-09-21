goog.module('org.jboss.elemento.flow.RepeatImpl$impl');

const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FlowRunner = goog.require('org.jboss.elemento.flow.FlowRunner$impl');
const Repeat = goog.require('org.jboss.elemento.flow.Repeat$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let ResolveCallbackFn_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let Task = goog.forwardDeclare('org.jboss.elemento.flow.Task$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @template C
 * @extends {FlowRunner<C>}
 * @implements {Repeat<C>}
 */
class RepeatImpl extends FlowRunner {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Task<C>} @nodts*/
  this.f_task__org_jboss_elemento_flow_RepeatImpl_;
  /**@type {Predicate<C>} @nodts*/
  this.f_predicate__org_jboss_elemento_flow_RepeatImpl_;
  /**@type {boolean} @nodts*/
  this.f_finished__org_jboss_elemento_flow_RepeatImpl_ = false;
  /**@type {boolean} @nodts*/
  this.f_failFast__org_jboss_elemento_flow_RepeatImpl_ = false;
  /**@type {!$Long} @nodts*/
  this.f_interval__org_jboss_elemento_flow_RepeatImpl_ = $Long.fromInt(0);
  /**@type {!$Long} @nodts*/
  this.f_timeout__org_jboss_elemento_flow_RepeatImpl_ = $Long.fromInt(0);
  /**@type {number} @nodts*/
  this.f_iterations__org_jboss_elemento_flow_RepeatImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_index__org_jboss_elemento_flow_RepeatImpl_ = 0;
  /**@type {?string} @nodts*/
  this.f_lastFailure__org_jboss_elemento_flow_RepeatImpl_;
  /**@type {number} @nodts*/
  this.f_timeoutHandle__org_jboss_elemento_flow_RepeatImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_intervalHandle__org_jboss_elemento_flow_RepeatImpl_ = 0;
 }
 /** @nodts @template C @return {!RepeatImpl<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task(/** C */ context, /** Task<C> */ task) {
  RepeatImpl.$clinit();
  let $instance = new RepeatImpl();
  $instance.$ctor__org_jboss_elemento_flow_RepeatImpl__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__void(context, task);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_RepeatImpl__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__void(/** C */ context, /** Task<C> */ task) {
  this.$ctor__org_jboss_elemento_flow_FlowRunner__org_jboss_elemento_flow_FlowContext__int__void(context, 1);
  this.f_task__org_jboss_elemento_flow_RepeatImpl_ = task;
  this.f_predicate__org_jboss_elemento_flow_RepeatImpl_ = Predicate.$adapt(/**  @return {boolean}*/ ((/** C */ __) =>{
   let ___1 = /**@type {C}*/ ($Casts.$to(__, FlowContext));
   return true;
  }));
  this.f_finished__org_jboss_elemento_flow_RepeatImpl_ = false;
  this.f_failFast__org_jboss_elemento_flow_RepeatImpl_ = Repeat.f_DEFAULT_FAIL_FAST__org_jboss_elemento_flow_Repeat;
  this.f_interval__org_jboss_elemento_flow_RepeatImpl_ = Repeat.f_DEFAULT_INTERVAL__org_jboss_elemento_flow_Repeat;
  this.f_timeout__org_jboss_elemento_flow_RepeatImpl_ = Repeat.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Repeat;
  this.f_iterations__org_jboss_elemento_flow_RepeatImpl_ = Repeat.f_DEFAULT_ITERATIONS__org_jboss_elemento_flow_Repeat;
  this.f_index__org_jboss_elemento_flow_RepeatImpl_ = 0;
  this.f_lastFailure__org_jboss_elemento_flow_RepeatImpl_ = null;
  this.f_timeoutHandle__org_jboss_elemento_flow_RepeatImpl_ = 0;
  this.f_intervalHandle__org_jboss_elemento_flow_RepeatImpl_ = 0;
 }
 /** @override @nodts @return {Repeat<C>} */
 m_while___java_util_function_Predicate__org_jboss_elemento_flow_Repeat(/** Predicate<C> */ predicate) {
  this.f_predicate__org_jboss_elemento_flow_RepeatImpl_ = predicate;
  return this;
 }
 /** @override @nodts @return {Repeat<C>} */
 m_failFast__boolean__org_jboss_elemento_flow_Repeat(/** boolean */ failFast) {
  this.f_failFast__org_jboss_elemento_flow_RepeatImpl_ = failFast;
  return this;
 }
 /** @override @nodts @return {Repeat<C>} */
 m_interval__long__org_jboss_elemento_flow_Repeat(/** !$Long */ interval) {
  this.f_interval__org_jboss_elemento_flow_RepeatImpl_ = interval;
  return this;
 }
 /** @override @nodts @return {Repeat<C>} */
 m_timeout__long__org_jboss_elemento_flow_Repeat(/** !$Long */ timeout) {
  this.f_timeout__org_jboss_elemento_flow_RepeatImpl_ = timeout;
  return this;
 }
 /** @override @nodts @return {Repeat<C>} */
 m_iterations__int__org_jboss_elemento_flow_Repeat(/** number */ iterations) {
  this.f_iterations__org_jboss_elemento_flow_RepeatImpl_ = iterations;
  return this;
 }
 /** @override @nodts @return {Promise<C>} */
 m_run__elemental2_promise_Promise_$pp_org_jboss_elemento_flow() {
  return /**@type {!Promise<C>}*/ (new Promise((/** function(?):void */ resolve, /** function(!*):void */ reject) =>{
   this.f_timeoutHandle__org_jboss_elemento_flow_RepeatImpl_ = $Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
    this.m_cancel__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__java_lang_String__void_$p_org_jboss_elemento_flow_RepeatImpl(reject, FlowRunner.f_TIMEOUT_ERROR__org_jboss_elemento_flow_FlowRunner);
   }, Primitives.m_widenLongToDouble__long__double(this.f_timeout__org_jboss_elemento_flow_RepeatImpl_), []);
   if (!this.f_predicate__org_jboss_elemento_flow_RepeatImpl_.m_test__java_lang_Object__boolean(this.f_context__org_jboss_elemento_flow_FlowRunner)) {
    this.m_finish__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__org_jboss_elemento_flow_FlowContext__void_$p_org_jboss_elemento_flow_RepeatImpl(resolve, this.f_context__org_jboss_elemento_flow_FlowRunner);
   }
   this.m_until__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_RepeatImpl(resolve, reject);
  }));
 }
 /** @nodts */
 m_until__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_RepeatImpl(/** ?function(?):void */ resolve, /** ?function(!*):void */ reject) {
  if (!this.f_finished__org_jboss_elemento_flow_RepeatImpl_) {
   if (this.f_failFast__org_jboss_elemento_flow_RepeatImpl_ && !$Equality.$same(this.f_lastFailure__org_jboss_elemento_flow_RepeatImpl_, null)) {
    this.m_cancel__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__java_lang_String__void_$p_org_jboss_elemento_flow_RepeatImpl(reject, this.f_lastFailure__org_jboss_elemento_flow_RepeatImpl_);
   } else {
    (/**@type {!Promise<!*>}*/ (this.f_task__org_jboss_elemento_flow_RepeatImpl_.m_apply__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise(this.f_context__org_jboss_elemento_flow_FlowRunner).then(/**  @return {IThenable<*>}*/ ((/** C */ c) =>{
     let c_1 = /**@type {C}*/ ($Casts.$to(c, FlowContext));
     this.f_index__org_jboss_elemento_flow_RepeatImpl_ = this.f_index__org_jboss_elemento_flow_RepeatImpl_ + 1 | 0;
     (/**@type {!FlowContext}*/ (c_1)).f_progress__org_jboss_elemento_flow_FlowContext.m_tick__void();
     if (this.m_areWeDone__org_jboss_elemento_flow_FlowContext__boolean_$p_org_jboss_elemento_flow_RepeatImpl(c_1)) {
      this.m_finish__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__org_jboss_elemento_flow_FlowContext__void_$p_org_jboss_elemento_flow_RepeatImpl(resolve, c_1);
     }
     if ($LongUtils.notEquals(this.f_interval__org_jboss_elemento_flow_RepeatImpl_, $Long.fromInt(0))) {
      this.f_intervalHandle__org_jboss_elemento_flow_RepeatImpl_ = $Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
       this.m_until__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_RepeatImpl(resolve, reject);
      }, Primitives.m_widenLongToDouble__long__double(this.f_interval__org_jboss_elemento_flow_RepeatImpl_), []);
     } else {
      this.m_until__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_RepeatImpl(resolve, reject);
     }
     return null;
    })))).catch(/**  @return {IThenable<*>}*/ ((/** !* */ error) =>{
     this.f_lastFailure__org_jboss_elemento_flow_RepeatImpl_ = j_l_String.m_valueOf__java_lang_Object__java_lang_String(error);
     if (this.f_failFast__org_jboss_elemento_flow_RepeatImpl_) {
      this.m_cancel__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__java_lang_String__void_$p_org_jboss_elemento_flow_RepeatImpl(reject, this.f_lastFailure__org_jboss_elemento_flow_RepeatImpl_);
     }
     return null;
    }));
   }
  }
 }
 /** @nodts @return {boolean} */
 m_areWeDone__org_jboss_elemento_flow_FlowContext__boolean_$p_org_jboss_elemento_flow_RepeatImpl(/** C */ context) {
  if (this.f_iterations__org_jboss_elemento_flow_RepeatImpl_ > 0) {
   return this.f_index__org_jboss_elemento_flow_RepeatImpl_ == this.f_iterations__org_jboss_elemento_flow_RepeatImpl_ || !this.f_predicate__org_jboss_elemento_flow_RepeatImpl_.m_test__java_lang_Object__boolean(context);
  } else {
   return !this.f_predicate__org_jboss_elemento_flow_RepeatImpl_.m_test__java_lang_Object__boolean(context);
  }
 }
 /** @nodts */
 m_finish__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__org_jboss_elemento_flow_FlowContext__void_$p_org_jboss_elemento_flow_RepeatImpl(/** ?function(?):void */ resolve, /** C */ context) {
  this.f_finished__org_jboss_elemento_flow_RepeatImpl_ = true;
  this.m_cleanup__void_$p_org_jboss_elemento_flow_RepeatImpl();
  (/**@type {!FlowContext}*/ (context)).f_progress__org_jboss_elemento_flow_FlowContext.m_finish__void();
  ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(resolve, context);
 }
 /** @nodts */
 m_cancel__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__java_lang_String__void_$p_org_jboss_elemento_flow_RepeatImpl(/** ?function(!*):void */ reject, /** ?string */ reason) {
  this.m_cleanup__void_$p_org_jboss_elemento_flow_RepeatImpl();
  reject(reason);
 }
 /** @nodts */
 m_cleanup__void_$p_org_jboss_elemento_flow_RepeatImpl() {
  goog.global.clearTimeout(this.f_intervalHandle__org_jboss_elemento_flow_RepeatImpl_);
  goog.global.clearTimeout(this.f_timeoutHandle__org_jboss_elemento_flow_RepeatImpl_);
 }
 /** @nodts */
 static $clinit() {
  RepeatImpl.$clinit = () =>{};
  RepeatImpl.$loadModules();
  FlowRunner.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RepeatImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  ResolveCallbackFn_$Overlay = goog.module.get('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FlowContext = goog.module.get('org.jboss.elemento.flow.FlowContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
Repeat.$markImplementor(RepeatImpl);
$Util.$setClassMetadata(RepeatImpl, 'org.jboss.elemento.flow.RepeatImpl');

exports = RepeatImpl;

//# sourceMappingURL=RepeatImpl.js.map
