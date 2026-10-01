goog.module('org.patternfly.component.page.PageSidebar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const PageSubComponent = goog.require('org.patternfly.component.page.PageSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let PageSidebarBody = goog.forwardDeclare('org.patternfly.component.page.PageSidebarBody$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSubComponent<HTMLElement, PageSidebar>}
 * @implements {ElementContainerDelegate<HTMLElement, PageSidebar>}
 * @implements {Expandable<HTMLElement, PageSidebar>}
 */
class PageSidebar extends PageSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_keepExpanded__org_patternfly_component_page_PageSidebar_ = false;
  /**@type {List<ToggleHandler<PageSidebar>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_page_PageSidebar_;
  /**@type {HTMLElement} @nodts*/
  this.f_sidebarMain__org_patternfly_component_page_PageSidebar_;
 }
 /** @nodts @return {PageSidebar} */
 static m_pageSidebar__org_patternfly_component_page_PageSidebar() {
  PageSidebar.$clinit();
  return PageSidebar.$create__();
 }
 /** @nodts @return {!PageSidebar} */
 static $create__() {
  PageSidebar.$clinit();
  let $instance = new PageSidebar();
  $instance.$ctor__org_patternfly_component_page_PageSidebar__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageSidebar__void() {
  this.$ctor__org_patternfly_component_page_PageSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PageSidebar.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageSidebar, PageSidebar.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageSidebar, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_aside__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_sidebar__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, false), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_keepExpanded__org_patternfly_component_page_PageSidebar_ = false;
  this.f_toggleHandler__org_patternfly_component_page_PageSidebar_ = (/**@type {!ArrayList<ToggleHandler<PageSidebar>>}*/ (ArrayList.$create__()));
  this.f_sidebarMain__org_patternfly_component_page_PageSidebar_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_sidebar__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_sidebarMain__org_patternfly_component_page_PageSidebar_);
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_sidebarMain__org_patternfly_component_page_PageSidebar_;
 }
 /** @nodts @return {PageSidebar} */
 m_addBody__org_patternfly_component_page_PageSidebarBody__org_patternfly_component_page_PageSidebar(/** PageSidebarBody */ body) {
  return /**@type {PageSidebar}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), PageSidebar));
 }
 /** @nodts @return {PageSidebar} */
 m_keepExpanded__org_patternfly_component_page_PageSidebar() {
  this.f_keepExpanded__org_patternfly_component_page_PageSidebar_ = true;
  return this;
 }
 /** @nodts @return {PageSidebar} */
 m_that__org_patternfly_component_page_PageSidebar() {
  return this;
 }
 /** @nodts @return {PageSidebar} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_page_PageSidebar(/** ToggleHandler<PageSidebar> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_page_PageSidebar_.add(toggleHandler);
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (!this.f_keepExpanded__org_patternfly_component_page_PageSidebar_) {
   this.m_ouiaTransition__void();
   this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
   this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_collapsed__org_patternfly_style_Classes));
   this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true);
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_page_PageSidebar_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<PageSidebar> */ th) =>{
     let th_1 = /**@type {ToggleHandler<PageSidebar>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
    }));
   }
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  this.m_ouiaTransition__void();
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_collapsed__org_patternfly_style_Classes));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, false);
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_page_PageSidebar_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<PageSidebar> */ th) =>{
    let th_1 = /**@type {ToggleHandler<PageSidebar>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
   }));
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebar} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageSidebar();
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebar} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PageSidebar}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebar));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebar} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {PageSidebar}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebar));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebar} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {PageSidebar}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebar));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebar} */
 m_add__java_lang_String__org_patternfly_component_page_PageSidebar(/** ?string */ arg0) {
  return /**@type {PageSidebar}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebar));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebar} */
 m_add__elemental2_dom_Node__org_patternfly_component_page_PageSidebar(/** Node */ arg0) {
  return /**@type {PageSidebar}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebar));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebar} */
 m_add__java_util_function_Supplier__org_patternfly_component_page_PageSidebar(/** Supplier<Node> */ arg0) {
  return /**@type {PageSidebar}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebar));
 }
 /** @nodts */
 static $clinit() {
  PageSidebar.$clinit = () =>{};
  PageSidebar.$loadModules();
  PageSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
  Expandable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageSidebar;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageSidebar.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageSidebar = 'psb';
/**@const {string} @nodts*/
PageSidebar.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageSidebar = 'PageSidebar';
ElementContainerDelegate.$markImplementor(PageSidebar);
Expandable.$markImplementor(PageSidebar);
$Util.$setClassMetadata(PageSidebar, 'org.patternfly.component.page.PageSidebar');

exports = PageSidebar;

//# sourceMappingURL=PageSidebar.js.map
