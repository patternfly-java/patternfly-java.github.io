goog.module('org.patternfly.component.AsyncItems.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AsyncItems = goog.require('org.patternfly.component.AsyncItems$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');

/**
 * @template T, R
 * @implements {AsyncItems<T, R>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T):Promise<Iterable<R>> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):Promise<Iterable<R>>} @nodts*/
  this.f_fn__org_patternfly_component_AsyncItems_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_AsyncItems_$LambdaAdaptor__org_patternfly_component_AsyncItems_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_AsyncItems_$LambdaAdaptor__org_patternfly_component_AsyncItems_$JsFunction__void(/** ?function(T):Promise<Iterable<R>> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_AsyncItems_$LambdaAdaptor = fn;
 }
 /** @nodts @return {Promise<Iterable<R>>} */
 m_apply__java_lang_Object__elemental2_promise_Promise(/** T */ arg0) {
  let /** ?function(T):Promise<Iterable<R>> */ $function;
  return ($function = this.f_fn__org_patternfly_component_AsyncItems_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @final @override @nodts @return {Promise<Iterable<R>>} */
 m_apply__java_lang_Object__java_lang_Object(/** T */ arg0) {
  return this.m_apply__java_lang_Object__elemental2_promise_Promise(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {j_u_function_Function<T, V>} */
 m_andThen__java_util_function_Function__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {j_u_function_Function<T, V>}*/ (j_u_function_Function.m_andThen__$default__java_util_function_Function__java_util_function_Function__java_util_function_Function(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {j_u_function_Function<V, Promise<Iterable<R>>>} */
 m_compose__java_util_function_Function__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {j_u_function_Function<V, Promise<Iterable<R>>>}*/ (j_u_function_Function.m_compose__$default__java_util_function_Function__java_util_function_Function__java_util_function_Function(this, arg0));
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  j_u_function_Function.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
 }
}
AsyncItems.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.AsyncItems$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=AsyncItems$$LambdaAdaptor.js.map
