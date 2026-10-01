goog.module('org.patternfly.core.Timeouts$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Timeouts {
 /** @nodts */
 static $clinit() {
  Timeouts.$clinit = () =>{};
  Timeouts.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_Timeouts = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Timeouts;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {number} @nodts*/
Timeouts.f_LOADING_TIMEOUT__org_patternfly_core_Timeouts = 222;
/**@const {number} @nodts*/
Timeouts.f_TOAST_TIMEOUT__org_patternfly_core_Timeouts = 8000;
Timeouts.$markImplementor(/**@type {Function}*/ (Timeouts));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Timeouts), 'org.patternfly.core.Timeouts');

exports = Timeouts;

//# sourceMappingURL=Timeouts.js.map
