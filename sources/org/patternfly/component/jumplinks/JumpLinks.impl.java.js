goog.module('org.patternfly.component.jumplinks.JumpLinks$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Center = goog.require('org.patternfly.style.Modifiers.Center$impl');
const Vertical = goog.require('org.patternfly.style.Modifiers.Vertical$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let JumpLinksItem = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let ExpandableModifier = goog.forwardDeclare('org.patternfly.style.ExpandableModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, JumpLinks>}
 * @implements {Attachable}
 * @implements {Center<HTMLElement, JumpLinks>}
 * @implements {Expandable<HTMLElement, JumpLinks>}
 * @implements {HasItems<HTMLElement, JumpLinks, JumpLinksItem>}
 * @implements {Vertical<HTMLElement, JumpLinks>}
 */
class JumpLinks extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, JumpLinksItem>} @nodts*/
  this.f_items__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {AurHandler<JumpLinks, JumpLinksItem>} @nodts*/
  this.f_aur__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {List<ToggleHandler<JumpLinks>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {List<SelectHandler<JumpLinksItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_headerElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_labelElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {HTMLContainerBuilder<HTMLUListElement>} @nodts*/
  this.f_ulElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {boolean} @nodts*/
  this.f_expandable__org_patternfly_component_jumplinks_JumpLinks_ = false;
  /**@type {boolean} @nodts*/
  this.f_vertical__org_patternfly_component_jumplinks_JumpLinks_ = false;
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_scrollableElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {HTMLContainerBuilder<HTMLElement>} @nodts*/
  this.f_toggleTextElement__org_patternfly_component_jumplinks_JumpLinks_;
 }
 /** @nodts @return {JumpLinks} */
 static m_jumpLinks__org_patternfly_component_jumplinks_JumpLinks() {
  JumpLinks.$clinit();
  return JumpLinks.$create__java_lang_String(null);
 }
 /** @nodts @return {JumpLinks} */
 static m_jumpLinks__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ label) {
  JumpLinks.$clinit();
  return JumpLinks.$create__java_lang_String(label);
 }
 /** @nodts @return {!JumpLinks} */
 static $create__java_lang_String(/** ?string */ label) {
  JumpLinks.$clinit();
  let $instance = new JumpLinks();
  $instance.$ctor__org_patternfly_component_jumplinks_JumpLinks__java_lang_String__void(label);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_jumplinks_JumpLinks__java_lang_String__void(/** ?string */ label) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_JumpLinks__org_patternfly_component_ComponentType, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_items__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {!HashMap<?string, JumpLinksItem>}*/ (HashMap.$create__()));
  this.f_aur__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {!AurHandler<JumpLinks, JumpLinksItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {!ArrayList<ToggleHandler<JumpLinks>>}*/ (ArrayList.$create__()));
  this.f_selectHandler__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {!ArrayList<SelectHandler<JumpLinksItem>>}*/ (ArrayList.$create__()));
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_headerElement__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_labelElement__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)))), HTMLContainerBuilder)))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_ulElement__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(label, null)) {
   this.m_label__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(label);
  }
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_expandable__org_patternfly_component_jumplinks_JumpLinks_ && !this.f_vertical__org_patternfly_component_jumplinks_JumpLinks_) {
   JumpLinks.f_logger__org_patternfly_component_jumplinks_JumpLinks_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Jump links component %o is not vertical. Expandable is only supported for vertical jump links.', [this.m_element__elemental2_dom_HTMLElement()]);
  } else {
   this.m_failSafeToggleButton__org_patternfly_component_button_Button_$p_org_patternfly_component_jumplinks_JumpLinks();
  }
 }
 /** @nodts @return {JumpLinks} */
 m_add__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(/** JumpLinksItem */ item) {
  this.f_items__org_patternfly_component_jumplinks_JumpLinks_.put(item.m_identifier__java_lang_String(), item);
  this.f_ulElement__org_patternfly_component_jumplinks_JumpLinks_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item);
  return /**@type {JumpLinks}*/ ($Casts.$to(this.f_aur__org_patternfly_component_jumplinks_JumpLinks_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_expandable__org_patternfly_style_ExpandableModifier__org_patternfly_component_jumplinks_JumpLinks(/** ExpandableModifier */ expandable) {
  return this.m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_jumplinks_JumpLinks(/**@type {Breakpoints<ExpandableModifier>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, expandable)));
 }
 /** @nodts @return {JumpLinks} */
 m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_jumplinks_JumpLinks(/** Breakpoints<ExpandableModifier> */ expandable) {
  this.f_expandable__org_patternfly_component_jumplinks_JumpLinks_ = expandable.m_hasValue__java_lang_Object__boolean(ExpandableModifier.f_expandable__org_patternfly_style_ExpandableModifier);
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([expandable.m_modifiers__java_lang_String()], j_l_String)));
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_label__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ label) {
  this.f_labelElement__org_patternfly_component_jumplinks_JumpLinks_.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(label);
  if (!$Equality.$same(this.f_toggleTextElement__org_patternfly_component_jumplinks_JumpLinks_, null)) {
   this.f_toggleTextElement__org_patternfly_component_jumplinks_JumpLinks_.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(label);
  }
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_scrollableSelector__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ selector) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_jumplinks_JumpLinks(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, By.m_selector__java_lang_String__org_jboss_elemento_By(selector));
  })));
 }
 /** @nodts @return {JumpLinks} */
 m_scrollableSelector__org_jboss_elemento_By__org_patternfly_component_jumplinks_JumpLinks(/** By */ selector) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_jumplinks_JumpLinks(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, selector);
  })));
 }
 /** @nodts @return {JumpLinks} */
 m_scrollableSelector__elemental2_dom_HTMLElement__org_patternfly_component_jumplinks_JumpLinks(/** HTMLElement */ element) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_jumplinks_JumpLinks(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return element;
  })));
 }
 /** @nodts @return {JumpLinks} */
 m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_jumplinks_JumpLinks(/** Supplier<HTMLElement> */ element) {
  this.f_scrollableElement__org_patternfly_component_jumplinks_JumpLinks_ = element;
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_vertical__boolean__org_patternfly_component_jumplinks_JumpLinks(/** boolean */ vertical) {
  this.f_vertical__org_patternfly_component_jumplinks_JumpLinks_ = vertical;
  return /**@type {JumpLinks}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(this, vertical), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_that__org_patternfly_component_jumplinks_JumpLinks() {
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_ariaLabel__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ label) {
  return /**@type {JumpLinks}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_ariaToggleLabel__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ label) {
  if (!$Equality.$same(this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_, null)) {
   this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_jumplinks_JumpLinks(/** AddItemHandler<JumpLinks, JumpLinksItem> */ onAdd) {
  return /**@type {JumpLinks}*/ ($Casts.$to(this.f_aur__org_patternfly_component_jumplinks_JumpLinks_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_jumplinks_JumpLinks(/** UpdateItemHandler<JumpLinks, JumpLinksItem> */ onUpdate) {
  return /**@type {JumpLinks}*/ ($Casts.$to(this.f_aur__org_patternfly_component_jumplinks_JumpLinks_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_jumplinks_JumpLinks(/** RemoveItemHandler<JumpLinks, JumpLinksItem> */ onRemove) {
  return /**@type {JumpLinks}*/ ($Casts.$to(this.f_aur__org_patternfly_component_jumplinks_JumpLinks_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_jumplinks_JumpLinks(/** SelectHandler<JumpLinksItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_jumplinks_JumpLinks_.add(selectHandler);
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_jumplinks_JumpLinks(/** ToggleHandler<JumpLinks> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_.add(toggleHandler);
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_.m_element__elemental2_dom_HTMLElement(), null);
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<JumpLinks> */ th) =>{
    let th_1 = /**@type {ToggleHandler<JumpLinks>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
   }));
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_.m_element__elemental2_dom_HTMLElement(), null);
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<JumpLinks> */ th) =>{
    let th_1 = /**@type {ToggleHandler<JumpLinks>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
   }));
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem_$p_org_patternfly_component_jumplinks_JumpLinks(identifier), true, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ selected) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem_$p_org_patternfly_component_jumplinks_JumpLinks(identifier), selected, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__boolean__void(/** ?string */ identifier, /** boolean */ selected, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem_$p_org_patternfly_component_jumplinks_JumpLinks(identifier), selected, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_jumplinks_JumpLinksItem__void(/** JumpLinksItem */ item) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__void(/** JumpLinksItem */ item, /** boolean */ selected) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(item, selected, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(/** JumpLinksItem */ item, /** boolean */ fireEvent, /** boolean */ selected) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_component_jumplinks_JumpLinks();
   item.m_markSelected__boolean__void_$pp_org_patternfly_component_jumplinks(selected);
   if (fireEvent) {
    this.f_selectHandler__org_patternfly_component_jumplinks_JumpLinks_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<JumpLinksItem> */ selectHandler) =>{
     let selectHandler_1 = /**@type {SelectHandler<JumpLinksItem>}*/ ($Casts.$to(selectHandler, /**@type {Function}*/ (SelectHandler)));
     selectHandler_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
    }));
   }
  }
 }
 /** @override @nodts @return {Iterator<JumpLinksItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_jumplinks_JumpLinks_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_jumplinks_JumpLinks_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_jumplinks_JumpLinks_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_jumplinks_JumpLinks_.containsKey(identifier);
 }
 /** @nodts @return {JumpLinksItem} */
 m_item__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ identifier) {
  return /**@type {JumpLinksItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_jumplinks_JumpLinks_.get(identifier), JumpLinksItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_jumplinks_JumpLinksItem__void(/** JumpLinksItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** JumpLinksItem */ oldItem, /** JumpLinksItem */ newItem) =>{
   let oldItem_1 = /**@type {JumpLinksItem}*/ ($Casts.$to(oldItem, JumpLinksItem));
   let newItem_1 = /**@type {JumpLinksItem}*/ ($Casts.$to(newItem, JumpLinksItem));
   this.f_items__org_patternfly_component_jumplinks_JumpLinks_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_jumplinks_JumpLinks_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {JumpLinksItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_jumplinks_JumpLinks_.remove(identifier), JumpLinksItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  if (!$Equality.$same(item, null)) {
   item.f_list__org_patternfly_component_jumplinks_JumpLinksItem.m_clear__void();
   this.f_aur__org_patternfly_component_jumplinks_JumpLinks_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_ulElement__org_patternfly_component_jumplinks_JumpLinks_);
  let iterator = this.f_items__org_patternfly_component_jumplinks_JumpLinks_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {JumpLinksItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), JumpLinksItem));
   if (!$Equality.$same(item.f_list__org_patternfly_component_jumplinks_JumpLinksItem, null)) {
    item.f_list__org_patternfly_component_jumplinks_JumpLinksItem.m_clear__void();
   }
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_jumplinks_JumpLinks_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts @return {JumpLinksItem} */
 m_findItem__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem_$p_org_patternfly_component_jumplinks_JumpLinks(/** ?string */ identifier) {
  let item = /**@type {JumpLinksItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_jumplinks_JumpLinks_.get(identifier), JumpLinksItem));
  if ($Equality.$same(item, null)) {
   for (let iterator = this.f_items__org_patternfly_component_jumplinks_JumpLinks_.values().m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean() && $Equality.$same(item, null); ) {
    let itm = /**@type {JumpLinksItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), JumpLinksItem));
    if (!$Equality.$same(itm.f_list__org_patternfly_component_jumplinks_JumpLinksItem, null)) {
     item = (/**@type {JumpLinksItem}*/ ($Casts.$to(itm.f_list__org_patternfly_component_jumplinks_JumpLinksItem.f_items__org_patternfly_component_jumplinks_JumpLinksList.get(identifier), JumpLinksItem)));
    }
   }
  }
  return item;
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_jumplinks_JumpLinks() {
  for (let $iterator = this.m_querySelectorAll__org_jboss_elemento_By__java_lang_Iterable(JumpLinks.f_JUMP_LINKS_ITEMS__org_patternfly_component_jumplinks_JumpLinks_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
    element.removeAttribute(Aria.f_current__org_patternfly_core_Aria);
   }
  }
 }
 /** @nodts @return {Button} */
 m_failSafeToggleButton__org_patternfly_component_button_Button_$p_org_patternfly_component_jumplinks_JumpLinks() {
  if ($Equality.$same(this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_, null)) {
   this.f_headerElement__org_patternfly_component_jumplinks_JumpLinks_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Toggle jump links'), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_toggle__void();
   }), Button))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretDown__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), Button))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleTextElement__org_patternfly_component_jumplinks_JumpLinks_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder((/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_labelElement__org_patternfly_component_jumplinks_JumpLinks_.m_element__elemental2_dom_HTMLElement(), $Overlay))).textContent), HTMLContainerBuilder)))), Button)))), HTMLContainerBuilder)));
  }
  return this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_jumplinks_JumpLinks();
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_center__org_jboss_elemento_TypedBuilder() {
  return /**@type {JumpLinks}*/ ($Casts.$to(Center.m_center__$default__org_patternfly_style_Modifiers_Center__org_jboss_elemento_TypedBuilder(this), JumpLinks));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_center__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {JumpLinks}*/ ($Casts.$to(Center.m_center__$default__org_patternfly_style_Modifiers_Center__boolean__org_jboss_elemento_TypedBuilder(this, arg0), JumpLinks));
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
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<JumpLinksItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<JumpLinksItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {JumpLinks} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, JumpLinksItem> */ arg1) {
  return /**@type {JumpLinks}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), JumpLinks));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** JumpLinksItem */ arg0) {
  return /**@type {JumpLinks}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {JumpLinksItem}*/ ($Casts.$to(arg0, JumpLinksItem))), JumpLinks));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** JumpLinksItem */ arg0) {
  return this.m_add__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(/**@type {JumpLinksItem}*/ ($Casts.$to(arg0, JumpLinksItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<JumpLinks, JumpLinksItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_jumplinks_JumpLinks(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<JumpLinksItem>} */
 m_items__java_util_List() {
  return /**@type {List<JumpLinksItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, JumpLinksItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** JumpLinksItem */ arg0) {
  this.m_updateItem__org_patternfly_component_jumplinks_JumpLinksItem__void(/**@type {JumpLinksItem}*/ ($Casts.$to(arg0, JumpLinksItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<JumpLinks, JumpLinksItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_jumplinks_JumpLinks(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** JumpLinksItem */ arg0, /** BiConsumer<JumpLinksItem, JumpLinksItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {JumpLinksItem}*/ ($Casts.$to(arg0, JumpLinksItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<JumpLinks, JumpLinksItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_jumplinks_JumpLinks(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_vertical__org_jboss_elemento_TypedBuilder() {
  return /**@type {JumpLinks}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), JumpLinks));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_vertical__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_vertical__boolean__org_patternfly_component_jumplinks_JumpLinks(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {JumpLinks} */
 m_center__org_patternfly_component_jumplinks_JumpLinks() {
  return /**@type {JumpLinks}*/ ($Casts.$to(Center.m_center__$default__org_patternfly_style_Modifiers_Center__org_jboss_elemento_TypedBuilder(this), JumpLinks));
 }
 //Default method forwarding stub.
 /** @nodts @return {JumpLinks} */
 m_center__boolean__org_patternfly_component_jumplinks_JumpLinks(/** boolean */ arg0) {
  return /**@type {JumpLinks}*/ ($Casts.$to(Center.m_center__$default__org_patternfly_style_Modifiers_Center__boolean__org_jboss_elemento_TypedBuilder(this, arg0), JumpLinks));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {JumpLinks} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_jumplinks_JumpLinks(/** Iterable<T> */ arg0, /** j_u_function_Function<T, JumpLinksItem> */ arg1) {
  return /**@type {JumpLinks}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), JumpLinks));
 }
 //Default method forwarding stub.
 /** @nodts @return {JumpLinks} */
 m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(/** JumpLinksItem */ arg0) {
  return /**@type {JumpLinks}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), JumpLinks));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_jumplinks_JumpLinksItem__java_util_function_BiConsumer__void(/** JumpLinksItem */ arg0, /** BiConsumer<JumpLinksItem, JumpLinksItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {JumpLinks} */
 m_vertical__org_patternfly_component_jumplinks_JumpLinks() {
  return /**@type {JumpLinks}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), JumpLinks));
 }
 /** @nodts */
 static $clinit() {
  JumpLinks.$clinit = () =>{};
  JumpLinks.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Center.$clinit();
  Expandable.$clinit();
  HasItems.$clinit();
  Vertical.$clinit();
  JumpLinks.f_logger__org_patternfly_component_jumplinks_JumpLinks_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(JumpLinks).m_getName__java_lang_String());
  JumpLinks.f_JUMP_LINKS_ITEMS__org_patternfly_component_jumplinks_JumpLinks_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JumpLinks;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  JumpLinksItem = goog.module.get('org.patternfly.component.jumplinks.JumpLinksItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  ExpandableModifier = goog.module.get('org.patternfly.style.ExpandableModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
JumpLinks.f_logger__org_patternfly_component_jumplinks_JumpLinks_;
/**@type {By} @nodts*/
JumpLinks.f_JUMP_LINKS_ITEMS__org_patternfly_component_jumplinks_JumpLinks_;
Attachable.$markImplementor(JumpLinks);
Center.$markImplementor(JumpLinks);
Expandable.$markImplementor(JumpLinks);
HasItems.$markImplementor(JumpLinks);
Vertical.$markImplementor(JumpLinks);
$Util.$setClassMetadata(JumpLinks, 'org.patternfly.component.jumplinks.JumpLinks');

exports = JumpLinks;

//# sourceMappingURL=JumpLinks.js.map
