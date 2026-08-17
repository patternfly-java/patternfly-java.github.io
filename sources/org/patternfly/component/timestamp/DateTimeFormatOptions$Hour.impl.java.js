goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.Hour$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Hour>}
 */
class Hour extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour;
 }
 /** @nodts @return {!Hour} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Hour();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour = value;
 }
 /** @nodts @return {!Hour} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour(/** string */ name) {
  Hour.$clinit();
  if ($Equality.$same(Hour.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour_, null)) {
   Hour.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour_ = (/**@type {Map<?string, !Hour>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Hour.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Hour())));
  }
  return /**@type {Hour}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Hour.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour_));
 }
 /** @nodts @return {!Array<!Hour>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Hour() {
  Hour.$clinit();
  return /**@type {!Array<!Hour>}*/ ($Arrays.$stampType([Hour.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour, Hour.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour], Hour));
 }
 /** @nodts */
 static $clinit() {
  Hour.$clinit = () =>{};
  Hour.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Hour;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Hour.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour = 0;
/**@const {number} @nodts*/
Hour.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour = 1;
/**@const {!Hour} @nodts*/
Hour.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour = /**@pureOrBreakMyCode*/ Hour.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('numeric'), Hour.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour, 'numeric');
/**@const {!Hour} @nodts*/
Hour.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour = /**@pureOrBreakMyCode*/ Hour.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2digit'), Hour.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour, '2-digit');
/**@type {Map<?string, !Hour>} @nodts*/
Hour.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour_;
$Util.$setClassMetadataForEnum(Hour, 'org.patternfly.component.timestamp.DateTimeFormatOptions$Hour');

exports = Hour;

//# sourceMappingURL=DateTimeFormatOptions$Hour.js.map
