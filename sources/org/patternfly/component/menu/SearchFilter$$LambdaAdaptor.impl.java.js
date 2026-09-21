goog.module('org.patternfly.component.menu.SearchFilter.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SearchFilter = goog.require('org.patternfly.component.menu.SearchFilter$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiPredicate = goog.forwardDeclare('java.util.function.BiPredicate$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {SearchFilter}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(MenuItem, ?string):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MenuItem, ?string):boolean} @nodts*/
  this.f_fn__org_patternfly_component_menu_SearchFilter_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_menu_SearchFilter_$LambdaAdaptor__org_patternfly_component_menu_SearchFilter_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_SearchFilter_$LambdaAdaptor__org_patternfly_component_menu_SearchFilter_$JsFunction__void(/** ?function(MenuItem, ?string):boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_menu_SearchFilter_$LambdaAdaptor = fn;
 }
 /** @nodts @return {boolean} */
 m_test__org_patternfly_component_menu_MenuItem__java_lang_String__boolean(/** MenuItem */ arg0, /** ?string */ arg1) {
  let /** ?function(MenuItem, ?string):boolean */ $function;
  return ($function = this.f_fn__org_patternfly_component_menu_SearchFilter_$LambdaAdaptor, $function(arg0, arg1));
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_test__java_lang_Object__java_lang_Object__boolean(/** MenuItem */ arg0, /** ?string */ arg1) {
  return this.m_test__org_patternfly_component_menu_MenuItem__java_lang_String__boolean(/**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem)), /**@type {?string}*/ ($Casts.$to(arg1, j_l_String)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {BiPredicate<MenuItem, ?string>} */
 m_negate__java_util_function_BiPredicate() {
  return /**@type {BiPredicate<MenuItem, ?string>}*/ (BiPredicate.m_negate__$default__java_util_function_BiPredicate__java_util_function_BiPredicate(this));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {BiPredicate<MenuItem, ?string>} */
 m_and__java_util_function_BiPredicate__java_util_function_BiPredicate(/** BiPredicate<?, ?> */ arg0) {
  return /**@type {BiPredicate<MenuItem, ?string>}*/ (BiPredicate.m_and__$default__java_util_function_BiPredicate__java_util_function_BiPredicate__java_util_function_BiPredicate(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {BiPredicate<MenuItem, ?string>} */
 m_or__java_util_function_BiPredicate__java_util_function_BiPredicate(/** BiPredicate<?, ?> */ arg0) {
  return /**@type {BiPredicate<MenuItem, ?string>}*/ (BiPredicate.m_or__$default__java_util_function_BiPredicate__java_util_function_BiPredicate__java_util_function_BiPredicate(this, arg0));
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  BiPredicate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  BiPredicate = goog.module.get('java.util.function.BiPredicate$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
SearchFilter.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.menu.SearchFilter$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=SearchFilter$$LambdaAdaptor.js.map
