goog.module('org.jboss.elemento.intl.Calendar$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Calendar>}
 */
class Calendar extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Calendar;
 }
 /** @nodts @return {!Calendar} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Calendar();
  $instance.$ctor__org_jboss_elemento_intl_Calendar__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Calendar__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Calendar = value;
 }
 /** @nodts @return {!Calendar} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Calendar(/** string */ name) {
  Calendar.$clinit();
  if ($Equality.$same(Calendar.f_namesToValuesMap__org_jboss_elemento_intl_Calendar_, null)) {
   Calendar.f_namesToValuesMap__org_jboss_elemento_intl_Calendar_ = (/**@type {Map<?string, !Calendar>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Calendar.m_values__arrayOf_org_jboss_elemento_intl_Calendar())));
  }
  return /**@type {Calendar}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Calendar.f_namesToValuesMap__org_jboss_elemento_intl_Calendar_));
 }
 /** @nodts @return {!Array<!Calendar>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Calendar() {
  Calendar.$clinit();
  return /**@type {!Array<!Calendar>}*/ ($Arrays.$stampType([Calendar.f_buddhist__org_jboss_elemento_intl_Calendar, Calendar.f_chinese__org_jboss_elemento_intl_Calendar, Calendar.f_coptic__org_jboss_elemento_intl_Calendar, Calendar.f_dangi__org_jboss_elemento_intl_Calendar, Calendar.f_ethioaa__org_jboss_elemento_intl_Calendar, Calendar.f_ethiopic__org_jboss_elemento_intl_Calendar, Calendar.f_gregory__org_jboss_elemento_intl_Calendar, Calendar.f_hebrew__org_jboss_elemento_intl_Calendar, Calendar.f_indian__org_jboss_elemento_intl_Calendar, Calendar.f_islamic__org_jboss_elemento_intl_Calendar, Calendar.f_islamicCivil__org_jboss_elemento_intl_Calendar, Calendar.f_islamicRgsa__org_jboss_elemento_intl_Calendar, Calendar.f_islamicTbla__org_jboss_elemento_intl_Calendar, Calendar.f_islamicUmalqura__org_jboss_elemento_intl_Calendar, Calendar.f_iso8601__org_jboss_elemento_intl_Calendar, Calendar.f_japanese__org_jboss_elemento_intl_Calendar, Calendar.f_persian__org_jboss_elemento_intl_Calendar, Calendar.f_roc__org_jboss_elemento_intl_Calendar], Calendar));
 }
 /** @nodts */
 static $clinit() {
  Calendar.$clinit = () =>{};
  Calendar.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Calendar;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Calendar.$ordinal_buddhist__org_jboss_elemento_intl_Calendar = 0;
/**@const {number} @nodts*/
Calendar.$ordinal_chinese__org_jboss_elemento_intl_Calendar = 1;
/**@const {number} @nodts*/
Calendar.$ordinal_coptic__org_jboss_elemento_intl_Calendar = 2;
/**@const {number} @nodts*/
Calendar.$ordinal_dangi__org_jboss_elemento_intl_Calendar = 3;
/**@const {number} @nodts*/
Calendar.$ordinal_ethioaa__org_jboss_elemento_intl_Calendar = 4;
/**@const {number} @nodts*/
Calendar.$ordinal_ethiopic__org_jboss_elemento_intl_Calendar = 5;
/**@const {number} @nodts*/
Calendar.$ordinal_gregory__org_jboss_elemento_intl_Calendar = 6;
/**@const {number} @nodts*/
Calendar.$ordinal_hebrew__org_jboss_elemento_intl_Calendar = 7;
/**@const {number} @nodts*/
Calendar.$ordinal_indian__org_jboss_elemento_intl_Calendar = 8;
/**@const {number} @nodts*/
Calendar.$ordinal_islamic__org_jboss_elemento_intl_Calendar = 9;
/**@const {number} @nodts*/
Calendar.$ordinal_islamicCivil__org_jboss_elemento_intl_Calendar = 10;
/**@const {number} @nodts*/
Calendar.$ordinal_islamicRgsa__org_jboss_elemento_intl_Calendar = 11;
/**@const {number} @nodts*/
Calendar.$ordinal_islamicTbla__org_jboss_elemento_intl_Calendar = 12;
/**@const {number} @nodts*/
Calendar.$ordinal_islamicUmalqura__org_jboss_elemento_intl_Calendar = 13;
/**@const {number} @nodts*/
Calendar.$ordinal_iso8601__org_jboss_elemento_intl_Calendar = 14;
/**@const {number} @nodts*/
Calendar.$ordinal_japanese__org_jboss_elemento_intl_Calendar = 15;
/**@const {number} @nodts*/
Calendar.$ordinal_persian__org_jboss_elemento_intl_Calendar = 16;
/**@const {number} @nodts*/
Calendar.$ordinal_roc__org_jboss_elemento_intl_Calendar = 17;
/**@const {!Calendar} @nodts*/
Calendar.f_buddhist__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('buddhist'), Calendar.$ordinal_buddhist__org_jboss_elemento_intl_Calendar, 'buddhist');
/**@const {!Calendar} @nodts*/
Calendar.f_chinese__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('chinese'), Calendar.$ordinal_chinese__org_jboss_elemento_intl_Calendar, 'chinese');
/**@const {!Calendar} @nodts*/
Calendar.f_coptic__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('coptic'), Calendar.$ordinal_coptic__org_jboss_elemento_intl_Calendar, 'coptic');
/**@const {!Calendar} @nodts*/
Calendar.f_dangi__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('dangi'), Calendar.$ordinal_dangi__org_jboss_elemento_intl_Calendar, 'dangi');
/**@const {!Calendar} @nodts*/
Calendar.f_ethioaa__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ethioaa'), Calendar.$ordinal_ethioaa__org_jboss_elemento_intl_Calendar, 'ethioaa');
/**@const {!Calendar} @nodts*/
Calendar.f_ethiopic__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ethiopic'), Calendar.$ordinal_ethiopic__org_jboss_elemento_intl_Calendar, 'ethiopic');
/**@const {!Calendar} @nodts*/
Calendar.f_gregory__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gregory'), Calendar.$ordinal_gregory__org_jboss_elemento_intl_Calendar, 'gregory');
/**@const {!Calendar} @nodts*/
Calendar.f_hebrew__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('hebrew'), Calendar.$ordinal_hebrew__org_jboss_elemento_intl_Calendar, 'hebrew');
/**@const {!Calendar} @nodts*/
Calendar.f_indian__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('indian'), Calendar.$ordinal_indian__org_jboss_elemento_intl_Calendar, 'indian');
/**@const {!Calendar} @nodts*/
Calendar.f_islamic__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('islamic'), Calendar.$ordinal_islamic__org_jboss_elemento_intl_Calendar, 'islamic');
/**@const {!Calendar} @nodts*/
Calendar.f_islamicCivil__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('islamicCivil'), Calendar.$ordinal_islamicCivil__org_jboss_elemento_intl_Calendar, 'islamic-civil');
/**@const {!Calendar} @nodts*/
Calendar.f_islamicRgsa__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('islamicRgsa'), Calendar.$ordinal_islamicRgsa__org_jboss_elemento_intl_Calendar, 'islamic-rgsa');
/**@const {!Calendar} @nodts*/
Calendar.f_islamicTbla__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('islamicTbla'), Calendar.$ordinal_islamicTbla__org_jboss_elemento_intl_Calendar, 'islamic-tbla');
/**@const {!Calendar} @nodts*/
Calendar.f_islamicUmalqura__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('islamicUmalqura'), Calendar.$ordinal_islamicUmalqura__org_jboss_elemento_intl_Calendar, 'islamic-umalqura');
/**@const {!Calendar} @nodts*/
Calendar.f_iso8601__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('iso8601'), Calendar.$ordinal_iso8601__org_jboss_elemento_intl_Calendar, 'iso8601');
/**@const {!Calendar} @nodts*/
Calendar.f_japanese__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('japanese'), Calendar.$ordinal_japanese__org_jboss_elemento_intl_Calendar, 'japanese');
/**@const {!Calendar} @nodts*/
Calendar.f_persian__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('persian'), Calendar.$ordinal_persian__org_jboss_elemento_intl_Calendar, 'persian');
/**@const {!Calendar} @nodts*/
Calendar.f_roc__org_jboss_elemento_intl_Calendar = /**@pureOrBreakMyCode*/ Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('roc'), Calendar.$ordinal_roc__org_jboss_elemento_intl_Calendar, 'roc');
/**@type {Map<?string, !Calendar>} @nodts*/
Calendar.f_namesToValuesMap__org_jboss_elemento_intl_Calendar_;
$Util.$setClassMetadataForEnum(Calendar, 'org.jboss.elemento.intl.Calendar');

exports = Calendar;

//# sourceMappingURL=Calendar.js.map
