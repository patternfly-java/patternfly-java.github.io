goog.module('org.patternfly.extension.finder.FinderColumn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAsyncItems = goog.require('org.patternfly.component.HasAsyncItems$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const Ordered = goog.require('org.patternfly.component.Ordered$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const FinderSubComponent = goog.require('org.patternfly.extension.finder.FinderSubComponent$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BiPredicate = goog.forwardDeclare('java.util.function.BiPredicate$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ElementContainerMethods = goog.forwardDeclare('org.jboss.elemento.ElementContainerMethods$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Role = goog.forwardDeclare('org.jboss.elemento.Role$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.component.AsyncItems$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let SearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.SearchInput$impl');
let AsyncStatus = goog.forwardDeclare('org.patternfly.core.AsyncStatus$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Timeouts = goog.forwardDeclare('org.patternfly.core.Timeouts$impl');
let Finder = goog.forwardDeclare('org.patternfly.extension.finder.Finder$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let FinderColumnHeader = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumnHeader$impl');
let FinderColumnSearch = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumnSearch$impl');
let FinderItem = goog.forwardDeclare('org.patternfly.extension.finder.FinderItem$impl');
let PreviewHandler = goog.forwardDeclare('org.patternfly.extension.finder.PreviewHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FinderSubComponent<HTMLElement, FinderColumn>}
 * @implements {ComponentContext<HTMLElement, FinderColumn>}
 * @implements {HasAsyncItems<HTMLElement, FinderColumn, FinderItem>}
 * @implements {HasIdentifier<HTMLElement, FinderColumn>}
 * @implements {Ordered<HTMLElement, FinderColumn, FinderItem>}
 */
class FinderColumn extends FinderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Finder} @nodts*/
  this.f_finder__org_patternfly_extension_finder_FinderColumn;
  /**@type {PreviewHandler} @nodts*/
  this.f_previewHandler__org_patternfly_extension_finder_FinderColumn;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_extension_finder_FinderColumn_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_extension_finder_FinderColumn_;
  /**@type {Map<?string, FinderItem>} @nodts*/
  this.f_items__org_patternfly_extension_finder_FinderColumn_;
  /**@type {AurHandler<FinderColumn, FinderItem>} @nodts*/
  this.f_aur__org_patternfly_extension_finder_FinderColumn_;
  /**@type {List<SelectHandler<FinderItem>>} @nodts*/
  this.f_selectHandler__org_patternfly_extension_finder_FinderColumn_;
  /**@type {HTMLContainerBuilder<HTMLUListElement>} @nodts*/
  this.f_ul__org_patternfly_extension_finder_FinderColumn_;
  /**@type {boolean} @nodts*/
  this.f_pinnable__org_patternfly_extension_finder_FinderColumn_ = false;
  /**@type {AsyncStatus} @nodts*/
  this.f_status__org_patternfly_extension_finder_FinderColumn_;
  /**@type {FinderColumnSearch} @nodts*/
  this.f_search__org_patternfly_extension_finder_FinderColumn_;
  /**@type {Comparator<FinderItem>} @nodts*/
  this.f_comparator__org_patternfly_extension_finder_FinderColumn_;
  /**@type {AsyncItems<FinderColumn, FinderItem>} @nodts*/
  this.f_asyncItems__org_patternfly_extension_finder_FinderColumn_;
  /**@type {Promise<Iterable<FinderItem>>} @nodts*/
  this.f_loadPromise__org_patternfly_extension_finder_FinderColumn_;
 }
 /** @nodts @return {FinderColumn} */
 static m_finderColumn__java_lang_String__org_patternfly_extension_finder_FinderColumn(/** ?string */ identifier) {
  FinderColumn.$clinit();
  return FinderColumn.$create__java_lang_String(identifier);
 }
 /** @nodts @return {FinderColumn} */
 static m_finderColumn__java_lang_String__java_lang_String__org_patternfly_extension_finder_FinderColumn(/** ?string */ identifier, /** ?string */ header) {
  FinderColumn.$clinit();
  return FinderColumn.$create__java_lang_String(identifier).m_addHeader__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(FinderColumnHeader.m_finderColumnHeader__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader(header));
 }
 /** @nodts @return {!FinderColumn} */
 static $create__java_lang_String(/** ?string */ identifier) {
  FinderColumn.$clinit();
  let $instance = new FinderColumn();
  $instance.$ctor__org_patternfly_extension_finder_FinderColumn__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderColumn__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_extension_finder_FinderSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FinderColumn.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumn, FinderColumn.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderColumn, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderClasses.f_column__org_patternfly_extension_finder_FinderClasses], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_identifier__org_patternfly_extension_finder_FinderColumn_ = identifier;
  this.f_data__org_patternfly_extension_finder_FinderColumn_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_items__org_patternfly_extension_finder_FinderColumn_ = (/**@type {!LinkedHashMap<?string, FinderItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_extension_finder_FinderColumn_ = (/**@type {!AurHandler<FinderColumn, FinderItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.f_selectHandler__org_patternfly_extension_finder_FinderColumn_ = (/**@type {!ArrayList<SelectHandler<FinderItem>>}*/ (ArrayList.$create__()));
  this.f_status__org_patternfly_extension_finder_FinderColumn_ = AsyncStatus.f_static___org_patternfly_core_AsyncStatus;
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_ul__org_patternfly_extension_finder_FinderColumn_ = (/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderClasses.f_column__org_patternfly_extension_finder_FinderClasses, FinderClasses.f_items__org_patternfly_extension_finder_FinderClasses], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(Role.f_tree__org_jboss_elemento_Role), HTMLContainerBuilder))));
  this.m_storeSubComponent__void();
 }
 /** @nodts @return {FinderColumn} */
 m_addHeader__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(/** FinderColumnHeader */ header) {
  return this.m_add__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(header);
 }
 /** @nodts @return {FinderColumn} */
 m_add__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(/** FinderColumnHeader */ header) {
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(this.m_element__elemental2_dom_HTMLElement(), header);
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_addSearch__org_patternfly_extension_finder_FinderColumnSearch__org_patternfly_extension_finder_FinderColumn(/** FinderColumnSearch */ search) {
  return this.m_add__org_patternfly_extension_finder_FinderColumnSearch__org_patternfly_extension_finder_FinderColumn(search);
 }
 /** @nodts @return {FinderColumn} */
 m_add__org_patternfly_extension_finder_FinderColumnSearch__org_patternfly_extension_finder_FinderColumn(/** FinderColumnSearch */ search) {
  this.f_search__org_patternfly_extension_finder_FinderColumn_ = search;
  Elements.m_insertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element__void(search, /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_ul__org_patternfly_extension_finder_FinderColumn_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_add__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderColumn(/** FinderItem */ item) {
  item.f_column__org_patternfly_extension_finder_FinderItem = this;
  if (this.f_pinnable__org_patternfly_extension_finder_FinderColumn_) {
   item.m_makePinnable__void_$pp_org_patternfly_extension_finder();
  }
  this.m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this.f_ul__org_patternfly_extension_finder_FinderColumn_, item);
  this.f_items__org_patternfly_extension_finder_FinderColumn_.put(item.m_identifier__java_lang_String(), item);
  return /**@type {FinderColumn}*/ ($Casts.$to(this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), FinderColumn));
 }
 /** @nodts @return {FinderColumn} */
 m_add__org_patternfly_component_AsyncItems__org_patternfly_extension_finder_FinderColumn(/** AsyncItems<FinderColumn, FinderItem> */ items) {
  this.f_status__org_patternfly_extension_finder_FinderColumn_ = AsyncStatus.f_pending__org_patternfly_core_AsyncStatus;
  this.f_asyncItems__org_patternfly_extension_finder_FinderColumn_ = items;
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_active__org_patternfly_extension_finder_FinderColumn() {
  return this.m_active__boolean__org_patternfly_extension_finder_FinderColumn(true);
 }
 /** @nodts @return {FinderColumn} */
 m_active__boolean__org_patternfly_extension_finder_FinderColumn(/** boolean */ active) {
  return /**@type {FinderColumn}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), Classes.f_active__org_patternfly_style_Classes, active), FinderColumn));
 }
 /** @nodts @return {FinderColumn} */
 m_defaultSearch__org_patternfly_extension_finder_FinderColumn() {
  return this.m_defaultSearch__java_lang_String__org_patternfly_extension_finder_FinderColumn('Filter by name');
 }
 /** @nodts @return {FinderColumn} */
 m_defaultSearch__java_lang_String__org_patternfly_extension_finder_FinderColumn(/** ?string */ placeholder) {
  return this.m_addSearch__org_patternfly_extension_finder_FinderColumnSearch__org_patternfly_extension_finder_FinderColumn(FinderColumnSearch.m_finderColumnSearch__org_patternfly_extension_finder_FinderColumnSearch().m_addSearchInput__org_patternfly_component_textinputgroup_SearchInput__java_util_function_BiPredicate__org_patternfly_extension_finder_FinderColumnSearch(/**@type {SearchInput}*/ ($Casts.$to((/**@type {SearchInput}*/ ($Casts.$to(SearchInput.m_searchInput__java_lang_String__org_patternfly_component_textinputgroup_SearchInput(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderColumn.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumn, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon()), SearchInput))).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(placeholder), SearchInput)), BiPredicate.$adapt(/**  @return {boolean}*/ ((/** FinderItem */ item, /** ?string */ value) =>{
   let item_1 = /**@type {FinderItem}*/ ($Casts.$to(item, FinderItem));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   let lcv = j_l_String.m_toLowerCase__java_lang_String__java_lang_String(value_1);
   return !j_l_String.m_isEmpty__java_lang_String__boolean(value_1) && !j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(item_1.m_text__java_lang_String()), lcv);
  }))));
 }
 /** @nodts @return {FinderColumn} */
 m_ordered__java_util_Comparator__org_patternfly_extension_finder_FinderColumn(/** Comparator<FinderItem> */ comparator) {
  this.f_comparator__org_patternfly_extension_finder_FinderColumn_ = comparator;
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_pinnable__org_patternfly_extension_finder_FinderColumn() {
  return this.m_pinnable__boolean__org_patternfly_extension_finder_FinderColumn(true);
 }
 /** @nodts @return {FinderColumn} */
 m_pinnable__boolean__org_patternfly_extension_finder_FinderColumn(/** boolean */ pinnable) {
  this.f_pinnable__org_patternfly_extension_finder_FinderColumn_ = pinnable;
  return /**@type {FinderColumn}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), FinderClasses.f_pinnable__org_patternfly_extension_finder_FinderClasses, pinnable), FinderColumn));
 }
 /** @nodts @template T @return {FinderColumn} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_extension_finder_FinderColumn(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_extension_finder_FinderColumn_.put(key, value);
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_showSearchThreshold__int__org_patternfly_extension_finder_FinderColumn(/** number */ size) {
  return this.m_toggleSearch__java_util_function_Predicate__org_patternfly_extension_finder_FinderColumn(Predicate.$adapt(/**  @return {boolean}*/ ((/** FinderColumn */ c) =>{
   let c_1 = /**@type {FinderColumn}*/ ($Casts.$to(c, FinderColumn));
   return c_1.m_size__int() >= size;
  })));
 }
 /** @nodts @return {FinderColumn} */
 m_toggleSearch__java_util_function_Predicate__org_patternfly_extension_finder_FinderColumn(/** Predicate<FinderColumn> */ predicate) {
  if (!$Equality.$same(this.f_search__org_patternfly_extension_finder_FinderColumn_, null)) {
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_search__org_patternfly_extension_finder_FinderColumn_, predicate.m_test__java_lang_Object__boolean(this));
   this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(AddItemHandler.$adapt((/** FinderColumn */ c, /** FinderItem */ i) =>{
    let c_1 = /**@type {FinderColumn}*/ ($Casts.$to(c, FinderColumn));
    let i_1 = /**@type {FinderItem}*/ ($Casts.$to(i, FinderItem));
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_search__org_patternfly_extension_finder_FinderColumn_, predicate.m_test__java_lang_Object__boolean(c_1));
   }));
   this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(RemoveItemHandler.$adapt((/** FinderColumn */ c_2, /** FinderItem */ i_2) =>{
    let c_3 = /**@type {FinderColumn}*/ ($Casts.$to(c_2, FinderColumn));
    let i_3 = /**@type {FinderItem}*/ ($Casts.$to(i_2, FinderItem));
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_search__org_patternfly_extension_finder_FinderColumn_, predicate.m_test__java_lang_Object__boolean(c_3));
   }));
  }
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_that__org_patternfly_extension_finder_FinderColumn() {
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_extension_finder_FinderColumn(/** AddItemHandler<FinderColumn, FinderItem> */ onAdd) {
  return /**@type {FinderColumn}*/ ($Casts.$to(this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), FinderColumn));
 }
 /** @nodts @return {FinderColumn} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_extension_finder_FinderColumn(/** UpdateItemHandler<FinderColumn, FinderItem> */ onUpdate) {
  return /**@type {FinderColumn}*/ ($Casts.$to(this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), FinderColumn));
 }
 /** @nodts @return {FinderColumn} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_extension_finder_FinderColumn(/** RemoveItemHandler<FinderColumn, FinderItem> */ onRemove) {
  return /**@type {FinderColumn}*/ ($Casts.$to(this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), FinderColumn));
 }
 /** @nodts @return {FinderColumn} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_extension_finder_FinderColumn(/** SelectHandler<FinderItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_extension_finder_FinderColumn_.add(selectHandler);
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_onPreview__org_patternfly_extension_finder_PreviewHandler__org_patternfly_extension_finder_FinderColumn(/** PreviewHandler */ previewHandler) {
  this.f_previewHandler__org_patternfly_extension_finder_FinderColumn = previewHandler;
  return this;
 }
 /** @nodts @return {Finder} */
 m_finder__org_patternfly_extension_finder_Finder() {
  return this.f_finder__org_patternfly_extension_finder_FinderColumn;
 }
 /** @override @nodts @return {Comparator<FinderItem>} */
 m_comparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_extension_finder_FinderColumn_;
 }
 /** @override @nodts @return {Promise<Iterable<FinderItem>>} */
 m_load__elemental2_promise_Promise() {
  if ($Equality.$same(this.f_status__org_patternfly_extension_finder_FinderColumn_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus) && !$Equality.$same(this.f_asyncItems__org_patternfly_extension_finder_FinderColumn_, null)) {
   if (!$Equality.$same(this.f_loadPromise__org_patternfly_extension_finder_FinderColumn_, null)) {
    return this.f_loadPromise__org_patternfly_extension_finder_FinderColumn_;
   }
   let loadingItem = /**@type {!Array<FinderItem>}*/ ($Arrays.$create([1], FinderItem));
   let handle = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
    $Arrays.$set(loadingItem, 0, FinderItem.m_loadingItem__org_patternfly_extension_finder_FinderItem());
    loadingItem[0].f_column__org_patternfly_extension_finder_FinderItem = this;
    this.f_ul__org_patternfly_extension_finder_FinderColumn_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(loadingItem[0].m_element__elemental2_dom_HTMLElement());
   }, Timeouts.f_LOADING_TIMEOUT__org_patternfly_core_Timeouts, []);
   this.f_loadPromise__org_patternfly_extension_finder_FinderColumn_ = (/**@type {!Promise<!Iterable<!FinderItem>>}*/ ((/**@type {!Promise<!Iterable<!FinderItem>>}*/ ((/**@type {Promise<Iterable<FinderItem>>}*/ ($Casts.$to(this.f_asyncItems__org_patternfly_extension_finder_FinderColumn_.m_apply__java_lang_Object__java_lang_Object(this), Promise_$Overlay))).then(/**  @return {IThenable<Iterable<FinderItem>>}*/ ((/** Iterable<FinderItem> */ items) =>{
    let items_1 = /**@type {Iterable<FinderItem>}*/ ($Casts.$to(items, /**@type {Function}*/ (Iterable)));
    this.f_status__org_patternfly_extension_finder_FinderColumn_ = AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus;
    this.f_loadPromise__org_patternfly_extension_finder_FinderColumn_ = null;
    goog.global.clearTimeout(handle);
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(loadingItem[0]);
    for (let $iterator = items_1.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let child = /**@type {FinderItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderItem));
     {
      this.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(child);
     }
    }
    return /**@type {!Promise<!Iterable<!FinderItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(items_1));
   })))).catch(/**  @return {IThenable<Iterable<FinderItem>>}*/ ((/** !* */ error) =>{
    this.f_status__org_patternfly_extension_finder_FinderColumn_ = AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus;
    this.f_loadPromise__org_patternfly_extension_finder_FinderColumn_ = null;
    goog.global.clearTimeout(handle);
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(loadingItem[0]);
    FinderColumn.f_logger__org_patternfly_extension_finder_FinderColumn_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to load items for %o - %s: %s', [this.m_element__elemental2_dom_HTMLElement(), this.f_identifier__org_patternfly_extension_finder_FinderColumn_, error]);
    let errorItem = FinderItem.m_errorItem__org_patternfly_extension_finder_FinderItem();
    errorItem.f_column__org_patternfly_extension_finder_FinderItem = this;
    this.f_ul__org_patternfly_extension_finder_FinderColumn_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(errorItem);
    return /**@type {!Promise<!Iterable<!FinderItem>>}*/ (Promise.reject(error));
   }))));
   return this.f_loadPromise__org_patternfly_extension_finder_FinderColumn_;
  } else {
   return /**@type {!Promise<!Iterable<!FinderItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {List<FinderItem>}*/ (Collections.m_emptyList__java_util_List())));
  }
 }
 /** @override @nodts @return {Promise<Iterable<FinderItem>>} */
 m_reload__elemental2_promise_Promise() {
  if (!$Equality.$same(this.f_status__org_patternfly_extension_finder_FinderColumn_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus)) {
   this.m_reset__void();
   return /**@type {!Promise<!Iterable<!FinderItem>>}*/ (this.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<Iterable<FinderItem>>}*/ ((/** Iterable<FinderItem> */ arg0) =>{
    let arg0_1 = /**@type {Iterable<FinderItem>}*/ ($Casts.$to(arg0, /**@type {Function}*/ (Iterable)));
    return /**@type {!Promise<!Iterable<!FinderItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(arg0_1));
   })));
  }
  return /**@type {!Promise<!Iterable<!FinderItem>>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {List<FinderItem>}*/ (Collections.m_emptyList__java_util_List())));
 }
 /** @override @nodts */
 m_reset__void() {
  if ($Equality.$same(this.f_status__org_patternfly_extension_finder_FinderColumn_, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_extension_finder_FinderColumn_, AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus)) {
   this.f_status__org_patternfly_extension_finder_FinderColumn_ = AsyncStatus.f_pending__org_patternfly_core_AsyncStatus;
   this.f_loadPromise__org_patternfly_extension_finder_FinderColumn_ = null;
   this.m_internalClear__void_$p_org_patternfly_extension_finder_FinderColumn();
  }
 }
 /** @override @nodts @return {AsyncStatus} */
 m_status__org_patternfly_core_AsyncStatus() {
  return this.f_status__org_patternfly_extension_finder_FinderColumn_;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_extension_finder_FinderColumn_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_extension_finder_FinderColumn_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_extension_finder_FinderColumn_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_extension_finder_FinderColumn_.get(key));
  }
  return null;
 }
 /** @override @nodts @return {Iterator<FinderItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_extension_finder_FinderColumn_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_extension_finder_FinderColumn_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_extension_finder_FinderColumn_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_extension_finder_FinderColumn_.containsKey(identifier);
 }
 /** @nodts @return {FinderItem} */
 m_item__java_lang_String__org_patternfly_extension_finder_FinderItem(/** ?string */ identifier) {
  return /**@type {FinderItem}*/ ($Casts.$to(this.f_items__org_patternfly_extension_finder_FinderColumn_.get(identifier), FinderItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_extension_finder_FinderItem__void(/** FinderItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** FinderItem */ oldItem, /** FinderItem */ newItem) =>{
   let oldItem_1 = /**@type {FinderItem}*/ ($Casts.$to(oldItem, FinderItem));
   let newItem_1 = /**@type {FinderItem}*/ ($Casts.$to(newItem, FinderItem));
   this.f_items__org_patternfly_extension_finder_FinderColumn_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {FinderItem}*/ ($Casts.$to(this.f_items__org_patternfly_extension_finder_FinderColumn_.remove(identifier), FinderItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  if ($Equality.$same(this.f_status__org_patternfly_extension_finder_FinderColumn_, AsyncStatus.f_static___org_patternfly_core_AsyncStatus)) {
   this.m_internalClear__void_$p_org_patternfly_extension_finder_FinderColumn();
  } else if ($Equality.$same(this.f_status__org_patternfly_extension_finder_FinderColumn_, AsyncStatus.f_resolved__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_extension_finder_FinderColumn_, AsyncStatus.f_rejected__org_patternfly_core_AsyncStatus) || $Equality.$same(this.f_status__org_patternfly_extension_finder_FinderColumn_, AsyncStatus.f_pending__org_patternfly_core_AsyncStatus)) {
   this.m_reset__void();
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ identifier) {
  this.m_select__org_patternfly_extension_finder_FinderItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(identifier), true, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ identifier, /** boolean */ selected) {
  this.m_select__org_patternfly_extension_finder_FinderItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(identifier), selected, true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__boolean__void(/** ?string */ identifier, /** boolean */ selected, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_extension_finder_FinderItem__boolean__boolean__void(this.m_findItem__java_lang_String__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(identifier), selected, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_extension_finder_FinderItem__void(/** FinderItem */ item) {
  this.m_select__org_patternfly_extension_finder_FinderItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_extension_finder_FinderItem__boolean__void(/** FinderItem */ item, /** boolean */ selected) {
  this.m_select__org_patternfly_extension_finder_FinderItem__boolean__boolean__void(item, selected, true);
 }
 /** @nodts */
 m_select__org_patternfly_extension_finder_FinderItem__boolean__boolean__void(/** FinderItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_extension_finder_FinderColumn();
   item.m_markSelected__boolean__void_$pp_org_patternfly_extension_finder(selected);
   if (fireEvent) {
    this.f_selectHandler__org_patternfly_extension_finder_FinderColumn_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<FinderItem> */ selectHandler) =>{
     let selectHandler_1 = /**@type {SelectHandler<FinderItem>}*/ ($Casts.$to(selectHandler, /**@type {Function}*/ (SelectHandler)));
     selectHandler_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
    }));
   }
  }
 }
 /** @nodts */
 m_fireSelect__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(/** FinderItem */ item) {
  if (!$Equality.$same(item, null)) {
   this.f_selectHandler__org_patternfly_extension_finder_FinderColumn_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** SelectHandler<FinderItem> */ sh) =>{
    let sh_1 = /**@type {SelectHandler<FinderItem>}*/ ($Casts.$to(sh, /**@type {Function}*/ (SelectHandler)));
    sh_1.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, true);
   }));
  }
 }
 /** @nodts @return {FinderItem} */
 m_findItem__java_lang_String__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(/** ?string */ identifier) {
  return /**@type {FinderItem}*/ ($Casts.$to(this.f_items__org_patternfly_extension_finder_FinderColumn_.get(identifier), FinderItem));
 }
 /** @nodts @return {FinderItem} */
 m_previousItem__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(/** FinderItem */ item) {
  let visible = this.m_visibleItems__java_util_List_$pp_org_patternfly_extension_finder();
  let index = visible.indexOf(item);
  if (index > 0) {
   return /**@type {FinderItem}*/ ($Casts.$to(visible.getAtIndex(index - 1 | 0), FinderItem));
  }
  return null;
 }
 /** @nodts @return {FinderItem} */
 m_nextItem__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder(/** FinderItem */ item) {
  let visible = this.m_visibleItems__java_util_List_$pp_org_patternfly_extension_finder();
  let index = visible.indexOf(item);
  if (index != -1 && index < (visible.size() - 1 | 0)) {
   return /**@type {FinderItem}*/ ($Casts.$to(visible.getAtIndex(index + 1 | 0), FinderItem));
  }
  return null;
 }
 /** @nodts @return {FinderItem} */
 m_selectedItem__org_patternfly_extension_finder_FinderItem_$pp_org_patternfly_extension_finder() {
  return /**@type {FinderItem}*/ ($Casts.$to(this.f_items__org_patternfly_extension_finder_FinderColumn_.values().m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** FinderItem */ arg0) =>{
   let arg0_1 = /**@type {FinderItem}*/ ($Casts.$to(arg0, FinderItem));
   return arg0_1.m_isSelected__boolean_$pp_org_patternfly_extension_finder();
  }))).m_findFirst__java_util_Optional().m_orElse__java_lang_Object__java_lang_Object(null), FinderItem));
 }
 /** @nodts @return {List<FinderItem>} */
 m_visibleItems__java_util_List_$pp_org_patternfly_extension_finder() {
  return /**@type {List<FinderItem>}*/ ($Casts.$to(this.f_items__org_patternfly_extension_finder_FinderColumn_.values().m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** FinderItem */ item) =>{
   let item_1 = /**@type {FinderItem}*/ ($Casts.$to(item, FinderItem));
   return !item_1.m_classList__org_jboss_elemento_ClassList().m_contains__java_lang_String__boolean(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_filtered__org_patternfly_style_Classes));
  }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<FinderItem, *, List<FinderItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List)));
 }
 /** @nodts */
 m_internalClear__void_$p_org_patternfly_extension_finder_FinderColumn() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_ul__org_patternfly_extension_finder_FinderColumn_);
  let iterator = this.f_items__org_patternfly_extension_finder_FinderColumn_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {FinderItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), FinderItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_extension_finder_FinderColumn_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_extension_finder_FinderColumn() {
  for (let $iterator = this.f_items__org_patternfly_extension_finder_FinderColumn_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {FinderItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderItem));
   {
    item.m_markSelected__boolean__void_$pp_org_patternfly_extension_finder(false);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_FinderColumn();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {FinderColumn} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_extension_finder_FinderColumn(arg0, arg1);
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
 /** @final @override @nodts @return {FinderColumn} */
 m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** AsyncItems<FinderColumn, FinderItem> */ arg0) {
  return /**@type {FinderColumn}*/ ($Casts.$to(HasAsyncItems.m_addItems__$default__org_patternfly_component_HasAsyncItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(this, arg0), FinderColumn));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_add__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(/** AsyncItems<FinderColumn, FinderItem> */ arg0) {
  return this.m_add__org_patternfly_component_AsyncItems__org_patternfly_extension_finder_FinderColumn(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<FinderItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<FinderItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {FinderColumn} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, FinderItem> */ arg1) {
  return /**@type {FinderColumn}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), FinderColumn));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** FinderItem */ arg0) {
  return /**@type {FinderColumn}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {FinderItem}*/ ($Casts.$to(arg0, FinderItem))), FinderColumn));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** FinderItem */ arg0) {
  return this.m_add__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderColumn(/**@type {FinderItem}*/ ($Casts.$to(arg0, FinderItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<FinderColumn, FinderItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_extension_finder_FinderColumn(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<FinderItem>} */
 m_items__java_util_List() {
  return /**@type {List<FinderItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_extension_finder_FinderItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, FinderItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** FinderItem */ arg0) {
  this.m_updateItem__org_patternfly_extension_finder_FinderItem__void(/**@type {FinderItem}*/ ($Casts.$to(arg0, FinderItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<FinderColumn, FinderItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_extension_finder_FinderColumn(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** FinderItem */ arg0, /** BiConsumer<FinderItem, FinderItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {FinderItem}*/ ($Casts.$to(arg0, FinderItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<FinderColumn, FinderItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_extension_finder_FinderColumn(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ arg0, /** FinderItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, /**@type {FinderItem}*/ ($Casts.$to(arg1, FinderItem)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<FinderItem>} */
 m_defaultOrder__java_util_Comparator() {
  return /**@type {Comparator<FinderItem>}*/ (Ordered.m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_ordered__org_patternfly_component_HasItems() {
  return /**@type {FinderColumn}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), FinderColumn));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumn} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<FinderItem> */ arg0) {
  return this.m_ordered__java_util_Comparator__org_patternfly_extension_finder_FinderColumn(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {FinderColumn} */
 m_addItems__org_patternfly_component_AsyncItems__org_patternfly_extension_finder_FinderColumn(/** AsyncItems<FinderColumn, FinderItem> */ arg0) {
  return /**@type {FinderColumn}*/ ($Casts.$to(HasAsyncItems.m_addItems__$default__org_patternfly_component_HasAsyncItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(this, arg0), FinderColumn));
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {FinderColumn} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_extension_finder_FinderColumn(/** Iterable<T> */ arg0, /** j_u_function_Function<T, FinderItem> */ arg1) {
  return /**@type {FinderColumn}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), FinderColumn));
 }
 //Default method forwarding stub.
 /** @nodts @return {FinderColumn} */
 m_addItem__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderColumn(/** FinderItem */ arg0) {
  return /**@type {FinderColumn}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), FinderColumn));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_extension_finder_FinderItem__java_util_function_BiConsumer__void(/** FinderItem */ arg0, /** BiConsumer<FinderItem, FinderItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_extension_finder_FinderItem__void(/** ElementContainerMethods<?, ?> */ arg0, /** FinderItem */ arg1) {
  Ordered.m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {FinderColumn} */
 m_ordered__org_patternfly_extension_finder_FinderColumn() {
  return /**@type {FinderColumn}*/ ($Casts.$to(Ordered.m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(this), FinderColumn));
 }
 /** @nodts */
 static $clinit() {
  FinderColumn.$clinit = () =>{};
  FinderColumn.$loadModules();
  FinderSubComponent.$clinit();
  ComponentContext.$clinit();
  HasAsyncItems.$clinit();
  Ordered.$clinit();
  FinderColumn.f_logger__org_patternfly_extension_finder_FinderColumn_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(FinderColumn).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderColumn;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  List = goog.module.get('java.util.List$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  BiPredicate = goog.module.get('java.util.function.BiPredicate$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Role = goog.module.get('org.jboss.elemento.Role$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AddItemHandler = goog.module.get('org.patternfly.component.AddItemHandler$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  HasItems = goog.module.get('org.patternfly.component.HasItems$impl');
  RemoveItemHandler = goog.module.get('org.patternfly.component.RemoveItemHandler$impl');
  SearchInput = goog.module.get('org.patternfly.component.textinputgroup.SearchInput$impl');
  AsyncStatus = goog.module.get('org.patternfly.core.AsyncStatus$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Timeouts = goog.module.get('org.patternfly.core.Timeouts$impl');
  FinderClasses = goog.module.get('org.patternfly.extension.finder.FinderClasses$impl');
  FinderColumnHeader = goog.module.get('org.patternfly.extension.finder.FinderColumnHeader$impl');
  FinderColumnSearch = goog.module.get('org.patternfly.extension.finder.FinderColumnSearch$impl');
  FinderItem = goog.module.get('org.patternfly.extension.finder.FinderItem$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FinderColumn.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumn = 'fc';
/**@const {string} @nodts*/
FinderColumn.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderColumn = 'FinderColumn';
/**@type {Logger} @nodts*/
FinderColumn.f_logger__org_patternfly_extension_finder_FinderColumn_;
ComponentContext.$markImplementor(FinderColumn);
HasAsyncItems.$markImplementor(FinderColumn);
HasIdentifier.$markImplementor(FinderColumn);
Ordered.$markImplementor(FinderColumn);
$Util.$setClassMetadata(FinderColumn, 'org.patternfly.extension.finder.FinderColumn');

exports = FinderColumn;

//# sourceMappingURL=FinderColumn.js.map
