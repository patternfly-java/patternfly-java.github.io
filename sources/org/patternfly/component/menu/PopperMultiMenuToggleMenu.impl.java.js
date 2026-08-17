goog.module('org.patternfly.component.menu.PopperMultiMenuToggleMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopperMenuToggleMenu = goog.require('org.patternfly.component.menu.PopperMenuToggleMenu$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let MultiSelectHandler = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template B
 * @extends {PopperMenuToggleMenu<B>}
 * @deprecated
 */
class PopperMultiMenuToggleMenu extends PopperMenuToggleMenu {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_PopperMultiMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(/** ComponentType */ componentType, /** MenuToggle */ menuToggle, /** TriggerAction */ triggerAction) {
  this.$ctor__org_patternfly_component_menu_PopperMenuToggleMenu__org_patternfly_component_ComponentType__org_patternfly_component_menu_MenuToggle__org_patternfly_popper_TriggerAction__void(componentType, menuToggle, triggerAction);
 }
 /** @abstract @nodts */
 m_updateMenuToggle__java_util_List__void_$pp_org_patternfly_component_menu(/** List<MenuItem> */ items) {}
 /** @override @nodts @return {B} */
 m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(/** Menu */ menu) {
  super.m_add__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(menu);
  if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
   menu.m_onMultiSelect__org_patternfly_handler_MultiSelectHandler__org_patternfly_component_menu_Menu(MultiSelectHandler.$adapt((/** Event */ e, /** Menu */ m, /** List<MenuItem> */ items) =>{
    let m_1 = /**@type {Menu}*/ ($Casts.$to(m, Menu));
    this.m_updateMenuToggle__java_util_List__void_$pp_org_patternfly_component_menu(items);
   }));
  }
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 m_clear__void() {
  this.m_clear__boolean__void(true);
 }
 /** @nodts */
 m_clear__boolean__void(/** boolean */ fireEvent) {
  this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_unselectAllItems__void_$pp_org_patternfly_component_menu();
  this.m_updateMenuToggle__java_util_List__void_$pp_org_patternfly_component_menu(/**@type {List<MenuItem>}*/ (Collections.m_emptyList__java_util_List()));
  if (fireEvent) {
   this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_fireMultiSelection__void_$pp_org_patternfly_component_menu();
  }
 }
 /** @nodts */
 m_selectIdentifiers__java_util_List__void(/** List<?string> */ identifiers) {
  this.m_selectItems__java_util_List__boolean__void(/**@type {List<MenuItem>}*/ ($Casts.$to((/**@type {Stream<MenuItem>}*/ (identifiers.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ identifier) =>{
   let identifier_1 = /**@type {?string}*/ ($Casts.$to(identifier, j_l_String));
   return this.m_menu__org_patternfly_component_menu_Menu().m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier_1);
  }))))).m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** MenuItem */ arg0) =>{
   let arg0_1 = /**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem));
   return Objects.m_nonNull__java_lang_Object__boolean(arg0_1);
  }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<MenuItem, *, List<MenuItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))), true);
 }
 /** @nodts */
 m_selectIdentifiers__java_util_List__boolean__void(/** List<?string> */ identifiers, /** boolean */ fireEvent) {
  this.m_selectItems__java_util_List__boolean__void(/**@type {List<MenuItem>}*/ ($Casts.$to((/**@type {Stream<MenuItem>}*/ (identifiers.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ identifier) =>{
   let identifier_1 = /**@type {?string}*/ ($Casts.$to(identifier, j_l_String));
   return this.m_menu__org_patternfly_component_menu_Menu().m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem(identifier_1);
  }))))).m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** MenuItem */ arg0) =>{
   let arg0_1 = /**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem));
   return Objects.m_nonNull__java_lang_Object__boolean(arg0_1);
  }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<MenuItem, *, List<MenuItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))), fireEvent);
 }
 /** @nodts */
 m_selectItems__java_util_List__void(/** List<MenuItem> */ items) {
  this.m_selectItems__java_util_List__boolean__void(items, true);
 }
 /** @nodts */
 m_selectItems__java_util_List__boolean__void(/** List<MenuItem> */ items, /** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu, null) && !$Equality.$same(this.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu, null) && !items.isEmpty()) {
   for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let item = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
    {
     this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, true, false);
    }
   }
   if (fireEvent) {
    this.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_fireMultiSelection__void_$pp_org_patternfly_component_menu();
   }
  }
  this.m_updateMenuToggle__java_util_List__void_$pp_org_patternfly_component_menu(items);
 }
 /** @nodts */
 static $clinit() {
  PopperMultiMenuToggleMenu.$clinit = () =>{};
  PopperMultiMenuToggleMenu.$loadModules();
  PopperMenuToggleMenu.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperMultiMenuToggleMenu;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  List = goog.module.get('java.util.List$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MultiSelectHandler = goog.module.get('org.patternfly.handler.MultiSelectHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PopperMultiMenuToggleMenu, 'org.patternfly.component.menu.PopperMultiMenuToggleMenu');

exports = PopperMultiMenuToggleMenu;

//# sourceMappingURL=PopperMultiMenuToggleMenu.js.map
