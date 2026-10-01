goog.module('org.patternfly.component.list.SimpleListGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');
const SimpleListSubComponent = goog.require('org.patternfly.component.list.SimpleListSubComponent$impl');

let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
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
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let ElementContainerMethods = goog.forwardDeclare('org.jboss.elemento.ElementContainerMethods$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let SimpleListItem = goog.forwardDeclare('org.patternfly.component.list.SimpleListItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SimpleListSubComponent<HTMLElement, SimpleListGroup>}
 * @implements {ElementContainerDelegate<HTMLElement, SimpleListGroup>}
 * @implements {ElementTextDelegate<HTMLElement, SimpleListGroup>}
 * @implements {Ordered<HTMLElement, SimpleListGroup, SimpleListItem>}
 */
class SimpleListGroup extends SimpleListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, SimpleListItem>} @nodts*/
  this.f_items__org_patternfly_component_list_SimpleListGroup;
  /**@type {HTMLElement} @nodts*/
  this.f_headerElement__org_patternfly_component_list_SimpleListGroup_;
  /**@type {HTMLContainerBuilder<HTMLUListElement>} @nodts*/
  this.f_ul__org_patternfly_component_list_SimpleListGroup_;
  /**@type {AurHandler<SimpleListGroup, SimpleListItem>} @nodts*/
  this.f_aur__org_patternfly_component_list_SimpleListGroup_;
  /**@type {Comparator<SimpleListItem>} @nodts*/
  this.f_comparator__org_patternfly_component_list_SimpleListGroup_;
 }
 /** @nodts @return {SimpleListGroup} */
 static m_simpleListGroup__java_lang_String__org_patternfly_component_list_SimpleListGroup(/** ?string */ text) {
  SimpleListGroup.$clinit();
  return /**@type {SimpleListGroup}*/ ($Casts.$to(SimpleListGroup.$create__().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), SimpleListGroup));
 }
 /** @nodts @return {!SimpleListGroup} */
 static $create__() {
  SimpleListGroup.$clinit();
  let $instance = new SimpleListGroup();
  $instance.$ctor__org_patternfly_component_list_SimpleListGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_SimpleListGroup__void() {
  this.$ctor__org_patternfly_component_list_SimpleListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(SimpleListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_SimpleListGroup, SimpleListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListGroup, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_items__org_patternfly_component_list_SimpleListGroup = (/**@type {!LinkedHashMap<?string, SimpleListItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_list_SimpleListGroup_ = (/**@type {!AurHandler<SimpleListGroup, SimpleListItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  let headerId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(SimpleListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_SimpleListGroup, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_headerElement__org_patternfly_component_list_SimpleListGroup_ = (/**@type {HTMLHeadingElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(2).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(headerId), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay))));
  this.f_ul__org_patternfly_component_list_SimpleListGroup_ = (/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, headerId), HTMLContainerBuilder)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLUListElement}*/ ($Casts.$to(this.f_ul__org_patternfly_component_list_SimpleListGroup_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_headerElement__org_patternfly_component_list_SimpleListGroup_;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_headerElement__org_patternfly_component_list_SimpleListGroup_;
 }
 /** @nodts @return {SimpleListGroup} */
 m_add__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleListGroup(/** SimpleListItem */ item) {
  this.m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this.f_ul__org_patternfly_component_list_SimpleListGroup_, item);
  this.f_items__org_patternfly_component_list_SimpleListGroup.put(item.m_identifier__java_lang_String(), item);
  return /**@type {SimpleListGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_SimpleListGroup_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), SimpleListGroup));
 }
 /** @nodts @return {SimpleListGroup} */
 m_ordered__java_util_Comparator__org_patternfly_component_list_SimpleListGroup(/** Comparator<SimpleListItem> */ comparator) {
  this.f_comparator__org_patternfly_component_list_SimpleListGroup_ = comparator;
  return this;
 }
 /** @nodts @return {SimpleListGroup} */
 m_that__org_patternfly_component_list_SimpleListGroup() {
  return this;
 }
 /** @nodts @return {SimpleListGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_SimpleListGroup(/** AddItemHandler<SimpleListGroup, SimpleListItem> */ onAdd) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_SimpleListGroup_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), SimpleListGroup));
 }
 /** @nodts @return {SimpleListGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_SimpleListGroup(/** UpdateItemHandler<SimpleListGroup, SimpleListItem> */ onUpdate) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_SimpleListGroup_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), SimpleListGroup));
 }
 /** @nodts @return {SimpleListGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_SimpleListGroup(/** RemoveItemHandler<SimpleListGroup, SimpleListItem> */ onRemove) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_SimpleListGroup_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), SimpleListGroup));
 }
 /** @override @nodts @return {Comparator<SimpleListItem>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_component_list_SimpleListGroup_;
 }
 /** @override @nodts @return {Iterator<SimpleListItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_list_SimpleListGroup.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_list_SimpleListGroup.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_list_SimpleListGroup.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_list_SimpleListGroup.containsKey(identifier);
 }
 /** @nodts @return {SimpleListItem} */
 m_item__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ identifier) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_SimpleListGroup.get(identifier), SimpleListItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_list_SimpleListItem__void(/** SimpleListItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** SimpleListItem */ oldItem, /** SimpleListItem */ newItem) =>{
   let oldItem_1 = /**@type {SimpleListItem}*/ ($Casts.$to(oldItem, SimpleListItem));
   let newItem_1 = /**@type {SimpleListItem}*/ ($Casts.$to(newItem, SimpleListItem));
   this.f_items__org_patternfly_component_list_SimpleListGroup.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_list_SimpleListGroup_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {SimpleListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_SimpleListGroup.remove(identifier), SimpleListItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_list_SimpleListGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_ul__org_patternfly_component_list_SimpleListGroup_);
  let iterator = this.f_items__org_patternfly_component_list_SimpleListGroup.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {SimpleListItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), SimpleListItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_list_SimpleListGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_SimpleListGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
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
 /** @final @override @nodts @template T @return {SimpleListGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, SimpleListItem> */ arg1) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** SimpleListItem */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {SimpleListItem}*/ ($Casts.$to(arg0, SimpleListItem))), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** SimpleListItem */ arg0) {
  return this.m_add__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleListGroup(/**@type {SimpleListItem}*/ ($Casts.$to(arg0, SimpleListItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<SimpleListGroup, SimpleListItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_SimpleListGroup(arg0);
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
 /** @final @override @nodts @return {SimpleListGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<SimpleListGroup, SimpleListItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_SimpleListGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** SimpleListItem */ arg0, /** BiConsumer<SimpleListItem, SimpleListItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {SimpleListItem}*/ ($Casts.$to(arg0, SimpleListItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<SimpleListGroup, SimpleListItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_SimpleListGroup(arg0);
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
 /** @final @override @nodts @return {SimpleListGroup} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<SimpleListItem> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_component_list_SimpleListGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_add__java_lang_String__org_patternfly_component_list_SimpleListGroup(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_add__elemental2_dom_Node__org_patternfly_component_list_SimpleListGroup(/** Node */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_add__java_util_function_Supplier__org_patternfly_component_list_SimpleListGroup(/** Supplier<Node> */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_text__java_lang_String__org_patternfly_component_list_SimpleListGroup(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {SimpleListGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_SimpleListGroup(/** Iterable<T> */ arg0, /** j_u_function_Function<T, SimpleListItem> */ arg1) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_addItem__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleListGroup(/** SimpleListItem */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), SimpleListGroup));
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
 /** @nodts @return {SimpleListGroup} */
 m_ordered__org_patternfly_component_list_SimpleListGroup() {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), SimpleListGroup));
 }
 /** @nodts */
 static $clinit() {
  SimpleListGroup.$clinit = () =>{};
  SimpleListGroup.$loadModules();
  SimpleListSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
  Ordered.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleListGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  SimpleListItem = goog.module.get('org.patternfly.component.list.SimpleListItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
SimpleListGroup.f_SUB_COMPONENT_ID__org_patternfly_component_list_SimpleListGroup = 'slg';
/**@const {string} @nodts*/
SimpleListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListGroup = 'SimpleListGroup';
ElementContainerDelegate.$markImplementor(SimpleListGroup);
ElementTextDelegate.$markImplementor(SimpleListGroup);
Ordered.$markImplementor(SimpleListGroup);
$Util.$setClassMetadata(SimpleListGroup, 'org.patternfly.component.list.SimpleListGroup');

exports = SimpleListGroup;

//# sourceMappingURL=SimpleListGroup.js.map
