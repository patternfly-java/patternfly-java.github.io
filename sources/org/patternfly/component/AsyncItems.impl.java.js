goog.module('org.patternfly.component.AsyncItems$impl');

const j_u_function_Function = goog.require('java.util.function.Function$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.AsyncItems.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, R
 * @extends {j_u_function_Function<T, Promise<Iterable<R>>>}
 */
class AsyncItems {
 /** @nodts @template T, R @return {!AsyncItems<T, R>} */
 static $adapt(/** ?function(T):Promise<Iterable<R>> */ fn) {
  AsyncItems.$clinit();
  return /**@type {!$LambdaAdaptor<T, R>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  AsyncItems.$clinit = () =>{};
  AsyncItems.$loadModules();
  j_u_function_Function.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  j_u_function_Function.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_AsyncItems = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_AsyncItems;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.AsyncItems.$LambdaAdaptor$impl');
 }
}
AsyncItems.$markImplementor(/**@type {Function}*/ (AsyncItems));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (AsyncItems), 'org.patternfly.component.AsyncItems');

exports = AsyncItems;

//# sourceMappingURL=AsyncItems.js.map
