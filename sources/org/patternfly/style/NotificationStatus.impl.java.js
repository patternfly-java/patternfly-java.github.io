goog.module('org.patternfly.style.NotificationStatus$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<NotificationStatus>}
 * @implements {TypedModifier}
 */
class NotificationStatus extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_NotificationStatus_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_NotificationStatus_;
 }
 /** @nodts @return {!NotificationStatus} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new NotificationStatus();
  $instance.$ctor__org_patternfly_style_NotificationStatus__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_NotificationStatus__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_NotificationStatus_ = value;
  this.f_modifier__org_patternfly_style_NotificationStatus_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_NotificationStatus_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_NotificationStatus_;
 }
 /** @nodts @return {!NotificationStatus} */
 static m_valueOf__java_lang_String__org_patternfly_style_NotificationStatus(/** string */ name) {
  NotificationStatus.$clinit();
  if ($Equality.$same(NotificationStatus.f_namesToValuesMap__org_patternfly_style_NotificationStatus_, null)) {
   NotificationStatus.f_namesToValuesMap__org_patternfly_style_NotificationStatus_ = (/**@type {Map<?string, !NotificationStatus>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(NotificationStatus.m_values__arrayOf_org_patternfly_style_NotificationStatus())));
  }
  return /**@type {NotificationStatus}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, NotificationStatus.f_namesToValuesMap__org_patternfly_style_NotificationStatus_));
 }
 /** @nodts @return {!Array<!NotificationStatus>} */
 static m_values__arrayOf_org_patternfly_style_NotificationStatus() {
  NotificationStatus.$clinit();
  return /**@type {!Array<!NotificationStatus>}*/ ($Arrays.$stampType([NotificationStatus.$static_read__org_patternfly_style_NotificationStatus, NotificationStatus.$static_unread__org_patternfly_style_NotificationStatus, NotificationStatus.$static_attention__org_patternfly_style_NotificationStatus], NotificationStatus));
 }
 /** @nodts @return {!NotificationStatus} */
 static get f_read__org_patternfly_style_NotificationStatus() {
  return (NotificationStatus.$clinit(), NotificationStatus.$static_read__org_patternfly_style_NotificationStatus);
 }
 /** @nodts @return {!NotificationStatus} */
 static get f_unread__org_patternfly_style_NotificationStatus() {
  return (NotificationStatus.$clinit(), NotificationStatus.$static_unread__org_patternfly_style_NotificationStatus);
 }
 /** @nodts @return {!NotificationStatus} */
 static get f_attention__org_patternfly_style_NotificationStatus() {
  return (NotificationStatus.$clinit(), NotificationStatus.$static_attention__org_patternfly_style_NotificationStatus);
 }
 /** @nodts */
 static $clinit() {
  NotificationStatus.$clinit = () =>{};
  NotificationStatus.$loadModules();
  Enum.$clinit();
  NotificationStatus.$static_read__org_patternfly_style_NotificationStatus = NotificationStatus.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('read'), NotificationStatus.$ordinal_read__org_patternfly_style_NotificationStatus, 'read');
  NotificationStatus.$static_unread__org_patternfly_style_NotificationStatus = NotificationStatus.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('unread'), NotificationStatus.$ordinal_unread__org_patternfly_style_NotificationStatus, 'unread');
  NotificationStatus.$static_attention__org_patternfly_style_NotificationStatus = NotificationStatus.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('attention'), NotificationStatus.$ordinal_attention__org_patternfly_style_NotificationStatus, 'attention');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationStatus;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
NotificationStatus.$ordinal_read__org_patternfly_style_NotificationStatus = 0;
/**@const {number} @nodts*/
NotificationStatus.$ordinal_unread__org_patternfly_style_NotificationStatus = 1;
/**@const {number} @nodts*/
NotificationStatus.$ordinal_attention__org_patternfly_style_NotificationStatus = 2;
/**@private {!NotificationStatus} @nodts*/
NotificationStatus.$static_read__org_patternfly_style_NotificationStatus;
/**@private {!NotificationStatus} @nodts*/
NotificationStatus.$static_unread__org_patternfly_style_NotificationStatus;
/**@private {!NotificationStatus} @nodts*/
NotificationStatus.$static_attention__org_patternfly_style_NotificationStatus;
/**@type {Map<?string, !NotificationStatus>} @nodts*/
NotificationStatus.f_namesToValuesMap__org_patternfly_style_NotificationStatus_;
TypedModifier.$markImplementor(NotificationStatus);
$Util.$setClassMetadataForEnum(NotificationStatus, 'org.patternfly.style.NotificationStatus');

exports = NotificationStatus;

//# sourceMappingURL=NotificationStatus.js.map
