goog.module('org.patternfly.component.form.Radio$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const Required = goog.require('org.patternfly.style.Modifiers.Required$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RadioBody = goog.forwardDeclare('org.patternfly.component.form.RadioBody$impl');
let RadioDescription = goog.forwardDeclare('org.patternfly.component.form.RadioDescription$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Radio>}
 * @implements {Disabled<HTMLElement, Radio>}
 * @implements {ElementTextDelegate<HTMLElement, Radio>}
 * @implements {HasValue<?boolean>}
 * @implements {Required<HTMLElement, Radio>}
 */
class Radio extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_form_Radio_;
  /**@type {List<ChangeHandler<Radio, ?boolean>>} @nodts*/
  this.f_changeHandlers__org_patternfly_component_form_Radio_;
  /**@type {HTMLLabelElement} @nodts*/
  this.f_labelElement__org_patternfly_component_form_Radio_;
 }
 /** @nodts @return {Radio} */
 static m_radio__java_lang_String__java_lang_String__org_patternfly_component_form_Radio(/** ?string */ id, /** ?string */ name) {
  Radio.$clinit();
  return Radio.$create__java_lang_String__java_lang_String(id, name);
 }
 /** @nodts @return {Radio} */
 static m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio(/** ?string */ id, /** ?string */ name, /** ?string */ label) {
  Radio.$clinit();
  return /**@type {Radio}*/ ($Casts.$to(Radio.$create__java_lang_String__java_lang_String(id, name).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(label), Radio));
 }
 /** @nodts @return {!Radio} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ name) {
  Radio.$clinit();
  let $instance = new Radio();
  $instance.$ctor__org_patternfly_component_form_Radio__java_lang_String__java_lang_String__void(id, name);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_Radio__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ name) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Radio__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_radio__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_HTMLInputElementBuilder(InputType.f_radio__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_radio__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_input__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLInputElementBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLInputElementBuilder))).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(name), HTMLInputElementBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_changeHandlers__org_patternfly_component_form_Radio_ = (/**@type {!ArrayList<ChangeHandler<Radio, ?boolean>>}*/ (ArrayList.$create__()));
  this.f_inputElement__org_patternfly_component_form_Radio_ = (/**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement().firstElementChild, $Overlay)));
  this.f_inputElement__org_patternfly_component_form_Radio_.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   this.f_changeHandlers__org_patternfly_component_form_Radio_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<Radio, ?boolean> */ ch) =>{
    let ch_1 = /**@type {ChangeHandler<Radio, ?boolean>}*/ ($Casts.$to(ch, /**@type {Function}*/ (ChangeHandler)));
    ch_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this, this.f_inputElement__org_patternfly_component_form_Radio_.checked);
   }));
  }));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_labelElement__org_patternfly_component_form_Radio_ = (/**@type {HTMLLabelElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_radio__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLLabelElement */ l) =>{
   let l_1 = /**@type {HTMLLabelElement}*/ ($Casts.$to(l, HTMLLabelElement_$Overlay));
   l_1.htmlFor = id;
  })), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay))));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_labelElement__org_patternfly_component_form_Radio_;
 }
 /** @nodts @return {Radio} */
 m_addBody__org_patternfly_component_form_RadioBody__org_patternfly_component_form_Radio(/** RadioBody */ body) {
  return /**@type {Radio}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), Radio));
 }
 /** @nodts @return {Radio} */
 m_addDescription__org_patternfly_component_form_RadioDescription__org_patternfly_component_form_Radio(/** RadioDescription */ description) {
  return /**@type {Radio}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(description), Radio));
 }
 /** @nodts @return {Radio} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_form_Radio(/** Consumer<HTMLInputElementBuilder<HTMLInputElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder());
  return this;
 }
 /** @nodts @return {Radio} */
 m_disabled__boolean__org_patternfly_component_form_Radio(/** boolean */ disabled) {
  this.f_inputElement__org_patternfly_component_form_Radio_.disabled = disabled;
  if (!$Equality.$same(this.f_labelElement__org_patternfly_component_form_Radio_, null)) {
   if (disabled) {
    this.f_labelElement__org_patternfly_component_form_Radio_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes));
   } else {
    this.f_labelElement__org_patternfly_component_form_Radio_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes));
   }
  }
  return this;
 }
 /** @nodts @return {Radio} */
 m_ariaDescribedBy__java_lang_String__org_patternfly_component_form_Radio(/** ?string */ describedBy) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_inputElement__org_patternfly_component_form_Radio_, Aria.f_describedBy__org_patternfly_core_Aria, describedBy);
  return this;
 }
 /** @nodts @return {Radio} */
 m_reversed__org_patternfly_component_form_Radio() {
  if (!$Equality.$same(this.f_inputElement__org_patternfly_component_form_Radio_, null) && !$Equality.$same(this.f_labelElement__org_patternfly_component_form_Radio_, null)) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_inputElement__org_patternfly_component_form_Radio_);
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_labelElement__org_patternfly_component_form_Radio_);
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_inputElement__org_patternfly_component_form_Radio_);
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_labelElement__org_patternfly_component_form_Radio_);
  }
  return this;
 }
 /** @nodts @return {Radio} */
 m_standalone__org_patternfly_component_form_Radio() {
  return this.m_standalone__boolean__org_patternfly_component_form_Radio(true);
 }
 /** @nodts @return {Radio} */
 m_standalone__boolean__org_patternfly_component_form_Radio(/** boolean */ removeLabel) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_standalone__org_patternfly_style_Classes)], j_l_String)));
  if (removeLabel) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_labelElement__org_patternfly_component_form_Radio_);
  }
  return this;
 }
 /** @nodts @return {Radio} */
 m_value__boolean__org_patternfly_component_form_Radio(/** boolean */ checked) {
  return this.m_value__boolean__boolean__org_patternfly_component_form_Radio(checked, false);
 }
 /** @nodts @return {Radio} */
 m_value__boolean__boolean__org_patternfly_component_form_Radio(/** boolean */ checked, /** boolean */ fireEvent) {
  this.f_inputElement__org_patternfly_component_form_Radio_.checked = checked;
  if (fireEvent) {
   ChangeHandler.m_fireIfChanged__java_lang_Object__java_lang_Object__java_lang_Object__java_util_List__void(this, this.f_inputElement__org_patternfly_component_form_Radio_.checked, checked, this.f_changeHandlers__org_patternfly_component_form_Radio_);
  }
  return this;
 }
 /** @nodts @return {Radio} */
 m_that__org_patternfly_component_form_Radio() {
  return this;
 }
 /** @nodts @return {Radio} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Radio(/** ChangeHandler<Radio, ?boolean> */ changeHandler) {
  this.f_changeHandlers__org_patternfly_component_form_Radio_.add(changeHandler);
  return this;
 }
 /** @nodts @return {?boolean} */
 m_value__java_lang_Boolean() {
  return this.f_inputElement__org_patternfly_component_form_Radio_.checked;
 }
 /** @nodts @return {HTMLInputElementBuilder<HTMLInputElement>} */
 m_inputElement__org_jboss_elemento_HTMLInputElementBuilder() {
  return /**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_HTMLInputElementBuilder(this.f_inputElement__org_patternfly_component_form_Radio_));
 }
 //Bridge method.
 /** @final @override @nodts @return {Radio} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_Radio();
 }
 //Bridge method.
 /** @final @override @nodts @return {Radio} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Radio}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Radio));
 }
 //Bridge method.
 /** @final @override @nodts @return {Radio} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_form_Radio(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Radio} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {Radio}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Radio));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {?boolean} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Boolean();
 }
 //Bridge method.
 /** @final @override @nodts @return {Radio} */
 m_required__org_jboss_elemento_TypedBuilder() {
  return /**@type {Radio}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__org_jboss_elemento_TypedBuilder(this), Radio));
 }
 //Bridge method.
 /** @final @override @nodts @return {Radio} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Radio}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Radio));
 }
 //Default method forwarding stub.
 /** @nodts @return {Radio} */
 m_disabled__org_patternfly_component_form_Radio() {
  return /**@type {Radio}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Radio));
 }
 //Default method forwarding stub.
 /** @nodts @return {Radio} */
 m_text__java_lang_String__org_patternfly_component_form_Radio(/** ?string */ arg0) {
  return /**@type {Radio}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Radio));
 }
 //Default method forwarding stub.
 /** @nodts @return {Radio} */
 m_required__org_patternfly_component_form_Radio() {
  return /**@type {Radio}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__org_jboss_elemento_TypedBuilder(this), Radio));
 }
 //Default method forwarding stub.
 /** @nodts @return {Radio} */
 m_required__boolean__org_patternfly_component_form_Radio(/** boolean */ arg0) {
  return /**@type {Radio}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Radio));
 }
 /** @nodts */
 static $clinit() {
  Radio.$clinit = () =>{};
  Radio.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  ElementTextDelegate.$clinit();
  Required.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Radio;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(Radio);
ElementTextDelegate.$markImplementor(Radio);
HasValue.$markImplementor(Radio);
Required.$markImplementor(Radio);
$Util.$setClassMetadata(Radio, 'org.patternfly.component.form.Radio');

exports = Radio;

//# sourceMappingURL=Radio.js.map
