goog.module('org.patternfly.component.ValidationStatus$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let J2clSealedTypeMarker = goog.forwardDeclare('javaemul.internal.J2clSealedTypeMarker');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.component.ValidationStatus.$1$impl');
let $2 = goog.forwardDeclare('org.patternfly.component.ValidationStatus.$2$impl');
let $3 = goog.forwardDeclare('org.patternfly.component.ValidationStatus.$3$impl');
let $4 = goog.forwardDeclare('org.patternfly.component.ValidationStatus.$4$impl');
let $5 = goog.forwardDeclare('org.patternfly.component.ValidationStatus.$5$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @abstract
 * @extends {Enum<ValidationStatus>}
 * @implements {J2clSealedTypeMarker}
 */
class ValidationStatus extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Status} @nodts*/
  this.f_status__org_patternfly_component_ValidationStatus;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_ValidationStatus;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ValidationStatus__java_lang_String__int__org_patternfly_style_Status__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** Status */ status, /** ?string */ modifier) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_status__org_patternfly_component_ValidationStatus = status;
  this.f_modifier__org_patternfly_component_ValidationStatus = modifier;
 }
 /** @abstract @nodts @return {PredefinedIcon} */
 m_icon__org_patternfly_icon_PredefinedIcon() {}
 /** @nodts @return {!ValidationStatus} */
 static m_valueOf__java_lang_String__org_patternfly_component_ValidationStatus(/** string */ name) {
  ValidationStatus.$clinit();
  if ($Equality.$same(ValidationStatus.f_namesToValuesMap__org_patternfly_component_ValidationStatus_, null)) {
   ValidationStatus.f_namesToValuesMap__org_patternfly_component_ValidationStatus_ = (/**@type {Map<?string, !ValidationStatus>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ValidationStatus.m_values__arrayOf_org_patternfly_component_ValidationStatus())));
  }
  return /**@type {ValidationStatus}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ValidationStatus.f_namesToValuesMap__org_patternfly_component_ValidationStatus_));
 }
 /** @nodts @return {!Array<!ValidationStatus>} */
 static m_values__arrayOf_org_patternfly_component_ValidationStatus() {
  ValidationStatus.$clinit();
  return /**@type {!Array<!ValidationStatus>}*/ ($Arrays.$stampType([ValidationStatus.$static_default___org_patternfly_component_ValidationStatus, ValidationStatus.$static_indeterminate__org_patternfly_component_ValidationStatus, ValidationStatus.$static_success__org_patternfly_component_ValidationStatus, ValidationStatus.$static_warning__org_patternfly_component_ValidationStatus, ValidationStatus.$static_error__org_patternfly_component_ValidationStatus], ValidationStatus));
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_default___org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_default___org_patternfly_component_ValidationStatus);
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_indeterminate__org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_indeterminate__org_patternfly_component_ValidationStatus);
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_success__org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_success__org_patternfly_component_ValidationStatus);
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_warning__org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_warning__org_patternfly_component_ValidationStatus);
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_error__org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_error__org_patternfly_component_ValidationStatus);
 }
 /** @nodts */
 static $clinit() {
  ValidationStatus.$clinit = () =>{};
  ValidationStatus.$loadModules();
  Enum.$clinit();
  ValidationStatus.$static_default___org_patternfly_component_ValidationStatus = $1.$create__java_lang_String__int__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('default_'), ValidationStatus.$ordinal_default___org_patternfly_component_ValidationStatus, Status.f_info__org_patternfly_style_Status, null);
  ValidationStatus.$static_indeterminate__org_patternfly_component_ValidationStatus = $2.$create__java_lang_String__int__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('indeterminate'), ValidationStatus.$ordinal_indeterminate__org_patternfly_component_ValidationStatus, Status.f_info__org_patternfly_style_Status, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_indeterminate__org_patternfly_style_Classes));
  ValidationStatus.$static_success__org_patternfly_component_ValidationStatus = $3.$create__java_lang_String__int__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('success'), ValidationStatus.$ordinal_success__org_patternfly_component_ValidationStatus, Status.f_success__org_patternfly_style_Status, Status.f_success__org_patternfly_style_Status.m_modifier__java_lang_String());
  ValidationStatus.$static_warning__org_patternfly_component_ValidationStatus = $4.$create__java_lang_String__int__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('warning'), ValidationStatus.$ordinal_warning__org_patternfly_component_ValidationStatus, Status.f_warning__org_patternfly_style_Status, Status.f_warning__org_patternfly_style_Status.m_modifier__java_lang_String());
  ValidationStatus.$static_error__org_patternfly_component_ValidationStatus = $5.$create__java_lang_String__int__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('error'), ValidationStatus.$ordinal_error__org_patternfly_component_ValidationStatus, Status.f_danger__org_patternfly_style_Status, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_error__org_patternfly_style_Classes));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValidationStatus;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.component.ValidationStatus.$1$impl');
  $2 = goog.module.get('org.patternfly.component.ValidationStatus.$2$impl');
  $3 = goog.module.get('org.patternfly.component.ValidationStatus.$3$impl');
  $4 = goog.module.get('org.patternfly.component.ValidationStatus.$4$impl');
  $5 = goog.module.get('org.patternfly.component.ValidationStatus.$5$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Status = goog.module.get('org.patternfly.style.Status$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ValidationStatus.$ordinal_default___org_patternfly_component_ValidationStatus = 0;
/**@const {number} @nodts*/
ValidationStatus.$ordinal_indeterminate__org_patternfly_component_ValidationStatus = 1;
/**@const {number} @nodts*/
ValidationStatus.$ordinal_success__org_patternfly_component_ValidationStatus = 2;
/**@const {number} @nodts*/
ValidationStatus.$ordinal_warning__org_patternfly_component_ValidationStatus = 3;
/**@const {number} @nodts*/
ValidationStatus.$ordinal_error__org_patternfly_component_ValidationStatus = 4;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_default___org_patternfly_component_ValidationStatus;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_indeterminate__org_patternfly_component_ValidationStatus;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_success__org_patternfly_component_ValidationStatus;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_warning__org_patternfly_component_ValidationStatus;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_error__org_patternfly_component_ValidationStatus;
/**@type {Map<?string, !ValidationStatus>} @nodts*/
ValidationStatus.f_namesToValuesMap__org_patternfly_component_ValidationStatus_;
$Util.$setClassMetadataForEnum(ValidationStatus, 'org.patternfly.component.ValidationStatus');

exports = ValidationStatus;

//# sourceMappingURL=ValidationStatus.js.map
