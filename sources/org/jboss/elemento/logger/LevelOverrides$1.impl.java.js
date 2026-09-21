goog.module('org.jboss.elemento.logger.LevelOverrides.$1$impl');

const HashMap = goog.require('java.util.HashMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Level = goog.forwardDeclare('org.jboss.elemento.logger.Level$impl');
let LevelOverrides = goog.forwardDeclare('org.jboss.elemento.logger.LevelOverrides$impl');

/**
 * @extends {HashMap<?string, Level>}
 */
class $1 extends HashMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!LevelOverrides} @nodts*/
  this.$outer_this__org_jboss_elemento_logger_LevelOverrides_1;
 }
 /** @nodts @return {!$1} */
 static $create__org_jboss_elemento_logger_LevelOverrides(/** !LevelOverrides */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_jboss_elemento_logger_LevelOverrides_1__org_jboss_elemento_logger_LevelOverrides__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_logger_LevelOverrides_1__org_jboss_elemento_logger_LevelOverrides__void(/** !LevelOverrides */ $outer_this) {
  this.$outer_this__org_jboss_elemento_logger_LevelOverrides_1 = $outer_this;
  this.$ctor__java_util_HashMap__void();
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  HashMap.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'org.jboss.elemento.logger.LevelOverrides$1');

exports = $1;

//# sourceMappingURL=LevelOverrides$1.js.map
