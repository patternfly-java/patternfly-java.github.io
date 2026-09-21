goog.module('org.patternfly.icon.PredefinedIcon$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementAttributeMethods = goog.require('org.jboss.elemento.ElementAttributeMethods$impl');
const ElementClassListMethods = goog.require('org.jboss.elemento.ElementClassListMethods$impl');
const ElementConsumerMethods = goog.require('org.jboss.elemento.ElementConsumerMethods$impl');
const ElementEventMethods = goog.require('org.jboss.elemento.ElementEventMethods$impl');
const ElementIdMethods = goog.require('org.jboss.elemento.ElementIdMethods$impl');
const ElementQueryMethods = goog.require('org.jboss.elemento.ElementQueryMethods$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const SVGElementDataMethods = goog.require('org.jboss.elemento.svg.SVGElementDataMethods$impl');
const SVGElementStyleMethods = goog.require('org.jboss.elemento.svg.SVGElementStyleMethods$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Role = goog.forwardDeclare('org.jboss.elemento.Role$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let SVG = goog.forwardDeclare('org.jboss.elemento.svg.SVG$impl');
let SVGContainerBuilder = goog.forwardDeclare('org.jboss.elemento.svg.SVGContainerBuilder$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let IconSpec = goog.forwardDeclare('org.patternfly.icon.IconSpec$impl');
let IconSpecLookup = goog.forwardDeclare('org.patternfly.icon.IconSpecLookup$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @implements {ElementAttributeMethods<SVGElement, PredefinedIcon>}
 * @implements {ElementClassListMethods<SVGElement, PredefinedIcon>}
 * @implements {ElementConsumerMethods<SVGElement, PredefinedIcon>}
 * @implements {ElementEventMethods<SVGElement, PredefinedIcon>}
 * @implements {ElementIdMethods<SVGElement, PredefinedIcon>}
 * @implements {ElementQueryMethods<SVGElement>}
 * @implements {ElementTextMethods<SVGElement, PredefinedIcon>}
 * @implements {SVGElementDataMethods<SVGElement, PredefinedIcon>}
 * @implements {SVGElementStyleMethods<SVGElement, PredefinedIcon>}
 */
class PredefinedIcon extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IconSpec} @nodts*/
  this.f_iconSpec__org_patternfly_icon_PredefinedIcon;
  /**@type {SVGElement} @nodts*/
  this.f_element__org_patternfly_icon_PredefinedIcon_;
 }
 /** @nodts @return {PredefinedIcon} */
 static m_predefinedIcon__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ name) {
  PredefinedIcon.$clinit();
  try {
   return PredefinedIcon.$create__org_patternfly_icon_IconSpec(IconSpecLookup.m_find__java_lang_String__org_patternfly_icon_IconSpec(name));
  } catch (__$jsexc) {
   let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
   if (IllegalArgumentException.$isInstance(__$exc)) {
    let e = /**@type {IllegalArgumentException}*/ (__$exc);
    PredefinedIcon.f_logger__org_patternfly_icon_PredefinedIcon_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unknown icon \'%s\'. Falling back to circle-question icon.', [name]);
    return /**@type {PredefinedIcon}*/ ($Casts.$to((/**@type {PredefinedIcon}*/ ($Casts.$to(PredefinedIcon.$create__org_patternfly_icon_IconSpec(PredefinedIcon.f_UNKNOWN_ICON__org_patternfly_icon_PredefinedIcon_).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_unknown__org_patternfly_style_Classes)], j_l_String))), PredefinedIcon))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** PredefinedIcon */ pi) =>{
     let pi_1 = /**@type {PredefinedIcon}*/ ($Casts.$to(pi, PredefinedIcon));
     let title = DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElementNS('http://www.w3.org/2000/svg', 'title');
     title.textContent = 'Unknown icon: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
     pi_1.m_element__org_jboss_elemento_svg_SVGElement().insertBefore(title, pi_1.m_element__org_jboss_elemento_svg_SVGElement().firstChild);
    })), PredefinedIcon));
   } else {
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
   }
  }
 }
 /** @nodts @return {!PredefinedIcon} */
 static $create__org_patternfly_icon_IconSpec(/** IconSpec */ iconSpec) {
  PredefinedIcon.$clinit();
  let $instance = new PredefinedIcon();
  $instance.$ctor__org_patternfly_icon_PredefinedIcon__org_patternfly_icon_IconSpec__void(iconSpec);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_icon_PredefinedIcon__org_patternfly_icon_IconSpec__void(/** IconSpec */ iconSpec) {
  this.$ctor__java_lang_Object__void();
  this.f_iconSpec__org_patternfly_icon_PredefinedIcon = iconSpec;
  this.f_element__org_patternfly_icon_PredefinedIcon_ = (/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(SVG.m_svg__org_jboss_elemento_svg_SVGContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_svg__org_patternfly_style_Classes], j_l_String))), SVGContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('viewBox', iconSpec.f_xOffset__org_patternfly_icon_IconSpec + ' ' + iconSpec.f_yOffset__org_patternfly_icon_IconSpec + ' ' + iconSpec.f_width__org_patternfly_icon_IconSpec + ' ' + iconSpec.f_height__org_patternfly_icon_IconSpec), SVGContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', '1em'), SVGContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('height', '1em'), SVGContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('fill', 'currentColor'), SVGContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_img__org_patternfly_core_Roles), SVGContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), SVGContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('iconName', iconSpec.f_id__org_patternfly_icon_IconSpec), SVGContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createComment(iconSpec.f_license__org_patternfly_icon_IconSpec)), SVGContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SVGContainerBuilder<SVGPathElement>}*/ ($Casts.$to(SVG.m_path__org_jboss_elemento_svg_SVGContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('d', iconSpec.f_path__org_patternfly_icon_IconSpec), SVGContainerBuilder))), SVGContainerBuilder))).m_element__org_jboss_elemento_svg_SVGElement();
 }
 /** @nodts @return {SVGElement} */
 m_element__org_jboss_elemento_svg_SVGElement() {
  return this.f_element__org_patternfly_icon_PredefinedIcon_;
 }
 /** @nodts @return {PredefinedIcon} */
 m_that__org_patternfly_icon_PredefinedIcon() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_icon_PredefinedIcon();
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__org_jboss_elemento_svg_SVGElement();
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(/** Role */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_role__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<SVGElement>> */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<SVGElement>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<SVGElement>}*/ (ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__org_jboss_elemento_ClassList(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<SVGElement> */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<PredefinedIcon> */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {PredefinedIcon} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {PredefinedIcon} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {PredefinedIcon} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
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
 /** @final @override @nodts @return {PredefinedIcon} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementDataMethods.m_data__$default__org_jboss_elemento_svg_SVGElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), PredefinedIcon));
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_attr__java_lang_String__boolean__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_attr__java_lang_String__int__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_attr__java_lang_String__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_attr__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_aria__java_lang_String__boolean__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_aria__java_lang_String__int__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_aria__java_lang_String__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_aria__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_role__org_jboss_elemento_Role__org_patternfly_icon_PredefinedIcon(/** Role */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_role__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementAttributeMethods.m_role__$default__org_jboss_elemento_ElementAttributeMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_css__arrayOf_java_lang_String__org_patternfly_icon_PredefinedIcon(/** Array<?string> */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_css__$default__org_jboss_elemento_ElementClassListMethods__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_toggle__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_toggle__java_lang_String__boolean__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_toggle__$default__org_jboss_elemento_ElementClassListMethods__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_classList__java_util_function_Consumer__org_patternfly_icon_PredefinedIcon(/** Consumer<ClassList<SVGElement>> */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementClassListMethods.m_classList__$default__org_jboss_elemento_ElementClassListMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_apply__java_util_function_Consumer__org_patternfly_icon_PredefinedIcon(/** Consumer<SVGElement> */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementConsumerMethods.m_apply__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_run__java_util_function_Consumer__org_patternfly_icon_PredefinedIcon(/** Consumer<PredefinedIcon> */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementConsumerMethods.m_run__$default__org_jboss_elemento_ElementConsumerMethods__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {PredefinedIcon} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_patternfly_icon_PredefinedIcon(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {PredefinedIcon} */
 m_on__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_patternfly_icon_PredefinedIcon(/** EventType<V, ?> */ arg0, /** boolean */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {PredefinedIcon} */
 m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_patternfly_icon_PredefinedIcon(/** EventType<V, ?> */ arg0, /** AddEventListenerOptions */ arg1, /** ?function(V):void */ arg2) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementEventMethods.m_on__$default__org_jboss_elemento_ElementEventMethods__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_uniqueId__org_patternfly_icon_PredefinedIcon() {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementIdMethods.m_uniqueId__$default__org_jboss_elemento_ElementIdMethods__org_jboss_elemento_TypedBuilder(this), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_id__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementIdMethods.m_id__$default__org_jboss_elemento_ElementIdMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_text__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_data__java_lang_String__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementDataMethods.m_data__$default__org_jboss_elemento_svg_SVGElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__boolean__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__int__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__int__boolean__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), PredefinedIcon));
 }
 //Default method forwarding stub.
 /** @nodts @return {PredefinedIcon} */
 m_style__java_lang_String__java_lang_String__boolean__org_patternfly_icon_PredefinedIcon(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {PredefinedIcon}*/ ($Casts.$to(SVGElementStyleMethods.m_style__$default__org_jboss_elemento_svg_SVGElementStyleMethods__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), PredefinedIcon));
 }
 /** @nodts */
 static $clinit() {
  PredefinedIcon.$clinit = () =>{};
  PredefinedIcon.$loadModules();
  j_l_Object.$clinit();
  ElementAttributeMethods.$clinit();
  ElementClassListMethods.$clinit();
  ElementConsumerMethods.$clinit();
  ElementEventMethods.$clinit();
  ElementIdMethods.$clinit();
  ElementQueryMethods.$clinit();
  ElementTextMethods.$clinit();
  SVGElementDataMethods.$clinit();
  SVGElementStyleMethods.$clinit();
  PredefinedIcon.f_logger__org_patternfly_icon_PredefinedIcon_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(PredefinedIcon).m_getName__java_lang_String());
  PredefinedIcon.f_UNKNOWN_ICON__org_patternfly_icon_PredefinedIcon_ = IconSpec.$create__java_lang_String__java_lang_String__int__int__int__int__java_lang_String__java_lang_String('fas', 'circle-question', 0, 0, 512, 512, 'M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z', 'FontAwesome. CC-BY-4.0');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PredefinedIcon;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  SVG = goog.module.get('org.jboss.elemento.svg.SVG$impl');
  SVGContainerBuilder = goog.module.get('org.jboss.elemento.svg.SVGContainerBuilder$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  IconSpec = goog.module.get('org.patternfly.icon.IconSpec$impl');
  IconSpecLookup = goog.module.get('org.patternfly.icon.IconSpecLookup$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
PredefinedIcon.f_logger__org_patternfly_icon_PredefinedIcon_;
/**@type {IconSpec} @nodts*/
PredefinedIcon.f_UNKNOWN_ICON__org_patternfly_icon_PredefinedIcon_;
ElementAttributeMethods.$markImplementor(PredefinedIcon);
ElementClassListMethods.$markImplementor(PredefinedIcon);
ElementConsumerMethods.$markImplementor(PredefinedIcon);
ElementEventMethods.$markImplementor(PredefinedIcon);
ElementIdMethods.$markImplementor(PredefinedIcon);
ElementQueryMethods.$markImplementor(PredefinedIcon);
ElementTextMethods.$markImplementor(PredefinedIcon);
SVGElementDataMethods.$markImplementor(PredefinedIcon);
SVGElementStyleMethods.$markImplementor(PredefinedIcon);
$Util.$setClassMetadata(PredefinedIcon, 'org.patternfly.icon.PredefinedIcon');

exports = PredefinedIcon;

//# sourceMappingURL=PredefinedIcon.js.map
