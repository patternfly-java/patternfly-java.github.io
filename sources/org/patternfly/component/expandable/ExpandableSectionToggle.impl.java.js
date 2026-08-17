goog.module('org.patternfly.component.expandable.ExpandableSectionToggle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ExpandableSectionSubComponent = goog.require('org.patternfly.component.expandable.ExpandableSectionSubComponent$impl');

let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ExpandableSection = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSection$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ExpandableSectionSubComponent<HTMLElement, ExpandableSectionToggle>}
 * @implements {ElementContainerDelegate<HTMLElement, ExpandableSectionToggle>}
 */
class ExpandableSectionToggle extends ExpandableSectionSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_expandable_ExpandableSectionToggle;
  /**@type {?string} @nodts*/
  this.f_moreText__org_patternfly_component_expandable_ExpandableSectionToggle_;
  /**@type {?string} @nodts*/
  this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggle_;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__org_patternfly_component_expandable_ExpandableSectionToggle() {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), null, null);
 }
 /** @nodts @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** ?string */ moreText) {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), moreText, null);
 }
 /** @nodts @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** ?string */ moreText, /** ?string */ lessText) {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), moreText, lessText);
 }
 /** @nodts @template E @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_expandable_ExpandableSectionToggle(/** HTMLContainerBuilder<E> */ builder) {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(builder, null, null);
 }
 /** @nodts @template E @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** HTMLContainerBuilder<E> */ builder, /** ?string */ moreText) {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(builder, moreText, null);
 }
 /** @nodts @template E @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** HTMLContainerBuilder<E> */ builder, /** ?string */ moreText, /** ?string */ lessText) {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(builder, moreText, lessText);
 }
 /** @nodts @template E @return {!ExpandableSectionToggle} */
 static $create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String(/** HTMLContainerBuilder<E> */ builder, /** ?string */ moreText, /** ?string */ lessText) {
  ExpandableSectionToggle.$clinit();
  let $instance = new ExpandableSectionToggle();
  $instance.$ctor__org_patternfly_component_expandable_ExpandableSectionToggle__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__void(builder, moreText, lessText);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_expandable_ExpandableSectionToggle__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__void(/** HTMLContainerBuilder<E> */ builder, /** ?string */ moreText, /** ?string */ lessText) {
  this.$ctor__org_patternfly_component_expandable_ExpandableSectionSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ExpandableSectionToggle.f_SUB_COMPONENT_ID__org_patternfly_component_expandable_ExpandableSectionToggle, ExpandableSectionToggle.f_SUB_COMPONENT_NAME__org_patternfly_component_expandable_ExpandableSectionToggle, /**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()));
  this.f_moreText__org_patternfly_component_expandable_ExpandableSectionToggle_ = moreText;
  this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggle_ = lessText;
  this.f_iconContainer__org_patternfly_component_expandable_ExpandableSectionToggle = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretDown__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
  this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button))).m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_button_Button(this.f_iconContainer__org_patternfly_component_expandable_ExpandableSectionToggle, moreText, IconPosition.f_start__org_patternfly_component_IconPosition).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let expandableSection = /**@type {ExpandableSection}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), ExpandableSection));
   expandableSection.m_toggle__void();
  }), Button)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_element__elemental2_dom_HTMLElement());
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_containerDelegate__elemental2_dom_Element();
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_moreText__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** ?string */ moreText) {
  this.f_moreText__org_patternfly_component_expandable_ExpandableSectionToggle_ = moreText;
  return this;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_lessText__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** ?string */ lessText) {
  this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggle_ = lessText;
  return this;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_hideIcon__org_patternfly_component_expandable_ExpandableSectionToggle() {
  this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_removeIcon__org_patternfly_component_button_Button();
  return this;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_showIcon__org_patternfly_component_expandable_ExpandableSectionToggle() {
  this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_button_Button(this.f_iconContainer__org_patternfly_component_expandable_ExpandableSectionToggle, this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_text__java_lang_String(), IconPosition.f_start__org_patternfly_component_IconPosition);
  return this;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_icon__elemental2_dom_Element__org_patternfly_component_expandable_ExpandableSectionToggle(/** Element */ icon) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_expandable_ExpandableSectionToggle);
  this.f_iconContainer__org_patternfly_component_expandable_ExpandableSectionToggle.appendChild(icon);
  return this;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_that__org_patternfly_component_expandable_ExpandableSectionToggle() {
  return this;
 }
 /** @nodts */
 m_collapse__boolean__void_$pp_org_patternfly_component_expandable(/** boolean */ directionUp) {
  this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false);
  if (directionUp) {
   this.f_iconContainer__org_patternfly_component_expandable_ExpandableSectionToggle.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandTop__org_patternfly_style_Classes));
  }
  if (!$Equality.$same(this.f_moreText__org_patternfly_component_expandable_ExpandableSectionToggle_, null)) {
   this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_text__java_lang_String__org_patternfly_component_button_Button(this.f_moreText__org_patternfly_component_expandable_ExpandableSectionToggle_);
  }
 }
 /** @nodts */
 m_expand__boolean__void_$pp_org_patternfly_component_expandable(/** boolean */ directionUp) {
  this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, true);
  if (directionUp) {
   this.f_iconContainer__org_patternfly_component_expandable_ExpandableSectionToggle.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandTop__org_patternfly_style_Classes));
  }
  if (!$Equality.$same(this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggle_, null)) {
   this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_text__java_lang_String__org_patternfly_component_button_Button(this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggle_);
  }
 }
 /** @nodts */
 m_truncate__void_$pp_org_patternfly_component_expandable() {
  this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inline__org_patternfly_style_Classes)], j_l_String)));
  this.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_removeIcon__org_patternfly_component_button_Button();
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionToggle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_expandable_ExpandableSectionToggle();
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionToggle} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ExpandableSectionToggle}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableSectionToggle));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionToggle} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {ExpandableSectionToggle}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableSectionToggle));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionToggle} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {ExpandableSectionToggle}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableSectionToggle));
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableSectionToggle} */
 m_add__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** ?string */ arg0) {
  return /**@type {ExpandableSectionToggle}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableSectionToggle));
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableSectionToggle} */
 m_add__elemental2_dom_Node__org_patternfly_component_expandable_ExpandableSectionToggle(/** Node */ arg0) {
  return /**@type {ExpandableSectionToggle}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableSectionToggle));
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableSectionToggle} */
 m_add__java_util_function_Supplier__org_patternfly_component_expandable_ExpandableSectionToggle(/** Supplier<Node> */ arg0) {
  return /**@type {ExpandableSectionToggle}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableSectionToggle));
 }
 /** @nodts */
 static $clinit() {
  ExpandableSectionToggle.$clinit = () =>{};
  ExpandableSectionToggle.$loadModules();
  ExpandableSectionSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableSectionToggle;
 }
 
 /** @nodts */
 static $loadModules() {
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  IconPosition = goog.module.get('org.patternfly.component.IconPosition$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ExpandableSection = goog.module.get('org.patternfly.component.expandable.ExpandableSection$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ExpandableSectionToggle.f_SUB_COMPONENT_ID__org_patternfly_component_expandable_ExpandableSectionToggle = 'est';
/**@const {string} @nodts*/
ExpandableSectionToggle.f_SUB_COMPONENT_NAME__org_patternfly_component_expandable_ExpandableSectionToggle = 'ExpandableSectionToggle';
ElementContainerDelegate.$markImplementor(ExpandableSectionToggle);
$Util.$setClassMetadata(ExpandableSectionToggle, 'org.patternfly.component.expandable.ExpandableSectionToggle');

exports = ExpandableSectionToggle;

//# sourceMappingURL=ExpandableSectionToggle.js.map
