goog.module('org.patternfly.component.list.ListItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const ListSubComponent = goog.require('org.patternfly.component.list.ListSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ListSubComponent<HTMLLIElement, ListItem>}
 * @implements {ComponentContext<HTMLLIElement, ListItem>}
 * @implements {ComponentIcon<HTMLLIElement, ListItem>}
 * @implements {ElementTextMethods<HTMLLIElement, ListItem>}
 * @implements {HasIdentifier<HTMLLIElement, ListItem>}
 */
class ListItem extends ListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_list_ListItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_list_ListItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_list_ListItem_;
 }
 /** @nodts @return {ListItem} */
 static m_listItem__org_patternfly_component_list_ListItem() {
  ListItem.$clinit();
  return ListItem.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_List__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_ListItem], j_l_String))));
 }
 /** @nodts @return {ListItem} */
 static m_listItem__java_lang_String__org_patternfly_component_list_ListItem(/** ?string */ identifier) {
  ListItem.$clinit();
  return ListItem.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!ListItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  ListItem.$clinit();
  let $instance = new ListItem();
  $instance.$ctor__org_patternfly_component_list_ListItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_ListItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_list_ListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_ListItem, ListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ListItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_list_ListItem_ = identifier;
  this.f_data__org_patternfly_component_list_ListItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
 }
 /** @nodts @return {ListItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_list_ListItem(/** Element */ icon) {
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_list__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String)));
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_ListItem().appendChild(icon);
  return this;
 }
 /** @nodts @return {ListItem} */
 m_removeIcon__org_patternfly_component_list_ListItem() {
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_list__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String)));
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_ListItem());
  this.f_iconContainer__org_patternfly_component_list_ListItem_ = null;
  return this;
 }
 /** @nodts @template T @return {ListItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_ListItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_list_ListItem_.put(key, value);
  return this;
 }
 /** @nodts @return {ListItem} */
 m_that__org_patternfly_component_list_ListItem() {
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_list_ListItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_list_ListItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_list_ListItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_list_ListItem_.get(key));
  }
  return null;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_ListItem() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_list_ListItem_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), this.f_iconContainer__org_patternfly_component_list_ListItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_list__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_list_ListItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_ListItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ListItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_ListItem(arg0, arg1);
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
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {ListItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_list_ListItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_list_ListItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ListItem}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ListItem));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {ListItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_list_ListItem(/** PredefinedIcon */ arg0) {
  return /**@type {ListItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ListItem} */
 m_text__java_lang_String__org_patternfly_component_list_ListItem(/** ?string */ arg0) {
  return /**@type {ListItem}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ListItem));
 }
 /** @nodts */
 static $clinit() {
  ListItem.$clinit = () =>{};
  ListItem.$loadModules();
  ListSubComponent.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
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
ListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_ListItem = 'li';
/**@const {string} @nodts*/
ListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ListItem = 'ListItem';
ComponentContext.$markImplementor(ListItem);
ComponentIcon.$markImplementor(ListItem);
ElementTextMethods.$markImplementor(ListItem);
HasIdentifier.$markImplementor(ListItem);
$Util.$setClassMetadata(ListItem, 'org.patternfly.component.list.ListItem');

exports = ListItem;

//# sourceMappingURL=ListItem.js.map
