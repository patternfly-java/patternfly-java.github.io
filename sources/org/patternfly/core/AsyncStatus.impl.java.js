goog.module('org.patternfly.core.AsyncStatus$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<AsyncStatus>}
 */
class AsyncStatus extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!AsyncStatus} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new AsyncStatus();
  $instance.$ctor__org_patternfly_core_AsyncStatus__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_AsyncStatus__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!AsyncStatus} */
 static m_valueOf__java_lang_String__org_patternfly_core_AsyncStatus(/** string */ name) {
  AsyncStatus.$clinit();
  if ($Equality.$same(AsyncStatus.f_namesToValuesMap__org_patternfly_core_AsyncStatus_, null)) {
   AsyncStatus.f_namesToValuesMap__org_patternfly_core_AsyncStatus_ = (/**@type {Map<?string, !AsyncStatus>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(AsyncStatus.m_values__arrayOf_org_patternfly_core_AsyncStatus())));
  }
  return /**@type {AsyncStatus}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, AsyncStatus.f_namesToValuesMap__org_patternfly_core_AsyncStatus_));
 }
 /** @nodts @return {!Array<!AsyncStatus>} */
 static m_values__arrayOf_org_patternfly_core_AsyncStatus() {
  AsyncStatus.$clinit();
  return /**@type {!Array<!AsyncStatus>}*/ ($Arrays.$stampType([AsyncStatus.f_static___org_patternfly_core_AsyncStatus, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus, AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus], AsyncStatus));
 }
 /** @nodts */
 static $clinit() {
  AsyncStatus.$clinit = () =>{};
  AsyncStatus.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AsyncStatus;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
AsyncStatus.$ordinal_static___org_patternfly_core_AsyncStatus = 0;
/**@const {number} @nodts*/
AsyncStatus.$ordinal_pending__org_patternfly_core_AsyncStatus = 1;
/**@const {number} @nodts*/
AsyncStatus.$ordinal_resolved__org_patternfly_core_AsyncStatus = 2;
/**@const {number} @nodts*/
AsyncStatus.$ordinal_rejected__org_patternfly_core_AsyncStatus = 3;
/**@const {!AsyncStatus} @nodts*/
AsyncStatus.f_static___org_patternfly_core_AsyncStatus = /**@pureOrBreakMyCode*/ AsyncStatus.$create__java_lang_String__int($Util.$makeEnumName('static_'), AsyncStatus.$ordinal_static___org_patternfly_core_AsyncStatus);
/**@const {!AsyncStatus} @nodts*/
AsyncStatus.f_pending__org_patternfly_core_AsyncStatus = /**@pureOrBreakMyCode*/ AsyncStatus.$create__java_lang_String__int($Util.$makeEnumName('pending'), AsyncStatus.$ordinal_pending__org_patternfly_core_AsyncStatus);
/**@const {!AsyncStatus} @nodts*/
AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus = /**@pureOrBreakMyCode*/ AsyncStatus.$create__java_lang_String__int($Util.$makeEnumName('resolved'), AsyncStatus.$ordinal_resolved__org_patternfly_core_AsyncStatus);
/**@const {!AsyncStatus} @nodts*/
AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus = /**@pureOrBreakMyCode*/ AsyncStatus.$create__java_lang_String__int($Util.$makeEnumName('rejected'), AsyncStatus.$ordinal_rejected__org_patternfly_core_AsyncStatus);
/**@type {Map<?string, !AsyncStatus>} @nodts*/
AsyncStatus.f_namesToValuesMap__org_patternfly_core_AsyncStatus_;
$Util.$setClassMetadataForEnum(AsyncStatus, 'org.patternfly.core.AsyncStatus');

exports = AsyncStatus;

//# sourceMappingURL=AsyncStatus.js.map
