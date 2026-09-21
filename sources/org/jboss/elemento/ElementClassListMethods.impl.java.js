goog.module('org.jboss.elemento.ElementClassListMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ElementClassListMethods {
 /** @abstract @nodts @return {B} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ classes) {}
 /** @abstract @nodts @return {B} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ className) {}
 /** @abstract @nodts @return {B} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ className, /** boolean */ force) {}
 /** @abstract @nodts @return {B} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ className, /** Supplier<?boolean> */ force) {}
 /** @abstract @nodts @return {B} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ classList) {}
 /** @abstract @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {}
 /** @nodts @template E, B @return {B} */
 static m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementClassListMethods<E, B> */ $thisArg, /** Array<?string> */ classes) {
  ElementClassListMethods.$clinit();
  $thisArg.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(classes);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementClassListMethods<E, B> */ $thisArg, /** ?string */ className) {
  ElementClassListMethods.$clinit();
  $thisArg.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__void(className);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !ElementClassListMethods<E, B> */ $thisArg, /** ?string */ className, /** boolean */ force) {
  ElementClassListMethods.$clinit();
  $thisArg.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(className, force);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** !ElementClassListMethods<E, B> */ $thisArg, /** ?string */ className, /** Supplier<?boolean> */ force) {
  ElementClassListMethods.$clinit();
  $thisArg.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(className, Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(force.m_get__java_lang_Object(), Boolean))));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** !ElementClassListMethods<E, B> */ $thisArg, /** Consumer<ClassList<E>> */ classList) {
  ElementClassListMethods.$clinit();
  classList.m_accept__java_lang_Object__void(/**@type {ClassList<E>}*/ (ClassList.m_classList__elemental2_dom_Element__org_jboss_elemento_ClassList($thisArg.m_element__elemental2_dom_Element())));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {ClassList<E>} */
 static m_classList__$default__org_jboss_elemento_ElementClassListMethods__org_jboss_elemento_ClassList(/** !ElementClassListMethods<E, B> */ $thisArg) {
  ElementClassListMethods.$clinit();
  return /**@type {ClassList<E>}*/ (ClassList.m_classList__elemental2_dom_Element__org_jboss_elemento_ClassList($thisArg.m_element__elemental2_dom_Element()));
 }
 /** @nodts */
 static $clinit() {
  ElementClassListMethods.$clinit = () =>{};
  ElementClassListMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementClassListMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementClassListMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  ClassList = goog.module.get('org.jboss.elemento.ClassList$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementClassListMethods.$markImplementor(/**@type {Function}*/ (ElementClassListMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementClassListMethods), 'org.jboss.elemento.ElementClassListMethods');

exports = ElementClassListMethods;

//# sourceMappingURL=ElementClassListMethods.js.map
