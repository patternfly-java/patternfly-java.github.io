goog.module('org.patternfly.component.drawer.DrawerPanelHead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DrawerSubComponent = goog.require('org.patternfly.component.drawer.DrawerSubComponent$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DrawerCloseButton = goog.forwardDeclare('org.patternfly.component.drawer.DrawerCloseButton$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DrawerSubComponent<HTMLDivElement, DrawerPanelHead>}
 * @implements {NoPadding<HTMLDivElement, DrawerPanelHead>}
 */
class DrawerPanelHead extends DrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DrawerPanelHead} */
 static m_drawerPanelHead__org_patternfly_component_drawer_DrawerPanelHead() {
  DrawerPanelHead.$clinit();
  return DrawerPanelHead.$create__();
 }
 /** @nodts @return {!DrawerPanelHead} */
 static $create__() {
  DrawerPanelHead.$clinit();
  let $instance = new DrawerPanelHead();
  $instance.$ctor__org_patternfly_component_drawer_DrawerPanelHead__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerPanelHead__void() {
  this.$ctor__org_patternfly_component_drawer_DrawerSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(DrawerPanelHead.f_SUB_COMPONENT_ID__org_patternfly_component_drawer_DrawerPanelHead, DrawerPanelHead.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerPanelHead, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_head__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {DrawerPanelHead} */
 m_addCloseButton__org_patternfly_component_drawer_DrawerCloseButton__org_patternfly_component_drawer_DrawerPanelHead(/** DrawerCloseButton */ closeButton) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(closeButton), DrawerPanelHead));
 }
 /** @nodts @return {DrawerPanelHead} */
 m_that__org_patternfly_component_drawer_DrawerPanelHead() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_DrawerPanelHead();
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DrawerPanelHead));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_noPadding__org_patternfly_component_drawer_DrawerPanelHead() {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_noPadding__boolean__org_patternfly_component_drawer_DrawerPanelHead(/** boolean */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 /** @nodts */
 static $clinit() {
  DrawerPanelHead.$clinit = () =>{};
  DrawerPanelHead.$loadModules();
  DrawerSubComponent.$clinit();
  NoPadding.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerPanelHead;
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
DrawerPanelHead.f_SUB_COMPONENT_ID__org_patternfly_component_drawer_DrawerPanelHead = 'dph';
/**@const {string} @nodts*/
DrawerPanelHead.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerPanelHead = 'DrawerPanelHead';
NoPadding.$markImplementor(DrawerPanelHead);
$Util.$setClassMetadata(DrawerPanelHead, 'org.patternfly.component.drawer.DrawerPanelHead');

exports = DrawerPanelHead;

//# sourceMappingURL=DrawerPanelHead.js.map
