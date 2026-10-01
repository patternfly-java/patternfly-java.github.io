goog.module('org.patternfly.async.ReloadStrategy$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BiPredicate = goog.forwardDeclare('java.util.function.BiPredicate$impl');

class ReloadStrategy extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_debounceMs__org_patternfly_async_ReloadStrategy_ = 0;
  /**@type {BiPredicate<?string, ?string>} @nodts*/
  this.f_predicate__org_patternfly_async_ReloadStrategy_;
 }
 /** @nodts @return {!ReloadStrategy} */
 static $create__int__java_util_function_BiPredicate(/** number */ debounceMs, /** BiPredicate<?string, ?string> */ predicate) {
  let $instance = new ReloadStrategy();
  $instance.$ctor__org_patternfly_async_ReloadStrategy__int__java_util_function_BiPredicate__void(debounceMs, predicate);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_async_ReloadStrategy__int__java_util_function_BiPredicate__void(/** number */ debounceMs, /** BiPredicate<?string, ?string> */ predicate) {
  this.$ctor__java_lang_Object__void();
  this.f_debounceMs__org_patternfly_async_ReloadStrategy_ = debounceMs;
  this.f_predicate__org_patternfly_async_ReloadStrategy_ = predicate;
 }
 /** @nodts @return {ReloadStrategy} */
 static m_everyInput__int__org_patternfly_async_ReloadStrategy(/** number */ debounceMs) {
  ReloadStrategy.$clinit();
  return ReloadStrategy.$create__int__java_util_function_BiPredicate(debounceMs, null);
 }
 /** @nodts @return {ReloadStrategy} */
 static m_structuralChange__java_util_function_BiPredicate__org_patternfly_async_ReloadStrategy(/** BiPredicate<?string, ?string> */ predicate) {
  ReloadStrategy.$clinit();
  return ReloadStrategy.$create__int__java_util_function_BiPredicate(0, predicate);
 }
 /** @nodts @return {number} */
 m_debounceMs__int() {
  return this.f_debounceMs__org_patternfly_async_ReloadStrategy_;
 }
 /** @nodts @return {BiPredicate<?string, ?string>} */
 m_predicate__java_util_function_BiPredicate() {
  return this.f_predicate__org_patternfly_async_ReloadStrategy_;
 }
 /** @nodts */
 static $clinit() {
  ReloadStrategy.$clinit = () =>{};
  ReloadStrategy.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ReloadStrategy;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ReloadStrategy, 'org.patternfly.async.ReloadStrategy');

exports = ReloadStrategy;

//# sourceMappingURL=ReloadStrategy.js.map
