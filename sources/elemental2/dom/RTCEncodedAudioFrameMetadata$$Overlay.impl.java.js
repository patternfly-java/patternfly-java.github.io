goog.module('elemental2.dom.RTCEncodedAudioFrameMetadata.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_setContributingSources__$devirt__elemental2_dom_RTCEncodedAudioFrameMetadata__arrayOf_double__void(/** !RTCEncodedAudioFrameMetadata */ $thisArg, /** Array<number> */ contributingSources) {
  $Overlay.$clinit();
  $thisArg.contributingSources = /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(contributingSources));
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

//# sourceMappingURL=RTCEncodedAudioFrameMetadata$$Overlay.js.map
