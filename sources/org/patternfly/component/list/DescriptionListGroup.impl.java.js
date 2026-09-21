goog.module('org.patternfly.component.list.DescriptionListGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const DescriptionListSubComponent = goog.require('org.patternfly.component.list.DescriptionListSubComponent$impl');
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
let DescriptionListDescription = goog.forwardDeclare('org.patternfly.component.list.DescriptionListDescription$impl');
let DescriptionListTerm = goog.forwardDeclare('org.patternfly.component.list.DescriptionListTerm$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DescriptionListSubComponent<HTMLDivElement, DescriptionListGroup>}
 * @implements {ComponentContext<HTMLDivElement, DescriptionListGroup>}
 * @implements {HasIdentifier<HTMLDivElement, DescriptionListGroup>}
 */
class DescriptionListGroup extends DescriptionListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_list_DescriptionListGroup_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_list_DescriptionListGroup_;
 }
 /** @nodts @return {DescriptionListGroup} */
 static m_descriptionListGroup__org_patternfly_component_list_DescriptionListGroup() {
  DescriptionListGroup.$clinit();
  return DescriptionListGroup.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_DescriptionList__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([DescriptionListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_DescriptionListGroup], j_l_String))));
 }
 /** @nodts @return {DescriptionListGroup} */
 static m_descriptionListGroup__java_lang_String__org_patternfly_component_list_DescriptionListGroup(/** ?string */ identifier) {
  DescriptionListGroup.$clinit();
  return DescriptionListGroup.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!DescriptionListGroup} */
 static $create__java_lang_String(/** ?string */ identifier) {
  DescriptionListGroup.$clinit();
  let $instance = new DescriptionListGroup();
  $instance.$ctor__org_patternfly_component_list_DescriptionListGroup__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DescriptionListGroup__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_list_DescriptionListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(DescriptionListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_DescriptionListGroup, DescriptionListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DescriptionListGroup, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_identifier__org_patternfly_component_list_DescriptionListGroup_ = identifier;
  this.f_data__org_patternfly_component_list_DescriptionListGroup_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
 }
 /** @nodts @return {DescriptionListGroup} */
 m_addTerm__org_patternfly_component_list_DescriptionListTerm__org_patternfly_component_list_DescriptionListGroup(/** DescriptionListTerm */ term) {
  return /**@type {DescriptionListGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(term), DescriptionListGroup));
 }
 /** @nodts @return {DescriptionListGroup} */
 m_addDescription__org_patternfly_component_list_DescriptionListDescription__org_patternfly_component_list_DescriptionListGroup(/** DescriptionListDescription */ description) {
  return /**@type {DescriptionListGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(description), DescriptionListGroup));
 }
 /** @nodts @template T @return {DescriptionListGroup} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_DescriptionListGroup(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_list_DescriptionListGroup_.put(key, value);
  return this;
 }
 /** @nodts @return {DescriptionListGroup} */
 m_that__org_patternfly_component_list_DescriptionListGroup() {
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_list_DescriptionListGroup_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_list_DescriptionListGroup_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_list_DescriptionListGroup_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_list_DescriptionListGroup_.get(key));
  }
  return null;
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DescriptionListGroup();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {DescriptionListGroup} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_DescriptionListGroup(arg0, arg1);
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
  DescriptionListGroup.$clinit = () =>{};
  DescriptionListGroup.$loadModules();
  DescriptionListSubComponent.$clinit();
  ComponentContext.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DescriptionListGroup;
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
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DescriptionListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_DescriptionListGroup = 'dlg';
/**@const {string} @nodts*/
DescriptionListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DescriptionListGroup = 'DescriptionListGroup';
ComponentContext.$markImplementor(DescriptionListGroup);
HasIdentifier.$markImplementor(DescriptionListGroup);
$Util.$setClassMetadata(DescriptionListGroup, 'org.patternfly.component.list.DescriptionListGroup');

exports = DescriptionListGroup;

//# sourceMappingURL=DescriptionListGroup.js.map
