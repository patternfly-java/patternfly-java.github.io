goog.module('elemental2.dom.Clipboard.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Promise<?void>} */
 static m_write__$devirt__elemental2_dom_Clipboard__arrayOf_elemental2_dom_ClipboardItem__elemental2_promise_Promise(/** !Clipboard */ $thisArg, /** Array<ClipboardItem> */ data) {
  $Overlay.$clinit();
  return $thisArg.write(/**@type {Array<ClipboardItem>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Clipboard;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Clipboard');

exports = $Overlay;

//# sourceMappingURL=Clipboard$$Overlay.js.map
