goog.module('org.patternfly.showcase.layout.LayoutsPage$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const OverviewPage = goog.require('org.patternfly.showcase.OverviewPage$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let CardBody = goog.forwardDeclare('org.patternfly.component.card.CardBody$impl');
let CardTitle = goog.forwardDeclare('org.patternfly.component.card.CardTitle$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let ContentType = goog.forwardDeclare('org.patternfly.component.content.ContentType$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.layout.flex.AlignItems$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let SpaceItems = goog.forwardDeclare('org.patternfly.layout.flex.SpaceItems$impl');
let Gallery = goog.forwardDeclare('org.patternfly.layout.gallery.Gallery$impl');
let GalleryItem = goog.forwardDeclare('org.patternfly.layout.gallery.GalleryItem$impl');
let Stack = goog.forwardDeclare('org.patternfly.layout.stack.Stack$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.showcase.layout.Layout.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {OverviewPage<Object>}
 */
class LayoutsPage extends OverviewPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LayoutsPage} */
 static $create__() {
  LayoutsPage.$clinit();
  let $instance = new LayoutsPage();
  $instance.$ctor__org_patternfly_showcase_layout_LayoutsPage__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_layout_LayoutsPage__void() {
  this.$ctor__org_patternfly_showcase_OverviewPage__java_lang_String__void('Layouts');
 }
 /** @override @nodts */
 m_landingPages__org_patternfly_layout_stack_Stack__void(/** Stack */ stack) {
  stack.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_spaceItems__org_patternfly_layout_flex_SpaceItems__org_patternfly_layout_flex_Flex(SpaceItems.f_none__org_patternfly_layout_flex_SpaceItems).m_alignItems__org_patternfly_layout_flex_AlignItems__org_patternfly_layout_flex_Flex(AlignItems.f_center__org_patternfly_layout_flex_AlignItems).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_h1__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading ws-title ws-h1'], j_l_String))), Content))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('About'), Content))), Flex)));
  stack.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-p'], j_l_String))), Content))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('PatternFly\u2019s layouts are used to place components on a page. They create a fully responsive structure to keep components organized and aligned across screen sizes.'), Content)));
  stack.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-p'], j_l_String))), Content))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Think of layouts as the scaffolding within which your components will live. When laying out your page, consider the layout pattern that suits your content. Multiple layouts can be used within the same page to create versatile and effective UIs.'), Content)));
 }
 /** @override @nodts @return {Gallery} */
 m_createGallery__org_patternfly_layout_gallery_Gallery() {
  return (/**@type {Gallery}*/ ($Casts.$to(Gallery.m_gallery__org_patternfly_layout_gallery_Gallery().m_gutter__org_jboss_elemento_TypedBuilder(), Gallery))).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_layout_gallery_Gallery(Data.m_layouts__java_util_List(), j_u_function_Function.$adapt(/**  @return {GalleryItem}*/ ((/** Object */ layout) =>{
   let layout_1 = /**@type {Object}*/ ($Casts.$to(layout, $Overlay));
   return /**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(layout_1.route).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-section-gallery-item'], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.m_createCard__org_patternfly_showcase_layout_Layout__org_patternfly_component_card_Card(layout_1)), HTMLContainerBuilder))), GalleryItem));
  })));
 }
 /** @nodts @return {Card} */
 m_createCard__org_patternfly_showcase_layout_Layout__org_patternfly_component_card_Card(/** Object */ layout) {
  return Card.m_card__org_patternfly_component_card_Card().m_addTitle__org_patternfly_component_card_CardTitle__org_patternfly_component_card_Card(CardTitle.m_cardTitle__java_lang_String__org_patternfly_component_card_CardTitle(layout.title)).m_addBody__org_patternfly_component_card_CardBody__org_patternfly_component_card_Card(/**@type {CardBody}*/ ($Casts.$to(CardBody.m_cardBody__org_patternfly_component_card_CardBody().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_Content().m_editorial__org_patternfly_component_content_Content().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder($Overlay.m_summary__$devirt__org_patternfly_showcase_layout_Layout__org_gwtproject_safehtml_shared_SafeHtml(layout)), Content))), Content))), CardBody)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_createCard__java_lang_Object__org_patternfly_component_card_Card(/** Object */ arg0) {
  return this.m_createCard__org_patternfly_showcase_layout_Layout__org_patternfly_component_card_Card(/**@type {Object}*/ ($Casts.$to(arg0, $Overlay)));
 }
 /** @nodts */
 static $clinit() {
  LayoutsPage.$clinit = () =>{};
  LayoutsPage.$loadModules();
  OverviewPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LayoutsPage;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Card = goog.module.get('org.patternfly.component.card.Card$impl');
  CardBody = goog.module.get('org.patternfly.component.card.CardBody$impl');
  CardTitle = goog.module.get('org.patternfly.component.card.CardTitle$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  ContentType = goog.module.get('org.patternfly.component.content.ContentType$impl');
  AlignItems = goog.module.get('org.patternfly.layout.flex.AlignItems$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  SpaceItems = goog.module.get('org.patternfly.layout.flex.SpaceItems$impl');
  Gallery = goog.module.get('org.patternfly.layout.gallery.Gallery$impl');
  GalleryItem = goog.module.get('org.patternfly.layout.gallery.GalleryItem$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  $Overlay = goog.module.get('org.patternfly.showcase.layout.Layout.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LayoutsPage, 'org.patternfly.showcase.layout.LayoutsPage');

exports = LayoutsPage;

//# sourceMappingURL=LayoutsPage.js.map
