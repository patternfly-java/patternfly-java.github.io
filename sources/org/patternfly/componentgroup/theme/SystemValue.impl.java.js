goog.module('org.patternfly.componentgroup.theme.SystemValue$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class SystemValue {
 /** @abstract @nodts @return {boolean} */
 m_systemValue__boolean() {}
 /** @nodts @return {boolean} */
 static m_systemValue__$default__org_patternfly_componentgroup_theme_SystemValue__boolean(/** !SystemValue */ $thisArg) {
  SystemValue.$clinit();
  return false;
 }
 /** @nodts */
 static $clinit() {
  SystemValue.$clinit = () =>{};
  SystemValue.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_componentgroup_theme_SystemValue = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_componentgroup_theme_SystemValue;
 }
 
 /** @nodts */
 static $loadModules() {}
}
SystemValue.$markImplementor(/**@type {Function}*/ (SystemValue));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (SystemValue), 'org.patternfly.componentgroup.theme.SystemValue');

exports = SystemValue;

//# sourceMappingURL=SystemValue.js.map
