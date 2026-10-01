goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.Year$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Year>}
 */
class Year extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Year;
 }
 /** @nodts @return {!Year} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Year();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Year__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Year__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Year = value;
 }
 /** @nodts @return {!Year} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_Year(/** string */ name) {
  Year.$clinit();
  if ($Equality.$same(Year.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Year_, null)) {
   Year.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Year_ = (/**@type {Map<?string, !Year>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Year.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Year())));
  }
  return /**@type {Year}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Year.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Year_));
 }
 /** @nodts @return {!Array<!Year>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Year() {
  Year.$clinit();
  return /**@type {!Array<!Year>}*/ ($Arrays.$stampType([Year.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Year, Year.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Year], Year));
 }
 /** @nodts */
 static $clinit() {
  Year.$clinit = () =>{};
  Year.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Year;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Year.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Year = 0;
/**@const {number} @nodts*/
Year.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Year = 1;
/**@const {!Year} @nodts*/
Year.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Year = /**@pureOrBreakMyCode*/ Year.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('numeric'), Year.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Year, 'numeric');
/**@const {!Year} @nodts*/
Year.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Year = /**@pureOrBreakMyCode*/ Year.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2digit'), Year.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Year, '2-digit');
/**@type {Map<?string, !Year>} @nodts*/
Year.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Year_;
$Util.$setClassMetadataForEnum(Year, 'org.patternfly.component.timestamp.DateTimeFormatOptions$Year');

exports = Year;

//# sourceMappingURL=DateTimeFormatOptions$Year.js.map
