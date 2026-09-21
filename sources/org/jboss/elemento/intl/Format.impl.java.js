goog.module('org.jboss.elemento.intl.Format$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Format>}
 */
class Format extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Format;
 }
 /** @nodts @return {!Format} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Format();
  $instance.$ctor__org_jboss_elemento_intl_Format__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Format__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Format = value;
 }
 /** @nodts @return {!Format} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Format(/** string */ name) {
  Format.$clinit();
  if ($Equality.$same(Format.f_namesToValuesMap__org_jboss_elemento_intl_Format_, null)) {
   Format.f_namesToValuesMap__org_jboss_elemento_intl_Format_ = (/**@type {Map<?string, !Format>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Format.m_values__arrayOf_org_jboss_elemento_intl_Format())));
  }
  return /**@type {Format}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Format.f_namesToValuesMap__org_jboss_elemento_intl_Format_));
 }
 /** @nodts @return {!Array<!Format>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Format() {
  Format.$clinit();
  return /**@type {!Array<!Format>}*/ ($Arrays.$stampType([Format.f__2digit__org_jboss_elemento_intl_Format, Format.f_currency__org_jboss_elemento_intl_Format, Format.f_decimal__org_jboss_elemento_intl_Format, Format.f_digital__org_jboss_elemento_intl_Format, Format.f_full__org_jboss_elemento_intl_Format, Format.f_long___org_jboss_elemento_intl_Format, Format.f_medium__org_jboss_elemento_intl_Format, Format.f_narrow__org_jboss_elemento_intl_Format, Format.f_numeric__org_jboss_elemento_intl_Format, Format.f_percent__org_jboss_elemento_intl_Format, Format.f_short___org_jboss_elemento_intl_Format, Format.f_unit__org_jboss_elemento_intl_Format], Format));
 }
 /** @nodts */
 static $clinit() {
  Format.$clinit = () =>{};
  Format.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Format;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Format.$ordinal__2digit__org_jboss_elemento_intl_Format = 0;
/**@const {number} @nodts*/
Format.$ordinal_currency__org_jboss_elemento_intl_Format = 1;
/**@const {number} @nodts*/
Format.$ordinal_decimal__org_jboss_elemento_intl_Format = 2;
/**@const {number} @nodts*/
Format.$ordinal_digital__org_jboss_elemento_intl_Format = 3;
/**@const {number} @nodts*/
Format.$ordinal_full__org_jboss_elemento_intl_Format = 4;
/**@const {number} @nodts*/
Format.$ordinal_long___org_jboss_elemento_intl_Format = 5;
/**@const {number} @nodts*/
Format.$ordinal_medium__org_jboss_elemento_intl_Format = 6;
/**@const {number} @nodts*/
Format.$ordinal_narrow__org_jboss_elemento_intl_Format = 7;
/**@const {number} @nodts*/
Format.$ordinal_numeric__org_jboss_elemento_intl_Format = 8;
/**@const {number} @nodts*/
Format.$ordinal_percent__org_jboss_elemento_intl_Format = 9;
/**@const {number} @nodts*/
Format.$ordinal_short___org_jboss_elemento_intl_Format = 10;
/**@const {number} @nodts*/
Format.$ordinal_unit__org_jboss_elemento_intl_Format = 11;
/**@const {!Format} @nodts*/
Format.f__2digit__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2digit'), Format.$ordinal__2digit__org_jboss_elemento_intl_Format, '2-digit');
/**@const {!Format} @nodts*/
Format.f_currency__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('currency'), Format.$ordinal_currency__org_jboss_elemento_intl_Format, 'currency');
/**@const {!Format} @nodts*/
Format.f_decimal__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('decimal'), Format.$ordinal_decimal__org_jboss_elemento_intl_Format, 'decimal');
/**@const {!Format} @nodts*/
Format.f_digital__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('digital'), Format.$ordinal_digital__org_jboss_elemento_intl_Format, 'digital');
/**@const {!Format} @nodts*/
Format.f_full__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('full'), Format.$ordinal_full__org_jboss_elemento_intl_Format, 'full');
/**@const {!Format} @nodts*/
Format.f_long___org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('long_'), Format.$ordinal_long___org_jboss_elemento_intl_Format, 'long');
/**@const {!Format} @nodts*/
Format.f_medium__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('medium'), Format.$ordinal_medium__org_jboss_elemento_intl_Format, 'medium');
/**@const {!Format} @nodts*/
Format.f_narrow__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('narrow'), Format.$ordinal_narrow__org_jboss_elemento_intl_Format, 'narrow');
/**@const {!Format} @nodts*/
Format.f_numeric__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('numeric'), Format.$ordinal_numeric__org_jboss_elemento_intl_Format, 'numeric');
/**@const {!Format} @nodts*/
Format.f_percent__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('percent'), Format.$ordinal_percent__org_jboss_elemento_intl_Format, 'percent');
/**@const {!Format} @nodts*/
Format.f_short___org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('short_'), Format.$ordinal_short___org_jboss_elemento_intl_Format, 'short');
/**@const {!Format} @nodts*/
Format.f_unit__org_jboss_elemento_intl_Format = /**@pureOrBreakMyCode*/ Format.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('unit'), Format.$ordinal_unit__org_jboss_elemento_intl_Format, 'unit');
/**@type {Map<?string, !Format>} @nodts*/
Format.f_namesToValuesMap__org_jboss_elemento_intl_Format_;
$Util.$setClassMetadataForEnum(Format, 'org.jboss.elemento.intl.Format');

exports = Format;

//# sourceMappingURL=Format.js.map
