goog.module('org.patternfly.component.tabs.OverflowTab$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TabSubComponent = goog.require('org.patternfly.component.tabs.TabSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ButtonType = goog.forwardDeclare('org.jboss.elemento.ButtonType$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Expandable = goog.forwardDeclare('org.patternfly.component.Expandable$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let Tab = goog.forwardDeclare('org.patternfly.component.tabs.Tab$impl');
let Tabs = goog.forwardDeclare('org.patternfly.component.tabs.Tabs$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let OverlayHandler = goog.forwardDeclare('org.patternfly.handler.OverlayHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let CssPositioning = goog.forwardDeclare('org.patternfly.overlay.CssPositioning$impl');
let Overlay = goog.forwardDeclare('org.patternfly.overlay.Overlay$impl');
let TriggerMode = goog.forwardDeclare('org.patternfly.overlay.TriggerMode$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Placement = goog.forwardDeclare('org.patternfly.style.Placement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TabSubComponent<HTMLElement, OverflowTab>}
 * @implements {Disabled<HTMLElement, OverflowTab>}
 */
class OverflowTab extends TabSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, Tab>} @nodts*/
  this.f_tabs__org_patternfly_component_tabs_OverflowTab_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_button__org_patternfly_component_tabs_OverflowTab_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_tabs_OverflowTab_;
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_tabs_OverflowTab_;
  /**@type {MenuList} @nodts*/
  this.f_menuList__org_patternfly_component_tabs_OverflowTab_;
  /**@type {Overlay} @nodts*/
  this.f_overlay__org_patternfly_component_tabs_OverflowTab_;
  /**@type {number} @nodts*/
  this.f_count__org_patternfly_component_tabs_OverflowTab_ = 0;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_tabs_OverflowTab_;
  /**@type {boolean} @nodts*/
  this.f_showCount__org_patternfly_component_tabs_OverflowTab_ = false;
  /**@type {MenuItem} @nodts*/
  this.f_selectedMenuItem__org_patternfly_component_tabs_OverflowTab_;
 }
 /** @nodts @return {OverflowTab} */
 static m_overflowTab__org_patternfly_component_tabs_OverflowTab() {
  OverflowTab.$clinit();
  return OverflowTab.$create__();
 }
 /** @nodts @return {!OverflowTab} */
 static $create__() {
  OverflowTab.$clinit();
  let $instance = new OverflowTab();
  $instance.$ctor__org_patternfly_component_tabs_OverflowTab__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tabs_OverflowTab__void() {
  this.$ctor__org_patternfly_component_tabs_TabSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(OverflowTab.f_SUB_COMPONENT_ID__org_patternfly_component_tabs_OverflowTab, OverflowTab.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_OverflowTab, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflow__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Tabs__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['overflow'], j_l_String)))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_presentation__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_tabs__org_patternfly_component_tabs_OverflowTab_ = (/**@type {!LinkedHashMap<?string, Tab>}*/ (LinkedHashMap.$create__()));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_tabs_OverflowTab_ = (/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_tab__org_patternfly_core_Roles), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_hasPopup__org_patternfly_style_Classes, 'menu'), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_tabs_OverflowTab_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretDown__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder))));
  let /** HTMLElement */ overlayElement;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(overlayElement = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_overlay__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_tabs_OverflowTab_ = Menu.m_menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__org_patternfly_component_menu_Menu(MenuType.f_select__org_patternfly_component_menu_MenuType, SelectionMode.f_single__org_patternfly_component_SelectionMode).m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_menu_Menu(SelectHandler.$adapt((/** Event */ event, /** MenuItem */ menuItem, /** boolean */ selected) =>{
   let menuItem_1 = /**@type {MenuItem}*/ ($Casts.$to(menuItem, MenuItem));
   this.m_select__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_tabs_OverflowTab(menuItem_1);
  })).m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(this.f_menuList__org_patternfly_component_tabs_OverflowTab_ = (/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this.f_tabs__org_patternfly_component_tabs_OverflowTab_.values(), j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** Tab */ tab) =>{
   let tab_1 = /**@type {Tab}*/ ($Casts.$to(tab, Tab));
   return MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(tab_1.m_identifier__java_lang_String(), tab_1.m_text__java_lang_String());
  }))), MenuList)))))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  let /** HTMLContainerBuilder<HTMLButtonElement> */ $$q;
  this.f_overlay__org_patternfly_component_tabs_OverflowTab_ = Overlay.m_overlay__elemental2_dom_HTMLElement__org_patternfly_style_Placement__org_patternfly_overlay_Overlay(overlayElement, Placement.f_bottomStart__org_patternfly_style_Placement).m_trigger__java_util_function_Supplier__org_patternfly_overlay_Overlay(($$q = this.f_button__org_patternfly_component_tabs_OverflowTab_, Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLButtonElement}*/ ($Casts.$to($$q.m_element__elemental2_dom_HTMLElement(), $Overlay));
  })))).m_triggerMode__org_patternfly_overlay_TriggerMode__org_patternfly_overlay_Overlay(TriggerMode.f_click__org_patternfly_overlay_TriggerMode).m_cssPositioning__boolean__org_patternfly_overlay_Overlay(CssPositioning.m_anchorNameSupported__boolean()).m_onToggle__org_patternfly_handler_OverlayHandler__org_patternfly_overlay_Overlay(OverlayHandler.$adapt((/** Event */ event_1, /** boolean */ open) =>{
   if (open) {
    Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), null);
   } else {
    Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), null);
   }
  }));
  this.f_overlay__org_patternfly_component_tabs_OverflowTab_.m_attach__elemental2_dom_HTMLElement();
 }
 /** @nodts */
 m_detach__void_$pp_org_patternfly_component_tabs() {
  this.f_overlay__org_patternfly_component_tabs_OverflowTab_.m_detach__void();
 }
 /** @nodts @return {OverflowTab} */
 m_that__org_patternfly_component_tabs_OverflowTab() {
  return this;
 }
 /** @nodts */
 m_ariaLabel__java_lang_String__void_$pp_org_patternfly_component_tabs(/** ?string */ label) {
  this.f_button__org_patternfly_component_tabs_OverflowTab_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
 }
 /** @nodts */
 m_text__java_lang_String__void_$pp_org_patternfly_component_tabs(/** ?string */ text) {
  this.f_text__org_patternfly_component_tabs_OverflowTab_ = text;
  this.m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab();
 }
 /** @nodts */
 m_showCount__boolean__void_$pp_org_patternfly_component_tabs(/** boolean */ showCount) {
  this.f_showCount__org_patternfly_component_tabs_OverflowTab_ = showCount;
  this.m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab();
 }
 /** @nodts */
 m_update__java_util_List__void_$pp_org_patternfly_component_tabs(/** List<Tab> */ overflowTabs) {
  this.f_tabs__org_patternfly_component_tabs_OverflowTab_.clear();
  this.f_menuList__org_patternfly_component_tabs_OverflowTab_.m_clear__void();
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this, !overflowTabs.isEmpty());
  if (!overflowTabs.isEmpty()) {
   this.f_count__org_patternfly_component_tabs_OverflowTab_ = overflowTabs.size();
   this.m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab();
   for (let $iterator = overflowTabs.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
    {
     this.f_tabs__org_patternfly_component_tabs_OverflowTab_.put(tab.m_identifier__java_lang_String(), tab);
    }
   }
   this.f_menuList__org_patternfly_component_tabs_OverflowTab_.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(overflowTabs, j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** Tab */ tab_1) =>{
    let tab_2 = /**@type {Tab}*/ ($Casts.$to(tab_1, Tab));
    return MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(tab_2.m_identifier__java_lang_String(), tab_2.m_text__java_lang_String());
   })));
  }
 }
 /** @nodts */
 m_unselect__void_$pp_org_patternfly_component_tabs() {
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
  if (!$Equality.$same(this.f_selectedMenuItem__org_patternfly_component_tabs_OverflowTab_, null)) {
   this.f_menu__org_patternfly_component_tabs_OverflowTab_.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this.f_selectedMenuItem__org_patternfly_component_tabs_OverflowTab_, false, false);
  }
  this.m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab();
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_tabs_OverflowTab(/** MenuItem */ menuItem) {
  this.f_overlay__org_patternfly_component_tabs_OverflowTab_.m_hide__void();
  this.f_selectedMenuItem__org_patternfly_component_tabs_OverflowTab_ = menuItem;
  let tab = /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_tabs_OverflowTab_.get(menuItem.m_identifier__java_lang_String()), Tab));
  if (!$Equality.$same(tab, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
   this.f_textElement__org_patternfly_component_tabs_OverflowTab_.textContent = tab.m_text__java_lang_String();
   let tabs = /**@type {Tabs}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Tabs));
   tabs.m_select__org_patternfly_component_tabs_Tab__void(tab);
  }
 }
 /** @nodts */
 m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab() {
  this.f_textElement__org_patternfly_component_tabs_OverflowTab_.textContent = this.f_text__org_patternfly_component_tabs_OverflowTab_;
  if (this.f_showCount__org_patternfly_component_tabs_OverflowTab_ && this.f_count__org_patternfly_component_tabs_OverflowTab_ > 0) {
   this.f_textElement__org_patternfly_component_tabs_OverflowTab_.textContent = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_textElement__org_patternfly_component_tabs_OverflowTab_.textContent) + (' (' + this.f_count__org_patternfly_component_tabs_OverflowTab_ + ')');
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {OverflowTab} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_OverflowTab();
 }
 //Bridge method.
 /** @final @override @nodts @return {OverflowTab} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {OverflowTab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), OverflowTab));
 }
 //Bridge method.
 /** @final @override @nodts @return {OverflowTab} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {OverflowTab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), OverflowTab));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {OverflowTab} */
 m_disabled__org_patternfly_component_tabs_OverflowTab() {
  return /**@type {OverflowTab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), OverflowTab));
 }
 //Default method forwarding stub.
 /** @nodts @return {OverflowTab} */
 m_disabled__boolean__org_patternfly_component_tabs_OverflowTab(/** boolean */ arg0) {
  return /**@type {OverflowTab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), OverflowTab));
 }
 /** @nodts */
 static $clinit() {
  OverflowTab.$clinit = () =>{};
  OverflowTab.$loadModules();
  TabSubComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OverflowTab;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ButtonType = goog.module.get('org.jboss.elemento.ButtonType$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Expandable = goog.module.get('org.patternfly.component.Expandable$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  Tab = goog.module.get('org.patternfly.component.tabs.Tab$impl');
  Tabs = goog.module.get('org.patternfly.component.tabs.Tabs$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  OverlayHandler = goog.module.get('org.patternfly.handler.OverlayHandler$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  CssPositioning = goog.module.get('org.patternfly.overlay.CssPositioning$impl');
  Overlay = goog.module.get('org.patternfly.overlay.Overlay$impl');
  TriggerMode = goog.module.get('org.patternfly.overlay.TriggerMode$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Placement = goog.module.get('org.patternfly.style.Placement$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
OverflowTab.f_SUB_COMPONENT_ID__org_patternfly_component_tabs_OverflowTab = 'ot';
/**@const {string} @nodts*/
OverflowTab.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_OverflowTab = 'OverflowTab';
Disabled.$markImplementor(OverflowTab);
$Util.$setClassMetadata(OverflowTab, 'org.patternfly.component.tabs.OverflowTab');

exports = OverflowTab;

//# sourceMappingURL=OverflowTab.js.map
