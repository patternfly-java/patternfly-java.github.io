goog.module('org.patternfly.component.list.ActionListItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const ActionListSubComponent = goog.require('org.patternfly.component.list.ActionListSubComponent$impl');
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
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ActionListSubComponent<HTMLDivElement, ActionListItem>}
 * @implements {HasIdentifier<HTMLDivElement, ActionListItem>}
 * @implements {ComponentContext<HTMLDivElement, ActionListItem>}
 */
class ActionListItem extends ActionListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_list_ActionListItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_list_ActionListItem_;
 }
 /** @nodts @return {ActionListItem} */
 static m_actionListItem__org_patternfly_component_list_ActionListItem() {
  ActionListItem.$clinit();
  return ActionListItem.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_ActionList__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ActionListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_ActionListItem], j_l_String))));
 }
 /** @nodts @return {ActionListItem} */
 static m_actionListItem__java_lang_String__org_patternfly_component_list_ActionListItem(/** ?string */ identifier) {
  ActionListItem.$clinit();
  return ActionListItem.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!ActionListItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  ActionListItem.$clinit();
  let $instance = new ActionListItem();
  $instance.$ctor__org_patternfly_component_list_ActionListItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_ActionListItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_list_ActionListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ActionListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_ActionListItem, ActionListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ActionListItem, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_actionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_identifier__org_patternfly_component_list_ActionListItem_ = identifier;
  this.f_data__org_patternfly_component_list_ActionListItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
 }
 /** @nodts @template T @return {ActionListItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_ActionListItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_list_ActionListItem_.put(key, value);
  return this;
 }
 /** @nodts @return {ActionListItem} */
 m_that__org_patternfly_component_list_ActionListItem() {
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_list_ActionListItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_list_ActionListItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_list_ActionListItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_list_ActionListItem_.get(key));
  }
  return null;
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_ActionListItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ActionListItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_ActionListItem(arg0, arg1);
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
  ActionListItem.$clinit = () =>{};
  ActionListItem.$loadModules();
  ActionListSubComponent.$clinit();
  ComponentContext.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActionListItem;
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
ActionListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_ActionListItem = 'ali';
/**@const {string} @nodts*/
ActionListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ActionListItem = 'ActionListItem';
HasIdentifier.$markImplementor(ActionListItem);
ComponentContext.$markImplementor(ActionListItem);
$Util.$setClassMetadata(ActionListItem, 'org.patternfly.component.list.ActionListItem');

exports = ActionListItem;

//# sourceMappingURL=ActionListItem.js.map
