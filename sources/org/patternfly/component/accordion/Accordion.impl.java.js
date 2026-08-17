goog.module('org.patternfly.component.accordion.Accordion$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Bordered = goog.require('org.patternfly.style.Modifiers.Bordered$impl');
const NoPlainOnGlass = goog.require('org.patternfly.style.Modifiers.NoPlainOnGlass$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

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
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let AccordionItem = goog.forwardDeclare('org.patternfly.component.accordion.AccordionItem$impl');
let AccordionType = goog.forwardDeclare('org.patternfly.component.accordion.AccordionType$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Accordion>}
 * @implements {Attachable}
 * @implements {Bordered<HTMLElement, Accordion>}
 * @implements {HasItems<HTMLElement, Accordion, AccordionItem>}
 * @implements {NoPlainOnGlass<HTMLElement, Accordion>}
 * @implements {Plain<HTMLElement, Accordion>}
 */
class Accordion extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_dl__org_patternfly_component_accordion_Accordion = false;
  /**@type {number} @nodts*/
  this.f_headingLevel__org_patternfly_component_accordion_Accordion = 0;
  /**@type {boolean} @nodts*/
  this.f_fixed__org_patternfly_component_accordion_Accordion = false;
  /**@type {boolean} @nodts*/
  this.f_singleExpand__org_patternfly_component_accordion_Accordion = false;
  /**@type {IconPosition} @nodts*/
  this.f_iconPosition__org_patternfly_component_accordion_Accordion;
  /**@type {Map<?string, AccordionItem>} @nodts*/
  this.f_items__org_patternfly_component_accordion_Accordion_;
  /**@type {List<ToggleHandler<AccordionItem>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_accordion_Accordion_;
  /**@type {AurHandler<Accordion, AccordionItem>} @nodts*/
  this.f_aur__org_patternfly_component_accordion_Accordion_;
 }
 /** @nodts @return {Accordion} */
 static m_accordion__org_patternfly_component_accordion_Accordion() {
  Accordion.$clinit();
  return Accordion.m_accordion__org_patternfly_component_accordion_AccordionType__org_patternfly_component_accordion_Accordion(AccordionType.f_dl__org_patternfly_component_accordion_AccordionType);
 }
 /** @nodts @return {Accordion} */
 static m_accordion__org_patternfly_component_accordion_AccordionType__org_patternfly_component_accordion_Accordion(/** AccordionType */ type) {
  Accordion.$clinit();
  return (() =>{
   switch (type.ordinal()) {
    case AccordionType.$ordinal_dl__org_patternfly_component_accordion_AccordionType:
     return Accordion.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_dl__org_jboss_elemento_HTMLContainerBuilder());
    case AccordionType.$ordinal_div__org_patternfly_component_accordion_AccordionType:
     return Accordion.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
    default:
     InternalPreconditions.m_checkExhaustive__void();
   }
  })();
 }
 /** @nodts @template E @return {!Accordion} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Accordion.$clinit();
  let $instance = new Accordion();
  $instance.$ctor__org_patternfly_component_accordion_Accordion__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_accordion_Accordion__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Accordion__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()));
  this.f_dl__org_patternfly_component_accordion_Accordion = j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().tagName, 'dl');
  this.f_headingLevel__org_patternfly_component_accordion_Accordion = 3;
  this.f_singleExpand__org_patternfly_component_accordion_Accordion = false;
  this.f_iconPosition__org_patternfly_component_accordion_Accordion = IconPosition.f_end__org_patternfly_component_IconPosition;
  this.f_items__org_patternfly_component_accordion_Accordion_ = (/**@type {!LinkedHashMap<?string, AccordionItem>}*/ (LinkedHashMap.$create__()));
  this.f_toggleHandler__org_patternfly_component_accordion_Accordion_ = (/**@type {!ArrayList<ToggleHandler<AccordionItem>>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_accordion_Accordion_ = (/**@type {!AurHandler<Accordion, AccordionItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  for (let $iterator = this.f_items__org_patternfly_component_accordion_Accordion_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {AccordionItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), AccordionItem));
   {
    item.m_appendTo__org_patternfly_component_accordion_Accordion__void_$pp_org_patternfly_component_accordion(this);
   }
  }
 }
 /** @nodts @return {Accordion} */
 m_add__org_patternfly_component_accordion_AccordionItem__org_patternfly_component_accordion_Accordion(/** AccordionItem */ item) {
  this.f_items__org_patternfly_component_accordion_Accordion_.put(item.m_identifier__java_lang_String(), item);
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this)) {
   item.m_appendTo__org_patternfly_component_accordion_Accordion__void_$pp_org_patternfly_component_accordion(this);
  }
  return /**@type {Accordion}*/ ($Casts.$to(this.f_aur__org_patternfly_component_accordion_Accordion_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), Accordion));
 }
 /** @nodts @return {Accordion} */
 m_fixed__org_patternfly_component_accordion_Accordion() {
  return this.m_fixed__boolean__org_patternfly_component_accordion_Accordion(true);
 }
 /** @nodts @return {Accordion} */
 m_fixed__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ fixed) {
  this.f_fixed__org_patternfly_component_accordion_Accordion = fixed;
  return this;
 }
 /** @nodts @return {Accordion} */
 m_large__org_patternfly_component_accordion_Accordion() {
  return this.m_large__boolean__org_patternfly_component_accordion_Accordion(true);
 }
 /** @nodts @return {Accordion} */
 m_large__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ large) {
  if (large) {
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size)], j_l_String)));
  } else {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size)], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Accordion} */
 m_singleExpand__org_patternfly_component_accordion_Accordion() {
  return this.m_singleExpand__boolean__org_patternfly_component_accordion_Accordion(true);
 }
 /** @nodts @return {Accordion} */
 m_singleExpand__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ singleExpand) {
  this.f_singleExpand__org_patternfly_component_accordion_Accordion = singleExpand;
  return this;
 }
 /** @nodts @return {Accordion} */
 m_headingLevel__int__org_patternfly_component_accordion_Accordion(/** number */ headingLevel) {
  this.f_headingLevel__org_patternfly_component_accordion_Accordion = headingLevel;
  return this;
 }
 /** @nodts @return {Accordion} */
 m_iconPosition__org_patternfly_component_IconPosition__org_patternfly_component_accordion_Accordion(/** IconPosition */ iconPosition) {
  this.f_iconPosition__org_patternfly_component_accordion_Accordion = iconPosition;
  if ($Equality.$same(iconPosition, IconPosition.f_start__org_patternfly_component_IconPosition)) {
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String('toggle-start')], j_l_String)));
  } else {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String('toggle-start')], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Accordion} */
 m_that__org_patternfly_component_accordion_Accordion() {
  return this;
 }
 /** @nodts @return {Accordion} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_accordion_Accordion(/** AddItemHandler<Accordion, AccordionItem> */ onAdd) {
  return /**@type {Accordion}*/ ($Casts.$to(this.f_aur__org_patternfly_component_accordion_Accordion_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Accordion));
 }
 /** @nodts @return {Accordion} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_accordion_Accordion(/** UpdateItemHandler<Accordion, AccordionItem> */ onUpdate) {
  return /**@type {Accordion}*/ ($Casts.$to(this.f_aur__org_patternfly_component_accordion_Accordion_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Accordion));
 }
 /** @nodts @return {Accordion} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_accordion_Accordion(/** RemoveItemHandler<Accordion, AccordionItem> */ onRemove) {
  return /**@type {Accordion}*/ ($Casts.$to(this.f_aur__org_patternfly_component_accordion_Accordion_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Accordion));
 }
 /** @nodts @return {Accordion} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_accordion_Accordion(/** ToggleHandler<AccordionItem> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_accordion_Accordion_.add(toggleHandler);
  return this;
 }
 /** @nodts */
 m_collapse__java_lang_String__void(/** ?string */ identifier) {
  this.m_collapse__java_lang_String__boolean__void(identifier, true);
 }
 /** @nodts */
 m_collapse__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ fireEvent) {
  let item = /**@type {AccordionItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_accordion_Accordion_.get(identifier), AccordionItem));
  if (!$Equality.$same(item, null)) {
   this.m_collapseItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(item, fireEvent);
  }
 }
 /** @nodts */
 m_expand__java_lang_String__void(/** ?string */ identifier) {
  this.m_expand__java_lang_String__boolean__void(identifier, true);
 }
 /** @nodts */
 m_expand__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ fireEvent) {
  let item = /**@type {AccordionItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_accordion_Accordion_.get(identifier), AccordionItem));
  if (!$Equality.$same(item, null)) {
   this.m_expandItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(item, fireEvent);
  }
 }
 /** @override @nodts @return {Iterator<AccordionItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_accordion_Accordion_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_accordion_Accordion_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_accordion_Accordion_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_accordion_Accordion_.containsKey(identifier);
 }
 /** @nodts @return {AccordionItem} */
 m_item__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ identifier) {
  return /**@type {AccordionItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_accordion_Accordion_.get(identifier), AccordionItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_accordion_AccordionItem__void(/** AccordionItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** AccordionItem */ oldItem, /** AccordionItem */ newItem) =>{
   let oldItem_1 = /**@type {AccordionItem}*/ ($Casts.$to(oldItem, AccordionItem));
   let newItem_1 = /**@type {AccordionItem}*/ ($Casts.$to(newItem, AccordionItem));
   this.f_items__org_patternfly_component_accordion_Accordion_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_accordion_Accordion_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {AccordionItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_accordion_Accordion_.remove(identifier), AccordionItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_accordion_Accordion_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  let iterator = this.f_items__org_patternfly_component_accordion_Accordion_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {AccordionItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), AccordionItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_accordion_Accordion_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_collapseItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(/** AccordionItem */ item, /** boolean */ fireEvent) {
  item.m_collapse__void_$pp_org_patternfly_component_accordion();
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_accordion_Accordion_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<AccordionItem> */ th) =>{
    let th_1 = /**@type {ToggleHandler<AccordionItem>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, false);
   }));
  }
 }
 /** @nodts */
 m_expandItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(/** AccordionItem */ item, /** boolean */ fireEvent) {
  item.m_expand__void_$pp_org_patternfly_component_accordion();
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_accordion_Accordion_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<AccordionItem> */ th) =>{
    let th_1 = /**@type {ToggleHandler<AccordionItem>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, true);
   }));
  }
  if (this.f_singleExpand__org_patternfly_component_accordion_Accordion) {
   for (let $iterator = this.f_items__org_patternfly_component_accordion_Accordion_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let otherItem = /**@type {AccordionItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), AccordionItem));
    {
     if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(otherItem.m_identifier__java_lang_String(), item.m_identifier__java_lang_String())) {
      continue;
     }
     otherItem.m_collapse__void_$pp_org_patternfly_component_accordion();
    }
   }
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_accordion_Accordion();
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_bordered__org_jboss_elemento_TypedBuilder() {
  return /**@type {Accordion}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), Accordion));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_bordered__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Accordion));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<AccordionItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<AccordionItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Accordion} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, AccordionItem> */ arg1) {
  return /**@type {Accordion}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Accordion));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** AccordionItem */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {AccordionItem}*/ ($Casts.$to(arg0, AccordionItem))), Accordion));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** AccordionItem */ arg0) {
  return this.m_add__org_patternfly_component_accordion_AccordionItem__org_patternfly_component_accordion_Accordion(/**@type {AccordionItem}*/ ($Casts.$to(arg0, AccordionItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Accordion, AccordionItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_accordion_Accordion(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<AccordionItem>} */
 m_items__java_util_List() {
  return /**@type {List<AccordionItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_accordion_AccordionItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, AccordionItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** AccordionItem */ arg0) {
  this.m_updateItem__org_patternfly_component_accordion_AccordionItem__void(/**@type {AccordionItem}*/ ($Casts.$to(arg0, AccordionItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Accordion, AccordionItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_accordion_Accordion(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** AccordionItem */ arg0, /** BiConsumer<AccordionItem, AccordionItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {AccordionItem}*/ ($Casts.$to(arg0, AccordionItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Accordion, AccordionItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_accordion_Accordion(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_noPlainOnGlass__org_jboss_elemento_TypedBuilder() {
  return /**@type {Accordion}*/ ($Casts.$to(NoPlainOnGlass.m_noPlainOnGlass__$default__org_patternfly_style_Modifiers_NoPlainOnGlass__org_jboss_elemento_TypedBuilder(this), Accordion));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_noPlainOnGlass__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(NoPlainOnGlass.m_noPlainOnGlass__$default__org_patternfly_style_Modifiers_NoPlainOnGlass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Accordion));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {Accordion}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Accordion));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_bordered__org_patternfly_component_accordion_Accordion() {
  return /**@type {Accordion}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_bordered__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {Accordion} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_accordion_Accordion(/** Iterable<T> */ arg0, /** j_u_function_Function<T, AccordionItem> */ arg1) {
  return /**@type {Accordion}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_addItem__org_patternfly_component_accordion_AccordionItem__org_patternfly_component_accordion_Accordion(/** AccordionItem */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_accordion_AccordionItem__java_util_function_BiConsumer__void(/** AccordionItem */ arg0, /** BiConsumer<AccordionItem, AccordionItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_noPlainOnGlass__org_patternfly_component_accordion_Accordion() {
  return /**@type {Accordion}*/ ($Casts.$to(NoPlainOnGlass.m_noPlainOnGlass__$default__org_patternfly_style_Modifiers_NoPlainOnGlass__org_jboss_elemento_TypedBuilder(this), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_noPlainOnGlass__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(NoPlainOnGlass.m_noPlainOnGlass__$default__org_patternfly_style_Modifiers_NoPlainOnGlass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_plain__org_patternfly_component_accordion_Accordion() {
  return /**@type {Accordion}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_plain__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Accordion));
 }
 /** @nodts */
 static $clinit() {
  Accordion.$clinit = () =>{};
  Accordion.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Bordered.$clinit();
  HasItems.$clinit();
  NoPlainOnGlass.$clinit();
  Plain.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Accordion;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  IconPosition = goog.module.get('org.patternfly.component.IconPosition$impl');
  AccordionItem = goog.module.get('org.patternfly.component.accordion.AccordionItem$impl');
  AccordionType = goog.module.get('org.patternfly.component.accordion.AccordionType$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Attachable.$markImplementor(Accordion);
Bordered.$markImplementor(Accordion);
HasItems.$markImplementor(Accordion);
NoPlainOnGlass.$markImplementor(Accordion);
Plain.$markImplementor(Accordion);
$Util.$setClassMetadata(Accordion, 'org.patternfly.component.accordion.Accordion');

exports = Accordion;

//# sourceMappingURL=Accordion.js.map
