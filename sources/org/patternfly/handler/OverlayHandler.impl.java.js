goog.module('org.patternfly.handler.OverlayHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.OverlayHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class OverlayHandler {
 /** @abstract @nodts */
 m_handle__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ open) {}
 /** @nodts @return {!OverlayHandler} */
 static $adapt(/** ?function(Event, boolean):void */ fn) {
  OverlayHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  OverlayHandler.$clinit = () =>{};
  OverlayHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_OverlayHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_OverlayHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.OverlayHandler.$LambdaAdaptor$impl');
 }
}
OverlayHandler.$markImplementor(/**@type {Function}*/ (OverlayHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (OverlayHandler), 'org.patternfly.handler.OverlayHandler');

exports = OverlayHandler;

//# sourceMappingURL=OverlayHandler.js.map
