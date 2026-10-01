goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.Minute$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Minute>}
 */
class Minute extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute;
 }
 /** @nodts @return {!Minute} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Minute();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute = value;
 }
 /** @nodts @return {!Minute} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute(/** string */ name) {
  Minute.$clinit();
  if ($Equality.$same(Minute.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute_, null)) {
   Minute.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute_ = (/**@type {Map<?string, !Minute>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Minute.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Minute())));
  }
  return /**@type {Minute}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Minute.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute_));
 }
 /** @nodts @return {!Array<!Minute>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Minute() {
  Minute.$clinit();
  return /**@type {!Array<!Minute>}*/ ($Arrays.$stampType([Minute.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute, Minute.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute], Minute));
 }
 /** @nodts */
 static $clinit() {
  Minute.$clinit = () =>{};
  Minute.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Minute;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Minute.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute = 0;
/**@const {number} @nodts*/
Minute.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute = 1;
/**@const {!Minute} @nodts*/
Minute.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute = /**@pureOrBreakMyCode*/ Minute.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('numeric'), Minute.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute, 'numeric');
/**@const {!Minute} @nodts*/
Minute.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute = /**@pureOrBreakMyCode*/ Minute.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2digit'), Minute.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute, '2-digit');
/**@type {Map<?string, !Minute>} @nodts*/
Minute.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute_;
$Util.$setClassMetadataForEnum(Minute, 'org.patternfly.component.timestamp.DateTimeFormatOptions$Minute');

exports = Minute;

//# sourceMappingURL=DateTimeFormatOptions$Minute.js.map
