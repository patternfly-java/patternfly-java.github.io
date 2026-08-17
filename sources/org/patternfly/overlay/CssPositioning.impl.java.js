goog.module('org.patternfly.overlay.CssPositioning$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class CssPositioning extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!CssPositioning} */
 static $create__() {
  CssPositioning.$clinit();
  let $instance = new CssPositioning();
  $instance.$ctor__org_patternfly_overlay_CssPositioning__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_overlay_CssPositioning__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 static m_anchorNameSupported__boolean() {
  CssPositioning.$clinit();
  if ($Equality.$same(CssPositioning.f_supported__org_patternfly_overlay_CssPositioning_, null)) {
   CssPositioning.f_supported__org_patternfly_overlay_CssPositioning_ = goog.global.CSS.supports('anchor-name: --test');
  }
  return Boolean.m_booleanValue__java_lang_Boolean__boolean(CssPositioning.f_supported__org_patternfly_overlay_CssPositioning_);
 }
 /** @nodts @return {boolean} */
 static m_containerTypeAnchoredSupported__boolean() {
  CssPositioning.$clinit();
  if ($Equality.$same(CssPositioning.f_anchoredContainerSupported__org_patternfly_overlay_CssPositioning_, null)) {
   CssPositioning.f_anchoredContainerSupported__org_patternfly_overlay_CssPositioning_ = CssPositioning.m_anchorNameSupported__boolean() && goog.global.CSS.supports('container-type: anchored');
  }
  return Boolean.m_booleanValue__java_lang_Boolean__boolean(CssPositioning.f_anchoredContainerSupported__org_patternfly_overlay_CssPositioning_);
 }
 /** @nodts */
 static $clinit() {
  CssPositioning.$clinit = () =>{};
  CssPositioning.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CssPositioning;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
/**@type {?boolean} @nodts*/
CssPositioning.f_supported__org_patternfly_overlay_CssPositioning_;
/**@type {?boolean} @nodts*/
CssPositioning.f_anchoredContainerSupported__org_patternfly_overlay_CssPositioning_;
$Util.$setClassMetadata(CssPositioning, 'org.patternfly.overlay.CssPositioning');

exports = CssPositioning;

//# sourceMappingURL=CssPositioning.js.map
