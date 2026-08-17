goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.Day$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Day>}
 */
class Day extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Day;
 }
 /** @nodts @return {!Day} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Day();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Day__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Day__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Day = value;
 }
 /** @nodts @return {!Day} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_Day(/** string */ name) {
  Day.$clinit();
  if ($Equality.$same(Day.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Day_, null)) {
   Day.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Day_ = (/**@type {Map<?string, !Day>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Day.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Day())));
  }
  return /**@type {Day}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Day.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Day_));
 }
 /** @nodts @return {!Array<!Day>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Day() {
  Day.$clinit();
  return /**@type {!Array<!Day>}*/ ($Arrays.$stampType([Day.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Day, Day.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Day], Day));
 }
 /** @nodts */
 static $clinit() {
  Day.$clinit = () =>{};
  Day.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Day;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Day.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Day = 0;
/**@const {number} @nodts*/
Day.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Day = 1;
/**@const {!Day} @nodts*/
Day.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Day = /**@pureOrBreakMyCode*/ Day.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('numeric'), Day.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Day, 'numeric');
/**@const {!Day} @nodts*/
Day.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Day = /**@pureOrBreakMyCode*/ Day.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2digit'), Day.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Day, '2-digit');
/**@type {Map<?string, !Day>} @nodts*/
Day.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Day_;
$Util.$setClassMetadataForEnum(Day, 'org.patternfly.component.timestamp.DateTimeFormatOptions$Day');

exports = Day;

//# sourceMappingURL=DateTimeFormatOptions$Day.js.map
