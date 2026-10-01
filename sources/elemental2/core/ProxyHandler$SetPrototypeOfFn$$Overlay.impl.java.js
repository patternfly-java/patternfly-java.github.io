goog.module('elemental2.core.ProxyHandler.SetPrototypeOfFn.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template TARGET @return {boolean} */
 static m_onInvoke__$devirt__elemental2_core_ProxyHandler_SetPrototypeOfFn__java_lang_Object__java_lang_Object__boolean(/** function(TARGET, Object):boolean */ $thisArg, /** TARGET */ p0, /** * */ p1) {
  $Overlay.$clinit();
  return $thisArg(p0, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p1)));
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

//# sourceMappingURL=ProxyHandler$SetPrototypeOfFn$$Overlay.js.map
