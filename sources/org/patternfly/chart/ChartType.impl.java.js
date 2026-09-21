goog.module('org.patternfly.chart.ChartType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<ChartType>}
 */
class ChartType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_chart_ChartType;
  /**@type {?string} @nodts*/
  this.f_chartName__org_patternfly_chart_ChartType;
 }
 /** @nodts @return {!ChartType} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ id, /** ?string */ chartName) {
  let $instance = new ChartType();
  $instance.$ctor__org_patternfly_chart_ChartType__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, id, chartName);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_ChartType__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ id, /** ?string */ chartName) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_id__org_patternfly_chart_ChartType = id;
  this.f_chartName__org_patternfly_chart_ChartType = chartName;
 }
 /** @nodts @return {!ChartType} */
 static m_valueOf__java_lang_String__org_patternfly_chart_ChartType(/** string */ name) {
  ChartType.$clinit();
  if ($Equality.$same(ChartType.f_namesToValuesMap__org_patternfly_chart_ChartType_, null)) {
   ChartType.f_namesToValuesMap__org_patternfly_chart_ChartType_ = (/**@type {Map<?string, !ChartType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ChartType.m_values__arrayOf_org_patternfly_chart_ChartType())));
  }
  return /**@type {ChartType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ChartType.f_namesToValuesMap__org_patternfly_chart_ChartType_));
 }
 /** @nodts @return {!Array<!ChartType>} */
 static m_values__arrayOf_org_patternfly_chart_ChartType() {
  ChartType.$clinit();
  return /**@type {!Array<!ChartType>}*/ ($Arrays.$stampType([ChartType.f_Bullet__org_patternfly_chart_ChartType, ChartType.f_Donut__org_patternfly_chart_ChartType, ChartType.f_DonutUtilization__org_patternfly_chart_ChartType, ChartType.f_DonutThreshold__org_patternfly_chart_ChartType, ChartType.f_Pie__org_patternfly_chart_ChartType], ChartType));
 }
 /** @nodts */
 static $clinit() {
  ChartType.$clinit = () =>{};
  ChartType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ChartType.$ordinal_Bullet__org_patternfly_chart_ChartType = 0;
/**@const {number} @nodts*/
ChartType.$ordinal_Donut__org_patternfly_chart_ChartType = 1;
/**@const {number} @nodts*/
ChartType.$ordinal_DonutUtilization__org_patternfly_chart_ChartType = 2;
/**@const {number} @nodts*/
ChartType.$ordinal_DonutThreshold__org_patternfly_chart_ChartType = 3;
/**@const {number} @nodts*/
ChartType.$ordinal_Pie__org_patternfly_chart_ChartType = 4;
/**@const {!ChartType} @nodts*/
ChartType.f_Bullet__org_patternfly_chart_ChartType = /**@pureOrBreakMyCode*/ ChartType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Bullet'), ChartType.$ordinal_Bullet__org_patternfly_chart_ChartType, 'blt', 'PF6/Chart/Bullet');
/**@const {!ChartType} @nodts*/
ChartType.f_Donut__org_patternfly_chart_ChartType = /**@pureOrBreakMyCode*/ ChartType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Donut'), ChartType.$ordinal_Donut__org_patternfly_chart_ChartType, 'dnt', 'PF6/Chart/Donut');
/**@const {!ChartType} @nodts*/
ChartType.f_DonutUtilization__org_patternfly_chart_ChartType = /**@pureOrBreakMyCode*/ ChartType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DonutUtilization'), ChartType.$ordinal_DonutUtilization__org_patternfly_chart_ChartType, 'dntu', 'PF6/Chart/DonutUtilization');
/**@const {!ChartType} @nodts*/
ChartType.f_DonutThreshold__org_patternfly_chart_ChartType = /**@pureOrBreakMyCode*/ ChartType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DonutThreshold'), ChartType.$ordinal_DonutThreshold__org_patternfly_chart_ChartType, 'dntt', 'PF6/Chart/DonutThreshold');
/**@const {!ChartType} @nodts*/
ChartType.f_Pie__org_patternfly_chart_ChartType = /**@pureOrBreakMyCode*/ ChartType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Pie'), ChartType.$ordinal_Pie__org_patternfly_chart_ChartType, 'pie', 'PF6/Chart/Pie');
/**@type {Map<?string, !ChartType>} @nodts*/
ChartType.f_namesToValuesMap__org_patternfly_chart_ChartType_;
$Util.$setClassMetadataForEnum(ChartType, 'org.patternfly.chart.ChartType');

exports = ChartType;

//# sourceMappingURL=ChartType.js.map
