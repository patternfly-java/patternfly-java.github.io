goog.module('org.jboss.elemento.intl.TimeZoneName$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<TimeZoneName>}
 */
class TimeZoneName extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_TimeZoneName;
 }
 /** @nodts @return {!TimeZoneName} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TimeZoneName();
  $instance.$ctor__org_jboss_elemento_intl_TimeZoneName__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_TimeZoneName__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_TimeZoneName = value;
 }
 /** @nodts @return {!TimeZoneName} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_TimeZoneName(/** string */ name) {
  TimeZoneName.$clinit();
  if ($Equality.$same(TimeZoneName.f_namesToValuesMap__org_jboss_elemento_intl_TimeZoneName_, null)) {
   TimeZoneName.f_namesToValuesMap__org_jboss_elemento_intl_TimeZoneName_ = (/**@type {Map<?string, !TimeZoneName>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(TimeZoneName.m_values__arrayOf_org_jboss_elemento_intl_TimeZoneName())));
  }
  return /**@type {TimeZoneName}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, TimeZoneName.f_namesToValuesMap__org_jboss_elemento_intl_TimeZoneName_));
 }
 /** @nodts @return {!Array<!TimeZoneName>} */
 static m_values__arrayOf_org_jboss_elemento_intl_TimeZoneName() {
  TimeZoneName.$clinit();
  return /**@type {!Array<!TimeZoneName>}*/ ($Arrays.$stampType([TimeZoneName.f_longGeneric__org_jboss_elemento_intl_TimeZoneName, TimeZoneName.f_longOffset__org_jboss_elemento_intl_TimeZoneName, TimeZoneName.f_long___org_jboss_elemento_intl_TimeZoneName, TimeZoneName.f_shortGeneric__org_jboss_elemento_intl_TimeZoneName, TimeZoneName.f_shortOffset__org_jboss_elemento_intl_TimeZoneName, TimeZoneName.f_short___org_jboss_elemento_intl_TimeZoneName], TimeZoneName));
 }
 /** @nodts */
 static $clinit() {
  TimeZoneName.$clinit = () =>{};
  TimeZoneName.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeZoneName;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
TimeZoneName.$ordinal_longGeneric__org_jboss_elemento_intl_TimeZoneName = 0;
/**@const {number} @nodts*/
TimeZoneName.$ordinal_longOffset__org_jboss_elemento_intl_TimeZoneName = 1;
/**@const {number} @nodts*/
TimeZoneName.$ordinal_long___org_jboss_elemento_intl_TimeZoneName = 2;
/**@const {number} @nodts*/
TimeZoneName.$ordinal_shortGeneric__org_jboss_elemento_intl_TimeZoneName = 3;
/**@const {number} @nodts*/
TimeZoneName.$ordinal_shortOffset__org_jboss_elemento_intl_TimeZoneName = 4;
/**@const {number} @nodts*/
TimeZoneName.$ordinal_short___org_jboss_elemento_intl_TimeZoneName = 5;
/**@const {!TimeZoneName} @nodts*/
TimeZoneName.f_longGeneric__org_jboss_elemento_intl_TimeZoneName = /**@pureOrBreakMyCode*/ TimeZoneName.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('longGeneric'), TimeZoneName.$ordinal_longGeneric__org_jboss_elemento_intl_TimeZoneName, 'longGeneric');
/**@const {!TimeZoneName} @nodts*/
TimeZoneName.f_longOffset__org_jboss_elemento_intl_TimeZoneName = /**@pureOrBreakMyCode*/ TimeZoneName.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('longOffset'), TimeZoneName.$ordinal_longOffset__org_jboss_elemento_intl_TimeZoneName, 'longOffset');
/**@const {!TimeZoneName} @nodts*/
TimeZoneName.f_long___org_jboss_elemento_intl_TimeZoneName = /**@pureOrBreakMyCode*/ TimeZoneName.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('long_'), TimeZoneName.$ordinal_long___org_jboss_elemento_intl_TimeZoneName, 'long');
/**@const {!TimeZoneName} @nodts*/
TimeZoneName.f_shortGeneric__org_jboss_elemento_intl_TimeZoneName = /**@pureOrBreakMyCode*/ TimeZoneName.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('shortGeneric'), TimeZoneName.$ordinal_shortGeneric__org_jboss_elemento_intl_TimeZoneName, 'shortGeneric');
/**@const {!TimeZoneName} @nodts*/
TimeZoneName.f_shortOffset__org_jboss_elemento_intl_TimeZoneName = /**@pureOrBreakMyCode*/ TimeZoneName.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('shortOffset'), TimeZoneName.$ordinal_shortOffset__org_jboss_elemento_intl_TimeZoneName, 'shortOffset');
/**@const {!TimeZoneName} @nodts*/
TimeZoneName.f_short___org_jboss_elemento_intl_TimeZoneName = /**@pureOrBreakMyCode*/ TimeZoneName.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('short_'), TimeZoneName.$ordinal_short___org_jboss_elemento_intl_TimeZoneName, 'short');
/**@type {Map<?string, !TimeZoneName>} @nodts*/
TimeZoneName.f_namesToValuesMap__org_jboss_elemento_intl_TimeZoneName_;
$Util.$setClassMetadataForEnum(TimeZoneName, 'org.jboss.elemento.intl.TimeZoneName');

exports = TimeZoneName;

//# sourceMappingURL=TimeZoneName.js.map
