goog.module('org.jboss.elemento.logger.Level$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Level>}
 */
class Level extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_label__org_jboss_elemento_logger_Level;
 }
 /** @nodts @return {!Level} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label) {
  let $instance = new Level();
  $instance.$ctor__org_jboss_elemento_logger_Level__java_lang_String__int__java_lang_String__void($name, $ordinal, label);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_logger_Level__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_label__org_jboss_elemento_logger_Level = label;
 }
 /** @nodts @return {!Level} */
 static m_valueOf__java_lang_String__org_jboss_elemento_logger_Level(/** string */ name) {
  Level.$clinit();
  if ($Equality.$same(Level.f_namesToValuesMap__org_jboss_elemento_logger_Level_, null)) {
   Level.f_namesToValuesMap__org_jboss_elemento_logger_Level_ = (/**@type {Map<?string, !Level>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Level.m_values__arrayOf_org_jboss_elemento_logger_Level())));
  }
  return /**@type {Level}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Level.f_namesToValuesMap__org_jboss_elemento_logger_Level_));
 }
 /** @nodts @return {!Array<!Level>} */
 static m_values__arrayOf_org_jboss_elemento_logger_Level() {
  Level.$clinit();
  return /**@type {!Array<!Level>}*/ ($Arrays.$stampType([Level.f_OFF__org_jboss_elemento_logger_Level, Level.f_ERROR__org_jboss_elemento_logger_Level, Level.f_WARN__org_jboss_elemento_logger_Level, Level.f_INFO__org_jboss_elemento_logger_Level, Level.f_DEBUG__org_jboss_elemento_logger_Level], Level));
 }
 /** @nodts */
 static $clinit() {
  Level.$clinit = () =>{};
  Level.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Level;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Level.$ordinal_OFF__org_jboss_elemento_logger_Level = 0;
/**@const {number} @nodts*/
Level.$ordinal_ERROR__org_jboss_elemento_logger_Level = 1;
/**@const {number} @nodts*/
Level.$ordinal_WARN__org_jboss_elemento_logger_Level = 2;
/**@const {number} @nodts*/
Level.$ordinal_INFO__org_jboss_elemento_logger_Level = 3;
/**@const {number} @nodts*/
Level.$ordinal_DEBUG__org_jboss_elemento_logger_Level = 4;
/**@const {!Level} @nodts*/
Level.f_OFF__org_jboss_elemento_logger_Level = /**@pureOrBreakMyCode*/ Level.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('OFF'), Level.$ordinal_OFF__org_jboss_elemento_logger_Level, 'OFF');
/**@const {!Level} @nodts*/
Level.f_ERROR__org_jboss_elemento_logger_Level = /**@pureOrBreakMyCode*/ Level.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ERROR'), Level.$ordinal_ERROR__org_jboss_elemento_logger_Level, 'ERROR');
/**@const {!Level} @nodts*/
Level.f_WARN__org_jboss_elemento_logger_Level = /**@pureOrBreakMyCode*/ Level.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('WARN'), Level.$ordinal_WARN__org_jboss_elemento_logger_Level, 'WARN ');
/**@const {!Level} @nodts*/
Level.f_INFO__org_jboss_elemento_logger_Level = /**@pureOrBreakMyCode*/ Level.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('INFO'), Level.$ordinal_INFO__org_jboss_elemento_logger_Level, 'INFO ');
/**@const {!Level} @nodts*/
Level.f_DEBUG__org_jboss_elemento_logger_Level = /**@pureOrBreakMyCode*/ Level.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('DEBUG'), Level.$ordinal_DEBUG__org_jboss_elemento_logger_Level, 'DEBUG');
/**@type {Map<?string, !Level>} @nodts*/
Level.f_namesToValuesMap__org_jboss_elemento_logger_Level_;
$Util.$setClassMetadataForEnum(Level, 'org.jboss.elemento.logger.Level');

exports = Level;

//# sourceMappingURL=Level.js.map
