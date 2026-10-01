goog.module('org.patternfly.chart.Threshold.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Object} */
 static m_threshold__double__org_patternfly_chart_Threshold(/** number */ value) {
  $Overlay.$clinit();
  let threshold = new Object();
  threshold.value = value;
  return threshold;
 }
 /** @nodts @return {Object} */
 static m_threshold__double__java_lang_String__org_patternfly_chart_Threshold(/** number */ value, /** ?string */ color) {
  $Overlay.$clinit();
  let threshold = new Object();
  threshold.value = value;
  threshold.color = color;
  return threshold;
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
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=Threshold$$Overlay.js.map
