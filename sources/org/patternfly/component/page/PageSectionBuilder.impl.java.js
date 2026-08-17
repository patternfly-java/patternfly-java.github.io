goog.module('org.patternfly.component.page.PageSectionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionLike = goog.require('org.patternfly.component.page.PageSectionLike$impl');
const PageSubComponent = goog.require('org.patternfly.component.page.PageSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ElementAttributeMethods = goog.forwardDeclare('org.jboss.elemento.ElementAttributeMethods$impl');
let ElementClassListMethods = goog.forwardDeclare('org.jboss.elemento.ElementClassListMethods$impl');
let ElementConsumerMethods = goog.forwardDeclare('org.jboss.elemento.ElementConsumerMethods$impl');
let ElementContainerMethods = goog.forwardDeclare('org.jboss.elemento.ElementContainerMethods$impl');
let ElementEventMethods = goog.forwardDeclare('org.jboss.elemento.ElementEventMethods$impl');
let ElementIdMethods = goog.forwardDeclare('org.jboss.elemento.ElementIdMethods$impl');
let ElementQueryMethods = goog.forwardDeclare('org.jboss.elemento.ElementQueryMethods$impl');
let ElementTextMethods = goog.forwardDeclare('org.jboss.elemento.ElementTextMethods$impl');
let HTMLElementAttributeMethods = goog.forwardDeclare('org.jboss.elemento.HTMLElementAttributeMethods$impl');
let HTMLElementDataMethods = goog.forwardDeclare('org.jboss.elemento.HTMLElementDataMethods$impl');
let HTMLElementStyleMethods = goog.forwardDeclare('org.jboss.elemento.HTMLElementStyleMethods$impl');
let HTMLElementVisibilityMethods = goog.forwardDeclare('org.jboss.elemento.HTMLElementVisibilityMethods$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Padding = goog.forwardDeclare('org.patternfly.style.Padding$impl');
let Sticky = goog.forwardDeclare('org.patternfly.style.Sticky$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template E, P
 * @extends {PageSubComponent<E, P>}
 * @implements {PageSectionLike<E, P>}
 */
class PageSectionBuilder extends PageSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ subComponentId, /** ?string */ subComponentName, /** E */ element) {
  this.$ctor__org_patternfly_component_page_PageSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(subComponentId, subComponentName, element);
 }
 /** @nodts @return {P} */
 m_limitWidth__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_sticky__org_patternfly_style_Sticky__org_patternfly_component_page_PageSectionBuilder(/** Sticky */ sticky) {
  return this.m_sticky__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageSectionBuilder(/**@type {Breakpoints<Sticky>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, sticky)));
 }
 /** @nodts @return {P} */
 m_sticky__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageSectionBuilder(/** Breakpoints<Sticky> */ sticky) {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([sticky.m_modifiers__java_lang_String()], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_padding__org_patternfly_style_Padding__org_patternfly_component_page_PageSectionBuilder(/** Padding */ padding) {
  return this.m_padding__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageSectionBuilder(/**@type {Breakpoints<Padding>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, padding)));
 }
 /** @nodts @return {P} */
 m_padding__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageSectionBuilder(/** Breakpoints<Padding> */ padding) {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([padding.m_modifiers__java_lang_String()], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_centerAligned__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_alignCenter__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_shadowTop__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowTop__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_shadowBottom__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowBottom__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_overflowScroll__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflowScroll__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {P} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {P}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageSectionBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {P} */
 m_text__java_lang_String__org_patternfly_component_page_PageSectionBuilder(/** ?string */ arg0) {
  return /**@type {P}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageSectionBuilder));
 }
 /** @nodts */
 static $clinit() {
  PageSectionBuilder.$clinit = () =>{};
  PageSectionBuilder.$loadModules();
  PageSubComponent.$clinit();
  ElementAttributeMethods.$clinit();
  ElementClassListMethods.$clinit();
  ElementContainerMethods.$clinit();
  ElementConsumerMethods.$clinit();
  ElementEventMethods.$clinit();
  ElementIdMethods.$clinit();
  ElementQueryMethods.$clinit();
  ElementTextMethods.$clinit();
  HTMLElementAttributeMethods.$clinit();
  HTMLElementDataMethods.$clinit();
  HTMLElementStyleMethods.$clinit();
  HTMLElementVisibilityMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageSectionBuilder;
 }
 /** @abstract @override @nodts @return {P} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ElementAttributeMethods = goog.module.get('org.jboss.elemento.ElementAttributeMethods$impl');
  ElementClassListMethods = goog.module.get('org.jboss.elemento.ElementClassListMethods$impl');
  ElementConsumerMethods = goog.module.get('org.jboss.elemento.ElementConsumerMethods$impl');
  ElementContainerMethods = goog.module.get('org.jboss.elemento.ElementContainerMethods$impl');
  ElementEventMethods = goog.module.get('org.jboss.elemento.ElementEventMethods$impl');
  ElementIdMethods = goog.module.get('org.jboss.elemento.ElementIdMethods$impl');
  ElementQueryMethods = goog.module.get('org.jboss.elemento.ElementQueryMethods$impl');
  ElementTextMethods = goog.module.get('org.jboss.elemento.ElementTextMethods$impl');
  HTMLElementAttributeMethods = goog.module.get('org.jboss.elemento.HTMLElementAttributeMethods$impl');
  HTMLElementDataMethods = goog.module.get('org.jboss.elemento.HTMLElementDataMethods$impl');
  HTMLElementStyleMethods = goog.module.get('org.jboss.elemento.HTMLElementStyleMethods$impl');
  HTMLElementVisibilityMethods = goog.module.get('org.jboss.elemento.HTMLElementVisibilityMethods$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
PageSectionLike.$markImplementor(PageSectionBuilder);
$Util.$setClassMetadata(PageSectionBuilder, 'org.patternfly.component.page.PageSectionBuilder');

exports = PageSectionBuilder;

//# sourceMappingURL=PageSectionBuilder.js.map
