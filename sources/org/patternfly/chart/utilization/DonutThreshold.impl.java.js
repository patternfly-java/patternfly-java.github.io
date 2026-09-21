goog.module('org.patternfly.chart.utilization.DonutThreshold$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseChart = goog.require('org.patternfly.chart.BaseChart$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Any_$Overlay = goog.forwardDeclare('jsinterop.base.Any.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let ChartType = goog.forwardDeclare('org.patternfly.chart.ChartType$impl');
let Data_$Overlay = goog.forwardDeclare('org.patternfly.chart.Data.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.chart.utilization.DonutThresholdElement.$Overlay$impl');
let DonutUtilization = goog.forwardDeclare('org.patternfly.chart.utilization.DonutUtilization$impl');
let DonutUtilizationElement_$Overlay = goog.forwardDeclare('org.patternfly.chart.utilization.DonutUtilizationElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @extends {BaseChart<HTMLElement, DonutThreshold>}
 */
class DonutThreshold extends BaseChart {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DonutThreshold} */
 static m_donutThreshold__org_patternfly_chart_utilization_DonutThreshold() {
  DonutThreshold.$clinit();
  return DonutThreshold.$create__();
 }
 /** @nodts @return {!DonutThreshold} */
 static $create__() {
  DonutThreshold.$clinit();
  let $instance = new DonutThreshold();
  $instance.$ctor__org_patternfly_chart_utilization_DonutThreshold__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_utilization_DonutThreshold__void() {
  this.$ctor__org_patternfly_chart_BaseChart__org_patternfly_chart_ChartType__org_patternfly_chart_ChartElement__void(ChartType.f_Donut__org_patternfly_chart_ChartType, /**@type {HTMLElement}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {HTMLElement}*/ ($Casts.$to(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement('pfj-chart-donut-threshold', Class.$get($JavaScriptObject)), $Overlay)))));
 }
 /** @nodts @return {DonutThreshold} */
 m_addUtilization__org_patternfly_chart_utilization_DonutUtilization__org_patternfly_chart_utilization_DonutThreshold(/** DonutUtilization */ utilization) {
  return this.m_add__org_patternfly_chart_utilization_DonutUtilization__org_patternfly_chart_utilization_DonutThreshold(utilization);
 }
 /** @nodts @return {DonutThreshold} */
 m_add__org_patternfly_chart_utilization_DonutUtilization__org_patternfly_chart_utilization_DonutThreshold(/** DonutUtilization */ utilization) {
  return /**@type {DonutThreshold}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLElement}*/ ($Casts.$to(utilization.m_element__org_patternfly_chart_ChartElement(), DonutUtilizationElement_$Overlay))), DonutThreshold));
 }
 /** @nodts @return {DonutThreshold} */
 m_data__arrayOf_org_patternfly_chart_Data__org_patternfly_chart_utilization_DonutThreshold(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).data = this.m_dataArray__arrayOf_org_patternfly_chart_Data__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_utilization_DonutThreshold();
 }
 /** @nodts @return {DonutThreshold} */
 m_invert__org_patternfly_chart_utilization_DonutThreshold() {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay)), 'invert', true);
  return this;
 }
 /** @nodts @return {DonutThreshold} */
 m_labels__java_util_function_Function__org_patternfly_chart_utilization_DonutThreshold(/** j_u_function_Function<Object, ?string> */ labels) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).labels = /**  @return {?string}*/ ((/** * */ data) =>{
   return /**@type {?string}*/ ($Casts.$to(labels.m_apply__java_lang_Object__java_lang_Object(/**@type {Object}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Any_$Overlay.m_asPropertyMap__$devirt__jsinterop_base_Any__jsinterop_base_JsPropertyMap(data), 'datum')), Data_$Overlay))), j_l_String));
  });
  return this;
 }
 /** @nodts @return {DonutThreshold} */
 m_that__org_patternfly_chart_utilization_DonutThreshold() {
  return this;
 }
 /** @nodts @return {Array<Object>} */
 m_data__elemental2_core_JsArray() {
  return (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).data;
 }
 //Bridge method.
 /** @final @override @nodts @return {DonutThreshold} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_chart_utilization_DonutThreshold();
 }
 /** @nodts */
 static $clinit() {
  DonutThreshold.$clinit = () =>{};
  DonutThreshold.$loadModules();
  BaseChart.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DonutThreshold;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Any_$Overlay = goog.module.get('jsinterop.base.Any.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ChartType = goog.module.get('org.patternfly.chart.ChartType$impl');
  Data_$Overlay = goog.module.get('org.patternfly.chart.Data.$Overlay$impl');
  $Overlay = goog.module.get('org.patternfly.chart.utilization.DonutThresholdElement.$Overlay$impl');
  DonutUtilizationElement_$Overlay = goog.module.get('org.patternfly.chart.utilization.DonutUtilizationElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(DonutThreshold, 'org.patternfly.chart.utilization.DonutThreshold');

exports = DonutThreshold;

//# sourceMappingURL=DonutThreshold.js.map
