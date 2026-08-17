goog.module('org.patternfly.chart.bullet.BulletData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Object} */
 static m_bulletData__java_lang_String__double__org_patternfly_chart_bullet_BulletData(/** ?string */ name, /** number */ y) {
  $Overlay.$clinit();
  let data = new Object();
  data.name = name;
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

//# sourceMappingURL=BulletData$$Overlay.js.map
