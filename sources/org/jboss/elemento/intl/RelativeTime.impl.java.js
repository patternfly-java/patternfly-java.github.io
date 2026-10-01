goog.module('org.jboss.elemento.intl.RelativeTime$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_u_Date = goog.forwardDeclare('java.util.Date$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Overlay = goog.forwardDeclare('org.jboss.elemento.intl.RelativeTimeFormat.$Overlay$impl');
let Unit = goog.forwardDeclare('org.jboss.elemento.intl.Unit$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

class RelativeTime extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Intl.RelativeTimeFormat} @nodts*/
  this.f_rtf__org_jboss_elemento_intl_RelativeTime_;
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__org_jboss_elemento_intl_RelativeTime() {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__org_jboss_elemento_intl_RelativeTimeFormat());
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__java_lang_String__org_jboss_elemento_intl_RelativeTime(/** ?string */ locale) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__java_lang_String__org_jboss_elemento_intl_RelativeTimeFormat(locale));
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTime(/** Intl.Locale */ locale) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormat(locale));
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__arrayOf_java_lang_String__org_jboss_elemento_intl_RelativeTime(/** Array<?string> */ locales) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_RelativeTimeFormat(locales));
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTime(/** Array<Intl.Locale> */ locales) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormat(locales));
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTime(/** RelativeTimeFormatOptions */ options) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(options));
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__java_lang_String__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTime(/** ?string */ locale, /** RelativeTimeFormatOptions */ options) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__java_lang_String__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(locale, options));
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTime(/** Intl.Locale */ locale, /** RelativeTimeFormatOptions */ options) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(locale, options));
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__arrayOf_java_lang_String__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTime(/** Array<?string> */ locales, /** RelativeTimeFormatOptions */ options) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(locales, options));
 }
 /** @nodts @return {RelativeTime} */
 static m_relativeTime__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTime(/** Array<Intl.Locale> */ locales, /** RelativeTimeFormatOptions */ options) {
  RelativeTime.$clinit();
  return RelativeTime.$create__org_jboss_elemento_intl_RelativeTimeFormat($Overlay.m_relativeTimeFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(locales, options));
 }
 /** @nodts @return {!RelativeTime} */
 static $create__org_jboss_elemento_intl_RelativeTimeFormat(/** Intl.RelativeTimeFormat */ rtf) {
  RelativeTime.$clinit();
  let $instance = new RelativeTime();
  $instance.$ctor__org_jboss_elemento_intl_RelativeTime__org_jboss_elemento_intl_RelativeTimeFormat__void(rtf);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_RelativeTime__org_jboss_elemento_intl_RelativeTimeFormat__void(/** Intl.RelativeTimeFormat */ rtf) {
  this.$ctor__java_lang_Object__void();
  this.f_rtf__org_jboss_elemento_intl_RelativeTime_ = $Overlay.m_relativeTimeFormat__org_jboss_elemento_intl_RelativeTimeFormat();
 }
 /** @final @nodts @return {?string} */
 m_from__elemental2_core_JsDate__java_lang_String(/** Date */ date) {
  return this.m_from__double__double__java_lang_String(date.valueOf(), Date.now());
 }
 /** @final @nodts @return {?string} */
 m_from__elemental2_core_JsDate__elemental2_core_JsDate__java_lang_String(/** Date */ from, /** Date */ to) {
  return this.m_from__double__double__java_lang_String(from.valueOf(), to.valueOf());
 }
 /** @final @nodts @return {?string} */
 m_from__java_util_Date__java_lang_String(/** j_u_Date */ date) {
  return this.m_from__double__double__java_lang_String(Primitives.m_widenLongToDouble__long__double(date.m_getTime__long()), Date.now());
 }
 /** @final @nodts @return {?string} */
 m_from__java_util_Date__java_util_Date__java_lang_String(/** j_u_Date */ from, /** j_u_Date */ to) {
  return this.m_from__double__double__java_lang_String(Primitives.m_widenLongToDouble__long__double(from.m_getTime__long()), Primitives.m_widenLongToDouble__long__double(to.m_getTime__long()));
 }
 /** @final @nodts @return {?string} */
 m_from__double__java_lang_String(/** number */ date) {
  return this.m_from__double__double__java_lang_String(date, Date.now());
 }
 /** @final @nodts @return {?string} */
 m_from__double__double__java_lang_String(/** number */ from, /** number */ to) {
  let elapsed = Primitives.m_narrowDoubleToLong__int__long(from - to);
  for (let $iterator = RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime.entrySet().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<Unit, $Long>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
   {
    let unit = /**@type {Unit}*/ ($Casts.$to(entry.getKey(), Unit));
    let value = Long.m_longValue__java_lang_Long__long(/**@type {$Long}*/ ($Casts.$to(entry.getValue(), Long)));
    if ($LongUtils.greater(j_l_Math.m_abs__long__long(elapsed), value)) {
     return $Overlay.m_format__$devirt__org_jboss_elemento_intl_RelativeTimeFormat__long__org_jboss_elemento_intl_Unit__java_lang_String(this.f_rtf__org_jboss_elemento_intl_RelativeTime_, $LongUtils.divide(elapsed, value), unit);
    }
   }
  }
  return $Overlay.m_format__$devirt__org_jboss_elemento_intl_RelativeTimeFormat__long__org_jboss_elemento_intl_Unit__java_lang_String(this.f_rtf__org_jboss_elemento_intl_RelativeTime_, $LongUtils.divide(elapsed, $Long.fromInt(1000)), Unit.f_second__org_jboss_elemento_intl_Unit);
 }
 /** @nodts @return {Map<Unit, $Long>} */
 static get f_UNITS__org_jboss_elemento_intl_RelativeTime() {
  return (RelativeTime.$clinit(), RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime);
 }
 /** @nodts */
 static $clinit() {
  RelativeTime.$clinit = () =>{};
  RelativeTime.$loadModules();
  j_l_Object.$clinit();
  RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime = (/**@type {!HashMap<Unit, $Long>}*/ (HashMap.$create__()));
  RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime.put(Unit.f_year__org_jboss_elemento_intl_Unit, $LongUtils.times(Primitives.m_widenIntToLong__int__long(Math.imul(Math.imul(Math.imul(24, 60), 60), 1000)), $Long.fromInt(365)));
  RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime.put(Unit.f_quarter__org_jboss_elemento_intl_Unit, $LongUtils.divide($LongUtils.times(Primitives.m_widenIntToLong__int__long(Math.imul(Math.imul(Math.imul(24, 60), 60), 1000)), $Long.fromInt(365)), $Long.fromInt(4)));
  RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime.put(Unit.f_month__org_jboss_elemento_intl_Unit, $LongUtils.divide($LongUtils.times(Primitives.m_widenIntToLong__int__long(Math.imul(Math.imul(Math.imul(24, 60), 60), 1000)), $Long.fromInt(365)), $Long.fromInt(12)));
  RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime.put(Unit.f_day__org_jboss_elemento_intl_Unit, $LongUtils.times(Primitives.m_widenIntToLong__int__long(Math.imul(Math.imul(24, 60), 60)), $Long.fromInt(1000)));
  RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime.put(Unit.f_hour__org_jboss_elemento_intl_Unit, $LongUtils.times(Primitives.m_widenIntToLong__int__long(Math.imul(60, 60)), $Long.fromInt(1000)));
  RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime.put(Unit.f_minute__org_jboss_elemento_intl_Unit, $LongUtils.times($Long.fromInt(60), $Long.fromInt(1000)));
  RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime.put(Unit.f_second__org_jboss_elemento_intl_Unit, $Long.fromInt(1000));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RelativeTime;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Overlay = goog.module.get('org.jboss.elemento.intl.RelativeTimeFormat.$Overlay$impl');
  Unit = goog.module.get('org.jboss.elemento.intl.Unit$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
/**@private {Map<Unit, $Long>} @nodts*/
RelativeTime.$static_UNITS__org_jboss_elemento_intl_RelativeTime;
$Util.$setClassMetadata(RelativeTime, 'org.jboss.elemento.intl.RelativeTime');

exports = RelativeTime;

//# sourceMappingURL=RelativeTime.js.map
