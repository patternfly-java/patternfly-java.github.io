goog.module('org.patternfly.component.wizard.WizardHeaderTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const WizardSubComponent = goog.require('org.patternfly.component.wizard.WizardSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {WizardSubComponent<HTMLElement, WizardHeaderTitle>}
 * @implements {ElementTextDelegate<HTMLElement, WizardHeaderTitle>}
 */
class WizardHeaderTitle extends WizardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_wizard_WizardHeaderTitle_;
 }
 /** @nodts @return {WizardHeaderTitle} */
 static m_wizardHeaderTitle__org_patternfly_component_wizard_WizardHeaderTitle() {
  WizardHeaderTitle.$clinit();
  return WizardHeaderTitle.$create__int(2);
 }
 /** @nodts @return {WizardHeaderTitle} */
 static m_wizardHeaderTitle__java_lang_String__org_patternfly_component_wizard_WizardHeaderTitle(/** ?string */ text) {
  WizardHeaderTitle.$clinit();
  return /**@type {WizardHeaderTitle}*/ ($Casts.$to(WizardHeaderTitle.$create__int(2).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), WizardHeaderTitle));
 }
 /** @nodts @return {WizardHeaderTitle} */
 static m_wizardHeaderTitle__int__org_patternfly_component_wizard_WizardHeaderTitle(/** number */ headerLevel) {
  WizardHeaderTitle.$clinit();
  return WizardHeaderTitle.$create__int(headerLevel);
 }
 /** @nodts @return {WizardHeaderTitle} */
 static m_wizardHeaderTitle__int__java_lang_String__org_patternfly_component_wizard_WizardHeaderTitle(/** number */ headerLevel, /** ?string */ text) {
  WizardHeaderTitle.$clinit();
  return /**@type {WizardHeaderTitle}*/ ($Casts.$to(WizardHeaderTitle.$create__int(headerLevel).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), WizardHeaderTitle));
 }
 /** @nodts @return {!WizardHeaderTitle} */
 static $create__int(/** number */ headerLevel) {
  WizardHeaderTitle.$clinit();
  let $instance = new WizardHeaderTitle();
  $instance.$ctor__org_patternfly_component_wizard_WizardHeaderTitle__int__void(headerLevel);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardHeaderTitle__int__void(/** number */ headerLevel) {
  this.$ctor__org_patternfly_component_wizard_WizardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(WizardHeaderTitle.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardHeaderTitle, WizardHeaderTitle.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardHeaderTitle, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_wizard_WizardHeaderTitle_ = (/**@type {HTMLHeadingElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(headerLevel).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay))));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_wizard_WizardHeaderTitle_;
 }
 /** @nodts @return {WizardHeaderTitle} */
 m_that__org_patternfly_component_wizard_WizardHeaderTitle() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardHeaderTitle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_WizardHeaderTitle();
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardHeaderTitle} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {WizardHeaderTitle}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), WizardHeaderTitle));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardHeaderTitle} */
 m_text__java_lang_String__org_patternfly_component_wizard_WizardHeaderTitle(/** ?string */ arg0) {
  return /**@type {WizardHeaderTitle}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), WizardHeaderTitle));
 }
 /** @nodts */
 static $clinit() {
  WizardHeaderTitle.$clinit = () =>{};
  WizardHeaderTitle.$loadModules();
  WizardSubComponent.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardHeaderTitle;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
WizardHeaderTitle.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardHeaderTitle = 'wzht';
/**@const {string} @nodts*/
WizardHeaderTitle.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardHeaderTitle = 'WizardHeaderTitle';
ElementTextDelegate.$markImplementor(WizardHeaderTitle);
$Util.$setClassMetadata(WizardHeaderTitle, 'org.patternfly.component.wizard.WizardHeaderTitle');

exports = WizardHeaderTitle;

//# sourceMappingURL=WizardHeaderTitle.js.map
