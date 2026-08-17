goog.module('org.patternfly.component.toolbar.Toolbar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const FullHeight = goog.require('org.patternfly.style.Modifiers.FullHeight$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');
const Static = goog.require('org.patternfly.style.Modifiers.Static$impl');
const Sticky = goog.require('org.patternfly.style.Modifiers.Sticky$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ToolbarColor = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarColor$impl');
let ToolbarContent = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarContent$impl');
let ToolbarFilterContent = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarFilterContent$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Inset = goog.forwardDeclare('org.patternfly.style.Inset$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let HTMLBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Toolbar>}
 * @implements {FullHeight<HTMLDivElement, Toolbar>}
 * @implements {NoPadding<HTMLDivElement, Toolbar>}
 * @implements {Static<HTMLDivElement, Toolbar>}
 * @implements {Sticky<HTMLDivElement, Toolbar>}
 */
class Toolbar extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ToolbarFilterContent} @nodts*/
  this.f_filterContent__org_patternfly_component_toolbar_Toolbar_;
  /**@type {List<ComponentHandler<Toolbar>>} @nodts*/
  this.f_clearAllFilters__org_patternfly_component_toolbar_Toolbar_;
 }
 /** @nodts @return {Toolbar} */
 static m_toolbar__org_patternfly_component_toolbar_Toolbar() {
  Toolbar.$clinit();
  return Toolbar.$create__();
 }
 /** @nodts @return {!Toolbar} */
 static $create__() {
  Toolbar.$clinit();
  let $instance = new Toolbar();
  $instance.$ctor__org_patternfly_component_toolbar_Toolbar__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_Toolbar__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Toolbar__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_clearAllFilters__org_patternfly_component_toolbar_Toolbar_ = (/**@type {!ArrayList<ComponentHandler<Toolbar>>}*/ (ArrayList.$create__()));
 }
 /** @nodts @return {Toolbar} */
 m_addContent__org_patternfly_component_toolbar_ToolbarContent__org_patternfly_component_toolbar_Toolbar(/** ToolbarContent */ content) {
  return /**@type {Toolbar}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(content), Toolbar));
 }
 /** @nodts @return {Toolbar} */
 m_addFilterContent__org_patternfly_component_toolbar_ToolbarFilterContent__org_patternfly_component_toolbar_Toolbar(/** ToolbarFilterContent */ filterContent) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarFilterContent__org_patternfly_component_toolbar_Toolbar(filterContent);
 }
 /** @nodts @return {Toolbar} */
 m_add__org_patternfly_component_toolbar_ToolbarFilterContent__org_patternfly_component_toolbar_Toolbar(/** ToolbarFilterContent */ filterContent) {
  this.f_filterContent__org_patternfly_component_toolbar_Toolbar_ = filterContent;
  return /**@type {Toolbar}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(filterContent.m_element__elemental2_dom_HTMLElement(), $Overlay))), Toolbar));
 }
 /** @nodts @return {Toolbar} */
 m_color__org_patternfly_component_toolbar_ToolbarColor__org_patternfly_component_toolbar_Toolbar(/** ToolbarColor */ color) {
  return /**@type {Toolbar}*/ ($Casts.$to(TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), color, ToolbarColor.m_values__arrayOf_org_patternfly_component_toolbar_ToolbarColor()), Toolbar));
 }
 /** @nodts @return {Toolbar} */
 m_inset__org_patternfly_style_Inset__org_patternfly_component_toolbar_Toolbar(/** Inset */ inset) {
  return this.m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_toolbar_Toolbar(/**@type {Breakpoints<Inset>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, inset)));
 }
 /** @nodts @return {Toolbar} */
 m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_toolbar_Toolbar(/** Breakpoints<Inset> */ inset) {
  return /**@type {Toolbar}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([inset.m_modifiers__java_lang_String()], j_l_String))), Toolbar));
 }
 /** @nodts @return {Toolbar} */
 m_heights__java_lang_String__org_patternfly_component_toolbar_Toolbar(/** ?string */ height) {
  return this.m_heights__org_patternfly_style_Breakpoints__org_patternfly_component_toolbar_Toolbar(/**@type {Breakpoints<?string>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, height)));
 }
 /** @nodts @return {Toolbar} */
 m_heights__org_patternfly_style_Breakpoints__org_patternfly_component_toolbar_Toolbar(/** Breakpoints<?string> */ heights) {
  return /**@type {Toolbar}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLDivElement, Toolbar>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_Height__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(heights), Toolbar));
 }
 /** @nodts @return {Toolbar} */
 m_that__org_patternfly_component_toolbar_Toolbar() {
  return this;
 }
 /** @nodts @return {Toolbar} */
 m_onClearAllFilters__org_patternfly_handler_ComponentHandler__org_patternfly_component_toolbar_Toolbar(/** ComponentHandler<Toolbar> */ clearAllFilters) {
  this.f_clearAllFilters__org_patternfly_component_toolbar_Toolbar_.add(clearAllFilters);
  return this;
 }
 /** @nodts */
 m_removeFilterContent__void() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_filterContent__org_patternfly_component_toolbar_Toolbar_);
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_Toolbar();
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_fullHeight__org_jboss_elemento_TypedBuilder() {
  return /**@type {Toolbar}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), Toolbar));
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_fullHeight__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Toolbar}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Toolbar));
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {Toolbar}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), Toolbar));
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Toolbar}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Toolbar));
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_static___org_jboss_elemento_TypedBuilder() {
  return /**@type {Toolbar}*/ ($Casts.$to(Static.m_static___$default__org_patternfly_style_Modifiers_Static__org_jboss_elemento_TypedBuilder(this), Toolbar));
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_static___boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Toolbar}*/ ($Casts.$to(Static.m_static___$default__org_patternfly_style_Modifiers_Static__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Toolbar));
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_sticky__org_jboss_elemento_TypedBuilder() {
  return /**@type {Toolbar}*/ ($Casts.$to(Sticky.m_sticky__$default__org_patternfly_style_Modifiers_Sticky__org_jboss_elemento_TypedBuilder(this), Toolbar));
 }
 //Bridge method.
 /** @final @override @nodts @return {Toolbar} */
 m_sticky__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Toolbar}*/ ($Casts.$to(Sticky.m_sticky__$default__org_patternfly_style_Modifiers_Sticky__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Toolbar));
 }
 //Default method forwarding stub.
 /** @nodts @return {Toolbar} */
 m_fullHeight__org_patternfly_component_toolbar_Toolbar() {
  return /**@type {Toolbar}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), Toolbar));
 }
 //Default method forwarding stub.
 /** @nodts @return {Toolbar} */
 m_fullHeight__boolean__org_patternfly_component_toolbar_Toolbar(/** boolean */ arg0) {
  return /**@type {Toolbar}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Toolbar));
 }
 //Default method forwarding stub.
 /** @nodts @return {Toolbar} */
 m_noPadding__org_patternfly_component_toolbar_Toolbar() {
  return /**@type {Toolbar}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), Toolbar));
 }
 //Default method forwarding stub.
 /** @nodts @return {Toolbar} */
 m_noPadding__boolean__org_patternfly_component_toolbar_Toolbar(/** boolean */ arg0) {
  return /**@type {Toolbar}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Toolbar));
 }
 //Default method forwarding stub.
 /** @nodts @return {Toolbar} */
 m_static___org_patternfly_component_toolbar_Toolbar() {
  return /**@type {Toolbar}*/ ($Casts.$to(Static.m_static___$default__org_patternfly_style_Modifiers_Static__org_jboss_elemento_TypedBuilder(this), Toolbar));
 }
 //Default method forwarding stub.
 /** @nodts @return {Toolbar} */
 m_static___boolean__org_patternfly_component_toolbar_Toolbar(/** boolean */ arg0) {
  return /**@type {Toolbar}*/ ($Casts.$to(Static.m_static___$default__org_patternfly_style_Modifiers_Static__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Toolbar));
 }
 //Default method forwarding stub.
 /** @nodts @return {Toolbar} */
 m_sticky__org_patternfly_component_toolbar_Toolbar() {
  return /**@type {Toolbar}*/ ($Casts.$to(Sticky.m_sticky__$default__org_patternfly_style_Modifiers_Sticky__org_jboss_elemento_TypedBuilder(this), Toolbar));
 }
 //Default method forwarding stub.
 /** @nodts @return {Toolbar} */
 m_sticky__boolean__org_patternfly_component_toolbar_Toolbar(/** boolean */ arg0) {
  return /**@type {Toolbar}*/ ($Casts.$to(Sticky.m_sticky__$default__org_patternfly_style_Modifiers_Sticky__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Toolbar));
 }
 /** @nodts */
 static $clinit() {
  Toolbar.$clinit = () =>{};
  Toolbar.$loadModules();
  BaseComponent.$clinit();
  FullHeight.$clinit();
  NoPadding.$clinit();
  Static.$clinit();
  Sticky.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Toolbar;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ToolbarColor = goog.module.get('org.patternfly.component.toolbar.ToolbarColor$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FullHeight.$markImplementor(Toolbar);
NoPadding.$markImplementor(Toolbar);
Static.$markImplementor(Toolbar);
Sticky.$markImplementor(Toolbar);
$Util.$setClassMetadata(Toolbar, 'org.patternfly.component.toolbar.Toolbar');

exports = Toolbar;

//# sourceMappingURL=Toolbar.js.map
