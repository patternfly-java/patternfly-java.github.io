goog.module('org.patternfly.component.progressstepper.ProgressStepVariant.$6$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressStepVariant = goog.require('org.patternfly.component.progressstepper.ProgressStepVariant$impl');

let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');

/**
 * @final
 */
class $6 extends ProgressStepVariant {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$6} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ style) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_patternfly_component_progressstepper_ProgressStepVariant_6__java_lang_String__int__java_lang_String__void($name, $ordinal, style);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_progressstepper_ProgressStepVariant_6__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ style) {
  this.$ctor__org_patternfly_component_progressstepper_ProgressStepVariant__java_lang_String__int__java_lang_String__void($name, $ordinal, style);
 }
 /** @override @nodts @return {Element} */
 m_icon__elemental2_dom_Element() {
  return rhUi.m_errorFill__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement();
 }
 /** @nodts */
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  ProgressStepVariant.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 /** @nodts */
 static $loadModules() {
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
 }
}
$Util.$setClassMetadata($6, 'org.patternfly.component.progressstepper.ProgressStepVariant$6');

exports = $6;

//# sourceMappingURL=ProgressStepVariant$6.js.map
