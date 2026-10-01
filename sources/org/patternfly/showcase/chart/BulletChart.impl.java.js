goog.module('org.patternfly.showcase.chart.BulletChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Bullet = goog.forwardDeclare('org.patternfly.chart.bullet.Bullet$impl');
let BulletData_$Overlay = goog.forwardDeclare('org.patternfly.chart.bullet.BulletData.$Overlay$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Chart_$Overlay = goog.forwardDeclare('org.patternfly.showcase.chart.Chart.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BulletChart extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BulletChart} */
 static $create__() {
  BulletChart.$clinit();
  let $instance = new BulletChart();
  $instance.$ctor__org_patternfly_showcase_chart_BulletChart__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_chart_BulletChart__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_chart_Chart__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_charts__org_patternfly_showcase_Data, 'bullet'), Chart_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('bullet-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('bullet-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder('height: 150px; width: 600px;'), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Bullet}*/ ($Casts.$to((/**@type {Bullet}*/ ($Casts.$to((/**@type {Bullet}*/ ($Casts.$to((/**@type {Bullet}*/ ($Casts.$to(Bullet.m_bullet__org_patternfly_chart_bullet_Bullet().m_ariaTitle__java_lang_String__org_jboss_elemento_TypedBuilder('Bullet chart example'), Bullet))).m_ariaDesc__java_lang_String__org_jboss_elemento_TypedBuilder('Storage capacity'), Bullet))).m_comparativeWarningMeasureData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet([BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Warning', 88)]).m_primarySegmentedMeasureData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet([BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Measure', 60)]).m_qualitativeRangeData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet([BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Range', 50), BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Range', 75)]).m_labels__java_util_function_Function__org_patternfly_chart_bullet_Bullet(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Object */ data) =>{
    let data_1 = /**@type {Object}*/ ($Casts.$to(data, BulletData_$Overlay));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(data_1.name) + ': ' + data_1.y;
   }))).m_maxDomain__double__org_patternfly_chart_bullet_Bullet(100).m_height__int__org_jboss_elemento_TypedBuilder(150), Bullet))).m_width__int__org_jboss_elemento_TypedBuilder(600), Bullet))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('bullet-spm', 'Segmented primary measure', Code.m_code__java_lang_String__java_lang_String('bullet-spm'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder('height: 200px; width: 600px;'), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Bullet}*/ ($Casts.$to((/**@type {Bullet}*/ ($Casts.$to((/**@type {Bullet}*/ ($Casts.$to((/**@type {Bullet}*/ ($Casts.$to(Bullet.m_bullet__org_patternfly_chart_bullet_Bullet().m_ariaTitle__java_lang_String__org_jboss_elemento_TypedBuilder('Bullet chart example'), Bullet))).m_ariaDesc__java_lang_String__org_jboss_elemento_TypedBuilder('Storage capacity'), Bullet))).m_comparativeWarningMeasureData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet([BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Warning', 88)]).m_comparativeWarningMeasureLegendData__arrayOf_java_lang_String__org_patternfly_chart_bullet_Bullet(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['Warning'], j_l_String))).m_primarySegmentedMeasureData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet([BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Measure', 25), BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Measure', 60)]).m_primarySegmentedMeasureLegendData__arrayOf_java_lang_String__org_patternfly_chart_bullet_Bullet(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['Measure 1', 'Measure 2'], j_l_String))).m_qualitativeRangeData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet([BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Range', 50), BulletData_$Overlay.m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData('Range', 75)]).m_qualitativeRangeLegendData__arrayOf_java_lang_String__org_patternfly_chart_bullet_Bullet(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['Range 1', 'Range 2'], j_l_String))).m_labels__java_util_function_Function__org_patternfly_chart_bullet_Bullet(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Object */ data_2) =>{
    let data_3 = /**@type {Object}*/ ($Casts.$to(data_2, BulletData_$Overlay));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(data_3.name) + ': ' + data_3.y;
   }))).m_maxDomain__double__org_patternfly_chart_bullet_Bullet(100).m_height__int__org_jboss_elemento_TypedBuilder(200), Bullet))).m_width__int__org_jboss_elemento_TypedBuilder(600), Bullet))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Bullet));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Bullet), Type.f_chart__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  BulletChart.$clinit = () =>{};
  BulletChart.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BulletChart;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Bullet = goog.module.get('org.patternfly.chart.bullet.Bullet$impl');
  BulletData_$Overlay = goog.module.get('org.patternfly.chart.bullet.BulletData.$Overlay$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Chart_$Overlay = goog.module.get('org.patternfly.showcase.chart.Chart.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BulletChart, 'org.patternfly.showcase.chart.BulletChart');

exports = BulletChart;

//# sourceMappingURL=BulletChart.js.map
