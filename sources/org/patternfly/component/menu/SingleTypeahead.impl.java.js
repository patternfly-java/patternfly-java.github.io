goog.module('org.patternfly.component.menu.SingleTypeahead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SingleMenuToggleMenu = goog.require('org.patternfly.component.menu.SingleMenuToggleMenu$impl');
const Typeahead = goog.require('org.patternfly.component.menu.Typeahead$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let StayOpenPredicate = goog.forwardDeclare('org.patternfly.component.menu.StayOpenPredicate$impl');
let TypeaheadSupport = goog.forwardDeclare('org.patternfly.component.menu.TypeaheadSupport$impl');
let BaseSearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
let BaseTextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');
let SearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.SearchInput$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SingleMenuToggleMenu<SingleTypeahead>}
 * @implements {Typeahead<SingleTypeahead>}
 */
class SingleTypeahead extends SingleMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SearchFilter} @nodts*/
  this.f_searchFilter__org_patternfly_component_menu_SingleTypeahead_;
  /**@type {NoResults} @nodts*/
  this.f_noResults__org_patternfly_component_menu_SingleTypeahead_;
 }
 /** @nodts @return {SingleTypeahead} */
 static m_singleTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_SingleTypeahead(/** ?string */ id, /** ?string */ placeholder) {
  SingleTypeahead.$clinit();
  return SingleTypeahead.$create__org_patternfly_component_textinputgroup_BaseSearchInput(/**@type {SearchInput}*/ ($Casts.$to((/**@type {SearchInput}*/ ($Casts.$to(SearchInput.m_searchInput__java_lang_String__org_patternfly_component_textinputgroup_SearchInput(id).m_plain__org_jboss_elemento_TypedBuilder(), SearchInput))).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(placeholder), SearchInput)));
 }
 /** @nodts @return {SingleTypeahead} */
 static m_singleTypeahead__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_menu_SingleTypeahead(/** BaseSearchInput<?> */ searchInput) {
  SingleTypeahead.$clinit();
  return SingleTypeahead.$create__org_patternfly_component_textinputgroup_BaseSearchInput(searchInput);
 }
 /** @nodts @return {!SingleTypeahead} */
 static $create__org_patternfly_component_textinputgroup_BaseSearchInput(/** BaseSearchInput<?> */ searchInput) {
  SingleTypeahead.$clinit();
  let $instance = new SingleTypeahead();
  $instance.$ctor__org_patternfly_component_menu_SingleTypeahead__org_patternfly_component_textinputgroup_BaseSearchInput__void(searchInput);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_SingleTypeahead__org_patternfly_component_textinputgroup_BaseSearchInput__void(/** BaseSearchInput<?> */ searchInput) {
  this.$ctor__org_patternfly_component_menu_SingleMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__void(ComponentType.f_SingleTypeahead__org_patternfly_component_ComponentType, MenuToggle.m_menuToggle__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_menu_MenuToggle(searchInput));
  this.f_searchFilter__org_patternfly_component_menu_SingleTypeahead_ = SearchFilter.m_contains__org_patternfly_component_menu_SearchFilter();
  this.f_noResults__org_patternfly_component_menu_SingleTypeahead_ = NoResults.m_noResults__org_patternfly_component_menu_NoResults();
  TypeaheadSupport.m_typeaheadDefaults__org_patternfly_component_menu_MenuToggleMenu__void(this);
  (/**@type {!BaseTextInputGroup<BaseSearchInput>}*/ (this.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e, /** ? */ c, /** ?string */ value) =>{
   let c_1 = /**@type {?}*/ ($Casts.$to(c, BaseSearchInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   if (TypeaheadSupport.m_shouldExpandOnKeyup__org_patternfly_component_menu_MenuToggleMenu__elemental2_dom_Event__boolean(this, e)) {
    this.m_expand__boolean__void(false);
   }
   this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_searchFilter__org_patternfly_component_menu_SingleTypeahead_, this.f_noResults__org_patternfly_component_menu_SingleTypeahead_, value_1);
  })))).m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_1, /** ? */ c_2, /** ?string */ value_2) =>{
   let c_3 = /**@type {?}*/ ($Casts.$to(c_2, BaseSearchInput));
   let value_3 = /**@type {?string}*/ ($Casts.$to(value_2, j_l_String));
   this.m_expand__boolean__void(false);
   this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_searchFilter__org_patternfly_component_menu_SingleTypeahead_, this.f_noResults__org_patternfly_component_menu_SingleTypeahead_, value_3);
  }));
  this.m_stayOpen__org_patternfly_component_menu_StayOpenPredicate__org_jboss_elemento_TypedBuilder(StayOpenPredicate.$adapt(/**  @return {boolean}*/ ((/** Event */ e_2, /** MenuToggle */ mt, /** Menu */ m) =>{
   return TypeaheadSupport.m_utilitiesClick__elemental2_dom_Event__boolean(e_2);
  })));
 }
 /** @override @nodts */
 m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {
  this.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_text__java_lang_String__org_patternfly_component_menu_MenuToggle(item.m_text__java_lang_String());
 }
 /** @nodts @return {SingleTypeahead} */
 m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_SingleTypeahead(/** Menu */ menu) {
  super.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(menu);
  this.m_searchInputControlsMenuList__void_$pp_org_patternfly_component_menu();
  return this;
 }
 /** @nodts @return {SingleTypeahead} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_SingleTypeahead(/** j_u_function_Function<?string, ?string> */ prompt, /** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {
  TypeaheadSupport.m_allowNewItems__org_patternfly_component_menu_MenuToggleMenu__org_patternfly_component_menu_Typeahead__java_util_function_Function__java_util_function_Function__void(this, this, prompt, createItem);
  return this;
 }
 /** @nodts @return {SingleTypeahead} */
 m_that__org_patternfly_component_menu_SingleTypeahead() {
  return this;
 }
 /** @nodts @return {SingleTypeahead} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_SingleTypeahead(/** SearchFilter */ searchFilter) {
  this.f_searchFilter__org_patternfly_component_menu_SingleTypeahead_ = searchFilter;
  return this;
 }
 /** @nodts @return {SingleTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_SingleTypeahead(/** NoResults */ noResults) {
  this.f_noResults__org_patternfly_component_menu_SingleTypeahead_ = noResults;
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleTypeahead} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(/** j_u_function_Function<?string, Promise<MenuItem>> */ arg0) {
  return /**@type {SingleTypeahead}*/ ($Casts.$to(Typeahead.m_allowNewItems__$default__org_patternfly_component_menu_Typeahead__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(this, arg0), SingleTypeahead));
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleTypeahead} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(/** j_u_function_Function<?string, ?string> */ arg0, /** j_u_function_Function<?string, Promise<MenuItem>> */ arg1) {
  return this.m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_SingleTypeahead(arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleTypeahead} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_MenuToggleMenu(/** SearchFilter */ arg0) {
  return this.m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_SingleTypeahead(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_MenuToggleMenu(/** NoResults */ arg0) {
  return this.m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_SingleTypeahead(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleTypeahead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_SingleTypeahead();
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleTypeahead} */
 m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ arg0) {
  return this.m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_SingleTypeahead(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {SingleTypeahead} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_SingleTypeahead(/** j_u_function_Function<?string, Promise<MenuItem>> */ arg0) {
  return /**@type {SingleTypeahead}*/ ($Casts.$to(Typeahead.m_allowNewItems__$default__org_patternfly_component_menu_Typeahead__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(this, arg0), SingleTypeahead));
 }
 /** @nodts */
 static $clinit() {
  SingleTypeahead.$clinit = () =>{};
  SingleTypeahead.$loadModules();
  SingleMenuToggleMenu.$clinit();
  Typeahead.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingleTypeahead;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  NoResults = goog.module.get('org.patternfly.component.menu.NoResults$impl');
  SearchFilter = goog.module.get('org.patternfly.component.menu.SearchFilter$impl');
  StayOpenPredicate = goog.module.get('org.patternfly.component.menu.StayOpenPredicate$impl');
  TypeaheadSupport = goog.module.get('org.patternfly.component.menu.TypeaheadSupport$impl');
  BaseSearchInput = goog.module.get('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
  SearchInput = goog.module.get('org.patternfly.component.textinputgroup.SearchInput$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Typeahead.$markImplementor(SingleTypeahead);
$Util.$setClassMetadata(SingleTypeahead, 'org.patternfly.component.menu.SingleTypeahead');

exports = SingleTypeahead;

//# sourceMappingURL=SingleTypeahead.js.map
