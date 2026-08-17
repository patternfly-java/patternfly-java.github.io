goog.module('org.patternfly.showcase.markdown.MarkdownPage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let AttributeOperator = goog.forwardDeclare('org.jboss.elemento.By.AttributeOperator$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let PageSection = goog.forwardDeclare('org.patternfly.component.page.PageSection$impl');
let ApiDoc = goog.forwardDeclare('org.patternfly.showcase.ApiDoc$impl');
let MarkdownData_$Overlay = goog.forwardDeclare('org.patternfly.showcase.markdown.MarkdownData.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Page}
 * @implements {IsElement<HTMLElement>}
 * @implements {Attachable}
 */
class MarkdownPage extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_root__org_patternfly_showcase_markdown_MarkdownPage_;
 }
 /** @nodts @return {!MarkdownPage} */
 static $create__() {
  MarkdownPage.$clinit();
  let $instance = new MarkdownPage();
  $instance.$ctor__org_patternfly_showcase_markdown_MarkdownPage__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_markdown_MarkdownPage__void() {
  this.$ctor__java_lang_Object__void();
  this.f_root__org_patternfly_showcase_markdown_MarkdownPage_ = (/**@type {PageSection}*/ ($Casts.$to(PageSection.m_pageSection__org_patternfly_component_page_PageSection().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['markdown'], j_l_String))), PageSection))).m_element__elemental2_dom_HTMLElement();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  for (let $iterator = Elements.m_querySelectorAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.f_root__org_patternfly_showcase_markdown_MarkdownPage_, By.m_element__java_lang_String__org_jboss_elemento_By('a').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_attribute__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String__org_jboss_elemento_By('href', AttributeOperator.f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator, ApiDoc.f_API_DOC_BASE__org_patternfly_showcase_ApiDoc))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(element, 'target', ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc);
   }
  }
 }
 /** @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_root__org_patternfly_showcase_markdown_MarkdownPage_;
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(/** Place */ place, /** Parameter */ parameter, /** LoadedData */ data) {
  let md = /**@type {Object}*/ ($Casts.$to(data.m_get__java_lang_Object(), MarkdownData_$Overlay));
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_root__org_patternfly_showcase_markdown_MarkdownPage_);
  this.f_root__org_patternfly_showcase_markdown_MarkdownPage_.appendChild((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_Content().m_editorial__org_patternfly_component_content_Content().m_html__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(SafeHtmlUtils.m_fromSafeConstant__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(md.html)), Content))).m_element__elemental2_dom_HTMLElement());
  return /**@type {List<HTMLElement>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List(this.f_root__org_patternfly_showcase_markdown_MarkdownPage_));
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
 //Bridge method.
 /** @final @override @nodts @return {HTMLElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  MarkdownPage.$clinit = () =>{};
  MarkdownPage.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MarkdownPage;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  AttributeOperator = goog.module.get('org.jboss.elemento.By.AttributeOperator$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  PageSection = goog.module.get('org.patternfly.component.page.PageSection$impl');
  ApiDoc = goog.module.get('org.patternfly.showcase.ApiDoc$impl');
  MarkdownData_$Overlay = goog.module.get('org.patternfly.showcase.markdown.MarkdownData.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(MarkdownPage);
IsElement.$markImplementor(MarkdownPage);
Attachable.$markImplementor(MarkdownPage);
$Util.$setClassMetadata(MarkdownPage, 'org.patternfly.showcase.markdown.MarkdownPage');

exports = MarkdownPage;

//# sourceMappingURL=MarkdownPage.js.map
