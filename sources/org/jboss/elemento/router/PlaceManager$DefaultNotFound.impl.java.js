goog.module('org.jboss.elemento.router.PlaceManager.DefaultNotFound$impl');

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
class DefaultNotFound extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Place} @nodts*/
  this.f_notFound__org_jboss_elemento_router_PlaceManager_DefaultNotFound_;
 }
 /** @nodts @return {!DefaultNotFound} */
 static $create__org_jboss_elemento_router_Place(/** Place */ notFound) {
  DefaultNotFound.$clinit();
  let $instance = new DefaultNotFound();
  $instance.$ctor__org_jboss_elemento_router_PlaceManager_DefaultNotFound__org_jboss_elemento_router_Place__void(notFound);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_PlaceManager_DefaultNotFound__org_jboss_elemento_router_Place__void(/** Place */ notFound) {
  this.$ctor__java_lang_Object__void();
  this.f_notFound__org_jboss_elemento_router_PlaceManager_DefaultNotFound_ = notFound;
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(/** Place */ place, /** Parameter */ parameter, /** LoadedData */ data) {
  return /**@type {List<HTMLElement>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_ROOT_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_CONTAINER_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(1, 'Error 404').m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_HEADER_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__org_jboss_elemento_TypedBuilder(PlaceManager.f_PARAGRAPH_STYLE__org_jboss_elemento_router_PlaceManager_), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('You\'re lost! Page \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_notFound__org_jboss_elemento_router_PlaceManager_DefaultNotFound_.m_path__java_lang_String()) + '\' was not found. Please take a step '), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('javascript:history.back()').m_text__java_lang_String__org_jboss_elemento_TypedBuilder('back'), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('.'), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay))));
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
  DefaultNotFound.$clinit = () =>{};
  DefaultNotFound.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultNotFound;
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
Page.$markImplementor(DefaultNotFound);
$Util.$setClassMetadata(DefaultNotFound, 'org.jboss.elemento.router.PlaceManager$DefaultNotFound');

exports = DefaultNotFound;

//# sourceMappingURL=PlaceManager$DefaultNotFound.js.map
