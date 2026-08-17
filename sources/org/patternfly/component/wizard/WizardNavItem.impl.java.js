goog.module('org.patternfly.component.wizard.WizardNavItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const WizardSubComponent = goog.require('org.patternfly.component.wizard.WizardSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {WizardSubComponent<HTMLElement, WizardNavItem>}
 * @implements {ComponentContext<HTMLElement, WizardNavItem>}
 * @implements {ComponentIcon<HTMLElement, WizardNavItem>}
 * @implements {Disabled<HTMLElement, WizardNavItem>}
 * @implements {HasIdentifier<HTMLElement, WizardNavItem>}
 * @implements {ElementTextDelegate<HTMLElement, WizardNavItem>}
 */
class WizardNavItem extends WizardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_wizard_WizardNavItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_wizard_WizardNavItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_wizard_WizardNavItem_;
  /**@type {ValidationStatus} @nodts*/
  this.f_status__org_patternfly_component_wizard_WizardNavItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_screenReaderElement__org_patternfly_component_wizard_WizardNavItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_wizard_WizardNavItem_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_button__org_patternfly_component_wizard_WizardNavItem;
 }
 /** @nodts @return {!WizardNavItem} */
 static $create__java_lang_String__java_lang_String(/** ?string */ identifier, /** ?string */ title) {
  WizardNavItem.$clinit();
  let $instance = new WizardNavItem();
  $instance.$ctor__org_patternfly_component_wizard_WizardNavItem__java_lang_String__java_lang_String__void(identifier, title);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardNavItem__java_lang_String__java_lang_String__void(/** ?string */ identifier, /** ?string */ title) {
  this.$ctor__org_patternfly_component_wizard_WizardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(WizardNavItem.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardNavItem, WizardNavItem.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardNavItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_nav__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_wizard_WizardNavItem_ = identifier;
  this.f_data__org_patternfly_component_wizard_WizardNavItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_wizard_WizardNavItem = (/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_nav__org_patternfly_style_Classes, Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_current__org_patternfly_core_Aria, 'false'), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   let wizard = /**@type {Wizard}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Wizard));
   wizard.m_select__java_lang_String__void(identifier);
  }), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_wizard_WizardNavItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_nav__org_patternfly_style_Classes, Classes.f_link__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(title), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_wizard_WizardNavItem_;
 }
 /** @nodts @return {WizardNavItem} */
 m_disabled__boolean__org_patternfly_component_wizard_WizardNavItem(/** boolean */ disabled) {
  (/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_wizard_WizardNavItem.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay))).disabled = disabled;
  this.f_button__org_patternfly_component_wizard_WizardNavItem.m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes), disabled);
  return this;
 }
 /** @nodts @return {WizardNavItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_wizard_WizardNavItem(/** Element */ icon) {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_wizard_WizardNavItem_, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_wizard_WizardNavItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_nav__org_patternfly_style_Classes, Classes.f_link__org_patternfly_style_Classes, Classes.f_status__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), this.f_textElement__org_patternfly_component_wizard_WizardNavItem_);
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_wizard_WizardNavItem_);
  this.f_iconContainer__org_patternfly_component_wizard_WizardNavItem_.appendChild(icon);
  return this;
 }
 /** @nodts @return {WizardNavItem} */
 m_removeIcon__org_patternfly_component_wizard_WizardNavItem() {
  return this;
 }
 /** @nodts @template T @return {WizardNavItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_wizard_WizardNavItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_wizard_WizardNavItem_.put(key, value);
  return this;
 }
 /** @nodts @return {WizardNavItem} */
 m_that__org_patternfly_component_wizard_WizardNavItem() {
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return (/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_wizard_WizardNavItem.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay))).disabled;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_wizard_WizardNavItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_wizard_WizardNavItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_wizard_WizardNavItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_wizard_WizardNavItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_status__org_patternfly_component_ValidationStatus__void_$pp_org_patternfly_component_wizard(/** ValidationStatus */ status) {
  if (!$Equality.$same(this.f_status__org_patternfly_component_wizard_WizardNavItem_, null)) {
   this.f_button__org_patternfly_component_wizard_WizardNavItem.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([this.f_status__org_patternfly_component_wizard_WizardNavItem_.f_status__org_patternfly_component_ValidationStatus.m_modifier__java_lang_String()], j_l_String)));
  }
  if ($Equality.$same(status, null)) {
   this.m_removeIcon__org_patternfly_component_wizard_WizardNavItem();
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_screenReaderElement__org_patternfly_component_wizard_WizardNavItem_);
   this.f_screenReaderElement__org_patternfly_component_wizard_WizardNavItem_ = null;
   this.f_iconContainer__org_patternfly_component_wizard_WizardNavItem_ = null;
  } else {
   this.f_button__org_patternfly_component_wizard_WizardNavItem.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([status.f_status__org_patternfly_component_ValidationStatus.m_modifier__java_lang_String()], j_l_String)));
   if (!$Equality.$same(status.m_icon__org_patternfly_icon_PredefinedIcon(), null)) {
    this.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(status.m_icon__org_patternfly_icon_PredefinedIcon());
   }
   if (!$Equality.$same(this.f_screenReaderElement__org_patternfly_component_wizard_WizardNavItem_, null)) {
    this.f_screenReaderElement__org_patternfly_component_wizard_WizardNavItem_.textContent = status.f_status__org_patternfly_component_ValidationStatus.m_value__java_lang_String();
   } else {
    Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_wizard_WizardNavItem.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)), this.f_screenReaderElement__org_patternfly_component_wizard_WizardNavItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(status.f_status__org_patternfly_component_ValidationStatus.m_value__java_lang_String()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
   }
  }
  this.f_status__org_patternfly_component_wizard_WizardNavItem_ = status;
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNavItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_WizardNavItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {WizardNavItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_wizard_WizardNavItem(arg0, arg1);
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
 /** @final @override @nodts @return {WizardNavItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {WizardNavItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), WizardNavItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNavItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_wizard_WizardNavItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNavItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_wizard_WizardNavItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNavItem} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {WizardNavItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), WizardNavItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNavItem} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_wizard_WizardNavItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNavItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {WizardNavItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), WizardNavItem));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardNavItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_wizard_WizardNavItem(/** PredefinedIcon */ arg0) {
  return /**@type {WizardNavItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), WizardNavItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardNavItem} */
 m_disabled__org_patternfly_component_wizard_WizardNavItem() {
  return /**@type {WizardNavItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), WizardNavItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardNavItem} */
 m_text__java_lang_String__org_patternfly_component_wizard_WizardNavItem(/** ?string */ arg0) {
  return /**@type {WizardNavItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), WizardNavItem));
 }
 /** @nodts */
 static $clinit() {
  WizardNavItem.$clinit = () =>{};
  WizardNavItem.$loadModules();
  WizardSubComponent.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  Disabled.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardNavItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Wizard = goog.module.get('org.patternfly.component.wizard.Wizard$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
WizardNavItem.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardNavItem = 'wzni';
/**@const {string} @nodts*/
WizardNavItem.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardNavItem = 'WizardNavItem';
ComponentContext.$markImplementor(WizardNavItem);
ComponentIcon.$markImplementor(WizardNavItem);
Disabled.$markImplementor(WizardNavItem);
HasIdentifier.$markImplementor(WizardNavItem);
ElementTextDelegate.$markImplementor(WizardNavItem);
$Util.$setClassMetadata(WizardNavItem, 'org.patternfly.component.wizard.WizardNavItem');

exports = WizardNavItem;

//# sourceMappingURL=WizardNavItem.js.map
