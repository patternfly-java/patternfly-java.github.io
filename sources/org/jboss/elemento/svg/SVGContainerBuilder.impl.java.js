goog.module('org.jboss.elemento.svg.SVGContainerBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementAttributeMethods = goog.require('org.jboss.elemento.ElementAttributeMethods$impl');
const ElementClassListMethods = goog.require('org.jboss.elemento.ElementClassListMethods$impl');
const ElementConsumerMethods = goog.require('org.jboss.elemento.ElementConsumerMethods$impl');
const ElementContainerMethods = goog.require('org.jboss.elemento.ElementContainerMethods$impl');
const ElementEventMethods = goog.require('org.jboss.elemento.ElementEventMethods$impl');
const ElementIdMethods = goog.require('org.jboss.elemento.ElementIdMethods$impl');
const ElementQueryMethods = goog.require('org.jboss.elemento.ElementQueryMethods$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const SVGElementDataMethods = goog.require('org.jboss.elemento.svg.SVGElementDataMethods$impl');
const SVGElementStyleMethods = goog.require('org.jboss.elemento.svg.SVGElementStyleMethods$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Role = goog.forwardDeclare('org.jboss.elemento.Role$impl');
let $Overlay = goog.forwardDeclare('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @implements {ElementAttributeMethods<E, SVGContainerBuilder<E>>}
 * @implements {ElementClassListMethods<E, SVGContainerBuilder<E>>}
 * @implements {ElementConsumerMethods<E, SVGContainerBuilder<E>>}
 * @implements {ElementContainerMethods<E, SVGContainerBuilder<E>>}
 * @implements {ElementEventMethods<E, SVGContainerBuilder<E>>}
 * @implements {ElementIdMethods<E, SVGContainerBuilder<E>>}
 * @implements {ElementQueryMethods<E>}
 * @implements {ElementTextMethods<E, SVGContainerBuilder<E>>}
 * @implements {SVGElementDataMethods<E, SVGContainerBuilder<E>>}
 * @implements {SVGElementStyleMethods<E, SVGContainerBuilder<E>>}
 */
class SVGContainerBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_svg_SVGContainerBuilder_;
 }
 /** @nodts @template E @return {!SVGContainerBuilder<E>} */
 static $create__org_jboss_elemento_svg_SVGElement(/** E */ element) {
  SVGContainerBuilder.$clinit();
  let $instance = new SVGContainerBuilder();
  $instance.$ctor__org_jboss_elemento_svg_SVGContainerBuilder__org_jboss_elemento_svg_SVGElement__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_svg_SVGContainerBuilder__org_jboss_elemento_svg_SVGElement__void(/** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__org_jboss_elemento_svg_SVGContainerBuilder_ = (/**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay)));
 }
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_that__org_jboss_elemento_svg_SVGContainerBuilder() {
  return this;
 }
 /** @nodts @return {E} */
 m_element__org_jboss_elemento_svg_SVGElement() {
  return this.f_element__org_jboss_elemento_svg_SVGContainerBuilder_;
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_jboss_elemento_svg_SVGContainerBuilder();
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__org_jboss_elemento_svg_SVGElement();
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(/** Role */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_role__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__org_jboss_elemento_ClassList(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<SVGContainerBuilder<E>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {SVGContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {SVGContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {SVGContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_querySelectorAll__org_jboss_elemento_By__java_lang_Iterable(/** By */ arg0) {
  return ElementQueryMethods.m_querySelectorAll__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__java_lang_Iterable(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return ElementQueryMethods.m_querySelector__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_closest__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return ElementQueryMethods.m_closest__$default__org_jboss_elemento_ElementQueryMethods__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementDataMethods.m_data__$default__org_jboss_elemento_svg_SVGElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_svg_SVGContainerBuilder(/** Role */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_role__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<?string> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_svg_SVGContainerBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_svg_SVGContainerBuilder(/** Consumer<E> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_svg_SVGContainerBuilder(/** Consumer<SVGContainerBuilder<E>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_add__elemental2_dom_Node__org_jboss_elemento_svg_SVGContainerBuilder(/** Node */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_svg_SVGContainerBuilder(/** IsElement<?> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_add__java_util_function_Supplier__org_jboss_elemento_svg_SVGContainerBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<Node> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<Element> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<HTMLElement> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<IsElement<?>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_svg_SVGContainerBuilder(/** Iterable<?> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_svg_SVGContainerBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {SVGContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_svg_SVGContainerBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {SVGContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_svg_SVGContainerBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {SVGContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_svg_SVGContainerBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_uniqueId__org_jboss_elemento_svg_SVGContainerBuilder() {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_text__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementDataMethods.m_data__$default__org_jboss_elemento_svg_SVGElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 /** @nodts */
 static $clinit() {
  SVGContainerBuilder.$clinit = () =>{};
  SVGContainerBuilder.$loadModules();
  j_l_Object.$clinit();
  ElementAttributeMethods.$clinit();
  ElementClassListMethods.$clinit();
  ElementConsumerMethods.$clinit();
  ElementContainerMethods.$clinit();
  ElementEventMethods.$clinit();
  ElementIdMethods.$clinit();
  ElementQueryMethods.$clinit();
  ElementTextMethods.$clinit();
  SVGElementDataMethods.$clinit();
  SVGElementStyleMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SVGContainerBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  $Overlay = goog.module.get('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementAttributeMethods.$markImplementor(SVGContainerBuilder);
ElementClassListMethods.$markImplementor(SVGContainerBuilder);
ElementConsumerMethods.$markImplementor(SVGContainerBuilder);
ElementContainerMethods.$markImplementor(SVGContainerBuilder);
ElementEventMethods.$markImplementor(SVGContainerBuilder);
ElementIdMethods.$markImplementor(SVGContainerBuilder);
ElementQueryMethods.$markImplementor(SVGContainerBuilder);
ElementTextMethods.$markImplementor(SVGContainerBuilder);
SVGElementDataMethods.$markImplementor(SVGContainerBuilder);
SVGElementStyleMethods.$markImplementor(SVGContainerBuilder);
$Util.$setClassMetadata(SVGContainerBuilder, 'org.jboss.elemento.svg.SVGContainerBuilder');

exports = SVGContainerBuilder;

//# sourceMappingURL=SVGContainerBuilder.js.map
