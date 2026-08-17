goog.module('org.patternfly.component.ValidationStatus.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValidationStatus = goog.require('org.patternfly.component.ValidationStatus$impl');

let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');

/**
 * @final
 */
class $1 extends ValidationStatus {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$1} */
 static $create__java_lang_String__int__org_patternfly_style_Status__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** Status */ status, /** ?string */ modifier) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_patternfly_component_ValidationStatus_1__java_lang_String__int__org_patternfly_style_Status__java_lang_String__void($name, $ordinal, status, modifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ValidationStatus_1__java_lang_String__int__org_patternfly_style_Status__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** Status */ status, /** ?string */ modifier) {
  this.$ctor__org_patternfly_component_ValidationStatus__java_lang_String__int__org_patternfly_style_Status__java_lang_String__void($name, $ordinal, status, modifier);
 }
 /** @override @nodts @return {PredefinedIcon} */
 m_icon__org_patternfly_icon_PredefinedIcon() {
  return null;
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  ValidationStatus.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'org.patternfly.component.ValidationStatus$1');

exports = $1;

//# sourceMappingURL=ValidationStatus$1.js.map
