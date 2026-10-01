goog.module('org.patternfly.showcase.Showcase$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AfterPlaceHandler = goog.forwardDeclare('org.jboss.elemento.router.AfterPlaceHandler$impl');
let AnnotatedPlaces = goog.forwardDeclare('org.jboss.elemento.router.AnnotatedPlaces$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');
let BackToTop = goog.forwardDeclare('org.patternfly.component.backtotop.BackToTop$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let ExpandableNavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let NavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.NavigationGroup$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let Vertical = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Vertical$impl');
let Masthead = goog.forwardDeclare('org.patternfly.component.page.Masthead$impl');
let MastheadBrand = goog.forwardDeclare('org.patternfly.component.page.MastheadBrand$impl');
let MastheadContent = goog.forwardDeclare('org.patternfly.component.page.MastheadContent$impl');
let MastheadLogo = goog.forwardDeclare('org.patternfly.component.page.MastheadLogo$impl');
let MastheadMain = goog.forwardDeclare('org.patternfly.component.page.MastheadMain$impl');
let MastheadToggle = goog.forwardDeclare('org.patternfly.component.page.MastheadToggle$impl');
let org_patternfly_component_page_Page = goog.forwardDeclare('org.patternfly.component.page.Page$impl');
let PageMain = goog.forwardDeclare('org.patternfly.component.page.PageMain$impl');
let PageSidebar = goog.forwardDeclare('org.patternfly.component.page.PageSidebar$impl');
let PageSidebarBody = goog.forwardDeclare('org.patternfly.component.page.PageSidebarBody$impl');
let SkipToContent = goog.forwardDeclare('org.patternfly.component.skiptocontent.SkipToContent$impl');
let Toolbar = goog.forwardDeclare('org.patternfly.component.toolbar.Toolbar$impl');
let ToolbarContent = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarContent$impl');
let ToolbarGroup = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarGroup$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let ThemeSelector = goog.forwardDeclare('org.patternfly.componentgroup.theme.ThemeSelector$impl');
let Version = goog.forwardDeclare('org.patternfly.core.Version$impl');
let fab = goog.forwardDeclare('org.patternfly.icon.IconSets.fab$impl');
let ApiDoc = goog.forwardDeclare('org.patternfly.showcase.ApiDoc$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let NotFound = goog.forwardDeclare('org.patternfly.showcase.NotFound$impl');
let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let Chart_$Overlay = goog.forwardDeclare('org.patternfly.showcase.chart.Chart.$Overlay$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Extension_$Overlay = goog.forwardDeclare('org.patternfly.showcase.extension.Extension.$Overlay$impl');
let Layout_$Overlay = goog.forwardDeclare('org.patternfly.showcase.layout.Layout.$Overlay$impl');
let MarkdownManifest = goog.forwardDeclare('org.patternfly.showcase.markdown.MarkdownManifest$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Placement = goog.forwardDeclare('org.patternfly.style.Placement$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let Token = goog.forwardDeclare('org.patternfly.token.Token$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class Showcase extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Showcase} */
 static $create__() {
  Showcase.$clinit();
  let $instance = new Showcase();
  $instance.$ctor__org_patternfly_showcase_Showcase__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Showcase__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {PlaceManager} */
 static m_placeManager__org_jboss_elemento_router_PlaceManager() {
  Showcase.$clinit();
  return Showcase.f_placeManager__org_patternfly_showcase_Showcase_;
 }
 /** @nodts */
 m_onModuleLoad__void() {
  Logger.m_initFrom__elemental2_dom_Location__void($Overlay.f_location__elemental2_dom_DomGlobal_$Overlay);
  MarkdownManifest.m_load__elemental2_promise_Promise().then(/**  @return {IThenable<*>}*/ ((/** MarkdownManifest */ manifest) =>{
   let manifest_1 = /**@type {MarkdownManifest}*/ ($Casts.$to(manifest, MarkdownManifest));
   this.m_init__org_patternfly_showcase_markdown_MarkdownManifest__void_$p_org_patternfly_showcase_Showcase(manifest_1);
   return null;
  }));
 }
 /** @nodts */
 m_init__org_patternfly_showcase_markdown_MarkdownManifest__void_$p_org_patternfly_showcase_Showcase(/** MarkdownManifest */ manifest) {
  let navigation = Navigation.m_navigation__org_patternfly_component_navigation_NavigationType__org_patternfly_component_navigation_Navigation(Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical);
  Showcase.f_placeManager__org_patternfly_showcase_Showcase_ = PlaceManager.$create__().m_root__org_jboss_elemento_By__org_jboss_elemento_router_PlaceManager(By.m_id__java_lang_String__org_jboss_elemento_By(Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase_)).m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(By.m_attribute__java_lang_String__java_lang_String__org_jboss_elemento_By('target', ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc), true).m_title__java_util_function_Function__org_jboss_elemento_router_PlaceManager(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** ?string */ title) =>{
   let title_1 = /**@type {?string}*/ ($Casts.$to(title, j_l_String));
   return 'PatternFly Java \u2022 ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(title_1);
  }))).m_notFound__java_util_function_Function__org_jboss_elemento_router_PlaceManager(j_u_function_Function.$adapt(/**  @return {Page}*/ ((/** Place */ arg0) =>{
   let arg0_1 = /**@type {Place}*/ ($Casts.$to(arg0, Place));
   return NotFound.$create__org_jboss_elemento_router_Place(arg0_1);
  }))).m_register__org_jboss_elemento_router_Places__org_jboss_elemento_router_PlaceManager(AnnotatedPlaces.$create__()).m_register__org_jboss_elemento_router_Places__org_jboss_elemento_router_PlaceManager(manifest.m_places__org_jboss_elemento_router_Places()).m_afterPlace__org_jboss_elemento_router_AfterPlaceHandler__org_jboss_elemento_router_PlaceManager(AfterPlaceHandler.$adapt((/** PlaceManager */ pm, /** Place */ place) =>{
   navigation.m_select__java_lang_String__void(place.m_path__java_lang_String());
  }));
  navigation.m_addGroup__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(NavigationGroup.m_navigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationGroup('learn', 'Learn').m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_NavigationGroup(manifest.m_navItem__org_jboss_elemento_router_PlaceManager__java_lang_String__org_patternfly_component_navigation_NavigationItem(Showcase.f_placeManager__org_patternfly_showcase_Showcase_, '/get-started')).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_NavigationGroup(manifest.m_navGroup__org_jboss_elemento_router_PlaceManager__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(Showcase.f_placeManager__org_patternfly_showcase_Showcase_, 'concepts'))).m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_Navigation(/**@type {Divider}*/ ($Casts.$to((/**@type {Divider}*/ ($Casts.$to(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('margin-top', Token.f_globalSpacerXs__org_patternfly_token_Token.f_var__org_patternfly_token_Token), Divider))).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('margin-bottom', Token.f_globalSpacerXs__org_patternfly_token_Token.f_var__org_patternfly_token_Token), Divider))).m_addGroup__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(NavigationGroup.m_navigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationGroup('design-develop', 'Design and develop').m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_NavigationGroup((/**@type {ExpandableNavigationGroup}*/ ($Casts.$to((/**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('components', 'Components').m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this.m_ni__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_showcase_Showcase('/components/all-components')), ExpandableNavigationGroup))).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Data.m_topLevelComponents__java_util_List(), j_u_function_Function.$adapt(/**  @return {NavigationItem}*/ ((/** Object */ component) =>{
   let component_1 = /**@type {Object}*/ ($Casts.$to(component, Component_$Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(component_1.route, component_1.title, component_1.route);
  }))), ExpandableNavigationGroup))).m_insertGroupAfter__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('forms', 'Forms').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Data.m_groupComponents__java_lang_String__java_util_List('forms'), j_u_function_Function.$adapt(/**  @return {NavigationItem}*/ ((/** Object */ sc) =>{
   let sc_1 = /**@type {Object}*/ ($Casts.$to(sc, Component_$Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(sc_1.route, sc_1.title, sc_1.route);
  }))), ExpandableNavigationGroup)), '/components/expandable-section').m_insertGroupAfter__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('menus', 'Menus').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Data.m_groupComponents__java_lang_String__java_util_List('menus'), j_u_function_Function.$adapt(/**  @return {NavigationItem}*/ ((/** Object */ sc_2) =>{
   let sc_3 = /**@type {Object}*/ ($Casts.$to(sc_2, Component_$Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(sc_3.route, sc_3.title, sc_3.route);
  }))), ExpandableNavigationGroup)), '/components/masthead')).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_NavigationGroup(/**@type {ExpandableNavigationGroup}*/ ($Casts.$to((/**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('extensions', 'Extensions').m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this.m_ni__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_showcase_Showcase('/extensions/about-extensions', 'About extensions')), ExpandableNavigationGroup))).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Data.m_extensions__java_util_List(), j_u_function_Function.$adapt(/**  @return {NavigationItem}*/ ((/** Object */ extension) =>{
   let extension_1 = /**@type {Object}*/ ($Casts.$to(extension, Extension_$Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(extension_1.route, extension_1.title, extension_1.route);
  }))), ExpandableNavigationGroup))).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_NavigationGroup(/**@type {ExpandableNavigationGroup}*/ ($Casts.$to((/**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('charts', 'Charts').m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this.m_ni__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_showcase_Showcase('/charts/about-charts', 'About charts')), ExpandableNavigationGroup))).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Data.m_charts__java_util_List(), j_u_function_Function.$adapt(/**  @return {NavigationItem}*/ ((/** Object */ chart) =>{
   let chart_1 = /**@type {Object}*/ ($Casts.$to(chart, Chart_$Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(chart_1.route, chart_1.title, chart_1.route);
  }))), ExpandableNavigationGroup))).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_NavigationGroup(/**@type {ExpandableNavigationGroup}*/ ($Casts.$to((/**@type {ExpandableNavigationGroup}*/ ($Casts.$to(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('layouts', 'Layouts').m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this.m_ni__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_showcase_Showcase('/layouts/about-layouts', 'About layouts')), ExpandableNavigationGroup))).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(Data.m_layouts__java_util_List(), j_u_function_Function.$adapt(/**  @return {NavigationItem}*/ ((/** Object */ layout) =>{
   let layout_1 = /**@type {Object}*/ ($Casts.$to(layout, Layout_$Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(layout_1.route, layout_1.title, layout_1.route);
  }))), ExpandableNavigationGroup)))).m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_Navigation(/**@type {Divider}*/ ($Casts.$to((/**@type {Divider}*/ ($Casts.$to(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('margin-top', Token.f_globalSpacerXs__org_patternfly_token_Token.f_var__org_patternfly_token_Token), Divider))).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('margin-bottom', Token.f_globalSpacerXs__org_patternfly_token_Token.f_var__org_patternfly_token_Token), Divider))).m_addGroup__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(NavigationGroup.m_navigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationGroup('contribute', 'Contribute').m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_NavigationGroup(manifest.m_navGroup__org_jboss_elemento_router_PlaceManager__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(Showcase.f_placeManager__org_patternfly_showcase_Showcase_, 'developer')).m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_NavigationGroup(manifest.m_navItem__org_jboss_elemento_router_PlaceManager__java_lang_String__org_patternfly_component_navigation_NavigationItem(Showcase.f_placeManager__org_patternfly_showcase_Showcase_, '/get-involved')));
  Elements.m_body__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder('ws-router'), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {org_patternfly_component_page_Page}*/ ($Casts.$to((/**@type {org_patternfly_component_page_Page}*/ ($Casts.$to(org_patternfly_component_page_Page.m_page__org_patternfly_component_page_Page().m_id__java_lang_String__org_jboss_elemento_TypedBuilder('ws-page'), org_patternfly_component_page_Page))).m_addSkipToContent__org_patternfly_component_skiptocontent_SkipToContent__org_patternfly_component_page_Page(SkipToContent.m_skipToContent__java_lang_String__org_patternfly_component_skiptocontent_SkipToContent(Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase_)).m_addMasthead__org_patternfly_component_page_Masthead__org_patternfly_component_page_Page(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_MastheadMain(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle().m_toggleSidebar__org_patternfly_component_page_MastheadToggle()).m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_addLogo__org_patternfly_component_page_MastheadLogo__org_patternfly_component_page_MastheadBrand(/**@type {MastheadLogo}*/ ($Casts.$to((/**@type {MastheadLogo}*/ ($Casts.$to(MastheadLogo.m_mastheadLogo__java_lang_String__org_patternfly_component_page_MastheadLogo('/').m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(SafeHtmlUtils.m_fromSafeConstant__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_pfLogo__org_treblereel_j2cl_processors_common_resources_TextResource().m_getText__java_lang_String())), MastheadLogo))).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_brand__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_Height__org_patternfly_style_Variables], j_l_String))).f_name__org_patternfly_style_Variable, '36px'), MastheadLogo))))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_addToolbar__org_patternfly_component_toolbar_Toolbar__org_patternfly_component_page_MastheadContent((/**@type {Toolbar}*/ ($Casts.$to(Toolbar.m_toolbar__org_patternfly_component_toolbar_Toolbar().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_fullHeight__org_patternfly_style_Classes), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_static___org_patternfly_style_Classes)], j_l_String))), Toolbar))).m_addContent__org_patternfly_component_toolbar_ToolbarContent__org_patternfly_component_toolbar_Toolbar(ToolbarContent.m_toolbarContent__org_patternfly_component_toolbar_ToolbarContent().m_addGroup__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarContent(/**@type {ToolbarGroup}*/ ($Casts.$to((/**@type {ToolbarGroup}*/ ($Casts.$to((/**@type {ToolbarGroup}*/ ($Casts.$to(ToolbarGroup.m_toolbarGroup__org_patternfly_component_toolbar_ToolbarGroup().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String('align-end')], j_l_String))), ToolbarGroup))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {ToolbarItem}*/ ($Casts.$to(ToolbarItem.m_toolbarItem__org_patternfly_component_toolbar_ToolbarItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(fab.m_github__org_patternfly_icon_PredefinedIcon(), 'https://github.com/patternfly-java').m_plain__org_jboss_elemento_TypedBuilder(), Button))), ToolbarItem))), ToolbarGroup))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {ToolbarItem}*/ ($Casts.$to(ToolbarItem.m_toolbarItem__org_patternfly_component_toolbar_ToolbarItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ThemeSelector.m_themeSelector__java_lang_String__org_patternfly_componentgroup_theme_ThemeSelector('pfj').m_placement__org_patternfly_style_Placement__org_patternfly_componentgroup_theme_ThemeSelector(Placement.f_bottomEnd__org_patternfly_style_Placement)), ToolbarItem))), ToolbarGroup))))))).m_addSidebar__org_patternfly_component_page_PageSidebar__org_patternfly_component_page_Page(PageSidebar.m_pageSidebar__org_patternfly_component_page_PageSidebar().m_addBody__org_patternfly_component_page_PageSidebarBody__org_patternfly_component_page_PageSidebar(PageSidebarBody.m_pageSidebarBody__org_patternfly_component_page_PageSidebarBody().m_addNavigation__org_patternfly_component_navigation_Navigation__org_patternfly_component_page_PageSidebarBody(navigation))).m_addMain__org_patternfly_component_page_PageMain__org_patternfly_component_page_Page(PageMain.m_pageMain__java_lang_String__org_patternfly_component_page_PageMain(Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase_)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {BackToTop}*/ ($Casts.$to(BackToTop.m_backToTop__org_patternfly_component_backtotop_BackToTop().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-back-to-top'], j_l_String))), BackToTop))).m_scrollableSelector__org_jboss_elemento_By__org_patternfly_component_backtotop_BackToTop(By.m_id__java_lang_String__org_jboss_elemento_By(Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase_))), org_patternfly_component_page_Page))), HTMLContainerBuilder)));
  Showcase.f_placeManager__org_patternfly_showcase_Showcase_.m_start__void();
  Showcase.f_logger__org_patternfly_showcase_Showcase_.m_info__java_lang_String__arrayOf_java_lang_Object__void('PatternFly version:      %s', [Version.f_PATTERN_FLY_VERSION__org_patternfly_core_Version]);
  Showcase.f_logger__org_patternfly_showcase_Showcase_.m_info__java_lang_String__arrayOf_java_lang_Object__void('PatternFly Java version: %s', [Version.f_PATTERN_FLY_JAVA_VERSION__org_patternfly_core_Version]);
 }
 /** @nodts @return {NavigationItem} */
 m_ni__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_showcase_Showcase(/** ?string */ route) {
  return this.m_ni__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_showcase_Showcase(route, Showcase.f_placeManager__org_patternfly_showcase_Showcase_.m_place__java_lang_String__org_jboss_elemento_router_Place(route).m_title__java_lang_String());
 }
 /** @nodts @return {NavigationItem} */
 m_ni__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_showcase_Showcase(/** ?string */ route, /** ?string */ text) {
  return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(route, text, route);
 }
 /** @nodts */
 static $clinit() {
  Showcase.$clinit = () =>{};
  Showcase.$loadModules();
  j_l_Object.$clinit();
  Showcase.f_logger__org_patternfly_showcase_Showcase_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Showcase).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Showcase;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AfterPlaceHandler = goog.module.get('org.jboss.elemento.router.AfterPlaceHandler$impl');
  AnnotatedPlaces = goog.module.get('org.jboss.elemento.router.AnnotatedPlaces$impl');
  Place = goog.module.get('org.jboss.elemento.router.Place$impl');
  PlaceManager = goog.module.get('org.jboss.elemento.router.PlaceManager$impl');
  BackToTop = goog.module.get('org.patternfly.component.backtotop.BackToTop$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  ExpandableNavigationGroup = goog.module.get('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
  Navigation = goog.module.get('org.patternfly.component.navigation.Navigation$impl');
  NavigationGroup = goog.module.get('org.patternfly.component.navigation.NavigationGroup$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Vertical = goog.module.get('org.patternfly.component.navigation.NavigationType.Vertical$impl');
  Masthead = goog.module.get('org.patternfly.component.page.Masthead$impl');
  MastheadBrand = goog.module.get('org.patternfly.component.page.MastheadBrand$impl');
  MastheadContent = goog.module.get('org.patternfly.component.page.MastheadContent$impl');
  MastheadLogo = goog.module.get('org.patternfly.component.page.MastheadLogo$impl');
  MastheadMain = goog.module.get('org.patternfly.component.page.MastheadMain$impl');
  MastheadToggle = goog.module.get('org.patternfly.component.page.MastheadToggle$impl');
  org_patternfly_component_page_Page = goog.module.get('org.patternfly.component.page.Page$impl');
  PageMain = goog.module.get('org.patternfly.component.page.PageMain$impl');
  PageSidebar = goog.module.get('org.patternfly.component.page.PageSidebar$impl');
  PageSidebarBody = goog.module.get('org.patternfly.component.page.PageSidebarBody$impl');
  SkipToContent = goog.module.get('org.patternfly.component.skiptocontent.SkipToContent$impl');
  Toolbar = goog.module.get('org.patternfly.component.toolbar.Toolbar$impl');
  ToolbarContent = goog.module.get('org.patternfly.component.toolbar.ToolbarContent$impl');
  ToolbarGroup = goog.module.get('org.patternfly.component.toolbar.ToolbarGroup$impl');
  ToolbarItem = goog.module.get('org.patternfly.component.toolbar.ToolbarItem$impl');
  ThemeSelector = goog.module.get('org.patternfly.componentgroup.theme.ThemeSelector$impl');
  Version = goog.module.get('org.patternfly.core.Version$impl');
  fab = goog.module.get('org.patternfly.icon.IconSets.fab$impl');
  ApiDoc = goog.module.get('org.patternfly.showcase.ApiDoc$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  NotFound = goog.module.get('org.patternfly.showcase.NotFound$impl');
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
  Chart_$Overlay = goog.module.get('org.patternfly.showcase.chart.Chart.$Overlay$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Extension_$Overlay = goog.module.get('org.patternfly.showcase.extension.Extension.$Overlay$impl');
  Layout_$Overlay = goog.module.get('org.patternfly.showcase.layout.Layout.$Overlay$impl');
  MarkdownManifest = goog.module.get('org.patternfly.showcase.markdown.MarkdownManifest$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Placement = goog.module.get('org.patternfly.style.Placement$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  Token = goog.module.get('org.patternfly.token.Token$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase_ = 'ws-page-main';
/**@type {Logger} @nodts*/
Showcase.f_logger__org_patternfly_showcase_Showcase_;
/**@type {PlaceManager} @nodts*/
Showcase.f_placeManager__org_patternfly_showcase_Showcase_;
$Util.$setClassMetadata(Showcase, 'org.patternfly.showcase.Showcase');

/* NATIVE.JS EPILOG */

const org_patternfly_showcase_Showcase = Showcase;

setTimeout(function(){
var ep = Showcase.$create__();
    ep.m_onModuleLoad__void()
}, 0);


exports = Showcase;

//# sourceMappingURL=Showcase.js.map
