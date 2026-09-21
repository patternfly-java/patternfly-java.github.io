goog.module('elemental2.dom.MediaKeySession.RemoveEventListenerListenerUnionType.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_MediaKeySession_RemoveEventListenerListenerUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {EventListener} */
 static m_asEventListener__$devirt__elemental2_dom_MediaKeySession_RemoveEventListenerListenerUnionType__elemental2_dom_EventListener(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {EventListener}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {?function(Event):*} */
 static m_asRemoveEventListenerListenerFn__$devirt__elemental2_dom_MediaKeySession_RemoveEventListenerListenerUnionType__elemental2_dom_EventTarget_RemoveEventListenerListenerFn(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?function(Event):*}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @nodts @return {boolean} */
 static m_isRemoveEventListenerListenerFn__$devirt__elemental2_dom_MediaKeySession_RemoveEventListenerListenerUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return $JavaScriptFunction.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=MediaKeySession$RemoveEventListenerListenerUnionType$$Overlay.js.map
