goog.module('org.patternfly.chart.Chart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.chart.Chart.$LambdaAdaptor$impl');
let ChartType = goog.forwardDeclare('org.patternfly.chart.ChartType$impl');

/**
 * @interface
 */
class Chart {
 /** @abstract @nodts @return {ChartType} */
 m_chartType__org_patternfly_chart_ChartType() {}
 /** @nodts @return {!Chart} */
 static $adapt(/** ?function():ChartType */ fn) {
  Chart.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Chart.$clinit = () =>{};
  Chart.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_chart_Chart = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_chart_Chart;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.chart.Chart.$LambdaAdaptor$impl');
 }
}
Chart.$markImplementor(/**@type {Function}*/ (Chart));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Chart), 'org.patternfly.chart.Chart');

exports = Chart;

//# sourceMappingURL=Chart.js.map
