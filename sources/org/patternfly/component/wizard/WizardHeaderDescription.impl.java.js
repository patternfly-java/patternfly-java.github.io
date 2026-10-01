goog.module('org.patternfly.component.wizard.WizardHeaderDescription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const WizardSubComponent = goog.require('org.patternfly.component.wizard.WizardSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {WizardSubComponent<HTMLElement, WizardHeaderDescription>}
 * @implements {ElementTextMethods<HTMLElement, WizardHeaderDescription>}
 */
class WizardHeaderDescription extends WizardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {WizardHeaderDescription} */
 static m_wizardHeaderDescription__org_patternfly_component_wizard_WizardHeaderDescription() {
  WizardHeaderDescription.$clinit();
  return WizardHeaderDescription.$create__();
 }
 /** @nodts @return {WizardHeaderDescription} */
 static m_wizardHeaderDescription__java_lang_String__org_patternfly_component_wizard_WizardHeaderDescription(/** ?string */ text) {
  WizardHeaderDescription.$clinit();
  return /**@type {WizardHeaderDescription}*/ ($Casts.$to(WizardHeaderDescription.$create__().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), WizardHeaderDescription));
 }
 /** @nodts @return {!WizardHeaderDescription} */
 static $create__() {
  WizardHeaderDescription.$clinit();
  let $instance = new WizardHeaderDescription();
  $instance.$ctor__org_patternfly_component_wizard_WizardHeaderDescription__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardHeaderDescription__void() {
  this.$ctor__org_patternfly_component_wizard_WizardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(WizardHeaderDescription.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardHeaderDescription, WizardHeaderDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardHeaderDescription, /**@type {HTMLParagraphElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {WizardHeaderDescription} */
 m_that__org_patternfly_component_wizard_WizardHeaderDescription() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardHeaderDescription} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_WizardHeaderDescription();
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardHeaderDescription} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {WizardHeaderDescription}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), WizardHeaderDescription));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardHeaderDescription} */
 m_text__java_lang_String__org_patternfly_component_wizard_WizardHeaderDescription(/** ?string */ arg0) {
  return /**@type {WizardHeaderDescription}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), WizardHeaderDescription));
 }
 /** @nodts */
 static $clinit() {
  WizardHeaderDescription.$clinit = () =>{};
  WizardHeaderDescription.$loadModules();
  WizardSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardHeaderDescription;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
WizardHeaderDescription.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardHeaderDescription = 'wzhd';
/**@const {string} @nodts*/
WizardHeaderDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardHeaderDescription = 'WizardHeaderDescription';
ElementTextMethods.$markImplementor(WizardHeaderDescription);
$Util.$setClassMetadata(WizardHeaderDescription, 'org.patternfly.component.wizard.WizardHeaderDescription');

exports = WizardHeaderDescription;

//# sourceMappingURL=WizardHeaderDescription.js.map
