goog.module('org.jboss.elemento.intl.Unit$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Unit>}
 */
class Unit extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Unit;
 }
 /** @nodts @return {!Unit} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Unit();
  $instance.$ctor__org_jboss_elemento_intl_Unit__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Unit__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Unit = value;
 }
 /** @nodts @return {!Unit} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Unit(/** string */ name) {
  Unit.$clinit();
  if ($Equality.$same(Unit.f_namesToValuesMap__org_jboss_elemento_intl_Unit_, null)) {
   Unit.f_namesToValuesMap__org_jboss_elemento_intl_Unit_ = (/**@type {Map<?string, !Unit>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Unit.m_values__arrayOf_org_jboss_elemento_intl_Unit())));
  }
  return /**@type {Unit}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Unit.f_namesToValuesMap__org_jboss_elemento_intl_Unit_));
 }
 /** @nodts @return {!Array<!Unit>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Unit() {
  Unit.$clinit();
  return /**@type {!Array<!Unit>}*/ ($Arrays.$stampType([Unit.f_acre__org_jboss_elemento_intl_Unit, Unit.f_bit__org_jboss_elemento_intl_Unit, Unit.f_byte___org_jboss_elemento_intl_Unit, Unit.f_celsius__org_jboss_elemento_intl_Unit, Unit.f_centimeter__org_jboss_elemento_intl_Unit, Unit.f_day__org_jboss_elemento_intl_Unit, Unit.f_degree__org_jboss_elemento_intl_Unit, Unit.f_fahrenheit__org_jboss_elemento_intl_Unit, Unit.f_fluid__org_jboss_elemento_intl_Unit, Unit.f_foot__org_jboss_elemento_intl_Unit, Unit.f_gallon__org_jboss_elemento_intl_Unit, Unit.f_gigabit__org_jboss_elemento_intl_Unit, Unit.f_gigabyte__org_jboss_elemento_intl_Unit, Unit.f_gram__org_jboss_elemento_intl_Unit, Unit.f_hectare__org_jboss_elemento_intl_Unit, Unit.f_hour__org_jboss_elemento_intl_Unit, Unit.f_inch__org_jboss_elemento_intl_Unit, Unit.f_kilobit__org_jboss_elemento_intl_Unit, Unit.f_kilobyte__org_jboss_elemento_intl_Unit, Unit.f_kilogram__org_jboss_elemento_intl_Unit, Unit.f_kilometer__org_jboss_elemento_intl_Unit, Unit.f_liter__org_jboss_elemento_intl_Unit, Unit.f_megabit__org_jboss_elemento_intl_Unit, Unit.f_megabyte__org_jboss_elemento_intl_Unit, Unit.f_meter__org_jboss_elemento_intl_Unit, Unit.f_microsecond__org_jboss_elemento_intl_Unit, Unit.f_mile__org_jboss_elemento_intl_Unit, Unit.f_mileScandinavian__org_jboss_elemento_intl_Unit, Unit.f_milliliter__org_jboss_elemento_intl_Unit, Unit.f_millimeter__org_jboss_elemento_intl_Unit, Unit.f_millisecond__org_jboss_elemento_intl_Unit, Unit.f_minute__org_jboss_elemento_intl_Unit, Unit.f_month__org_jboss_elemento_intl_Unit, Unit.f_nanosecond__org_jboss_elemento_intl_Unit, Unit.f_ounce__org_jboss_elemento_intl_Unit, Unit.f_percent__org_jboss_elemento_intl_Unit, Unit.f_petabyte__org_jboss_elemento_intl_Unit, Unit.f_pound__org_jboss_elemento_intl_Unit, Unit.f_quarter__org_jboss_elemento_intl_Unit, Unit.f_second__org_jboss_elemento_intl_Unit, Unit.f_stone__org_jboss_elemento_intl_Unit, Unit.f_terabit__org_jboss_elemento_intl_Unit, Unit.f_terabyte__org_jboss_elemento_intl_Unit, Unit.f_week__org_jboss_elemento_intl_Unit, Unit.f_yard__org_jboss_elemento_intl_Unit, Unit.f_year__org_jboss_elemento_intl_Unit], Unit));
 }
 /** @nodts */
 static $clinit() {
  Unit.$clinit = () =>{};
  Unit.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Unit;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Unit.$ordinal_acre__org_jboss_elemento_intl_Unit = 0;
/**@const {number} @nodts*/
Unit.$ordinal_bit__org_jboss_elemento_intl_Unit = 1;
/**@const {number} @nodts*/
Unit.$ordinal_byte___org_jboss_elemento_intl_Unit = 2;
/**@const {number} @nodts*/
Unit.$ordinal_celsius__org_jboss_elemento_intl_Unit = 3;
/**@const {number} @nodts*/
Unit.$ordinal_centimeter__org_jboss_elemento_intl_Unit = 4;
/**@const {number} @nodts*/
Unit.$ordinal_day__org_jboss_elemento_intl_Unit = 5;
/**@const {number} @nodts*/
Unit.$ordinal_degree__org_jboss_elemento_intl_Unit = 6;
/**@const {number} @nodts*/
Unit.$ordinal_fahrenheit__org_jboss_elemento_intl_Unit = 7;
/**@const {number} @nodts*/
Unit.$ordinal_fluid__org_jboss_elemento_intl_Unit = 8;
/**@const {number} @nodts*/
Unit.$ordinal_foot__org_jboss_elemento_intl_Unit = 9;
/**@const {number} @nodts*/
Unit.$ordinal_gallon__org_jboss_elemento_intl_Unit = 10;
/**@const {number} @nodts*/
Unit.$ordinal_gigabit__org_jboss_elemento_intl_Unit = 11;
/**@const {number} @nodts*/
Unit.$ordinal_gigabyte__org_jboss_elemento_intl_Unit = 12;
/**@const {number} @nodts*/
Unit.$ordinal_gram__org_jboss_elemento_intl_Unit = 13;
/**@const {number} @nodts*/
Unit.$ordinal_hectare__org_jboss_elemento_intl_Unit = 14;
/**@const {number} @nodts*/
Unit.$ordinal_hour__org_jboss_elemento_intl_Unit = 15;
/**@const {number} @nodts*/
Unit.$ordinal_inch__org_jboss_elemento_intl_Unit = 16;
/**@const {number} @nodts*/
Unit.$ordinal_kilobit__org_jboss_elemento_intl_Unit = 17;
/**@const {number} @nodts*/
Unit.$ordinal_kilobyte__org_jboss_elemento_intl_Unit = 18;
/**@const {number} @nodts*/
Unit.$ordinal_kilogram__org_jboss_elemento_intl_Unit = 19;
/**@const {number} @nodts*/
Unit.$ordinal_kilometer__org_jboss_elemento_intl_Unit = 20;
/**@const {number} @nodts*/
Unit.$ordinal_liter__org_jboss_elemento_intl_Unit = 21;
/**@const {number} @nodts*/
Unit.$ordinal_megabit__org_jboss_elemento_intl_Unit = 22;
/**@const {number} @nodts*/
Unit.$ordinal_megabyte__org_jboss_elemento_intl_Unit = 23;
/**@const {number} @nodts*/
Unit.$ordinal_meter__org_jboss_elemento_intl_Unit = 24;
/**@const {number} @nodts*/
Unit.$ordinal_microsecond__org_jboss_elemento_intl_Unit = 25;
/**@const {number} @nodts*/
Unit.$ordinal_mile__org_jboss_elemento_intl_Unit = 26;
/**@const {number} @nodts*/
Unit.$ordinal_mileScandinavian__org_jboss_elemento_intl_Unit = 27;
/**@const {number} @nodts*/
Unit.$ordinal_milliliter__org_jboss_elemento_intl_Unit = 28;
/**@const {number} @nodts*/
Unit.$ordinal_millimeter__org_jboss_elemento_intl_Unit = 29;
/**@const {number} @nodts*/
Unit.$ordinal_millisecond__org_jboss_elemento_intl_Unit = 30;
/**@const {number} @nodts*/
Unit.$ordinal_minute__org_jboss_elemento_intl_Unit = 31;
/**@const {number} @nodts*/
Unit.$ordinal_month__org_jboss_elemento_intl_Unit = 32;
/**@const {number} @nodts*/
Unit.$ordinal_nanosecond__org_jboss_elemento_intl_Unit = 33;
/**@const {number} @nodts*/
Unit.$ordinal_ounce__org_jboss_elemento_intl_Unit = 34;
/**@const {number} @nodts*/
Unit.$ordinal_percent__org_jboss_elemento_intl_Unit = 35;
/**@const {number} @nodts*/
Unit.$ordinal_petabyte__org_jboss_elemento_intl_Unit = 36;
/**@const {number} @nodts*/
Unit.$ordinal_pound__org_jboss_elemento_intl_Unit = 37;
/**@const {number} @nodts*/
Unit.$ordinal_quarter__org_jboss_elemento_intl_Unit = 38;
/**@const {number} @nodts*/
Unit.$ordinal_second__org_jboss_elemento_intl_Unit = 39;
/**@const {number} @nodts*/
Unit.$ordinal_stone__org_jboss_elemento_intl_Unit = 40;
/**@const {number} @nodts*/
Unit.$ordinal_terabit__org_jboss_elemento_intl_Unit = 41;
/**@const {number} @nodts*/
Unit.$ordinal_terabyte__org_jboss_elemento_intl_Unit = 42;
/**@const {number} @nodts*/
Unit.$ordinal_week__org_jboss_elemento_intl_Unit = 43;
/**@const {number} @nodts*/
Unit.$ordinal_yard__org_jboss_elemento_intl_Unit = 44;
/**@const {number} @nodts*/
Unit.$ordinal_year__org_jboss_elemento_intl_Unit = 45;
/**@const {!Unit} @nodts*/
Unit.f_acre__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('acre'), Unit.$ordinal_acre__org_jboss_elemento_intl_Unit, 'acre');
/**@const {!Unit} @nodts*/
Unit.f_bit__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bit'), Unit.$ordinal_bit__org_jboss_elemento_intl_Unit, 'bit');
/**@const {!Unit} @nodts*/
Unit.f_byte___org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('byte_'), Unit.$ordinal_byte___org_jboss_elemento_intl_Unit, 'byte');
/**@const {!Unit} @nodts*/
Unit.f_celsius__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('celsius'), Unit.$ordinal_celsius__org_jboss_elemento_intl_Unit, 'celsius');
/**@const {!Unit} @nodts*/
Unit.f_centimeter__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('centimeter'), Unit.$ordinal_centimeter__org_jboss_elemento_intl_Unit, 'centimeter');
/**@const {!Unit} @nodts*/
Unit.f_day__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('day'), Unit.$ordinal_day__org_jboss_elemento_intl_Unit, 'day');
/**@const {!Unit} @nodts*/
Unit.f_degree__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('degree'), Unit.$ordinal_degree__org_jboss_elemento_intl_Unit, 'degree');
/**@const {!Unit} @nodts*/
Unit.f_fahrenheit__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('fahrenheit'), Unit.$ordinal_fahrenheit__org_jboss_elemento_intl_Unit, 'fahrenheit');
/**@const {!Unit} @nodts*/
Unit.f_fluid__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('fluid'), Unit.$ordinal_fluid__org_jboss_elemento_intl_Unit, 'fluid-ounce');
/**@const {!Unit} @nodts*/
Unit.f_foot__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('foot'), Unit.$ordinal_foot__org_jboss_elemento_intl_Unit, 'foot');
/**@const {!Unit} @nodts*/
Unit.f_gallon__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gallon'), Unit.$ordinal_gallon__org_jboss_elemento_intl_Unit, 'gallon');
/**@const {!Unit} @nodts*/
Unit.f_gigabit__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gigabit'), Unit.$ordinal_gigabit__org_jboss_elemento_intl_Unit, 'gigabit');
/**@const {!Unit} @nodts*/
Unit.f_gigabyte__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gigabyte'), Unit.$ordinal_gigabyte__org_jboss_elemento_intl_Unit, 'gigabyte');
/**@const {!Unit} @nodts*/
Unit.f_gram__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gram'), Unit.$ordinal_gram__org_jboss_elemento_intl_Unit, 'gram');
/**@const {!Unit} @nodts*/
Unit.f_hectare__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('hectare'), Unit.$ordinal_hectare__org_jboss_elemento_intl_Unit, 'hectare');
/**@const {!Unit} @nodts*/
Unit.f_hour__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('hour'), Unit.$ordinal_hour__org_jboss_elemento_intl_Unit, 'hour');
/**@const {!Unit} @nodts*/
Unit.f_inch__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('inch'), Unit.$ordinal_inch__org_jboss_elemento_intl_Unit, 'inch');
/**@const {!Unit} @nodts*/
Unit.f_kilobit__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('kilobit'), Unit.$ordinal_kilobit__org_jboss_elemento_intl_Unit, 'kilobit');
/**@const {!Unit} @nodts*/
Unit.f_kilobyte__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('kilobyte'), Unit.$ordinal_kilobyte__org_jboss_elemento_intl_Unit, 'kilobyte');
/**@const {!Unit} @nodts*/
Unit.f_kilogram__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('kilogram'), Unit.$ordinal_kilogram__org_jboss_elemento_intl_Unit, 'kilogram');
/**@const {!Unit} @nodts*/
Unit.f_kilometer__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('kilometer'), Unit.$ordinal_kilometer__org_jboss_elemento_intl_Unit, 'kilometer');
/**@const {!Unit} @nodts*/
Unit.f_liter__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('liter'), Unit.$ordinal_liter__org_jboss_elemento_intl_Unit, 'liter');
/**@const {!Unit} @nodts*/
Unit.f_megabit__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('megabit'), Unit.$ordinal_megabit__org_jboss_elemento_intl_Unit, 'megabit');
/**@const {!Unit} @nodts*/
Unit.f_megabyte__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('megabyte'), Unit.$ordinal_megabyte__org_jboss_elemento_intl_Unit, 'megabyte');
/**@const {!Unit} @nodts*/
Unit.f_meter__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('meter'), Unit.$ordinal_meter__org_jboss_elemento_intl_Unit, 'meter');
/**@const {!Unit} @nodts*/
Unit.f_microsecond__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('microsecond'), Unit.$ordinal_microsecond__org_jboss_elemento_intl_Unit, 'microsecond');
/**@const {!Unit} @nodts*/
Unit.f_mile__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mile'), Unit.$ordinal_mile__org_jboss_elemento_intl_Unit, 'mile');
/**@const {!Unit} @nodts*/
Unit.f_mileScandinavian__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mileScandinavian'), Unit.$ordinal_mileScandinavian__org_jboss_elemento_intl_Unit, 'mile-scandinavian');
/**@const {!Unit} @nodts*/
Unit.f_milliliter__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('milliliter'), Unit.$ordinal_milliliter__org_jboss_elemento_intl_Unit, 'milliliter');
/**@const {!Unit} @nodts*/
Unit.f_millimeter__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('millimeter'), Unit.$ordinal_millimeter__org_jboss_elemento_intl_Unit, 'millimeter');
/**@const {!Unit} @nodts*/
Unit.f_millisecond__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('millisecond'), Unit.$ordinal_millisecond__org_jboss_elemento_intl_Unit, 'millisecond');
/**@const {!Unit} @nodts*/
Unit.f_minute__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('minute'), Unit.$ordinal_minute__org_jboss_elemento_intl_Unit, 'minute');
/**@const {!Unit} @nodts*/
Unit.f_month__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('month'), Unit.$ordinal_month__org_jboss_elemento_intl_Unit, 'month');
/**@const {!Unit} @nodts*/
Unit.f_nanosecond__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('nanosecond'), Unit.$ordinal_nanosecond__org_jboss_elemento_intl_Unit, 'nanosecond');
/**@const {!Unit} @nodts*/
Unit.f_ounce__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ounce'), Unit.$ordinal_ounce__org_jboss_elemento_intl_Unit, 'ounce');
/**@const {!Unit} @nodts*/
Unit.f_percent__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('percent'), Unit.$ordinal_percent__org_jboss_elemento_intl_Unit, 'percent');
/**@const {!Unit} @nodts*/
Unit.f_petabyte__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('petabyte'), Unit.$ordinal_petabyte__org_jboss_elemento_intl_Unit, 'petabyte');
/**@const {!Unit} @nodts*/
Unit.f_pound__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('pound'), Unit.$ordinal_pound__org_jboss_elemento_intl_Unit, 'pound');
/**@const {!Unit} @nodts*/
Unit.f_quarter__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('quarter'), Unit.$ordinal_quarter__org_jboss_elemento_intl_Unit, 'quarter');
/**@const {!Unit} @nodts*/
Unit.f_second__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('second'), Unit.$ordinal_second__org_jboss_elemento_intl_Unit, 'second');
/**@const {!Unit} @nodts*/
Unit.f_stone__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('stone'), Unit.$ordinal_stone__org_jboss_elemento_intl_Unit, 'stone');
/**@const {!Unit} @nodts*/
Unit.f_terabit__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('terabit'), Unit.$ordinal_terabit__org_jboss_elemento_intl_Unit, 'terabit');
/**@const {!Unit} @nodts*/
Unit.f_terabyte__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('terabyte'), Unit.$ordinal_terabyte__org_jboss_elemento_intl_Unit, 'terabyte');
/**@const {!Unit} @nodts*/
Unit.f_week__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('week'), Unit.$ordinal_week__org_jboss_elemento_intl_Unit, 'week');
/**@const {!Unit} @nodts*/
Unit.f_yard__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('yard'), Unit.$ordinal_yard__org_jboss_elemento_intl_Unit, 'yard');
/**@const {!Unit} @nodts*/
Unit.f_year__org_jboss_elemento_intl_Unit = /**@pureOrBreakMyCode*/ Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('year'), Unit.$ordinal_year__org_jboss_elemento_intl_Unit, 'year');
/**@type {Map<?string, !Unit>} @nodts*/
Unit.f_namesToValuesMap__org_jboss_elemento_intl_Unit_;
$Util.$setClassMetadataForEnum(Unit, 'org.jboss.elemento.intl.Unit');

exports = Unit;

//# sourceMappingURL=Unit.js.map
