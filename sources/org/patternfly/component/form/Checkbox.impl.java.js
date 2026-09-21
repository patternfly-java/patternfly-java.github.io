goog.module('org.patternfly.component.form.Checkbox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const Required = goog.require('org.patternfly.style.Modifiers.Required$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let CheckboxBody = goog.forwardDeclare('org.patternfly.component.form.CheckboxBody$impl');
let CheckboxDescription = goog.forwardDeclare('org.patternfly.component.form.CheckboxDescription$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Checkbox>}
 * @implements {Disabled<HTMLElement, Checkbox>}
 * @implements {ElementTextDelegate<HTMLElement, Checkbox>}
 * @implements {HasValue<?boolean>}
 * @implements {Required<HTMLElement, Checkbox>}
 */
class Checkbox extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_form_Checkbox_;
  /**@type {List<ChangeHandler<Checkbox, ?boolean>>} @nodts*/
  this.f_changeHandlers__org_patternfly_component_form_Checkbox_;
  /**@type {HTMLElement} @nodts*/
  this.f_labelElement__org_patternfly_component_form_Checkbox_;
  /**@type {HTMLElement} @nodts*/
  this.f_requiredMarker__org_patternfly_component_form_Checkbox_;
 }
 /** @nodts @return {Checkbox} */
 static m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(/** ?string */ id, /** ?string */ name) {
  Checkbox.$clinit();
  return Checkbox.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), id, name);
 }
 /** @nodts @return {Checkbox} */
 static m_checkboxWrapped__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(/** ?string */ id, /** ?string */ name) {
  Checkbox.$clinit();
  return Checkbox.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder(), id, name);
 }
 /** @nodts @return {Checkbox} */
 static m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(/** ?string */ id, /** ?string */ name, /** ?string */ label) {
  Checkbox.$clinit();
  return Checkbox.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), id, name).m_text__java_lang_String__org_patternfly_component_form_Checkbox(label);
 }
 /** @nodts @return {Checkbox} */
 static m_checkboxWrapped__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(/** ?string */ id, /** ?string */ name, /** ?string */ label) {
  Checkbox.$clinit();
  return Checkbox.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder(), id, name).m_text__java_lang_String__org_patternfly_component_form_Checkbox(label);
 }
 /** @nodts @template E @return {!Checkbox} */
 static $create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(/** HTMLContainerBuilder<E> */ builder, /** ?string */ id, /** ?string */ name) {
  Checkbox.$clinit();
  let $instance = new Checkbox();
  $instance.$ctor__org_patternfly_component_form_Checkbox__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__void(builder, id, name);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_form_Checkbox__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__void(/** HTMLContainerBuilder<E> */ builder, /** ?string */ id, /** ?string */ name) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Checkbox__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_HTMLInputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_input__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLInputElementBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLInputElementBuilder))).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(name), HTMLInputElementBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()));
  this.f_changeHandlers__org_patternfly_component_form_Checkbox_ = (/**@type {!ArrayList<ChangeHandler<Checkbox, ?boolean>>}*/ (ArrayList.$create__()));
  let wrapped = j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean('label', this.m_element__elemental2_dom_HTMLElement().tagName);
  if (wrapped) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.m_element__elemental2_dom_HTMLElement(), 'for', id);
   this.f_labelElement__org_patternfly_component_form_Checkbox_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
  } else {
   this.f_labelElement__org_patternfly_component_form_Checkbox_ = (/**@type {HTMLLabelElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLLabelElement */ l) =>{
    let l_1 = /**@type {HTMLLabelElement}*/ ($Casts.$to(l, HTMLLabelElement_$Overlay));
    l_1.htmlFor = id;
   })), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)));
  }
  this.f_inputElement__org_patternfly_component_form_Checkbox_ = (/**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement().firstElementChild, $Overlay)));
  this.f_inputElement__org_patternfly_component_form_Checkbox_.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   this.f_changeHandlers__org_patternfly_component_form_Checkbox_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<Checkbox, ?boolean> */ h) =>{
    let h_1 = /**@type {ChangeHandler<Checkbox, ?boolean>}*/ ($Casts.$to(h, /**@type {Function}*/ (ChangeHandler)));
    h_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this, this.f_inputElement__org_patternfly_component_form_Checkbox_.checked);
   }));
  }));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_labelElement__org_patternfly_component_form_Checkbox_;
 }
 /** @nodts @return {Checkbox} */
 m_addBody__org_patternfly_component_form_CheckboxBody__org_patternfly_component_form_Checkbox(/** CheckboxBody */ body) {
  return /**@type {Checkbox}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), Checkbox));
 }
 /** @nodts @return {Checkbox} */
 m_addDescription__org_patternfly_component_form_CheckboxDescription__org_patternfly_component_form_Checkbox(/** CheckboxDescription */ description) {
  return /**@type {Checkbox}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(description), Checkbox));
 }
 /** @nodts @return {Checkbox} */
 m_disabled__boolean__org_patternfly_component_form_Checkbox(/** boolean */ disabled) {
  this.f_inputElement__org_patternfly_component_form_Checkbox_.disabled = disabled;
  if (!$Equality.$same(this.f_labelElement__org_patternfly_component_form_Checkbox_, null)) {
   if (disabled) {
    this.f_labelElement__org_patternfly_component_form_Checkbox_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes));
   } else {
    this.f_labelElement__org_patternfly_component_form_Checkbox_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes));
   }
  }
  return this;
 }
 /** @nodts @return {Checkbox} */
 m_ariaDescribedBy__java_lang_String__org_patternfly_component_form_Checkbox(/** ?string */ describedBy) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_inputElement__org_patternfly_component_form_Checkbox_, Aria.f_describedBy__org_patternfly_core_Aria, describedBy);
  return this;
 }
 /** @nodts @return {Checkbox} */
 m_required__boolean__org_patternfly_component_form_Checkbox(/** boolean */ required) {
  this.f_inputElement__org_patternfly_component_form_Checkbox_.required = required;
  if (!$Equality.$same(this.f_labelElement__org_patternfly_component_form_Checkbox_, null)) {
   if (required) {
    if ($Equality.$same(this.f_requiredMarker__org_patternfly_component_form_Checkbox_, null)) {
     this.f_requiredMarker__org_patternfly_component_form_Checkbox_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes, Classes.f_required__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(SafeHtmlUtils.m_fromSafeConstant__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml('&#42;')), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
    }
    this.f_labelElement__org_patternfly_component_form_Checkbox_.appendChild(this.f_requiredMarker__org_patternfly_component_form_Checkbox_);
   } else {
    Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_requiredMarker__org_patternfly_component_form_Checkbox_);
   }
  }
  return this;
 }
 /** @nodts @return {Checkbox} */
 m_reversed__org_patternfly_component_form_Checkbox() {
  if (!$Equality.$same(this.f_inputElement__org_patternfly_component_form_Checkbox_, null) && !$Equality.$same(this.f_labelElement__org_patternfly_component_form_Checkbox_, null)) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_inputElement__org_patternfly_component_form_Checkbox_);
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_labelElement__org_patternfly_component_form_Checkbox_);
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_inputElement__org_patternfly_component_form_Checkbox_);
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_labelElement__org_patternfly_component_form_Checkbox_);
  }
  return this;
 }
 /** @nodts @return {Checkbox} */
 m_standalone__org_patternfly_component_form_Checkbox() {
  return this.m_standalone__boolean__org_patternfly_component_form_Checkbox(true);
 }
 /** @nodts @return {Checkbox} */
 m_standalone__boolean__org_patternfly_component_form_Checkbox(/** boolean */ standalone) {
  this.m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_standalone__org_patternfly_style_Classes), standalone);
  if (standalone) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_labelElement__org_patternfly_component_form_Checkbox_);
  }
  return this;
 }
 /** @nodts @return {Checkbox} */
 m_text__java_lang_String__org_patternfly_component_form_Checkbox(/** ?string */ text) {
  if (!Elements.m_isAttached__elemental2_dom_Node__boolean(this.f_labelElement__org_patternfly_component_form_Checkbox_)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_labelElement__org_patternfly_component_form_Checkbox_);
  }
  return /**@type {Checkbox}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, text), Checkbox));
 }
 /** @nodts @return {Checkbox} */
 m_value__boolean__org_patternfly_component_form_Checkbox(/** boolean */ checked) {
  return this.m_value__boolean__boolean__org_patternfly_component_form_Checkbox(checked, false);
 }
 /** @nodts @return {Checkbox} */
 m_value__boolean__boolean__org_patternfly_component_form_Checkbox(/** boolean */ checked, /** boolean */ fireEvent) {
  this.f_inputElement__org_patternfly_component_form_Checkbox_.checked = checked;
  if (fireEvent) {
   ChangeHandler.m_fireIfChanged__java_lang_Object__java_lang_Object__java_lang_Object__java_util_List__void(this, this.f_inputElement__org_patternfly_component_form_Checkbox_.checked, checked, this.f_changeHandlers__org_patternfly_component_form_Checkbox_);
  }
  return this;
 }
 /** @nodts @return {Checkbox} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_form_Checkbox(/** Consumer<HTMLInputElementBuilder<HTMLInputElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder());
  return this;
 }
 /** @nodts @return {Checkbox} */
 m_that__org_patternfly_component_form_Checkbox() {
  return this;
 }
 /** @nodts @return {Checkbox} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(/** ChangeHandler<Checkbox, ?boolean> */ changeHandler) {
  this.f_changeHandlers__org_patternfly_component_form_Checkbox_.add(changeHandler);
  return this;
 }
 /** @nodts @return {?boolean} */
 m_value__java_lang_Boolean() {
  return this.f_inputElement__org_patternfly_component_form_Checkbox_.checked;
 }
 /** @nodts @return {HTMLInputElementBuilder<HTMLInputElement>} */
 m_inputElement__org_jboss_elemento_HTMLInputElementBuilder() {
  return /**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_HTMLInputElementBuilder(this.f_inputElement__org_patternfly_component_form_Checkbox_));
 }
 //Bridge method.
 /** @final @override @nodts @return {Checkbox} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_Checkbox();
 }
 //Bridge method.
 /** @final @override @nodts @return {Checkbox} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Checkbox}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Checkbox));
 }
 //Bridge method.
 /** @final @override @nodts @return {Checkbox} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_form_Checkbox(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Checkbox} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_form_Checkbox(arg0);
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
 /** @final @override @nodts @return {Checkbox} */
 m_required__org_jboss_elemento_TypedBuilder() {
  return /**@type {Checkbox}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__org_jboss_elemento_TypedBuilder(this), Checkbox));
 }
 //Bridge method.
 /** @final @override @nodts @return {Checkbox} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_required__boolean__org_patternfly_component_form_Checkbox(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Checkbox} */
 m_disabled__org_patternfly_component_form_Checkbox() {
  return /**@type {Checkbox}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Checkbox));
 }
 //Default method forwarding stub.
 /** @nodts @return {Checkbox} */
 m_required__org_patternfly_component_form_Checkbox() {
  return /**@type {Checkbox}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__org_jboss_elemento_TypedBuilder(this), Checkbox));
 }
 /** @nodts */
 static $clinit() {
  Checkbox.$clinit = () =>{};
  Checkbox.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  ElementTextDelegate.$clinit();
  Required.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Checkbox;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
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
Disabled.$markImplementor(Checkbox);
ElementTextDelegate.$markImplementor(Checkbox);
HasValue.$markImplementor(Checkbox);
Required.$markImplementor(Checkbox);
$Util.$setClassMetadata(Checkbox, 'org.patternfly.component.form.Checkbox');

exports = Checkbox;

//# sourceMappingURL=Checkbox.js.map
