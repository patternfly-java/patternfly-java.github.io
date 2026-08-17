goog.module('elemental2.core.ProxyHandler.DefinePropertyFn.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template TARGET @return {boolean} */
 static m_onInvoke__$devirt__elemental2_core_ProxyHandler_DefinePropertyFn__java_lang_Object__java_lang_Object__elemental2_core_ObjectPropertyDescriptor__boolean(/** function(TARGET, ?, ObjectPropertyDescriptor):boolean */ $thisArg, /** TARGET */ p0, /** * */ p1, /** ObjectPropertyDescriptor */ p2) {
  $Overlay.$clinit();
  return $thisArg(p0, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p1)), p2);
 }
 /** @nodts @template TARGET @return {boolean} */
 static m_onInvoke__$devirt__elemental2_core_ProxyHandler_DefinePropertyFn__java_lang_Object__java_lang_String__elemental2_core_ObjectPropertyDescriptor__boolean(/** function(TARGET, ?, ObjectPropertyDescriptor):boolean */ $thisArg, /** TARGET */ p0, /** ?string */ p1, /** ObjectPropertyDescriptor */ p2) {
  $Overlay.$clinit();
  return $thisArg(p0, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p1)), p2);
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

//# sourceMappingURL=ProxyHandler$DefinePropertyFn$$Overlay.js.map
