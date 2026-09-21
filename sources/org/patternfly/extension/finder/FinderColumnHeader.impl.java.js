goog.module('org.patternfly.extension.finder.FinderColumnHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const FinderSubComponent = goog.require('org.patternfly.extension.finder.FinderSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let FinderColumnActions = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumnActions$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FinderSubComponent<HTMLElement, FinderColumnHeader>}
 * @implements {ElementTextDelegate<HTMLElement, FinderColumnHeader>}
 */
class FinderColumnHeader extends FinderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLContainerBuilder<HTMLHeadingElement>} @nodts*/
  this.f_h__org_patternfly_extension_finder_FinderColumnHeader_;
 }
 /** @nodts @return {FinderColumnHeader} */
 static m_finderColumnHeader__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader(/** ?string */ text) {
  FinderColumnHeader.$clinit();
  return /**@type {FinderColumnHeader}*/ ($Casts.$to(FinderColumnHeader.$create__int(4).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), FinderColumnHeader));
 }
 /** @nodts @return {FinderColumnHeader} */
 static m_finderColumnHeader__int__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader(/** number */ level, /** ?string */ text) {
  FinderColumnHeader.$clinit();
  return /**@type {FinderColumnHeader}*/ ($Casts.$to(FinderColumnHeader.$create__int(level).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), FinderColumnHeader));
 }
 /** @nodts @return {!FinderColumnHeader} */
 static $create__int(/** number */ level) {
  FinderColumnHeader.$clinit();
  let $instance = new FinderColumnHeader();
  $instance.$ctor__org_patternfly_extension_finder_FinderColumnHeader__int__void(level);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderColumnHeader__int__void(/** number */ level) {
  this.$ctor__org_patternfly_extension_finder_FinderSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FinderColumnHeader.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumnHeader, FinderColumnHeader.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderColumnHeader, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderClasses.f_column__org_patternfly_extension_finder_FinderClasses, Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_h__org_patternfly_extension_finder_FinderColumnHeader_ = (/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(level).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderClasses.f_column__org_patternfly_extension_finder_FinderClasses, Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return /**@type {HTMLHeadingElement}*/ ($Casts.$to(this.f_h__org_patternfly_extension_finder_FinderColumnHeader_.m_element__elemental2_dom_HTMLElement(), $Overlay));
 }
 /** @nodts @return {FinderColumnHeader} */
 m_addActions__org_patternfly_extension_finder_FinderColumnActions__org_patternfly_extension_finder_FinderColumnHeader(/** FinderColumnActions */ actions) {
  return /**@type {FinderColumnHeader}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(actions), FinderColumnHeader));
 }
 /** @nodts @return {FinderColumnHeader} */
 m_that__org_patternfly_extension_finder_FinderColumnHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumnHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_FinderColumnHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumnHeader} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {FinderColumnHeader}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), FinderColumnHeader));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {FinderColumnHeader} */
 m_text__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader(/** ?string */ arg0) {
  return /**@type {FinderColumnHeader}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), FinderColumnHeader));
 }
 /** @nodts */
 static $clinit() {
  FinderColumnHeader.$clinit = () =>{};
  FinderColumnHeader.$loadModules();
  FinderSubComponent.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderColumnHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  FinderClasses = goog.module.get('org.patternfly.extension.finder.FinderClasses$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FinderColumnHeader.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumnHeader = 'fch';
/**@const {string} @nodts*/
FinderColumnHeader.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderColumnHeader = 'FinderColumnHeader';
ElementTextDelegate.$markImplementor(FinderColumnHeader);
$Util.$setClassMetadata(FinderColumnHeader, 'org.patternfly.extension.finder.FinderColumnHeader');

exports = FinderColumnHeader;

//# sourceMappingURL=FinderColumnHeader.js.map
