goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.DayPeriod$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<DayPeriod>}
 */
class DayPeriod extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod;
 }
 /** @nodts @return {!DayPeriod} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new DayPeriod();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod = value;
 }
 /** @nodts @return {!DayPeriod} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod(/** string */ name) {
  DayPeriod.$clinit();
  if ($Equality.$same(DayPeriod.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod_, null)) {
   DayPeriod.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod_ = (/**@type {Map<?string, !DayPeriod>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(DayPeriod.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod())));
  }
  return /**@type {DayPeriod}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, DayPeriod.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod_));
 }
 /** @nodts @return {!Array<!DayPeriod>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod() {
  DayPeriod.$clinit();
  return /**@type {!Array<!DayPeriod>}*/ ($Arrays.$stampType([DayPeriod.f_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod, DayPeriod.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod, DayPeriod.f__long__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod], DayPeriod));
 }
 /** @nodts */
 static $clinit() {
  DayPeriod.$clinit = () =>{};
  DayPeriod.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DayPeriod;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
DayPeriod.$ordinal_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod = 0;
/**@const {number} @nodts*/
DayPeriod.$ordinal__short__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod = 1;
/**@const {number} @nodts*/
DayPeriod.$ordinal__long__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod = 2;
/**@const {!DayPeriod} @nodts*/
DayPeriod.f_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod = /**@pureOrBreakMyCode*/ DayPeriod.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('narrow'), DayPeriod.$ordinal_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod, 'narrow');
/**@const {!DayPeriod} @nodts*/
DayPeriod.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod = /**@pureOrBreakMyCode*/ DayPeriod.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_short'), DayPeriod.$ordinal__short__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod, 'short');
/**@const {!DayPeriod} @nodts*/
DayPeriod.f__long__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod = /**@pureOrBreakMyCode*/ DayPeriod.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_long'), DayPeriod.$ordinal__long__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod, 'long');
/**@type {Map<?string, !DayPeriod>} @nodts*/
DayPeriod.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod_;
$Util.$setClassMetadataForEnum(DayPeriod, 'org.patternfly.component.timestamp.DateTimeFormatOptions$DayPeriod');

exports = DayPeriod;

//# sourceMappingURL=DateTimeFormatOptions$DayPeriod.js.map
