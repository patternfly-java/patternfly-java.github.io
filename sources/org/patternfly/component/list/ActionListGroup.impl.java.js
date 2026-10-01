goog.module('org.patternfly.component.list.ActionListGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const ActionListSubComponent = goog.require('org.patternfly.component.list.ActionListSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let ActionListItem = goog.forwardDeclare('org.patternfly.component.list.ActionListItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ActionListSubComponent<HTMLDivElement, ActionListGroup>}
 * @implements {ComponentContext<HTMLDivElement, ActionListGroup>}
 * @implements {HasIdentifier<HTMLDivElement, ActionListGroup>}
 * @implements {HasItems<HTMLDivElement, ActionListGroup, ActionListItem>}
 */
class ActionListGroup extends ActionListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_list_ActionListGroup_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_list_ActionListGroup_;
  /**@type {Map<?string, ActionListItem>} @nodts*/
  this.f_items__org_patternfly_component_list_ActionListGroup_;
  /**@type {AurHandler<ActionListGroup, ActionListItem>} @nodts*/
  this.f_aur__org_patternfly_component_list_ActionListGroup_;
 }
 /** @nodts @return {ActionListGroup} */
 static m_actionListGroup__org_patternfly_component_list_ActionListGroup() {
  ActionListGroup.$clinit();
  return ActionListGroup.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_ActionList__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([ActionListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_ActionListGroup], j_l_String))));
 }
 /** @nodts @return {ActionListGroup} */
 static m_actionListGroup__java_lang_String__org_patternfly_component_list_ActionListGroup(/** ?string */ identifier) {
  ActionListGroup.$clinit();
  return ActionListGroup.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!ActionListGroup} */
 static $create__java_lang_String(/** ?string */ identifier) {
  ActionListGroup.$clinit();
  let $instance = new ActionListGroup();
  $instance.$ctor__org_patternfly_component_list_ActionListGroup__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_ActionListGroup__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_list_ActionListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ActionListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_ActionListGroup, ActionListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ActionListGroup, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_actionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_identifier__org_patternfly_component_list_ActionListGroup_ = identifier;
  this.f_data__org_patternfly_component_list_ActionListGroup_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_items__org_patternfly_component_list_ActionListGroup_ = (/**@type {!LinkedHashMap<?string, ActionListItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_list_ActionListGroup_ = (/**@type {!AurHandler<ActionListGroup, ActionListItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
 }
 /** @nodts @return {ActionListGroup} */
 m_add__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionListGroup(/** ActionListItem */ item) {
  this.f_items__org_patternfly_component_list_ActionListGroup_.put(item.m_identifier__java_lang_String(), item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return /**@type {ActionListGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_ActionListGroup_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), ActionListGroup));
 }
 /** @nodts @return {ActionListGroup} */
 m_icons__org_patternfly_component_list_ActionListGroup() {
  return /**@type {ActionListGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icons__org_patternfly_style_Classes)], j_l_String))), ActionListGroup));
 }
 /** @nodts @template T @return {ActionListGroup} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_ActionListGroup(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_list_ActionListGroup_.put(key, value);
  return this;
 }
 /** @nodts @return {ActionListGroup} */
 m_that__org_patternfly_component_list_ActionListGroup() {
  return this;
 }
 /** @nodts @return {ActionListGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_ActionListGroup(/** AddItemHandler<ActionListGroup, ActionListItem> */ onAdd) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_ActionListGroup_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ActionListGroup));
 }
 /** @nodts @return {ActionListGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_ActionListGroup(/** UpdateItemHandler<ActionListGroup, ActionListItem> */ onUpdate) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_ActionListGroup_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ActionListGroup));
 }
 /** @nodts @return {ActionListGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_ActionListGroup(/** RemoveItemHandler<ActionListGroup, ActionListItem> */ onRemove) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_ActionListGroup_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ActionListGroup));
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_list_ActionListGroup_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_list_ActionListGroup_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_list_ActionListGroup_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_list_ActionListGroup_.get(key));
  }
  return null;
 }
 /** @override @nodts @return {Iterator<ActionListItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_list_ActionListGroup_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_list_ActionListGroup_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_list_ActionListGroup_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_list_ActionListGroup_.containsKey(identifier);
 }
 /** @nodts @return {ActionListItem} */
 m_item__java_lang_String__org_patternfly_component_list_ActionListItem(/** ?string */ identifier) {
  return /**@type {ActionListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_ActionListGroup_.get(identifier), ActionListItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_list_ActionListItem__void(/** ActionListItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ActionListItem */ oldItem, /** ActionListItem */ newItem) =>{
   let oldItem_1 = /**@type {ActionListItem}*/ ($Casts.$to(oldItem, ActionListItem));
   let newItem_1 = /**@type {ActionListItem}*/ ($Casts.$to(newItem, ActionListItem));
   this.f_items__org_patternfly_component_list_ActionListGroup_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_list_ActionListGroup_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ActionListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_ActionListGroup_.remove(identifier), ActionListItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_list_ActionListGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  let iterator = this.f_items__org_patternfly_component_list_ActionListGroup_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ActionListItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ActionListItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_list_ActionListGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_ActionListGroup();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ActionListGroup} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_ActionListGroup(arg0, arg1);
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
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<ActionListItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<ActionListItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ActionListGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ActionListItem> */ arg1) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ActionListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListGroup} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ActionListItem */ arg0) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ActionListItem}*/ ($Casts.$to(arg0, ActionListItem))), ActionListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListGroup} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ActionListItem */ arg0) {
  return this.m_add__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionListGroup(/**@type {ActionListItem}*/ ($Casts.$to(arg0, ActionListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ActionListGroup, ActionListItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_ActionListGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<ActionListItem>} */
 m_items__java_util_List() {
  return /**@type {List<ActionListItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_list_ActionListItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, ActionListItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** ActionListItem */ arg0) {
  this.m_updateItem__org_patternfly_component_list_ActionListItem__void(/**@type {ActionListItem}*/ ($Casts.$to(arg0, ActionListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ActionListGroup, ActionListItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_ActionListGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ActionListItem */ arg0, /** BiConsumer<ActionListItem, ActionListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ActionListItem}*/ ($Casts.$to(arg0, ActionListItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ActionListGroup, ActionListItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_ActionListGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ActionListGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_ActionListGroup(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ActionListItem> */ arg1) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ActionListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ActionListGroup} */
 m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionListGroup(/** ActionListItem */ arg0) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ActionListGroup));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_list_ActionListItem__java_util_function_BiConsumer__void(/** ActionListItem */ arg0, /** BiConsumer<ActionListItem, ActionListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  ActionListGroup.$clinit = () =>{};
  ActionListGroup.$loadModules();
  ActionListSubComponent.$clinit();
  ComponentContext.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActionListGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ActionListItem = goog.module.get('org.patternfly.component.list.ActionListItem$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ActionListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_ActionListGroup = 'alg';
/**@const {string} @nodts*/
ActionListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ActionListGroup = 'ActionListGroup';
ComponentContext.$markImplementor(ActionListGroup);
HasIdentifier.$markImplementor(ActionListGroup);
HasItems.$markImplementor(ActionListGroup);
$Util.$setClassMetadata(ActionListGroup, 'org.patternfly.component.list.ActionListGroup');

exports = ActionListGroup;

//# sourceMappingURL=ActionListGroup.js.map
