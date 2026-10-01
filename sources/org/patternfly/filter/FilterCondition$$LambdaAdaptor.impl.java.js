goog.module('org.patternfly.filter.FilterCondition.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FilterCondition = goog.require('org.patternfly.filter.FilterCondition$impl');

/**
 * @template T, V
 * @implements {FilterCondition<T, V>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, V):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, V):boolean} @nodts*/
  this.f_fn__org_patternfly_filter_FilterCondition_$LambdaAdaptor;
  this.$ctor__org_patternfly_filter_FilterCondition_$LambdaAdaptor__org_patternfly_filter_FilterCondition_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_filter_FilterCondition_$LambdaAdaptor__org_patternfly_filter_FilterCondition_$JsFunction__void(/** ?function(T, V):boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_filter_FilterCondition_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {boolean} */
 m_match__java_lang_Object__java_lang_Object__boolean(/** T */ arg0, /** V */ arg1) {
  let /** ?function(T, V):boolean */ $function;
  return ($function = this.f_fn__org_patternfly_filter_FilterCondition_$LambdaAdaptor, $function(arg0, arg1));
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
FilterCondition.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.filter.FilterCondition$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=FilterCondition$$LambdaAdaptor.js.map
