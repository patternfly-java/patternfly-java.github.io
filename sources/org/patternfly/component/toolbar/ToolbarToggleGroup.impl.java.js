goog.module('org.patternfly.component.toolbar.ToolbarToggleGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
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
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let ToolbarGroup = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarGroup$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Orientation = goog.forwardDeclare('org.patternfly.style.Orientation$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarToggleGroup>}
 * @implements {HasItems<HTMLDivElement, ToolbarToggleGroup, ToolbarItem>}
 */
class ToolbarToggleGroup extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, ToolbarItem>} @nodts*/
  this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_;
  /**@type {AurHandler<ToolbarToggleGroup, ToolbarItem>} @nodts*/
  this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_;
 }
 /** @nodts @return {ToolbarToggleGroup} */
 static m_toolbarToggleGroup__org_patternfly_component_toolbar_ToolbarToggleGroup() {
  ToolbarToggleGroup.$clinit();
  return ToolbarToggleGroup.$create__();
 }
 /** @nodts @return {!ToolbarToggleGroup} */
 static $create__() {
  ToolbarToggleGroup.$clinit();
  let $instance = new ToolbarToggleGroup();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarToggleGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarToggleGroup__void() {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarToggleGroup.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarToggleGroup, ToolbarToggleGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarToggleGroup, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_show__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_ = (/**@type {!LinkedHashMap<?string, ToolbarItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_ = (/**@type {!AurHandler<ToolbarToggleGroup, ToolbarItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_icon_PredefinedIcon__org_patternfly_component_button_Button(rhUi.m_filter__org_patternfly_icon_PredefinedIcon()).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hasPopup__org_patternfly_core_Aria, false), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Show filters'), Button))), HTMLContainerBuilder)));
 }
 /** @nodts @return {ToolbarToggleGroup} */
 m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarToggleGroup(/** ToolbarItem */ item) {
  this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.put(item.m_identifier__java_lang_String(), item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), ToolbarToggleGroup));
 }
 /** @nodts @return {ToolbarToggleGroup} */
 m_addDivider__org_patternfly_component_toolbar_ToolbarToggleGroup() {
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_orientation__org_patternfly_style_Orientation__org_patternfly_component_divider_Divider(Orientation.f_vertical__org_patternfly_style_Orientation)), ToolbarToggleGroup));
 }
 /** @nodts @return {ToolbarToggleGroup} */
 m_addGroup__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarToggleGroup(/** ToolbarGroup */ group) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarToggleGroup(group);
 }
 /** @nodts @return {ToolbarToggleGroup} */
 m_add__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarToggleGroup(/** ToolbarGroup */ group) {
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {ToolbarToggleGroup} */
 m_that__org_patternfly_component_toolbar_ToolbarToggleGroup() {
  return this;
 }
 /** @nodts @return {ToolbarToggleGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_toolbar_ToolbarToggleGroup(/** AddItemHandler<ToolbarToggleGroup, ToolbarItem> */ onAdd) {
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ToolbarToggleGroup));
 }
 /** @nodts @return {ToolbarToggleGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_toolbar_ToolbarToggleGroup(/** UpdateItemHandler<ToolbarToggleGroup, ToolbarItem> */ onUpdate) {
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ToolbarToggleGroup));
 }
 /** @nodts @return {ToolbarToggleGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_toolbar_ToolbarToggleGroup(/** RemoveItemHandler<ToolbarToggleGroup, ToolbarItem> */ onRemove) {
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ToolbarToggleGroup));
 }
 /** @override @nodts @return {Iterator<ToolbarItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.containsKey(identifier);
 }
 /** @nodts @return {ToolbarItem} */
 m_item__java_lang_String__org_patternfly_component_toolbar_ToolbarItem(/** ?string */ identifier) {
  return /**@type {ToolbarItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.get(identifier), ToolbarItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_toolbar_ToolbarItem__void(/** ToolbarItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ToolbarItem */ oldItem, /** ToolbarItem */ newItem) =>{
   let oldItem_1 = /**@type {ToolbarItem}*/ ($Casts.$to(oldItem, ToolbarItem));
   let newItem_1 = /**@type {ToolbarItem}*/ ($Casts.$to(newItem, ToolbarItem));
   this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ToolbarItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.remove(identifier), ToolbarItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  let iterator = this.f_items__org_patternfly_component_toolbar_ToolbarToggleGroup_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ToolbarItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ToolbarItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_toolbar_ToolbarToggleGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
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
 /** @final @override @nodts @return {ToolbarToggleGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarToggleGroup();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ToolbarToggleGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToolbarToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarToggleGroup} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToolbarItem */ arg0) {
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem))), ToolbarToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarToggleGroup} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToolbarItem */ arg0) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarToggleGroup(/**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarToggleGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ToolbarToggleGroup, ToolbarItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_toolbar_ToolbarToggleGroup(arg0);
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
 /** @final @override @nodts @return {ToolbarToggleGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ToolbarToggleGroup, ToolbarItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_toolbar_ToolbarToggleGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ToolbarItem */ arg0, /** BiConsumer<ToolbarItem, ToolbarItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ToolbarItem}*/ ($Casts.$to(arg0, ToolbarItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarToggleGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ToolbarToggleGroup, ToolbarItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_toolbar_ToolbarToggleGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ToolbarToggleGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_toolbar_ToolbarToggleGroup(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToolbarItem> */ arg1) {
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToolbarToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarToggleGroup} */
 m_addItem__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarToggleGroup(/** ToolbarItem */ arg0) {
  return /**@type {ToolbarToggleGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ToolbarToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_toolbar_ToolbarItem__java_util_function_BiConsumer__void(/** ToolbarItem */ arg0, /** BiConsumer<ToolbarItem, ToolbarItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  ToolbarToggleGroup.$clinit = () =>{};
  ToolbarToggleGroup.$loadModules();
  ToolbarSubComponent.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarToggleGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  ToolbarItem = goog.module.get('org.patternfly.component.toolbar.ToolbarItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Orientation = goog.module.get('org.patternfly.style.Orientation$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToolbarToggleGroup.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarToggleGroup = 'ttg';
/**@const {string} @nodts*/
ToolbarToggleGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarToggleGroup = 'ToolbarToggleGroup';
HasItems.$markImplementor(ToolbarToggleGroup);
$Util.$setClassMetadata(ToolbarToggleGroup, 'org.patternfly.component.toolbar.ToolbarToggleGroup');

exports = ToolbarToggleGroup;

//# sourceMappingURL=ToolbarToggleGroup.js.map
