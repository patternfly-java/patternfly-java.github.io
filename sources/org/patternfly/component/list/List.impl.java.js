goog.module('org.patternfly.component.list.List$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');
const Bordered = goog.require('org.patternfly.style.Modifiers.Bordered$impl');
const Inline = goog.require('org.patternfly.style.Modifiers.Inline$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let j_u_List = goog.forwardDeclare('java.util.List$impl');
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
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let ListItem = goog.forwardDeclare('org.patternfly.component.list.ListItem$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, List>}
 * @implements {Bordered<HTMLElement, List>}
 * @implements {Inline<HTMLElement, List>}
 * @implements {Ordered<HTMLElement, List, ListItem>}
 * @implements {Plain<HTMLElement, List>}
 */
class List extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, ListItem>} @nodts*/
  this.f_items__org_patternfly_component_list_List_;
  /**@type {AurHandler<List, ListItem>} @nodts*/
  this.f_aur__org_patternfly_component_list_List_;
  /**@type {Comparator<ListItem>} @nodts*/
  this.f_comparator__org_patternfly_component_list_List_;
 }
 /** @nodts @return {List} */
 static m_list__org_patternfly_component_list_List() {
  List.$clinit();
  return List.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {List} */
 static m_list__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_list_List(/** HTMLContainerBuilder<E> */ builder) {
  List.$clinit();
  return List.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!List} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  List.$clinit();
  let $instance = new List();
  $instance.$ctor__org_patternfly_component_list_List__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_list_List__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_List__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_list__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()));
  this.f_items__org_patternfly_component_list_List_ = (/**@type {!LinkedHashMap<?string, ListItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_list_List_ = (/**@type {!AurHandler<List, ListItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
 }
 /** @nodts @return {List} */
 m_add__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/** ListItem */ item) {
  this.m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, item);
  this.f_items__org_patternfly_component_list_List_.put(item.m_identifier__java_lang_String(), item);
  return /**@type {List}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_List_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), List));
 }
 /** @nodts @return {List} */
 m_addDivider__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType)), List));
 }
 /** @nodts @return {List} */
 m_largeIcons__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_icon__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size)], j_l_String))), List));
 }
 /** @nodts @return {List} */
 m_ordered__java_util_Comparator__org_patternfly_component_list_List(/** Comparator<ListItem> */ comparator) {
  this.f_comparator__org_patternfly_component_list_List_ = comparator;
  return this;
 }
 /** @nodts @return {List} */
 m_that__org_patternfly_component_list_List() {
  return this;
 }
 /** @nodts @return {List} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_List(/** AddItemHandler<List, ListItem> */ onAdd) {
  return /**@type {List}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_List_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), List));
 }
 /** @nodts @return {List} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_List(/** UpdateItemHandler<List, ListItem> */ onUpdate) {
  return /**@type {List}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_List_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), List));
 }
 /** @nodts @return {List} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_List(/** RemoveItemHandler<List, ListItem> */ onRemove) {
  return /**@type {List}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_List_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), List));
 }
 /** @override @nodts @return {Comparator<ListItem>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_component_list_List_;
 }
 /** @override @nodts @return {Iterator<ListItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_list_List_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_list_List_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_list_List_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_list_List_.containsKey(identifier);
 }
 /** @nodts @return {ListItem} */
 m_item__java_lang_String__org_patternfly_component_list_ListItem(/** ?string */ identifier) {
  return /**@type {ListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_List_.get(identifier), ListItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_list_ListItem__void(/** ListItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ListItem */ oldItem, /** ListItem */ newItem) =>{
   let oldItem_1 = /**@type {ListItem}*/ ($Casts.$to(oldItem, ListItem));
   let newItem_1 = /**@type {ListItem}*/ ($Casts.$to(newItem, ListItem));
   this.f_items__org_patternfly_component_list_List_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_list_List_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_List_.remove(identifier), ListItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_list_List_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  let iterator = this.f_items__org_patternfly_component_list_List_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ListItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ListItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_list_List_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_List();
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_bordered__org_jboss_elemento_TypedBuilder() {
  return /**@type {List}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_bordered__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {List}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<ListItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<ListItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {List} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ListItem> */ arg1) {
  return /**@type {List}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ListItem */ arg0) {
  return /**@type {List}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ListItem}*/ ($Casts.$to(arg0, ListItem))), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ListItem */ arg0) {
  return this.m_add__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(arg0, ListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<List, ListItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_List(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {j_u_List<ListItem>} */
 m_items__java_util_List() {
  return /**@type {j_u_List<ListItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_list_ListItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, ListItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** ListItem */ arg0) {
  this.m_updateItem__org_patternfly_component_list_ListItem__void(/**@type {ListItem}*/ ($Casts.$to(arg0, ListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<List, ListItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_List(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ListItem */ arg0, /** BiConsumer<ListItem, ListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ListItem}*/ ($Casts.$to(arg0, ListItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<List, ListItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_List(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ arg0, /** ListItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, /**@type {ListItem}*/ ($Casts.$to(arg1, ListItem)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<ListItem>} */
 m_defaultOrder__java_util_Comparator() {
  return /**@type {Comparator<ListItem>}*/ (Ordered.m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {List}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<ListItem> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_component_list_List(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {List}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_bordered__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_bordered__boolean__org_patternfly_component_list_List(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_inline__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_inline__boolean__org_patternfly_component_list_List(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {List} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_List(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ListItem> */ arg1) {
  return /**@type {List}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/** ListItem */ arg0) {
  return /**@type {List}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), List));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_list_ListItem__java_util_function_BiConsumer__void(/** ListItem */ arg0, /** BiConsumer<ListItem, ListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_list_ListItem__void(/** ElementContainerMethods<?, ?> */ arg0, /** ListItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_ordered__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_plain__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_plain__boolean__org_patternfly_component_list_List(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 /** @nodts */
 static $clinit() {
  List.$clinit = () =>{};
  List.$loadModules();
  BaseComponent.$clinit();
  Bordered.$clinit();
  Inline.$clinit();
  Ordered.$clinit();
  Plain.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof List;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  ListItem = goog.module.get('org.patternfly.component.list.ListItem$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Bordered.$markImplementor(List);
Inline.$markImplementor(List);
Ordered.$markImplementor(List);
Plain.$markImplementor(List);
$Util.$setClassMetadata(List, 'org.patternfly.component.list.List');

exports = List;

//# sourceMappingURL=List.js.map
