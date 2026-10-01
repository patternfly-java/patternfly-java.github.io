goog.module('org.patternfly.overlay.TriggerMode$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<TriggerMode>}
 */
class TriggerMode extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TriggerMode} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new TriggerMode();
  $instance.$ctor__org_patternfly_overlay_TriggerMode__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_overlay_TriggerMode__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!TriggerMode} */
 static m_valueOf__java_lang_String__org_patternfly_overlay_TriggerMode(/** string */ name) {
  TriggerMode.$clinit();
  if ($Equality.$same(TriggerMode.f_namesToValuesMap__org_patternfly_overlay_TriggerMode_, null)) {
   TriggerMode.f_namesToValuesMap__org_patternfly_overlay_TriggerMode_ = (/**@type {Map<?string, !TriggerMode>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(TriggerMode.m_values__arrayOf_org_patternfly_overlay_TriggerMode())));
  }
  return /**@type {TriggerMode}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, TriggerMode.f_namesToValuesMap__org_patternfly_overlay_TriggerMode_));
 }
 /** @nodts @return {!Array<!TriggerMode>} */
 static m_values__arrayOf_org_patternfly_overlay_TriggerMode() {
  TriggerMode.$clinit();
  return /**@type {!Array<!TriggerMode>}*/ ($Arrays.$stampType([TriggerMode.f_hover__org_patternfly_overlay_TriggerMode, TriggerMode.f_click__org_patternfly_overlay_TriggerMode, TriggerMode.f_manual__org_patternfly_overlay_TriggerMode], TriggerMode));
 }
 /** @nodts */
 static $clinit() {
  TriggerMode.$clinit = () =>{};
  TriggerMode.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TriggerMode;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
TriggerMode.$ordinal_hover__org_patternfly_overlay_TriggerMode = 0;
/**@const {number} @nodts*/
TriggerMode.$ordinal_click__org_patternfly_overlay_TriggerMode = 1;
/**@const {number} @nodts*/
TriggerMode.$ordinal_manual__org_patternfly_overlay_TriggerMode = 2;
/**@const {!TriggerMode} @nodts*/
TriggerMode.f_hover__org_patternfly_overlay_TriggerMode = /**@pureOrBreakMyCode*/ TriggerMode.$create__java_lang_String__int($Util.$makeEnumName('hover'), TriggerMode.$ordinal_hover__org_patternfly_overlay_TriggerMode);
/**@const {!TriggerMode} @nodts*/
TriggerMode.f_click__org_patternfly_overlay_TriggerMode = /**@pureOrBreakMyCode*/ TriggerMode.$create__java_lang_String__int($Util.$makeEnumName('click'), TriggerMode.$ordinal_click__org_patternfly_overlay_TriggerMode);
/**@const {!TriggerMode} @nodts*/
TriggerMode.f_manual__org_patternfly_overlay_TriggerMode = /**@pureOrBreakMyCode*/ TriggerMode.$create__java_lang_String__int($Util.$makeEnumName('manual'), TriggerMode.$ordinal_manual__org_patternfly_overlay_TriggerMode);
/**@type {Map<?string, !TriggerMode>} @nodts*/
TriggerMode.f_namesToValuesMap__org_patternfly_overlay_TriggerMode_;
$Util.$setClassMetadataForEnum(TriggerMode, 'org.patternfly.overlay.TriggerMode');

exports = TriggerMode;

//# sourceMappingURL=TriggerMode.js.map
