goog.module('org.patternfly.component.drawer.DrawerBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const DrawerSubComponent = goog.require('org.patternfly.component.drawer.DrawerSubComponent$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');
const Padding = goog.require('org.patternfly.style.Modifiers.Padding$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DrawerSubComponent<HTMLDivElement, DrawerBody>}
 * @implements {ElementTextMethods<HTMLDivElement, DrawerBody>}
 * @implements {Padding<HTMLDivElement, DrawerBody>}
 * @implements {NoPadding<HTMLDivElement, DrawerBody>}
 */
class DrawerBody extends DrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DrawerBody} */
 static m_drawerBody__org_patternfly_component_drawer_DrawerBody() {
  DrawerBody.$clinit();
  return DrawerBody.$create__();
 }
 /** @nodts @return {!DrawerBody} */
 static $create__() {
  DrawerBody.$clinit();
  let $instance = new DrawerBody();
  $instance.$ctor__org_patternfly_component_drawer_DrawerBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerBody__void() {
  this.$ctor__org_patternfly_component_drawer_DrawerSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(DrawerBody.f_SUB_COMPONENT_ID__org_patternfly_component_drawer_DrawerBody, DrawerBody.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerBody, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {DrawerBody} */
 m_that__org_patternfly_component_drawer_DrawerBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_DrawerBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerBody} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DrawerBody}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DrawerBody));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerBody} */
 m_padding__org_jboss_elemento_TypedBuilder() {
  return /**@type {DrawerBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__org_jboss_elemento_TypedBuilder(this), DrawerBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerBody} */
 m_padding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DrawerBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerBody} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {DrawerBody}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DrawerBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerBody} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DrawerBody}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerBody} */
 m_text__java_lang_String__org_patternfly_component_drawer_DrawerBody(/** ?string */ arg0) {
  return /**@type {DrawerBody}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DrawerBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerBody} */
 m_padding__org_patternfly_component_drawer_DrawerBody() {
  return /**@type {DrawerBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__org_jboss_elemento_TypedBuilder(this), DrawerBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerBody} */
 m_padding__boolean__org_patternfly_component_drawer_DrawerBody(/** boolean */ arg0) {
  return /**@type {DrawerBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerBody} */
 m_noPadding__org_patternfly_component_drawer_DrawerBody() {
  return /**@type {DrawerBody}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DrawerBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerBody} */
 m_noPadding__boolean__org_patternfly_component_drawer_DrawerBody(/** boolean */ arg0) {
  return /**@type {DrawerBody}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerBody));
 }
 /** @nodts */
 static $clinit() {
  DrawerBody.$clinit = () =>{};
  DrawerBody.$loadModules();
  DrawerSubComponent.$clinit();
  ElementTextMethods.$clinit();
  Padding.$clinit();
  NoPadding.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerBody;
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
DrawerBody.f_SUB_COMPONENT_ID__org_patternfly_component_drawer_DrawerBody = 'db';
/**@const {string} @nodts*/
DrawerBody.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerBody = 'DrawerBody';
ElementTextMethods.$markImplementor(DrawerBody);
Padding.$markImplementor(DrawerBody);
NoPadding.$markImplementor(DrawerBody);
$Util.$setClassMetadata(DrawerBody, 'org.patternfly.component.drawer.DrawerBody');

exports = DrawerBody;

//# sourceMappingURL=DrawerBody.js.map
