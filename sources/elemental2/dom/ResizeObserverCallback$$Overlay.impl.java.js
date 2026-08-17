goog.module('elemental2.dom.ResizeObserverCallback.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {*} */
 static m_onInvoke__$devirt__elemental2_dom_ResizeObserverCallback__arrayOf_elemental2_dom_ResizeObserverEntry__elemental2_dom_ResizeObserver__java_lang_Object(/** function(Array<ResizeObserverEntry>, ResizeObserver):* */ $thisArg, /** Array<ResizeObserverEntry> */ p0, /** ResizeObserver */ p1) {
  $Overlay.$clinit();
  return $thisArg(/**@type {Array<ResizeObserverEntry>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p0)), p1);
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

//# sourceMappingURL=ResizeObserverCallback$$Overlay.js.map
