goog.module('org.patternfly.component.togglegroup.ToggleGroupItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const ComponentIconAndText = goog.require('org.patternfly.component.ComponentIconAndText$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const ToggleGroupSubComponent = goog.require('org.patternfly.component.togglegroup.ToggleGroupSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ButtonType = goog.forwardDeclare('org.jboss.elemento.ButtonType$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let ToggleGroup = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroup$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToggleGroupSubComponent<HTMLDivElement, ToggleGroupItem>}
 * @implements {ComponentContext<HTMLDivElement, ToggleGroupItem>}
 * @implements {ComponentIcon<HTMLDivElement, ToggleGroupItem>}
 * @implements {ComponentIconAndText<HTMLDivElement, ToggleGroupItem>}
 * @implements {Disabled<HTMLDivElement, ToggleGroupItem>}
 * @implements {ElementContainerDelegate<HTMLDivElement, ToggleGroupItem>}
 * @implements {ElementTextMethods<HTMLDivElement, ToggleGroupItem>}
 * @implements {HasIdentifier<HTMLDivElement, ToggleGroupItem>}
 */
class ToggleGroupItem extends ToggleGroupSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_togglegroup_ToggleGroupItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_togglegroup_ToggleGroupItem_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_;
 }
 /** @nodts @return {ToggleGroupItem} */
 static m_toggleGroupItem__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ identifier) {
  ToggleGroupItem.$clinit();
  return ToggleGroupItem.$create__java_lang_String__java_lang_String(identifier, null);
 }
 /** @nodts @return {ToggleGroupItem} */
 static m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ identifier, /** ?string */ text) {
  ToggleGroupItem.$clinit();
  return ToggleGroupItem.$create__java_lang_String__java_lang_String(identifier, text);
 }
 /** @nodts @return {!ToggleGroupItem} */
 static $create__java_lang_String__java_lang_String(/** ?string */ identifier, /** ?string */ text) {
  ToggleGroupItem.$clinit();
  let $instance = new ToggleGroupItem();
  $instance.$ctor__org_patternfly_component_togglegroup_ToggleGroupItem__java_lang_String__java_lang_String__void(identifier, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_togglegroup_ToggleGroupItem__java_lang_String__java_lang_String__void(/** ?string */ identifier, /** ?string */ text) {
  this.$ctor__org_patternfly_component_togglegroup_ToggleGroupSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ToggleGroupItem.f_SUB_COMPONENT_ID__org_patternfly_component_togglegroup_ToggleGroupItem, ToggleGroupItem.f_SUB_COMPONENT_NAME__org_patternfly_component_togglegroup_ToggleGroupItem, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_identifier__org_patternfly_component_togglegroup_ToggleGroupItem_ = identifier;
  this.f_data__org_patternfly_component_togglegroup_ToggleGroupItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_ = (/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_pressed__org_patternfly_core_Aria, false), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
   let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
   this.m_onClick__elemental2_dom_Event__void_$pp_org_patternfly_component_togglegroup(arg0_1);
  }), HTMLContainerBuilder)));
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).appendChild(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_text__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(text);
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay));
 }
 /** @nodts @return {ToggleGroupItem} */
 m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroupItem(/** boolean */ disabled) {
  (/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay))).disabled = disabled;
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_togglegroup_ToggleGroupItem(/** Element */ icon) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_);
  this.m_failSafeIconContainer__org_patternfly_component_IconPosition__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem(IconPosition.f_start__org_patternfly_component_IconPosition).appendChild(icon);
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_togglegroup_ToggleGroupItem(/** Element */ icon, /** ?string */ text, /** IconPosition */ iconPosition) {
  this.m_removeIcon__org_patternfly_component_togglegroup_ToggleGroupItem();
  this.m_failSafeIconContainer__org_patternfly_component_IconPosition__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem(iconPosition).appendChild(icon);
  this.m_failSafeTextElement__org_patternfly_component_IconPosition__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem(iconPosition).textContent = text;
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_removeIcon__org_patternfly_component_togglegroup_ToggleGroupItem() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_);
  this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_ = null;
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_text__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ text) {
  if ($Equality.$same(text, null)) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_);
   this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_ = null;
  } else {
   this.m_failSafeTextElement__org_patternfly_component_IconPosition__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem(IconPosition.f_end__org_patternfly_component_IconPosition).textContent = text;
  }
  return this;
 }
 /** @nodts @template T @return {ToggleGroupItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_togglegroup_ToggleGroupItem_.put(key, value);
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_that__org_patternfly_component_togglegroup_ToggleGroupItem() {
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_togglegroup_ToggleGroupItem(/** ComponentHandler<ToggleGroupItem> */ clickHandler) {
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   clickHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  });
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_togglegroup_ToggleGroupItem_;
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return (/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay))).disabled;
 }
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  if (!$Equality.$same(this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_, null)) {
   return this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_.textContent;
  }
  return null;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_togglegroup_ToggleGroupItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_togglegroup_ToggleGroupItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_togglegroup_ToggleGroupItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_onClick__elemental2_dom_Event__void_$pp_org_patternfly_component_togglegroup(/** Event */ event) {
  let toggleGroup = /**@type {ToggleGroup}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), ToggleGroup));
  if ($Equality.$same(toggleGroup.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
   if (!this.m_isSelected__boolean_$pp_org_patternfly_component_togglegroup()) {
    toggleGroup.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__void(this);
   }
  } else if ($Equality.$same(toggleGroup.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
   toggleGroup.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(this, !this.m_isSelected__boolean_$pp_org_patternfly_component_togglegroup(), true);
  }
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_togglegroup(/** boolean */ selected) {
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_pressed__org_patternfly_core_Aria, selected);
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes), selected);
 }
 /** @nodts @return {boolean} */
 m_isSelected__boolean_$pp_org_patternfly_component_togglegroup() {
  return Boolean.m_parseBoolean__java_lang_String__boolean((/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay))).getAttribute(Aria.f_pressed__org_patternfly_core_Aria));
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTextElement__org_patternfly_component_IconPosition__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem(/** IconPosition */ iconPosition) {
  if ($Equality.$same(this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_, null)) {
   this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
   if ($Equality.$same(iconPosition, IconPosition.f_start__org_patternfly_component_IconPosition)) {
    this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_);
   } else {
    Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_);
   }
  }
  return this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__org_patternfly_component_IconPosition__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem(/** IconPosition */ iconPosition) {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_, null)) {
   this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
   if ($Equality.$same(iconPosition, IconPosition.f_start__org_patternfly_component_IconPosition)) {
    Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_);
   } else {
    this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_);
   }
  }
  return this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_togglegroup_ToggleGroupItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {ToggleGroupItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_togglegroup_ToggleGroupItem(arg0, arg1);
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
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_togglegroup_ToggleGroupItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_togglegroup_ToggleGroupItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** Element */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return this.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_togglegroup_ToggleGroupItem(arg0, arg1, arg2);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroupItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_togglegroup_ToggleGroupItem(/** PredefinedIcon */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_togglegroup_ToggleGroupItem(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_disabled__org_patternfly_component_togglegroup_ToggleGroupItem() {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_add__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_add__elemental2_dom_Node__org_patternfly_component_togglegroup_ToggleGroupItem(/** Node */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_add__java_util_function_Supplier__org_patternfly_component_togglegroup_ToggleGroupItem(/** Supplier<Node> */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 /** @nodts */
 static $clinit() {
  ToggleGroupItem.$clinit = () =>{};
  ToggleGroupItem.$loadModules();
  ToggleGroupSubComponent.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  ComponentIconAndText.$clinit();
  Disabled.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToggleGroupItem;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ButtonType = goog.module.get('org.jboss.elemento.ButtonType$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  IconPosition = goog.module.get('org.patternfly.component.IconPosition$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  ToggleGroup = goog.module.get('org.patternfly.component.togglegroup.ToggleGroup$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToggleGroupItem.f_SUB_COMPONENT_ID__org_patternfly_component_togglegroup_ToggleGroupItem = 'tgi';
/**@const {string} @nodts*/
ToggleGroupItem.f_SUB_COMPONENT_NAME__org_patternfly_component_togglegroup_ToggleGroupItem = 'ToggleGroupItem';
ComponentContext.$markImplementor(ToggleGroupItem);
ComponentIcon.$markImplementor(ToggleGroupItem);
ComponentIconAndText.$markImplementor(ToggleGroupItem);
Disabled.$markImplementor(ToggleGroupItem);
ElementContainerDelegate.$markImplementor(ToggleGroupItem);
ElementTextMethods.$markImplementor(ToggleGroupItem);
HasIdentifier.$markImplementor(ToggleGroupItem);
$Util.$setClassMetadata(ToggleGroupItem, 'org.patternfly.component.togglegroup.ToggleGroupItem');

exports = ToggleGroupItem;

//# sourceMappingURL=ToggleGroupItem.js.map
