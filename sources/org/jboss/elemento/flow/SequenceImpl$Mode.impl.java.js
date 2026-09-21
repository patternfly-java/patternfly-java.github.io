goog.module('org.jboss.elemento.flow.SequenceImpl.Mode$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Mode>}
 */
class Mode extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Mode} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Mode();
  $instance.$ctor__org_jboss_elemento_flow_SequenceImpl_Mode__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_flow_SequenceImpl_Mode__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Mode} */
 static m_valueOf__java_lang_String__org_jboss_elemento_flow_SequenceImpl_Mode(/** string */ name) {
  Mode.$clinit();
  if ($Equality.$same(Mode.f_namesToValuesMap__org_jboss_elemento_flow_SequenceImpl_Mode_, null)) {
   Mode.f_namesToValuesMap__org_jboss_elemento_flow_SequenceImpl_Mode_ = (/**@type {Map<?string, !Mode>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Mode.m_values__arrayOf_org_jboss_elemento_flow_SequenceImpl_Mode())));
  }
  return /**@type {Mode}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Mode.f_namesToValuesMap__org_jboss_elemento_flow_SequenceImpl_Mode_));
 }
 /** @nodts @return {!Array<!Mode>} */
 static m_values__arrayOf_org_jboss_elemento_flow_SequenceImpl_Mode() {
  Mode.$clinit();
  return /**@type {!Array<!Mode>}*/ ($Arrays.$stampType([Mode.f_PARALLEL__org_jboss_elemento_flow_SequenceImpl_Mode, Mode.f_SEQUENTIAL__org_jboss_elemento_flow_SequenceImpl_Mode], Mode));
 }
 /** @nodts */
 static $clinit() {
  Mode.$clinit = () =>{};
  Mode.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Mode;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Mode.$ordinal_PARALLEL__org_jboss_elemento_flow_SequenceImpl_Mode = 0;
/**@const {number} @nodts*/
Mode.$ordinal_SEQUENTIAL__org_jboss_elemento_flow_SequenceImpl_Mode = 1;
/**@const {!Mode} @nodts*/
Mode.f_PARALLEL__org_jboss_elemento_flow_SequenceImpl_Mode = /**@pureOrBreakMyCode*/ Mode.$create__java_lang_String__int($Util.$makeEnumName('PARALLEL'), Mode.$ordinal_PARALLEL__org_jboss_elemento_flow_SequenceImpl_Mode);
/**@const {!Mode} @nodts*/
Mode.f_SEQUENTIAL__org_jboss_elemento_flow_SequenceImpl_Mode = /**@pureOrBreakMyCode*/ Mode.$create__java_lang_String__int($Util.$makeEnumName('SEQUENTIAL'), Mode.$ordinal_SEQUENTIAL__org_jboss_elemento_flow_SequenceImpl_Mode);
/**@type {Map<?string, !Mode>} @nodts*/
Mode.f_namesToValuesMap__org_jboss_elemento_flow_SequenceImpl_Mode_;
$Util.$setClassMetadataForEnum(Mode, 'org.jboss.elemento.flow.SequenceImpl$Mode');

exports = Mode;

//# sourceMappingURL=SequenceImpl$Mode.js.map
