goog.module('elemental2.dom.Range.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {DocumentFragment} */
 static m_createContextualFragment__$devirt__elemental2_dom_Range__java_lang_String__elemental2_dom_DocumentFragment(/** !Range */ $thisArg, /** ?string */ p0) {
  $Overlay.$clinit();
  return $thisArg.createContextualFragment(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p0)));
 }
 /** @final @nodts @return {DocumentFragment} */
 static m_createContextualFragment__$devirt__elemental2_dom_Range__elemental2_dom_TrustedHTML__elemental2_dom_DocumentFragment(/** !Range */ $thisArg, /** TrustedHTML */ p0) {
  $Overlay.$clinit();
  return $thisArg.createContextualFragment(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p0)));
 }
 /** @nodts @return {number} */
 static get f_END_TO_END__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_END_TO_END__elemental2_dom_Range_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_END_TO_START__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_END_TO_START__elemental2_dom_Range_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_START_TO_END__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_START_TO_END__elemental2_dom_Range_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_START_TO_START__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_START_TO_START__elemental2_dom_Range_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_END_TO_END__elemental2_dom_Range_$Overlay = Range.END_TO_END;
  $Overlay.$static_END_TO_START__elemental2_dom_Range_$Overlay = Range.END_TO_START;
  $Overlay.$static_START_TO_END__elemental2_dom_Range_$Overlay = Range.START_TO_END;
  $Overlay.$static_START_TO_START__elemental2_dom_Range_$Overlay = Range.START_TO_START;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Range;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number} @nodts*/
$Overlay.$static_END_TO_END__elemental2_dom_Range_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_END_TO_START__elemental2_dom_Range_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_START_TO_END__elemental2_dom_Range_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_START_TO_START__elemental2_dom_Range_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'Range');

exports = $Overlay;

//# sourceMappingURL=Range$$Overlay.js.map
