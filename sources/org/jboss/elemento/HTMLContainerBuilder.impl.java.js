goog.module('org.jboss.elemento.HTMLContainerBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementAttributeMethods = goog.require('org.jboss.elemento.ElementAttributeMethods$impl');
const ElementClassListMethods = goog.require('org.jboss.elemento.ElementClassListMethods$impl');
const ElementConsumerMethods = goog.require('org.jboss.elemento.ElementConsumerMethods$impl');
const ElementContainerMethods = goog.require('org.jboss.elemento.ElementContainerMethods$impl');
const ElementEventMethods = goog.require('org.jboss.elemento.ElementEventMethods$impl');
const ElementHTMLMethods = goog.require('org.jboss.elemento.ElementHTMLMethods$impl');
const ElementIdMethods = goog.require('org.jboss.elemento.ElementIdMethods$impl');
const ElementQueryMethods = goog.require('org.jboss.elemento.ElementQueryMethods$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const HTMLElementAttributeMethods = goog.require('org.jboss.elemento.HTMLElementAttributeMethods$impl');
const HTMLElementDataMethods = goog.require('org.jboss.elemento.HTMLElementDataMethods$impl');
const HTMLElementStyleMethods = goog.require('org.jboss.elemento.HTMLElementStyleMethods$impl');
const HTMLElementVisibilityMethods = goog.require('org.jboss.elemento.HTMLElementVisibilityMethods$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Role = goog.forwardDeclare('org.jboss.elemento.Role$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @implements {ElementAttributeMethods<E, HTMLContainerBuilder<E>>}
 * @implements {ElementClassListMethods<E, HTMLContainerBuilder<E>>}
 * @implements {ElementContainerMethods<E, HTMLContainerBuilder<E>>}
 * @implements {ElementConsumerMethods<E, HTMLContainerBuilder<E>>}
 * @implements {ElementEventMethods<E, HTMLContainerBuilder<E>>}
 * @implements {ElementHTMLMethods<E, HTMLContainerBuilder<E>>}
 * @implements {ElementIdMethods<E, HTMLContainerBuilder<E>>}
 * @implements {ElementQueryMethods<E>}
 * @implements {ElementTextMethods<E, HTMLContainerBuilder<E>>}
 * @implements {HTMLElementAttributeMethods<E, HTMLContainerBuilder<E>>}
 * @implements {HTMLElementDataMethods<E, HTMLContainerBuilder<E>>}
 * @implements {HTMLElementStyleMethods<E, HTMLContainerBuilder<E>>}
 * @implements {HTMLElementVisibilityMethods<E, HTMLContainerBuilder<E>>}
 */
class HTMLContainerBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_HTMLContainerBuilder_;
 }
 /** @nodts @template E @return {!HTMLContainerBuilder<E>} */
 static $create__elemental2_dom_HTMLElement(/** E */ element) {
  HTMLContainerBuilder.$clinit();
  let $instance = new HTMLContainerBuilder();
  $instance.$ctor__org_jboss_elemento_HTMLContainerBuilder__elemental2_dom_HTMLElement__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_HTMLContainerBuilder__elemental2_dom_HTMLElement__void(/** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__org_jboss_elemento_HTMLContainerBuilder_ = (/**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay)));
 }
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_that__org_jboss_elemento_HTMLContainerBuilder() {
  return this;
 }
 /** @nodts @return {E} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_element__org_jboss_elemento_HTMLContainerBuilder_;
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_jboss_elemento_HTMLContainerBuilder();
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(/** Role */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_role__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__org_jboss_elemento_ClassList(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<HTMLContainerBuilder<E>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {SafeHtml} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml() {
  return ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
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
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementAttributeMethods.m_title__$default__org_jboss_elemento_HTMLElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_data__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementVisibilityMethods.m_hidden__$default__org_jboss_elemento_HTMLElementVisibilityMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_HTMLContainerBuilder(/** Role */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_role__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** Array<?string> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_HTMLContainerBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_add__elemental2_dom_Node__org_jboss_elemento_HTMLContainerBuilder(/** Node */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_HTMLContainerBuilder(/** IsElement<?> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_add__java_util_function_Supplier__org_jboss_elemento_HTMLContainerBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_HTMLContainerBuilder(/** Array<Node> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Array<Element> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/** Array<HTMLElement> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_HTMLContainerBuilder(/** Array<IsElement<?>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_HTMLContainerBuilder(/** Iterable<?> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_HTMLContainerBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_HTMLContainerBuilder(/** Consumer<E> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_HTMLContainerBuilder(/** Consumer<HTMLContainerBuilder<E>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLContainerBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLContainerBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLContainerBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_HTMLContainerBuilder(/** SafeHtml */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_uniqueId__org_jboss_elemento_HTMLContainerBuilder() {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_text__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementAttributeMethods.m_title__$default__org_jboss_elemento_HTMLElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_data__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_HTMLContainerBuilder(/** boolean */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HTMLElementVisibilityMethods.m_hidden__$default__org_jboss_elemento_HTMLElementVisibilityMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 /** @nodts */
 static $clinit() {
  HTMLContainerBuilder.$clinit = () =>{};
  HTMLContainerBuilder.$loadModules();
  j_l_Object.$clinit();
  ElementAttributeMethods.$clinit();
  ElementClassListMethods.$clinit();
  ElementContainerMethods.$clinit();
  ElementConsumerMethods.$clinit();
  ElementEventMethods.$clinit();
  ElementHTMLMethods.$clinit();
  ElementIdMethods.$clinit();
  ElementQueryMethods.$clinit();
  ElementTextMethods.$clinit();
  HTMLElementAttributeMethods.$clinit();
  HTMLElementDataMethods.$clinit();
  HTMLElementStyleMethods.$clinit();
  HTMLElementVisibilityMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLContainerBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementAttributeMethods.$markImplementor(HTMLContainerBuilder);
ElementClassListMethods.$markImplementor(HTMLContainerBuilder);
ElementContainerMethods.$markImplementor(HTMLContainerBuilder);
ElementConsumerMethods.$markImplementor(HTMLContainerBuilder);
ElementEventMethods.$markImplementor(HTMLContainerBuilder);
ElementHTMLMethods.$markImplementor(HTMLContainerBuilder);
ElementIdMethods.$markImplementor(HTMLContainerBuilder);
ElementQueryMethods.$markImplementor(HTMLContainerBuilder);
ElementTextMethods.$markImplementor(HTMLContainerBuilder);
HTMLElementAttributeMethods.$markImplementor(HTMLContainerBuilder);
HTMLElementDataMethods.$markImplementor(HTMLContainerBuilder);
HTMLElementStyleMethods.$markImplementor(HTMLContainerBuilder);
HTMLElementVisibilityMethods.$markImplementor(HTMLContainerBuilder);
$Util.$setClassMetadata(HTMLContainerBuilder, 'org.jboss.elemento.HTMLContainerBuilder');

exports = HTMLContainerBuilder;

//# sourceMappingURL=HTMLContainerBuilder.js.map
