goog.module('elemental2.dom.StylePropertyMap.AppendValuesUnionType.$Overlay$impl');

let CSSStyleValue_$Overlay = goog.forwardDeclare('elemental2.dom.CSSStyleValue.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_StylePropertyMap_AppendValuesUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {CSSStyleValue} */
 static m_asCSSStyleValue__$devirt__elemental2_dom_StylePropertyMap_AppendValuesUnionType__elemental2_dom_CSSStyleValue(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CSSStyleValue}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), CSSStyleValue_$Overlay));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_StylePropertyMap_AppendValuesUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isCSSStyleValue__$devirt__elemental2_dom_StylePropertyMap_AppendValuesUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return CSSStyleValue_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_StylePropertyMap_AppendValuesUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  CSSStyleValue_$Overlay = goog.module.get('elemental2.dom.CSSStyleValue.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=StylePropertyMap$AppendValuesUnionType$$Overlay.js.map
