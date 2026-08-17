goog.module('org.patternfly.component.menu.PopperSingleTypeahead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopperSingleMenuToggleMenu = goog.require('org.patternfly.component.menu.PopperSingleMenuToggleMenu$impl');
const PopperTypeahead = goog.require('org.patternfly.component.menu.PopperTypeahead$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let TypeaheadSupport = goog.forwardDeclare('org.patternfly.component.menu.TypeaheadSupport$impl');
let BaseSearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
let SearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.SearchInput$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PopperSingleMenuToggleMenu<PopperSingleTypeahead>}
 * @implements {PopperTypeahead<PopperSingleTypeahead>}
 * @deprecated
 */
class PopperSingleTypeahead extends PopperSingleMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SearchFilter} @nodts*/
  this.f_searchFilter__org_patternfly_component_menu_PopperSingleTypeahead_;
  /**@type {NoResults} @nodts*/
  this.f_noResults__org_patternfly_component_menu_PopperSingleTypeahead_;
 }
 /** @nodts @return {PopperSingleTypeahead} */
 static m_singleTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_PopperSingleTypeahead(/** ?string */ id, /** ?string */ placeholder) {
  PopperSingleTypeahead.$clinit();
  return PopperSingleTypeahead.$create__org_patternfly_component_textinputgroup_BaseSearchInput(/**@type {SearchInput}*/ ($Casts.$to((/**@type {SearchInput}*/ ($Casts.$to(SearchInput.m_searchInput__java_lang_String__org_patternfly_component_textinputgroup_SearchInput(id).m_plain__org_jboss_elemento_TypedBuilder(), SearchInput))).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(placeholder), SearchInput)));
 }
 /** @nodts @return {PopperSingleTypeahead} */
 static m_singleTypeahead__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_menu_PopperSingleTypeahead(/** BaseSearchInput<?> */ searchInput) {
  PopperSingleTypeahead.$clinit();
  return PopperSingleTypeahead.$create__org_patternfly_component_textinputgroup_BaseSearchInput(searchInput);
 }
 /** @nodts @return {!PopperSingleTypeahead} */
 static $create__org_patternfly_component_textinputgroup_BaseSearchInput(/** BaseSearchInput<?> */ searchInput) {
  PopperSingleTypeahead.$clinit();
  let $instance = new PopperSingleTypeahead();
  $instance.$ctor__org_patternfly_component_menu_PopperSingleTypeahead__org_patternfly_component_textinputgroup_BaseSearchInput__void(searchInput);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_PopperSingleTypeahead__org_patternfly_component_textinputgroup_BaseSearchInput__void(/** BaseSearchInput<?> */ searchInput) {
  this.$ctor__org_patternfly_component_menu_PopperSingleMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(ComponentType.f_PopperSingleTypeahead__org_patternfly_component_ComponentType, MenuToggle.m_menuToggle__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_menu_MenuToggle(searchInput), TriggerAction.f_click__org_patternfly_popper_TriggerAction);
  this.f_searchFilter__org_patternfly_component_menu_PopperSingleTypeahead_ = SearchFilter.m_contains__org_patternfly_component_menu_SearchFilter();
  this.f_noResults__org_patternfly_component_menu_PopperSingleTypeahead_ = NoResults.m_noResults__org_patternfly_component_menu_NoResults();
  TypeaheadSupport.m_typeaheadDefaults__org_patternfly_component_menu_PopperMenuToggleMenu__void(this);
  this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e, /** ? */ c, /** ?string */ value) =>{
   let c_1 = /**@type {?}*/ ($Casts.$to(c, BaseSearchInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   if (TypeaheadSupport.m_shouldExpandOnKeyup__org_patternfly_component_menu_PopperMenuToggleMenu__elemental2_dom_Event__boolean(this, e)) {
    this.m_expand__boolean__void(false);
   }
   this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_searchFilter__org_patternfly_component_menu_PopperSingleTypeahead_, this.f_noResults__org_patternfly_component_menu_PopperSingleTypeahead_, value_1);
  }));
  this.m_stayOpen__java_util_function_Predicate__org_jboss_elemento_TypedBuilder(Predicate.$adapt(/**  @return {boolean}*/ ((/** Event */ event) =>{
   let event_1 = /**@type {Event}*/ ($Casts.$to(event, $Overlay));
   let target = /**@type {Node}*/ ($Casts.$to(event_1.target, Node_$Overlay));
   let inputClick = $Equality.$same(searchInput.m_input__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement(), target);
   let utilitiesClick = !$Equality.$same(searchInput.m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities(), null) && (/**@type {HTMLDivElement}*/ ($Casts.$to(searchInput.m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).contains(target);
   return inputClick || utilitiesClick;
  })));
 }
 /** @override @nodts */
 m_updateMenuToggle__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {
  this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_text__java_lang_String__org_patternfly_component_menu_MenuToggle(item.m_text__java_lang_String());
 }
 /** @nodts @return {PopperSingleTypeahead} */
 m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_PopperSingleTypeahead(/** Menu */ menu) {
  super.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(menu);
  this.m_searchInputControlsMenuList__void_$pp_org_patternfly_component_menu();
  return this;
 }
 /** @nodts @return {PopperSingleTypeahead} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_PopperSingleTypeahead(/** j_u_function_Function<?string, ?string> */ prompt, /** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {
  TypeaheadSupport.m_allowNewItems__org_patternfly_component_menu_PopperMenuToggleMenu__org_patternfly_component_menu_PopperTypeahead__java_util_function_Function__java_util_function_Function__void(this, this, prompt, createItem);
  return this;
 }
 /** @nodts @return {PopperSingleTypeahead} */
 m_that__org_patternfly_component_menu_PopperSingleTypeahead() {
  return this;
 }
 /** @nodts @return {PopperSingleTypeahead} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_PopperSingleTypeahead(/** SearchFilter */ searchFilter) {
  this.f_searchFilter__org_patternfly_component_menu_PopperSingleTypeahead_ = searchFilter;
  return this;
 }
 /** @nodts @return {PopperSingleTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_PopperSingleTypeahead(/** NoResults */ noResults) {
  this.f_noResults__org_patternfly_component_menu_PopperSingleTypeahead_ = noResults;
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperSingleTypeahead} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_PopperMenuToggleMenu(/** j_u_function_Function<?string, Promise<MenuItem>> */ arg0) {
  return /**@type {PopperSingleTypeahead}*/ ($Casts.$to(PopperTypeahead.m_allowNewItems__$default__org_patternfly_component_menu_PopperTypeahead__java_util_function_Function__org_patternfly_component_menu_PopperMenuToggleMenu(this, arg0), PopperSingleTypeahead));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperSingleTypeahead} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_PopperMenuToggleMenu(/** j_u_function_Function<?string, ?string> */ arg0, /** j_u_function_Function<?string, Promise<MenuItem>> */ arg1) {
  return this.m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_PopperSingleTypeahead(arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperSingleTypeahead} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_PopperMenuToggleMenu(/** SearchFilter */ arg0) {
  return this.m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_PopperSingleTypeahead(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperSingleTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_PopperMenuToggleMenu(/** NoResults */ arg0) {
  return this.m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_PopperSingleTypeahead(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperSingleTypeahead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_PopperSingleTypeahead();
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperSingleTypeahead} */
 m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ arg0) {
  return this.m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_PopperSingleTypeahead(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {PopperSingleTypeahead} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_PopperSingleTypeahead(/** j_u_function_Function<?string, Promise<MenuItem>> */ arg0) {
  return /**@type {PopperSingleTypeahead}*/ ($Casts.$to(PopperTypeahead.m_allowNewItems__$default__org_patternfly_component_menu_PopperTypeahead__java_util_function_Function__org_patternfly_component_menu_PopperMenuToggleMenu(this, arg0), PopperSingleTypeahead));
 }
 /** @nodts */
 static $clinit() {
  PopperSingleTypeahead.$clinit = () =>{};
  PopperSingleTypeahead.$loadModules();
  PopperSingleMenuToggleMenu.$clinit();
  PopperTypeahead.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperSingleTypeahead;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  NoResults = goog.module.get('org.patternfly.component.menu.NoResults$impl');
  SearchFilter = goog.module.get('org.patternfly.component.menu.SearchFilter$impl');
  TypeaheadSupport = goog.module.get('org.patternfly.component.menu.TypeaheadSupport$impl');
  BaseSearchInput = goog.module.get('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
  SearchInput = goog.module.get('org.patternfly.component.textinputgroup.SearchInput$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
PopperTypeahead.$markImplementor(PopperSingleTypeahead);
$Util.$setClassMetadata(PopperSingleTypeahead, 'org.patternfly.component.menu.PopperSingleTypeahead');

exports = PopperSingleTypeahead;

//# sourceMappingURL=PopperSingleTypeahead.js.map
