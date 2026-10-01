goog.module('org.patternfly.showcase.component.TableComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let ResolveCallbackFn_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let EmptyState = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyState$impl');
let EmptyStateBody = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateBody$impl');
let EmptyStateFooter = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateFooter$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let Cell = goog.forwardDeclare('org.patternfly.component.table.Cell$impl');
let Table = goog.forwardDeclare('org.patternfly.component.table.Table$impl');
let TableCaption = goog.forwardDeclare('org.patternfly.component.table.TableCaption$impl');
let TableText = goog.forwardDeclare('org.patternfly.component.table.TableText$impl');
let TableType = goog.forwardDeclare('org.patternfly.component.table.TableType$impl');
let Tbody = goog.forwardDeclare('org.patternfly.component.table.Tbody$impl');
let Td = goog.forwardDeclare('org.patternfly.component.table.Td$impl');
let Th = goog.forwardDeclare('org.patternfly.component.table.Th$impl');
let Thead = goog.forwardDeclare('org.patternfly.component.table.Thead$impl');
let TitleCell = goog.forwardDeclare('org.patternfly.component.table.TitleCell$impl');
let Tr = goog.forwardDeclare('org.patternfly.component.table.Tr$impl');
let Wrap = goog.forwardDeclare('org.patternfly.component.table.Wrap$impl');
let ToggleGroup = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroup$impl');
let ToggleGroupItem = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let BuildingBlocks = goog.forwardDeclare('org.patternfly.showcase.BuildingBlocks$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let NotYetImplemented = goog.forwardDeclare('org.patternfly.showcase.component.NotYetImplemented$impl');
let Repositories = goog.forwardDeclare('org.patternfly.showcase.model.Repositories$impl');
let Repository = goog.forwardDeclare('org.patternfly.showcase.model.Repository$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

class TableComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TableComponent} */
 static $create__() {
  TableComponent.$clinit();
  let $instance = new TableComponent();
  $instance.$ctor__org_patternfly_showcase_component_TableComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TableComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'table'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('table-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let repositories = Repositories.m_repositories__int__java_util_List(3);
   let table = Table.m_table__org_patternfly_component_table_Table().m_addCaption__org_patternfly_component_table_TableCaption__org_patternfly_component_table_Table(/**@type {TableCaption}*/ ($Casts.$to(TableCaption.m_tableCaption__org_patternfly_component_table_TableCaption().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Simple table using composable components'), TableCaption))).m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(Thead.m_thead__org_patternfly_component_table_Thead().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-basic-head').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Repository.f_columns__org_patternfly_showcase_model_Repository, j_u_function_Function.$adapt(/**  @return {Cell<?>}*/ ((/** Tuple<?string, ?string> */ t) =>{
    let t_1 = /**@type {Tuple<?string, ?string>}*/ ($Casts.$to(t, Tuple));
    return /**@type {Th}*/ ($Casts.$to(Th.m_th__java_lang_String__org_patternfly_component_table_Th(/**@type {?string}*/ ($Casts.$to(t_1.f_key__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {?string}*/ ($Casts.$to(t_1.f_value__org_patternfly_core_Tuple, j_l_String))), Th));
   }))), Tr)))).m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(Tbody.m_tbody__org_patternfly_component_table_Tbody().m_addRows__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tbody(repositories, j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ repository) =>{
    let repository_1 = /**@type {Repository}*/ ($Casts.$to(repository, Repository));
    return /**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-basic-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(repository_1.f_id__org_patternfly_showcase_model_Repository)).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(0), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_1.f_name__org_patternfly_showcase_model_Repository), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(1), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_1.f_branches__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(2), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_1.f_pullRequests__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(3), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_1.f_workspaces__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(4), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject)))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repository_1.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_1.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))), Td))), Tr));
   }))));
   let toggleGroup = /**@type {ToggleGroup}*/ ($Casts.$to((/**@type {ToggleGroup}*/ ($Casts.$to((/**@type {ToggleGroup}*/ ($Casts.$to(ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_single__org_patternfly_component_SelectionMode).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('table-basic-default', 'Default').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_togglegroup_ToggleGroupItem(ComponentHandler.$adapt((/** Event */ e, /** ToggleGroupItem */ tgi) =>{
    let tgi_1 = /**@type {ToggleGroupItem}*/ ($Casts.$to(tgi, ToggleGroupItem));
    table.m_compact__boolean__org_jboss_elemento_TypedBuilder(false);
    table.m_noBorders__boolean__org_patternfly_component_table_Table(false);
   }))), ToggleGroup))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('table-basic-compact', 'Compact').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_togglegroup_ToggleGroupItem(ComponentHandler.$adapt((/** Event */ e_1, /** ToggleGroupItem */ tgi_2) =>{
    let tgi_3 = /**@type {ToggleGroupItem}*/ ($Casts.$to(tgi_2, ToggleGroupItem));
    table.m_compact__boolean__org_jboss_elemento_TypedBuilder(true);
    table.m_noBorders__boolean__org_patternfly_component_table_Table(false);
   }))), ToggleGroup))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('table-basic-default-compact-borderless', 'Compact borderless').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_togglegroup_ToggleGroupItem(ComponentHandler.$adapt((/** Event */ e_2, /** ToggleGroupItem */ tgi_4) =>{
    let tgi_5 = /**@type {ToggleGroupItem}*/ ($Casts.$to(tgi_4, ToggleGroupItem));
    table.m_compact__boolean__org_jboss_elemento_TypedBuilder(true);
    table.m_noBorders__boolean__org_patternfly_component_table_Table(true);
   }))), ToggleGroup));
   toggleGroup.m_select__java_lang_String__void('table-basic-default');
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(toggleGroup), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(table), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-row-wrapper', 'Custom row wrapper, header tooltips & popovers', Code.m_code__java_lang_String__java_lang_String('table-row-wrapper'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sort', 'Sortable & wrapping headers', Code.m_code__java_lang_String__java_lang_String('table-sort'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sort-custom', 'Sortable - custom control', Code.m_code__java_lang_String__java_lang_String('table-sort-custom'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sel-check', 'Selectable with checkbox', Code.m_code__java_lang_String__java_lang_String('table-sel-check'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let repositories_1 = Repositories.m_repositories__int__java_util_List(8);
   return /**@type {HTMLTableElement}*/ ($Casts.$to(Table.m_table__org_patternfly_component_table_Table().m_selectionMode__org_patternfly_component_SelectionMode__org_patternfly_component_table_Table(SelectionMode.f_multi__org_patternfly_component_SelectionMode).m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(Thead.m_thead__org_patternfly_component_table_Thead().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-basic-head').m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(Th.m_checkboxTh__org_patternfly_component_table_Th()), Tr))).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Repository.f_columns__org_patternfly_showcase_model_Repository, j_u_function_Function.$adapt(/**  @return {Cell<?>}*/ ((/** Tuple<?string, ?string> */ t_2) =>{
    let t_3 = /**@type {Tuple<?string, ?string>}*/ ($Casts.$to(t_2, Tuple));
    return /**@type {Th}*/ ($Casts.$to(Th.m_th__java_lang_String__org_patternfly_component_table_Th(/**@type {?string}*/ ($Casts.$to(t_3.f_key__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {?string}*/ ($Casts.$to(t_3.f_value__org_patternfly_core_Tuple, j_l_String))), Th));
   }))), Tr)))).m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(Tbody.m_tbody__org_patternfly_component_table_Tbody().m_addRows__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tbody(repositories_1, j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ repository_2) =>{
    let repository_3 = /**@type {Repository}*/ ($Casts.$to(repository_2, Repository));
    return /**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-basic-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(repository_3.f_id__org_patternfly_showcase_model_Repository)).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(Td.m_checkboxTd__org_patternfly_component_table_Td()), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(0), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_3.f_name__org_patternfly_showcase_model_Repository), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(1), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_3.f_branches__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(2), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_3.f_pullRequests__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(3), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_3.f_workspaces__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(4), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject)))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repository_3.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_3.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))), Td))), Tr));
   })))).m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sel-radio', 'Selectable radio input', Code.m_code__java_lang_String__java_lang_String('table-sel-radio'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sel-click', 'Row click handler, clickable rows', Code.m_code__java_lang_String__java_lang_String('table-sel-click'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let repositories_2 = Repositories.m_repositories__int__java_util_List(5);
   return /**@type {HTMLTableElement}*/ ($Casts.$to(Table.m_table__org_patternfly_component_table_Table().m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(Thead.m_thead__org_patternfly_component_table_Thead().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-sel-click-head').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Repository.f_columns__org_patternfly_showcase_model_Repository, j_u_function_Function.$adapt(/**  @return {Cell<?>}*/ ((/** Tuple<?string, ?string> */ t_4) =>{
    let t_5 = /**@type {Tuple<?string, ?string>}*/ ($Casts.$to(t_4, Tuple));
    return /**@type {Th}*/ ($Casts.$to(Th.m_th__java_lang_String__org_patternfly_component_table_Th(/**@type {?string}*/ ($Casts.$to(t_5.f_key__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {?string}*/ ($Casts.$to(t_5.f_value__org_patternfly_core_Tuple, j_l_String))), Th));
   }))), Tr)))).m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(Tbody.m_tbody__org_patternfly_component_table_Tbody().m_addRows__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tbody(repositories_2, j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ repository_4) =>{
    let repository_5 = /**@type {Repository}*/ ($Casts.$to(repository_4, Repository));
    return /**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-sel-click-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(repository_5.f_id__org_patternfly_showcase_model_Repository)).m_clickable__org_patternfly_component_table_Tr().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(0), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_5.f_name__org_patternfly_showcase_model_Repository), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(1), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_5.f_branches__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(2), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_5.f_pullRequests__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(3), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_5.f_workspaces__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(4), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject)))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repository_5.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_5.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))), Td))), Tr));
   })))).m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-actions', 'Actions', Code.m_code__java_lang_String__java_lang_String('table-actions'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let repositories_3 = Repositories.m_repositories__int__java_util_List(5);
   return /**@type {HTMLTableElement}*/ ($Casts.$to(Table.m_table__org_patternfly_component_table_Table().m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(Thead.m_thead__org_patternfly_component_table_Thead().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-actions-head').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Repository.f_columns__org_patternfly_showcase_model_Repository, j_u_function_Function.$adapt(/**  @return {Cell<?>}*/ ((/** Tuple<?string, ?string> */ t_6) =>{
    let t_7 = /**@type {Tuple<?string, ?string>}*/ ($Casts.$to(t_6, Tuple));
    return /**@type {Th}*/ ($Casts.$to(Th.m_th__java_lang_String__org_patternfly_component_table_Th(/**@type {?string}*/ ($Casts.$to(t_7.f_key__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {?string}*/ ($Casts.$to(t_7.f_value__org_patternfly_core_Tuple, j_l_String))), Th));
   }))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(Th.m_th__org_patternfly_component_table_Th().m_screenReader__java_lang_String__org_patternfly_component_table_Th('Primary action')), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(Th.m_th__org_patternfly_component_table_Th().m_screenReader__java_lang_String__org_patternfly_component_table_Th('Secondary action')), Tr)))).m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(Tbody.m_tbody__org_patternfly_component_table_Tbody().m_addRows__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tbody(repositories_3, j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ repository_6) =>{
    let repository_7 = /**@type {Repository}*/ ($Casts.$to(repository_6, Repository));
    return /**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-actions-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(repository_7.f_id__org_patternfly_showcase_model_Repository)).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(0), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_7.f_name__org_patternfly_showcase_model_Repository), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(1), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_7.f_branches__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(2), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_7.f_pullRequests__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(3), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_7.f_workspaces__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(4), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject)))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repository_7.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_7.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))), Td))), Tr))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** Tr */ tr) =>{
     let tr_1 = /**@type {Tr}*/ ($Casts.$to(tr, Tr));
     let primaryAction = Primitives.m_coerceDivision__int__int(repository_7.f_pullRequests__org_patternfly_showcase_model_Repository % 5) != 0;
     let secondaryAction = Primitives.m_coerceDivision__int__int(repository_7.f_pullRequests__org_patternfly_showcase_model_Repository % 2) != 0;
     if (primaryAction) {
      tr_1.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to((/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td('Primary action').m_action__org_patternfly_component_table_Td().m_wrap__org_patternfly_component_table_Wrap__org_jboss_elemento_TypedBuilder(Wrap.f_fitContent__org_patternfly_component_table_Wrap), Td))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TableText}*/ ($Casts.$to(TableText.m_tableText__org_patternfly_component_table_TableText().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_secondary__org_jboss_elemento_TypedBuilder(), Button))).m_text__java_lang_String__org_patternfly_component_button_Button('Start')), TableText))), Td)));
      tr_1.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__org_patternfly_component_table_Td().m_actions__org_patternfly_component_table_Td().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Dropdown}*/ ($Casts.$to(BuildingBlocks.m_mixedKebab__java_lang_String__org_patternfly_component_menu_Dropdown('table-actions').m_disabled__boolean__org_jboss_elemento_TypedBuilder(secondaryAction), Dropdown))), Td)));
     } else {
      tr_1.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(Td.m_td__org_patternfly_component_table_Td());
      tr_1.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(Td.m_td__org_patternfly_component_table_Td());
     }
    })), Tr));
   })))).m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-actions-overflow', 'Actions overflow', Code.m_code__java_lang_String__java_lang_String('table-actions-overflow'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-exp', 'Expandable', Code.m_code__java_lang_String__java_lang_String('table-exp'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-exp-compound', 'Compound expandable', Code.m_code__java_lang_String__java_lang_String('table-exp-compound'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-cell-width', 'Cell width, breakpoint modifiers', Code.m_code__java_lang_String__java_lang_String('table-cell-width'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-text', 'Controlling text', Code.m_code__java_lang_String__java_lang_String('table-text'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-text-mod', 'Modifiers with table text', Code.m_code__java_lang_String__java_lang_String('table-text-mod'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-empty', 'Empty state', Code.m_code__java_lang_String__java_lang_String('table-empty'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLTableElement}*/ ($Casts.$to(Table.m_table__org_patternfly_component_table_Table().m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(Thead.m_thead__org_patternfly_component_table_Thead().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-empty-head').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Repository.f_columns__org_patternfly_showcase_model_Repository, j_u_function_Function.$adapt(/**  @return {Cell<?>}*/ ((/** Tuple<?string, ?string> */ t_8) =>{
    let t_9 = /**@type {Tuple<?string, ?string>}*/ ($Casts.$to(t_8, Tuple));
    return /**@type {Th}*/ ($Casts.$to(Th.m_th__java_lang_String__org_patternfly_component_table_Th(/**@type {?string}*/ ($Casts.$to(t_9.f_key__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {?string}*/ ($Casts.$to(t_9.f_value__org_patternfly_core_Tuple, j_l_String))), Th));
   }))), Tr)))).m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(Tbody.m_tbody__org_patternfly_component_table_Tbody().m_empty__int__org_patternfly_component_emptystate_EmptyState__org_patternfly_component_table_Tbody(Repository.f_columns__org_patternfly_showcase_model_Repository.size(), (/**@type {EmptyState}*/ ($Casts.$to((/**@type {EmptyState}*/ ($Casts.$to(EmptyState.m_emptyState__org_patternfly_component_emptystate_EmptyState().m_size__org_patternfly_style_Size__org_patternfly_component_emptystate_EmptyState(Size.f_sm__org_patternfly_style_Size).m_headingLevel__int__org_patternfly_component_emptystate_EmptyState(2).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon()), EmptyState))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('No results found'), EmptyState))).m_addBody__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(/**@type {EmptyStateBody}*/ ($Casts.$to(EmptyStateBody.m_emptyStateBody__org_patternfly_component_emptystate_EmptyStateBody().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Clear all filters and try again.'), EmptyStateBody))).m_addFooter__org_patternfly_component_emptystate_EmptyStateFooter__org_patternfly_component_emptystate_EmptyState(/**@type {EmptyStateFooter}*/ ($Casts.$to(EmptyStateFooter.m_emptyStateFooter__org_patternfly_component_emptystate_EmptyStateFooter().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_text__java_lang_String__org_patternfly_component_button_Button('Clear all filters')), EmptyStateFooter))))).m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-fav', 'Favoritable (implemented with sortable)', Code.m_code__java_lang_String__java_lang_String('table-fav'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-tree-static', 'Tree table (static)', Code.m_code__java_lang_String__java_lang_String('table-tree-static'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let repositoryTr = j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ repository_8) =>{
    let repository_9 = /**@type {Repository}*/ ($Casts.$to(repository_8, Repository));
    return /**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-tree-static-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(repository_9.f_id__org_patternfly_showcase_model_Repository)).m_addTitleCell__org_patternfly_component_table_TitleCell__org_patternfly_component_table_Tr(/**@type {TitleCell}*/ ($Casts.$to((/**@type {TitleCell}*/ ($Casts.$to(TitleCell.m_titleCell__org_patternfly_component_table_TitleCell().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_9.f_name__org_patternfly_showcase_model_Repository), TitleCell))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** TitleCell */ titleCell) =>{
     let titleCell_1 = /**@type {TitleCell}*/ ($Casts.$to(titleCell, TitleCell));
     if (!$Equality.$same(repository_9.f_children__org_patternfly_showcase_model_Repository, null) && !repository_9.f_children__org_patternfly_showcase_model_Repository.isEmpty()) {
      (/**@type {TitleCell}*/ ($Casts.$to(titleCell_1.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_folder__org_patternfly_icon_PredefinedIcon()), TitleCell))).m_expandedIcon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_table_TitleCell(fas.m_folderOpen__org_patternfly_icon_PredefinedIcon());
     } else {
      titleCell_1.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_codeBranch__org_patternfly_icon_PredefinedIcon());
     }
    })), TitleCell))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(1), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_9.f_branches__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(2), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_9.f_pullRequests__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(3), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_9.f_workspaces__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(4), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject)))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repository_9.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_9.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))), Td))), Tr));
   }));
   let repositories_4 = Repositories.m_repositories__int__int__java_util_List(5, 2);
   return /**@type {HTMLTableElement}*/ ($Casts.$to(Table.m_table__org_patternfly_component_table_TableType__org_patternfly_component_table_Table(TableType.f_treeTable__org_patternfly_component_table_TableType).m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(Thead.m_thead__org_patternfly_component_table_Thead().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-tree-static-head').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Repository.f_columns__org_patternfly_showcase_model_Repository, j_u_function_Function.$adapt(/**  @return {Cell<?>}*/ ((/** Tuple<?string, ?string> */ t_10) =>{
    let t_11 = /**@type {Tuple<?string, ?string>}*/ ($Casts.$to(t_10, Tuple));
    return /**@type {Th}*/ ($Casts.$to(Th.m_th__java_lang_String__org_patternfly_component_table_Th(/**@type {?string}*/ ($Casts.$to(t_11.f_key__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {?string}*/ ($Casts.$to(t_11.f_value__org_patternfly_core_Tuple, j_l_String))), Th));
   }))), Tr)))).m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(Tbody.m_tbody__org_patternfly_component_table_Tbody().m_addRows__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tbody(repositories_4, j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ r0) =>{
    let r0_1 = /**@type {Repository}*/ ($Casts.$to(r0, Repository));
    return (/**@type {Tr}*/ ($Casts.$to(repositoryTr.m_apply__java_lang_Object__java_lang_Object(r0_1), Tr))).m_addChildren__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tr(r0_1.f_children__org_patternfly_showcase_model_Repository, j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ r1) =>{
     let r1_1 = /**@type {Repository}*/ ($Casts.$to(r1, Repository));
     return (/**@type {Tr}*/ ($Casts.$to(repositoryTr.m_apply__java_lang_Object__java_lang_Object(r1_1), Tr))).m_addChildren__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tr(r1_1.f_children__org_patternfly_showcase_model_Repository, repositoryTr);
    })));
   })))).m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-tree-async', 'Tree table (async)', Code.m_code__java_lang_String__java_lang_String('table-tree-async'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let repositoryTr_1 = j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ repository_10) =>{
    let repository_11 = /**@type {Repository}*/ ($Casts.$to(repository_10, Repository));
    return /**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-tree-async-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(repository_11.f_id__org_patternfly_showcase_model_Repository)).m_addTitleCell__org_patternfly_component_table_TitleCell__org_patternfly_component_table_Tr(/**@type {TitleCell}*/ ($Casts.$to((/**@type {TitleCell}*/ ($Casts.$to(TitleCell.m_titleCell__org_patternfly_component_table_TitleCell().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_11.f_name__org_patternfly_showcase_model_Repository), TitleCell))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** TitleCell */ titleCell_2) =>{
     let titleCell_3 = /**@type {TitleCell}*/ ($Casts.$to(titleCell_2, TitleCell));
     if (!$Equality.$same(repository_11.f_children__org_patternfly_showcase_model_Repository, null) && !repository_11.f_children__org_patternfly_showcase_model_Repository.isEmpty()) {
      (/**@type {TitleCell}*/ ($Casts.$to(titleCell_3.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_folder__org_patternfly_icon_PredefinedIcon()), TitleCell))).m_expandedIcon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_table_TitleCell(fas.m_folderOpen__org_patternfly_icon_PredefinedIcon());
     } else {
      titleCell_3.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_codeBranch__org_patternfly_icon_PredefinedIcon());
     }
    })), TitleCell))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(1), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_11.f_branches__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(2), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_11.f_pullRequests__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(3), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repository_11.f_workspaces__org_patternfly_showcase_model_Repository)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td(/**@type {?string}*/ ($Casts.$to((/**@type {Tuple<?string, ?string>}*/ ($Casts.$to(Repository.f_columns__org_patternfly_showcase_model_Repository.getAtIndex(4), Tuple))).f_value__org_patternfly_core_Tuple, j_l_String))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject)))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repository_11.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(repository_11.f_lastCommit__org_patternfly_showcase_model_Repository.toISOString()), HTMLElementBuilder))), Td))), Tr));
   }));
   let repositoryChildren = j_u_function_Function.$adapt(/**  @return {j_u_function_Function<Tr, Promise<Iterable<Tr>>>}*/ ((/** Repository */ repository_12) =>{
    let repository_13 = /**@type {Repository}*/ ($Casts.$to(repository_12, Repository));
    return j_u_function_Function.$adapt(/**  @return {Promise<Iterable<Tr>>}*/ ((/** Tr */ tr_2) =>{
     let tr_3 = /**@type {Tr}*/ ($Casts.$to(tr_2, Tr));
     return /**@type {!Promise<!Iterable<!Tr>>}*/ (new Promise((/** function(?):void */ resolve, /** function(!*):void */ reject) =>{
      let boom = Math.random() < 0.25;
      let delay = Random.$create__().m_nextInt__int__int(2000);
      DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
       if (boom) {
        reject('Random error');
       } else {
        ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(resolve, /**@type {List<Tr>}*/ ($Casts.$to((/**@type {Stream<Tr>}*/ (repository_13.f_children__org_patternfly_showcase_model_Repository.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(repositoryTr_1))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tr, *, List<Tr>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))));
       }
      }, delay, []);
     }));
    }));
   }));
   let table_1 = Table.m_table__org_patternfly_component_table_TableType__org_patternfly_component_table_Table(TableType.f_treeTable__org_patternfly_component_table_TableType);
   let repositories_5 = Repositories.m_repositories__int__int__java_util_List(5, 1);
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Reset all').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String('mb-sm')], j_l_String))), Button))).m_primary__org_jboss_elemento_TypedBuilder(), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_3, /** Button */ b) =>{
    let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
    table_1.m_reset__void();
   }))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(table_1.m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(Thead.m_thead__org_patternfly_component_table_Thead().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('table-tree-async-head').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Repository.f_columns__org_patternfly_showcase_model_Repository, j_u_function_Function.$adapt(/**  @return {Cell<?>}*/ ((/** Tuple<?string, ?string> */ t_12) =>{
    let t_13 = /**@type {Tuple<?string, ?string>}*/ ($Casts.$to(t_12, Tuple));
    return /**@type {Th}*/ ($Casts.$to(Th.m_th__java_lang_String__org_patternfly_component_table_Th(/**@type {?string}*/ ($Casts.$to(t_13.f_key__org_patternfly_core_Tuple, j_l_String))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {?string}*/ ($Casts.$to(t_13.f_value__org_patternfly_core_Tuple, j_l_String))), Th));
   }))), Tr)))).m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(Tbody.m_tbody__org_patternfly_component_table_Tbody().m_addRows__java_lang_Iterable__java_util_function_Function__org_patternfly_component_table_Tbody(repositories_5, j_u_function_Function.$adapt(/**  @return {Tr}*/ ((/** Repository */ repository_14) =>{
    let repository_15 = /**@type {Repository}*/ ($Casts.$to(repository_14, Repository));
    return (/**@type {Tr}*/ ($Casts.$to(repositoryTr_1.m_apply__java_lang_Object__java_lang_Object(repository_15), Tr))).m_addChildren__java_util_function_Function__org_patternfly_component_table_Tr(/**@type {j_u_function_Function<Tr, Promise<Iterable<Tr>>>}*/ ($Casts.$to(repositoryChildren.m_apply__java_lang_Object__java_lang_Object(repository_15), /**@type {Function}*/ (j_u_function_Function))));
   }))))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-tree-no-inset', 'Flat tree table with no inset', Code.m_code__java_lang_String__java_lang_String('table-tree-no-inset'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-draggable', 'Draggable row table', Code.m_code__java_lang_String__java_lang_String('table-draggable'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sticky-mod', 'Sticky table modifiers', Code.m_code__java_lang_String__java_lang_String('table-sticky-mod'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sticky-col', 'Sticky column', Code.m_code__java_lang_String__java_lang_String('table-sticky-col'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sticky-col-left', 'Multiple left-aligned sticky columns', Code.m_code__java_lang_String__java_lang_String('table-sticky-col-left'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sticky-col-right', 'Multiple right-aligned sticky columns', Code.m_code__java_lang_String__java_lang_String('table-sticky-col-right'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-sticky-col-header', 'Sticky columns and header', Code.m_code__java_lang_String__java_lang_String('table-sticky-col-header'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-nested-column-headers', 'Nested column headers', Code.m_code__java_lang_String__java_lang_String('table-nested-column-headers'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-nested-column-headers-exp', 'Nested column headers and expandable rows', Code.m_code__java_lang_String__java_lang_String('table-nested-column-headers-exp'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-nested-expandable', 'Expandable with nested table', Code.m_code__java_lang_String__java_lang_String('table-nested-expandable'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-nested-sticky-header', 'Nested sticky header', Code.m_code__java_lang_String__java_lang_String('table-nested-sticky-header'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-striped', 'Striped', Code.m_code__java_lang_String__java_lang_String('table-striped'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-striped-expandable', 'Striped expandable', Code.m_code__java_lang_String__java_lang_String('table-striped-expandable'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-striped-tbody', 'Striped multiple tobdy', Code.m_code__java_lang_String__java_lang_String('table-striped-tbody'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('table-striped-tr', 'Striped tr', Code.m_code__java_lang_String__java_lang_String('table-striped-tr'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented().m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Table));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Table), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TableText), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TableCaption), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Tbody), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Td), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Th), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Thead), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Tr), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Wrap), Type.f_modifier__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  TableComponent.$clinit = () =>{};
  TableComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TableComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  ResolveCallbackFn_$Overlay = goog.module.get('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  List = goog.module.get('java.util.List$impl');
  Random = goog.module.get('java.util.Random$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  EmptyState = goog.module.get('org.patternfly.component.emptystate.EmptyState$impl');
  EmptyStateBody = goog.module.get('org.patternfly.component.emptystate.EmptyStateBody$impl');
  EmptyStateFooter = goog.module.get('org.patternfly.component.emptystate.EmptyStateFooter$impl');
  Dropdown = goog.module.get('org.patternfly.component.menu.Dropdown$impl');
  Table = goog.module.get('org.patternfly.component.table.Table$impl');
  TableCaption = goog.module.get('org.patternfly.component.table.TableCaption$impl');
  TableText = goog.module.get('org.patternfly.component.table.TableText$impl');
  TableType = goog.module.get('org.patternfly.component.table.TableType$impl');
  Tbody = goog.module.get('org.patternfly.component.table.Tbody$impl');
  Td = goog.module.get('org.patternfly.component.table.Td$impl');
  Th = goog.module.get('org.patternfly.component.table.Th$impl');
  Thead = goog.module.get('org.patternfly.component.table.Thead$impl');
  TitleCell = goog.module.get('org.patternfly.component.table.TitleCell$impl');
  Tr = goog.module.get('org.patternfly.component.table.Tr$impl');
  Wrap = goog.module.get('org.patternfly.component.table.Wrap$impl');
  ToggleGroup = goog.module.get('org.patternfly.component.togglegroup.ToggleGroup$impl');
  ToggleGroupItem = goog.module.get('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  BuildingBlocks = goog.module.get('org.patternfly.showcase.BuildingBlocks$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  NotYetImplemented = goog.module.get('org.patternfly.showcase.component.NotYetImplemented$impl');
  Repositories = goog.module.get('org.patternfly.showcase.model.Repositories$impl');
  Repository = goog.module.get('org.patternfly.showcase.model.Repository$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(TableComponent, 'org.patternfly.showcase.component.TableComponent');

exports = TableComponent;

//# sourceMappingURL=TableComponent.js.map
