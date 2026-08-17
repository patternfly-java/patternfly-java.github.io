goog.module('org.patternfly.component.table.Tr$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const TableSubComponent = goog.require('org.patternfly.component.table.TableSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let Cell = goog.forwardDeclare('org.patternfly.component.table.Cell$impl');
let Table = goog.forwardDeclare('org.patternfly.component.table.Table$impl');
let Tbody = goog.forwardDeclare('org.patternfly.component.table.Tbody$impl');
let Td = goog.forwardDeclare('org.patternfly.component.table.Td$impl');
let TitleCell = goog.forwardDeclare('org.patternfly.component.table.TitleCell$impl');
let TreeViewItem = goog.forwardDeclare('org.patternfly.component.tree.TreeViewItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let AsyncStatus = goog.forwardDeclare('org.patternfly.core.AsyncStatus$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Timeouts = goog.forwardDeclare('org.patternfly.core.Timeouts$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TableSubComponent<HTMLTableRowElement, Tr>}
 * @implements {ComponentContext<HTMLTableRowElement, Tr>}
 * @implements {Expandable<HTMLTableRowElement, Tr>}
 * @implements {HasItems<HTMLTableRowElement, Tr, Cell<?>>}
 * @implements {HasIdentifier<HTMLTableRowElement, Tr>}
 */
class Tr extends TableSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Tbody} @nodts*/
  this.f_tbody__org_patternfly_component_table_Tr;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_table_Tr_;
  /**@type {Map<?string, Cell<?>>} @nodts*/
  this.f_items__org_patternfly_component_table_Tr_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_table_Tr_;
  /**@type {List<ToggleHandler<Tr>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_table_Tr_;
  /**@type {LinkedList<Tr>} @nodts*/
  this.f_children__org_patternfly_component_table_Tr_;
  /**@type {Tr} @nodts*/
  this.f_parent__org_patternfly_component_table_Tr_;
  /**@type {TitleCell} @nodts*/
  this.f_titleCell__org_patternfly_component_table_Tr_;
  /**@type {AsyncStatus} @nodts*/
  this.f_status__org_patternfly_component_table_Tr_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_clickHandler__org_patternfly_component_table_Tr_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_keyHandler__org_patternfly_component_table_Tr_;
  /**@type {j_u_function_Function<Tr, Promise<Iterable<Tr>>>} @nodts*/
  this.f_asyncChildren__org_patternfly_component_table_Tr_;
  /**@type {AurHandler<Tr, Cell<?>>} @nodts*/
  this.f_aur__org_patternfly_component_table_Tr_;
 }
 /** @nodts @return {Tr} */
 static m_tr__java_lang_String__org_patternfly_component_table_Tr(/** ?string */ identifier) {
  Tr.$clinit();
  return Tr.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!Tr} */
 static $create__java_lang_String(/** ?string */ identifier) {
  Tr.$clinit();
  let $instance = new Tr();
  $instance.$ctor__org_patternfly_component_table_Tr__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_Tr__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_table_TableSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(Tr.f_SUB_COMPONENT_ID__org_patternfly_component_table_Tr, Tr.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Tr, /**@type {HTMLTableRowElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(Elements.m_tr__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_tr__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_row__org_patternfly_core_Roles), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)));
  this.f_identifier__org_patternfly_component_table_Tr_ = identifier;
  this.f_items__org_patternfly_component_table_Tr_ = (/**@type {!LinkedHashMap<?string, Cell<?>>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_table_Tr_ = (/**@type {!AurHandler<Tr, Cell<?>>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_data__org_patternfly_component_table_Tr_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_toggleHandler__org_patternfly_component_table_Tr_ = (/**@type {!ArrayList<ToggleHandler<Tr>>}*/ (ArrayList.$create__()));
  this.f_children__org_patternfly_component_table_Tr_ = (/**@type {!LinkedList<Tr>}*/ (LinkedList.$create__()));
  this.f_status__org_patternfly_component_table_Tr_ = AsyncStatus.f_static___org_patternfly_core_AsyncStatus;
  this.m_storeSubComponent__void();
 }
 /** @nodts @return {Tr} */
 m_add__org_patternfly_component_table_Cell__org_patternfly_component_table_Tr(/** Cell<?> */ item) {
  this.f_items__org_patternfly_component_table_Tr_.put(item.m_identifier__java_lang_String(), item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLTableCellElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return /**@type {Tr}*/ ($Casts.$to(this.f_aur__org_patternfly_component_table_Tr_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), Tr));
 }
 /** @nodts @return {Tr} */
 m_addTitleCell__org_patternfly_component_table_TitleCell__org_patternfly_component_table_Tr(/** TitleCell */ titleCell) {
  return this.m_add__org_patternfly_component_table_TitleCell__org_patternfly_component_table_Tr(titleCell);
 }
 /** @nodts @return {Tr} */
 m_add__org_patternfly_component_table_TitleCell__org_patternfly_component_table_Tr(/** TitleCell */ titleCell) {
  this.f_titleCell__org_patternfly_component_table_Tr_ = titleCell;
  this.f_titleCell__org_patternfly_component_table_Tr_.f_tr__org_patternfly_component_table_TitleCell = this;
  return /**@type {Tr}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLTableCellElement}*/ ($Casts.$to(titleCell.m_element__elemental2_dom_HTMLElement(), $Overlay))), Tr));
 }
 /** @nodts @return {Tr} */
 m_addChildren__java_util_function_Function__org_patternfly_component_table_Tr(/** j_u_function_Function<Tr, Promise<Iterable<Tr>>> */ children) {
  return this.m_add__java_util_function_Function__org_patternfly_component_table_Tr(children);
 }
 /** @nodts @return {Tr} */
 m_add__java_util_function_Function__org_patternfly_component_table_Tr(/** j_u_function_Function<Tr, Promise<Iterable<Tr>>> */ children) {
  this.f_status__org_patternfly_component_table_Tr_ = AsyncStatus.f_pending__org_patternfly_core_AsyncStatus;
  this.f_asyncChildren__org_patternfly_component_table_Tr_ = children;
  return this;
 }
 /** @nodts @template T @return {Tr} */
 m_addChildren__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tr(/** Iterable<T> */ items, /** j_u_function_Function<T, Tr> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let tr = /**@type {Tr}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), Tr));
    this.m_addChild__org_patternfly_component_table_Tr__org_patternfly_component_table_Tr(tr);
   }
  }
  return this.m_that__org_patternfly_component_table_Tr();
 }
 /** @nodts @return {Tr} */
 m_addChild__org_patternfly_component_table_Tr__org_patternfly_component_table_Tr(/** Tr */ child) {
  return this.m_add__org_patternfly_component_table_Tr__org_patternfly_component_table_Tr(child);
 }
 /** @nodts @return {Tr} */
 m_add__org_patternfly_component_table_Tr__org_patternfly_component_table_Tr(/** Tr */ child) {
  this.f_children__org_patternfly_component_table_Tr_.add(child);
  if (Elements.m_isAttached__elemental2_dom_Node__boolean(/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)))) {
   let after = this.f_children__org_patternfly_component_table_Tr_.isEmpty() ? /**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)) : /**@type {HTMLTableRowElement}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(this.f_children__org_patternfly_component_table_Tr_.m_getLast__java_lang_Object(), Tr))).m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay));
   this.m_internalAddChild__org_patternfly_component_table_Tr__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_table_Tr(child, after);
  }
  return this;
 }
 /** @nodts @return {Tr} */
 m_clickable__org_patternfly_component_table_Tr() {
  return this.m_clickable__boolean__org_patternfly_component_table_Tr(true);
 }
 /** @nodts @return {Tr} */
 m_clickable__boolean__org_patternfly_component_table_Tr(/** boolean */ clickable) {
  if (clickable) {
   (/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).tabIndex = 0;
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clickable__org_patternfly_style_Classes)], j_l_String)));
   this.f_clickHandler__org_patternfly_component_table_Tr_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    let table = /**@type {Table}*/ ($Casts.$to(this.m_lookupComponent__boolean__org_patternfly_component_BaseComponent(true), Table));
    if (!$Equality.$same(table, null)) {
     table.m_select__org_patternfly_component_table_Tr__void(this);
    }
   });
   this.f_keyHandler__org_patternfly_component_table_Tr_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ e_2) =>{
    let e_3 = /**@type {KeyboardEvent}*/ ($Casts.$to(e_2, KeyboardEvent_$Overlay));
    if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_3) || Key.f_Spacebar__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_3)) {
     e_3.preventDefault();
     let table_1 = /**@type {Table}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Table));
     table_1.m_select__org_patternfly_component_table_Tr__void(this);
    }
   });
  } else {
   (/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).tabIndex = -1;
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clickable__org_patternfly_style_Classes)], j_l_String)));
   if (!$Equality.$same(this.f_clickHandler__org_patternfly_component_table_Tr_, null)) {
    this.f_clickHandler__org_patternfly_component_table_Tr_.m_removeHandler__void();
   }
   if (!$Equality.$same(this.f_keyHandler__org_patternfly_component_table_Tr_, null)) {
    this.f_keyHandler__org_patternfly_component_table_Tr_.m_removeHandler__void();
   }
  }
  return this;
 }
 /** @nodts @template T @return {Tr} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_table_Tr(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_table_Tr_.put(key, value);
  return this;
 }
 /** @nodts @return {Tr} */
 m_that__org_patternfly_component_table_Tr() {
  return this;
 }
 /** @nodts @return {Tr} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_table_Tr(/** AddItemHandler<Tr, Cell<?>> */ onAdd) {
  return /**@type {Tr}*/ ($Casts.$to(this.f_aur__org_patternfly_component_table_Tr_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Tr));
 }
 /** @nodts @return {Tr} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_table_Tr(/** UpdateItemHandler<Tr, Cell<?>> */ onUpdate) {
  return /**@type {Tr}*/ ($Casts.$to(this.f_aur__org_patternfly_component_table_Tr_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Tr));
 }
 /** @nodts @return {Tr} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_table_Tr(/** RemoveItemHandler<Tr, Cell<?>> */ onRemove) {
  return /**@type {Tr}*/ ($Casts.$to(this.f_aur__org_patternfly_component_table_Tr_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Tr));
 }
 /** @nodts @return {Tr} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_table_Tr(/** ToggleHandler<Tr> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_table_Tr_.add(toggleHandler);
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (this.m_expanded__boolean()) {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), /**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), null);
   let allChildren = /**@type {!ArrayList<Tr>}*/ (ArrayList.$create__());
   this.m_collectAllChildren__java_util_List__void_$p_org_patternfly_component_table_Tr(allChildren);
   for (let $iterator = allChildren.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let child = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
    {
     (/**@type {HTMLTableRowElement}*/ ($Casts.$to(child.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).hidden = true;
    }
   }
   if (!$Equality.$same(this.f_titleCell__org_patternfly_component_table_Tr_, null)) {
    this.f_titleCell__org_patternfly_component_table_Tr_.m_collapse__void_$pp_org_patternfly_component_table();
   }
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_table_Tr_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<Tr> */ th) =>{
     let th_1 = /**@type {ToggleHandler<Tr>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
    }));
   }
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  if (!this.m_expanded__boolean()) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), /**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), null);
   let allChildren = /**@type {!ArrayList<Tr>}*/ (ArrayList.$create__());
   this.m_collectAllChildren__java_util_List__void_$p_org_patternfly_component_table_Tr(allChildren);
   for (let $iterator = allChildren.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let child = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
    {
     let parentExpanded = !$Equality.$same(child.f_parent__org_patternfly_component_table_Tr_, null) && Boolean.m_parseBoolean__java_lang_String__boolean((/**@type {HTMLTableRowElement}*/ ($Casts.$to(child.f_parent__org_patternfly_component_table_Tr_.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).getAttribute(Aria.f_expanded__org_patternfly_core_Aria));
     (/**@type {HTMLTableRowElement}*/ ($Casts.$to(child.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).hidden = !parentExpanded;
    }
   }
   if (!$Equality.$same(this.f_titleCell__org_patternfly_component_table_Tr_, null)) {
    this.f_titleCell__org_patternfly_component_table_Tr_.m_expand__void_$pp_org_patternfly_component_table();
   }
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_table_Tr_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<Tr> */ th) =>{
     let th_1 = /**@type {ToggleHandler<Tr>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
    }));
   }
  }
 }
 /** @nodts @return {Promise<Iterable<TreeViewItem>>} */
 m_load__elemental2_promise_Promise() {
  if ($Equality.$same(this.f_status__org_patternfly_component_table_Tr_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus) && !$Equality.$same(this.f_asyncChildren__org_patternfly_component_table_Tr_, null)) {
   let tbl = /**@type {Table}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Table));
   let loadingItem = /**@type {!Array<Tr>}*/ ($Arrays.$create([1], Tr));
   let handle = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
    $Arrays.$set(loadingItem, 0, /**@type {Tr}*/ ($Casts.$to(Tr.f_loading__org_patternfly_component_table_Tr_.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(Integer.valueOf(tbl.m_columns__int_$pp_org_patternfly_component_table()), Integer.valueOf(this.m_currentLevel__int_$p_org_patternfly_component_table_Tr())), Tr)));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLTableRowElement}*/ ($Casts.$to(loadingItem[0].m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), /**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)));
   }, Timeouts.f_LOADING_TIMEOUT__org_patternfly_core_Timeouts, []);
   this.f_children__org_patternfly_component_table_Tr_.clear();
   return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ ((/**@type {!Promise<!Iterable<!Tr>>}*/ ((/**@type {Promise<Iterable<Tr>>}*/ ($Casts.$to(this.f_asyncChildren__org_patternfly_component_table_Tr_.m_apply__java_lang_Object__java_lang_Object(this), Promise_$Overlay))).then(/**  @return {IThenable<Iterable<Tr>>}*/ ((/** Iterable<Tr> */ children) =>{
    let children_1 = /**@type {Iterable<Tr>}*/ ($Casts.$to(children, /**@type {Function}*/ (Iterable)));
    this.f_status__org_patternfly_component_table_Tr_ = AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus;
    goog.global.clearTimeout(handle);
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(loadingItem[0]);
    for (let $iterator = children_1.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let tr = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
     {
      let after = this.f_children__org_patternfly_component_table_Tr_.isEmpty() ? /**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)) : /**@type {HTMLTableRowElement}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(this.f_children__org_patternfly_component_table_Tr_.m_getLast__java_lang_Object(), Tr))).m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay));
      this.m_internalAddChild__org_patternfly_component_table_Tr__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_table_Tr(tr, after);
      this.f_children__org_patternfly_component_table_Tr_.add(tr);
     }
    }
    if (this.f_children__org_patternfly_component_table_Tr_.isEmpty() && !$Equality.$same(this.f_titleCell__org_patternfly_component_table_Tr_, null)) {
     this.f_titleCell__org_patternfly_component_table_Tr_.m_removeToggle__void_$pp_org_patternfly_component_table();
     this.m_collapse__boolean__void(false);
    }
    return /**@type {!Promise<!Iterable<!Tr>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(children_1));
   })))).catch(/**  @return {IThenable<Iterable<TreeViewItem>>}*/ ((/** !* */ error) =>{
    this.f_status__org_patternfly_component_table_Tr_ = AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus;
    goog.global.clearTimeout(handle);
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(loadingItem[0]);
    Tr.f_logger__org_patternfly_component_table_Tr_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to load items for %o - %s: %s', [/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), this.f_identifier__org_patternfly_component_table_Tr_, error]);
    let errorItem = /**@type {Tr}*/ ($Casts.$to(Tr.f_error__org_patternfly_component_table_Tr_.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(Integer.valueOf(tbl.m_columns__int_$pp_org_patternfly_component_table()), Integer.valueOf(this.m_currentLevel__int_$p_org_patternfly_component_table_Tr())), Tr));
    this.m_internalAddChild__org_patternfly_component_table_Tr__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_table_Tr(errorItem, /**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)));
    this.f_children__org_patternfly_component_table_Tr_.add(errorItem);
    return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (Promise.reject(error));
   })));
  } else {
   return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {List<TreeViewItem>}*/ (Collections.m_emptyList__java_util_List())));
  }
 }
 /** @nodts */
 m_reset__void() {
  if ($Equality.$same(this.f_status__org_patternfly_component_table_Tr_, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_component_table_Tr_, AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus)) {
   this.f_status__org_patternfly_component_table_Tr_ = AsyncStatus.f_pending__org_patternfly_core_AsyncStatus;
   this.m_collapse__boolean__void(false);
   for (let $iterator = this.f_children__org_patternfly_component_table_Tr_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let child = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
    {
     Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(child);
     child.m_reset__void();
    }
   }
   this.f_children__org_patternfly_component_table_Tr_.clear();
   if (!$Equality.$same(this.f_titleCell__org_patternfly_component_table_Tr_, null)) {
    this.f_titleCell__org_patternfly_component_table_Tr_.m_addToggle__void_$pp_org_patternfly_component_table();
   }
  }
 }
 /** @override @nodts @return {Iterator<Cell<?>>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_table_Tr_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_table_Tr_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_table_Tr_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_table_Tr_.containsKey(identifier);
 }
 /** @nodts @return {Cell<?>} */
 m_item__java_lang_String__org_patternfly_component_table_Cell(/** ?string */ identifier) {
  return /**@type {Cell<TypedBuilder>}*/ ($Casts.$to(this.f_items__org_patternfly_component_table_Tr_.get(identifier), Cell));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_table_Cell__void(/** Cell<?> */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** Cell<?> */ oldItem, /** Cell<?> */ newItem) =>{
   let oldItem_1 = /**@type {Cell<TypedBuilder>}*/ ($Casts.$to(oldItem, Cell));
   let newItem_1 = /**@type {Cell<TypedBuilder>}*/ ($Casts.$to(newItem, Cell));
   this.f_items__org_patternfly_component_table_Tr_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_table_Tr_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {Cell<TypedBuilder>}*/ ($Casts.$to(this.f_items__org_patternfly_component_table_Tr_.remove(identifier), Cell));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_table_Tr_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)));
  let iterator = this.f_items__org_patternfly_component_table_Tr_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {Cell<TypedBuilder>}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), Cell));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_table_Tr_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_table_Tr_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_table_Tr_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_table_Tr_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_table_Tr_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_table(/** boolean */ selected) {
  let checkbox = /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_data__java_lang_String__org_jboss_elemento_By(Td.f_CHECKBOX_DATA_MARKER__org_patternfly_component_table_Td)), HTMLInputElement_$Overlay));
  if (!$Equality.$same(checkbox, null)) {
   checkbox.checked = selected;
  } else {
   this.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes), selected);
  }
  if (selected) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Row selected');
  } else {
   (/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).removeAttribute(Aria.f_label__org_patternfly_core_Aria);
  }
 }
 /** @nodts @return {boolean} */
 m_isSelected__boolean_$pp_org_patternfly_component_table() {
  let checkbox = /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_data__java_lang_String__org_jboss_elemento_By(Td.f_CHECKBOX_DATA_MARKER__org_patternfly_component_table_Td)), HTMLInputElement_$Overlay));
  if (!$Equality.$same(checkbox, null)) {
   return checkbox.checked;
  } else {
   return (/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes));
  }
 }
 /** @nodts */
 m_finishChildren__void_$pp_org_patternfly_component_table() {
  if (!this.f_children__org_patternfly_component_table_Tr_.isEmpty()) {
   for (let $iterator = this.f_children__org_patternfly_component_table_Tr_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let child = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
    {
     this.m_internalAddChild__org_patternfly_component_table_Tr__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_table_Tr(child, /**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)));
     child.m_finishChildren__void_$pp_org_patternfly_component_table();
     if (!$Equality.$same(this.f_titleCell__org_patternfly_component_table_Tr_, null)) {
      this.f_titleCell__org_patternfly_component_table_Tr_.m_addToggle__void_$pp_org_patternfly_component_table();
     }
    }
   }
  } else if ($Equality.$same(this.f_status__org_patternfly_component_table_Tr_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus) && !$Equality.$same(this.f_asyncChildren__org_patternfly_component_table_Tr_, null)) {
   if (!$Equality.$same(this.f_titleCell__org_patternfly_component_table_Tr_, null)) {
    this.f_titleCell__org_patternfly_component_table_Tr_.m_addToggle__void_$pp_org_patternfly_component_table();
   }
  }
 }
 /** @nodts */
 m_collectAllChildren__java_util_List__void_$p_org_patternfly_component_table_Tr(/** List<Tr> */ allChildren) {
  allChildren.addAll(this.f_children__org_patternfly_component_table_Tr_);
  for (let $iterator = this.f_children__org_patternfly_component_table_Tr_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let child = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
   {
    child.m_collectAllChildren__java_util_List__void_$p_org_patternfly_component_table_Tr(allChildren);
   }
  }
 }
 /** @nodts */
 m_internalAddChild__org_patternfly_component_table_Tr__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_table_Tr(/** Tr */ child, /** HTMLElement */ after) {
  child.f_tbody__org_patternfly_component_table_Tr = this.f_tbody__org_patternfly_component_table_Tr;
  child.f_parent__org_patternfly_component_table_Tr_ = this;
  (/**@type {HTMLTableRowElement}*/ ($Casts.$to(child.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).hidden = !Boolean.m_parseBoolean__java_lang_String__boolean((/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).getAttribute(Aria.f_expanded__org_patternfly_core_Aria));
  let currentLevel = this.m_currentLevel__int_$p_org_patternfly_component_table_Tr();
  if (currentLevel > 0) {
   child.m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_level__org_patternfly_core_Aria, currentLevel + 1 | 0);
  }
  Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLTableRowElement}*/ ($Casts.$to(child.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay)), after);
 }
 /** @nodts @return {number} */
 m_currentLevel__int_$p_org_patternfly_component_table_Tr() {
  let level = -1;
  let attribute = (/**@type {HTMLTableRowElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableRowElement_$Overlay))).getAttribute('aria-level');
  try {
   level = Integer.m_parseInt__java_lang_String__int(attribute);
  } catch (__$jsexc) {
   let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
   if (NumberFormatException.$isInstance(__$exc)) {} else {
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
   }
  }
  return level;
 }
 //Bridge method.
 /** @final @override @nodts @return {Tr} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_table_Tr();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Tr} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_table_Tr(arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ arg0, /** T */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ arg0, /** Supplier<T> */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<Cell<?>>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<Cell<?>>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Tr} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, Cell<?>> */ arg1) {
  return /**@type {Tr}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Tr));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tr} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** Cell<?> */ arg0) {
  return /**@type {Tr}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {Cell<TypedBuilder>}*/ ($Casts.$to(arg0, Cell))), Tr));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tr} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** Cell<?> */ arg0) {
  return this.m_add__org_patternfly_component_table_Cell__org_patternfly_component_table_Tr(/**@type {Cell<TypedBuilder>}*/ ($Casts.$to(arg0, Cell)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tr} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Tr, Cell<?>> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_table_Tr(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<Cell<?>>} */
 m_items__java_util_List() {
  return /**@type {List<Cell<?>>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Cell<?>} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_table_Cell(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, Cell<?>> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** Cell<?> */ arg0) {
  this.m_updateItem__org_patternfly_component_table_Cell__void(/**@type {Cell<TypedBuilder>}*/ ($Casts.$to(arg0, Cell)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tr} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Tr, Cell<?>> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_table_Tr(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** Cell<?> */ arg0, /** BiConsumer<Cell<?>, Cell<?>> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {Cell<TypedBuilder>}*/ ($Casts.$to(arg0, Cell)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tr} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Tr, Cell<?>> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_table_Tr(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {Tr} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tr(/** Iterable<T> */ arg0, /** j_u_function_Function<T, Cell<?>> */ arg1) {
  return /**@type {Tr}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Tr));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tr} */
 m_addItem__org_patternfly_component_table_Cell__org_patternfly_component_table_Tr(/** Cell<?> */ arg0) {
  return /**@type {Tr}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), Tr));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_table_Cell__java_util_function_BiConsumer__void(/** Cell<?> */ arg0, /** BiConsumer<Cell<?>, Cell<?>> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  Tr.$clinit = () =>{};
  Tr.$loadModules();
  TableSubComponent.$clinit();
  ComponentContext.$clinit();
  Expandable.$clinit();
  HasItems.$clinit();
  Tr.f_logger__org_patternfly_component_table_Tr_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Tr).m_getName__java_lang_String());
  Tr.f_loading__org_patternfly_component_table_Tr_ = BiFunction.$adapt(/**  @return {Tr}*/ ((/** Integer */ colspan, /** Integer */ level) =>{
   let colspan_1 = /**@type {Integer}*/ ($Casts.$to(colspan, Integer));
   let level_1 = /**@type {Integer}*/ ($Casts.$to(level, Integer));
   return (/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Tr.f_SUB_COMPONENT_ID__org_patternfly_component_table_Tr, 'loading'], j_l_String)))).m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_level__org_patternfly_core_Aria, level_1.intValue()), Tr))).m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_setsize__org_patternfly_core_Aria, 1), Tr))).m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_posinset__org_patternfly_core_Aria, 1), Tr))).m_addTitleCell__org_patternfly_component_table_TitleCell__org_patternfly_component_table_Tr(/**@type {TitleCell}*/ ($Casts.$to((/**@type {TitleCell}*/ ($Casts.$to(TitleCell.m_titleCell__org_patternfly_component_table_TitleCell().m_colSpan__int__org_jboss_elemento_TypedBuilder(colspan_1.intValue()), TitleCell))).m_icon__elemental2_dom_Element__org_patternfly_component_table_TitleCell(Spinner.m_spinner__org_patternfly_style_Size__java_lang_String__org_patternfly_component_spinner_Spinner(Size.f_md__org_patternfly_style_Size, 'Loading').m_element__org_jboss_elemento_svg_SVGElement()).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Loading'), TitleCell)));
  }));
  Tr.f_error__org_patternfly_component_table_Tr_ = BiFunction.$adapt(/**  @return {Tr}*/ ((/** Integer */ colspan_2, /** Integer */ level_2) =>{
   let colspan_3 = /**@type {Integer}*/ ($Casts.$to(colspan_2, Integer));
   let level_3 = /**@type {Integer}*/ ($Casts.$to(level_2, Integer));
   return (/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_TreeView__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Tr.f_SUB_COMPONENT_ID__org_patternfly_component_table_Tr, 'error'], j_l_String)))).m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_level__org_patternfly_core_Aria, level_3.intValue()), Tr))).m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_setsize__org_patternfly_core_Aria, 1), Tr))).m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_posinset__org_patternfly_core_Aria, 1), Tr))).m_addTitleCell__org_patternfly_component_table_TitleCell__org_patternfly_component_table_Tr(/**@type {TitleCell}*/ ($Casts.$to((/**@type {TitleCell}*/ ($Casts.$to((/**@type {TitleCell}*/ ($Casts.$to(TitleCell.m_titleCell__org_patternfly_component_table_TitleCell().m_colSpan__int__org_jboss_elemento_TypedBuilder(colspan_3.intValue()), TitleCell))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_errorFill__org_patternfly_icon_PredefinedIcon()), TitleCell))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Error'), TitleCell)));
  }));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tr;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  Cell = goog.module.get('org.patternfly.component.table.Cell$impl');
  Table = goog.module.get('org.patternfly.component.table.Table$impl');
  Td = goog.module.get('org.patternfly.component.table.Td$impl');
  TitleCell = goog.module.get('org.patternfly.component.table.TitleCell$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  AsyncStatus = goog.module.get('org.patternfly.core.AsyncStatus$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Timeouts = goog.module.get('org.patternfly.core.Timeouts$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Tr.f_SUB_COMPONENT_ID__org_patternfly_component_table_Tr = 'tr';
/**@const {string} @nodts*/
Tr.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Tr = 'Tr';
/**@type {Logger} @nodts*/
Tr.f_logger__org_patternfly_component_table_Tr_;
/**@type {BiFunction<Integer, Integer, Tr>} @nodts*/
Tr.f_loading__org_patternfly_component_table_Tr_;
/**@type {BiFunction<Integer, Integer, Tr>} @nodts*/
Tr.f_error__org_patternfly_component_table_Tr_;
ComponentContext.$markImplementor(Tr);
Expandable.$markImplementor(Tr);
HasItems.$markImplementor(Tr);
HasIdentifier.$markImplementor(Tr);
$Util.$setClassMetadata(Tr, 'org.patternfly.component.table.Tr');

exports = Tr;

//# sourceMappingURL=Tr.js.map
