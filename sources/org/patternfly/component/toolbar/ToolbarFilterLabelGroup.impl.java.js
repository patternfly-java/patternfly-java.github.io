goog.module('org.patternfly.component.toolbar.ToolbarFilterLabelGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let LabelGroup = goog.forwardDeclare('org.patternfly.component.label.LabelGroup$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let Filter = goog.forwardDeclare('org.patternfly.filter.Filter$impl');
let FilterChangeHandler = goog.forwardDeclare('org.patternfly.filter.FilterChangeHandler$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarFilterLabelGroup<T>>}
 */
class ToolbarFilterLabelGroup extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Filter<T>} @nodts*/
  this.f_filter__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_;
  /**@type {List<?string>} @nodts*/
  this.f_filterAttributes__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_;
  /**@type {LabelGroup} @nodts*/
  this.f_labelGroup__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_;
  /**@type {j_u_function_Function<Filter<T>, List<Label>>} @nodts*/
  this.f_labelsFn__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_;
 }
 /** @nodts @template T_1 @return {ToolbarFilterLabelGroup<T_1>} */
 static m_toolbarFilterLabelGroup__org_patternfly_filter_Filter__java_lang_String__org_patternfly_component_toolbar_ToolbarFilterLabelGroup(/** Filter<T_1> */ filter, /** ?string */ text) {
  ToolbarFilterLabelGroup.$clinit();
  return /**@type {!ToolbarFilterLabelGroup<T_1>}*/ (ToolbarFilterLabelGroup.$create__org_patternfly_filter_Filter__java_lang_String(filter, text));
 }
 /** @nodts @template T @return {!ToolbarFilterLabelGroup<T>} */
 static $create__org_patternfly_filter_Filter__java_lang_String(/** Filter<T> */ filter, /** ?string */ text) {
  ToolbarFilterLabelGroup.$clinit();
  let $instance = new ToolbarFilterLabelGroup();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarFilterLabelGroup__org_patternfly_filter_Filter__java_lang_String__void(filter, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarFilterLabelGroup__org_patternfly_filter_Filter__java_lang_String__void(/** Filter<T> */ filter, /** ?string */ text) {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarFilterLabelGroup.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarFilterLabelGroup, ToolbarFilterLabelGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarFilterLabelGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(ToolbarItem.m_toolbarItem__org_patternfly_component_toolbar_ToolbarItem().m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_filter__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_ = filter;
  this.f_text__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_ = text;
  this.f_filterAttributes__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_ = (/**@type {!ArrayList<?string>}*/ (ArrayList.$create__()));
  this.f_labelsFn__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_ = j_u_function_Function.$adapt(/**  @return {List<Label>}*/ ((/** Filter<T> */ f) =>{
   let f_1 = /**@type {Filter<T>}*/ ($Casts.$to(f, Filter));
   return /**@type {List<Label>}*/ (Collections.m_emptyList__java_util_List());
  }));
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this, false);
  filter.m_onChange__org_patternfly_filter_FilterChangeHandler__org_patternfly_filter_Filter(FilterChangeHandler.$adapt((/** Filter<T> */ f_2, /** ?string */ origin) =>{
   let anyDefined = this.f_filterAttributes__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_.m_stream__java_util_stream_Stream().m_anyMatch__java_util_function_Predicate__boolean(Predicate.$adapt(/**  @return {boolean}*/ ((/** ?string */ arg0) =>{
    let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
    return f_2.m_defined__java_lang_String__boolean(arg0_1);
   })));
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this, anyDefined);
   this.m_failSafeLabelGroup__org_patternfly_component_label_LabelGroup_$p_org_patternfly_component_toolbar_ToolbarFilterLabelGroup().m_clear__void();
   if (anyDefined) {
    let labels = /**@type {List<Label>}*/ ($Casts.$to(this.f_labelsFn__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_.m_apply__java_lang_Object__java_lang_Object(f_2), /**@type {Function}*/ (List)));
    for (let $iterator = labels.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let label = /**@type {Label}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Label));
     {
      this.m_failSafeLabelGroup__org_patternfly_component_label_LabelGroup_$p_org_patternfly_component_toolbar_ToolbarFilterLabelGroup().m_add__org_patternfly_component_label_Label__org_patternfly_component_label_LabelGroup(label);
     }
    }
    if (labels.isEmpty()) {
     this.f_filterAttributes__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ?string */ arg0_2) =>{
      let arg0_3 = /**@type {?string}*/ ($Casts.$to(arg0_2, j_l_String));
      filter.m_reset__java_lang_String__void(arg0_3);
     }));
    }
   }
  }));
 }
 /** @nodts @return {ToolbarFilterLabelGroup<T>} */
 m_filterAttributes__java_lang_String__arrayOf_java_lang_String__org_patternfly_component_toolbar_ToolbarFilterLabelGroup(/** ?string */ firstAttribute, /** Array<?string> */ moreAttributes) {
  this.f_filterAttributes__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_.add(firstAttribute);
  this.f_filterAttributes__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_.addAll(/**@type {List<?string>}*/ (List.m_of__arrayOf_java_lang_Object__java_util_List(moreAttributes)));
  return this;
 }
 /** @nodts @return {ToolbarFilterLabelGroup<T>} */
 m_filterToLabels__java_util_function_Function__org_patternfly_component_toolbar_ToolbarFilterLabelGroup(/** j_u_function_Function<Filter<T>, List<Label>> */ labelsFn) {
  this.f_labelsFn__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_ = labelsFn;
  return this;
 }
 /** @nodts @return {ToolbarFilterLabelGroup<T>} */
 m_that__org_patternfly_component_toolbar_ToolbarFilterLabelGroup() {
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_failSafeLabelGroup__org_patternfly_component_label_LabelGroup_$p_org_patternfly_component_toolbar_ToolbarFilterLabelGroup() {
  if ($Equality.$same(this.f_labelGroup__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_, null)) {
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_labelGroup__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_ = LabelGroup.m_labelGroup__java_lang_String__org_patternfly_component_label_LabelGroup(this.f_text__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_).m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_label_LabelGroup(CloseHandler.$adapt((/** Event */ e, /** LabelGroup */ c) =>{
    let c_1 = /**@type {LabelGroup}*/ ($Casts.$to(c, LabelGroup));
    let /** Filter<T> */ $$q;
    this.f_filterAttributes__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_.m_forEach__java_util_function_Consumer__void(($$q = this.f_filter__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_, Consumer.$adapt((/** ?string */ arg0) =>{
     let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
     $$q.m_reset__java_lang_String__void(arg0_1);
    })));
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_labelGroup__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_);
    this.f_labelGroup__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_ = null;
   })));
  }
  return this.f_labelGroup__org_patternfly_component_toolbar_ToolbarFilterLabelGroup_;
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarFilterLabelGroup<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarFilterLabelGroup();
 }
 /** @nodts */
 static $clinit() {
  ToolbarFilterLabelGroup.$clinit = () =>{};
  ToolbarFilterLabelGroup.$loadModules();
  ToolbarSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarFilterLabelGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  List = goog.module.get('java.util.List$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
  LabelGroup = goog.module.get('org.patternfly.component.label.LabelGroup$impl');
  ToolbarItem = goog.module.get('org.patternfly.component.toolbar.ToolbarItem$impl');
  Filter = goog.module.get('org.patternfly.filter.Filter$impl');
  FilterChangeHandler = goog.module.get('org.patternfly.filter.FilterChangeHandler$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToolbarFilterLabelGroup.f_SUB_COMPONENT_ID__org_patternfly_component_toolbar_ToolbarFilterLabelGroup = 'tfcg';
/**@const {string} @nodts*/
ToolbarFilterLabelGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarFilterLabelGroup = 'ToolbarFilterLabelGroup';
$Util.$setClassMetadata(ToolbarFilterLabelGroup, 'org.patternfly.component.toolbar.ToolbarFilterLabelGroup');

exports = ToolbarFilterLabelGroup;

//# sourceMappingURL=ToolbarFilterLabelGroup.js.map
