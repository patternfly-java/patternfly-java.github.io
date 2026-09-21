goog.module('org.patternfly.component.jumplinks.JumpLinksList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const JumpLinksSubComponent = goog.require('org.patternfly.component.jumplinks.JumpLinksSubComponent$impl');

let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
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
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let JumpLinksItem = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksItem$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {JumpLinksSubComponent<HTMLUListElement, JumpLinksList>}
 * @implements {HasItems<HTMLUListElement, JumpLinksList, JumpLinksItem>}
 */
class JumpLinksList extends JumpLinksSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, JumpLinksItem>} @nodts*/
  this.f_items__org_patternfly_component_jumplinks_JumpLinksList;
  /**@type {AurHandler<JumpLinksList, JumpLinksItem>} @nodts*/
  this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_;
 }
 /** @nodts @return {JumpLinksList} */
 static m_jumpLinksList__org_patternfly_component_jumplinks_JumpLinksList() {
  JumpLinksList.$clinit();
  return JumpLinksList.$create__();
 }
 /** @nodts @return {!JumpLinksList} */
 static $create__() {
  JumpLinksList.$clinit();
  let $instance = new JumpLinksList();
  $instance.$ctor__org_patternfly_component_jumplinks_JumpLinksList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_jumplinks_JumpLinksList__void() {
  this.$ctor__org_patternfly_component_jumplinks_JumpLinksSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(JumpLinksList.f_SUB_COMPONENT_ID__org_patternfly_component_jumplinks_JumpLinksList, JumpLinksList.f_SUB_COMPONENT_NAME__org_patternfly_component_jumplinks_JumpLinksList, /**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_jumplinks_JumpLinksList = (/**@type {!HashMap<?string, JumpLinksItem>}*/ (HashMap.$create__()));
  this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_ = (/**@type {!AurHandler<JumpLinksList, JumpLinksItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
 }
 /** @nodts @return {JumpLinksList} */
 m_add__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(/** JumpLinksItem */ item) {
  this.f_items__org_patternfly_component_jumplinks_JumpLinksList.put(item.m_identifier__java_lang_String(), item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return /**@type {JumpLinksList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), JumpLinksList));
 }
 /** @nodts @return {JumpLinksList} */
 m_that__org_patternfly_component_jumplinks_JumpLinksList() {
  return this;
 }
 /** @nodts @return {JumpLinksList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_jumplinks_JumpLinksList(/** AddItemHandler<JumpLinksList, JumpLinksItem> */ onAdd) {
  return /**@type {JumpLinksList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), JumpLinksList));
 }
 /** @nodts @return {JumpLinksList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_jumplinks_JumpLinksList(/** UpdateItemHandler<JumpLinksList, JumpLinksItem> */ onUpdate) {
  return /**@type {JumpLinksList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), JumpLinksList));
 }
 /** @nodts @return {JumpLinksList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_jumplinks_JumpLinksList(/** RemoveItemHandler<JumpLinksList, JumpLinksItem> */ onRemove) {
  return /**@type {JumpLinksList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), JumpLinksList));
 }
 /** @override @nodts @return {Iterator<JumpLinksItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_jumplinks_JumpLinksList.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_jumplinks_JumpLinksList.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_jumplinks_JumpLinksList.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_jumplinks_JumpLinksList.containsKey(identifier);
 }
 /** @nodts @return {JumpLinksItem} */
 m_item__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ identifier) {
  return /**@type {JumpLinksItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_jumplinks_JumpLinksList.get(identifier), JumpLinksItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_jumplinks_JumpLinksItem__void(/** JumpLinksItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** JumpLinksItem */ oldItem, /** JumpLinksItem */ newItem) =>{
   let oldItem_1 = /**@type {JumpLinksItem}*/ ($Casts.$to(oldItem, JumpLinksItem));
   let newItem_1 = /**@type {JumpLinksItem}*/ ($Casts.$to(newItem, JumpLinksItem));
   this.f_items__org_patternfly_component_jumplinks_JumpLinksList.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {JumpLinksItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_jumplinks_JumpLinksList.remove(identifier), JumpLinksItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  let iterator = this.f_items__org_patternfly_component_jumplinks_JumpLinksList.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {JumpLinksItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), JumpLinksItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_jumplinks_JumpLinksList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<JumpLinksItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<JumpLinksItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_jumplinks_JumpLinksList();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {JumpLinksList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, JumpLinksItem> */ arg1) {
  return /**@type {JumpLinksList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), JumpLinksList));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksList} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** JumpLinksItem */ arg0) {
  return /**@type {JumpLinksList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {JumpLinksItem}*/ ($Casts.$to(arg0, JumpLinksItem))), JumpLinksList));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksList} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** JumpLinksItem */ arg0) {
  return this.m_add__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(/**@type {JumpLinksItem}*/ ($Casts.$to(arg0, JumpLinksItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<JumpLinksList, JumpLinksItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_jumplinks_JumpLinksList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<JumpLinksItem>} */
 m_items__java_util_List() {
  return /**@type {List<JumpLinksItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, JumpLinksItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** JumpLinksItem */ arg0) {
  this.m_updateItem__org_patternfly_component_jumplinks_JumpLinksItem__void(/**@type {JumpLinksItem}*/ ($Casts.$to(arg0, JumpLinksItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<JumpLinksList, JumpLinksItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_jumplinks_JumpLinksList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** JumpLinksItem */ arg0, /** BiConsumer<JumpLinksItem, JumpLinksItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {JumpLinksItem}*/ ($Casts.$to(arg0, JumpLinksItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<JumpLinksList, JumpLinksItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_jumplinks_JumpLinksList(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {JumpLinksList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_jumplinks_JumpLinksList(/** Iterable<T> */ arg0, /** j_u_function_Function<T, JumpLinksItem> */ arg1) {
  return /**@type {JumpLinksList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), JumpLinksList));
 }
 //Default method forwarding stub.
 /** @nodts @return {JumpLinksList} */
 m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(/** JumpLinksItem */ arg0) {
  return /**@type {JumpLinksList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), JumpLinksList));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_jumplinks_JumpLinksItem__java_util_function_BiConsumer__void(/** JumpLinksItem */ arg0, /** BiConsumer<JumpLinksItem, JumpLinksItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  JumpLinksList.$clinit = () =>{};
  JumpLinksList.$loadModules();
  JumpLinksSubComponent.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JumpLinksList;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  JumpLinksItem = goog.module.get('org.patternfly.component.jumplinks.JumpLinksItem$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
JumpLinksList.f_SUB_COMPONENT_ID__org_patternfly_component_jumplinks_JumpLinksList = 'jll';
/**@const {string} @nodts*/
JumpLinksList.f_SUB_COMPONENT_NAME__org_patternfly_component_jumplinks_JumpLinksList = 'JumpLinksList';
HasItems.$markImplementor(JumpLinksList);
$Util.$setClassMetadata(JumpLinksList, 'org.patternfly.component.jumplinks.JumpLinksList');

exports = JumpLinksList;

//# sourceMappingURL=JumpLinksList.js.map
