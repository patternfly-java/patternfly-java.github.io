goog.module('org.jboss.elemento.ElementConsumerMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ElementConsumerMethods {
 /** @abstract @nodts @return {B} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ consumer) {}
 /** @abstract @nodts @return {B} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<B> */ consumer) {}
 /** @nodts @template E, B @return {B} */
 static m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** !ElementConsumerMethods<E, B> */ $thisArg, /** Consumer<E> */ consumer) {
  ElementConsumerMethods.$clinit();
  consumer.m_accept__java_lang_Object__void($thisArg.m_element__elemental2_dom_Element());
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** !ElementConsumerMethods<E, B> */ $thisArg, /** Consumer<B> */ consumer) {
  ElementConsumerMethods.$clinit();
  consumer.m_accept__java_lang_Object__void($thisArg.m_that__org_jboss_elemento_TypedBuilder());
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  ElementConsumerMethods.$clinit = () =>{};
  ElementConsumerMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementConsumerMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementConsumerMethods;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ElementConsumerMethods.$markImplementor(/**@type {Function}*/ (ElementConsumerMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementConsumerMethods), 'org.jboss.elemento.ElementConsumerMethods');

exports = ElementConsumerMethods;

//# sourceMappingURL=ElementConsumerMethods.js.map
