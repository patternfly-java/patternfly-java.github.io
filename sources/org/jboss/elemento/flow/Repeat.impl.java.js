goog.module('org.jboss.elemento.flow.Repeat$impl');

const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Promisable = goog.require('org.jboss.elemento.flow.Promisable$impl');
const Subscription = goog.require('org.jboss.elemento.flow.Subscription$impl');

let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');

/**
 * @interface
 * @template C
 * @extends {Promisable<C>}
 * @extends {Subscription<C>}
 */
class Repeat {
 /** @abstract @nodts @return {Repeat<C>} */
 m_while___java_util_function_Predicate__org_jboss_elemento_flow_Repeat(/** Predicate<C> */ predicate) {}
 /** @abstract @nodts @return {Repeat<C>} */
 m_failFast__boolean__org_jboss_elemento_flow_Repeat(/** boolean */ failFast) {}
 /** @abstract @nodts @return {Repeat<C>} */
 m_interval__long__org_jboss_elemento_flow_Repeat(/** !$Long */ interval) {}
 /** @abstract @nodts @return {Repeat<C>} */
 m_timeout__long__org_jboss_elemento_flow_Repeat(/** !$Long */ timeout) {}
 /** @abstract @nodts @return {Repeat<C>} */
 m_iterations__int__org_jboss_elemento_flow_Repeat(/** number */ iterations) {}
 /** @nodts */
 static $clinit() {
  Repeat.$clinit = () =>{};
  Repeat.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Promisable.$markImplementor(ctor);
  Subscription.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_flow_Repeat = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_flow_Repeat;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {boolean} @nodts*/
Repeat.f_DEFAULT_FAIL_FAST__org_jboss_elemento_flow_Repeat = true;
/**@const {!$Long} @nodts*/
Repeat.f_DEFAULT_INTERVAL__org_jboss_elemento_flow_Repeat = $Long.fromInt(0);
/**@const {!$Long} @nodts*/
Repeat.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Repeat = $Long.fromInt(10000);
/**@const {number} @nodts*/
Repeat.f_DEFAULT_ITERATIONS__org_jboss_elemento_flow_Repeat = -1;
Repeat.$markImplementor(/**@type {Function}*/ (Repeat));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Repeat), 'org.jboss.elemento.flow.Repeat');

exports = Repeat;

//# sourceMappingURL=Repeat.js.map
