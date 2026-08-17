goog.module('org.patternfly.component.menu.PopperMultiTypeahead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopperMultiMenuToggleMenu = goog.require('org.patternfly.component.menu.PopperMultiMenuToggleMenu$impl');
const PopperTypeahead = goog.require('org.patternfly.component.menu.PopperTypeahead$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let TypeaheadSupport = goog.forwardDeclare('org.patternfly.component.menu.TypeaheadSupport$impl');
let BaseFilterInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseFilterInput$impl');
let BaseTextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');
let FilterInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.FilterInput$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PopperMultiMenuToggleMenu<PopperMultiTypeahead>}
 * @implements {PopperTypeahead<PopperMultiTypeahead>}
 * @deprecated
 */
class PopperMultiTypeahead extends PopperMultiMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {BaseFilterInput<?>} @nodts*/
  this.f_filterInput__org_patternfly_component_menu_PopperMultiTypeahead_;
  /**@type {SearchFilter} @nodts*/
  this.f_searchFilter__org_patternfly_component_menu_PopperMultiTypeahead_;
  /**@type {NoResults} @nodts*/
  this.f_noResults__org_patternfly_component_menu_PopperMultiTypeahead_;
 }
 /** @nodts @return {PopperMultiTypeahead} */
 static m_multiTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_PopperMultiTypeahead(/** ?string */ id, /** ?string */ placeholder) {
  PopperMultiTypeahead.$clinit();
  return PopperMultiTypeahead.$create__org_patternfly_component_textinputgroup_BaseFilterInput(/**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to(FilterInput.m_filterInput__java_lang_String__org_patternfly_component_textinputgroup_FilterInput(id).m_plain__org_jboss_elemento_TypedBuilder(), FilterInput))).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(placeholder), FilterInput)));
 }
 /** @nodts @return {PopperMultiTypeahead} */
 static m_multiTypeahead__org_patternfly_component_textinputgroup_BaseFilterInput__org_patternfly_component_menu_PopperMultiTypeahead(/** BaseFilterInput<?> */ filterInput) {
  PopperMultiTypeahead.$clinit();
  return PopperMultiTypeahead.$create__org_patternfly_component_textinputgroup_BaseFilterInput(filterInput);
 }
 /** @nodts @return {!PopperMultiTypeahead} */
 static $create__org_patternfly_component_textinputgroup_BaseFilterInput(/** BaseFilterInput<?> */ filterInput) {
  PopperMultiTypeahead.$clinit();
  let $instance = new PopperMultiTypeahead();
  $instance.$ctor__org_patternfly_component_menu_PopperMultiTypeahead__org_patternfly_component_textinputgroup_BaseFilterInput__void(filterInput);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_PopperMultiTypeahead__org_patternfly_component_textinputgroup_BaseFilterInput__void(/** BaseFilterInput<?> */ filterInput) {
  this.$ctor__org_patternfly_component_menu_PopperMultiMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(ComponentType.f_PopperMultiTypeahead__org_patternfly_component_ComponentType, MenuToggle.m_menuToggle__org_patternfly_component_textinputgroup_BaseFilterInput__org_patternfly_component_menu_MenuToggle(filterInput), TriggerAction.f_stayOpen__org_patternfly_popper_TriggerAction);
  this.f_filterInput__org_patternfly_component_menu_PopperMultiTypeahead_ = filterInput;
  this.f_searchFilter__org_patternfly_component_menu_PopperMultiTypeahead_ = SearchFilter.m_contains__org_patternfly_component_menu_SearchFilter();
  this.f_noResults__org_patternfly_component_menu_PopperMultiTypeahead_ = NoResults.m_noResults__org_patternfly_component_menu_NoResults();
  TypeaheadSupport.m_typeaheadDefaults__org_patternfly_component_menu_PopperMenuToggleMenu__void(this);
  (/**@type {!BaseFilterInput<BaseFilterInput>}*/ ((/**@type {!BaseFilterInput<BaseFilterInput>}*/ ($Casts.$to(filterInput.m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e, /** ? */ c, /** ?string */ value) =>{
   let c_1 = /**@type {?}*/ ($Casts.$to(c, BaseFilterInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   if (TypeaheadSupport.m_shouldExpandOnKeyup__org_patternfly_component_menu_PopperMenuToggleMenu__elemental2_dom_Event__boolean(this, e)) {
    this.m_expand__boolean__void(false);
   }
   this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__void_$pp_org_patternfly_component_menu(this.f_searchFilter__org_patternfly_component_menu_PopperMultiTypeahead_, this.f_noResults__org_patternfly_component_menu_PopperMultiTypeahead_, value_1);
  })), BaseFilterInput))).m_noAddOnEnter__org_patternfly_component_textinputgroup_BaseFilterInput())).m_onEnter__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseFilterInput(ComponentHandler.$adapt((/** Event */ e_1, /** ? */ fi) =>{
   let fi_1 = /**@type {?}*/ ($Casts.$to(fi, BaseFilterInput));
   let identifier = /**@type {?string}*/ ($Casts.$to(filterInput.m_textToIdentifier__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object((/**@type {!BaseTextInputGroup<BaseFilterInput>}*/ (fi_1)).m_value__java_lang_String()), j_l_String));
   let menuItem = this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier);
   if (!$Equality.$same(menuItem, null)) {
    if (!filterInput.m_labelGroup__org_patternfly_component_label_LabelGroup().m_contains__java_lang_String__boolean(identifier)) {
     let label = /**@type {Label}*/ ($Casts.$to(filterInput.m_textToLabel__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object(menuItem.m_text__java_lang_String()), Label));
     filterInput.m_labelGroup__org_patternfly_component_label_LabelGroup().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(label);
     this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem, true, false);
    }
   }
  }));
  this.m_stayOpen__java_util_function_Predicate__org_jboss_elemento_TypedBuilder(Predicate.$adapt(/**  @return {boolean}*/ ((/** Event */ event) =>{
   let event_1 = /**@type {Event}*/ ($Casts.$to(event, $Overlay));
   let target = /**@type {Node}*/ ($Casts.$to(event_1.target, Node_$Overlay));
   let inputClick = $Equality.$same(filterInput.m_input__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement(), target);
   let labelGroupClick = !$Equality.$same(filterInput.m_labelGroup__org_patternfly_component_label_LabelGroup(), null) && (/**@type {HTMLDivElement}*/ ($Casts.$to(filterInput.m_labelGroup__org_patternfly_component_label_LabelGroup().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).contains(/**@type {Node}*/ ($Casts.$to(event_1.target, Node_$Overlay)));
   let utilitiesClick = !$Equality.$same(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities(), null) && (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).contains(/**@type {Node}*/ ($Casts.$to(event_1.target, Node_$Overlay)));
   return inputClick || labelGroupClick || utilitiesClick;
  })));
 }
 /** @override @nodts */
 m_updateMenuToggle__java_util_List__void_$pp_org_patternfly_component_menu(/** List<MenuItem> */ items) {
  let labelGroup = this.f_filterInput__org_patternfly_component_menu_PopperMultiTypeahead_.m_labelGroup__org_patternfly_component_label_LabelGroup();
  if (!$Equality.$same(labelGroup, null) && !$Equality.$same(items, null)) {
   labelGroup.m_clear__void();
   for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let item = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
    {
     let label = (/**@type {Label}*/ ($Casts.$to(this.f_filterInput__org_patternfly_component_menu_PopperMultiTypeahead_.m_textToLabel__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object(item.m_text__java_lang_String()), Label))).m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(CloseHandler.$adapt((/** Event */ e, /** Label */ c) =>{
      let c_1 = /**@type {Label}*/ ($Casts.$to(c, Label));
      this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, false, false);
     }));
     labelGroup.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(label);
    }
   }
  }
 }
 /** @nodts @return {PopperMultiTypeahead} */
 m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_PopperMultiTypeahead(/** Menu */ menu) {
  super.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(menu);
  this.m_searchInputControlsMenuList__void_$pp_org_patternfly_component_menu();
  return this;
 }
 /** @nodts @return {PopperMultiTypeahead} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_PopperMultiTypeahead(/** j_u_function_Function<?string, ?string> */ prompt, /** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {
  TypeaheadSupport.m_allowNewItems__org_patternfly_component_menu_PopperMenuToggleMenu__org_patternfly_component_menu_PopperTypeahead__java_util_function_Function__java_util_function_Function__void(this, this, prompt, createItem);
  return this;
 }
 /** @nodts @return {PopperMultiTypeahead} */
 m_that__org_patternfly_component_menu_PopperMultiTypeahead() {
  return this;
 }
 /** @nodts @return {PopperMultiTypeahead} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_PopperMultiTypeahead(/** SearchFilter */ searchFilter) {
  this.f_searchFilter__org_patternfly_component_menu_PopperMultiTypeahead_ = searchFilter;
  return this;
 }
 /** @nodts @return {PopperMultiTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_PopperMultiTypeahead(/** NoResults */ noResults) {
  this.f_noResults__org_patternfly_component_menu_PopperMultiTypeahead_ = noResults;
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperMultiTypeahead} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_PopperMenuToggleMenu(/** j_u_function_Function<?string, Promise<MenuItem>> */ arg0) {
  return /**@type {PopperMultiTypeahead}*/ ($Casts.$to(PopperTypeahead.m_allowNewItems__$default__org_patternfly_component_menu_PopperTypeahead__java_util_function_Function__org_patternfly_component_menu_PopperMenuToggleMenu(this, arg0), PopperMultiTypeahead));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperMultiTypeahead} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_PopperMenuToggleMenu(/** j_u_function_Function<?string, ?string> */ arg0, /** j_u_function_Function<?string, Promise<MenuItem>> */ arg1) {
  return this.m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_PopperMultiTypeahead(arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperMultiTypeahead} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_PopperMenuToggleMenu(/** SearchFilter */ arg0) {
  return this.m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_PopperMultiTypeahead(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperMultiTypeahead} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_PopperMenuToggleMenu(/** NoResults */ arg0) {
  return this.m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_PopperMultiTypeahead(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperMultiTypeahead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_PopperMultiTypeahead();
 }
 //Bridge method.
 /** @final @override @nodts @return {PopperMultiTypeahead} */
 m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ arg0) {
  return this.m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_PopperMultiTypeahead(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {PopperMultiTypeahead} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_PopperMultiTypeahead(/** j_u_function_Function<?string, Promise<MenuItem>> */ arg0) {
  return /**@type {PopperMultiTypeahead}*/ ($Casts.$to(PopperTypeahead.m_allowNewItems__$default__org_patternfly_component_menu_PopperTypeahead__java_util_function_Function__org_patternfly_component_menu_PopperMenuToggleMenu(this, arg0), PopperMultiTypeahead));
 }
 /** @nodts */
 static $clinit() {
  PopperMultiTypeahead.$clinit = () =>{};
  PopperMultiTypeahead.$loadModules();
  PopperMultiMenuToggleMenu.$clinit();
  PopperTypeahead.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperMultiTypeahead;
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
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  NoResults = goog.module.get('org.patternfly.component.menu.NoResults$impl');
  SearchFilter = goog.module.get('org.patternfly.component.menu.SearchFilter$impl');
  TypeaheadSupport = goog.module.get('org.patternfly.component.menu.TypeaheadSupport$impl');
  BaseFilterInput = goog.module.get('org.patternfly.component.textinputgroup.BaseFilterInput$impl');
  FilterInput = goog.module.get('org.patternfly.component.textinputgroup.FilterInput$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
PopperTypeahead.$markImplementor(PopperMultiTypeahead);
$Util.$setClassMetadata(PopperMultiTypeahead, 'org.patternfly.component.menu.PopperMultiTypeahead');

exports = PopperMultiTypeahead;

//# sourceMappingURL=PopperMultiTypeahead.js.map
