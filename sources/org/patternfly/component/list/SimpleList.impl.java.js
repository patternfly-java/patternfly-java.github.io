goog.module('org.patternfly.component.list.SimpleList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ElementContainerMethods = goog.forwardDeclare('org.jboss.elemento.ElementContainerMethods$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let SimpleListGroup = goog.forwardDeclare('org.patternfly.component.list.SimpleListGroup$impl');
let SimpleListItem = goog.forwardDeclare('org.patternfly.component.list.SimpleListItem$impl');
let SimpleListType = goog.forwardDeclare('org.patternfly.component.list.SimpleListType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, SimpleList>}
 * @implements {Ordered<HTMLElement, SimpleList, SimpleListItem>}
 */
class SimpleList extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<SimpleListGroup>} @nodts*/
  this.f_groups__org_patternfly_component_list_SimpleList_;
  /**@type {Map<?string, SimpleListItem>} @nodts*/
  this.f_items__org_patternfly_component_list_SimpleList_;
  /**@type {AurHandler<SimpleList, SimpleListItem>} @nodts*/
  this.f_aur__org_patternfly_component_list_SimpleList_;
  /**@type {List<SelectHandler<SimpleListItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_list_SimpleList_;
  /**@type {SimpleListType} @nodts*/
  this.f_type__org_patternfly_component_list_SimpleList_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_ulElement__org_patternfly_component_list_SimpleList_;
  /**@type {Comparator<SimpleListItem>} @nodts*/
  this.f_comparator__org_patternfly_component_list_SimpleList_;
 }
 /** @nodts @return {SimpleList} */
 static m_simpleList__org_patternfly_component_list_SimpleList() {
  SimpleList.$clinit();
  return SimpleList.$create__();
 }
 /** @nodts @return {!SimpleList} */
 static $create__() {
  SimpleList.$clinit();
  let $instance = new SimpleList();
  $instance.$ctor__org_patternfly_component_list_SimpleList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_SimpleList__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_SimpleList__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_type__org_patternfly_component_list_SimpleList_ = SimpleListType.f_undefined__org_patternfly_component_list_SimpleListType;
  this.f_items__org_patternfly_component_list_SimpleList_ = (/**@type {!LinkedHashMap<?string, SimpleListItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_list_SimpleList_ = (/**@type {!AurHandler<SimpleList, SimpleListItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_selectHandler__org_patternfly_component_list_SimpleList_ = (/**@type {!ArrayList<SelectHandler<SimpleListItem>>}*/ (ArrayList.$create__()));
  this.f_groups__org_patternfly_component_list_SimpleList_ = (/**@type {!ArrayList<SimpleListGroup>}*/ (ArrayList.$create__()));
  this.m_storeComponent__void();
 }
 /** @nodts @return {SimpleList} */
 m_addGroup__org_patternfly_component_list_SimpleListGroup__org_patternfly_component_list_SimpleList(/** SimpleListGroup */ group) {
  return this.m_add__org_patternfly_component_list_SimpleListGroup__org_patternfly_component_list_SimpleList(group);
 }
 /** @nodts @return {SimpleList} */
 m_add__org_patternfly_component_list_SimpleListGroup__org_patternfly_component_list_SimpleList(/** SimpleListGroup */ group) {
  if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_items__org_patternfly_component_list_SimpleListType)) {
   SimpleList.f_logger__org_patternfly_component_list_SimpleList_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Simple list %o already contains items. A mix of groups and items is not supported!', [this.m_element__elemental2_dom_HTMLElement()]);
   return this;
  }
  this.f_type__org_patternfly_component_list_SimpleList_ = SimpleListType.f_groups__org_patternfly_component_list_SimpleListType;
  this.f_groups__org_patternfly_component_list_SimpleList_.add(group);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(group.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {SimpleList} */
 m_add__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleList(/** SimpleListItem */ item) {
  if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_groups__org_patternfly_component_list_SimpleListType)) {
   SimpleList.f_logger__org_patternfly_component_list_SimpleList_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Simple list %o already contains groups. A mix of groups and items is not supported!', [this.m_element__elemental2_dom_HTMLElement()]);
   return this;
  }
  this.f_type__org_patternfly_component_list_SimpleList_ = SimpleListType.f_items__org_patternfly_component_list_SimpleListType;
  this.f_items__org_patternfly_component_list_SimpleList_.put(item.m_identifier__java_lang_String(), item);
  this.m_failSafeUlElement__elemental2_dom_HTMLUListElement_$p_org_patternfly_component_list_SimpleList().appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return /**@type {SimpleList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_SimpleList_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), SimpleList));
 }
 /** @nodts @return {SimpleList} */
 m_ordered__java_util_Comparator__org_patternfly_component_list_SimpleList(/** Comparator<SimpleListItem> */ comparator) {
  this.f_comparator__org_patternfly_component_list_SimpleList_ = comparator;
  return this;
 }
 /** @nodts @return {SimpleList} */
 m_that__org_patternfly_component_list_SimpleList() {
  return this;
 }
 /** @nodts @return {SimpleList} */
 m_ariaLabel__java_lang_String__org_patternfly_component_list_SimpleList(/** ?string */ label) {
  if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_items__org_patternfly_component_list_SimpleListType) && !$Equality.$same(this.f_ulElement__org_patternfly_component_list_SimpleList_, null)) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_ulElement__org_patternfly_component_list_SimpleList_, Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {SimpleList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_SimpleList(/** AddItemHandler<SimpleList, SimpleListItem> */ onAdd) {
  return /**@type {SimpleList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_SimpleList_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), SimpleList));
 }
 /** @nodts @return {SimpleList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_SimpleList(/** UpdateItemHandler<SimpleList, SimpleListItem> */ onUpdate) {
  return /**@type {SimpleList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_SimpleList_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), SimpleList));
 }
 /** @nodts @return {SimpleList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_SimpleList(/** RemoveItemHandler<SimpleList, SimpleListItem> */ onRemove) {
  return /**@type {SimpleList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_SimpleList_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), SimpleList));
 }
 /** @nodts @return {SimpleList} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_list_SimpleList(/** SelectHandler<SimpleListItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_list_SimpleList_.add(selectHandler);
  return this;
 }
 /** @override @nodts @return {Comparator<SimpleListItem>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_component_list_SimpleList_;
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_list_SimpleListItem_$p_org_patternfly_component_list_SimpleList(identifier), true, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ selected) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_list_SimpleListItem_$p_org_patternfly_component_list_SimpleList(identifier), selected, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__boolean__void(/** ?string */ identifier, /** boolean */ selected, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_list_SimpleListItem_$p_org_patternfly_component_list_SimpleList(identifier), selected, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_list_SimpleListItem__void(/** SimpleListItem */ item) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_list_SimpleListItem__boolean__void(/** SimpleListItem */ item, /** boolean */ selected) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(item, selected, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(/** SimpleListItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_component_list_SimpleList();
   item.m_markSelected__boolean__void_$pp_org_patternfly_component_list(selected);
   if (fireEvent) {
    this.f_selectHandler__org_patternfly_component_list_SimpleList_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<SimpleListItem> */ selectHandler) =>{
     let selectHandler_1 = /**@type {SelectHandler<SimpleListItem>}*/ ($Casts.$to(selectHandler, /**@type {Function}*/ (SelectHandler)));
     selectHandler_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
    }));
   }
  }
 }
 /** @override @nodts @return {Iterator<SimpleListItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_list_SimpleList_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_list_SimpleList_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_list_SimpleList_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_list_SimpleList_.containsKey(identifier);
 }
 /** @nodts @return {SimpleListItem} */
 m_item__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ identifier) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_SimpleList_.get(identifier), SimpleListItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_list_SimpleListItem__void(/** SimpleListItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** SimpleListItem */ oldItem, /** SimpleListItem */ newItem) =>{
   let oldItem_1 = /**@type {SimpleListItem}*/ ($Casts.$to(oldItem, SimpleListItem));
   let newItem_1 = /**@type {SimpleListItem}*/ ($Casts.$to(newItem, SimpleListItem));
   this.f_items__org_patternfly_component_list_SimpleList_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_list_SimpleList_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {SimpleListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_SimpleList_.remove(identifier), SimpleListItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_list_SimpleList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_ulElement__org_patternfly_component_list_SimpleList_);
  let iterator = this.f_items__org_patternfly_component_list_SimpleList_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {SimpleListItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), SimpleListItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_list_SimpleList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts @return {SimpleListItem} */
 m_findItem__java_lang_String__org_patternfly_component_list_SimpleListItem_$p_org_patternfly_component_list_SimpleList(/** ?string */ identifier) {
  let /** SimpleListItem */ item = null;
  if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_groups__org_patternfly_component_list_SimpleListType)) {
   for (let iterator = this.f_groups__org_patternfly_component_list_SimpleList_.m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean() && $Equality.$same(item, null); ) {
    let group = /**@type {SimpleListGroup}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), SimpleListGroup));
    item = (/**@type {SimpleListItem}*/ ($Casts.$to(group.f_items__org_patternfly_component_list_SimpleListGroup.get(identifier), SimpleListItem)));
   }
  } else if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_items__org_patternfly_component_list_SimpleListType)) {
   item = (/**@type {SimpleListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_SimpleList_.get(identifier), SimpleListItem)));
  }
  return item;
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_list_SimpleList() {
  for (let $iterator = this.m_querySelectorAll__org_jboss_elemento_By__java_lang_Iterable(SimpleList.f_SIMPLE_LIST_ITEMS__org_patternfly_component_list_SimpleList_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   }
  }
 }
 /** @nodts @return {HTMLUListElement} */
 m_failSafeUlElement__elemental2_dom_HTMLUListElement_$p_org_patternfly_component_list_SimpleList() {
  if ($Equality.$same(this.f_ulElement__org_patternfly_component_list_SimpleList_, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_ulElement__org_patternfly_component_list_SimpleList_ = (/**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay))));
  }
  return this.f_ulElement__org_patternfly_component_list_SimpleList_;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<SimpleListItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<SimpleListItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_SimpleList();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {SimpleList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, SimpleListItem> */ arg1) {
  return /**@type {SimpleList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), SimpleList));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** SimpleListItem */ arg0) {
  return /**@type {SimpleList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {SimpleListItem}*/ ($Casts.$to(arg0, SimpleListItem))), SimpleList));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** SimpleListItem */ arg0) {
  return this.m_add__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleList(/**@type {SimpleListItem}*/ ($Casts.$to(arg0, SimpleListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<SimpleList, SimpleListItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_SimpleList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<SimpleListItem>} */
 m_items__java_util_List() {
  return /**@type {List<SimpleListItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_list_SimpleListItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, SimpleListItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** SimpleListItem */ arg0) {
  this.m_updateItem__org_patternfly_component_list_SimpleListItem__void(/**@type {SimpleListItem}*/ ($Casts.$to(arg0, SimpleListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<SimpleList, SimpleListItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_SimpleList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** SimpleListItem */ arg0, /** BiConsumer<SimpleListItem, SimpleListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {SimpleListItem}*/ ($Casts.$to(arg0, SimpleListItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<SimpleList, SimpleListItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_SimpleList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ arg0, /** SimpleListItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, /**@type {SimpleListItem}*/ ($Casts.$to(arg1, SimpleListItem)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<SimpleListItem>} */
 m_defaultOrder__java_util_Comparator() {
  return /**@type {Comparator<SimpleListItem>}*/ (Ordered.m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {SimpleList}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), SimpleList));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<SimpleListItem> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_component_list_SimpleList(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {SimpleList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_SimpleList(/** Iterable<T> */ arg0, /** j_u_function_Function<T, SimpleListItem> */ arg1) {
  return /**@type {SimpleList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), SimpleList));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleList} */
 m_addItem__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleList(/** SimpleListItem */ arg0) {
  return /**@type {SimpleList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), SimpleList));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_list_SimpleListItem__java_util_function_BiConsumer__void(/** SimpleListItem */ arg0, /** BiConsumer<SimpleListItem, SimpleListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_list_SimpleListItem__void(/** ElementContainerMethods<?, ?> */ arg0, /** SimpleListItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleList} */
 m_ordered__org_patternfly_component_list_SimpleList() {
  return /**@type {SimpleList}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), SimpleList));
 }
 /** @nodts */
 static $clinit() {
  SimpleList.$clinit = () =>{};
  SimpleList.$loadModules();
  BaseComponent.$clinit();
  Ordered.$clinit();
  SimpleList.f_logger__org_patternfly_component_list_SimpleList_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(SimpleList).m_getName__java_lang_String());
  SimpleList.f_SIMPLE_LIST_ITEMS__org_patternfly_component_list_SimpleList_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_link__org_patternfly_style_Classes], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleList;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  SimpleListGroup = goog.module.get('org.patternfly.component.list.SimpleListGroup$impl');
  SimpleListItem = goog.module.get('org.patternfly.component.list.SimpleListItem$impl');
  SimpleListType = goog.module.get('org.patternfly.component.list.SimpleListType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
SimpleList.f_logger__org_patternfly_component_list_SimpleList_;
/**@type {By} @nodts*/
SimpleList.f_SIMPLE_LIST_ITEMS__org_patternfly_component_list_SimpleList_;
Ordered.$markImplementor(SimpleList);
$Util.$setClassMetadata(SimpleList, 'org.patternfly.component.list.SimpleList');

exports = SimpleList;

//# sourceMappingURL=SimpleList.js.map
