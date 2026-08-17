goog.module('org.patternfly.component.tree.TreeViewItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const HasAsyncItems = goog.require('org.patternfly.component.HasAsyncItems$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const TreeViewSubComponent = goog.require('org.patternfly.component.tree.TreeViewSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
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
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.component.AsyncItems$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let TreeView = goog.forwardDeclare('org.patternfly.component.tree.TreeView$impl');
let TreeViewType = goog.forwardDeclare('org.patternfly.component.tree.TreeViewType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let AsyncStatus = goog.forwardDeclare('org.patternfly.core.AsyncStatus$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Timeouts = goog.forwardDeclare('org.patternfly.core.Timeouts$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TreeViewSubComponent<HTMLLIElement, TreeViewItem>}
 * @implements {Compact<HTMLLIElement, TreeViewItem>}
 * @implements {ComponentContext<HTMLLIElement, TreeViewItem>}
 * @implements {ComponentIcon<HTMLLIElement, TreeViewItem>}
 * @implements {Disabled<HTMLLIElement, TreeViewItem>}
 * @implements {ElementTextMethods<HTMLLIElement, TreeViewItem>}
 * @implements {Expandable<HTMLLIElement, TreeViewItem>}
 * @implements {HasAsyncItems<HTMLLIElement, TreeViewItem, TreeViewItem>}
 * @implements {HasIdentifier<HTMLLIElement, TreeViewItem>}
 * @implements {HasItems<HTMLLIElement, TreeViewItem, TreeViewItem>}
 */
class TreeViewItem extends TreeViewSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LinkedHashMap<?string, TreeViewItem>} @nodts*/
  this.f_items__org_patternfly_component_tree_TreeViewItem;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_tree_TreeViewItem;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_tree_TreeViewItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_tree_TreeViewItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_containerElement__org_patternfly_component_tree_TreeViewItem_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_;
  /**@type {List<HTMLButtonElement>} @nodts*/
  this.f_buttonElements__org_patternfly_component_tree_TreeViewItem_;
  /**@type {List<HTMLInputElement>} @nodts*/
  this.f_inputElements__org_patternfly_component_tree_TreeViewItem_;
  /**@type {TreeView} @nodts*/
  this.f_tv__org_patternfly_component_tree_TreeViewItem;
  /**@type {TreeViewItem} @nodts*/
  this.f_parent__org_patternfly_component_tree_TreeViewItem;
  /**@type {HTMLElement} @nodts*/
  this.f_tabElement__org_patternfly_component_tree_TreeViewItem;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_tree_TreeViewItem_;
  /**@type {boolean} @nodts*/
  this.f_domFinished__org_patternfly_component_tree_TreeViewItem_ = false;
  /**@type {AsyncStatus} @nodts*/
  this.f_status__org_patternfly_component_tree_TreeViewItem_;
  /**@type {Element} @nodts*/
  this.f_icon__org_patternfly_component_tree_TreeViewItem_;
  /**@type {Element} @nodts*/
  this.f_expandedIcon__org_patternfly_component_tree_TreeViewItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_tree_TreeViewItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_tree_TreeViewItem_;
  /**@type {HTMLInputElement} @nodts*/
  this.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_;
  /**@type {List<ToggleHandler<TreeViewItem>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_tree_TreeViewItem_;
  /**@type {AsyncItems<TreeViewItem, TreeViewItem>} @nodts*/
  this.f_asyncItems__org_patternfly_component_tree_TreeViewItem_;
  /**@type {AurHandler<TreeViewItem, TreeViewItem>} @nodts*/
  this.f_aur__org_patternfly_component_tree_TreeViewItem_;
 }
 /** @nodts @return {TreeViewItem} */
 static m_treeViewItem__java_lang_String__org_patternfly_component_tree_TreeViewItem(/** ?string */ identifier) {
  TreeViewItem.$clinit();
  return TreeViewItem.$create__java_lang_String(identifier);
 }
 /** @nodts @return {TreeViewItem} */
 static m_treeViewItem__java_lang_String__java_lang_String__org_patternfly_component_tree_TreeViewItem(/** ?string */ identifier, /** ?string */ text) {
  TreeViewItem.$clinit();
  return TreeViewItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_patternfly_component_tree_TreeViewItem(text);
 }
 /** @nodts @return {!TreeViewItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  TreeViewItem.$clinit();
  let $instance = new TreeViewItem();
  $instance.$ctor__org_patternfly_component_tree_TreeViewItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tree_TreeViewItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_tree_TreeViewSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(TreeViewItem.f_SUB_COMPONENT_ID__org_patternfly_component_tree_TreeViewItem, TreeViewItem.f_SUB_COMPONENT_NAME__org_patternfly_component_tree_TreeViewItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_treeItem__org_patternfly_core_Roles), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_tree_TreeViewItem_ = identifier;
  this.f_domFinished__org_patternfly_component_tree_TreeViewItem_ = false;
  this.f_status__org_patternfly_component_tree_TreeViewItem_ = AsyncStatus.f_static___org_patternfly_core_AsyncStatus;
  this.f_items__org_patternfly_component_tree_TreeViewItem = (/**@type {!LinkedHashMap<?string, TreeViewItem>}*/ (LinkedHashMap.$create__()));
  this.f_data__org_patternfly_component_tree_TreeViewItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_buttonElements__org_patternfly_component_tree_TreeViewItem_ = (/**@type {!ArrayList<HTMLButtonElement>}*/ (ArrayList.$create__()));
  this.f_inputElements__org_patternfly_component_tree_TreeViewItem_ = (/**@type {!ArrayList<HTMLInputElement>}*/ (ArrayList.$create__()));
  this.f_toggleHandler__org_patternfly_component_tree_TreeViewItem_ = (/**@type {!ArrayList<ToggleHandler<TreeViewItem>>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_tree_TreeViewItem_ = (/**@type {!AurHandler<TreeViewItem, TreeViewItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_contentElement__org_patternfly_component_tree_TreeViewItem = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  this.f_containerElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_container__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
  this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_group__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 /** @nodts @return {TreeViewItem} */
 m_add__org_patternfly_component_tree_TreeViewItem__org_patternfly_component_tree_TreeViewItem(/** TreeViewItem */ item) {
  item.f_parent__org_patternfly_component_tree_TreeViewItem = this;
  this.f_items__org_patternfly_component_tree_TreeViewItem.put(item.f_identifier__org_patternfly_component_tree_TreeViewItem_, item);
  this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  item.m_finishDOM__org_patternfly_component_tree_TreeView__void_$pp_org_patternfly_component_tree(this.f_tv__org_patternfly_component_tree_TreeViewItem);
  return /**@type {TreeViewItem}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tree_TreeViewItem_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), TreeViewItem));
 }
 /** @nodts @return {TreeViewItem} */
 m_add__org_patternfly_component_AsyncItems__org_patternfly_component_tree_TreeViewItem(/** AsyncItems<TreeViewItem, TreeViewItem> */ items) {
  this.f_status__org_patternfly_component_tree_TreeViewItem_ = AsyncStatus.f_pending__org_patternfly_core_AsyncStatus;
  this.f_asyncItems__org_patternfly_component_tree_TreeViewItem_ = items;
  return this;
 }
 /** @nodts @return {TreeViewItem} */
 m_disabled__boolean__org_patternfly_component_tree_TreeViewItem(/** boolean */ disabled) {
  for (let $iterator = this.f_buttonElements__org_patternfly_component_tree_TreeViewItem_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let buttonElement = /**@type {HTMLButtonElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLButtonElement_$Overlay));
   {
    buttonElement.disabled = disabled;
   }
  }
  for (let $iterator_1 = this.f_inputElements__org_patternfly_component_tree_TreeViewItem_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
   let inputElement = /**@type {HTMLInputElement}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), HTMLInputElement_$Overlay));
   {
    inputElement.disabled = disabled;
   }
  }
  return /**@type {TreeViewItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), TreeViewItem));
 }
 /** @nodts @return {TreeViewItem} */
 m_text__java_lang_String__org_patternfly_component_tree_TreeViewItem(/** ?string */ text) {
  this.f_text__org_patternfly_component_tree_TreeViewItem_ = text;
  if (this.f_domFinished__org_patternfly_component_tree_TreeViewItem_) {
   Elements.m_textNode__elemental2_dom_Element__java_lang_String__void(this.f_textElement__org_patternfly_component_tree_TreeViewItem_, text);
  }
  return this;
 }
 /** @nodts @return {TreeViewItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(/** Element */ icon) {
  this.f_icon__org_patternfly_component_tree_TreeViewItem_ = icon;
  if (this.f_domFinished__org_patternfly_component_tree_TreeViewItem_) {
   if (!this.m_expanded__boolean()) {
    Element_$Overlay.m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tree_TreeViewItem(), [icon]);
   }
  }
  return this;
 }
 /** @nodts @return {TreeViewItem} */
 m_removeIcon__org_patternfly_component_tree_TreeViewItem() {
  this.f_icon__org_patternfly_component_tree_TreeViewItem_ = null;
  this.f_expandedIcon__org_patternfly_component_tree_TreeViewItem_ = null;
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_tree_TreeViewItem_);
  return this;
 }
 /** @nodts @return {TreeViewItem} */
 m_expandedIcon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_tree_TreeViewItem(/** PredefinedIcon */ icon) {
  return this.m_expandedIcon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(icon.m_element__org_jboss_elemento_svg_SVGElement());
 }
 /** @nodts @return {TreeViewItem} */
 m_expandedIcon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(/** Element */ icon) {
  this.f_expandedIcon__org_patternfly_component_tree_TreeViewItem_ = icon;
  if (this.f_domFinished__org_patternfly_component_tree_TreeViewItem_) {
   if (this.m_expanded__boolean()) {
    Element_$Overlay.m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tree_TreeViewItem(), [icon]);
   }
  }
  return this;
 }
 /** @nodts @template T @return {TreeViewItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_tree_TreeViewItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_tree_TreeViewItem_.put(key, value);
  return this;
 }
 /** @nodts @return {TreeViewItem} */
 m_that__org_patternfly_component_tree_TreeViewItem() {
  return this;
 }
 /** @nodts @return {TreeViewItem} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_tree_TreeViewItem(/** AddItemHandler<TreeViewItem, TreeViewItem> */ onAdd) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tree_TreeViewItem_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), TreeViewItem));
 }
 /** @nodts @return {TreeViewItem} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_tree_TreeViewItem(/** UpdateItemHandler<TreeViewItem, TreeViewItem> */ onUpdate) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tree_TreeViewItem_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), TreeViewItem));
 }
 /** @nodts @return {TreeViewItem} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_tree_TreeViewItem(/** RemoveItemHandler<TreeViewItem, TreeViewItem> */ onRemove) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tree_TreeViewItem_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), TreeViewItem));
 }
 /** @nodts @return {TreeViewItem} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_tree_TreeViewItem(/** ToggleHandler<TreeViewItem> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_tree_TreeViewItem_.add(toggleHandler);
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_tree_TreeViewItem_;
 }
 /** @nodts @return {TreeViewItem} */
 m_parent__org_patternfly_component_tree_TreeViewItem() {
  return this.f_parent__org_patternfly_component_tree_TreeViewItem;
 }
 /** @nodts @return {boolean} */
 m_selected__boolean() {
  if (!$Equality.$same(this.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_, null)) {
   return this.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.checked;
  } else if (!$Equality.$same(this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_, null)) {
   return this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_.classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
  }
  return false;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (this.m_expanded__boolean()) {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), null);
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_);
   if (this.f_domFinished__org_patternfly_component_tree_TreeViewItem_ && !$Equality.$same(this.f_icon__org_patternfly_component_tree_TreeViewItem_, null) && !$Equality.$same(this.f_expandedIcon__org_patternfly_component_tree_TreeViewItem_, null)) {
    Element_$Overlay.m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tree_TreeViewItem(), [this.f_icon__org_patternfly_component_tree_TreeViewItem_]);
   }
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_tree_TreeViewItem_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<TreeViewItem> */ th) =>{
     let th_1 = /**@type {ToggleHandler<TreeViewItem>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
    }));
   }
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  if (!this.m_expanded__boolean()) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), null);
   if (!Elements.m_isAttached__elemental2_dom_Node__boolean(this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_)) {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_);
   }
   if (this.f_domFinished__org_patternfly_component_tree_TreeViewItem_ && !$Equality.$same(this.f_icon__org_patternfly_component_tree_TreeViewItem_, null) && !$Equality.$same(this.f_expandedIcon__org_patternfly_component_tree_TreeViewItem_, null)) {
    Element_$Overlay.m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tree_TreeViewItem(), [this.f_expandedIcon__org_patternfly_component_tree_TreeViewItem_]);
   }
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_tree_TreeViewItem_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<TreeViewItem> */ th) =>{
     let th_1 = /**@type {ToggleHandler<TreeViewItem>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
    }));
   }
  }
 }
 /** @override @nodts @return {Promise<Iterable<TreeViewItem>>} */
 m_load__elemental2_promise_Promise() {
  if ($Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus) && !$Equality.$same(this.f_asyncItems__org_patternfly_component_tree_TreeViewItem_, null)) {
   let loadingItem = /**@type {!Array<TreeViewItem>}*/ ($Arrays.$create([1], TreeViewItem));
   let handle = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
    $Arrays.$set(loadingItem, 0, /**@type {TreeViewItem}*/ ($Casts.$to(TreeViewItem.f_loading__org_patternfly_component_tree_TreeViewItem_.m_get__java_lang_Object(), TreeViewItem)));
    loadingItem[0].m_finishDOM__org_patternfly_component_tree_TreeView__void_$pp_org_patternfly_component_tree(this.f_tv__org_patternfly_component_tree_TreeViewItem);
    this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(loadingItem[0].m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
   }, Timeouts.f_LOADING_TIMEOUT__org_patternfly_core_Timeouts, []);
   return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ ((/**@type {!Promise<!Iterable<!TreeViewItem>>}*/ ((/**@type {Promise<Iterable<TreeViewItem>>}*/ ($Casts.$to(this.f_asyncItems__org_patternfly_component_tree_TreeViewItem_.m_apply__java_lang_Object__java_lang_Object(this), Promise_$Overlay))).then(/**  @return {IThenable<Iterable<TreeViewItem>>}*/ ((/** Iterable<TreeViewItem> */ items) =>{
    let items_1 = /**@type {Iterable<TreeViewItem>}*/ ($Casts.$to(items, /**@type {Function}*/ (Iterable)));
    this.f_status__org_patternfly_component_tree_TreeViewItem_ = AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus;
    goog.global.clearTimeout(handle);
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(loadingItem[0]);
    for (let $iterator = items_1.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let child = /**@type {TreeViewItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), TreeViewItem));
     {
      this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(child);
     }
    }
    if (this.f_items__org_patternfly_component_tree_TreeViewItem.isEmpty()) {
     Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_);
     this.m_collapse__boolean__void(false);
    }
    return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(items_1));
   })))).catch(/**  @return {IThenable<Iterable<TreeViewItem>>}*/ ((/** !* */ error) =>{
    this.f_status__org_patternfly_component_tree_TreeViewItem_ = AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus;
    goog.global.clearTimeout(handle);
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(loadingItem[0]);
    TreeViewItem.f_logger__org_patternfly_component_tree_TreeViewItem_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to load items for %o - %s: %s', [/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), this.f_identifier__org_patternfly_component_tree_TreeViewItem_, error]);
    let errorItem = /**@type {TreeViewItem}*/ ($Casts.$to(TreeViewItem.f_error__org_patternfly_component_tree_TreeViewItem_.m_get__java_lang_Object(), TreeViewItem));
    errorItem.m_finishDOM__org_patternfly_component_tree_TreeView__void_$pp_org_patternfly_component_tree(this.f_tv__org_patternfly_component_tree_TreeViewItem);
    this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(errorItem.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
    return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (Promise.reject(error));
   })));
  } else {
   return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {List<TreeViewItem>}*/ (Collections.m_emptyList__java_util_List())));
  }
 }
 /** @override @nodts @return {Promise<Iterable<TreeViewItem>>} */
 m_reload__elemental2_promise_Promise() {
  if (!$Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus)) {
   let expanded = this.m_expanded__boolean();
   this.m_reset__void();
   return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (this.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<Iterable<TreeViewItem>>}*/ ((/** Iterable<TreeViewItem> */ items) =>{
    let items_1 = /**@type {Iterable<TreeViewItem>}*/ ($Casts.$to(items, /**@type {Function}*/ (Iterable)));
    if (expanded) {
     this.m_expand__boolean__void(false);
    }
    return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(items_1));
   })));
  } else {
   return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {List<TreeViewItem>}*/ (Collections.m_emptyList__java_util_List())));
  }
 }
 /** @override @nodts */
 m_reset__void() {
  if ($Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus)) {
   this.f_status__org_patternfly_component_tree_TreeViewItem_ = AsyncStatus.f_pending__org_patternfly_core_AsyncStatus;
   this.m_internalClear__void_$p_org_patternfly_component_tree_TreeViewItem();
   this.m_collapse__boolean__void(false);
   if (this.f_domFinished__org_patternfly_component_tree_TreeViewItem_ && !this.f_containerElement__org_patternfly_component_tree_TreeViewItem_.contains(this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_)) {
    Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_containerElement__org_patternfly_component_tree_TreeViewItem_, this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_);
   }
  }
 }
 /** @override @nodts @return {AsyncStatus} */
 m_status__org_patternfly_core_AsyncStatus() {
  return this.f_status__org_patternfly_component_tree_TreeViewItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_tree_TreeViewItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_tree_TreeViewItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_tree_TreeViewItem_.get(key));
  }
  return null;
 }
 /** @override @nodts @return {Iterator<TreeViewItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_tree_TreeViewItem.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_tree_TreeViewItem.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_tree_TreeViewItem.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_tree_TreeViewItem.containsKey(identifier);
 }
 /** @nodts @return {TreeViewItem} */
 m_item__java_lang_String__org_patternfly_component_tree_TreeViewItem(/** ?string */ identifier) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_tree_TreeViewItem.get(identifier), TreeViewItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_tree_TreeViewItem__void(/** TreeViewItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** TreeViewItem */ oldItem, /** TreeViewItem */ newItem) =>{
   let oldItem_1 = /**@type {TreeViewItem}*/ ($Casts.$to(oldItem, TreeViewItem));
   let newItem_1 = /**@type {TreeViewItem}*/ ($Casts.$to(newItem, TreeViewItem));
   this.f_items__org_patternfly_component_tree_TreeViewItem.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_tree_TreeViewItem_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {TreeViewItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_tree_TreeViewItem.remove(identifier), TreeViewItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_tree_TreeViewItem_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  if ($Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_static___org_patternfly_core_AsyncStatus)) {
   this.m_internalClear__void_$p_org_patternfly_component_tree_TreeViewItem();
  } else if ($Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus)) {
   this.m_reset__void();
  }
 }
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return this.f_text__org_patternfly_component_tree_TreeViewItem_;
 }
 /** @nodts */
 m_finishDOM__org_patternfly_component_tree_TreeView__void_$pp_org_patternfly_component_tree(/** TreeView */ tv) {
  if ($Equality.$same(tv, null)) {
   TreeViewItem.f_logger__org_patternfly_component_tree_TreeViewItem_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('DOM for tree view item %s cannot be finished: Unable to find parent tree view component: %o', [this.f_identifier__org_patternfly_component_tree_TreeViewItem_, /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))]);
   return;
  }
  if (this.f_domFinished__org_patternfly_component_tree_TreeViewItem_) {
   TreeViewItem.f_logger__org_patternfly_component_tree_TreeViewItem_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('DOM for tree view item %s[%s] is already finished: %o', [this.f_identifier__org_patternfly_component_tree_TreeViewItem_, tv.f_type__org_patternfly_component_tree_TreeView.name(), /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))]);
   return;
  }
  this.f_tv__org_patternfly_component_tree_TreeViewItem = tv;
  TreeViewItem.f_logger__org_patternfly_component_tree_TreeViewItem_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Finish DOM for tree view item %s[%s]: %o', [this.f_identifier__org_patternfly_component_tree_TreeViewItem_, tv.f_type__org_patternfly_component_tree_TreeView.name(), /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))]);
  switch (tv.f_type__org_patternfly_component_tree_TreeView.ordinal()) {
   case TreeViewType.$ordinal_default___org_patternfly_component_tree_TreeViewType:
    this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
     let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
     this.m_load__elemental2_promise_Promise();
     if ($Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus) || !this.f_items__org_patternfly_component_tree_TreeViewItem.isEmpty()) {
      tv.m_toggle__org_patternfly_component_tree_TreeViewItem__void(this);
     }
     tv.m_select__org_patternfly_component_tree_TreeViewItem__void(this);
    }), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
    this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
    this.f_textElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
    this.f_tabElement__org_patternfly_component_tree_TreeViewItem = this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_;
    this.f_buttonElements__org_patternfly_component_tree_TreeViewItem_.add(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_, HTMLButtonElement_$Overlay)));
    break;
   case TreeViewType.$ordinal_selectableItems__org_patternfly_component_tree_TreeViewType:
    let selectableId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_subComponentId__java_lang_String(), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['selectable'], j_l_String)));
    this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selectable__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(selectableId), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e_2) =>{
     let e_3 = /**@type {MouseEvent}*/ ($Casts.$to(e_2, MouseEvent_$Overlay));
     tv.m_select__org_patternfly_component_tree_TreeViewItem__void(this);
    }), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
    this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, selectableId), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e_4) =>{
     let e_5 = /**@type {MouseEvent}*/ ($Casts.$to(e_4, MouseEvent_$Overlay));
     this.m_load__elemental2_promise_Promise();
     tv.m_toggle__org_patternfly_component_tree_TreeViewItem__void(this);
     e_5.stopPropagation();
    }), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
    this.f_textElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
    this.f_tabElement__org_patternfly_component_tree_TreeViewItem = this.f_textElement__org_patternfly_component_tree_TreeViewItem_;
    this.f_buttonElements__org_patternfly_component_tree_TreeViewItem_.add(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_, HTMLButtonElement_$Overlay)));
    this.f_buttonElements__org_patternfly_component_tree_TreeViewItem_.add(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_textElement__org_patternfly_component_tree_TreeViewItem_, HTMLButtonElement_$Overlay)));
    break;
   case TreeViewType.$ordinal_checkboxes__org_patternfly_component_tree_TreeViewType:
    let labelId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_subComponentId__java_lang_String(), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['label'], j_l_String)));
    let checkboxId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_subComponentId__java_lang_String(), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['checkbox'], j_l_String)));
    this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLLabelElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(labelId), HTMLContainerBuilder))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLLabelElement */ l) =>{
     let l_1 = /**@type {HTMLLabelElement}*/ ($Casts.$to(l, HTMLLabelElement_$Overlay));
     l_1.htmlFor = checkboxId;
    })), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)));
    this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labelId), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e_6) =>{
     let e_7 = /**@type {MouseEvent}*/ ($Casts.$to(e_6, MouseEvent_$Overlay));
     this.m_load__elemental2_promise_Promise();
     tv.m_toggle__org_patternfly_component_tree_TreeViewItem__void(this);
     e_7.stopPropagation();
    }), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
    this.f_textElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
    this.f_containerElement__org_patternfly_component_tree_TreeViewItem_.appendChild((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_check__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_HTMLInputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(checkboxId), HTMLInputElementBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.f_identifier__org_patternfly_component_tree_TreeViewItem_, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['check'], j_l_String)))), HTMLInputElementBuilder))).m_tabIndex__int__org_jboss_elemento_TypedBuilder(-1), HTMLInputElementBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_change__org_jboss_elemento_EventType, (/** Event */ e_8) =>{
     tv.m_select__org_patternfly_component_tree_TreeViewItem__boolean__void(this, (/**@type {HTMLInputElement}*/ ($Casts.$to(e_8.target, HTMLInputElement_$Overlay))).checked);
    }), HTMLInputElementBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
     let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
     arg0_1.stopPropagation();
    }), HTMLInputElementBuilder))).m_element__elemental2_dom_HTMLInputElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
    this.f_tabElement__org_patternfly_component_tree_TreeViewItem = this.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_;
    this.f_buttonElements__org_patternfly_component_tree_TreeViewItem_.add(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_, HTMLButtonElement_$Overlay)));
    this.f_inputElements__org_patternfly_component_tree_TreeViewItem_.add(this.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_);
    break;
   default:
    TreeViewItem.f_logger__org_patternfly_component_tree_TreeViewItem_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unsupported tree view type in tree view item %s: %s %o', [this.f_identifier__org_patternfly_component_tree_TreeViewItem_, tv.f_type__org_patternfly_component_tree_TreeView.name(), /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))]);
    break;
  }
  this.f_contentElement__org_patternfly_component_tree_TreeViewItem.appendChild(this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_);
  this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_.appendChild(this.f_containerElement__org_patternfly_component_tree_TreeViewItem_);
  this.f_containerElement__org_patternfly_component_tree_TreeViewItem_.appendChild(this.f_textElement__org_patternfly_component_tree_TreeViewItem_);
  if ($Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus) || !this.f_items__org_patternfly_component_tree_TreeViewItem.isEmpty()) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_containerElement__org_patternfly_component_tree_TreeViewItem_, this.f_toggleElement__org_patternfly_component_tree_TreeViewItem_);
  }
  this.f_domFinished__org_patternfly_component_tree_TreeViewItem_ = true;
  if (!$Equality.$same(this.f_text__org_patternfly_component_tree_TreeViewItem_, null)) {
   this.m_text__java_lang_String__org_patternfly_component_tree_TreeViewItem(this.f_text__org_patternfly_component_tree_TreeViewItem_);
  }
  if (!$Equality.$same(this.f_icon__org_patternfly_component_tree_TreeViewItem_, null)) {
   this.m_icon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(this.f_icon__org_patternfly_component_tree_TreeViewItem_);
  } else if (!$Equality.$same(tv.f_icon__org_patternfly_component_tree_TreeView, null)) {
   this.m_icon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(/**@type {Element}*/ ($Casts.$to(tv.f_icon__org_patternfly_component_tree_TreeView.m_get__java_lang_Object(), Element_$Overlay)));
  }
  if (!$Equality.$same(this.f_expandedIcon__org_patternfly_component_tree_TreeViewItem_, null)) {
   this.m_expandedIcon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(this.f_expandedIcon__org_patternfly_component_tree_TreeViewItem_);
  } else if (!$Equality.$same(tv.f_expandedIcon__org_patternfly_component_tree_TreeView, null)) {
   this.m_expandedIcon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(/**@type {Element}*/ ($Casts.$to(tv.f_expandedIcon__org_patternfly_component_tree_TreeView.m_get__java_lang_Object(), Element_$Overlay)));
  }
  for (let $iterator = this.f_items__org_patternfly_component_tree_TreeViewItem.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let child = /**@type {TreeViewItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), TreeViewItem));
   {
    if (!child.f_domFinished__org_patternfly_component_tree_TreeViewItem_) {
     child.m_finishDOM__org_patternfly_component_tree_TreeView__void_$pp_org_patternfly_component_tree(tv);
    }
   }
  }
 }
 /** @nodts */
 m_markSelected__org_patternfly_component_tree_TreeViewType__boolean__void_$pp_org_patternfly_component_tree(/** TreeViewType */ type, /** boolean */ selected) {
  if (this.f_domFinished__org_patternfly_component_tree_TreeViewItem_) {
   this.f_tabElement__org_patternfly_component_tree_TreeViewItem.tabIndex = selected ? 0 : -1;
   if ($Equality.$same(type, TreeViewType.f_default___org_patternfly_component_tree_TreeViewType) && $Equality.$same(this.f_status__org_patternfly_component_tree_TreeViewItem_, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus) && this.f_items__org_patternfly_component_tree_TreeViewItem.isEmpty() || $Equality.$same(type, TreeViewType.f_selectableItems__org_patternfly_component_tree_TreeViewType)) {
    this.f_nodeElement__org_patternfly_component_tree_TreeViewItem_.classList.toggle(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), selected);
   } else if (!$Equality.$same(this.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_, null) && $Equality.$same(type, TreeViewType.f_checkboxes__org_patternfly_component_tree_TreeViewType)) {
    this.m_check__org_patternfly_component_tree_TreeViewItem__boolean__void_$p_org_patternfly_component_tree_TreeViewItem(this, selected);
    this.m_indeterminate__org_patternfly_component_tree_TreeViewItem__void_$p_org_patternfly_component_tree_TreeViewItem(this.f_parent__org_patternfly_component_tree_TreeViewItem);
   }
  }
 }
 /** @nodts */
 m_check__org_patternfly_component_tree_TreeViewItem__boolean__void_$p_org_patternfly_component_tree_TreeViewItem(/** TreeViewItem */ item, /** boolean */ checked) {
  if (!$Equality.$same(item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_, null)) {
   item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.checked = checked;
   item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.indeterminate = false;
   for (let $iterator = item.f_items__org_patternfly_component_tree_TreeViewItem.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let child = /**@type {TreeViewItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), TreeViewItem));
    {
     this.m_check__org_patternfly_component_tree_TreeViewItem__boolean__void_$p_org_patternfly_component_tree_TreeViewItem(child, checked);
    }
   }
  }
 }
 /** @nodts */
 m_indeterminate__org_patternfly_component_tree_TreeViewItem__void_$p_org_patternfly_component_tree_TreeViewItem(/** TreeViewItem */ item) {
  if (!$Equality.$same(item, null) && !$Equality.$same(item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_, null)) {
   let all = true;
   let some = false;
   let none = true;
   for (let $iterator = item.f_items__org_patternfly_component_tree_TreeViewItem.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let child = /**@type {TreeViewItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), TreeViewItem));
    {
     if (!$Equality.$same(child.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_, null)) {
      let checked = child.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.checked;
      let indeterminate = child.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.indeterminate;
      all = all && checked;
      some = some || checked || indeterminate;
      none = none && !checked;
      if (all) {
       item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.checked = true;
       item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.indeterminate = false;
      } else if (some) {
       item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.checked = false;
       item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.indeterminate = true;
      } else {
       item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.checked = false;
       item.f_checkboxElement__org_patternfly_component_tree_TreeViewItem_.indeterminate = false;
      }
     }
    }
   }
   this.m_indeterminate__org_patternfly_component_tree_TreeViewItem__void_$p_org_patternfly_component_tree_TreeViewItem(item.f_parent__org_patternfly_component_tree_TreeViewItem);
  }
 }
 /** @nodts */
 m_internalClear__void_$p_org_patternfly_component_tree_TreeViewItem() {
  let iterator = this.f_items__org_patternfly_component_tree_TreeViewItem.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {TreeViewItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), TreeViewItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_tree_TreeViewItem_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_childrenElement__org_patternfly_component_tree_TreeViewItem_);
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_tree_TreeViewItem() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_tree_TreeViewItem_, null) && !$Equality.$same(this.f_textElement__org_patternfly_component_tree_TreeViewItem_, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_tree_TreeViewItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), this.f_textElement__org_patternfly_component_tree_TreeViewItem_);
  }
  return this.f_iconContainer__org_patternfly_component_tree_TreeViewItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tree_TreeViewItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {TreeViewItem}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), TreeViewItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TreeViewItem));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {TreeViewItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_tree_TreeViewItem(arg0, arg1);
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
 /** @final @override @nodts @return {TreeViewItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), TreeViewItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_tree_TreeViewItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TreeViewItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TreeViewItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_tree_TreeViewItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_tree_TreeViewItem(arg0);
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
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** AsyncItems<TreeViewItem, TreeViewItem> */ arg0) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(HasAsyncItems.m_addItems__$default__org_patternfly_component_HasAsyncItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(this, arg0), TreeViewItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_add__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** AsyncItems<TreeViewItem, TreeViewItem> */ arg0) {
  return this.m_add__org_patternfly_component_AsyncItems__org_patternfly_component_tree_TreeViewItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<TreeViewItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<TreeViewItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {TreeViewItem} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, TreeViewItem> */ arg1) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), TreeViewItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** TreeViewItem */ arg0) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {TreeViewItem}*/ ($Casts.$to(arg0, TreeViewItem))), TreeViewItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** TreeViewItem */ arg0) {
  return this.m_add__org_patternfly_component_tree_TreeViewItem__org_patternfly_component_tree_TreeViewItem(/**@type {TreeViewItem}*/ ($Casts.$to(arg0, TreeViewItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<TreeViewItem, TreeViewItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_tree_TreeViewItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<TreeViewItem>} */
 m_items__java_util_List() {
  return /**@type {List<TreeViewItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_tree_TreeViewItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, TreeViewItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** TreeViewItem */ arg0) {
  this.m_updateItem__org_patternfly_component_tree_TreeViewItem__void(/**@type {TreeViewItem}*/ ($Casts.$to(arg0, TreeViewItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<TreeViewItem, TreeViewItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_tree_TreeViewItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** TreeViewItem */ arg0, /** BiConsumer<TreeViewItem, TreeViewItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {TreeViewItem}*/ ($Casts.$to(arg0, TreeViewItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeViewItem} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<TreeViewItem, TreeViewItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_tree_TreeViewItem(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {TreeViewItem} */
 m_compact__org_patternfly_component_tree_TreeViewItem() {
  return /**@type {TreeViewItem}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), TreeViewItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {TreeViewItem} */
 m_compact__boolean__org_patternfly_component_tree_TreeViewItem(/** boolean */ arg0) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TreeViewItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {TreeViewItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_tree_TreeViewItem(/** PredefinedIcon */ arg0) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), TreeViewItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {TreeViewItem} */
 m_disabled__org_patternfly_component_tree_TreeViewItem() {
  return /**@type {TreeViewItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TreeViewItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {TreeViewItem} */
 m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_tree_TreeViewItem(/** AsyncItems<TreeViewItem, TreeViewItem> */ arg0) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(HasAsyncItems.m_addItems__$default__org_patternfly_component_HasAsyncItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(this, arg0), TreeViewItem));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {TreeViewItem} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_tree_TreeViewItem(/** Iterable<T> */ arg0, /** j_u_function_Function<T, TreeViewItem> */ arg1) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), TreeViewItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {TreeViewItem} */
 m_addItem__org_patternfly_component_tree_TreeViewItem__org_patternfly_component_tree_TreeViewItem(/** TreeViewItem */ arg0) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), TreeViewItem));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_tree_TreeViewItem__java_util_function_BiConsumer__void(/** TreeViewItem */ arg0, /** BiConsumer<TreeViewItem, TreeViewItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  TreeViewItem.$clinit = () =>{};
  TreeViewItem.$loadModules();
  TreeViewSubComponent.$clinit();
  Compact.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  Disabled.$clinit();
  ElementTextMethods.$clinit();
  Expandable.$clinit();
  HasAsyncItems.$clinit();
  HasItems.$clinit();
  TreeViewItem.f_logger__org_patternfly_component_tree_TreeViewItem_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(TreeViewItem).m_getName__java_lang_String());
  TreeViewItem.f_loading__org_patternfly_component_tree_TreeViewItem_ = Supplier.$adapt(/**  @return {TreeViewItem}*/ (() =>{
   return TreeViewItem.m_treeViewItem__java_lang_String__org_patternfly_component_tree_TreeViewItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_TreeView__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([TreeViewItem.f_SUB_COMPONENT_ID__org_patternfly_component_tree_TreeViewItem, 'loading'], j_l_String)))).m_text__java_lang_String__org_patternfly_component_tree_TreeViewItem('Loading').m_icon__elemental2_dom_Element__org_patternfly_component_tree_TreeViewItem(Spinner.m_spinner__org_patternfly_style_Size__java_lang_String__org_patternfly_component_spinner_Spinner(Size.f_md__org_patternfly_style_Size, 'Loading').m_element__org_jboss_elemento_svg_SVGElement());
  }));
  TreeViewItem.f_error__org_patternfly_component_tree_TreeViewItem_ = Supplier.$adapt(/**  @return {TreeViewItem}*/ (() =>{
   return /**@type {TreeViewItem}*/ ($Casts.$to(TreeViewItem.m_treeViewItem__java_lang_String__org_patternfly_component_tree_TreeViewItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_TreeView__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([TreeViewItem.f_SUB_COMPONENT_ID__org_patternfly_component_tree_TreeViewItem, 'error'], j_l_String)))).m_text__java_lang_String__org_patternfly_component_tree_TreeViewItem('Error').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_errorFill__org_patternfly_icon_PredefinedIcon()), TreeViewItem));
  }));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeViewItem;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  TreeViewType = goog.module.get('org.patternfly.component.tree.TreeViewType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  AsyncStatus = goog.module.get('org.patternfly.core.AsyncStatus$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Timeouts = goog.module.get('org.patternfly.core.Timeouts$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
TreeViewItem.f_SUB_COMPONENT_ID__org_patternfly_component_tree_TreeViewItem = 'tvi';
/**@const {string} @nodts*/
TreeViewItem.f_SUB_COMPONENT_NAME__org_patternfly_component_tree_TreeViewItem = 'TreeViewItem';
/**@type {Logger} @nodts*/
TreeViewItem.f_logger__org_patternfly_component_tree_TreeViewItem_;
/**@type {Supplier<TreeViewItem>} @nodts*/
TreeViewItem.f_loading__org_patternfly_component_tree_TreeViewItem_;
/**@type {Supplier<TreeViewItem>} @nodts*/
TreeViewItem.f_error__org_patternfly_component_tree_TreeViewItem_;
Compact.$markImplementor(TreeViewItem);
ComponentContext.$markImplementor(TreeViewItem);
ComponentIcon.$markImplementor(TreeViewItem);
Disabled.$markImplementor(TreeViewItem);
ElementTextMethods.$markImplementor(TreeViewItem);
Expandable.$markImplementor(TreeViewItem);
HasAsyncItems.$markImplementor(TreeViewItem);
HasIdentifier.$markImplementor(TreeViewItem);
HasItems.$markImplementor(TreeViewItem);
$Util.$setClassMetadata(TreeViewItem, 'org.patternfly.component.tree.TreeViewItem');

exports = TreeViewItem;

//# sourceMappingURL=TreeViewItem.js.map
