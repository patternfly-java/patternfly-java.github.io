goog.module('org.patternfly.chart.Padding.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Object} */
 static m_padding__double__double__double__double__org_patternfly_chart_Padding(/** number */ top, /** number */ right, /** number */ bottom, /** number */ left) {
  $Overlay.$clinit();
  let padding = new Object();
  padding.top = top;
  padding.right = right;
  padding.bottom = bottom;
  padding.left = left;
  return padding;
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

//# sourceMappingURL=Padding$$Overlay.js.map
