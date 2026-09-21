goog.module('org.patternfly.filter.FilterCondition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.filter.FilterCondition.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, V
 */
class FilterCondition {
 /** @abstract @nodts @return {boolean} */
 m_match__java_lang_Object__java_lang_Object__boolean(/** T */ object, /** V */ value) {}
 /** @nodts @template T, V @return {!FilterCondition<T, V>} */
 static $adapt(/** ?function(T, V):boolean */ fn) {
  FilterCondition.$clinit();
  return /**@type {!$LambdaAdaptor<T, V>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  FilterCondition.$clinit = () =>{};
  FilterCondition.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_filter_FilterCondition = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_filter_FilterCondition;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.filter.FilterCondition.$LambdaAdaptor$impl');
 }
}
FilterCondition.$markImplementor(/**@type {Function}*/ (FilterCondition));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (FilterCondition), 'org.patternfly.filter.FilterCondition');

exports = FilterCondition;

//# sourceMappingURL=FilterCondition.js.map
