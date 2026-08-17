goog.module('org.jboss.elemento.flow.Task.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Task = goog.require('org.jboss.elemento.flow.Task$impl');

let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');

/**
 * @template C
 * @implements {Task<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(C):Promise<C> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):Promise<C>} @nodts*/
  this.f_fn__org_jboss_elemento_flow_Task_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_flow_Task_$LambdaAdaptor__org_jboss_elemento_flow_Task_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_Task_$LambdaAdaptor__org_jboss_elemento_flow_Task_$JsFunction__void(/** ?function(C):Promise<C> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_flow_Task_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Promise<C>} */
 m_apply__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise(/** C */ arg0) {
  let /** ?function(C):Promise<C> */ $function;
  return ($function = this.f_fn__org_jboss_elemento_flow_Task_$LambdaAdaptor, $function(arg0));
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Task.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.flow.Task$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Task$$LambdaAdaptor.js.map
