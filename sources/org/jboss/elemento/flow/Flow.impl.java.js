goog.module('org.jboss.elemento.flow.Flow$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let Repeat = goog.forwardDeclare('org.jboss.elemento.flow.Repeat$impl');
let RepeatImpl = goog.forwardDeclare('org.jboss.elemento.flow.RepeatImpl$impl');
let Sequence = goog.forwardDeclare('org.jboss.elemento.flow.Sequence$impl');
let SequenceImpl = goog.forwardDeclare('org.jboss.elemento.flow.SequenceImpl$impl');
let Mode = goog.forwardDeclare('org.jboss.elemento.flow.SequenceImpl.Mode$impl');
let Task = goog.forwardDeclare('org.jboss.elemento.flow.Task$impl');

/**
 * @interface
 */
class Flow {
 /** @nodts @template C @return {Sequence<C>} */
 static m_parallel__org_jboss_elemento_flow_FlowContext__java_util_List__org_jboss_elemento_flow_Sequence(/** C */ context, /** List<Task<C>> */ tasks) {
  Flow.$clinit();
  return /**@type {!SequenceImpl<C>}*/ (SequenceImpl.$create__org_jboss_elemento_flow_SequenceImpl_Mode__org_jboss_elemento_flow_FlowContext__java_util_List(Mode.f_PARALLEL__org_jboss_elemento_flow_SequenceImpl_Mode, context, tasks));
 }
 /** @nodts @template C @return {Sequence<C>} */
 static m_sequential__org_jboss_elemento_flow_FlowContext__java_util_List__org_jboss_elemento_flow_Sequence(/** C */ context, /** List<Task<C>> */ tasks) {
  Flow.$clinit();
  return /**@type {!SequenceImpl<C>}*/ (SequenceImpl.$create__org_jboss_elemento_flow_SequenceImpl_Mode__org_jboss_elemento_flow_FlowContext__java_util_List(Mode.f_SEQUENTIAL__org_jboss_elemento_flow_SequenceImpl_Mode, context, tasks));
 }
 /** @nodts @template C @return {Repeat<C>} */
 static m_repeat__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task__org_jboss_elemento_flow_Repeat(/** C */ context, /** Task<C> */ task) {
  Flow.$clinit();
  return /**@type {!RepeatImpl<C>}*/ (RepeatImpl.$create__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Task(context, task));
 }
 /** @nodts */
 static $clinit() {
  Flow.$clinit = () =>{};
  Flow.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_flow_Flow = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_flow_Flow;
 }
 
 /** @nodts */
 static $loadModules() {
  RepeatImpl = goog.module.get('org.jboss.elemento.flow.RepeatImpl$impl');
  SequenceImpl = goog.module.get('org.jboss.elemento.flow.SequenceImpl$impl');
  Mode = goog.module.get('org.jboss.elemento.flow.SequenceImpl.Mode$impl');
 }
}
Flow.$markImplementor(/**@type {Function}*/ (Flow));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Flow), 'org.jboss.elemento.flow.Flow');

exports = Flow;

//# sourceMappingURL=Flow.js.map
