goog.module('org.patternfly.extension.finder.FinderItemDescription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const FinderSubComponent = goog.require('org.patternfly.extension.finder.FinderSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FinderSubComponent<HTMLElement, FinderItemDescription>}
 * @implements {ElementTextMethods<HTMLElement, FinderItemDescription>}
 */
class FinderItemDescription extends FinderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FinderItemDescription} */
 static m_finderItemDescription__org_patternfly_extension_finder_FinderItemDescription() {
  FinderItemDescription.$clinit();
  return FinderItemDescription.$create__();
 }
 /** @nodts @return {!FinderItemDescription} */
 static $create__() {
  FinderItemDescription.$clinit();
  let $instance = new FinderItemDescription();
  $instance.$ctor__org_patternfly_extension_finder_FinderItemDescription__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderItemDescription__void() {
  this.$ctor__org_patternfly_extension_finder_FinderSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FinderItemDescription.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItemDescription, FinderItemDescription.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderItemDescription, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {FinderItemDescription} */
 m_that__org_patternfly_extension_finder_FinderItemDescription() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderItemDescription} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_FinderItemDescription();
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderItemDescription} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {FinderItemDescription}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), FinderItemDescription));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {FinderItemDescription} */
 m_text__java_lang_String__org_patternfly_extension_finder_FinderItemDescription(/** ?string */ arg0) {
  return /**@type {FinderItemDescription}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), FinderItemDescription));
 }
 /** @nodts */
 static $clinit() {
  FinderItemDescription.$clinit = () =>{};
  FinderItemDescription.$loadModules();
  FinderSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderItemDescription;
 }
 
 /** @nodts */
 static $loadModules() {
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
FinderItemDescription.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItemDescription = 'fid';
/**@const {string} @nodts*/
FinderItemDescription.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderItemDescription = 'FinderItemDescription';
ElementTextMethods.$markImplementor(FinderItemDescription);
$Util.$setClassMetadata(FinderItemDescription, 'org.patternfly.extension.finder.FinderItemDescription');

exports = FinderItemDescription;

//# sourceMappingURL=FinderItemDescription.js.map
