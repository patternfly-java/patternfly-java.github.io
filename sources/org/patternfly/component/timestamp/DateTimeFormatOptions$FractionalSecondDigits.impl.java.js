goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions.FractionalSecondDigits$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<FractionalSecondDigits>}
 */
class FractionalSecondDigits extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits;
 }
 /** @nodts @return {!FractionalSecondDigits} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new FractionalSecondDigits();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits = value;
 }
 /** @nodts @return {!FractionalSecondDigits} */
 static m_valueOf__java_lang_String__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits(/** string */ name) {
  FractionalSecondDigits.$clinit();
  if ($Equality.$same(FractionalSecondDigits.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits_, null)) {
   FractionalSecondDigits.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits_ = (/**@type {Map<?string, !FractionalSecondDigits>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(FractionalSecondDigits.m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits())));
  }
  return /**@type {FractionalSecondDigits}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, FractionalSecondDigits.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits_));
 }
 /** @nodts @return {!Array<!FractionalSecondDigits>} */
 static m_values__arrayOf_org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits() {
  FractionalSecondDigits.$clinit();
  return /**@type {!Array<!FractionalSecondDigits>}*/ ($Arrays.$stampType([FractionalSecondDigits.f__1__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits, FractionalSecondDigits.f__2__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits, FractionalSecondDigits.f__3__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits], FractionalSecondDigits));
 }
 /** @nodts */
 static $clinit() {
  FractionalSecondDigits.$clinit = () =>{};
  FractionalSecondDigits.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FractionalSecondDigits;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
FractionalSecondDigits.$ordinal__1__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits = 0;
/**@const {number} @nodts*/
FractionalSecondDigits.$ordinal__2__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits = 1;
/**@const {number} @nodts*/
FractionalSecondDigits.$ordinal__3__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits = 2;
/**@const {!FractionalSecondDigits} @nodts*/
FractionalSecondDigits.f__1__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits = /**@pureOrBreakMyCode*/ FractionalSecondDigits.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_1'), FractionalSecondDigits.$ordinal__1__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits, '1');
/**@const {!FractionalSecondDigits} @nodts*/
FractionalSecondDigits.f__2__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits = /**@pureOrBreakMyCode*/ FractionalSecondDigits.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2'), FractionalSecondDigits.$ordinal__2__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits, '2');
/**@const {!FractionalSecondDigits} @nodts*/
FractionalSecondDigits.f__3__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits = /**@pureOrBreakMyCode*/ FractionalSecondDigits.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_3'), FractionalSecondDigits.$ordinal__3__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits, '3');
/**@type {Map<?string, !FractionalSecondDigits>} @nodts*/
FractionalSecondDigits.f_namesToValuesMap__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits_;
$Util.$setClassMetadataForEnum(FractionalSecondDigits, 'org.patternfly.component.timestamp.DateTimeFormatOptions$FractionalSecondDigits');

exports = FractionalSecondDigits;

//# sourceMappingURL=DateTimeFormatOptions$FractionalSecondDigits.js.map
