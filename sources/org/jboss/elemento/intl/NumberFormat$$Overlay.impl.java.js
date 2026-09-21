goog.module('org.jboss.elemento.intl.NumberFormat.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let NumberFormatOptions_$Overlay = goog.forwardDeclare('org.jboss.elemento.intl.NumberFormatOptions.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__org_jboss_elemento_intl_NumberFormat() {
  $Overlay.$clinit();
  return new Intl.NumberFormat(undefined, NumberFormatOptions_$Overlay.m_numberFormatOptions__org_jboss_elemento_intl_NumberFormatOptions());
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__java_lang_String__org_jboss_elemento_intl_NumberFormat(/** ?string */ locale) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(locale, NumberFormatOptions_$Overlay.m_numberFormatOptions__org_jboss_elemento_intl_NumberFormatOptions());
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_NumberFormat(/** Intl.Locale */ locale) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(locale, NumberFormatOptions_$Overlay.m_numberFormatOptions__org_jboss_elemento_intl_NumberFormatOptions());
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_NumberFormat(/** Array<?string> */ locales) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), NumberFormatOptions_$Overlay.m_numberFormatOptions__org_jboss_elemento_intl_NumberFormatOptions());
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_NumberFormat(/** Array<Intl.Locale> */ locales) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), NumberFormatOptions_$Overlay.m_numberFormatOptions__org_jboss_elemento_intl_NumberFormatOptions());
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_NumberFormat(/** NumberFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(undefined, options);
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__java_lang_String__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_NumberFormat(/** ?string */ locale, /** NumberFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(locale, options);
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_NumberFormat(/** Intl.Locale */ locale, /** NumberFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(locale, options);
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_NumberFormat(/** Array<?string> */ locales, /** NumberFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), options);
 }
 /** @nodts @return {Intl.NumberFormat} */
 static m_numberFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_NumberFormat(/** Array<Intl.Locale> */ locales, /** NumberFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.NumberFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), options);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Intl.NumberFormat;
 }
 
 /** @nodts */
 static $loadModules() {
  NumberFormatOptions_$Overlay = goog.module.get('org.jboss.elemento.intl.NumberFormatOptions.$Overlay$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Intl.NumberFormat');

exports = $Overlay;

//# sourceMappingURL=NumberFormat$$Overlay.js.map
