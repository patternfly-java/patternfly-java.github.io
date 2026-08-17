goog.module('org.patternfly.handler.OverlayHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const OverlayHandler = goog.require('org.patternfly.handler.OverlayHandler$impl');

/**
 * @implements {OverlayHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, boolean):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, boolean):void} @nodts*/
  this.f_fn__org_patternfly_handler_OverlayHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_OverlayHandler_$LambdaAdaptor__org_patternfly_handler_OverlayHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_OverlayHandler_$LambdaAdaptor__org_patternfly_handler_OverlayHandler_$JsFunction__void(/** ?function(Event, boolean):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_OverlayHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_handle__elemental2_dom_Event__boolean__void(/** Event */ arg0, /** boolean */ arg1) {
  {
   let $function = this.f_fn__org_patternfly_handler_OverlayHandler_$LambdaAdaptor;
   $function(arg0, arg1);
  }
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
OverlayHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.OverlayHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=OverlayHandler$$LambdaAdaptor.js.map
