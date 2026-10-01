goog.module('org.patternfly.filter.FilterAttributeModifier.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FilterAttributeModifier = goog.require('org.patternfly.filter.FilterAttributeModifier$impl');

/**
 * @template V
 * @implements {FilterAttributeModifier<V>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(V, V):V */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(V, V):V} @nodts*/
  this.f_fn__org_patternfly_filter_FilterAttributeModifier_$LambdaAdaptor;
  this.$ctor__org_patternfly_filter_FilterAttributeModifier_$LambdaAdaptor__org_patternfly_filter_FilterAttributeModifier_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_filter_FilterAttributeModifier_$LambdaAdaptor__org_patternfly_filter_FilterAttributeModifier_$JsFunction__void(/** ?function(V, V):V */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_filter_FilterAttributeModifier_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {V} */
 m_modify__java_lang_Object__java_lang_Object__java_lang_Object(/** V */ arg0, /** V */ arg1) {
  let /** ?function(V, V):V */ $function;
  return ($function = this.f_fn__org_patternfly_filter_FilterAttributeModifier_$LambdaAdaptor, $function(arg0, arg1));
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
FilterAttributeModifier.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.filter.FilterAttributeModifier$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=FilterAttributeModifier$$LambdaAdaptor.js.map
