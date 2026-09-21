goog.module('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const Validatable = goog.require('org.patternfly.component.Validatable$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let KicHandler = goog.forwardDeclare('org.patternfly.component.KicHandler$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let TextInputGroupUtilities = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @extends {BaseComponent<HTMLElement, T>}
 * @implements {ComponentIcon<HTMLElement, T>}
 * @implements {Disabled<HTMLElement, T>}
 * @implements {HasValue<?string>}
 * @implements {Plain<HTMLElement, T>}
 * @implements {Validatable<HTMLElement, T>}
 */
class BaseTextInputGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_mainContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup;
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup;
  /**@type {HTMLElement} @nodts*/
  this.f_textContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup;
  /**@type {KicHandler<T>} @nodts*/
  this.f_kicHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup;
  /**@type {ValidationStatus} @nodts*/
  this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup;
  /**@type {HTMLElement} @nodts*/
  this.f_statusContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup;
  /**@type {TextInputGroupUtilities} @nodts*/
  this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_BaseTextInputGroup__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ componentType, /** ?string */ id) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(componentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup = null;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup = (/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_HTMLInputElementBuilder(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_textInput__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLInputElementBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLInputElementBuilder))).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLInputElementBuilder))).m_element__elemental2_dom_HTMLInputElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  this.f_kicHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup = (/**@type {!KicHandler<T>}*/ (KicHandler.$create__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement(/**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseTextInputGroup)), this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup)));
 }
 /** @nodts @return {T} */
 m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** TextInputGroupUtilities */ utilities) {
  return this.m_add__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_BaseTextInputGroup(utilities);
 }
 /** @nodts @return {T} */
 m_add__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** TextInputGroupUtilities */ utilities) {
  this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup = utilities;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(utilities.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** Consumer<HTMLInputElementBuilder<HTMLInputElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_input__org_jboss_elemento_HTMLInputElementBuilder());
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_disabled__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** boolean */ disabled) {
  this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup.disabled = disabled;
  return /**@type {T}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_icon__elemental2_dom_Element__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** Element */ icon) {
  this.f_mainContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes));
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup);
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_textinputgroup_BaseTextInputGroup().appendChild(icon);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ?string */ placeholder) {
  this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup.placeholder = placeholder;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_removeIcon__org_patternfly_component_textinputgroup_BaseTextInputGroup() {
  this.f_mainContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes));
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup);
  this.f_iconContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup = null;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ValidationStatus */ status) {
  if (!$Equality.$same(status, this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup)) {
   if (!$Equality.$same(this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup, null)) {
    if (!$Equality.$same(this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup.f_modifier__org_patternfly_component_ValidationStatus, null)) {
     this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup.f_modifier__org_patternfly_component_ValidationStatus], j_l_String)));
    }
    if (!$Equality.$same(this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup.m_icon__org_patternfly_icon_PredefinedIcon(), null)) {
     Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_statusContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup);
     this.f_statusContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup = null;
    }
   }
   this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup = status;
   if (!$Equality.$same(status.f_modifier__org_patternfly_component_ValidationStatus, null)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([status.f_modifier__org_patternfly_component_ValidationStatus], j_l_String)));
   }
   if (!$Equality.$same(status, ValidationStatus.f_default___org_patternfly_component_ValidationStatus) && !$Equality.$same(status.m_icon__org_patternfly_icon_PredefinedIcon(), null)) {
    this.m_failSafeStatusContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_textinputgroup_BaseTextInputGroup().appendChild(status.m_icon__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement());
   }
  }
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ?string */ value) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(value, false);
 }
 /** @nodts @return {T} */
 m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ?string */ value, /** boolean */ fireEvent) {
  this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup.value = value;
  if (fireEvent) {
   this.f_kicHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup.m_fireIfChanged__java_lang_String__void(value);
  }
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_onKeydown__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ChangeHandler<T, ?string> */ changeHandler) {
  return /**@type {T}*/ ($Casts.$to(this.f_kicHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup.m_onKeydown__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent(changeHandler), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ChangeHandler<T, ?string> */ changeHandler) {
  return /**@type {T}*/ ($Casts.$to(this.f_kicHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup.m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent(changeHandler), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ChangeHandler<T, ?string> */ changeHandler) {
  return /**@type {T}*/ ($Casts.$to(this.f_kicHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup.m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent(changeHandler), BaseTextInputGroup));
 }
 /** @nodts @return {T} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ChangeHandler<T, ?string> */ changeHandler) {
  return /**@type {T}*/ ($Casts.$to(this.f_kicHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup.m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent(changeHandler), BaseTextInputGroup));
 }
 /** @nodts @return {HTMLInputElementBuilder<HTMLInputElement>} */
 m_input__org_jboss_elemento_HTMLInputElementBuilder() {
  return /**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_HTMLInputElementBuilder(this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup));
 }
 /** @nodts @return {TextInputGroupUtilities} */
 m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities() {
  return this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup;
 }
 /** @override @nodts */
 m_resetValidation__void() {
  if (!$Equality.$same(this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([this.f_status__org_patternfly_component_textinputgroup_BaseTextInputGroup.f_modifier__org_patternfly_component_ValidationStatus], j_l_String)));
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_statusContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup);
   this.f_statusContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup = null;
  }
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup.value;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_textinputgroup_BaseTextInputGroup() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_textContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup, this.f_iconContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeStatusContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_textinputgroup_BaseTextInputGroup() {
  if ($Equality.$same(this.f_statusContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup, null)) {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(this.f_statusContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_icon__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_status__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), this.f_inputElement__org_patternfly_component_textinputgroup_BaseTextInputGroup);
  }
  return this.f_statusContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup;
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {T}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), BaseTextInputGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_textinputgroup_BaseTextInputGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_textinputgroup_BaseTextInputGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {T}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), BaseTextInputGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {T}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), BaseTextInputGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {T}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), BaseTextInputGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_validated__org_patternfly_component_ValidationStatus__org_jboss_elemento_TypedBuilder(/** ValidationStatus */ arg0) {
  return this.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_textinputgroup_BaseTextInputGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {T} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** PredefinedIcon */ arg0) {
  return /**@type {T}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), BaseTextInputGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {T} */
 m_disabled__org_patternfly_component_textinputgroup_BaseTextInputGroup() {
  return /**@type {T}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), BaseTextInputGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {T} */
 m_plain__org_patternfly_component_textinputgroup_BaseTextInputGroup() {
  return /**@type {T}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), BaseTextInputGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {T} */
 m_plain__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** boolean */ arg0) {
  return /**@type {T}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), BaseTextInputGroup));
 }
 /** @nodts */
 static $clinit() {
  BaseTextInputGroup.$clinit = () =>{};
  BaseTextInputGroup.$loadModules();
  BaseComponent.$clinit();
  ComponentIcon.$clinit();
  Disabled.$clinit();
  Plain.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseTextInputGroup;
 }
 /** @abstract @override @nodts @return {T} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  KicHandler = goog.module.get('org.patternfly.component.KicHandler$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentIcon.$markImplementor(BaseTextInputGroup);
Disabled.$markImplementor(BaseTextInputGroup);
HasValue.$markImplementor(BaseTextInputGroup);
Plain.$markImplementor(BaseTextInputGroup);
Validatable.$markImplementor(BaseTextInputGroup);
$Util.$setClassMetadata(BaseTextInputGroup, 'org.patternfly.component.textinputgroup.BaseTextInputGroup');

exports = BaseTextInputGroup;

//# sourceMappingURL=BaseTextInputGroup.js.map
