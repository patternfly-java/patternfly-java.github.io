goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.Weekday$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Weekday>}
 */
class Weekday extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday;
 }
 /** @nodts @return {!Weekday} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Weekday();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday = value;
 }
 /** @nodts @return {!Weekday} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday(/** string */ name) {
  Weekday.$clinit();
  if ($Equality.$same(Weekday.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday_, null)) {
   Weekday.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday_ = (/**@type {Map<?string, !Weekday>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Weekday.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday())));
  }
  return /**@type {Weekday}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Weekday.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday_));
 }
 /** @nodts @return {!Array<!Weekday>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday() {
  Weekday.$clinit();
  return /**@type {!Array<!Weekday>}*/ ($Arrays.$stampType([Weekday.f_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday, Weekday.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday, Weekday.f__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday], Weekday));
 }
 /** @nodts */
 static $clinit() {
  Weekday.$clinit = () =>{};
  Weekday.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Weekday;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Weekday.$ordinal_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday = 0;
/**@const {number} @nodts*/
Weekday.$ordinal__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday = 1;
/**@const {number} @nodts*/
Weekday.$ordinal__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday = 2;
/**@const {!Weekday} @nodts*/
Weekday.f_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday = /**@pureOrBreakMyCode*/ Weekday.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('narrow'), Weekday.$ordinal_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday, 'narrow');
/**@const {!Weekday} @nodts*/
Weekday.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday = /**@pureOrBreakMyCode*/ Weekday.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_short'), Weekday.$ordinal__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday, 'short');
/**@const {!Weekday} @nodts*/
Weekday.f__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday = /**@pureOrBreakMyCode*/ Weekday.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_long'), Weekday.$ordinal__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday, 'long');
/**@type {Map<?string, !Weekday>} @nodts*/
Weekday.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday_;
$Util.$setClassMetadataForEnum(Weekday, 'org.patternfly.component.timestamp.DateTimeFormatOptions$Weekday');

exports = Weekday;

//# sourceMappingURL=DateTimeFormatOptions$Weekday.js.map
