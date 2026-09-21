goog.module('org.patternfly.component.navigation.NavigationItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const NavigationSubComponent = goog.require('org.patternfly.component.navigation.NavigationSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let ScrollIntoViewOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
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
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NavigationSubComponent<HTMLLIElement, NavigationItem>}
 * @implements {ComponentContext<HTMLLIElement, NavigationItem>}
 * @implements {ComponentIcon<HTMLLIElement, NavigationItem>}
 * @implements {ElementContainerDelegate<HTMLLIElement, NavigationItem>}
 * @implements {ElementTextDelegate<HTMLLIElement, NavigationItem>}
 * @implements {HasIdentifier<HTMLLIElement, NavigationItem>}
 */
class NavigationItem extends NavigationSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_anchorElement__org_patternfly_component_navigation_NavigationItem;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_navigation_NavigationItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_navigation_NavigationItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_navigation_NavigationItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_navigation_NavigationItem_;
 }
 /** @nodts @return {NavigationItem} */
 static m_navigationItem__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ identifier) {
  NavigationItem.$clinit();
  return NavigationItem.$create__java_lang_String(identifier);
 }
 /** @nodts @return {NavigationItem} */
 static m_navigationItem__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ identifier, /** ?string */ text) {
  NavigationItem.$clinit();
  return /**@type {NavigationItem}*/ ($Casts.$to(NavigationItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), NavigationItem));
 }
 /** @nodts @return {NavigationItem} */
 static m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ href) {
  NavigationItem.$clinit();
  return (/**@type {NavigationItem}*/ ($Casts.$to(NavigationItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), NavigationItem))).m_href__java_lang_String__org_patternfly_component_navigation_NavigationItem(href);
 }
 /** @nodts @return {!NavigationItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  NavigationItem.$clinit();
  let $instance = new NavigationItem();
  $instance.$ctor__org_patternfly_component_navigation_NavigationItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_NavigationItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_navigation_NavigationSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(NavigationItem.f_SUB_COMPONENT_ID__org_patternfly_component_navigation_NavigationItem, NavigationItem.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_NavigationItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_navigation_NavigationItem_ = identifier;
  this.f_data__org_patternfly_component_navigation_NavigationItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).appendChild(this.f_anchorElement__org_patternfly_component_navigation_NavigationItem = (/**@type {HTMLAnchorElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay))));
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_anchorElement__org_patternfly_component_navigation_NavigationItem;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.m_failSafeTextElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_navigation_NavigationItem();
 }
 /** @nodts @return {NavigationItem} */
 m_href__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ href) {
  if (!$Equality.$same(href, null)) {
   this.f_anchorElement__org_patternfly_component_navigation_NavigationItem.href = href;
  }
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_navigation_NavigationItem(/** Element */ icon) {
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_navigation_NavigationItem().appendChild(icon);
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_removeIcon__org_patternfly_component_navigation_NavigationItem() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_navigation_NavigationItem());
  this.f_iconContainer__org_patternfly_component_navigation_NavigationItem_ = null;
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_ariaLabel__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ label) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_anchorElement__org_patternfly_component_navigation_NavigationItem, 'aria-label', label);
  return this;
 }
 /** @nodts @template T @return {NavigationItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_navigation_NavigationItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_navigation_NavigationItem_.put(key, value);
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_that__org_patternfly_component_navigation_NavigationItem() {
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_navigation_NavigationItem(/** ComponentHandler<NavigationItem> */ handler) {
  Elements.m_a__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(this.f_anchorElement__org_patternfly_component_navigation_NavigationItem).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  });
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_navigation_NavigationItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_navigation_NavigationItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_navigation_NavigationItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_navigation_NavigationItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_select__void_$pp_org_patternfly_component_navigation() {
  this.f_anchorElement__org_patternfly_component_navigation_NavigationItem.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_anchorElement__org_patternfly_component_navigation_NavigationItem, Aria.f_current__org_patternfly_core_Aria, 'page');
  let options = ScrollIntoViewOptions_$Overlay.m_create__elemental2_dom_ScrollIntoViewOptions();
  options.block = 'nearest';
  options.inline = 'nearest';
  Element_$Overlay.m_scrollIntoView__$devirt__elemental2_dom_Element__elemental2_dom_ScrollIntoViewOptions__void(this.f_anchorElement__org_patternfly_component_navigation_NavigationItem, options);
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTextElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_navigation_NavigationItem() {
  if ($Equality.$same(this.f_textElement__org_patternfly_component_navigation_NavigationItem_, null)) {
   this.f_anchorElement__org_patternfly_component_navigation_NavigationItem.appendChild(this.f_textElement__org_patternfly_component_navigation_NavigationItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_textElement__org_patternfly_component_navigation_NavigationItem_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_navigation_NavigationItem() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_navigation_NavigationItem_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_anchorElement__org_patternfly_component_navigation_NavigationItem, this.f_iconContainer__org_patternfly_component_navigation_NavigationItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_navigation_NavigationItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_NavigationItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {NavigationItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_navigation_NavigationItem(arg0, arg1);
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
 /** @final @override @nodts @return {NavigationItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_navigation_NavigationItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_navigation_NavigationItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_navigation_NavigationItem(/** PredefinedIcon */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_add__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_add__elemental2_dom_Node__org_patternfly_component_navigation_NavigationItem(/** Node */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_add__java_util_function_Supplier__org_patternfly_component_navigation_NavigationItem(/** Supplier<Node> */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_text__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 /** @nodts */
 static $clinit() {
  NavigationItem.$clinit = () =>{};
  NavigationItem.$loadModules();
  NavigationSubComponent.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NavigationItem;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  ScrollIntoViewOptions_$Overlay = goog.module.get('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
NavigationItem.f_SUB_COMPONENT_ID__org_patternfly_component_navigation_NavigationItem = 'ni';
/**@const {string} @nodts*/
NavigationItem.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_NavigationItem = 'NavigationItem';
ComponentContext.$markImplementor(NavigationItem);
ComponentIcon.$markImplementor(NavigationItem);
ElementContainerDelegate.$markImplementor(NavigationItem);
ElementTextDelegate.$markImplementor(NavigationItem);
HasIdentifier.$markImplementor(NavigationItem);
$Util.$setClassMetadata(NavigationItem, 'org.patternfly.component.navigation.NavigationItem');

exports = NavigationItem;

//# sourceMappingURL=NavigationItem.js.map
