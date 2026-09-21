goog.module('org.patternfly.component.page.PageWizard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageWizard>}
 */
class PageWizard extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageWizard} */
 static m_pageWizard__org_patternfly_component_page_PageWizard() {
  PageWizard.$clinit();
  return PageWizard.$create__();
 }
 /** @nodts @return {!PageWizard} */
 static $create__() {
  PageWizard.$clinit();
  let $instance = new PageWizard();
  $instance.$ctor__org_patternfly_component_page_PageWizard__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageWizard__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PageWizard.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageWizard, PageWizard.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageWizard, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_wizard__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageWizard} */
 m_addWizard__org_patternfly_component_wizard_Wizard__org_patternfly_component_page_PageWizard(/** Wizard */ wizard) {
  return /**@type {PageWizard}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(wizard), PageWizard));
 }
 /** @nodts @return {PageWizard} */
 m_that__org_patternfly_component_page_PageWizard() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageWizard} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageWizard();
 }
 /** @nodts */
 static $clinit() {
  PageWizard.$clinit = () =>{};
  PageWizard.$loadModules();
  PageSectionBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageWizard;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageWizard.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageWizard = 'pw';
/**@const {string} @nodts*/
PageWizard.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageWizard = 'PageWizard';
$Util.$setClassMetadata(PageWizard, 'org.patternfly.component.page.PageWizard');

exports = PageWizard;

//# sourceMappingURL=PageWizard.js.map
