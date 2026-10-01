goog.module('org.jboss.elemento.HTMLElementAttributeMethods$impl');

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
class HTMLElementAttributeMethods {
 /** @abstract @nodts @return {B} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ title) {}
 /** @nodts @template E, B @return {B} */
 static m_title__$default__org_jboss_elemento_HTMLElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLElementAttributeMethods<E, B> */ $thisArg, /** ?string */ title) {
  HTMLElementAttributeMethods.$clinit();
  (/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).title = title;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HTMLElementAttributeMethods.$clinit = () =>{};
  HTMLElementAttributeMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HTMLElementAttributeMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HTMLElementAttributeMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HTMLElementAttributeMethods.$markImplementor(/**@type {Function}*/ (HTMLElementAttributeMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HTMLElementAttributeMethods), 'org.jboss.elemento.HTMLElementAttributeMethods');

exports = HTMLElementAttributeMethods;

//# sourceMappingURL=HTMLElementAttributeMethods.js.map
