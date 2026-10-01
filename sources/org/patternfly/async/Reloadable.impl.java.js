goog.module('org.patternfly.async.Reloadable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ReloadStrategy = goog.forwardDeclare('org.patternfly.async.ReloadStrategy$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.async.Reloadable.$LambdaAdaptor$impl');

/**
 * @interface
 * @template B
 */
class Reloadable {
 /** @abstract @nodts @return {B} */
 m_reloadOn__org_patternfly_async_ReloadStrategy__java_lang_Object(/** ReloadStrategy */ strategy) {}
 /** @nodts @template B @return {!Reloadable<B>} */
 static $adapt(/** ?function(ReloadStrategy):B */ fn) {
  Reloadable.$clinit();
  return /**@type {!$LambdaAdaptor<B>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Reloadable.$clinit = () =>{};
  Reloadable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_async_Reloadable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_async_Reloadable;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.async.Reloadable.$LambdaAdaptor$impl');
 }
}
Reloadable.$markImplementor(/**@type {Function}*/ (Reloadable));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Reloadable), 'org.patternfly.async.Reloadable');

exports = Reloadable;

//# sourceMappingURL=Reloadable.js.map
