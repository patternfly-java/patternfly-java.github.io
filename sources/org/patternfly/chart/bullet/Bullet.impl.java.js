goog.module('org.patternfly.chart.bullet.Bullet$impl');

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
let BulletData_$Overlay = goog.forwardDeclare('org.patternfly.chart.bullet.BulletData.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.chart.bullet.BulletElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @extends {BaseChart<HTMLElement, Bullet>}
 */
class Bullet extends BaseChart {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Bullet} */
 static m_bullet__org_patternfly_chart_bullet_Bullet() {
  Bullet.$clinit();
  return Bullet.$create__();
 }
 /** @nodts @return {!Bullet} */
 static $create__() {
  Bullet.$clinit();
  let $instance = new Bullet();
  $instance.$ctor__org_patternfly_chart_bullet_Bullet__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_bullet_Bullet__void() {
  this.$ctor__org_patternfly_chart_BaseChart__org_patternfly_chart_ChartType__org_patternfly_chart_ChartElement__void(ChartType.f_Bullet__org_patternfly_chart_ChartType, /**@type {HTMLElement}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {HTMLElement}*/ ($Casts.$to(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement('pfj-chart-bullet', Class.$get($JavaScriptObject)), $Overlay)))));
 }
 /** @nodts @return {Bullet} */
 m_comparativeErrorMeasureData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).comparativeErrorMeasureData = this.m_bulletData__arrayOf_org_patternfly_chart_bullet_BulletData__elemental2_core_JsArray_$p_org_patternfly_chart_bullet_Bullet(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_comparativeErrorMeasureLegendData__arrayOf_java_lang_String__org_patternfly_chart_bullet_Bullet(/** Array<?string> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).comparativeErrorMeasureLegendData = this.m_legendDataArray__arrayOf_java_lang_String__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_comparativeErrorMeasureLegendData__arrayOf_org_patternfly_chart_LegendData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).comparativeErrorMeasureLegendData = this.m_legendDataArray__arrayOf_org_patternfly_chart_LegendData__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_comparativeWarningMeasureData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).comparativeWarningMeasureData = this.m_bulletData__arrayOf_org_patternfly_chart_bullet_BulletData__elemental2_core_JsArray_$p_org_patternfly_chart_bullet_Bullet(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_comparativeWarningMeasureLegendData__arrayOf_java_lang_String__org_patternfly_chart_bullet_Bullet(/** Array<?string> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).comparativeWarningMeasureLegendData = this.m_legendDataArray__arrayOf_java_lang_String__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_comparativeWarningMeasureLegendData__arrayOf_org_patternfly_chart_LegendData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).comparativeWarningMeasureLegendData = this.m_legendDataArray__arrayOf_org_patternfly_chart_LegendData__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_primaryDotMeasureData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).primaryDotMeasureData = this.m_bulletData__arrayOf_org_patternfly_chart_bullet_BulletData__elemental2_core_JsArray_$p_org_patternfly_chart_bullet_Bullet(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_primaryDotMeasureLegendData__arrayOf_java_lang_String__org_patternfly_chart_bullet_Bullet(/** Array<?string> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).primaryDotMeasureLegendData = this.m_legendDataArray__arrayOf_java_lang_String__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_primaryDotMeasureLegendData__arrayOf_org_patternfly_chart_LegendData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).primaryDotMeasureLegendData = this.m_legendDataArray__arrayOf_org_patternfly_chart_LegendData__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_primarySegmentedMeasureData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).primarySegmentedMeasureData = this.m_bulletData__arrayOf_org_patternfly_chart_bullet_BulletData__elemental2_core_JsArray_$p_org_patternfly_chart_bullet_Bullet(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_primarySegmentedMeasureLegendData__arrayOf_java_lang_String__org_patternfly_chart_bullet_Bullet(/** Array<?string> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).primarySegmentedMeasureLegendData = this.m_legendDataArray__arrayOf_java_lang_String__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_primarySegmentedMeasureLegendData__arrayOf_org_patternfly_chart_LegendData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).primarySegmentedMeasureLegendData = this.m_legendDataArray__arrayOf_org_patternfly_chart_LegendData__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_qualitativeRangeData__arrayOf_org_patternfly_chart_bullet_BulletData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).qualitativeRangeData = this.m_bulletData__arrayOf_org_patternfly_chart_bullet_BulletData__elemental2_core_JsArray_$p_org_patternfly_chart_bullet_Bullet(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_qualitativeRangeLegendData__arrayOf_java_lang_String__org_patternfly_chart_bullet_Bullet(/** Array<?string> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).qualitativeRangeLegendData = this.m_legendDataArray__arrayOf_java_lang_String__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_qualitativeRangeLegendData__arrayOf_org_patternfly_chart_LegendData__org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).qualitativeRangeLegendData = this.m_legendDataArray__arrayOf_org_patternfly_chart_LegendData__elemental2_core_JsArray(data);
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_labels__java_util_function_Function__org_patternfly_chart_bullet_Bullet(/** j_u_function_Function<Object, ?string> */ labels) {
  (/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay))).labels = /**  @return {?string}*/ ((/** * */ data) =>{
   return /**@type {?string}*/ ($Casts.$to(labels.m_apply__java_lang_Object__java_lang_Object(/**@type {Object}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Any_$Overlay.m_asPropertyMap__$devirt__jsinterop_base_Any__jsinterop_base_JsPropertyMap(data), 'datum')), BulletData_$Overlay))), j_l_String));
  });
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts @return {Bullet} */
 m_invert__org_patternfly_chart_bullet_Bullet() {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay)), 'invert', true);
  return this;
 }
 /** @nodts @return {Bullet} */
 m_maxDomain__double__org_patternfly_chart_bullet_Bullet(/** number */ maxDomain) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__double__void(/**@type {HTMLElement}*/ ($Casts.$to(this.m_element__org_patternfly_chart_ChartElement(), $Overlay)), 'max-domain', maxDomain);
  return this;
 }
 /** @nodts @return {Bullet} */
 m_that__org_patternfly_chart_bullet_Bullet() {
  return this;
 }
 /** @nodts @return {Array<Object>} */
 m_bulletData__arrayOf_org_patternfly_chart_bullet_BulletData__elemental2_core_JsArray_$p_org_patternfly_chart_bullet_Bullet(/** Array<Object> */ data) {
  let array = /**@type {!Array<Object>}*/ (new Array());
  if (!$Equality.$same(data, null)) {
   array.push(...data);
  }
  return array;
 }
 //Bridge method.
 /** @final @override @nodts @return {Bullet} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_chart_bullet_Bullet();
 }
 /** @nodts */
 static $clinit() {
  Bullet.$clinit = () =>{};
  Bullet.$loadModules();
  BaseChart.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Bullet;
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
  BulletData_$Overlay = goog.module.get('org.patternfly.chart.bullet.BulletData.$Overlay$impl');
  $Overlay = goog.module.get('org.patternfly.chart.bullet.BulletElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(Bullet, 'org.patternfly.chart.bullet.Bullet');

exports = Bullet;

//# sourceMappingURL=Bullet.js.map
