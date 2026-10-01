goog.module('elemental2.dom.TextDecoder.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {?string} */
 static m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_core_ArrayBuffer__elemental2_core_JsObject__java_lang_String(/** !TextDecoder */ $thisArg, /** ArrayBuffer */ input, /** Object */ options) {
  $Overlay.$clinit();
  return $thisArg.decode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), options);
 }
 /** @final @nodts @return {?string} */
 static m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_core_ArrayBuffer__java_lang_Object__java_lang_String(/** !TextDecoder */ $thisArg, /** ArrayBuffer */ input, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_core_ArrayBuffer__elemental2_core_JsObject__java_lang_String($thisArg, input, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @final @nodts @return {?string} */
 static m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_core_ArrayBuffer__java_lang_String(/** !TextDecoder */ $thisArg, /** ArrayBuffer */ input) {
  $Overlay.$clinit();
  return $thisArg.decode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @final @nodts @return {?string} */
 static m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_core_ArrayBufferView__elemental2_core_JsObject__java_lang_String(/** !TextDecoder */ $thisArg, /** ArrayBufferView */ input, /** Object */ options) {
  $Overlay.$clinit();
  return $thisArg.decode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), options);
 }
 /** @final @nodts @return {?string} */
 static m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_core_ArrayBufferView__java_lang_Object__java_lang_String(/** !TextDecoder */ $thisArg, /** ArrayBufferView */ input, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_core_ArrayBufferView__elemental2_core_JsObject__java_lang_String($thisArg, input, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @final @nodts @return {?string} */
 static m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_core_ArrayBufferView__java_lang_String(/** !TextDecoder */ $thisArg, /** ArrayBufferView */ input) {
  $Overlay.$clinit();
  return $thisArg.decode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @final @nodts @return {?string} */
 static m_decode__$devirt__elemental2_dom_TextDecoder__elemental2_dom_TextDecoder_DecodeInputUnionType__java_lang_Object__java_lang_String(/** !TextDecoder */ $thisArg, /** ? */ input, /** * */ options) {
  $Overlay.$clinit();
  return $thisArg.decode(input, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextDecoder;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'TextDecoder');

exports = $Overlay;

//# sourceMappingURL=TextDecoder$$Overlay.js.map
