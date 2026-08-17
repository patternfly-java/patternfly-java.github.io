goog.module('org.patternfly.component.timestamp.CustomFormat.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Day = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Day$impl');
let DayPeriod = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.DayPeriod$impl');
let Era = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Era$impl');
let FractionalSecondDigits = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.FractionalSecondDigits$impl');
let Hour = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Hour$impl');
let Minute = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Minute$impl');
let Month = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Month$impl');
let Second = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Second$impl');
let TimeZoneName = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.TimeZoneName$impl');
let Weekday = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Weekday$impl');
let Year = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Year$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Object} */
 static m_create__org_patternfly_component_timestamp_CustomFormat() {
  $Overlay.$clinit();
  return new Object();
 }
 /** @final @nodts @return {Object} */
 static m_year__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Year__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** Year */ year) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.year, year.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Year)) {
   $thisArg.year = year.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Year;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_month__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Month__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** Month */ month) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.month, month.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Month)) {
   $thisArg.month = month.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Month;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_day__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Day__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** Day */ day) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.day, day.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Day)) {
   $thisArg.day = day.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Day;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_weekday__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** Weekday */ weekday) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.weekday, weekday.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday)) {
   $thisArg.weekday = weekday.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_hour__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** Hour */ hour) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.hour, hour.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour)) {
   $thisArg.hour = hour.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_minute__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** Minute */ minute) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.minute, minute.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute)) {
   $thisArg.minute = minute.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Minute;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_second__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Second__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** Second */ second) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.second, second.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Second)) {
   $thisArg.second = second.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Second;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_timeZone__$devirt__org_patternfly_component_timestamp_CustomFormat__java_lang_String__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** ?string */ timeZone) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.timeZone, timeZone)) {
   $thisArg.timeZone = timeZone;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_timeZoneName__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_TimeZoneName__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** TimeZoneName */ timeZoneName) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.timeZoneName, timeZoneName.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_TimeZoneName)) {
   $thisArg.timeZoneName = timeZoneName.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_TimeZoneName;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_hour12__$devirt__org_patternfly_component_timestamp_CustomFormat__boolean__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** boolean */ hour12) {
  $Overlay.$clinit();
  if (Boolean.m_booleanValue__java_lang_Boolean__boolean($thisArg.hour12) != hour12) {
   $thisArg.hour12 = hour12;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_era__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Era__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** Era */ era) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.era, era.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Era)) {
   $thisArg.era = era.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_Era;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_dayPeriod__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** DayPeriod */ dayPeriod) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.dayPeriod, dayPeriod.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod)) {
   $thisArg.dayPeriod = dayPeriod.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_DayPeriod;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_fractionalSecondDigits__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits__org_patternfly_component_timestamp_CustomFormat(/** !Object */ $thisArg, /** FractionalSecondDigits */ digits) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.fractionalSecondDigits, digits.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits)) {
   $thisArg.fractionalSecondDigits = digits.f_value__org_patternfly_component_timestamp_DateTimeFormatOptions_FractionalSecondDigits;
  }
  return $thisArg;
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Objects = goog.module.get('java.util.Objects$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=CustomFormat$$Overlay.js.map
