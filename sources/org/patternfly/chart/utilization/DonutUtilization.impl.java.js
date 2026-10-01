goog.module('org.patternfly.chart.utilization.DonutUtilization$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseChart = goog.require('org.patternfly.chart.BaseChart$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Any_$Overlay = goog.forwardDeclare('jsinterop.base.Any.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let ChartType = goog.forwardDeclare('org.patternfly.chart.ChartType$impl');
let Data_$Overlay = goog.forwardDeclare('org.patternfly.chart.Data.$Overlay$impl');
let Threshold_$Overlay = goog.forwardDeclare('org.patternfly.chart.Threshold.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.chart.utilization.DonutUtilizationElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @extends {BaseChart<HTMLElement, DonutUtilization>}
 */
class DonutUtilization extends BaseChart {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DonutUtilization} */
 static m_donutUtilization__org_patternfly_chart_utilization_DonutUtilization() {
  DonutUtilization.$clinit();
  return DonutUtilization.$create__();
 }
 /** @nodts @return {!DonutUtilization} */
 static $create__() {
  DonutUtilization.$clinit();
  let $instance = new DonutUtilization();
  $instance.$ctor__org_patternfly_chart_utilization_DonutUtilization__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_utilization_DonutUtilization__void() {
  this.$ctor__org_patternfly_chart_BaseChart__org_patternfly_chart_ChartType__org_patternfly_chart_ChartElement__void(ChartType.f_DonutUtilization__org_patternfly_chart_ChartType, /**@type {HTMLElement}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {HTMLElement}*/ ($Casts.$to(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement('pfj-chart-donut-utilization', Class.$get($JavaScriptObject)), $Overlay)))));
 }
 /** @nodts @return {DonutUtilization} */
 m_data__org_patternfly_chart_Data__org_patternfly_chart_utilization_DonutUtilization(/** Object */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).data = data;
  return this;
 }
 /** @nodts @return {DonutUtilization} */
 m_labels__java_util_function_Function__org_patternfly_chart_utilization_DonutUtilization(/** j_u_function_Function<Object, ?string> */ labels) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).labels = /**  @return {?string}*/ ((/** * */ data) =>{
   return /**@type {?string}*/ ($Casts.$to(labels.m_apply__java_lang_Object__java_lang_Object(/**@type {Object}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Any_$Overlay.m_asPropertyMap__$devirt__jsinterop_base_Any__jsinterop_base_JsPropertyMap(data), 'datum')), Data_$Overlay))), j_l_String));
  });
  return this;
 }
 /** @nodts @return {DonutUtilization} */
 m_invert__org_patternfly_chart_utilization_DonutUtilization() {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay)), 'invert', true);
  return this;
 }
 /** @nodts @return {DonutUtilization} */
 m_thresholds__arrayOf_double__org_patternfly_chart_utilization_DonutUtilization(/** Array<number> */ threshold) {
  if (!$Equality.$same(threshold, null)) {
   let array = /**@type {!Array<Object>}*/ (new Array());
   for (let $array = threshold, $index = 0; $index < $array.length; $index++) {
    let t = $array[$index];
    {
     array.push(Threshold_$Overlay.m_threshold__double__org_patternfly_chart_Threshold(t));
    }
   }
   (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).thresholds = array;
  }
  return this;
 }
 /** @nodts @return {DonutUtilization} */
 m_thresholds__arrayOf_org_patternfly_chart_Threshold__org_patternfly_chart_utilization_DonutUtilization(/** Array<Object> */ threshold) {
  if (!$Equality.$same(threshold, null)) {
   let array = /**@type {!Array<Object>}*/ (new Array());
   array.push(...threshold);
   (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).thresholds = array;
  }
  return this;
 }
 /** @nodts @return {DonutUtilization} */
 m_that__org_patternfly_chart_utilization_DonutUtilization() {
  return this;
 }
 /** @nodts @return {Object} */
 m_data__org_patternfly_chart_Data() {
  return (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).data;
 }
 /** @nodts @return {Array<Object>} */
 m_thresholds__elemental2_core_JsArray() {
  return (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).thresholds;
 }
 //Bridge method.
 /** @final @override @nodts @return {DonutUtilization} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_chart_utilization_DonutUtilization();
 }
 /** @nodts */
 static $clinit() {
  DonutUtilization.$clinit = () =>{};
  DonutUtilization.$loadModules();
  BaseChart.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DonutUtilization;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Any_$Overlay = goog.module.get('jsinterop.base.Any.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ChartType = goog.module.get('org.patternfly.chart.ChartType$impl');
  Data_$Overlay = goog.module.get('org.patternfly.chart.Data.$Overlay$impl');
  Threshold_$Overlay = goog.module.get('org.patternfly.chart.Threshold.$Overlay$impl');
  $Overlay = goog.module.get('org.patternfly.chart.utilization.DonutUtilizationElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(DonutUtilization, 'org.patternfly.chart.utilization.DonutUtilization');

exports = DonutUtilization;

//# sourceMappingURL=DonutUtilization.js.map
