goog.module('org.patternfly.component.notification.NotificationDrawerList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const NotificationDrawerSubComponent = goog.require('org.patternfly.component.notification.NotificationDrawerSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
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
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let NotificationDrawerItem = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerItem$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NotificationDrawerSubComponent<HTMLElement, NotificationDrawerList>}
 * @implements {HasItems<HTMLElement, NotificationDrawerList, NotificationDrawerItem>}
 */
class NotificationDrawerList extends NotificationDrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, NotificationDrawerItem>} @nodts*/
  this.f_items__org_patternfly_component_notification_NotificationDrawerList;
  /**@type {AurHandler<NotificationDrawerList, NotificationDrawerItem>} @nodts*/
  this.f_aur__org_patternfly_component_notification_NotificationDrawerList_;
 }
 /** @nodts @return {NotificationDrawerList} */
 static m_notificationDrawerList__org_patternfly_component_notification_NotificationDrawerList() {
  NotificationDrawerList.$clinit();
  return NotificationDrawerList.$create__();
 }
 /** @nodts @return {!NotificationDrawerList} */
 static $create__() {
  NotificationDrawerList.$clinit();
  let $instance = new NotificationDrawerList();
  $instance.$ctor__org_patternfly_component_notification_NotificationDrawerList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_notification_NotificationDrawerList__void() {
  this.$ctor__org_patternfly_component_notification_NotificationDrawerSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(NotificationDrawerList.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerList, NotificationDrawerList.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerList, /**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_role__java_lang_String__org_jboss_elemento_TypedBuilder(Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_notification_NotificationDrawerList = (/**@type {!LinkedHashMap<?string, NotificationDrawerItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_notification_NotificationDrawerList_ = (/**@type {!AurHandler<NotificationDrawerList, NotificationDrawerItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
 }
 /** @nodts @return {NotificationDrawerList} */
 m_add__org_patternfly_component_notification_NotificationDrawerItem__org_patternfly_component_notification_NotificationDrawerList(/** NotificationDrawerItem */ item) {
  this.f_items__org_patternfly_component_notification_NotificationDrawerList.put(item.m_identifier__java_lang_String(), item);
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), item.m_element__elemental2_dom_HTMLElement());
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_notification_NotificationDrawerList_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), NotificationDrawerList));
 }
 /** @nodts @return {NotificationDrawerList} */
 m_insertAfter__org_patternfly_component_notification_NotificationDrawerItem__org_patternfly_component_notification_NotificationDrawerItem__org_patternfly_component_notification_NotificationDrawerList(/** NotificationDrawerItem */ newItem, /** NotificationDrawerItem */ afterItem) {
  this.f_items__org_patternfly_component_notification_NotificationDrawerList.put(newItem.m_identifier__java_lang_String(), newItem);
  if ($Equality.$same(afterItem, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), newItem.m_element__elemental2_dom_HTMLElement());
  } else {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(newItem.m_element__elemental2_dom_HTMLElement(), afterItem.m_element__elemental2_dom_HTMLElement());
  }
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_notification_NotificationDrawerList_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(newItem), NotificationDrawerList));
 }
 /** @nodts @return {NotificationDrawerList} */
 m_that__org_patternfly_component_notification_NotificationDrawerList() {
  return this;
 }
 /** @nodts @return {NotificationDrawerList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_notification_NotificationDrawerList(/** AddItemHandler<NotificationDrawerList, NotificationDrawerItem> */ onAdd) {
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_notification_NotificationDrawerList_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), NotificationDrawerList));
 }
 /** @nodts @return {NotificationDrawerList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_notification_NotificationDrawerList(/** UpdateItemHandler<NotificationDrawerList, NotificationDrawerItem> */ onUpdate) {
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_notification_NotificationDrawerList_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), NotificationDrawerList));
 }
 /** @nodts @return {NotificationDrawerList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_notification_NotificationDrawerList(/** RemoveItemHandler<NotificationDrawerList, NotificationDrawerItem> */ onRemove) {
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_notification_NotificationDrawerList_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), NotificationDrawerList));
 }
 /** @override @nodts @return {Iterator<NotificationDrawerItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_notification_NotificationDrawerList.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_notification_NotificationDrawerList.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_notification_NotificationDrawerList.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_notification_NotificationDrawerList.containsKey(identifier);
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_item__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(/** ?string */ identifier) {
  return /**@type {NotificationDrawerItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_notification_NotificationDrawerList.get(identifier), NotificationDrawerItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_notification_NotificationDrawerItem__void(/** NotificationDrawerItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** NotificationDrawerItem */ oldItem, /** NotificationDrawerItem */ newItem) =>{
   let oldItem_1 = /**@type {NotificationDrawerItem}*/ ($Casts.$to(oldItem, NotificationDrawerItem));
   let newItem_1 = /**@type {NotificationDrawerItem}*/ ($Casts.$to(newItem, NotificationDrawerItem));
   this.f_items__org_patternfly_component_notification_NotificationDrawerList.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_notification_NotificationDrawerList_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {NotificationDrawerItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_notification_NotificationDrawerList.remove(identifier), NotificationDrawerItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_notification_NotificationDrawerList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  let iterator = this.f_items__org_patternfly_component_notification_NotificationDrawerList.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {NotificationDrawerItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), NotificationDrawerItem));
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_notification_NotificationDrawerList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<NotificationDrawerItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<NotificationDrawerItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_notification_NotificationDrawerList();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {NotificationDrawerList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, NotificationDrawerItem> */ arg1) {
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), NotificationDrawerList));
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerList} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** NotificationDrawerItem */ arg0) {
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {NotificationDrawerItem}*/ ($Casts.$to(arg0, NotificationDrawerItem))), NotificationDrawerList));
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerList} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** NotificationDrawerItem */ arg0) {
  return this.m_add__org_patternfly_component_notification_NotificationDrawerItem__org_patternfly_component_notification_NotificationDrawerList(/**@type {NotificationDrawerItem}*/ ($Casts.$to(arg0, NotificationDrawerItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<NotificationDrawerList, NotificationDrawerItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_notification_NotificationDrawerList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<NotificationDrawerItem>} */
 m_items__java_util_List() {
  return /**@type {List<NotificationDrawerItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, NotificationDrawerItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** NotificationDrawerItem */ arg0) {
  this.m_updateItem__org_patternfly_component_notification_NotificationDrawerItem__void(/**@type {NotificationDrawerItem}*/ ($Casts.$to(arg0, NotificationDrawerItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<NotificationDrawerList, NotificationDrawerItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_notification_NotificationDrawerList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** NotificationDrawerItem */ arg0, /** BiConsumer<NotificationDrawerItem, NotificationDrawerItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {NotificationDrawerItem}*/ ($Casts.$to(arg0, NotificationDrawerItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<NotificationDrawerList, NotificationDrawerItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_notification_NotificationDrawerList(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {NotificationDrawerList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_notification_NotificationDrawerList(/** Iterable<T> */ arg0, /** j_u_function_Function<T, NotificationDrawerItem> */ arg1) {
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), NotificationDrawerList));
 }
 //Default method forwarding stub.
 /** @nodts @return {NotificationDrawerList} */
 m_addItem__org_patternfly_component_notification_NotificationDrawerItem__org_patternfly_component_notification_NotificationDrawerList(/** NotificationDrawerItem */ arg0) {
  return /**@type {NotificationDrawerList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), NotificationDrawerList));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_notification_NotificationDrawerItem__java_util_function_BiConsumer__void(/** NotificationDrawerItem */ arg0, /** BiConsumer<NotificationDrawerItem, NotificationDrawerItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  NotificationDrawerList.$clinit = () =>{};
  NotificationDrawerList.$loadModules();
  NotificationDrawerSubComponent.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationDrawerList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  NotificationDrawerItem = goog.module.get('org.patternfly.component.notification.NotificationDrawerItem$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
NotificationDrawerList.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerList = 'ndl';
/**@const {string} @nodts*/
NotificationDrawerList.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerList = 'NotificationDrawerList';
HasItems.$markImplementor(NotificationDrawerList);
$Util.$setClassMetadata(NotificationDrawerList, 'org.patternfly.component.notification.NotificationDrawerList');

exports = NotificationDrawerList;

//# sourceMappingURL=NotificationDrawerList.js.map
