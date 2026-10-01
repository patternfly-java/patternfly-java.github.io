goog.module('org.patternfly.style.Status$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Status>}
 * @implements {TypedModifier}
 */
class Status extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Status_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Status_;
 }
 /** @nodts @return {Status} */
 static m_of__java_lang_String__org_patternfly_style_Status(/** ?string */ status) {
  Status.$clinit();
  return (() =>{
   switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(status)) {
    case 'danger':
     return Status.$static_danger__org_patternfly_style_Status;
    case 'warning':
     return Status.$static_warning__org_patternfly_style_Status;
    case 'success':
     return Status.$static_success__org_patternfly_style_Status;
    case 'info':
     return Status.$static_info__org_patternfly_style_Status;
    case 'custom':
     return Status.$static_custom__org_patternfly_style_Status;
    default:
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Invalid status: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(status)));
   }
  })();
 }
 /** @nodts @return {!Status} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Status();
  $instance.$ctor__org_patternfly_style_Status__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Status__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Status_ = value;
  this.f_modifier__org_patternfly_style_Status_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Status_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Status_;
 }
 /** @nodts @return {!Status} */
 static m_valueOf__java_lang_String__org_patternfly_style_Status(/** string */ name) {
  Status.$clinit();
  if ($Equality.$same(Status.f_namesToValuesMap__org_patternfly_style_Status_, null)) {
   Status.f_namesToValuesMap__org_patternfly_style_Status_ = (/**@type {Map<?string, !Status>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Status.m_values__arrayOf_org_patternfly_style_Status())));
  }
  return /**@type {Status}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Status.f_namesToValuesMap__org_patternfly_style_Status_));
 }
 /** @nodts @return {!Array<!Status>} */
 static m_values__arrayOf_org_patternfly_style_Status() {
  Status.$clinit();
  return /**@type {!Array<!Status>}*/ ($Arrays.$stampType([Status.$static_danger__org_patternfly_style_Status, Status.$static_warning__org_patternfly_style_Status, Status.$static_success__org_patternfly_style_Status, Status.$static_info__org_patternfly_style_Status, Status.$static_custom__org_patternfly_style_Status], Status));
 }
 /** @nodts @return {!Status} */
 static get f_danger__org_patternfly_style_Status() {
  return (Status.$clinit(), Status.$static_danger__org_patternfly_style_Status);
 }
 /** @nodts @return {!Status} */
 static get f_warning__org_patternfly_style_Status() {
  return (Status.$clinit(), Status.$static_warning__org_patternfly_style_Status);
 }
 /** @nodts @return {!Status} */
 static get f_success__org_patternfly_style_Status() {
  return (Status.$clinit(), Status.$static_success__org_patternfly_style_Status);
 }
 /** @nodts @return {!Status} */
 static get f_info__org_patternfly_style_Status() {
  return (Status.$clinit(), Status.$static_info__org_patternfly_style_Status);
 }
 /** @nodts @return {!Status} */
 static get f_custom__org_patternfly_style_Status() {
  return (Status.$clinit(), Status.$static_custom__org_patternfly_style_Status);
 }
 /** @nodts */
 static $clinit() {
  Status.$clinit = () =>{};
  Status.$loadModules();
  Enum.$clinit();
  Status.$static_danger__org_patternfly_style_Status = Status.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('danger'), Status.$ordinal_danger__org_patternfly_style_Status, 'danger');
  Status.$static_warning__org_patternfly_style_Status = Status.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('warning'), Status.$ordinal_warning__org_patternfly_style_Status, 'warning');
  Status.$static_success__org_patternfly_style_Status = Status.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('success'), Status.$ordinal_success__org_patternfly_style_Status, 'success');
  Status.$static_info__org_patternfly_style_Status = Status.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('info'), Status.$ordinal_info__org_patternfly_style_Status, 'info');
  Status.$static_custom__org_patternfly_style_Status = Status.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('custom'), Status.$ordinal_custom__org_patternfly_style_Status, 'custom');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Status;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Status.$ordinal_danger__org_patternfly_style_Status = 0;
/**@const {number} @nodts*/
Status.$ordinal_warning__org_patternfly_style_Status = 1;
/**@const {number} @nodts*/
Status.$ordinal_success__org_patternfly_style_Status = 2;
/**@const {number} @nodts*/
Status.$ordinal_info__org_patternfly_style_Status = 3;
/**@const {number} @nodts*/
Status.$ordinal_custom__org_patternfly_style_Status = 4;
/**@private {!Status} @nodts*/
Status.$static_danger__org_patternfly_style_Status;
/**@private {!Status} @nodts*/
Status.$static_warning__org_patternfly_style_Status;
/**@private {!Status} @nodts*/
Status.$static_success__org_patternfly_style_Status;
/**@private {!Status} @nodts*/
Status.$static_info__org_patternfly_style_Status;
/**@private {!Status} @nodts*/
Status.$static_custom__org_patternfly_style_Status;
/**@type {Map<?string, !Status>} @nodts*/
Status.f_namesToValuesMap__org_patternfly_style_Status_;
TypedModifier.$markImplementor(Status);
$Util.$setClassMetadataForEnum(Status, 'org.patternfly.style.Status');

exports = Status;

//# sourceMappingURL=Status.js.map
