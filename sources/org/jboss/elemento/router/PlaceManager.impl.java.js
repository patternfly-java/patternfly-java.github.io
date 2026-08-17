goog.module('org.jboss.elemento.router.PlaceManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let History_$Overlay = goog.forwardDeclare('elemental2.dom.History.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let PopStateEvent_$Overlay = goog.forwardDeclare('elemental2.dom.PopStateEvent.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AfterPlaceHandler = goog.forwardDeclare('org.jboss.elemento.router.AfterPlaceHandler$impl');
let Base = goog.forwardDeclare('org.jboss.elemento.router.Base$impl');
let BeforePlaceHandler = goog.forwardDeclare('org.jboss.elemento.router.BeforePlaceHandler$impl');
let LinkSelector = goog.forwardDeclare('org.jboss.elemento.router.LinkSelector$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let DefaultErrorPage = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager.DefaultErrorPage$impl');
let DefaultNoData = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager.DefaultNoData$impl');
let DefaultNotFound = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager.DefaultNotFound$impl');
let ErrorType = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager.ErrorType$impl');
let PlaceManagerStruct = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager.PlaceManagerStruct$impl');
let Places = goog.forwardDeclare('org.jboss.elemento.router.Places$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PlaceManager extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, Place>} @nodts*/
  this.f_places__org_jboss_elemento_router_PlaceManager_;
  /**@type {Map<Place, Supplier<Page>>} @nodts*/
  this.f_pages__org_jboss_elemento_router_PlaceManager_;
  /**@type {List<BeforePlaceHandler>} @nodts*/
  this.f_beforeHandlers__org_jboss_elemento_router_PlaceManager_;
  /**@type {List<AfterPlaceHandler>} @nodts*/
  this.f_afterHandlers__org_jboss_elemento_router_PlaceManager_;
  /**@type {Base} @nodts*/
  this.f_base__org_jboss_elemento_router_PlaceManager_;
  /**@type {Place} @nodts*/
  this.f_currentPlace__org_jboss_elemento_router_PlaceManager_;
  /**@type {Page} @nodts*/
  this.f_currentPage__org_jboss_elemento_router_PlaceManager_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_root__org_jboss_elemento_router_PlaceManager_;
  /**@type {j_u_function_Function<?string, ?string>} @nodts*/
  this.f_title__org_jboss_elemento_router_PlaceManager_;
  /**@type {j_u_function_Function<Place, Page>} @nodts*/
  this.f_notFound__org_jboss_elemento_router_PlaceManager_;
  /**@type {Supplier<Page>} @nodts*/
  this.f_noData__org_jboss_elemento_router_PlaceManager_;
  /**@type {BiFunction<Place, ?string, Page>} @nodts*/
  this.f_errorPage__org_jboss_elemento_router_PlaceManager_;
  /**@type {LinkSelector} @nodts*/
  this.f_linkSelector__org_jboss_elemento_router_PlaceManager_;
 }
 /** @nodts @return {!PlaceManager} */
 static $create__() {
  PlaceManager.$clinit();
  let $instance = new PlaceManager();
  $instance.$ctor__org_jboss_elemento_router_PlaceManager__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_PlaceManager__void() {
  this.$ctor__java_lang_Object__void();
  this.f_places__org_jboss_elemento_router_PlaceManager_ = (/**@type {!HashMap<?string, Place>}*/ (HashMap.$create__()));
  this.f_pages__org_jboss_elemento_router_PlaceManager_ = (/**@type {!HashMap<Place, Supplier<Page>>}*/ (HashMap.$create__()));
  this.f_beforeHandlers__org_jboss_elemento_router_PlaceManager_ = (/**@type {!ArrayList<BeforePlaceHandler>}*/ (ArrayList.$create__()));
  this.f_afterHandlers__org_jboss_elemento_router_PlaceManager_ = (/**@type {!ArrayList<AfterPlaceHandler>}*/ (ArrayList.$create__()));
  this.f_base__org_jboss_elemento_router_PlaceManager_ = Base.$create__java_lang_String('/');
  this.f_currentPlace__org_jboss_elemento_router_PlaceManager_ = null;
  this.f_currentPage__org_jboss_elemento_router_PlaceManager_ = null;
  this.f_root__org_jboss_elemento_router_PlaceManager_ = Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body;
  }));
  this.f_title__org_jboss_elemento_router_PlaceManager_ = (/**@type {j_u_function_Function<?string, ?string>}*/ (j_u_function_Function.m_identity__java_util_function_Function()));
  this.f_notFound__org_jboss_elemento_router_PlaceManager_ = j_u_function_Function.$adapt(/**  @return {Page}*/ ((/** Place */ arg0) =>{
   let arg0_1 = /**@type {Place}*/ ($Casts.$to(arg0, Place));
   return DefaultNotFound.$create__org_jboss_elemento_router_Place(arg0_1);
  }));
  this.f_noData__org_jboss_elemento_router_PlaceManager_ = Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return DefaultNoData.$create__();
  }));
  this.f_errorPage__org_jboss_elemento_router_PlaceManager_ = BiFunction.$adapt(/**  @return {Page}*/ ((/** Place */ arg0_2, /** ?string */ arg1) =>{
   let arg0_3 = /**@type {Place}*/ ($Casts.$to(arg0_2, Place));
   let arg1_1 = /**@type {?string}*/ ($Casts.$to(arg1, j_l_String));
   return DefaultErrorPage.$create__org_jboss_elemento_router_Place__java_lang_String(arg0_3, arg1_1);
  }));
  this.f_linkSelector__org_jboss_elemento_router_PlaceManager_ = LinkSelector.$create__();
 }
 /** @nodts @return {PlaceManager} */
 m_base__java_lang_String__org_jboss_elemento_router_PlaceManager(/** ?string */ base) {
  this.f_base__org_jboss_elemento_router_PlaceManager_ = Base.$create__java_lang_String(base);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_root__java_lang_String__org_jboss_elemento_router_PlaceManager(/** ?string */ selector) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, By.m_selector__java_lang_String__org_jboss_elemento_By(selector));
  })));
 }
 /** @nodts @return {PlaceManager} */
 m_root__org_jboss_elemento_By__org_jboss_elemento_router_PlaceManager(/** By */ selector) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, selector);
  })));
 }
 /** @nodts @return {PlaceManager} */
 m_root__elemental2_dom_HTMLElement__org_jboss_elemento_router_PlaceManager(/** HTMLElement */ element) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return element;
  })));
 }
 /** @nodts @return {PlaceManager} */
 m_root__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(/** Supplier<HTMLElement> */ root) {
  this.f_root__org_jboss_elemento_router_PlaceManager_ = root;
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_title__java_util_function_Function__org_jboss_elemento_router_PlaceManager(/** j_u_function_Function<?string, ?string> */ title) {
  this.f_title__org_jboss_elemento_router_PlaceManager_ = title;
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_notFound__java_util_function_Function__org_jboss_elemento_router_PlaceManager(/** j_u_function_Function<Place, Page> */ notFound) {
  this.f_notFound__org_jboss_elemento_router_PlaceManager_ = notFound;
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_noData__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(/** Supplier<Page> */ noData) {
  this.f_noData__org_jboss_elemento_router_PlaceManager_ = noData;
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_errorPage__java_util_function_BiFunction__org_jboss_elemento_router_PlaceManager(/** BiFunction<Place, ?string, Page> */ errorPage) {
  this.f_errorPage__org_jboss_elemento_router_PlaceManager_ = errorPage;
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_beforePlace__org_jboss_elemento_router_BeforePlaceHandler__org_jboss_elemento_router_PlaceManager(/** BeforePlaceHandler */ beforePlace) {
  this.f_beforeHandlers__org_jboss_elemento_router_PlaceManager_.add(beforePlace);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_afterPlace__org_jboss_elemento_router_AfterPlaceHandler__org_jboss_elemento_router_PlaceManager(/** AfterPlaceHandler */ afterPlace) {
  this.f_afterHandlers__org_jboss_elemento_router_PlaceManager_.add(afterPlace);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_linkSelector__java_lang_String__org_jboss_elemento_router_PlaceManager(/** ?string */ selector) {
  return this.m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(By.m_selector__java_lang_String__org_jboss_elemento_By(selector), false);
 }
 /** @nodts @return {PlaceManager} */
 m_linkSelector__java_lang_String__boolean__org_jboss_elemento_router_PlaceManager(/** ?string */ selector, /** boolean */ not) {
  return this.m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(By.m_selector__java_lang_String__org_jboss_elemento_By(selector), not);
 }
 /** @nodts @return {PlaceManager} */
 m_linkSelector__org_jboss_elemento_By__org_jboss_elemento_router_PlaceManager(/** By */ selector) {
  return this.m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(selector, false);
 }
 /** @nodts @return {PlaceManager} */
 m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(/** By */ selector, /** boolean */ not) {
  this.f_linkSelector__org_jboss_elemento_router_PlaceManager_ = LinkSelector.$create__org_jboss_elemento_By__boolean(selector, not);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_register__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(/** Place */ place, /** Supplier<Page> */ page) {
  this.f_places__org_jboss_elemento_router_PlaceManager_.put(place.m_route__java_lang_String(), place);
  this.f_pages__org_jboss_elemento_router_PlaceManager_.put(place, page);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_register__org_jboss_elemento_router_Places__org_jboss_elemento_router_PlaceManager(/** Places */ places) {
  for (let $iterator = places.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<Place, Supplier<Page>>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
   {
    this.m_register__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(/**@type {Place}*/ ($Casts.$to(entry.getKey(), Place)), /**@type {Supplier<Page>}*/ ($Casts.$to(entry.getValue(), /**@type {Function}*/ (Supplier))));
   }
  }
  return this;
 }
 /** @nodts @return {Place} */
 m_current__org_jboss_elemento_router_Place() {
  return this.f_currentPlace__org_jboss_elemento_router_PlaceManager_;
 }
 /** @nodts @return {Place} */
 m_place__java_lang_String__org_jboss_elemento_router_Place(/** ?string */ path) {
  let pms = this.m_findPlace__java_lang_String__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_$p_org_jboss_elemento_router_PlaceManager(path);
  return pms.m_ok__boolean_$pp_org_jboss_elemento_router() ? pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ : null;
 }
 /** @nodts */
 m_start__void() {
  this.m_bindClickHandler__void_$p_org_jboss_elemento_router_PlaceManager();
  this.m_bindHistoryHandler__void_$p_org_jboss_elemento_router_PlaceManager();
  let pms = this.m_findPlace__java_lang_String__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_$p_org_jboss_elemento_router_PlaceManager(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.pathname);
  this.m_gotoPlace__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms).then(/**  @return {IThenable<*>}*/ ((/** ?boolean */ success) =>{
   let success_1 = /**@type {?boolean}*/ ($Casts.$to(success, Boolean));
   if (Boolean.m_booleanValue__java_lang_Boolean__boolean(success_1)) {
    this.m_updateHistory__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__boolean__void_$p_org_jboss_elemento_router_PlaceManager(pms, false);
   } else {
    PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to start place manager with ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_), []);
   }
   return null;
  }));
 }
 /** @nodts */
 m_goTo__java_lang_String__arrayOf_java_lang_String__void(/** ?string */ route, /** Array<?string> */ values) {
  this.m_goTo__java_lang_String__void(Parameter.m_encodePath__java_lang_String__arrayOf_java_lang_String__java_lang_String(route, values));
 }
 /** @nodts */
 m_goTo__java_lang_String__void(/** ?string */ path) {
  let pms = this.m_findPlace__java_lang_String__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_$p_org_jboss_elemento_router_PlaceManager(path);
  this.m_gotoPlace__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms).then(/**  @return {IThenable<*>}*/ ((/** ?boolean */ success) =>{
   let success_1 = /**@type {?boolean}*/ ($Casts.$to(success, Boolean));
   if (Boolean.m_booleanValue__java_lang_Boolean__boolean(success_1)) {
    this.m_updateHistory__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__boolean__void_$p_org_jboss_elemento_router_PlaceManager(pms, true);
   } else {
    PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to go to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_), []);
   }
   return null;
  }));
 }
 /** @nodts @return {?string} */
 m_href__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ route, /** Array<?string> */ values) {
  return this.m_href__java_lang_String__java_lang_String(Parameter.m_encodePath__java_lang_String__arrayOf_java_lang_String__java_lang_String(route, values));
 }
 /** @nodts @return {?string} */
 m_href__java_lang_String__java_lang_String(/** ?string */ path) {
  let pms = this.m_findPlace__java_lang_String__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_$p_org_jboss_elemento_router_PlaceManager(path);
  if (pms.m_ok__boolean_$pp_org_jboss_elemento_router()) {
   let relativePath = this.f_base__org_jboss_elemento_router_PlaceManager_.m_relative__java_lang_String__java_lang_String_$pp_org_jboss_elemento_router(path);
   return this.f_base__org_jboss_elemento_router_PlaceManager_.m_absolute__java_lang_String__java_lang_String_$pp_org_jboss_elemento_router(!$Equality.$same(relativePath, null) ? relativePath : pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_path__java_lang_String());
  }
  return '#';
 }
 /** @nodts */
 m_bindClickHandler__void_$p_org_jboss_elemento_router_PlaceManager() {
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let a = this.m_anchorElement__elemental2_dom_Event__elemental2_dom_HTMLAnchorElement_$p_org_jboss_elemento_router_PlaceManager(e_1);
   if (!$Equality.$same(a, null)) {
    let url = new URL(a.href, DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.origin);
    if (this.m_shouldHandleLink__elemental2_dom_HTMLAnchorElement__elemental2_dom_URL__boolean_$p_org_jboss_elemento_router_PlaceManager(a, url)) {
     let pms = this.m_findPlace__java_lang_String__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_$p_org_jboss_elemento_router_PlaceManager(url.pathname);
     e_1.preventDefault();
     this.m_gotoPlace__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms).then(/**  @return {IThenable<*>}*/ ((/** ?boolean */ success) =>{
      let success_1 = /**@type {?boolean}*/ ($Casts.$to(success, Boolean));
      if (Boolean.m_booleanValue__java_lang_Boolean__boolean(success_1)) {
       this.m_updateHistory__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__boolean__void_$p_org_jboss_elemento_router_PlaceManager(pms, true);
      } else {
       PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to go to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_), []);
      }
      return null;
     }));
    }
   }
  });
 }
 /** @nodts @return {HTMLAnchorElement} */
 m_anchorElement__elemental2_dom_Event__elemental2_dom_HTMLAnchorElement_$p_org_jboss_elemento_router_PlaceManager(/** Event */ event) {
  let /** HTMLAnchorElement */ anchorElement = null;
  let target = event.target;
  if (HTMLAnchorElement_$Overlay.$isInstance(target)) {
   anchorElement = (/**@type {HTMLAnchorElement}*/ ($Casts.$to(target, HTMLAnchorElement_$Overlay)));
  } else {
   let closest = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Element}*/ ($Casts.$to(target, Element_$Overlay)), By.m_element__java_lang_String__org_jboss_elemento_By('a'));
   if (HTMLAnchorElement_$Overlay.$isInstance(closest)) {
    anchorElement = (/**@type {HTMLAnchorElement}*/ ($Casts.$to(closest, HTMLAnchorElement_$Overlay)));
   }
  }
  return anchorElement;
 }
 /** @nodts @return {boolean} */
 m_shouldHandleLink__elemental2_dom_HTMLAnchorElement__elemental2_dom_URL__boolean_$p_org_jboss_elemento_router_PlaceManager(/** HTMLAnchorElement */ a, /** URL */ url) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(url.origin, DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.origin) && j_l_String.m_isEmpty__java_lang_String__boolean(url.hash)) {
   return this.f_linkSelector__org_jboss_elemento_router_PlaceManager_.m_matches__elemental2_dom_HTMLAnchorElement__boolean_$pp_org_jboss_elemento_router(a);
  }
  return false;
 }
 /** @nodts */
 m_bindHistoryHandler__void_$p_org_jboss_elemento_router_PlaceManager() {
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_popstate__org_jboss_elemento_EventType, (/** PopStateEvent */ event) =>{
   let event_1 = /**@type {PopStateEvent}*/ ($Casts.$to(event, PopStateEvent_$Overlay));
   if (!$Equality.$same(event_1.state, null)) {
    let route = j_l_String.m_valueOf__java_lang_Object__java_lang_String(event_1.state);
    this.m_gotoPlace__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(this.m_findPlace__java_lang_String__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_$p_org_jboss_elemento_router_PlaceManager(route));
   }
  });
 }
 /** @nodts @return {PlaceManagerStruct} */
 m_findPlace__java_lang_String__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_$p_org_jboss_elemento_router_PlaceManager(/** ?string */ path) {
  let pms = PlaceManagerStruct.$create__();
  PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Find place for \'%s\'', [path]);
  if (!$Equality.$same(path, null)) {
   let relativePath = this.f_base__org_jboss_elemento_router_PlaceManager_.m_relative__java_lang_String__java_lang_String_$pp_org_jboss_elemento_router(path);
   pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = (/**@type {Place}*/ ($Casts.$to(this.f_places__org_jboss_elemento_router_PlaceManager_.get(relativePath), Place)));
   if ($Equality.$same(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, null)) {
    PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('No direct match for \'%s\'. Looking for parameterized place.', [path]);
    for (let iterator = this.f_places__org_jboss_elemento_router_PlaceManager_.values().m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean() && $Equality.$same(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, null); ) {
     let possiblePlace = /**@type {Place}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), Place));
     if (possiblePlace.f_hasParameter__org_jboss_elemento_router_Place && Parameter.m_match__java_lang_String__java_lang_String__boolean(possiblePlace.m_route__java_lang_String(), relativePath)) {
      pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = possiblePlace;
      pms.f_parameter__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = Parameter.$create__java_lang_String__java_lang_String(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_route__java_lang_String(), relativePath);
     }
    }
   }
  }
  if ($Equality.$same(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, null)) {
   PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('No place found for \'%s\'.', [path]);
   pms.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = ErrorType.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_ErrorType;
   pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = Place.$create__java_lang_String($Equality.$same(path, null) || j_l_String.m_isEmpty__java_lang_String__boolean(j_l_String.m_trim__java_lang_String__java_lang_String(path)) ? '/' : path);
  } else {
   PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Found %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_]);
  }
  return pms;
 }
 /** @nodts @return {Promise<?boolean>} */
 m_gotoPlace__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(/** PlaceManagerStruct */ pms) {
  if (pms.m_ok__boolean_$pp_org_jboss_elemento_router()) {
   if (this.f_pages__org_jboss_elemento_router_PlaceManager_.containsKey(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_)) {
    PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Goto %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_]);
    try {
     for (let $iterator = this.f_beforeHandlers__org_jboss_elemento_router_PlaceManager_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
      let handler = /**@type {BeforePlaceHandler}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (BeforePlaceHandler)));
      {
       if (!handler.m_shouldGoTo__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__boolean(this, pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_)) {
        PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Navigation canceled by before handler for %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_]);
        return /**@type {!Promise<boolean>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(false));
       } else {
        handler.m_beforePlace__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__void(this, pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_);
       }
      }
     }
    } catch (__$jsexc) {
     let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
     {
      let t = /**@type {Throwable}*/ (__$exc);
      pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = this.m_errorPage__org_jboss_elemento_router_Place__java_lang_String__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, 'Error in place before handler: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(t.m_getMessage__java_lang_String()));
      return this.m_gotoPage__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms);
     }
    }
    let pageSupplier = /**@type {Supplier<Page>}*/ ($Casts.$to(this.f_pages__org_jboss_elemento_router_PlaceManager_.get(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_), /**@type {Function}*/ (Supplier)));
    if ($Equality.$same(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.f_loader__org_jboss_elemento_router_Place, null)) {
     PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Create page for %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_]);
     try {
      pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = (/**@type {Page}*/ ($Casts.$to(pageSupplier.m_get__java_lang_Object(), /**@type {Function}*/ (Page))));
     } catch (__$jsexc_1) {
      let __$exc_1 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_1);
      {
       let t_1 = /**@type {Throwable}*/ (__$exc_1);
       pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = this.m_errorPage__org_jboss_elemento_router_Place__java_lang_String__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, 'Error when creating page: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(t_1.m_getMessage__java_lang_String()));
      }
     }
     return this.m_gotoPage__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms);
    } else {
     PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Load data for %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_]);
     return /**@type {!Promise<boolean>}*/ ((/**@type {!Promise<boolean>}*/ (pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.f_loader__org_jboss_elemento_router_Place.m_load__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__elemental2_promise_Promise(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, pms.f_parameter__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_).then(/**  @return {IThenable<?boolean>}*/ ((/** ? */ data) =>{
      PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Data loaded successfully. Create page for %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_]);
      pms.f_data__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = LoadedData.$create__java_lang_Object(data);
      pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = (/**@type {Page}*/ ($Casts.$to(pageSupplier.m_get__java_lang_Object(), /**@type {Function}*/ (Page))));
      return this.m_gotoPage__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms);
     })))).catch(/**  @return {IThenable<?boolean>}*/ ((/** !* */ error) =>{
      let errorAsString = j_l_String.m_valueOf__java_lang_Object__java_lang_String(error);
      PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to load page for %s: %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, errorAsString]);
      pms.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = ErrorType.f_NO_DATA__org_jboss_elemento_router_PlaceManager_ErrorType;
      pms.f_data__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = LoadedData.$create__java_lang_Object(errorAsString);
      pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = this.m_noData__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_);
      return this.m_gotoPage__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms);
     })));
    }
   } else {
    pms.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = ErrorType.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_ErrorType;
    pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = this.m_notFound__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_);
    return this.m_gotoPage__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms);
   }
  } else {
   if ($Equality.$same(pms.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, ErrorType.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_ErrorType)) {
    pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = this.m_notFound__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_);
   } else if ($Equality.$same(pms.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, ErrorType.f_NO_DATA__org_jboss_elemento_router_PlaceManager_ErrorType)) {
    pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = this.m_noData__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_);
   } else if ($Equality.$same(pms.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, ErrorType.f_UNDEFINED__org_jboss_elemento_router_PlaceManager_ErrorType)) {
    pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = this.m_errorPage__org_jboss_elemento_router_Place__java_lang_String__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, 'Undefined error');
   }
   return this.m_gotoPage__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(pms);
  }
 }
 /** @nodts @return {Promise<?boolean>} */
 m_gotoPage__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__elemental2_promise_Promise_$p_org_jboss_elemento_router_PlaceManager(/** PlaceManagerStruct */ pms) {
  let rootElement = !$Equality.$same(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.f_root__org_jboss_elemento_router_Place, null) ? /**@type {HTMLElement}*/ ($Casts.$to(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.f_root__org_jboss_elemento_router_Place.m_get__java_lang_Object(), $Overlay)) : /**@type {HTMLElement}*/ ($Casts.$to(this.f_root__org_jboss_elemento_router_PlaceManager_.m_get__java_lang_Object(), $Overlay));
  if ($Equality.$same(rootElement, null)) {
   PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to find root element for %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_]);
   return /**@type {!Promise<boolean>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(false));
  }
  if (!$Equality.$same(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_title__java_lang_String(), null)) {
   DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.title = (/**@type {?string}*/ ($Casts.$to(this.f_title__org_jboss_elemento_router_PlaceManager_.m_apply__java_lang_Object__java_lang_Object(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_title__java_lang_String()), j_l_String)));
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(rootElement);
  if (!$Equality.$same(this.f_currentPage__org_jboss_elemento_router_PlaceManager_, null)) {
   this.f_currentPage__org_jboss_elemento_router_PlaceManager_.m_detach__void();
  }
  for (let $iterator = pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_elements__org_jboss_elemento_router_Place__org_jboss_elemento_router_Parameter__org_jboss_elemento_router_LoadedData__java_lang_Iterable(pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, pms.f_parameter__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, pms.f_data__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    rootElement.appendChild(e);
   }
  }
  this.f_currentPage__org_jboss_elemento_router_PlaceManager_ = pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_;
  pms.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_attach__void();
  if (pms.m_ok__boolean_$pp_org_jboss_elemento_router()) {
   this.f_currentPlace__org_jboss_elemento_router_PlaceManager_ = pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_;
   PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_info__java_lang_String__arrayOf_java_lang_Object__void('Navigation to %s', [pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_]);
   for (let $iterator_1 = this.f_afterHandlers__org_jboss_elemento_router_PlaceManager_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let handler = /**@type {AfterPlaceHandler}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), /**@type {Function}*/ (AfterPlaceHandler)));
    {
     handler.m_afterPlace__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__void(this, pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_);
    }
   }
   return /**@type {!Promise<boolean>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(true));
  } else {
   return /**@type {!Promise<boolean>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(false));
  }
 }
 /** @nodts @return {Page} */
 m_notFound__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(/** Place */ place) {
  PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('No page found for %s', [place]);
  if (!$Equality.$same(this.f_notFound__org_jboss_elemento_router_PlaceManager_, null)) {
   return /**@type {Page}*/ ($Casts.$to(this.f_notFound__org_jboss_elemento_router_PlaceManager_.m_apply__java_lang_Object__java_lang_Object(place), /**@type {Function}*/ (Page)));
  } else {
   return DefaultNotFound.$create__org_jboss_elemento_router_Place(place);
  }
 }
 /** @nodts @return {Page} */
 m_noData__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(/** Place */ place) {
  PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('No data for %s', [place]);
  if (!$Equality.$same(this.f_noData__org_jboss_elemento_router_PlaceManager_, null)) {
   return /**@type {Page}*/ ($Casts.$to(this.f_noData__org_jboss_elemento_router_PlaceManager_.m_get__java_lang_Object(), /**@type {Function}*/ (Page)));
  } else {
   return DefaultNoData.$create__();
  }
 }
 /** @nodts @return {Page} */
 m_errorPage__org_jboss_elemento_router_Place__java_lang_String__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(/** Place */ place, /** ?string */ error) {
  PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Error while going to %s', [place]);
  if (!$Equality.$same(this.f_errorPage__org_jboss_elemento_router_PlaceManager_, null)) {
   return /**@type {Page}*/ ($Casts.$to(this.f_errorPage__org_jboss_elemento_router_PlaceManager_.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(place, error), /**@type {Function}*/ (Page)));
  } else {
   return DefaultErrorPage.$create__org_jboss_elemento_router_Place__java_lang_String(place, error);
  }
 }
 /** @nodts */
 m_updateHistory__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__boolean__void_$p_org_jboss_elemento_router_PlaceManager(/** PlaceManagerStruct */ pms, /** boolean */ push) {
  let url = this.f_base__org_jboss_elemento_router_PlaceManager_.m_absolute__java_lang_String__java_lang_String_$pp_org_jboss_elemento_router(pms.f_parameter__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_isEmpty__boolean() ? pms.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_path__java_lang_String() : pms.f_parameter__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_.m_path__java_lang_String());
  if (push) {
   History_$Overlay.m_pushState__$devirt__elemental2_dom_History__java_lang_Object__java_lang_String__java_lang_String__void(goog.global.history, url, '', url);
  } else {
   History_$Overlay.m_replaceState__$devirt__elemental2_dom_History__java_lang_Object__java_lang_String__java_lang_String__void(goog.global.history, url, '', j_l_String.m_valueOf__java_lang_Object__java_lang_String(url) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.search));
  }
 }
 /** @nodts */
 static $clinit() {
  PlaceManager.$clinit = () =>{};
  PlaceManager.$loadModules();
  j_l_Object.$clinit();
  PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(PlaceManager).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PlaceManager;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  History_$Overlay = goog.module.get('elemental2.dom.History.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  PopStateEvent_$Overlay = goog.module.get('elemental2.dom.PopStateEvent.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  AfterPlaceHandler = goog.module.get('org.jboss.elemento.router.AfterPlaceHandler$impl');
  Base = goog.module.get('org.jboss.elemento.router.Base$impl');
  BeforePlaceHandler = goog.module.get('org.jboss.elemento.router.BeforePlaceHandler$impl');
  LinkSelector = goog.module.get('org.jboss.elemento.router.LinkSelector$impl');
  LoadedData = goog.module.get('org.jboss.elemento.router.LoadedData$impl');
  Page = goog.module.get('org.jboss.elemento.router.Page$impl');
  Parameter = goog.module.get('org.jboss.elemento.router.Parameter$impl');
  Place = goog.module.get('org.jboss.elemento.router.Place$impl');
  DefaultErrorPage = goog.module.get('org.jboss.elemento.router.PlaceManager.DefaultErrorPage$impl');
  DefaultNoData = goog.module.get('org.jboss.elemento.router.PlaceManager.DefaultNoData$impl');
  DefaultNotFound = goog.module.get('org.jboss.elemento.router.PlaceManager.DefaultNotFound$impl');
  ErrorType = goog.module.get('org.jboss.elemento.router.PlaceManager.ErrorType$impl');
  PlaceManagerStruct = goog.module.get('org.jboss.elemento.router.PlaceManager.PlaceManagerStruct$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
PlaceManager.f_logger__org_jboss_elemento_router_PlaceManager_;
/**@const {string} @nodts*/
PlaceManager.f_ROOT_STYLE__org_jboss_elemento_router_PlaceManager_ = 'display:grid;place-items:center;height:100vh';
/**@const {string} @nodts*/
PlaceManager.f_CONTAINER_STYLE__org_jboss_elemento_router_PlaceManager_ = 'width:50%;height:50%;';
/**@const {string} @nodts*/
PlaceManager.f_HEADER_STYLE__org_jboss_elemento_router_PlaceManager_ = 'font-size:3rem;text-align:center;margin-bottom:1rem';
/**@const {string} @nodts*/
PlaceManager.f_PARAGRAPH_STYLE__org_jboss_elemento_router_PlaceManager_ = 'font-size:1.5rem;text-align:center;margin-bottom:1rem';
/**@const {string} @nodts*/
PlaceManager.f_ERROR_STYLE__org_jboss_elemento_router_PlaceManager_ = 'font-size:1.2rem;text-align:center;text-wrap:wrap;';
$Util.$setClassMetadata(PlaceManager, 'org.jboss.elemento.router.PlaceManager');

exports = PlaceManager;

//# sourceMappingURL=PlaceManager.js.map
