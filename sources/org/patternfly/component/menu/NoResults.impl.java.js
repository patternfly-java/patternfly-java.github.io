goog.module('org.patternfly.component.menu.NoResults$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.menu.NoResults.$LambdaAdaptor$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 */
class NoResults {
 /** @abstract @nodts @return {MenuItem} */
 m_noResults__org_patternfly_component_menu_MenuList__java_lang_String__org_patternfly_component_menu_MenuItem(/** MenuList */ menuList, /** ?string */ text) {}
 /** @nodts @return {NoResults} */
 static m_noResults__org_patternfly_component_menu_NoResults() {
  NoResults.$clinit();
  return NoResults.$adapt(/**  @return {MenuItem}*/ ((/** MenuList */ menuList, /** ?string */ text) =>{
   return /**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('no-results', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), 'No results found for \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(text) + '\"').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem));
  }));
 }
 /** @nodts @return {!NoResults} */
 static $adapt(/** ?function(MenuList, ?string):MenuItem */ fn) {
  NoResults.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  NoResults.$clinit = () =>{};
  NoResults.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_menu_NoResults = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_menu_NoResults;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  $LambdaAdaptor = goog.module.get('org.patternfly.component.menu.NoResults.$LambdaAdaptor$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NoResults.$markImplementor(/**@type {Function}*/ (NoResults));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (NoResults), 'org.patternfly.component.menu.NoResults');

exports = NoResults;

//# sourceMappingURL=NoResults.js.map
