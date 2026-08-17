goog.module('org.jboss.elemento.intl.Intl.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Category = goog.forwardDeclare('org.jboss.elemento.intl.Category$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Array<?string>} */
 static m_supportedValuesOf__org_jboss_elemento_intl_Category__elemental2_core_JsArray(/** Category */ category) {
  $Overlay.$clinit();
  return Intl.supportedValuesOf(category.f_value__org_jboss_elemento_intl_Category);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Intl;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'Intl');

exports = $Overlay;

//# sourceMappingURL=Intl$$Overlay.js.map
