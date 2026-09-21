goog.module('org.patternfly.component.togglegroup.ToggleGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const FullWidth = goog.require('org.patternfly.style.Modifiers.FullWidth$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let ToggleGroupItem = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let MultiSelectHandler = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, ToggleGroup>}
 * @implements {Compact<HTMLElement, ToggleGroup>}
 * @implements {Disabled<HTMLElement, ToggleGroup>}
 * @implements {FullWidth<HTMLElement, ToggleGroup>}
 * @implements {HasItems<HTMLElement, ToggleGroup, ToggleGroupItem>}
 */
class ToggleGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SelectionMode} @nodts*/
  this.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup;
  /**@type {Map<?string, ToggleGroupItem>} @nodts*/
  this.f_items__org_patternfly_component_togglegroup_ToggleGroup_;
  /**@type {Map<?string, ?boolean>} @nodts*/
  this.f_disabledSnapshot__org_patternfly_component_togglegroup_ToggleGroup_;
  /**@type {List<SelectHandler<ToggleGroupItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_togglegroup_ToggleGroup_;
  /**@type {List<MultiSelectHandler<ToggleGroup, ToggleGroupItem>>} @nodts*/
  this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_;
  /**@type {AurHandler<ToggleGroup, ToggleGroupItem>} @nodts*/
  this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_;
  /**@type {boolean} @nodts*/
  this.f_disabled__org_patternfly_component_togglegroup_ToggleGroup_ = false;
 }
 /** @nodts @return {ToggleGroup} */
 static m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(/** SelectionMode */ selectionMode) {
  ToggleGroup.$clinit();
  return ToggleGroup.$create__org_patternfly_component_SelectionMode(selectionMode);
 }
 /** @nodts @return {!ToggleGroup} */
 static $create__org_patternfly_component_SelectionMode(/** SelectionMode */ selectionMode) {
  ToggleGroup.$clinit();
  let $instance = new ToggleGroup();
  $instance.$ctor__org_patternfly_component_togglegroup_ToggleGroup__org_patternfly_component_SelectionMode__void(selectionMode);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_togglegroup_ToggleGroup__org_patternfly_component_SelectionMode__void(/** SelectionMode */ selectionMode) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ToggleGroup__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_group__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_togglegroup_ToggleGroup_ = (/**@type {!LinkedHashMap<?string, ToggleGroupItem>}*/ (LinkedHashMap.$create__()));
  this.f_disabledSnapshot__org_patternfly_component_togglegroup_ToggleGroup_ = (/**@type {!HashMap<?string, ?boolean>}*/ (HashMap.$create__()));
  this.f_selectHandler__org_patternfly_component_togglegroup_ToggleGroup_ = (/**@type {!ArrayList<SelectHandler<ToggleGroupItem>>}*/ (ArrayList.$create__()));
  this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_ = (/**@type {!ArrayList<MultiSelectHandler<ToggleGroup, ToggleGroupItem>>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_ = (/**@type {!AurHandler<ToggleGroup, ToggleGroupItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  if (!ToggleGroup.f_SUPPORTED_SELECTION_MODES__org_patternfly_component_togglegroup_ToggleGroup_.contains(selectionMode)) {
   ToggleGroup.f_logger__org_patternfly_component_togglegroup_ToggleGroup_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Selection mode %s is not supported for %o. Supported modes are %s. Fall back to %s', [selectionMode.name(), this.m_element__elemental2_dom_HTMLElement(), /**@type {?string}*/ ($Casts.$to((/**@type {Stream<?string>}*/ (ToggleGroup.f_SUPPORTED_SELECTION_MODES__org_patternfly_component_togglegroup_ToggleGroup_.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** SelectionMode */ arg0) =>{
    let arg0_1 = /**@type {SelectionMode}*/ ($Casts.$to(arg0, SelectionMode));
    return arg0_1.name();
   }))))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(', ')), j_l_String)), SelectionMode.f_single__org_patternfly_component_SelectionMode.name()]);
   this.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup = SelectionMode.f_single__org_patternfly_component_SelectionMode;
  } else {
   this.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup = selectionMode;
  }
  this.m_storeComponent__void();
 }
 /** @nodts @return {ToggleGroup} */
 m_add__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/** ToggleGroupItem */ item) {
  this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.put(item.m_identifier__java_lang_String(), item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return /**@type {ToggleGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), ToggleGroup));
 }
 /** @nodts @return {ToggleGroup} */
 m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroup(/** boolean */ disabled) {
  if (disabled) {
   for (let $iterator = this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let item = /**@type {ToggleGroupItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ToggleGroupItem));
    {
     this.f_disabledSnapshot__org_patternfly_component_togglegroup_ToggleGroup_.put(item.m_identifier__java_lang_String(), item.m_isDisabled__boolean());
     item.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroupItem(true);
    }
   }
  } else {
   for (let $iterator_1 = this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let item_1 = /**@type {ToggleGroupItem}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), ToggleGroupItem));
    {
     let previouslyDisabled = Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_disabledSnapshot__org_patternfly_component_togglegroup_ToggleGroup_.getOrDefault(item_1.m_identifier__java_lang_String(), false), Boolean)));
     if (!previouslyDisabled) {
      item_1.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroupItem(false);
     }
    }
   }
  }
  this.f_disabled__org_patternfly_component_togglegroup_ToggleGroup_ = disabled;
  return this;
 }
 /** @nodts @return {ToggleGroup} */
 m_that__org_patternfly_component_togglegroup_ToggleGroup() {
  return this;
 }
 /** @nodts @return {ToggleGroup} */
 m_ariaLabel__java_lang_String__org_patternfly_component_togglegroup_ToggleGroup(/** ?string */ label) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), ToggleGroup));
 }
 /** @nodts @return {ToggleGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_togglegroup_ToggleGroup(/** AddItemHandler<ToggleGroup, ToggleGroupItem> */ onAdd) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ToggleGroup));
 }
 /** @nodts @return {ToggleGroup} */
 m_onMultiSelect__org_patternfly_handler_MultiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup(/** MultiSelectHandler<ToggleGroup, ToggleGroupItem> */ selectHandler) {
  this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_.add(selectHandler);
  return this;
 }
 /** @nodts @return {ToggleGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_togglegroup_ToggleGroup(/** UpdateItemHandler<ToggleGroup, ToggleGroupItem> */ onUpdate) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ToggleGroup));
 }
 /** @nodts @return {ToggleGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_togglegroup_ToggleGroup(/** RemoveItemHandler<ToggleGroup, ToggleGroupItem> */ onRemove) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ToggleGroup));
 }
 /** @nodts @return {ToggleGroup} */
 m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_togglegroup_ToggleGroup(/** SelectHandler<ToggleGroupItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_togglegroup_ToggleGroup_.add(selectHandler);
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return this.f_disabled__org_patternfly_component_togglegroup_ToggleGroup_;
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(/**@type {ToggleGroupItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.get(identifier), ToggleGroupItem)), true, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ selected) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(/**@type {ToggleGroupItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.get(identifier), ToggleGroupItem)), selected, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__boolean__void(/** ?string */ identifier, /** boolean */ selected, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(/**@type {ToggleGroupItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.get(identifier), ToggleGroupItem)), selected, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_togglegroup_ToggleGroupItem__void(/** ToggleGroupItem */ item) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__void(/** ToggleGroupItem */ item, /** boolean */ selected) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(item, selected, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(/** ToggleGroupItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   if ($Equality.$same(this.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
    this.m_unselectAllItems__void_$p_org_patternfly_component_togglegroup_ToggleGroup();
   }
   item.m_markSelected__boolean__void_$pp_org_patternfly_component_togglegroup(selected);
   if (fireEvent) {
    this.f_selectHandler__org_patternfly_component_togglegroup_ToggleGroup_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<ToggleGroupItem> */ sh) =>{
     let sh_1 = /**@type {SelectHandler<ToggleGroupItem>}*/ ($Casts.$to(sh, /**@type {Function}*/ (SelectHandler)));
     sh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
    }));
    if (!this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_.isEmpty()) {
     let selection = /**@type {List<ToggleGroupItem>}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** ToggleGroupItem */ arg0) =>{
      let arg0_1 = /**@type {ToggleGroupItem}*/ ($Casts.$to(arg0, ToggleGroupItem));
      return arg0_1.m_isSelected__boolean_$pp_org_patternfly_component_togglegroup();
     }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<ToggleGroupItem, *, List<ToggleGroupItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List)));
     this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** MultiSelectHandler<ToggleGroup, ToggleGroupItem> */ msh) =>{
      let msh_1 = /**@type {MultiSelectHandler<ToggleGroup, ToggleGroupItem>}*/ ($Casts.$to(msh, /**@type {Function}*/ (MultiSelectHandler)));
      msh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__java_util_List__void(new Event(''), this, selection);
     }));
    }
   }
  }
 }
 /** @override @nodts @return {Iterator<ToggleGroupItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.containsKey(identifier);
 }
 /** @nodts @return {ToggleGroupItem} */
 m_item__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ identifier) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.get(identifier), ToggleGroupItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_togglegroup_ToggleGroupItem__void(/** ToggleGroupItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ToggleGroupItem */ oldItem, /** ToggleGroupItem */ newItem) =>{
   let oldItem_1 = /**@type {ToggleGroupItem}*/ ($Casts.$to(oldItem, ToggleGroupItem));
   let newItem_1 = /**@type {ToggleGroupItem}*/ ($Casts.$to(newItem, ToggleGroupItem));
   this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ToggleGroupItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.remove(identifier), ToggleGroupItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  let iterator = this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ToggleGroupItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ToggleGroupItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_togglegroup_ToggleGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_togglegroup_ToggleGroup() {
  for (let $iterator = this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {ToggleGroupItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ToggleGroupItem));
   {
    item.m_markSelected__boolean__void_$pp_org_patternfly_component_togglegroup(false);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_togglegroup_ToggleGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_fullWidth__org_jboss_elemento_TypedBuilder() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(FullWidth.m_fullWidth__$default__org_patternfly_style_Modifiers_FullWidth__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_fullWidth__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(FullWidth.m_fullWidth__$default__org_patternfly_style_Modifiers_FullWidth__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<ToggleGroupItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<ToggleGroupItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ToggleGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToggleGroupItem> */ arg1) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToggleGroupItem */ arg0) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ToggleGroupItem}*/ ($Casts.$to(arg0, ToggleGroupItem))), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ToggleGroupItem */ arg0) {
  return this.m_add__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(arg0, ToggleGroupItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ToggleGroup, ToggleGroupItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_togglegroup_ToggleGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<ToggleGroupItem>} */
 m_items__java_util_List() {
  return /**@type {List<ToggleGroupItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, ToggleGroupItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** ToggleGroupItem */ arg0) {
  this.m_updateItem__org_patternfly_component_togglegroup_ToggleGroupItem__void(/**@type {ToggleGroupItem}*/ ($Casts.$to(arg0, ToggleGroupItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ToggleGroup, ToggleGroupItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_togglegroup_ToggleGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ToggleGroupItem */ arg0, /** BiConsumer<ToggleGroupItem, ToggleGroupItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ToggleGroupItem}*/ ($Casts.$to(arg0, ToggleGroupItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ToggleGroup, ToggleGroupItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_togglegroup_ToggleGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_compact__org_patternfly_component_togglegroup_ToggleGroup() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_compact__boolean__org_patternfly_component_togglegroup_ToggleGroup(/** boolean */ arg0) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_disabled__org_patternfly_component_togglegroup_ToggleGroup() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_fullWidth__org_patternfly_component_togglegroup_ToggleGroup() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(FullWidth.m_fullWidth__$default__org_patternfly_style_Modifiers_FullWidth__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_fullWidth__boolean__org_patternfly_component_togglegroup_ToggleGroup(/** boolean */ arg0) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(FullWidth.m_fullWidth__$default__org_patternfly_style_Modifiers_FullWidth__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ToggleGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_togglegroup_ToggleGroup(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ToggleGroupItem> */ arg1) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/** ToggleGroupItem */ arg0) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_togglegroup_ToggleGroupItem__java_util_function_BiConsumer__void(/** ToggleGroupItem */ arg0, /** BiConsumer<ToggleGroupItem, ToggleGroupItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  ToggleGroup.$clinit = () =>{};
  ToggleGroup.$loadModules();
  BaseComponent.$clinit();
  Compact.$clinit();
  Disabled.$clinit();
  FullWidth.$clinit();
  HasItems.$clinit();
  ToggleGroup.f_logger__org_patternfly_component_togglegroup_ToggleGroup_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(ToggleGroup).m_getName__java_lang_String());
  ToggleGroup.f_SUPPORTED_SELECTION_MODES__org_patternfly_component_togglegroup_ToggleGroup_ = (/**@type {EnumSet<SelectionMode>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(SelectionMode.f_single__org_patternfly_component_SelectionMode, /**@type {!Array<SelectionMode>}*/ ($Arrays.$stampType([SelectionMode.f_multi__org_patternfly_component_SelectionMode], SelectionMode)))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToggleGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  List = goog.module.get('java.util.List$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  ToggleGroupItem = goog.module.get('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  MultiSelectHandler = goog.module.get('org.patternfly.handler.MultiSelectHandler$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
ToggleGroup.f_logger__org_patternfly_component_togglegroup_ToggleGroup_;
/**@type {Set<SelectionMode>} @nodts*/
ToggleGroup.f_SUPPORTED_SELECTION_MODES__org_patternfly_component_togglegroup_ToggleGroup_;
Compact.$markImplementor(ToggleGroup);
Disabled.$markImplementor(ToggleGroup);
FullWidth.$markImplementor(ToggleGroup);
HasItems.$markImplementor(ToggleGroup);
$Util.$setClassMetadata(ToggleGroup, 'org.patternfly.component.togglegroup.ToggleGroup');

exports = ToggleGroup;

//# sourceMappingURL=ToggleGroup.js.map
