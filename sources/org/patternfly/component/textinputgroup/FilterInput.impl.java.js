goog.module('org.patternfly.component.textinputgroup.FilterInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseFilterInput = goog.require('org.patternfly.component.textinputgroup.BaseFilterInput$impl');

let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseFilterInput<FilterInput>}
 */
class FilterInput extends BaseFilterInput {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FilterInput} */
 static m_filterInput__java_lang_String__org_patternfly_component_textinputgroup_FilterInput(/** ?string */ id) {
  FilterInput.$clinit();
  return FilterInput.$create__java_lang_String(id);
 }
 /** @nodts @return {FilterInput} */
 static m_filterInput__java_lang_String__java_lang_String__org_patternfly_component_textinputgroup_FilterInput(/** ?string */ id, /** ?string */ value) {
  FilterInput.$clinit();
  return /**@type {FilterInput}*/ ($Casts.$to(FilterInput.$create__java_lang_String(id).m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseFilterInput(value), FilterInput));
 }
 /** @nodts @return {!FilterInput} */
 static $create__java_lang_String(/** ?string */ id) {
  FilterInput.$clinit();
  let $instance = new FilterInput();
  $instance.$ctor__org_patternfly_component_textinputgroup_FilterInput__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_FilterInput__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_textinputgroup_BaseFilterInput__org_patternfly_component_ComponentType__java_lang_String__void(ComponentType.f_FilterInput__org_patternfly_component_ComponentType, id);
 }
 /** @nodts @return {FilterInput} */
 m_that__org_patternfly_component_textinputgroup_FilterInput() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FilterInput} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_FilterInput();
 }
 /** @nodts */
 static $clinit() {
  FilterInput.$clinit = () =>{};
  FilterInput.$loadModules();
  BaseFilterInput.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterInput;
 }
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FilterInput, 'org.patternfly.component.textinputgroup.FilterInput');

exports = FilterInput;

//# sourceMappingURL=FilterInput.js.map
