goog.module('org.jboss.elemento.router.LoadData.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoadData = goog.require('org.jboss.elemento.router.LoadData$impl');

let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');

/**
 * @template T
 * @implements {LoadData<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Place, Parameter):Promise<T> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Place, Parameter):Promise<T>} @nodts*/
  this.f_fn__org_jboss_elemento_router_LoadData_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_router_LoadData_$LambdaAdaptor__org_jboss_elemento_router_LoadData_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_LoadData_$LambdaAdaptor__org_jboss_elemento_router_LoadData_$JsFunction__void(/** ?function(Place, Parameter):Promise<T> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_router_LoadData_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Promise<T>} */
 m_load__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__elemental2_promise_Promise(/** Place */ arg0, /** Parameter */ arg1) {
  let /** ?function(Place, Parameter):Promise<T> */ $function;
  return ($function = this.f_fn__org_jboss_elemento_router_LoadData_$LambdaAdaptor, $function(arg0, arg1));
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
LoadData.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.router.LoadData$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LoadData$$LambdaAdaptor.js.map
