goog.module('org.patternfly.component.progressstepper.ProgressStepper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Center = goog.require('org.patternfly.style.Modifiers.Center$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Vertical = goog.require('org.patternfly.style.Modifiers.Vertical$impl');

let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLOListElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Optional = goog.forwardDeclare('java.util.Optional$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let ProgressStep = goog.forwardDeclare('org.patternfly.component.progressstepper.ProgressStep$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLOListElement, ProgressStepper>}
 * @implements {Center<HTMLOListElement, ProgressStepper>}
 * @implements {Compact<HTMLOListElement, ProgressStepper>}
 * @implements {HasItems<HTMLOListElement, ProgressStepper, ProgressStep>}
 * @implements {Vertical<HTMLOListElement, ProgressStepper>}
 */
class ProgressStepper extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, ProgressStep>} @nodts*/
  this.f_items__org_patternfly_component_progressstepper_ProgressStepper_;
  /**@type {List<ProgressStep>} @nodts*/
  this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_;
  /**@type {AurHandler<ProgressStepper, ProgressStep>} @nodts*/
  this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_;
  /**@type {number} @nodts*/
  this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = 0;
 }
 /** @nodts @return {ProgressStepper} */
 static m_progressStepper__org_patternfly_component_progressstepper_ProgressStepper() {
  ProgressStepper.$clinit();
  return ProgressStepper.$create__();
 }
 /** @nodts @return {!ProgressStepper} */
 static $create__() {
  ProgressStepper.$clinit();
  let $instance = new ProgressStepper();
  $instance.$ctor__org_patternfly_component_progressstepper_ProgressStepper__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_progressstepper_ProgressStepper__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ProgressStepper__org_patternfly_component_ComponentType, /**@type {HTMLOListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLOListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLOListElement>}*/ ($Casts.$to(Elements.m_ol__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progressStepper__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.$init__void_$p_org_patternfly_component_progressstepper_ProgressStepper();
  this.f_items__org_patternfly_component_progressstepper_ProgressStepper_ = (/**@type {!LinkedHashMap<?string, ProgressStep>}*/ (LinkedHashMap.$create__()));
  this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_ = (/**@type {!ArrayList<ProgressStep>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_ = (/**@type {!AurHandler<ProgressStepper, ProgressStep>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
 }
 /** @nodts @return {ProgressStepper} */
 m_add__org_patternfly_component_progressstepper_ProgressStep__org_patternfly_component_progressstepper_ProgressStepper(/** ProgressStep */ item) {
  this.m_addToCollections__org_patternfly_component_progressstepper_ProgressStep__void_$p_org_patternfly_component_progressstepper_ProgressStepper(item);
  (/**@type {HTMLOListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return /**@type {ProgressStepper}*/ ($Casts.$to(this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), ProgressStepper));
 }
 /** @nodts @return {ProgressStepper} */
 m_that__org_patternfly_component_progressstepper_ProgressStepper() {
  return this;
 }
 /** @nodts @return {ProgressStepper} */
 m_first__org_patternfly_component_progressstepper_ProgressStepper() {
  return this.m_first__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_component_progressstepper_ProgressStepper(Consumer.$adapt((/** ProgressStep */ s) =>{
   let s_1 = /**@type {ProgressStep}*/ ($Casts.$to(s, ProgressStep));
  }), Consumer.$adapt((/** ProgressStep */ s_2) =>{
   let s_3 = /**@type {ProgressStep}*/ ($Casts.$to(s_2, ProgressStep));
  }));
 }
 /** @nodts @return {ProgressStepper} */
 m_first__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_component_progressstepper_ProgressStepper(/** Consumer<ProgressStep> */ actionForTheFirstStep, /** Consumer<ProgressStep> */ actionForThePreviousCurrentStep) {
  if (this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.isEmpty()) {
   ProgressStepper.f_logger__org_patternfly_component_progressstepper_ProgressStepper_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('No steps available to set as first.', []);
   return this;
  }
  if (this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ == 0) {
   ProgressStepper.f_logger__org_patternfly_component_progressstepper_ProgressStepper_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Already at the first step.', []);
   return this;
  }
  if (this.m_isSomeStepCurrent__boolean_$p_org_patternfly_component_progressstepper_ProgressStepper()) {
   actionForThePreviousCurrentStep.m_accept__java_lang_Object__void((/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(false));
  }
  this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = 0;
  actionForTheFirstStep.m_accept__java_lang_Object__void((/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(true));
  return this;
 }
 /** @nodts @return {ProgressStepper} */
 m_previous__org_patternfly_component_progressstepper_ProgressStepper() {
  return this.m_previous__java_util_function_BiConsumer__java_util_function_Consumer__org_patternfly_component_progressstepper_ProgressStepper(BiConsumer.$adapt((/** Optional<ProgressStep> */ s, /** Integer */ idx) =>{
   let s_1 = /**@type {Optional<ProgressStep>}*/ ($Casts.$to(s, Optional));
   let idx_1 = /**@type {Integer}*/ ($Casts.$to(idx, Integer));
  }), Consumer.$adapt((/** ProgressStep */ s_2) =>{
   let s_3 = /**@type {ProgressStep}*/ ($Casts.$to(s_2, ProgressStep));
  }));
 }
 /** @nodts @return {ProgressStepper} */
 m_previous__java_util_function_BiConsumer__java_util_function_Consumer__org_patternfly_component_progressstepper_ProgressStepper(/** BiConsumer<Optional<ProgressStep>, Integer> */ actionForTheNewCurrentStepWithIndex, /** Consumer<ProgressStep> */ actionForThePreviousCurrentStep) {
  if (this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.isEmpty() || this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ == -1) {
   ProgressStepper.f_logger__org_patternfly_component_progressstepper_ProgressStepper_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('No previous step available.', []);
   return this;
  }
  if (this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ == 0) {
   let prevCurrent = /**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_), ProgressStep));
   actionForThePreviousCurrentStep.m_accept__java_lang_Object__void(prevCurrent.m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(false));
   actionForTheNewCurrentStepWithIndex.m_accept__java_lang_Object__java_lang_Object__void(/**@type {Optional<ProgressStep>}*/ (Optional.m_empty__java_util_Optional()), Integer.valueOf(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ - 1 | 0));
   return this;
  }
  if (this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ == this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.size()) {
   let newCurrent = (/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ - 1 | 0), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(true);
   actionForTheNewCurrentStepWithIndex.m_accept__java_lang_Object__java_lang_Object__void(/**@type {Optional<ProgressStep>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(newCurrent)), Integer.valueOf(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_));
   return this;
  }
  let prevCurrent_1 = /**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_), ProgressStep));
  let newCurrent_1 = /**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ - 1 | 0), ProgressStep));
  actionForThePreviousCurrentStep.m_accept__java_lang_Object__void(prevCurrent_1.m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(false));
  actionForTheNewCurrentStepWithIndex.m_accept__java_lang_Object__java_lang_Object__void(/**@type {Optional<ProgressStep>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(newCurrent_1.m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(true))), Integer.valueOf(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_));
  return this;
 }
 /** @nodts @return {ProgressStepper} */
 m_next__org_patternfly_component_progressstepper_ProgressStepper() {
  return this.m_next__java_util_function_BiConsumer__java_util_function_Consumer__org_patternfly_component_progressstepper_ProgressStepper(BiConsumer.$adapt((/** Optional<ProgressStep> */ s, /** Integer */ idx) =>{
   let s_1 = /**@type {Optional<ProgressStep>}*/ ($Casts.$to(s, Optional));
   let idx_1 = /**@type {Integer}*/ ($Casts.$to(idx, Integer));
  }), Consumer.$adapt((/** ProgressStep */ s_2) =>{
   let s_3 = /**@type {ProgressStep}*/ ($Casts.$to(s_2, ProgressStep));
  }));
 }
 /** @nodts @return {ProgressStepper} */
 m_next__java_util_function_BiConsumer__java_util_function_Consumer__org_patternfly_component_progressstepper_ProgressStepper(/** BiConsumer<Optional<ProgressStep>, Integer> */ actionForTheNewCurrentWithIndex, /** Consumer<ProgressStep> */ actionForThePreviousCurrent) {
  if (this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.isEmpty() || this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ == this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.size()) {
   ProgressStepper.f_logger__org_patternfly_component_progressstepper_ProgressStepper_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('No next step available.', []);
   return this;
  }
  if (this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ == -1) {
   let newCurrent = (/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ + 1 | 0), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(true);
   actionForTheNewCurrentWithIndex.m_accept__java_lang_Object__java_lang_Object__void(/**@type {Optional<ProgressStep>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(newCurrent)), Integer.valueOf(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_));
   return this;
  }
  if (this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ == (this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.size() - 1 | 0)) {
   let prevCurrent = (/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(false);
   actionForThePreviousCurrent.m_accept__java_lang_Object__void(prevCurrent);
   actionForTheNewCurrentWithIndex.m_accept__java_lang_Object__java_lang_Object__void(/**@type {Optional<ProgressStep>}*/ (Optional.m_empty__java_util_Optional()), Integer.valueOf(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ + 1 | 0));
   return this;
  }
  let prevCurrent_1 = (/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(false);
  actionForThePreviousCurrent.m_accept__java_lang_Object__void(prevCurrent_1);
  let newCurrent_1 = (/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ + 1 | 0), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(true);
  actionForTheNewCurrentWithIndex.m_accept__java_lang_Object__java_lang_Object__void(/**@type {Optional<ProgressStep>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(newCurrent_1)), Integer.valueOf(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_));
  return this;
 }
 /** @nodts @return {ProgressStepper} */
 m_last__org_patternfly_component_progressstepper_ProgressStepper() {
  return this.m_last__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_component_progressstepper_ProgressStepper(Consumer.$adapt((/** ProgressStep */ s) =>{
   let s_1 = /**@type {ProgressStep}*/ ($Casts.$to(s, ProgressStep));
  }), Consumer.$adapt((/** ProgressStep */ s_2) =>{
   let s_3 = /**@type {ProgressStep}*/ ($Casts.$to(s_2, ProgressStep));
  }));
 }
 /** @nodts @return {ProgressStepper} */
 m_last__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_component_progressstepper_ProgressStepper(/** Consumer<ProgressStep> */ actionForTheLastStep, /** Consumer<ProgressStep> */ actionForThePreviousCurrentStep) {
  if (this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.isEmpty()) {
   ProgressStepper.f_logger__org_patternfly_component_progressstepper_ProgressStepper_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('No last step available.', []);
   return this;
  }
  if (this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ == (this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.size() - 1 | 0)) {
   ProgressStepper.f_logger__org_patternfly_component_progressstepper_ProgressStepper_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Already at the last step.', []);
   return this;
  }
  if (this.m_isSomeStepCurrent__boolean_$p_org_patternfly_component_progressstepper_ProgressStepper()) {
   actionForThePreviousCurrentStep.m_accept__java_lang_Object__void((/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(false));
  }
  this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.size() - 1 | 0;
  actionForTheLastStep.m_accept__java_lang_Object__void((/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_), ProgressStep))).m_current__boolean__org_patternfly_component_progressstepper_ProgressStep_$pp_org_patternfly_component_progressstepper(true));
  return this;
 }
 /** @nodts @return {ProgressStepper} */
 m_ariaLabel__java_lang_String__org_patternfly_component_progressstepper_ProgressStepper(/** ?string */ label) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), ProgressStepper));
 }
 /** @nodts @return {ProgressStepper} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_progressstepper_ProgressStepper(/** AddItemHandler<ProgressStepper, ProgressStep> */ onAdd) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ProgressStepper));
 }
 /** @nodts @return {ProgressStepper} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_progressstepper_ProgressStepper(/** UpdateItemHandler<ProgressStepper, ProgressStep> */ onUpdate) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ProgressStepper));
 }
 /** @nodts @return {ProgressStepper} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_progressstepper_ProgressStepper(/** RemoveItemHandler<ProgressStepper, ProgressStep> */ onRemove) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ProgressStepper));
 }
 /** @override @nodts @return {Iterator<ProgressStep>} */
 m_iterator__java_util_Iterator() {
  return this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_progressstepper_ProgressStepper_.containsKey(identifier);
 }
 /** @nodts @return {ProgressStep} */
 m_item__java_lang_String__org_patternfly_component_progressstepper_ProgressStep(/** ?string */ identifier) {
  return /**@type {ProgressStep}*/ ($Casts.$to(this.f_items__org_patternfly_component_progressstepper_ProgressStepper_.get(identifier), ProgressStep));
 }
 /** @nodts @return {number} */
 m_currentIndex__int() {
  return this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_;
 }
 /** @nodts @return {ProgressStepper} */
 m_setupSteps__java_util_function_BiConsumer__org_patternfly_component_progressstepper_ProgressStepper(/** BiConsumer<ProgressStep, Integer> */ stepConsumerWithIndex) {
  for (let i = 0; i < this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.size(); i = i + 1 | 0) {
   stepConsumerWithIndex.m_accept__java_lang_Object__java_lang_Object__void(/**@type {ProgressStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.getAtIndex(i), ProgressStep)), Integer.valueOf(i));
  }
  return this;
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_progressstepper_ProgressStep__void(/** ProgressStep */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** ProgressStep */ oldItem, /** ProgressStep */ newItem) =>{
   let oldItem_1 = /**@type {ProgressStep}*/ ($Casts.$to(oldItem, ProgressStep));
   let newItem_1 = /**@type {ProgressStep}*/ ($Casts.$to(newItem, ProgressStep));
   this.f_items__org_patternfly_component_progressstepper_ProgressStepper_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {ProgressStep}*/ ($Casts.$to(this.f_items__org_patternfly_component_progressstepper_ProgressStepper_.remove(identifier), ProgressStep));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  if (!$Equality.$same(item, null)) {
   this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.remove(item);
   this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLOListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  let iterator = this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {ProgressStep}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ProgressStep));
   iterator.m_remove__void();
   this.f_items__org_patternfly_component_progressstepper_ProgressStepper_.remove(item.m_identifier__java_lang_String());
   this.f_aur__org_patternfly_component_progressstepper_ProgressStepper_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
  this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = -1;
 }
 /** @nodts @return {boolean} */
 m_isSomeStepCurrent__boolean_$p_org_patternfly_component_progressstepper_ProgressStepper() {
  return this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ >= 0 && this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ < this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.size();
 }
 /** @nodts */
 m_clearCollections__void_$p_org_patternfly_component_progressstepper_ProgressStepper() {
  this.f_items__org_patternfly_component_progressstepper_ProgressStepper_.clear();
  this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.clear();
 }
 /** @nodts */
 m_addToCollections__org_patternfly_component_progressstepper_ProgressStep__void_$p_org_patternfly_component_progressstepper_ProgressStepper(/** ProgressStep */ progressStep) {
  this.f_items__org_patternfly_component_progressstepper_ProgressStepper_.put(progressStep.m_identifier__java_lang_String(), progressStep);
  this.f_steps__org_patternfly_component_progressstepper_ProgressStepper_.add(progressStep);
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_progressstepper_ProgressStepper();
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_center__org_jboss_elemento_TypedBuilder() {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Center.m_center__$default__org_patternfly_style_Modifiers_Center__org_jboss_elemento_TypedBuilder(this), ProgressStepper));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_center__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Center.m_center__$default__org_patternfly_style_Modifiers_Center__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStepper));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), ProgressStepper));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<ProgressStep>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<ProgressStep>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ProgressStepper} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ProgressStep> */ arg1) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ProgressStepper));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ProgressStep */ arg0) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {ProgressStep}*/ ($Casts.$to(arg0, ProgressStep))), ProgressStepper));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** ProgressStep */ arg0) {
  return this.m_add__org_patternfly_component_progressstepper_ProgressStep__org_patternfly_component_progressstepper_ProgressStepper(/**@type {ProgressStep}*/ ($Casts.$to(arg0, ProgressStep)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ProgressStepper, ProgressStep> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_progressstepper_ProgressStepper(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<ProgressStep>} */
 m_items__java_util_List() {
  return /**@type {List<ProgressStep>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStep} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_progressstepper_ProgressStep(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, ProgressStep> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** ProgressStep */ arg0) {
  this.m_updateItem__org_patternfly_component_progressstepper_ProgressStep__void(/**@type {ProgressStep}*/ ($Casts.$to(arg0, ProgressStep)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ProgressStepper, ProgressStep> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_progressstepper_ProgressStepper(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** ProgressStep */ arg0, /** BiConsumer<ProgressStep, ProgressStep> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {ProgressStep}*/ ($Casts.$to(arg0, ProgressStep)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ProgressStepper, ProgressStep> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_progressstepper_ProgressStepper(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_vertical__org_jboss_elemento_TypedBuilder() {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), ProgressStepper));
 }
 //Bridge method.
 /** @final @override @nodts @return {ProgressStepper} */
 m_vertical__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStepper} */
 m_center__org_patternfly_component_progressstepper_ProgressStepper() {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Center.m_center__$default__org_patternfly_style_Modifiers_Center__org_jboss_elemento_TypedBuilder(this), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStepper} */
 m_center__boolean__org_patternfly_component_progressstepper_ProgressStepper(/** boolean */ arg0) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Center.m_center__$default__org_patternfly_style_Modifiers_Center__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStepper} */
 m_compact__org_patternfly_component_progressstepper_ProgressStepper() {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStepper} */
 m_compact__boolean__org_patternfly_component_progressstepper_ProgressStepper(/** boolean */ arg0) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ProgressStepper} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_progressstepper_ProgressStepper(/** Iterable<T> */ arg0, /** j_u_function_Function<T, ProgressStep> */ arg1) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStepper} */
 m_addItem__org_patternfly_component_progressstepper_ProgressStep__org_patternfly_component_progressstepper_ProgressStepper(/** ProgressStep */ arg0) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_progressstepper_ProgressStep__java_util_function_BiConsumer__void(/** ProgressStep */ arg0, /** BiConsumer<ProgressStep, ProgressStep> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStepper} */
 m_vertical__org_patternfly_component_progressstepper_ProgressStepper() {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), ProgressStepper));
 }
 //Default method forwarding stub.
 /** @nodts @return {ProgressStepper} */
 m_vertical__boolean__org_patternfly_component_progressstepper_ProgressStepper(/** boolean */ arg0) {
  return /**@type {ProgressStepper}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ProgressStepper));
 }
 /** @private @nodts */
 $init__void_$p_org_patternfly_component_progressstepper_ProgressStepper() {
  this.f_currentIndex__org_patternfly_component_progressstepper_ProgressStepper_ = -1;
 }
 /** @nodts */
 static $clinit() {
  ProgressStepper.$clinit = () =>{};
  ProgressStepper.$loadModules();
  BaseComponent.$clinit();
  Center.$clinit();
  Compact.$clinit();
  HasItems.$clinit();
  Vertical.$clinit();
  ProgressStepper.f_logger__org_patternfly_component_progressstepper_ProgressStepper_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(ProgressStepper).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProgressStepper;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLOListElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  Optional = goog.module.get('java.util.Optional$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ProgressStep = goog.module.get('org.patternfly.component.progressstepper.ProgressStep$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
ProgressStepper.f_logger__org_patternfly_component_progressstepper_ProgressStepper_;
Center.$markImplementor(ProgressStepper);
Compact.$markImplementor(ProgressStepper);
HasItems.$markImplementor(ProgressStepper);
Vertical.$markImplementor(ProgressStepper);
$Util.$setClassMetadata(ProgressStepper, 'org.patternfly.component.progressstepper.ProgressStepper');

exports = ProgressStepper;

//# sourceMappingURL=ProgressStepper.js.map
