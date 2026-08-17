goog.module('org.patternfly.showcase.component.TextInputGroupComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
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
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
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
    goog.global.console.log('Filter added: %s', filter_1.m_text__java_lang_String());
   })), FilterInput))).m_onRemove__java_util_function_BiConsumer__org_patternfly_component_textinputgroup_BaseFilterInput(BiConsumer.$adapt((/** FilterInput */ fi_2, /** Label */ filter_2) =>{
    let fi_3 = /**@type {FilterInput}*/ ($Casts.$to(fi_2, FilterInput));
    let filter_3 = /**@type {Label}*/ ($Casts.$to(filter_2, Label));
    if (fi_3.m_labelGroup__org_patternfly_component_label_LabelGroup().m_isEmpty__boolean()) {
     fi_3.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhUi.m_search__org_patternfly_icon_PredefinedIcon());
    }
    goog.global.console.log('Filter removed: %s', filter_3.m_text__java_lang_String());
   })), FilterInput));
   filterInput.m_labelGroup__org_patternfly_component_label_LabelGroup().m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Integer>}*/ ($Casts.$to(IntStream.m_range__int__int__java_util_stream_IntStream(1, 12).m_boxed__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Integer, *, List<Integer>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))), j_u_function_Function.$adapt(/**  @return {Label}*/ ((/** Integer */ index) =>{
    let index_1 = /**@type {Integer}*/ ($Casts.$to(index, Integer));
    return Label.m_label__java_lang_String__java_lang_String__org_patternfly_component_label_Label(/**@type {?string}*/ ($Casts.$to(BaseFilterInput.f_DEFAULT_TEXT_TO_IDENTIFIER__org_patternfly_component_textinputgroup_BaseFilterInput.m_apply__java_lang_Object__java_lang_Object('Label ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_1)), j_l_String)), 'Label ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_1)).m_outline__org_patternfly_component_label_Label().m_closable__org_patternfly_component_label_Label();
   })));
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(filterInput), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
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
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  List = goog.module.get('java.util.List$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  IntStream = goog.module.get('java.util.stream.IntStream$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
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
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TextInputGroupComponent, 'org.patternfly.showcase.component.TextInputGroupComponent');

exports = TextInputGroupComponent;

//# sourceMappingURL=TextInputGroupComponent.js.map
