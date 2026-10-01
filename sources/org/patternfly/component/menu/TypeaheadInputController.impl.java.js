goog.module('org.patternfly.component.menu.TypeaheadInputController$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Void = goog.forwardDeclare('java.lang.Void$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Scheduler = goog.forwardDeclare('org.jboss.elemento.Scheduler$impl');
let ReloadStrategy = goog.forwardDeclare('org.patternfly.async.ReloadStrategy$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TypeaheadInputController extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_previousValue__org_patternfly_component_menu_TypeaheadInputController_;
  /**@type {SearchFilter} @nodts*/
  this.f_searchFilter__org_patternfly_component_menu_TypeaheadInputController_;
  /**@type {NoResults} @nodts*/
  this.f_noResults__org_patternfly_component_menu_TypeaheadInputController_;
  /**@type {ReloadStrategy} @nodts*/
  this.f_reloadStrategy__org_patternfly_component_menu_TypeaheadInputController_;
  /**@type {Callback} @nodts*/
  this.f_debouncedReload__org_patternfly_component_menu_TypeaheadInputController_;
 }
 /** @nodts @return {!TypeaheadInputController} */
 static $create__() {
  TypeaheadInputController.$clinit();
  let $instance = new TypeaheadInputController();
  $instance.$ctor__org_patternfly_component_menu_TypeaheadInputController__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_TypeaheadInputController__void() {
  this.$ctor__java_lang_Object__void();
  this.f_previousValue__org_patternfly_component_menu_TypeaheadInputController_ = '';
  this.f_searchFilter__org_patternfly_component_menu_TypeaheadInputController_ = SearchFilter.m_contains__org_patternfly_component_menu_SearchFilter();
  this.f_noResults__org_patternfly_component_menu_TypeaheadInputController_ = NoResults.m_noResults__org_patternfly_component_menu_NoResults();
 }
 /** @nodts */
 m_handleKeyup__org_patternfly_component_menu_Menu__java_lang_String__void_$pp_org_patternfly_component_menu(/** Menu */ menu, /** ?string */ value) {
  if (!this.m_isDebounceMode__boolean_$pp_org_patternfly_component_menu()) {
   menu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__java_util_List(this.f_searchFilter__org_patternfly_component_menu_TypeaheadInputController_, this.f_noResults__org_patternfly_component_menu_TypeaheadInputController_, value);
  }
 }
 /** @nodts */
 m_handleInput__java_lang_String__org_patternfly_component_menu_Menu__java_lang_Runnable__java_lang_Runnable__void_$pp_org_patternfly_component_menu(/** ?string */ value, /** Menu */ menu, /** Runnable */ expand, /** Runnable */ collapse) {
  if (!$Equality.$same(value, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(value)) {
   if (this.m_isDebounceMode__boolean_$pp_org_patternfly_component_menu()) {
    expand.m_run__void();
    if ($Equality.$same(this.f_debouncedReload__org_patternfly_component_menu_TypeaheadInputController_, null)) {
     this.f_debouncedReload__org_patternfly_component_menu_TypeaheadInputController_ = Scheduler.m_debounce__int__org_jboss_elemento_Callback__org_jboss_elemento_Callback(this.f_reloadStrategy__org_patternfly_component_menu_TypeaheadInputController_.m_debounceMs__int(), Callback.$adapt(() =>{
      menu.m_reset__void();
      menu.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<*>}*/ ((/** ?void */ __) =>{
       let ___1 = /**@type {?void}*/ ($Casts.$to(__, Void));
       menu.m_allowTabFirstItem__void();
       return null;
      }));
     }));
    }
    this.f_debouncedReload__org_patternfly_component_menu_TypeaheadInputController_.m_call__void();
   } else if (this.m_isStructuralChangeMode__boolean_$pp_org_patternfly_component_menu()) {
    expand.m_run__void();
    if (this.f_reloadStrategy__org_patternfly_component_menu_TypeaheadInputController_.m_predicate__java_util_function_BiPredicate().m_test__java_lang_Object__java_lang_Object__boolean(this.f_previousValue__org_patternfly_component_menu_TypeaheadInputController_, value)) {
     menu.m_reset__void();
     menu.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<*>}*/ ((/** ?void */ ___2) =>{
      let ___3 = /**@type {?void}*/ ($Casts.$to(___2, Void));
      menu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__java_util_List(this.f_searchFilter__org_patternfly_component_menu_TypeaheadInputController_, this.f_noResults__org_patternfly_component_menu_TypeaheadInputController_, value);
      menu.m_allowTabFirstItem__void();
      return null;
     }));
    } else {
     menu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__java_util_List(this.f_searchFilter__org_patternfly_component_menu_TypeaheadInputController_, this.f_noResults__org_patternfly_component_menu_TypeaheadInputController_, value);
    }
    this.f_previousValue__org_patternfly_component_menu_TypeaheadInputController_ = value;
   } else {
    expand.m_run__void();
    menu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__java_util_List(this.f_searchFilter__org_patternfly_component_menu_TypeaheadInputController_, this.f_noResults__org_patternfly_component_menu_TypeaheadInputController_, value);
   }
  } else {
   collapse.m_run__void();
  }
 }
 /** @nodts */
 m_handleLoaded__org_patternfly_component_menu_Menu__java_lang_String__void_$pp_org_patternfly_component_menu(/** Menu */ menu, /** ?string */ currentText) {
  if (!this.m_isDebounceMode__boolean_$pp_org_patternfly_component_menu()) {
   menu.m_search__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_NoResults__java_lang_String__java_util_List(this.f_searchFilter__org_patternfly_component_menu_TypeaheadInputController_, this.f_noResults__org_patternfly_component_menu_TypeaheadInputController_, currentText);
  } else {
   menu.m_allowTabFirstItem__void();
  }
 }
 /** @nodts */
 m_searchFilter__org_patternfly_component_menu_SearchFilter__void_$pp_org_patternfly_component_menu(/** SearchFilter */ searchFilter) {
  this.f_searchFilter__org_patternfly_component_menu_TypeaheadInputController_ = searchFilter;
 }
 /** @nodts */
 m_noResults__org_patternfly_component_menu_NoResults__void_$pp_org_patternfly_component_menu(/** NoResults */ noResults) {
  this.f_noResults__org_patternfly_component_menu_TypeaheadInputController_ = noResults;
 }
 /** @nodts */
 m_reloadOn__org_patternfly_async_ReloadStrategy__void_$pp_org_patternfly_component_menu(/** ReloadStrategy */ reloadStrategy) {
  this.f_reloadStrategy__org_patternfly_component_menu_TypeaheadInputController_ = reloadStrategy;
  this.f_debouncedReload__org_patternfly_component_menu_TypeaheadInputController_ = null;
 }
 /** @nodts @return {boolean} */
 m_isDebounceMode__boolean_$pp_org_patternfly_component_menu() {
  return !$Equality.$same(this.f_reloadStrategy__org_patternfly_component_menu_TypeaheadInputController_, null) && this.f_reloadStrategy__org_patternfly_component_menu_TypeaheadInputController_.m_debounceMs__int() > 0;
 }
 /** @nodts @return {boolean} */
 m_isStructuralChangeMode__boolean_$pp_org_patternfly_component_menu() {
  return !$Equality.$same(this.f_reloadStrategy__org_patternfly_component_menu_TypeaheadInputController_, null) && !$Equality.$same(this.f_reloadStrategy__org_patternfly_component_menu_TypeaheadInputController_.m_predicate__java_util_function_BiPredicate(), null);
 }
 /** @nodts */
 static $clinit() {
  TypeaheadInputController.$clinit = () =>{};
  TypeaheadInputController.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TypeaheadInputController;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Void = goog.module.get('java.lang.Void$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Scheduler = goog.module.get('org.jboss.elemento.Scheduler$impl');
  NoResults = goog.module.get('org.patternfly.component.menu.NoResults$impl');
  SearchFilter = goog.module.get('org.patternfly.component.menu.SearchFilter$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TypeaheadInputController, 'org.patternfly.component.menu.TypeaheadInputController');

exports = TypeaheadInputController;

//# sourceMappingURL=TypeaheadInputController.js.map
