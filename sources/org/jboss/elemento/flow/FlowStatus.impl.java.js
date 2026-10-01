goog.module('org.jboss.elemento.flow.FlowStatus$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<FlowStatus>}
 */
class FlowStatus extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!FlowStatus} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new FlowStatus();
  $instance.$ctor__org_jboss_elemento_flow_FlowStatus__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_FlowStatus__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!FlowStatus} */
 static m_valueOf__java_lang_String__org_jboss_elemento_flow_FlowStatus(/** string */ name) {
  FlowStatus.$clinit();
  if ($Equality.$same(FlowStatus.f_namesToValuesMap__org_jboss_elemento_flow_FlowStatus_, null)) {
   FlowStatus.f_namesToValuesMap__org_jboss_elemento_flow_FlowStatus_ = (/**@type {Map<?string, !FlowStatus>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(FlowStatus.m_values__arrayOf_org_jboss_elemento_flow_FlowStatus())));
  }
  return /**@type {FlowStatus}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, FlowStatus.f_namesToValuesMap__org_jboss_elemento_flow_FlowStatus_));
 }
 /** @nodts @return {!Array<!FlowStatus>} */
 static m_values__arrayOf_org_jboss_elemento_flow_FlowStatus() {
  FlowStatus.$clinit();
  return /**@type {!Array<!FlowStatus>}*/ ($Arrays.$stampType([FlowStatus.f_NOT_STARTED__org_jboss_elemento_flow_FlowStatus, FlowStatus.f_IN_PROGRESS__org_jboss_elemento_flow_FlowStatus, FlowStatus.f_SUCCESS__org_jboss_elemento_flow_FlowStatus, FlowStatus.f_TIMEOUT__org_jboss_elemento_flow_FlowStatus, FlowStatus.f_FAILURE__org_jboss_elemento_flow_FlowStatus], FlowStatus));
 }
 /** @nodts */
 static $clinit() {
  FlowStatus.$clinit = () =>{};
  FlowStatus.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FlowStatus;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
FlowStatus.$ordinal_NOT_STARTED__org_jboss_elemento_flow_FlowStatus = 0;
/**@const {number} @nodts*/
FlowStatus.$ordinal_IN_PROGRESS__org_jboss_elemento_flow_FlowStatus = 1;
/**@const {number} @nodts*/
FlowStatus.$ordinal_SUCCESS__org_jboss_elemento_flow_FlowStatus = 2;
/**@const {number} @nodts*/
FlowStatus.$ordinal_TIMEOUT__org_jboss_elemento_flow_FlowStatus = 3;
/**@const {number} @nodts*/
FlowStatus.$ordinal_FAILURE__org_jboss_elemento_flow_FlowStatus = 4;
/**@const {!FlowStatus} @nodts*/
FlowStatus.f_NOT_STARTED__org_jboss_elemento_flow_FlowStatus = /**@pureOrBreakMyCode*/ FlowStatus.$create__java_lang_String__int($Util.$makeEnumName('NOT_STARTED'), FlowStatus.$ordinal_NOT_STARTED__org_jboss_elemento_flow_FlowStatus);
/**@const {!FlowStatus} @nodts*/
FlowStatus.f_IN_PROGRESS__org_jboss_elemento_flow_FlowStatus = /**@pureOrBreakMyCode*/ FlowStatus.$create__java_lang_String__int($Util.$makeEnumName('IN_PROGRESS'), FlowStatus.$ordinal_IN_PROGRESS__org_jboss_elemento_flow_FlowStatus);
/**@const {!FlowStatus} @nodts*/
FlowStatus.f_SUCCESS__org_jboss_elemento_flow_FlowStatus = /**@pureOrBreakMyCode*/ FlowStatus.$create__java_lang_String__int($Util.$makeEnumName('SUCCESS'), FlowStatus.$ordinal_SUCCESS__org_jboss_elemento_flow_FlowStatus);
/**@const {!FlowStatus} @nodts*/
FlowStatus.f_TIMEOUT__org_jboss_elemento_flow_FlowStatus = /**@pureOrBreakMyCode*/ FlowStatus.$create__java_lang_String__int($Util.$makeEnumName('TIMEOUT'), FlowStatus.$ordinal_TIMEOUT__org_jboss_elemento_flow_FlowStatus);
/**@const {!FlowStatus} @nodts*/
FlowStatus.f_FAILURE__org_jboss_elemento_flow_FlowStatus = /**@pureOrBreakMyCode*/ FlowStatus.$create__java_lang_String__int($Util.$makeEnumName('FAILURE'), FlowStatus.$ordinal_FAILURE__org_jboss_elemento_flow_FlowStatus);
/**@type {Map<?string, !FlowStatus>} @nodts*/
FlowStatus.f_namesToValuesMap__org_jboss_elemento_flow_FlowStatus_;
$Util.$setClassMetadataForEnum(FlowStatus, 'org.jboss.elemento.flow.FlowStatus');

exports = FlowStatus;

//# sourceMappingURL=FlowStatus.js.map
