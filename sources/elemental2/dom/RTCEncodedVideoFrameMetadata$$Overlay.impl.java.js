goog.module('elemental2.dom.RTCEncodedVideoFrameMetadata.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_setContributingSources__$devirt__elemental2_dom_RTCEncodedVideoFrameMetadata__arrayOf_double__void(/** !RTCEncodedVideoFrameMetadata */ $thisArg, /** Array<number> */ contributingSources) {
  $Overlay.$clinit();
  $thisArg.contributingSources = /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(contributingSources));
 }
 /** @nodts */
 static m_setDependencies__$devirt__elemental2_dom_RTCEncodedVideoFrameMetadata__arrayOf_double__void(/** !RTCEncodedVideoFrameMetadata */ $thisArg, /** Array<number> */ dependencies) {
  $Overlay.$clinit();
  $thisArg.dependencies = /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(dependencies));
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

//# sourceMappingURL=RTCEncodedVideoFrameMetadata$$Overlay.js.map
