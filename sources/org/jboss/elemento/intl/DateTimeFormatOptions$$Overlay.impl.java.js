goog.module('org.jboss.elemento.intl.DateTimeFormatOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Calendar = goog.forwardDeclare('org.jboss.elemento.intl.Calendar$impl');
let Format = goog.forwardDeclare('org.jboss.elemento.intl.Format$impl');
let HourCycle = goog.forwardDeclare('org.jboss.elemento.intl.HourCycle$impl');
let Matcher = goog.forwardDeclare('org.jboss.elemento.intl.Matcher$impl');
let TimeZoneName = goog.forwardDeclare('org.jboss.elemento.intl.TimeZoneName$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {DateTimeFormatOptions} */
 static m_dateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormatOptions() {
  $Overlay.$clinit();
  return /**@type {DateTimeFormatOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_calendar__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Calendar__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Calendar */ calendar) {
  $Overlay.$clinit();
  $thisArg.calendar = calendar.f_value__org_jboss_elemento_intl_Calendar;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_dateStyle__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ dateStyle) {
  $Overlay.$clinit();
  $thisArg.dateStyle = dateStyle.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_day__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ day) {
  $Overlay.$clinit();
  $thisArg.day = day.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_dayPeriod__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ dayPeriod) {
  $Overlay.$clinit();
  $thisArg.dayPeriod = dayPeriod.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_era__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ era) {
  $Overlay.$clinit();
  $thisArg.era = era.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_formatMatcher__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Matcher__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Matcher */ formatMatcher) {
  $Overlay.$clinit();
  $thisArg.formatMatcher = formatMatcher.f_value__org_jboss_elemento_intl_Matcher;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_fractionalSecondDigits__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__int__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** number */ fractionalSecondDigits) {
  $Overlay.$clinit();
  $thisArg.fractionalSecondDigits = fractionalSecondDigits;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_hour__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ hour) {
  $Overlay.$clinit();
  $thisArg.hour = hour.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_hour12__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__boolean__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** boolean */ hour12) {
  $Overlay.$clinit();
  $thisArg.hour12 = hour12;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_hourCycle__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_HourCycle__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** HourCycle */ hourCycle) {
  $Overlay.$clinit();
  $thisArg.hourCycle = hourCycle.f_value__org_jboss_elemento_intl_HourCycle;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_localeMatcher__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Matcher__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Matcher */ localeMatcher) {
  $Overlay.$clinit();
  $thisArg.localeMatcher = localeMatcher.f_value__org_jboss_elemento_intl_Matcher;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_minute__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ minute) {
  $Overlay.$clinit();
  $thisArg.minute = minute.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_month__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ month) {
  $Overlay.$clinit();
  $thisArg.month = month.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_numberingSystem__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__java_lang_String__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** ?string */ numberingSystem) {
  $Overlay.$clinit();
  $thisArg.numberingSystem = numberingSystem;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_second__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ second) {
  $Overlay.$clinit();
  $thisArg.second = second.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_timeStyle__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ dateStyle) {
  $Overlay.$clinit();
  $thisArg.timeStyle = dateStyle.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_timeZone__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__java_lang_String__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** ?string */ timeZone) {
  $Overlay.$clinit();
  $thisArg.timeZone = timeZone;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_timeZoneName__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_TimeZoneName__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** TimeZoneName */ timeZoneName) {
  $Overlay.$clinit();
  $thisArg.timeZoneName = timeZoneName.f_value__org_jboss_elemento_intl_TimeZoneName;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_weekday__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ weekday) {
  $Overlay.$clinit();
  $thisArg.weekday = weekday.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {DateTimeFormatOptions} */
 static m_year__$devirt__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_DateTimeFormatOptions(/** !DateTimeFormatOptions */ $thisArg, /** Format */ year) {
  $Overlay.$clinit();
  $thisArg.year = year.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DateTimeFormatOptions$$Overlay.js.map
