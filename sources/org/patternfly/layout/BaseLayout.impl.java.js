goog.module('org.patternfly.layout.BaseLayout$impl');

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
const HTMLElementAttributeMethods = goog.require('org.jboss.elemento.HTMLElementAttributeMethods$impl');
const HTMLElementDataMethods = goog.require('org.jboss.elemento.HTMLElementDataMethods$impl');
const HTMLElementStyleMethods = goog.require('org.jboss.elemento.HTMLElementStyleMethods$impl');
const HTMLElementVisibilityMethods = goog.require('org.jboss.elemento.HTMLElementVisibilityMethods$impl');
const OuiaSupport = goog.require('org.patternfly.core.OuiaSupport$impl');
const Layout = goog.require('org.patternfly.layout.Layout$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Role = goog.forwardDeclare('org.jboss.elemento.Role$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let LayoutType = goog.forwardDeclare('org.patternfly.layout.LayoutType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template E, B
 * @implements {Layout}
 * @implements {OuiaSupport<E, B>}
 * @implements {ElementAttributeMethods<E, B>}
 * @implements {ElementClassListMethods<E, B>}
 * @implements {ElementContainerMethods<E, B>}
 * @implements {ElementConsumerMethods<E, B>}
 * @implements {ElementEventMethods<E, B>}
 * @implements {ElementIdMethods<E, B>}
 * @implements {ElementQueryMethods<E>}
 * @implements {ElementTextMethods<E, B>}
 * @implements {HTMLElementAttributeMethods<E, B>}
 * @implements {HTMLElementDataMethods<E, B>}
 * @implements {HTMLElementStyleMethods<E, B>}
 * @implements {HTMLElementVisibilityMethods<E, B>}
 */
class BaseLayout extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LayoutType} @nodts*/
  this.f_layoutType__org_patternfly_layout_BaseLayout_;
  /**@type {E} @nodts*/
  this.f_element__org_patternfly_layout_BaseLayout_;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_BaseLayout__org_patternfly_layout_LayoutType__elemental2_dom_HTMLElement__void(/** LayoutType */ layoutType, /** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_layoutType__org_patternfly_layout_BaseLayout_ = (/**@type {LayoutType}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(layoutType, 'layout type required'), LayoutType)));
  this.f_element__org_patternfly_layout_BaseLayout_ = (/**@type {E}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'))));
  this.m_initOuia__java_lang_String__void(layoutType.f_id__org_patternfly_layout_LayoutType);
 }
 /** @override @nodts @return {?string} */
 m_ouiaComponentType__java_lang_String() {
  return this.f_layoutType__org_patternfly_layout_BaseLayout_.f_layoutName__org_patternfly_layout_LayoutType;
 }
 /** @nodts @return {E} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_element__org_patternfly_layout_BaseLayout_;
 }
 /** @override @nodts @return {LayoutType} */
 m_layoutType__org_patternfly_layout_LayoutType() {
  return this.f_layoutType__org_patternfly_layout_BaseLayout_;
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_initOuia__void() {
  OuiaSupport.m_initOuia__$default__org_patternfly_core_OuiaSupport__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_initOuia__java_lang_String__void(/** ?string */ arg0) {
  OuiaSupport.m_initOuia__$default__org_patternfly_core_OuiaSupport__java_lang_String__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_ouiaId__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return OuiaSupport.m_ouiaId__$default__org_patternfly_core_OuiaSupport__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_ouiaSafe__boolean__void(/** boolean */ arg0) {
  OuiaSupport.m_ouiaSafe__$default__org_patternfly_core_OuiaSupport__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_ouiaTransition__void() {
  OuiaSupport.m_ouiaTransition__$default__org_patternfly_core_OuiaSupport__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(/** Role */ arg0) {
  return ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_role__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__org_jboss_elemento_ClassList(this));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ arg0) {
  return ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return ElementContainerMethods.m_add__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ arg0) {
  return ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ arg0) {
  return ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ arg0) {
  return ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ arg0) {
  return ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return ElementContainerMethods.m_addAll__$default__org_jboss_elemento_ElementContainerMethods__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<B> */ arg0) {
  return ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {B} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {B} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {B} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
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
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HTMLElementAttributeMethods.m_title__$default__org_jboss_elemento_HTMLElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_data__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return HTMLElementDataMethods.m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return HTMLElementStyleMethods.m_style__$default__org_jboss_elemento_HTMLElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return HTMLElementVisibilityMethods.m_hidden__$default__org_jboss_elemento_HTMLElementVisibilityMethods__boolean__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  BaseLayout.$clinit = () =>{};
  BaseLayout.$loadModules();
  j_l_Object.$clinit();
  OuiaSupport.$clinit();
  ElementAttributeMethods.$clinit();
  ElementClassListMethods.$clinit();
  ElementContainerMethods.$clinit();
  ElementConsumerMethods.$clinit();
  ElementEventMethods.$clinit();
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
  return instance instanceof BaseLayout;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  LayoutType = goog.module.get('org.patternfly.layout.LayoutType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Layout.$markImplementor(BaseLayout);
OuiaSupport.$markImplementor(BaseLayout);
ElementAttributeMethods.$markImplementor(BaseLayout);
ElementClassListMethods.$markImplementor(BaseLayout);
ElementContainerMethods.$markImplementor(BaseLayout);
ElementConsumerMethods.$markImplementor(BaseLayout);
ElementEventMethods.$markImplementor(BaseLayout);
ElementIdMethods.$markImplementor(BaseLayout);
ElementQueryMethods.$markImplementor(BaseLayout);
ElementTextMethods.$markImplementor(BaseLayout);
HTMLElementAttributeMethods.$markImplementor(BaseLayout);
HTMLElementDataMethods.$markImplementor(BaseLayout);
HTMLElementStyleMethods.$markImplementor(BaseLayout);
HTMLElementVisibilityMethods.$markImplementor(BaseLayout);
$Util.$setClassMetadata(BaseLayout, 'org.patternfly.layout.BaseLayout');

exports = BaseLayout;

//# sourceMappingURL=BaseLayout.js.map
