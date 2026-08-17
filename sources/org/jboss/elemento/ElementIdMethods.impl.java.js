goog.module('org.jboss.elemento.ElementIdMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ElementIdMethods {
 /** @abstract @nodts @return {B} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ id) {}
 /** @nodts @template E, B @return {B} */
 static m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(/** !ElementIdMethods<E, B> */ $thisArg) {
  ElementIdMethods.$clinit();
  return $thisArg.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String());
 }
 /** @nodts @template E, B @return {B} */
 static m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementIdMethods<E, B> */ $thisArg, /** ?string */ id) {
  ElementIdMethods.$clinit();
  (/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element())).id = id;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  ElementIdMethods.$clinit = () =>{};
  ElementIdMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementIdMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementIdMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  Id = goog.module.get('org.jboss.elemento.Id$impl');
 }
}
ElementIdMethods.$markImplementor(/**@type {Function}*/ (ElementIdMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementIdMethods), 'org.jboss.elemento.ElementIdMethods');

exports = ElementIdMethods;

//# sourceMappingURL=ElementIdMethods.js.map
