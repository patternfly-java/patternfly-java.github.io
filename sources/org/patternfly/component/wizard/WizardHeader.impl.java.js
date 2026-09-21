goog.module('org.patternfly.component.wizard.WizardHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WizardSubComponent = goog.require('org.patternfly.component.wizard.WizardSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardHeaderDescription = goog.forwardDeclare('org.patternfly.component.wizard.WizardHeaderDescription$impl');
let WizardHeaderTitle = goog.forwardDeclare('org.patternfly.component.wizard.WizardHeaderTitle$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {WizardSubComponent<HTMLElement, WizardHeader>}
 */
class WizardHeader extends WizardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_closeContainer__org_patternfly_component_wizard_WizardHeader_;
 }
 /** @nodts @return {WizardHeader} */
 static m_wizardHeader__org_patternfly_component_wizard_WizardHeader() {
  WizardHeader.$clinit();
  return WizardHeader.$create__();
 }
 /** @nodts @return {!WizardHeader} */
 static $create__() {
  WizardHeader.$clinit();
  let $instance = new WizardHeader();
  $instance.$ctor__org_patternfly_component_wizard_WizardHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardHeader__void() {
  this.$ctor__org_patternfly_component_wizard_WizardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(WizardHeader.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardHeader, WizardHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardHeader, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_closeContainer__org_patternfly_component_wizard_WizardHeader_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ c) =>{
   let c_1 = /**@type {Button}*/ ($Casts.$to(c, Button));
   let wizard = /**@type {Wizard}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Wizard));
   wizard.m_cancel__void();
  }))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @nodts @return {WizardHeader} */
 m_addTitle__org_patternfly_component_wizard_WizardHeaderTitle__org_patternfly_component_wizard_WizardHeader(/** WizardHeaderTitle */ title) {
  return this.m_add__org_patternfly_component_wizard_WizardHeaderTitle__org_patternfly_component_wizard_WizardHeader(title);
 }
 /** @nodts @return {WizardHeader} */
 m_add__org_patternfly_component_wizard_WizardHeaderTitle__org_patternfly_component_wizard_WizardHeader(/** WizardHeaderTitle */ title) {
  Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(title.m_element__elemental2_dom_HTMLElement(), this.f_closeContainer__org_patternfly_component_wizard_WizardHeader_);
  return this;
 }
 /** @nodts @return {WizardHeader} */
 m_addDescription__org_patternfly_component_wizard_WizardHeaderDescription__org_patternfly_component_wizard_WizardHeader(/** WizardHeaderDescription */ description) {
  return this.m_add__org_patternfly_component_wizard_WizardHeaderDescription__org_patternfly_component_wizard_WizardHeader(description);
 }
 /** @nodts @return {WizardHeader} */
 m_add__org_patternfly_component_wizard_WizardHeaderDescription__org_patternfly_component_wizard_WizardHeader(/** WizardHeaderDescription */ description) {
  return /**@type {WizardHeader}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(description.m_element__elemental2_dom_HTMLElement()), WizardHeader));
 }
 /** @nodts @return {WizardHeader} */
 m_that__org_patternfly_component_wizard_WizardHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_WizardHeader();
 }
 /** @nodts */
 static $clinit() {
  WizardHeader.$clinit = () =>{};
  WizardHeader.$loadModules();
  WizardSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Wizard = goog.module.get('org.patternfly.component.wizard.Wizard$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
WizardHeader.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardHeader = 'wzh';
/**@const {string} @nodts*/
WizardHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardHeader = 'WizardHeader';
$Util.$setClassMetadata(WizardHeader, 'org.patternfly.component.wizard.WizardHeader');

exports = WizardHeader;

//# sourceMappingURL=WizardHeader.js.map
