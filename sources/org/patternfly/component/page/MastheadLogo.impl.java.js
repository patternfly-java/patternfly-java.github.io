goog.module('org.patternfly.component.page.MastheadLogo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementHTMLMethods = goog.require('org.jboss.elemento.ElementHTMLMethods$impl');
const MastheadSubComponent = goog.require('org.patternfly.component.page.MastheadSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MastheadSubComponent<HTMLElement, MastheadLogo>}
 * @implements {ElementHTMLMethods<HTMLElement, MastheadLogo>}
 */
class MastheadLogo extends MastheadSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MastheadLogo} */
 static m_mastheadLogo__java_lang_String__org_patternfly_component_page_MastheadLogo(/** ?string */ href) {
  MastheadLogo.$clinit();
  return MastheadLogo.$create__java_lang_String(href);
 }
 /** @nodts @return {!MastheadLogo} */
 static $create__java_lang_String(/** ?string */ href) {
  MastheadLogo.$clinit();
  let $instance = new MastheadLogo();
  $instance.$ctor__org_patternfly_component_page_MastheadLogo__java_lang_String__void(href);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_MastheadLogo__java_lang_String__void(/** ?string */ href) {
  this.$ctor__org_patternfly_component_page_MastheadSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MastheadLogo.f_SUB_COMPONENT_ID__org_patternfly_component_page_MastheadLogo, MastheadLogo.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadLogo, /**@type {HTMLAnchorElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(href).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_logo__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {MastheadLogo} */
 m_that__org_patternfly_component_page_MastheadLogo() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadLogo} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_MastheadLogo();
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadLogo} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {MastheadLogo}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), MastheadLogo));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {SafeHtml} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml() {
  return ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {MastheadLogo} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_page_MastheadLogo(/** SafeHtml */ arg0) {
  return /**@type {MastheadLogo}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), MastheadLogo));
 }
 /** @nodts */
 static $clinit() {
  MastheadLogo.$clinit = () =>{};
  MastheadLogo.$loadModules();
  MastheadSubComponent.$clinit();
  ElementHTMLMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadLogo;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MastheadLogo.f_SUB_COMPONENT_ID__org_patternfly_component_page_MastheadLogo = 'mhl';
/**@const {string} @nodts*/
MastheadLogo.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadLogo = 'MastheadLogo';
ElementHTMLMethods.$markImplementor(MastheadLogo);
$Util.$setClassMetadata(MastheadLogo, 'org.patternfly.component.page.MastheadLogo');

exports = MastheadLogo;

//# sourceMappingURL=MastheadLogo.js.map
