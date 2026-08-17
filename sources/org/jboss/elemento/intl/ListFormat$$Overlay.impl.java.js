goog.module('org.jboss.elemento.intl.ListFormat.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ListFormatOptions_$Overlay = goog.forwardDeclare('org.jboss.elemento.intl.ListFormatOptions.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__org_jboss_elemento_intl_ListFormat() {
  $Overlay.$clinit();
  return new Intl.ListFormat(undefined, ListFormatOptions_$Overlay.m_listFormatOptions__org_jboss_elemento_intl_ListFormatOptions());
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__java_lang_String__org_jboss_elemento_intl_ListFormat(/** ?string */ locale) {
  $Overlay.$clinit();
  return new Intl.ListFormat(locale, ListFormatOptions_$Overlay.m_listFormatOptions__org_jboss_elemento_intl_ListFormatOptions());
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_ListFormat(/** Intl.Locale */ locale) {
  $Overlay.$clinit();
  return new Intl.ListFormat(locale, ListFormatOptions_$Overlay.m_listFormatOptions__org_jboss_elemento_intl_ListFormatOptions());
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_ListFormat(/** Array<?string> */ locales) {
  $Overlay.$clinit();
  return new Intl.ListFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), ListFormatOptions_$Overlay.m_listFormatOptions__org_jboss_elemento_intl_ListFormatOptions());
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_ListFormat(/** Array<Intl.Locale> */ locales) {
  $Overlay.$clinit();
  return new Intl.ListFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), ListFormatOptions_$Overlay.m_listFormatOptions__org_jboss_elemento_intl_ListFormatOptions());
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__org_jboss_elemento_intl_ListFormatOptions__org_jboss_elemento_intl_ListFormat(/** ListFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.ListFormat(undefined, options);
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__java_lang_String__org_jboss_elemento_intl_ListFormatOptions__org_jboss_elemento_intl_ListFormat(/** ?string */ locale, /** ListFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.ListFormat(locale, options);
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_ListFormatOptions__org_jboss_elemento_intl_ListFormat(/** Intl.Locale */ locale, /** ListFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.ListFormat(locale, options);
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_ListFormatOptions__org_jboss_elemento_intl_ListFormat(/** Array<?string> */ locales, /** ListFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.ListFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), options);
 }
 /** @nodts @return {Intl.ListFormat} */
 static m_listFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_ListFormatOptions__org_jboss_elemento_intl_ListFormat(/** Array<Intl.Locale> */ locales, /** ListFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.ListFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), options);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Intl.ListFormat;
 }
 
 /** @nodts */
 static $loadModules() {
  ListFormatOptions_$Overlay = goog.module.get('org.jboss.elemento.intl.ListFormatOptions.$Overlay$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Intl.ListFormat');

exports = $Overlay;

//# sourceMappingURL=ListFormat$$Overlay.js.map
