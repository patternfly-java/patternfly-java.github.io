goog.module('org.patternfly.component.toolbar.ToolbarFilterContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let ToolbarGroup = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarGroup$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let Filter = goog.forwardDeclare('org.patternfly.filter.Filter$impl');
let FilterChangeHandler = goog.forwardDeclare('org.patternfly.filter.FilterChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarFilterContent>}
 * @implements {HasItems<HTMLDivElement, ToolbarFilterContent, ToolbarItem>}
 */
class ToolbarFilterContent extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, ToolbarItem>} @nodts*/
  this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_;
  /**@type {AurHandler<ToolbarFilterContent, ToolbarItem>} @nodts*/
  this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_;
 }
 /** @nodts @return {ToolbarFilterContent} */
 static m_toolbarFilterContent__org_patternfly_component_toolbar_ToolbarFilterContent() {
  ToolbarFilterContent.$clinit();
  return ToolbarFilterContent.$create__();
 }
 /** @nodts @return {!ToolbarFilterContent} */
 static $create__() {
  ToolbarFilterContent.$clinit();
  let $instance = new ToolbarFilterContent();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarFilterContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarFilterContent__void() {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarFilterContent.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarFilterContent, ToolbarFilterContent.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarFilterContent, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_chipContainer__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_ = (/**@type {!LinkedHashMap<?string, ToolbarItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_ = (/**@type {!AurHandler<ToolbarFilterContent, ToolbarItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this, false);
 }
 /** @nodts @return {ToolbarFilterContent} */
 m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarFilterContent(/** ToolbarItem */ item) {
  this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.put(item.m_identifier__java_lang_String(), item);
  let result = /**@type {ToolbarFilterContent}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay))), ToolbarFilterContent));
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), ToolbarFilterContent));
 }
 /** @nodts @return {ToolbarFilterContent} */
 m_addGroup__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarFilterContent(/** ToolbarGroup */ group) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarFilterContent(group);
 }
 /** @nodts @return {ToolbarFilterContent} */
 m_add__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarFilterContent(/** ToolbarGroup */ group) {
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), $Overlay))), ToolbarFilterContent));
 }
 /** @nodts @template T @return {ToolbarFilterContent} */
 m_bindVisibility__org_patternfly_filter_Filter__org_patternfly_component_toolbar_ToolbarFilterContent(/** Filter<T> */ filter) {
  filter.m_onChange__org_patternfly_filter_FilterChangeHandler__org_patternfly_filter_Filter(FilterChangeHandler.$adapt((/** Filter<T> */ f, /** ?string */ origin) =>{
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this, f.m_defined__boolean());
  }));
  return this;
 }
 /** @nodts @template T @return {ToolbarFilterContent} */
 m_bindVisibility__org_patternfly_filter_Filter__java_lang_String__arrayOf_java_lang_String__org_patternfly_component_toolbar_ToolbarFilterContent(/** Filter<T> */ filter, /** ?string */ firstAttribute, /** Array<?string> */ otherAttributes) {
  let attributes = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
  attributes.add(firstAttribute);
  attributes.addAll(/**@type {List<?string>}*/ (List.m_of__arrayOf_java_lang_Object__java_util_List(otherAttributes)));
  filter.m_onChange__org_patternfly_filter_FilterChangeHandler__org_patternfly_filter_Filter(FilterChangeHandler.$adapt((/** Filter<T> */ f, /** ?string */ origin) =>{
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this, attributes.m_stream__java_util_stream_Stream().m_anyMatch__java_util_function_Predicate__boolean(Predicate.$adapt(/**  @return {boolean}*/ ((/** ?string */ arg0) =>{
    let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
    return f.m_defined__java_lang_String__boolean(arg0_1);
   }))));
  }));
  return this;
 }
 /** @nodts @return {ToolbarFilterContent} */
 m_that__org_patternfly_component_toolbar_ToolbarFilterContent() {
  return this;
 }
 /** @nodts @return {ToolbarFilterContent} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_toolbar_ToolbarFilterContent(/** AddItemHandler<ToolbarFilterContent, ToolbarItem> */ onAdd) {
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ToolbarFilterContent));
 }
 /** @nodts @return {ToolbarFilterContent} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_toolbar_ToolbarFilterContent(/** UpdateItemHandler<ToolbarFilterContent, ToolbarItem> */ onUpdate) {
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ToolbarFilterContent));
 }
 /** @nodts @return {ToolbarFilterContent} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_toolbar_ToolbarFilterContent(/** RemoveItemHandler<ToolbarFilterContent, ToolbarItem> */ onRemove) {
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ToolbarFilterContent));
 }
 /** @override @nodts @return {Iterator<ToolbarItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.containsKey(identifier);
 }
 /** @nodts @return {ToolbarItem} */
 m_item__java_lang_String__org_patternfly_component_toolbar_ToolbarItem(/** ?string */ identifier) {
  return /**@type {ToolbarItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.get(identifier), ToolbarItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_toolbar_ToolbarItem__void(/** ToolbarItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ToolbarItem */ oldItem, /** ToolbarItem */ newItem) =>{
   let oldItem_1 = /**@type {ToolbarItem}*/ ($Casts.$to(oldItem, ToolbarItem));
   let newItem_1 = /**@type {ToolbarItem}*/ ($Casts.$to(newItem, ToolbarItem));
   this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ToolbarItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.remove(identifier), ToolbarItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this);
  let iterator = this.f_items__org_patternfly_component_toolbar_ToolbarFilterContent_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ToolbarItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ToolbarItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_toolbar_ToolbarFilterContent_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
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
 /** @final @override @nodts @return {ToolbarFilterContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarFilterContent();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ToolbarFilterContent} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToolbarFilterContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarFilterContent} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToolbarItem */ arg0) {
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem))), ToolbarFilterContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarFilterContent} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToolbarItem */ arg0) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarFilterContent(/**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarFilterContent} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ToolbarFilterContent, ToolbarItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_toolbar_ToolbarFilterContent(arg0);
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
 /** @final @override @nodts @return {ToolbarFilterContent} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ToolbarFilterContent, ToolbarItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_toolbar_ToolbarFilterContent(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ToolbarItem */ arg0, /** BiConsumer<ToolbarItem, ToolbarItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarFilterContent} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ToolbarFilterContent, ToolbarItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_toolbar_ToolbarFilterContent(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ToolbarFilterContent} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_toolbar_ToolbarFilterContent(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToolbarFilterContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarFilterContent} */
 m_addItem__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarFilterContent(/** ToolbarItem */ arg0) {
  return /**@type {ToolbarFilterContent}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ToolbarFilterContent));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_toolbar_ToolbarItem__java_util_function_BiConsumer__void(/** ToolbarItem */ arg0, /** BiConsumer<ToolbarItem, ToolbarItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  ToolbarFilterContent.$clinit = () =>{};
  ToolbarFilterContent.$loadModules();
  ToolbarSubComponent.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarFilterContent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  List = goog.module.get('java.util.List$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ToolbarItem = goog.module.get('org.patternfly.component.toolbar.ToolbarItem$impl');
  FilterChangeHandler = goog.module.get('org.patternfly.filter.FilterChangeHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToolbarFilterContent.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarFilterContent = 'tfc';
/**@const {string} @nodts*/
ToolbarFilterContent.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarFilterContent = 'ToolbarFilterContent';
HasItems.$markImplementor(ToolbarFilterContent);
$Util.$setClassMetadata(ToolbarFilterContent, 'org.patternfly.component.toolbar.ToolbarFilterContent');

exports = ToolbarFilterContent;

//# sourceMappingURL=ToolbarFilterContent.js.map
