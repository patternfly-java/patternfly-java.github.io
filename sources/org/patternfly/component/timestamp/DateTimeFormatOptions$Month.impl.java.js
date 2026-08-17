goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.Month$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Month>}
 */
class Month extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Month;
 }
 /** @nodts @return {!Month} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Month();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Month__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Month__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = value;
 }
 /** @nodts @return {!Month} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_Month(/** string */ name) {
  Month.$clinit();
  if ($Equality.$same(Month.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Month_, null)) {
   Month.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Month_ = (/**@type {Map<?string, !Month>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Month.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Month())));
  }
  return /**@type {Month}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Month.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Month_));
 }
 /** @nodts @return {!Array<!Month>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Month() {
  Month.$clinit();
  return /**@type {!Array<!Month>}*/ ($Arrays.$stampType([Month.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, Month.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, Month.f_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, Month.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, Month.f__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Month], Month));
 }
 /** @nodts */
 static $clinit() {
  Month.$clinit = () =>{};
  Month.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Month;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Month.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = 0;
/**@const {number} @nodts*/
Month.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = 1;
/**@const {number} @nodts*/
Month.$ordinal_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = 2;
/**@const {number} @nodts*/
Month.$ordinal__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = 3;
/**@const {number} @nodts*/
Month.$ordinal__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = 4;
/**@const {!Month} @nodts*/
Month.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = /**@pureOrBreakMyCode*/ Month.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('numeric'), Month.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, 'numeric');
/**@const {!Month} @nodts*/
Month.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = /**@pureOrBreakMyCode*/ Month.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2digit'), Month.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, '2-digit');
/**@const {!Month} @nodts*/
Month.f_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = /**@pureOrBreakMyCode*/ Month.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('narrow'), Month.$ordinal_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, 'narrow');
/**@const {!Month} @nodts*/
Month.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = /**@pureOrBreakMyCode*/ Month.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_short'), Month.$ordinal__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, 'short');
/**@const {!Month} @nodts*/
Month.f__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Month = /**@pureOrBreakMyCode*/ Month.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_long'), Month.$ordinal__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Month, 'long');
/**@type {Map<?string, !Month>} @nodts*/
Month.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Month_;
$Util.$setClassMetadataForEnum(Month, 'org.patternfly.component.timestamp.DateTimeFormatOptions$Month');

exports = Month;

//# sourceMappingURL=DateTimeFormatOptions$Month.js.map
