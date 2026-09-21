goog.module('org.patternfly.component.list.DescriptionListTerm$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const DescriptionListSubComponent = goog.require('org.patternfly.component.list.DescriptionListSubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Popover = goog.forwardDeclare('org.patternfly.component.popover.Popover$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DescriptionListSubComponent<HTMLElement, DescriptionListTerm>}
 * @implements {ComponentIcon<HTMLElement, DescriptionListTerm>}
 * @implements {ElementContainerDelegate<HTMLElement, DescriptionListTerm>}
 * @implements {ElementTextDelegate<HTMLElement, DescriptionListTerm>}
 */
class DescriptionListTerm extends DescriptionListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_list_DescriptionListTerm_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_list_DescriptionListTerm_;
 }
 /** @nodts @return {DescriptionListTerm} */
 static m_descriptionListTerm__org_patternfly_component_list_DescriptionListTerm() {
  DescriptionListTerm.$clinit();
  return DescriptionListTerm.$create__java_lang_String(null);
 }
 /** @nodts @return {DescriptionListTerm} */
 static m_descriptionListTerm__java_lang_String__org_patternfly_component_list_DescriptionListTerm(/** ?string */ text) {
  DescriptionListTerm.$clinit();
  return DescriptionListTerm.$create__java_lang_String(text);
 }
 /** @nodts @return {!DescriptionListTerm} */
 static $create__java_lang_String(/** ?string */ text) {
  DescriptionListTerm.$clinit();
  let $instance = new DescriptionListTerm();
  $instance.$ctor__org_patternfly_component_list_DescriptionListTerm__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DescriptionListTerm__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_list_DescriptionListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(DescriptionListTerm.f_SUB_COMPONENT_ID__org_patternfly_component_list_DescriptionListTerm, DescriptionListTerm.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DescriptionListTerm, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_dt__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_term__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_textElement__org_patternfly_component_list_DescriptionListTerm_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(text, null)) {
   this.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  }
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_list_DescriptionListTerm_;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_list_DescriptionListTerm_;
 }
 /** @nodts @return {DescriptionListTerm} */
 m_icon__elemental2_dom_Element__org_patternfly_component_list_DescriptionListTerm(/** Element */ icon) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_list_DescriptionListTerm_);
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_DescriptionListTerm().appendChild(icon);
  return this;
 }
 /** @nodts @return {DescriptionListTerm} */
 m_removeIcon__org_patternfly_component_list_DescriptionListTerm() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_list_DescriptionListTerm_);
  this.f_iconContainer__org_patternfly_component_list_DescriptionListTerm_ = null;
  return this;
 }
 /** @nodts @return {DescriptionListTerm} */
 m_help__org_patternfly_component_popover_Popover__org_patternfly_component_list_DescriptionListTerm(/** Popover */ popover) {
  this.f_textElement__org_patternfly_component_list_DescriptionListTerm_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_helpText__org_patternfly_style_Classes));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_textElement__org_patternfly_component_list_DescriptionListTerm_, Attributes.f_role__org_patternfly_core_Attributes, Roles.f_button__org_patternfly_core_Roles);
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_textElement__org_patternfly_component_list_DescriptionListTerm_, 'type', 'button');
  this.f_textElement__org_patternfly_component_list_DescriptionListTerm_.tabIndex = 0;
  popover.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(this.f_textElement__org_patternfly_component_list_DescriptionListTerm_);
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(popover.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {DescriptionListTerm} */
 m_that__org_patternfly_component_list_DescriptionListTerm() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_DescriptionListTerm() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_list_DescriptionListTerm_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_iconContainer__org_patternfly_component_list_DescriptionListTerm_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_term__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_list_DescriptionListTerm_;
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListTerm} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DescriptionListTerm();
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListTerm} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListTerm} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_list_DescriptionListTerm(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListTerm} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_list_DescriptionListTerm();
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListTerm} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListTerm} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListTerm} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListTerm} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListTerm} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_list_DescriptionListTerm(/** PredefinedIcon */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListTerm} */
 m_add__java_lang_String__org_patternfly_component_list_DescriptionListTerm(/** ?string */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListTerm} */
 m_add__elemental2_dom_Node__org_patternfly_component_list_DescriptionListTerm(/** Node */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListTerm} */
 m_add__java_util_function_Supplier__org_patternfly_component_list_DescriptionListTerm(/** Supplier<Node> */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListTerm} */
 m_text__java_lang_String__org_patternfly_component_list_DescriptionListTerm(/** ?string */ arg0) {
  return /**@type {DescriptionListTerm}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListTerm));
 }
 /** @nodts */
 static $clinit() {
  DescriptionListTerm.$clinit = () =>{};
  DescriptionListTerm.$loadModules();
  DescriptionListSubComponent.$clinit();
  ComponentIcon.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DescriptionListTerm;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DescriptionListTerm.f_SUB_COMPONENT_ID__org_patternfly_component_list_DescriptionListTerm = 'dlt';
/**@const {string} @nodts*/
DescriptionListTerm.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DescriptionListTerm = 'DescriptionListTerm';
ComponentIcon.$markImplementor(DescriptionListTerm);
ElementContainerDelegate.$markImplementor(DescriptionListTerm);
ElementTextDelegate.$markImplementor(DescriptionListTerm);
$Util.$setClassMetadata(DescriptionListTerm, 'org.patternfly.component.list.DescriptionListTerm');

exports = DescriptionListTerm;

//# sourceMappingURL=DescriptionListTerm.js.map
