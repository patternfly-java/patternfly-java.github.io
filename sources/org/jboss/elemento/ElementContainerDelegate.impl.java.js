goog.module('org.jboss.elemento.ElementContainerDelegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerMethods = goog.require('org.jboss.elemento.ElementContainerMethods$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {ElementContainerMethods<E, B>}
 */
class ElementContainerDelegate {
 /** @abstract @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {}
 /** @abstract @override @nodts @return {B} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @override @nodts @return {B} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ node) {}
 /** @abstract @override @nodts @return {B} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ supplier) {}
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementContainerDelegate<E, B> */ $thisArg, /** ?string */ text) {
  ElementContainerDelegate.$clinit();
  $thisArg.m_containerDelegate__elemental2_dom_Element().appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Text((/**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element())).ownerDocument, text));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** !ElementContainerDelegate<E, B> */ $thisArg, /** Node */ node) {
  ElementContainerDelegate.$clinit();
  $thisArg.m_containerDelegate__elemental2_dom_Element().appendChild(node);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** !ElementContainerDelegate<E, B> */ $thisArg, /** Supplier<Node> */ supplier) {
  ElementContainerDelegate.$clinit();
  $thisArg.m_containerDelegate__elemental2_dom_Element().appendChild(/**@type {Node}*/ ($Casts.$to(supplier.m_get__java_lang_Object(), Node_$Overlay)));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  ElementContainerDelegate.$clinit = () =>{};
  ElementContainerDelegate.$loadModules();
  ElementContainerMethods.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  ElementContainerMethods.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementContainerDelegate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementContainerDelegate;
 }
 
 /** @nodts */
 static $loadModules() {
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementContainerDelegate.$markImplementor(/**@type {Function}*/ (ElementContainerDelegate));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementContainerDelegate), 'org.jboss.elemento.ElementContainerDelegate');

exports = ElementContainerDelegate;

//# sourceMappingURL=ElementContainerDelegate.js.map
