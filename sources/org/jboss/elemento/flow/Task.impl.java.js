goog.module('org.jboss.elemento.flow.Task$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.flow.Task.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class Task {
 /** @abstract @nodts @return {Promise<C>} */
 m_apply__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise(/** C */ context) {}
 /** @nodts @template C @return {!Task<C>} */
 static $adapt(/** ?function(C):Promise<C> */ fn) {
  Task.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Task.$clinit = () =>{};
  Task.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_flow_Task = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_flow_Task;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.flow.Task.$LambdaAdaptor$impl');
 }
}
Task.$markImplementor(/**@type {Function}*/ (Task));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Task), 'org.jboss.elemento.flow.Task');

exports = Task;

//# sourceMappingURL=Task.js.map
