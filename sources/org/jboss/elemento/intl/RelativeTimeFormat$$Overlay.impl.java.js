goog.module('org.jboss.elemento.intl.RelativeTimeFormat.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let RelativeTimeFormatOptions_$Overlay = goog.forwardDeclare('org.jboss.elemento.intl.RelativeTimeFormatOptions.$Overlay$impl');
let Unit = goog.forwardDeclare('org.jboss.elemento.intl.Unit$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__org_jboss_elemento_intl_RelativeTimeFormat() {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(undefined, RelativeTimeFormatOptions_$Overlay.m_relativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormatOptions());
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__java_lang_String__org_jboss_elemento_intl_RelativeTimeFormat(/** ?string */ locale) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(locale, RelativeTimeFormatOptions_$Overlay.m_relativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormatOptions());
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormat(/** Intl.Locale */ locale) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(locale, RelativeTimeFormatOptions_$Overlay.m_relativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormatOptions());
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_RelativeTimeFormat(/** Array<?string> */ locales) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), RelativeTimeFormatOptions_$Overlay.m_relativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormatOptions());
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormat(/** Array<Intl.Locale> */ locales) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), RelativeTimeFormatOptions_$Overlay.m_relativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormatOptions());
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(/** RelativeTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(undefined, options);
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__java_lang_String__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(/** ?string */ locale, /** RelativeTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(locale, options);
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(/** Intl.Locale */ locale, /** RelativeTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(locale, options);
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__arrayOf_java_lang_String__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(/** Array<?string> */ locales, /** RelativeTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(/**@type {!Array<?string>}*/ (new Array(...locales)), options);
 }
 /** @nodts @return {Intl.RelativeTimeFormat} */
 static m_relativeTimeFormat__arrayOf_org_jboss_elemento_intl_Locale__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormat(/** Array<Intl.Locale> */ locales, /** RelativeTimeFormatOptions */ options) {
  $Overlay.$clinit();
  return new Intl.RelativeTimeFormat(/**@type {!Array<Intl.Locale>}*/ (new Array(...locales)), options);
 }
 /** @final @nodts @return {?string} */
 static m_format__$devirt__org_jboss_elemento_intl_RelativeTimeFormat__long__org_jboss_elemento_intl_Unit__java_lang_String(/** !Intl.RelativeTimeFormat */ $thisArg, /** !$Long */ value, /** Unit */ unit) {
  $Overlay.$clinit();
  return $thisArg.format(Primitives.m_widenLongToDouble__long__double(value), unit.name());
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Intl.RelativeTimeFormat;
 }
 
 /** @nodts */
 static $loadModules() {
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  RelativeTimeFormatOptions_$Overlay = goog.module.get('org.jboss.elemento.intl.RelativeTimeFormatOptions.$Overlay$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Intl.RelativeTimeFormat');

exports = $Overlay;

//# sourceMappingURL=RelativeTimeFormat$$Overlay.js.map
