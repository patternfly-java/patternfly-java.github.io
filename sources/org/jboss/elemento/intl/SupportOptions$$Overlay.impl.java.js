goog.module('org.jboss.elemento.intl.SupportOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Matcher = goog.forwardDeclare('org.jboss.elemento.intl.Matcher$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {SupportOptions} */
 static m_supportOptions__org_jboss_elemento_intl_SupportOptions() {
  $Overlay.$clinit();
  return /**@type {SupportOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts @return {SupportOptions} */
 static m_localeMatcher__$devirt__org_jboss_elemento_intl_SupportOptions__org_jboss_elemento_intl_Matcher__org_jboss_elemento_intl_SupportOptions(/** !SupportOptions */ $thisArg, /** Matcher */ localeMatcher) {
  $Overlay.$clinit();
  $thisArg.localeMatcher = localeMatcher.f_value__org_jboss_elemento_intl_Matcher;
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

//# sourceMappingURL=SupportOptions$$Overlay.js.map
