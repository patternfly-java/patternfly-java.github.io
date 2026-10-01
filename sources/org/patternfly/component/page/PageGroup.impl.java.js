goog.module('org.patternfly.component.page.PageGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let PageSectionLike = goog.forwardDeclare('org.patternfly.component.page.PageSectionLike$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Sticky = goog.forwardDeclare('org.patternfly.style.Sticky$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, PageGroup>}
 */
class PageGroup extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageGroup} */
 static m_pageGroup__org_patternfly_component_page_PageGroup() {
  PageGroup.$clinit();
  return PageGroup.$create__();
 }
 /** @nodts @return {!PageGroup} */
 static $create__() {
  PageGroup.$clinit();
  let $instance = new PageGroup();
  $instance.$ctor__org_patternfly_component_page_PageGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageGroup__void() {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_Page__org_patternfly_component_ComponentType, PageGroup.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageGroup, PageGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageGroup, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @template E, P @return {PageGroup} */
 m_addSection__org_patternfly_component_page_PageSectionLike__org_patternfly_component_page_PageGroup(/** PageSectionLike<E, P> */ pageSection) {
  return /**@type {PageGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(pageSection), PageGroup));
 }
 /** @nodts @return {PageGroup} */
 m_sticky__org_patternfly_style_Sticky__org_patternfly_component_page_PageGroup(/** Sticky */ sticky) {
  return this.m_sticky__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageGroup(/**@type {Breakpoints<Sticky>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, sticky)));
 }
 /** @nodts @return {PageGroup} */
 m_sticky__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageGroup(/** Breakpoints<Sticky> */ sticky) {
  return /**@type {PageGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([sticky.m_modifiers__java_lang_String()], j_l_String))), PageGroup));
 }
 /** @nodts @return {PageGroup} */
 m_shadowTop__org_patternfly_component_page_PageGroup() {
  return /**@type {PageGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowTop__org_patternfly_style_Classes)], j_l_String))), PageGroup));
 }
 /** @nodts @return {PageGroup} */
 m_shadowBottom__org_patternfly_component_page_PageGroup() {
  return /**@type {PageGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowBottom__org_patternfly_style_Classes)], j_l_String))), PageGroup));
 }
 /** @nodts @return {PageGroup} */
 m_overflowScroll__org_patternfly_component_page_PageGroup() {
  return /**@type {PageGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflowScroll__org_patternfly_style_Classes)], j_l_String))), PageGroup));
 }
 /** @nodts @return {PageGroup} */
 m_that__org_patternfly_component_page_PageGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageGroup();
 }
 /** @nodts */
 static $clinit() {
  PageGroup.$clinit = () =>{};
  PageGroup.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageGroup.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageGroup = 'pg';
/**@const {string} @nodts*/
PageGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageGroup = 'PageGroup';
$Util.$setClassMetadata(PageGroup, 'org.patternfly.component.page.PageGroup');

exports = PageGroup;

//# sourceMappingURL=PageGroup.js.map
