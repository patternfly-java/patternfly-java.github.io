goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.Second$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Second>}
 */
class Second extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Second;
 }
 /** @nodts @return {!Second} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Second();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Second__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Second__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Second = value;
 }
 /** @nodts @return {!Second} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_Second(/** string */ name) {
  Second.$clinit();
  if ($Equality.$same(Second.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Second_, null)) {
   Second.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Second_ = (/**@type {Map<?string, !Second>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Second.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Second())));
  }
  return /**@type {Second}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Second.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Second_));
 }
 /** @nodts @return {!Array<!Second>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Second() {
  Second.$clinit();
  return /**@type {!Array<!Second>}*/ ($Arrays.$stampType([Second.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Second, Second.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Second], Second));
 }
 /** @nodts */
 static $clinit() {
  Second.$clinit = () =>{};
  Second.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Second;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Second.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Second = 0;
/**@const {number} @nodts*/
Second.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Second = 1;
/**@const {!Second} @nodts*/
Second.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Second = /**@pureOrBreakMyCode*/ Second.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('numeric'), Second.$ordinal_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Second, 'numeric');
/**@const {!Second} @nodts*/
Second.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Second = /**@pureOrBreakMyCode*/ Second.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2digit'), Second.$ordinal__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Second, '2-digit');
/**@type {Map<?string, !Second>} @nodts*/
Second.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Second_;
$Util.$setClassMetadataForEnum(Second, 'org.patternfly.component.timestamp.DateTimeFormatOptions$Second');

exports = Second;

//# sourceMappingURL=DateTimeFormatOptions$Second.js.map
