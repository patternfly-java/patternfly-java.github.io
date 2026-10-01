goog.module('org.patternfly.component.page.PageBreadcrumb$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Breadcrumb = goog.forwardDeclare('org.patternfly.component.breadcrumb.Breadcrumb$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageBreadcrumb>}
 */
class PageBreadcrumb extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageBreadcrumb} */
 static m_pageBreadcrumb__org_patternfly_component_page_PageBreadcrumb() {
  PageBreadcrumb.$clinit();
  return PageBreadcrumb.$create__();
 }
 /** @nodts @return {!PageBreadcrumb} */
 static $create__() {
  PageBreadcrumb.$clinit();
  let $instance = new PageBreadcrumb();
  $instance.$ctor__org_patternfly_component_page_PageBreadcrumb__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageBreadcrumb__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PageBreadcrumb.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageBreadcrumb, PageBreadcrumb.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageBreadcrumb, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_breadcrumb__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageBreadcrumb} */
 m_addBreadcrumb__org_patternfly_component_breadcrumb_Breadcrumb__org_patternfly_component_page_PageBreadcrumb(/** Breadcrumb */ breadcrumb) {
  return /**@type {PageBreadcrumb}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(breadcrumb), PageBreadcrumb));
 }
 /** @nodts @return {PageBreadcrumb} */
 m_that__org_patternfly_component_page_PageBreadcrumb() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageBreadcrumb} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageBreadcrumb();
 }
 /** @nodts */
 static $clinit() {
  PageBreadcrumb.$clinit = () =>{};
  PageBreadcrumb.$loadModules();
  PageSectionBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageBreadcrumb;
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
PageBreadcrumb.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageBreadcrumb = 'pb';
/**@const {string} @nodts*/
PageBreadcrumb.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageBreadcrumb = 'PageBreadcrumb';
$Util.$setClassMetadata(PageBreadcrumb, 'org.patternfly.component.page.PageBreadcrumb');

exports = PageBreadcrumb;

//# sourceMappingURL=PageBreadcrumb.js.map
