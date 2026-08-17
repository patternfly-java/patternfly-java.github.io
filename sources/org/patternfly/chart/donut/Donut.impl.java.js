goog.module('org.patternfly.chart.donut.Donut$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseChart = goog.require('org.patternfly.chart.BaseChart$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Any_$Overlay = goog.forwardDeclare('jsinterop.base.Any.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let ChartType = goog.forwardDeclare('org.patternfly.chart.ChartType$impl');
let Data_$Overlay = goog.forwardDeclare('org.patternfly.chart.Data.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.chart.donut.DonutElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @extends {BaseChart<HTMLElement, Donut>}
 */
class Donut extends BaseChart {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Donut} */
 static m_donut__org_patternfly_chart_donut_Donut() {
  Donut.$clinit();
  return Donut.$create__();
 }
 /** @nodts @return {!Donut} */
 static $create__() {
  Donut.$clinit();
  let $instance = new Donut();
  $instance.$ctor__org_patternfly_chart_donut_Donut__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_donut_Donut__void() {
  this.$ctor__org_patternfly_chart_BaseChart__org_patternfly_chart_ChartType__org_patternfly_chart_ChartElement__void(ChartType.f_Donut__org_patternfly_chart_ChartType, /**@type {HTMLElement}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {HTMLElement}*/ ($Casts.$to(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement('pfj-chart-donut', Class.$get($JavaScriptObject)), $Overlay)))));
 }
 /** @nodts @return {Donut} */
 m_data__arrayOf_org_patternfly_chart_Data__org_patternfly_chart_donut_Donut(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).data = this.m_dataArray__arrayOf_org_patternfly_chart_Data__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_donut_Donut();
 }
 /** @nodts @return {Donut} */
 m_labels__java_util_function_Function__org_patternfly_chart_donut_Donut(/** j_u_function_Function<Object, ?string> */ labels) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).labels = /**  @return {?string}*/ ((/** * */ data) =>{
   return /**@type {?string}*/ ($Casts.$to(labels.m_apply__java_lang_Object__java_lang_Object(/**@type {Object}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Any_$Overlay.m_asPropertyMap__$devirt__jsinterop_base_Any__jsinterop_base_JsPropertyMap(data), 'datum')), Data_$Overlay))), j_l_String));
  });
  return this;
 }
 /** @nodts @return {Donut} */
 m_that__org_patternfly_chart_donut_Donut() {
  return this;
 }
 /** @nodts @return {Array<Object>} */
 m_data__elemental2_core_JsArray() {
  return (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).data;
 }
 //Bridge method.
 /** @final @override @nodts @return {Donut} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_chart_donut_Donut();
 }
 /** @nodts */
 static $clinit() {
  Donut.$clinit = () =>{};
  Donut.$loadModules();
  BaseChart.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Donut;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Any_$Overlay = goog.module.get('jsinterop.base.Any.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ChartType = goog.module.get('org.patternfly.chart.ChartType$impl');
  Data_$Overlay = goog.module.get('org.patternfly.chart.Data.$Overlay$impl');
  $Overlay = goog.module.get('org.patternfly.chart.donut.DonutElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(Donut, 'org.patternfly.chart.donut.Donut');

exports = Donut;

//# sourceMappingURL=Donut.js.map
