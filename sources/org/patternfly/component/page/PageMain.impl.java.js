goog.module('org.patternfly.component.page.PageMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const PageSubComponent = goog.require('org.patternfly.component.page.PageSubComponent$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');

let AddEventListenerOptions_$Overlay = goog.forwardDeclare('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let TouchEvent_$Overlay = goog.forwardDeclare('elemental2.dom.TouchEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Page = goog.forwardDeclare('org.patternfly.component.page.Page$impl');
let PageGroup = goog.forwardDeclare('org.patternfly.component.page.PageGroup$impl');
let PageSectionLike = goog.forwardDeclare('org.patternfly.component.page.PageSectionLike$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSubComponent<HTMLElement, PageMain>}
 * @implements {ElementContainerDelegate<HTMLElement, PageMain>}
 * @implements {Fill<HTMLElement, PageMain>}
 */
class PageMain extends PageSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLContainerBuilder<HTMLElement>} @nodts*/
  this.f_mc__org_patternfly_component_page_PageMain_;
 }
 /** @nodts @return {PageMain} */
 static m_pageMain__java_lang_String__org_patternfly_component_page_PageMain(/** ?string */ id) {
  PageMain.$clinit();
  return PageMain.$create__java_lang_String(id);
 }
 /** @nodts @return {!PageMain} */
 static $create__java_lang_String(/** ?string */ id) {
  PageMain.$clinit();
  let $instance = new PageMain();
  $instance.$ctor__org_patternfly_component_page_PageMain__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMain__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_page_PageSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PageMain.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageMain, PageMain.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMain, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes, Classes.f_container__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_mc__org_patternfly_component_page_PageMain_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_main__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_main__org_patternfly_core_Roles), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_mc__org_patternfly_component_page_PageMain_.m_element__elemental2_dom_HTMLElement());
  let options = AddEventListenerOptions_$Overlay.m_create__elemental2_dom_AddEventListenerOptions();
  options.passive = true;
  this.f_mc__org_patternfly_component_page_PageMain_.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_mousedown__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_onMainClick__void_$p_org_patternfly_component_page_PageMain();
  });
  this.f_mc__org_patternfly_component_page_PageMain_.m_on__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_touchstart__org_jboss_elemento_EventType, options, (/** TouchEvent */ e_2) =>{
   let e_3 = /**@type {TouchEvent}*/ ($Casts.$to(e_2, TouchEvent_$Overlay));
   this.m_onMainClick__void_$p_org_patternfly_component_page_PageMain();
  });
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_mc__org_patternfly_component_page_PageMain_.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts @return {PageMain} */
 m_addGroup__org_patternfly_component_page_PageGroup__org_patternfly_component_page_PageMain(/** PageGroup */ group) {
  return /**@type {PageMain}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), PageMain));
 }
 /** @nodts @template E, P @return {PageMain} */
 m_addSection__org_patternfly_component_page_PageSectionLike__org_patternfly_component_page_PageMain(/** PageSectionLike<E, P> */ pageSection) {
  return /**@type {PageMain}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(pageSection), PageMain));
 }
 /** @nodts @return {PageMain} */
 m_that__org_patternfly_component_page_PageMain() {
  return this;
 }
 /** @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_mc__org_patternfly_component_page_PageMain_);
 }
 /** @nodts */
 m_replace__org_jboss_elemento_IsElement__void(/** IsElement<?> */ element) {
  this.m_clear__void();
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
 }
 /** @nodts */
 m_replace__elemental2_dom_Element__void(/** Element */ element) {
  this.m_clear__void();
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
 }
 /** @nodts */
 m_replace__arrayOf_elemental2_dom_Element__void(/** Array<Element> */ elements) {
  this.m_clear__void();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
 }
 /** @nodts */
 m_replace__arrayOf_elemental2_dom_HTMLElement__void(/** Array<HTMLElement> */ elements) {
  this.m_clear__void();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
 }
 /** @nodts */
 m_replace__arrayOf_org_jboss_elemento_IsElement__void(/** Array<IsElement<?>> */ elements) {
  this.m_clear__void();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
   }
  }
 }
 /** @nodts */
 m_replace__java_lang_Iterable__void(/** Iterable<?> */ elements) {
  this.m_clear__void();
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = $iterator.m_next__java_lang_Object();
   {
    if ($Overlay.$isInstance(element)) {
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLElement}*/ ($Casts.$to(element, $Overlay)));
    } else if (IsElement.$isInstance(element)) {
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder((/**@type {IsElement}*/ ($Casts.$to(element, /**@type {Function}*/ (IsElement)))).m_element__elemental2_dom_Element());
    }
   }
  }
 }
 /** @nodts */
 m_onMainClick__void_$p_org_patternfly_component_page_PageMain() {
  if (Page.m_page__org_patternfly_component_page_Page().m_belowXl__boolean_$pp_org_patternfly_component_page() && !$Equality.$same(Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_page_PageSidebar(), null) && Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_page_PageSidebar().m_expanded__boolean()) {
   Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_page_PageSidebar().m_collapse__void();
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMain();
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMain} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PageMain}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMain} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {PageMain}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PageMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMain} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {PageMain}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PageMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMain} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageMain}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMain} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageMain}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMain} */
 m_add__java_lang_String__org_patternfly_component_page_PageMain(/** ?string */ arg0) {
  return /**@type {PageMain}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMain} */
 m_add__elemental2_dom_Node__org_patternfly_component_page_PageMain(/** Node */ arg0) {
  return /**@type {PageMain}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PageMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMain} */
 m_add__java_util_function_Supplier__org_patternfly_component_page_PageMain(/** Supplier<Node> */ arg0) {
  return /**@type {PageMain}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PageMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMain} */
 m_fill__org_patternfly_component_page_PageMain() {
  return /**@type {PageMain}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMain} */
 m_fill__boolean__org_patternfly_component_page_PageMain(/** boolean */ arg0) {
  return /**@type {PageMain}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMain));
 }
 /** @nodts */
 static $clinit() {
  PageMain.$clinit = () =>{};
  PageMain.$loadModules();
  PageSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
  Fill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMain;
 }
 
 /** @nodts */
 static $loadModules() {
  AddEventListenerOptions_$Overlay = goog.module.get('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  TouchEvent_$Overlay = goog.module.get('elemental2.dom.TouchEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  Page = goog.module.get('org.patternfly.component.page.Page$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageMain.f_SUB_COMPONENT_ID__org_patternfly_component_page_PageMain = 'pm';
/**@const {string} @nodts*/
PageMain.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMain = 'PageMain';
ElementContainerDelegate.$markImplementor(PageMain);
Fill.$markImplementor(PageMain);
$Util.$setClassMetadata(PageMain, 'org.patternfly.component.page.PageMain');

exports = PageMain;

//# sourceMappingURL=PageMain.js.map
