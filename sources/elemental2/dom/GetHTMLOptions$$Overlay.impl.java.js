goog.module('elemental2.dom.GetHTMLOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {GetHTMLOptions} */
 static m_create__elemental2_dom_GetHTMLOptions() {
  $Overlay.$clinit();
  return /**@type {GetHTMLOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setShadowRoots__$devirt__elemental2_dom_GetHTMLOptions__arrayOf_elemental2_dom_ShadowRoot__void(/** !GetHTMLOptions */ $thisArg, /** Array<ShadowRoot> */ shadowRoots) {
  $Overlay.$clinit();
  $thisArg.shadowRoots = /**@type {Array<ShadowRoot>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(shadowRoots));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=GetHTMLOptions$$Overlay.js.map
