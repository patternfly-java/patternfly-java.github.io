goog.module('org.patternfly.component.textinputgroup.TextInputGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseTextInputGroup = goog.require('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');

let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseTextInputGroup<TextInputGroup>}
 */
class TextInputGroup extends BaseTextInputGroup {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {TextInputGroup} */
 static m_textInputGroup__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroup(/** ?string */ id) {
  TextInputGroup.$clinit();
  return TextInputGroup.$create__java_lang_String(id);
 }
 /** @nodts @return {TextInputGroup} */
 static m_textInputGroup__java_lang_String__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroup(/** ?string */ id, /** ?string */ value) {
  TextInputGroup.$clinit();
  return /**@type {TextInputGroup}*/ ($Casts.$to(TextInputGroup.$create__java_lang_String(id).m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(value), TextInputGroup));
 }
 /** @nodts @return {!TextInputGroup} */
 static $create__java_lang_String(/** ?string */ id) {
  TextInputGroup.$clinit();
  let $instance = new TextInputGroup();
  $instance.$ctor__org_patternfly_component_textinputgroup_TextInputGroup__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_TextInputGroup__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_textinputgroup_BaseTextInputGroup__org_patternfly_component_ComponentType__java_lang_String__void(ComponentType.f_TextInputGroup__org_patternfly_component_ComponentType, id);
 }
 /** @nodts @return {TextInputGroup} */
 m_that__org_patternfly_component_textinputgroup_TextInputGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_TextInputGroup();
 }
 /** @nodts */
 static $clinit() {
  TextInputGroup.$clinit = () =>{};
  TextInputGroup.$loadModules();
  BaseTextInputGroup.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TextInputGroup, 'org.patternfly.component.textinputgroup.TextInputGroup');

exports = TextInputGroup;

//# sourceMappingURL=TextInputGroup.js.map
