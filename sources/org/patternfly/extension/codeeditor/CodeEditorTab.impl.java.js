goog.module('org.patternfly.extension.codeeditor.CodeEditorTab$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CodeEditorSubComponent = goog.require('org.patternfly.extension.codeeditor.CodeEditorSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeEditorTabIcon = goog.forwardDeclare('org.patternfly.extension.codeeditor.CodeEditorTabIcon$impl');
let CodeEditorTabText = goog.forwardDeclare('org.patternfly.extension.codeeditor.CodeEditorTabText$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeEditorSubComponent<HTMLDivElement, CodeEditorTab>}
 */
class CodeEditorTab extends CodeEditorSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CodeEditorTab} */
 static m_codeEditorTab__org_patternfly_extension_codeeditor_CodeEditorTab() {
  CodeEditorTab.$clinit();
  return CodeEditorTab.$create__();
 }
 /** @nodts @return {CodeEditorTab} */
 static m_codeEditorTab__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_extension_codeeditor_CodeEditorTab(/** PredefinedIcon */ icon, /** ?string */ text) {
  CodeEditorTab.$clinit();
  return CodeEditorTab.$create__().m_addIcon__org_patternfly_extension_codeeditor_CodeEditorTabIcon__org_patternfly_extension_codeeditor_CodeEditorTab(CodeEditorTabIcon.m_codeEditorTabIcon__elemental2_dom_Element__org_patternfly_extension_codeeditor_CodeEditorTabIcon(icon.m_element__org_jboss_elemento_svg_SVGElement())).m_addText__org_patternfly_extension_codeeditor_CodeEditorTabText__org_patternfly_extension_codeeditor_CodeEditorTab(CodeEditorTabText.m_codeEditorTabText__java_lang_String__org_patternfly_extension_codeeditor_CodeEditorTabText(text));
 }
 /** @nodts @return {CodeEditorTab} */
 static m_codeEditorTab__elemental2_dom_Element__java_lang_String__org_patternfly_extension_codeeditor_CodeEditorTab(/** Element */ icon, /** ?string */ text) {
  CodeEditorTab.$clinit();
  return CodeEditorTab.$create__().m_addIcon__org_patternfly_extension_codeeditor_CodeEditorTabIcon__org_patternfly_extension_codeeditor_CodeEditorTab(CodeEditorTabIcon.m_codeEditorTabIcon__elemental2_dom_Element__org_patternfly_extension_codeeditor_CodeEditorTabIcon(icon)).m_addText__org_patternfly_extension_codeeditor_CodeEditorTabText__org_patternfly_extension_codeeditor_CodeEditorTab(CodeEditorTabText.m_codeEditorTabText__java_lang_String__org_patternfly_extension_codeeditor_CodeEditorTabText(text));
 }
 /** @nodts @return {!CodeEditorTab} */
 static $create__() {
  CodeEditorTab.$clinit();
  let $instance = new CodeEditorTab();
  $instance.$ctor__org_patternfly_extension_codeeditor_CodeEditorTab__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_codeeditor_CodeEditorTab__void() {
  this.$ctor__org_patternfly_extension_codeeditor_CodeEditorSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(CodeEditorTab.f_SUB_COMPONENT_ID__org_patternfly_extension_codeeditor_CodeEditorTab, CodeEditorTab.f_SUB_COMPONENT_NAME__org_patternfly_extension_codeeditor_CodeEditorTab, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_tab__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts @return {CodeEditorTab} */
 m_addIcon__org_patternfly_extension_codeeditor_CodeEditorTabIcon__org_patternfly_extension_codeeditor_CodeEditorTab(/** CodeEditorTabIcon */ icon) {
  return /**@type {CodeEditorTab}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(icon), CodeEditorTab));
 }
 /** @nodts @return {CodeEditorTab} */
 m_addText__org_patternfly_extension_codeeditor_CodeEditorTabText__org_patternfly_extension_codeeditor_CodeEditorTab(/** CodeEditorTabText */ text) {
  return /**@type {CodeEditorTab}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(text), CodeEditorTab));
 }
 /** @nodts @return {CodeEditorTab} */
 m_that__org_patternfly_extension_codeeditor_CodeEditorTab() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorTab} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_codeeditor_CodeEditorTab();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorTab.$clinit = () =>{};
  CodeEditorTab.$loadModules();
  CodeEditorSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorTab;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CodeEditorTabIcon = goog.module.get('org.patternfly.extension.codeeditor.CodeEditorTabIcon$impl');
  CodeEditorTabText = goog.module.get('org.patternfly.extension.codeeditor.CodeEditorTabText$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CodeEditorTab.f_SUB_COMPONENT_ID__org_patternfly_extension_codeeditor_CodeEditorTab = 'cet';
/**@const {string} @nodts*/
CodeEditorTab.f_SUB_COMPONENT_NAME__org_patternfly_extension_codeeditor_CodeEditorTab = 'CodeEditorTab';
$Util.$setClassMetadata(CodeEditorTab, 'org.patternfly.extension.codeeditor.CodeEditorTab');

exports = CodeEditorTab;

//# sourceMappingURL=CodeEditorTab.js.map
