goog.module('org.jboss.elemento.HTMLSelectElementMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HTMLSelectElementMethods {
 /** @abstract @nodts @return {B} */
 m_autofocus__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ autofocus) {}
 /** @abstract @nodts @return {B} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ disabled) {}
 /** @abstract @nodts @return {B} */
 m_length__int__org_jboss_elemento_TypedBuilder(/** number */ length) {}
 /** @abstract @nodts @return {B} */
 m_multiple__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ multiple) {}
 /** @abstract @nodts @return {B} */
 m_name__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name) {}
 /** @abstract @nodts @return {B} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ required) {}
 /** @abstract @nodts @return {B} */
 m_selectedIndex__int__org_jboss_elemento_TypedBuilder(/** number */ selectedIndex) {}
 /** @abstract @nodts @return {B} */
 m_size__int__org_jboss_elemento_TypedBuilder(/** number */ size) {}
 /** @abstract @nodts @return {B} */
 m_tabIndex__int__org_jboss_elemento_TypedBuilder(/** number */ tabIndex) {}
 /** @abstract @nodts @return {B} */
 m_type__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ type) {}
 /** @abstract @nodts @return {B} */
 m_value__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ value) {}
 /** @nodts @template E, B @return {B} */
 static m_autofocus__$default__org_jboss_elemento_HTMLSelectElementMethods__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** boolean */ autofocus) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).autofocus = autofocus;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_disabled__$default__org_jboss_elemento_HTMLSelectElementMethods__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** boolean */ disabled) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).disabled = disabled;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_length__$default__org_jboss_elemento_HTMLSelectElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** number */ length) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).length = length;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_multiple__$default__org_jboss_elemento_HTMLSelectElementMethods__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** boolean */ multiple) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).multiple = multiple;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_name__$default__org_jboss_elemento_HTMLSelectElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** ?string */ name) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).name = name;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_required__$default__org_jboss_elemento_HTMLSelectElementMethods__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** boolean */ required) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).required = required;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_selectedIndex__$default__org_jboss_elemento_HTMLSelectElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** number */ selectedIndex) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).selectedIndex = selectedIndex;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_size__$default__org_jboss_elemento_HTMLSelectElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** number */ size) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).size = size;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_tabIndex__$default__org_jboss_elemento_HTMLSelectElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** number */ tabIndex) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), HTMLElement_$Overlay))).tabIndex = tabIndex;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_type__$default__org_jboss_elemento_HTMLSelectElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** ?string */ type) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).type = type;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_value__$default__org_jboss_elemento_HTMLSelectElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLSelectElementMethods<E, B> */ $thisArg, /** ?string */ value) {
  HTMLSelectElementMethods.$clinit();
  (/**@type {!HTMLSelectElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).value = value;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HTMLSelectElementMethods.$clinit = () =>{};
  HTMLSelectElementMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HTMLSelectElementMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HTMLSelectElementMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HTMLSelectElementMethods.$markImplementor(/**@type {Function}*/ (HTMLSelectElementMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HTMLSelectElementMethods), 'org.jboss.elemento.HTMLSelectElementMethods');

exports = HTMLSelectElementMethods;

//# sourceMappingURL=HTMLSelectElementMethods.js.map
