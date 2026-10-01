goog.module('org.jboss.elemento.HTMLTextAreaElementBuilder$impl');

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
const HTMLTextAreaElementMethods = goog.require('org.jboss.elemento.HTMLTextAreaElementMethods$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
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
 * @implements {ElementAttributeMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {ElementClassListMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {ElementConsumerMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {ElementEventMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {ElementHTMLMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {ElementIdMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {ElementQueryMethods<E>}
 * @implements {ElementTextMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {HTMLElementAttributeMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {HTMLElementDataMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {HTMLElementStyleMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {HTMLElementVisibilityMethods<E, HTMLTextAreaElementBuilder<E>>}
 * @implements {HTMLTextAreaElementMethods<E, HTMLTextAreaElementBuilder<E>>}
 */
class HTMLTextAreaElementBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_HTMLTextAreaElementBuilder_;
 }
 /** @nodts @template E @return {!HTMLTextAreaElementBuilder<E>} */
 static $create__elemental2_dom_HTMLTextAreaElement(/** E */ element) {
  HTMLTextAreaElementBuilder.$clinit();
  let $instance = new HTMLTextAreaElementBuilder();
  $instance.$ctor__org_jboss_elemento_HTMLTextAreaElementBuilder__elemental2_dom_HTMLTextAreaElement__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_HTMLTextAreaElementBuilder__elemental2_dom_HTMLTextAreaElement__void(/** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__org_jboss_elemento_HTMLTextAreaElementBuilder_ = (/**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay)));
 }
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_that__org_jboss_elemento_HTMLTextAreaElementBuilder() {
  return this;
 }
 /** @nodts @return {E} */
 m_element__elemental2_dom_HTMLTextAreaElement() {
  return this.f_element__org_jboss_elemento_HTMLTextAreaElementBuilder_;
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_jboss_elemento_HTMLTextAreaElementBuilder();
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLTextAreaElement();
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(/** Role */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_role__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__org_jboss_elemento_ClassList(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<HTMLTextAreaElementBuilder<E>> */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLTextAreaElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLTextAreaElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLTextAreaElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {SafeHtml} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml() {
  return ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
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
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementAttributeMethods.m_title__$default__org_jboss_elemento_HTMLElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_data__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementVisibilityMethods.m_hidden__$default__org_jboss_elemento_HTMLElementVisibilityMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_autofocus__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_autofocus__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_cols__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_cols__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_disabled__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_rows__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_rows__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_maxLength__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_maxLength__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_minLength__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_minLength__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_name__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_name__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_placeholder__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_placeholder__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_readOnly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_readOnly__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_tabIndex__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_tabIndex__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_value__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_value__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_HTMLTextAreaElementBuilder(/** Role */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_role__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** Array<?string> */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_HTMLTextAreaElementBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_HTMLTextAreaElementBuilder(/** Consumer<E> */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_HTMLTextAreaElementBuilder(/** Consumer<HTMLTextAreaElementBuilder<E>> */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLTextAreaElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLTextAreaElementBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLTextAreaElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLTextAreaElementBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLTextAreaElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLTextAreaElementBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_HTMLTextAreaElementBuilder(/** SafeHtml */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_uniqueId__org_jboss_elemento_HTMLTextAreaElementBuilder() {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_text__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementAttributeMethods.m_title__$default__org_jboss_elemento_HTMLElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_data__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLElementVisibilityMethods.m_hidden__$default__org_jboss_elemento_HTMLElementVisibilityMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_autofocus__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_autofocus__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_cols__int__org_jboss_elemento_HTMLTextAreaElementBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_cols__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_disabled__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_disabled__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_rows__int__org_jboss_elemento_HTMLTextAreaElementBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_rows__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_maxLength__int__org_jboss_elemento_HTMLTextAreaElementBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_maxLength__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_minLength__int__org_jboss_elemento_HTMLTextAreaElementBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_minLength__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_name__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_name__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_placeholder__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_placeholder__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_readOnly__boolean__org_jboss_elemento_HTMLTextAreaElementBuilder(/** boolean */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_readOnly__$default__org_jboss_elemento_HTMLTextAreaElementMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_tabIndex__int__org_jboss_elemento_HTMLTextAreaElementBuilder(/** number */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_tabIndex__$default__org_jboss_elemento_HTMLTextAreaElementMethods__int__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLTextAreaElementBuilder<E>} */
 m_value__java_lang_String__org_jboss_elemento_HTMLTextAreaElementBuilder(/** ?string */ arg0) {
  return /**@type {HTMLTextAreaElementBuilder<E>}*/ ($Casts.$to(HTMLTextAreaElementMethods.m_value__$default__org_jboss_elemento_HTMLTextAreaElementMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLTextAreaElementBuilder));
 }
 /** @nodts */
 static $clinit() {
  HTMLTextAreaElementBuilder.$clinit = () =>{};
  HTMLTextAreaElementBuilder.$loadModules();
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
  HTMLTextAreaElementMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLTextAreaElementBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementAttributeMethods.$markImplementor(HTMLTextAreaElementBuilder);
ElementClassListMethods.$markImplementor(HTMLTextAreaElementBuilder);
ElementConsumerMethods.$markImplementor(HTMLTextAreaElementBuilder);
ElementEventMethods.$markImplementor(HTMLTextAreaElementBuilder);
ElementHTMLMethods.$markImplementor(HTMLTextAreaElementBuilder);
ElementIdMethods.$markImplementor(HTMLTextAreaElementBuilder);
ElementQueryMethods.$markImplementor(HTMLTextAreaElementBuilder);
ElementTextMethods.$markImplementor(HTMLTextAreaElementBuilder);
HTMLElementAttributeMethods.$markImplementor(HTMLTextAreaElementBuilder);
HTMLElementDataMethods.$markImplementor(HTMLTextAreaElementBuilder);
HTMLElementStyleMethods.$markImplementor(HTMLTextAreaElementBuilder);
HTMLElementVisibilityMethods.$markImplementor(HTMLTextAreaElementBuilder);
HTMLTextAreaElementMethods.$markImplementor(HTMLTextAreaElementBuilder);
$Util.$setClassMetadata(HTMLTextAreaElementBuilder, 'org.jboss.elemento.HTMLTextAreaElementBuilder');

exports = HTMLTextAreaElementBuilder;

//# sourceMappingURL=HTMLTextAreaElementBuilder.js.map
