goog.module('org.patternfly.component.numberinput.UnitPosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<UnitPosition>}
 */
class UnitPosition extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!UnitPosition} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new UnitPosition();
  $instance.$ctor__org_patternfly_component_numberinput_UnitPosition__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_numberinput_UnitPosition__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!UnitPosition} */
 static m_valueOf__java_lang_String__org_patternfly_component_numberinput_UnitPosition(/** string */ name) {
  UnitPosition.$clinit();
  if ($Equality.$same(UnitPosition.f_namesToValuesMap__org_patternfly_component_numberinput_UnitPosition_, null)) {
   UnitPosition.f_namesToValuesMap__org_patternfly_component_numberinput_UnitPosition_ = (/**@type {Map<?string, !UnitPosition>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(UnitPosition.m_values__arrayOf_org_patternfly_component_numberinput_UnitPosition())));
  }
  return /**@type {UnitPosition}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, UnitPosition.f_namesToValuesMap__org_patternfly_component_numberinput_UnitPosition_));
 }
 /** @nodts @return {!Array<!UnitPosition>} */
 static m_values__arrayOf_org_patternfly_component_numberinput_UnitPosition() {
  UnitPosition.$clinit();
  return /**@type {!Array<!UnitPosition>}*/ ($Arrays.$stampType([UnitPosition.f_before__org_patternfly_component_numberinput_UnitPosition, UnitPosition.f_after__org_patternfly_component_numberinput_UnitPosition], UnitPosition));
 }
 /** @nodts */
 static $clinit() {
  UnitPosition.$clinit = () =>{};
  UnitPosition.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnitPosition;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
UnitPosition.$ordinal_before__org_patternfly_component_numberinput_UnitPosition = 0;
/**@const {number} @nodts*/
UnitPosition.$ordinal_after__org_patternfly_component_numberinput_UnitPosition = 1;
/**@const {!UnitPosition} @nodts*/
UnitPosition.f_before__org_patternfly_component_numberinput_UnitPosition = /**@pureOrBreakMyCode*/ UnitPosition.$create__java_lang_String__int($Util.$makeEnumName('before'), UnitPosition.$ordinal_before__org_patternfly_component_numberinput_UnitPosition);
/**@const {!UnitPosition} @nodts*/
UnitPosition.f_after__org_patternfly_component_numberinput_UnitPosition = /**@pureOrBreakMyCode*/ UnitPosition.$create__java_lang_String__int($Util.$makeEnumName('after'), UnitPosition.$ordinal_after__org_patternfly_component_numberinput_UnitPosition);
/**@type {Map<?string, !UnitPosition>} @nodts*/
UnitPosition.f_namesToValuesMap__org_patternfly_component_numberinput_UnitPosition_;
$Util.$setClassMetadataForEnum(UnitPosition, 'org.patternfly.component.numberinput.UnitPosition');

exports = UnitPosition;

//# sourceMappingURL=UnitPosition.js.map
