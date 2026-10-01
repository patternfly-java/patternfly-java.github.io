goog.module('org.jboss.elemento.ElementQueryMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.ElementQueryMethods.$LambdaAdaptor$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');

/**
 * @interface
 * @template E
 * @extends {IsElement<E>}
 */
class ElementQueryMethods {
 /** @abstract @nodts @return {Iterable<HTMLElement>} */
 m_querySelectorAll__org_jboss_elemento_By__java_lang_Iterable(/** By */ selector) {}
 /** @abstract @nodts @template F @return {F} */
 m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ selector) {}
 /** @abstract @nodts @template F @return {F} */
 m_closest__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ selector) {}
 /** @nodts @template E @return {!ElementQueryMethods<E>} */
 static $adapt(/** ?function():E */ fn) {
  ElementQueryMethods.$clinit();
  return /**@type {!$LambdaAdaptor<E>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template E @return {Iterable<HTMLElement>} */
 static m_querySelectorAll__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__java_lang_Iterable(/** !ElementQueryMethods<E> */ $thisArg, /** By */ selector) {
  ElementQueryMethods.$clinit();
  return Elements.m_querySelectorAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(/**@type {Node}*/ ($thisArg.m_element__elemental2_dom_Element()), selector);
 }
 /** @nodts @template E, F @return {F} */
 static m_querySelector__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** !ElementQueryMethods<E> */ $thisArg, /** By */ selector) {
  ElementQueryMethods.$clinit();
  return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Node}*/ ($thisArg.m_element__elemental2_dom_Element()), selector);
 }
 /** @nodts @template E, F @return {F} */
 static m_closest__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** !ElementQueryMethods<E> */ $thisArg, /** By */ selector) {
  ElementQueryMethods.$clinit();
  return Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Element}*/ ($thisArg.m_element__elemental2_dom_Element()), selector);
 }
 /** @nodts */
 static $clinit() {
  ElementQueryMethods.$clinit = () =>{};
  ElementQueryMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementQueryMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementQueryMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.ElementQueryMethods.$LambdaAdaptor$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
 }
}
ElementQueryMethods.$markImplementor(/**@type {Function}*/ (ElementQueryMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementQueryMethods), 'org.jboss.elemento.ElementQueryMethods');

exports = ElementQueryMethods;

//# sourceMappingURL=ElementQueryMethods.js.map
