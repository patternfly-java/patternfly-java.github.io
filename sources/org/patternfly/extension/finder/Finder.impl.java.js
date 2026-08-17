goog.module('org.patternfly.extension.finder.Finder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Bordered = goog.require('org.patternfly.style.Modifiers.Bordered$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Flow = goog.forwardDeclare('org.jboss.elemento.flow.Flow$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');
let Sequence = goog.forwardDeclare('org.jboss.elemento.flow.Sequence$impl');
let Task = goog.forwardDeclare('org.jboss.elemento.flow.Task$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let FinderColumn = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumn$impl');
let FinderItem = goog.forwardDeclare('org.patternfly.extension.finder.FinderItem$impl');
let FinderPath = goog.forwardDeclare('org.patternfly.extension.finder.FinderPath$impl');
let FinderPreview = goog.forwardDeclare('org.patternfly.extension.finder.FinderPreview$impl');
let FinderSegment = goog.forwardDeclare('org.patternfly.extension.finder.FinderSegment$impl');
let ResolvedFinderPath = goog.forwardDeclare('org.patternfly.extension.finder.ResolvedFinderPath$impl');
let ResolvedFinderSegment = goog.forwardDeclare('org.patternfly.extension.finder.ResolvedFinderSegment$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Finder>}
 * @implements {Attachable}
 * @implements {Bordered<HTMLElement, Finder>}
 * @implements {HasItems<HTMLElement, Finder, FinderColumn>}
 */
class Finder extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {FinderPreview} @nodts*/
  this.f_preview__org_patternfly_extension_finder_Finder;
  /**@type {Map<?string, FinderColumn>} @nodts*/
  this.f_items__org_patternfly_extension_finder_Finder_;
  /**@type {AurHandler<Finder, FinderColumn>} @nodts*/
  this.f_aur__org_patternfly_extension_finder_Finder_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_cc__org_patternfly_extension_finder_Finder_;
  /**@type {FinderColumn} @nodts*/
  this.f_activeColumn__org_patternfly_extension_finder_Finder_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_keydownHandler__org_patternfly_extension_finder_Finder_;
 }
 /** @nodts @return {Finder} */
 static m_finder__org_patternfly_extension_finder_Finder() {
  Finder.$clinit();
  return Finder.$create__();
 }
 /** @nodts @return {!Finder} */
 static $create__() {
  Finder.$clinit();
  let $instance = new Finder();
  $instance.$ctor__org_patternfly_extension_finder_Finder__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_Finder__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Finder__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'finder'), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_extension_finder_Finder_ = (/**@type {!LinkedHashMap<?string, FinderColumn>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_extension_finder_Finder_ = (/**@type {!AurHandler<Finder, FinderColumn>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_cc__org_patternfly_extension_finder_Finder_ = (/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderClasses.f_columns__org_patternfly_extension_finder_FinderClasses], j_l_String)))], j_l_String))), HTMLContainerBuilder))));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_keydownHandler__org_patternfly_extension_finder_Finder_ = EventType.m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this, EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ arg0) =>{
   let arg0_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0, KeyboardEvent_$Overlay));
   this.m_handleKeydown__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_extension_finder_Finder(arg0_1);
  });
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_keydownHandler__org_patternfly_extension_finder_Finder_, null)) {
   this.f_keydownHandler__org_patternfly_extension_finder_Finder_.m_removeHandler__void();
  }
 }
 /** @nodts @template T @return {Finder} */
 m_addColumns__java_lang_Iterable__java_util_function_Function__org_patternfly_extension_finder_Finder(/** Iterable<T> */ items, /** j_u_function_Function<T, FinderColumn> */ display) {
  return /**@type {Finder}*/ ($Casts.$to(this.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(items, display), Finder));
 }
 /** @nodts @return {Finder} */
 m_addColumn__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_Finder(/** FinderColumn */ column) {
  return /**@type {Finder}*/ ($Casts.$to(this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(column), Finder));
 }
 /** @nodts @return {Finder} */
 m_add__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_Finder(/** FinderColumn */ item) {
  this.m_internalAdd__org_patternfly_extension_finder_FinderColumn__void_$p_org_patternfly_extension_finder_Finder(item);
  item.m_load__elemental2_promise_Promise();
  return this;
 }
 /** @nodts @return {Finder} */
 m_addPreview__org_patternfly_extension_finder_FinderPreview__org_patternfly_extension_finder_Finder(/** FinderPreview */ preview) {
  return this.m_add__org_patternfly_extension_finder_FinderPreview__org_patternfly_extension_finder_Finder(preview);
 }
 /** @nodts @return {Finder} */
 m_add__org_patternfly_extension_finder_FinderPreview__org_patternfly_extension_finder_Finder(/** FinderPreview */ preview) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_preview__org_patternfly_extension_finder_Finder);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(preview.m_element__elemental2_dom_HTMLElement());
  this.f_preview__org_patternfly_extension_finder_Finder = preview;
  return this;
 }
 /** @nodts @return {Finder} */
 m_that__org_patternfly_extension_finder_Finder() {
  return this;
 }
 /** @nodts @return {Finder} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_extension_finder_Finder(/** AddItemHandler<Finder, FinderColumn> */ onAdd) {
  return /**@type {Finder}*/ ($Casts.$to(this.f_aur__org_patternfly_extension_finder_Finder_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Finder));
 }
 /** @nodts @return {Finder} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_extension_finder_Finder(/** UpdateItemHandler<Finder, FinderColumn> */ onUpdate) {
  return /**@type {Finder}*/ ($Casts.$to(this.f_aur__org_patternfly_extension_finder_Finder_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Finder));
 }
 /** @nodts @return {Finder} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_extension_finder_Finder(/** RemoveItemHandler<Finder, FinderColumn> */ onRemove) {
  return /**@type {Finder}*/ ($Casts.$to(this.f_aur__org_patternfly_extension_finder_Finder_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Finder));
 }
 /** @nodts @return {ResolvedFinderPath} */
 m_path__org_patternfly_extension_finder_ResolvedFinderPath() {
  let segments = /**@type {!LinkedList<ResolvedFinderSegment>}*/ (LinkedList.$create__());
  for (let $iterator = this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let column = /**@type {FinderColumn}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderColumn));
   {
    let selectedItem = column.m_selectedItem__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder();
    if (!$Equality.$same(selectedItem, null)) {
     segments.add(ResolvedFinderSegment.$create__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem(column, selectedItem));
    } else {
     segments.add(ResolvedFinderSegment.$create__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem(column, null));
     break;
    }
   }
  }
  return ResolvedFinderPath.$create__java_util_List(segments);
 }
 /** @nodts @return {ResolvedFinderPath} */
 m_activePath__org_patternfly_extension_finder_ResolvedFinderPath() {
  let segments = /**@type {!LinkedList<ResolvedFinderSegment>}*/ (LinkedList.$create__());
  for (let $iterator = this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let column = /**@type {FinderColumn}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderColumn));
   {
    let selectedItem = column.m_selectedItem__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder();
    if (!$Equality.$same(selectedItem, null)) {
     segments.add(ResolvedFinderSegment.$create__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem(column, selectedItem));
    } else {
     segments.add(ResolvedFinderSegment.$create__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem(column, null));
     break;
    }
    if ($Equality.$same(column, this.f_activeColumn__org_patternfly_extension_finder_Finder_)) {
     break;
    }
   }
  }
  return ResolvedFinderPath.$create__java_util_List(segments);
 }
 /** @nodts @return {Promise<ResolvedFinderPath>} */
 m_select__java_lang_String__elemental2_promise_Promise(/** ?string */ path) {
  return this.m_select__org_patternfly_extension_finder_FinderPath__elemental2_promise_Promise(FinderPath.m_parse__java_lang_String__org_patternfly_extension_finder_FinderPath(path));
 }
 /** @nodts @return {Promise<ResolvedFinderPath>} */
 m_select__org_patternfly_extension_finder_FinderPath__elemental2_promise_Promise(/** FinderPath */ path) {
  if ($Equality.$same(path, null) || path.m_isEmpty__boolean()) {
   return /**@type {!Promise<!ResolvedFinderPath>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(this.m_path__org_patternfly_extension_finder_ResolvedFinderPath()));
  }
  let context = FlowContext.$create__();
  let tasks = /**@type {!ArrayList<Task<FlowContext>>}*/ (ArrayList.$create__());
  for (let $iterator = path.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let segment = /**@type {FinderSegment}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderSegment));
   {
    tasks.add(Task.$adapt(/**  @return {Promise<FlowContext>}*/ ((/** FlowContext */ ctx) =>{
     return this.m_selectSegment__java_lang_String__java_lang_String__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise_$p_org_patternfly_extension_finder_Finder(segment.f_columnId__org_patternfly_extension_finder_FinderSegment, segment.f_itemId__org_patternfly_extension_finder_FinderSegment, ctx);
    })));
   }
  }
  return /**@type {Promise<ResolvedFinderPath>}*/ ((/**@type {Sequence<FlowContext>}*/ (Flow.m_sequential__org_jboss_elemento_flow_FlowContext__java_util_List__org_jboss_elemento_flow_Sequence(context, tasks))).m_then__elemental2_promise_IThenable_ThenOnFulfilledCallbackFn__elemental2_promise_Promise(/**  @return {IThenable<ResolvedFinderPath>}*/ ((/** FlowContext */ ctx_1) =>{
   let ctx_2 = /**@type {FlowContext}*/ ($Casts.$to(ctx_1, FlowContext));
   this.m_fireSelectAndPreview__void_$p_org_patternfly_extension_finder_Finder();
   return /**@type {!Promise<!ResolvedFinderPath>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(this.m_path__org_patternfly_extension_finder_ResolvedFinderPath()));
  })));
 }
 /** @override @nodts @return {Iterator<FinderColumn>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_extension_finder_Finder_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_extension_finder_Finder_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_extension_finder_Finder_.containsKey(identifier);
 }
 /** @nodts @return {FinderColumn} */
 m_item__java_lang_String__org_patternfly_extension_finder_FinderColumn(/** ?string */ identifier) {
  return /**@type {FinderColumn}*/ ($Casts.$to(this.f_items__org_patternfly_extension_finder_Finder_.get(identifier), FinderColumn));
 }
 /** @nodts */
 m_updateItem__org_patternfly_extension_finder_FinderColumn__void(/** FinderColumn */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** FinderColumn */ oldItem, /** FinderColumn */ newItem) =>{
   let oldItem_1 = /**@type {FinderColumn}*/ ($Casts.$to(oldItem, FinderColumn));
   let newItem_1 = /**@type {FinderColumn}*/ ($Casts.$to(newItem, FinderColumn));
   this.f_items__org_patternfly_extension_finder_Finder_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_extension_finder_Finder_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {FinderColumn}*/ ($Casts.$to(this.f_items__org_patternfly_extension_finder_Finder_.remove(identifier), FinderColumn));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_extension_finder_Finder_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_cc__org_patternfly_extension_finder_Finder_);
  let iterator = this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {FinderColumn}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), FinderColumn));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_extension_finder_Finder_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_internalAdd__org_patternfly_extension_finder_FinderColumn__void_$p_org_patternfly_extension_finder_Finder(/** FinderColumn */ column) {
  column.f_finder__org_patternfly_extension_finder_FinderColumn = this;
  this.f_cc__org_patternfly_extension_finder_Finder_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(column.m_element__elemental2_dom_HTMLElement());
  this.f_items__org_patternfly_extension_finder_Finder_.put(column.m_identifier__java_lang_String(), column);
  this.f_aur__org_patternfly_extension_finder_Finder_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(column);
 }
 /** @nodts */
 m_fireSelectAndPreview__void_$p_org_patternfly_extension_finder_Finder() {
  let /** FinderColumn */ lastColumn = null;
  let /** FinderItem */ lastItem = null;
  for (let $iterator = this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let column = /**@type {FinderColumn}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderColumn));
   {
    let selected = column.m_selectedItem__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder();
    if (!$Equality.$same(selected, null)) {
     lastColumn = column;
     lastItem = selected;
    } else {
     break;
    }
   }
  }
  if (!$Equality.$same(lastColumn, null) && !$Equality.$same(lastItem, null)) {
   lastColumn.m_fireSelect__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(lastItem);
   lastItem.m_previewItem__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(this, lastColumn, lastItem);
  }
 }
 /** @nodts @return {Promise<FlowContext>} */
 m_selectSegment__java_lang_String__java_lang_String__org_jboss_elemento_flow_FlowContext__elemental2_promise_Promise_$p_org_patternfly_extension_finder_Finder(/** ?string */ columnId, /** ?string */ itemId, /** FlowContext */ context) {
  if (!$Equality.$same(context.m_get__java_lang_String__java_lang_Object(Finder.f_STOP_SELECT_KEY__org_patternfly_extension_finder_Finder_), null)) {
   return /**@type {Promise<FlowContext>}*/ (context.m_resolve__elemental2_promise_Promise());
  }
  let column = /**@type {FinderColumn}*/ ($Casts.$to(this.f_items__org_patternfly_extension_finder_Finder_.get(columnId), FinderColumn));
  if ($Equality.$same(column, null)) {
   context.m_set__java_lang_String__java_lang_Object__void(Finder.f_STOP_SELECT_KEY__org_patternfly_extension_finder_Finder_, true);
   return /**@type {Promise<FlowContext>}*/ (context.m_resolve__elemental2_promise_Promise());
  }
  return /**@type {!Promise<!FlowContext>}*/ (column.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<FlowContext>}*/ ((/** Iterable<FinderItem> */ __) =>{
   let ___1 = /**@type {Iterable<FinderItem>}*/ ($Casts.$to(__, /**@type {Function}*/ (Iterable)));
   this.m_select__org_patternfly_extension_finder_FinderColumn__void_$pp_org_patternfly_extension_finder(column);
   if ($Equality.$same(itemId, null)) {
    context.m_set__java_lang_String__java_lang_Object__void(Finder.f_STOP_SELECT_KEY__org_patternfly_extension_finder_Finder_, true);
    return /**@type {Promise<FlowContext>}*/ (context.m_resolve__elemental2_promise_Promise());
   }
   let item = column.m_findItem__java_lang_String__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(itemId);
   if ($Equality.$same(item, null)) {
    context.m_set__java_lang_String__java_lang_Object__void(Finder.f_STOP_SELECT_KEY__org_patternfly_extension_finder_Finder_, true);
    return /**@type {Promise<FlowContext>}*/ (context.m_resolve__elemental2_promise_Promise());
   }
   column.m_select__org_patternfly_extension_finder_FinderItem__boolean__boolean__void(item, true, false);
   let nextColumn = item.m_supplyNextColumn__org_patternfly_extension_finder_FinderColumn_$pp_org_patternfly_extension_finder();
   if (!$Equality.$same(nextColumn, null)) {
    this.m_internalAdd__org_patternfly_extension_finder_FinderColumn__void_$p_org_patternfly_extension_finder_Finder(nextColumn);
   }
   return /**@type {Promise<FlowContext>}*/ (context.m_resolve__elemental2_promise_Promise());
  })));
 }
 /** @nodts */
 m_select__org_patternfly_extension_finder_FinderColumn__void_$pp_org_patternfly_extension_finder(/** FinderColumn */ column) {
  this.m_markActive__org_patternfly_extension_finder_FinderColumn__void_$pp_org_patternfly_extension_finder(column);
  let found = false;
  let iterator = this.f_items__org_patternfly_extension_finder_Finder_.entrySet().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let entry = /**@type {Entry<?string, FinderColumn>}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
   if (found) {
    let removeColumn = /**@type {FinderColumn}*/ ($Casts.$to(entry.getValue(), FinderColumn));
    for (let $iterator = removeColumn.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let item = /**@type {FinderItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderItem));
     {
      item.m_markSelected__boolean__void_$pp_org_patternfly_extension_finder(false);
     }
    }
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(removeColumn);
    iterator.m_remove__void();
    this.f_aur__org_patternfly_extension_finder_Finder_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(removeColumn);
   } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(/**@type {?string}*/ ($Casts.$to(entry.getKey(), j_l_String)), column.m_identifier__java_lang_String())) {
    found = true;
   }
  }
 }
 /** @nodts */
 m_markActive__org_patternfly_extension_finder_FinderColumn__void_$pp_org_patternfly_extension_finder(/** FinderColumn */ column) {
  for (let $iterator = this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let c = /**@type {FinderColumn}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderColumn));
   {
    c.m_active__boolean__org_patternfly_extension_finder_FinderColumn(false);
   }
  }
  column.m_active__boolean__org_patternfly_extension_finder_FinderColumn(true);
  this.f_activeColumn__org_patternfly_extension_finder_Finder_ = column;
 }
 /** @nodts */
 m_handleKeydown__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_extension_finder_Finder(/** KeyboardEvent */ event) {
  let target = /**@type {HTMLElement}*/ ($Casts.$to(event.target, HTMLElement_$Overlay));
  let itemElement = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(target, By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))));
  if ($Equality.$same(itemElement, null)) {
   return;
  }
  let item = this.m_findItem__java_lang_String__org_patternfly_extension_finder_FinderItem_$p_org_patternfly_extension_finder_Finder(/**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(itemElement.dataset, Dataset.f_identifier__org_patternfly_core_Dataset), j_l_String)));
  if ($Equality.$same(item, null) || $Equality.$same(item.f_column__org_patternfly_extension_finder_FinderItem, null)) {
   return;
  }
  let column = item.f_column__org_patternfly_extension_finder_FinderItem;
  if (Key.f_ArrowDown__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
   event.preventDefault();
   let nextItem = column.m_nextItem__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(item);
   if (!$Equality.$same(nextItem, null)) {
    nextItem.m_handleClick__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(this, column, nextItem);
    nextItem.m_element__elemental2_dom_HTMLElement().focus();
   }
  } else if (Key.f_ArrowUp__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
   event.preventDefault();
   let previousItem = column.m_previousItem__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(item);
   if (!$Equality.$same(previousItem, null)) {
    previousItem.m_handleClick__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(this, column, previousItem);
    previousItem.m_element__elemental2_dom_HTMLElement().focus();
   }
  } else if (Key.f_ArrowLeft__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
   event.preventDefault();
   let previousColumn = this.m_previousColumn__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderColumn_$p_org_patternfly_extension_finder_Finder(column);
   if (!$Equality.$same(previousColumn, null)) {
    let targetItem = previousColumn.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))).m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes))));
    if (!$Equality.$same(targetItem, null)) {
     this.m_markActive__org_patternfly_extension_finder_FinderColumn__void_$pp_org_patternfly_extension_finder(previousColumn);
     targetItem.focus();
     this.m_scrollIntoView__org_patternfly_extension_finder_FinderColumn__void_$p_org_patternfly_extension_finder_Finder(previousColumn);
     let previousItem_1 = previousColumn.m_item__java_lang_String__org_patternfly_extension_finder_FinderItem(/**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(targetItem.dataset, Dataset.f_identifier__org_patternfly_core_Dataset), j_l_String)));
     if (!$Equality.$same(previousItem_1, null)) {
      previousColumn.m_fireSelect__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(previousItem_1);
      previousItem_1.m_previewItem__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(this, previousColumn, previousItem_1);
     }
    }
   }
  } else if (Key.f_ArrowRight__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
   event.preventDefault();
   if (item.m_hasNext__boolean_$pp_org_patternfly_extension_finder()) {
    let nextColumn = this.m_nextColumn__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderColumn_$p_org_patternfly_extension_finder_Finder(column);
    if (!$Equality.$same(nextColumn, null)) {
     let /** FinderItem */ targetItem_1 = null;
     if (!nextColumn.m_visibleItems__java_util_List_$pp_org_patternfly_extension_finder().isEmpty()) {
      targetItem_1 = (/**@type {FinderItem}*/ ($Casts.$to(nextColumn.m_visibleItems__java_util_List_$pp_org_patternfly_extension_finder().getAtIndex(0), FinderItem)));
     }
     if (!$Equality.$same(targetItem_1, null)) {
      targetItem_1.m_handleClick__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(this, nextColumn, targetItem_1);
      targetItem_1.m_element__elemental2_dom_HTMLElement().focus();
      this.m_scrollIntoView__org_patternfly_extension_finder_FinderColumn__void_$p_org_patternfly_extension_finder_Finder(nextColumn);
     }
    }
   }
  }
 }
 /** @nodts @return {FinderColumn} */
 m_previousColumn__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderColumn_$p_org_patternfly_extension_finder_Finder(/** FinderColumn */ column) {
  let /** FinderColumn */ previous = null;
  for (let $iterator = this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let c = /**@type {FinderColumn}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderColumn));
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(c.m_identifier__java_lang_String(), column.m_identifier__java_lang_String())) {
     return previous;
    }
    previous = c;
   }
  }
  return null;
 }
 /** @nodts @return {FinderColumn} */
 m_nextColumn__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderColumn_$p_org_patternfly_extension_finder_Finder(/** FinderColumn */ column) {
  let found = false;
  for (let $iterator = this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let c = /**@type {FinderColumn}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderColumn));
   {
    if (found) {
     return c;
    }
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(c.m_identifier__java_lang_String(), column.m_identifier__java_lang_String())) {
     found = true;
    }
   }
  }
  return null;
 }
 /** @nodts */
 m_scrollIntoView__org_patternfly_extension_finder_FinderColumn__void_$p_org_patternfly_extension_finder_Finder(/** FinderColumn */ column) {
  goog.global.requestAnimationFrame((/** number */ __) =>{
   let container = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_cc__org_patternfly_extension_finder_Finder_.m_element__elemental2_dom_HTMLElement(), $Overlay));
   let columnElement = column.m_element__elemental2_dom_HTMLElement();
   let colLeft = columnElement.offsetLeft;
   let colRight = colLeft + columnElement.offsetWidth | 0;
   let scrollLeft = container.scrollLeft;
   let viewWidth = container.clientWidth;
   if (colLeft < scrollLeft) {
    container.scrollLeft = colLeft;
   } else if (colRight > scrollLeft + viewWidth) {
    container.scrollLeft = colRight - viewWidth | 0;
   }
  });
 }
 /** @nodts @return {FinderItem} */
 m_findItem__java_lang_String__org_patternfly_extension_finder_FinderItem_$p_org_patternfly_extension_finder_Finder(/** ?string */ identifier) {
  if (!$Equality.$same(identifier, null)) {
   for (let $iterator = this.f_items__org_patternfly_extension_finder_Finder_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let column = /**@type {FinderColumn}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderColumn));
    {
     let item = column.m_findItem__java_lang_String__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(identifier);
     if (!$Equality.$same(item, null)) {
      return item;
     }
    }
   }
  }
  return null;
 }
 //Bridge method.
 /** @final @override @nodts @return {Finder} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_Finder();
 }
 //Bridge method.
 /** @final @override @nodts @return {Finder} */
 m_bordered__org_jboss_elemento_TypedBuilder() {
  return /**@type {Finder}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), Finder));
 }
 //Bridge method.
 /** @final @override @nodts @return {Finder} */
 m_bordered__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Finder}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Finder));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<FinderColumn>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<FinderColumn>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Finder} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, FinderColumn> */ arg1) {
  return /**@type {Finder}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Finder));
 }
 //Bridge method.
 /** @final @override @nodts @return {Finder} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** FinderColumn */ arg0) {
  return /**@type {Finder}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {FinderColumn}*/ ($Casts.$to(arg0, FinderColumn))), Finder));
 }
 //Bridge method.
 /** @final @override @nodts @return {Finder} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** FinderColumn */ arg0) {
  return this.m_add__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_Finder(/**@type {FinderColumn}*/ ($Casts.$to(arg0, FinderColumn)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Finder} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Finder, FinderColumn> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_extension_finder_Finder(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<FinderColumn>} */
 m_items__java_util_List() {
  return /**@type {List<FinderColumn>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_extension_finder_FinderColumn(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, FinderColumn> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** FinderColumn */ arg0) {
  this.m_updateItem__org_patternfly_extension_finder_FinderColumn__void(/**@type {FinderColumn}*/ ($Casts.$to(arg0, FinderColumn)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Finder} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Finder, FinderColumn> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_extension_finder_Finder(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** FinderColumn */ arg0, /** BiConsumer<FinderColumn, FinderColumn> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {FinderColumn}*/ ($Casts.$to(arg0, FinderColumn)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Finder} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Finder, FinderColumn> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_extension_finder_Finder(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Finder} */
 m_bordered__org_patternfly_extension_finder_Finder() {
  return /**@type {Finder}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), Finder));
 }
 //Default method forwarding stub.
 /** @nodts @return {Finder} */
 m_bordered__boolean__org_patternfly_extension_finder_Finder(/** boolean */ arg0) {
  return /**@type {Finder}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Finder));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {Finder} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_extension_finder_Finder(/** Iterable<T> */ arg0, /** j_u_function_Function<T, FinderColumn> */ arg1) {
  return /**@type {Finder}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), Finder));
 }
 //Default method forwarding stub.
 /** @nodts @return {Finder} */
 m_addItem__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_Finder(/** FinderColumn */ arg0) {
  return /**@type {Finder}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), Finder));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_extension_finder_FinderColumn__java_util_function_BiConsumer__void(/** FinderColumn */ arg0, /** BiConsumer<FinderColumn, FinderColumn> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  Finder.$clinit = () =>{};
  Finder.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Bordered.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Finder;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Flow = goog.module.get('org.jboss.elemento.flow.Flow$impl');
  FlowContext = goog.module.get('org.jboss.elemento.flow.FlowContext$impl');
  Task = goog.module.get('org.jboss.elemento.flow.Task$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  FinderClasses = goog.module.get('org.patternfly.extension.finder.FinderClasses$impl');
  FinderColumn = goog.module.get('org.patternfly.extension.finder.FinderColumn$impl');
  FinderItem = goog.module.get('org.patternfly.extension.finder.FinderItem$impl');
  FinderPath = goog.module.get('org.patternfly.extension.finder.FinderPath$impl');
  FinderSegment = goog.module.get('org.patternfly.extension.finder.FinderSegment$impl');
  ResolvedFinderPath = goog.module.get('org.patternfly.extension.finder.ResolvedFinderPath$impl');
  ResolvedFinderSegment = goog.module.get('org.patternfly.extension.finder.ResolvedFinderSegment$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Finder.f_STOP_SELECT_KEY__org_patternfly_extension_finder_Finder_ = 'stop-select';
Attachable.$markImplementor(Finder);
Bordered.$markImplementor(Finder);
HasItems.$markImplementor(Finder);
$Util.$setClassMetadata(Finder, 'org.patternfly.extension.finder.Finder');

exports = Finder;

//# sourceMappingURL=Finder.js.map
