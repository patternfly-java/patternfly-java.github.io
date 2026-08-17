goog.module('org.patternfly.showcase.component.NumberInputComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let NumberInput = goog.forwardDeclare('org.patternfly.component.numberinput.NumberInput$impl');
let UnitPosition = goog.forwardDeclare('org.patternfly.component.numberinput.UnitPosition$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class NumberInputComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!NumberInputComponent} */
 static $create__() {
  NumberInputComponent.$clinit();
  let $instance = new NumberInputComponent();
  $instance.$ctor__org_patternfly_showcase_component_NumberInputComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_NumberInputComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'number-input'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('number-input-default', 'Default', Code.m_code__java_lang_String__java_lang_String('number-input-default'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(90).m_onBlur__org_patternfly_handler_ChangeHandler__org_patternfly_component_numberinput_NumberInput(ChangeHandler.$adapt((/** Event */ e, /** NumberInput */ c, /** ?number */ v) =>{
    let c_1 = /**@type {NumberInput}*/ ($Casts.$to(c, NumberInput));
    let v_1 = /**@type {?number}*/ ($Casts.$to(v, Double));
    goog.global.console.log('blur');
   })).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_numberinput_NumberInput(ChangeHandler.$adapt((/** Event */ e_1, /** NumberInput */ c_2, /** ?number */ v_2) =>{
    let c_3 = /**@type {NumberInput}*/ ($Casts.$to(c_2, NumberInput));
    let v_3 = /**@type {?number}*/ ($Casts.$to(v_2, Double));
    goog.global.console.log('change');
   }))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('number-input-with-unit', 'With unit', Code.m_code__java_lang_String__java_lang_String('number-input-with-unit'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(90).m_unit__java_lang_String__org_patternfly_component_numberinput_NumberInput('%')), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(90).m_unit__java_lang_String__org_patternfly_component_numberinput_UnitPosition__org_patternfly_component_numberinput_NumberInput('$', UnitPosition.f_before__org_patternfly_component_numberinput_UnitPosition)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('number-input-with-unit-and-thresholds', 'With unit and thresholds', 'To enable a user entered value to snap to the nearest threshold if the entered input is out of bounds, define the blur event handler', Code.m_code__java_lang_String__java_lang_String('number-input-with-unit-and-thresholds'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let numberInput = NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(0).m_min__double__org_patternfly_component_numberinput_NumberInput(0).m_max__double__org_patternfly_component_numberinput_NumberInput(10).m_unit__java_lang_String__org_patternfly_component_numberinput_NumberInput('%');
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' With a minimum value of 0 and maximum value of 10'), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(numberInput), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('number-input-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('number-input-disabled'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(100).m_disabled__boolean__org_patternfly_component_numberinput_NumberInput(true)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('number-input-with-status', 'With status', Code.m_code__java_lang_String__java_lang_String('number-input-with-status'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let statusInput = NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(5).m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_numberinput_NumberInput(ValidationStatus.f_success__org_patternfly_component_ValidationStatus).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_numberinput_NumberInput(ChangeHandler.$adapt((/** Event */ e_2, /** NumberInput */ component, /** ?number */ value) =>{
    let component_1 = /**@type {NumberInput}*/ ($Casts.$to(component, NumberInput));
    let value_1 = /**@type {?number}*/ ($Casts.$to(value, Double));
    let distance = Math.abs(Double.m_doubleValue__java_lang_Double__double(value_1) - 5);
    if (distance == 0) {
     component_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_numberinput_NumberInput(ValidationStatus.f_success__org_patternfly_component_ValidationStatus);
    } else if (distance <= 2) {
     component_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_numberinput_NumberInput(ValidationStatus.f_warning__org_patternfly_component_ValidationStatus);
    } else {
     component_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_numberinput_NumberInput(ValidationStatus.f_error__org_patternfly_component_ValidationStatus);
    }
   }));
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(statusInput), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('number-input-varying-sizes', 'Varying sizes', Code.m_code__java_lang_String__java_lang_String('number-input-varying-sizes'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(1).m_widthChars__int__org_patternfly_component_numberinput_NumberInput(1)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(1234567890).m_widthChars__int__org_patternfly_component_numberinput_NumberInput(10)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(5).m_widthChars__int__org_patternfly_component_numberinput_NumberInput(5)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(12345).m_widthChars__int__org_patternfly_component_numberinput_NumberInput(5)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('number-input-custom-increment-decrement', 'Custom increment/decrement', Code.m_code__java_lang_String__java_lang_String('number-input-custom-increment-decrement'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(90).m_step__double__org_patternfly_component_numberinput_NumberInput(3)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('number-input-custom-increment-decrement-thresholds', 'Custom increment/decrement and thresholds', Code.m_code__java_lang_String__java_lang_String('number-input-custom-increment-decrement-thresholds'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NumberInput.m_numberInput__double__org_patternfly_component_numberinput_NumberInput(90).m_min__double__org_patternfly_component_numberinput_NumberInput(90).m_max__double__org_patternfly_component_numberinput_NumberInput(100).m_step__double__org_patternfly_component_numberinput_NumberInput(3)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(NumberInput));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(NumberInput), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(UnitPosition), Type.f_other__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  NumberInputComponent.$clinit = () =>{};
  NumberInputComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberInputComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  NumberInput = goog.module.get('org.patternfly.component.numberinput.NumberInput$impl');
  UnitPosition = goog.module.get('org.patternfly.component.numberinput.UnitPosition$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(NumberInputComponent, 'org.patternfly.showcase.component.NumberInputComponent');

exports = NumberInputComponent;

//# sourceMappingURL=NumberInputComponent.js.map
