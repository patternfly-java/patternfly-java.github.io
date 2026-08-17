goog.module('elemental2.dom.BaseRenderingContext2D.SetTransformM11OrMatrixUnionType.$Overlay$impl');

let DOMMatrixReadOnly_$Overlay = goog.forwardDeclare('elemental2.dom.DOMMatrixReadOnly.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_BaseRenderingContext2D_SetTransformM11OrMatrixUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {DOMMatrixReadOnly} */
 static m_asDOMMatrixReadOnly__$devirt__elemental2_dom_BaseRenderingContext2D_SetTransformM11OrMatrixUnionType__elemental2_dom_DOMMatrixReadOnly(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {DOMMatrixReadOnly}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), DOMMatrixReadOnly_$Overlay));
 }
 /** @nodts @return {number} */
 static m_asDouble__$devirt__elemental2_dom_BaseRenderingContext2D_SetTransformM11OrMatrixUnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isDOMMatrixReadOnly__$devirt__elemental2_dom_BaseRenderingContext2D_SetTransformM11OrMatrixUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return DOMMatrixReadOnly_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_BaseRenderingContext2D_SetTransformM11OrMatrixUnionType__boolean(/** ? */ $thisArg) {
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
  DOMMatrixReadOnly_$Overlay = goog.module.get('elemental2.dom.DOMMatrixReadOnly.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=BaseRenderingContext2D$SetTransformM11OrMatrixUnionType$$Overlay.js.map
