goog.module('org.jboss.elemento.ButtonType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<ButtonType>}
 */
class ButtonType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ButtonType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new ButtonType();
  $instance.$ctor__org_jboss_elemento_ButtonType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_ButtonType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!ButtonType} */
 static m_valueOf__java_lang_String__org_jboss_elemento_ButtonType(/** string */ name) {
  ButtonType.$clinit();
  if ($Equality.$same(ButtonType.f_namesToValuesMap__org_jboss_elemento_ButtonType_, null)) {
   ButtonType.f_namesToValuesMap__org_jboss_elemento_ButtonType_ = (/**@type {Map<?string, !ButtonType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ButtonType.m_values__arrayOf_org_jboss_elemento_ButtonType())));
  }
  return /**@type {ButtonType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ButtonType.f_namesToValuesMap__org_jboss_elemento_ButtonType_));
 }
 /** @nodts @return {!Array<!ButtonType>} */
 static m_values__arrayOf_org_jboss_elemento_ButtonType() {
  ButtonType.$clinit();
  return /**@type {!Array<!ButtonType>}*/ ($Arrays.$stampType([ButtonType.f_button__org_jboss_elemento_ButtonType, ButtonType.f_submit__org_jboss_elemento_ButtonType, ButtonType.f_reset__org_jboss_elemento_ButtonType], ButtonType));
 }
 /** @nodts */
 static $clinit() {
  ButtonType.$clinit = () =>{};
  ButtonType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ButtonType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ButtonType.$ordinal_button__org_jboss_elemento_ButtonType = 0;
/**@const {number} @nodts*/
ButtonType.$ordinal_submit__org_jboss_elemento_ButtonType = 1;
/**@const {number} @nodts*/
ButtonType.$ordinal_reset__org_jboss_elemento_ButtonType = 2;
/**@const {!ButtonType} @nodts*/
ButtonType.f_button__org_jboss_elemento_ButtonType = /**@pureOrBreakMyCode*/ ButtonType.$create__java_lang_String__int($Util.$makeEnumName('button'), ButtonType.$ordinal_button__org_jboss_elemento_ButtonType);
/**@const {!ButtonType} @nodts*/
ButtonType.f_submit__org_jboss_elemento_ButtonType = /**@pureOrBreakMyCode*/ ButtonType.$create__java_lang_String__int($Util.$makeEnumName('submit'), ButtonType.$ordinal_submit__org_jboss_elemento_ButtonType);
/**@const {!ButtonType} @nodts*/
ButtonType.f_reset__org_jboss_elemento_ButtonType = /**@pureOrBreakMyCode*/ ButtonType.$create__java_lang_String__int($Util.$makeEnumName('reset'), ButtonType.$ordinal_reset__org_jboss_elemento_ButtonType);
/**@type {Map<?string, !ButtonType>} @nodts*/
ButtonType.f_namesToValuesMap__org_jboss_elemento_ButtonType_;
$Util.$setClassMetadataForEnum(ButtonType, 'org.jboss.elemento.ButtonType');

exports = ButtonType;

//# sourceMappingURL=ButtonType.js.map
