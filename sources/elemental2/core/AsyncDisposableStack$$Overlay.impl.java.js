goog.module('elemental2.core.AsyncDisposableStack.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {?} */
 static m_use__$devirt__elemental2_core_AsyncDisposableStack__elemental2_core_AsyncDisposable__elemental2_core_AsyncDisposableStack_UseUnionType(/** !AsyncDisposableStack */ $thisArg, /** AsyncDisposable */ disposable) {
  $Overlay.$clinit();
  return $thisArg.use(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(disposable)));
 }
 /** @final @nodts @return {?} */
 static m_use__$devirt__elemental2_core_AsyncDisposableStack__elemental2_core_Disposable__elemental2_core_AsyncDisposableStack_UseUnionType(/** !AsyncDisposableStack */ $thisArg, /** Disposable */ disposable) {
  $Overlay.$clinit();
  return $thisArg.use(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(disposable)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AsyncDisposableStack;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'AsyncDisposableStack');

exports = $Overlay;

//# sourceMappingURL=AsyncDisposableStack$$Overlay.js.map
