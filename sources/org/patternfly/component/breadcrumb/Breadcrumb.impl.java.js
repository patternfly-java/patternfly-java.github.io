goog.module('org.patternfly.component.breadcrumb.Breadcrumb$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLOListElement.$Overlay$impl');
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
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let BreadcrumbItem = goog.forwardDeclare('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Breadcrumb>}
 * @implements {HasItems<HTMLElement, Breadcrumb, BreadcrumbItem>}
 */
class Breadcrumb extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLContainerBuilder<HTMLOListElement>} @nodts*/
  this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_;
  /**@type {Map<?string, BreadcrumbItem>} @nodts*/
  this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_;
  /**@type {List<SelectHandler<BreadcrumbItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_breadcrumb_Breadcrumb_;
  /**@type {AurHandler<Breadcrumb, BreadcrumbItem>} @nodts*/
  this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_;
 }
 /** @nodts @return {Breadcrumb} */
 static m_breadcrumb__org_patternfly_component_breadcrumb_Breadcrumb() {
  Breadcrumb.$clinit();
  return Breadcrumb.$create__();
 }
 /** @nodts @return {!Breadcrumb} */
 static $create__() {
  Breadcrumb.$clinit();
  let $instance = new Breadcrumb();
  $instance.$ctor__org_patternfly_component_breadcrumb_Breadcrumb__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_breadcrumb_Breadcrumb__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Breadcrumb__org_patternfly_component_ComponentType, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_ = (/**@type {!LinkedHashMap<?string, BreadcrumbItem>}*/ (LinkedHashMap.$create__()));
  this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_ = (/**@type {HTMLContainerBuilder<HTMLOListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLOListElement>}*/ ($Casts.$to(Elements.m_ol__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder)));
  this.f_selectHandler__org_patternfly_component_breadcrumb_Breadcrumb_ = (/**@type {!ArrayList<SelectHandler<BreadcrumbItem>>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_ = (/**@type {!AurHandler<Breadcrumb, BreadcrumbItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.m_storeComponent__void();
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLOListElement}*/ ($Casts.$to(this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Breadcrumb} */
 m_add__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(/** BreadcrumbItem */ item) {
  this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.put(item.m_identifier__java_lang_String(), item);
  this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item);
  return /**@type {Breadcrumb}*/ ($Casts.$to(this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), Breadcrumb));
 }
 /** @nodts @return {Breadcrumb} */
 m_that__org_patternfly_component_breadcrumb_Breadcrumb() {
  return this;
 }
 /** @nodts @return {Breadcrumb} */
 m_ariaLabel__java_lang_String__org_patternfly_component_breadcrumb_Breadcrumb(/** ?string */ label) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Breadcrumb));
 }
 /** @nodts @return {Breadcrumb} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_breadcrumb_Breadcrumb(/** AddItemHandler<Breadcrumb, BreadcrumbItem> */ onAdd) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Breadcrumb));
 }
 /** @nodts @return {Breadcrumb} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_breadcrumb_Breadcrumb(/** UpdateItemHandler<Breadcrumb, BreadcrumbItem> */ onUpdate) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Breadcrumb));
 }
 /** @nodts @return {Breadcrumb} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_breadcrumb_Breadcrumb(/** RemoveItemHandler<Breadcrumb, BreadcrumbItem> */ onRemove) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Breadcrumb));
 }
 /** @nodts @return {Breadcrumb} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_breadcrumb_Breadcrumb(/** SelectHandler<BreadcrumbItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_breadcrumb_Breadcrumb_.add(selectHandler);
  return this;
 }
 /** @override @nodts @return {Iterator<BreadcrumbItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.containsKey(identifier);
 }
 /** @nodts @return {BreadcrumbItem} */
 m_item__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ identifier) {
  return /**@type {BreadcrumbItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.get(identifier), BreadcrumbItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_breadcrumb_BreadcrumbItem__void(/** BreadcrumbItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** BreadcrumbItem */ oldItem, /** BreadcrumbItem */ newItem) =>{
   let oldItem_1 = /**@type {BreadcrumbItem}*/ ($Casts.$to(oldItem, BreadcrumbItem));
   let newItem_1 = /**@type {BreadcrumbItem}*/ ($Casts.$to(newItem, BreadcrumbItem));
   this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {BreadcrumbItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.remove(identifier), BreadcrumbItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_);
  let iterator = this.f_items__org_patternfly_component_breadcrumb_Breadcrumb_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {BreadcrumbItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), BreadcrumbItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_breadcrumb_Breadcrumb_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_select__elemental2_dom_Event__org_patternfly_component_breadcrumb_BreadcrumbItem__void_$pp_org_patternfly_component_breadcrumb(/** Event */ event, /** BreadcrumbItem */ item) {
  this.f_selectHandler__org_patternfly_component_breadcrumb_Breadcrumb_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<BreadcrumbItem> */ sh) =>{
   let sh_1 = /**@type {SelectHandler<BreadcrumbItem>}*/ ($Casts.$to(sh, /**@type {Function}*/ (SelectHandler)));
   sh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(event, item, true);
  }));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<BreadcrumbItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<BreadcrumbItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Breadcrumb} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_breadcrumb_Breadcrumb();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Breadcrumb} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, BreadcrumbItem> */ arg1) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Breadcrumb));
 }
 //Bridge method.
 /** @final @override @nodts @return {Breadcrumb} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** BreadcrumbItem */ arg0) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {BreadcrumbItem}*/ ($Casts.$to(arg0, BreadcrumbItem))), Breadcrumb));
 }
 //Bridge method.
 /** @final @override @nodts @return {Breadcrumb} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** BreadcrumbItem */ arg0) {
  return this.m_add__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(/**@type {BreadcrumbItem}*/ ($Casts.$to(arg0, BreadcrumbItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Breadcrumb} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Breadcrumb, BreadcrumbItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_breadcrumb_Breadcrumb(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<BreadcrumbItem>} */
 m_items__java_util_List() {
  return /**@type {List<BreadcrumbItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {BreadcrumbItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, BreadcrumbItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** BreadcrumbItem */ arg0) {
  this.m_updateItem__org_patternfly_component_breadcrumb_BreadcrumbItem__void(/**@type {BreadcrumbItem}*/ ($Casts.$to(arg0, BreadcrumbItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Breadcrumb} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Breadcrumb, BreadcrumbItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_breadcrumb_Breadcrumb(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** BreadcrumbItem */ arg0, /** BiConsumer<BreadcrumbItem, BreadcrumbItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {BreadcrumbItem}*/ ($Casts.$to(arg0, BreadcrumbItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Breadcrumb} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Breadcrumb, BreadcrumbItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_breadcrumb_Breadcrumb(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {Breadcrumb} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_breadcrumb_Breadcrumb(/** Iterable<T> */ arg0, /** j_u_function_Function<T, BreadcrumbItem> */ arg1) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Breadcrumb));
 }
 //Default method forwarding stub.
 /** @nodts @return {Breadcrumb} */
 m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(/** BreadcrumbItem */ arg0) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), Breadcrumb));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_breadcrumb_BreadcrumbItem__java_util_function_BiConsumer__void(/** BreadcrumbItem */ arg0, /** BiConsumer<BreadcrumbItem, BreadcrumbItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  Breadcrumb.$clinit = () =>{};
  Breadcrumb.$loadModules();
  BaseComponent.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Breadcrumb;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLOListElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  BreadcrumbItem = goog.module.get('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasItems.$markImplementor(Breadcrumb);
$Util.$setClassMetadata(Breadcrumb, 'org.patternfly.component.breadcrumb.Breadcrumb');

exports = Breadcrumb;

//# sourceMappingURL=Breadcrumb.js.map
