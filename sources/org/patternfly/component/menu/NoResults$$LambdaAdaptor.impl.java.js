goog.module('org.patternfly.component.menu.NoResults.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NoResults = goog.require('org.patternfly.component.menu.NoResults$impl');

let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');

/**
 * @implements {NoResults}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(MenuList, ?string):MenuItem */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MenuList, ?string):MenuItem} @nodts*/
  this.f_fn__org_patternfly_component_menu_NoResults_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_menu_NoResults_$LambdaAdaptor__org_patternfly_component_menu_NoResults_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_NoResults_$LambdaAdaptor__org_patternfly_component_menu_NoResults_$JsFunction__void(/** ?function(MenuList, ?string):MenuItem */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_menu_NoResults_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {MenuItem} */
 m_noResults__org_patternfly_component_menu_MenuList__java_lang_String__org_patternfly_component_menu_MenuItem(/** MenuList */ arg0, /** ?string */ arg1) {
  let /** ?function(MenuList, ?string):MenuItem */ $function;
  return ($function = this.f_fn__org_patternfly_component_menu_NoResults_$LambdaAdaptor, $function(arg0, arg1));
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
NoResults.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.menu.NoResults$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=NoResults$$LambdaAdaptor.js.map
