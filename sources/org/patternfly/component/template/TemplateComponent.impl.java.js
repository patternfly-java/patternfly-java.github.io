goog.module('org.patternfly.component.template.TemplateComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const FullHeight = goog.require('org.patternfly.style.Modifiers.FullHeight$impl');
const Glass = goog.require('org.patternfly.style.Modifiers.Glass$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
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
let TemplateItem = goog.forwardDeclare('org.patternfly.component.template.TemplateItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, TemplateComponent>}
 * @implements {Compact<HTMLElement, TemplateComponent>}
 * @implements {Disabled<HTMLElement, TemplateComponent>}
 * @implements {FullHeight<HTMLElement, TemplateComponent>}
 * @implements {Glass<HTMLElement, TemplateComponent>}
 * @implements {Ordered<HTMLElement, TemplateComponent, TemplateItem>}
 * @implements {Plain<HTMLElement, TemplateComponent>}
 */
class TemplateComponent extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_foo__org_patternfly_component_template_TemplateComponent;
  /**@type {?string} @nodts*/
  this.f_bar__org_patternfly_component_template_TemplateComponent;
  /**@type {number} @nodts*/
  this.f_baz__org_patternfly_component_template_TemplateComponent = 0;
  /**@type {number} @nodts*/
  this.f_qux__org_patternfly_component_template_TemplateComponent = 0;
  /**@type {Map<?string, TemplateItem>} @nodts*/
  this.f_items__org_patternfly_component_template_TemplateComponent_;
  /**@type {AurHandler<TemplateComponent, TemplateItem>} @nodts*/
  this.f_aur__org_patternfly_component_template_TemplateComponent_;
  /**@type {List<SelectHandler<TemplateItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_template_TemplateComponent_;
  /**@type {Comparator<TemplateItem>} @nodts*/
  this.f_comparator__org_patternfly_component_template_TemplateComponent_;
  /**@type {boolean} @nodts*/
  this.f_someThing__org_patternfly_component_template_TemplateComponent_ = false;
 }
 /** @nodts @return {TemplateComponent} */
 static m_template__org_patternfly_component_template_TemplateComponent() {
  TemplateComponent.$clinit();
  return TemplateComponent.$create__();
 }
 /** @nodts @return {!TemplateComponent} */
 static $create__() {
  TemplateComponent.$clinit();
  let $instance = new TemplateComponent();
  $instance.$ctor__org_patternfly_component_template_TemplateComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_template_TemplateComponent__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f__Template__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f__template__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_foo__org_patternfly_component_template_TemplateComponent = 'bar';
  this.f_baz__org_patternfly_component_template_TemplateComponent = 42;
  this.f_items__org_patternfly_component_template_TemplateComponent_ = (/**@type {!LinkedHashMap<?string, TemplateItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_template_TemplateComponent_ = (/**@type {!AurHandler<TemplateComponent, TemplateItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_selectHandler__org_patternfly_component_template_TemplateComponent_ = (/**@type {!ArrayList<SelectHandler<TemplateItem>>}*/ (ArrayList.$create__()));
 }
 /** @nodts @return {TemplateComponent} */
 m_add__org_patternfly_component_template_TemplateItem__org_patternfly_component_template_TemplateComponent(/** TemplateItem */ item) {
  this.m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, item);
  this.f_items__org_patternfly_component_template_TemplateComponent_.put(item.m_identifier__java_lang_String(), item);
  return /**@type {TemplateComponent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_template_TemplateComponent_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), TemplateComponent));
 }
 /** @nodts @return {TemplateComponent} */
 m_methodsReturningAReferenceToItself__org_patternfly_component_template_TemplateComponent() {
  return this;
 }
 /** @nodts @return {TemplateComponent} */
 m_ordered__java_util_Comparator__org_patternfly_component_template_TemplateComponent(/** Comparator<TemplateItem> */ comparator) {
  this.f_comparator__org_patternfly_component_template_TemplateComponent_ = comparator;
  return this;
 }
 /** @nodts @return {TemplateComponent} */
 m_that__org_patternfly_component_template_TemplateComponent() {
  return this;
 }
 /** @nodts @return {TemplateComponent} */
 m_ariaLabel__java_lang_String__org_patternfly_component_template_TemplateComponent(/** ?string */ label) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), TemplateComponent));
 }
 /** @nodts @return {TemplateComponent} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_template_TemplateComponent(/** AddItemHandler<TemplateComponent, TemplateItem> */ onAdd) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_template_TemplateComponent_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), TemplateComponent));
 }
 /** @nodts @return {TemplateComponent} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_template_TemplateComponent(/** UpdateItemHandler<TemplateComponent, TemplateItem> */ onUpdate) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_template_TemplateComponent_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), TemplateComponent));
 }
 /** @nodts @return {TemplateComponent} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_template_TemplateComponent(/** RemoveItemHandler<TemplateComponent, TemplateItem> */ onRemove) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(this.f_aur__org_patternfly_component_template_TemplateComponent_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), TemplateComponent));
 }
 /** @nodts @return {TemplateComponent} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_template_TemplateComponent(/** SelectHandler<TemplateItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_template_TemplateComponent_.add(selectHandler);
  return this;
 }
 /** @override @nodts @return {Comparator<TemplateItem>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_component_template_TemplateComponent_;
 }
 /** @override @nodts @return {Iterator<TemplateItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_template_TemplateComponent_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_template_TemplateComponent_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_template_TemplateComponent_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_template_TemplateComponent_.containsKey(identifier);
 }
 /** @nodts @return {TemplateItem} */
 m_item__java_lang_String__org_patternfly_component_template_TemplateItem(/** ?string */ identifier) {
  return /**@type {TemplateItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_template_TemplateComponent_.get(identifier), TemplateItem));
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_template_TemplateItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_template_TemplateItem_$p_org_patternfly_component_template_TemplateComponent(identifier), true, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ selected) {
  this.m_select__org_patternfly_component_template_TemplateItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_template_TemplateItem_$p_org_patternfly_component_template_TemplateComponent(identifier), selected, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__boolean__void(/** ?string */ identifier, /** boolean */ selected, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_template_TemplateItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_template_TemplateItem_$p_org_patternfly_component_template_TemplateComponent(identifier), selected, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_template_TemplateItem__void(/** TemplateItem */ item) {
  this.m_select__org_patternfly_component_template_TemplateItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_template_TemplateItem__boolean__void(/** TemplateItem */ item, /** boolean */ selected) {
  this.m_select__org_patternfly_component_template_TemplateItem__boolean__boolean__void(item, selected, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_template_TemplateItem__boolean__boolean__void(/** TemplateItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_component_template_TemplateComponent();
   item.m_markSelected__boolean__void_$pp_org_patternfly_component_template(selected);
   if (fireEvent) {
    this.f_selectHandler__org_patternfly_component_template_TemplateComponent_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<TemplateItem> */ selectHandler) =>{
     let selectHandler_1 = /**@type {SelectHandler<TemplateItem>}*/ ($Casts.$to(selectHandler, /**@type {Function}*/ (SelectHandler)));
     selectHandler_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
    }));
   }
  }
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_template_TemplateItem__void(/** TemplateItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** TemplateItem */ oldItem, /** TemplateItem */ newItem) =>{
   let oldItem_1 = /**@type {TemplateItem}*/ ($Casts.$to(oldItem, TemplateItem));
   let newItem_1 = /**@type {TemplateItem}*/ ($Casts.$to(newItem, TemplateItem));
   this.f_items__org_patternfly_component_template_TemplateComponent_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_template_TemplateComponent_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {TemplateItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_template_TemplateComponent_.remove(identifier), TemplateItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_template_TemplateComponent_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  let iterator = this.f_items__org_patternfly_component_template_TemplateComponent_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {TemplateItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), TemplateItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_template_TemplateComponent_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts @return {TemplateItem} */
 m_findItem__java_lang_String__org_patternfly_component_template_TemplateItem_$p_org_patternfly_component_template_TemplateComponent(/** ?string */ identifier) {
  return /**@type {TemplateItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_template_TemplateComponent_.get(identifier), TemplateItem));
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_template_TemplateComponent() {
  for (let $iterator = this.f_items__org_patternfly_component_template_TemplateComponent_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {TemplateItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), TemplateItem));
   {
    item.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_template_TemplateComponent();
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_fullHeight__org_jboss_elemento_TypedBuilder() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_fullHeight__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_glass__org_jboss_elemento_TypedBuilder() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_glass__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<TemplateItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<TemplateItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {TemplateComponent} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, TemplateItem> */ arg1) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** TemplateItem */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {TemplateItem}*/ ($Casts.$to(arg0, TemplateItem))), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** TemplateItem */ arg0) {
  return this.m_add__org_patternfly_component_template_TemplateItem__org_patternfly_component_template_TemplateComponent(/**@type {TemplateItem}*/ ($Casts.$to(arg0, TemplateItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<TemplateComponent, TemplateItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_template_TemplateComponent(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<TemplateItem>} */
 m_items__java_util_List() {
  return /**@type {List<TemplateItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_template_TemplateItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, TemplateItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** TemplateItem */ arg0) {
  this.m_updateItem__org_patternfly_component_template_TemplateItem__void(/**@type {TemplateItem}*/ ($Casts.$to(arg0, TemplateItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<TemplateComponent, TemplateItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_template_TemplateComponent(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** TemplateItem */ arg0, /** BiConsumer<TemplateItem, TemplateItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {TemplateItem}*/ ($Casts.$to(arg0, TemplateItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<TemplateComponent, TemplateItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_template_TemplateComponent(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ arg0, /** TemplateItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, /**@type {TemplateItem}*/ ($Casts.$to(arg1, TemplateItem)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<TemplateItem>} */
 m_defaultOrder__java_util_Comparator() {
  return /**@type {Comparator<TemplateItem>}*/ (Ordered.m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<TemplateItem> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_component_template_TemplateComponent(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateComponent} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_compact__org_patternfly_component_template_TemplateComponent() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_compact__boolean__org_patternfly_component_template_TemplateComponent(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_disabled__org_patternfly_component_template_TemplateComponent() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_disabled__boolean__org_patternfly_component_template_TemplateComponent(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_fullHeight__org_patternfly_component_template_TemplateComponent() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_fullHeight__boolean__org_patternfly_component_template_TemplateComponent(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_glass__org_patternfly_component_template_TemplateComponent() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_glass__boolean__org_patternfly_component_template_TemplateComponent(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {TemplateComponent} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_template_TemplateComponent(/** Iterable<T> */ arg0, /** j_u_function_Function<T, TemplateItem> */ arg1) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_addItem__org_patternfly_component_template_TemplateItem__org_patternfly_component_template_TemplateComponent(/** TemplateItem */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_template_TemplateItem__java_util_function_BiConsumer__void(/** TemplateItem */ arg0, /** BiConsumer<TemplateItem, TemplateItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_template_TemplateItem__void(/** ElementContainerMethods<?, ?> */ arg0, /** TemplateItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_ordered__org_patternfly_component_template_TemplateComponent() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_plain__org_patternfly_component_template_TemplateComponent() {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), TemplateComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TemplateComponent} */
 m_plain__boolean__org_patternfly_component_template_TemplateComponent(/** boolean */ arg0) {
  return /**@type {TemplateComponent}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TemplateComponent));
 }
 /** @nodts */
 static $clinit() {
  TemplateComponent.$clinit = () =>{};
  TemplateComponent.$loadModules();
  BaseComponent.$clinit();
  Compact.$clinit();
  Disabled.$clinit();
  FullHeight.$clinit();
  Glass.$clinit();
  Ordered.$clinit();
  Plain.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TemplateComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  TemplateItem = goog.module.get('org.patternfly.component.template.TemplateItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Compact.$markImplementor(TemplateComponent);
Disabled.$markImplementor(TemplateComponent);
FullHeight.$markImplementor(TemplateComponent);
Glass.$markImplementor(TemplateComponent);
Ordered.$markImplementor(TemplateComponent);
Plain.$markImplementor(TemplateComponent);
$Util.$setClassMetadata(TemplateComponent, 'org.patternfly.component.template.TemplateComponent');

exports = TemplateComponent;

//# sourceMappingURL=TemplateComponent.js.map
