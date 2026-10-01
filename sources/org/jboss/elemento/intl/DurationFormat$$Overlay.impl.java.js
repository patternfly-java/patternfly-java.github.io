goog.module('org.jboss.elemento.intl.DurationFormat.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DurationFormatOptions_$Overlay = goog.forwardDeclare('org.jboss.elemento.intl.DurationFormatOptions.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__org_jboss_elemento_intl_DurationFormat() {
  $Overlay.$clinit();
  return new Intl.DurationFormat(undefined, DurationFormatOptions_$Overlay.m_durationFormatOptions__org_jboss_elemento_intl_DurationFormatOptions());
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__java_lang_String__org_jboss_elemento_intl_DurationFormat(/** ?string */ locale) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(locale, DurationFormatOptions_$Overlay.m_durationFormatOptions__org_jboss_elemento_intl_DurationFormatOptions());
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_DurationFormat(/** Intl.Locale */ locale) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(locale, DurationFormatOptions_$Overlay.m_durationFormatOptions__org_jboss_elemento_intl_DurationFormatOptions());
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_DurationFormat(/** Array<?string> */ locales) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), DurationFormatOptions_$Overlay.m_durationFormatOptions__org_jboss_elemento_intl_DurationFormatOptions());
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_DurationFormat(/** Array<Intl.Locale> */ locales) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), DurationFormatOptions_$Overlay.m_durationFormatOptions__org_jboss_elemento_intl_DurationFormatOptions());
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__org_jboss_elemento_intl_DurationFormatOptions__org_jboss_elemento_intl_DurationFormat(/** DurationFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(undefined, options);
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__java_lang_String__org_jboss_elemento_intl_DurationFormatOptions__org_jboss_elemento_intl_DurationFormat(/** ?string */ locale, /** DurationFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(locale, options);
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_DurationFormatOptions__org_jboss_elemento_intl_DurationFormat(/** Intl.Locale */ locale, /** DurationFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(locale, options);
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_DurationFormatOptions__org_jboss_elemento_intl_DurationFormat(/** Array<?string> */ locales, /** DurationFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), options);
 }
 /** @nodts @return {Intl.DurationFormat} */
 static m_durationFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_DurationFormatOptions__org_jboss_elemento_intl_DurationFormat(/** Array<Intl.Locale> */ locales, /** DurationFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.DurationFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), options);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Intl.DurationFormat;
 }
 
 /** @nodts */
 static $loadModules() {
  DurationFormatOptions_$Overlay = goog.module.get('org.jboss.elemento.intl.DurationFormatOptions.$Overlay$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Intl.DurationFormat');

exports = $Overlay;

//# sourceMappingURL=DurationFormat$$Overlay.js.map
