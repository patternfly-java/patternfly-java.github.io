goog.module('org.jboss.elemento.flow.FlowCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FlowCallback = goog.require('org.jboss.elemento.flow.FlowCallback$impl');

let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');

/**
 * @template C
 * @implements {FlowCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(C):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):void} @nodts*/
  this.f_fn__org_jboss_elemento_flow_FlowCallback_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_flow_FlowCallback_$LambdaAdaptor__org_jboss_elemento_flow_FlowCallback_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_FlowCallback_$LambdaAdaptor__org_jboss_elemento_flow_FlowCallback_$JsFunction__void(/** ?function(C):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_flow_FlowCallback_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_finish__org_jboss_elemento_flow_FlowContext__void(/** C */ arg0) {
  {
   let $function = this.f_fn__org_jboss_elemento_flow_FlowCallback_$LambdaAdaptor;
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
FlowCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.flow.FlowCallback$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=FlowCallback$$LambdaAdaptor.js.map
