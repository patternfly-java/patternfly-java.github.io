goog.module('org.jboss.elemento.intl.CaseFirst$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<CaseFirst>}
 */
class CaseFirst extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_CaseFirst;
 }
 /** @nodts @return {!CaseFirst} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CaseFirst();
  $instance.$ctor__org_jboss_elemento_intl_CaseFirst__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_CaseFirst__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_CaseFirst = value;
 }
 /** @nodts @return {!CaseFirst} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_CaseFirst(/** string */ name) {
  CaseFirst.$clinit();
  if ($Equality.$same(CaseFirst.f_namesToValuesMap__org_jboss_elemento_intl_CaseFirst_, null)) {
   CaseFirst.f_namesToValuesMap__org_jboss_elemento_intl_CaseFirst_ = (/**@type {Map<?string, !CaseFirst>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(CaseFirst.m_values__arrayOf_org_jboss_elemento_intl_CaseFirst())));
  }
  return /**@type {CaseFirst}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, CaseFirst.f_namesToValuesMap__org_jboss_elemento_intl_CaseFirst_));
 }
 /** @nodts @return {!Array<!CaseFirst>} */
 static m_values__arrayOf_org_jboss_elemento_intl_CaseFirst() {
  CaseFirst.$clinit();
  return /**@type {!Array<!CaseFirst>}*/ ($Arrays.$stampType([CaseFirst.f_false___org_jboss_elemento_intl_CaseFirst, CaseFirst.f_lower__org_jboss_elemento_intl_CaseFirst, CaseFirst.f_upper__org_jboss_elemento_intl_CaseFirst], CaseFirst));
 }
 /** @nodts */
 static $clinit() {
  CaseFirst.$clinit = () =>{};
  CaseFirst.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CaseFirst;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
CaseFirst.$ordinal_false___org_jboss_elemento_intl_CaseFirst = 0;
/**@const {number} @nodts*/
CaseFirst.$ordinal_lower__org_jboss_elemento_intl_CaseFirst = 1;
/**@const {number} @nodts*/
CaseFirst.$ordinal_upper__org_jboss_elemento_intl_CaseFirst = 2;
/**@const {!CaseFirst} @nodts*/
CaseFirst.f_false___org_jboss_elemento_intl_CaseFirst = /**@pureOrBreakMyCode*/ CaseFirst.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('false_'), CaseFirst.$ordinal_false___org_jboss_elemento_intl_CaseFirst, 'false');
/**@const {!CaseFirst} @nodts*/
CaseFirst.f_lower__org_jboss_elemento_intl_CaseFirst = /**@pureOrBreakMyCode*/ CaseFirst.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lower'), CaseFirst.$ordinal_lower__org_jboss_elemento_intl_CaseFirst, 'lower');
/**@const {!CaseFirst} @nodts*/
CaseFirst.f_upper__org_jboss_elemento_intl_CaseFirst = /**@pureOrBreakMyCode*/ CaseFirst.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('upper'), CaseFirst.$ordinal_upper__org_jboss_elemento_intl_CaseFirst, 'upper');
/**@type {Map<?string, !CaseFirst>} @nodts*/
CaseFirst.f_namesToValuesMap__org_jboss_elemento_intl_CaseFirst_;
$Util.$setClassMetadataForEnum(CaseFirst, 'org.jboss.elemento.intl.CaseFirst');

exports = CaseFirst;

//# sourceMappingURL=CaseFirst.js.map
