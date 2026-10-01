goog.module('org.jboss.elemento.intl.NumberFormatOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let CurrencyDisplay = goog.forwardDeclare('org.jboss.elemento.intl.CurrencyDisplay$impl');
let Format = goog.forwardDeclare('org.jboss.elemento.intl.Format$impl');
let Matcher = goog.forwardDeclare('org.jboss.elemento.intl.Matcher$impl');
let Notation = goog.forwardDeclare('org.jboss.elemento.intl.Notation$impl');
let NumberingSystem = goog.forwardDeclare('org.jboss.elemento.intl.NumberingSystem$impl');
let Rounding = goog.forwardDeclare('org.jboss.elemento.intl.Rounding$impl');
let Unit = goog.forwardDeclare('org.jboss.elemento.intl.Unit$impl');
let When = goog.forwardDeclare('org.jboss.elemento.intl.When$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {NumberFormatOptions} */
 static m_numberFormatOptions__org_jboss_elemento_intl_NumberFormatOptions() {
  $Overlay.$clinit();
  return /**@type {NumberFormatOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_compactDisplay__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** Format */ display) {
  $Overlay.$clinit();
  $thisArg.compactDisplay = display.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_currency__$devirt__org_jboss_elemento_intl_NumberFormatOptions__java_lang_String__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** ?string */ currency) {
  $Overlay.$clinit();
  $thisArg.currency = currency;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_currencyDisplay__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_CurrencyDisplay__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** CurrencyDisplay */ currencyDisplay) {
  $Overlay.$clinit();
  $thisArg.currencyDisplay = currencyDisplay.f_value__org_jboss_elemento_intl_CurrencyDisplay;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_currencySign__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_CurrencyDisplay__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** CurrencyDisplay */ currencyDisplay) {
  $Overlay.$clinit();
  $thisArg.currencySign = currencyDisplay.f_value__org_jboss_elemento_intl_CurrencyDisplay;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_localMatcher__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_Matcher__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** Matcher */ localeMatcher) {
  $Overlay.$clinit();
  $thisArg.localeMatcher = localeMatcher.f_value__org_jboss_elemento_intl_Matcher;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_maximumFractionDigits__$devirt__org_jboss_elemento_intl_NumberFormatOptions__int__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** number */ digits) {
  $Overlay.$clinit();
  $thisArg.maximumFractionDigits = digits;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_maximumSignificantDigits__$devirt__org_jboss_elemento_intl_NumberFormatOptions__int__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** number */ digits) {
  $Overlay.$clinit();
  $thisArg.maximumSignificantDigits = digits;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_minimumFractionDigits__$devirt__org_jboss_elemento_intl_NumberFormatOptions__int__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** number */ digits) {
  $Overlay.$clinit();
  $thisArg.minimumFractionDigits = digits;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_minimumIntegerDigits__$devirt__org_jboss_elemento_intl_NumberFormatOptions__int__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** number */ digits) {
  $Overlay.$clinit();
  $thisArg.minimumIntegerDigits = digits;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_minimumSignificantDigits__$devirt__org_jboss_elemento_intl_NumberFormatOptions__int__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** number */ digits) {
  $Overlay.$clinit();
  $thisArg.minimumSignificantDigits = digits;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_notation__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_Notation__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** Notation */ notation) {
  $Overlay.$clinit();
  $thisArg.notation = notation.f_value__org_jboss_elemento_intl_Notation;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_numberingSystem__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_NumberingSystem__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** NumberingSystem */ numberingSystem) {
  $Overlay.$clinit();
  $thisArg.numberingSystem = numberingSystem.f_value__org_jboss_elemento_intl_NumberingSystem;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_roundingIncrement__$devirt__org_jboss_elemento_intl_NumberFormatOptions__int__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** number */ increment) {
  $Overlay.$clinit();
  $thisArg.roundingIncrement = increment;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_roundingMode__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_Rounding__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** Rounding */ mode) {
  $Overlay.$clinit();
  $thisArg.roundingMode = mode.f_value__org_jboss_elemento_intl_Rounding;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_roundingPriority__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_Rounding__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** Rounding */ priority) {
  $Overlay.$clinit();
  $thisArg.roundingPriority = priority.f_value__org_jboss_elemento_intl_Rounding;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_signDisplay__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_When__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** When */ display) {
  $Overlay.$clinit();
  $thisArg.signDisplay = display.f_value__org_jboss_elemento_intl_When;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_style__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** Format */ style) {
  $Overlay.$clinit();
  $thisArg.style = style.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_trailingZeroDisplay__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_When__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** When */ display) {
  $Overlay.$clinit();
  $thisArg.trailingZeroDisplay = display.f_value__org_jboss_elemento_intl_When;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_unit__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_Unit__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** Unit */ unit) {
  $Overlay.$clinit();
  $thisArg.unit = unit.f_value__org_jboss_elemento_intl_Unit;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_unit__$devirt__org_jboss_elemento_intl_NumberFormatOptions__java_lang_String__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** ?string */ unit) {
  $Overlay.$clinit();
  $thisArg.unit = unit;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_unitDisplay__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** Format */ style) {
  $Overlay.$clinit();
  $thisArg.unitDisplay = style.f_value__org_jboss_elemento_intl_Format;
  return $thisArg;
 }
 /** @nodts @return {NumberFormatOptions} */
 static m_useGrouping__$devirt__org_jboss_elemento_intl_NumberFormatOptions__org_jboss_elemento_intl_When__org_jboss_elemento_intl_NumberFormatOptions(/** !NumberFormatOptions */ $thisArg, /** When */ grouping) {
  $Overlay.$clinit();
  $thisArg.useGrouping = grouping.f_value__org_jboss_elemento_intl_When;
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

//# sourceMappingURL=NumberFormatOptions$$Overlay.js.map
