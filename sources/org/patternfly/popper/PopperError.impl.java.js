goog.module('org.patternfly.popper.PopperError$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Popper = goog.require('org.patternfly.popper.Popper$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');

/**
 * @implements {Popper}
 * @deprecated
 */
class PopperError extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_category__org_patternfly_popper_PopperError_;
 }
 /** @nodts @return {!PopperError} */
 static $create__java_lang_String(/** ?string */ category) {
  PopperError.$clinit();
  let $instance = new PopperError();
  $instance.$ctor__org_patternfly_popper_PopperError__java_lang_String__void(category);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_popper_PopperError__java_lang_String__void(/** ?string */ category) {
  this.$ctor__java_lang_Object__void();
  this.f_category__org_patternfly_popper_PopperError_ = category;
 }
 /** @override @nodts @return {Promise<Object>} */
 m_update__elemental2_promise_Promise() {
  PopperError.f_logger__org_patternfly_popper_PopperError_.m_error__java_lang_String__arrayOf_java_lang_Object__void(PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_, []);
  return null;
 }
 /** @override @nodts */
 m_show__org_jboss_elemento_Callback__void(/** Callback */ visible) {
  PopperError.f_logger__org_patternfly_popper_PopperError_.m_error__java_lang_String__arrayOf_java_lang_Object__void(PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_, []);
 }
 /** @override @nodts */
 m_hide__org_jboss_elemento_Callback__void(/** Callback */ hidden) {
  PopperError.f_logger__org_patternfly_popper_PopperError_.m_error__java_lang_String__arrayOf_java_lang_Object__void(PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_, []);
 }
 /** @override @nodts */
 m_cleanup__void() {
  PopperError.f_logger__org_patternfly_popper_PopperError_.m_error__java_lang_String__arrayOf_java_lang_Object__void(PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_, []);
 }
 /** @nodts */
 static $clinit() {
  PopperError.$clinit = () =>{};
  PopperError.$loadModules();
  j_l_Object.$clinit();
  PopperError.f_logger__org_patternfly_popper_PopperError_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(PopperError).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperError;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
 }
}
/**@type {Logger} @nodts*/
PopperError.f_logger__org_patternfly_popper_PopperError_;
/**@const {string} @nodts*/
PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_ = 'Unable to create popper: \'Popper.createPopper\' is undefined.';
Popper.$markImplementor(PopperError);
$Util.$setClassMetadata(PopperError, 'org.patternfly.popper.PopperError');

exports = PopperError;

//# sourceMappingURL=PopperError.js.map
