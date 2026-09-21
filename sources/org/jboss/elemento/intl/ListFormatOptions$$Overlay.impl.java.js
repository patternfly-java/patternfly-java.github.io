goog.module('org.jboss.elemento.intl.ListFormatOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Format = goog.forwardDeclare('org.jboss.elemento.intl.Format$impl');
let Grouping = goog.forwardDeclare('org.jboss.elemento.intl.Grouping$impl');
let Matcher = goog.forwardDeclare('org.jboss.elemento.intl.Matcher$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {ListFormatOptions} */
 static m_listFormatOptions__org_jboss_elemento_intl_ListFormatOptions() {
  $Overlay.$clinit();
  return /**@type {ListFormatOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts @return {ListFormatOptions} */
 static m_localMatcher__$devirt__org_jboss_elemento_intl_ListFormatOptions__org_jboss_elemento_intl_Matcher__org_jboss_elemento_intl_ListFormatOptions(/** !ListFormatOptions */ $thisArg, /** Matcher */ localeMatcher) {
  $Overlay.$clinit();
  $thisArg.localeMatcher = localeMatcher.f_value__org_jboss_elemento_intl_Matcher;
  return $thisArg;
 }
 /** @nodts @return {ListFormatOptions} */
 static m_type__$devirt__org_jboss_elemento_intl_ListFormatOptions__org_jboss_elemento_intl_Grouping__org_jboss_elemento_intl_ListFormatOptions(/** !ListFormatOptions */ $thisArg, /** Grouping */ type) {
  $Overlay.$clinit();
  $thisArg.type = type.f_value__org_jboss_elemento_intl_Grouping;
  return $thisArg;
 }
 /** @nodts @return {ListFormatOptions} */
 static m_style__$devirt__org_jboss_elemento_intl_ListFormatOptions__org_jboss_elemento_intl_Format__org_jboss_elemento_intl_ListFormatOptions(/** !ListFormatOptions */ $thisArg, /** Format */ style) {
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

//# sourceMappingURL=ListFormatOptions$$Overlay.js.map
