goog.module('org.patternfly.core.Validation$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class Validation extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Validation} */
 static $create__() {
  Validation.$clinit();
  let $instance = new Validation();
  $instance.$ctor__org_patternfly_core_Validation__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Validation__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 static m_verifyRange__elemental2_dom_Element__java_lang_String__int__int__int__boolean(/** Element */ element, /** ?string */ property, /** number */ value, /** number */ min, /** number */ max) {
  Validation.$clinit();
  if (value < min || value > max) {
   Validation.f_logger__org_patternfly_core_Validation_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('\'%s\' in element %o out of range. Given: %d, allowed [%d,%d].', [property, element, Integer.valueOf(value), Integer.valueOf(min), Integer.valueOf(max)]);
   return false;
  }
  return true;
 }
 /** @nodts @template E @return {boolean} */
 static m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(/** Element */ element, /** ?string */ property, /** E */ value, /** E */ firstAllowedValue, /** Array<E> */ otherAllowedValues) {
  Validation.$clinit();
  let allowed = /**@type {EnumSet<E>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(firstAllowedValue, otherAllowedValues));
  if (!allowed.contains(value)) {
   Validation.f_logger__org_patternfly_core_Validation_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Unsupported value for \'%s\' in element %o. Given: %s, allowed %s.', [property, element, (/**@type {!Enum<E>}*/ (value)).name(), /**@type {?string}*/ ($Casts.$to((/**@type {Stream<?string>}*/ (allowed.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** E */ arg0) =>{
    let arg0_1 = /**@type {E}*/ ($Casts.$to(arg0, Enum));
    return (/**@type {!Enum<Enum>}*/ (arg0_1)).name();
   }))))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(', ')), j_l_String))]);
   return false;
  }
  return true;
 }
 /** @nodts */
 static $clinit() {
  Validation.$clinit = () =>{};
  Validation.$loadModules();
  j_l_Object.$clinit();
  Validation.f_logger__org_patternfly_core_Validation_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Validation).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Validation;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Enum = goog.module.get('java.lang.Enum$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Validation.f_logger__org_patternfly_core_Validation_;
$Util.$setClassMetadata(Validation, 'org.patternfly.core.Validation');

exports = Validation;

//# sourceMappingURL=Validation.js.map
