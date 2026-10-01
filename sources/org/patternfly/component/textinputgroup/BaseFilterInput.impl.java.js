goog.module('org.patternfly.component.textinputgroup.BaseFilterInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseSearchInput = goog.require('org.patternfly.component.textinputgroup.BaseSearchInput$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let LabelGroup = goog.forwardDeclare('org.patternfly.component.label.LabelGroup$impl');
let BaseTextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @extends {BaseSearchInput<T>}
 */
class BaseFilterInput extends BaseSearchInput {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<ComponentHandler<T>>} @nodts*/
  this.f_onEnter__org_patternfly_component_textinputgroup_BaseFilterInput;
  /**@type {List<BiConsumer<T, Label>>} @nodts*/
  this.f_onAdd__org_patternfly_component_textinputgroup_BaseFilterInput;
  /**@type {List<BiConsumer<T, Label>>} @nodts*/
  this.f_onRemove__org_patternfly_component_textinputgroup_BaseFilterInput;
  /**@type {boolean} @nodts*/
  this.f_allowDuplicates__org_patternfly_component_textinputgroup_BaseFilterInput = false;
  /**@type {j_u_function_Function<?string, ?string>} @nodts*/
  this.f_textToIdentifier__org_patternfly_component_textinputgroup_BaseFilterInput;
  /**@type {j_u_function_Function<?string, Label>} @nodts*/
  this.f_textToLabel__org_patternfly_component_textinputgroup_BaseFilterInput;
  /**@type {ComponentHandler<T>} @nodts*/
  this.f_addOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput;
  /**@type {BiFunction<T, ?string, ?boolean>} @nodts*/
  this.f_labelGroupVisibility__org_patternfly_component_textinputgroup_BaseFilterInput;
  /**@type {LabelGroup} @nodts*/
  this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_BaseFilterInput__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ componentType, /** ?string */ id) {
  this.$ctor__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_ComponentType__java_lang_String__void(componentType, id);
  this.f_allowDuplicates__org_patternfly_component_textinputgroup_BaseFilterInput = true;
  this.f_onEnter__org_patternfly_component_textinputgroup_BaseFilterInput = (/**@type {!ArrayList<ComponentHandler<T>>}*/ (ArrayList.$create__()));
  this.f_onAdd__org_patternfly_component_textinputgroup_BaseFilterInput = (/**@type {!ArrayList<BiConsumer<T, Label>>}*/ (ArrayList.$create__()));
  this.f_onRemove__org_patternfly_component_textinputgroup_BaseFilterInput = (/**@type {!ArrayList<BiConsumer<T, Label>>}*/ (ArrayList.$create__()));
  this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput = ComponentHandler.$adapt((/** Event */ event, /** T */ fi) =>{
   let fi_1 = /**@type {T}*/ ($Casts.$to(fi, BaseFilterInput));
   (/**@type {!BaseFilterInput<T>}*/ (fi_1)).m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseFilterInput('');
   this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput.m_clear__void();
  });
  this.f_textToIdentifier__org_patternfly_component_textinputgroup_BaseFilterInput = BaseFilterInput.$static_DEFAULT_TEXT_TO_IDENTIFIER__org_patternfly_component_textinputgroup_BaseFilterInput;
  this.f_textToLabel__org_patternfly_component_textinputgroup_BaseFilterInput = BaseFilterInput.$static_DEFAULT_TEXT_TO_LABEL__org_patternfly_component_textinputgroup_BaseFilterInput;
  this.f_addOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput = ComponentHandler.$adapt((/** Event */ e, /** T */ fi_2) =>{
   let fi_3 = /**@type {T}*/ ($Casts.$to(fi_2, BaseFilterInput));
   this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Label}*/ ($Casts.$to(this.f_textToLabel__org_patternfly_component_textinputgroup_BaseFilterInput.m_apply__java_lang_Object__java_lang_Object((/**@type {!BaseTextInputGroup<T>}*/ (fi_3)).m_value__java_lang_String()), Label)));
   this.m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseFilterInput('');
  });
  this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput = BiFunction.$adapt(/**  @return {?boolean}*/ ((/** T */ si, /** ?string */ value) =>{
   let si_1 = /**@type {T}*/ ($Casts.$to(si, BaseFilterInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   return !j_l_String.m_isEmpty__java_lang_String__boolean(value_1) || !this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput.m_isEmpty__boolean();
  }));
  this.f_labelGroupVisibility__org_patternfly_component_textinputgroup_BaseFilterInput = BiFunction.$adapt(/**  @return {?boolean}*/ ((/** T */ fi_4, /** ?string */ value_2) =>{
   let fi_5 = /**@type {T}*/ ($Casts.$to(fi_4, BaseFilterInput));
   let value_3 = /**@type {?string}*/ ($Casts.$to(value_2, j_l_String));
   return !this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput.m_isEmpty__boolean();
  }));
  this.m_addLabelGroup__org_patternfly_component_label_LabelGroup__org_patternfly_component_textinputgroup_BaseFilterInput(LabelGroup.m_labelGroup__org_patternfly_component_label_LabelGroup().m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_label_LabelGroup(AddItemHandler.$adapt((/** LabelGroup */ __, /** Label */ label) =>{
   let ___1 = /**@type {LabelGroup}*/ ($Casts.$to(__, LabelGroup));
   let label_1 = /**@type {Label}*/ ($Casts.$to(label, Label));
   this.m_toggleUtilities__java_lang_String__void(this.m_value__java_lang_String());
   this.m_toggleLabelGroup__java_lang_String__void(this.m_value__java_lang_String());
   this.f_onAdd__org_patternfly_component_textinputgroup_BaseFilterInput.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** BiConsumer<T, Label> */ h) =>{
    let h_1 = /**@type {BiConsumer<T, Label>}*/ ($Casts.$to(h, /**@type {Function}*/ (BiConsumer)));
    h_1.m_accept__java_lang_Object__java_lang_Object__void(/**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput)), label_1);
   }));
  })).m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_label_LabelGroup(RemoveItemHandler.$adapt((/** LabelGroup */ ___2, /** Label */ label_2) =>{
   let ___3 = /**@type {LabelGroup}*/ ($Casts.$to(___2, LabelGroup));
   let label_3 = /**@type {Label}*/ ($Casts.$to(label_2, Label));
   this.m_toggleUtilities__java_lang_String__void(this.m_value__java_lang_String());
   this.m_toggleLabelGroup__java_lang_String__void(this.m_value__java_lang_String());
   this.f_onRemove__org_patternfly_component_textinputgroup_BaseFilterInput.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** BiConsumer<T, Label> */ h_2) =>{
    let h_3 = /**@type {BiConsumer<T, Label>}*/ ($Casts.$to(h_2, /**@type {Function}*/ (BiConsumer)));
    h_3.m_accept__java_lang_Object__java_lang_Object__void(/**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput)), label_3);
   }));
  })));
  this.m_toggleLabelGroup__java_lang_String__void(this.m_value__java_lang_String());
  this.m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_1, /** T */ tig, /** ?string */ value_4) =>{
   let tig_1 = /**@type {T}*/ ($Casts.$to(tig, BaseFilterInput));
   let value_5 = /**@type {?string}*/ ($Casts.$to(value_4, j_l_String));
   if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_Event__boolean(e_1) && !j_l_String.m_isEmpty__java_lang_String__boolean(value_5)) {
    if (!$Equality.$same(this.f_addOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput, null)) {
     if (this.f_allowDuplicates__org_patternfly_component_textinputgroup_BaseFilterInput) {
      this.f_addOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput)));
     } else {
      let identifier = /**@type {?string}*/ ($Casts.$to(this.f_textToIdentifier__org_patternfly_component_textinputgroup_BaseFilterInput.m_apply__java_lang_Object__java_lang_Object(value_5), j_l_String));
      if (!this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput.m_contains__java_lang_String__boolean(identifier)) {
       this.f_addOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput)));
      }
     }
    }
    this.f_onEnter__org_patternfly_component_textinputgroup_BaseFilterInput.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<T> */ h_4) =>{
     let h_5 = /**@type {ComponentHandler<T>}*/ ($Casts.$to(h_4, /**@type {Function}*/ (ComponentHandler)));
     h_5.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput)));
    }));
   }
  }));
 }
 /** @nodts @return {T} */
 m_addLabelGroup__org_patternfly_component_label_LabelGroup__org_patternfly_component_textinputgroup_BaseFilterInput(/** LabelGroup */ labelGroup) {
  return this.m_add__org_patternfly_component_label_LabelGroup__org_patternfly_component_textinputgroup_BaseFilterInput(labelGroup);
 }
 /** @nodts @return {T} */
 m_add__org_patternfly_component_label_LabelGroup__org_patternfly_component_textinputgroup_BaseFilterInput(/** LabelGroup */ labelGroup) {
  this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput = labelGroup;
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(this.f_mainContainer__org_patternfly_component_textinputgroup_BaseTextInputGroup, labelGroup);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {T} */
 m_allowDuplicates__org_patternfly_component_textinputgroup_BaseFilterInput() {
  return this.m_allowDuplicates__boolean__org_patternfly_component_textinputgroup_BaseFilterInput(true);
 }
 /** @nodts @return {T} */
 m_allowDuplicates__boolean__org_patternfly_component_textinputgroup_BaseFilterInput(/** boolean */ allowDuplicates) {
  this.f_allowDuplicates__org_patternfly_component_textinputgroup_BaseFilterInput = allowDuplicates;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {T} */
 m_noAddOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput() {
  this.f_addOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput = null;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {T} */
 m_textToIdentifier__java_util_function_Function__org_patternfly_component_textinputgroup_BaseFilterInput(/** j_u_function_Function<?string, ?string> */ textToIdentifier) {
  this.f_textToIdentifier__org_patternfly_component_textinputgroup_BaseFilterInput = textToIdentifier;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {T} */
 m_textToLabel__java_util_function_Function__org_patternfly_component_textinputgroup_BaseFilterInput(/** j_u_function_Function<?string, Label> */ textToLabel) {
  this.f_textToLabel__org_patternfly_component_textinputgroup_BaseFilterInput = textToLabel;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {T} */
 m_showLabelGroupIf__java_util_function_BiFunction__org_patternfly_component_textinputgroup_BaseFilterInput(/** BiFunction<T, ?string, ?boolean> */ visibility) {
  this.f_labelGroupVisibility__org_patternfly_component_textinputgroup_BaseFilterInput = visibility;
  this.m_toggleLabelGroup__java_lang_String__void(this.m_value__java_lang_String());
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {T} */
 m_onAdd__java_util_function_BiConsumer__org_patternfly_component_textinputgroup_BaseFilterInput(/** BiConsumer<T, Label> */ onAdd) {
  this.f_onAdd__org_patternfly_component_textinputgroup_BaseFilterInput.add(onAdd);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {T} */
 m_onRemove__java_util_function_BiConsumer__org_patternfly_component_textinputgroup_BaseFilterInput(/** BiConsumer<T, Label> */ onRemove) {
  this.f_onRemove__org_patternfly_component_textinputgroup_BaseFilterInput.add(onRemove);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {T} */
 m_onEnter__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseFilterInput(/** ComponentHandler<T> */ onEnter) {
  this.f_onEnter__org_patternfly_component_textinputgroup_BaseFilterInput.add(onEnter);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts @return {LabelGroup} */
 m_labelGroup__org_patternfly_component_label_LabelGroup() {
  return this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput;
 }
 /** @nodts @return {j_u_function_Function<?string, ?string>} */
 m_textToIdentifier__java_util_function_Function() {
  return this.f_textToIdentifier__org_patternfly_component_textinputgroup_BaseFilterInput;
 }
 /** @nodts @return {j_u_function_Function<?string, Label>} */
 m_textToLabel__java_util_function_Function() {
  return this.f_textToLabel__org_patternfly_component_textinputgroup_BaseFilterInput;
 }
 /** @nodts @return {T} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseFilterInput(/** ?string */ value) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseFilterInput(value, false);
 }
 /** @nodts @return {T} */
 m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseFilterInput(/** ?string */ value, /** boolean */ fireEvent) {
  super.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseSearchInput(value, fireEvent);
  this.m_toggleLabelGroup__java_lang_String__void(value);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput));
 }
 /** @nodts */
 m_toggleLabelGroup__java_lang_String__void(/** ?string */ value) {
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_labelGroup__org_patternfly_component_textinputgroup_BaseFilterInput, Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_labelGroupVisibility__org_patternfly_component_textinputgroup_BaseFilterInput.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseFilterInput)), value), Boolean))));
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput(/** ?string */ arg0) {
  return this.m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseFilterInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseSearchInput(/** ?string */ arg0, /** boolean */ arg1) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseFilterInput(arg0, arg1);
 }
 /** @nodts @return {j_u_function_Function<?string, ?string>} */
 static get f_DEFAULT_TEXT_TO_IDENTIFIER__org_patternfly_component_textinputgroup_BaseFilterInput() {
  return (BaseFilterInput.$clinit(), BaseFilterInput.$static_DEFAULT_TEXT_TO_IDENTIFIER__org_patternfly_component_textinputgroup_BaseFilterInput);
 }
 /** @nodts @return {j_u_function_Function<?string, Label>} */
 static get f_DEFAULT_TEXT_TO_LABEL__org_patternfly_component_textinputgroup_BaseFilterInput() {
  return (BaseFilterInput.$clinit(), BaseFilterInput.$static_DEFAULT_TEXT_TO_LABEL__org_patternfly_component_textinputgroup_BaseFilterInput);
 }
 /** @nodts */
 static $clinit() {
  BaseFilterInput.$clinit = () =>{};
  BaseFilterInput.$loadModules();
  BaseSearchInput.$clinit();
  BaseFilterInput.$static_DEFAULT_TEXT_TO_IDENTIFIER__org_patternfly_component_textinputgroup_BaseFilterInput = j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** ?string */ arg0) =>{
   let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
   return Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(arg0_1, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)));
  }));
  BaseFilterInput.$static_DEFAULT_TEXT_TO_LABEL__org_patternfly_component_textinputgroup_BaseFilterInput = j_u_function_Function.$adapt(/**  @return {Label}*/ ((/** ?string */ text) =>{
   let text_1 = /**@type {?string}*/ ($Casts.$to(text, j_l_String));
   return Label.m_label__java_lang_String__java_lang_String__org_patternfly_component_label_Label(/**@type {?string}*/ ($Casts.$to(BaseFilterInput.$static_DEFAULT_TEXT_TO_IDENTIFIER__org_patternfly_component_textinputgroup_BaseFilterInput.m_apply__java_lang_Object__java_lang_Object(text_1), j_l_String)), text_1).m_outline__org_patternfly_component_label_Label().m_closable__org_patternfly_component_label_Label();
  }));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseFilterInput;
 }
 /** @abstract @override @nodts @return {T} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  AddItemHandler = goog.module.get('org.patternfly.component.AddItemHandler$impl');
  RemoveItemHandler = goog.module.get('org.patternfly.component.RemoveItemHandler$impl');
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
  LabelGroup = goog.module.get('org.patternfly.component.label.LabelGroup$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {j_u_function_Function<?string, ?string>} @nodts*/
BaseFilterInput.$static_DEFAULT_TEXT_TO_IDENTIFIER__org_patternfly_component_textinputgroup_BaseFilterInput;
/**@private {j_u_function_Function<?string, Label>} @nodts*/
BaseFilterInput.$static_DEFAULT_TEXT_TO_LABEL__org_patternfly_component_textinputgroup_BaseFilterInput;
$Util.$setClassMetadata(BaseFilterInput, 'org.patternfly.component.textinputgroup.BaseFilterInput');

exports = BaseFilterInput;

//# sourceMappingURL=BaseFilterInput.js.map
