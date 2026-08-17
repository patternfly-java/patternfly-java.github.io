goog.module('org.jboss.elemento.ElementEventMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ElementEventMethods {
 /** @abstract @nodts @template V @return {B} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ type, /** ?function(V):void */ callback) {}
 /** @abstract @nodts @template V @return {B} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ type, /** boolean */ useCapture, /** ?function(V):void */ callback) {}
 /** @abstract @nodts @template V @return {B} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ type, /** AddEventListenerOptions */ options, /** ?function(V):void */ callback) {}
 /** @nodts @template E, B, V @return {B} */
 static m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** !ElementEventMethods<E, B> */ $thisArg, /** EventType<V, ?> */ type, /** ?function(V):void */ callback) {
  ElementEventMethods.$clinit();
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ ($thisArg.m_element__elemental2_dom_Element()), type, callback);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B, V @return {B} */
 static m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** !ElementEventMethods<E, B> */ $thisArg, /** EventType<V, ?> */ type, /** boolean */ useCapture, /** ?function(V):void */ callback) {
  ElementEventMethods.$clinit();
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ ($thisArg.m_element__elemental2_dom_Element()), type, useCapture, callback);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B, V @return {B} */
 static m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** !ElementEventMethods<E, B> */ $thisArg, /** EventType<V, ?> */ type, /** AddEventListenerOptions */ options, /** ?function(V):void */ callback) {
  ElementEventMethods.$clinit();
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ ($thisArg.m_element__elemental2_dom_Element()), type, options, callback);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  ElementEventMethods.$clinit = () =>{};
  ElementEventMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementEventMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementEventMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
 }
}
ElementEventMethods.$markImplementor(/**@type {Function}*/ (ElementEventMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementEventMethods), 'org.jboss.elemento.ElementEventMethods');

exports = ElementEventMethods;

//# sourceMappingURL=ElementEventMethods.js.map
