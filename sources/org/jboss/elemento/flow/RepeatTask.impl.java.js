goog.module('org.jboss.elemento.flow.RepeatTask$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Task = goog.require('org.jboss.elemento.flow.Task$impl');

let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Flow = goog.forwardDeclare('org.jboss.elemento.flow.Flow$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let Repeat = goog.forwardDeclare('org.jboss.elemento.flow.Repeat$impl');

/**
 * @template C
 * @implements {Task<C>}
 */
class RepeatTask extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {C} @nodts*/
  this.f_context__org_jboss_elemento_flow_RepeatTask_;
  /**@type {Task<C>} @nodts*/
  this.f_task__org_jboss_elemento_flow_RepeatTask_;
  /**@type {Predicate<C>} @nodts*/
  this.f_predicate__org_jboss_elemento_flow_RepeatTask_;
  /**@type {boolean} @nodts*/
  this.f_failFast__org_jboss_elemento_flow_RepeatTask_ = false;
  /**@type {!$Long} @nodts*/
  this.f_interval__org_jboss_elemento_flow_RepeatTask_ = $Long.fromInt(0);
  /**@type {!$Long} @nodts*/
  this.f_timeout__org_jboss_elemento_flow_RepeatTask_ = $Long.fromInt(0);
  /**@type {number} @nodts*/
  this.f_iterations__org_jboss_elemento_flow_RepeatTask_ = 0;
 }
 //Factory method corresponding to constructor 'RepeatTask(Task, Predicate, boolean, long, long)'.
 /** @nodts @template C @return {!RepeatTask<C>} */
 static $create__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long(/** Task<C> */ task, /** Predicate<C> */ predicate, /** boolean */ failFast, /** !$Long */ interval, /** !$Long */ timeout) {
  RepeatTask.$clinit();
  let $instance = new RepeatTask();
  $instance.$ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__void(task, predicate, failFast, interval, timeout);
  return $instance;
 }
 //Initialization from constructor 'RepeatTask(Task, Predicate, boolean, long, long)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__void(/** Task<C> */ task, /** Predicate<C> */ predicate, /** boolean */ failFast, /** !$Long */ interval, /** !$Long */ timeout) {
  this.$ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int__void(null, task, predicate, failFast, interval, timeout, Repeat.f_DEFAULT_ITERATIONS__org_jboss_elemento_flow_Repeat);
 }
 //Factory method corresponding to constructor 'RepeatTask(Task, Predicate, boolean, long, long, int)'.
 /** @nodts @template C @return {!RepeatTask<C>} */
 static $create__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int(/** Task<C> */ task, /** Predicate<C> */ predicate, /** boolean */ failFast, /** !$Long */ interval, /** !$Long */ timeout, /** number */ iterations) {
  RepeatTask.$clinit();
  let $instance = new RepeatTask();
  $instance.$ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int__void(task, predicate, failFast, interval, timeout, iterations);
  return $instance;
 }
 //Initialization from constructor 'RepeatTask(Task, Predicate, boolean, long, long, int)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int__void(/** Task<C> */ task, /** Predicate<C> */ predicate, /** boolean */ failFast, /** !$Long */ interval, /** !$Long */ timeout, /** number */ iterations) {
  this.$ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int__void(null, task, predicate, failFast, interval, timeout, iterations);
 }
 //Factory method corresponding to constructor 'RepeatTask(FlowContext, Task, Predicate, boolean, long, long)'.
 /** @nodts @template C @return {!RepeatTask<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long(/** C */ context, /** Task<C> */ task, /** Predicate<C> */ predicate, /** boolean */ failFast, /** !$Long */ interval, /** !$Long */ timeout) {
  RepeatTask.$clinit();
  let $instance = new RepeatTask();
  $instance.$ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__void(context, task, predicate, failFast, interval, timeout);
  return $instance;
 }
 //Initialization from constructor 'RepeatTask(FlowContext, Task, Predicate, boolean, long, long)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__void(/** C */ context, /** Task<C> */ task, /** Predicate<C> */ predicate, /** boolean */ failFast, /** !$Long */ interval, /** !$Long */ timeout) {
  this.$ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int__void(context, task, predicate, failFast, interval, timeout, Repeat.f_DEFAULT_ITERATIONS__org_jboss_elemento_flow_Repeat);
 }
 //Factory method corresponding to constructor 'RepeatTask(FlowContext, Task, Predicate, boolean, long, long, int)'.
 /** @nodts @template C @return {!RepeatTask<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int(/** C */ context, /** Task<C> */ task, /** Predicate<C> */ predicate, /** boolean */ failFast, /** !$Long */ interval, /** !$Long */ timeout, /** number */ iterations) {
  RepeatTask.$clinit();
  let $instance = new RepeatTask();
  $instance.$ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int__void(context, task, predicate, failFast, interval, timeout, iterations);
  return $instance;
 }
 //Initialization from constructor 'RepeatTask(FlowContext, Task, Predicate, boolean, long, long, int)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_RepeatTask__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__java_util_function_Predicate__boolean__long__long__int__void(/** C */ context, /** Task<C> */ task, /** Predicate<C> */ predicate, /** boolean */ failFast, /** !$Long */ interval, /** !$Long */ timeout, /** number */ iterations) {
  this.$ctor__java_lang_Object__void();
  this.f_context__org_jboss_elemento_flow_RepeatTask_ = context;
  this.f_task__org_jboss_elemento_flow_RepeatTask_ = task;
  this.f_predicate__org_jboss_elemento_flow_RepeatTask_ = predicate;
  this.f_interval__org_jboss_elemento_flow_RepeatTask_ = interval;
  this.f_timeout__org_jboss_elemento_flow_RepeatTask_ = timeout;
  this.f_failFast__org_jboss_elemento_flow_RepeatTask_ = failFast;
  this.f_iterations__org_jboss_elemento_flow_RepeatTask_ = iterations;
 }
 /** @override @nodts @return {Promise<C>} */
 m_apply__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise(/** C */ context) {
  let contextToUse = !$Equality.$same(this.f_context__org_jboss_elemento_flow_RepeatTask_, null) ? this.f_context__org_jboss_elemento_flow_RepeatTask_ : context;
  return (/**@type {Repeat<C>}*/ (Flow.m_repeat__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__org_jboss_elemento_flow_Repeat(contextToUse, this.f_task__org_jboss_elemento_flow_RepeatTask_))).m_while___java_util_function_Predicate__org_jboss_elemento_flow_Repeat(this.f_predicate__org_jboss_elemento_flow_RepeatTask_).m_failFast__boolean__org_jboss_elemento_flow_Repeat(this.f_failFast__org_jboss_elemento_flow_RepeatTask_).m_interval__long__org_jboss_elemento_flow_Repeat(this.f_interval__org_jboss_elemento_flow_RepeatTask_).m_timeout__long__org_jboss_elemento_flow_Repeat(this.f_timeout__org_jboss_elemento_flow_RepeatTask_).m_iterations__int__org_jboss_elemento_flow_Repeat(this.f_iterations__org_jboss_elemento_flow_RepeatTask_).m_promise__elemental2_promise_Promise();
 }
 /** @nodts */
 static $clinit() {
  RepeatTask.$clinit = () =>{};
  RepeatTask.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RepeatTask;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Flow = goog.module.get('org.jboss.elemento.flow.Flow$impl');
  Repeat = goog.module.get('org.jboss.elemento.flow.Repeat$impl');
 }
}
Task.$markImplementor(RepeatTask);
$Util.$setClassMetadata(RepeatTask, 'org.jboss.elemento.flow.RepeatTask');

exports = RepeatTask;

//# sourceMappingURL=RepeatTask.js.map
