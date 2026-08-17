goog.module('elemental2.dom.MediaKeys.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Promise} */
 static m_setServerCertificate__$devirt__elemental2_dom_MediaKeys__elemental2_core_ArrayBuffer__elemental2_promise_Promise(/** !MediaKeys */ $thisArg, /** ArrayBuffer */ serverCertificate) {
  $Overlay.$clinit();
  return $thisArg.setServerCertificate(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(serverCertificate)));
 }
 /** @nodts @return {Promise} */
 static m_setServerCertificate__$devirt__elemental2_dom_MediaKeys__elemental2_core_ArrayBufferView__elemental2_promise_Promise(/** !MediaKeys */ $thisArg, /** ArrayBufferView */ serverCertificate) {
  $Overlay.$clinit();
  return $thisArg.setServerCertificate(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(serverCertificate)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=MediaKeys$$Overlay.js.map
