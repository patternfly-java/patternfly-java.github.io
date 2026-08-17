goog.module('org.jboss.elemento.intl.CurrencyDisplay$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<CurrencyDisplay>}
 */
class CurrencyDisplay extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_CurrencyDisplay;
 }
 /** @nodts @return {!CurrencyDisplay} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CurrencyDisplay();
  $instance.$ctor__org_jboss_elemento_intl_CurrencyDisplay__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_CurrencyDisplay__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_CurrencyDisplay = value;
 }
 /** @nodts @return {!CurrencyDisplay} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_CurrencyDisplay(/** string */ name) {
  CurrencyDisplay.$clinit();
  if ($Equality.$same(CurrencyDisplay.f_namesToValuesMap__org_jboss_elemento_intl_CurrencyDisplay_, null)) {
   CurrencyDisplay.f_namesToValuesMap__org_jboss_elemento_intl_CurrencyDisplay_ = (/**@type {Map<?string, !CurrencyDisplay>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(CurrencyDisplay.m_values__arrayOf_org_jboss_elemento_intl_CurrencyDisplay())));
  }
  return /**@type {CurrencyDisplay}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, CurrencyDisplay.f_namesToValuesMap__org_jboss_elemento_intl_CurrencyDisplay_));
 }
 /** @nodts @return {!Array<!CurrencyDisplay>} */
 static m_values__arrayOf_org_jboss_elemento_intl_CurrencyDisplay() {
  CurrencyDisplay.$clinit();
  return /**@type {!Array<!CurrencyDisplay>}*/ ($Arrays.$stampType([CurrencyDisplay.f_accounting__org_jboss_elemento_intl_CurrencyDisplay, CurrencyDisplay.f_code__org_jboss_elemento_intl_CurrencyDisplay, CurrencyDisplay.f_symbol__org_jboss_elemento_intl_CurrencyDisplay, CurrencyDisplay.f_narrowSymbol__org_jboss_elemento_intl_CurrencyDisplay, CurrencyDisplay.f_name__org_jboss_elemento_intl_CurrencyDisplay, CurrencyDisplay.f_standard__org_jboss_elemento_intl_CurrencyDisplay], CurrencyDisplay));
 }
 /** @nodts */
 static $clinit() {
  CurrencyDisplay.$clinit = () =>{};
  CurrencyDisplay.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CurrencyDisplay;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
CurrencyDisplay.$ordinal_accounting__org_jboss_elemento_intl_CurrencyDisplay = 0;
/**@const {number} @nodts*/
CurrencyDisplay.$ordinal_code__org_jboss_elemento_intl_CurrencyDisplay = 1;
/**@const {number} @nodts*/
CurrencyDisplay.$ordinal_symbol__org_jboss_elemento_intl_CurrencyDisplay = 2;
/**@const {number} @nodts*/
CurrencyDisplay.$ordinal_narrowSymbol__org_jboss_elemento_intl_CurrencyDisplay = 3;
/**@const {number} @nodts*/
CurrencyDisplay.$ordinal_name__org_jboss_elemento_intl_CurrencyDisplay = 4;
/**@const {number} @nodts*/
CurrencyDisplay.$ordinal_standard__org_jboss_elemento_intl_CurrencyDisplay = 5;
/**@const {!CurrencyDisplay} @nodts*/
CurrencyDisplay.f_accounting__org_jboss_elemento_intl_CurrencyDisplay = /**@pureOrBreakMyCode*/ CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('accounting'), CurrencyDisplay.$ordinal_accounting__org_jboss_elemento_intl_CurrencyDisplay, 'accounting');
/**@const {!CurrencyDisplay} @nodts*/
CurrencyDisplay.f_code__org_jboss_elemento_intl_CurrencyDisplay = /**@pureOrBreakMyCode*/ CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('code'), CurrencyDisplay.$ordinal_code__org_jboss_elemento_intl_CurrencyDisplay, 'code');
/**@const {!CurrencyDisplay} @nodts*/
CurrencyDisplay.f_symbol__org_jboss_elemento_intl_CurrencyDisplay = /**@pureOrBreakMyCode*/ CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('symbol'), CurrencyDisplay.$ordinal_symbol__org_jboss_elemento_intl_CurrencyDisplay, 'symbol');
/**@const {!CurrencyDisplay} @nodts*/
CurrencyDisplay.f_narrowSymbol__org_jboss_elemento_intl_CurrencyDisplay = /**@pureOrBreakMyCode*/ CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('narrowSymbol'), CurrencyDisplay.$ordinal_narrowSymbol__org_jboss_elemento_intl_CurrencyDisplay, 'narrowSymbol');
/**@const {!CurrencyDisplay} @nodts*/
CurrencyDisplay.f_name__org_jboss_elemento_intl_CurrencyDisplay = /**@pureOrBreakMyCode*/ CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('name'), CurrencyDisplay.$ordinal_name__org_jboss_elemento_intl_CurrencyDisplay, 'name');
/**@const {!CurrencyDisplay} @nodts*/
CurrencyDisplay.f_standard__org_jboss_elemento_intl_CurrencyDisplay = /**@pureOrBreakMyCode*/ CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('standard'), CurrencyDisplay.$ordinal_standard__org_jboss_elemento_intl_CurrencyDisplay, 'standard');
/**@type {Map<?string, !CurrencyDisplay>} @nodts*/
CurrencyDisplay.f_namesToValuesMap__org_jboss_elemento_intl_CurrencyDisplay_;
$Util.$setClassMetadataForEnum(CurrencyDisplay, 'org.jboss.elemento.intl.CurrencyDisplay');

exports = CurrencyDisplay;

//# sourceMappingURL=CurrencyDisplay.js.map
