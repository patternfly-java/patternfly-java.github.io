goog.module('elemental2.dom.Gamepad.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_setAxes__$devirt__elemental2_dom_Gamepad__arrayOf_double__void(/** !Gamepad */ $thisArg, /** Array<number> */ axes) {
  $Overlay.$clinit();
  $thisArg.axes = /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(axes));
 }
 /** @nodts */
 static m_setButtons__$devirt__elemental2_dom_Gamepad__arrayOf_java_lang_Object__void(/** !Gamepad */ $thisArg, /** Array<*> */ buttons) {
  $Overlay.$clinit();
  $thisArg.buttons = /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(buttons));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Gamepad$$Overlay.js.map
