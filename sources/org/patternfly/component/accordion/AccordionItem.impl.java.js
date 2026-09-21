goog.module('org.patternfly.component.accordion.AccordionItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const AccordionSubComponent = goog.require('org.patternfly.component.accordion.AccordionSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ButtonType = goog.forwardDeclare('org.jboss.elemento.ButtonType$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Expandable = goog.forwardDeclare('org.patternfly.component.Expandable$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let Accordion = goog.forwardDeclare('org.patternfly.component.accordion.Accordion$impl');
let AccordionItemBody = goog.forwardDeclare('org.patternfly.component.accordion.AccordionItemBody$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AccordionSubComponent<HTMLElement, AccordionItem>}
 * @implements {ComponentContext<HTMLElement, AccordionItem>}
 * @implements {ElementContainerDelegate<HTMLElement, AccordionItem>}
 * @implements {ElementTextDelegate<HTMLElement, AccordionItem>}
 * @implements {HasIdentifier<HTMLElement, AccordionItem>}
 */
class AccordionItem extends AccordionSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_accordion_AccordionItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_accordion_AccordionItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_accordion_AccordionItem_;
  /**@type {AccordionItemBody} @nodts*/
  this.f_defaultBody__org_patternfly_component_accordion_AccordionItem_;
  /**@type {List<AccordionItemBody>} @nodts*/
  this.f_bodies__org_patternfly_component_accordion_AccordionItem_;
  /**@type {boolean} @nodts*/
  this.f_expanded__org_patternfly_component_accordion_AccordionItem_ = false;
  /**@type {HTMLElement} @nodts*/
  this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_accordion_AccordionItem_;
 }
 /** @nodts @return {AccordionItem} */
 static m_accordionItem__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ identifier) {
  AccordionItem.$clinit();
  return AccordionItem.$create__java_lang_String(identifier);
 }
 /** @nodts @return {AccordionItem} */
 static m_accordionItem__java_lang_String__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ identifier, /** ?string */ text) {
  AccordionItem.$clinit();
  return /**@type {AccordionItem}*/ ($Casts.$to(AccordionItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), AccordionItem));
 }
 /** @nodts @return {!AccordionItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  AccordionItem.$clinit();
  let $instance = new AccordionItem();
  $instance.$ctor__org_patternfly_component_accordion_AccordionItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_accordion_AccordionItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_accordion_AccordionSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(AccordionItem.f_SUB_COMPONENT_ID__org_patternfly_component_accordion_AccordionItem, AccordionItem.f_SUB_COMPONENT_NAME__org_patternfly_component_accordion_AccordionItem, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_identifier__org_patternfly_component_accordion_AccordionItem_ = identifier;
  this.f_data__org_patternfly_component_accordion_AccordionItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_expanded__org_patternfly_component_accordion_AccordionItem_ = false;
  this.f_textElement__org_patternfly_component_accordion_AccordionItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Accordion__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['text'], j_l_String)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
  this.f_defaultBody__org_patternfly_component_accordion_AccordionItem_ = AccordionItemBody.$create__();
  this.f_bodies__org_patternfly_component_accordion_AccordionItem_ = (/**@type {!ArrayList<AccordionItemBody>}*/ (ArrayList.$create__()));
  this.f_bodies__org_patternfly_component_accordion_AccordionItem_.add(this.f_defaultBody__org_patternfly_component_accordion_AccordionItem_);
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_defaultBody__org_patternfly_component_accordion_AccordionItem_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_accordion_AccordionItem_;
 }
 /** @nodts @return {AccordionItem} */
 m_addBody__org_patternfly_component_accordion_AccordionItemBody__org_patternfly_component_accordion_AccordionItem(/** AccordionItemBody */ body) {
  return this.m_add__org_patternfly_component_accordion_AccordionItemBody__org_patternfly_component_accordion_AccordionItem(body);
 }
 /** @nodts @return {AccordionItem} */
 m_add__org_patternfly_component_accordion_AccordionItemBody__org_patternfly_component_accordion_AccordionItem(/** AccordionItemBody */ body) {
  this.f_bodies__org_patternfly_component_accordion_AccordionItem_.add(body);
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this) && !$Equality.$same(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, null)) {
   this.f_contentElement__org_patternfly_component_accordion_AccordionItem_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(body.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this;
 }
 /** @nodts @return {AccordionItem} */
 m_expanded__org_patternfly_component_accordion_AccordionItem() {
  this.f_expanded__org_patternfly_component_accordion_AccordionItem_ = true;
  return this;
 }
 /** @nodts @template T @return {AccordionItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_accordion_AccordionItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_accordion_AccordionItem_.put(key, value);
  return this;
 }
 /** @nodts @return {AccordionItem} */
 m_that__org_patternfly_component_accordion_AccordionItem() {
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_accordion_AccordionItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_accordion_AccordionItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_accordion_AccordionItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_accordion_AccordionItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_appendTo__org_patternfly_component_accordion_Accordion__void_$pp_org_patternfly_component_accordion(/** Accordion */ accordion) {
  let toggleWrapper = accordion.f_dl__org_patternfly_component_accordion_Accordion ? Elements.m_dt__org_jboss_elemento_HTMLContainerBuilder() : Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(accordion.f_headingLevel__org_patternfly_component_accordion_Accordion);
  toggleWrapper.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_ = (/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_toggle__org_patternfly_component_accordion_Accordion__void_$p_org_patternfly_component_accordion_AccordionItem(accordion);
  }), HTMLContainerBuilder))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLContainerBuilder<HTMLButtonElement> */ toggleButton) =>{
   let toggleButton_1 = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(toggleButton, HTMLContainerBuilder));
   if ($Equality.$same(accordion.f_iconPosition__org_patternfly_component_accordion_Accordion, IconPosition.f_start__org_patternfly_component_IconPosition)) {
    (/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(toggleButton_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretDown__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_accordion_AccordionItem_);
   } else {
    (/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(toggleButton_1.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_accordion_AccordionItem_), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretDown__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder)));
   }
  })), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay))));
  let content = accordion.f_dl__org_patternfly_component_accordion_Accordion ? Elements.m_dd__org_jboss_elemento_HTMLContainerBuilder() : Elements.m_div__org_jboss_elemento_HTMLContainerBuilder();
  (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(content.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_expandableContent__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, this.f_textElement__org_patternfly_component_accordion_AccordionItem_.id);
  if (accordion.f_fixed__org_patternfly_component_accordion_Accordion) {
   content.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_fixed__org_patternfly_style_Classes)], j_l_String)));
   content.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Roles.f_region__org_patternfly_core_Roles);
   content.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('tabindex', '0');
  }
  content.m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this.f_bodies__org_patternfly_component_accordion_AccordionItem_);
  this.f_contentElement__org_patternfly_component_accordion_AccordionItem_ = (/**@type {HTMLElement}*/ (content.m_element__elemental2_dom_HTMLElement()));
  if (this.f_expanded__org_patternfly_component_accordion_AccordionItem_) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, true);
  } else {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, true);
  }
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {Node}*/ (toggleWrapper.m_element__elemental2_dom_HTMLElement()));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_);
  accordion.m_element__elemental2_dom_HTMLElement().appendChild(this.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts */
 m_toggle__org_patternfly_component_accordion_Accordion__void_$p_org_patternfly_component_accordion_AccordionItem(/** Accordion */ accordion) {
  if (Expandable.m_expanded__elemental2_dom_Element__boolean(this.m_element__elemental2_dom_HTMLElement())) {
   accordion.m_collapseItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(this, true);
  } else {
   accordion.m_expandItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(this, true);
  }
 }
 /** @nodts */
 m_collapse__void_$pp_org_patternfly_component_accordion() {
  if (!$Equality.$same(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, null) && !$Equality.$same(this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, null)) {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, this.f_contentElement__org_patternfly_component_accordion_AccordionItem_);
  }
 }
 /** @nodts */
 m_expand__void_$pp_org_patternfly_component_accordion() {
  if (!$Equality.$same(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, null) && !$Equality.$same(this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, null)) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, this.f_contentElement__org_patternfly_component_accordion_AccordionItem_);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_accordion_AccordionItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {AccordionItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_accordion_AccordionItem(arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ arg0, /** T */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ arg0, /** Supplier<T> */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(this, arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_add__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_add__elemental2_dom_Node__org_patternfly_component_accordion_AccordionItem(/** Node */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_add__java_util_function_Supplier__org_patternfly_component_accordion_AccordionItem(/** Supplier<Node> */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_text__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 /** @nodts */
 static $clinit() {
  AccordionItem.$clinit = () =>{};
  AccordionItem.$loadModules();
  AccordionSubComponent.$clinit();
  ComponentContext.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AccordionItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ButtonType = goog.module.get('org.jboss.elemento.ButtonType$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Expandable = goog.module.get('org.patternfly.component.Expandable$impl');
  IconPosition = goog.module.get('org.patternfly.component.IconPosition$impl');
  AccordionItemBody = goog.module.get('org.patternfly.component.accordion.AccordionItemBody$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
AccordionItem.f_SUB_COMPONENT_ID__org_patternfly_component_accordion_AccordionItem = 'aci';
/**@const {string} @nodts*/
AccordionItem.f_SUB_COMPONENT_NAME__org_patternfly_component_accordion_AccordionItem = 'AccordionItem';
ComponentContext.$markImplementor(AccordionItem);
ElementContainerDelegate.$markImplementor(AccordionItem);
ElementTextDelegate.$markImplementor(AccordionItem);
HasIdentifier.$markImplementor(AccordionItem);
$Util.$setClassMetadata(AccordionItem, 'org.patternfly.component.accordion.AccordionItem');

exports = AccordionItem;

//# sourceMappingURL=AccordionItem.js.map
