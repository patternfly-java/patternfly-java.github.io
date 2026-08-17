goog.module('org.patternfly.component.Severity.$3$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Severity = goog.require('org.patternfly.component.Severity$impl');

let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');

/**
 * @final
 */
class $3 extends Severity {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$3} */
 static $create__java_lang_String__int__org_patternfly_style_Status(/** ?string */ $name, /** number */ $ordinal, /** Status */ status) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_patternfly_component_Severity_3__java_lang_String__int__org_patternfly_style_Status__void($name, $ordinal, status);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Severity_3__java_lang_String__int__org_patternfly_style_Status__void(/** ?string */ $name, /** number */ $ordinal, /** Status */ status) {
  this.$ctor__org_patternfly_component_Severity__java_lang_String__int__org_patternfly_style_Status__void($name, $ordinal, status);
 }
 /** @override @nodts @return {PredefinedIcon} */
 m_icon__org_patternfly_icon_PredefinedIcon() {
  return rhUi.m_checkCircleFill__org_patternfly_icon_PredefinedIcon();
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  Severity.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
 }
}
$Util.$setClassMetadata($3, 'org.patternfly.component.Severity$3');

exports = $3;

//# sourceMappingURL=Severity$3.js.map
