goog.module('org.patternfly.showcase.model.Track.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {List<?string>} */
 static m_writer__$devirt__org_patternfly_showcase_model_Track__java_util_List(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return $Equality.$same($thisArg.writer, null) ? /**@type {List<?string>}*/ (Collections.m_emptyList__java_util_List()) : /**@type {List<?string>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List($thisArg.writer));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 /** @nodts */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=Track$$Overlay.js.map
