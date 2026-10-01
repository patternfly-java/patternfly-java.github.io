goog.module('org.jboss.elemento.intl.HourCycle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<HourCycle>}
 */
class HourCycle extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_HourCycle;
 }
 /** @nodts @return {!HourCycle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new HourCycle();
  $instance.$ctor__org_jboss_elemento_intl_HourCycle__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_HourCycle__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_HourCycle = value;
 }
 /** @nodts @return {!HourCycle} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_HourCycle(/** string */ name) {
  HourCycle.$clinit();
  if ($Equality.$same(HourCycle.f_namesToValuesMap__org_jboss_elemento_intl_HourCycle_, null)) {
   HourCycle.f_namesToValuesMap__org_jboss_elemento_intl_HourCycle_ = (/**@type {Map<?string, !HourCycle>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(HourCycle.m_values__arrayOf_org_jboss_elemento_intl_HourCycle())));
  }
  return /**@type {HourCycle}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, HourCycle.f_namesToValuesMap__org_jboss_elemento_intl_HourCycle_));
 }
 /** @nodts @return {!Array<!HourCycle>} */
 static m_values__arrayOf_org_jboss_elemento_intl_HourCycle() {
  HourCycle.$clinit();
  return /**@type {!Array<!HourCycle>}*/ ($Arrays.$stampType([HourCycle.f_h11__org_jboss_elemento_intl_HourCycle, HourCycle.f_h12__org_jboss_elemento_intl_HourCycle, HourCycle.f_h23__org_jboss_elemento_intl_HourCycle, HourCycle.f_h24__org_jboss_elemento_intl_HourCycle], HourCycle));
 }
 /** @nodts */
 static $clinit() {
  HourCycle.$clinit = () =>{};
  HourCycle.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HourCycle;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
HourCycle.$ordinal_h11__org_jboss_elemento_intl_HourCycle = 0;
/**@const {number} @nodts*/
HourCycle.$ordinal_h12__org_jboss_elemento_intl_HourCycle = 1;
/**@const {number} @nodts*/
HourCycle.$ordinal_h23__org_jboss_elemento_intl_HourCycle = 2;
/**@const {number} @nodts*/
HourCycle.$ordinal_h24__org_jboss_elemento_intl_HourCycle = 3;
/**@const {!HourCycle} @nodts*/
HourCycle.f_h11__org_jboss_elemento_intl_HourCycle = /**@pureOrBreakMyCode*/ HourCycle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('h11'), HourCycle.$ordinal_h11__org_jboss_elemento_intl_HourCycle, 'h11');
/**@const {!HourCycle} @nodts*/
HourCycle.f_h12__org_jboss_elemento_intl_HourCycle = /**@pureOrBreakMyCode*/ HourCycle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('h12'), HourCycle.$ordinal_h12__org_jboss_elemento_intl_HourCycle, 'h12');
/**@const {!HourCycle} @nodts*/
HourCycle.f_h23__org_jboss_elemento_intl_HourCycle = /**@pureOrBreakMyCode*/ HourCycle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('h23'), HourCycle.$ordinal_h23__org_jboss_elemento_intl_HourCycle, 'h23');
/**@const {!HourCycle} @nodts*/
HourCycle.f_h24__org_jboss_elemento_intl_HourCycle = /**@pureOrBreakMyCode*/ HourCycle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('h24'), HourCycle.$ordinal_h24__org_jboss_elemento_intl_HourCycle, 'h24');
/**@type {Map<?string, !HourCycle>} @nodts*/
HourCycle.f_namesToValuesMap__org_jboss_elemento_intl_HourCycle_;
$Util.$setClassMetadataForEnum(HourCycle, 'org.jboss.elemento.intl.HourCycle');

exports = HourCycle;

//# sourceMappingURL=HourCycle.js.map
