goog.module('org.jboss.elemento.flow.SequenceImpl$impl');

const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FlowRunner = goog.require('org.jboss.elemento.flow.FlowRunner$impl');
const Sequence = goog.require('org.jboss.elemento.flow.Sequence$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let ResolveCallbackFn_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let j_l_Object = goog.forwardDeclare('java.lang.Object$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let IntFunction = goog.forwardDeclare('java.util.function.IntFunction$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let Mode = goog.forwardDeclare('org.jboss.elemento.flow.SequenceImpl.Mode$impl');
let Task = goog.forwardDeclare('org.jboss.elemento.flow.Task$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @template C
 * @extends {FlowRunner<C>}
 * @implements {Sequence<C>}
 */
class SequenceImpl extends FlowRunner {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Mode} @nodts*/
  this.f_mode__org_jboss_elemento_flow_SequenceImpl_;
  /**@type {List<Task<C>>} @nodts*/
  this.f_tasks__org_jboss_elemento_flow_SequenceImpl_;
  /**@type {Iterator<Task<C>>} @nodts*/
  this.f_iterator__org_jboss_elemento_flow_SequenceImpl_;
  /**@type {boolean} @nodts*/
  this.f_failFast__org_jboss_elemento_flow_SequenceImpl_ = false;
  /**@type {!$Long} @nodts*/
  this.f_timeout__org_jboss_elemento_flow_SequenceImpl_ = $Long.fromInt(0);
  /**@type {number} @nodts*/
  this.f_timeoutHandle__org_jboss_elemento_flow_SequenceImpl_ = 0;
  /**@type {boolean} @nodts*/
  this.f_timedOut__org_jboss_elemento_flow_SequenceImpl_ = false;
 }
 /** @nodts @template C @return {!SequenceImpl<C>} */
 static $create__org_jboss_elemento_flow_SequenceImpl_Mode__org_jboss_elemento_flow_FlowContext__java_util_List(/** Mode */ mode, /** C */ context, /** List<Task<C>> */ tasks) {
  SequenceImpl.$clinit();
  let $instance = new SequenceImpl();
  $instance.$ctor__org_jboss_elemento_flow_SequenceImpl__org_jboss_elemento_flow_SequenceImpl_Mode__org_jboss_elemento_flow_FlowContext__java_util_List__void(mode, context, tasks);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_SequenceImpl__org_jboss_elemento_flow_SequenceImpl_Mode__org_jboss_elemento_flow_FlowContext__java_util_List__void(/** Mode */ mode, /** C */ context, /** List<Task<C>> */ tasks) {
  this.$ctor__org_jboss_elemento_flow_FlowRunner__org_jboss_elemento_flow_FlowContext__int__void(context, tasks.size());
  this.f_mode__org_jboss_elemento_flow_SequenceImpl_ = mode;
  this.f_tasks__org_jboss_elemento_flow_SequenceImpl_ = tasks;
  this.f_iterator__org_jboss_elemento_flow_SequenceImpl_ = tasks.m_iterator__java_util_Iterator();
  this.f_failFast__org_jboss_elemento_flow_SequenceImpl_ = Sequence.f_DEFAULT_FAIL_FAST__org_jboss_elemento_flow_Sequence;
  this.f_timeout__org_jboss_elemento_flow_SequenceImpl_ = Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence;
  this.f_timeoutHandle__org_jboss_elemento_flow_SequenceImpl_ = 0;
  this.f_timedOut__org_jboss_elemento_flow_SequenceImpl_ = false;
 }
 /** @override @nodts @return {Sequence<C>} */
 m_failFast__boolean__org_jboss_elemento_flow_Sequence(/** boolean */ failFast) {
  this.f_failFast__org_jboss_elemento_flow_SequenceImpl_ = failFast;
  return this;
 }
 /** @override @nodts @return {Sequence<C>} */
 m_timeout__long__org_jboss_elemento_flow_Sequence(/** !$Long */ timeout) {
  this.f_timeout__org_jboss_elemento_flow_SequenceImpl_ = timeout;
  return this;
 }
 /** @override @nodts @return {Promise<C>} */
 m_run__elemental2_promise_Promise_$pp_org_jboss_elemento_flow() {
  if (this.f_tasks__org_jboss_elemento_flow_SequenceImpl_.isEmpty()) {
   return /**@type {!Promise<C>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(this.f_context__org_jboss_elemento_flow_FlowRunner));
  } else {
   switch (this.f_mode__org_jboss_elemento_flow_SequenceImpl_.ordinal()) {
    case Mode.$ordinal_PARALLEL__org_jboss_elemento_flow_SequenceImpl_Mode:
     return this.m_parallel__elemental2_promise_Promise_$p_org_jboss_elemento_flow_SequenceImpl();
    case Mode.$ordinal_SEQUENTIAL__org_jboss_elemento_flow_SequenceImpl_Mode:
     return this.m_sequential__elemental2_promise_Promise_$p_org_jboss_elemento_flow_SequenceImpl();
    default:
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalStateException.$create__java_lang_String('Unexpected flow execution mode: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_mode__org_jboss_elemento_flow_SequenceImpl_)));
   }
  }
 }
 /** @nodts @return {Promise<C>} */
 m_parallel__elemental2_promise_Promise_$p_org_jboss_elemento_flow_SequenceImpl() {
  let promises = /**@type {Array<Promise<C>>}*/ ($Arrays.$castToNative((/**@type {Stream<Promise<C>>}*/ (this.f_tasks__org_jboss_elemento_flow_SequenceImpl_.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {Promise<C>}*/ ((/** Task<C> */ task) =>{
   let task_1 = /**@type {Task<C>}*/ ($Casts.$to(task, /**@type {Function}*/ (Task)));
   return /**@type {!Promise<C>}*/ (task_1.m_apply__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise(this.f_context__org_jboss_elemento_flow_FlowRunner).then(/**  @return {IThenable<C>}*/ ((/** C */ c) =>{
    let c_1 = /**@type {C}*/ ($Casts.$to(c, FlowContext));
    (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_progress__org_jboss_elemento_flow_FlowContext.m_tick__void();
    return /**@type {!Promise<C>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(c_1));
   })));
  }))))).m_toArray__java_util_function_IntFunction__arrayOf_java_lang_Object(IntFunction.$adapt(/**  @return {Array<Promise>}*/ ((/** number */ arg0) =>{
   return new Array(arg0);
  })))));
  if (this.f_failFast__org_jboss_elemento_flow_SequenceImpl_) {
   return /**@type {!Promise<C>}*/ (Promise.all(promises).then(/**  @return {IThenable<C>}*/ ((/** Array<*> */ __) =>{
    let ___1 = /**@type {Array<*>}*/ ($Arrays.$castTo(__, j_l_Object, 1));
    (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_progress__org_jboss_elemento_flow_FlowContext.m_finish__void();
    return /**@type {!Promise<C>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(this.f_context__org_jboss_elemento_flow_FlowRunner));
   })));
  } else {
   return /**@type {!Promise<C>}*/ (Promise.allSettled(promises).then(/**  @return {IThenable<C>}*/ ((/** Array<*> */ ___2) =>{
    let ___3 = /**@type {Array<*>}*/ ($Arrays.$castTo(___2, j_l_Object, 1));
    (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_progress__org_jboss_elemento_flow_FlowContext.m_finish__void();
    return /**@type {!Promise<C>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(this.f_context__org_jboss_elemento_flow_FlowRunner));
   })));
  }
 }
 /** @nodts @return {Promise<C>} */
 m_sequential__elemental2_promise_Promise_$p_org_jboss_elemento_flow_SequenceImpl() {
  return /**@type {!Promise<C>}*/ ((/**@type {!Promise<C>}*/ ((/**@type {!Promise<C>}*/ (new Promise((/** function(?):void */ resolve, /** function(!*):void */ reject) =>{
   if ($LongUtils.greater(this.f_timeout__org_jboss_elemento_flow_SequenceImpl_, $Long.fromInt(0))) {
    this.f_timeoutHandle__org_jboss_elemento_flow_SequenceImpl_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
     this.m_rejectWithTimeout__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_SequenceImpl(reject);
    }, Primitives.m_widenLongToDouble__long__double(this.f_timeout__org_jboss_elemento_flow_SequenceImpl_), []);
   }
   this.m_next__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_SequenceImpl(resolve, reject);
  }))).then(/**  @return {IThenable<C>}*/ ((/** C */ c) =>{
   let c_1 = /**@type {C}*/ ($Casts.$to(c, FlowContext));
   (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_progress__org_jboss_elemento_flow_FlowContext.m_finish__void();
   return /**@type {!Promise<C>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(this.f_context__org_jboss_elemento_flow_FlowRunner));
  })))).catch(/**  @return {IThenable<C>}*/ ((/** !* */ arg0) =>{
   return /**@type {!Promise<C>}*/ (Promise.reject(arg0));
  })));
 }
 /** @nodts */
 m_next__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_SequenceImpl(/** ?function(?):void */ resolve, /** ?function(!*):void */ reject) {
  if (this.f_timedOut__org_jboss_elemento_flow_SequenceImpl_) {
   reject(FlowRunner.f_TIMEOUT_ERROR__org_jboss_elemento_flow_FlowRunner);
  } else {
   (/**@type {!Promise<!*>}*/ ((/**@type {Task<C>}*/ ($Casts.$to(this.f_iterator__org_jboss_elemento_flow_SequenceImpl_.m_next__java_lang_Object(), /**@type {Function}*/ (Task)))).m_apply__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise(this.f_context__org_jboss_elemento_flow_FlowRunner).then(/**  @return {IThenable<*>}*/ ((/** C */ c) =>{
    let c_1 = /**@type {C}*/ ($Casts.$to(c, FlowContext));
    if (this.f_timedOut__org_jboss_elemento_flow_SequenceImpl_) {
     reject(FlowRunner.f_TIMEOUT_ERROR__org_jboss_elemento_flow_FlowRunner);
    } else {
     if (this.f_iterator__org_jboss_elemento_flow_SequenceImpl_.m_hasNext__boolean()) {
      (/**@type {!FlowContext}*/ (c_1)).f_progress__org_jboss_elemento_flow_FlowContext.m_tick__void();
      this.m_next__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_SequenceImpl(resolve, reject);
     } else {
      ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(resolve, c_1);
     }
    }
    return null;
   })))).catch(/**  @return {IThenable<*>}*/ ((/** !* */ error) =>{
    if (this.f_failFast__org_jboss_elemento_flow_SequenceImpl_) {
     reject(error);
    } else {
     if (this.f_iterator__org_jboss_elemento_flow_SequenceImpl_.m_hasNext__boolean()) {
      (/**@type {!FlowContext}*/ (this.f_context__org_jboss_elemento_flow_FlowRunner)).f_progress__org_jboss_elemento_flow_FlowContext.m_tick__void();
      this.m_next__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_SequenceImpl(resolve, reject);
     } else {
      ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(resolve, this.f_context__org_jboss_elemento_flow_FlowRunner);
     }
    }
    return null;
   }));
  }
 }
 /** @nodts */
 m_rejectWithTimeout__elemental2_promise_Promise_PromiseExecutorCallbackFn_RejectCallbackFn__void_$p_org_jboss_elemento_flow_SequenceImpl(/** ?function(!*):void */ reject) {
  goog.global.clearTimeout(this.f_timeoutHandle__org_jboss_elemento_flow_SequenceImpl_);
  this.f_timedOut__org_jboss_elemento_flow_SequenceImpl_ = true;
  reject(FlowRunner.f_TIMEOUT_ERROR__org_jboss_elemento_flow_FlowRunner);
 }
 /** @nodts */
 static $clinit() {
  SequenceImpl.$clinit = () =>{};
  SequenceImpl.$loadModules();
  FlowRunner.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SequenceImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  ResolveCallbackFn_$Overlay = goog.module.get('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_Object = goog.module.get('java.lang.Object$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  IntFunction = goog.module.get('java.util.function.IntFunction$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  FlowContext = goog.module.get('org.jboss.elemento.flow.FlowContext$impl');
  Mode = goog.module.get('org.jboss.elemento.flow.SequenceImpl.Mode$impl');
  Task = goog.module.get('org.jboss.elemento.flow.Task$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
Sequence.$markImplementor(SequenceImpl);
$Util.$setClassMetadata(SequenceImpl, 'org.jboss.elemento.flow.SequenceImpl');

exports = SequenceImpl;

//# sourceMappingURL=SequenceImpl.js.map
