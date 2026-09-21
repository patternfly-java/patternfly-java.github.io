goog.module('org.jboss.elemento.flow.Progress$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $1 = goog.forwardDeclare('org.jboss.elemento.flow.Progress.$1$impl');

/**
 * @interface
 */
class Progress {
 /** @abstract @nodts */
 m_reset__void() {}
 /** @abstract @nodts */
 m_reset__int__void(/** number */ max) {}
 /** @abstract @nodts */
 m_reset__int__java_lang_String__void(/** number */ max, /** ?string */ label) {}
 /** @abstract @nodts */
 m_tick__void() {}
 /** @abstract @nodts */
 m_tick__java_lang_String__void(/** ?string */ label) {}
 /** @abstract @nodts */
 m_finish__void() {}
 /** @nodts */
 static m_reset__$default__org_jboss_elemento_flow_Progress__int__void(/** !Progress */ $thisArg, /** number */ max) {
  Progress.$clinit();
  $thisArg.m_reset__int__java_lang_String__void(max, null);
 }
 /** @nodts */
 static m_tick__$default__org_jboss_elemento_flow_Progress__void(/** !Progress */ $thisArg) {
  Progress.$clinit();
  $thisArg.m_tick__java_lang_String__void(null);
 }
 /** @nodts @return {Progress} */
 static get f_NOOP__org_jboss_elemento_flow_Progress() {
  return (Progress.$clinit(), Progress.$static_NOOP__org_jboss_elemento_flow_Progress);
 }
 /** @nodts */
 static $clinit() {
  Progress.$clinit = () =>{};
  Progress.$loadModules();
  Progress.$static_NOOP__org_jboss_elemento_flow_Progress = $1.$create__();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_flow_Progress = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_flow_Progress;
 }
 
 /** @nodts */
 static $loadModules() {
  $1 = goog.module.get('org.jboss.elemento.flow.Progress.$1$impl');
 }
}
/**@private {Progress} @nodts*/
Progress.$static_NOOP__org_jboss_elemento_flow_Progress;
Progress.$markImplementor(/**@type {Function}*/ (Progress));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Progress), 'org.jboss.elemento.flow.Progress');

exports = Progress;

//# sourceMappingURL=Progress.js.map
