goog.module('org.jboss.elemento.HTMLTextAreaElementMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HTMLTextAreaElementMethods {
 /** @abstract @nodts @return {B} */
 m_autofocus__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ autofocus) {}
 /** @abstract @nodts @return {B} */
 m_cols__int__org_jboss_elemento_TypedBuilder(/** number */ cols) {}
 /** @abstract @nodts @return {B} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ disabled) {}
 /** @abstract @nodts @return {B} */
 m_rows__int__org_jboss_elemento_TypedBuilder(/** number */ rows) {}
 /** @abstract @nodts @return {B} */
 m_maxLength__int__org_jboss_elemento_TypedBuilder(/** number */ maxLength) {}
 /** @abstract @nodts @return {B} */
 m_minLength__int__org_jboss_elemento_TypedBuilder(/** number */ minLength) {}
 /** @abstract @nodts @return {B} */
 m_name__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name) {}
 /** @abstract @nodts @return {B} */
 m_placeholder__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ placeholder) {}
 /** @abstract @nodts @return {B} */
 m_readOnly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ readOnly) {}
 /** @abstract @nodts @return {B} */
 m_tabIndex__int__org_jboss_elemento_TypedBuilder(/** number */ tabIndex) {}
 /** @abstract @nodts @return {B} */
 m_value__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ value) {}
 /** @nodts @template E, B @return {B} */
 static m_autofocus__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** boolean */ autofocus) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).autofocus = autofocus;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_cols__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** number */ cols) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).cols = cols;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_disabled__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** boolean */ disabled) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).disabled = disabled;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_rows__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** number */ rows) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).rows = rows;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_maxLength__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** number */ maxLength) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).maxLength = maxLength;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_minLength__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** number */ minLength) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).minLength = minLength;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_name__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** ?string */ name) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).name = name;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_placeholder__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** ?string */ placeholder) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).placeholder = placeholder;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_readOnly__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** boolean */ readOnly) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).readOnly = readOnly;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_tabIndex__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** number */ tabIndex) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).tabIndex = tabIndex;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_value__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLTextAreaElementMethods<E, B> */ $thisArg, /** ?string */ value) {
  HTMLTextAreaElementMethods.$clinit();
  (/**@type {!HTMLTextAreaElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).value = value;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HTMLTextAreaElementMethods.$clinit = () =>{};
  HTMLTextAreaElementMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HTMLTextAreaElementMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HTMLTextAreaElementMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HTMLTextAreaElementMethods.$markImplementor(/**@type {Function}*/ (HTMLTextAreaElementMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HTMLTextAreaElementMethods), 'org.jboss.elemento.HTMLTextAreaElementMethods');

exports = HTMLTextAreaElementMethods;

//# sourceMappingURL=HTMLTextAreaElementMethods.js.map
