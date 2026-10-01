goog.module('org.patternfly.component.page.PageSection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');
const Glass = goog.require('org.patternfly.style.Modifiers.Glass$impl');
const NoFill = goog.require('org.patternfly.style.Modifiers.NoFill$impl');
const Secondary = goog.require('org.patternfly.style.Modifiers.Secondary$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageSection>}
 * @implements {Fill<HTMLElement, PageSection>}
 * @implements {ElementContainerDelegate<HTMLElement, PageSection>}
 * @implements {Glass<HTMLElement, PageSection>}
 * @implements {NoFill<HTMLElement, PageSection>}
 * @implements {Secondary<HTMLElement, PageSection>}
 */
class PageSection extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_container__org_patternfly_component_page_PageSection_;
 }
 /** @nodts @return {PageSection} */
 static m_pageSection__org_patternfly_component_page_PageSection() {
  PageSection.$clinit();
  return PageSection.$create__();
 }
 /** @nodts @return {!PageSection} */
 static $create__() {
  PageSection.$clinit();
  let $instance = new PageSection();
  $instance.$ctor__org_patternfly_component_page_PageSection__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageSection__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PageSection.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageSection, PageSection.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageSection, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_container__org_patternfly_component_page_PageSection_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_container__org_patternfly_component_page_PageSection_;
 }
 /** @nodts @return {PageSection} */
 m_that__org_patternfly_component_page_PageSection() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageSection();
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_glass__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageSection}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__org_jboss_elemento_TypedBuilder(this), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_glass__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_noFill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_secondary__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageSection}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), PageSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSection} */
 m_secondary__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_fill__org_patternfly_component_page_PageSection() {
  return /**@type {PageSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_fill__boolean__org_patternfly_component_page_PageSection(/** boolean */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_add__java_lang_String__org_patternfly_component_page_PageSection(/** ?string */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_add__elemental2_dom_Node__org_patternfly_component_page_PageSection(/** Node */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_add__java_util_function_Supplier__org_patternfly_component_page_PageSection(/** Supplier<Node> */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_glass__org_patternfly_component_page_PageSection() {
  return /**@type {PageSection}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__org_jboss_elemento_TypedBuilder(this), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_glass__boolean__org_patternfly_component_page_PageSection(/** boolean */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_noFill__org_patternfly_component_page_PageSection() {
  return /**@type {PageSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_noFill__boolean__org_patternfly_component_page_PageSection(/** boolean */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_secondary__org_patternfly_component_page_PageSection() {
  return /**@type {PageSection}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), PageSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSection} */
 m_secondary__boolean__org_patternfly_component_page_PageSection(/** boolean */ arg0) {
  return /**@type {PageSection}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSection));
 }
 /** @nodts */
 static $clinit() {
  PageSection.$clinit = () =>{};
  PageSection.$loadModules();
  PageSectionBuilder.$clinit();
  Fill.$clinit();
  ElementContainerDelegate.$clinit();
  Glass.$clinit();
  NoFill.$clinit();
  Secondary.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageSection;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageSection.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageSection = 'ps';
/**@const {string} @nodts*/
PageSection.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageSection = 'PageSection';
Fill.$markImplementor(PageSection);
ElementContainerDelegate.$markImplementor(PageSection);
Glass.$markImplementor(PageSection);
NoFill.$markImplementor(PageSection);
Secondary.$markImplementor(PageSection);
$Util.$setClassMetadata(PageSection, 'org.patternfly.component.page.PageSection');

exports = PageSection;

//# sourceMappingURL=PageSection.js.map
