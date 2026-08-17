goog.module('org.patternfly.component.content.Content$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementHTMLMethods = goog.require('org.jboss.elemento.ElementHTMLMethods$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ContentType = goog.forwardDeclare('org.patternfly.component.content.ContentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Content>}
 * @implements {ElementHTMLMethods<HTMLElement, Content>}
 * @implements {ElementTextMethods<HTMLElement, Content>}
 */
class Content extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Content} */
 static m_content__org_patternfly_component_content_Content() {
  Content.$clinit();
  return Content.$create__org_patternfly_component_content_ContentType(ContentType.f__default__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {Content} */
 static m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(/** ContentType */ type) {
  Content.$clinit();
  return Content.$create__org_patternfly_component_content_ContentType(type);
 }
 /** @nodts @return {!Content} */
 static $create__org_patternfly_component_content_ContentType(/** ContentType */ type) {
  Content.$clinit();
  let $instance = new Content();
  $instance.$ctor__org_patternfly_component_content_Content__org_patternfly_component_content_ContentType__void(type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_content_Content__org_patternfly_component_content_ContentType__void(/** ContentType */ type) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Content__org_patternfly_component_ComponentType, type.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {Content} */
 m_editorial__org_patternfly_component_content_Content() {
  return this.m_editorial__boolean__org_patternfly_component_content_Content(true);
 }
 /** @nodts @return {Content} */
 m_editorial__boolean__org_patternfly_component_content_Content(/** boolean */ editorial) {
  return /**@type {Content}*/ ($Casts.$to(this.m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_editorial__org_patternfly_style_Classes), editorial), Content));
 }
 /** @nodts @return {Content} */
 m_plainList__org_patternfly_component_content_Content() {
  return this.m_plainList__boolean__org_patternfly_component_content_Content(true);
 }
 /** @nodts @return {Content} */
 m_plainList__boolean__org_patternfly_component_content_Content(/** boolean */ plainList) {
  return /**@type {Content}*/ ($Casts.$to(this.m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plainList__org_patternfly_style_Classes), plainList), Content));
 }
 /** @nodts @return {Content} */
 m_visitedLink__org_patternfly_component_content_Content() {
  return this.m_visitedLink__boolean__org_patternfly_component_content_Content(true);
 }
 /** @nodts @return {Content} */
 m_visitedLink__boolean__org_patternfly_component_content_Content(/** boolean */ visitedLink) {
  return /**@type {Content}*/ ($Casts.$to(this.m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_visitedLink__org_patternfly_style_Classes), visitedLink), Content));
 }
 /** @nodts @return {Content} */
 m_that__org_patternfly_component_content_Content() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Content} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_content_Content();
 }
 //Bridge method.
 /** @final @override @nodts @return {Content} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {Content}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), Content));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {SafeHtml} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml() {
  return ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Content} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {Content}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Content));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {Content} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_content_Content(/** SafeHtml */ arg0) {
  return /**@type {Content}*/ ($Casts.$to(ElementHTMLMethods.m_html__$default__org_jboss_elemento_ElementHTMLMethods__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), Content));
 }
 //Default method forwarding stub.
 /** @nodts @return {Content} */
 m_text__java_lang_String__org_patternfly_component_content_Content(/** ?string */ arg0) {
  return /**@type {Content}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Content));
 }
 /** @nodts */
 static $clinit() {
  Content.$clinit = () =>{};
  Content.$loadModules();
  BaseComponent.$clinit();
  ElementHTMLMethods.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Content;
 }
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ContentType = goog.module.get('org.patternfly.component.content.ContentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementHTMLMethods.$markImplementor(Content);
ElementTextMethods.$markImplementor(Content);
$Util.$setClassMetadata(Content, 'org.patternfly.component.content.Content');

exports = Content;

//# sourceMappingURL=Content.js.map
