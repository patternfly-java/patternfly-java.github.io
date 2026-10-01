goog.module('org.jboss.elemento.intl.Notation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Notation>}
 */
class Notation extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Notation;
 }
 /** @nodts @return {!Notation} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Notation();
  $instance.$ctor__org_jboss_elemento_intl_Notation__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Notation__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Notation = value;
 }
 /** @nodts @return {!Notation} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Notation(/** string */ name) {
  Notation.$clinit();
  if ($Equality.$same(Notation.f_namesToValuesMap__org_jboss_elemento_intl_Notation_, null)) {
   Notation.f_namesToValuesMap__org_jboss_elemento_intl_Notation_ = (/**@type {Map<?string, !Notation>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Notation.m_values__arrayOf_org_jboss_elemento_intl_Notation())));
  }
  return /**@type {Notation}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Notation.f_namesToValuesMap__org_jboss_elemento_intl_Notation_));
 }
 /** @nodts @return {!Array<!Notation>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Notation() {
  Notation.$clinit();
  return /**@type {!Array<!Notation>}*/ ($Arrays.$stampType([Notation.f_compact__org_jboss_elemento_intl_Notation, Notation.f_engineering__org_jboss_elemento_intl_Notation, Notation.f_scientific__org_jboss_elemento_intl_Notation, Notation.f_standard__org_jboss_elemento_intl_Notation], Notation));
 }
 /** @nodts */
 static $clinit() {
  Notation.$clinit = () =>{};
  Notation.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Notation;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Notation.$ordinal_compact__org_jboss_elemento_intl_Notation = 0;
/**@const {number} @nodts*/
Notation.$ordinal_engineering__org_jboss_elemento_intl_Notation = 1;
/**@const {number} @nodts*/
Notation.$ordinal_scientific__org_jboss_elemento_intl_Notation = 2;
/**@const {number} @nodts*/
Notation.$ordinal_standard__org_jboss_elemento_intl_Notation = 3;
/**@const {!Notation} @nodts*/
Notation.f_compact__org_jboss_elemento_intl_Notation = /**@pureOrBreakMyCode*/ Notation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('compact'), Notation.$ordinal_compact__org_jboss_elemento_intl_Notation, 'compact');
/**@const {!Notation} @nodts*/
Notation.f_engineering__org_jboss_elemento_intl_Notation = /**@pureOrBreakMyCode*/ Notation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('engineering'), Notation.$ordinal_engineering__org_jboss_elemento_intl_Notation, 'engineering');
/**@const {!Notation} @nodts*/
Notation.f_scientific__org_jboss_elemento_intl_Notation = /**@pureOrBreakMyCode*/ Notation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('scientific'), Notation.$ordinal_scientific__org_jboss_elemento_intl_Notation, 'scientific');
/**@const {!Notation} @nodts*/
Notation.f_standard__org_jboss_elemento_intl_Notation = /**@pureOrBreakMyCode*/ Notation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('standard'), Notation.$ordinal_standard__org_jboss_elemento_intl_Notation, 'standard');
/**@type {Map<?string, !Notation>} @nodts*/
Notation.f_namesToValuesMap__org_jboss_elemento_intl_Notation_;
$Util.$setClassMetadataForEnum(Notation, 'org.jboss.elemento.intl.Notation');

exports = Notation;

//# sourceMappingURL=Notation.js.map
