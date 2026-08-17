goog.module('org.jboss.elemento.HTMLElementStyleMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HTMLElementStyleMethods {
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ style) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ style, /** boolean */ append) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ property, /** number */ value) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ property, /** ?string */ value) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ property, /** number */ value, /** boolean */ important) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ property, /** ?string */ value, /** boolean */ important) {}
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLElementStyleMethods<E, B> */ $thisArg, /** ?string */ style) {
  HTMLElementStyleMethods.$clinit();
  return $thisArg.m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(style, true);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLElementStyleMethods<E, B> */ $thisArg, /** ?string */ style, /** boolean */ append) {
  HTMLElementStyleMethods.$clinit();
  if (append) {
   {
    let $qualifier = (/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).style;
    $qualifier.cssText = j_l_String.m_valueOf__java_lang_Object__java_lang_String($qualifier.cssText) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(style);
   }
  } else {
   (/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).style.cssText = style;
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** !HTMLElementStyleMethods<E, B> */ $thisArg, /** ?string */ property, /** number */ value) {
  HTMLElementStyleMethods.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, j_l_String.m_valueOf__int__java_lang_String(value), false);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLElementStyleMethods<E, B> */ $thisArg, /** ?string */ property, /** ?string */ value) {
  HTMLElementStyleMethods.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, value, false);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLElementStyleMethods<E, B> */ $thisArg, /** ?string */ property, /** number */ value, /** boolean */ important) {
  HTMLElementStyleMethods.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, j_l_String.m_valueOf__int__java_lang_String(value), important);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !HTMLElementStyleMethods<E, B> */ $thisArg, /** ?string */ property, /** ?string */ value, /** boolean */ important) {
  HTMLElementStyleMethods.$clinit();
  let priority = important ? 'important' : '';
  (/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).style.setProperty(property, value, priority);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HTMLElementStyleMethods.$clinit = () =>{};
  HTMLElementStyleMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HTMLElementStyleMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HTMLElementStyleMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HTMLElementStyleMethods.$markImplementor(/**@type {Function}*/ (HTMLElementStyleMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HTMLElementStyleMethods), 'org.jboss.elemento.HTMLElementStyleMethods');

exports = HTMLElementStyleMethods;

//# sourceMappingURL=HTMLElementStyleMethods.js.map
