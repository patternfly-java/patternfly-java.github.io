goog.module('org.jboss.elemento.intl.Collation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Collation>}
 */
class Collation extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Collation;
 }
 /** @nodts @return {!Collation} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Collation();
  $instance.$ctor__org_jboss_elemento_intl_Collation__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Collation__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Collation = value;
 }
 /** @nodts @return {!Collation} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Collation(/** string */ name) {
  Collation.$clinit();
  if ($Equality.$same(Collation.f_namesToValuesMap__org_jboss_elemento_intl_Collation_, null)) {
   Collation.f_namesToValuesMap__org_jboss_elemento_intl_Collation_ = (/**@type {Map<?string, !Collation>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Collation.m_values__arrayOf_org_jboss_elemento_intl_Collation())));
  }
  return /**@type {Collation}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Collation.f_namesToValuesMap__org_jboss_elemento_intl_Collation_));
 }
 /** @nodts @return {!Array<!Collation>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Collation() {
  Collation.$clinit();
  return /**@type {!Array<!Collation>}*/ ($Arrays.$stampType([Collation.f_compat__org_jboss_elemento_intl_Collation, Collation.f_emoji__org_jboss_elemento_intl_Collation, Collation.f_eor__org_jboss_elemento_intl_Collation, Collation.f_phonebk__org_jboss_elemento_intl_Collation, Collation.f_pinyin__org_jboss_elemento_intl_Collation, Collation.f_searchjl__org_jboss_elemento_intl_Collation, Collation.f_stroke__org_jboss_elemento_intl_Collation, Collation.f_trad__org_jboss_elemento_intl_Collation, Collation.f_unihan__org_jboss_elemento_intl_Collation, Collation.f_zhuyin__org_jboss_elemento_intl_Collation], Collation));
 }
 /** @nodts */
 static $clinit() {
  Collation.$clinit = () =>{};
  Collation.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Collation;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Collation.$ordinal_compat__org_jboss_elemento_intl_Collation = 0;
/**@const {number} @nodts*/
Collation.$ordinal_emoji__org_jboss_elemento_intl_Collation = 1;
/**@const {number} @nodts*/
Collation.$ordinal_eor__org_jboss_elemento_intl_Collation = 2;
/**@const {number} @nodts*/
Collation.$ordinal_phonebk__org_jboss_elemento_intl_Collation = 3;
/**@const {number} @nodts*/
Collation.$ordinal_pinyin__org_jboss_elemento_intl_Collation = 4;
/**@const {number} @nodts*/
Collation.$ordinal_searchjl__org_jboss_elemento_intl_Collation = 5;
/**@const {number} @nodts*/
Collation.$ordinal_stroke__org_jboss_elemento_intl_Collation = 6;
/**@const {number} @nodts*/
Collation.$ordinal_trad__org_jboss_elemento_intl_Collation = 7;
/**@const {number} @nodts*/
Collation.$ordinal_unihan__org_jboss_elemento_intl_Collation = 8;
/**@const {number} @nodts*/
Collation.$ordinal_zhuyin__org_jboss_elemento_intl_Collation = 9;
/**@const {!Collation} @nodts*/
Collation.f_compat__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('compat'), Collation.$ordinal_compat__org_jboss_elemento_intl_Collation, 'compat');
/**@const {!Collation} @nodts*/
Collation.f_emoji__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('emoji'), Collation.$ordinal_emoji__org_jboss_elemento_intl_Collation, 'emoji');
/**@const {!Collation} @nodts*/
Collation.f_eor__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('eor'), Collation.$ordinal_eor__org_jboss_elemento_intl_Collation, 'eor');
/**@const {!Collation} @nodts*/
Collation.f_phonebk__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('phonebk'), Collation.$ordinal_phonebk__org_jboss_elemento_intl_Collation, 'phonebk');
/**@const {!Collation} @nodts*/
Collation.f_pinyin__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('pinyin'), Collation.$ordinal_pinyin__org_jboss_elemento_intl_Collation, 'pinyin');
/**@const {!Collation} @nodts*/
Collation.f_searchjl__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('searchjl'), Collation.$ordinal_searchjl__org_jboss_elemento_intl_Collation, 'searchjl');
/**@const {!Collation} @nodts*/
Collation.f_stroke__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('stroke'), Collation.$ordinal_stroke__org_jboss_elemento_intl_Collation, 'stroke');
/**@const {!Collation} @nodts*/
Collation.f_trad__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('trad'), Collation.$ordinal_trad__org_jboss_elemento_intl_Collation, 'trad');
/**@const {!Collation} @nodts*/
Collation.f_unihan__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('unihan'), Collation.$ordinal_unihan__org_jboss_elemento_intl_Collation, 'unihan');
/**@const {!Collation} @nodts*/
Collation.f_zhuyin__org_jboss_elemento_intl_Collation = /**@pureOrBreakMyCode*/ Collation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('zhuyin'), Collation.$ordinal_zhuyin__org_jboss_elemento_intl_Collation, 'zhuyin');
/**@type {Map<?string, !Collation>} @nodts*/
Collation.f_namesToValuesMap__org_jboss_elemento_intl_Collation_;
$Util.$setClassMetadataForEnum(Collation, 'org.jboss.elemento.intl.Collation');

exports = Collation;

//# sourceMappingURL=Collation.js.map
