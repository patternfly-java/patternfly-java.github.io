goog.module('org.jboss.elemento.router.PlaceManager.DefaultErrorPage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Page}
 */
class DefaultErrorPage extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_error__org_jboss_elemento_router_PlaceManager_DefaultErrorPage_;
 }
 /** @nodts @return {!DefaultErrorPage} */
 static $create__org_jboss_elemento_router_Place__java_lang_String(/** Place */ place, /** ?string */ error) {
  DefaultErrorPage.$clinit();
  let $instance = new DefaultErrorPage();
  $instance.$ctor__org_jboss_elemento_router_PlaceManager_DefaultErrorPage__org_jboss_elemento_router_Place__java_lang_String__void(place, error);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_PlaceManager_DefaultErrorPage__org_jboss_elemento_router_Place__java_lang_String__void(/** Place */ place, /** ?string */ error) {
  this.$ctor__java_lang_Object__void();
  this.f_error__org_jboss_elemento_router_PlaceManager_DefaultErrorPage_ = error;
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(/** Place */ place, /** Parameter */ parameter, /** LoadedData */ data) {
  return /**@type {List<HTMLElement>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_ROOT_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_CONTAINER_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(1, 'Error').m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_HEADER_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_PARAGRAPH_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('An error occurred while loading the page \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(place.m_path__java_lang_String()) + '\'.'), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLPreElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLPreElement>}*/ ($Casts.$to(Elements.m_pre__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_ERROR_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_error__org_jboss_elemento_router_PlaceManager_DefaultErrorPage_), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay))));
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
  DefaultErrorPage.$clinit = () =>{};
  DefaultErrorPage.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultErrorPage;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  PlaceManager = goog.module.get('org.jboss.elemento.router.PlaceManager$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(DefaultErrorPage);
$Util.$setClassMetadata(DefaultErrorPage, 'org.jboss.elemento.router.PlaceManager$DefaultErrorPage');

exports = DefaultErrorPage;

//# sourceMappingURL=PlaceManager$DefaultErrorPage.js.map
