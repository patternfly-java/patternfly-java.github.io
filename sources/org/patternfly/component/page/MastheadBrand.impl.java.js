goog.module('org.patternfly.component.page.MastheadBrand$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const MastheadSubComponent = goog.require('org.patternfly.component.page.MastheadSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let MastheadLogo = goog.forwardDeclare('org.patternfly.component.page.MastheadLogo$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MastheadSubComponent<HTMLElement, MastheadBrand>}
 * @implements {ElementTextMethods<HTMLElement, MastheadBrand>}
 */
class MastheadBrand extends MastheadSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MastheadBrand} */
 static m_mastheadBrand__org_patternfly_component_page_MastheadBrand() {
  MastheadBrand.$clinit();
  return MastheadBrand.$create__();
 }
 /** @nodts @return {!MastheadBrand} */
 static $create__() {
  MastheadBrand.$clinit();
  let $instance = new MastheadBrand();
  $instance.$ctor__org_patternfly_component_page_MastheadBrand__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_MastheadBrand__void() {
  this.$ctor__org_patternfly_component_page_MastheadSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MastheadBrand.f_SUB_COMPONENT_ID__org_patternfly_component_page_MastheadBrand, MastheadBrand.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadBrand, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_brand__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {MastheadBrand} */
 m_addLogo__org_patternfly_component_page_MastheadLogo__org_patternfly_component_page_MastheadBrand(/** MastheadLogo */ logo) {
  return /**@type {MastheadBrand}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(logo), MastheadBrand));
 }
 /** @nodts @return {MastheadBrand} */
 m_that__org_patternfly_component_page_MastheadBrand() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadBrand} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_MastheadBrand();
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadBrand} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {MastheadBrand}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), MastheadBrand));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {MastheadBrand} */
 m_text__java_lang_String__org_patternfly_component_page_MastheadBrand(/** ?string */ arg0) {
  return /**@type {MastheadBrand}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), MastheadBrand));
 }
 /** @nodts */
 static $clinit() {
  MastheadBrand.$clinit = () =>{};
  MastheadBrand.$loadModules();
  MastheadSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadBrand;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MastheadBrand.f_SUB_COMPONENT_ID__org_patternfly_component_page_MastheadBrand = 'mhb';
/**@const {string} @nodts*/
MastheadBrand.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadBrand = 'MastheadBrand';
ElementTextMethods.$markImplementor(MastheadBrand);
$Util.$setClassMetadata(MastheadBrand, 'org.patternfly.component.page.MastheadBrand');

exports = MastheadBrand;

//# sourceMappingURL=MastheadBrand.js.map
