goog.module('org.patternfly.component.page.PageTabs$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Tabs = goog.forwardDeclare('org.patternfly.component.tabs.Tabs$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageTabs>}
 */
class PageTabs extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageTabs} */
 static m_pageTabs__org_patternfly_component_page_PageTabs() {
  PageTabs.$clinit();
  return PageTabs.$create__();
 }
 /** @nodts @return {!PageTabs} */
 static $create__() {
  PageTabs.$clinit();
  let $instance = new PageTabs();
  $instance.$ctor__org_patternfly_component_page_PageTabs__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageTabs__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PageTabs.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageTabs, PageTabs.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageTabs, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_tabs__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageTabs} */
 m_addTabs__org_patternfly_component_tabs_Tabs__org_patternfly_component_page_PageTabs(/** Tabs */ tabs) {
  return /**@type {PageTabs}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tabs), PageTabs));
 }
 /** @nodts @return {PageTabs} */
 m_that__org_patternfly_component_page_PageTabs() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageTabs} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageTabs();
 }
 /** @nodts */
 static $clinit() {
  PageTabs.$clinit = () =>{};
  PageTabs.$loadModules();
  PageSectionBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageTabs;
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
PageTabs.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageTabs = 'pt';
/**@const {string} @nodts*/
PageTabs.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageTabs = 'PageTabs';
$Util.$setClassMetadata(PageTabs, 'org.patternfly.component.page.PageTabs');

exports = PageTabs;

//# sourceMappingURL=PageTabs.js.map
