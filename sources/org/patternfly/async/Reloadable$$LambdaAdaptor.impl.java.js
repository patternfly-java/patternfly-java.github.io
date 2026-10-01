goog.module('org.patternfly.async.Reloadable.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Reloadable = goog.require('org.patternfly.async.Reloadable$impl');

let ReloadStrategy = goog.forwardDeclare('org.patternfly.async.ReloadStrategy$impl');

/**
 * @template B
 * @implements {Reloadable<B>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(ReloadStrategy):B */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ReloadStrategy):B} @nodts*/
  this.f_fn__org_patternfly_async_Reloadable_$LambdaAdaptor;
  this.$ctor__org_patternfly_async_Reloadable_$LambdaAdaptor__org_patternfly_async_Reloadable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_async_Reloadable_$LambdaAdaptor__org_patternfly_async_Reloadable_$JsFunction__void(/** ?function(ReloadStrategy):B */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_async_Reloadable_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {B} */
 m_reloadOn__org_patternfly_async_ReloadStrategy__java_lang_Object(/** ReloadStrategy */ arg0) {
  let /** ?function(ReloadStrategy):B */ $function;
  return ($function = this.f_fn__org_patternfly_async_Reloadable_$LambdaAdaptor, $function(arg0));
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
Reloadable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.async.Reloadable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Reloadable$$LambdaAdaptor.js.map
