goog.module('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const BreadcrumbSubComponent = goog.require('org.patternfly.component.breadcrumb.BreadcrumbSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BreadcrumbSubComponent<HTMLLIElement, BreadcrumbItem>}
 * @implements {ComponentContext<HTMLLIElement, BreadcrumbItem>}
 * @implements {ElementTextDelegate<HTMLLIElement, BreadcrumbItem>}
 * @implements {HasIdentifier<HTMLLIElement, BreadcrumbItem>}
 */
class BreadcrumbItem extends BreadcrumbSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_breadcrumb_BreadcrumbItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_breadcrumb_BreadcrumbItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_;
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_;
 }
 /** @nodts @return {BreadcrumbItem} */
 static m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ identifier, /** ?string */ text) {
  BreadcrumbItem.$clinit();
  return /**@type {BreadcrumbItem}*/ ($Casts.$to(BreadcrumbItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), BreadcrumbItem));
 }
 /** @nodts @return {BreadcrumbItem} */
 static m_breadcrumbItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ href) {
  BreadcrumbItem.$clinit();
  return /**@type {BreadcrumbItem}*/ ($Casts.$to(BreadcrumbItem.$create__java_lang_String(identifier).m_href__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(href).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), BreadcrumbItem));
 }
 /** @nodts @return {BreadcrumbItem} */
 static m_breadcrumbItem__java_lang_String__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ href, /** ?string */ target) {
  BreadcrumbItem.$clinit();
  return /**@type {BreadcrumbItem}*/ ($Casts.$to(BreadcrumbItem.$create__java_lang_String(identifier).m_href__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(href).m_target__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(target).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), BreadcrumbItem));
 }
 /** @nodts @template E @return {!BreadcrumbItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  BreadcrumbItem.$clinit();
  let $instance = new BreadcrumbItem();
  $instance.$ctor__org_patternfly_component_breadcrumb_BreadcrumbItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_breadcrumb_BreadcrumbItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_breadcrumb_BreadcrumbSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(BreadcrumbItem.f_SUB_COMPONENT_ID__org_patternfly_component_breadcrumb_BreadcrumbItem, BreadcrumbItem.f_SUB_COMPONENT_NAME__org_patternfly_component_breadcrumb_BreadcrumbItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_breadcrumb_BreadcrumbItem_ = identifier;
  this.f_data__org_patternfly_component_breadcrumb_BreadcrumbItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_divider__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretRight__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_ = Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement());
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  if (!$Equality.$same(this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_, null)) {
   return this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_;
  }
  return this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_active__org_patternfly_component_breadcrumb_BreadcrumbItem() {
  return this.m_active__boolean__org_patternfly_component_breadcrumb_BreadcrumbItem(true);
 }
 /** @nodts @return {BreadcrumbItem} */
 m_active__boolean__org_patternfly_component_breadcrumb_BreadcrumbItem(/** boolean */ active) {
  if (active) {
   this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem(), Aria.f_current__org_patternfly_core_Aria, 'page');
  } else {
   this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().removeAttribute(Aria.f_current__org_patternfly_core_Aria);
  }
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_href__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ href) {
  this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().href = href;
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_target__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ target) {
  this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().target = target;
  return this;
 }
 /** @nodts @template T @return {BreadcrumbItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_breadcrumb_BreadcrumbItem_.put(key, value);
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_that__org_patternfly_component_breadcrumb_BreadcrumbItem() {
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ComponentHandler<BreadcrumbItem> */ actionHandler) {
  this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   actionHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_breadcrumb_BreadcrumbItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_breadcrumb_BreadcrumbItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_breadcrumb_BreadcrumbItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_breadcrumb_BreadcrumbItem_.get(key));
  }
  return null;
 }
 /** @nodts @return {HTMLAnchorElement} */
 m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem() {
  if ($Equality.$same(this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_, null)) {
   this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_ = (/**@type {HTMLAnchorElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_.textContent), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLAnchorElement_$Overlay)));
   Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_, [this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_]);
  }
  return this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {BreadcrumbItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_breadcrumb_BreadcrumbItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {BreadcrumbItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_breadcrumb_BreadcrumbItem(arg0, arg1);
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
 /** @final @override @nodts @return {BreadcrumbItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {BreadcrumbItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), BreadcrumbItem));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {BreadcrumbItem} */
 m_text__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ arg0) {
  return /**@type {BreadcrumbItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), BreadcrumbItem));
 }
 /** @nodts */
 static $clinit() {
  BreadcrumbItem.$clinit = () =>{};
  BreadcrumbItem.$loadModules();
  BreadcrumbSubComponent.$clinit();
  ComponentContext.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BreadcrumbItem;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
BreadcrumbItem.f_SUB_COMPONENT_ID__org_patternfly_component_breadcrumb_BreadcrumbItem = 'bci';
/**@const {string} @nodts*/
BreadcrumbItem.f_SUB_COMPONENT_NAME__org_patternfly_component_breadcrumb_BreadcrumbItem = 'BreadcrumbItem';
ComponentContext.$markImplementor(BreadcrumbItem);
ElementTextDelegate.$markImplementor(BreadcrumbItem);
HasIdentifier.$markImplementor(BreadcrumbItem);
$Util.$setClassMetadata(BreadcrumbItem, 'org.patternfly.component.breadcrumb.BreadcrumbItem');

exports = BreadcrumbItem;

//# sourceMappingURL=BreadcrumbItem.js.map
