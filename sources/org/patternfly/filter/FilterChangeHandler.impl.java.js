goog.module('org.patternfly.filter.FilterChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Filter = goog.forwardDeclare('org.patternfly.filter.Filter$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.filter.FilterChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class FilterChangeHandler {
 /** @abstract @nodts */
 m_onFilterChange__org_patternfly_filter_Filter__java_lang_String__void(/** Filter<T> */ filter, /** ?string */ origin) {}
 /** @nodts @template T @return {!FilterChangeHandler<T>} */
 static $adapt(/** ?function(Filter<T>, ?string):void */ fn) {
  FilterChangeHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  FilterChangeHandler.$clinit = () =>{};
  FilterChangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_filter_FilterChangeHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_filter_FilterChangeHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.filter.FilterChangeHandler.$LambdaAdaptor$impl');
 }
}
FilterChangeHandler.$markImplementor(/**@type {Function}*/ (FilterChangeHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (FilterChangeHandler), 'org.patternfly.filter.FilterChangeHandler');

exports = FilterChangeHandler;

//# sourceMappingURL=FilterChangeHandler.js.map
