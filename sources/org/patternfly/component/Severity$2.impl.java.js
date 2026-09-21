goog.module('org.patternfly.component.Severity.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Severity = goog.require('org.patternfly.component.Severity$impl');

let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');

/**
 * @final
 */
class $2 extends Severity {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$2} */
 static $create__java_lang_String__int__org_patternfly_style_Status(/** ?string */ $name, /** number */ $ordinal, /** Status */ status) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_patternfly_component_Severity_2__java_lang_String__int__org_patternfly_style_Status__void($name, $ordinal, status);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Severity_2__java_lang_String__int__org_patternfly_style_Status__void(/** ?string */ $name, /** number */ $ordinal, /** Status */ status) {
  this.$ctor__org_patternfly_component_Severity__java_lang_String__int__org_patternfly_style_Status__void($name, $ordinal, status);
 }
 /** @override @nodts @return {PredefinedIcon} */
 m_icon__org_patternfly_icon_PredefinedIcon() {
  return rhUi.m_informationFill__org_patternfly_icon_PredefinedIcon();
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Severity.$clinit();
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
$Util.$setClassMetadata($2, 'org.patternfly.component.Severity$2');

exports = $2;

//# sourceMappingURL=Severity$2.js.map
