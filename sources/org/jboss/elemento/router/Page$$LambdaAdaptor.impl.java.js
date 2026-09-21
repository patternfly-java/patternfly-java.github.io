goog.module('org.jboss.elemento.router.Page.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');

/**
 * @implements {Page}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Place, Parameter, LoadedData):Iterable<HTMLElement> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Place, Parameter, LoadedData):Iterable<HTMLElement>} @nodts*/
  this.f_fn__org_jboss_elemento_router_Page_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_router_Page_$LambdaAdaptor__org_jboss_elemento_router_Page_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_Page_$LambdaAdaptor__org_jboss_elemento_router_Page_$JsFunction__void(/** ?function(Place, Parameter, LoadedData):Iterable<HTMLElement> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_router_Page_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(/** Place */ arg0, /** Parameter */ arg1, /** LoadedData */ arg2) {
  let /** ?function(Place, Parameter, LoadedData):Iterable<HTMLElement> */ $function;
  return ($function = this.f_fn__org_jboss_elemento_router_Page_$LambdaAdaptor, $function(arg0, arg1, arg2));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_attach__void() {
  Page.m_attach__$default__org_jboss_elemento_router_Page__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__void() {
  Page.m_detach__$default__org_jboss_elemento_router_Page__void(this);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Page.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.router.Page$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Page$$LambdaAdaptor.js.map
