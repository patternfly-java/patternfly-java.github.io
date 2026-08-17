goog.module('org.patternfly.component.menu.Typeahead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuToggleMenu = goog.forwardDeclare('org.patternfly.component.menu.MenuToggleMenu$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let SearchFilter = goog.forwardDeclare('org.patternfly.component.menu.SearchFilter$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template M
 */
class Typeahead {
 /** @abstract @nodts @return {M} */
 m_allowNewItems__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(/** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {}
 /** @abstract @nodts @return {M} */
 m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(/** j_u_function_Function<?string, ?string> */ prompt, /** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {}
 /** @abstract @nodts @return {M} */
 m_onSearch__org_patternfly_component_menu_SearchFilter__org_patternfly_component_menu_MenuToggleMenu(/** SearchFilter */ searchFilter) {}
 /** @abstract @nodts @return {M} */
 m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_MenuToggleMenu(/** NoResults */ noResults) {}
 /** @nodts @template M @return {M} */
 static m_allowNewItems__$default__org_patternfly_component_menu_Typeahead__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(/** !Typeahead<M> */ $thisArg, /** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {
  Typeahead.$clinit();
  return $thisArg.m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_MenuToggleMenu(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** ?string */ value) =>{
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   return 'Create new item \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value_1) + '\"';
  })), createItem);
 }
 /** @nodts */
 static $clinit() {
  Typeahead.$clinit = () =>{};
  Typeahead.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_menu_Typeahead = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_menu_Typeahead;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Typeahead.$markImplementor(/**@type {Function}*/ (Typeahead));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Typeahead), 'org.patternfly.component.menu.Typeahead');

exports = Typeahead;

//# sourceMappingURL=Typeahead.js.map
