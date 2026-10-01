goog.module('org.jboss.elemento.intl.LocaleOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Calendar = goog.forwardDeclare('org.jboss.elemento.intl.Calendar$impl');
let CaseFirst = goog.forwardDeclare('org.jboss.elemento.intl.CaseFirst$impl');
let Collation = goog.forwardDeclare('org.jboss.elemento.intl.Collation$impl');
let HourCycle = goog.forwardDeclare('org.jboss.elemento.intl.HourCycle$impl');
let NumberingSystem = goog.forwardDeclare('org.jboss.elemento.intl.NumberingSystem$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {LocaleOptions} */
 static m_localeOptions__org_jboss_elemento_intl_LocaleOptions() {
  $Overlay.$clinit();
  return /**@type {LocaleOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts @return {LocaleOptions} */
 static m_language__$devirt__org_jboss_elemento_intl_LocaleOptions__java_lang_String__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** ?string */ language) {
  $Overlay.$clinit();
  $thisArg.language = language;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_script__$devirt__org_jboss_elemento_intl_LocaleOptions__java_lang_String__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** ?string */ script) {
  $Overlay.$clinit();
  $thisArg.script = script;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_region__$devirt__org_jboss_elemento_intl_LocaleOptions__java_lang_String__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** ?string */ region) {
  $Overlay.$clinit();
  $thisArg.region = region;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_variants__$devirt__org_jboss_elemento_intl_LocaleOptions__java_lang_String__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** ?string */ variants) {
  $Overlay.$clinit();
  $thisArg.variants = variants;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_calendar__$devirt__org_jboss_elemento_intl_LocaleOptions__org_jboss_elemento_intl_Calendar__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** Calendar */ calendar) {
  $Overlay.$clinit();
  $thisArg.calendar = calendar.f_value__org_jboss_elemento_intl_Calendar;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_collation__$devirt__org_jboss_elemento_intl_LocaleOptions__org_jboss_elemento_intl_Collation__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** Collation */ collation) {
  $Overlay.$clinit();
  $thisArg.collation = collation.f_value__org_jboss_elemento_intl_Collation;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_numberingSystem__$devirt__org_jboss_elemento_intl_LocaleOptions__org_jboss_elemento_intl_NumberingSystem__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** NumberingSystem */ numberingSystem) {
  $Overlay.$clinit();
  $thisArg.numberingSystem = numberingSystem.f_value__org_jboss_elemento_intl_NumberingSystem;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_caseFirst__$devirt__org_jboss_elemento_intl_LocaleOptions__org_jboss_elemento_intl_CaseFirst__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** CaseFirst */ caseFirst) {
  $Overlay.$clinit();
  $thisArg.caseFirst = caseFirst.f_value__org_jboss_elemento_intl_CaseFirst;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_hourCycle__$devirt__org_jboss_elemento_intl_LocaleOptions__org_jboss_elemento_intl_HourCycle__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** HourCycle */ hourCycle) {
  $Overlay.$clinit();
  $thisArg.hourCycle = hourCycle.f_value__org_jboss_elemento_intl_HourCycle;
  return $thisArg;
 }
 /** @nodts @return {LocaleOptions} */
 static m_numeric__$devirt__org_jboss_elemento_intl_LocaleOptions__boolean__org_jboss_elemento_intl_LocaleOptions(/** !LocaleOptions */ $thisArg, /** boolean */ numeric) {
  $Overlay.$clinit();
  $thisArg.numeric = numeric;
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

//# sourceMappingURL=LocaleOptions$$Overlay.js.map
