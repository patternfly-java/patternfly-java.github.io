goog.module('org.jboss.elemento.flow.Progress.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Progress = goog.require('org.jboss.elemento.flow.Progress$impl');

/**
 * @implements {Progress}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$1} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_jboss_elemento_flow_Progress_1__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_Progress_1__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts */
 m_reset__void() {}
 /** @override @nodts */
 m_reset__int__java_lang_String__void(/** number */ max, /** ?string */ label) {}
 /** @override @nodts */
 m_tick__java_lang_String__void(/** ?string */ label) {}
 /** @override @nodts */
 m_finish__void() {}
 //Default method forwarding stub.
 /** @override @nodts */
 m_reset__int__void(/** number */ arg0) {
  Progress.m_reset__$default__org_jboss_elemento_flow_Progress__int__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_tick__void() {
  Progress.m_tick__$default__org_jboss_elemento_flow_Progress__void(this);
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Progress.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Progress.$markImplementor($1);
$Util.$setClassMetadata($1, 'org.jboss.elemento.flow.Progress$1');

exports = $1;

//# sourceMappingURL=Progress$1.js.map
