goog.module('org.jboss.elemento.intl.Grouping$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Grouping>}
 */
class Grouping extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Grouping;
 }
 /** @nodts @return {!Grouping} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Grouping();
  $instance.$ctor__org_jboss_elemento_intl_Grouping__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Grouping__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Grouping = value;
 }
 /** @nodts @return {!Grouping} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Grouping(/** string */ name) {
  Grouping.$clinit();
  if ($Equality.$same(Grouping.f_namesToValuesMap__org_jboss_elemento_intl_Grouping_, null)) {
   Grouping.f_namesToValuesMap__org_jboss_elemento_intl_Grouping_ = (/**@type {Map<?string, !Grouping>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Grouping.m_values__arrayOf_org_jboss_elemento_intl_Grouping())));
  }
  return /**@type {Grouping}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Grouping.f_namesToValuesMap__org_jboss_elemento_intl_Grouping_));
 }
 /** @nodts @return {!Array<!Grouping>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Grouping() {
  Grouping.$clinit();
  return /**@type {!Array<!Grouping>}*/ ($Arrays.$stampType([Grouping.f_conjunction__org_jboss_elemento_intl_Grouping, Grouping.f_disjunction__org_jboss_elemento_intl_Grouping, Grouping.f_unit__org_jboss_elemento_intl_Grouping], Grouping));
 }
 /** @nodts */
 static $clinit() {
  Grouping.$clinit = () =>{};
  Grouping.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Grouping;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Grouping.$ordinal_conjunction__org_jboss_elemento_intl_Grouping = 0;
/**@const {number} @nodts*/
Grouping.$ordinal_disjunction__org_jboss_elemento_intl_Grouping = 1;
/**@const {number} @nodts*/
Grouping.$ordinal_unit__org_jboss_elemento_intl_Grouping = 2;
/**@const {!Grouping} @nodts*/
Grouping.f_conjunction__org_jboss_elemento_intl_Grouping = /**@pureOrBreakMyCode*/ Grouping.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('conjunction'), Grouping.$ordinal_conjunction__org_jboss_elemento_intl_Grouping, 'conjunction');
/**@const {!Grouping} @nodts*/
Grouping.f_disjunction__org_jboss_elemento_intl_Grouping = /**@pureOrBreakMyCode*/ Grouping.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('disjunction'), Grouping.$ordinal_disjunction__org_jboss_elemento_intl_Grouping, 'disjunction');
/**@const {!Grouping} @nodts*/
Grouping.f_unit__org_jboss_elemento_intl_Grouping = /**@pureOrBreakMyCode*/ Grouping.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('unit'), Grouping.$ordinal_unit__org_jboss_elemento_intl_Grouping, 'unit');
/**@type {Map<?string, !Grouping>} @nodts*/
Grouping.f_namesToValuesMap__org_jboss_elemento_intl_Grouping_;
$Util.$setClassMetadataForEnum(Grouping, 'org.jboss.elemento.intl.Grouping');

exports = Grouping;

//# sourceMappingURL=Grouping.js.map
