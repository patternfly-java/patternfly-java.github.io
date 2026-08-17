goog.module('elemental2.core.ProxyHandler.GetOwnPropertyDescriptorFn.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template TARGET @return {ObjectPropertyDescriptor} */
 static m_onInvoke__$devirt__elemental2_core_ProxyHandler_GetOwnPropertyDescriptorFn__java_lang_Object__java_lang_Object__elemental2_core_ObjectPropertyDescriptor(/** function(TARGET, ?):ObjectPropertyDescriptor */ $thisArg, /** TARGET */ p0, /** * */ p1) {
  $Overlay.$clinit();
  return $thisArg(p0, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p1)));
 }
 /** @nodts @template TARGET @return {ObjectPropertyDescriptor} */
 static m_onInvoke__$devirt__elemental2_core_ProxyHandler_GetOwnPropertyDescriptorFn__java_lang_Object__java_lang_String__elemental2_core_ObjectPropertyDescriptor(/** function(TARGET, ?):ObjectPropertyDescriptor */ $thisArg, /** TARGET */ p0, /** ?string */ p1) {
  $Overlay.$clinit();
  return $thisArg(p0, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p1)));
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

//# sourceMappingURL=ProxyHandler$GetOwnPropertyDescriptorFn$$Overlay.js.map
