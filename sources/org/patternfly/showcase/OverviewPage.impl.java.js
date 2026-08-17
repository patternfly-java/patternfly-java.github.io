goog.module('org.patternfly.showcase.OverviewPage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let PageGroup = goog.forwardDeclare('org.patternfly.component.page.PageGroup$impl');
let PageSection = goog.forwardDeclare('org.patternfly.component.page.PageSection$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Toolbar = goog.forwardDeclare('org.patternfly.component.toolbar.Toolbar$impl');
let ToolbarContent = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarContent$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.layout.flex.AlignItems$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let Gallery = goog.forwardDeclare('org.patternfly.layout.gallery.Gallery$impl');
let Stack = goog.forwardDeclare('org.patternfly.layout.stack.Stack$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @implements {Page}
 */
class OverviewPage extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_title__org_patternfly_showcase_OverviewPage_;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_OverviewPage__java_lang_String__void(/** ?string */ title) {
  this.$ctor__java_lang_Object__void();
  this.f_title__org_patternfly_showcase_OverviewPage_ = title;
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(/** Place */ place, /** Parameter */ parameter, /** LoadedData */ data) {
  return /**@type {List<HTMLElement>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {PageGroup}*/ ($Casts.$to((/**@type {PageGroup}*/ ($Casts.$to(PageGroup.m_pageGroup__org_patternfly_component_page_PageGroup().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {PageSection}*/ ($Casts.$to((/**@type {PageSection}*/ ($Casts.$to(PageSection.m_pageSection__org_patternfly_component_page_PageSection().m_limitWidth__org_patternfly_component_page_PageSectionBuilder(), PageSection))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_Content().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_alignItems__org_patternfly_layout_flex_AlignItems__org_patternfly_layout_flex_Flex(AlignItems.f_center__org_patternfly_layout_flex_AlignItems).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(1, Size.f__4xl__org_patternfly_style_Size, this.f_title__org_patternfly_showcase_OverviewPage_)), Flex))), Content))), PageSection))), PageGroup))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {PageSection}*/ ($Casts.$to((/**@type {PageSection}*/ ($Casts.$to(PageSection.m_pageSection__org_patternfly_component_page_PageSection().m_fill__org_jboss_elemento_TypedBuilder(), PageSection))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Stack}*/ ($Casts.$to((/**@type {Stack}*/ ($Casts.$to((/**@type {Stack}*/ ($Casts.$to(Stack.m_stack__org_patternfly_layout_stack_Stack().m_gutter__org_jboss_elemento_TypedBuilder(), Stack))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** Stack */ arg0) =>{
   let arg0_1 = /**@type {Stack}*/ ($Casts.$to(arg0, Stack));
   this.m_landingPages__org_patternfly_layout_stack_Stack__void(arg0_1);
  })), Stack))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-section-gallery'], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Toolbar}*/ ($Casts.$to(Toolbar.m_toolbar__org_patternfly_component_toolbar_Toolbar().m_sticky__org_jboss_elemento_TypedBuilder(), Toolbar))).m_addContent__org_patternfly_component_toolbar_ToolbarContent__org_patternfly_component_toolbar_Toolbar(/**@type {ToolbarContent}*/ ($Casts.$to(ToolbarContent.m_toolbarContent__org_patternfly_component_toolbar_ToolbarContent().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {ToolbarItem}*/ ($Casts.$to(ToolbarItem.m_toolbarItem__org_patternfly_component_toolbar_ToolbarItem().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Toolbar not yet implemented'), ToolbarItem))), ToolbarContent))).m_addContent__org_patternfly_component_toolbar_ToolbarContent__org_patternfly_component_toolbar_Toolbar(/**@type {ToolbarContent}*/ ($Casts.$to(ToolbarContent.m_toolbarContent__org_patternfly_component_toolbar_ToolbarContent().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_hidden__org_patternfly_style_Classes)], j_l_String))), ToolbarContent)))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.m_createGallery__org_patternfly_layout_gallery_Gallery()), HTMLContainerBuilder))), Stack))), PageSection))), PageGroup))).m_element__elemental2_dom_HTMLElement(), $Overlay))));
 }
 /** @nodts */
 m_landingPages__org_patternfly_layout_stack_Stack__void(/** Stack */ stack) {}
 /** @abstract @nodts @return {Gallery} */
 m_createGallery__org_patternfly_layout_gallery_Gallery() {}
 /** @abstract @nodts @return {Card} */
 m_createCard__java_lang_Object__org_patternfly_component_card_Card(/** T */ data) {}
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
  OverviewPage.$clinit = () =>{};
  OverviewPage.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OverviewPage;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  PageGroup = goog.module.get('org.patternfly.component.page.PageGroup$impl');
  PageSection = goog.module.get('org.patternfly.component.page.PageSection$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Toolbar = goog.module.get('org.patternfly.component.toolbar.Toolbar$impl');
  ToolbarContent = goog.module.get('org.patternfly.component.toolbar.ToolbarContent$impl');
  ToolbarItem = goog.module.get('org.patternfly.component.toolbar.ToolbarItem$impl');
  AlignItems = goog.module.get('org.patternfly.layout.flex.AlignItems$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  Stack = goog.module.get('org.patternfly.layout.stack.Stack$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(OverviewPage);
$Util.$setClassMetadata(OverviewPage, 'org.patternfly.showcase.OverviewPage');

exports = OverviewPage;

//# sourceMappingURL=OverviewPage.js.map
