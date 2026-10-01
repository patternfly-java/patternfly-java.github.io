goog.module('org.patternfly.component.menu.SearchFilter$impl');

const BiPredicate = goog.require('java.util.function.BiPredicate$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter.$LambdaAdaptor$impl');

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
  $LambdaAdaptor = goog.module.get('org.patternfly.component.menu.SearchFilter.$LambdaAdaptor$impl');
 }
}
SearchFilter.$markImplementor(/**@type {Function}*/ (SearchFilter));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (SearchFilter), 'org.patternfly.component.menu.SearchFilter');

exports = SearchFilter;

//# sourceMappingURL=SearchFilter.js.map
