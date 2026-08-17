goog.module('org.patternfly.component.form.FormGroupLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let Popover = goog.forwardDeclare('org.patternfly.component.popover.Popover$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormGroupLabel>}
 * @implements {Attachable}
 * @implements {ElementTextDelegate<HTMLElement, FormGroupLabel>}
 */
class FormGroupLabel extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_form_FormGroupLabel_;
  /**@type {HTMLElement} @nodts*/
  this.f_labelElement__org_patternfly_component_form_FormGroupLabel_;
 }
 /** @nodts @return {FormGroupLabel} */
 static m_formGroupLabel__java_lang_String__org_patternfly_component_form_FormGroupLabel(/** ?string */ label) {
  FormGroupLabel.$clinit();
  return FormGroupLabel.$create__java_lang_String(label);
 }
 /** @nodts @return {!FormGroupLabel} */
 static $create__java_lang_String(/** ?string */ label) {
  FormGroupLabel.$clinit();
  let $instance = new FormGroupLabel();
  $instance.$ctor__org_patternfly_component_form_FormGroupLabel__java_lang_String__void(label);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormGroupLabel__java_lang_String__void(/** ?string */ label) {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FormGroupLabel.f_SUB_COMPONENT_ID__org_patternfly_component_form_FormGroupLabel, FormGroupLabel.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroupLabel, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes, Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_labelElement__org_patternfly_component_form_FormGroupLabel_ = (/**@type {HTMLLabelElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_form_FormGroupLabel_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(label), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay))));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let formGroup = /**@type {FormGroup}*/ ($Casts.$to(this.m_lookupSubComponent__java_lang_String__org_patternfly_component_SubComponent(FormGroup.f_SUB_COMPONENT_ID__org_patternfly_component_form_FormGroup), FormGroup));
  if (!$Equality.$same(formGroup.f_role__org_patternfly_component_form_FormGroup, null)) {
   let pseudoLabelElement = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
   for (let iterator = Elements.m_iterator__elemental2_dom_HTMLElement__java_util_Iterator(this.f_labelElement__org_patternfly_component_form_FormGroupLabel_); iterator.m_hasNext__boolean(); ) {
    let element = /**@type {HTMLElement}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), $Overlay));
    pseudoLabelElement.appendChild(element);
   }
   Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_labelElement__org_patternfly_component_form_FormGroupLabel_, [pseudoLabelElement]);
   this.f_labelElement__org_patternfly_component_form_FormGroupLabel_ = pseudoLabelElement;
   if (!$Equality.$same(this.m_element__elemental2_dom_HTMLElement().id, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().id)) {
    formGroup.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, this.m_element__elemental2_dom_HTMLElement().id);
   } else {
    let labelId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(formGroup.m_identifier__java_lang_String(), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['label'], j_l_String)));
    this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(labelId);
    formGroup.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labelId);
   }
  } else {
   (/**@type {HTMLLabelElement}*/ ($Casts.$to(this.f_labelElement__org_patternfly_component_form_FormGroupLabel_, HTMLLabelElement_$Overlay))).htmlFor = formGroup.m_identifier__java_lang_String();
  }
  if (formGroup.f_required__org_patternfly_component_form_FormGroup) {
   this.f_textElement__org_patternfly_component_form_FormGroupLabel_.appendChild((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes, Classes.f_required__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(SafeHtmlUtils.m_fromSafeConstant__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml('&#42;')), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_form_FormGroupLabel_;
 }
 /** @nodts @return {FormGroupLabel} */
 m_noPaddingTop__org_patternfly_component_form_FormGroupLabel() {
  return /**@type {FormGroupLabel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_noPaddingTop__org_patternfly_style_Classes)], j_l_String))), FormGroupLabel));
 }
 /** @nodts @return {FormGroupLabel} */
 m_help__java_lang_String__org_patternfly_component_popover_Popover__org_patternfly_component_form_FormGroupLabel(/** ?string */ ariaLabel, /** Popover */ popover) {
  let helpContainer = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes, Classes.f_label__org_patternfly_style_Classes, Classes.f_help__org_patternfly_style_Classes], j_l_String))), Classes.m_util__java_lang_String__java_lang_String('ml-xs')], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_style_Classes), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_noPadding__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_type__org_patternfly_core_Attributes, 'button'), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_button__org_patternfly_core_Roles), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, 0), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, ariaLabel), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhUi.m_questionMarkCircleFill__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(popover), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
  popover.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(helpContainer);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(helpContainer);
  return this;
 }
 /** @nodts @return {FormGroupLabel} */
 m_that__org_patternfly_component_form_FormGroupLabel() {
  return this;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroupLabel} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormGroupLabel();
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroupLabel} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {FormGroupLabel}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), FormGroupLabel));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {FormGroupLabel} */
 m_text__java_lang_String__org_patternfly_component_form_FormGroupLabel(/** ?string */ arg0) {
  return /**@type {FormGroupLabel}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), FormGroupLabel));
 }
 /** @nodts */
 static $clinit() {
  FormGroupLabel.$clinit = () =>{};
  FormGroupLabel.$loadModules();
  FormSubComponent.$clinit();
  Attachable.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormGroupLabel;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  FormGroup = goog.module.get('org.patternfly.component.form.FormGroup$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormGroupLabel.f_SUB_COMPONENT_ID__org_patternfly_component_form_FormGroupLabel = 'fgl';
/**@const {string} @nodts*/
FormGroupLabel.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroupLabel = 'FormGroupLabel';
Attachable.$markImplementor(FormGroupLabel);
ElementTextDelegate.$markImplementor(FormGroupLabel);
$Util.$setClassMetadata(FormGroupLabel, 'org.patternfly.component.form.FormGroupLabel');

exports = FormGroupLabel;

//# sourceMappingURL=FormGroupLabel.js.map
