goog.module('elemental2.core.SuppressedError.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SuppressedError;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'SuppressedError');

exports = $Overlay;

//# sourceMappingURL=SuppressedError$$Overlay.js.map
