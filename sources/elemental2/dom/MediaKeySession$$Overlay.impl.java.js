goog.module('elemental2.dom.MediaKeySession.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Promise} */
 static m_generateRequest__$devirt__elemental2_dom_MediaKeySession__java_lang_String__elemental2_core_ArrayBuffer__elemental2_promise_Promise(/** !MediaKeySession */ $thisArg, /** ?string */ initDataType, /** ArrayBuffer */ initData) {
  $Overlay.$clinit();
  return $thisArg.generateRequest(initDataType, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(initData)));
 }
 /** @nodts @return {Promise} */
 static m_generateRequest__$devirt__elemental2_dom_MediaKeySession__java_lang_String__elemental2_core_ArrayBufferView__elemental2_promise_Promise(/** !MediaKeySession */ $thisArg, /** ?string */ initDataType, /** ArrayBufferView */ initData) {
  $Overlay.$clinit();
  return $thisArg.generateRequest(initDataType, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(initData)));
 }
 /** @nodts @return {Promise} */
 static m_update__$devirt__elemental2_dom_MediaKeySession__elemental2_core_ArrayBuffer__elemental2_promise_Promise(/** !MediaKeySession */ $thisArg, /** ArrayBuffer */ response) {
  $Overlay.$clinit();
  return $thisArg.update(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(response)));
 }
 /** @nodts @return {Promise} */
 static m_update__$devirt__elemental2_dom_MediaKeySession__elemental2_core_ArrayBufferView__elemental2_promise_Promise(/** !MediaKeySession */ $thisArg, /** ArrayBufferView */ response) {
  $Overlay.$clinit();
  return $thisArg.update(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(response)));
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

//# sourceMappingURL=MediaKeySession$$Overlay.js.map
