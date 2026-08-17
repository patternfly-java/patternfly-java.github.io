goog.module('org.patternfly.chart.pie.Pie$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseChart = goog.require('org.patternfly.chart.BaseChart$impl');

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
let $Overlay = goog.forwardDeclare('org.patternfly.chart.pie.PieElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @extends {BaseChart<HTMLElement, Pie>}
 */
class Pie extends BaseChart {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Pie} */
 static m_pie__org_patternfly_chart_pie_Pie() {
  Pie.$clinit();
  return Pie.$create__();
 }
 /** @nodts @return {!Pie} */
 static $create__() {
  Pie.$clinit();
  let $instance = new Pie();
  $instance.$ctor__org_patternfly_chart_pie_Pie__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_pie_Pie__void() {
  this.$ctor__org_patternfly_chart_BaseChart__org_patternfly_chart_ChartType__org_patternfly_chart_ChartElement__void(ChartType.f_Pie__org_patternfly_chart_ChartType, /**@type {HTMLElement}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {HTMLElement}*/ ($Casts.$to(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement('pfj-chart-pie', Class.$get($JavaScriptObject)), $Overlay)))));
 }
 /** @nodts @return {Pie} */
 m_data__arrayOf_org_patternfly_chart_Data__org_patternfly_chart_pie_Pie(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).data = this.m_dataArray__arrayOf_org_patternfly_chart_Data__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_pie_Pie();
 }
 /** @nodts @return {Pie} */
 m_labels__java_util_function_Function__org_patternfly_chart_pie_Pie(/** j_u_function_Function<Object, ?string> */ labels) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).labels = /**  @return {?string}*/ ((/** * */ data) =>{
   return /**@type {?string}*/ ($Casts.$to(labels.m_apply__java_lang_Object__java_lang_Object(/**@type {Object}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Any_$Overlay.m_asPropertyMap__$devirt__jsinterop_base_Any__jsinterop_base_JsPropertyMap(data), 'datum')), Data_$Overlay))), j_l_String));
  });
  return this;
 }
 /** @nodts @return {Pie} */
 m_colorScale__arrayOf_java_lang_String__org_patternfly_chart_pie_Pie(/** Array<?string> */ colors) {
  let array = /**@type {!Array<?string>}*/ (new Array());
  if (!$Equality.$same(colors, null)) {
   array.push(...colors);
  }
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).colorScale = array;
  return this;
 }
 /** @nodts @return {Pie} */
 m_that__org_patternfly_chart_pie_Pie() {
  return this;
 }
 /** @nodts @return {Array<Object>} */
 m_data__elemental2_core_JsArray() {
  return (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).data;
 }
 //Bridge method.
 /** @final @override @nodts @return {Pie} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_chart_pie_Pie();
 }
 /** @nodts */
 static $clinit() {
  Pie.$clinit = () =>{};
  Pie.$loadModules();
  BaseChart.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Pie;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Any_$Overlay = goog.module.get('jsinterop.base.Any.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ChartType = goog.module.get('org.patternfly.chart.ChartType$impl');
  Data_$Overlay = goog.module.get('org.patternfly.chart.Data.$Overlay$impl');
  $Overlay = goog.module.get('org.patternfly.chart.pie.PieElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(Pie, 'org.patternfly.chart.pie.Pie');

exports = Pie;

//# sourceMappingURL=Pie.js.map
