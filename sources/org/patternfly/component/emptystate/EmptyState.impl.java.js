goog.module('org.patternfly.component.emptystate.EmptyState$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const FullHeight = goog.require('org.patternfly.style.Modifiers.FullHeight$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let EmptyStateBody = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateBody$impl');
let EmptyStateFooter = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateFooter$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, EmptyState>}
 * @implements {ComponentIcon<HTMLElement, EmptyState>}
 * @implements {ElementContainerDelegate<HTMLElement, EmptyState>}
 * @implements {ElementTextDelegate<HTMLElement, EmptyState>}
 * @implements {FullHeight<HTMLElement, EmptyState>}
 */
class EmptyState extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_emptystate_EmptyState_;
  /**@type {HTMLElement} @nodts*/
  this.f_titleTextContainer__org_patternfly_component_emptystate_EmptyState_;
  /**@type {number} @nodts*/
  this.f_level__org_patternfly_component_emptystate_EmptyState_ = 0;
 }
 /** @nodts @return {EmptyState} */
 static m_emptyState__org_patternfly_component_emptystate_EmptyState() {
  EmptyState.$clinit();
  return EmptyState.$create__();
 }
 /** @nodts @return {!EmptyState} */
 static $create__() {
  EmptyState.$clinit();
  let $instance = new EmptyState();
  $instance.$ctor__org_patternfly_component_emptystate_EmptyState__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_emptystate_EmptyState__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_EmptyState__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_level__org_patternfly_component_emptystate_EmptyState_ = 4;
  this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_iconContainer__org_patternfly_component_emptystate_EmptyState_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_titleTextContainer__org_patternfly_component_emptystate_EmptyState_ = (/**@type {HTMLHeadingElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(this.f_level__org_patternfly_component_emptystate_EmptyState_).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay)))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_);
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_titleTextContainer__org_patternfly_component_emptystate_EmptyState_;
 }
 /** @nodts @return {EmptyState} */
 m_addBody__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(/** EmptyStateBody */ body) {
  return this.m_add__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(body);
 }
 /** @nodts @return {EmptyState} */
 m_add__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(/** EmptyStateBody */ body) {
  this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(body.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_addFooter__org_patternfly_component_emptystate_EmptyStateFooter__org_patternfly_component_emptystate_EmptyState(/** EmptyStateFooter */ footer) {
  return this.m_add__org_patternfly_component_emptystate_EmptyStateFooter__org_patternfly_component_emptystate_EmptyState(footer);
 }
 /** @nodts @return {EmptyState} */
 m_add__org_patternfly_component_emptystate_EmptyStateFooter__org_patternfly_component_emptystate_EmptyState(/** EmptyStateFooter */ footer) {
  this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(footer.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_headingLevel__int__org_patternfly_component_emptystate_EmptyState(/** number */ level) {
  if (this.f_level__org_patternfly_component_emptystate_EmptyState_ != level && Validation.m_verifyRange__elemental2_dom_Element__java_lang_String__int__int__int__boolean(this.m_element__elemental2_dom_HTMLElement(), 'headingLevel', level, 1, 6)) {
   let element = /**@type {HTMLHeadingElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(level).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_titleTextContainer__org_patternfly_component_emptystate_EmptyState_.textContent), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay));
   Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_titleTextContainer__org_patternfly_component_emptystate_EmptyState_, [element]);
   this.f_titleTextContainer__org_patternfly_component_emptystate_EmptyState_ = element;
   this.f_level__org_patternfly_component_emptystate_EmptyState_ = level;
  }
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_icon__elemental2_dom_Element__org_patternfly_component_emptystate_EmptyState(/** Element */ icon) {
  this.m_removeIcon__org_patternfly_component_emptystate_EmptyState();
  this.f_iconContainer__org_patternfly_component_emptystate_EmptyState_.appendChild(icon);
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_removeIcon__org_patternfly_component_emptystate_EmptyState() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_emptystate_EmptyState_);
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_spinner__org_patternfly_component_emptystate_EmptyState() {
  return this.m_spinner__java_lang_String__org_patternfly_component_emptystate_EmptyState('Loading');
 }
 /** @nodts @return {EmptyState} */
 m_spinner__java_lang_String__org_patternfly_component_emptystate_EmptyState(/** ?string */ label) {
  this.m_removeIcon__org_patternfly_component_emptystate_EmptyState();
  this.f_iconContainer__org_patternfly_component_emptystate_EmptyState_.appendChild(Spinner.m_spinner__java_lang_String__org_patternfly_component_spinner_Spinner(label).m_element__org_jboss_elemento_svg_SVGElement());
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_size__org_patternfly_style_Size__org_patternfly_component_emptystate_EmptyState(/** Size */ size) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_element__elemental2_dom_HTMLElement(), 'size', size, Size.f_xs__org_patternfly_style_Size, /**@type {!Array<Size>}*/ ($Arrays.$stampType([Size.f_sm__org_patternfly_style_Size, Size.f_lg__org_patternfly_style_Size, Size.f_xl__org_patternfly_style_Size], Size)))) {
   TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), size, Size.m_values__arrayOf_org_patternfly_style_Size());
  }
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_status__org_patternfly_component_Severity__org_patternfly_component_emptystate_EmptyState(/** Severity */ severity) {
  this.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(severity.m_icon__org_patternfly_icon_PredefinedIcon());
  return /**@type {EmptyState}*/ ($Casts.$to(TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), severity.f_status__org_patternfly_component_Severity, Status.m_values__arrayOf_org_patternfly_style_Status()), EmptyState));
 }
 /** @nodts @return {EmptyState} */
 m_clearStatus__org_patternfly_component_emptystate_EmptyState() {
  return /**@type {EmptyState}*/ ($Casts.$to(TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), null, Status.m_values__arrayOf_org_patternfly_style_Status()), EmptyState));
 }
 /** @nodts @return {EmptyState} */
 m_that__org_patternfly_component_emptystate_EmptyState() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_emptystate_EmptyState();
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_emptystate_EmptyState(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_emptystate_EmptyState();
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_fullHeight__org_jboss_elemento_TypedBuilder() {
  return /**@type {EmptyState}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_fullHeight__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_emptystate_EmptyState(/** PredefinedIcon */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_add__java_lang_String__org_patternfly_component_emptystate_EmptyState(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_add__elemental2_dom_Node__org_patternfly_component_emptystate_EmptyState(/** Node */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_add__java_util_function_Supplier__org_patternfly_component_emptystate_EmptyState(/** Supplier<Node> */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_text__java_lang_String__org_patternfly_component_emptystate_EmptyState(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_fullHeight__org_patternfly_component_emptystate_EmptyState() {
  return /**@type {EmptyState}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_fullHeight__boolean__org_patternfly_component_emptystate_EmptyState(/** boolean */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 /** @nodts */
 static $clinit() {
  EmptyState.$clinit = () =>{};
  EmptyState.$loadModules();
  BaseComponent.$clinit();
  ComponentIcon.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
  FullHeight.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyState;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Status = goog.module.get('org.patternfly.style.Status$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentIcon.$markImplementor(EmptyState);
ElementContainerDelegate.$markImplementor(EmptyState);
ElementTextDelegate.$markImplementor(EmptyState);
FullHeight.$markImplementor(EmptyState);
$Util.$setClassMetadata(EmptyState, 'org.patternfly.component.emptystate.EmptyState');

exports = EmptyState;

//# sourceMappingURL=EmptyState.js.map
