goog.module('org.jboss.elemento.router.Page$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.router.Page.$LambdaAdaptor$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');

/**
 * @interface
 */
class Page {
 /** @abstract @nodts @return {Iterable<HTMLElement>} */
 m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(/** Place */ place, /** Parameter */ parameter, /** LoadedData */ data) {}
 /** @abstract @nodts */
 m_attach__void() {}
 /** @abstract @nodts */
 m_detach__void() {}
 /** @nodts @return {!Page} */
 static $adapt(/** ?function(Place, Parameter, LoadedData):Iterable<HTMLElement> */ fn) {
  Page.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static m_attach__$default__org_jboss_elemento_router_Page__void(/** !Page */ $thisArg) {
  Page.$clinit();
 }
 /** @nodts */
 static m_detach__$default__org_jboss_elemento_router_Page__void(/** !Page */ $thisArg) {
  Page.$clinit();
 }
 /** @nodts */
 static $clinit() {
  Page.$clinit = () =>{};
  Page.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_router_Page = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_router_Page;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.router.Page.$LambdaAdaptor$impl');
 }
}
Page.$markImplementor(/**@type {Function}*/ (Page));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Page), 'org.jboss.elemento.router.Page');

exports = Page;

//# sourceMappingURL=Page.js.map
