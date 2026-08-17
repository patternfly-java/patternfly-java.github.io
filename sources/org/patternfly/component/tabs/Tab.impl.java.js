goog.module('org.patternfly.component.tabs.Tab$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const TabSubComponent = goog.require('org.patternfly.component.tabs.TabSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ButtonType = goog.forwardDeclare('org.jboss.elemento.ButtonType$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Popover = goog.forwardDeclare('org.patternfly.component.popover.Popover$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let TabContent = goog.forwardDeclare('org.patternfly.component.tabs.TabContent$impl');
let Tabs = goog.forwardDeclare('org.patternfly.component.tabs.Tabs$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Timeouts = goog.forwardDeclare('org.patternfly.core.Timeouts$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TabSubComponent<HTMLElement, Tab>}
 * @implements {Closeable<HTMLElement, Tab>}
 * @implements {ComponentContext<HTMLElement, Tab>}
 * @implements {ComponentIcon<HTMLElement, Tab>}
 * @implements {Disabled<HTMLElement, Tab>}
 * @implements {ElementTextDelegate<HTMLElement, Tab>}
 * @implements {HasIdentifier<HTMLElement, Tab>}
 */
class Tab extends TabSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_buttonId__org_patternfly_component_tabs_Tab;
  /**@type {?string} @nodts*/
  this.f_contentId__org_patternfly_component_tabs_Tab;
  /**@type {HTMLContainerBuilder<?>} @nodts*/
  this.f_button__org_patternfly_component_tabs_Tab;
  /**@type {List<CloseHandler<Tab>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_tabs_Tab;
  /**@type {TabContent} @nodts*/
  this.f_content__org_patternfly_component_tabs_Tab;
  /**@type {j_u_function_Function<Tabs, Promise<TabContent>>} @nodts*/
  this.f_asyncContent__org_patternfly_component_tabs_Tab;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_tabs_Tab_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_tabs_Tab_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_tabs_Tab_;
  /**@type {boolean} @nodts*/
  this.f_anchorElement__org_patternfly_component_tabs_Tab_ = false;
  /**@type {number} @nodts*/
  this.f_loadingTimeout__org_patternfly_component_tabs_Tab_ = 0;
  /**@type {Button} @nodts*/
  this.f_helpButton__org_patternfly_component_tabs_Tab_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_tabs_Tab_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_tabs_Tab_;
  /**@type {HTMLElement} @nodts*/
  this.f_loadingContainer__org_patternfly_component_tabs_Tab_;
 }
 /** @nodts @return {Tab} */
 static m_tab__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ identifier) {
  Tab.$clinit();
  return Tab.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType), identifier);
 }
 /** @nodts @return {Tab} */
 static m_tab__java_lang_String__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ identifier, /** ?string */ text) {
  Tab.$clinit();
  return /**@type {Tab}*/ ($Casts.$to(Tab.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType), identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), Tab));
 }
 /** @nodts @template E @return {Tab} */
 static m_tab__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_component_tabs_Tab(/** HTMLContainerBuilder<E> */ builder, /** ?string */ identifier, /** ?string */ text) {
  Tab.$clinit();
  return /**@type {Tab}*/ ($Casts.$to(Tab.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String(builder, identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), Tab));
 }
 /** @nodts @template E @return {!Tab} */
 static $create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String(/** HTMLContainerBuilder<E> */ builder, /** ?string */ identifier) {
  Tab.$clinit();
  let $instance = new Tab();
  $instance.$ctor__org_patternfly_component_tabs_Tab__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__void(builder, identifier);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_tabs_Tab__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__void(/** HTMLContainerBuilder<E> */ builder, /** ?string */ identifier) {
  this.$ctor__org_patternfly_component_tabs_TabSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(Tab.f_SUB_COMPONENT_ID__org_patternfly_component_tabs_Tab, Tab.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_Tab, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_presentation__org_patternfly_core_Roles), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_tabs_Tab_ = identifier;
  this.f_data__org_patternfly_component_tabs_Tab_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_closeHandler__org_patternfly_component_tabs_Tab = (/**@type {!ArrayList<CloseHandler<Tab>>}*/ (ArrayList.$create__()));
  this.f_buttonId__org_patternfly_component_tabs_Tab = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(identifier, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['tab'], j_l_String)));
  this.f_contentId__org_patternfly_component_tabs_Tab = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(identifier, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['content'], j_l_String)));
  this.f_anchorElement__org_patternfly_component_tabs_Tab_ = j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean((/**@type {!Element}*/ (builder.m_element__elemental2_dom_HTMLElement())).tagName, 'a');
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_tabs_Tab = (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_buttonId__org_patternfly_component_tabs_Tab), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_tab__org_patternfly_core_Roles), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_selected__org_patternfly_core_Aria, false), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let currentTarget = /**@type {HTMLElement}*/ ($Casts.$to(e_1.currentTarget, $Overlay));
   if (currentTarget.classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_ariaDisabled__org_patternfly_style_Classes))) {
    e_1.preventDefault();
   } else {
    this.m_tabs__org_patternfly_component_tabs_Tabs().m_select__org_patternfly_component_tabs_Tab__void(this);
   }
  }), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_tabs_Tab_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_tabs_Tab_;
 }
 /** @nodts @return {Tab} */
 m_addContent__org_patternfly_component_tabs_TabContent__org_patternfly_component_tabs_Tab(/** TabContent */ content) {
  return this.m_add__org_patternfly_component_tabs_TabContent__org_patternfly_component_tabs_Tab(content);
 }
 /** @nodts @return {Tab} */
 m_add__org_patternfly_component_tabs_TabContent__org_patternfly_component_tabs_Tab(/** TabContent */ content) {
  this.f_content__org_patternfly_component_tabs_Tab = content;
  return this;
 }
 /** @nodts @return {Tab} */
 m_addContent__java_util_function_Function__org_patternfly_component_tabs_Tab(/** j_u_function_Function<Tabs, Promise<TabContent>> */ content) {
  return this.m_add__java_util_function_Function__org_patternfly_component_tabs_Tab(content);
 }
 /** @nodts @return {Tab} */
 m_add__java_util_function_Function__org_patternfly_component_tabs_Tab(/** j_u_function_Function<Tabs, Promise<TabContent>> */ content) {
  this.f_asyncContent__org_patternfly_component_tabs_Tab = content;
  return this;
 }
 /** @nodts @return {Tab} */
 m_closeable__org_patternfly_component_tabs_Tab() {
  return this.m_closeable__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tab(null);
 }
 /** @nodts @return {Tab} */
 m_closeable__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tab(/** CloseHandler<Tab> */ closeHandler) {
  if ($Equality.$same(this.f_closeButton__org_patternfly_component_tabs_Tab_, null)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_action__org_patternfly_style_Classes)], j_l_String)));
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_tabs_Tab_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_text__java_lang_String())), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_close__elemental2_dom_Event__boolean__void(e_1, true);
   }), Button))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), Button)))), HTMLContainerBuilder)));
  }
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tab(closeHandler);
 }
 /** @nodts @return {Tab} */
 m_icon__elemental2_dom_Element__org_patternfly_component_tabs_Tab(/** Element */ icon) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tabs_Tab());
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tabs_Tab().appendChild(icon);
  return this;
 }
 /** @nodts @return {Tab} */
 m_removeIcon__org_patternfly_component_tabs_Tab() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tabs_Tab());
  this.f_iconContainer__org_patternfly_component_tabs_Tab_ = null;
  return null;
 }
 /** @nodts @return {Tab} */
 m_disabled__boolean__org_patternfly_component_tabs_Tab(/** boolean */ disabled) {
  if (this.f_anchorElement__org_patternfly_component_tabs_Tab_) {
   if (disabled) {
    (/**@type {!HTMLElement}*/ (this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement())).tabIndex = -1;
   } else {
    (/**@type {!Element}*/ (this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement())).removeAttribute(Attributes.f_tabindex__org_patternfly_core_Attributes);
   }
   Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement()), Classes.f_ariaDisabled__org_patternfly_style_Classes, disabled);
  } else {
   (/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay))).disabled = disabled;
  }
  this.f_button__org_patternfly_component_tabs_Tab.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, disabled);
  return /**@type {Tab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), Tab));
 }
 /** @nodts @return {Tab} */
 m_ariaDisabled__org_patternfly_component_tabs_Tab() {
  return this.m_ariaDisabled__boolean__org_patternfly_component_tabs_Tab(true);
 }
 /** @nodts @return {Tab} */
 m_ariaDisabled__boolean__org_patternfly_component_tabs_Tab(/** boolean */ disabled) {
  this.f_button__org_patternfly_component_tabs_Tab.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, disabled);
  Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), Classes.f_disabled__org_patternfly_style_Classes, disabled);
  Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement()), Classes.f_ariaDisabled__org_patternfly_style_Classes, disabled);
  return this;
 }
 /** @nodts @return {Tab} */
 m_hidden__boolean__org_patternfly_component_tabs_Tab(/** boolean */ hidden) {
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this, !hidden);
  let tabs = /**@type {Tabs}*/ ($Casts.$to(this.m_lookupComponent__boolean__org_patternfly_component_BaseComponent(true), Tabs));
  if (!$Equality.$same(tabs, null) && !$Equality.$same(tabs.m_currentTab__org_patternfly_component_tabs_Tab(), null)) {
   if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(this.f_identifier__org_patternfly_component_tabs_Tab_, tabs.m_currentTab__org_patternfly_component_tabs_Tab().f_identifier__org_patternfly_component_tabs_Tab_)) {
    this.m_select__boolean__void_$pp_org_patternfly_component_tabs(false);
   }
  }
  return this;
 }
 /** @nodts @return {Tab} */
 m_href__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ href) {
  if (this.f_anchorElement__org_patternfly_component_tabs_Tab_) {
   (/**@type {HTMLAnchorElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement(), HTMLAnchorElement_$Overlay))).href = href;
  } else {
   Tab.f_logger__org_patternfly_component_tabs_Tab_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Links are not supported for tab %o. Please create the tab using the right factory method.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  return this;
 }
 /** @nodts @return {Tab} */
 m_help__org_patternfly_component_popover_Popover__org_patternfly_component_tabs_Tab(/** Popover */ help) {
  if ($Equality.$same(this.f_helpButton__org_patternfly_component_tabs_Tab_, null)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_action__org_patternfly_style_Classes)], j_l_String)));
   let helpContainer = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_helpButton__org_patternfly_component_tabs_Tab_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'More info for ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_text__java_lang_String())), Button))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(patternfly.m_help__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), Button)))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(help), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
   help.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(this.f_helpButton__org_patternfly_component_tabs_Tab_.m_element__elemental2_dom_HTMLElement());
   if ($Equality.$same(this.f_closeButton__org_patternfly_component_tabs_Tab_, null)) {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(helpContainer);
   } else {
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(helpContainer, this.f_closeButton__org_patternfly_component_tabs_Tab_.m_element__elemental2_dom_HTMLElement());
   }
  }
  return this;
 }
 /** @nodts @return {Tab} */
 m_selected__org_patternfly_component_tabs_Tab() {
  return this;
 }
 /** @nodts @return {Tab} */
 m_tooltip__org_patternfly_component_tooltip_Tooltip__org_patternfly_component_tabs_Tab(/** Tooltip */ tooltip) {
  this.f_button__org_patternfly_component_tabs_Tab.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tooltip);
  tooltip.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_Tooltip(/**@type {HTMLElement}*/ (this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement()));
  return this;
 }
 /** @nodts @template T @return {Tab} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_tabs_Tab(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_tabs_Tab_.put(key, value);
  return this;
 }
 /** @nodts @return {Tab} */
 m_that__org_patternfly_component_tabs_Tab() {
  return this;
 }
 /** @nodts @return {Tab} */
 m_ariaLabel__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ label) {
  this.f_button__org_patternfly_component_tabs_Tab.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Tab} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_tabs_Tab_, null)) {
   this.f_closeButton__org_patternfly_component_tabs_Tab_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  } else {
   Tab.f_logger__org_patternfly_component_tabs_Tab_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to set aria close label for tab %o. Please make the tab closeable first.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  return this;
 }
 /** @nodts @return {Tab} */
 m_ariaHelpLabel__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ label) {
  if (!$Equality.$same(this.f_helpButton__org_patternfly_component_tabs_Tab_, null)) {
   this.f_helpButton__org_patternfly_component_tabs_Tab_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  } else {
   Tab.f_logger__org_patternfly_component_tabs_Tab_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to set aria help label for tab %o. Please add the help popover first.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  return this;
 }
 /** @nodts @return {Tab} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tab(/** CloseHandler<Tab> */ closeHandler) {
  if ($Equality.$same(this.f_closeButton__org_patternfly_component_tabs_Tab_, null)) {
   return this.m_closeable__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tab(closeHandler);
  } else {
   if (!$Equality.$same(closeHandler, null)) {
    this.f_closeHandler__org_patternfly_component_tabs_Tab.add(closeHandler);
   }
   return this;
  }
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_tabs_Tab, event, fireEvent)) {
   this.m_tabs__org_patternfly_component_tabs_Tabs().m_close__org_patternfly_component_tabs_Tab__void(this);
   CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_tabs_Tab, event, fireEvent);
  }
 }
 /** @nodts @return {boolean} */
 m_hidden__boolean() {
  return !Elements.m_isVisible__org_jboss_elemento_IsElement__boolean(this);
 }
 /** @nodts @return {Tabs} */
 m_tabs__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Tabs));
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_tabs_Tab_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_tabs_Tab_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_tabs_Tab_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_tabs_Tab_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_select__boolean__void_$pp_org_patternfly_component_tabs(/** boolean */ selected) {
  this.f_button__org_patternfly_component_tabs_Tab.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_selected__org_patternfly_core_Aria, selected);
  if (selected) {
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
   if ($Equality.$same(this.f_content__org_patternfly_component_tabs_Tab, null)) {
    if (!$Equality.$same(this.f_asyncContent__org_patternfly_component_tabs_Tab, null)) {
     goog.global.clearTimeout(this.f_loadingTimeout__org_patternfly_component_tabs_Tab_);
     this.f_loadingTimeout__org_patternfly_component_tabs_Tab_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
      this.m_startLoading__void_$p_org_patternfly_component_tabs_Tab();
     }, Timeouts.f_LOADING_TIMEOUT__org_patternfly_core_Timeouts, []);
     let tabs = this.m_tabs__org_patternfly_component_tabs_Tabs();
     (/**@type {!Promise<!*>}*/ ((/**@type {!Promise<!*>}*/ ((/**@type {Promise<TabContent>}*/ ($Casts.$to(this.f_asyncContent__org_patternfly_component_tabs_Tab.m_apply__java_lang_Object__java_lang_Object(tabs), Promise_$Overlay))).then(/**  @return {IThenable<*>}*/ ((/** TabContent */ c) =>{
      let c_1 = /**@type {TabContent}*/ ($Casts.$to(c, TabContent));
      this.f_content__org_patternfly_component_tabs_Tab = c_1;
      this.f_asyncContent__org_patternfly_component_tabs_Tab = null;
      tabs.m_addTabContent__org_patternfly_component_tabs_Tab__void_$pp_org_patternfly_component_tabs(this);
      this.f_content__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement().hidden = false;
      return null;
     })))).catch(/**  @return {IThenable<*>}*/ ((/** !* */ error) =>{
      Tab.f_logger__org_patternfly_component_tabs_Tab_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to load content for tab %o: %s', [this.m_element__elemental2_dom_HTMLElement(), error]);
      return null;
     })))).finally(() =>{
      this.m_stopLoading__void_$p_org_patternfly_component_tabs_Tab();
     });
    } else {
     Tab.f_logger__org_patternfly_component_tabs_Tab_.m_error__java_lang_String__arrayOf_java_lang_Object__void('No content defined for tab %o', [this.m_element__elemental2_dom_HTMLElement()]);
    }
   } else {
    this.f_content__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement().hidden = false;
   }
  } else {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
   if (!$Equality.$same(this.f_content__org_patternfly_component_tabs_Tab, null)) {
    this.f_content__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement().hidden = true;
   }
  }
 }
 /** @nodts */
 m_disableCloseButton__boolean__void_$pp_org_patternfly_component_tabs(/** boolean */ disable) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_tabs_Tab_, null)) {
   this.f_closeButton__org_patternfly_component_tabs_Tab_.m_disabled__boolean__org_patternfly_component_button_Button(disable);
  }
 }
 /** @nodts */
 m_startLoading__void_$p_org_patternfly_component_tabs_Tab() {
  if (!$Equality.$same(this.f_iconContainer__org_patternfly_component_tabs_Tab_, null)) {
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_iconContainer__org_patternfly_component_tabs_Tab_, false);
  }
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {Element}*/ (this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement()), this.f_loadingContainer__org_patternfly_component_tabs_Tab_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Spinner.m_spinner__org_patternfly_component_spinner_Spinner().m_size__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(Size.f_md__org_patternfly_style_Size)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts */
 m_stopLoading__void_$p_org_patternfly_component_tabs_Tab() {
  goog.global.clearTimeout(this.f_loadingTimeout__org_patternfly_component_tabs_Tab_);
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_loadingContainer__org_patternfly_component_tabs_Tab_);
  if (!$Equality.$same(this.f_iconContainer__org_patternfly_component_tabs_Tab_, null)) {
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_iconContainer__org_patternfly_component_tabs_Tab_, true);
  }
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tabs_Tab() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_tabs_Tab_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {Element}*/ (this.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement()), this.f_iconContainer__org_patternfly_component_tabs_Tab_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_tabs_Tab_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_Tab();
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Tab> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tab(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__void() {
  Closeable.m_close__$default__org_patternfly_component_Closeable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__elemental2_dom_Event__void(/** Event */ arg0) {
  Closeable.m_close__$default__org_patternfly_component_Closeable__elemental2_dom_Event__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Tab} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_tabs_Tab(arg0, arg1);
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
 /** @final @override @nodts @return {Tab} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {Tab}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Tab));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_tabs_Tab(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_tabs_Tab();
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Tab));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_tabs_Tab(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {Tab}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Tab));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_hidden__boolean__org_patternfly_component_tabs_Tab(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Tab} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_tabs_Tab(/** PredefinedIcon */ arg0) {
  return /**@type {Tab}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Tab));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tab} */
 m_disabled__org_patternfly_component_tabs_Tab() {
  return /**@type {Tab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Tab));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tab} */
 m_text__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ arg0) {
  return /**@type {Tab}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), Tab));
 }
 /** @nodts */
 static $clinit() {
  Tab.$clinit = () =>{};
  Tab.$loadModules();
  TabSubComponent.$clinit();
  Closeable.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  Disabled.$clinit();
  ElementTextDelegate.$clinit();
  Tab.f_logger__org_patternfly_component_tabs_Tab_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Tab).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tab;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ButtonType = goog.module.get('org.jboss.elemento.ButtonType$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  TabContent = goog.module.get('org.patternfly.component.tabs.TabContent$impl');
  Tabs = goog.module.get('org.patternfly.component.tabs.Tabs$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Timeouts = goog.module.get('org.patternfly.core.Timeouts$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Tab.f_logger__org_patternfly_component_tabs_Tab_;
/**@const {string} @nodts*/
Tab.f_SUB_COMPONENT_ID__org_patternfly_component_tabs_Tab = 'tab';
/**@const {string} @nodts*/
Tab.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_Tab = 'Tab';
Closeable.$markImplementor(Tab);
ComponentContext.$markImplementor(Tab);
ComponentIcon.$markImplementor(Tab);
Disabled.$markImplementor(Tab);
ElementTextDelegate.$markImplementor(Tab);
HasIdentifier.$markImplementor(Tab);
$Util.$setClassMetadata(Tab, 'org.patternfly.component.tabs.Tab');

exports = Tab;

//# sourceMappingURL=Tab.js.map
