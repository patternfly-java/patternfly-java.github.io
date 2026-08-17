goog.module('elemental2.core.Function.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Function} */
 static m_bind__$devirt__elemental2_core_Function__java_lang_Object__arrayOf_java_lang_Object__elemental2_core_Function(/** !Function */ $thisArg, /** * */ selfObj, /** Array<*> */ var_args) {
  $Overlay.$clinit();
  return $thisArg.bind(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(selfObj)), ...var_args);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Function;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Function');

exports = $Overlay;

//# sourceMappingURL=Function$$Overlay.js.map
