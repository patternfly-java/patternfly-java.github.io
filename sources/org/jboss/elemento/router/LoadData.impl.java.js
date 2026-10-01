goog.module('org.jboss.elemento.router.LoadData$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.router.LoadData.$LambdaAdaptor$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');

/**
 * @interface
 * @template T
 */
class LoadData {
 /** @abstract @nodts @return {Promise<T>} */
 m_load__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__elemental2_promise_Promise(/** Place */ place, /** Parameter */ parameter) {}
 /** @nodts @template T @return {!LoadData<T>} */
 static $adapt(/** ?function(Place, Parameter):Promise<T> */ fn) {
  LoadData.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  LoadData.$clinit = () =>{};
  LoadData.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_router_LoadData = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_router_LoadData;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.router.LoadData.$LambdaAdaptor$impl');
 }
}
LoadData.$markImplementor(/**@type {Function}*/ (LoadData));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (LoadData), 'org.jboss.elemento.router.LoadData');

exports = LoadData;

//# sourceMappingURL=LoadData.js.map
