goog.module('org.patternfly.extension.finder.FinderColumnSearch$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FinderSubComponent = goog.require('org.patternfly.extension.finder.FinderSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiPredicate = goog.forwardDeclare('java.util.function.BiPredicate$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let SearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.SearchInput$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let FinderColumn = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumn$impl');
let FinderItem = goog.forwardDeclare('org.patternfly.extension.finder.FinderItem$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FinderSubComponent<HTMLElement, FinderColumnSearch>}
 */
class FinderColumnSearch extends FinderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FinderColumnSearch} */
 static m_finderColumnSearch__org_patternfly_extension_finder_FinderColumnSearch() {
  FinderColumnSearch.$clinit();
  return FinderColumnSearch.$create__();
 }
 /** @nodts @return {!FinderColumnSearch} */
 static $create__() {
  FinderColumnSearch.$clinit();
  let $instance = new FinderColumnSearch();
  $instance.$ctor__org_patternfly_extension_finder_FinderColumnSearch__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderColumnSearch__void() {
  this.$ctor__org_patternfly_extension_finder_FinderSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FinderColumnSearch.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumnSearch, FinderColumnSearch.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderColumnSearch, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderClasses.f_column__org_patternfly_extension_finder_FinderClasses, Classes.f_search__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {FinderColumnSearch} */
 m_addSearchInput__org_patternfly_component_textinputgroup_SearchInput__org_patternfly_extension_finder_FinderColumnSearch(/** SearchInput */ input) {
  return this.m_add__org_patternfly_component_textinputgroup_SearchInput__java_util_function_BiPredicate__org_patternfly_extension_finder_FinderColumnSearch(input, null);
 }
 /** @nodts @return {FinderColumnSearch} */
 m_add__org_patternfly_component_textinputgroup_SearchInput__org_patternfly_extension_finder_FinderColumnSearch(/** SearchInput */ input) {
  return this.m_add__org_patternfly_component_textinputgroup_SearchInput__java_util_function_BiPredicate__org_patternfly_extension_finder_FinderColumnSearch(input, null);
 }
 /** @nodts @return {FinderColumnSearch} */
 m_addSearchInput__org_patternfly_component_textinputgroup_SearchInput__java_util_function_BiPredicate__org_patternfly_extension_finder_FinderColumnSearch(/** SearchInput */ input, /** BiPredicate<FinderItem, ?string> */ predicate) {
  return this.m_add__org_patternfly_component_textinputgroup_SearchInput__java_util_function_BiPredicate__org_patternfly_extension_finder_FinderColumnSearch(input, predicate);
 }
 /** @nodts @return {FinderColumnSearch} */
 m_add__org_patternfly_component_textinputgroup_SearchInput__java_util_function_BiPredicate__org_patternfly_extension_finder_FinderColumnSearch(/** SearchInput */ input, /** BiPredicate<FinderItem, ?string> */ predicate) {
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(input.m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(predicate, null)) {
   input.m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e, /** SearchInput */ si, /** ?string */ value) =>{
    let si_1 = /**@type {SearchInput}*/ ($Casts.$to(si, SearchInput));
    let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
    let column = /**@type {FinderColumn}*/ ($Casts.$to(this.m_lookupSubComponent__java_lang_String__boolean__org_patternfly_component_SubComponent(FinderColumn.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumn, true), FinderColumn));
    if (!$Equality.$same(column, null)) {
     for (let $iterator = column.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
      let item = /**@type {FinderItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderItem));
      {
       item.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_filtered__org_patternfly_style_Classes), predicate.m_test__java_lang_Object__java_lang_Object__boolean(item, value_1));
      }
     }
    }
   }));
   input.m_onClear__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(ComponentHandler.$adapt((/** Event */ e_1, /** SearchInput */ si_2) =>{
    let si_3 = /**@type {SearchInput}*/ ($Casts.$to(si_2, SearchInput));
    let column_1 = /**@type {FinderColumn}*/ ($Casts.$to(this.m_lookupSubComponent__java_lang_String__boolean__org_patternfly_component_SubComponent(FinderColumn.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumn, true), FinderColumn));
    if (!$Equality.$same(column_1, null)) {
     column_1.m_items__java_util_List().m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** FinderItem */ item_1) =>{
      let item_2 = /**@type {FinderItem}*/ ($Casts.$to(item_1, FinderItem));
      item_2.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_filtered__org_patternfly_style_Classes)], j_l_String)));
     }));
    }
   }));
  }
  return this;
 }
 /** @nodts @return {FinderColumnSearch} */
 m_that__org_patternfly_extension_finder_FinderColumnSearch() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumnSearch} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_FinderColumnSearch();
 }
 /** @nodts */
 static $clinit() {
  FinderColumnSearch.$clinit = () =>{};
  FinderColumnSearch.$loadModules();
  FinderSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderColumnSearch;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  SearchInput = goog.module.get('org.patternfly.component.textinputgroup.SearchInput$impl');
  FinderClasses = goog.module.get('org.patternfly.extension.finder.FinderClasses$impl');
  FinderColumn = goog.module.get('org.patternfly.extension.finder.FinderColumn$impl');
  FinderItem = goog.module.get('org.patternfly.extension.finder.FinderItem$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FinderColumnSearch.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumnSearch = 'fcs';
/**@const {string} @nodts*/
FinderColumnSearch.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderColumnSearch = 'FinderColumnSearch';
$Util.$setClassMetadata(FinderColumnSearch, 'org.patternfly.extension.finder.FinderColumnSearch');

exports = FinderColumnSearch;

//# sourceMappingURL=FinderColumnSearch.js.map
