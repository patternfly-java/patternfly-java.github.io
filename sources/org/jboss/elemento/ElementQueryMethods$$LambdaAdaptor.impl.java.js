goog.module('org.jboss.elemento.ElementQueryMethods.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementQueryMethods = goog.require('org.jboss.elemento.ElementQueryMethods$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');

/**
 * @template E
 * @implements {ElementQueryMethods<E>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():E */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():E} @nodts*/
  this.f_fn__org_jboss_elemento_ElementQueryMethods_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_ElementQueryMethods_$LambdaAdaptor__org_jboss_elemento_ElementQueryMethods_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_ElementQueryMethods_$LambdaAdaptor__org_jboss_elemento_ElementQueryMethods_$JsFunction__void(/** ?function():E */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_ElementQueryMethods_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  let /** ?function():E */ $function;
  return ($function = this.f_fn__org_jboss_elemento_ElementQueryMethods_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_querySelectorAll__org_jboss_elemento_By__java_lang_Iterable(/** By */ arg0) {
  return ElementQueryMethods.m_querySelectorAll__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__java_lang_Iterable(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return ElementQueryMethods.m_querySelector__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_closest__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return ElementQueryMethods.m_closest__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  ElementQueryMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ElementQueryMethods.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.ElementQueryMethods$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ElementQueryMethods$$LambdaAdaptor.js.map
