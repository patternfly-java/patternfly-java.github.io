goog.module('elemental2.dom.CharacterData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_after__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node__void(/** !CharacterData */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_after__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String__void(/** !CharacterData */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_before__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node__void(/** !CharacterData */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_before__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String__void(/** !CharacterData */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceWith__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node__void(/** !CharacterData */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceWith__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String__void(/** !CharacterData */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CharacterData;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'CharacterData');

exports = $Overlay;

//# sourceMappingURL=CharacterData$$Overlay.js.map
