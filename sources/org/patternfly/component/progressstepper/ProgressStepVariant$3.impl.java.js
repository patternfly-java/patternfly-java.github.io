goog.module('org.patternfly.component.progressstepper.ProgressStepVariant.$3$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressStepVariant = goog.require('org.patternfly.component.progressstepper.ProgressStepVariant$impl');

let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');

/**
 * @final
 */
class $3 extends ProgressStepVariant {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$3} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ style) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_patternfly_component_progressstepper_ProgressStepVariant_3__java_lang_String__int__java_lang_String__void($name, $ordinal, style);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_progressstepper_ProgressStepVariant_3__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ style) {
  this.$ctor__org_patternfly_component_progressstepper_ProgressStepVariant__java_lang_String__int__java_lang_String__void($name, $ordinal, style);
 }
 /** @override @nodts @return {Element} */
 m_icon__elemental2_dom_Element() {
  return patternfly.m_resourcesFull__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement();
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  ProgressStepVariant.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
 }
}
$Util.$setClassMetadata($3, 'org.patternfly.component.progressstepper.ProgressStepVariant$3');

exports = $3;

//# sourceMappingURL=ProgressStepVariant$3.js.map
