goog.module('org.jboss.elemento.ElementHTMLMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ElementHTMLMethods {
 /** @abstract @nodts @return {B} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ html) {}
 /** @abstract @nodts @return {SafeHtml} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml() {}
 /** @nodts @template E, B @return {B} */
 static m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** !ElementHTMLMethods<E, B> */ $thisArg, /** SafeHtml */ html) {
  ElementHTMLMethods.$clinit();
  Elements.m_innerHtml__elemental2_dom_Element__org_gwtproject_safehtml_shared_SafeHtml__void(/**@type {Element}*/ ($thisArg.m_element__elemental2_dom_Element()), html);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {SafeHtml} */
 static m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml(/** !ElementHTMLMethods<E, B> */ $thisArg) {
  ElementHTMLMethods.$clinit();
  return SafeHtmlUtils.m_fromString__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml((/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element())).innerHTML);
 }
 /** @nodts */
 static $clinit() {
  ElementHTMLMethods.$clinit = () =>{};
  ElementHTMLMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementHTMLMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementHTMLMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
 }
}
ElementHTMLMethods.$markImplementor(/**@type {Function}*/ (ElementHTMLMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementHTMLMethods), 'org.jboss.elemento.ElementHTMLMethods');

exports = ElementHTMLMethods;

//# sourceMappingURL=ElementHTMLMethods.js.map
