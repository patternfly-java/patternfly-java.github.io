goog.module('org.patternfly.component.numberinput.NumberInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let FocusEvent_$Overlay = goog.forwardDeclare('elemental2.dom.FocusEvent.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let TextInput = goog.forwardDeclare('org.patternfly.component.form.TextInput$impl');
let TextInputType = goog.forwardDeclare('org.patternfly.component.form.TextInputType$impl');
let InputGroup = goog.forwardDeclare('org.patternfly.component.inputgroup.InputGroup$impl');
let InputGroupItem = goog.forwardDeclare('org.patternfly.component.inputgroup.InputGroupItem$impl');
let UnitPosition = goog.forwardDeclare('org.patternfly.component.numberinput.UnitPosition$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, NumberInput>}
 * @implements {Disabled<HTMLDivElement, NumberInput>}
 * @implements {HasValue<?number>}
 */
class NumberInput extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {InputGroup} @nodts*/
  this.f_inputGroup__org_patternfly_component_numberinput_NumberInput_;
  /**@type {InputGroupItem} @nodts*/
  this.f_minusButtonItem__org_patternfly_component_numberinput_NumberInput_;
  /**@type {Button} @nodts*/
  this.f_minusButton__org_patternfly_component_numberinput_NumberInput_;
  /**@type {InputGroupItem} @nodts*/
  this.f_textInputItem__org_patternfly_component_numberinput_NumberInput_;
  /**@type {TextInput} @nodts*/
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_;
  /**@type {InputGroupItem} @nodts*/
  this.f_plusButtonItem__org_patternfly_component_numberinput_NumberInput_;
  /**@type {Button} @nodts*/
  this.f_plusButton__org_patternfly_component_numberinput_NumberInput_;
  /**@type {List<ChangeHandler<NumberInput, ?number>>} @nodts*/
  this.f_blurHandlers__org_patternfly_component_numberinput_NumberInput_;
  /**@type {List<ChangeHandler<NumberInput, ?number>>} @nodts*/
  this.f_changeHandlers__org_patternfly_component_numberinput_NumberInput_;
  /**@type {List<ChangeHandler<NumberInput, ?number>>} @nodts*/
  this.f_minusHandlers__org_patternfly_component_numberinput_NumberInput_;
  /**@type {List<ChangeHandler<NumberInput, ?number>>} @nodts*/
  this.f_plusHandlers__org_patternfly_component_numberinput_NumberInput_;
  /**@type {number} @nodts*/
  this.f_value__org_patternfly_component_numberinput_NumberInput_ = 0;
  /**@type {number} @nodts*/
  this.f_min__org_patternfly_component_numberinput_NumberInput_ = 0;
  /**@type {number} @nodts*/
  this.f_max__org_patternfly_component_numberinput_NumberInput_ = 0;
  /**@type {boolean} @nodts*/
  this.f_disabled__org_patternfly_component_numberinput_NumberInput_ = false;
  /**@type {?string} @nodts*/
  this.f_minusButtonAriaLabel__org_patternfly_component_numberinput_NumberInput_;
  /**@type {?string} @nodts*/
  this.f_plusButtonAriaLabel__org_patternfly_component_numberinput_NumberInput_;
  /**@type {HTMLElement} @nodts*/
  this.f_unitElement__org_patternfly_component_numberinput_NumberInput_;
  /**@type {UnaryOperator<?number>} @nodts*/
  this.f_plusOperation__org_patternfly_component_numberinput_NumberInput_;
  /**@type {UnaryOperator<?number>} @nodts*/
  this.f_minusOperation__org_patternfly_component_numberinput_NumberInput_;
 }
 /** @nodts @return {NumberInput} */
 static m_numberInput__double__org_patternfly_component_numberinput_NumberInput(/** number */ initialValue) {
  NumberInput.$clinit();
  return NumberInput.$create__double(initialValue);
 }
 /** @nodts @return {NumberInput} */
 static m_numberInput__org_patternfly_component_numberinput_NumberInput() {
  NumberInput.$clinit();
  return NumberInput.$create__double(0);
 }
 /** @nodts @return {!NumberInput} */
 static $create__double(/** number */ initialValue) {
  let $instance = new NumberInput();
  $instance.$ctor__org_patternfly_component_numberinput_NumberInput__double__void(initialValue);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_numberinput_NumberInput__double__void(/** number */ initialValue) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_NumberInput__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_numberInput__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.$init__void_$p_org_patternfly_component_numberinput_NumberInput();
  this.f_value__org_patternfly_component_numberinput_NumberInput_ = this.m_clamp__double__double_$p_org_patternfly_component_numberinput_NumberInput(initialValue);
  this.f_blurHandlers__org_patternfly_component_numberinput_NumberInput_ = (/**@type {!LinkedList<ChangeHandler<NumberInput, ?number>>}*/ (LinkedList.$create__()));
  this.f_changeHandlers__org_patternfly_component_numberinput_NumberInput_ = (/**@type {!LinkedList<ChangeHandler<NumberInput, ?number>>}*/ (LinkedList.$create__()));
  this.f_minusHandlers__org_patternfly_component_numberinput_NumberInput_ = (/**@type {!LinkedList<ChangeHandler<NumberInput, ?number>>}*/ (LinkedList.$create__()));
  this.f_plusHandlers__org_patternfly_component_numberinput_NumberInput_ = (/**@type {!LinkedList<ChangeHandler<NumberInput, ?number>>}*/ (LinkedList.$create__()));
  this.m_step__double__org_patternfly_component_numberinput_NumberInput(1);
  this.f_minusHandlers__org_patternfly_component_numberinput_NumberInput_.add(ChangeHandler.$adapt((/** Event */ e, /** NumberInput */ component, /** ?number */ value) =>{
   let component_1 = /**@type {NumberInput}*/ ($Casts.$to(component, NumberInput));
   let value_1 = /**@type {?number}*/ ($Casts.$to(value, Double));
   component_1.m_value__double__org_patternfly_component_numberinput_NumberInput(Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ ($Casts.$to(this.f_minusOperation__org_patternfly_component_numberinput_NumberInput_.m_apply__java_lang_Object__java_lang_Object(value_1), Double))));
  }));
  this.f_plusHandlers__org_patternfly_component_numberinput_NumberInput_.add(ChangeHandler.$adapt((/** Event */ e_1, /** NumberInput */ component_2, /** ?number */ value_2) =>{
   let component_3 = /**@type {NumberInput}*/ ($Casts.$to(component_2, NumberInput));
   let value_3 = /**@type {?number}*/ ($Casts.$to(value_2, Double));
   component_3.m_value__double__org_patternfly_component_numberinput_NumberInput(Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ ($Casts.$to(this.f_plusOperation__org_patternfly_component_numberinput_NumberInput_.m_apply__java_lang_Object__java_lang_Object(value_3), Double))));
  }));
  this.f_inputGroup__org_patternfly_component_numberinput_NumberInput_ = InputGroup.m_inputGroup__org_patternfly_component_inputgroup_InputGroup();
  this.f_minusButtonItem__org_patternfly_component_numberinput_NumberInput_ = InputGroupItem.m_inputGroupItem__org_patternfly_component_inputgroup_InputGroupItem();
  this.f_minusButton__org_patternfly_component_numberinput_NumberInput_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_control__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_minus__org_patternfly_icon_PredefinedIcon()), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, this.f_minusButtonAriaLabel__org_patternfly_component_numberinput_NumberInput_), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
   let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
   this.m_fireMinusHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(arg0_1);
  }), Button)));
  this.f_minusButtonItem__org_patternfly_component_numberinput_NumberInput_.m_addButton__org_patternfly_component_button_Button__org_patternfly_component_inputgroup_InputGroupItem(this.f_minusButton__org_patternfly_component_numberinput_NumberInput_);
  this.f_inputGroup__org_patternfly_component_numberinput_NumberInput_.m_addItem__org_patternfly_component_inputgroup_InputGroupItem__org_patternfly_component_inputgroup_InputGroup(this.f_minusButtonItem__org_patternfly_component_numberinput_NumberInput_);
  this.f_textInputItem__org_patternfly_component_numberinput_NumberInput_ = InputGroupItem.m_inputGroupItem__org_patternfly_component_inputgroup_InputGroupItem();
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_ = TextInput.m_textInput__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput(TextInputType.f_number__org_patternfly_component_form_TextInputType, Id.m_unique__java_lang_String(), j_l_String.m_valueOf__double__java_lang_String(initialValue));
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_input__org_jboss_elemento_HTMLInputElementBuilder().m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_change__org_jboss_elemento_EventType, (/** Event */ arg0_2) =>{
   this.m_handleInputChange__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(arg0_2);
  });
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_input__org_jboss_elemento_HTMLInputElementBuilder().m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_blur__org_jboss_elemento_EventType, (/** FocusEvent */ arg0_3) =>{
   let arg0_4 = /**@type {FocusEvent}*/ ($Casts.$to(arg0_3, FocusEvent_$Overlay));
   this.m_fireBlurHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(arg0_4);
  });
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_input__org_jboss_elemento_HTMLInputElementBuilder().m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ arg0_5) =>{
   let arg0_6 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0_5, KeyboardEvent_$Overlay));
   this.m_handleInputKeydown__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_numberinput_NumberInput(arg0_6);
  });
  this.f_textInputItem__org_patternfly_component_numberinput_NumberInput_.m_add__org_patternfly_component_form_FormControl__org_patternfly_component_inputgroup_InputGroupItem(this.f_textInput__org_patternfly_component_numberinput_NumberInput_);
  this.f_inputGroup__org_patternfly_component_numberinput_NumberInput_.m_addItem__org_patternfly_component_inputgroup_InputGroupItem__org_patternfly_component_inputgroup_InputGroup(this.f_textInputItem__org_patternfly_component_numberinput_NumberInput_);
  this.f_plusButtonItem__org_patternfly_component_numberinput_NumberInput_ = InputGroupItem.m_inputGroupItem__org_patternfly_component_inputgroup_InputGroupItem();
  this.f_plusButton__org_patternfly_component_numberinput_NumberInput_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_control__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_plus__org_patternfly_icon_PredefinedIcon()), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, this.f_plusButtonAriaLabel__org_patternfly_component_numberinput_NumberInput_), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0_7) =>{
   let arg0_8 = /**@type {MouseEvent}*/ ($Casts.$to(arg0_7, MouseEvent_$Overlay));
   this.m_firePlusHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(arg0_8);
  }), Button)));
  this.f_plusButtonItem__org_patternfly_component_numberinput_NumberInput_.m_addButton__org_patternfly_component_button_Button__org_patternfly_component_inputgroup_InputGroupItem(this.f_plusButton__org_patternfly_component_numberinput_NumberInput_);
  this.f_inputGroup__org_patternfly_component_numberinput_NumberInput_.m_addItem__org_patternfly_component_inputgroup_InputGroupItem__org_patternfly_component_inputgroup_InputGroup(this.f_plusButtonItem__org_patternfly_component_numberinput_NumberInput_);
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).appendChild(this.f_inputGroup__org_patternfly_component_numberinput_NumberInput_.m_element__elemental2_dom_HTMLElement());
  this.m_storeComponent__void();
 }
 /** @nodts @return {NumberInput} */
 m_widthChars__int__org_patternfly_component_numberinput_NumberInput(/** number */ widthChars) {
  NumberInput.f_INPUT_WIDTH_VARIABLE__org_patternfly_component_numberinput_NumberInput_.m_applyTo__elemental2_dom_HTMLElement__org_patternfly_style_VariableAssignments_HTMLElement(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).m_set__int__void(widthChars);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_min__double__org_patternfly_component_numberinput_NumberInput(/** number */ min) {
  this.f_min__org_patternfly_component_numberinput_NumberInput_ = min;
  this.m_value__double__org_patternfly_component_numberinput_NumberInput(this.f_value__org_patternfly_component_numberinput_NumberInput_);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_max__double__org_patternfly_component_numberinput_NumberInput(/** number */ max) {
  this.f_max__org_patternfly_component_numberinput_NumberInput_ = max;
  this.m_value__double__org_patternfly_component_numberinput_NumberInput(this.f_value__org_patternfly_component_numberinput_NumberInput_);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_range__double__double__org_patternfly_component_numberinput_NumberInput(/** number */ min, /** number */ max) {
  this.f_min__org_patternfly_component_numberinput_NumberInput_ = min;
  this.f_max__org_patternfly_component_numberinput_NumberInput_ = max;
  this.m_value__double__org_patternfly_component_numberinput_NumberInput(this.f_value__org_patternfly_component_numberinput_NumberInput_);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_inputName__java_lang_String__org_patternfly_component_numberinput_NumberInput(/** ?string */ inputName) {
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('name', inputName);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_inputAriaLabel__java_lang_String__org_patternfly_component_numberinput_NumberInput(/** ?string */ label) {
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_minusButtonAriaLabel__java_lang_String__org_patternfly_component_numberinput_NumberInput(/** ?string */ label) {
  this.f_minusButtonAriaLabel__org_patternfly_component_numberinput_NumberInput_ = label;
  this.f_minusButton__org_patternfly_component_numberinput_NumberInput_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_plusButtonAriaLabel__java_lang_String__org_patternfly_component_numberinput_NumberInput(/** ?string */ label) {
  this.f_plusButtonAriaLabel__org_patternfly_component_numberinput_NumberInput_ = label;
  this.f_plusButton__org_patternfly_component_numberinput_NumberInput_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_unit__java_lang_String__org_patternfly_component_numberinput_NumberInput(/** ?string */ value) {
  return this.m_unit__java_lang_String__org_patternfly_component_numberinput_UnitPosition__org_patternfly_component_numberinput_NumberInput(value, UnitPosition.f_after__org_patternfly_component_numberinput_UnitPosition);
 }
 /** @nodts @return {NumberInput} */
 m_unit__java_lang_String__org_patternfly_component_numberinput_UnitPosition__org_patternfly_component_numberinput_NumberInput(/** ?string */ value, /** UnitPosition */ position) {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_unitElement__org_patternfly_component_numberinput_NumberInput_);
  if (!$Equality.$same(value, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(value)) {
   this.f_unitElement__org_patternfly_component_numberinput_NumberInput_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_numberInput__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_unit__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(value), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
   switch (position.ordinal()) {
    case UnitPosition.$ordinal_before__org_patternfly_component_numberinput_UnitPosition:
     (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).insertBefore(this.f_unitElement__org_patternfly_component_numberinput_NumberInput_, this.f_inputGroup__org_patternfly_component_numberinput_NumberInput_.m_element__elemental2_dom_HTMLElement());
     break;
    case UnitPosition.$ordinal_after__org_patternfly_component_numberinput_UnitPosition:
     (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).appendChild(this.f_unitElement__org_patternfly_component_numberinput_NumberInput_);
     break;
   }
  }
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_disabled__boolean__org_patternfly_component_numberinput_NumberInput(/** boolean */ disabled) {
  this.f_disabled__org_patternfly_component_numberinput_NumberInput_ = disabled;
  this.f_minusButton__org_patternfly_component_numberinput_NumberInput_.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_disabled__boolean__org_patternfly_component_BaseComponent(disabled);
  this.f_plusButton__org_patternfly_component_numberinput_NumberInput_.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
  return /**@type {NumberInput}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), NumberInput));
 }
 /** @nodts @return {NumberInput} */
 m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_numberinput_NumberInput(/** ValidationStatus */ validated) {
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(validated);
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_value__double__org_patternfly_component_numberinput_NumberInput(/** number */ value) {
  let clampedValue = this.m_clamp__double__double_$p_org_patternfly_component_numberinput_NumberInput(value);
  let changed = this.f_value__org_patternfly_component_numberinput_NumberInput_ != clampedValue;
  this.f_value__org_patternfly_component_numberinput_NumberInput_ = clampedValue;
  this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_value__java_lang_String__org_patternfly_component_form_TextInput(j_l_String.m_valueOf__double__java_lang_String(this.f_value__org_patternfly_component_numberinput_NumberInput_));
  if (changed) {
   this.m_fireChangeHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(null);
  }
  this.m_updateButtonStates__void_$p_org_patternfly_component_numberinput_NumberInput();
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_plusOperation__java_util_function_UnaryOperator__org_patternfly_component_numberinput_NumberInput(/** UnaryOperator<?number> */ operation) {
  this.f_plusOperation__org_patternfly_component_numberinput_NumberInput_ = (/**@type {UnaryOperator<?number>}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(operation, 'operation must not be null'), /**@type {Function}*/ (UnaryOperator))));
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_minusOperation__java_util_function_UnaryOperator__org_patternfly_component_numberinput_NumberInput(/** UnaryOperator<?number> */ operation) {
  this.f_minusOperation__org_patternfly_component_numberinput_NumberInput_ = (/**@type {UnaryOperator<?number>}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(operation, 'operation must not be null'), /**@type {Function}*/ (UnaryOperator))));
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_operations__java_util_function_UnaryOperator__java_util_function_UnaryOperator__org_patternfly_component_numberinput_NumberInput(/** UnaryOperator<?number> */ minusOperation, /** UnaryOperator<?number> */ plusOperation) {
  return this.m_minusOperation__java_util_function_UnaryOperator__org_patternfly_component_numberinput_NumberInput(minusOperation).m_plusOperation__java_util_function_UnaryOperator__org_patternfly_component_numberinput_NumberInput(plusOperation);
 }
 /** @nodts @return {NumberInput} */
 m_step__double__org_patternfly_component_numberinput_NumberInput(/** number */ steps) {
  return this.m_operations__java_util_function_UnaryOperator__java_util_function_UnaryOperator__org_patternfly_component_numberinput_NumberInput(UnaryOperator.$adapt(/**  @return {?number}*/ ((/** ?number */ v) =>{
   let v_1 = /**@type {?number}*/ ($Casts.$to(v, Double));
   return Double.m_doubleValue__java_lang_Double__double(v_1) - steps;
  })), UnaryOperator.$adapt(/**  @return {?number}*/ ((/** ?number */ v_2) =>{
   let v_3 = /**@type {?number}*/ ($Casts.$to(v_2, Double));
   return Double.m_doubleValue__java_lang_Double__double(v_3) + steps;
  })));
 }
 /** @nodts @return {NumberInput} */
 m_that__org_patternfly_component_numberinput_NumberInput() {
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_onBlur__org_patternfly_handler_ChangeHandler__org_patternfly_component_numberinput_NumberInput(/** ChangeHandler<NumberInput, ?number> */ blurHandler) {
  this.f_blurHandlers__org_patternfly_component_numberinput_NumberInput_.add(/**@type {ChangeHandler<NumberInput, ?number>}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(blurHandler, 'blurHandler must not be null'), /**@type {Function}*/ (ChangeHandler))));
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_numberinput_NumberInput(/** ChangeHandler<NumberInput, ?number> */ changeHandler) {
  this.f_changeHandlers__org_patternfly_component_numberinput_NumberInput_.add(/**@type {ChangeHandler<NumberInput, ?number>}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(changeHandler, 'changeHandler must not be null'), /**@type {Function}*/ (ChangeHandler))));
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_onMinus__org_patternfly_handler_ChangeHandler__org_patternfly_component_numberinput_NumberInput(/** ChangeHandler<NumberInput, ?number> */ minusHandler) {
  this.f_minusHandlers__org_patternfly_component_numberinput_NumberInput_.add(/**@type {ChangeHandler<NumberInput, ?number>}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(minusHandler, 'minusHandler must not be null'), /**@type {Function}*/ (ChangeHandler))));
  return this;
 }
 /** @nodts @return {NumberInput} */
 m_onPlus__org_patternfly_handler_ChangeHandler__org_patternfly_component_numberinput_NumberInput(/** ChangeHandler<NumberInput, ?number> */ plusHandler) {
  this.f_plusHandlers__org_patternfly_component_numberinput_NumberInput_.add(/**@type {ChangeHandler<NumberInput, ?number>}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(plusHandler, 'plusHandler must not be null'), /**@type {Function}*/ (ChangeHandler))));
  return this;
 }
 /** @nodts @return {?number} */
 m_value__java_lang_Double() {
  return this.f_value__org_patternfly_component_numberinput_NumberInput_;
 }
 /** @nodts @return {number} */
 m_clamp__double__double_$p_org_patternfly_component_numberinput_NumberInput(/** number */ value) {
  return Math.max(this.f_min__org_patternfly_component_numberinput_NumberInput_, Math.min(this.f_max__org_patternfly_component_numberinput_NumberInput_, value));
 }
 /** @nodts */
 m_handleInputChange__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(/** Event */ event) {
  try {
   this.m_value__double__org_patternfly_component_numberinput_NumberInput(Double.m_parseDouble__java_lang_String__double(this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_value__java_lang_String()));
  } catch (__$jsexc) {
   let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
   if (NumberFormatException.$isInstance(__$exc)) {
    let e = /**@type {NumberFormatException}*/ (__$exc);
    this.f_textInput__org_patternfly_component_numberinput_NumberInput_.m_value__java_lang_String__org_patternfly_component_form_TextInput(j_l_String.m_valueOf__double__java_lang_String(this.f_value__org_patternfly_component_numberinput_NumberInput_));
   } else {
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
   }
  }
 }
 /** @nodts */
 m_handleInputKeydown__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_numberinput_NumberInput(/** KeyboardEvent */ event) {
  if (Key.f_ArrowUp__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) && !this.f_plusButton__org_patternfly_component_numberinput_NumberInput_.m_isDisabled__boolean()) {
   event.preventDefault();
   this.m_firePlusHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(event);
  } else if (Key.f_ArrowDown__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) && !this.f_minusButton__org_patternfly_component_numberinput_NumberInput_.m_isDisabled__boolean()) {
   event.preventDefault();
   this.m_fireMinusHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(event);
  }
 }
 /** @nodts */
 m_updateButtonStates__void_$p_org_patternfly_component_numberinput_NumberInput() {
  this.f_minusButton__org_patternfly_component_numberinput_NumberInput_.m_disabled__boolean__org_patternfly_component_button_Button(this.f_disabled__org_patternfly_component_numberinput_NumberInput_ || this.f_value__org_patternfly_component_numberinput_NumberInput_ <= this.f_min__org_patternfly_component_numberinput_NumberInput_ && !Double.m_isInfinite__double__boolean(this.f_min__org_patternfly_component_numberinput_NumberInput_));
  this.f_plusButton__org_patternfly_component_numberinput_NumberInput_.m_disabled__boolean__org_patternfly_component_button_Button(this.f_disabled__org_patternfly_component_numberinput_NumberInput_ || this.f_value__org_patternfly_component_numberinput_NumberInput_ >= this.f_max__org_patternfly_component_numberinput_NumberInput_ && !Double.m_isInfinite__double__boolean(this.f_max__org_patternfly_component_numberinput_NumberInput_));
 }
 /** @nodts */
 m_fireBlurHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(/** Event */ event) {
  this.f_blurHandlers__org_patternfly_component_numberinput_NumberInput_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<NumberInput, ?number> */ handler) =>{
   let handler_1 = /**@type {ChangeHandler<NumberInput, ?number>}*/ ($Casts.$to(handler, /**@type {Function}*/ (ChangeHandler)));
   handler_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(event, this, this.f_value__org_patternfly_component_numberinput_NumberInput_);
  }));
 }
 /** @nodts */
 m_fireChangeHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(/** Event */ event) {
  this.f_changeHandlers__org_patternfly_component_numberinput_NumberInput_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<NumberInput, ?number> */ handler) =>{
   let handler_1 = /**@type {ChangeHandler<NumberInput, ?number>}*/ ($Casts.$to(handler, /**@type {Function}*/ (ChangeHandler)));
   handler_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(event, this, this.f_value__org_patternfly_component_numberinput_NumberInput_);
  }));
 }
 /** @nodts */
 m_fireMinusHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(/** Event */ event) {
  this.f_minusHandlers__org_patternfly_component_numberinput_NumberInput_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<NumberInput, ?number> */ handler) =>{
   let handler_1 = /**@type {ChangeHandler<NumberInput, ?number>}*/ ($Casts.$to(handler, /**@type {Function}*/ (ChangeHandler)));
   handler_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(event, this, this.f_value__org_patternfly_component_numberinput_NumberInput_);
  }));
 }
 /** @nodts */
 m_firePlusHandler__elemental2_dom_Event__void_$p_org_patternfly_component_numberinput_NumberInput(/** Event */ event) {
  this.f_plusHandlers__org_patternfly_component_numberinput_NumberInput_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<NumberInput, ?number> */ handler) =>{
   let handler_1 = /**@type {ChangeHandler<NumberInput, ?number>}*/ ($Casts.$to(handler, /**@type {Function}*/ (ChangeHandler)));
   handler_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(event, this, this.f_value__org_patternfly_component_numberinput_NumberInput_);
  }));
 }
 //Bridge method.
 /** @final @override @nodts @return {NumberInput} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_numberinput_NumberInput();
 }
 //Bridge method.
 /** @final @override @nodts @return {NumberInput} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {NumberInput}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), NumberInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {NumberInput} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_numberinput_NumberInput(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {?number} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Double();
 }
 //Default method forwarding stub.
 /** @nodts @return {NumberInput} */
 m_disabled__org_patternfly_component_numberinput_NumberInput() {
  return /**@type {NumberInput}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), NumberInput));
 }
 /** @private @nodts */
 $init__void_$p_org_patternfly_component_numberinput_NumberInput() {
  this.f_min__org_patternfly_component_numberinput_NumberInput_ = Double.f_NEGATIVE_INFINITY__java_lang_Double;
  this.f_max__org_patternfly_component_numberinput_NumberInput_ = Double.f_POSITIVE_INFINITY__java_lang_Double;
  this.f_minusButtonAriaLabel__org_patternfly_component_numberinput_NumberInput_ = 'Minus';
  this.f_plusButtonAriaLabel__org_patternfly_component_numberinput_NumberInput_ = 'Plus';
 }
 /** @nodts */
 static $clinit() {
  NumberInput.$clinit = () =>{};
  NumberInput.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  NumberInput.f_INPUT_WIDTH_VARIABLE__org_patternfly_component_numberinput_NumberInput_ = Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_numberInput__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['c-form-control', 'width-chars'], j_l_String)));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberInput;
 }
 
 /** @nodts */
 static $loadModules() {
  FocusEvent_$Overlay = goog.module.get('elemental2.dom.FocusEvent.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  UnaryOperator = goog.module.get('java.util.function.UnaryOperator$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  TextInput = goog.module.get('org.patternfly.component.form.TextInput$impl');
  TextInputType = goog.module.get('org.patternfly.component.form.TextInputType$impl');
  InputGroup = goog.module.get('org.patternfly.component.inputgroup.InputGroup$impl');
  InputGroupItem = goog.module.get('org.patternfly.component.inputgroup.InputGroupItem$impl');
  UnitPosition = goog.module.get('org.patternfly.component.numberinput.UnitPosition$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Variable} @nodts*/
NumberInput.f_INPUT_WIDTH_VARIABLE__org_patternfly_component_numberinput_NumberInput_;
Disabled.$markImplementor(NumberInput);
HasValue.$markImplementor(NumberInput);
$Util.$setClassMetadata(NumberInput, 'org.patternfly.component.numberinput.NumberInput');

exports = NumberInput;

//# sourceMappingURL=NumberInput.js.map
