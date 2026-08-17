goog.module('org.jboss.elemento.ElementTextDelegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {ElementTextMethods<E, B>}
 */
class ElementTextDelegate {
 /** @abstract @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {}
 /** @abstract @override @nodts @return {B} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @override @nodts @return {?string} */
 m_text__java_lang_String() {}
 /** @nodts @template E, B @return {B} */
 static m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementTextDelegate<E, B> */ $thisArg, /** ?string */ text) {
  ElementTextDelegate.$clinit();
  $thisArg.m_textDelegate__elemental2_dom_Element().textContent = text;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {?string} */
 static m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(/** !ElementTextDelegate<E, B> */ $thisArg) {
  ElementTextDelegate.$clinit();
  return $thisArg.m_textDelegate__elemental2_dom_Element().textContent;
 }
 /** @nodts */
 static $clinit() {
  ElementTextDelegate.$clinit = () =>{};
  ElementTextDelegate.$loadModules();
  ElementTextMethods.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  ElementTextMethods.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementTextDelegate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementTextDelegate;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ElementTextDelegate.$markImplementor(/**@type {Function}*/ (ElementTextDelegate));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementTextDelegate), 'org.jboss.elemento.ElementTextDelegate');

exports = ElementTextDelegate;

//# sourceMappingURL=ElementTextDelegate.js.map
