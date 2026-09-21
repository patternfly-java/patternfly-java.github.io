goog.module('org.patternfly.chart.LegendPosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<LegendPosition>}
 */
class LegendPosition extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LegendPosition} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new LegendPosition();
  $instance.$ctor__org_patternfly_chart_LegendPosition__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_LegendPosition__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!LegendPosition} */
 static m_valueOf__java_lang_String__org_patternfly_chart_LegendPosition(/** string */ name) {
  LegendPosition.$clinit();
  if ($Equality.$same(LegendPosition.f_namesToValuesMap__org_patternfly_chart_LegendPosition_, null)) {
   LegendPosition.f_namesToValuesMap__org_patternfly_chart_LegendPosition_ = (/**@type {Map<?string, !LegendPosition>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(LegendPosition.m_values__arrayOf_org_patternfly_chart_LegendPosition())));
  }
  return /**@type {LegendPosition}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, LegendPosition.f_namesToValuesMap__org_patternfly_chart_LegendPosition_));
 }
 /** @nodts @return {!Array<!LegendPosition>} */
 static m_values__arrayOf_org_patternfly_chart_LegendPosition() {
  LegendPosition.$clinit();
  return /**@type {!Array<!LegendPosition>}*/ ($Arrays.$stampType([LegendPosition.f_bottom__org_patternfly_chart_LegendPosition, LegendPosition.f_right__org_patternfly_chart_LegendPosition], LegendPosition));
 }
 /** @nodts */
 static $clinit() {
  LegendPosition.$clinit = () =>{};
  LegendPosition.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendPosition;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
LegendPosition.$ordinal_bottom__org_patternfly_chart_LegendPosition = 0;
/**@const {number} @nodts*/
LegendPosition.$ordinal_right__org_patternfly_chart_LegendPosition = 1;
/**@const {!LegendPosition} @nodts*/
LegendPosition.f_bottom__org_patternfly_chart_LegendPosition = /**@pureOrBreakMyCode*/ LegendPosition.$create__java_lang_String__int($Util.$makeEnumName('bottom'), LegendPosition.$ordinal_bottom__org_patternfly_chart_LegendPosition);
/**@const {!LegendPosition} @nodts*/
LegendPosition.f_right__org_patternfly_chart_LegendPosition = /**@pureOrBreakMyCode*/ LegendPosition.$create__java_lang_String__int($Util.$makeEnumName('right'), LegendPosition.$ordinal_right__org_patternfly_chart_LegendPosition);
/**@type {Map<?string, !LegendPosition>} @nodts*/
LegendPosition.f_namesToValuesMap__org_patternfly_chart_LegendPosition_;
$Util.$setClassMetadataForEnum(LegendPosition, 'org.patternfly.chart.LegendPosition');

exports = LegendPosition;

//# sourceMappingURL=LegendPosition.js.map
