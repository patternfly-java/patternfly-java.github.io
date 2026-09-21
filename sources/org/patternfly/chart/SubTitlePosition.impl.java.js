goog.module('org.patternfly.chart.SubTitlePosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<SubTitlePosition>}
 */
class SubTitlePosition extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SubTitlePosition} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new SubTitlePosition();
  $instance.$ctor__org_patternfly_chart_SubTitlePosition__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_chart_SubTitlePosition__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!SubTitlePosition} */
 static m_valueOf__java_lang_String__org_patternfly_chart_SubTitlePosition(/** string */ name) {
  SubTitlePosition.$clinit();
  if ($Equality.$same(SubTitlePosition.f_namesToValuesMap__org_patternfly_chart_SubTitlePosition_, null)) {
   SubTitlePosition.f_namesToValuesMap__org_patternfly_chart_SubTitlePosition_ = (/**@type {Map<?string, !SubTitlePosition>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(SubTitlePosition.m_values__arrayOf_org_patternfly_chart_SubTitlePosition())));
  }
  return /**@type {SubTitlePosition}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, SubTitlePosition.f_namesToValuesMap__org_patternfly_chart_SubTitlePosition_));
 }
 /** @nodts @return {!Array<!SubTitlePosition>} */
 static m_values__arrayOf_org_patternfly_chart_SubTitlePosition() {
  SubTitlePosition.$clinit();
  return /**@type {!Array<!SubTitlePosition>}*/ ($Arrays.$stampType([SubTitlePosition.f_bottom__org_patternfly_chart_SubTitlePosition, SubTitlePosition.f_center__org_patternfly_chart_SubTitlePosition, SubTitlePosition.f_right__org_patternfly_chart_SubTitlePosition], SubTitlePosition));
 }
 /** @nodts */
 static $clinit() {
  SubTitlePosition.$clinit = () =>{};
  SubTitlePosition.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SubTitlePosition;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
SubTitlePosition.$ordinal_bottom__org_patternfly_chart_SubTitlePosition = 0;
/**@const {number} @nodts*/
SubTitlePosition.$ordinal_center__org_patternfly_chart_SubTitlePosition = 1;
/**@const {number} @nodts*/
SubTitlePosition.$ordinal_right__org_patternfly_chart_SubTitlePosition = 2;
/**@const {!SubTitlePosition} @nodts*/
SubTitlePosition.f_bottom__org_patternfly_chart_SubTitlePosition = /**@pureOrBreakMyCode*/ SubTitlePosition.$create__java_lang_String__int($Util.$makeEnumName('bottom'), SubTitlePosition.$ordinal_bottom__org_patternfly_chart_SubTitlePosition);
/**@const {!SubTitlePosition} @nodts*/
SubTitlePosition.f_center__org_patternfly_chart_SubTitlePosition = /**@pureOrBreakMyCode*/ SubTitlePosition.$create__java_lang_String__int($Util.$makeEnumName('center'), SubTitlePosition.$ordinal_center__org_patternfly_chart_SubTitlePosition);
/**@const {!SubTitlePosition} @nodts*/
SubTitlePosition.f_right__org_patternfly_chart_SubTitlePosition = /**@pureOrBreakMyCode*/ SubTitlePosition.$create__java_lang_String__int($Util.$makeEnumName('right'), SubTitlePosition.$ordinal_right__org_patternfly_chart_SubTitlePosition);
/**@type {Map<?string, !SubTitlePosition>} @nodts*/
SubTitlePosition.f_namesToValuesMap__org_patternfly_chart_SubTitlePosition_;
$Util.$setClassMetadataForEnum(SubTitlePosition, 'org.patternfly.chart.SubTitlePosition');

exports = SubTitlePosition;

//# sourceMappingURL=SubTitlePosition.js.map
