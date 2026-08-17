goog.module('elemental2.dom.URL.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {boolean} */
 static m_canParse__elemental2_dom_URL_CanParseUrlUnionType__java_lang_String__boolean(/** ? */ url, /** ?string */ base) {
  $Overlay.$clinit();
  return URL.canParse(url, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(base)));
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__elemental2_dom_URL_CanParseUrlUnionType__elemental2_dom_URL__boolean(/** ? */ url, /** URL */ base) {
  $Overlay.$clinit();
  return URL.canParse(url, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(base)));
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__java_lang_String__elemental2_dom_URL_CanParseBaseUnionType__boolean(/** ?string */ url, /** ? */ base) {
  $Overlay.$clinit();
  return URL.canParse(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), base);
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__java_lang_String__java_lang_String__boolean(/** ?string */ url, /** ?string */ base) {
  $Overlay.$clinit();
  return URL.canParse(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(base)));
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__java_lang_String__elemental2_dom_URL__boolean(/** ?string */ url, /** URL */ base) {
  $Overlay.$clinit();
  return URL.canParse(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(base)));
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__java_lang_String__boolean(/** ?string */ url) {
  $Overlay.$clinit();
  return URL.canParse(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__elemental2_dom_URL__elemental2_dom_URL_CanParseBaseUnionType__boolean(/** URL */ url, /** ? */ base) {
  $Overlay.$clinit();
  return URL.canParse(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), base);
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__elemental2_dom_URL__java_lang_String__boolean(/** URL */ url, /** ?string */ base) {
  $Overlay.$clinit();
  return URL.canParse(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(base)));
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__elemental2_dom_URL__elemental2_dom_URL__boolean(/** URL */ url, /** URL */ base) {
  $Overlay.$clinit();
  return URL.canParse(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(base)));
 }
 /** @final @nodts @return {boolean} */
 static m_canParse__elemental2_dom_URL__boolean(/** URL */ url) {
  $Overlay.$clinit();
  return URL.canParse(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts @return {?string} */
 static m_createObjectURL__elemental2_dom_Blob__java_lang_String(/** Blob */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {?string} */
 static m_createObjectURL__elemental2_dom_MediaSource__java_lang_String(/** MediaSource */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {?string} */
 static m_createObjectURL__elemental2_dom_MediaStream__java_lang_String(/** MediaStream */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts */
 static m_revokeObjectURL__java_lang_String__void(/** ?string */ url) {
  $Overlay.$clinit();
  URL.revokeObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_revokeObjectURL__elemental2_dom_URL__void(/** URL */ url) {
  $Overlay.$clinit();
  URL.revokeObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof URL;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'URL');

exports = $Overlay;

//# sourceMappingURL=URL$$Overlay.js.map
