goog.module('org.jboss.elemento.flow.Subscription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let FlowCallback = goog.forwardDeclare('org.jboss.elemento.flow.FlowCallback$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.flow.Subscription.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class Subscription {
 /** @abstract @nodts */
 m_subscribe__org_jboss_elemento_flow_FlowCallback__void(/** FlowCallback<C> */ callback) {}
 /** @nodts @template C @return {!Subscription<C>} */
 static $adapt(/** ?function(FlowCallback<C>):void */ fn) {
  Subscription.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Subscription.$clinit = () =>{};
  Subscription.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_flow_Subscription = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_flow_Subscription;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.flow.Subscription.$LambdaAdaptor$impl');
 }
}
Subscription.$markImplementor(/**@type {Function}*/ (Subscription));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Subscription), 'org.jboss.elemento.flow.Subscription');

exports = Subscription;

//# sourceMappingURL=Subscription.js.map
