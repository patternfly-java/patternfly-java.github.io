goog.module('org.patternfly.component.table.Table$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let HTMLTableSectionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let TableCaption = goog.forwardDeclare('org.patternfly.component.table.TableCaption$impl');
let TableType = goog.forwardDeclare('org.patternfly.component.table.TableType$impl');
let Tbody = goog.forwardDeclare('org.patternfly.component.table.Tbody$impl');
let Th = goog.forwardDeclare('org.patternfly.component.table.Th$impl');
let Thead = goog.forwardDeclare('org.patternfly.component.table.Thead$impl');
let Tr = goog.forwardDeclare('org.patternfly.component.table.Tr$impl');
let TreeViewGridBreakpoint = goog.forwardDeclare('org.patternfly.component.table.TreeViewGridBreakpoint$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let MultiSelectHandler = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let GridBreakpoint = goog.forwardDeclare('org.patternfly.style.GridBreakpoint$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLTableElement, Table>}
 * @implements {Compact<HTMLTableElement, Table>}
 * @implements {Plain<HTMLTableElement, Table>}
 * @implements {Attachable}
 */
class Table extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TableType} @nodts*/
  this.f_type__org_patternfly_component_table_Table_;
  /**@type {List<SelectHandler<Tr>>} @nodts*/
  this.f_selectHandler__org_patternfly_component_table_Table_;
  /**@type {List<MultiSelectHandler<Table, Tr>>} @nodts*/
  this.f_multiSelectHandler__org_patternfly_component_table_Table_;
  /**@type {SelectionMode} @nodts*/
  this.f_selectionMode__org_patternfly_component_table_Table_;
  /**@type {Thead} @nodts*/
  this.f_thead__org_patternfly_component_table_Table_;
  /**@type {Tbody} @nodts*/
  this.f_tbody__org_patternfly_component_table_Table_;
 }
 /** @nodts @return {Table} */
 static m_table__org_patternfly_component_table_Table() {
  Table.$clinit();
  return Table.$create__org_patternfly_component_table_TableType(TableType.f_table__org_patternfly_component_table_TableType);
 }
 /** @nodts @return {Table} */
 static m_table__org_patternfly_component_table_TableType__org_patternfly_component_table_Table(/** TableType */ type) {
  Table.$clinit();
  return Table.$create__org_patternfly_component_table_TableType(type);
 }
 /** @nodts @return {!Table} */
 static $create__org_patternfly_component_table_TableType(/** TableType */ type) {
  Table.$clinit();
  let $instance = new Table();
  $instance.$ctor__org_patternfly_component_table_Table__org_patternfly_component_table_TableType__void(type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_Table__org_patternfly_component_table_TableType__void(/** TableType */ type) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Table__org_patternfly_component_ComponentType, /**@type {HTMLTableElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableElement>}*/ ($Casts.$to(Elements.m_table__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, type.f_role__org_patternfly_component_table_TableType), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_type__org_patternfly_component_table_Table_ = type;
  this.f_selectHandler__org_patternfly_component_table_Table_ = (/**@type {!ArrayList<SelectHandler<Tr>>}*/ (ArrayList.$create__()));
  this.f_multiSelectHandler__org_patternfly_component_table_Table_ = (/**@type {!ArrayList<MultiSelectHandler<Table, Tr>>}*/ (ArrayList.$create__()));
  if ($Equality.$same(type, TableType.f_table__org_patternfly_component_table_TableType)) {
   this.m_gridBreakpoint__org_patternfly_style_GridBreakpoint__org_patternfly_component_table_Table(GridBreakpoint.f_gridMd__org_patternfly_style_GridBreakpoint);
  } else if ($Equality.$same(type, TableType.f_treeTable__org_patternfly_component_table_TableType)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes)], j_l_String)));
   this.m_treeViewGridBreakpoint__org_patternfly_component_table_TreeViewGridBreakpoint__org_patternfly_component_table_Table(TreeViewGridBreakpoint.f_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint);
  }
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if ($Equality.$same(this.f_type__org_patternfly_component_table_Table_, TableType.f_treeTable__org_patternfly_component_table_TableType)) {
   if (!$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null)) {
    for (let $iterator = this.f_tbody__org_patternfly_component_table_Table_.f_items__org_patternfly_component_table_Tbody.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let tr = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
     {
      tr.m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_level__org_patternfly_core_Aria, 1);
      tr.m_finishChildren__void_$pp_org_patternfly_component_table();
     }
    }
   }
   let selector = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))).m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_treeView__org_patternfly_style_Classes))).m_desc__org_jboss_elemento_By__org_jboss_elemento_By(By.m_element__java_lang_String__org_jboss_elemento_By('td'));
   for (let $iterator_1 = this.m_querySelectorAll__org_jboss_elemento_By__java_lang_Iterable(selector).m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let td = /**@type {HTMLElement}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), HTMLElement_$Overlay));
    {
     Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(td, Attributes.f_role__org_patternfly_core_Attributes, Roles.f_gridcell__org_patternfly_core_Roles);
    }
   }
  }
 }
 /** @nodts @return {Table} */
 m_addCaption__org_patternfly_component_table_TableCaption__org_patternfly_component_table_Table(/** TableCaption */ caption) {
  return /**@type {Table}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(caption), Table));
 }
 /** @nodts @return {Table} */
 m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(/** Thead */ head) {
  this.f_thead__org_patternfly_component_table_Table_ = head;
  return /**@type {Table}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(head), Table));
 }
 /** @nodts @return {Table} */
 m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(/** Tbody */ tbody) {
  return this.m_add__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(tbody);
 }
 /** @nodts @return {Table} */
 m_add__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(/** Tbody */ tbody) {
  this.f_tbody__org_patternfly_component_table_Table_ = tbody;
  return /**@type {Table}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(tbody.m_element__elemental2_dom_HTMLElement(), HTMLTableSectionElement_$Overlay))), Table));
 }
 /** @nodts @return {Table} */
 m_stickyHeader__org_patternfly_component_table_Table() {
  return this.m_stickyHeader__boolean__org_patternfly_component_table_Table(true);
 }
 /** @nodts @return {Table} */
 m_stickyHeader__boolean__org_patternfly_component_table_Table(/** boolean */ stickyHeader) {
  return /**@type {Table}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_table_Table(), /**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), Classes.f_stickyHeader__org_patternfly_style_Classes, stickyHeader), Table));
 }
 /** @nodts @return {Table} */
 m_noBorders__org_patternfly_component_table_Table() {
  return this.m_noBorders__boolean__org_patternfly_component_table_Table(true);
 }
 /** @nodts @return {Table} */
 m_noBorders__boolean__org_patternfly_component_table_Table(/** boolean */ borders) {
  return /**@type {Table}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_table_Table(), /**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), Classes.f_noBorderRows__org_patternfly_style_Classes, borders), Table));
 }
 /** @nodts @return {Table} */
 m_gridBreakpoint__org_patternfly_style_GridBreakpoint__org_patternfly_component_table_Table(/** GridBreakpoint */ breakpoint) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), 'gridBreakpoint', breakpoint, GridBreakpoint.f_gridMd__org_patternfly_style_GridBreakpoint, /**@type {!Array<GridBreakpoint>}*/ ($Arrays.$stampType([GridBreakpoint.f_gridLg__org_patternfly_style_GridBreakpoint, GridBreakpoint.f_gridXl__org_patternfly_style_GridBreakpoint, GridBreakpoint.f_gird2xl__org_patternfly_style_GridBreakpoint], GridBreakpoint)))) {
   TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), breakpoint, GridBreakpoint.m_values__arrayOf_org_patternfly_style_GridBreakpoint());
  }
  return this;
 }
 /** @nodts @return {Table} */
 m_selectionMode__org_patternfly_component_SelectionMode__org_patternfly_component_table_Table(/** SelectionMode */ selectionMode) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), 'selectionMode', selectionMode, SelectionMode.f_single__org_patternfly_component_SelectionMode, /**@type {!Array<SelectionMode>}*/ ($Arrays.$stampType([SelectionMode.f_multi__org_patternfly_component_SelectionMode], SelectionMode)))) {
   this.f_selectionMode__org_patternfly_component_table_Table_ = selectionMode;
  }
  return this;
 }
 /** @nodts @return {Table} */
 m_treeViewGridBreakpoint__org_patternfly_component_table_TreeViewGridBreakpoint__org_patternfly_component_table_Table(/** TreeViewGridBreakpoint */ breakpoint) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), 'treeViewGridBreakpoint', breakpoint, TreeViewGridBreakpoint.f_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint, /**@type {!Array<TreeViewGridBreakpoint>}*/ ($Arrays.$stampType([TreeViewGridBreakpoint.f_gridLg__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.f_gridXl__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.f_gird2xl__org_patternfly_component_table_TreeViewGridBreakpoint], TreeViewGridBreakpoint)))) {
   TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), breakpoint, TreeViewGridBreakpoint.m_values__arrayOf_org_patternfly_component_table_TreeViewGridBreakpoint());
  }
  return this;
 }
 /** @nodts @return {Table} */
 m_that__org_patternfly_component_table_Table() {
  return this;
 }
 /** @nodts @return {Table} */
 m_ariaLabel__java_lang_String__org_patternfly_component_table_Table(/** ?string */ label) {
  return /**@type {Table}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Table));
 }
 /** @nodts @return {Table} */
 m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_table_Table(/** SelectHandler<Tr> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_table_Table_.add(selectHandler);
  return this;
 }
 /** @nodts @return {Table} */
 m_onMultiSelect__org_patternfly_handler_MultiSelectHandler__org_patternfly_component_table_Table(/** MultiSelectHandler<Table, Tr> */ selectHandler) {
  this.f_multiSelectHandler__org_patternfly_component_table_Table_.add(selectHandler);
  return this;
 }
 /** @nodts */
 m_reset__void() {
  if (!$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null)) {
   for (let $iterator = this.f_tbody__org_patternfly_component_table_Table_.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let tr = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
    {
     tr.m_reset__void();
    }
   }
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_component_table_Tr__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_table_Tr_$p_org_patternfly_component_table_Table(identifier), true, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ selected) {
  this.m_select__org_patternfly_component_table_Tr__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_table_Tr_$p_org_patternfly_component_table_Table(identifier), selected, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__boolean__void(/** ?string */ identifier, /** boolean */ selected, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_table_Tr__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_table_Tr_$p_org_patternfly_component_table_Table(identifier), selected, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_table_Tr__void(/** Tr */ item) {
  this.m_select__org_patternfly_component_table_Tr__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_table_Tr__boolean__void(/** Tr */ item, /** boolean */ selected) {
  this.m_select__org_patternfly_component_table_Tr__boolean__boolean__void(item, selected, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_table_Tr__boolean__boolean__void(/** Tr */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null) && !$Equality.$same(this.f_selectionMode__org_patternfly_component_table_Table_, null) && !$Equality.$same(item, null)) {
   if ($Equality.$same(this.f_selectionMode__org_patternfly_component_table_Table_, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
    if (selected) {
     this.m_unselectAll__void_$p_org_patternfly_component_table_Table();
    }
    item.m_markSelected__boolean__void_$pp_org_patternfly_component_table(selected);
    if (fireEvent) {
     this.m_fireSingleSelection__org_patternfly_component_table_Tr__boolean__void_$p_org_patternfly_component_table_Table(item, selected);
    }
   } else if ($Equality.$same(this.f_selectionMode__org_patternfly_component_table_Table_, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
    item.m_markSelected__boolean__void_$pp_org_patternfly_component_table(selected);
    if (!$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null)) {
     let checkbox = /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_data__java_lang_String__org_jboss_elemento_By(Th.f_CHECKBOX_DATA_MARKER__org_patternfly_component_table_Th)), HTMLInputElement_$Overlay));
     if (!$Equality.$same(checkbox, null)) {
      if (this.m_selectedItems__java_util_List().isEmpty()) {
       checkbox.checked = false;
       checkbox.indeterminate = false;
      } else if (this.m_selectedItems__java_util_List().size() == this.f_tbody__org_patternfly_component_table_Table_.m_items__java_util_List().size()) {
       checkbox.checked = true;
       checkbox.indeterminate = false;
      } else {
       checkbox.checked = false;
       checkbox.indeterminate = true;
      }
     }
    }
    if (fireEvent) {
     this.m_fireMultiSelection__void_$p_org_patternfly_component_table_Table();
    }
   }
  }
 }
 /** @nodts */
 m_selectAll__void() {
  this.m_selectAll__boolean__void(true);
 }
 /** @nodts */
 m_selectAll__boolean__void(/** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null) && $Equality.$same(this.f_selectionMode__org_patternfly_component_table_Table_, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
   for (let $iterator = this.f_tbody__org_patternfly_component_table_Table_.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let item = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
    {
     item.m_markSelected__boolean__void_$pp_org_patternfly_component_table(true);
     if (fireEvent) {
      this.m_fireMultiSelection__void_$p_org_patternfly_component_table_Table();
     }
    }
   }
  }
 }
 /** @nodts */
 m_selectNone__void() {
  this.m_selectNone__boolean__void(true);
 }
 /** @nodts */
 m_selectNone__boolean__void(/** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null) && !$Equality.$same(this.f_selectionMode__org_patternfly_component_table_Table_, null)) {
   if ($Equality.$same(this.f_selectionMode__org_patternfly_component_table_Table_, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
    let selectedItems = fireEvent ? this.m_selectedItems__java_util_List() : /**@type {List<Tr>}*/ (Collections.m_emptyList__java_util_List());
    this.m_unselectAll__void_$p_org_patternfly_component_table_Table();
    if (fireEvent) {
     if (!selectedItems.isEmpty()) {
      this.m_fireSingleSelection__org_patternfly_component_table_Tr__boolean__void_$p_org_patternfly_component_table_Table(/**@type {Tr}*/ ($Casts.$to(selectedItems.getAtIndex(0), Tr)), false);
     }
    }
   } else if ($Equality.$same(this.f_selectionMode__org_patternfly_component_table_Table_, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
    this.m_unselectAll__void_$p_org_patternfly_component_table_Table();
    if (fireEvent) {
     this.m_fireMultiSelection__void_$p_org_patternfly_component_table_Table();
    }
   }
  }
 }
 /** @nodts @return {List<Tr>} */
 m_selectedItems__java_util_List() {
  let selectedItems = /**@type {!ArrayList<Tr>}*/ (ArrayList.$create__());
  if (!$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null)) {
   for (let $iterator = this.f_tbody__org_patternfly_component_table_Table_.m_items__java_util_List().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let tr = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
    {
     if (tr.m_isSelected__boolean_$pp_org_patternfly_component_table()) {
      selectedItems.add(tr);
     }
    }
   }
  }
  return selectedItems;
 }
 /** @nodts @return {Thead} */
 m_thead__org_patternfly_component_table_Thead() {
  return this.f_thead__org_patternfly_component_table_Table_;
 }
 /** @nodts @return {Tbody} */
 m_tbody__org_patternfly_component_table_Tbody() {
  return this.f_tbody__org_patternfly_component_table_Table_;
 }
 /** @nodts @return {number} */
 m_columns__int_$pp_org_patternfly_component_table() {
  let columns = 0;
  if ((/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).rows.length > 0) {
   let row = /**@type {HTMLTableRowElement}*/ ($Casts.$to((/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).rows.item(0), HTMLTableRowElement_$Overlay));
   let cells = row.cells;
   for (let i = 0; i < row.cells.length; i = i + 1 | 0) {
    columns = columns + (/**@type {HTMLTableCellElement}*/ ($Casts.$to(cells.item(i), HTMLTableCellElement_$Overlay))).colSpan | 0;
   }
  }
  return columns;
 }
 /** @nodts @return {Tr} */
 m_findItem__java_lang_String__org_patternfly_component_table_Tr_$p_org_patternfly_component_table_Table(/** ?string */ identifier) {
  return !$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null) ? /**@type {Tr}*/ ($Casts.$to(this.f_tbody__org_patternfly_component_table_Table_.f_items__org_patternfly_component_table_Tbody.get(identifier), Tr)) : null;
 }
 /** @nodts */
 m_fireSingleSelection__org_patternfly_component_table_Tr__boolean__void_$p_org_patternfly_component_table_Table(/** Tr */ item, /** boolean */ selected) {
  this.f_selectHandler__org_patternfly_component_table_Table_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<Tr> */ sh) =>{
   let sh_1 = /**@type {SelectHandler<Tr>}*/ ($Casts.$to(sh, /**@type {Function}*/ (SelectHandler)));
   sh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
  }));
 }
 /** @nodts */
 m_fireMultiSelection__void_$p_org_patternfly_component_table_Table() {
  this.f_multiSelectHandler__org_patternfly_component_table_Table_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** MultiSelectHandler<Table, Tr> */ msh) =>{
   let msh_1 = /**@type {MultiSelectHandler<Table, Tr>}*/ ($Casts.$to(msh, /**@type {Function}*/ (MultiSelectHandler)));
   msh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__java_util_List__void(new Event(''), this, this.m_selectedItems__java_util_List());
  }));
 }
 /** @nodts */
 m_unselectAll__void_$p_org_patternfly_component_table_Table() {
  if (!$Equality.$same(this.f_tbody__org_patternfly_component_table_Table_, null)) {
   for (let $iterator = this.f_tbody__org_patternfly_component_table_Table_.f_items__org_patternfly_component_table_Tbody.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let row = /**@type {Tr}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tr));
    {
     row.m_markSelected__boolean__void_$pp_org_patternfly_component_table(false);
    }
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Table} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_table_Table();
 }
 //Bridge method.
 /** @final @override @nodts @return {Table} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {Table}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), Table));
 }
 //Bridge method.
 /** @final @override @nodts @return {Table} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Table}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Table));
 }
 //Bridge method.
 /** @final @override @nodts @return {Table} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {Table}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Table));
 }
 //Bridge method.
 /** @final @override @nodts @return {Table} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Table}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Table));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Table} */
 m_compact__org_patternfly_component_table_Table() {
  return /**@type {Table}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), Table));
 }
 //Default method forwarding stub.
 /** @nodts @return {Table} */
 m_compact__boolean__org_patternfly_component_table_Table(/** boolean */ arg0) {
  return /**@type {Table}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Table));
 }
 //Default method forwarding stub.
 /** @nodts @return {Table} */
 m_plain__org_patternfly_component_table_Table() {
  return /**@type {Table}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Table));
 }
 //Default method forwarding stub.
 /** @nodts @return {Table} */
 m_plain__boolean__org_patternfly_component_table_Table(/** boolean */ arg0) {
  return /**@type {Table}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Table));
 }
 /** @nodts */
 static $clinit() {
  Table.$clinit = () =>{};
  Table.$loadModules();
  BaseComponent.$clinit();
  Compact.$clinit();
  Plain.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Table;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  HTMLTableSectionElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  TableType = goog.module.get('org.patternfly.component.table.TableType$impl');
  Th = goog.module.get('org.patternfly.component.table.Th$impl');
  Tr = goog.module.get('org.patternfly.component.table.Tr$impl');
  TreeViewGridBreakpoint = goog.module.get('org.patternfly.component.table.TreeViewGridBreakpoint$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  MultiSelectHandler = goog.module.get('org.patternfly.handler.MultiSelectHandler$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  GridBreakpoint = goog.module.get('org.patternfly.style.GridBreakpoint$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Compact.$markImplementor(Table);
Plain.$markImplementor(Table);
Attachable.$markImplementor(Table);
$Util.$setClassMetadata(Table, 'org.patternfly.component.table.Table');

exports = Table;

//# sourceMappingURL=Table.js.map
