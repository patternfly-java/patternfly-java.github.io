goog.module('org.patternfly.chart.LegendOrientation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<LegendOrientation>}
 */
class LegendOrientation extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LegendOrientation} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new LegendOrientation();
  $instance.$ctor__org_patternfly_chart_LegendOrientation__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_LegendOrientation__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!LegendOrientation} */
 static m_valueOf__java_lang_String__org_patternfly_chart_LegendOrientation(/** string */ name) {
  LegendOrientation.$clinit();
  if ($Equality.$same(LegendOrientation.f_namesToValuesMap__org_patternfly_chart_LegendOrientation_, null)) {
   LegendOrientation.f_namesToValuesMap__org_patternfly_chart_LegendOrientation_ = (/**@type {Map<?string, !LegendOrientation>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(LegendOrientation.m_values__arrayOf_org_patternfly_chart_LegendOrientation())));
  }
  return /**@type {LegendOrientation}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, LegendOrientation.f_namesToValuesMap__org_patternfly_chart_LegendOrientation_));
 }
 /** @nodts @return {!Array<!LegendOrientation>} */
 static m_values__arrayOf_org_patternfly_chart_LegendOrientation() {
  LegendOrientation.$clinit();
  return /**@type {!Array<!LegendOrientation>}*/ ($Arrays.$stampType([LegendOrientation.f_horizontal__org_patternfly_chart_LegendOrientation, LegendOrientation.f_vertical__org_patternfly_chart_LegendOrientation], LegendOrientation));
 }
 /** @nodts */
 static $clinit() {
  LegendOrientation.$clinit = () =>{};
  LegendOrientation.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendOrientation;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
LegendOrientation.$ordinal_horizontal__org_patternfly_chart_LegendOrientation = 0;
/**@const {number} @nodts*/
LegendOrientation.$ordinal_vertical__org_patternfly_chart_LegendOrientation = 1;
/**@const {!LegendOrientation} @nodts*/
LegendOrientation.f_horizontal__org_patternfly_chart_LegendOrientation = /**@pureOrBreakMyCode*/ LegendOrientation.$create__java_lang_String__int($Util.$makeEnumName('horizontal'), LegendOrientation.$ordinal_horizontal__org_patternfly_chart_LegendOrientation);
/**@const {!LegendOrientation} @nodts*/
LegendOrientation.f_vertical__org_patternfly_chart_LegendOrientation = /**@pureOrBreakMyCode*/ LegendOrientation.$create__java_lang_String__int($Util.$makeEnumName('vertical'), LegendOrientation.$ordinal_vertical__org_patternfly_chart_LegendOrientation);
/**@type {Map<?string, !LegendOrientation>} @nodts*/
LegendOrientation.f_namesToValuesMap__org_patternfly_chart_LegendOrientation_;
$Util.$setClassMetadataForEnum(LegendOrientation, 'org.patternfly.chart.LegendOrientation');

exports = LegendOrientation;

//# sourceMappingURL=LegendOrientation.js.map
