goog.module('org.patternfly.component.menu.SearchFilter$impl');

const BiPredicate = goog.require('java.util.function.BiPredicate$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter.$LambdaAdaptor$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @extends {BiPredicate<MenuItem, ?string>}
 */
class SearchFilter {
 /** @nodts @return {SearchFilter} */
 static m_contains__org_patternfly_component_menu_SearchFilter() {
  SearchFilter.$clinit();
  return SearchFilter.$adapt(/**  @return {boolean}*/ ((/** MenuItem */ item, /** ?string */ text) =>{
   return j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(item.m_text__java_lang_String()), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(text));
  }));
 }
 /** @nodts @return {j_u_function_Function<?string, MenuItem>} */
 static m_noResults__java_util_function_Function() {
  SearchFilter.$clinit();
  return j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ value) =>{
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   return /**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('no-results', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), 'No results found for \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value_1) + '\"').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem));
  }));
 }
 /** @nodts @return {!SearchFilter} */
 static $adapt(/** ?function(MenuItem, ?string):boolean */ fn) {
  SearchFilter.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  SearchFilter.$clinit = () =>{};
  SearchFilter.$loadModules();
  BiPredicate.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  BiPredicate.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_menu_SearchFilter = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_menu_SearchFilter;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  $LambdaAdaptor = goog.module.get('org.patternfly.component.menu.SearchFilter.$LambdaAdaptor$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
SearchFilter.$markImplementor(/**@type {Function}*/ (SearchFilter));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (SearchFilter), 'org.patternfly.component.menu.SearchFilter');

exports = SearchFilter;

//# sourceMappingURL=SearchFilter.js.map
