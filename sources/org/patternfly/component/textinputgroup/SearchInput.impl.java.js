goog.module('org.patternfly.component.textinputgroup.SearchInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseSearchInput = goog.require('org.patternfly.component.textinputgroup.BaseSearchInput$impl');

let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseSearchInput<SearchInput>}
 */
class SearchInput extends BaseSearchInput {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {SearchInput} */
 static m_searchInput__java_lang_String__org_patternfly_component_textinputgroup_SearchInput(/** ?string */ id) {
  SearchInput.$clinit();
  return SearchInput.$create__java_lang_String(id);
 }
 /** @nodts @return {SearchInput} */
 static m_searchInput__java_lang_String__java_lang_String__org_patternfly_component_textinputgroup_SearchInput(/** ?string */ id, /** ?string */ value) {
  SearchInput.$clinit();
  return /**@type {SearchInput}*/ ($Casts.$to(SearchInput.$create__java_lang_String(id).m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput(value), SearchInput));
 }
 /** @nodts @return {!SearchInput} */
 static $create__java_lang_String(/** ?string */ id) {
  SearchInput.$clinit();
  let $instance = new SearchInput();
  $instance.$ctor__org_patternfly_component_textinputgroup_SearchInput__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_SearchInput__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_ComponentType__java_lang_String__void(ComponentType.f_SearchInput__org_patternfly_component_ComponentType, id);
 }
 /** @nodts @return {SearchInput} */
 m_that__org_patternfly_component_textinputgroup_SearchInput() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {SearchInput} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_SearchInput();
 }
 /** @nodts */
 static $clinit() {
  SearchInput.$clinit = () =>{};
  SearchInput.$loadModules();
  BaseSearchInput.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SearchInput;
 }
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SearchInput, 'org.patternfly.component.textinputgroup.SearchInput');

exports = SearchInput;

//# sourceMappingURL=SearchInput.js.map
