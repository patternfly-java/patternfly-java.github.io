goog.module('org.patternfly.component.truncate.TruncatePosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Classes = goog.require('org.patternfly.style.Classes$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<TruncatePosition>}
 */
class TruncatePosition extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_suffix__org_patternfly_component_truncate_TruncatePosition;
 }
 /** @nodts @return {!TruncatePosition} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ suffix) {
  let $instance = new TruncatePosition();
  $instance.$ctor__org_patternfly_component_truncate_TruncatePosition__java_lang_String__int__java_lang_String__void($name, $ordinal, suffix);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_truncate_TruncatePosition__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ suffix) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_suffix__org_patternfly_component_truncate_TruncatePosition = suffix;
 }
 /** @nodts @return {!TruncatePosition} */
 static m_valueOf__java_lang_String__org_patternfly_component_truncate_TruncatePosition(/** string */ name) {
  TruncatePosition.$clinit();
  if ($Equality.$same(TruncatePosition.f_namesToValuesMap__org_patternfly_component_truncate_TruncatePosition_, null)) {
   TruncatePosition.f_namesToValuesMap__org_patternfly_component_truncate_TruncatePosition_ = (/**@type {Map<?string, !TruncatePosition>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(TruncatePosition.m_values__arrayOf_org_patternfly_component_truncate_TruncatePosition())));
  }
  return /**@type {TruncatePosition}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, TruncatePosition.f_namesToValuesMap__org_patternfly_component_truncate_TruncatePosition_));
 }
 /** @nodts @return {!Array<!TruncatePosition>} */
 static m_values__arrayOf_org_patternfly_component_truncate_TruncatePosition() {
  TruncatePosition.$clinit();
  return /**@type {!Array<!TruncatePosition>}*/ ($Arrays.$stampType([TruncatePosition.f_start__org_patternfly_component_truncate_TruncatePosition, TruncatePosition.f_middle__org_patternfly_component_truncate_TruncatePosition, TruncatePosition.f_end__org_patternfly_component_truncate_TruncatePosition], TruncatePosition));
 }
 /** @nodts */
 static $clinit() {
  TruncatePosition.$clinit = () =>{};
  TruncatePosition.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TruncatePosition;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
TruncatePosition.$ordinal_start__org_patternfly_component_truncate_TruncatePosition = 0;
/**@const {number} @nodts*/
TruncatePosition.$ordinal_middle__org_patternfly_component_truncate_TruncatePosition = 1;
/**@const {number} @nodts*/
TruncatePosition.$ordinal_end__org_patternfly_component_truncate_TruncatePosition = 2;
/**@const {!TruncatePosition} @nodts*/
TruncatePosition.f_start__org_patternfly_component_truncate_TruncatePosition = /**@pureOrBreakMyCode*/ TruncatePosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('start'), TruncatePosition.$ordinal_start__org_patternfly_component_truncate_TruncatePosition, Classes.f_end__org_patternfly_style_Classes);
/**@const {!TruncatePosition} @nodts*/
TruncatePosition.f_middle__org_patternfly_component_truncate_TruncatePosition = /**@pureOrBreakMyCode*/ TruncatePosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('middle'), TruncatePosition.$ordinal_middle__org_patternfly_component_truncate_TruncatePosition, '');
/**@const {!TruncatePosition} @nodts*/
TruncatePosition.f_end__org_patternfly_component_truncate_TruncatePosition = /**@pureOrBreakMyCode*/ TruncatePosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('end'), TruncatePosition.$ordinal_end__org_patternfly_component_truncate_TruncatePosition, Classes.f_start__org_patternfly_style_Classes);
/**@type {Map<?string, !TruncatePosition>} @nodts*/
TruncatePosition.f_namesToValuesMap__org_patternfly_component_truncate_TruncatePosition_;
$Util.$setClassMetadataForEnum(TruncatePosition, 'org.patternfly.component.truncate.TruncatePosition');

exports = TruncatePosition;

//# sourceMappingURL=TruncatePosition.js.map
