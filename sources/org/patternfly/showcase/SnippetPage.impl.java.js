goog.module('org.patternfly.showcase.SnippetPage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let ContentType = goog.forwardDeclare('org.patternfly.component.content.ContentType$impl');
let JumpLinks = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinks$impl');
let JumpLinksItem = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksItem$impl');
let JumpLinksList = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksList$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let PageGroup = goog.forwardDeclare('org.patternfly.component.page.PageGroup$impl');
let PageSection = goog.forwardDeclare('org.patternfly.component.page.PageSection$impl');
let Table = goog.forwardDeclare('org.patternfly.component.table.Table$impl');
let Tbody = goog.forwardDeclare('org.patternfly.component.table.Tbody$impl');
let Td = goog.forwardDeclare('org.patternfly.component.table.Td$impl');
let Th = goog.forwardDeclare('org.patternfly.component.table.Th$impl');
let Thead = goog.forwardDeclare('org.patternfly.component.table.Thead$impl');
let Tr = goog.forwardDeclare('org.patternfly.component.table.Tr$impl');
let Wrap = goog.forwardDeclare('org.patternfly.component.table.Wrap$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.layout.flex.AlignItems$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let SpaceItems = goog.forwardDeclare('org.patternfly.layout.flex.SpaceItems$impl');
let Stack = goog.forwardDeclare('org.patternfly.layout.stack.Stack$impl');
let ApiDoc = goog.forwardDeclare('org.patternfly.showcase.ApiDoc$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Ids = goog.forwardDeclare('org.patternfly.showcase.Ids$impl');
let LinkIcon = goog.forwardDeclare('org.patternfly.showcase.LinkIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Toc = goog.forwardDeclare('org.patternfly.showcase.SnippetPage.Toc$impl');
let Chart_$Overlay = goog.forwardDeclare('org.patternfly.showcase.chart.Chart.$Overlay$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Extension_$Overlay = goog.forwardDeclare('org.patternfly.showcase.extension.Extension.$Overlay$impl');
let Layout_$Overlay = goog.forwardDeclare('org.patternfly.showcase.layout.Layout.$Overlay$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let ExpandableModifier = goog.forwardDeclare('org.patternfly.style.ExpandableModifier$impl');
let GridBreakpoint = goog.forwardDeclare('org.patternfly.style.GridBreakpoint$impl');
let Placement = goog.forwardDeclare('org.patternfly.style.Placement$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Width = goog.forwardDeclare('org.patternfly.style.Width$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Page}
 */
class SnippetPage extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {JumpLinks} @nodts*/
  this.f_jumpLinks__org_patternfly_showcase_SnippetPage_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentContainer__org_patternfly_showcase_SnippetPage_;
  /**@type {Map<?string, Toc>} @nodts*/
  this.f_tocs__org_patternfly_showcase_SnippetPage_;
  /**@type {List<HTMLElement>} @nodts*/
  this.f_elements__org_patternfly_showcase_SnippetPage_;
  /**@type {boolean} @nodts*/
  this.f_tocReady__org_patternfly_showcase_SnippetPage_ = false;
  /**@type {Tbody} @nodts*/
  this.f_tbody__org_patternfly_showcase_SnippetPage_;
 }
 //Factory method corresponding to constructor 'SnippetPage(Chart)'.
 /** @nodts @return {!SnippetPage} */
 static $create__org_patternfly_showcase_chart_Chart(/** Object */ chart) {
  SnippetPage.$clinit();
  let $instance = new SnippetPage();
  $instance.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_chart_Chart__void(chart);
  return $instance;
 }
 //Initialization from constructor 'SnippetPage(Chart)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_chart_Chart__void(/** Object */ chart) {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(chart.title, Chart_$Overlay.m_summary__$devirt__org_patternfly_showcase_chart_Chart__org_gwtproject_safehtml_shared_SafeHtml(chart), Chart_$Overlay.m_apiDoc__$devirt__org_patternfly_showcase_chart_Chart__java_lang_String(chart), Chart_$Overlay.m_designGuidelines__$devirt__org_patternfly_showcase_chart_Chart__java_lang_String(chart));
 }
 //Factory method corresponding to constructor 'SnippetPage(Component)'.
 /** @nodts @return {!SnippetPage} */
 static $create__org_patternfly_showcase_component_Component(/** Object */ component) {
  SnippetPage.$clinit();
  let $instance = new SnippetPage();
  $instance.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(component);
  return $instance;
 }
 //Initialization from constructor 'SnippetPage(Component)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/** Object */ component) {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(component.title, Component_$Overlay.m_summary__$devirt__org_patternfly_showcase_component_Component__org_gwtproject_safehtml_shared_SafeHtml(component), Component_$Overlay.m_apiDoc__$devirt__org_patternfly_showcase_component_Component__java_lang_String(component), Component_$Overlay.m_designGuidelines__$devirt__org_patternfly_showcase_component_Component__java_lang_String(component));
 }
 //Factory method corresponding to constructor 'SnippetPage(Extension)'.
 /** @nodts @return {!SnippetPage} */
 static $create__org_patternfly_showcase_extension_Extension(/** Object */ extension) {
  SnippetPage.$clinit();
  let $instance = new SnippetPage();
  $instance.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_extension_Extension__void(extension);
  return $instance;
 }
 //Initialization from constructor 'SnippetPage(Extension)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_extension_Extension__void(/** Object */ extension) {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(extension.title, Extension_$Overlay.m_summary__$devirt__org_patternfly_showcase_extension_Extension__org_gwtproject_safehtml_shared_SafeHtml(extension), Extension_$Overlay.m_apiDoc__$devirt__org_patternfly_showcase_extension_Extension__java_lang_String(extension), null);
 }
 //Factory method corresponding to constructor 'SnippetPage(Layout)'.
 /** @nodts @return {!SnippetPage} */
 static $create__org_patternfly_showcase_layout_Layout(/** Object */ layout) {
  SnippetPage.$clinit();
  let $instance = new SnippetPage();
  $instance.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_layout_Layout__void(layout);
  return $instance;
 }
 //Initialization from constructor 'SnippetPage(Layout)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_layout_Layout__void(/** Object */ layout) {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(layout.title, Layout_$Overlay.m_summary__$devirt__org_patternfly_showcase_layout_Layout__org_gwtproject_safehtml_shared_SafeHtml(layout), Layout_$Overlay.m_apiDoc__$devirt__org_patternfly_showcase_layout_Layout__java_lang_String(layout), Layout_$Overlay.m_designGuidelines__$devirt__org_patternfly_showcase_layout_Layout__java_lang_String(layout));
 }
 //Factory method corresponding to constructor 'SnippetPage(String, SafeHtml, String, String)'.
 /** @nodts @return {!SnippetPage} */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String(/** ?string */ title, /** SafeHtml */ summary, /** ?string */ apiDoc, /** ?string */ designGuidelines) {
  SnippetPage.$clinit();
  let $instance = new SnippetPage();
  $instance.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(title, summary, apiDoc, designGuidelines);
  return $instance;
 }
 //Initialization from constructor 'SnippetPage(String, SafeHtml, String, String)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(/** ?string */ title, /** SafeHtml */ summary, /** ?string */ apiDoc, /** ?string */ designGuidelines) {
  this.$ctor__java_lang_Object__void();
  this.f_tocReady__org_patternfly_showcase_SnippetPage_ = false;
  this.f_tocs__org_patternfly_showcase_SnippetPage_ = (/**@type {!LinkedHashMap<?string, Toc>}*/ (LinkedHashMap.$create__()));
  this.f_elements__org_patternfly_showcase_SnippetPage_ = (/**@type {List<HTMLElement>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List(/**@type {HTMLDivElement}*/ ($Casts.$to(PageGroup.m_pageGroup__org_patternfly_component_page_PageGroup().m_addSection__org_patternfly_component_page_PageSectionLike__org_patternfly_component_page_PageGroup(/**@type {PageSection}*/ ($Casts.$to((/**@type {PageSection}*/ ($Casts.$to((/**@type {PageSection}*/ ($Casts.$to((/**@type {PageSection}*/ ($Casts.$to(PageSection.m_pageSection__org_patternfly_component_page_PageSection().m_limitWidth__org_patternfly_component_page_PageSectionBuilder(), PageSection))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** PageSection */ section) =>{
   let section_1 = /**@type {PageSection}*/ ($Casts.$to(section, PageSection));
   if (!$Equality.$same(designGuidelines, null)) {
    section_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String(Classes.f_floatInlineEnd__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder()).m_id__java_lang_String__org_jboss_elemento_TypedBuilder('design-guidelines'), Button))).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_href__java_lang_String__org_patternfly_component_button_Button(designGuidelines).m_target__java_lang_String__org_patternfly_component_button_Button('patternfly').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_swatchbook__org_patternfly_icon_PredefinedIcon()), Button))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('design-guidelines'), 'Design guidelines').m_placement__org_patternfly_style_Placement__org_patternfly_component_tooltip_Tooltip(Placement.f_top__org_patternfly_style_Placement)), HTMLContainerBuilder)));
   }
  })), PageSection))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String(Classes.f_floatInlineEnd__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder()).m_id__java_lang_String__org_jboss_elemento_TypedBuilder('api-doc'), Button))).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_href__java_lang_String__org_patternfly_component_button_Button(apiDoc).m_target__java_lang_String__org_patternfly_component_button_Button(ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(patternfly.m_catalog__org_patternfly_icon_PredefinedIcon()), Button))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('api-doc'), 'API documentation').m_placement__org_patternfly_style_Placement__org_patternfly_component_tooltip_Tooltip(Placement.f_top__org_patternfly_style_Placement)), HTMLContainerBuilder))), PageSection))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_Content().m_editorial__org_patternfly_component_content_Content().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_alignItems__org_patternfly_layout_flex_AlignItems__org_patternfly_layout_flex_Flex(AlignItems.f_center__org_patternfly_layout_flex_AlignItems).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(1, Size.f__4xl__org_patternfly_style_Size, title)), Flex))), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(summary), HTMLContainerBuilder))), Content))), PageSection))).m_addSection__org_patternfly_component_page_PageSectionLike__org_patternfly_component_page_PageGroup(/**@type {PageSection}*/ ($Casts.$to((/**@type {PageSection}*/ ($Casts.$to((/**@type {PageSection}*/ ($Casts.$to(PageSection.m_pageSection__org_patternfly_component_page_PageSection().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String('light-100')], j_l_String))), PageSection))).m_fill__org_jboss_elemento_TypedBuilder(), PageSection))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String('h-100')], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to((/**@type {Flex}*/ ($Casts.$to((/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String('nowrap-on-2xl')], j_l_String))), Flex))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_jumpLinks__org_patternfly_showcase_SnippetPage_ = (/**@type {JumpLinks}*/ ($Casts.$to((/**@type {JumpLinks}*/ ($Casts.$to((/**@type {JumpLinks}*/ ($Casts.$to(JumpLinks.m_jumpLinks__java_lang_String__org_patternfly_component_jumplinks_JumpLinks('Table of contents').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-toc'], j_l_String))), JumpLinks))).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('top', '0'), JumpLinks))).m_vertical__org_jboss_elemento_TypedBuilder(), JumpLinks))).m_scrollableSelector__org_jboss_elemento_By__org_patternfly_component_jumplinks_JumpLinks(By.m_id__java_lang_String__org_jboss_elemento_By(Ids.f_MAIN_ID__org_patternfly_showcase_Ids)).m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_jumplinks_JumpLinks(/**@type {Breakpoints<ExpandableModifier>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, ExpandableModifier.f_expandable__org_patternfly_style_ExpandableModifier, Breakpoint.f__2xl__org_patternfly_style_Breakpoint, ExpandableModifier.f_nonExpandable__org_patternfly_style_ExpandableModifier))).m_ariaLabel__java_lang_String__org_patternfly_component_jumplinks_JumpLinks('Table of contents')), Flex))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_contentContainer__org_patternfly_showcase_SnippetPage_ = (/**@type {Stack}*/ ($Casts.$to((/**@type {Stack}*/ ($Casts.$to(Stack.m_stack__org_patternfly_layout_stack_Stack().m_gutter__org_jboss_elemento_TypedBuilder(), Stack))).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-example-page-wrapper'], j_l_String))), Stack))).m_element__elemental2_dom_HTMLElement()), Flex))), HTMLContainerBuilder))), PageSection))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))));
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(/** Place */ place, /** Parameter */ parameter, /** LoadedData */ data) {
  if (!this.f_tocReady__org_patternfly_showcase_SnippetPage_) {
   for (let $iterator = this.f_tocs__org_patternfly_showcase_SnippetPage_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let toc = /**@type {Toc}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Toc));
    {
     this.f_jumpLinks__org_patternfly_showcase_SnippetPage_.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {JumpLinksItem}*/ ($Casts.$to((/**@type {JumpLinksItem}*/ ($Casts.$to(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(toc.f_id__org_patternfly_showcase_SnippetPage_Toc, toc.f_text__org_patternfly_showcase_SnippetPage_Toc, '#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(toc.f_id__org_patternfly_showcase_SnippetPage_Toc)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-toc-item'], j_l_String))), JumpLinksItem))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** JumpLinksItem */ jli) =>{
      let jli_1 = /**@type {JumpLinksItem}*/ ($Casts.$to(jli, JumpLinksItem));
      if (!toc.f_children__org_patternfly_showcase_SnippetPage_Toc.isEmpty()) {
       jli_1.m_addList__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(/**@type {JumpLinksList}*/ ($Casts.$to(JumpLinksList.m_jumpLinksList__org_patternfly_component_jumplinks_JumpLinksList().m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** JumpLinksList */ jll) =>{
        let jll_1 = /**@type {JumpLinksList}*/ ($Casts.$to(jll, JumpLinksList));
        for (let $iterator_1 = toc.f_children__org_patternfly_showcase_SnippetPage_Toc.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
         let child = /**@type {Toc}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), Toc));
         {
          jll_1.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {JumpLinksItem}*/ ($Casts.$to(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(child.f_id__org_patternfly_showcase_SnippetPage_Toc, child.f_text__org_patternfly_showcase_SnippetPage_Toc, '#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(child.f_id__org_patternfly_showcase_SnippetPage_Toc)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-toc-item'], j_l_String))), JumpLinksItem)));
         }
        }
       })), JumpLinksList)));
      }
     })), JumpLinksItem)));
    }
   }
   this.f_tocReady__org_patternfly_showcase_SnippetPage_ = true;
  }
  return this.f_elements__org_patternfly_showcase_SnippetPage_;
 }
 /** @nodts */
 m_startExamples__void() {
  this.m_addHeader__java_lang_String__java_lang_String__void(Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc, 'Examples');
 }
 /** @nodts */
 m_startExamples__java_lang_String__void(/** ?string */ description) {
  this.m_addHeader__java_lang_String__java_lang_String__java_lang_String__void(Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc, 'Examples', description);
 }
 /** @nodts */
 m_startExamples__org_patternfly_component_content_Content__void(/** Content */ description) {
  this.m_addHeader__java_lang_String__java_lang_String__org_patternfly_component_content_Content__void(Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc, 'Examples', description);
 }
 /** @nodts */
 m_addSnippet__org_patternfly_showcase_Snippet__void(/** Snippet */ snippet) {
  this.m_addSnippet__java_lang_String__org_patternfly_showcase_Snippet__void(Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc, snippet);
 }
 /** @nodts */
 m_addSnippet__java_lang_String__org_patternfly_showcase_Snippet__void(/** ?string */ headerId, /** Snippet */ snippet) {
  this.m_failSafeToc__java_lang_String__org_patternfly_showcase_SnippetPage_Toc_$p_org_patternfly_showcase_SnippetPage(headerId).m_add__java_lang_String__java_lang_String__void_$pp_org_patternfly_showcase(snippet.f_id__org_patternfly_showcase_Snippet, snippet.f_title__org_patternfly_showcase_Snippet);
  this.f_contentContainer__org_patternfly_showcase_SnippetPage_.appendChild(snippet.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts */
 m_startApiDocs__java_lang_Class__void(/** Class<?> */ component) {
  this.m_addHeader__java_lang_String__java_lang_String__org_patternfly_component_content_Content__void(Toc.f_API_DOCS__org_patternfly_showcase_SnippetPage_Toc, 'API documentation', /**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('All classes for this component are in the package '), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(this.m_packageDocLink__java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(component), ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(this.m_package___java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(component)), HTMLContainerBuilder))), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('.'), Content)));
 }
 /** @nodts */
 m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(/** Class<?> */ clazz, /** Type */ type) {
  let fullName = clazz.m_getName__java_lang_String();
  let simpleName = clazz.m_getSimpleName__java_lang_String();
  let id = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(simpleName, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)));
  this.m_failSafeToc__java_lang_String__org_patternfly_showcase_SnippetPage_Toc_$p_org_patternfly_showcase_SnippetPage(Toc.f_API_DOCS__org_patternfly_showcase_SnippetPage_Toc).m_add__java_lang_String__java_lang_String__void_$pp_org_patternfly_showcase(id, simpleName);
  this.m_failSafeTbody__org_patternfly_component_table_Tbody_$p_org_patternfly_showcase_SnippetPage().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Tbody(/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('api-doc', /**@type {!Array<?string>}*/ ($Arrays.$stampType([id], j_l_String)))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to((/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td('Name').m_wrap__org_patternfly_component_table_Wrap__org_jboss_elemento_TypedBuilder(Wrap.f_breakWord__org_patternfly_component_table_Wrap), Td))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading'], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading-anchor'], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(LinkIcon.m_linkIcon__org_patternfly_showcase_LinkIcon()), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(simpleName), HTMLContainerBuilder))), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to((/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td('Type').m_wrap__org_patternfly_component_table_Wrap__org_jboss_elemento_TypedBuilder(Wrap.f_breakWord__org_patternfly_component_table_Wrap), Td))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Label.m_label__java_lang_String__org_patternfly_style_Color__org_patternfly_component_label_Label(type.f_name__org_patternfly_showcase_ApiDoc_Type, type.f_color__org_patternfly_showcase_ApiDoc_Type)), Td))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Td}*/ ($Casts.$to((/**@type {Td}*/ ($Casts.$to(Td.m_td__java_lang_String__org_patternfly_component_table_Td('API Documentation').m_wrap__org_patternfly_component_table_Wrap__org_jboss_elemento_TypedBuilder(Wrap.f_breakWord__org_patternfly_component_table_Wrap), Td))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(this.m_apiDocLink__java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(clazz), ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(fullName), HTMLContainerBuilder))), Td))), Tr)));
 }
 /** @nodts */
 m_addHeader__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ title) {
  this.m_addHeader__java_lang_String__java_lang_String__org_patternfly_component_content_Content__void(id, title, /**@type {Content}*/ (null));
 }
 /** @nodts */
 m_addHeader__java_lang_String__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ title, /** ?string */ description) {
  if ($Equality.$same(description, null)) {
   this.m_addHeader__java_lang_String__java_lang_String__org_patternfly_component_content_Content__void(id, title, /**@type {Content}*/ (null));
  } else {
   this.m_addHeader__java_lang_String__java_lang_String__org_patternfly_component_content_Content__void(id, title, /**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(description), Content)));
  }
 }
 /** @nodts */
 m_addHeader__java_lang_String__java_lang_String__org_patternfly_component_content_Content__void(/** ?string */ id, /** ?string */ title, /** Content */ description) {
  this.m_storeToc__java_lang_String__java_lang_String__void_$p_org_patternfly_showcase_SnippetPage(id, title);
  this.f_contentContainer__org_patternfly_showcase_SnippetPage_.appendChild((/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_spaceItems__org_patternfly_layout_flex_SpaceItems__org_patternfly_layout_flex_Flex(SpaceItems.f_sm__org_patternfly_layout_flex_SpaceItems).m_alignItems__org_patternfly_layout_flex_AlignItems__org_patternfly_layout_flex_Flex(AlignItems.f_center__org_patternfly_layout_flex_AlignItems).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_h2__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading', 'ws-title', 'ws-h2'], j_l_String))), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading-anchor'], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {PredefinedIcon}*/ ($Casts.$to((/**@type {PredefinedIcon}*/ ($Casts.$to(fas.m_link__org_patternfly_icon_PredefinedIcon().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading-anchor-icon'], j_l_String))), PredefinedIcon))).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('vertical-align', 'middle'), PredefinedIcon))), HTMLContainerBuilder))), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(title), Content))), Flex))).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(description, null)) {
   this.f_contentContainer__org_patternfly_showcase_SnippetPage_.appendChild((/**@type {Content}*/ ($Casts.$to(description.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-p'], j_l_String))), Content))).m_element__elemental2_dom_HTMLElement());
  }
 }
 /** @nodts @return {Toc} */
 m_failSafeToc__java_lang_String__org_patternfly_showcase_SnippetPage_Toc_$p_org_patternfly_showcase_SnippetPage(/** ?string */ id) {
  return /**@type {Toc}*/ ($Casts.$to(this.f_tocs__org_patternfly_showcase_SnippetPage_.getOrDefault(id, Toc.$create__java_lang_String__java_lang_String(id, 'Unknown')), Toc));
 }
 /** @nodts */
 m_storeToc__java_lang_String__java_lang_String__void_$p_org_patternfly_showcase_SnippetPage(/** ?string */ id, /** ?string */ text) {
  this.f_tocs__org_patternfly_showcase_SnippetPage_.putIfAbsent(id, Toc.$create__java_lang_String__java_lang_String(id, text));
 }
 /** @nodts @return {?string} */
 m_apiDocLink__java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(/** Class<?> */ clazz) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ApiDoc.f_API_DOC_BASE__org_patternfly_showcase_ApiDoc) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_replace__java_lang_String__char__char__java_lang_String(clazz.m_getName__java_lang_String(), 46 /* '.' */, 47 /* '/' */)) + '.html';
 }
 /** @nodts @return {?string} */
 m_packageDocLink__java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(/** Class<?> */ clazz) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ApiDoc.f_API_DOC_BASE__org_patternfly_showcase_ApiDoc) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_replace__java_lang_String__char__char__java_lang_String(this.m_package___java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(clazz), 46 /* '.' */, 47 /* '/' */)) + '/package-summary.html';
 }
 /** @nodts @return {?string} */
 m_package___java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(/** Class<?> */ clazz) {
  let name = clazz.m_getName__java_lang_String();
  return j_l_String.m_substring__java_lang_String__int__int__java_lang_String(name, 0, j_l_String.m_lastIndexOf__java_lang_String__int__int(name, 46 /* '.' */));
 }
 /** @nodts @return {Tbody} */
 m_failSafeTbody__org_patternfly_component_table_Tbody_$p_org_patternfly_showcase_SnippetPage() {
  if ($Equality.$same(this.f_tbody__org_patternfly_showcase_SnippetPage_, null)) {
   this.f_contentContainer__org_patternfly_showcase_SnippetPage_.appendChild(/**@type {HTMLTableElement}*/ ($Casts.$to((/**@type {Table}*/ ($Casts.$to((/**@type {Table}*/ ($Casts.$to(Table.m_table__org_patternfly_component_table_Table().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String('mt-md'), Classes.m_util__java_lang_String__java_lang_String('mb-lg')], j_l_String))), Table))).m_compact__org_jboss_elemento_TypedBuilder(), Table))).m_gridBreakpoint__org_patternfly_style_GridBreakpoint__org_patternfly_component_table_Table(GridBreakpoint.f_gridMd__org_patternfly_style_GridBreakpoint).m_addHead__org_patternfly_component_table_Thead__org_patternfly_component_table_Table(Thead.m_thead__org_patternfly_component_table_Thead().m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to((/**@type {Tr}*/ ($Casts.$to(Tr.m_tr__java_lang_String__org_patternfly_component_table_Tr('api-doc-header').m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Th}*/ ($Casts.$to((/**@type {Th}*/ ($Casts.$to(Th.m_th__org_patternfly_component_table_Th().m_width__org_patternfly_style_Width__org_jboss_elemento_TypedBuilder(Width.f_width30__org_patternfly_style_Width), Th))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Name'), Th))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Th}*/ ($Casts.$to((/**@type {Th}*/ ($Casts.$to(Th.m_th__org_patternfly_component_table_Th().m_width__org_patternfly_style_Width__org_jboss_elemento_TypedBuilder(Width.f_width20__org_patternfly_style_Width), Th))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Type'), Th))), Tr))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {Th}*/ ($Casts.$to(Th.m_th__org_patternfly_component_table_Th().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('API Documentation'), Th))), Tr)))).m_addBody__org_patternfly_component_table_Tbody__org_patternfly_component_table_Table(this.f_tbody__org_patternfly_showcase_SnippetPage_ = Tbody.m_tbody__org_patternfly_component_table_Tbody()).m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)));
  }
  return this.f_tbody__org_patternfly_showcase_SnippetPage_;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_attach__void() {
  Page.m_attach__$default__org_jboss_elemento_router_Page__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__void() {
  Page.m_detach__$default__org_jboss_elemento_router_Page__void(this);
 }
 /** @nodts */
 static $clinit() {
  SnippetPage.$clinit = () =>{};
  SnippetPage.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SnippetPage;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  ContentType = goog.module.get('org.patternfly.component.content.ContentType$impl');
  JumpLinks = goog.module.get('org.patternfly.component.jumplinks.JumpLinks$impl');
  JumpLinksItem = goog.module.get('org.patternfly.component.jumplinks.JumpLinksItem$impl');
  JumpLinksList = goog.module.get('org.patternfly.component.jumplinks.JumpLinksList$impl');
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
  PageGroup = goog.module.get('org.patternfly.component.page.PageGroup$impl');
  PageSection = goog.module.get('org.patternfly.component.page.PageSection$impl');
  Table = goog.module.get('org.patternfly.component.table.Table$impl');
  Tbody = goog.module.get('org.patternfly.component.table.Tbody$impl');
  Td = goog.module.get('org.patternfly.component.table.Td$impl');
  Th = goog.module.get('org.patternfly.component.table.Th$impl');
  Thead = goog.module.get('org.patternfly.component.table.Thead$impl');
  Tr = goog.module.get('org.patternfly.component.table.Tr$impl');
  Wrap = goog.module.get('org.patternfly.component.table.Wrap$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
  PredefinedIcon = goog.module.get('org.patternfly.icon.PredefinedIcon$impl');
  AlignItems = goog.module.get('org.patternfly.layout.flex.AlignItems$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  SpaceItems = goog.module.get('org.patternfly.layout.flex.SpaceItems$impl');
  Stack = goog.module.get('org.patternfly.layout.stack.Stack$impl');
  ApiDoc = goog.module.get('org.patternfly.showcase.ApiDoc$impl');
  Ids = goog.module.get('org.patternfly.showcase.Ids$impl');
  LinkIcon = goog.module.get('org.patternfly.showcase.LinkIcon$impl');
  Toc = goog.module.get('org.patternfly.showcase.SnippetPage.Toc$impl');
  Chart_$Overlay = goog.module.get('org.patternfly.showcase.chart.Chart.$Overlay$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Extension_$Overlay = goog.module.get('org.patternfly.showcase.extension.Extension.$Overlay$impl');
  Layout_$Overlay = goog.module.get('org.patternfly.showcase.layout.Layout.$Overlay$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  ExpandableModifier = goog.module.get('org.patternfly.style.ExpandableModifier$impl');
  GridBreakpoint = goog.module.get('org.patternfly.style.GridBreakpoint$impl');
  Placement = goog.module.get('org.patternfly.style.Placement$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Width = goog.module.get('org.patternfly.style.Width$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(SnippetPage);
$Util.$setClassMetadata(SnippetPage, 'org.patternfly.showcase.SnippetPage');

exports = SnippetPage;

//# sourceMappingURL=SnippetPage.js.map
