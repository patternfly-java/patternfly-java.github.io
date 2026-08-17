goog.module('org.patternfly.showcase.NotFound$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let PageSection = goog.forwardDeclare('org.patternfly.component.page.PageSection$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Page}
 */
class NotFound extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Place} @nodts*/
  this.f_notFound__org_patternfly_showcase_NotFound;
 }
 /** @nodts @return {!NotFound} */
 static $create__org_jboss_elemento_router_Place(/** Place */ notFound) {
  NotFound.$clinit();
  let $instance = new NotFound();
  $instance.$ctor__org_patternfly_showcase_NotFound__org_jboss_elemento_router_Place__void(notFound);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_NotFound__org_jboss_elemento_router_Place__void(/** Place */ notFound) {
  this.$ctor__java_lang_Object__void();
  this.f_notFound__org_patternfly_showcase_NotFound = notFound;
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(/** Place */ place, /** Parameter */ parameter, /** LoadedData */ data) {
  return /**@type {List<HTMLElement>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List((/**@type {PageSection}*/ ($Casts.$to(PageSection.m_pageSection__org_patternfly_component_page_PageSection().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_Content().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(1, 'Not Found')), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Page ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_notFound__org_patternfly_showcase_NotFound.m_route__java_lang_String()) + ' not found'), HTMLContainerBuilder))), Content))), PageSection))).m_element__elemental2_dom_HTMLElement()));
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
  NotFound.$clinit = () =>{};
  NotFound.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotFound;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  PageSection = goog.module.get('org.patternfly.component.page.PageSection$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(NotFound);
$Util.$setClassMetadata(NotFound, 'org.patternfly.showcase.NotFound');

exports = NotFound;

//# sourceMappingURL=NotFound.js.map
