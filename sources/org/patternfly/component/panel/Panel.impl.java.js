goog.module('org.patternfly.component.panel.Panel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Bordered = goog.require('org.patternfly.style.Modifiers.Bordered$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let PanelFooter = goog.forwardDeclare('org.patternfly.component.panel.PanelFooter$impl');
let PanelHeader = goog.forwardDeclare('org.patternfly.component.panel.PanelHeader$impl');
let PanelMain = goog.forwardDeclare('org.patternfly.component.panel.PanelMain$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Panel>}
 * @implements {Bordered<HTMLDivElement, Panel>}
 */
class Panel extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Panel} */
 static m_panel__org_patternfly_component_panel_Panel() {
  Panel.$clinit();
  return Panel.$create__();
 }
 /** @nodts @return {!Panel} */
 static $create__() {
  Panel.$clinit();
  let $instance = new Panel();
  $instance.$ctor__org_patternfly_component_panel_Panel__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_panel_Panel__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Panel__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_panel__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Panel} */
 m_addHeader__java_lang_String__org_patternfly_component_panel_Panel(/** ?string */ header) {
  return this.m_add__org_patternfly_component_panel_PanelHeader__org_patternfly_component_panel_Panel(/**@type {PanelHeader}*/ ($Casts.$to(PanelHeader.m_panelHeader__org_patternfly_component_panel_PanelHeader().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(header), PanelHeader)));
 }
 /** @nodts @return {Panel} */
 m_addHeader__org_patternfly_component_panel_PanelHeader__org_patternfly_component_panel_Panel(/** PanelHeader */ header) {
  return this.m_add__org_patternfly_component_panel_PanelHeader__org_patternfly_component_panel_Panel(header);
 }
 /** @nodts @return {Panel} */
 m_add__org_patternfly_component_panel_PanelHeader__org_patternfly_component_panel_Panel(/** PanelHeader */ header) {
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(header.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, header.f_headerId__org_patternfly_component_panel_PanelHeader);
  return this;
 }
 /** @nodts @return {Panel} */
 m_addDivider__org_patternfly_component_panel_Panel() {
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).appendChild(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {Panel} */
 m_addMain__java_lang_String__org_patternfly_component_panel_Panel(/** ?string */ main) {
  return this.m_add__org_patternfly_component_panel_PanelMain__org_patternfly_component_panel_Panel(/**@type {PanelMain}*/ ($Casts.$to(PanelMain.m_panelMain__org_patternfly_component_panel_PanelMain().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(main), PanelMain)));
 }
 /** @nodts @return {Panel} */
 m_addMain__org_patternfly_component_panel_PanelMain__org_patternfly_component_panel_Panel(/** PanelMain */ main) {
  return this.m_add__org_patternfly_component_panel_PanelMain__org_patternfly_component_panel_Panel(main);
 }
 /** @nodts @return {Panel} */
 m_add__org_patternfly_component_panel_PanelMain__org_patternfly_component_panel_Panel(/** PanelMain */ main) {
  return /**@type {Panel}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(main.m_element__elemental2_dom_HTMLElement()), Panel));
 }
 /** @nodts @return {Panel} */
 m_addFooter__java_lang_String__org_patternfly_component_panel_Panel(/** ?string */ footer) {
  return this.m_add__org_patternfly_component_panel_PanelFooter__org_patternfly_component_panel_Panel(/**@type {PanelFooter}*/ ($Casts.$to(PanelFooter.m_panelFooter__org_patternfly_component_panel_PanelFooter().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(footer), PanelFooter)));
 }
 /** @nodts @return {Panel} */
 m_addFooter__org_patternfly_component_panel_PanelFooter__org_patternfly_component_panel_Panel(/** PanelFooter */ footer) {
  return this.m_add__org_patternfly_component_panel_PanelFooter__org_patternfly_component_panel_Panel(footer);
 }
 /** @nodts @return {Panel} */
 m_add__org_patternfly_component_panel_PanelFooter__org_patternfly_component_panel_Panel(/** PanelFooter */ footer) {
  return /**@type {Panel}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(footer.m_element__elemental2_dom_HTMLElement(), $Overlay))), Panel));
 }
 /** @nodts @return {Panel} */
 m_raised__org_patternfly_component_panel_Panel() {
  return /**@type {Panel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_raised__org_patternfly_style_Classes)], j_l_String))), Panel));
 }
 /** @nodts @return {Panel} */
 m_scrollable__org_patternfly_component_panel_Panel() {
  return /**@type {Panel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_scrollable__org_patternfly_style_Classes)], j_l_String))), Panel));
 }
 /** @nodts @return {Panel} */
 m_scrollableAutoHeight__org_patternfly_component_panel_Panel() {
  return /**@type {Panel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_scrollable__org_patternfly_style_Classes), Classes.m_modifier__java_lang_String__java_lang_String('scrollable-auto-height')], j_l_String))), Panel));
 }
 /** @nodts @return {Panel} */
 m_secondary__org_patternfly_component_panel_Panel() {
  return /**@type {Panel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_secondary__org_patternfly_style_Classes)], j_l_String))), Panel));
 }
 /** @nodts @return {Panel} */
 m_pill__org_patternfly_component_panel_Panel() {
  return /**@type {Panel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_pill__org_patternfly_style_Classes)], j_l_String))), Panel));
 }
 /** @nodts @return {Panel} */
 m_that__org_patternfly_component_panel_Panel() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Panel} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_panel_Panel();
 }
 //Bridge method.
 /** @final @override @nodts @return {Panel} */
 m_bordered__org_jboss_elemento_TypedBuilder() {
  return /**@type {Panel}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), Panel));
 }
 //Bridge method.
 /** @final @override @nodts @return {Panel} */
 m_bordered__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Panel}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Panel));
 }
 //Default method forwarding stub.
 /** @nodts @return {Panel} */
 m_bordered__org_patternfly_component_panel_Panel() {
  return /**@type {Panel}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), Panel));
 }
 //Default method forwarding stub.
 /** @nodts @return {Panel} */
 m_bordered__boolean__org_patternfly_component_panel_Panel(/** boolean */ arg0) {
  return /**@type {Panel}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Panel));
 }
 /** @nodts */
 static $clinit() {
  Panel.$clinit = () =>{};
  Panel.$loadModules();
  BaseComponent.$clinit();
  Bordered.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Panel;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  PanelFooter = goog.module.get('org.patternfly.component.panel.PanelFooter$impl');
  PanelHeader = goog.module.get('org.patternfly.component.panel.PanelHeader$impl');
  PanelMain = goog.module.get('org.patternfly.component.panel.PanelMain$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Bordered.$markImplementor(Panel);
$Util.$setClassMetadata(Panel, 'org.patternfly.component.panel.Panel');

exports = Panel;

//# sourceMappingURL=Panel.js.map
