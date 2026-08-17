goog.module('org.patternfly.component.Severity$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let J2clSealedTypeMarker = goog.forwardDeclare('javaemul.internal.J2clSealedTypeMarker');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.component.Severity.$1$impl');
let $2 = goog.forwardDeclare('org.patternfly.component.Severity.$2$impl');
let $3 = goog.forwardDeclare('org.patternfly.component.Severity.$3$impl');
let $4 = goog.forwardDeclare('org.patternfly.component.Severity.$4$impl');
let $5 = goog.forwardDeclare('org.patternfly.component.Severity.$5$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @abstract
 * @extends {Enum<Severity>}
 * @implements {J2clSealedTypeMarker}
 */
class Severity extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Status} @nodts*/
  this.f_status__org_patternfly_component_Severity;
 }
 /** @nodts @return {Severity} */
 static m_of__java_lang_String__org_patternfly_component_Severity(/** ?string */ severity) {
  Severity.$clinit();
  return Severity.m_of__org_patternfly_style_Status__org_patternfly_component_Severity(Status.m_of__java_lang_String__org_patternfly_style_Status(severity));
 }
 /** @nodts @return {Severity} */
 static m_of__org_patternfly_style_Status__org_patternfly_component_Severity(/** Status */ status) {
  Severity.$clinit();
  return (() =>{
   switch (status.ordinal()) {
    case Status.$ordinal_custom__org_patternfly_style_Status:
     return Severity.$static_custom__org_patternfly_component_Severity;
    case Status.$ordinal_info__org_patternfly_style_Status:
     return Severity.$static_info__org_patternfly_component_Severity;
    case Status.$ordinal_success__org_patternfly_style_Status:
     return Severity.$static_success__org_patternfly_component_Severity;
    case Status.$ordinal_warning__org_patternfly_style_Status:
     return Severity.$static_warning__org_patternfly_component_Severity;
    case Status.$ordinal_danger__org_patternfly_style_Status:
     return Severity.$static_danger__org_patternfly_component_Severity;
    default:
     InternalPreconditions.m_checkExhaustive__void();
   }
  })();
 }
 /** @nodts */
 $ctor__org_patternfly_component_Severity__java_lang_String__int__org_patternfly_style_Status__void(/** ?string */ $name, /** number */ $ordinal, /** Status */ status) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_status__org_patternfly_component_Severity = status;
 }
 /** @abstract @nodts @return {PredefinedIcon} */
 m_icon__org_patternfly_icon_PredefinedIcon() {}
 /** @nodts @return {ValidationStatus} */
 m_asValidationStatus__org_patternfly_component_ValidationStatus() {
  switch (this.ordinal()) {
   case Severity.$ordinal_custom__org_patternfly_component_Severity:
   case Severity.$ordinal_info__org_patternfly_component_Severity:
    return ValidationStatus.f_default___org_patternfly_component_ValidationStatus;
   case Severity.$ordinal_success__org_patternfly_component_Severity:
    return ValidationStatus.f_success__org_patternfly_component_ValidationStatus;
   case Severity.$ordinal_warning__org_patternfly_component_Severity:
    return ValidationStatus.f_warning__org_patternfly_component_ValidationStatus;
   case Severity.$ordinal_danger__org_patternfly_component_Severity:
    return ValidationStatus.f_error__org_patternfly_component_ValidationStatus;
  }
  return ValidationStatus.f_default___org_patternfly_component_ValidationStatus;
 }
 /** @nodts @return {!Severity} */
 static m_valueOf__java_lang_String__org_patternfly_component_Severity(/** string */ name) {
  Severity.$clinit();
  if ($Equality.$same(Severity.f_namesToValuesMap__org_patternfly_component_Severity_, null)) {
   Severity.f_namesToValuesMap__org_patternfly_component_Severity_ = (/**@type {Map<?string, !Severity>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Severity.m_values__arrayOf_org_patternfly_component_Severity())));
  }
  return /**@type {Severity}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Severity.f_namesToValuesMap__org_patternfly_component_Severity_));
 }
 /** @nodts @return {!Array<!Severity>} */
 static m_values__arrayOf_org_patternfly_component_Severity() {
  Severity.$clinit();
  return /**@type {!Array<!Severity>}*/ ($Arrays.$stampType([Severity.$static_custom__org_patternfly_component_Severity, Severity.$static_info__org_patternfly_component_Severity, Severity.$static_success__org_patternfly_component_Severity, Severity.$static_warning__org_patternfly_component_Severity, Severity.$static_danger__org_patternfly_component_Severity], Severity));
 }
 /** @nodts @return {!Severity} */
 static get f_custom__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_custom__org_patternfly_component_Severity);
 }
 /** @nodts @return {!Severity} */
 static get f_info__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_info__org_patternfly_component_Severity);
 }
 /** @nodts @return {!Severity} */
 static get f_success__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_success__org_patternfly_component_Severity);
 }
 /** @nodts @return {!Severity} */
 static get f_warning__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_warning__org_patternfly_component_Severity);
 }
 /** @nodts @return {!Severity} */
 static get f_danger__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_danger__org_patternfly_component_Severity);
 }
 /** @nodts */
 static $clinit() {
  Severity.$clinit = () =>{};
  Severity.$loadModules();
  Enum.$clinit();
  Severity.$static_custom__org_patternfly_component_Severity = $1.$create__java_lang_String__int__org_patternfly_style_Status($Util.$makeEnumName('custom'), Severity.$ordinal_custom__org_patternfly_component_Severity, Status.f_custom__org_patternfly_style_Status);
  Severity.$static_info__org_patternfly_component_Severity = $2.$create__java_lang_String__int__org_patternfly_style_Status($Util.$makeEnumName('info'), Severity.$ordinal_info__org_patternfly_component_Severity, Status.f_info__org_patternfly_style_Status);
  Severity.$static_success__org_patternfly_component_Severity = $3.$create__java_lang_String__int__org_patternfly_style_Status($Util.$makeEnumName('success'), Severity.$ordinal_success__org_patternfly_component_Severity, Status.f_success__org_patternfly_style_Status);
  Severity.$static_warning__org_patternfly_component_Severity = $4.$create__java_lang_String__int__org_patternfly_style_Status($Util.$makeEnumName('warning'), Severity.$ordinal_warning__org_patternfly_component_Severity, Status.f_warning__org_patternfly_style_Status);
  Severity.$static_danger__org_patternfly_component_Severity = $5.$create__java_lang_String__int__org_patternfly_style_Status($Util.$makeEnumName('danger'), Severity.$ordinal_danger__org_patternfly_component_Severity, Status.f_danger__org_patternfly_style_Status);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Severity;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.component.Severity.$1$impl');
  $2 = goog.module.get('org.patternfly.component.Severity.$2$impl');
  $3 = goog.module.get('org.patternfly.component.Severity.$3$impl');
  $4 = goog.module.get('org.patternfly.component.Severity.$4$impl');
  $5 = goog.module.get('org.patternfly.component.Severity.$5$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Status = goog.module.get('org.patternfly.style.Status$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Severity.$ordinal_custom__org_patternfly_component_Severity = 0;
/**@const {number} @nodts*/
Severity.$ordinal_info__org_patternfly_component_Severity = 1;
/**@const {number} @nodts*/
Severity.$ordinal_success__org_patternfly_component_Severity = 2;
/**@const {number} @nodts*/
Severity.$ordinal_warning__org_patternfly_component_Severity = 3;
/**@const {number} @nodts*/
Severity.$ordinal_danger__org_patternfly_component_Severity = 4;
/**@private {!Severity} @nodts*/
Severity.$static_custom__org_patternfly_component_Severity;
/**@private {!Severity} @nodts*/
Severity.$static_info__org_patternfly_component_Severity;
/**@private {!Severity} @nodts*/
Severity.$static_success__org_patternfly_component_Severity;
/**@private {!Severity} @nodts*/
Severity.$static_warning__org_patternfly_component_Severity;
/**@private {!Severity} @nodts*/
Severity.$static_danger__org_patternfly_component_Severity;
/**@type {Map<?string, !Severity>} @nodts*/
Severity.f_namesToValuesMap__org_patternfly_component_Severity_;
$Util.$setClassMetadataForEnum(Severity, 'org.patternfly.component.Severity');

exports = Severity;

//# sourceMappingURL=Severity.js.map
