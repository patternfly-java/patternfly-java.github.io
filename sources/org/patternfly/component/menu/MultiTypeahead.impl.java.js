goog.module('org.patternfly.component.menu.MultiTypeahead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MultiMenuToggleMenu = goog.require('org.patternfly.component.menu.MultiMenuToggleMenu$impl');
const Typeahead = goog.require('org.patternfly.component.menu.Typeahead$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let StayOpenPredicate = goog.forwardDeclare('org.patternfly.component.menu.StayOpenPredicate$impl');
let TypeaheadSupport = goog.forwardDeclare('org.patternfly.component.menu.TypeaheadSupport$impl');
let BaseFilterInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseFilterInput$impl');
let BaseTextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');
let FilterInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.FilterInput$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MultiMenuToggleMenu<MultiTypeahead>}
 * @implements {Typeahead<MultiTypeahead>}
 */
class MultiTypeahead extends MultiMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {BaseFilterInput<?>} @nodts*/
  this.f_filterInput__org_patternfly_component_menu_MultiTypeahead_;
  /**@type {SearchFilter} @nodts*/
  this.f_searchFilter__org_patternfly_component_menu_MultiTypeahead_;
  /**@type {NoResults} @nodts*/
  this.f_noResults__org_patternfly_component_menu_MultiTypeahead_;
 }
 /** @nodts @return {MultiTypeahead} */
 static m_multiTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_MultiTypeahead(/** ?string */ id, /** ?string */ placeholder) {
  MultiTypeahead.$clinit();
  return MultiTypeahead.$create__org_patternfly_component_textinputgroup_BaseFilterInput(/**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to(FilterInput.m_filterInput__java_lang_String__org_patternfly_component_textinputgroup_FilterInput(id).m_plain__org_jboss_elemento_TypedBuilder(), FilterInput))).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(placeholder), FilterInput)));
 }
 /** @nodts @return {MultiTypeahead} */
 static m_multiTypeahead__org_patternfly_component_textinputgroup_BaseFilterInput__org_patternfly_component_menu_MultiTypeahead(/** BaseFilterInput<?> */ filterInput) {
  MultiTypeahead.$clinit();
  return MultiTypeahead.$create__org_patternfly_component_textinputgroup_BaseFilterInput(filterInput);
 }
 /** @nodts @return {!MultiTypeahead} */
 static $create__org_patternfly_component_textinputgroup_BaseFilterInput(/** BaseFilterInput<?> */ filterInput) {
  MultiTypeahead.$clinit();
  let $instance = new MultiTypeahead();
  $instance.$ctor__org_patternfly_component_menu_MultiTypeahead__org_patternfly_component_textinputgroup_BaseFilterInput__void(filterInput);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MultiTypeahead__org_patternfly_component_textinputgroup_BaseFilterInput__void(/** BaseFilterInput<?> */ filterInput) {
  this.$ctor__org_patternfly_component_menu_MultiMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__void(ComponentType.f_MultiTypeahead__org_patternfly_component_ComponentType, MenuToggle.m_menuToggle__org_patternfly_component_textinputgroup_BaseFilterInput__org_patternfly_component_menu_MenuToggle(filterInput));
  this.f_filterInput__org_patternfly_component_menu_MultiTypeahead_ = filterInput;
  this.f_searchFilter__org_patternfly_component_menu_MultiTypeahead_ = SearchFilter.m_contains__org_patternfly_component_menu_SearchFilter();
  this.f_noResults__org_patternfly_component_menu_MultiTypeahead_ = NoResults.m_noResults__org_patternfly_component_menu_NoResults();
  TypeaheadSupport.m_typeaheadDefaults__org_patternfly_component_menu_MenuToggleMenu__void(this);
  (/**@type {!BaseFilterInput<BaseFilterInput>}*/ ((/**@type {!BaseFilterInput<BaseFilterInput>}*/ ($Casts.$to((/**@type {!BaseTextInputGroup<BaseFilterInput>}*/ (filterInput.m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e, /** ? */ c, /** ?string */ value) =>{
   let c_1 = /**@type {?}*/ ($Casts.$to(c, BaseFilterInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   if (TypeaheadSupport.m_shouldExpandOnKeyup__org_patternfly_component_menu_MenuToggleMenu__elemental2_dom_Event__boolean(this, e)) {
    this.m_expand__boolean__void(false);
   }
   this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_searchFilter__org_patternfly_component_menu_MultiTypeahead_, this.f_noResults__org_patternfly_component_menu_MultiTypeahead_, value_1);
  })))).m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_1, /** ? */ c_2, /** ?string */ value_2) =>{
   let c_3 = /**@type {?}*/ ($Casts.$to(c_2, BaseFilterInput));
   let value_3 = /**@type {?string}*/ ($Casts.$to(value_2, j_l_String));
   this.m_expand__boolean__void(false);
   this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_searchFilter__org_patternfly_component_menu_MultiTypeahead_, this.f_noResults__org_patternfly_component_menu_MultiTypeahead_, value_3);
  })), BaseFilterInput))).m_noAddOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput())).m_onEnter__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseFilterInput(ComponentHandler.$adapt((/** Event */ e_2, /** ? */ fi) =>{
   let fi_1 = /**@type {?}*/ ($Casts.$to(fi, BaseFilterInput));
   let identifier = /**@type {?string}*/ ($Casts.$to(filterInput.m_textToIdentifier__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object((/**@type {!BaseTextInputGroup<BaseFilterInput>}*/ (fi_1)).m_value__java_lang_String()), j_l_String));
   let menuItem = this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier);
   if (!$Equality.$same(menuItem, null)) {
    if (!filterInput.m_labelGroup__org_patternfly_component_label_LabelGroup().m_contains__java_lang_String__boolean(identifier)) {
     let label = /**@type {Label}*/ ($Casts.$to(filterInput.m_textToLabel__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object(menuItem.m_text__java_lang_String()), Label));
     filterInput.m_labelGroup__org_patternfly_component_label_LabelGroup().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(label);
     this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem, true, false);
    }
   }
  }));
  this.m_stayOpen__org_patternfly_component_menu_StayOpenPredicate__org_jboss_elemento_TypedBuilder(StayOpenPredicate.$adapt(/**  @return {boolean}*/ ((/** Event */ event, /** MenuToggle */ mt, /** Menu */ m) =>{
   let labelGroupListItemClick = !$Equality.$same(Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Element}*/ ($Casts.$to(event.target, Element_$Overlay)), By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_labelGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String))))), null);
   return this.m_menuItemClick__elemental2_dom_Event__boolean_$pp_org_patternfly_component_menu(event) || TypeaheadSupport.m_utilitiesClick__elemental2_dom_Event__boolean(event) || labelGroupListItemClick;
  })));
 }
 /** @override @nodts */
 m_updateMenuToggle__java_util_List__void_$pp_org_patternfly_component_menu(/** List<MenuItem> */ items) {
  let labelGroup = this.f_filterInput__org_patternfly_component_menu_MultiTypeahead_.m_labelGroup__org_patternfly_component_label_LabelGroup();
  if (!$Equality.$same(labelGroup, null) && !$Equality.$same(items, null)) {
   labelGroup.m_clear__void();
   for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let item = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
    {
     let label = (/**@type {Label}*/ ($Casts.$to(this.f_filterInput__org_patternfly_component_menu_MultiTypeahead_.m_textToLabel__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object(item.m_text__java_lang_String()), Label))).m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(CloseHandler.$adapt((/** Event */ e, /** Label */ c) =>{
      let c_1 = /**@type {Label}*/ ($Casts.$to(c, Label));
      this.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, false, false);
     }));
     labelGroup.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(label);
    }
   }
  }
 }
 /** @nodts @return {MultiTypeahead} */
 m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MultiTypeahead(/** Menu */ menu) {
  super.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(menu);
  this.m_searchInputControlsMenuList__void_$pp_org_patternfly_component_menu();
  return this;
 }
 /** @nodts @return {MultiTypeahead} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_MultiTypeahead(/** j_u_function_Function<?string, ?string> */ prompt, /** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {
  TypeaheadSupport.m_allowNewItems__org_patternfly_component_menu_MenuToggleMenu__org_patternfly_component_menu_Typeahead__java_util_function_Function__java_util_function_Function__void(this, this, prompt, createItem);
  return this;
 }
 /** @nodts @return {MultiTypeahead} */
 m_that__org_patternfly_component_menu_MultiTypeahead() {
  return this;
 }
 /** @nodts @return {MultiTypeahead} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_MultiTypeahead(/** SearchFilter */ searchFilter) {
  this.f_searchFilter__org_patternfly_component_menu_MultiTypeahead_ = searchFilter;
  return this;
 }
 /** @nodts @return {MultiTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_MultiTypeahead(/** NoResults */ noResults) {
  this.f_noResults__org_patternfly_component_menu_MultiTypeahead_ = noResults;
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiTypeahead} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(/** j_u_function_Function<?string, Promise<MenuItem>> */ arg0) {
  return /**@type {MultiTypeahead}*/ ($Casts.$to(Typeahead.m_allowNewItems__$default__org_patternfly_component_menu_Typeahead__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(this, arg0), MultiTypeahead));
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiTypeahead} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(/** j_u_function_Function<?string, ?string> */ arg0, /** j_u_function_Function<?string, Promise<MenuItem>> */ arg1) {
  return this.m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_MultiTypeahead(arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiTypeahead} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_MenuToggleMenu(/** SearchFilter */ arg0) {
  return this.m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_MultiTypeahead(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_MenuToggleMenu(/** NoResults */ arg0) {
  return this.m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_MultiTypeahead(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiTypeahead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MultiTypeahead();
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiTypeahead} */
 m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ arg0) {
  return this.m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MultiTypeahead(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {MultiTypeahead} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_MultiTypeahead(/** j_u_function_Function<?string, Promise<MenuItem>> */ arg0) {
  return /**@type {MultiTypeahead}*/ ($Casts.$to(Typeahead.m_allowNewItems__$default__org_patternfly_component_menu_Typeahead__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(this, arg0), MultiTypeahead));
 }
 /** @nodts */
 static $clinit() {
  MultiTypeahead.$clinit = () =>{};
  MultiTypeahead.$loadModules();
  MultiMenuToggleMenu.$clinit();
  Typeahead.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MultiTypeahead;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  NoResults = goog.module.get('org.patternfly.component.menu.NoResults$impl');
  SearchFilter = goog.module.get('org.patternfly.component.menu.SearchFilter$impl');
  StayOpenPredicate = goog.module.get('org.patternfly.component.menu.StayOpenPredicate$impl');
  TypeaheadSupport = goog.module.get('org.patternfly.component.menu.TypeaheadSupport$impl');
  BaseFilterInput = goog.module.get('org.patternfly.component.textinputgroup.BaseFilterInput$impl');
  FilterInput = goog.module.get('org.patternfly.component.textinputgroup.FilterInput$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Typeahead.$markImplementor(MultiTypeahead);
$Util.$setClassMetadata(MultiTypeahead, 'org.patternfly.component.menu.MultiTypeahead');

exports = MultiTypeahead;

//# sourceMappingURL=MultiTypeahead.js.map
