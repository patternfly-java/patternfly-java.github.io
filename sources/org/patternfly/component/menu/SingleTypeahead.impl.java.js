goog.module('org.patternfly.component.menu.SingleTypeahead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SingleMenuToggleMenu = goog.require('org.patternfly.component.menu.SingleMenuToggleMenu$impl');
const Typeahead = goog.require('org.patternfly.component.menu.Typeahead$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let ReloadStrategy = goog.forwardDeclare('org.patternfly.async.ReloadStrategy$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let StayOpenPredicate = goog.forwardDeclare('org.patternfly.component.StayOpenPredicate$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let TypeaheadInputController = goog.forwardDeclare('org.patternfly.component.menu.TypeaheadInputController$impl');
let TypeaheadSupport = goog.forwardDeclare('org.patternfly.component.menu.TypeaheadSupport$impl');
let BaseSearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
let BaseTextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');
let SearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.SearchInput$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SingleMenuToggleMenu<SingleTypeahead>}
 * @implements {Typeahead<SingleTypeahead>}
 */
class SingleTypeahead extends SingleMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TypeaheadInputController} @nodts*/
  this.f_inputController__org_patternfly_component_menu_SingleTypeahead_;
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
  this.f_inputController__org_patternfly_component_menu_SingleTypeahead_ = TypeaheadInputController.$create__();
  this.m_onLoaded__org_patternfly_handler_ComponentHandler__org_jboss_elemento_TypedBuilder(ComponentHandler.$adapt((/** Event */ e, /** SingleTypeahead */ c) =>{
   let c_1 = /**@type {SingleTypeahead}*/ ($Casts.$to(c, SingleTypeahead));
   this.f_inputController__org_patternfly_component_menu_SingleTypeahead_.m_handleLoaded__org_patternfly_component_menu_Menu__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_menu__org_patternfly_component_menu_MenuToggleMenu, c_1.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_text__java_lang_String());
  }));
  TypeaheadSupport.m_typeaheadDefaults__org_patternfly_component_menu_MenuToggleMenu__void(this);
  (/**@type {!BaseTextInputGroup<BaseSearchInput>}*/ (this.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_1, /** ? */ c_2, /** ?string */ value) =>{
   let c_3 = /**@type {?}*/ ($Casts.$to(c_2, BaseSearchInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   if (TypeaheadSupport.m_shouldExpandOnKeyup__org_patternfly_component_menu_MenuToggleMenu__elemental2_dom_Event__boolean(this, e_1)) {
    this.m_expand__boolean__void(false);
   }
   this.f_inputController__org_patternfly_component_menu_SingleTypeahead_.m_handleKeyup__org_patternfly_component_menu_Menu__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_menu__org_patternfly_component_menu_MenuToggleMenu, value_1);
  })))).m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_2, /** ? */ c_4, /** ?string */ value_2) =>{
   let c_5 = /**@type {?}*/ ($Casts.$to(c_4, BaseSearchInput));
   let value_3 = /**@type {?string}*/ ($Casts.$to(value_2, j_l_String));
   this.f_inputController__org_patternfly_component_menu_SingleTypeahead_.m_handleInput__java_lang_String__org_patternfly_component_menu_Menu__java_lang_Runnable__java_lang_Runnable__void_$pp_org_patternfly_component_menu(value_3, this.f_menu__org_patternfly_component_menu_MenuToggleMenu, Runnable.$adapt(() =>{
    this.m_expand__boolean__void(false);
   }), Runnable.$adapt(() =>{
    this.m_collapse__boolean__void(false);
   }));
  }));
  this.m_stayOpen__org_patternfly_component_StayOpenPredicate__org_jboss_elemento_TypedBuilder(StayOpenPredicate.$adapt(/**  @return {boolean}*/ ((/** Event */ e_3, /** MenuToggle */ mt, /** Menu */ m) =>{
   let mt_1 = /**@type {MenuToggle}*/ ($Casts.$to(mt, MenuToggle));
   return TypeaheadSupport.m_utilitiesClick__elemental2_dom_Event__boolean(e_3);
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
 m_onFilter__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_SingleTypeahead(/** SearchFilter */ searchFilter) {
  this.f_inputController__org_patternfly_component_menu_SingleTypeahead_.m_searchFilter__org_patternfly_component_menu_SearchFilter__void_$pp_org_patternfly_component_menu(searchFilter);
  return this;
 }
 /** @nodts @return {SingleTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_SingleTypeahead(/** NoResults */ noResults) {
  this.f_inputController__org_patternfly_component_menu_SingleTypeahead_.m_noResults__org_patternfly_component_menu_NoResults__void_$pp_org_patternfly_component_menu(noResults);
  return this;
 }
 /** @nodts @return {SingleTypeahead} */
 m_reloadOn__org_patternfly_async_ReloadStrategy__org_patternfly_component_menu_SingleTypeahead(/** ReloadStrategy */ strategy) {
  this.f_inputController__org_patternfly_component_menu_SingleTypeahead_.m_reloadOn__org_patternfly_async_ReloadStrategy__void_$pp_org_patternfly_component_menu(strategy);
  this.f_loadOnExpand__org_patternfly_component_menu_MenuToggleMenu = false;
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleTypeahead} */
 m_reloadOn__org_patternfly_async_ReloadStrategy__java_lang_Object(/** ReloadStrategy */ arg0) {
  return this.m_reloadOn__org_patternfly_async_ReloadStrategy__org_patternfly_component_menu_SingleTypeahead(arg0);
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
 m_onFilter__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_MenuToggleMenu(/** SearchFilter */ arg0) {
  return this.m_onFilter__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_SingleTypeahead(arg0);
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
  Runnable = goog.module.get('java.lang.Runnable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  StayOpenPredicate = goog.module.get('org.patternfly.component.StayOpenPredicate$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  TypeaheadInputController = goog.module.get('org.patternfly.component.menu.TypeaheadInputController$impl');
  TypeaheadSupport = goog.module.get('org.patternfly.component.menu.TypeaheadSupport$impl');
  BaseSearchInput = goog.module.get('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
  SearchInput = goog.module.get('org.patternfly.component.textinputgroup.SearchInput$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Typeahead.$markImplementor(SingleTypeahead);
$Util.$setClassMetadata(SingleTypeahead, 'org.patternfly.component.menu.SingleTypeahead');

exports = SingleTypeahead;

//# sourceMappingURL=SingleTypeahead.js.map
