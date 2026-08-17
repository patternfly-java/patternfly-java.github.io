goog.module('org.patternfly.component.menu.MenuSearch$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let SearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.SearchInput$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLElement, MenuSearch>}
 * @implements {Attachable}
 * @implements {ElementContainerDelegate<HTMLElement, MenuSearch>}
 */
class MenuSearch extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_inputContainer__org_patternfly_component_menu_MenuSearch_;
  /**@type {SearchInput} @nodts*/
  this.f_searchInput__org_patternfly_component_menu_MenuSearch_;
  /**@type {SearchFilter} @nodts*/
  this.f_searchFilter__org_patternfly_component_menu_MenuSearch_;
  /**@type {NoResults} @nodts*/
  this.f_noResults__org_patternfly_component_menu_MenuSearch_;
 }
 /** @nodts @return {MenuSearch} */
 static m_menuSearch__org_patternfly_component_menu_MenuSearch() {
  MenuSearch.$clinit();
  return MenuSearch.$create__();
 }
 /** @nodts @return {!MenuSearch} */
 static $create__() {
  MenuSearch.$clinit();
  let $instance = new MenuSearch();
  $instance.$ctor__org_patternfly_component_menu_MenuSearch__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuSearch__void() {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MenuSearch.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuSearch, MenuSearch.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuSearch, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_search__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_searchFilter__org_patternfly_component_menu_MenuSearch_ = SearchFilter.m_contains__org_patternfly_component_menu_SearchFilter();
  this.f_noResults__org_patternfly_component_menu_MenuSearch_ = NoResults.m_noResults__org_patternfly_component_menu_NoResults();
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_inputContainer__org_patternfly_component_menu_MenuSearch_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_search__org_patternfly_style_Classes, Classes.f_input__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_inputContainer__org_patternfly_component_menu_MenuSearch_;
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Menu));
  if (!$Equality.$same(this.f_searchFilter__org_patternfly_component_menu_MenuSearch_, null)) {
   if (!$Equality.$same(menu.f_content__org_patternfly_component_menu_Menu, null) && !menu.f_content__org_patternfly_component_menu_Menu.f_groups__org_patternfly_component_menu_MenuContent.isEmpty()) {
    MenuSearch.f_logger__org_patternfly_component_menu_MenuSearch_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Menu %o has a search filter and groups. Search filters are not supported for grouped menus.', [menu]);
   }
   if ($Equality.$same(this.f_searchInput__org_patternfly_component_menu_MenuSearch_, null)) {
    MenuSearch.f_logger__org_patternfly_component_menu_MenuSearch_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Menu %o has a search filter, but no search input was added.', [menu]);
   } else {
    (/**@type {SearchInput}*/ ($Casts.$to(this.f_searchInput__org_patternfly_component_menu_MenuSearch_.m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ event, /** SearchInput */ si, /** ?string */ value) =>{
     let si_1 = /**@type {SearchInput}*/ ($Casts.$to(si, SearchInput));
     let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
     menu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_searchFilter__org_patternfly_component_menu_MenuSearch_, this.f_noResults__org_patternfly_component_menu_MenuSearch_, value_1);
    })), SearchInput))).m_onClear__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(ComponentHandler.$adapt((/** Event */ event_1, /** SearchInput */ si_2) =>{
     let si_3 = /**@type {SearchInput}*/ ($Casts.$to(si_2, SearchInput));
     menu.m_clearSearch__void_$pp_org_patternfly_component_menu();
    }));
   }
  }
 }
 /** @nodts @return {MenuSearch} */
 m_addSearchInput__org_patternfly_component_textinputgroup_SearchInput__org_patternfly_component_menu_MenuSearch(/** SearchInput */ searchInput) {
  this.f_searchInput__org_patternfly_component_menu_MenuSearch_ = searchInput;
  return /**@type {MenuSearch}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(searchInput), MenuSearch));
 }
 /** @nodts @return {MenuSearch} */
 m_that__org_patternfly_component_menu_MenuSearch() {
  return this;
 }
 /** @nodts @return {MenuSearch} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_MenuSearch(/** SearchFilter */ searchFilter) {
  this.f_searchFilter__org_patternfly_component_menu_MenuSearch_ = searchFilter;
  return this;
 }
 /** @nodts @return {MenuSearch} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_MenuSearch(/** NoResults */ noResults) {
  this.f_noResults__org_patternfly_component_menu_MenuSearch_ = noResults;
  return this;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuSearch} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuSearch();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuSearch} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {MenuSearch}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), MenuSearch));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuSearch} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {MenuSearch}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), MenuSearch));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuSearch} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {MenuSearch}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), MenuSearch));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuSearch} */
 m_add__java_lang_String__org_patternfly_component_menu_MenuSearch(/** ?string */ arg0) {
  return /**@type {MenuSearch}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), MenuSearch));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuSearch} */
 m_add__elemental2_dom_Node__org_patternfly_component_menu_MenuSearch(/** Node */ arg0) {
  return /**@type {MenuSearch}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), MenuSearch));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuSearch} */
 m_add__java_util_function_Supplier__org_patternfly_component_menu_MenuSearch(/** Supplier<Node> */ arg0) {
  return /**@type {MenuSearch}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), MenuSearch));
 }
 /** @nodts */
 static $clinit() {
  MenuSearch.$clinit = () =>{};
  MenuSearch.$loadModules();
  MenuSubComponent.$clinit();
  Attachable.$clinit();
  ElementContainerDelegate.$clinit();
  MenuSearch.f_logger__org_patternfly_component_menu_MenuSearch_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(MenuSearch).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuSearch;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  NoResults = goog.module.get('org.patternfly.component.menu.NoResults$impl');
  SearchFilter = goog.module.get('org.patternfly.component.menu.SearchFilter$impl');
  SearchInput = goog.module.get('org.patternfly.component.textinputgroup.SearchInput$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
MenuSearch.f_logger__org_patternfly_component_menu_MenuSearch_;
/**@const {string} @nodts*/
MenuSearch.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuSearch = 'ms';
/**@const {string} @nodts*/
MenuSearch.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuSearch = 'MenuSearch';
Attachable.$markImplementor(MenuSearch);
ElementContainerDelegate.$markImplementor(MenuSearch);
$Util.$setClassMetadata(MenuSearch, 'org.patternfly.component.menu.MenuSearch');

exports = MenuSearch;

//# sourceMappingURL=MenuSearch.js.map
