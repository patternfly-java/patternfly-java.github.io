goog.module('org.patternfly.chart.ChartThemeColor$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<ChartThemeColor>}
 */
class ChartThemeColor extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_color__org_patternfly_chart_ChartThemeColor;
 }
 /** @nodts @return {!ChartThemeColor} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ color) {
  let $instance = new ChartThemeColor();
  $instance.$ctor__org_patternfly_chart_ChartThemeColor__java_lang_String__int__java_lang_String__void($name, $ordinal, color);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_ChartThemeColor__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ color) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_color__org_patternfly_chart_ChartThemeColor = color;
 }
 /** @nodts @return {!ChartThemeColor} */
 static m_valueOf__java_lang_String__org_patternfly_chart_ChartThemeColor(/** string */ name) {
  ChartThemeColor.$clinit();
  if ($Equality.$same(ChartThemeColor.f_namesToValuesMap__org_patternfly_chart_ChartThemeColor_, null)) {
   ChartThemeColor.f_namesToValuesMap__org_patternfly_chart_ChartThemeColor_ = (/**@type {Map<?string, !ChartThemeColor>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ChartThemeColor.m_values__arrayOf_org_patternfly_chart_ChartThemeColor())));
  }
  return /**@type {ChartThemeColor}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ChartThemeColor.f_namesToValuesMap__org_patternfly_chart_ChartThemeColor_));
 }
 /** @nodts @return {!Array<!ChartThemeColor>} */
 static m_values__arrayOf_org_patternfly_chart_ChartThemeColor() {
  ChartThemeColor.$clinit();
  return /**@type {!Array<!ChartThemeColor>}*/ ($Arrays.$stampType([ChartThemeColor.f_blue__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_teal__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_default___org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_yellow__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_gray__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_green__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_multi__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_multiOrdered__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_multiUnordered__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_orange__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_purple__org_patternfly_chart_ChartThemeColor, ChartThemeColor.f_skeleton__org_patternfly_chart_ChartThemeColor], ChartThemeColor));
 }
 /** @nodts */
 static $clinit() {
  ChartThemeColor.$clinit = () =>{};
  ChartThemeColor.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartThemeColor;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_blue__org_patternfly_chart_ChartThemeColor = 0;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_teal__org_patternfly_chart_ChartThemeColor = 1;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_default___org_patternfly_chart_ChartThemeColor = 2;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_yellow__org_patternfly_chart_ChartThemeColor = 3;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_gray__org_patternfly_chart_ChartThemeColor = 4;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_green__org_patternfly_chart_ChartThemeColor = 5;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_multi__org_patternfly_chart_ChartThemeColor = 6;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_multiOrdered__org_patternfly_chart_ChartThemeColor = 7;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_multiUnordered__org_patternfly_chart_ChartThemeColor = 8;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_orange__org_patternfly_chart_ChartThemeColor = 9;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_purple__org_patternfly_chart_ChartThemeColor = 10;
/**@const {number} @nodts*/
ChartThemeColor.$ordinal_skeleton__org_patternfly_chart_ChartThemeColor = 11;
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_blue__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('blue'), ChartThemeColor.$ordinal_blue__org_patternfly_chart_ChartThemeColor, 'blue');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_teal__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('teal'), ChartThemeColor.$ordinal_teal__org_patternfly_chart_ChartThemeColor, 'teal');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_default___org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('default_'), ChartThemeColor.$ordinal_default___org_patternfly_chart_ChartThemeColor, 'blue');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_yellow__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('yellow'), ChartThemeColor.$ordinal_yellow__org_patternfly_chart_ChartThemeColor, 'yellow');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_gray__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gray'), ChartThemeColor.$ordinal_gray__org_patternfly_chart_ChartThemeColor, 'gray');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_green__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('green'), ChartThemeColor.$ordinal_green__org_patternfly_chart_ChartThemeColor, 'green');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_multi__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('multi'), ChartThemeColor.$ordinal_multi__org_patternfly_chart_ChartThemeColor, 'multi');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_multiOrdered__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('multiOrdered'), ChartThemeColor.$ordinal_multiOrdered__org_patternfly_chart_ChartThemeColor, 'multi-ordered');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_multiUnordered__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('multiUnordered'), ChartThemeColor.$ordinal_multiUnordered__org_patternfly_chart_ChartThemeColor, 'multi-unordered');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_orange__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('orange'), ChartThemeColor.$ordinal_orange__org_patternfly_chart_ChartThemeColor, 'orange');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_purple__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('purple'), ChartThemeColor.$ordinal_purple__org_patternfly_chart_ChartThemeColor, 'purple');
/**@const {!ChartThemeColor} @nodts*/
ChartThemeColor.f_skeleton__org_patternfly_chart_ChartThemeColor = /**@pureOrBreakMyCode*/ ChartThemeColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('skeleton'), ChartThemeColor.$ordinal_skeleton__org_patternfly_chart_ChartThemeColor, 'skeleton');
/**@type {Map<?string, !ChartThemeColor>} @nodts*/
ChartThemeColor.f_namesToValuesMap__org_patternfly_chart_ChartThemeColor_;
$Util.$setClassMetadataForEnum(ChartThemeColor, 'org.patternfly.chart.ChartThemeColor');

exports = ChartThemeColor;

//# sourceMappingURL=ChartThemeColor.js.map
