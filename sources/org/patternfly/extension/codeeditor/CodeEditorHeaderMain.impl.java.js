goog.module('org.patternfly.extension.codeeditor.CodeEditorHeaderMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const CodeEditorSubComponent = goog.require('org.patternfly.extension.codeeditor.CodeEditorSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeEditorSubComponent<HTMLDivElement, CodeEditorHeaderMain>}
 * @implements {ElementTextMethods<HTMLDivElement, CodeEditorHeaderMain>}
 */
class CodeEditorHeaderMain extends CodeEditorSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CodeEditorHeaderMain} */
 static m_codeEditorHeaderMain__org_patternfly_extension_codeeditor_CodeEditorHeaderMain() {
  CodeEditorHeaderMain.$clinit();
  return CodeEditorHeaderMain.$create__();
 }
 /** @nodts @return {!CodeEditorHeaderMain} */
 static $create__() {
  CodeEditorHeaderMain.$clinit();
  let $instance = new CodeEditorHeaderMain();
  $instance.$ctor__org_patternfly_extension_codeeditor_CodeEditorHeaderMain__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_codeeditor_CodeEditorHeaderMain__void() {
  this.$ctor__org_patternfly_extension_codeeditor_CodeEditorSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(CodeEditorHeaderMain.f_SUB_COMPONENT_ID__org_patternfly_extension_codeeditor_CodeEditorHeaderMain, CodeEditorHeaderMain.f_SUB_COMPONENT_NAME__org_patternfly_extension_codeeditor_CodeEditorHeaderMain, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CodeEditorHeaderMain} */
 m_that__org_patternfly_extension_codeeditor_CodeEditorHeaderMain() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorHeaderMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_codeeditor_CodeEditorHeaderMain();
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorHeaderMain} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {CodeEditorHeaderMain}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CodeEditorHeaderMain));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {CodeEditorHeaderMain} */
 m_text__java_lang_String__org_patternfly_extension_codeeditor_CodeEditorHeaderMain(/** ?string */ arg0) {
  return /**@type {CodeEditorHeaderMain}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CodeEditorHeaderMain));
 }
 /** @nodts */
 static $clinit() {
  CodeEditorHeaderMain.$clinit = () =>{};
  CodeEditorHeaderMain.$loadModules();
  CodeEditorSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorHeaderMain;
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
CodeEditorHeaderMain.f_SUB_COMPONENT_ID__org_patternfly_extension_codeeditor_CodeEditorHeaderMain = 'cehm';
/**@const {string} @nodts*/
CodeEditorHeaderMain.f_SUB_COMPONENT_NAME__org_patternfly_extension_codeeditor_CodeEditorHeaderMain = 'CodeEditorHeaderMain';
ElementTextMethods.$markImplementor(CodeEditorHeaderMain);
$Util.$setClassMetadata(CodeEditorHeaderMain, 'org.patternfly.extension.codeeditor.CodeEditorHeaderMain');

exports = CodeEditorHeaderMain;

//# sourceMappingURL=CodeEditorHeaderMain.js.map
