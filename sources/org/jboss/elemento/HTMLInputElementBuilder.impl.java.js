goog.module('org.jboss.elemento.HTMLInputElementBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementAttributeMethods = goog.require('org.jboss.elemento.ElementAttributeMethods$impl');
const ElementClassListMethods = goog.require('org.jboss.elemento.ElementClassListMethods$impl');
const ElementConsumerMethods = goog.require('org.jboss.elemento.ElementConsumerMethods$impl');
const ElementEventMethods = goog.require('org.jboss.elemento.ElementEventMethods$impl');
const ElementHTMLMethods = goog.require('org.jboss.elemento.ElementHTMLMethods$impl');
const ElementIdMethods = goog.require('org.jboss.elemento.ElementIdMethods$impl');
const ElementQueryMethods = goog.require('org.jboss.elemento.ElementQueryMethods$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const HTMLElementAttributeMethods = goog.require('org.jboss.elemento.HTMLElementAttributeMethods$impl');
const HTMLElementDataMethods = goog.require('org.jboss.elemento.HTMLElementDataMethods$impl');
const HTMLElementStyleMethods = goog.require('org.jboss.elemento.HTMLElementStyleMethods$impl');
const HTMLElementVisibilityMethods = goog.require('org.jboss.elemento.HTMLElementVisibilityMethods$impl');
const HTMLInputElementMethods = goog.require('org.jboss.elemento.HTMLInputElementMethods$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Role = goog.forwardDeclare('org.jboss.elemento.Role$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @implements {ElementAttributeMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {ElementClassListMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {ElementConsumerMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {ElementEventMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {ElementHTMLMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {ElementIdMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {ElementQueryMethods<E>}
 * @implements {ElementTextMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {HTMLElementAttributeMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {HTMLElementDataMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {HTMLElementStyleMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {HTMLElementVisibilityMethods<E, HTMLInputElementBuilder<E>>}
 * @implements {HTMLInputElementMethods<E, HTMLInputElementBuilder<E>>}
 */
class HTMLInputElementBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_HTMLInputElementBuilder_;
 }
 /** @nodts @template E @return {!HTMLInputElementBuilder<E>} */
 static $create__elemental2_dom_HTMLInputElement(/** E */ element) {
  HTMLInputElementBuilder.$clinit();
  let $instance = new HTMLInputElementBuilder();
  $instance.$ctor__org_jboss_elemento_HTMLInputElementBuilder__elemental2_dom_HTMLInputElement__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_HTMLInputElementBuilder__elemental2_dom_HTMLInputElement__void(/** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__org_jboss_elemento_HTMLInputElementBuilder_ = (/**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay)));
 }
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_that__org_jboss_elemento_HTMLInputElementBuilder() {
  return this;
 }
 /** @nodts @return {E} */
 m_element__elemental2_dom_HTMLInputElement() {
  return this.f_element__org_jboss_elemento_HTMLInputElementBuilder_;
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_jboss_elemento_HTMLInputElementBuilder();
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLInputElement();
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(/** Role */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_role__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__org_jboss_elemento_ClassList(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<HTMLInputElementBuilder<E>> */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLInputElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLInputElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLInputElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {SafeHtml} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml() {
  return ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
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
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementAttributeMethods.m_title__$default__org_jboss_elemento_HTMLElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_data__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementVisibilityMethods.m_hidden__$default__org_jboss_elemento_HTMLElementVisibilityMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_accept__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_accept__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_autofocus__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_autofocus__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_autocomplete__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_autocomplete__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_checked__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_checked__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_defaultValue__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_defaultValue__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_disabled__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_indeterminate__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_indeterminate__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_max__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_max__$default__org_jboss_elemento_HTMLInputElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_max__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_max__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_min__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_min__$default__org_jboss_elemento_HTMLInputElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_min__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_min__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_multiple__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_multiple__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_name__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_name__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_placeholder__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_placeholder__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_readOnly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_readOnly__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_required__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_tabIndex__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_tabIndex__$default__org_jboss_elemento_HTMLInputElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLInputElementBuilder<E>} */
 m_value__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_value__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_HTMLInputElementBuilder(/** Role */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_role__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** Array<?string> */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_HTMLInputElementBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_HTMLInputElementBuilder(/** Consumer<E> */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_HTMLInputElementBuilder(/** Consumer<HTMLInputElementBuilder<E>> */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLInputElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLInputElementBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLInputElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLInputElementBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLInputElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLInputElementBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_HTMLInputElementBuilder(/** SafeHtml */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_uniqueId__org_jboss_elemento_HTMLInputElementBuilder() {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_text__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementAttributeMethods.m_title__$default__org_jboss_elemento_HTMLElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_data__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLElementVisibilityMethods.m_hidden__$default__org_jboss_elemento_HTMLElementVisibilityMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_accept__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_accept__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_autofocus__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_autofocus__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_autocomplete__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_autocomplete__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_checked__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_checked__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_defaultValue__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_defaultValue__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_disabled__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_disabled__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_indeterminate__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_indeterminate__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_max__int__org_jboss_elemento_HTMLInputElementBuilder(/** number */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_max__$default__org_jboss_elemento_HTMLInputElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_max__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_max__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_min__int__org_jboss_elemento_HTMLInputElementBuilder(/** number */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_min__$default__org_jboss_elemento_HTMLInputElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_min__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_min__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_multiple__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_multiple__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_name__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_name__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_placeholder__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_placeholder__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_readOnly__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_readOnly__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_required__boolean__org_jboss_elemento_HTMLInputElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_required__$default__org_jboss_elemento_HTMLInputElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_tabIndex__int__org_jboss_elemento_HTMLInputElementBuilder(/** number */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_tabIndex__$default__org_jboss_elemento_HTMLInputElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLInputElementBuilder<E>} */
 m_value__java_lang_String__org_jboss_elemento_HTMLInputElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLInputElementBuilder<E>}*/ ($Casts.$to(HTMLInputElementMethods.m_value__$default__org_jboss_elemento_HTMLInputElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLInputElementBuilder));
 }
 /** @nodts */
 static $clinit() {
  HTMLInputElementBuilder.$clinit = () =>{};
  HTMLInputElementBuilder.$loadModules();
  j_l_Object.$clinit();
  ElementAttributeMethods.$clinit();
  ElementClassListMethods.$clinit();
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
  HTMLInputElementMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLInputElementBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementAttributeMethods.$markImplementor(HTMLInputElementBuilder);
ElementClassListMethods.$markImplementor(HTMLInputElementBuilder);
ElementConsumerMethods.$markImplementor(HTMLInputElementBuilder);
ElementEventMethods.$markImplementor(HTMLInputElementBuilder);
ElementHTMLMethods.$markImplementor(HTMLInputElementBuilder);
ElementIdMethods.$markImplementor(HTMLInputElementBuilder);
ElementQueryMethods.$markImplementor(HTMLInputElementBuilder);
ElementTextMethods.$markImplementor(HTMLInputElementBuilder);
HTMLElementAttributeMethods.$markImplementor(HTMLInputElementBuilder);
HTMLElementDataMethods.$markImplementor(HTMLInputElementBuilder);
HTMLElementStyleMethods.$markImplementor(HTMLInputElementBuilder);
HTMLElementVisibilityMethods.$markImplementor(HTMLInputElementBuilder);
HTMLInputElementMethods.$markImplementor(HTMLInputElementBuilder);
$Util.$setClassMetadata(HTMLInputElementBuilder, 'org.jboss.elemento.HTMLInputElementBuilder');

exports = HTMLInputElementBuilder;

//# sourceMappingURL=HTMLInputElementBuilder.js.map
