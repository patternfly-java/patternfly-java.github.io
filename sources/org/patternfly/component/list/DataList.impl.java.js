goog.module('org.patternfly.component.list.DataList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const NoPlainOnGlass = goog.require('org.patternfly.style.Modifiers.NoPlainOnGlass$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let ElementContainerMethods = goog.forwardDeclare('org.jboss.elemento.ElementContainerMethods$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let DataListItem = goog.forwardDeclare('org.patternfly.component.list.DataListItem$impl');
let Wrap = goog.forwardDeclare('org.patternfly.component.table.Wrap$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let GridBreakpoint = goog.forwardDeclare('org.patternfly.style.GridBreakpoint$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLUListElement, DataList>}
 * @implements {Compact<HTMLUListElement, DataList>}
 * @implements {NoPlainOnGlass<HTMLUListElement, DataList>}
 * @implements {Ordered<HTMLUListElement, DataList, DataListItem>}
 * @implements {Plain<HTMLUListElement, DataList>}
 */
class DataList extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, DataListItem>} @nodts*/
  this.f_items__org_patternfly_component_list_DataList_;
  /**@type {AurHandler<DataList, DataListItem>} @nodts*/
  this.f_aur__org_patternfly_component_list_DataList_;
  /**@type {Comparator<DataListItem>} @nodts*/
  this.f_comparator__org_patternfly_component_list_DataList_;
 }
 /** @nodts @return {DataList} */
 static m_dataList__org_patternfly_component_list_DataList() {
  DataList.$clinit();
  return DataList.$create__();
 }
 /** @nodts @return {!DataList} */
 static $create__() {
  DataList.$clinit();
  let $instance = new DataList();
  $instance.$ctor__org_patternfly_component_list_DataList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DataList__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_DataList__org_patternfly_component_ComponentType, /**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_list_DataList_ = (/**@type {!LinkedHashMap<?string, DataListItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_list_DataList_ = (/**@type {!AurHandler<DataList, DataListItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.m_gridBreakpoint__org_patternfly_style_GridBreakpoint__org_patternfly_component_list_DataList(GridBreakpoint.f_gridMd__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {DataList} */
 m_add__org_patternfly_component_list_DataListItem__org_patternfly_component_list_DataList(/** DataListItem */ item) {
  this.m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, item);
  this.f_items__org_patternfly_component_list_DataList_.put(item.m_identifier__java_lang_String(), item);
  return /**@type {DataList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_DataList_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), DataList));
 }
 /** @nodts @return {DataList} */
 m_gridBreakpoint__org_patternfly_style_GridBreakpoint__org_patternfly_component_list_DataList(/** GridBreakpoint */ breakpoint) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), 'gridBreakpoint', breakpoint, GridBreakpoint.f_none__org_patternfly_style_GridBreakpoint, /**@type {!Array<GridBreakpoint>}*/ ($Arrays.$stampType([GridBreakpoint.f_always__org_patternfly_style_GridBreakpoint, GridBreakpoint.f_gridSm__org_patternfly_style_GridBreakpoint, GridBreakpoint.f_gridMd__org_patternfly_style_GridBreakpoint, GridBreakpoint.f_gridLg__org_patternfly_style_GridBreakpoint, GridBreakpoint.f_gridXl__org_patternfly_style_GridBreakpoint, GridBreakpoint.f_gird2xl__org_patternfly_style_GridBreakpoint], GridBreakpoint)))) {
   TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), breakpoint, GridBreakpoint.m_values__arrayOf_org_patternfly_style_GridBreakpoint());
  }
  return this;
 }
 /** @nodts @return {DataList} */
 m_ordered__java_util_Comparator__org_patternfly_component_list_DataList(/** Comparator<DataListItem> */ comparator) {
  this.f_comparator__org_patternfly_component_list_DataList_ = comparator;
  return this;
 }
 /** @nodts @return {DataList} */
 m_wrap__org_patternfly_component_table_Wrap__org_patternfly_component_list_DataList(/** Wrap */ wrap) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), 'wrap', wrap, Wrap.f_nowrap__org_patternfly_component_table_Wrap, /**@type {!Array<Wrap>}*/ ($Arrays.$stampType([Wrap.f_truncate__org_patternfly_component_table_Wrap, Wrap.f_breakWord__org_patternfly_component_table_Wrap], Wrap)))) {
   TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), wrap, Wrap.m_values__arrayOf_org_patternfly_component_table_Wrap());
  }
  return this;
 }
 /** @nodts @return {DataList} */
 m_that__org_patternfly_component_list_DataList() {
  return this;
 }
 /** @nodts @return {DataList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_DataList(/** AddItemHandler<DataList, DataListItem> */ onAdd) {
  return /**@type {DataList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_DataList_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), DataList));
 }
 /** @nodts @return {DataList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_DataList(/** UpdateItemHandler<DataList, DataListItem> */ onUpdate) {
  return /**@type {DataList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_DataList_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), DataList));
 }
 /** @nodts @return {DataList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_DataList(/** RemoveItemHandler<DataList, DataListItem> */ onRemove) {
  return /**@type {DataList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_DataList_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), DataList));
 }
 /** @override @nodts @return {Comparator<DataListItem>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_component_list_DataList_;
 }
 /** @override @nodts @return {Iterator<DataListItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_list_DataList_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_list_DataList_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_list_DataList_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_list_DataList_.containsKey(identifier);
 }
 /** @nodts @return {DataListItem} */
 m_item__java_lang_String__org_patternfly_component_list_DataListItem(/** ?string */ identifier) {
  return /**@type {DataListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_DataList_.get(identifier), DataListItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_list_DataListItem__void(/** DataListItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** DataListItem */ oldItem, /** DataListItem */ newItem) =>{
   let oldItem_1 = /**@type {DataListItem}*/ ($Casts.$to(oldItem, DataListItem));
   let newItem_1 = /**@type {DataListItem}*/ ($Casts.$to(newItem, DataListItem));
   this.f_items__org_patternfly_component_list_DataList_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_list_DataList_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {DataListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_DataList_.remove(identifier), DataListItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_list_DataList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  let iterator = this.f_items__org_patternfly_component_list_DataList_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {DataListItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), DataListItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_list_DataList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DataList();
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {DataList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), DataList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DataList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DataList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_noPlainOnGlass__org_jboss_elemento_TypedBuilder() {
  return /**@type {DataList}*/ ($Casts.$to(NoPlainOnGlass.m_noPlainOnGlass__$default__org_patternfly_style_Modifiers_NoPlainOnGlass__org_jboss_elemento_TypedBuilder(this), DataList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_noPlainOnGlass__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DataList}*/ ($Casts.$to(NoPlainOnGlass.m_noPlainOnGlass__$default__org_patternfly_style_Modifiers_NoPlainOnGlass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DataList));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<DataListItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<DataListItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {DataList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, DataListItem> */ arg1) {
  return /**@type {DataList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), DataList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** DataListItem */ arg0) {
  return /**@type {DataList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {DataListItem}*/ ($Casts.$to(arg0, DataListItem))), DataList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** DataListItem */ arg0) {
  return this.m_add__org_patternfly_component_list_DataListItem__org_patternfly_component_list_DataList(/**@type {DataListItem}*/ ($Casts.$to(arg0, DataListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<DataList, DataListItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_DataList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<DataListItem>} */
 m_items__java_util_List() {
  return /**@type {List<DataListItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_list_DataListItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, DataListItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** DataListItem */ arg0) {
  this.m_updateItem__org_patternfly_component_list_DataListItem__void(/**@type {DataListItem}*/ ($Casts.$to(arg0, DataListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<DataList, DataListItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_DataList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** DataListItem */ arg0, /** BiConsumer<DataListItem, DataListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {DataListItem}*/ ($Casts.$to(arg0, DataListItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<DataList, DataListItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_DataList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ arg0, /** DataListItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, /**@type {DataListItem}*/ ($Casts.$to(arg1, DataListItem)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<DataListItem>} */
 m_defaultOrder__java_util_Comparator() {
  return /**@type {Comparator<DataListItem>}*/ (Ordered.m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {DataList}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), DataList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<DataListItem> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_component_list_DataList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {DataList}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), DataList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DataList}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DataList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataList} */
 m_compact__org_patternfly_component_list_DataList() {
  return /**@type {DataList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), DataList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataList} */
 m_compact__boolean__org_patternfly_component_list_DataList(/** boolean */ arg0) {
  return /**@type {DataList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DataList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataList} */
 m_noPlainOnGlass__org_patternfly_component_list_DataList() {
  return /**@type {DataList}*/ ($Casts.$to(NoPlainOnGlass.m_noPlainOnGlass__$default__org_patternfly_style_Modifiers_NoPlainOnGlass__org_jboss_elemento_TypedBuilder(this), DataList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataList} */
 m_noPlainOnGlass__boolean__org_patternfly_component_list_DataList(/** boolean */ arg0) {
  return /**@type {DataList}*/ ($Casts.$to(NoPlainOnGlass.m_noPlainOnGlass__$default__org_patternfly_style_Modifiers_NoPlainOnGlass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DataList));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {DataList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_DataList(/** Iterable<T> */ arg0, /** j_u_function_Function<T, DataListItem> */ arg1) {
  return /**@type {DataList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), DataList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataList} */
 m_addItem__org_patternfly_component_list_DataListItem__org_patternfly_component_list_DataList(/** DataListItem */ arg0) {
  return /**@type {DataList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), DataList));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_list_DataListItem__java_util_function_BiConsumer__void(/** DataListItem */ arg0, /** BiConsumer<DataListItem, DataListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_list_DataListItem__void(/** ElementContainerMethods<?, ?> */ arg0, /** DataListItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {DataList} */
 m_ordered__org_patternfly_component_list_DataList() {
  return /**@type {DataList}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), DataList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataList} */
 m_plain__org_patternfly_component_list_DataList() {
  return /**@type {DataList}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), DataList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataList} */
 m_plain__boolean__org_patternfly_component_list_DataList(/** boolean */ arg0) {
  return /**@type {DataList}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DataList));
 }
 /** @nodts */
 static $clinit() {
  DataList.$clinit = () =>{};
  DataList.$loadModules();
  BaseComponent.$clinit();
  Compact.$clinit();
  NoPlainOnGlass.$clinit();
  Ordered.$clinit();
  Plain.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  DataListItem = goog.module.get('org.patternfly.component.list.DataListItem$impl');
  Wrap = goog.module.get('org.patternfly.component.table.Wrap$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  GridBreakpoint = goog.module.get('org.patternfly.style.GridBreakpoint$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Compact.$markImplementor(DataList);
NoPlainOnGlass.$markImplementor(DataList);
Ordered.$markImplementor(DataList);
Plain.$markImplementor(DataList);
$Util.$setClassMetadata(DataList, 'org.patternfly.component.list.DataList');

exports = DataList;

//# sourceMappingURL=DataList.js.map
