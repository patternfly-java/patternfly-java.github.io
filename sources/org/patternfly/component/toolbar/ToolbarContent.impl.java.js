goog.module('org.patternfly.component.toolbar.ToolbarContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
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
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.component.toolbar.AlignItems$impl');
let RowWrap = goog.forwardDeclare('org.patternfly.component.toolbar.RowWrap$impl');
let ToolbarGroup = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarGroup$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let ToolbarToggleGroup = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarToggleGroup$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Orientation = goog.forwardDeclare('org.patternfly.style.Orientation$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let Visibility = goog.forwardDeclare('org.patternfly.style.Visibility$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarContent>}
 * @implements {ElementContainerDelegate<HTMLDivElement, ToolbarContent>}
 * @implements {HasItems<HTMLDivElement, ToolbarContent, ToolbarItem>}
 */
class ToolbarContent extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, ToolbarItem>} @nodts*/
  this.f_items__org_patternfly_component_toolbar_ToolbarContent_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_;
  /**@type {AurHandler<ToolbarContent, ToolbarItem>} @nodts*/
  this.f_aur__org_patternfly_component_toolbar_ToolbarContent_;
 }
 /** @nodts @return {ToolbarContent} */
 static m_toolbarContent__org_patternfly_component_toolbar_ToolbarContent() {
  ToolbarContent.$clinit();
  return ToolbarContent.$create__();
 }
 /** @nodts @return {!ToolbarContent} */
 static $create__() {
  ToolbarContent.$clinit();
  let $instance = new ToolbarContent();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarContent__void() {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarContent.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarContent, ToolbarContent.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarContent, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_items__org_patternfly_component_toolbar_ToolbarContent_ = (/**@type {!LinkedHashMap<?string, ToolbarItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_toolbar_ToolbarContent_ = (/**@type {!AurHandler<ToolbarContent, ToolbarItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).appendChild(this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes, Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_;
 }
 /** @nodts @return {ToolbarContent} */
 m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarItem */ item) {
  this.f_items__org_patternfly_component_toolbar_ToolbarContent_.put(item.m_identifier__java_lang_String(), item);
  this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return /**@type {ToolbarContent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarContent_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), ToolbarContent));
 }
 /** @nodts @return {ToolbarContent} */
 m_addDivider__org_patternfly_component_toolbar_ToolbarContent() {
  return /**@type {ToolbarContent}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_orientation__org_patternfly_style_Orientation__org_patternfly_component_divider_Divider(Orientation.f_vertical__org_patternfly_style_Orientation)), ToolbarContent));
 }
 /** @nodts @return {ToolbarContent} */
 m_addGroup__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarGroup */ group) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarContent(group);
 }
 /** @nodts @return {ToolbarContent} */
 m_add__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarGroup */ group) {
  this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ToolbarContent} */
 m_addToggleGroup__org_patternfly_component_toolbar_ToolbarToggleGroup__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarToggleGroup */ toggleGroup) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarToggleGroup__org_patternfly_component_toolbar_ToolbarContent(toggleGroup);
 }
 /** @nodts @return {ToolbarContent} */
 m_add__org_patternfly_component_toolbar_ToolbarToggleGroup__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarToggleGroup */ toggleGroup) {
  this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(toggleGroup.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ToolbarContent} */
 m_alignItems__org_patternfly_component_toolbar_AlignItems__org_patternfly_component_toolbar_ToolbarContent(/** AlignItems */ alignItems) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_, alignItems, AlignItems.m_values__arrayOf_org_patternfly_component_toolbar_AlignItems()), ToolbarContent));
 }
 /** @nodts @return {ToolbarContent} */
 m_rowWrap__org_patternfly_component_toolbar_RowWrap__org_patternfly_component_toolbar_ToolbarContent(/** RowWrap */ rowWrap) {
  return this.m_rowWrap__org_patternfly_style_Breakpoints__org_patternfly_component_toolbar_ToolbarContent(/**@type {Breakpoints<RowWrap>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, rowWrap)));
 }
 /** @nodts @return {ToolbarContent} */
 m_rowWrap__org_patternfly_style_Breakpoints__org_patternfly_component_toolbar_ToolbarContent(/** Breakpoints<RowWrap> */ rowWrap) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([rowWrap.m_modifiers__java_lang_String()], j_l_String))), ToolbarContent));
 }
 /** @nodts @return {ToolbarContent} */
 m_visibility__org_patternfly_style_Breakpoints__org_patternfly_component_toolbar_ToolbarContent(/** Breakpoints<Visibility> */ visibility) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([visibility.m_modifiers__java_lang_String()], j_l_String))), ToolbarContent));
 }
 /** @nodts @return {ToolbarContent} */
 m_that__org_patternfly_component_toolbar_ToolbarContent() {
  return this;
 }
 /** @nodts @return {ToolbarContent} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_toolbar_ToolbarContent(/** AddItemHandler<ToolbarContent, ToolbarItem> */ onAdd) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarContent_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ToolbarContent));
 }
 /** @nodts @return {ToolbarContent} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_toolbar_ToolbarContent(/** UpdateItemHandler<ToolbarContent, ToolbarItem> */ onUpdate) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarContent_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ToolbarContent));
 }
 /** @nodts @return {ToolbarContent} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_toolbar_ToolbarContent(/** RemoveItemHandler<ToolbarContent, ToolbarItem> */ onRemove) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarContent_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ToolbarContent));
 }
 /** @override @nodts @return {Iterator<ToolbarItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarContent_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarContent_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarContent_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_toolbar_ToolbarContent_.containsKey(identifier);
 }
 /** @nodts @return {ToolbarItem} */
 m_item__java_lang_String__org_patternfly_component_toolbar_ToolbarItem(/** ?string */ identifier) {
  return /**@type {ToolbarItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_toolbar_ToolbarContent_.get(identifier), ToolbarItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_toolbar_ToolbarItem__void(/** ToolbarItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ToolbarItem */ oldItem, /** ToolbarItem */ newItem) =>{
   let oldItem_1 = /**@type {ToolbarItem}*/ ($Casts.$to(oldItem, ToolbarItem));
   let newItem_1 = /**@type {ToolbarItem}*/ ($Casts.$to(newItem, ToolbarItem));
   this.f_items__org_patternfly_component_toolbar_ToolbarContent_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_toolbar_ToolbarContent_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ToolbarItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_toolbar_ToolbarContent_.remove(identifier), ToolbarItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_toolbar_ToolbarContent_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_);
  let iterator = this.f_items__org_patternfly_component_toolbar_ToolbarContent_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ToolbarItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ToolbarItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_toolbar_ToolbarContent_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarContent();
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
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
 /** @final @override @nodts @template T @return {ToolbarContent} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToolbarContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToolbarItem */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem))), ToolbarContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToolbarItem */ arg0) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarContent(/**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ToolbarContent, ToolbarItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_toolbar_ToolbarContent(arg0);
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
 /** @final @override @nodts @return {ToolbarContent} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ToolbarContent, ToolbarItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_toolbar_ToolbarContent(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ToolbarItem */ arg0, /** BiConsumer<ToolbarItem, ToolbarItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ToolbarContent, ToolbarItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_toolbar_ToolbarContent(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_add__java_lang_String__org_patternfly_component_toolbar_ToolbarContent(/** ?string */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_add__elemental2_dom_Node__org_patternfly_component_toolbar_ToolbarContent(/** Node */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_add__java_util_function_Supplier__org_patternfly_component_toolbar_ToolbarContent(/** Supplier<Node> */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ToolbarContent} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_toolbar_ToolbarContent(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_addItem__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarItem */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_toolbar_ToolbarItem__java_util_function_BiConsumer__void(/** ToolbarItem */ arg0, /** BiConsumer<ToolbarItem, ToolbarItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  ToolbarContent.$clinit = () =>{};
  ToolbarContent.$loadModules();
  ToolbarSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarContent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  AlignItems = goog.module.get('org.patternfly.component.toolbar.AlignItems$impl');
  ToolbarItem = goog.module.get('org.patternfly.component.toolbar.ToolbarItem$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Orientation = goog.module.get('org.patternfly.style.Orientation$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToolbarContent.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarContent = 'tc';
/**@const {string} @nodts*/
ToolbarContent.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarContent = 'ToolbarContent';
ElementContainerDelegate.$markImplementor(ToolbarContent);
HasItems.$markImplementor(ToolbarContent);
$Util.$setClassMetadata(ToolbarContent, 'org.patternfly.component.toolbar.ToolbarContent');

exports = ToolbarContent;

//# sourceMappingURL=ToolbarContent.js.map
