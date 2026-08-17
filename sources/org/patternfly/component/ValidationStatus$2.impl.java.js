goog.module('org.patternfly.component.ValidationStatus.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValidationStatus = goog.require('org.patternfly.component.ValidationStatus$impl');

let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');

/**
 * @final
 */
class $2 extends ValidationStatus {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$2} */
 static $create__java_lang_String__int__org_patternfly_style_Status__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** Status */ status, /** ?string */ modifier) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_patternfly_component_ValidationStatus_2__java_lang_String__int__org_patternfly_style_Status__java_lang_String__void($name, $ordinal, status, modifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ValidationStatus_2__java_lang_String__int__org_patternfly_style_Status__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** Status */ status, /** ?string */ modifier) {
  this.$ctor__org_patternfly_component_ValidationStatus__java_lang_String__int__org_patternfly_style_Status__java_lang_String__void($name, $ordinal, status, modifier);
 }
 /** @override @nodts @return {PredefinedIcon} */
 m_icon__org_patternfly_icon_PredefinedIcon() {
  return rhUi.m_minus__org_patternfly_icon_PredefinedIcon();
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  ValidationStatus.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 /** @nodts */
 static $loadModules() {
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
 }
}
$Util.$setClassMetadata($2, 'org.patternfly.component.ValidationStatus$2');

exports = $2;

//# sourceMappingURL=ValidationStatus$2.js.map
