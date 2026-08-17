goog.module('org.jboss.elemento.ElementContainerMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ElementContainerMethods {
 /** @abstract @nodts @return {B} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @nodts @return {B} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ node) {}
 /** @abstract @nodts @return {B} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ element) {}
 /** @abstract @nodts @return {B} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ supplier) {}
 /** @abstract @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ nodes) {}
 /** @abstract @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ elements) {}
 /** @abstract @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ elements) {}
 /** @abstract @nodts @return {B} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ elements) {}
 /** @abstract @nodts @return {B} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ elements) {}
 /** @abstract @nodts @return {B} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Iterable<?>> */ supplier) {}
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_ElementContainerMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** ?string */ text) {
  ElementContainerMethods.$clinit();
  (/**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element())).appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Text((/**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element())).ownerDocument, text));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_ElementContainerMethods__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** Node */ node) {
  ElementContainerMethods.$clinit();
  (/**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element())).appendChild(node);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_ElementContainerMethods__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** IsElement<?> */ element) {
  ElementContainerMethods.$clinit();
  if (!$Equality.$same(element, null)) {
   return $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** Supplier<Node> */ supplier) {
  ElementContainerMethods.$clinit();
  (/**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element())).appendChild(/**@type {Node}*/ ($Casts.$to(supplier.m_get__java_lang_Object(), Node_$Overlay)));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** Array<Node> */ nodes) {
  ElementContainerMethods.$clinit();
  for (let $array = nodes, $index = 0; $index < $array.length; $index++) {
   let node = $array[$index];
   {
    $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(node);
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** Array<Element> */ elements) {
  ElementContainerMethods.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** Array<HTMLElement> */ elements) {
  ElementContainerMethods.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** Array<IsElement<?>> */ elements) {
  ElementContainerMethods.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    if (!$Equality.$same(element, null)) {
     $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
    }
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** Iterable<?> */ elements) {
  ElementContainerMethods.$clinit();
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = $iterator.m_next__java_lang_Object();
   {
    if (Node_$Overlay.$isInstance(element)) {
     $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ ($Casts.$to(element, Node_$Overlay)));
    } else if (IsElement.$isInstance(element)) {
     $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder((/**@type {IsElement}*/ ($Casts.$to(element, /**@type {Function}*/ (IsElement)))).m_element__elemental2_dom_Element());
    }
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** !ElementContainerMethods<E, B> */ $thisArg, /** Supplier<Iterable<?>> */ supplier) {
  ElementContainerMethods.$clinit();
  $thisArg.m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/**@type {Iterable<*>}*/ ($Casts.$to(supplier.m_get__java_lang_Object(), /**@type {Function}*/ (Iterable))));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  ElementContainerMethods.$clinit = () =>{};
  ElementContainerMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_ElementContainerMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementContainerMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementContainerMethods.$markImplementor(/**@type {Function}*/ (ElementContainerMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ElementContainerMethods), 'org.jboss.elemento.ElementContainerMethods');

exports = ElementContainerMethods;

//# sourceMappingURL=ElementContainerMethods.js.map
