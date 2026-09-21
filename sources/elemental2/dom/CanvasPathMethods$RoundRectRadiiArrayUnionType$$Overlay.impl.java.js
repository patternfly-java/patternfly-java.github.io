goog.module('elemental2.dom.CanvasPathMethods.RoundRectRadiiArrayUnionType.$Overlay$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_CanvasPathMethods_RoundRectRadiiArrayUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {DOMPointInit} */
 static m_asDOMPointInit__$devirt__elemental2_dom_CanvasPathMethods_RoundRectRadiiArrayUnionType__elemental2_dom_DOMPointInit(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {DOMPointInit}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {?number} */
 static m_asDouble__$devirt__elemental2_dom_CanvasPathMethods_RoundRectRadiiArrayUnionType__java_lang_Double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?number}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Double));
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_CanvasPathMethods_RoundRectRadiiArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=CanvasPathMethods$RoundRectRadiiArrayUnionType$$Overlay.js.map
