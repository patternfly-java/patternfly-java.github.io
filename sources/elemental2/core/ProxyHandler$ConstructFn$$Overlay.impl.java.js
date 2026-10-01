goog.module('elemental2.core.ProxyHandler.ConstructFn.$Overlay$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template TARGET @return {Object} */
 static m_onInvoke__$devirt__elemental2_core_ProxyHandler_ConstructFn__java_lang_Object__elemental2_core_JsArray__java_lang_Class__elemental2_core_JsObject(/** function(TARGET, Array, ?function(...*):void):Object */ $thisArg, /** TARGET */ p0, /** Array */ p1, /** Class<?> */ p2) {
  $Overlay.$clinit();
  return $thisArg(p0, p1, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class__jsinterop_base_JsConstructorFn(p2)));
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

//# sourceMappingURL=ProxyHandler$ConstructFn$$Overlay.js.map
