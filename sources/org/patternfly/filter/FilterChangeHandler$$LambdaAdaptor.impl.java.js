goog.module('org.patternfly.filter.FilterChangeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FilterChangeHandler = goog.require('org.patternfly.filter.FilterChangeHandler$impl');

let Filter = goog.forwardDeclare('org.patternfly.filter.Filter$impl');

/**
 * @template T
 * @implements {FilterChangeHandler<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Filter<T>, ?string):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Filter<T>, ?string):void} @nodts*/
  this.f_fn__org_patternfly_filter_FilterChangeHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_filter_FilterChangeHandler_$LambdaAdaptor__org_patternfly_filter_FilterChangeHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_filter_FilterChangeHandler_$LambdaAdaptor__org_patternfly_filter_FilterChangeHandler_$JsFunction__void(/** ?function(Filter<T>, ?string):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_filter_FilterChangeHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onFilterChange__org_patternfly_filter_Filter__java_lang_String__void(/** Filter<T> */ arg0, /** ?string */ arg1) {
  {
   let $function = this.f_fn__org_patternfly_filter_FilterChangeHandler_$LambdaAdaptor;
   $function(arg0, arg1);
  }
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
FilterChangeHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.filter.FilterChangeHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=FilterChangeHandler$$LambdaAdaptor.js.map
