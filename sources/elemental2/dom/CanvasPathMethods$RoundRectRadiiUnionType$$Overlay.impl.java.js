goog.module('elemental2.dom.CanvasPathMethods.RoundRectRadiiUnionType.$Overlay$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_CanvasPathMethods_RoundRectRadiiUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {DOMPointInit} */
 static m_asDOMPointInit__$devirt__elemental2_dom_CanvasPathMethods_RoundRectRadiiUnionType__elemental2_dom_DOMPointInit(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {DOMPointInit}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {number} */
 static m_asDouble__$devirt__elemental2_dom_CanvasPathMethods_RoundRectRadiiUnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @return {Array<?>} */
 static m_asJsArray__$devirt__elemental2_dom_CanvasPathMethods_RoundRectRadiiUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<?>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_CanvasPathMethods_RoundRectRadiiUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_CanvasPathMethods_RoundRectRadiiUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=CanvasPathMethods$RoundRectRadiiUnionType$$Overlay.js.map
