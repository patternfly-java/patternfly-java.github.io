goog.module('org.patternfly.component.modal.ModalHeaderTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const ModalSubComponent = goog.require('org.patternfly.component.modal.ModalSubComponent$impl');

let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ModalSubComponent<HTMLElement, ModalHeaderTitle>}
 * @implements {ComponentIcon<HTMLElement, ModalHeaderTitle>}
 * @implements {ElementTextDelegate<HTMLElement, ModalHeaderTitle>}
 */
class ModalHeaderTitle extends ModalSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_modal_ModalHeaderTitle_;
  /**@type {Severity} @nodts*/
  this.f_severity__org_patternfly_component_modal_ModalHeaderTitle;
  /**@type {HTMLElement} @nodts*/
  this.f_failSafeIconElement__org_patternfly_component_modal_ModalHeaderTitle_;
 }
 /** @nodts @return {ModalHeaderTitle} */
 static m_modalHeaderTitle__org_patternfly_component_modal_ModalHeaderTitle() {
  ModalHeaderTitle.$clinit();
  return ModalHeaderTitle.$create__();
 }
 /** @nodts @return {!ModalHeaderTitle} */
 static $create__() {
  ModalHeaderTitle.$clinit();
  let $instance = new ModalHeaderTitle();
  $instance.$ctor__org_patternfly_component_modal_ModalHeaderTitle__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_modal_ModalHeaderTitle__void() {
  this.$ctor__org_patternfly_component_modal_ModalSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ModalHeaderTitle.f_SUB_COMPONENT_ID__org_patternfly_component_modal_ModalHeaderTitle, ModalHeaderTitle.f_SUB_COMPONENT_NAME__org_patternfly_component_modal_ModalHeaderTitle, /**@type {HTMLHeadingElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(1).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_modal_ModalHeaderTitle_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_modal_ModalHeaderTitle_;
 }
 /** @nodts @return {ModalHeaderTitle} */
 m_severity__org_patternfly_component_Severity__org_patternfly_component_modal_ModalHeaderTitle(/** Severity */ severity) {
  if (!$Equality.$same(this.f_severity__org_patternfly_component_modal_ModalHeaderTitle, null)) {
   this.m_removeIcon__org_patternfly_component_modal_ModalHeaderTitle();
  }
  TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__org_patternfly_style_TypedModifier__java_lang_Runnable__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), severity.f_status__org_patternfly_component_Severity, !$Equality.$same(this.f_severity__org_patternfly_component_modal_ModalHeaderTitle, null) ? this.f_severity__org_patternfly_component_modal_ModalHeaderTitle.f_status__org_patternfly_component_Severity : null, Runnable.$adapt(() =>{
   this.f_severity__org_patternfly_component_modal_ModalHeaderTitle = severity;
  }));
  this.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(severity.m_icon__org_patternfly_icon_PredefinedIcon());
  return this;
 }
 /** @nodts @return {ModalHeaderTitle} */
 m_icon__elemental2_dom_Element__org_patternfly_component_modal_ModalHeaderTitle(/** Element */ icon) {
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes)], j_l_String)));
  this.m_failSafeIconElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_modal_ModalHeaderTitle().appendChild(icon);
  return this;
 }
 /** @nodts @return {ModalHeaderTitle} */
 m_removeIcon__org_patternfly_component_modal_ModalHeaderTitle() {
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes)], j_l_String)));
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_failSafeIconElement__org_patternfly_component_modal_ModalHeaderTitle_);
  this.f_failSafeIconElement__org_patternfly_component_modal_ModalHeaderTitle_ = null;
  return null;
 }
 /** @nodts @return {ModalHeaderTitle} */
 m_text__java_lang_String__org_patternfly_component_modal_ModalHeaderTitle(/** ?string */ text) {
  Elements.m_textNode__elemental2_dom_Element__java_lang_String__void(this.f_textElement__org_patternfly_component_modal_ModalHeaderTitle_, text);
  return this;
 }
 /** @nodts @return {ModalHeaderTitle} */
 m_that__org_patternfly_component_modal_ModalHeaderTitle() {
  return this;
 }
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return Elements.m_textNode__elemental2_dom_Element__java_lang_String(this.f_textElement__org_patternfly_component_modal_ModalHeaderTitle_);
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_modal_ModalHeaderTitle() {
  if ($Equality.$same(this.f_failSafeIconElement__org_patternfly_component_modal_ModalHeaderTitle_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_failSafeIconElement__org_patternfly_component_modal_ModalHeaderTitle_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_failSafeIconElement__org_patternfly_component_modal_ModalHeaderTitle_;
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalHeaderTitle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_modal_ModalHeaderTitle();
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalHeaderTitle} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {ModalHeaderTitle}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ModalHeaderTitle));
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalHeaderTitle} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_modal_ModalHeaderTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalHeaderTitle} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_modal_ModalHeaderTitle();
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalHeaderTitle} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_modal_ModalHeaderTitle(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ModalHeaderTitle} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_modal_ModalHeaderTitle(/** PredefinedIcon */ arg0) {
  return /**@type {ModalHeaderTitle}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ModalHeaderTitle));
 }
 /** @nodts */
 static $clinit() {
  ModalHeaderTitle.$clinit = () =>{};
  ModalHeaderTitle.$loadModules();
  ModalSubComponent.$clinit();
  ComponentIcon.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ModalHeaderTitle;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  Runnable = goog.module.get('java.lang.Runnable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ModalHeaderTitle.f_SUB_COMPONENT_ID__org_patternfly_component_modal_ModalHeaderTitle = 'mht';
/**@const {string} @nodts*/
ModalHeaderTitle.f_SUB_COMPONENT_NAME__org_patternfly_component_modal_ModalHeaderTitle = 'ModalHeaderTitle';
ComponentIcon.$markImplementor(ModalHeaderTitle);
ElementTextDelegate.$markImplementor(ModalHeaderTitle);
$Util.$setClassMetadata(ModalHeaderTitle, 'org.patternfly.component.modal.ModalHeaderTitle');

exports = ModalHeaderTitle;

//# sourceMappingURL=ModalHeaderTitle.js.map
