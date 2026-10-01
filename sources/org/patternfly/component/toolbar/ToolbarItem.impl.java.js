goog.module('org.patternfly.component.toolbar.ToolbarItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ToolbarItemType = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItemType$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarItem>}
 * @implements {ComponentContext<HTMLDivElement, ToolbarItem>}
 * @implements {HasIdentifier<HTMLDivElement, ToolbarItem>}
 */
class ToolbarItem extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_toolbar_ToolbarItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_toolbar_ToolbarItem_;
 }
 /** @nodts @return {ToolbarItem} */
 static m_toolbarItem__org_patternfly_component_toolbar_ToolbarItem() {
  ToolbarItem.$clinit();
  return ToolbarItem.$create__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Toolbar__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['itm'], j_l_String))), null);
 }
 /** @nodts @return {ToolbarItem} */
 static m_toolbarItem__org_patternfly_component_toolbar_ToolbarItemType__org_patternfly_component_toolbar_ToolbarItem(/** ToolbarItemType */ type) {
  ToolbarItem.$clinit();
  return ToolbarItem.$create__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Toolbar__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['itm'], j_l_String))), type);
 }
 /** @nodts @return {ToolbarItem} */
 static m_toolbarItem__java_lang_String__org_patternfly_component_toolbar_ToolbarItem(/** ?string */ identifier) {
  ToolbarItem.$clinit();
  return ToolbarItem.$create__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType(identifier, null);
 }
 /** @nodts @return {ToolbarItem} */
 static m_toolbarItem__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType__org_patternfly_component_toolbar_ToolbarItem(/** ?string */ identifier, /** ToolbarItemType */ type) {
  ToolbarItem.$clinit();
  return ToolbarItem.$create__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType(identifier, type);
 }
 /** @nodts @return {!ToolbarItem} */
 static $create__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType(/** ?string */ identifier, /** ToolbarItemType */ type) {
  ToolbarItem.$clinit();
  let $instance = new ToolbarItem();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarItem__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType__void(identifier, type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarItem__java_lang_String__org_patternfly_component_toolbar_ToolbarItemType__void(/** ?string */ identifier, /** ToolbarItemType */ type) {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarItem.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarItem, ToolbarItem.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarItem, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_identifier__org_patternfly_component_toolbar_ToolbarItem_ = identifier;
  this.f_data__org_patternfly_component_toolbar_ToolbarItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  if (!$Equality.$same(type, null)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([type.m_modifier__java_lang_String()], j_l_String)));
  }
 }
 /** @nodts @return {ToolbarItem} */
 m_overflow__org_patternfly_component_toolbar_ToolbarItem() {
  return /**@type {ToolbarItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflowContainer__org_patternfly_style_Classes)], j_l_String))), ToolbarItem));
 }
 /** @nodts @template T @return {ToolbarItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_toolbar_ToolbarItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_toolbar_ToolbarItem_.put(key, value);
  return this;
 }
 /** @nodts @return {ToolbarItem} */
 m_that__org_patternfly_component_toolbar_ToolbarItem() {
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_toolbar_ToolbarItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_toolbar_ToolbarItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_toolbar_ToolbarItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_toolbar_ToolbarItem_.get(key));
  }
  return null;
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ToolbarItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_toolbar_ToolbarItem(arg0, arg1);
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
  ToolbarItem.$clinit = () =>{};
  ToolbarItem.$loadModules();
  ToolbarSubComponent.$clinit();
  ComponentContext.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarItem;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
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
ToolbarItem.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarItem = 'ti';
/**@const {string} @nodts*/
ToolbarItem.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarItem = 'ToolbarItem';
ComponentContext.$markImplementor(ToolbarItem);
HasIdentifier.$markImplementor(ToolbarItem);
$Util.$setClassMetadata(ToolbarItem, 'org.patternfly.component.toolbar.ToolbarItem');

exports = ToolbarItem;

//# sourceMappingURL=ToolbarItem.js.map
