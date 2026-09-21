goog.module('org.jboss.elemento.flow.SequentialTasks$impl');

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
class SequentialTasks extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {C} @nodts*/
  this.f_context__org_jboss_elemento_flow_SequentialTasks_;
  /**@type {List<Task<C>>} @nodts*/
  this.f_tasks__org_jboss_elemento_flow_SequentialTasks_;
  /**@type {boolean} @nodts*/
  this.f_failFast__org_jboss_elemento_flow_SequentialTasks_ = false;
  /**@type {!$Long} @nodts*/
  this.f_timeout__org_jboss_elemento_flow_SequentialTasks_ = $Long.fromInt(0);
 }
 //Factory method corresponding to constructor 'SequentialTasks(List)'.
 /** @nodts @template C @return {!SequentialTasks<C>} */
 static $create__java_util_List(/** List<Task<C>> */ tasks) {
  SequentialTasks.$clinit();
  let $instance = new SequentialTasks();
  $instance.$ctor__org_jboss_elemento_flow_SequentialTasks__java_util_List__void(tasks);
  return $instance;
 }
 //Initialization from constructor 'SequentialTasks(List)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_SequentialTasks__java_util_List__void(/** List<Task<C>> */ tasks) {
  this.$ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(null, tasks, Sequence.f_DEFAULT_FAIL_FAST__org_jboss_elemento_flow_Sequence, Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence);
 }
 //Factory method corresponding to constructor 'SequentialTasks(List, boolean)'.
 /** @nodts @template C @return {!SequentialTasks<C>} */
 static $create__java_util_List__boolean(/** List<Task<C>> */ tasks, /** boolean */ failFast) {
  SequentialTasks.$clinit();
  let $instance = new SequentialTasks();
  $instance.$ctor__org_jboss_elemento_flow_SequentialTasks__java_util_List__boolean__void(tasks, failFast);
  return $instance;
 }
 //Initialization from constructor 'SequentialTasks(List, boolean)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_SequentialTasks__java_util_List__boolean__void(/** List<Task<C>> */ tasks, /** boolean */ failFast) {
  this.$ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(null, tasks, failFast, Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence);
 }
 //Factory method corresponding to constructor 'SequentialTasks(List, boolean, long)'.
 /** @nodts @template C @return {!SequentialTasks<C>} */
 static $create__java_util_List__boolean__long(/** List<Task<C>> */ tasks, /** boolean */ failFast, /** !$Long */ timeout) {
  SequentialTasks.$clinit();
  let $instance = new SequentialTasks();
  $instance.$ctor__org_jboss_elemento_flow_SequentialTasks__java_util_List__boolean__long__void(tasks, failFast, timeout);
  return $instance;
 }
 //Initialization from constructor 'SequentialTasks(List, boolean, long)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_SequentialTasks__java_util_List__boolean__long__void(/** List<Task<C>> */ tasks, /** boolean */ failFast, /** !$Long */ timeout) {
  this.$ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(null, tasks, failFast, timeout);
 }
 //Factory method corresponding to constructor 'SequentialTasks(FlowContext, List)'.
 /** @nodts @template C @return {!SequentialTasks<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__java_util_List(/** C */ context, /** List<Task<C>> */ tasks) {
  SequentialTasks.$clinit();
  let $instance = new SequentialTasks();
  $instance.$ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__void(context, tasks);
  return $instance;
 }
 //Initialization from constructor 'SequentialTasks(FlowContext, List)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__void(/** C */ context, /** List<Task<C>> */ tasks) {
  this.$ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(context, tasks, Sequence.f_DEFAULT_FAIL_FAST__org_jboss_elemento_flow_Sequence, Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence);
 }
 //Factory method corresponding to constructor 'SequentialTasks(FlowContext, List, boolean)'.
 /** @nodts @template C @return {!SequentialTasks<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__java_util_List__boolean(/** C */ context, /** List<Task<C>> */ tasks, /** boolean */ failFast) {
  SequentialTasks.$clinit();
  let $instance = new SequentialTasks();
  $instance.$ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__void(context, tasks, failFast);
  return $instance;
 }
 //Initialization from constructor 'SequentialTasks(FlowContext, List, boolean)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__void(/** C */ context, /** List<Task<C>> */ tasks, /** boolean */ failFast) {
  this.$ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(context, tasks, failFast, Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence);
 }
 //Factory method corresponding to constructor 'SequentialTasks(FlowContext, List, boolean, long)'.
 /** @nodts @template C @return {!SequentialTasks<C>} */
 static $create__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long(/** C */ context, /** List<Task<C>> */ tasks, /** boolean */ failFast, /** !$Long */ timeout) {
  SequentialTasks.$clinit();
  let $instance = new SequentialTasks();
  $instance.$ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(context, tasks, failFast, timeout);
  return $instance;
 }
 //Initialization from constructor 'SequentialTasks(FlowContext, List, boolean, long)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_SequentialTasks__org_jboss_elemento_flow_FlowContext__java_util_List__boolean__long__void(/** C */ context, /** List<Task<C>> */ tasks, /** boolean */ failFast, /** !$Long */ timeout) {
  this.$ctor__java_lang_Object__void();
  this.f_context__org_jboss_elemento_flow_SequentialTasks_ = context;
  this.f_tasks__org_jboss_elemento_flow_SequentialTasks_ = tasks;
  this.f_failFast__org_jboss_elemento_flow_SequentialTasks_ = failFast;
  this.f_timeout__org_jboss_elemento_flow_SequentialTasks_ = timeout;
 }
 /** @override @nodts @return {Promise<C>} */
 m_apply__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise(/** C */ context) {
  let contextToUse = !$Equality.$same(this.f_context__org_jboss_elemento_flow_SequentialTasks_, null) ? this.f_context__org_jboss_elemento_flow_SequentialTasks_ : context;
  return (/**@type {Sequence<C>}*/ (Flow.m_sequential__org_jboss_elemento_flow_FlowContext__java_util_List__org_jboss_elemento_flow_Sequence(contextToUse, this.f_tasks__org_jboss_elemento_flow_SequentialTasks_))).m_failFast__boolean__org_jboss_elemento_flow_Sequence(this.f_failFast__org_jboss_elemento_flow_SequentialTasks_).m_timeout__long__org_jboss_elemento_flow_Sequence(this.f_timeout__org_jboss_elemento_flow_SequentialTasks_).m_promise__elemental2_promise_Promise();
 }
 /** @nodts */
 static $clinit() {
  SequentialTasks.$clinit = () =>{};
  SequentialTasks.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SequentialTasks;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Flow = goog.module.get('org.jboss.elemento.flow.Flow$impl');
  Sequence = goog.module.get('org.jboss.elemento.flow.Sequence$impl');
 }
}
Task.$markImplementor(SequentialTasks);
$Util.$setClassMetadata(SequentialTasks, 'org.jboss.elemento.flow.SequentialTasks');

exports = SequentialTasks;

//# sourceMappingURL=SequentialTasks.js.map
