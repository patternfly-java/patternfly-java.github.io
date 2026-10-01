goog.module('org.patternfly.component.switch_.Switch$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const Readonly = goog.require('org.patternfly.style.Modifiers.Readonly$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLLabelElement, Switch>}
 * @implements {HasValue<?boolean>}
 * @implements {Disabled<HTMLLabelElement, Switch>}
 * @implements {Readonly<HTMLLabelElement, Switch>}
 * @implements {Attachable}
 */
class Switch extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_switch__Switch_;
  /**@type {HTMLElement} @nodts*/
  this.f_toggleElement__org_patternfly_component_switch__Switch_;
  /**@type {List<ChangeHandler<Switch, ?boolean>>} @nodts*/
  this.f_changeHandlers__org_patternfly_component_switch__Switch_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconElement__org_patternfly_component_switch__Switch_;
  /**@type {HTMLElement} @nodts*/
  this.f_labelElement__org_patternfly_component_switch__Switch_;
 }
 /** @nodts @return {Switch} */
 static m_switch___java_lang_String__java_lang_String__org_patternfly_component_switch__Switch(/** ?string */ id, /** ?string */ name) {
  Switch.$clinit();
  return Switch.$create__java_lang_String__java_lang_String__boolean(id, name, false);
 }
 /** @nodts @return {Switch} */
 static m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch(/** ?string */ id, /** ?string */ name, /** boolean */ checked) {
  Switch.$clinit();
  return Switch.$create__java_lang_String__java_lang_String__boolean(id, name, checked);
 }
 /** @nodts @return {!Switch} */
 static $create__java_lang_String__java_lang_String__boolean(/** ?string */ id, /** ?string */ name, /** boolean */ checked) {
  Switch.$clinit();
  let $instance = new Switch();
  $instance.$ctor__org_patternfly_component_switch__Switch__java_lang_String__java_lang_String__boolean__void(id, name, checked);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_switch__Switch__java_lang_String__java_lang_String__boolean__void(/** ?string */ id, /** ?string */ name, /** boolean */ checked) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Switch__org_patternfly_component_ComponentType, /**@type {HTMLLabelElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)));
  this.f_changeHandlers__org_patternfly_component_switch__Switch_ = (/**@type {!ArrayList<ChangeHandler<Switch, ?boolean>>}*/ (ArrayList.$create__()));
  (/**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay))).appendChild(this.f_inputElement__org_patternfly_component_switch__Switch_ = (/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_HTMLInputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_input__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLInputElementBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLInputElementBuilder))).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(name), HTMLInputElementBuilder))).m_checked__boolean__org_jboss_elemento_TypedBuilder(checked), HTMLInputElementBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_switch___org_patternfly_core_Roles), HTMLInputElementBuilder))).m_element__elemental2_dom_HTMLInputElement());
  (/**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay))).appendChild(this.f_toggleElement__org_patternfly_component_switch__Switch_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_inputElement__org_patternfly_component_switch__Switch_.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   this.f_changeHandlers__org_patternfly_component_switch__Switch_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<Switch, ?boolean> */ ch) =>{
    let ch_1 = /**@type {ChangeHandler<Switch, ?boolean>}*/ ($Casts.$to(ch, /**@type {Function}*/ (ChangeHandler)));
    ch_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this, this.f_inputElement__org_patternfly_component_switch__Switch_.checked);
   }));
  }));
  (/**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay))).htmlFor = id;
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if ($Equality.$same(this.f_labelElement__org_patternfly_component_switch__Switch_, null)) {
   let ariaLabel = this.f_inputElement__org_patternfly_component_switch__Switch_.getAttribute(Aria.f_label__org_patternfly_core_Aria);
   if ($Equality.$same(ariaLabel, null) || j_l_String.m_isEmpty__java_lang_String__boolean(ariaLabel)) {
    Switch.f_logger__org_patternfly_component_switch__Switch_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Switch %o requires either a label or an aria-label to be specified.', [/**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay))]);
   }
  }
 }
 /** @nodts @return {Switch} */
 m_disabled__boolean__org_patternfly_component_switch__Switch(/** boolean */ disabled) {
  this.f_inputElement__org_patternfly_component_switch__Switch_.disabled = disabled;
  return this;
 }
 /** @nodts @return {Switch} */
 m_checkIcon__org_patternfly_component_switch__Switch() {
  return this.m_checkIcon__boolean__org_patternfly_component_switch__Switch(true);
 }
 /** @nodts @return {Switch} */
 m_checkIcon__boolean__org_patternfly_component_switch__Switch(/** boolean */ checkIcon) {
  if (checkIcon && $Equality.$same(this.f_iconElement__org_patternfly_component_switch__Switch_, null)) {
   this.f_toggleElement__org_patternfly_component_switch__Switch_.appendChild(this.f_iconElement__org_patternfly_component_switch__Switch_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhUi.m_check__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  } else {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconElement__org_patternfly_component_switch__Switch_);
  }
  return this;
 }
 /** @nodts @return {Switch} */
 m_label__java_lang_String__org_patternfly_component_switch__Switch(/** ?string */ labelOn) {
  if ($Equality.$same(this.f_labelElement__org_patternfly_component_switch__Switch_, null)) {
   let labelId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.f_inputElement__org_patternfly_component_switch__Switch_.id, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['label'], j_l_String)));
   (/**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay))).appendChild(this.f_labelElement__org_patternfly_component_switch__Switch_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(labelId), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
   this.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labelId);
  }
  this.f_labelElement__org_patternfly_component_switch__Switch_.textContent = labelOn;
  return this;
 }
 /** @nodts @return {Switch} */
 m_readonly__boolean__org_patternfly_component_switch__Switch(/** boolean */ readonly) {
  if (readonly) {
   this.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('pointer-events', 'none');
  } else {
   this.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('pointer-events', 'unset');
  }
  this.f_inputElement__org_patternfly_component_switch__Switch_.readOnly = readonly;
  return this;
 }
 /** @nodts @return {Switch} */
 m_reversed__org_patternfly_component_switch__Switch() {
  return this.m_reversed__boolean__org_patternfly_component_switch__Switch(true);
 }
 /** @nodts @return {Switch} */
 m_reversed__boolean__org_patternfly_component_switch__Switch(/** boolean */ reversed) {
  Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)), Classes.f_reverse__org_patternfly_style_Classes, reversed);
  return this;
 }
 /** @nodts @return {Switch} */
 m_value__boolean__org_patternfly_component_switch__Switch(/** boolean */ checked) {
  return this.m_value__boolean__boolean__org_patternfly_component_switch__Switch(checked, false);
 }
 /** @nodts @return {Switch} */
 m_value__boolean__boolean__org_patternfly_component_switch__Switch(/** boolean */ checked, /** boolean */ fireEvent) {
  this.f_inputElement__org_patternfly_component_switch__Switch_.checked = checked;
  if (fireEvent) {
   ChangeHandler.m_fireIfChanged__java_lang_Object__java_lang_Object__java_lang_Object__java_util_List__void(this, this.f_inputElement__org_patternfly_component_switch__Switch_.checked, checked, this.f_changeHandlers__org_patternfly_component_switch__Switch_);
  }
  return this;
 }
 /** @nodts @return {Switch} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_switch__Switch(/** Consumer<HTMLInputElementBuilder<HTMLInputElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder());
  return this;
 }
 /** @nodts @return {Switch} */
 m_that__org_patternfly_component_switch__Switch() {
  return this;
 }
 /** @nodts @return {Switch} */
 m_ariaLabel__java_lang_String__org_patternfly_component_switch__Switch(/** ?string */ label) {
  this.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Switch} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_switch__Switch(/** ChangeHandler<Switch, ?boolean> */ changeHandler) {
  this.f_changeHandlers__org_patternfly_component_switch__Switch_.add(changeHandler);
  return this;
 }
 /** @nodts @return {?boolean} */
 m_value__java_lang_Boolean() {
  return this.f_inputElement__org_patternfly_component_switch__Switch_.checked;
 }
 /** @nodts @return {HTMLInputElementBuilder<HTMLInputElement>} */
 m_inputElement__org_jboss_elemento_HTMLInputElementBuilder() {
  return /**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_HTMLInputElementBuilder(this.f_inputElement__org_patternfly_component_switch__Switch_));
 }
 //Bridge method.
 /** @final @override @nodts @return {?boolean} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Boolean();
 }
 //Bridge method.
 /** @final @override @nodts @return {Switch} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_switch__Switch();
 }
 //Bridge method.
 /** @final @override @nodts @return {Switch} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Switch}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Switch));
 }
 //Bridge method.
 /** @final @override @nodts @return {Switch} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_switch__Switch(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Switch} */
 m_readonly__org_jboss_elemento_TypedBuilder() {
  return /**@type {Switch}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_style_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(this), Switch));
 }
 //Bridge method.
 /** @final @override @nodts @return {Switch} */
 m_readonly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_readonly__boolean__org_patternfly_component_switch__Switch(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Switch} */
 m_disabled__org_patternfly_component_switch__Switch() {
  return /**@type {Switch}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Switch));
 }
 //Default method forwarding stub.
 /** @nodts @return {Switch} */
 m_readonly__org_patternfly_component_switch__Switch() {
  return /**@type {Switch}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_style_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(this), Switch));
 }
 /** @nodts */
 static $clinit() {
  Switch.$clinit = () =>{};
  Switch.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  Readonly.$clinit();
  Attachable.$clinit();
  Switch.f_logger__org_patternfly_component_switch__Switch_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Switch).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Switch;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Switch.f_logger__org_patternfly_component_switch__Switch_;
HasValue.$markImplementor(Switch);
Disabled.$markImplementor(Switch);
Readonly.$markImplementor(Switch);
Attachable.$markImplementor(Switch);
$Util.$setClassMetadata(Switch, 'org.patternfly.component.switch_.Switch');

exports = Switch;

//# sourceMappingURL=Switch.js.map
