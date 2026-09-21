goog.module('elemental2.dom.StylePropertyMap.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_StylePropertyMap__java_lang_String__arrayOf_elemental2_dom_CSSStyleValue__void(/** !StylePropertyMap */ $thisArg, /** ?string */ property, /** Array<CSSStyleValue> */ values) {
  $Overlay.$clinit();
  $thisArg.append(property, ...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(values))));
 }
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_StylePropertyMap__java_lang_String__arrayOf_java_lang_String__void(/** !StylePropertyMap */ $thisArg, /** ?string */ property, /** Array<?string> */ values) {
  $Overlay.$clinit();
  $thisArg.append(property, ...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(values))));
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_dom_StylePropertyMap__java_lang_String__arrayOf_elemental2_dom_CSSStyleValue__void(/** !StylePropertyMap */ $thisArg, /** ?string */ property, /** Array<CSSStyleValue> */ values) {
  $Overlay.$clinit();
  $thisArg.set(property, ...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(values))));
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_dom_StylePropertyMap__java_lang_String__arrayOf_java_lang_String__void(/** !StylePropertyMap */ $thisArg, /** ?string */ property, /** Array<?string> */ values) {
  $Overlay.$clinit();
  $thisArg.set(property, ...(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(values))));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StylePropertyMap;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'StylePropertyMap');

exports = $Overlay;

//# sourceMappingURL=StylePropertyMap$$Overlay.js.map
