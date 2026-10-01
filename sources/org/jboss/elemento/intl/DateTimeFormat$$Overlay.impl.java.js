goog.module('org.jboss.elemento.intl.DateTimeFormat.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DateTimeFormatOptions_$Overlay = goog.forwardDeclare('org.jboss.elemento.intl.DateTimeFormatOptions.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__org_jboss_elemento_intl_DateTimeFormat() {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(undefined, DateTimeFormatOptions_$Overlay.m_dateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormatOptions());
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__java_lang_String__org_jboss_elemento_intl_DateTimeFormat(/** ?string */ locale) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(locale, DateTimeFormatOptions_$Overlay.m_dateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormatOptions());
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_DateTimeFormat(/** Intl.Locale */ locale) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(locale, DateTimeFormatOptions_$Overlay.m_dateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormatOptions());
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_DateTimeFormat(/** Array<?string> */ locales) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), DateTimeFormatOptions_$Overlay.m_dateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormatOptions());
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_DateTimeFormat(/** Array<Intl.Locale> */ locales) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), DateTimeFormatOptions_$Overlay.m_dateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormatOptions());
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormat(/** DateTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(undefined, options);
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__java_lang_String__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormat(/** ?string */ locale, /** DateTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(locale, options);
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormat(/** Intl.Locale */ locale, /** DateTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(locale, options);
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormat(/** Array<?string> */ locales, /** DateTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), options);
 }
 /** @nodts @return {Intl.DateTimeFormat} */
 static m_dateTimeFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_DateTimeFormatOptions__org_jboss_elemento_intl_DateTimeFormat(/** Array<Intl.Locale> */ locales, /** DateTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DateTimeFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), options);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Intl.DateTimeFormat;
 }
 
 /** @nodts */
 static $loadModules() {
  DateTimeFormatOptions_$Overlay = goog.module.get('org.jboss.elemento.intl.DateTimeFormatOptions.$Overlay$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Intl.DateTimeFormat');

exports = $Overlay;

//# sourceMappingURL=DateTimeFormat$$Overlay.js.map
