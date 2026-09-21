goog.module('org.jboss.elemento.flow.FlowCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.flow.FlowCallback.$LambdaAdaptor$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');

/**
 * @interface
 * @template C
 */
class FlowCallback {
 /** @abstract @nodts */
 m_finish__org_jboss_elemento_flow_FlowContext__void(/** C */ context) {}
 /** @nodts @template C @return {!FlowCallback<C>} */
 static $adapt(/** ?function(C):void */ fn) {
  FlowCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  FlowCallback.$clinit = () =>{};
  FlowCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_flow_FlowCallback = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_flow_FlowCallback;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.flow.FlowCallback.$LambdaAdaptor$impl');
 }
}
FlowCallback.$markImplementor(/**@type {Function}*/ (FlowCallback));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (FlowCallback), 'org.jboss.elemento.flow.FlowCallback');

exports = FlowCallback;

//# sourceMappingURL=FlowCallback.js.map
