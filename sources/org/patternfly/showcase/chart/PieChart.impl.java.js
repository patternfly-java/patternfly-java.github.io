goog.module('org.patternfly.showcase.chart.PieChart$impl');

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
let ChartThemeColor = goog.forwardDeclare('org.patternfly.chart.ChartThemeColor$impl');
let Data_$Overlay = goog.forwardDeclare('org.patternfly.chart.Data.$Overlay$impl');
let LegendOrientation = goog.forwardDeclare('org.patternfly.chart.LegendOrientation$impl');
let LegendPosition = goog.forwardDeclare('org.patternfly.chart.LegendPosition$impl');
let Padding_$Overlay = goog.forwardDeclare('org.patternfly.chart.Padding.$Overlay$impl');
let Pie = goog.forwardDeclare('org.patternfly.chart.pie.Pie$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Chart_$Overlay = goog.forwardDeclare('org.patternfly.showcase.chart.Chart.$Overlay$impl');
let Token = goog.forwardDeclare('org.patternfly.token.Token$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PieChart extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!PieChart} */
 static $create__() {
  PieChart.$clinit();
  let $instance = new PieChart();
  $instance.$ctor__org_patternfly_showcase_chart_PieChart__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_chart_PieChart__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_chart_Chart__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_charts__org_patternfly_showcase_Data, 'pie'), Chart_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('pie-basic', 'Basic with right aligned legend', Code.m_code__java_lang_String__java_lang_String('pie-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder('height: 230px; width: 350px;'), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to(Pie.m_pie__org_patternfly_chart_pie_Pie().m_title__java_lang_String__org_jboss_elemento_TypedBuilder('100'), Pie))).m_subTitle__java_lang_String__org_jboss_elemento_TypedBuilder('Pets'), Pie))).m_ariaTitle__java_lang_String__org_jboss_elemento_TypedBuilder('Donut chart example'), Pie))).m_ariaDesc__java_lang_String__org_jboss_elemento_TypedBuilder('Average number of pets'), Pie))).m_data__arrayOf_org_patternfly_chart_Data__org_patternfly_chart_pie_Pie([Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Cats', 35), Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Dogs', 55), Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Birds', 10)]).m_labels__java_util_function_Function__org_patternfly_chart_pie_Pie(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Object */ data) =>{
    let data_1 = /**@type {Object}*/ ($Casts.$to(data, Data_$Overlay));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(data_1.x) + ': ' + data_1.y + '%';
   }))).m_legendData__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['Cats: 35', 'Dogs: 55', 'Birds: 10'], j_l_String))), Pie))).m_legendPosition__org_patternfly_chart_LegendPosition__org_jboss_elemento_TypedBuilder(LegendPosition.f_right__org_patternfly_chart_LegendPosition), Pie))).m_legendOrientation__org_patternfly_chart_LegendOrientation__org_jboss_elemento_TypedBuilder(LegendOrientation.f_vertical__org_patternfly_chart_LegendOrientation), Pie))).m_padding__org_patternfly_chart_Padding__org_jboss_elemento_TypedBuilder(Padding_$Overlay.m_padding__double__double__double__double__org_patternfly_chart_Padding(20, 140, 20, 20)), Pie))).m_width__int__org_jboss_elemento_TypedBuilder(350), Pie))).m_height__int__org_jboss_elemento_TypedBuilder(230), Pie))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('pie-mc', 'Multi-color (ordered) with bottom aligned legend', Code.m_code__java_lang_String__java_lang_String('pie-mc'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder('height: 275px; width: 300px;'), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to(Pie.m_pie__org_patternfly_chart_pie_Pie().m_ariaTitle__java_lang_String__org_jboss_elemento_TypedBuilder('Pie chart example'), Pie))).m_ariaDesc__java_lang_String__org_jboss_elemento_TypedBuilder('Pie chart with multi-color theme and bottom legend'), Pie))).m_data__arrayOf_org_patternfly_chart_Data__org_patternfly_chart_pie_Pie([Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Cats', 35), Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Dogs', 55), Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Birds', 10)]).m_labels__java_util_function_Function__org_patternfly_chart_pie_Pie(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Object */ data_2) =>{
    let data_3 = /**@type {Object}*/ ($Casts.$to(data_2, Data_$Overlay));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(data_3.x) + ': ' + data_3.y + '%';
   }))).m_legendData__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['Cats: 35', 'Dogs: 55', 'Birds: 10'], j_l_String))), Pie))).m_legendPosition__org_patternfly_chart_LegendPosition__org_jboss_elemento_TypedBuilder(LegendPosition.f_bottom__org_patternfly_chart_LegendPosition), Pie))).m_padding__org_patternfly_chart_Padding__org_jboss_elemento_TypedBuilder(Padding_$Overlay.m_padding__double__double__double__double__org_patternfly_chart_Padding(20, 20, 80, 20)), Pie))).m_themeColor__org_patternfly_chart_ChartThemeColor__org_jboss_elemento_TypedBuilder(ChartThemeColor.f_multiOrdered__org_patternfly_chart_ChartThemeColor), Pie))).m_width__int__org_jboss_elemento_TypedBuilder(300), Pie))).m_height__int__org_jboss_elemento_TypedBuilder(275), Pie))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('pie-custom-cs', 'Custom color scale with right aligned legend', Code.m_code__java_lang_String__java_lang_String('pie-custom-cs'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder('height: 230px; width: 450px;'), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to((/**@type {Pie}*/ ($Casts.$to(Pie.m_pie__org_patternfly_chart_pie_Pie().m_ariaTitle__java_lang_String__org_jboss_elemento_TypedBuilder('Pie chart example'), Pie))).m_ariaDesc__java_lang_String__org_jboss_elemento_TypedBuilder('Average number of pets'), Pie))).m_data__arrayOf_org_patternfly_chart_Data__org_patternfly_chart_pie_Pie([Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Sky', 38), Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Shady side of pyramid', 7), Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Sunny side of pyramid', 17), Data_$Overlay.m_data__java_lang_String__double__org_patternfly_chart_Data('Sky', 38)]).m_labels__java_util_function_Function__org_patternfly_chart_pie_Pie(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Object */ data_4) =>{
    let data_5 = /**@type {Object}*/ ($Casts.$to(data_4, Data_$Overlay));
    return data_5.x;
   }))).m_legendData__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['Sky', 'Shady side of pyramid', 'Sunny side of pyramid'], j_l_String))), Pie))).m_legendOrientation__org_patternfly_chart_LegendOrientation__org_jboss_elemento_TypedBuilder(LegendOrientation.f_vertical__org_patternfly_chart_LegendOrientation), Pie))).m_legendPosition__org_patternfly_chart_LegendPosition__org_jboss_elemento_TypedBuilder(LegendPosition.f_right__org_patternfly_chart_LegendPosition), Pie))).m_padding__org_patternfly_chart_Padding__org_jboss_elemento_TypedBuilder(Padding_$Overlay.m_padding__double__double__double__double__org_patternfly_chart_Padding(20, 240, 20, 20)), Pie))).m_themeColor__org_patternfly_chart_ChartThemeColor__org_jboss_elemento_TypedBuilder(ChartThemeColor.f_orange__org_patternfly_chart_ChartThemeColor), Pie))).m_width__int__org_jboss_elemento_TypedBuilder(450), Pie))).m_height__int__org_jboss_elemento_TypedBuilder(230), Pie))).m_colorScale__arrayOf_java_lang_String__org_patternfly_chart_pie_Pie(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Token.f_chartThemeColorscalesBlueColorscale100__org_patternfly_token_Token.f_var__org_patternfly_token_Token, Token.f_chartThemeColorscalesOrangeColorscale300__org_patternfly_token_Token.f_var__org_patternfly_token_Token, Token.f_chartThemeColorscalesYellowColorscale100__org_patternfly_token_Token.f_var__org_patternfly_token_Token, Token.f_chartThemeColorscalesBlueColorscale100__org_patternfly_token_Token.f_var__org_patternfly_token_Token], j_l_String)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Pie));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Pie), Type.f_chart__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  PieChart.$clinit = () =>{};
  PieChart.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PieChart;
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
  ChartThemeColor = goog.module.get('org.patternfly.chart.ChartThemeColor$impl');
  Data_$Overlay = goog.module.get('org.patternfly.chart.Data.$Overlay$impl');
  LegendOrientation = goog.module.get('org.patternfly.chart.LegendOrientation$impl');
  LegendPosition = goog.module.get('org.patternfly.chart.LegendPosition$impl');
  Padding_$Overlay = goog.module.get('org.patternfly.chart.Padding.$Overlay$impl');
  Pie = goog.module.get('org.patternfly.chart.pie.Pie$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Chart_$Overlay = goog.module.get('org.patternfly.showcase.chart.Chart.$Overlay$impl');
  Token = goog.module.get('org.patternfly.token.Token$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PieChart, 'org.patternfly.showcase.chart.PieChart');

exports = PieChart;

//# sourceMappingURL=PieChart.js.map
