goog.module('org.patternfly.component.progressstepper.ProgressStepVariant.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressStepVariant = goog.require('org.patternfly.component.progressstepper.ProgressStepVariant$impl');

/**
 * @final
 */
class $4 extends ProgressStepVariant {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$4} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ style) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_patternfly_component_progressstepper_ProgressStepVariant_4__java_lang_String__int__java_lang_String__void($name, $ordinal, style);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_progressstepper_ProgressStepVariant_4__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ style) {
  this.$ctor__org_patternfly_component_progressstepper_ProgressStepVariant__java_lang_String__int__java_lang_String__void($name, $ordinal, style);
 }
 /** @override @nodts @return {Element} */
 m_icon__elemental2_dom_Element() {
  return null;
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  ProgressStepVariant.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($4, 'org.patternfly.component.progressstepper.ProgressStepVariant$4');

exports = $4;

//# sourceMappingURL=ProgressStepVariant$4.js.map
