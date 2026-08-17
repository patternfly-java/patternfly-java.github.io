goog.module('org.patternfly.chart.Data.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Object} */
 static m_data__java_lang_String__double__org_patternfly_chart_Data(/** ?string */ x, /** number */ y) {
  $Overlay.$clinit();
  let data = new Object();
  data.x = x;
  data.y = y;
  return data;
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

//# sourceMappingURL=Data$$Overlay.js.map
