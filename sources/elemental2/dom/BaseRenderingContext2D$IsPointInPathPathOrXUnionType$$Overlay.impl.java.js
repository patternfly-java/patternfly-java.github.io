goog.module('elemental2.dom.BaseRenderingContext2D.IsPointInPathPathOrXUnionType.$Overlay$impl');

let Path2D_$Overlay = goog.forwardDeclare('elemental2.dom.Path2D.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_BaseRenderingContext2D_IsPointInPathPathOrXUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {number} */
 static m_asDouble__$devirt__elemental2_dom_BaseRenderingContext2D_IsPointInPathPathOrXUnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @return {Path2D} */
 static m_asPath2D__$devirt__elemental2_dom_BaseRenderingContext2D_IsPointInPathPathOrXUnionType__elemental2_dom_Path2D(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Path2D}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Path2D_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_BaseRenderingContext2D_IsPointInPathPathOrXUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isPath2D__$devirt__elemental2_dom_BaseRenderingContext2D_IsPointInPathPathOrXUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Path2D_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Path2D_$Overlay = goog.module.get('elemental2.dom.Path2D.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=BaseRenderingContext2D$IsPointInPathPathOrXUnionType$$Overlay.js.map
