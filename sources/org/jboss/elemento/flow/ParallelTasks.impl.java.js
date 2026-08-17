goog.module('org.jboss.elemento.flow.ParallelTasks$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Task = goog.require('org.jboss.elemento.flow.Task$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Flow = goog.forwardDeclare('org.jboss.elemento.flow.Flow$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let Sequence = goog.forwardDeclare('org.jboss.elemento.flow.Sequence$impl');

/**
 * @template C
 * @implements {Task<C>}
 */
class ParallelTasks extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {C} @nodts*/
  this.f_context__org_jboss_elemento_flow_ParallelTasks_;
  /**@type {List<Task<C>>} @nodts*/
  this.f_tasks__org_jboss_elemento_flow_ParallelTasks_;
  /**@type {boolean} @nodts*/
  this.f_failFast__org_jboss_elemento_flow_ParallelTasks_ = false;
  /**@type {!$Long} @nodts*/
  this.f_timeout__org_jboss_elemento_flow_ParallelTasks_ = $Long.fromInt(0);
 }
 //Factory method corresponding to constructor 'ParallelTasks(List)'.
 /** @nodts @template C @return {!ParallelTasks<C>} */
 static $create__java_util_List(/** List<Task<C>> */ tasks) {
  ParallelTasks.$clinit();
  let $instance = new ParallelTasks();
  $instance.$ctor__org_jboss_elemento_flow_ParallelTasks__java_util_List__void(tasks);
  return $instance;
 }
 //Initialization from constructor 'ParallelTasks(List)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_ParallelTasks__java_util_List__void(/** List<Task<C>> */ tasks) {
  this.$ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(null, tasks, Sequence.f_DEFAULT_FAIL_FAST__org_jboss_elemento_flow_Sequence, Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence);
 }
 //Factory method corresponding to constructor 'ParallelTasks(List, boolean)'.
 /** @nodts @template C @return {!ParallelTasks<C>} */
 static $create__java_util_List__boolean(/** List<Task<C>> */ tasks, /** boolean */ failFast) {
  ParallelTasks.$clinit();
  let $instance = new ParallelTasks();
  $instance.$ctor__org_jboss_elemento_flow_ParallelTasks__java_util_List__boolean__void(tasks, failFast);
  return $instance;
 }
 //Initialization from constructor 'ParallelTasks(List, boolean)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_ParallelTasks__java_util_List__boolean__void(/** List<Task<C>> */ tasks, /** boolean */ failFast) {
  this.$ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(null, tasks, failFast, Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence);
 }
 //Factory method corresponding to constructor 'ParallelTasks(List, boolean, long)'.
 /** @nodts @template C @return {!ParallelTasks<C>} */
 static $create__java_util_List__boolean__long(/** List<Task<C>> */ tasks, /** boolean */ failFast, /** !$Long */ timeout) {
  ParallelTasks.$clinit();
  let $instance = new ParallelTasks();
  $instance.$ctor__org_jboss_elemento_flow_ParallelTasks__java_util_List__boolean__long__void(tasks, failFast, timeout);
  return $instance;
 }
 //Initialization from constructor 'ParallelTasks(List, boolean, long)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_ParallelTasks__java_util_List__boolean__long__void(/** List<Task<C>> */ tasks, /** boolean */ failFast, /** !$Long */ timeout) {
  this.$ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(null, tasks, failFast, timeout);
 }
 //Factory method corresponding to constructor 'ParallelTasks(FlowContext, List)'.
 /** @nodts @template C @return {!ParallelTasks<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__java_util_List(/** C */ context, /** List<Task<C>> */ tasks) {
  ParallelTasks.$clinit();
  let $instance = new ParallelTasks();
  $instance.$ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__void(context, tasks);
  return $instance;
 }
 //Initialization from constructor 'ParallelTasks(FlowContext, List)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__void(/** C */ context, /** List<Task<C>> */ tasks) {
  this.$ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(context, tasks, Sequence.f_DEFAULT_FAIL_FAST__org_jboss_elemento_flow_Sequence, Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence);
 }
 //Factory method corresponding to constructor 'ParallelTasks(FlowContext, List, boolean)'.
 /** @nodts @template C @return {!ParallelTasks<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__java_util_List__boolean(/** C */ context, /** List<Task<C>> */ tasks, /** boolean */ failFast) {
  ParallelTasks.$clinit();
  let $instance = new ParallelTasks();
  $instance.$ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__void(context, tasks, failFast);
  return $instance;
 }
 //Initialization from constructor 'ParallelTasks(FlowContext, List, boolean)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__void(/** C */ context, /** List<Task<C>> */ tasks, /** boolean */ failFast) {
  this.$ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(context, tasks, failFast, Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence);
 }
 //Factory method corresponding to constructor 'ParallelTasks(FlowContext, List, boolean, long)'.
 /** @nodts @template C @return {!ParallelTasks<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long(/** C */ context, /** List<Task<C>> */ tasks, /** boolean */ failFast, /** !$Long */ timeout) {
  ParallelTasks.$clinit();
  let $instance = new ParallelTasks();
  $instance.$ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(context, tasks, failFast, timeout);
  return $instance;
 }
 //Initialization from constructor 'ParallelTasks(FlowContext, List, boolean, long)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_ParallelTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(/** C */ context, /** List<Task<C>> */ tasks, /** boolean */ failFast, /** !$Long */ timeout) {
  this.$ctor__java_lang_Object__void();
  this.f_context__org_jboss_elemento_flow_ParallelTasks_ = context;
  this.f_tasks__org_jboss_elemento_flow_ParallelTasks_ = tasks;
  this.f_failFast__org_jboss_elemento_flow_ParallelTasks_ = failFast;
  this.f_timeout__org_jboss_elemento_flow_ParallelTasks_ = timeout;
 }
 /** @override @nodts @return {Promise<C>} */
 m_apply__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise(/** C */ context) {
  let contextToUse = !$Equality.$same(this.f_context__org_jboss_elemento_flow_ParallelTasks_, null) ? this.f_context__org_jboss_elemento_flow_ParallelTasks_ : context;
  return (/**@type {Sequence<C>}*/ (Flow.m_parallel__org_jboss_elemento_flow_FlowContext__java_util_List__org_jboss_elemento_flow_Sequence(contextToUse, this.f_tasks__org_jboss_elemento_flow_ParallelTasks_))).m_failFast__boolean__org_jboss_elemento_flow_Sequence(this.f_failFast__org_jboss_elemento_flow_ParallelTasks_).m_timeout__long__org_jboss_elemento_flow_Sequence(this.f_timeout__org_jboss_elemento_flow_ParallelTasks_).m_promise__elemental2_promise_Promise();
 }
 /** @nodts */
 static $clinit() {
  ParallelTasks.$clinit = () =>{};
  ParallelTasks.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ParallelTasks;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Flow = goog.module.get('org.jboss.elemento.flow.Flow$impl');
  Sequence = goog.module.get('org.jboss.elemento.flow.Sequence$impl');
 }
}
Task.$markImplementor(ParallelTasks);
$Util.$setClassMetadata(ParallelTasks, 'org.jboss.elemento.flow.ParallelTasks');

exports = ParallelTasks;

//# sourceMappingURL=ParallelTasks.js.map
