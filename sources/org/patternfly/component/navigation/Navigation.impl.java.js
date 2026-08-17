goog.module('org.patternfly.component.navigation.Navigation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let ScrollButtons = goog.forwardDeclare('org.patternfly.component.ScrollButtons$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let ExpandableNavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
let NavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.NavigationGroup$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let NavigationType = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType$impl');
let Horizontal = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Horizontal$impl');
let Vertical = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Vertical$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Navigation>}
 * @implements {HasItems<HTMLElement, Navigation, NavigationItem>}
 * @implements {Attachable}
 */
class Navigation extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {NavigationType} @nodts*/
  this.f_type__org_patternfly_component_navigation_Navigation_;
  /**@type {ScrollButtons} @nodts*/
  this.f_scrollButtons__org_patternfly_component_navigation_Navigation_;
  /**@type {HTMLElement} @nodts*/
  this.f_itemsContainer__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, NavigationItem>} @nodts*/
  this.f_items__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, NavigationGroup>} @nodts*/
  this.f_groups__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, ExpandableNavigationGroup>} @nodts*/
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_;
  /**@type {List<SelectHandler<NavigationItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_navigation_Navigation_;
  /**@type {List<ToggleHandler<ExpandableNavigationGroup>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_navigation_Navigation_;
  /**@type {AurHandler<Navigation, NavigationItem>} @nodts*/
  this.f_aur__org_patternfly_component_navigation_Navigation_;
 }
 /** @nodts @return {Navigation} */
 static m_navigation__org_patternfly_component_navigation_NavigationType__org_patternfly_component_navigation_Navigation(/** NavigationType */ type) {
  Navigation.$clinit();
  return Navigation.$create__org_patternfly_component_navigation_NavigationType(type);
 }
 /** @nodts @return {!Navigation} */
 static $create__org_patternfly_component_navigation_NavigationType(/** NavigationType */ type) {
  Navigation.$clinit();
  let $instance = new Navigation();
  $instance.$ctor__org_patternfly_component_navigation_Navigation__org_patternfly_component_navigation_NavigationType__void(type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_Navigation__org_patternfly_component_navigation_NavigationType__void(/** NavigationType */ type) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Navigation__org_patternfly_component_ComponentType, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_type__org_patternfly_component_navigation_Navigation_ = type;
  this.f_items__org_patternfly_component_navigation_Navigation_ = (/**@type {!LinkedHashMap<?string, NavigationItem>}*/ (LinkedHashMap.$create__()));
  this.f_groups__org_patternfly_component_navigation_Navigation_ = (/**@type {!LinkedHashMap<?string, NavigationGroup>}*/ (LinkedHashMap.$create__()));
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_ = (/**@type {!LinkedHashMap<?string, ExpandableNavigationGroup>}*/ (LinkedHashMap.$create__()));
  this.f_selectHandler__org_patternfly_component_navigation_Navigation_ = (/**@type {!ArrayList<SelectHandler<NavigationItem>>}*/ (ArrayList.$create__()));
  this.f_toggleHandler__org_patternfly_component_navigation_Navigation_ = (/**@type {!ArrayList<ToggleHandler<ExpandableNavigationGroup>>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_navigation_Navigation_ = (/**@type {!AurHandler<Navigation, NavigationItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  if ($Equality.$same(type, Horizontal.f_secondary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Local');
  } else {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Global');
  }
  if (Horizontal.$isInstance(type)) {
   if ($Equality.$same(type, Horizontal.f_primary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_horizontal__org_patternfly_style_Classes)], j_l_String)));
   } else if ($Equality.$same(type, Horizontal.f_secondary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_horizontal__org_patternfly_style_Classes), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_subnav__org_patternfly_style_Classes)], j_l_String)));
   }
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = (/**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
   this.f_scrollButtons__org_patternfly_component_navigation_Navigation_ = ScrollButtons.$create__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__java_lang_String(this.m_element__elemental2_dom_HTMLElement(), this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_scroll__org_patternfly_style_Classes, Classes.f_button__org_patternfly_style_Classes], j_l_String))));
   this.m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder([this.f_scrollButtons__org_patternfly_component_navigation_Navigation_.f_scrollBackContainer__org_patternfly_component_ScrollButtons, this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, this.f_scrollButtons__org_patternfly_component_navigation_Navigation_.f_scrollForwardContainer__org_patternfly_component_ScrollButtons]);
  } else if (Vertical.$isInstance(type)) {
   this.f_scrollButtons__org_patternfly_component_navigation_Navigation_ = null;
   let vt = /**@type {Vertical}*/ ($Casts.$to(type, Vertical));
   switch (vt.ordinal()) {
    case Vertical.$ordinal_flat__org_patternfly_component_navigation_NavigationType_Vertical:
    case Vertical.$ordinal_expandable__org_patternfly_component_navigation_NavigationType_Vertical:
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = (/**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay))));
     break;
    case Vertical.$ordinal_grouped__org_patternfly_component_navigation_NavigationType_Vertical:
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = this.m_element__elemental2_dom_HTMLElement();
     break;
    case Vertical.$ordinal_drillDown__org_patternfly_component_navigation_NavigationType_Vertical:
    case Vertical.$ordinal_flyout__org_patternfly_component_navigation_NavigationType_Vertical:
     Navigation.f_logger__org_patternfly_component_navigation_Navigation_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Drill-down and fly-out not yet implemented', []);
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = (/**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
     break;
    default:
     Navigation.f_logger__org_patternfly_component_navigation_Navigation_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unknown navigation type: \'%s\' for navigation %o', [type, this.m_element__elemental2_dom_HTMLElement()]);
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = (/**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
   }
  } else {
   Navigation.f_logger__org_patternfly_component_navigation_Navigation_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unknown navigation type: \'%s\' for navigation %o', [type, this.m_element__elemental2_dom_HTMLElement()]);
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = (/**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
   this.f_scrollButtons__org_patternfly_component_navigation_Navigation_ = null;
  }
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (Horizontal.$isInstance(this.f_type__org_patternfly_component_navigation_Navigation_) && !$Equality.$same(this.f_scrollButtons__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_scrollButtons__org_patternfly_component_navigation_Navigation_.m_attach__void();
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_scrollButtons__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_scrollButtons__org_patternfly_component_navigation_Navigation_.m_detach__void();
  }
 }
 /** @nodts @template T @return {Navigation} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_Navigation(/** Iterable<T> */ items, /** j_u_function_Function<T, NavigationItem> */ display) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical)) {
   Navigation.f_logger__org_patternfly_component_navigation_Navigation_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('addItem(NavigationItem) is not supported for type \'%s\' in navigation %o', [this.f_type__org_patternfly_component_navigation_Navigation_, this.m_element__elemental2_dom_HTMLElement()]);
   return this;
  }
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let navigationItem = /**@type {NavigationItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), NavigationItem));
    this.m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(navigationItem);
   }
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item) {
  return this.m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(item);
 }
 /** @nodts @return {Navigation} */
 m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical)) {
   Navigation.f_logger__org_patternfly_component_navigation_Navigation_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('addItem(NavigationItem) is not supported for type \'%s\' in navigation %o', [this.f_type__org_patternfly_component_navigation_Navigation_, this.m_element__elemental2_dom_HTMLElement()]);
   return this;
  }
  this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(item, Consumer.$adapt((/** NavigationItem */ itm) =>{
   let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  }));
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addGroup__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group) {
  return this.m_add__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(group);
 }
 /** @nodts @return {Navigation} */
 m_add__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_flat__org_patternfly_component_navigation_NavigationType_Vertical) || Horizontal.$isInstance(this.f_type__org_patternfly_component_navigation_Navigation_)) {
   Navigation.f_logger__org_patternfly_component_navigation_Navigation_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('addGroup(NavigationGroup) is not supported for type \'%s\' in navigation %o', [this.f_type__org_patternfly_component_navigation_Navigation_, this.m_element__elemental2_dom_HTMLElement()]);
   return this;
  }
  this.m_removeEmptyItemsContainer__void_$p_org_patternfly_component_navigation_Navigation();
  this.m_internalAddGroup__org_patternfly_component_navigation_NavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((/** NavigationGroup */ grp) =>{
   let grp_1 = /**@type {NavigationGroup}*/ ($Casts.$to(grp, NavigationGroup));
   this.m_element__elemental2_dom_HTMLElement().appendChild(grp_1.m_element__elemental2_dom_HTMLElement());
  }));
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group) {
  return this.m_add__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(group);
 }
 /** @nodts @return {Navigation} */
 m_add__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_flat__org_patternfly_component_navigation_NavigationType_Vertical) || $Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical) || Horizontal.$isInstance(this.f_type__org_patternfly_component_navigation_Navigation_)) {
   Navigation.f_logger__org_patternfly_component_navigation_Navigation_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('addGroup(ExpandableNavigationGroup) is not supported for type \'%s\' in navigation %o', [this.f_type__org_patternfly_component_navigation_Navigation_, this.m_element__elemental2_dom_HTMLElement()]);
   return this;
  }
  this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((/** ExpandableNavigationGroup */ grp) =>{
   let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  }));
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addDivider__org_patternfly_component_navigation_Navigation() {
  return this.m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_Navigation(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType));
 }
 /** @nodts @return {Navigation} */
 m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_Navigation(/** Divider */ divider) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical) && !this.f_groups__org_patternfly_component_navigation_Navigation_.isEmpty()) {
   this.m_element__elemental2_dom_HTMLElement().appendChild(divider.m_element__elemental2_dom_HTMLElement());
  } else {
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(divider.m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertItemBefore__org_patternfly_component_navigation_NavigationItem__java_lang_String__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item, /** ?string */ beforeIdentifier) {
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, beforeIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(item, Consumer.$adapt((/** NavigationItem */ itm) =>{
    let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertItemAfter__org_patternfly_component_navigation_NavigationItem__java_lang_String__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item, /** ?string */ afterIdentifier) {
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, afterIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(item, Consumer.$adapt((/** NavigationItem */ itm) =>{
    let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertGroupBefore__org_patternfly_component_navigation_NavigationGroup__java_lang_String__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group, /** ?string */ beforeIdentifier) {
  this.m_removeEmptyItemsContainer__void_$p_org_patternfly_component_navigation_Navigation();
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.m_element__elemental2_dom_HTMLElement(), By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, beforeIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_NavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((/** NavigationGroup */ grp) =>{
    let grp_1 = /**@type {NavigationGroup}*/ ($Casts.$to(grp, NavigationGroup));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(grp_1.m_element__elemental2_dom_HTMLElement(), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertGroupAfter__org_patternfly_component_navigation_NavigationGroup__java_lang_String__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group, /** ?string */ afterIdentifier) {
  this.m_removeEmptyItemsContainer__void_$p_org_patternfly_component_navigation_Navigation();
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.m_element__elemental2_dom_HTMLElement(), By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, afterIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_NavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((/** NavigationGroup */ grp) =>{
    let grp_1 = /**@type {NavigationGroup}*/ ($Casts.$to(grp, NavigationGroup));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(grp_1.m_element__elemental2_dom_HTMLElement(), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertGroupBefore__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group, /** ?string */ beforeIdentifier) {
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, beforeIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((/** ExpandableNavigationGroup */ grp) =>{
    let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(grp_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertGroupAfter__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group, /** ?string */ afterIdentifier) {
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, afterIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((/** ExpandableNavigationGroup */ grp) =>{
    let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(grp_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_docked__org_patternfly_component_navigation_Navigation() {
  return /**@type {Navigation}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String('docked')], j_l_String))), Navigation));
 }
 /** @nodts @return {Navigation} */
 m_that__org_patternfly_component_navigation_Navigation() {
  return this;
 }
 /** @nodts @return {Navigation} */
 m_ariaScrollBackLabel__java_lang_String__org_patternfly_component_navigation_Navigation(/** ?string */ label) {
  if (!$Equality.$same(this.f_scrollButtons__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_scrollButtons__org_patternfly_component_navigation_Navigation_.f_scrollBack__org_patternfly_component_ScrollButtons.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_ariaScrollForwardLabel__java_lang_String__org_patternfly_component_navigation_Navigation(/** ?string */ label) {
  if (!$Equality.$same(this.f_scrollButtons__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_scrollButtons__org_patternfly_component_navigation_Navigation_.f_scrollForward__org_patternfly_component_ScrollButtons.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_navigation_Navigation(/** AddItemHandler<Navigation, NavigationItem> */ onAdd) {
  return /**@type {Navigation}*/ ($Casts.$to(this.f_aur__org_patternfly_component_navigation_Navigation_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Navigation));
 }
 /** @nodts @return {Navigation} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_navigation_Navigation(/** RemoveItemHandler<Navigation, NavigationItem> */ onRemove) {
  return /**@type {Navigation}*/ ($Casts.$to(this.f_aur__org_patternfly_component_navigation_Navigation_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Navigation));
 }
 /** @nodts @return {Navigation} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_navigation_Navigation(/** SelectHandler<NavigationItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_navigation_Navigation_.add(selectHandler);
  return this;
 }
 /** @nodts @return {Navigation} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_navigation_Navigation(/** UpdateItemHandler<Navigation, NavigationItem> */ onUpdate) {
  return /**@type {Navigation}*/ ($Casts.$to(this.f_aur__org_patternfly_component_navigation_Navigation_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Navigation));
 }
 /** @nodts @return {Navigation} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_navigation_Navigation(/** ToggleHandler<ExpandableNavigationGroup> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_navigation_Navigation_.add(toggleHandler);
  return this;
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ itemId) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(itemId), true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(itemId), fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_navigation_NavigationItem__void(/** NavigationItem */ item) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(item, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(/** NavigationItem */ item, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation();
   item.m_select__void_$pp_org_patternfly_component_navigation();
   if (fireEvent) {
    this.f_selectHandler__org_patternfly_component_navigation_Navigation_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<NavigationItem> */ sh) =>{
     let sh_1 = /**@type {SelectHandler<NavigationItem>}*/ ($Casts.$to(sh, /**@type {Function}*/ (SelectHandler)));
     sh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, true);
    }));
   }
   if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical)) {
    this.m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation();
    this.m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(item.f_anchorElement__org_patternfly_component_navigation_NavigationItem, fireEvent);
   }
  } else {
   this.m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation();
   this.m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation();
  }
 }
 /** @override @nodts @return {Iterator<NavigationItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_navigation_Navigation_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_navigation_Navigation_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_navigation_Navigation_.containsKey(identifier);
 }
 /** @nodts @return {NavigationItem} */
 m_item__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ identifier) {
  return /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_Navigation_.get(identifier), NavigationItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_navigation_NavigationItem__void(/** NavigationItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** NavigationItem */ oldItem, /** NavigationItem */ newItem) =>{
   let oldItem_1 = /**@type {NavigationItem}*/ ($Casts.$to(oldItem, NavigationItem));
   let newItem_1 = /**@type {NavigationItem}*/ ($Casts.$to(newItem, NavigationItem));
   this.f_items__org_patternfly_component_navigation_Navigation_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_navigation_Navigation_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_Navigation_.remove(identifier), NavigationItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_navigation_Navigation_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_);
  let iterator = this.f_items__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {NavigationItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), NavigationItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_navigation_Navigation_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_removeEmptyItemsContainer__void_$p_org_patternfly_component_navigation_Navigation() {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical) && !$Equality.$same(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, this.m_element__elemental2_dom_HTMLElement()) && !this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.hasChildNodes()) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_);
  }
 }
 /** @nodts */
 m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(/** NavigationItem */ item, /** Consumer<NavigationItem> */ dom) {
  this.f_items__org_patternfly_component_navigation_Navigation_.put(item.m_identifier__java_lang_String(), item);
  dom.m_accept__java_lang_Object__void(item);
  if (!$Equality.$same(this.f_scrollButtons__org_patternfly_component_navigation_Navigation_, null) && Elements.m_isAttached__elemental2_dom_Node__boolean(this.m_element__elemental2_dom_HTMLElement())) {
   this.f_scrollButtons__org_patternfly_component_navigation_Navigation_.m_updateScrollState__void();
  }
  this.f_aur__org_patternfly_component_navigation_Navigation_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @nodts */
 m_internalAddGroup__org_patternfly_component_navigation_NavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group, /** Consumer<NavigationGroup> */ dom) {
  this.f_groups__org_patternfly_component_navigation_Navigation_.put(group.m_identifier__java_lang_String(), group);
  dom.m_accept__java_lang_Object__void(group);
 }
 /** @nodts */
 m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group, /** Consumer<ExpandableNavigationGroup> */ dom) {
  group.m_collapse__void_$pp_org_patternfly_component_navigation();
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.put(group.m_identifier__java_lang_String(), group);
  if (!$Equality.$same(this.f_toggleHandler__org_patternfly_component_navigation_Navigation_, null)) {
   group.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup.addAll(this.f_toggleHandler__org_patternfly_component_navigation_Navigation_);
  }
  dom.m_accept__java_lang_Object__void(group);
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation() {
  for (let $iterator = this.m_querySelectorAll__org_jboss_elemento_By__java_lang_Iterable(Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
    element.removeAttribute(Aria.f_current__org_patternfly_core_Aria);
   }
  }
 }
 /** @nodts */
 m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation() {
  for (let $iterator = this.m_querySelectorAll__org_jboss_elemento_By__java_lang_Iterable(Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_.m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   }
  }
 }
 /** @nodts */
 m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(/** HTMLElement */ element, /** boolean */ fireEvent) {
  let li = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(element, Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_);
  if (!$Equality.$same(li, null)) {
   li.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   let groupId = /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(li.dataset, Dataset.f_identifier__org_patternfly_core_Dataset), j_l_String));
   let group = this.m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$p_org_patternfly_component_navigation_Navigation(groupId);
   if (!$Equality.$same(group, null)) {
    group.m_expand__void_$pp_org_patternfly_component_navigation();
    if (fireEvent) {
     this.f_toggleHandler__org_patternfly_component_navigation_Navigation_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<ExpandableNavigationGroup> */ sh) =>{
      let sh_1 = /**@type {ToggleHandler<ExpandableNavigationGroup>}*/ ($Casts.$to(sh, /**@type {Function}*/ (ToggleHandler)));
      sh_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), group, true);
     }));
    }
   }
   let parent = li.parentElement;
   if ($Overlay.$isInstance(parent)) {
    this.m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(/**@type {HTMLElement}*/ ($Casts.$to(parent, $Overlay)), fireEvent);
   }
  }
 }
 /** @nodts @return {NavigationItem} */
 m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(/** ?string */ id) {
  let item = /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_Navigation_.get(id), NavigationItem));
  if ($Equality.$same(item, null)) {
   for (let $iterator = this.f_groups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {NavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), NavigationGroup));
    {
     item = group.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(id);
     if (!$Equality.$same(item, null)) {
      return item;
     }
    }
   }
   for (let $iterator_1 = this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let group_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), ExpandableNavigationGroup));
    {
     item = group_1.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(id);
     if (!$Equality.$same(item, null)) {
      return item;
     }
    }
   }
  }
  return item;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$p_org_patternfly_component_navigation_Navigation(/** ?string */ id) {
  let group = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.get(id), ExpandableNavigationGroup));
  if ($Equality.$same(group, null)) {
   for (let $iterator = this.f_groups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let section = /**@type {NavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), NavigationGroup));
    {
     group = section.m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$pp_org_patternfly_component_navigation(id);
     if (!$Equality.$same(group, null)) {
      return group;
     }
    }
   }
   for (let $iterator_1 = this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let nestedGroup = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), ExpandableNavigationGroup));
    {
     group = nestedGroup.m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$pp_org_patternfly_component_navigation(id);
     if (!$Equality.$same(group, null)) {
      break;
     }
    }
   }
  }
  return group;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<NavigationItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<NavigationItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Navigation} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_Navigation();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Navigation} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, NavigationItem> */ arg1) {
  return this.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_Navigation(arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Navigation} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** NavigationItem */ arg0) {
  return this.m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(/**@type {NavigationItem}*/ ($Casts.$to(arg0, NavigationItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Navigation} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** NavigationItem */ arg0) {
  return this.m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(/**@type {NavigationItem}*/ ($Casts.$to(arg0, NavigationItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Navigation} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Navigation, NavigationItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_navigation_Navigation(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<NavigationItem>} */
 m_items__java_util_List() {
  return /**@type {List<NavigationItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_navigation_NavigationItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, NavigationItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** NavigationItem */ arg0) {
  this.m_updateItem__org_patternfly_component_navigation_NavigationItem__void(/**@type {NavigationItem}*/ ($Casts.$to(arg0, NavigationItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Navigation} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Navigation, NavigationItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_navigation_Navigation(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** NavigationItem */ arg0, /** BiConsumer<NavigationItem, NavigationItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {NavigationItem}*/ ($Casts.$to(arg0, NavigationItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Navigation} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Navigation, NavigationItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_navigation_Navigation(arg0);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_navigation_NavigationItem__java_util_function_BiConsumer__void(/** NavigationItem */ arg0, /** BiConsumer<NavigationItem, NavigationItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  Navigation.$clinit = () =>{};
  Navigation.$loadModules();
  BaseComponent.$clinit();
  HasItems.$clinit();
  Attachable.$clinit();
  Navigation.f_logger__org_patternfly_component_navigation_Navigation_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Navigation).m_getName__java_lang_String());
  Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_ = By.m_element__java_lang_String__org_jboss_elemento_By('a').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classnames__java_lang_String__java_lang_String__arrayOf_java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))));
  Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_ = By.m_element__java_lang_String__org_jboss_elemento_By('li').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classnames__java_lang_String__java_lang_String__arrayOf_java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_style_Classes), /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Navigation;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ScrollButtons = goog.module.get('org.patternfly.component.ScrollButtons$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  ExpandableNavigationGroup = goog.module.get('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
  NavigationGroup = goog.module.get('org.patternfly.component.navigation.NavigationGroup$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Horizontal = goog.module.get('org.patternfly.component.navigation.NavigationType.Horizontal$impl');
  Vertical = goog.module.get('org.patternfly.component.navigation.NavigationType.Vertical$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Navigation.f_logger__org_patternfly_component_navigation_Navigation_;
/**@type {By} @nodts*/
Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_;
/**@type {By} @nodts*/
Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_;
HasItems.$markImplementor(Navigation);
Attachable.$markImplementor(Navigation);
$Util.$setClassMetadata(Navigation, 'org.patternfly.component.navigation.Navigation');

exports = Navigation;

//# sourceMappingURL=Navigation.js.map
