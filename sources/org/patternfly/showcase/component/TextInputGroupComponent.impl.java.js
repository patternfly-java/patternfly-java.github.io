goog.module('org.patternfly.showcase.component.TextInputGroupComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let ResolveCallbackFn_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.component.AsyncItems$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let BaseFilterInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseFilterInput$impl');
let FilterInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.FilterInput$impl');
let SearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.SearchInput$impl');
let TextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroup$impl');
let TextInputGroupUtilities = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let Direction = goog.forwardDeclare('org.patternfly.layout.flex.Direction$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let FlexItem = goog.forwardDeclare('org.patternfly.layout.flex.FlexItem$impl');
let Gap = goog.forwardDeclare('org.patternfly.layout.flex.Gap$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Words = goog.forwardDeclare('org.patternfly.showcase.model.Words$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TextInputGroupComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TextInputGroupComponent} */
 static $create__() {
  TextInputGroupComponent.$clinit();
  let $instance = new TextInputGroupComponent();
  $instance.$ctor__org_patternfly_showcase_component_TextInputGroupComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TextInputGroupComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'text-input-group'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('tig-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInputGroup.m_textInputGroup__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroup('basic-tig-0')), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('tig-disabled'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInputGroup}*/ ($Casts.$to(TextInputGroup.m_textInputGroup__java_lang_String__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroup('disabled-tig-0', 'Disabled').m_disabled__org_jboss_elemento_TypedBuilder(), TextInputGroup))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-search-input', 'Utilities and icon', Code.m_code__java_lang_String__java_lang_String('tig-search-input'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SearchInput}*/ ($Casts.$to(SearchInput.m_searchInput__java_lang_String__org_patternfly_component_textinputgroup_SearchInput('tig-search-input-0').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon()), SearchInput))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-validation', 'With validation', Code.m_code__java_lang_String__java_lang_String('tig-validation'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Flex.m_flex__org_patternfly_layout_flex_Flex().m_direction__org_patternfly_layout_flex_Direction__org_patternfly_layout_flex_Flex(Direction.f_column__org_patternfly_layout_flex_Direction).m_rowGap__org_patternfly_layout_flex_Gap__org_patternfly_layout_flex_Flex(Gap.f_sm__org_patternfly_layout_flex_Gap).m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInputGroup}*/ ($Casts.$to(TextInputGroup.m_textInputGroup__java_lang_String__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroup('tig-validation-0', 'Success validation').m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_textinputgroup_BaseTextInputGroup(ValidationStatus.f_success__org_patternfly_component_ValidationStatus), TextInputGroup))), FlexItem))).m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInputGroup}*/ ($Casts.$to((/**@type {TextInputGroup}*/ ($Casts.$to(TextInputGroup.m_textInputGroup__java_lang_String__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroup('tig-validation-1', 'Warning validation with custom non-status icon at start').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon()), TextInputGroup))).m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_textinputgroup_BaseTextInputGroup(ValidationStatus.f_warning__org_patternfly_component_ValidationStatus), TextInputGroup))), FlexItem))).m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SearchInput}*/ ($Casts.$to((/**@type {SearchInput}*/ ($Casts.$to(SearchInput.m_searchInput__java_lang_String__java_lang_String__org_patternfly_component_textinputgroup_SearchInput('tig-validation-2', 'Error validation with custom non-status icon at start and utilities').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon()), SearchInput))).m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_textinputgroup_BaseTextInputGroup(ValidationStatus.f_error__org_patternfly_component_ValidationStatus), SearchInput))), FlexItem)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-filter-input', 'Filters (no duplicates)', Code.m_code__java_lang_String__java_lang_String('tig-filter-input'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let filterInput = /**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to(FilterInput.m_filterInput__java_lang_String__org_patternfly_component_textinputgroup_FilterInput('tig-filter-input-0').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon()), FilterInput))).m_allowDuplicates__boolean__org_patternfly_component_textinputgroup_BaseFilterInput(false), FilterInput))).m_onAdd__java_util_function_BiConsumer__org_patternfly_component_textinputgroup_BaseFilterInput(BiConsumer.$adapt((/** FilterInput */ fi, /** Label */ filter) =>{
    let fi_1 = /**@type {FilterInput}*/ ($Casts.$to(fi, FilterInput));
    let filter_1 = /**@type {Label}*/ ($Casts.$to(filter, Label));
    fi_1.m_removeIcon__org_patternfly_component_textinputgroup_BaseTextInputGroup();
   })), FilterInput))).m_onRemove__java_util_function_BiConsumer__org_patternfly_component_textinputgroup_BaseFilterInput(BiConsumer.$adapt((/** FilterInput */ fi_2, /** Label */ filter_2) =>{
    let fi_3 = /**@type {FilterInput}*/ ($Casts.$to(fi_2, FilterInput));
    let filter_3 = /**@type {Label}*/ ($Casts.$to(filter_2, Label));
    if (fi_3.m_labelGroup__org_patternfly_component_label_LabelGroup().m_isEmpty__boolean()) {
     fi_3.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon());
    }
   })), FilterInput));
   filterInput.m_labelGroup__org_patternfly_component_label_LabelGroup().m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Integer>}*/ ($Casts.$to(IntStream.m_range__int__int__java_util_stream_IntStream(1, 12).m_boxed__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Integer, *, List<Integer>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))), j_u_function_Function.$adapt(/**  @return {Label}*/ ((/** Integer */ index) =>{
    let index_1 = /**@type {Integer}*/ ($Casts.$to(index, Integer));
    return Label.m_label__java_lang_String__java_lang_String__org_patternfly_component_label_Label(/**@type {?string}*/ ($Casts.$to(BaseFilterInput.f_DEFAULT_TEXT_TO_IDENTIFIER__org_patternfly_component_textinputgroup_BaseFilterInput.m_apply__java_lang_Object__java_lang_Object('Label ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_1)), j_l_String)), 'Label ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_1)).m_outline__org_patternfly_component_label_Label().m_closable__org_patternfly_component_label_Label();
   })));
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(filterInput), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-autocomplete', 'Search with autocomplete', Code.m_code__java_lang_String__java_lang_String('tig-autocomplete'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SearchInput}*/ ($Casts.$to((/**@type {SearchInput}*/ ($Casts.$to(SearchInput.m_searchInput__java_lang_String__org_patternfly_component_textinputgroup_SearchInput('tig-autocomplete-0').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon()), SearchInput))).m_addMenu__org_patternfly_component_menu_Menu__org_patternfly_component_textinputgroup_BaseSearchInput(Menu.m_menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__org_patternfly_component_menu_Menu(MenuType.f_menu__org_patternfly_component_menu_MenuType, SelectionMode.f_click__org_patternfly_component_SelectionMode).m_scrollable__org_patternfly_component_menu_Menu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<?string>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List(Words.f_data__org_patternfly_showcase_model_Words)), j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ word) =>{
    let word_1 = /**@type {?string}*/ ($Casts.$to(word, j_l_String));
    return MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(word_1, word_1);
   }))), MenuList))))), SearchInput))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-autocomplete-async', 'Filter with autocomplete (async)', Code.m_code__java_lang_String__java_lang_String('tig-autocomplete-async'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let asyncItems = AsyncItems.$adapt(/**  @return {Promise<Iterable<MenuItem>>}*/ ((/** MenuList */ c) =>{
    let c_1 = /**@type {MenuList}*/ ($Casts.$to(c, MenuList));
    return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (new Promise((/** function(?):void */ res, /** function(!*):void */ rej) =>{
     DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
      ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(res, /**@type {List<MenuItem>}*/ ($Casts.$to((/**@type {Stream<MenuItem>}*/ ((/**@type {Stream<?string>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(LoremIpsum.m_words__int__java_lang_String(100), ' ')))).m_distinct__java_util_stream_Stream().m_sorted__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ word_2) =>{
       let word_3 = /**@type {?string}*/ ($Casts.$to(word_2, j_l_String));
       return MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('item-', /**@type {!Array<?string>}*/ ($Arrays.$stampType([word_3], j_l_String))), word_3);
      }))))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<MenuItem, *, List<MenuItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))));
     }, 1234 + Random.$create__().m_nextInt__int__int(3456) | 0, []);
    }));
   }));
   let menu = Menu.m_menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__org_patternfly_component_menu_Menu(MenuType.f_menu__org_patternfly_component_menu_MenuType, SelectionMode.f_click__org_patternfly_component_SelectionMode).m_scrollable__org_patternfly_component_menu_Menu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(asyncItems), MenuList))));
   let filterInput_1 = /**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to((/**@type {FilterInput}*/ ($Casts.$to(FilterInput.m_filterInput__java_lang_String__org_patternfly_component_textinputgroup_FilterInput('tig-autocomplete-async-0').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon()), FilterInput))).m_allowDuplicates__boolean__org_patternfly_component_textinputgroup_BaseFilterInput(false), FilterInput))).m_onAdd__java_util_function_BiConsumer__org_patternfly_component_textinputgroup_BaseFilterInput(BiConsumer.$adapt((/** FilterInput */ fi_4, /** Label */ filter_4) =>{
    let fi_5 = /**@type {FilterInput}*/ ($Casts.$to(fi_4, FilterInput));
    let filter_5 = /**@type {Label}*/ ($Casts.$to(filter_4, Label));
    fi_5.m_removeIcon__org_patternfly_component_textinputgroup_BaseTextInputGroup();
    menu.m_reset__void();
   })), FilterInput))).m_onRemove__java_util_function_BiConsumer__org_patternfly_component_textinputgroup_BaseFilterInput(BiConsumer.$adapt((/** FilterInput */ fi_6, /** Label */ filter_6) =>{
    let fi_7 = /**@type {FilterInput}*/ ($Casts.$to(fi_6, FilterInput));
    let filter_7 = /**@type {Label}*/ ($Casts.$to(filter_6, Label));
    if (fi_7.m_labelGroup__org_patternfly_component_label_LabelGroup().m_isEmpty__boolean()) {
     fi_7.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon());
    }
    menu.m_reset__void();
   })), FilterInput))).m_add__org_patternfly_component_menu_Menu__org_patternfly_component_textinputgroup_BaseSearchInput(menu), FilterInput));
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(filterInput_1), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(TextInputGroup));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextInputGroup), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(SearchInput), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FilterInput), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextInputGroupUtilities), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  TextInputGroupComponent.$clinit = () =>{};
  TextInputGroupComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroupComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  ResolveCallbackFn_$Overlay = goog.module.get('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  List = goog.module.get('java.util.List$impl');
  Random = goog.module.get('java.util.Random$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  IntStream = goog.module.get('java.util.stream.IntStream$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  AsyncItems = goog.module.get('org.patternfly.component.AsyncItems$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  BaseFilterInput = goog.module.get('org.patternfly.component.textinputgroup.BaseFilterInput$impl');
  FilterInput = goog.module.get('org.patternfly.component.textinputgroup.FilterInput$impl');
  SearchInput = goog.module.get('org.patternfly.component.textinputgroup.SearchInput$impl');
  TextInputGroup = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroup$impl');
  TextInputGroupUtilities = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Direction = goog.module.get('org.patternfly.layout.flex.Direction$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  FlexItem = goog.module.get('org.patternfly.layout.flex.FlexItem$impl');
  Gap = goog.module.get('org.patternfly.layout.flex.Gap$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Words = goog.module.get('org.patternfly.showcase.model.Words$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TextInputGroupComponent, 'org.patternfly.showcase.component.TextInputGroupComponent');

exports = TextInputGroupComponent;

//# sourceMappingURL=TextInputGroupComponent.js.map
