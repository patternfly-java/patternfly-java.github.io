goog.module('org.jboss.elemento.svg.SVGElementStyleMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class SVGElementStyleMethods {
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
 static m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !SVGElementStyleMethods<E, B> */ $thisArg, /** ?string */ style) {
  SVGElementStyleMethods.$clinit();
  return $thisArg.m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(style, true);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !SVGElementStyleMethods<E, B> */ $thisArg, /** ?string */ style, /** boolean */ append) {
  SVGElementStyleMethods.$clinit();
  if (append) {
   {
    let $qualifier = (/**@type {!SVGElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).style;
    $qualifier.cssText = j_l_String.m_valueOf__java_lang_Object__java_lang_String($qualifier.cssText) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(style);
   }
  } else {
   (/**@type {!SVGElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).style.cssText = style;
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** !SVGElementStyleMethods<E, B> */ $thisArg, /** ?string */ property, /** number */ value) {
  SVGElementStyleMethods.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, j_l_String.m_valueOf__int__java_lang_String(value), false);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !SVGElementStyleMethods<E, B> */ $thisArg, /** ?string */ property, /** ?string */ value) {
  SVGElementStyleMethods.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, value, false);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** !SVGElementStyleMethods<E, B> */ $thisArg, /** ?string */ property, /** number */ value, /** boolean */ important) {
  SVGElementStyleMethods.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, j_l_String.m_valueOf__int__java_lang_String(value), important);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !SVGElementStyleMethods<E, B> */ $thisArg, /** ?string */ property, /** ?string */ value, /** boolean */ important) {
  SVGElementStyleMethods.$clinit();
  let priority = important ? 'important' : '';
  (/**@type {!SVGElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).style.setProperty(property, value, priority);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  SVGElementStyleMethods.$clinit = () =>{};
  SVGElementStyleMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_svg_SVGElementStyleMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_svg_SVGElementStyleMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
SVGElementStyleMethods.$markImplementor(/**@type {Function}*/ (SVGElementStyleMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (SVGElementStyleMethods), 'org.jboss.elemento.svg.SVGElementStyleMethods');

exports = SVGElementStyleMethods;

//# sourceMappingURL=SVGElementStyleMethods.js.map
