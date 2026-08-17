goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.Era$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Era>}
 */
class Era extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Era;
 }
 /** @nodts @return {!Era} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Era();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Era__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_Era__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Era = value;
 }
 /** @nodts @return {!Era} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_Era(/** string */ name) {
  Era.$clinit();
  if ($Equality.$same(Era.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Era_, null)) {
   Era.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Era_ = (/**@type {Map<?string, !Era>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Era.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Era())));
  }
  return /**@type {Era}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Era.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Era_));
 }
 /** @nodts @return {!Array<!Era>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_Era() {
  Era.$clinit();
  return /**@type {!Array<!Era>}*/ ($Arrays.$stampType([Era.f_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Era, Era.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Era, Era.f__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Era], Era));
 }
 /** @nodts */
 static $clinit() {
  Era.$clinit = () =>{};
  Era.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Era;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Era.$ordinal_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Era = 0;
/**@const {number} @nodts*/
Era.$ordinal__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Era = 1;
/**@const {number} @nodts*/
Era.$ordinal__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Era = 2;
/**@const {!Era} @nodts*/
Era.f_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Era = /**@pureOrBreakMyCode*/ Era.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('narrow'), Era.$ordinal_narrow__org_patternfly_component_timestamp_DateTimeFormatOptions_Era, 'narrow');
/**@const {!Era} @nodts*/
Era.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Era = /**@pureOrBreakMyCode*/ Era.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_short'), Era.$ordinal__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Era, 'short');
/**@const {!Era} @nodts*/
Era.f__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Era = /**@pureOrBreakMyCode*/ Era.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_long'), Era.$ordinal__long__org_patternfly_component_timestamp_DateTimeFormatOptions_Era, 'long');
/**@type {Map<?string, !Era>} @nodts*/
Era.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_Era_;
$Util.$setClassMetadataForEnum(Era, 'org.patternfly.component.timestamp.DateTimeFormatOptions$Era');

exports = Era;

//# sourceMappingURL=DateTimeFormatOptions$Era.js.map
