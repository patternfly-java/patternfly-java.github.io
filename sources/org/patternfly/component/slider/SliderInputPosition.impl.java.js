goog.module('org.patternfly.component.slider.SliderInputPosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<SliderInputPosition>}
 */
class SliderInputPosition extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SliderInputPosition} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new SliderInputPosition();
  $instance.$ctor__org_patternfly_component_slider_SliderInputPosition__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_slider_SliderInputPosition__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!SliderInputPosition} */
 static m_valueOf__java_lang_String__org_patternfly_component_slider_SliderInputPosition(/** string */ name) {
  SliderInputPosition.$clinit();
  if ($Equality.$same(SliderInputPosition.f_namesToValuesMap__org_patternfly_component_slider_SliderInputPosition_, null)) {
   SliderInputPosition.f_namesToValuesMap__org_patternfly_component_slider_SliderInputPosition_ = (/**@type {Map<?string, !SliderInputPosition>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(SliderInputPosition.m_values__arrayOf_org_patternfly_component_slider_SliderInputPosition())));
  }
  return /**@type {SliderInputPosition}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, SliderInputPosition.f_namesToValuesMap__org_patternfly_component_slider_SliderInputPosition_));
 }
 /** @nodts @return {!Array<!SliderInputPosition>} */
 static m_values__arrayOf_org_patternfly_component_slider_SliderInputPosition() {
  SliderInputPosition.$clinit();
  return /**@type {!Array<!SliderInputPosition>}*/ ($Arrays.$stampType([SliderInputPosition.f_aboveThumb__org_patternfly_component_slider_SliderInputPosition, SliderInputPosition.f_end__org_patternfly_component_slider_SliderInputPosition], SliderInputPosition));
 }
 /** @nodts */
 static $clinit() {
  SliderInputPosition.$clinit = () =>{};
  SliderInputPosition.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SliderInputPosition;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
SliderInputPosition.$ordinal_aboveThumb__org_patternfly_component_slider_SliderInputPosition = 0;
/**@const {number} @nodts*/
SliderInputPosition.$ordinal_end__org_patternfly_component_slider_SliderInputPosition = 1;
/**@const {!SliderInputPosition} @nodts*/
SliderInputPosition.f_aboveThumb__org_patternfly_component_slider_SliderInputPosition = /**@pureOrBreakMyCode*/ SliderInputPosition.$create__java_lang_String__int($Util.$makeEnumName('aboveThumb'), SliderInputPosition.$ordinal_aboveThumb__org_patternfly_component_slider_SliderInputPosition);
/**@const {!SliderInputPosition} @nodts*/
SliderInputPosition.f_end__org_patternfly_component_slider_SliderInputPosition = /**@pureOrBreakMyCode*/ SliderInputPosition.$create__java_lang_String__int($Util.$makeEnumName('end'), SliderInputPosition.$ordinal_end__org_patternfly_component_slider_SliderInputPosition);
/**@type {Map<?string, !SliderInputPosition>} @nodts*/
SliderInputPosition.f_namesToValuesMap__org_patternfly_component_slider_SliderInputPosition_;
$Util.$setClassMetadataForEnum(SliderInputPosition, 'org.patternfly.component.slider.SliderInputPosition');

exports = SliderInputPosition;

//# sourceMappingURL=SliderInputPosition.js.map
