goog.module('org.patternfly.component.page.PageNavigation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageNavigation>}
 */
class PageNavigation extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageNavigation} */
 static m_pageNavigation__org_patternfly_component_page_PageNavigation() {
  PageNavigation.$clinit();
  return PageNavigation.$create__();
 }
 /** @nodts @return {!PageNavigation} */
 static $create__() {
  PageNavigation.$clinit();
  let $instance = new PageNavigation();
  $instance.$ctor__org_patternfly_component_page_PageNavigation__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageNavigation__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PageNavigation.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageNavigation, PageNavigation.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageNavigation, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_nav__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageNavigation} */
 m_addNavigation__org_patternfly_component_navigation_Navigation__org_patternfly_component_page_PageNavigation(/** Navigation */ navigation) {
  return /**@type {PageNavigation}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(navigation), PageNavigation));
 }
 /** @nodts @return {PageNavigation} */
 m_that__org_patternfly_component_page_PageNavigation() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageNavigation} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageNavigation();
 }
 /** @nodts */
 static $clinit() {
  PageNavigation.$clinit = () =>{};
  PageNavigation.$loadModules();
  PageSectionBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageNavigation;
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
PageNavigation.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageNavigation = 'pn';
/**@const {string} @nodts*/
PageNavigation.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageNavigation = 'PageNavigation';
$Util.$setClassMetadata(PageNavigation, 'org.patternfly.component.page.PageNavigation');

exports = PageNavigation;

//# sourceMappingURL=PageNavigation.js.map
