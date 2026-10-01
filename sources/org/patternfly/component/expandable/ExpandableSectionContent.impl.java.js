goog.module('org.patternfly.component.expandable.ExpandableSectionContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const ExpandableSectionSubComponent = goog.require('org.patternfly.component.expandable.ExpandableSectionSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ExpandableSectionSubComponent<HTMLDivElement, ExpandableSectionContent>}
 * @implements {ElementTextMethods<HTMLDivElement, ExpandableSectionContent>}
 */
class ExpandableSectionContent extends ExpandableSectionSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {ExpandableSectionContent} */
 static m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent() {
  ExpandableSectionContent.$clinit();
  return ExpandableSectionContent.$create__();
 }
 /** @nodts @return {!ExpandableSectionContent} */
 static $create__() {
  ExpandableSectionContent.$clinit();
  let $instance = new ExpandableSectionContent();
  $instance.$ctor__org_patternfly_component_expandable_ExpandableSectionContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_expandable_ExpandableSectionContent__void() {
  this.$ctor__org_patternfly_component_expandable_ExpandableSectionSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ExpandableSectionContent.f_SUB_COMPONENT_ID__org_patternfly_component_expandable_ExpandableSectionContent, ExpandableSectionContent.f_SUB_COMPONENT_NAME__org_patternfly_component_expandable_ExpandableSectionContent, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLDivElement */ e) =>{
   let e_1 = /**@type {HTMLDivElement}*/ ($Casts.$to(e, $Overlay));
   e_1.hidden = true;
  })), HTMLContainerBuilder))).m_role__java_lang_String__org_jboss_elemento_TypedBuilder(Roles.f_region__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {ExpandableSectionContent} */
 m_that__org_patternfly_component_expandable_ExpandableSectionContent() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_expandable_ExpandableSectionContent();
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionContent} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ExpandableSectionContent}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableSectionContent));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableSectionContent} */
 m_text__java_lang_String__org_patternfly_component_expandable_ExpandableSectionContent(/** ?string */ arg0) {
  return /**@type {ExpandableSectionContent}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableSectionContent));
 }
 /** @nodts */
 static $clinit() {
  ExpandableSectionContent.$clinit = () =>{};
  ExpandableSectionContent.$loadModules();
  ExpandableSectionSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableSectionContent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ExpandableSectionContent.f_SUB_COMPONENT_ID__org_patternfly_component_expandable_ExpandableSectionContent = 'esc';
/**@const {string} @nodts*/
ExpandableSectionContent.f_SUB_COMPONENT_NAME__org_patternfly_component_expandable_ExpandableSectionContent = 'ExpandableSectionContent';
ElementTextMethods.$markImplementor(ExpandableSectionContent);
$Util.$setClassMetadata(ExpandableSectionContent, 'org.patternfly.component.expandable.ExpandableSectionContent');

exports = ExpandableSectionContent;

//# sourceMappingURL=ExpandableSectionContent.js.map
