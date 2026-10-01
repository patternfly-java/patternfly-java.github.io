goog.module('org.jboss.elemento.flow.Sequence$impl');

const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Promisable = goog.require('org.jboss.elemento.flow.Promisable$impl');
const Subscription = goog.require('org.jboss.elemento.flow.Subscription$impl');

let FlowContext = goog.forwardDeclare('org.jboss.elemento.flow.FlowContext$impl');

/**
 * @interface
 * @template C
 * @extends {Promisable<C>}
 * @extends {Subscription<C>}
 */
class Sequence {
 /** @abstract @nodts @return {Sequence<C>} */
 m_failFast__boolean__org_jboss_elemento_flow_Sequence(/** boolean */ failFast) {}
 /** @abstract @nodts @return {Sequence<C>} */
 m_timeout__long__org_jboss_elemento_flow_Sequence(/** !$Long */ timeout) {}
 /** @nodts */
 static $clinit() {
  Sequence.$clinit = () =>{};
  Sequence.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Promisable.$markImplementor(ctor);
  Subscription.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_flow_Sequence = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_flow_Sequence;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {boolean} @nodts*/
Sequence.f_DEFAULT_FAIL_FAST__org_jboss_elemento_flow_Sequence = true;
/**@const {!$Long} @nodts*/
Sequence.f_DEFAULT_TIMEOUT__org_jboss_elemento_flow_Sequence = $Long.fromInt(-1);
Sequence.$markImplementor(/**@type {Function}*/ (Sequence));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Sequence), 'org.jboss.elemento.flow.Sequence');

exports = Sequence;

//# sourceMappingURL=Sequence.js.map
