goog.module('org.jboss.elemento.intl.RelativeTimeFormatOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Format = goog.forwardDeclare('org.jboss.elemento.intl.Format$impl');
let Matcher = goog.forwardDeclare('org.jboss.elemento.intl.Matcher$impl');
let NumberingSystem = goog.forwardDeclare('org.jboss.elemento.intl.NumberingSystem$impl');
let When = goog.forwardDeclare('org.jboss.elemento.intl.When$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {RelativeTimeFormatOptions} */
 static m_relativeTimeFormatOptions__org_jboss_elemento_intl_RelativeTimeFormatOptions() {
  $Overlay.$clinit();
  return /**@type {RelativeTimeFormatOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts @return {RelativeTimeFormatOptions} */
 static m_localMatcher__$devirt__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_Matcher__org_jboss_elemento_intl_RelativeTimeFormatOptions(/** !RelativeTimeFormatOptions */ $thisArg, /** Matcher */ localeMatcher) {
  $Overlay.$clinit();
  $thisArg.localeMatcher = localeMatcher.f_value__org_jboss_elemento_intl_Matcher;
  return $thisArg;
 }
 /** @nodts @return {RelativeTimeFormatOptions} */
 static m_numberingSystem__$devirt__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_NumberingSystem__org_jboss_elemento_intl_RelativeTimeFormatOptions(/** !RelativeTimeFormatOptions */ $thisArg, /** NumberingSystem */ numberingSystem) {
  $Overlay.$clinit();
  $thisArg.numberingSystem = numberingSystem.f_value__org_jboss_elemento_intl_NumberingSystem;
  return $thisArg;
 }
 /** @nodts @return {RelativeTimeFormatOptions} */
 static m_numeric__$devirt__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_When__org_jboss_elemento_intl_RelativeTimeFormatOptions(/** !RelativeTimeFormatOptions */ $thisArg, /** When */ numeric) {
  $Overlay.$clinit();
  $thisArg.numeric = numeric.f_value__org_jboss_elemento_intl_When;
  return $thisArg;
 }
 /** @nodts @return {RelativeTimeFormatOptions} */
 static m_style__$devirt__org_jboss_elemento_intl_RelativeTimeFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_RelativeTimeFormatOptions(/** !RelativeTimeFormatOptions */ $thisArg, /** Format */ style) {
  $Overlay.$clinit();
  $thisArg.style = style.f_value__org_jboss_elemento_intl_Format;
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

//# sourceMappingURL=RelativeTimeFormatOptions$$Overlay.js.map
