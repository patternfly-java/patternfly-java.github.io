goog.module('org.jboss.elemento.router.PlaceManager.ErrorType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<ErrorType>}
 */
class ErrorType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ErrorType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new ErrorType();
  $instance.$ctor__org_jboss_elemento_router_PlaceManager_ErrorType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_PlaceManager_ErrorType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!ErrorType} */
 static m_valueOf__java_lang_String__org_jboss_elemento_router_PlaceManager_ErrorType(/** string */ name) {
  if ($Equality.$same(ErrorType.f_namesToValuesMap__org_jboss_elemento_router_PlaceManager_ErrorType_, null)) {
   ErrorType.f_namesToValuesMap__org_jboss_elemento_router_PlaceManager_ErrorType_ = (/**@type {Map<?string, !ErrorType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ErrorType.m_values__arrayOf_org_jboss_elemento_router_PlaceManager_ErrorType())));
  }
  return /**@type {ErrorType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ErrorType.f_namesToValuesMap__org_jboss_elemento_router_PlaceManager_ErrorType_));
 }
 /** @nodts @return {!Array<!ErrorType>} */
 static m_values__arrayOf_org_jboss_elemento_router_PlaceManager_ErrorType() {
  return /**@type {!Array<!ErrorType>}*/ ($Arrays.$stampType([ErrorType.f_NO_ERROR__org_jboss_elemento_router_PlaceManager_ErrorType, ErrorType.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_ErrorType, ErrorType.f_NO_DATA__org_jboss_elemento_router_PlaceManager_ErrorType, ErrorType.f_UNDEFINED__org_jboss_elemento_router_PlaceManager_ErrorType], ErrorType));
 }
 /** @nodts */
 static $clinit() {
  ErrorType.$clinit = () =>{};
  ErrorType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ErrorType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ErrorType.$ordinal_NO_ERROR__org_jboss_elemento_router_PlaceManager_ErrorType = 0;
/**@const {number} @nodts*/
ErrorType.$ordinal_NOT_FOUND__org_jboss_elemento_router_PlaceManager_ErrorType = 1;
/**@const {number} @nodts*/
ErrorType.$ordinal_NO_DATA__org_jboss_elemento_router_PlaceManager_ErrorType = 2;
/**@const {number} @nodts*/
ErrorType.$ordinal_UNDEFINED__org_jboss_elemento_router_PlaceManager_ErrorType = 3;
/**@const {!ErrorType} @nodts*/
ErrorType.f_NO_ERROR__org_jboss_elemento_router_PlaceManager_ErrorType = /**@pureOrBreakMyCode*/ ErrorType.$create__java_lang_String__int($Util.$makeEnumName('NO_ERROR'), ErrorType.$ordinal_NO_ERROR__org_jboss_elemento_router_PlaceManager_ErrorType);
/**@const {!ErrorType} @nodts*/
ErrorType.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_ErrorType = /**@pureOrBreakMyCode*/ ErrorType.$create__java_lang_String__int($Util.$makeEnumName('NOT_FOUND'), ErrorType.$ordinal_NOT_FOUND__org_jboss_elemento_router_PlaceManager_ErrorType);
/**@const {!ErrorType} @nodts*/
ErrorType.f_NO_DATA__org_jboss_elemento_router_PlaceManager_ErrorType = /**@pureOrBreakMyCode*/ ErrorType.$create__java_lang_String__int($Util.$makeEnumName('NO_DATA'), ErrorType.$ordinal_NO_DATA__org_jboss_elemento_router_PlaceManager_ErrorType);
/**@const {!ErrorType} @nodts*/
ErrorType.f_UNDEFINED__org_jboss_elemento_router_PlaceManager_ErrorType = /**@pureOrBreakMyCode*/ ErrorType.$create__java_lang_String__int($Util.$makeEnumName('UNDEFINED'), ErrorType.$ordinal_UNDEFINED__org_jboss_elemento_router_PlaceManager_ErrorType);
/**@type {Map<?string, !ErrorType>} @nodts*/
ErrorType.f_namesToValuesMap__org_jboss_elemento_router_PlaceManager_ErrorType_;
$Util.$setClassMetadataForEnum(ErrorType, 'org.jboss.elemento.router.PlaceManager$ErrorType');

exports = ErrorType;

//# sourceMappingURL=PlaceManager$ErrorType.js.map
