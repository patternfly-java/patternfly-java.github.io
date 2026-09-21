goog.module('org.jboss.elemento.ElementAttributeMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Role = goog.forwardDeclare('org.jboss.elemento.Role$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ElementAttributeMethods {
 /** @abstract @nodts @return {B} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** boolean */ value) {}
 /** @abstract @nodts @return {B} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** number */ value) {}
 /** @abstract @nodts @return {B} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** ?string */ value) {}
 /** @abstract @nodts @return {B} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** boolean */ value) {}
 /** @abstract @nodts @return {B} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** number */ value) {}
 /** @abstract @nodts @return {B} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** ?string */ value) {}
 /** @abstract @nodts @return {B} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(/** Role */ role) {}
 /** @abstract @nodts @return {B} */
 m_role__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ role) {}
 /** @nodts @template E, B @return {B} */
 static m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !ElementAttributeMethods<E, B> */ $thisArg, /** ?string */ name, /** boolean */ value) {
  ElementAttributeMethods.$clinit();
  $Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()), name, value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** !ElementAttributeMethods<E, B> */ $thisArg, /** ?string */ name, /** number */ value) {
  ElementAttributeMethods.$clinit();
  $Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__double__void(/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()), name, value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementAttributeMethods<E, B> */ $thisArg, /** ?string */ name, /** ?string */ value) {
  ElementAttributeMethods.$clinit();
  $Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()), name, value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !ElementAttributeMethods<E, B> */ $thisArg, /** ?string */ name, /** boolean */ value) {
  ElementAttributeMethods.$clinit();
  let safeName = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(name, 'aria-') ? name : 'aria-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
  return $thisArg.m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(safeName, value);
 }
 /** @nodts @template E, B @return {B} */
 static m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** !ElementAttributeMethods<E, B> */ $thisArg, /** ?string */ name, /** number */ value) {
  ElementAttributeMethods.$clinit();
  let safeName = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(name, 'aria-') ? name : 'aria-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
  return $thisArg.m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(safeName, value);
 }
 /** @nodts @template E, B @return {B} */
 static m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementAttributeMethods<E, B> */ $thisArg, /** ?string */ name, /** ?string */ value) {
  ElementAttributeMethods.$clinit();
  let safeName = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(name, 'aria-') ? name : 'aria-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
  return $thisArg.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(safeName, value);
 }
 /** @nodts @template E, B @return {B} */
 static m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(/** !ElementAttributeMethods<E, B> */ $thisArg, /** Role */ role) {
  ElementAttributeMethods.$clinit();
  return $thisArg.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', role.f_name__org_jboss_elemento_Role);
 }
 /** @nodts @template E, B @return {B} */
 static m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementAttributeMethods<E, B> */ $thisArg, /** ?string */ role) {
  ElementAttributeMethods.$clinit();
  return $thisArg.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', role);
 }
 /** @nodts */
 static $clinit() {
  ElementAttributeMethods.$clinit = () =>{};
  ElementAttributeMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementAttributeMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementAttributeMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
ElementAttributeMethods.$markImplementor(/**@type {Function}*/ (ElementAttributeMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementAttributeMethods), 'org.jboss.elemento.ElementAttributeMethods');

exports = ElementAttributeMethods;

//# sourceMappingURL=ElementAttributeMethods.js.map
