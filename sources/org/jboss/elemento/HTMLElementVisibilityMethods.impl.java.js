goog.module('org.jboss.elemento.HTMLElementVisibilityMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HTMLElementVisibilityMethods {
 /** @abstract @nodts @return {B} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ hidden) {}
 /** @nodts @template E, B @return {B} */
 static m_hidden__$default__org_jboss_elemento_HTMLElementVisibilityMethods__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLElementVisibilityMethods<E, B> */ $thisArg, /** boolean */ hidden) {
  HTMLElementVisibilityMethods.$clinit();
  (/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).hidden = hidden;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HTMLElementVisibilityMethods.$clinit = () =>{};
  HTMLElementVisibilityMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HTMLElementVisibilityMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HTMLElementVisibilityMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HTMLElementVisibilityMethods.$markImplementor(/**@type {Function}*/ (HTMLElementVisibilityMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HTMLElementVisibilityMethods), 'org.jboss.elemento.HTMLElementVisibilityMethods');

exports = HTMLElementVisibilityMethods;

//# sourceMappingURL=HTMLElementVisibilityMethods.js.map
