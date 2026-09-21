goog.module('org.patternfly.component.toolbar.ToolbarGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let ToolbarGroupType = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarGroupType$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarGroup>}
 * @implements {HasItems<HTMLDivElement, ToolbarGroup, ToolbarItem>}
 */
class ToolbarGroup extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, ToolbarItem>} @nodts*/
  this.f_items__org_patternfly_component_toolbar_ToolbarGroup_;
  /**@type {AurHandler<ToolbarGroup, ToolbarItem>} @nodts*/
  this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_;
 }
 /** @nodts @return {ToolbarGroup} */
 static m_toolbarGroup__org_patternfly_component_toolbar_ToolbarGroup() {
  ToolbarGroup.$clinit();
  return ToolbarGroup.$create__org_patternfly_component_toolbar_ToolbarGroupType(null);
 }
 /** @nodts @return {ToolbarGroup} */
 static m_toolbarGroup__org_patternfly_component_toolbar_ToolbarGroupType__org_patternfly_component_toolbar_ToolbarGroup(/** ToolbarGroupType */ type) {
  ToolbarGroup.$clinit();
  return ToolbarGroup.$create__org_patternfly_component_toolbar_ToolbarGroupType(type);
 }
 /** @nodts @return {!ToolbarGroup} */
 static $create__org_patternfly_component_toolbar_ToolbarGroupType(/** ToolbarGroupType */ type) {
  ToolbarGroup.$clinit();
  let $instance = new ToolbarGroup();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarGroupType__void(type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarGroupType__void(/** ToolbarGroupType */ type) {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarGroup.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarGroup, ToolbarGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarGroup, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_toolbar_ToolbarGroup_ = (/**@type {!LinkedHashMap<?string, ToolbarItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_ = (/**@type {!AurHandler<ToolbarGroup, ToolbarItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  if (!$Equality.$same(type, null)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([type.m_modifier__java_lang_String()], j_l_String)));
  }
 }
 /** @nodts @return {ToolbarGroup} */
 m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarGroup(/** ToolbarItem */ item) {
  this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.put(item.m_identifier__java_lang_String(), item);
  let result = /**@type {ToolbarGroup}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay))), ToolbarGroup));
  return /**@type {ToolbarGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), ToolbarGroup));
 }
 /** @nodts @return {ToolbarGroup} */
 m_that__org_patternfly_component_toolbar_ToolbarGroup() {
  return this;
 }
 /** @nodts @return {ToolbarGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_toolbar_ToolbarGroup(/** AddItemHandler<ToolbarGroup, ToolbarItem> */ onAdd) {
  return /**@type {ToolbarGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ToolbarGroup));
 }
 /** @nodts @return {ToolbarGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_toolbar_ToolbarGroup(/** UpdateItemHandler<ToolbarGroup, ToolbarItem> */ onUpdate) {
  return /**@type {ToolbarGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ToolbarGroup));
 }
 /** @nodts @return {ToolbarGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_toolbar_ToolbarGroup(/** RemoveItemHandler<ToolbarGroup, ToolbarItem> */ onRemove) {
  return /**@type {ToolbarGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ToolbarGroup));
 }
 /** @override @nodts @return {Iterator<ToolbarItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.containsKey(identifier);
 }
 /** @nodts @return {ToolbarItem} */
 m_item__java_lang_String__org_patternfly_component_toolbar_ToolbarItem(/** ?string */ identifier) {
  return /**@type {ToolbarItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.get(identifier), ToolbarItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_toolbar_ToolbarItem__void(/** ToolbarItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ToolbarItem */ oldItem, /** ToolbarItem */ newItem) =>{
   let oldItem_1 = /**@type {ToolbarItem}*/ ($Casts.$to(oldItem, ToolbarItem));
   let newItem_1 = /**@type {ToolbarItem}*/ ($Casts.$to(newItem, ToolbarItem));
   this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ToolbarItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.remove(identifier), ToolbarItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  let iterator = this.f_items__org_patternfly_component_toolbar_ToolbarGroup_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ToolbarItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ToolbarItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_toolbar_ToolbarGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<ToolbarItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<ToolbarItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarGroup();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ToolbarGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  return /**@type {ToolbarGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToolbarGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarGroup} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToolbarItem */ arg0) {
  return /**@type {ToolbarGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem))), ToolbarGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarGroup} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToolbarItem */ arg0) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarGroup(/**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ToolbarGroup, ToolbarItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_toolbar_ToolbarGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<ToolbarItem>} */
 m_items__java_util_List() {
  return /**@type {List<ToolbarItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_toolbar_ToolbarItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** ToolbarItem */ arg0) {
  this.m_updateItem__org_patternfly_component_toolbar_ToolbarItem__void(/**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ToolbarGroup, ToolbarItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_toolbar_ToolbarGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ToolbarItem */ arg0, /** BiConsumer<ToolbarItem, ToolbarItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ToolbarGroup, ToolbarItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_toolbar_ToolbarGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ToolbarGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_toolbar_ToolbarGroup(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  return /**@type {ToolbarGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToolbarGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarGroup} */
 m_addItem__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarGroup(/** ToolbarItem */ arg0) {
  return /**@type {ToolbarGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ToolbarGroup));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_toolbar_ToolbarItem__java_util_function_BiConsumer__void(/** ToolbarItem */ arg0, /** BiConsumer<ToolbarItem, ToolbarItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  ToolbarGroup.$clinit = () =>{};
  ToolbarGroup.$loadModules();
  ToolbarSubComponent.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ToolbarItem = goog.module.get('org.patternfly.component.toolbar.ToolbarItem$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToolbarGroup.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarGroup = 'tg';
/**@const {string} @nodts*/
ToolbarGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarGroup = 'ToolbarGroup';
HasItems.$markImplementor(ToolbarGroup);
$Util.$setClassMetadata(ToolbarGroup, 'org.patternfly.component.toolbar.ToolbarGroup');

exports = ToolbarGroup;

//# sourceMappingURL=ToolbarGroup.js.map
