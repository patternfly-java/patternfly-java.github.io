goog.module('org.jboss.elemento.flow.Subscription.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Subscription = goog.require('org.jboss.elemento.flow.Subscription$impl');

let FlowCallback = goog.forwardDeclare('org.jboss.elemento.flow.FlowCallback$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');

/**
 * @template C
 * @implements {Subscription<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(FlowCallback<C>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(FlowCallback<C>):void} @nodts*/
  this.f_fn__org_jboss_elemento_flow_Subscription_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_flow_Subscription_$LambdaAdaptor__org_jboss_elemento_flow_Subscription_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_Subscription_$LambdaAdaptor__org_jboss_elemento_flow_Subscription_$JsFunction__void(/** ?function(FlowCallback<C>):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_flow_Subscription_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_subscribe__org_jboss_elemento_flow_FlowCallback__void(/** FlowCallback<C> */ arg0) {
  {
   let $function = this.f_fn__org_jboss_elemento_flow_Subscription_$LambdaAdaptor;
   $function(arg0);
  }
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
Subscription.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.flow.Subscription$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Subscription$$LambdaAdaptor.js.map
