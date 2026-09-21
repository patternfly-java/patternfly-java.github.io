goog.module('org.patternfly.component.timestamp.TimestampFormat$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<TimestampFormat>}
 */
class TimestampFormat extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_TimestampFormat;
 }
 /** @nodts @return {!TimestampFormat} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TimestampFormat();
  $instance.$ctor__org_patternfly_component_timestamp_TimestampFormat__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_TimestampFormat__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_TimestampFormat = value;
 }
 /** @nodts @return {!TimestampFormat} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_TimestampFormat(/** string */ name) {
  TimestampFormat.$clinit();
  if ($Equality.$same(TimestampFormat.f_namesToValuesMap__org_patternfly_component_timestamp_TimestampFormat_, null)) {
   TimestampFormat.f_namesToValuesMap__org_patternfly_component_timestamp_TimestampFormat_ = (/**@type {Map<?string, !TimestampFormat>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(TimestampFormat.m_values__arrayOf_org_patternfly_component_timestamp_TimestampFormat())));
  }
  return /**@type {TimestampFormat}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, TimestampFormat.f_namesToValuesMap__org_patternfly_component_timestamp_TimestampFormat_));
 }
 /** @nodts @return {!Array<!TimestampFormat>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_TimestampFormat() {
  TimestampFormat.$clinit();
  return /**@type {!Array<!TimestampFormat>}*/ ($Arrays.$stampType([TimestampFormat.f_full__org_patternfly_component_timestamp_TimestampFormat, TimestampFormat.f__long__org_patternfly_component_timestamp_TimestampFormat, TimestampFormat.f_medium__org_patternfly_component_timestamp_TimestampFormat, TimestampFormat.f__short__org_patternfly_component_timestamp_TimestampFormat], TimestampFormat));
 }
 /** @nodts */
 static $clinit() {
  TimestampFormat.$clinit = () =>{};
  TimestampFormat.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimestampFormat;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
TimestampFormat.$ordinal_full__org_patternfly_component_timestamp_TimestampFormat = 0;
/**@const {number} @nodts*/
TimestampFormat.$ordinal__long__org_patternfly_component_timestamp_TimestampFormat = 1;
/**@const {number} @nodts*/
TimestampFormat.$ordinal_medium__org_patternfly_component_timestamp_TimestampFormat = 2;
/**@const {number} @nodts*/
TimestampFormat.$ordinal__short__org_patternfly_component_timestamp_TimestampFormat = 3;
/**@const {!TimestampFormat} @nodts*/
TimestampFormat.f_full__org_patternfly_component_timestamp_TimestampFormat = /**@pureOrBreakMyCode*/ TimestampFormat.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('full'), TimestampFormat.$ordinal_full__org_patternfly_component_timestamp_TimestampFormat, 'full');
/**@const {!TimestampFormat} @nodts*/
TimestampFormat.f__long__org_patternfly_component_timestamp_TimestampFormat = /**@pureOrBreakMyCode*/ TimestampFormat.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_long'), TimestampFormat.$ordinal__long__org_patternfly_component_timestamp_TimestampFormat, 'long');
/**@const {!TimestampFormat} @nodts*/
TimestampFormat.f_medium__org_patternfly_component_timestamp_TimestampFormat = /**@pureOrBreakMyCode*/ TimestampFormat.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('medium'), TimestampFormat.$ordinal_medium__org_patternfly_component_timestamp_TimestampFormat, 'medium');
/**@const {!TimestampFormat} @nodts*/
TimestampFormat.f__short__org_patternfly_component_timestamp_TimestampFormat = /**@pureOrBreakMyCode*/ TimestampFormat.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_short'), TimestampFormat.$ordinal__short__org_patternfly_component_timestamp_TimestampFormat, 'short');
/**@type {Map<?string, !TimestampFormat>} @nodts*/
TimestampFormat.f_namesToValuesMap__org_patternfly_component_timestamp_TimestampFormat_;
$Util.$setClassMetadataForEnum(TimestampFormat, 'org.patternfly.component.timestamp.TimestampFormat');

exports = TimestampFormat;

//# sourceMappingURL=TimestampFormat.js.map
