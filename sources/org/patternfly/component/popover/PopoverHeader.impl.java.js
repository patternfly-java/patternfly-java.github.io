goog.module('org.patternfly.component.popover.PopoverHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const PopoverSubComponent = goog.require('org.patternfly.component.popover.PopoverSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PopoverSubComponent<HTMLElement, PopoverHeader>}
 * @implements {ElementContainerDelegate<HTMLElement, PopoverHeader>}
 * @implements {ElementTextDelegate<HTMLElement, PopoverHeader>}
 */
class PopoverHeader extends PopoverSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_headerId__org_patternfly_component_popover_PopoverHeader;
  /**@type {HTMLHeadingElement} @nodts*/
  this.f_headerElement__org_patternfly_component_popover_PopoverHeader;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_popover_PopoverHeader_;
 }
 /** @nodts @return {PopoverHeader} */
 static m_popoverHeader__org_patternfly_component_popover_PopoverHeader() {
  PopoverHeader.$clinit();
  return PopoverHeader.$create__();
 }
 /** @nodts @return {!PopoverHeader} */
 static $create__() {
  PopoverHeader.$clinit();
  let $instance = new PopoverHeader();
  $instance.$ctor__org_patternfly_component_popover_PopoverHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_popover_PopoverHeader__void() {
  this.$ctor__org_patternfly_component_popover_PopoverSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PopoverHeader.f_SUB_COMPONENT_ID__org_patternfly_component_popover_PopoverHeader, PopoverHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_popover_PopoverHeader, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_headerId__org_patternfly_component_popover_PopoverHeader = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Popover__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['header'], j_l_String)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_headerId__org_patternfly_component_popover_PopoverHeader), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_headerElement__org_patternfly_component_popover_PopoverHeader = (/**@type {HTMLHeadingElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(6).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_headerElement__org_patternfly_component_popover_PopoverHeader;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_headerElement__org_patternfly_component_popover_PopoverHeader;
 }
 /** @nodts @return {PopoverHeader} */
 m_that__org_patternfly_component_popover_PopoverHeader() {
  return this;
 }
 /** @nodts */
 m_icon__elemental2_dom_Element__void_$pp_org_patternfly_component_popover(/** Element */ icon) {
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_PopoverHeader().appendChild(icon);
 }
 /** @nodts */
 m_removeIcon__void_$pp_org_patternfly_component_popover() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_popover_PopoverHeader_);
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_PopoverHeader() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_popover_PopoverHeader_, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_popover_PopoverHeader_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), this.f_headerElement__org_patternfly_component_popover_PopoverHeader);
  }
  return this.f_iconContainer__org_patternfly_component_popover_PopoverHeader_;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_popover_PopoverHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_add__java_lang_String__org_patternfly_component_popover_PopoverHeader(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_add__elemental2_dom_Node__org_patternfly_component_popover_PopoverHeader(/** Node */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_add__java_util_function_Supplier__org_patternfly_component_popover_PopoverHeader(/** Supplier<Node> */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_text__java_lang_String__org_patternfly_component_popover_PopoverHeader(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 /** @nodts */
 static $clinit() {
  PopoverHeader.$clinit = () =>{};
  PopoverHeader.$loadModules();
  PopoverSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopoverHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PopoverHeader.f_SUB_COMPONENT_ID__org_patternfly_component_popover_PopoverHeader = 'nph';
/**@const {string} @nodts*/
PopoverHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_popover_PopoverHeader = 'PopoverHeader';
ElementContainerDelegate.$markImplementor(PopoverHeader);
ElementTextDelegate.$markImplementor(PopoverHeader);
$Util.$setClassMetadata(PopoverHeader, 'org.patternfly.component.popover.PopoverHeader');

exports = PopoverHeader;

//# sourceMappingURL=PopoverHeader.js.map
