goog.module('org.patternfly.showcase.component.CheckboxComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let CheckboxBody = goog.forwardDeclare('org.patternfly.component.form.CheckboxBody$impl');
let CheckboxDescription = goog.forwardDeclare('org.patternfly.component.form.CheckboxDescription$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CheckboxComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!CheckboxComponent} */
 static $create__() {
  CheckboxComponent.$clinit();
  let $instance = new CheckboxComponent();
  $instance.$ctor__org_patternfly_showcase_component_CheckboxComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_CheckboxComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'checkbox'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('checkbox-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-basic-0', 'checkbox-basic', 'Checkbox 1').m_value__boolean__org_patternfly_component_form_Checkbox(true)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-basic-1', 'checkbox-basic', 'Checkbox 2')), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-required', 'Required', Code.m_code__java_lang_String__java_lang_String('checkbox-required'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Checkbox}*/ ($Casts.$to(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-required-0', 'checkbox-required', 'Required checkbox 1').m_required__org_jboss_elemento_TypedBuilder(), Checkbox))).m_value__boolean__org_patternfly_component_form_Checkbox(true)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Checkbox}*/ ($Casts.$to(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-required-1', 'checkbox-required', 'Required checkbox 2').m_required__org_jboss_elemento_TypedBuilder(), Checkbox))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('checkbox-disabled'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Checkbox}*/ ($Casts.$to(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-disabled-0', 'checkbox-disabled', 'Disabled checkbox 1').m_disabled__org_jboss_elemento_TypedBuilder(), Checkbox))).m_value__boolean__org_patternfly_component_form_Checkbox(true)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Checkbox}*/ ($Casts.$to(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-disabled-1', 'checkbox-disabled', 'Disabled checkbox 2').m_disabled__org_jboss_elemento_TypedBuilder(), Checkbox))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-standalone', 'Standalone input', Code.m_code__java_lang_String__java_lang_String('checkbox-standalone'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-standalone-0', 'checkbox-standalone').m_standalone__org_patternfly_component_form_Checkbox()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-standalone-1', 'checkbox-standalone').m_standalone__org_patternfly_component_form_Checkbox().m_value__boolean__org_patternfly_component_form_Checkbox(true)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-description', 'Checkbox with description', Code.m_code__java_lang_String__java_lang_String('checkbox-description'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('cwd-0', 'cwd', 'Checkbox with description').m_addDescription__org_patternfly_component_form_CheckboxDescription__org_patternfly_component_form_Checkbox(CheckboxDescription.m_checkboxDescription__java_lang_String__org_patternfly_component_form_CheckboxDescription(LoremIpsum.m_words__int__java_lang_String(50)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-body', 'Checkbox with body', Code.m_code__java_lang_String__java_lang_String('checkbox-body'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('cwb-0', 'cwb', 'Checkbox with body').m_addBody__org_patternfly_component_form_CheckboxBody__org_patternfly_component_form_Checkbox(CheckboxBody.m_checkboxBody__java_lang_String__org_patternfly_component_form_CheckboxBody('This is where custom content goes.'))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-description-body', 'Checkbox with description and body', Code.m_code__java_lang_String__java_lang_String('checkbox-description-body'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('cdb-0', 'cdb', 'Checkbox with description and body').m_addDescription__org_patternfly_component_form_CheckboxDescription__org_patternfly_component_form_Checkbox(CheckboxDescription.m_checkboxDescription__java_lang_String__org_patternfly_component_form_CheckboxDescription(LoremIpsum.m_words__int__java_lang_String(50))).m_addBody__org_patternfly_component_form_CheckboxBody__org_patternfly_component_form_Checkbox(CheckboxBody.m_checkboxBody__java_lang_String__org_patternfly_component_form_CheckboxBody('This is where custom content goes.'))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-wrapped', 'Wrapped checkbox', Code.m_code__java_lang_String__java_lang_String('checkbox-wrapped'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String('mb-sm')], j_l_String))), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('You can expand the clickable area of a checkbox so that it spans wider than the checkbox label by using '), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_code__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-code'], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('checkboxWrapped()'), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('. This allows users to select a checkbox by clicking the checkbox itself, the label, the body, the description, and the area between these elements.'), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkboxWrapped__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('checkbox-wrapped-0', 'checkbox-wrapped', 'Wrapped checkbox').m_addDescription__org_patternfly_component_form_CheckboxDescription__org_patternfly_component_form_Checkbox(CheckboxDescription.m_checkboxDescription__java_lang_String__org_patternfly_component_form_CheckboxDescription(LoremIpsum.m_words__int__java_lang_String(50))).m_addBody__org_patternfly_component_form_CheckboxBody__org_patternfly_component_form_Checkbox(CheckboxBody.m_checkboxBody__java_lang_String__org_patternfly_component_form_CheckboxBody('This is where custom content goes.'))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Checkbox));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Checkbox), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CheckboxBody), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CheckboxDescription), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  CheckboxComponent.$clinit = () =>{};
  CheckboxComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CheckboxComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  CheckboxBody = goog.module.get('org.patternfly.component.form.CheckboxBody$impl');
  CheckboxDescription = goog.module.get('org.patternfly.component.form.CheckboxDescription$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CheckboxComponent, 'org.patternfly.showcase.component.CheckboxComponent');

exports = CheckboxComponent;

//# sourceMappingURL=CheckboxComponent.js.map
