goog.module('org.patternfly.component.tree.TreeView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let ScrollIntoViewOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let TreeViewItem = goog.forwardDeclare('org.patternfly.component.tree.TreeViewItem$impl');
let TreeViewType = goog.forwardDeclare('org.patternfly.component.tree.TreeViewType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let MultiSelectHandler = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, TreeView>}
 * @implements {HasItems<HTMLElement, TreeView, TreeViewItem>}
 * @implements {Attachable}
 */
class TreeView extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TreeViewType} @nodts*/
  this.f_type__org_patternfly_component_tree_TreeView;
  /**@type {LinkedHashMap<?string, TreeViewItem>} @nodts*/
  this.f_items__org_patternfly_component_tree_TreeView_;
  /**@type {HTMLContainerBuilder<HTMLUListElement>} @nodts*/
  this.f_ul__org_patternfly_component_tree_TreeView_;
  /**@type {AurHandler<TreeView, TreeViewItem>} @nodts*/
  this.f_aur__org_patternfly_component_tree_TreeView_;
  /**@type {List<ToggleHandler<TreeViewItem>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_tree_TreeView_;
  /**@type {List<SelectHandler<TreeViewItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_tree_TreeView_;
  /**@type {List<MultiSelectHandler<TreeView, TreeViewItem>>} @nodts*/
  this.f_multiSelectHandler__org_patternfly_component_tree_TreeView_;
  /**@type {Supplier<Element>} @nodts*/
  this.f_icon__org_patternfly_component_tree_TreeView;
  /**@type {Supplier<Element>} @nodts*/
  this.f_expandedIcon__org_patternfly_component_tree_TreeView;
  /**@type {HandlerRegistration} @nodts*/
  this.f_keyHandler__org_patternfly_component_tree_TreeView_;
 }
 /** @nodts @return {TreeView} */
 static m_treeView__org_patternfly_component_tree_TreeView() {
  TreeView.$clinit();
  return TreeView.$create__org_patternfly_component_tree_TreeViewType(TreeViewType.f_default___org_patternfly_component_tree_TreeViewType);
 }
 /** @nodts @return {TreeView} */
 static m_treeView__org_patternfly_component_tree_TreeViewType__org_patternfly_component_tree_TreeView(/** TreeViewType */ type) {
  TreeView.$clinit();
  return TreeView.$create__org_patternfly_component_tree_TreeViewType(type);
 }
 /** @nodts @return {!TreeView} */
 static $create__org_patternfly_component_tree_TreeViewType(/** TreeViewType */ type) {
  TreeView.$clinit();
  let $instance = new TreeView();
  $instance.$ctor__org_patternfly_component_tree_TreeView__org_patternfly_component_tree_TreeViewType__void(type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tree_TreeView__org_patternfly_component_tree_TreeViewType__void(/** TreeViewType */ type) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_TreeView__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_type__org_patternfly_component_tree_TreeView = type;
  this.f_items__org_patternfly_component_tree_TreeView_ = (/**@type {!LinkedHashMap<?string, TreeViewItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_tree_TreeView_ = (/**@type {!AurHandler<TreeView, TreeViewItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_toggleHandler__org_patternfly_component_tree_TreeView_ = (/**@type {!ArrayList<ToggleHandler<TreeViewItem>>}*/ (ArrayList.$create__()));
  this.f_selectHandler__org_patternfly_component_tree_TreeView_ = (/**@type {!ArrayList<SelectHandler<TreeViewItem>>}*/ (ArrayList.$create__()));
  this.f_multiSelectHandler__org_patternfly_component_tree_TreeView_ = (/**@type {!ArrayList<MultiSelectHandler<TreeView, TreeViewItem>>}*/ (ArrayList.$create__()));
  this.f_icon__org_patternfly_component_tree_TreeView = null;
  this.f_expandedIcon__org_patternfly_component_tree_TreeView = null;
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_ul__org_patternfly_component_tree_TreeView_ = (/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_tree__org_patternfly_core_Roles), HTMLContainerBuilder))));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  TreeView.m_traverseItems__org_patternfly_component_HasItems__java_util_function_Consumer__void(this, Consumer.$adapt((/** TreeViewItem */ treeViewItem) =>{
   let treeViewItem_1 = /**@type {TreeViewItem}*/ ($Casts.$to(treeViewItem, TreeViewItem));
   treeViewItem_1.m_finishDOM__org_patternfly_component_tree_TreeView__void_$pp_org_patternfly_component_tree(this);
  }));
  if (this.f_items__org_patternfly_component_tree_TreeView_.values().m_iterator__java_util_Iterator().m_hasNext__boolean()) {
   let item = /**@type {TreeViewItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_tree_TreeView_.values().m_iterator__java_util_Iterator().m_next__java_lang_Object(), TreeViewItem));
   if (!$Equality.$same(item.f_tabElement__org_patternfly_component_tree_TreeViewItem, null)) {
    item.f_tabElement__org_patternfly_component_tree_TreeViewItem.tabIndex = 0;
   }
  }
  this.f_keyHandler__org_patternfly_component_tree_TreeView_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.m_element__elemental2_dom_HTMLElement(), EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ event) =>{
   let event_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(event, KeyboardEvent_$Overlay));
   switch (this.f_type__org_patternfly_component_tree_TreeView.ordinal()) {
    case TreeViewType.$ordinal_default___org_patternfly_component_tree_TreeViewType:
     this.m_handleKeys__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_tree_TreeView(event_1);
     break;
    case TreeViewType.$ordinal_selectableItems__org_patternfly_component_tree_TreeViewType:
    case TreeViewType.$ordinal_checkboxes__org_patternfly_component_tree_TreeViewType:
     this.m_handleKeysSelectable__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_tree_TreeView(event_1);
     break;
   }
  });
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_keyHandler__org_patternfly_component_tree_TreeView_, null)) {
   this.f_keyHandler__org_patternfly_component_tree_TreeView_.m_removeHandler__void();
  }
 }
 /** @nodts @return {TreeView} */
 m_add__org_patternfly_component_tree_TreeViewItem__org_patternfly_component_tree_TreeView(/** TreeViewItem */ item) {
  this.f_items__org_patternfly_component_tree_TreeView_.put(item.m_identifier__java_lang_String(), item);
  item.m_finishDOM__org_patternfly_component_tree_TreeView__void_$pp_org_patternfly_component_tree(this);
  this.f_ul__org_patternfly_component_tree_TreeView_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item);
  return /**@type {TreeView}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tree_TreeView_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), TreeView));
 }
 /** @nodts @return {TreeView} */
 m_guides__org_patternfly_component_tree_TreeView() {
  return this.m_guides__boolean__org_patternfly_component_tree_TreeView(true);
 }
 /** @nodts @return {TreeView} */
 m_guides__boolean__org_patternfly_component_tree_TreeView(/** boolean */ guides) {
  return /**@type {TreeView}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_tree_TreeView(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_guides__org_patternfly_style_Classes, guides), TreeView));
 }
 /** @nodts @return {TreeView} */
 m_icon__java_util_function_Supplier__org_patternfly_component_tree_TreeView(/** Supplier<Element> */ icon) {
  this.f_icon__org_patternfly_component_tree_TreeView = icon;
  return this;
 }
 /** @nodts @return {TreeView} */
 m_expandedIcon__java_util_function_Supplier__org_patternfly_component_tree_TreeView(/** Supplier<Element> */ icon) {
  this.f_expandedIcon__org_patternfly_component_tree_TreeView = icon;
  return this;
 }
 /** @nodts @return {TreeView} */
 m_that__org_patternfly_component_tree_TreeView() {
  return this;
 }
 /** @nodts @return {TreeView} */
 m_ariaLabel__java_lang_String__org_patternfly_component_tree_TreeView(/** ?string */ label) {
  return /**@type {TreeView}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), TreeView));
 }
 /** @nodts @return {TreeView} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_tree_TreeView(/** AddItemHandler<TreeView, TreeViewItem> */ onAdd) {
  return /**@type {TreeView}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tree_TreeView_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), TreeView));
 }
 /** @nodts @return {TreeView} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_tree_TreeView(/** UpdateItemHandler<TreeView, TreeViewItem> */ onUpdate) {
  return /**@type {TreeView}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tree_TreeView_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), TreeView));
 }
 /** @nodts @return {TreeView} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_tree_TreeView(/** RemoveItemHandler<TreeView, TreeViewItem> */ onRemove) {
  return /**@type {TreeView}*/ ($Casts.$to(this.f_aur__org_patternfly_component_tree_TreeView_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), TreeView));
 }
 /** @nodts @return {TreeView} */
 m_onMultiSelect__org_patternfly_handler_MultiSelectHandler__org_patternfly_component_tree_TreeView(/** MultiSelectHandler<TreeView, TreeViewItem> */ selectHandler) {
  this.f_multiSelectHandler__org_patternfly_component_tree_TreeView_.add(selectHandler);
  return this;
 }
 /** @nodts @return {TreeView} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_tree_TreeView(/** SelectHandler<TreeViewItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_tree_TreeView_.add(selectHandler);
  return this;
 }
 /** @nodts @return {TreeView} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_tree_TreeView(/** ToggleHandler<TreeViewItem> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_tree_TreeView_.add(toggleHandler);
  return this;
 }
 /** @nodts @return {Promise<Iterable<TreeViewItem>>} */
 m_load__java_lang_String__elemental2_promise_Promise(/** ?string */ identifier) {
  return this.m_load__org_patternfly_component_tree_TreeViewItem__elemental2_promise_Promise(this.m_findItem__java_lang_String__java_util_LinkedHashMap__org_patternfly_component_tree_TreeViewItem_$p_org_patternfly_component_tree_TreeView(identifier, this.f_items__org_patternfly_component_tree_TreeView_));
 }
 /** @nodts @return {Promise<Iterable<TreeViewItem>>} */
 m_load__org_patternfly_component_tree_TreeViewItem__elemental2_promise_Promise(/** TreeViewItem */ item) {
  if (!$Equality.$same(item, null)) {
   return item.m_load__elemental2_promise_Promise();
  } else {
   return /**@type {!Promise<!Iterable<!TreeViewItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {List<TreeViewItem>}*/ (Collections.m_emptyList__java_util_List())));
  }
 }
 /** @nodts */
 m_toggle__org_patternfly_component_tree_TreeViewItem__void(/** TreeViewItem */ item) {
  this.m_toggle__org_patternfly_component_tree_TreeViewItem__boolean__void(item, true);
 }
 /** @nodts */
 m_toggle__org_patternfly_component_tree_TreeViewItem__boolean__void(/** TreeViewItem */ item, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   item.m_toggle__boolean__void(fireEvent);
   if (fireEvent) {
    this.f_toggleHandler__org_patternfly_component_tree_TreeView_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<TreeViewItem> */ th) =>{
     let th_1 = /**@type {ToggleHandler<TreeViewItem>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
     th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, item.m_expanded__boolean());
    }));
   }
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_tree_TreeViewItem__boolean__boolean__void(this.m_findItem__java_lang_String__java_util_LinkedHashMap__org_patternfly_component_tree_TreeViewItem_$p_org_patternfly_component_tree_TreeView(identifier, this.f_items__org_patternfly_component_tree_TreeView_), true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_tree_TreeViewItem__void(/** TreeViewItem */ item) {
  this.m_select__org_patternfly_component_tree_TreeViewItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_tree_TreeViewItem__boolean__void(/** TreeViewItem */ item, /** boolean */ selected) {
  this.m_select__org_patternfly_component_tree_TreeViewItem__boolean__boolean__void(item, selected, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_tree_TreeViewItem__boolean__boolean__void(/** TreeViewItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   if (($Equality.$same(this.f_type__org_patternfly_component_tree_TreeView, TreeViewType.f_default___org_patternfly_component_tree_TreeViewType) || $Equality.$same(this.f_type__org_patternfly_component_tree_TreeView, TreeViewType.f_selectableItems__org_patternfly_component_tree_TreeViewType)) && selected) {
    TreeView.m_traverseItems__org_patternfly_component_HasItems__java_util_function_Consumer__void(this, Consumer.$adapt((/** TreeViewItem */ itm) =>{
     let itm_1 = /**@type {TreeViewItem}*/ ($Casts.$to(itm, TreeViewItem));
     itm_1.m_markSelected__org_patternfly_component_tree_TreeViewType__boolean__void_$pp_org_patternfly_component_tree(this.f_type__org_patternfly_component_tree_TreeView, false);
    }));
   }
   item.m_markSelected__org_patternfly_component_tree_TreeViewType__boolean__void_$pp_org_patternfly_component_tree(this.f_type__org_patternfly_component_tree_TreeView, selected);
   if (fireEvent) {
    this.f_selectHandler__org_patternfly_component_tree_TreeView_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<TreeViewItem> */ sh) =>{
     let sh_1 = /**@type {SelectHandler<TreeViewItem>}*/ ($Casts.$to(sh, /**@type {Function}*/ (SelectHandler)));
     sh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
    }));
    if (!this.f_multiSelectHandler__org_patternfly_component_tree_TreeView_.isEmpty()) {
     this.f_multiSelectHandler__org_patternfly_component_tree_TreeView_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** MultiSelectHandler<TreeView, TreeViewItem> */ msh) =>{
      let msh_1 = /**@type {MultiSelectHandler<TreeView, TreeViewItem>}*/ ($Casts.$to(msh, /**@type {Function}*/ (MultiSelectHandler)));
      msh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__java_util_List__void(new Event(''), this, this.m_selectedItems__java_util_List());
     }));
    }
   }
   if (selected) {
    let parents = this.m_parents__org_patternfly_component_tree_TreeViewItem__java_util_List_$p_org_patternfly_component_tree_TreeView(item);
    Collections.m_reverse__java_util_List__void(parents);
    for (let $iterator = parents.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let treeViewItem = /**@type {TreeViewItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), TreeViewItem));
     {
      treeViewItem.m_expand__boolean__void(false);
     }
    }
    let options = ScrollIntoViewOptions_$Overlay.m_create__elemental2_dom_ScrollIntoViewOptions();
    options.block = 'nearest';
    options.inline = 'nearest';
    Element_$Overlay.m_scrollIntoView__$devirt__elemental2_dom_Element__elemental2_dom_ScrollIntoViewOptions__void(item.f_contentElement__org_patternfly_component_tree_TreeViewItem, options);
   }
  }
 }
 /** @nodts @return {List<TreeViewItem>} */
 m_selectedItems__java_util_List() {
  let selected = /**@type {!ArrayList<TreeViewItem>}*/ (ArrayList.$create__());
  TreeView.m_traverseItems__org_patternfly_component_HasItems__java_util_function_Consumer__void(this, Consumer.$adapt((/** TreeViewItem */ itm) =>{
   let itm_1 = /**@type {TreeViewItem}*/ ($Casts.$to(itm, TreeViewItem));
   if (itm_1.m_selected__boolean()) {
    selected.add(itm_1);
   }
  }));
  return selected;
 }
 /** @nodts */
 m_unselect__void() {
  this.m_unselect__boolean__void(false);
 }
 /** @nodts */
 m_unselect__boolean__void(/** boolean */ fireEvent) {
  TreeView.m_traverseItems__org_patternfly_component_HasItems__java_util_function_Consumer__void(this, Consumer.$adapt((/** TreeViewItem */ itm) =>{
   let itm_1 = /**@type {TreeViewItem}*/ ($Casts.$to(itm, TreeViewItem));
   this.m_select__org_patternfly_component_tree_TreeViewItem__boolean__boolean__void(itm_1, false, fireEvent);
  }));
 }
 /** @nodts */
 m_collapse__void() {
  this.m_items__java_util_List().m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** TreeViewItem */ item) =>{
   let item_1 = /**@type {TreeViewItem}*/ ($Casts.$to(item, TreeViewItem));
   item_1.m_collapse__boolean__void(false);
  }));
 }
 /** @nodts */
 m_reset__void() {
  TreeView.m_traverseItems__org_patternfly_component_HasItems__java_util_function_Consumer__void(this, Consumer.$adapt((/** TreeViewItem */ arg0) =>{
   let arg0_1 = /**@type {TreeViewItem}*/ ($Casts.$to(arg0, TreeViewItem));
   arg0_1.m_reset__void();
  }));
 }
 /** @nodts @return {TreeViewItem} */
 m_findItem__java_lang_String__org_patternfly_component_tree_TreeViewItem(/** ?string */ identifier) {
  return this.m_findItem__java_lang_String__java_util_LinkedHashMap__org_patternfly_component_tree_TreeViewItem_$p_org_patternfly_component_tree_TreeView(identifier, this.f_items__org_patternfly_component_tree_TreeView_);
 }
 /** @override @nodts @return {Iterator<TreeViewItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_tree_TreeView_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_tree_TreeView_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_tree_TreeView_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_tree_TreeView_.containsKey(identifier);
 }
 /** @nodts @return {TreeViewItem} */
 m_item__java_lang_String__org_patternfly_component_tree_TreeViewItem(/** ?string */ identifier) {
  return /**@type {TreeViewItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_tree_TreeView_.get(identifier), TreeViewItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_tree_TreeViewItem__void(/** TreeViewItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** TreeViewItem */ oldItem, /** TreeViewItem */ newItem) =>{
   let oldItem_1 = /**@type {TreeViewItem}*/ ($Casts.$to(oldItem, TreeViewItem));
   let newItem_1 = /**@type {TreeViewItem}*/ ($Casts.$to(newItem, TreeViewItem));
   this.f_items__org_patternfly_component_tree_TreeView_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_tree_TreeView_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {TreeViewItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_tree_TreeView_.remove(identifier), TreeViewItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_tree_TreeView_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_ul__org_patternfly_component_tree_TreeView_);
  let iterator = this.f_items__org_patternfly_component_tree_TreeView_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {TreeViewItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), TreeViewItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_tree_TreeView_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 static m_traverseItems__org_patternfly_component_HasItems__java_util_function_Consumer__void(/** HasItems<?, ?, TreeViewItem> */ items, /** Consumer<TreeViewItem> */ code) {
  TreeView.$clinit();
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {TreeViewItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), TreeViewItem));
   {
    code.m_accept__java_lang_Object__void(item);
    TreeView.m_traverseItems__org_patternfly_component_HasItems__java_util_function_Consumer__void(item, code);
   }
  }
 }
 /** @nodts @return {TreeViewItem} */
 m_findItem__java_lang_String__java_util_LinkedHashMap__org_patternfly_component_tree_TreeViewItem_$p_org_patternfly_component_tree_TreeView(/** ?string */ id, /** LinkedHashMap<?string, TreeViewItem> */ items) {
  let treeViewItem = /**@type {TreeViewItem}*/ ($Casts.$to(items.get(id), TreeViewItem));
  if ($Equality.$same(treeViewItem, null)) {
   for (let $iterator = items.entrySet().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let entry = /**@type {Entry<?string, TreeViewItem>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
    {
     treeViewItem = this.m_findItem__java_lang_String__java_util_LinkedHashMap__org_patternfly_component_tree_TreeViewItem_$p_org_patternfly_component_tree_TreeView(id, (/**@type {TreeViewItem}*/ ($Casts.$to(entry.getValue(), TreeViewItem))).f_items__org_patternfly_component_tree_TreeViewItem);
     if (!$Equality.$same(treeViewItem, null)) {
      break;
     }
    }
   }
  }
  return treeViewItem;
 }
 /** @nodts @return {List<TreeViewItem>} */
 m_parents__org_patternfly_component_tree_TreeViewItem__java_util_List_$p_org_patternfly_component_tree_TreeView(/** TreeViewItem */ item) {
  let parents = /**@type {!ArrayList<TreeViewItem>}*/ (ArrayList.$create__());
  this.m_addParent__org_patternfly_component_tree_TreeViewItem__java_util_List__void_$p_org_patternfly_component_tree_TreeView(item, parents);
  return parents;
 }
 /** @nodts */
 m_addParent__org_patternfly_component_tree_TreeViewItem__java_util_List__void_$p_org_patternfly_component_tree_TreeView(/** TreeViewItem */ item, /** List<TreeViewItem> */ parents) {
  if (!$Equality.$same(item, null) && !$Equality.$same(item.f_parent__org_patternfly_component_tree_TreeViewItem, null)) {
   parents.add(item.f_parent__org_patternfly_component_tree_TreeViewItem);
   this.m_addParent__org_patternfly_component_tree_TreeViewItem__java_util_List__void_$p_org_patternfly_component_tree_TreeView(item.f_parent__org_patternfly_component_tree_TreeViewItem, parents);
  }
 }
 /** @nodts */
 m_handleKeys__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_tree_TreeView(/** KeyboardEvent */ event) {
  let target = /**@type {HTMLElement}*/ ($Casts.$to(event.target, HTMLElement_$Overlay));
  if (!target.classList.contains(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes], j_l_String))))) {
   return;
  }
  let activeElement = DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement;
 }
 /** @nodts */
 m_handleKeysSelectable__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_tree_TreeView(/** KeyboardEvent */ event) {
  let target = /**@type {HTMLElement}*/ ($Casts.$to(event.target, HTMLElement_$Overlay));
  if (!target.classList.contains(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_node__org_patternfly_style_Classes], j_l_String))))) {
   return;
  }
  let activeElement = DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.activeElement;
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
 /** @final @override @nodts @return {TreeView} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tree_TreeView();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {TreeView} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, TreeViewItem> */ arg1) {
  return /**@type {TreeView}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), TreeView));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeView} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** TreeViewItem */ arg0) {
  return /**@type {TreeView}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {TreeViewItem}*/ ($Casts.$to(arg0, TreeViewItem))), TreeView));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeView} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** TreeViewItem */ arg0) {
  return this.m_add__org_patternfly_component_tree_TreeViewItem__org_patternfly_component_tree_TreeView(/**@type {TreeViewItem}*/ ($Casts.$to(arg0, TreeViewItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeView} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<TreeView, TreeViewItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_tree_TreeView(arg0);
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
 /** @final @override @nodts @return {TreeView} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<TreeView, TreeViewItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_tree_TreeView(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** TreeViewItem */ arg0, /** BiConsumer<TreeViewItem, TreeViewItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {TreeViewItem}*/ ($Casts.$to(arg0, TreeViewItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {TreeView} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<TreeView, TreeViewItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_tree_TreeView(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {TreeView} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_tree_TreeView(/** Iterable<T> */ arg0, /** j_u_function_Function<T, TreeViewItem> */ arg1) {
  return /**@type {TreeView}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), TreeView));
 }
 //Default method forwarding stub.
 /** @nodts @return {TreeView} */
 m_addItem__org_patternfly_component_tree_TreeViewItem__org_patternfly_component_tree_TreeView(/** TreeViewItem */ arg0) {
  return /**@type {TreeView}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), TreeView));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_tree_TreeViewItem__java_util_function_BiConsumer__void(/** TreeViewItem */ arg0, /** BiConsumer<TreeViewItem, TreeViewItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  TreeView.$clinit = () =>{};
  TreeView.$loadModules();
  BaseComponent.$clinit();
  HasItems.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeView;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  ScrollIntoViewOptions_$Overlay = goog.module.get('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  TreeViewItem = goog.module.get('org.patternfly.component.tree.TreeViewItem$impl');
  TreeViewType = goog.module.get('org.patternfly.component.tree.TreeViewType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  MultiSelectHandler = goog.module.get('org.patternfly.handler.MultiSelectHandler$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasItems.$markImplementor(TreeView);
Attachable.$markImplementor(TreeView);
$Util.$setClassMetadata(TreeView, 'org.patternfly.component.tree.TreeView');

exports = TreeView;

//# sourceMappingURL=TreeView.js.map
