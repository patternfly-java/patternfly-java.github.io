goog.module('org.jboss.elemento.intl.When$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<When>}
 */
class When extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_When;
 }
 /** @nodts @return {!When} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new When();
  $instance.$ctor__org_jboss_elemento_intl_When__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_When__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_When = value;
 }
 /** @nodts @return {!When} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_When(/** string */ name) {
  When.$clinit();
  if ($Equality.$same(When.f_namesToValuesMap__org_jboss_elemento_intl_When_, null)) {
   When.f_namesToValuesMap__org_jboss_elemento_intl_When_ = (/**@type {Map<?string, !When>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(When.m_values__arrayOf_org_jboss_elemento_intl_When())));
  }
  return /**@type {When}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, When.f_namesToValuesMap__org_jboss_elemento_intl_When_));
 }
 /** @nodts @return {!Array<!When>} */
 static m_values__arrayOf_org_jboss_elemento_intl_When() {
  When.$clinit();
  return /**@type {!Array<!When>}*/ ($Arrays.$stampType([When.f_always__org_jboss_elemento_intl_When, When.f_auto__org_jboss_elemento_intl_When, When.f_exceptZero__org_jboss_elemento_intl_When, When.f_min2__org_jboss_elemento_intl_When, When.f_negative__org_jboss_elemento_intl_When, When.f_never__org_jboss_elemento_intl_When, When.f_stripIfInteger__org_jboss_elemento_intl_When], When));
 }
 /** @nodts */
 static $clinit() {
  When.$clinit = () =>{};
  When.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof When;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
When.$ordinal_always__org_jboss_elemento_intl_When = 0;
/**@const {number} @nodts*/
When.$ordinal_auto__org_jboss_elemento_intl_When = 1;
/**@const {number} @nodts*/
When.$ordinal_exceptZero__org_jboss_elemento_intl_When = 2;
/**@const {number} @nodts*/
When.$ordinal_min2__org_jboss_elemento_intl_When = 3;
/**@const {number} @nodts*/
When.$ordinal_negative__org_jboss_elemento_intl_When = 4;
/**@const {number} @nodts*/
When.$ordinal_never__org_jboss_elemento_intl_When = 5;
/**@const {number} @nodts*/
When.$ordinal_stripIfInteger__org_jboss_elemento_intl_When = 6;
/**@const {!When} @nodts*/
When.f_always__org_jboss_elemento_intl_When = /**@pureOrBreakMyCode*/ When.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('always'), When.$ordinal_always__org_jboss_elemento_intl_When, 'always');
/**@const {!When} @nodts*/
When.f_auto__org_jboss_elemento_intl_When = /**@pureOrBreakMyCode*/ When.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('auto'), When.$ordinal_auto__org_jboss_elemento_intl_When, 'auto');
/**@const {!When} @nodts*/
When.f_exceptZero__org_jboss_elemento_intl_When = /**@pureOrBreakMyCode*/ When.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('exceptZero'), When.$ordinal_exceptZero__org_jboss_elemento_intl_When, 'exceptZero');
/**@const {!When} @nodts*/
When.f_min2__org_jboss_elemento_intl_When = /**@pureOrBreakMyCode*/ When.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('min2'), When.$ordinal_min2__org_jboss_elemento_intl_When, 'min2');
/**@const {!When} @nodts*/
When.f_negative__org_jboss_elemento_intl_When = /**@pureOrBreakMyCode*/ When.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('negative'), When.$ordinal_negative__org_jboss_elemento_intl_When, 'negative');
/**@const {!When} @nodts*/
When.f_never__org_jboss_elemento_intl_When = /**@pureOrBreakMyCode*/ When.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('never'), When.$ordinal_never__org_jboss_elemento_intl_When, 'never');
/**@const {!When} @nodts*/
When.f_stripIfInteger__org_jboss_elemento_intl_When = /**@pureOrBreakMyCode*/ When.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('stripIfInteger'), When.$ordinal_stripIfInteger__org_jboss_elemento_intl_When, 'stripIfInteger');
/**@type {Map<?string, !When>} @nodts*/
When.f_namesToValuesMap__org_jboss_elemento_intl_When_;
$Util.$setClassMetadataForEnum(When, 'org.jboss.elemento.intl.When');

exports = When;

//# sourceMappingURL=When.js.map
