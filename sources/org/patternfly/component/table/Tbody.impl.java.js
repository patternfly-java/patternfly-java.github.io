goog.module('org.patternfly.component.table.Tbody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');
const TableSubComponent = goog.require('org.patternfly.component.table.TableSubComponent$impl');

let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
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
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let EmptyState = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyState$impl');
let Td = goog.forwardDeclare('org.patternfly.component.table.Td$impl');
let Tr = goog.forwardDeclare('org.patternfly.component.table.Tr$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Bullseye = goog.forwardDeclare('org.patternfly.layout.bullseye.Bullseye$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TableSubComponent<HTMLTableSectionElement, Tbody>}
 * @implements {Ordered<HTMLTableSectionElement, Tbody, Tr>}
 */
class Tbody extends TableSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, Tr>} @nodts*/
  this.f_items__org_patternfly_component_table_Tbody;
  /**@type {AurHandler<Tbody, Tr>} @nodts*/
  this.f_aur__org_patternfly_component_table_Tbody_;
  /**@type {Tr} @nodts*/
  this.f_emptyRow__org_patternfly_component_table_Tbody_;
  /**@type {Comparator<Tr>} @nodts*/
  this.f_comparator__org_patternfly_component_table_Tbody_;
 }
 /** @nodts @return {Tbody} */
 static m_tbody__org_patternfly_component_table_Tbody() {
  Tbody.$clinit();
  return Tbody.$create__();
 }
 /** @nodts @return {!Tbody} */
 static $create__() {
  Tbody.$clinit();
  let $instance = new Tbody();
  $instance.$ctor__org_patternfly_component_table_Tbody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_Tbody__void() {
  this.$ctor__org_patternfly_component_table_TableSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(Tbody.f_SUB_COMPONENT_ID__org_patternfly_component_table_Tbody, Tbody.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Tbody, /**@type {HTMLTableSectionElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to(Elements.m_tbody__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_tbody__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_rowgroup__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_table_Tbody = (/**@type {!LinkedHashMap<?string, Tr>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_table_Tbody_ = (/**@type {!AurHandler<Tbody, Tr>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
 }
 /** @nodts @template T @return {Tbody} */
 m_addRows__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tbody(/** Iterable<T> */ items, /** j_u_function_Function<T, Tr> */ display) {
  return /**@type {Tbody}*/ ($Casts.$to(this.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(items, display), Tbody));
 }
 /** @nodts @return {Tbody} */
 m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Tbody(/** Tr */ row) {
  return /**@type {Tbody}*/ ($Casts.$to(this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(row), Tbody));
 }
 /** @nodts @return {Tbody} */
 m_add__org_patternfly_component_table_Tr__org_patternfly_component_table_Tbody(/** Tr */ row) {
  this.m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, row);
  row.f_tbody__org_patternfly_component_table_Tr = this;
  this.f_items__org_patternfly_component_table_Tbody.put(row.m_identifier__java_lang_String(), row);
  return /**@type {Tbody}*/ ($Casts.$to(this.f_aur__org_patternfly_component_table_Tbody_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(row), Tbody));
 }
 /** @nodts @return {Tbody} */
 m_ordered__java_util_Comparator__org_patternfly_component_table_Tbody(/** Comparator<Tr> */ comparator) {
  this.f_comparator__org_patternfly_component_table_Tbody_ = comparator;
  return this;
 }
 /** @nodts @return {Tbody} */
 m_that__org_patternfly_component_table_Tbody() {
  return this;
 }
 /** @nodts @return {Tbody} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_table_Tbody(/** AddItemHandler<Tbody, Tr> */ onAdd) {
  return /**@type {Tbody}*/ ($Casts.$to(this.f_aur__org_patternfly_component_table_Tbody_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Tbody));
 }
 /** @nodts @return {Tbody} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_table_Tbody(/** UpdateItemHandler<Tbody, Tr> */ onUpdate) {
  return /**@type {Tbody}*/ ($Casts.$to(this.f_aur__org_patternfly_component_table_Tbody_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Tbody));
 }
 /** @nodts @return {Tbody} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_table_Tbody(/** RemoveItemHandler<Tbody, Tr> */ onRemove) {
  return /**@type {Tbody}*/ ($Casts.$to(this.f_aur__org_patternfly_component_table_Tbody_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Tbody));
 }
 /** @override @nodts @return {Comparator<Tr>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_component_table_Tbody_;
 }
 /** @nodts @return {Tbody} */
 m_empty__int__org_patternfly_component_emptystate_EmptyState__org_patternfly_component_table_Tbody(/** number */ colSpan, /** EmptyState */ emptyState) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_emptyRow__org_patternfly_component_table_Tbody_);
  this.f_emptyRow__org_patternfly_component_table_Tbody_ = (/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('table-empty-row', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to((/**@type {Td}*/ ($Casts.$to(Td.m_td__org_patternfly_component_table_Td().m_colSpan__int__org_jboss_elemento_TypedBuilder(colSpan), Td))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Bullseye}*/ ($Casts.$to(Bullseye.m_bullseye__org_patternfly_layout_bullseye_Bullseye().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(emptyState), Bullseye))), Td))), Tr)));
  this.f_emptyRow__org_patternfly_component_table_Tbody_.f_tbody__org_patternfly_component_table_Tr = this;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.f_emptyRow__org_patternfly_component_table_Tbody_.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)));
  return this;
 }
 /** @nodts */
 m_clearEmpty__void() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_emptyRow__org_patternfly_component_table_Tbody_);
 }
 /** @override @nodts @return {Iterator<Tr>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_table_Tbody.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_table_Tbody.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_table_Tbody.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_table_Tbody.containsKey(identifier);
 }
 /** @nodts @return {Tr} */
 m_item__java_lang_String__org_patternfly_component_table_Tr(/** ?string */ identifier) {
  return /**@type {Tr}*/ ($Casts.$to(this.f_items__org_patternfly_component_table_Tbody.get(identifier), Tr));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_table_Tr__void(/** Tr */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** Tr */ oldItem, /** Tr */ newItem) =>{
   let oldItem_1 = /**@type {Tr}*/ ($Casts.$to(oldItem, Tr));
   let newItem_1 = /**@type {Tr}*/ ($Casts.$to(newItem, Tr));
   this.f_items__org_patternfly_component_table_Tbody.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_table_Tbody_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {Tr}*/ ($Casts.$to(this.f_items__org_patternfly_component_table_Tbody.remove(identifier), Tr));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_table_Tbody_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  let iterator = this.f_items__org_patternfly_component_table_Tbody.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {Tr}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), Tr));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_table_Tbody_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<Tr>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<Tr>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tbody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_table_Tbody();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Tbody} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, Tr> */ arg1) {
  return /**@type {Tbody}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Tbody));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tbody} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** Tr */ arg0) {
  return /**@type {Tbody}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {Tr}*/ ($Casts.$to(arg0, Tr))), Tbody));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tbody} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** Tr */ arg0) {
  return this.m_add__org_patternfly_component_table_Tr__org_patternfly_component_table_Tbody(/**@type {Tr}*/ ($Casts.$to(arg0, Tr)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tbody} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Tbody, Tr> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_table_Tbody(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<Tr>} */
 m_items__java_util_List() {
  return /**@type {List<Tr>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tr} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_table_Tr(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, Tr> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** Tr */ arg0) {
  this.m_updateItem__org_patternfly_component_table_Tr__void(/**@type {Tr}*/ ($Casts.$to(arg0, Tr)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tbody} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Tbody, Tr> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_table_Tbody(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** Tr */ arg0, /** BiConsumer<Tr, Tr> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {Tr}*/ ($Casts.$to(arg0, Tr)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tbody} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Tbody, Tr> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_table_Tbody(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ arg0, /** Tr */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, /**@type {Tr}*/ ($Casts.$to(arg1, Tr)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<Tr>} */
 m_defaultOrder__java_util_Comparator() {
  return /**@type {Comparator<Tr>}*/ (Ordered.m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tbody} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {Tbody}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), Tbody));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tbody} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<Tr> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_component_table_Tbody(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {Tbody} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tbody(/** Iterable<T> */ arg0, /** j_u_function_Function<T, Tr> */ arg1) {
  return /**@type {Tbody}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Tbody));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tbody} */
 m_addItem__org_patternfly_component_table_Tr__org_patternfly_component_table_Tbody(/** Tr */ arg0) {
  return /**@type {Tbody}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), Tbody));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_table_Tr__java_util_function_BiConsumer__void(/** Tr */ arg0, /** BiConsumer<Tr, Tr> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_table_Tr__void(/** ElementContainerMethods<?, ?> */ arg0, /** Tr */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {Tbody} */
 m_ordered__org_patternfly_component_table_Tbody() {
  return /**@type {Tbody}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), Tbody));
 }
 /** @nodts */
 static $clinit() {
  Tbody.$clinit = () =>{};
  Tbody.$loadModules();
  TableSubComponent.$clinit();
  Ordered.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tbody;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  Td = goog.module.get('org.patternfly.component.table.Td$impl');
  Tr = goog.module.get('org.patternfly.component.table.Tr$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Bullseye = goog.module.get('org.patternfly.layout.bullseye.Bullseye$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Tbody.f_SUB_COMPONENT_ID__org_patternfly_component_table_Tbody = 'tbd';
/**@const {string} @nodts*/
Tbody.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Tbody = 'Tbody';
Ordered.$markImplementor(Tbody);
$Util.$setClassMetadata(Tbody, 'org.patternfly.component.table.Tbody');

exports = Tbody;

//# sourceMappingURL=Tbody.js.map
