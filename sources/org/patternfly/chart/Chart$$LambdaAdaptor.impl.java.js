goog.module('org.patternfly.chart.Chart.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Chart = goog.require('org.patternfly.chart.Chart$impl');

let ChartType = goog.forwardDeclare('org.patternfly.chart.ChartType$impl');

/**
 * @implements {Chart}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():ChartType */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():ChartType} @nodts*/
  this.f_fn__org_patternfly_chart_Chart_$LambdaAdaptor;
  this.$ctor__org_patternfly_chart_Chart_$LambdaAdaptor__org_patternfly_chart_Chart_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_chart_Chart_$LambdaAdaptor__org_patternfly_chart_Chart_$JsFunction__void(/** ?function():ChartType */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_chart_Chart_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {ChartType} */
 m_chartType__org_patternfly_chart_ChartType() {
  let /** ?function():ChartType */ $function;
  return ($function = this.f_fn__org_patternfly_chart_Chart_$LambdaAdaptor, $function());
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
Chart.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.chart.Chart$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Chart$$LambdaAdaptor.js.map
