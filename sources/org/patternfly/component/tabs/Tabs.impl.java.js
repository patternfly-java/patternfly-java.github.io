goog.module('org.patternfly.component.tabs.Tabs$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Box = goog.require('org.patternfly.style.Modifiers.Box$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');
const PageInsets = goog.require('org.patternfly.style.Modifiers.PageInsets$impl');
const Secondary = goog.require('org.patternfly.style.Modifiers.Secondary$impl');
const Vertical = goog.require('org.patternfly.style.Modifiers.Vertical$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let ScrollButtons = goog.forwardDeclare('org.patternfly.component.ScrollButtons$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let OverflowTab = goog.forwardDeclare('org.patternfly.component.tabs.OverflowTab$impl');
let Tab = goog.forwardDeclare('org.patternfly.component.tabs.Tab$impl');
let TabsToggle = goog.forwardDeclare('org.patternfly.component.tabs.TabsToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let ExpandableModifier = goog.forwardDeclare('org.patternfly.style.ExpandableModifier$impl');
let Inset = goog.forwardDeclare('org.patternfly.style.Inset$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Tabs>}
 * @implements {Attachable}
 * @implements {Box<HTMLElement, Tabs>}
 * @implements {Expandable<HTMLElement, Tabs>}
 * @implements {Fill<HTMLElement, Tabs>}
 * @implements {HasItems<HTMLElement, Tabs, Tab>}
 * @implements {PageInsets<HTMLElement, Tabs>}
 * @implements {Secondary<HTMLElement, Tabs>}
 * @implements {Vertical<HTMLElement, Tabs>}
 */
class Tabs extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, Tab>} @nodts*/
  this.f_items__org_patternfly_component_tabs_Tabs_;
  /**@type {HTMLContainerBuilder<?>} @nodts*/
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_;
  /**@type {HTMLContainerBuilder<HTMLUListElement>} @nodts*/
  this.f_tabsContainer__org_patternfly_component_tabs_Tabs_;
  /**@type {ScrollButtons} @nodts*/
  this.f_scrollButtons__org_patternfly_component_tabs_Tabs_;
  /**@type {boolean} @nodts*/
  this.f_closeable__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_expandable__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_secondary__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_noInitialSelection__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_vertical__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {?string} @nodts*/
  this.f_initialSelection__org_patternfly_component_tabs_Tabs_;
  /**@type {Tab} @nodts*/
  this.f_currentTab__org_patternfly_component_tabs_Tabs_;
  /**@type {OverflowTab} @nodts*/
  this.f_overflowTab__org_patternfly_component_tabs_Tabs_;
  /**@type {TabsToggle} @nodts*/
  this.f_tabsToggle__org_patternfly_component_tabs_Tabs_;
  /**@type {Button} @nodts*/
  this.f_addButton__org_patternfly_component_tabs_Tabs_;
  /**@type {AurHandler<Tabs, Tab>} @nodts*/
  this.f_aur__org_patternfly_component_tabs_Tabs_;
  /**@type {List<ToggleHandler<Tabs>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_tabs_Tabs_;
  /**@type {List<CloseHandler<Tab>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_tabs_Tabs_;
  /**@type {List<SelectHandler<Tab>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_tabs_Tabs_;
  /**@type {j_u_function_Function<Tabs, Tab>} @nodts*/
  this.f_addFunction__org_patternfly_component_tabs_Tabs_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_resizeHandler__org_patternfly_component_tabs_Tabs_;
 }
 /** @nodts @return {Tabs} */
 static m_tabs__org_patternfly_component_tabs_Tabs() {
  Tabs.$clinit();
  return Tabs.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {Tabs} */
 static m_tabs__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_tabs_Tabs(/** HTMLContainerBuilder<E> */ builder) {
  Tabs.$clinit();
  return Tabs.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Tabs} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Tabs.$clinit();
  let $instance = new Tabs();
  $instance.$ctor__org_patternfly_component_tabs_Tabs__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_tabs_Tabs__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Tabs__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_items__org_patternfly_component_tabs_Tabs_ = (/**@type {!LinkedHashMap<?string, Tab>}*/ (LinkedHashMap.$create__()));
  this.f_toggleHandler__org_patternfly_component_tabs_Tabs_ = (/**@type {!ArrayList<ToggleHandler<Tabs>>}*/ (ArrayList.$create__()));
  this.f_closeHandler__org_patternfly_component_tabs_Tabs_ = (/**@type {!ArrayList<CloseHandler<Tab>>}*/ (ArrayList.$create__()));
  this.f_selectHandler__org_patternfly_component_tabs_Tabs_ = (/**@type {!ArrayList<SelectHandler<Tab>>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_tabs_Tabs_ = (/**@type {!AurHandler<Tabs, Tab>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_ = (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_region__org_patternfly_core_Roles), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_ = (/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_tablist__org_patternfly_core_Roles), HTMLContainerBuilder)))), HTMLContainerBuilder)));
  this.f_scrollButtons__org_patternfly_component_tabs_Tabs_ = ScrollButtons.$create__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__java_lang_String(/**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)), Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_scroll__org_patternfly_style_Classes, Classes.f_button__org_patternfly_style_Classes], j_l_String))));
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.f_scrollBackContainer__org_patternfly_component_ScrollButtons);
  (/**@type {!Node}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement())).appendChild(this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.f_scrollForwardContainer__org_patternfly_component_ScrollButtons);
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {Node}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()));
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_vertical__org_patternfly_component_tabs_Tabs_) {
   if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
    Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Horizontal overflow is not supported for vertical tabs %o', [this.m_element__elemental2_dom_HTMLElement()]);
   }
   this.m_attachVertical__void_$p_org_patternfly_component_tabs_Tabs();
  } else {
   if (this.f_expandable__org_patternfly_component_tabs_Tabs_) {
    Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Expandable is not supported for horizontal tabs %o', [this.m_element__elemental2_dom_HTMLElement()]);
   }
   if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
    if (!$Equality.$same(this.f_addFunction__org_patternfly_component_tabs_Tabs_, null)) {
     Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Overflow tabs %o should not have an onAdd() function.', [this.m_element__elemental2_dom_HTMLElement()]);
    }
    this.m_attachOverflow__void_$p_org_patternfly_component_tabs_Tabs();
   } else {
    this.m_attachHorizontal__void_$p_org_patternfly_component_tabs_Tabs();
   }
   this.f_resizeHandler__org_patternfly_component_tabs_Tabs_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_resize__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
   }));
  }
  if (this.f_items__org_patternfly_component_tabs_Tabs_.isEmpty()) {
   Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_error__java_lang_String__arrayOf_java_lang_Object__void('No tabs given for %o', [this.m_element__elemental2_dom_HTMLElement()]);
  } else {
   this.m_attachTabs__void_$p_org_patternfly_component_tabs_Tabs();
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  }
 }
 /** @nodts */
 m_attachVertical__void_$p_org_patternfly_component_tabs_Tabs() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.f_scrollBackContainer__org_patternfly_component_ScrollButtons);
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.f_scrollForwardContainer__org_patternfly_component_ScrollButtons);
  if (this.f_expandable__org_patternfly_component_tabs_Tabs_) {
   let tt = this.m_failSafeTabsToggle__org_patternfly_component_tabs_TabsToggle_$p_org_patternfly_component_tabs_Tabs();
   if (tt.m_noText__boolean_$pp_org_patternfly_component_tabs()) {
    if (!this.f_items__org_patternfly_component_tabs_Tabs_.isEmpty()) {
     tt.m_text__java_lang_String__org_patternfly_component_tabs_TabsToggle((/**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator().m_next__java_lang_Object(), Tab))).m_text__java_lang_String());
    }
    this.m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_tabs_Tabs(SelectHandler.$adapt((/** Event */ e, /** Tab */ tab, /** boolean */ selected) =>{
     let tab_1 = /**@type {Tab}*/ ($Casts.$to(tab, Tab));
     tt.m_text__java_lang_String__org_patternfly_component_tabs_TabsToggle(tab_1.m_text__java_lang_String());
    }));
   }
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(tt.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  }
 }
 /** @nodts */
 m_attachHorizontal__void_$p_org_patternfly_component_tabs_Tabs() {
  this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.m_attach__void();
 }
 /** @nodts */
 m_attachOverflow__void_$p_org_patternfly_component_tabs_Tabs() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.f_scrollBackContainer__org_patternfly_component_ScrollButtons);
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.f_scrollForwardContainer__org_patternfly_component_ScrollButtons);
 }
 /** @nodts */
 m_attachTabs__void_$p_org_patternfly_component_tabs_Tabs() {
  for (let $iterator = this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
   {
    this.m_addTabToDOM__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
   }
  }
  if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
   this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_overflowTab__org_patternfly_component_tabs_Tabs_);
  }
  if (!$Equality.$same(this.f_initialSelection__org_patternfly_component_tabs_Tabs_, null)) {
   let tab_1 = /**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.get(this.f_initialSelection__org_patternfly_component_tabs_Tabs_), Tab));
   if (!$Equality.$same(tab_1, null)) {
    this.m_select__org_patternfly_component_tabs_Tab__boolean__void(tab_1, false);
   } else if (!this.f_noInitialSelection__org_patternfly_component_tabs_Tabs_) {
    (/**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator().m_next__java_lang_Object(), Tab))).m_select__boolean__void_$pp_org_patternfly_component_tabs(true);
   }
  } else if (!this.f_noInitialSelection__org_patternfly_component_tabs_Tabs_) {
   (/**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator().m_next__java_lang_Object(), Tab))).m_select__boolean__void_$pp_org_patternfly_component_tabs(true);
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_scrollButtons__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.m_detach__void();
  }
  if (!$Equality.$same(this.f_resizeHandler__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_resizeHandler__org_patternfly_component_tabs_Tabs_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_overflowTab__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_overflowTab__org_patternfly_component_tabs_Tabs_.m_detach__void_$pp_org_patternfly_component_tabs();
  }
 }
 /** @nodts @template T @return {Tabs} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_tabs_Tabs(/** Iterable<T> */ items, /** j_u_function_Function<T, Tab> */ display) {
  let attached = Elements.m_isAttached__elemental2_dom_Node__boolean(this.m_element__elemental2_dom_HTMLElement());
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let tab = /**@type {Tab}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), Tab));
    this.f_items__org_patternfly_component_tabs_Tabs_.put(tab.m_identifier__java_lang_String(), tab);
    if (attached) {
     this.m_addTabToDOM__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
    }
    this.f_aur__org_patternfly_component_tabs_Tabs_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(tab);
   }
  }
  if (attached) {
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_add__org_patternfly_component_tabs_Tab__org_patternfly_component_tabs_Tabs(/** Tab */ tab) {
  this.f_items__org_patternfly_component_tabs_Tabs_.put(tab.m_identifier__java_lang_String(), tab);
  if (Elements.m_isAttached__elemental2_dom_Node__boolean(this.m_element__elemental2_dom_HTMLElement())) {
   this.m_addTabToDOM__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  }
  return /**@type {Tabs}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tabs_Tabs_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(tab), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_box__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ box) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_box__org_patternfly_style_Classes, box), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_closeable__org_patternfly_component_tabs_Tabs() {
  this.f_closeable__org_patternfly_component_tabs_Tabs_ = true;
  return this.m_closeable__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tabs(null);
 }
 /** @nodts @return {Tabs} */
 m_closeable__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tabs(/** CloseHandler<Tab> */ closeHandler) {
  this.f_closeable__org_patternfly_component_tabs_Tabs_ = true;
  if (!$Equality.$same(closeHandler, null)) {
   this.f_closeHandler__org_patternfly_component_tabs_Tabs_.add(closeHandler);
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_expandable__org_patternfly_style_ExpandableModifier__org_patternfly_component_tabs_Tabs(/** ExpandableModifier */ expandable) {
  return this.m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_tabs_Tabs(/**@type {Breakpoints<ExpandableModifier>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, expandable)));
 }
 /** @nodts @return {Tabs} */
 m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_tabs_Tabs(/** Breakpoints<ExpandableModifier> */ expandable) {
  this.f_expandable__org_patternfly_component_tabs_Tabs_ = expandable.m_hasValue__java_lang_Object__boolean(ExpandableModifier.f_expandable__org_patternfly_style_ExpandableModifier);
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([expandable.m_modifiers__java_lang_String()], j_l_String)));
  return this;
 }
 /** @nodts @return {Tabs} */
 m_fill__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ fill) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_fill__org_patternfly_style_Classes, fill), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_inset__org_patternfly_style_Inset__org_patternfly_component_tabs_Tabs(/** Inset */ inset) {
  return this.m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_tabs_Tabs(/**@type {Breakpoints<Inset>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, inset)));
 }
 /** @nodts @return {Tabs} */
 m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_tabs_Tabs(/** Breakpoints<Inset> */ inset) {
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([inset.m_modifiers__java_lang_String()], j_l_String)));
  return this;
 }
 /** @nodts @return {Tabs} */
 m_nav__org_patternfly_component_tabs_Tabs() {
  return this.m_nav__boolean__org_patternfly_component_tabs_Tabs(true);
 }
 /** @nodts @return {Tabs} */
 m_nav__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ nav) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_nav__org_patternfly_style_Classes, nav), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_noBorderBottom__org_patternfly_component_tabs_Tabs() {
  return this.m_noBorderBottom__boolean__org_patternfly_component_tabs_Tabs(true);
 }
 /** @nodts @return {Tabs} */
 m_noBorderBottom__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ noBorderBottom) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_noBorderBottom__org_patternfly_style_Classes, noBorderBottom), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_pageInsets__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ pageInsets) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_pageInsets__org_patternfly_style_Classes, pageInsets), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_overflowHorizontal__org_patternfly_component_tabs_Tabs() {
  return this.m_overflowHorizontal__java_lang_String__org_patternfly_component_tabs_Tabs('More');
 }
 /** @nodts @return {Tabs} */
 m_overflowHorizontal__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ overflowText) {
  this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_ = true;
  this.m_failSafeOverflowTab__org_patternfly_component_tabs_OverflowTab_$p_org_patternfly_component_tabs_Tabs().m_text__java_lang_String__void_$pp_org_patternfly_component_tabs(overflowText);
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflow__org_patternfly_style_Classes)], j_l_String)));
  return this;
 }
 /** @nodts @return {Tabs} */
 m_noInitialSelection__org_patternfly_component_tabs_Tabs() {
  this.f_noInitialSelection__org_patternfly_component_tabs_Tabs_ = true;
  return this;
 }
 /** @nodts @return {Tabs} */
 m_initialSelection__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ identifier) {
  this.f_initialSelection__org_patternfly_component_tabs_Tabs_ = identifier;
  return this;
 }
 /** @nodts @return {Tabs} */
 m_secondary__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ secondary) {
  this.f_secondary__org_patternfly_component_tabs_Tabs_ = secondary;
  for (let $iterator = this.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
   {
    if (!$Equality.$same(tab.f_content__org_patternfly_component_tabs_Tab, null)) {
     tab.f_content__org_patternfly_component_tabs_Tab.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_secondary__org_patternfly_style_Classes), secondary);
    }
   }
  }
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_secondary__org_patternfly_style_Classes, secondary), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_showTabCount__org_patternfly_component_tabs_Tabs() {
  return this.m_showTabCount__boolean__org_patternfly_component_tabs_Tabs(true);
 }
 /** @nodts @return {Tabs} */
 m_showTabCount__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ showTabCount) {
  this.m_failSafeOverflowTab__org_patternfly_component_tabs_OverflowTab_$p_org_patternfly_component_tabs_Tabs().m_showCount__boolean__void_$pp_org_patternfly_component_tabs(showTabCount);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_subtab__org_patternfly_component_tabs_Tabs() {
  return this.m_subtab__boolean__org_patternfly_component_tabs_Tabs(true);
 }
 /** @nodts @return {Tabs} */
 m_subtab__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ subtab) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_subtab__org_patternfly_style_Classes, subtab), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_toggleText__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ text) {
  this.m_failSafeTabsToggle__org_patternfly_component_tabs_TabsToggle_$p_org_patternfly_component_tabs_Tabs().m_text__java_lang_String__org_patternfly_component_tabs_TabsToggle(text);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_vertical__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ vertical) {
  this.f_vertical__org_patternfly_component_tabs_Tabs_ = vertical;
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_vertical__org_patternfly_style_Classes, vertical), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_that__org_patternfly_component_tabs_Tabs() {
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  return /**@type {Tabs}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_tabListAriaLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaAddLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  if (!$Equality.$same(this.f_addButton__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_addButton__org_patternfly_component_tabs_Tabs_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  } else {
   Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to set aria add label for tabs %o. Please make call onAdd() first.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaScrollBackLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  if (!$Equality.$same(this.f_scrollButtons__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.f_scrollBack__org_patternfly_component_ScrollButtons.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaScrollForwardLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  if (!$Equality.$same(this.f_scrollButtons__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.f_scrollForward__org_patternfly_component_ScrollButtons.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaOverflowLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  this.m_failSafeOverflowTab__org_patternfly_component_tabs_OverflowTab_$p_org_patternfly_component_tabs_Tabs().m_ariaLabel__java_lang_String__void_$pp_org_patternfly_component_tabs(label);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaToggleLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  this.m_failSafeTabsToggle__org_patternfly_component_tabs_TabsToggle_$p_org_patternfly_component_tabs_Tabs().m_ariaLabel__java_lang_String__void_$pp_org_patternfly_component_tabs(label);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_tabs_Tabs(/** AddItemHandler<Tabs, Tab> */ onAdd) {
  return /**@type {Tabs}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tabs_Tabs_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_onAdd__java_util_function_Function__org_patternfly_component_tabs_Tabs(/** j_u_function_Function<Tabs, Tab> */ addFunction) {
  if ($Equality.$same(this.f_addButton__org_patternfly_component_tabs_Tabs_, null)) {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_add__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_addButton__org_patternfly_component_tabs_Tabs_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_add__org_patternfly_icon_PredefinedIcon()), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Add new tab'), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Tab}*/ ($Casts.$to(addFunction.m_apply__java_lang_Object__java_lang_Object(this), Tab)));
   }), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  }
  this.f_addFunction__org_patternfly_component_tabs_Tabs_ = addFunction;
  return this;
 }
 /** @nodts @return {Tabs} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tabs(/** CloseHandler<Tab> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_tabs_Tabs_.add(closeHandler);
  return null;
 }
 /** @nodts @return {Tabs} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_tabs_Tabs(/** UpdateItemHandler<Tabs, Tab> */ onUpdate) {
  return /**@type {Tabs}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tabs_Tabs_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_tabs_Tabs(/** RemoveItemHandler<Tabs, Tab> */ onRemove) {
  return /**@type {Tabs}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tabs_Tabs_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_tabs_Tabs(/** SelectHandler<Tab> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_tabs_Tabs_.add(selectHandler);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_tabs_Tabs(/** ToggleHandler<Tabs> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_tabs_Tabs_.add(toggleHandler);
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__elemental2_dom_Element__boolean(/**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()));
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_tabsToggle__org_patternfly_component_tabs_Tabs_, null)) {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), this.f_tabsToggle__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), null);
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_tabs_Tabs_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<Tabs> */ th) =>{
     let th_1 = /**@type {ToggleHandler<Tabs>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
    }));
   }
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_tabsToggle__org_patternfly_component_tabs_Tabs_, null)) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), this.f_tabsToggle__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), null);
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_tabs_Tabs_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<Tabs> */ th) =>{
     let th_1 = /**@type {ToggleHandler<Tabs>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
    }));
   }
  }
 }
 /** @nodts */
 m_close__java_lang_String__void(/** ?string */ identifier) {
  if (!$Equality.$same(identifier, null)) {
   this.m_close__org_patternfly_component_tabs_Tab__void(/**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.get(identifier), Tab)));
  } else {
   Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Cannot close tab in tabs %o: No tab identifier given.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
 }
 /** @nodts */
 m_close__org_patternfly_component_tabs_Tab__void(/** Tab */ tab) {
  if (!$Equality.$same(tab, null)) {
   this.m_internalClose__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  } else {
   Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Cannot close tab in tabs %o: No tab given.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__java_lang_String__boolean__void(identifier, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ fireEvent) {
  if (!$Equality.$same(identifier, null)) {
   this.m_select__org_patternfly_component_tabs_Tab__boolean__void(/**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.get(identifier), Tab)), fireEvent);
  } else {
   Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Cannot select tab in tabs %o: No tab identifier given.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
 }
 /** @nodts */
 m_select__org_patternfly_component_tabs_Tab__void(/** Tab */ tab) {
  this.m_select__org_patternfly_component_tabs_Tab__boolean__void(tab, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_tabs_Tab__boolean__void(/** Tab */ tab, /** boolean */ fireEvent) {
  if (!$Equality.$same(tab, null)) {
   for (let $iterator = this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let t = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
    {
     if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(tab.m_identifier__java_lang_String(), t.m_identifier__java_lang_String())) {
      this.f_currentTab__org_patternfly_component_tabs_Tabs_ = t;
      t.m_select__boolean__void_$pp_org_patternfly_component_tabs(true);
     } else {
      t.m_select__boolean__void_$pp_org_patternfly_component_tabs(false);
     }
    }
   }
   if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_ && Elements.m_isVisible__org_jboss_elemento_IsElement__boolean(tab)) {
    this.f_overflowTab__org_patternfly_component_tabs_Tabs_.m_unselect__void_$pp_org_patternfly_component_tabs();
   }
   if (fireEvent) {
    this.f_selectHandler__org_patternfly_component_tabs_Tabs_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<Tab> */ sh) =>{
     let sh_1 = /**@type {SelectHandler<Tab>}*/ ($Casts.$to(sh, /**@type {Function}*/ (SelectHandler)));
     sh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), tab, true);
    }));
   }
  } else {
   Tabs.f_logger__org_patternfly_component_tabs_Tabs_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Cannot select tab in tabs %o: No tab given.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
 }
 /** @nodts @return {Tab} */
 m_currentTab__org_patternfly_component_tabs_Tab() {
  return this.f_currentTab__org_patternfly_component_tabs_Tabs_;
 }
 /** @nodts @return {Tab} */
 m_tab__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ id) {
  return /**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.get(id), Tab));
 }
 /** @override @nodts @return {Iterator<Tab>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_tabs_Tabs_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_tabs_Tabs_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_tabs_Tabs_.containsKey(identifier);
 }
 /** @nodts @return {Tab} */
 m_item__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ identifier) {
  return /**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.get(identifier), Tab));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_tabs_Tab__void(/** Tab */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** Tab */ oldItem, /** Tab */ newItem) =>{
   let oldItem_1 = /**@type {Tab}*/ ($Casts.$to(oldItem, Tab));
   let newItem_1 = /**@type {Tab}*/ ($Casts.$to(newItem, Tab));
   this.f_items__org_patternfly_component_tabs_Tabs_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_tabs_Tabs_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {Tab}*/ ($Casts.$to(this.f_items__org_patternfly_component_tabs_Tabs_.remove(identifier), Tab));
  this.f_aur__org_patternfly_component_tabs_Tabs_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  this.m_internalClose__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(item);
  this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
 }
 /** @override @nodts */
 m_clear__void() {
  let iterator = this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {Tab}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), Tab));
   this.m_internalClose__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(item);
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_tabs_Tabs_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
  this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
 }
 /** @nodts */
 m_addTabToDOM__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(/** Tab */ tab) {
  this.m_addTabHandle__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
  if (!$Equality.$same(tab.f_content__org_patternfly_component_tabs_Tab, null)) {
   this.m_addTabContent__org_patternfly_component_tabs_Tab__void_$pp_org_patternfly_component_tabs(tab);
  }
 }
 /** @nodts */
 m_addTabHandle__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(/** Tab */ tab) {
  if (this.f_closeable__org_patternfly_component_tabs_Tabs_) {
   tab.m_closeable__org_patternfly_component_tabs_Tab();
   tab.f_closeHandler__org_patternfly_component_tabs_Tab.addAll(this.f_closeHandler__org_patternfly_component_tabs_Tabs_);
  }
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this.f_overflowTab__org_patternfly_component_tabs_Tabs_)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(tab.m_element__elemental2_dom_HTMLElement(), this.f_overflowTab__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement());
  } else {
   this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tab);
  }
 }
 /** @nodts */
 m_addTabContent__org_patternfly_component_tabs_Tab__void_$pp_org_patternfly_component_tabs(/** Tab */ tab) {
  tab.f_button__org_patternfly_component_tabs_Tab.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, tab.f_contentId__org_patternfly_component_tabs_Tab);
  tab.f_content__org_patternfly_component_tabs_Tab.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, tab.f_buttonId__org_patternfly_component_tabs_Tab);
  if (this.f_secondary__org_patternfly_component_tabs_Tabs_) {
   tab.f_content__org_patternfly_component_tabs_Tab.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_secondary__org_patternfly_style_Classes)], j_l_String)));
  }
  this.m_element__elemental2_dom_HTMLElement().appendChild(tab.f_content__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement());
  tab.f_content__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement().hidden = true;
 }
 /** @nodts */
 m_internalClose__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(/** Tab */ tab) {
  this.f_items__org_patternfly_component_tabs_Tabs_.remove(tab.m_identifier__java_lang_String());
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(tab.f_content__org_patternfly_component_tabs_Tab);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(tab);
 }
 /** @nodts */
 m_updateState__void_$p_org_patternfly_component_tabs_Tabs() {
  if (!this.f_vertical__org_patternfly_component_tabs_Tabs_ && !this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
   this.f_scrollButtons__org_patternfly_component_tabs_Tabs_.m_updateScrollState__void();
  } else if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
   this.m_updateOverflow__void_$p_org_patternfly_component_tabs_Tabs();
  }
  let size = this.f_items__org_patternfly_component_tabs_Tabs_.size();
  for (let $iterator = this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
   {
    tab.m_disableCloseButton__boolean__void_$pp_org_patternfly_component_tabs(size == 1);
   }
  }
 }
 /** @nodts */
 m_updateOverflow__void_$p_org_patternfly_component_tabs_Tabs() {
  let count = 0;
  let overflowingTabs = /**@type {!ArrayList<Tab>}*/ (ArrayList.$create__());
  for (let $iterator = this.f_items__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
   {
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(tab, true);
    if (!Elements.m_isElementInView__org_jboss_elemento_IsElement__org_jboss_elemento_IsElement__boolean__boolean(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_, tab, false)) {
     count = count + 1 | 0;
    }
   }
  }
  if (count > 0) {
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_overflowTab__org_patternfly_component_tabs_Tabs_, true);
   let tabValues = /**@type {!LinkedList<Tab>}*/ (LinkedList.$create__java_util_Collection(this.f_items__org_patternfly_component_tabs_Tabs_.values()));
   for (let iterator = tabValues.m_listIterator__int__java_util_ListIterator(tabValues.size()); iterator.m_hasPrevious__boolean() && !Elements.m_isElementInView__org_jboss_elemento_IsElement__org_jboss_elemento_IsElement__boolean__boolean(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_, this.f_overflowTab__org_patternfly_component_tabs_Tabs_, false); ) {
    let tab_1 = /**@type {Tab}*/ ($Casts.$to(iterator.m_previous__java_lang_Object(), Tab));
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(tab_1, false);
    overflowingTabs.add(tab_1);
   }
   Collections.m_reverse__java_util_List__void(overflowingTabs);
  }
  this.f_overflowTab__org_patternfly_component_tabs_Tabs_.m_update__java_util_List__void_$pp_org_patternfly_component_tabs(overflowingTabs);
 }
 /** @nodts @return {OverflowTab} */
 m_failSafeOverflowTab__org_patternfly_component_tabs_OverflowTab_$p_org_patternfly_component_tabs_Tabs() {
  if ($Equality.$same(this.f_overflowTab__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_overflowTab__org_patternfly_component_tabs_Tabs_ = OverflowTab.m_overflowTab__org_patternfly_component_tabs_OverflowTab();
  }
  return this.f_overflowTab__org_patternfly_component_tabs_Tabs_;
 }
 /** @nodts @return {TabsToggle} */
 m_failSafeTabsToggle__org_patternfly_component_tabs_TabsToggle_$p_org_patternfly_component_tabs_Tabs() {
  if ($Equality.$same(this.f_tabsToggle__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_tabsToggle__org_patternfly_component_tabs_Tabs_ = TabsToggle.m_tabsToggle__org_patternfly_component_tabs_TabsToggle();
  }
  return this.f_tabsToggle__org_patternfly_component_tabs_Tabs_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_Tabs();
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_box__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(Box.m_box__$default__org_patternfly_style_Modifiers_Box__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_box__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_box__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_fill__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<Tab>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<Tab>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Tabs} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, Tab> */ arg1) {
  return this.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_tabs_Tabs(arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** Tab */ arg0) {
  return /**@type {Tabs}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {Tab}*/ ($Casts.$to(arg0, Tab))), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** Tab */ arg0) {
  return this.m_add__org_patternfly_component_tabs_Tab__org_patternfly_component_tabs_Tabs(/**@type {Tab}*/ ($Casts.$to(arg0, Tab)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Tabs, Tab> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<Tab>} */
 m_items__java_util_List() {
  return /**@type {List<Tab>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tab} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_tabs_Tab(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, Tab> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** Tab */ arg0) {
  this.m_updateItem__org_patternfly_component_tabs_Tab__void(/**@type {Tab}*/ ($Casts.$to(arg0, Tab)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Tabs, Tab> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** Tab */ arg0, /** BiConsumer<Tab, Tab> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {Tab}*/ ($Casts.$to(arg0, Tab)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Tabs, Tab> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_pageInsets__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(PageInsets.m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_pageInsets__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_pageInsets__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_secondary__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_secondary__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_secondary__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_vertical__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_vertical__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_vertical__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_box__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(Box.m_box__$default__org_patternfly_style_Modifiers_Box__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_fill__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_addItem__org_patternfly_component_tabs_Tab__org_patternfly_component_tabs_Tabs(/** Tab */ arg0) {
  return /**@type {Tabs}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_tabs_Tab__java_util_function_BiConsumer__void(/** Tab */ arg0, /** BiConsumer<Tab, Tab> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_pageInsets__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(PageInsets.m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_secondary__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_vertical__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 /** @nodts */
 static $clinit() {
  Tabs.$clinit = () =>{};
  Tabs.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Box.$clinit();
  Expandable.$clinit();
  Fill.$clinit();
  HasItems.$clinit();
  PageInsets.$clinit();
  Secondary.$clinit();
  Vertical.$clinit();
  Tabs.f_logger__org_patternfly_component_tabs_Tabs_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Tabs).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tabs;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ScrollButtons = goog.module.get('org.patternfly.component.ScrollButtons$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  OverflowTab = goog.module.get('org.patternfly.component.tabs.OverflowTab$impl');
  Tab = goog.module.get('org.patternfly.component.tabs.Tab$impl');
  TabsToggle = goog.module.get('org.patternfly.component.tabs.TabsToggle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  ExpandableModifier = goog.module.get('org.patternfly.style.ExpandableModifier$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Tabs.f_logger__org_patternfly_component_tabs_Tabs_;
Attachable.$markImplementor(Tabs);
Box.$markImplementor(Tabs);
Expandable.$markImplementor(Tabs);
Fill.$markImplementor(Tabs);
HasItems.$markImplementor(Tabs);
PageInsets.$markImplementor(Tabs);
Secondary.$markImplementor(Tabs);
Vertical.$markImplementor(Tabs);
$Util.$setClassMetadata(Tabs, 'org.patternfly.component.tabs.Tabs');

exports = Tabs;

//# sourceMappingURL=Tabs.js.map
