goog.module('org.jboss.elemento.ElementTextMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ElementTextMethods {
 /** @abstract @nodts @return {B} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @nodts @return {?string} */
 m_text__java_lang_String() {}
 /** @nodts @template E, B @return {B} */
 static m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementTextMethods<E, B> */ $thisArg, /** ?string */ text) {
  ElementTextMethods.$clinit();
  (/**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element())).textContent = text;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {?string} */
 static m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(/** !ElementTextMethods<E, B> */ $thisArg) {
  ElementTextMethods.$clinit();
  return (/**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element())).textContent;
 }
 /** @nodts */
 static $clinit() {
  ElementTextMethods.$clinit = () =>{};
  ElementTextMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementTextMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementTextMethods;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ElementTextMethods.$markImplementor(/**@type {Function}*/ (ElementTextMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementTextMethods), 'org.jboss.elemento.ElementTextMethods');

exports = ElementTextMethods;

//# sourceMappingURL=ElementTextMethods.js.map
