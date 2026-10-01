goog.module('org.patternfly.component.list.DescriptionList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Horizontal = goog.require('org.patternfly.style.Modifiers.Horizontal$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDListElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
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
let DescriptionListGroup = goog.forwardDeclare('org.patternfly.component.list.DescriptionListGroup$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let BreakpointCollector = goog.forwardDeclare('org.patternfly.style.BreakpointCollector$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let Orientation = goog.forwardDeclare('org.patternfly.style.Orientation$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let HTMLBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, DescriptionList>}
 * @implements {Compact<HTMLElement, DescriptionList>}
 * @implements {Horizontal<HTMLElement, DescriptionList>}
 * @implements {Ordered<HTMLElement, DescriptionList, DescriptionListGroup>}
 */
class DescriptionList extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, DescriptionListGroup>} @nodts*/
  this.f_items__org_patternfly_component_list_DescriptionList_;
  /**@type {AurHandler<DescriptionList, DescriptionListGroup>} @nodts*/
  this.f_aur__org_patternfly_component_list_DescriptionList_;
  /**@type {Comparator<DescriptionListGroup>} @nodts*/
  this.f_comparator__org_patternfly_component_list_DescriptionList_;
 }
 /** @nodts @return {DescriptionList} */
 static m_descriptionList__org_patternfly_component_list_DescriptionList() {
  DescriptionList.$clinit();
  return DescriptionList.$create__();
 }
 /** @nodts @return {!DescriptionList} */
 static $create__() {
  DescriptionList.$clinit();
  let $instance = new DescriptionList();
  $instance.$ctor__org_patternfly_component_list_DescriptionList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DescriptionList__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_DescriptionList__org_patternfly_component_ComponentType, /**@type {HTMLDListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDListElement>}*/ ($Casts.$to(Elements.m_dl__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_list_DescriptionList_ = (/**@type {!LinkedHashMap<?string, DescriptionListGroup>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_list_DescriptionList_ = (/**@type {!AurHandler<DescriptionList, DescriptionListGroup>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
 }
 /** @nodts @return {DescriptionList} */
 m_add__org_patternfly_component_list_DescriptionListGroup__org_patternfly_component_list_DescriptionList(/** DescriptionListGroup */ item) {
  this.m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, item);
  this.f_items__org_patternfly_component_list_DescriptionList_.put(item.m_identifier__java_lang_String(), item);
  return /**@type {DescriptionList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_DescriptionList_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_autoColumnWidths__org_patternfly_component_list_DescriptionList() {
  return this.m_autoColumnWidths__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_autoColumnWidths__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ autoColumnWidths) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_autoColumnWidths__org_patternfly_style_Classes, autoColumnWidths), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_autoFit__org_patternfly_component_list_DescriptionList() {
  return this.m_autoFit__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_autoFit__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ autoFit) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_autoFit__org_patternfly_style_Classes, autoFit), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_autoFitMin__java_lang_String__org_patternfly_component_list_DescriptionList(/** ?string */ autoFitMin) {
  return this.m_autoFitMin__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/**@type {Breakpoints<?string>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, autoFitMin)));
 }
 /** @nodts @return {DescriptionList} */
 m_autoFitMin__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/** Breakpoints<?string> */ autoFitMin) {
  return /**@type {DescriptionList}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, DescriptionList>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_GridTemplateColumns__org_patternfly_style_Variables, 'min'], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(autoFitMin), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_columns__java_lang_Integer__org_patternfly_component_list_DescriptionList(/** Integer */ columns) {
  return this.m_columns__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/**@type {Breakpoints<Integer>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, columns)));
 }
 /** @nodts @return {DescriptionList} */
 m_columns__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/** Breakpoints<Integer> */ columns) {
  if (!$Equality.$same(columns, null)) {
   let modifiers = /**@type {?string}*/ ($Casts.$to(columns.m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** Tuple<Breakpoint, Integer> */ bp) =>{
    let bp_1 = /**@type {Tuple<Breakpoint, Integer>}*/ ($Casts.$to(bp, Tuple));
    return Validation.m_verifyRange__elemental2_dom_Element__java_lang_String__int__int__int__boolean(this.m_element__elemental2_dom_HTMLElement(), 'columns', (/**@type {Integer}*/ ($Casts.$to(bp_1.f_value__org_patternfly_core_Tuple, Integer))).intValue(), 1, 3);
   }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tuple<Breakpoint, Integer>, StringBuilder, ?string>}*/ (BreakpointCollector.m_modifiers__java_util_function_Function__java_util_stream_Collector(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Integer */ col) =>{
    let col_1 = /**@type {Integer}*/ ($Casts.$to(col, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(col_1) + '-col';
   }))))), j_l_String));
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([modifiers], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {DescriptionList} */
 m_displaySize__org_patternfly_style_Size__org_patternfly_component_list_DescriptionList(/** Size */ size) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_element__elemental2_dom_HTMLElement(), 'displaySize', size, Size.f_lg__org_patternfly_style_Size, /**@type {!Array<Size>}*/ ($Arrays.$stampType([Size.f__2xl__org_patternfly_style_Size], Size)))) {
   for (let $array = Size.m_values__arrayOf_org_patternfly_style_Size(), $index = 0; $index < $array.length; $index++) {
    let s = $array[$index];
    {
     this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, s)], j_l_String)));
    }
   }
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, size)], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {DescriptionList} */
 m_fillColumns__org_patternfly_component_list_DescriptionList() {
  return this.m_fillColumns__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_fillColumns__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ fillColumns) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_fillColumns__org_patternfly_style_Classes, fillColumns), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_fluid__org_patternfly_component_list_DescriptionList() {
  return this.m_fluid__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_fluid__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ fluid) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_fluid__org_patternfly_style_Classes, fluid), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_horizontalTermWidth__java_lang_String__org_patternfly_component_list_DescriptionList(/** ?string */ horizontalTermWidth) {
  return this.m_horizontalTermWidth__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/**@type {Breakpoints<?string>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, horizontalTermWidth)));
 }
 /** @nodts @return {DescriptionList} */
 m_horizontalTermWidth__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/** Breakpoints<?string> */ horizontalTermWidth) {
  return /**@type {DescriptionList}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, DescriptionList>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['m-horizontal__term', 'width'], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(horizontalTermWidth), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_inlineGrid__org_patternfly_component_list_DescriptionList() {
  return this.m_inlineGrid__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_inlineGrid__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ inlineGrid) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_inlineGrid__org_patternfly_style_Classes, inlineGrid), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_ordered__java_util_Comparator__org_patternfly_component_list_DescriptionList(/** Comparator<DescriptionListGroup> */ comparator) {
  this.f_comparator__org_patternfly_component_list_DescriptionList_ = comparator;
  return this;
 }
 /** @nodts @return {DescriptionList} */
 m_orientation__org_patternfly_style_Orientation__org_patternfly_component_list_DescriptionList(/** Orientation */ orientation) {
  return this.m_orientation__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/**@type {Breakpoints<Orientation>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, orientation)));
 }
 /** @nodts @return {DescriptionList} */
 m_orientation__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/** Breakpoints<Orientation> */ orientation) {
  return /**@type {DescriptionList}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([orientation.m_modifiers__java_lang_String()], j_l_String))), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_termWidth__java_lang_String__org_patternfly_component_list_DescriptionList(/** ?string */ width) {
  return /**@type {DescriptionList}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, DescriptionList>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['term', 'width'], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__java_lang_String__org_jboss_elemento_TypedBuilder(width), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_that__org_patternfly_component_list_DescriptionList() {
  return this;
 }
 /** @nodts @return {DescriptionList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_DescriptionList(/** AddItemHandler<DescriptionList, DescriptionListGroup> */ onAdd) {
  return /**@type {DescriptionList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_DescriptionList_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_DescriptionList(/** UpdateItemHandler<DescriptionList, DescriptionListGroup> */ onUpdate) {
  return /**@type {DescriptionList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_DescriptionList_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_DescriptionList(/** RemoveItemHandler<DescriptionList, DescriptionListGroup> */ onRemove) {
  return /**@type {DescriptionList}*/ ($Casts.$to(this.f_aur__org_patternfly_component_list_DescriptionList_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), DescriptionList));
 }
 /** @override @nodts @return {Comparator<DescriptionListGroup>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_component_list_DescriptionList_;
 }
 /** @override @nodts @return {Iterator<DescriptionListGroup>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_list_DescriptionList_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_list_DescriptionList_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_list_DescriptionList_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_list_DescriptionList_.containsKey(identifier);
 }
 /** @nodts @return {DescriptionListGroup} */
 m_item__java_lang_String__org_patternfly_component_list_DescriptionListGroup(/** ?string */ identifier) {
  return /**@type {DescriptionListGroup}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_DescriptionList_.get(identifier), DescriptionListGroup));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_list_DescriptionListGroup__void(/** DescriptionListGroup */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** DescriptionListGroup */ oldItem, /** DescriptionListGroup */ newItem) =>{
   let oldItem_1 = /**@type {DescriptionListGroup}*/ ($Casts.$to(oldItem, DescriptionListGroup));
   let newItem_1 = /**@type {DescriptionListGroup}*/ ($Casts.$to(newItem, DescriptionListGroup));
   this.f_items__org_patternfly_component_list_DescriptionList_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_list_DescriptionList_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {DescriptionListGroup}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_DescriptionList_.remove(identifier), DescriptionListGroup));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_list_DescriptionList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  let iterator = this.f_items__org_patternfly_component_list_DescriptionList_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {DescriptionListGroup}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), DescriptionListGroup));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_list_DescriptionList_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DescriptionList();
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_horizontal__org_jboss_elemento_TypedBuilder() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(this), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_horizontal__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionList));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<DescriptionListGroup>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<DescriptionListGroup>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {DescriptionList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, DescriptionListGroup> */ arg1) {
  return /**@type {DescriptionList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** DescriptionListGroup */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {DescriptionListGroup}*/ ($Casts.$to(arg0, DescriptionListGroup))), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** DescriptionListGroup */ arg0) {
  return this.m_add__org_patternfly_component_list_DescriptionListGroup__org_patternfly_component_list_DescriptionList(/**@type {DescriptionListGroup}*/ ($Casts.$to(arg0, DescriptionListGroup)));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<DescriptionList, DescriptionListGroup> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_list_DescriptionList(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<DescriptionListGroup>} */
 m_items__java_util_List() {
  return /**@type {List<DescriptionListGroup>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListGroup} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_list_DescriptionListGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, DescriptionListGroup> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** DescriptionListGroup */ arg0) {
  this.m_updateItem__org_patternfly_component_list_DescriptionListGroup__void(/**@type {DescriptionListGroup}*/ ($Casts.$to(arg0, DescriptionListGroup)));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<DescriptionList, DescriptionListGroup> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_list_DescriptionList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** DescriptionListGroup */ arg0, /** BiConsumer<DescriptionListGroup, DescriptionListGroup> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {DescriptionListGroup}*/ ($Casts.$to(arg0, DescriptionListGroup)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<DescriptionList, DescriptionListGroup> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_list_DescriptionList(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ arg0, /** DescriptionListGroup */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, /**@type {DescriptionListGroup}*/ ($Casts.$to(arg1, DescriptionListGroup)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<DescriptionListGroup>} */
 m_defaultOrder__java_util_Comparator() {
  return /**@type {Comparator<DescriptionListGroup>}*/ (Ordered.m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<DescriptionListGroup> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_component_list_DescriptionList(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_compact__org_patternfly_component_list_DescriptionList() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_compact__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_horizontal__org_patternfly_component_list_DescriptionList() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(this), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_horizontal__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {DescriptionList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_DescriptionList(/** Iterable<T> */ arg0, /** j_u_function_Function<T, DescriptionListGroup> */ arg1) {
  return /**@type {DescriptionList}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_addItem__org_patternfly_component_list_DescriptionListGroup__org_patternfly_component_list_DescriptionList(/** DescriptionListGroup */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_list_DescriptionListGroup__java_util_function_BiConsumer__void(/** DescriptionListGroup */ arg0, /** BiConsumer<DescriptionListGroup, DescriptionListGroup> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_list_DescriptionListGroup__void(/** ElementContainerMethods<?, ?> */ arg0, /** DescriptionListGroup */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_ordered__org_patternfly_component_list_DescriptionList() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), DescriptionList));
 }
 /** @nodts */
 static $clinit() {
  DescriptionList.$clinit = () =>{};
  DescriptionList.$loadModules();
  BaseComponent.$clinit();
  Compact.$clinit();
  Horizontal.$clinit();
  Ordered.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DescriptionList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDListElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  DescriptionListGroup = goog.module.get('org.patternfly.component.list.DescriptionListGroup$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  BreakpointCollector = goog.module.get('org.patternfly.style.BreakpointCollector$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Compact.$markImplementor(DescriptionList);
Horizontal.$markImplementor(DescriptionList);
Ordered.$markImplementor(DescriptionList);
$Util.$setClassMetadata(DescriptionList, 'org.patternfly.component.list.DescriptionList');

exports = DescriptionList;

//# sourceMappingURL=DescriptionList.js.map
