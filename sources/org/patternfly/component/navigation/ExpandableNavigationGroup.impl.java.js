goog.module('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const NavigationSubComponent = goog.require('org.patternfly.component.navigation.NavigationSubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ButtonType = goog.forwardDeclare('org.jboss.elemento.ButtonType$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NavigationSubComponent<HTMLLIElement, ExpandableNavigationGroup>}
 * @implements {ElementContainerDelegate<HTMLLIElement, ExpandableNavigationGroup>}
 * @implements {ElementTextDelegate<HTMLLIElement, ExpandableNavigationGroup>}
 * @implements {HasIdentifier<HTMLLIElement, ExpandableNavigationGroup>}
 * @implements {HasItems<HTMLLIElement, ExpandableNavigationGroup, NavigationItem>}
 */
class ExpandableNavigationGroup extends NavigationSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<ToggleHandler<ExpandableNavigationGroup>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {Map<?string, NavigationItem>} @nodts*/
  this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {Map<?string, ExpandableNavigationGroup>} @nodts*/
  this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_buttonElement__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {HTMLElement} @nodts*/
  this.f_linkTextElement__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {HTMLElement} @nodts*/
  this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {AurHandler<ExpandableNavigationGroup, NavigationItem>} @nodts*/
  this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 static m_expandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ?string */ identifier) {
  ExpandableNavigationGroup.$clinit();
  return ExpandableNavigationGroup.$create__java_lang_String(identifier);
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 static m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ?string */ identifier, /** ?string */ text) {
  ExpandableNavigationGroup.$clinit();
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ExpandableNavigationGroup.$create__java_lang_String(identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), ExpandableNavigationGroup));
 }
 /** @nodts @return {!ExpandableNavigationGroup} */
 static $create__java_lang_String(/** ?string */ identifier) {
  ExpandableNavigationGroup.$clinit();
  let $instance = new ExpandableNavigationGroup();
  $instance.$ctor__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_navigation_NavigationSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ExpandableNavigationGroup.f_SUB_COMPONENT_ID__org_patternfly_component_navigation_ExpandableNavigationGroup, ExpandableNavigationGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_ExpandableNavigationGroup, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_navigation_ExpandableNavigationGroup_ = identifier;
  this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_ = (/**@type {!LinkedHashMap<?string, NavigationItem>}*/ (LinkedHashMap.$create__()));
  this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_ = (/**@type {!HashMap<?string, ExpandableNavigationGroup>}*/ (HashMap.$create__()));
  this.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup = (/**@type {!ArrayList<ToggleHandler<ExpandableNavigationGroup>>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_ = (/**@type {!AurHandler<ExpandableNavigationGroup, NavigationItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  let titleId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(identifier, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['title'], j_l_String)));
  (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).appendChild(this.f_buttonElement__org_patternfly_component_navigation_ExpandableNavigationGroup_ = (/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(titleId), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_toggle__void_$pp_org_patternfly_component_navigation();
  }), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_linkTextElement__org_patternfly_component_navigation_ExpandableNavigationGroup_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretDown__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay))));
  (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).appendChild(this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_subnav__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, titleId), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_ = (/**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_collapse__void_$pp_org_patternfly_component_navigation();
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_buttonElement__org_patternfly_component_navigation_ExpandableNavigationGroup_;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_linkTextElement__org_patternfly_component_navigation_ExpandableNavigationGroup_;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(/** NavigationItem */ item) {
  this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_ExpandableNavigationGroup(item, Consumer.$adapt((/** NavigationItem */ itm) =>{
   let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
   this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  }));
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ExpandableNavigationGroup */ group) {
  return this.m_add__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_ExpandableNavigationGroup(group);
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_add__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ExpandableNavigationGroup */ group) {
  this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_ExpandableNavigationGroup(group, Consumer.$adapt((/** ExpandableNavigationGroup */ grp) =>{
   let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
   this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  }));
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_addDivider__org_patternfly_component_navigation_ExpandableNavigationGroup() {
  return this.m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_ExpandableNavigationGroup(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType));
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_ExpandableNavigationGroup(/** Divider */ divider) {
  this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_.appendChild(divider.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_insertItemBefore__org_patternfly_component_navigation_NavigationItem__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** NavigationItem */ item, /** ?string */ beforeIdentifier) {
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, beforeIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_ExpandableNavigationGroup(item, Consumer.$adapt((/** NavigationItem */ itm) =>{
    let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_insertItemAfter__org_patternfly_component_navigation_NavigationItem__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** NavigationItem */ item, /** ?string */ afterIdentifier) {
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, afterIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_ExpandableNavigationGroup(item, Consumer.$adapt((/** NavigationItem */ itm) =>{
    let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_insertGroupBefore__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ExpandableNavigationGroup */ group, /** ?string */ beforeIdentifier) {
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, beforeIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_ExpandableNavigationGroup(group, Consumer.$adapt((/** ExpandableNavigationGroup */ grp) =>{
    let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(grp_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_insertGroupAfter__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ExpandableNavigationGroup */ group, /** ?string */ afterIdentifier) {
  let element = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_identifier__org_patternfly_core_Dataset, afterIdentifier));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_ExpandableNavigationGroup(group, Consumer.$adapt((/** ExpandableNavigationGroup */ grp) =>{
    let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(grp_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_that__org_patternfly_component_navigation_ExpandableNavigationGroup() {
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_navigation_ExpandableNavigationGroup(/** AddItemHandler<ExpandableNavigationGroup, NavigationItem> */ onAdd) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), ExpandableNavigationGroup));
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_navigation_ExpandableNavigationGroup(/** UpdateItemHandler<ExpandableNavigationGroup, NavigationItem> */ onUpdate) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), ExpandableNavigationGroup));
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_navigation_ExpandableNavigationGroup(/** RemoveItemHandler<ExpandableNavigationGroup, NavigationItem> */ onRemove) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), ExpandableNavigationGroup));
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_navigation_ExpandableNavigationGroup_;
 }
 /** @override @nodts @return {Iterator<NavigationItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.containsKey(identifier);
 }
 /** @nodts @return {NavigationItem} */
 m_item__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ identifier) {
  return /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.get(identifier), NavigationItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_navigation_NavigationItem__void(/** NavigationItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** NavigationItem */ oldItem, /** NavigationItem */ newItem) =>{
   let oldItem_1 = /**@type {NavigationItem}*/ ($Casts.$to(oldItem, NavigationItem));
   let newItem_1 = /**@type {NavigationItem}*/ ($Casts.$to(newItem, NavigationItem));
   this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.remove(identifier), NavigationItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_);
  let iterator = this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {NavigationItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), NavigationItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_ExpandableNavigationGroup(/** NavigationItem */ item, /** Consumer<NavigationItem> */ dom) {
  this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.put(item.m_identifier__java_lang_String(), item);
  dom.m_accept__java_lang_Object__void(item);
  this.f_aur__org_patternfly_component_navigation_ExpandableNavigationGroup_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @nodts */
 m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_ExpandableNavigationGroup(/** ExpandableNavigationGroup */ group, /** Consumer<ExpandableNavigationGroup> */ dom) {
  group.m_collapse__void_$pp_org_patternfly_component_navigation();
  this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.put(group.f_identifier__org_patternfly_component_navigation_ExpandableNavigationGroup_, group);
  this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.put(group.f_identifier__org_patternfly_component_navigation_ExpandableNavigationGroup_, group);
  if (!$Equality.$same(this.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup, null)) {
   group.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup.addAll(this.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup);
  }
  dom.m_accept__java_lang_Object__void(group);
 }
 /** @nodts @return {NavigationItem} */
 m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(/** ?string */ id) {
  let item = /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.get(id), NavigationItem));
  if ($Equality.$same(item, null)) {
   for (let $iterator = this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ExpandableNavigationGroup));
    {
     item = group.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(id);
     if (!$Equality.$same(item, null)) {
      break;
     }
    }
   }
  }
  return item;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$pp_org_patternfly_component_navigation(/** ?string */ id) {
  let group = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.get(id), ExpandableNavigationGroup));
  if ($Equality.$same(group, null)) {
   for (let $iterator = this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let nestedGroup = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ExpandableNavigationGroup));
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
 /** @nodts */
 m_toggle__void_$pp_org_patternfly_component_navigation() {
  let expanded = (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  if (expanded) {
   this.m_collapse__void_$pp_org_patternfly_component_navigation();
  } else {
   this.m_expand__void_$pp_org_patternfly_component_navigation();
  }
  this.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<ExpandableNavigationGroup> */ th) =>{
   let th_1 = /**@type {ToggleHandler<ExpandableNavigationGroup>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
   th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, !expanded);
  }));
 }
 /** @nodts */
 m_expand__void_$pp_org_patternfly_component_navigation() {
  (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_buttonElement__org_patternfly_component_navigation_ExpandableNavigationGroup_, Aria.f_expanded__org_patternfly_core_Aria, true);
  this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_.removeAttribute(Attributes.f_hidden__org_patternfly_core_Attributes);
  this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_.removeAttribute('inert');
 }
 /** @nodts */
 m_collapse__void_$pp_org_patternfly_component_navigation() {
  (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_buttonElement__org_patternfly_component_navigation_ExpandableNavigationGroup_, Aria.f_expanded__org_patternfly_core_Aria, false);
  this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_.hidden = true;
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_, 'inert', '');
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_ExpandableNavigationGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableNavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableNavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableNavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableNavigationGroup));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
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
 /** @final @override @nodts @template T @return {ExpandableNavigationGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, NavigationItem> */ arg1) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ExpandableNavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** NavigationItem */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {NavigationItem}*/ ($Casts.$to(arg0, NavigationItem))), ExpandableNavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** NavigationItem */ arg0) {
  return this.m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(/**@type {NavigationItem}*/ ($Casts.$to(arg0, NavigationItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<ExpandableNavigationGroup, NavigationItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_navigation_ExpandableNavigationGroup(arg0);
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
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<ExpandableNavigationGroup, NavigationItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_navigation_ExpandableNavigationGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** NavigationItem */ arg0, /** BiConsumer<NavigationItem, NavigationItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {NavigationItem}*/ ($Casts.$to(arg0, NavigationItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<ExpandableNavigationGroup, NavigationItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_navigation_ExpandableNavigationGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableNavigationGroup} */
 m_add__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ?string */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableNavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableNavigationGroup} */
 m_add__elemental2_dom_Node__org_patternfly_component_navigation_ExpandableNavigationGroup(/** Node */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableNavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableNavigationGroup} */
 m_add__java_util_function_Supplier__org_patternfly_component_navigation_ExpandableNavigationGroup(/** Supplier<Node> */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableNavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableNavigationGroup} */
 m_text__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ?string */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ExpandableNavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {ExpandableNavigationGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_ExpandableNavigationGroup(/** Iterable<T> */ arg0, /** j_u_function_Function<T, NavigationItem> */ arg1) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), ExpandableNavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ExpandableNavigationGroup} */
 m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(/** NavigationItem */ arg0) {
  return /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), ExpandableNavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_navigation_NavigationItem__java_util_function_BiConsumer__void(/** NavigationItem */ arg0, /** BiConsumer<NavigationItem, NavigationItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  ExpandableNavigationGroup.$clinit = () =>{};
  ExpandableNavigationGroup.$loadModules();
  NavigationSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableNavigationGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ButtonType = goog.module.get('org.jboss.elemento.ButtonType$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ExpandableNavigationGroup.f_SUB_COMPONENT_ID__org_patternfly_component_navigation_ExpandableNavigationGroup = 'eng';
/**@const {string} @nodts*/
ExpandableNavigationGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_ExpandableNavigationGroup = 'ExpandableNavigationGroup';
ElementContainerDelegate.$markImplementor(ExpandableNavigationGroup);
ElementTextDelegate.$markImplementor(ExpandableNavigationGroup);
HasIdentifier.$markImplementor(ExpandableNavigationGroup);
HasItems.$markImplementor(ExpandableNavigationGroup);
$Util.$setClassMetadata(ExpandableNavigationGroup, 'org.patternfly.component.navigation.ExpandableNavigationGroup');

exports = ExpandableNavigationGroup;

//# sourceMappingURL=ExpandableNavigationGroup.js.map
