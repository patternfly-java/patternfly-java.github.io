goog.module('org.patternfly.component.form.FormGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let FormGroupControl = goog.forwardDeclare('org.patternfly.component.form.FormGroupControl$impl');
let FormGroupLabel = goog.forwardDeclare('org.patternfly.component.form.FormGroupLabel$impl');
let FormGroupRole = goog.forwardDeclare('org.patternfly.component.form.FormGroupRole$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormGroup>}
 * @implements {HasIdentifier<HTMLElement, FormGroup>}
 * @implements {ComponentContext<HTMLElement, FormGroup>}
 */
class FormGroup extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_required__org_patternfly_component_form_FormGroup = false;
  /**@type {FormGroupRole} @nodts*/
  this.f_role__org_patternfly_component_form_FormGroup;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_form_FormGroup_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_form_FormGroup_;
 }
 /** @nodts @return {FormGroup} */
 static m_formGroup__org_patternfly_component_form_FormGroup() {
  FormGroup.$clinit();
  return FormGroup.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Form__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FormGroup.f_SUB_COMPONENT_ID__org_patternfly_component_form_FormGroup], j_l_String))));
 }
 /** @nodts @return {FormGroup} */
 static m_formGroup__java_lang_String__org_patternfly_component_form_FormGroup(/** ?string */ identifier) {
  FormGroup.$clinit();
  return FormGroup.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!FormGroup} */
 static $create__java_lang_String(/** ?string */ identifier) {
  FormGroup.$clinit();
  let $instance = new FormGroup();
  $instance.$ctor__org_patternfly_component_form_FormGroup__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormGroup__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FormGroup.f_SUB_COMPONENT_ID__org_patternfly_component_form_FormGroup, FormGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroup, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_identifier__org_patternfly_component_form_FormGroup_ = identifier;
  this.f_data__org_patternfly_component_form_FormGroup_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_required__org_patternfly_component_form_FormGroup = false;
  this.m_storeSubComponent__void();
 }
 /** @nodts @return {FormGroup} */
 m_addLabel__org_patternfly_component_form_FormGroupLabel__org_patternfly_component_form_FormGroup(/** FormGroupLabel */ label) {
  return /**@type {FormGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(label), FormGroup));
 }
 /** @nodts @return {FormGroup} */
 m_addControl__org_patternfly_component_form_FormGroupControl__org_patternfly_component_form_FormGroup(/** FormGroupControl */ control) {
  return /**@type {FormGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(control), FormGroup));
 }
 /** @nodts @return {FormGroup} */
 m_required__org_patternfly_component_form_FormGroup() {
  return this.m_required__boolean__org_patternfly_component_form_FormGroup(true);
 }
 /** @nodts @return {FormGroup} */
 m_required__boolean__org_patternfly_component_form_FormGroup(/** boolean */ required) {
  this.f_required__org_patternfly_component_form_FormGroup = required;
  return this;
 }
 /** @nodts @return {FormGroup} */
 m_role__org_patternfly_component_form_FormGroupRole__org_patternfly_component_form_FormGroup(/** FormGroupRole */ role) {
  this.f_role__org_patternfly_component_form_FormGroup = role;
  this.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, role.name());
  return this;
 }
 /** @nodts @template T @return {FormGroup} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_form_FormGroup(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_form_FormGroup_.put(key, value);
  return this;
 }
 /** @nodts @return {FormGroup} */
 m_that__org_patternfly_component_form_FormGroup() {
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_form_FormGroup_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_form_FormGroup_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_form_FormGroup_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_form_FormGroup_.get(key));
  }
  return null;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormGroup();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {FormGroup} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_form_FormGroup(arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ arg0, /** T */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ arg0, /** Supplier<T> */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  FormGroup.$clinit = () =>{};
  FormGroup.$loadModules();
  FormSubComponent.$clinit();
  ComponentContext.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormGroup.f_SUB_COMPONENT_ID__org_patternfly_component_form_FormGroup = 'fg';
/**@const {string} @nodts*/
FormGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroup = 'FormGroup';
HasIdentifier.$markImplementor(FormGroup);
ComponentContext.$markImplementor(FormGroup);
$Util.$setClassMetadata(FormGroup, 'org.patternfly.component.form.FormGroup');

exports = FormGroup;

//# sourceMappingURL=FormGroup.js.map
