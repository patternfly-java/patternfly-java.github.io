goog.module('org.patternfly.extension.codeeditor.CodeEditorTabText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const CodeEditorSubComponent = goog.require('org.patternfly.extension.codeeditor.CodeEditorSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeEditorSubComponent<HTMLElement, CodeEditorTabText>}
 * @implements {ElementTextMethods<HTMLElement, CodeEditorTabText>}
 */
class CodeEditorTabText extends CodeEditorSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CodeEditorTabText} */
 static m_codeEditorTabText__org_patternfly_extension_codeeditor_CodeEditorTabText() {
  CodeEditorTabText.$clinit();
  return CodeEditorTabText.$create__();
 }
 /** @nodts @return {CodeEditorTabText} */
 static m_codeEditorTabText__java_lang_String__org_patternfly_extension_codeeditor_CodeEditorTabText(/** ?string */ text) {
  CodeEditorTabText.$clinit();
  return /**@type {CodeEditorTabText}*/ ($Casts.$to(CodeEditorTabText.$create__().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), CodeEditorTabText));
 }
 /** @nodts @return {!CodeEditorTabText} */
 static $create__() {
  CodeEditorTabText.$clinit();
  let $instance = new CodeEditorTabText();
  $instance.$ctor__org_patternfly_extension_codeeditor_CodeEditorTabText__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_codeeditor_CodeEditorTabText__void() {
  this.$ctor__org_patternfly_extension_codeeditor_CodeEditorSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(CodeEditorTabText.f_SUB_COMPONENT_ID__org_patternfly_extension_codeeditor_CodeEditorTabText, CodeEditorTabText.f_SUB_COMPONENT_NAME__org_patternfly_extension_codeeditor_CodeEditorTabText, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_tab__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {CodeEditorTabText} */
 m_that__org_patternfly_extension_codeeditor_CodeEditorTabText() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorTabText} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_codeeditor_CodeEditorTabText();
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorTabText} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {CodeEditorTabText}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CodeEditorTabText));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {CodeEditorTabText} */
 m_text__java_lang_String__org_patternfly_extension_codeeditor_CodeEditorTabText(/** ?string */ arg0) {
  return /**@type {CodeEditorTabText}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CodeEditorTabText));
 }
 /** @nodts */
 static $clinit() {
  CodeEditorTabText.$clinit = () =>{};
  CodeEditorTabText.$loadModules();
  CodeEditorSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorTabText;
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
CodeEditorTabText.f_SUB_COMPONENT_ID__org_patternfly_extension_codeeditor_CodeEditorTabText = 'cett';
/**@const {string} @nodts*/
CodeEditorTabText.f_SUB_COMPONENT_NAME__org_patternfly_extension_codeeditor_CodeEditorTabText = 'CodeEditorTabText';
ElementTextMethods.$markImplementor(CodeEditorTabText);
$Util.$setClassMetadata(CodeEditorTabText, 'org.patternfly.extension.codeeditor.CodeEditorTabText');

exports = CodeEditorTabText;

//# sourceMappingURL=CodeEditorTabText.js.map
