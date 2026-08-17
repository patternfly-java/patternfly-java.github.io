goog.module('elemental2.dom.MediaKeySystemConfiguration.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {MediaKeySystemConfiguration} */
 static m_create__elemental2_dom_MediaKeySystemConfiguration() {
  $Overlay.$clinit();
  return /**@type {MediaKeySystemConfiguration}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setAudioCapabilities__$devirt__elemental2_dom_MediaKeySystemConfiguration__arrayOf_elemental2_dom_MediaKeySystemMediaCapability__void(/** !MediaKeySystemConfiguration */ $thisArg, /** Array<MediaKeySystemMediaCapability> */ audioCapabilities) {
  $Overlay.$clinit();
  $thisArg.audioCapabilities = /**@type {Array<MediaKeySystemMediaCapability>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(audioCapabilities));
 }
 /** @nodts */
 static m_setInitDataTypes__$devirt__elemental2_dom_MediaKeySystemConfiguration__arrayOf_java_lang_String__void(/** !MediaKeySystemConfiguration */ $thisArg, /** Array<?string> */ initDataTypes) {
  $Overlay.$clinit();
  $thisArg.initDataTypes = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(initDataTypes));
 }
 /** @nodts */
 static m_setSessionTypes__$devirt__elemental2_dom_MediaKeySystemConfiguration__arrayOf_java_lang_String__void(/** !MediaKeySystemConfiguration */ $thisArg, /** Array<?string> */ sessionTypes) {
  $Overlay.$clinit();
  $thisArg.sessionTypes = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sessionTypes));
 }
 /** @nodts */
 static m_setVideoCapabilities__$devirt__elemental2_dom_MediaKeySystemConfiguration__arrayOf_elemental2_dom_MediaKeySystemMediaCapability__void(/** !MediaKeySystemConfiguration */ $thisArg, /** Array<MediaKeySystemMediaCapability> */ videoCapabilities) {
  $Overlay.$clinit();
  $thisArg.videoCapabilities = /**@type {Array<MediaKeySystemMediaCapability>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(videoCapabilities));
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

//# sourceMappingURL=MediaKeySystemConfiguration$$Overlay.js.map
