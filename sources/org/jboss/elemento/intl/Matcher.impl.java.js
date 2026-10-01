goog.module('org.jboss.elemento.intl.Matcher$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Matcher>}
 */
class Matcher extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Matcher;
 }
 /** @nodts @return {!Matcher} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Matcher();
  $instance.$ctor__org_jboss_elemento_intl_Matcher__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Matcher__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Matcher = value;
 }
 /** @nodts @return {!Matcher} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Matcher(/** string */ name) {
  Matcher.$clinit();
  if ($Equality.$same(Matcher.f_namesToValuesMap__org_jboss_elemento_intl_Matcher_, null)) {
   Matcher.f_namesToValuesMap__org_jboss_elemento_intl_Matcher_ = (/**@type {Map<?string, !Matcher>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Matcher.m_values__arrayOf_org_jboss_elemento_intl_Matcher())));
  }
  return /**@type {Matcher}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Matcher.f_namesToValuesMap__org_jboss_elemento_intl_Matcher_));
 }
 /** @nodts @return {!Array<!Matcher>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Matcher() {
  Matcher.$clinit();
  return /**@type {!Array<!Matcher>}*/ ($Arrays.$stampType([Matcher.f_basic__org_jboss_elemento_intl_Matcher, Matcher.f_bestFit__org_jboss_elemento_intl_Matcher, Matcher.f_lookup__org_jboss_elemento_intl_Matcher], Matcher));
 }
 /** @nodts */
 static $clinit() {
  Matcher.$clinit = () =>{};
  Matcher.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Matcher;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Matcher.$ordinal_basic__org_jboss_elemento_intl_Matcher = 0;
/**@const {number} @nodts*/
Matcher.$ordinal_bestFit__org_jboss_elemento_intl_Matcher = 1;
/**@const {number} @nodts*/
Matcher.$ordinal_lookup__org_jboss_elemento_intl_Matcher = 2;
/**@const {!Matcher} @nodts*/
Matcher.f_basic__org_jboss_elemento_intl_Matcher = /**@pureOrBreakMyCode*/ Matcher.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('basic'), Matcher.$ordinal_basic__org_jboss_elemento_intl_Matcher, 'basic');
/**@const {!Matcher} @nodts*/
Matcher.f_bestFit__org_jboss_elemento_intl_Matcher = /**@pureOrBreakMyCode*/ Matcher.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bestFit'), Matcher.$ordinal_bestFit__org_jboss_elemento_intl_Matcher, 'best fit');
/**@const {!Matcher} @nodts*/
Matcher.f_lookup__org_jboss_elemento_intl_Matcher = /**@pureOrBreakMyCode*/ Matcher.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lookup'), Matcher.$ordinal_lookup__org_jboss_elemento_intl_Matcher, 'lookup');
/**@type {Map<?string, !Matcher>} @nodts*/
Matcher.f_namesToValuesMap__org_jboss_elemento_intl_Matcher_;
$Util.$setClassMetadataForEnum(Matcher, 'org.jboss.elemento.intl.Matcher');

exports = Matcher;

//# sourceMappingURL=Matcher.js.map
