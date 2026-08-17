goog.module('org.patternfly.component.list.ActionList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Vertical = goog.require('org.patternfly.style.Modifiers.Vertical$impl');

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
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let ActionListGroup = goog.forwardDeclare('org.patternfly.component.list.ActionListGroup$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, ActionList>}
 * @implements {HasItems<HTMLElement, ActionList, ActionListGroup>}
 * @implements {Vertical<HTMLElement, ActionList>}
 */
class ActionList extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, ActionListGroup>} @nodts*/
  this.f_items__org_patternfly_component_list_ActionList_;
  /**@type {AurHandler<ActionList, ActionListGroup>} @nodts*/
  this.f_aur__org_patternfly_component_list_ActionList_;
 }
 /** @nodts @return {ActionList} */
 static m_actionList__org_patternfly_component_list_ActionList() {
  ActionList.$clinit();
  return ActionList.$create__();
 }
 /** @nodts @return {!ActionList} */
 static $create__() {
  ActionList.$clinit();
  let $instance = new ActionList();
  $instance.$ctor__org_patternfly_component_list_ActionList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_ActionList__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ActionList__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_actionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_list_ActionList_ = (/**@type {!LinkedHashMap<?string, ActionListGroup>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_list_ActionList_ = (/**@type {!AurHandler<ActionList, ActionListGroup>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
 }
 /** @nodts @return {ActionList} */
 m_add__org_patternfly_component_list_ActionListGroup__org_patternfly_component_list_ActionList(/** ActionListGroup */ item) {
  this.f_items__org_patternfly_component_list_ActionList_.put(item.m_identifier__java_lang_String(), item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return /**@type {ActionList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_ActionList_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), ActionList));
 }
 /** @nodts @return {ActionList} */
 m_icons__org_patternfly_component_list_ActionList() {
  return /**@type {ActionList}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icons__org_patternfly_style_Classes)], j_l_String))), ActionList));
 }
 /** @nodts @return {ActionList} */
 m_that__org_patternfly_component_list_ActionList() {
  return this;
 }
 /** @nodts @return {ActionList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_ActionList(/** AddItemHandler<ActionList, ActionListGroup> */ onAdd) {
  return /**@type {ActionList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_ActionList_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ActionList));
 }
 /** @nodts @return {ActionList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_ActionList(/** UpdateItemHandler<ActionList, ActionListGroup> */ onUpdate) {
  return /**@type {ActionList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_ActionList_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ActionList));
 }
 /** @nodts @return {ActionList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_ActionList(/** RemoveItemHandler<ActionList, ActionListGroup> */ onRemove) {
  return /**@type {ActionList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_ActionList_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ActionList));
 }
 /** @override @nodts @return {Iterator<ActionListGroup>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_list_ActionList_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_list_ActionList_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_list_ActionList_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_list_ActionList_.containsKey(identifier);
 }
 /** @nodts @return {ActionListGroup} */
 m_item__java_lang_String__org_patternfly_component_list_ActionListGroup(/** ?string */ identifier) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_ActionList_.get(identifier), ActionListGroup));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_list_ActionListGroup__void(/** ActionListGroup */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ActionListGroup */ oldItem, /** ActionListGroup */ newItem) =>{
   let oldItem_1 = /**@type {ActionListGroup}*/ ($Casts.$to(oldItem, ActionListGroup));
   let newItem_1 = /**@type {ActionListGroup}*/ ($Casts.$to(newItem, ActionListGroup));
   this.f_items__org_patternfly_component_list_ActionList_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_list_ActionList_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ActionListGroup}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_ActionList_.remove(identifier), ActionListGroup));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_list_ActionList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  let iterator = this.f_items__org_patternfly_component_list_ActionList_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ActionListGroup}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ActionListGroup));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_list_ActionList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<ActionListGroup>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<ActionListGroup>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_ActionList();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ActionList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ActionListGroup> */ arg1) {
  return /**@type {ActionList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ActionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ActionListGroup */ arg0) {
  return /**@type {ActionList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ActionListGroup}*/ ($Casts.$to(arg0, ActionListGroup))), ActionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ActionListGroup */ arg0) {
  return this.m_add__org_patternfly_component_list_ActionListGroup__org_patternfly_component_list_ActionList(/**@type {ActionListGroup}*/ ($Casts.$to(arg0, ActionListGroup)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ActionList, ActionListGroup> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_ActionList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<ActionListGroup>} */
 m_items__java_util_List() {
  return /**@type {List<ActionListGroup>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListGroup} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_list_ActionListGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, ActionListGroup> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** ActionListGroup */ arg0) {
  this.m_updateItem__org_patternfly_component_list_ActionListGroup__void(/**@type {ActionListGroup}*/ ($Casts.$to(arg0, ActionListGroup)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ActionList, ActionListGroup> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_ActionList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ActionListGroup */ arg0, /** BiConsumer<ActionListGroup, ActionListGroup> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ActionListGroup}*/ ($Casts.$to(arg0, ActionListGroup)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ActionList, ActionListGroup> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_ActionList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_vertical__org_jboss_elemento_TypedBuilder() {
  return /**@type {ActionList}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), ActionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_vertical__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {ActionList}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ActionList));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ActionList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_ActionList(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ActionListGroup> */ arg1) {
  return /**@type {ActionList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ActionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {ActionList} */
 m_addItem__org_patternfly_component_list_ActionListGroup__org_patternfly_component_list_ActionList(/** ActionListGroup */ arg0) {
  return /**@type {ActionList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ActionList));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_list_ActionListGroup__java_util_function_BiConsumer__void(/** ActionListGroup */ arg0, /** BiConsumer<ActionListGroup, ActionListGroup> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {ActionList} */
 m_vertical__org_patternfly_component_list_ActionList() {
  return /**@type {ActionList}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), ActionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {ActionList} */
 m_vertical__boolean__org_patternfly_component_list_ActionList(/** boolean */ arg0) {
  return /**@type {ActionList}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ActionList));
 }
 /** @nodts */
 static $clinit() {
  ActionList.$clinit = () =>{};
  ActionList.$loadModules();
  BaseComponent.$clinit();
  HasItems.$clinit();
  Vertical.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActionList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ActionListGroup = goog.module.get('org.patternfly.component.list.ActionListGroup$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasItems.$markImplementor(ActionList);
Vertical.$markImplementor(ActionList);
$Util.$setClassMetadata(ActionList, 'org.patternfly.component.list.ActionList');

exports = ActionList;

//# sourceMappingURL=ActionList.js.map
