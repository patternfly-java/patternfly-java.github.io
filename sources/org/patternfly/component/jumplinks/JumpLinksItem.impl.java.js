goog.module('org.patternfly.component.jumplinks.JumpLinksItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const JumpLinksSubComponent = goog.require('org.patternfly.component.jumplinks.JumpLinksSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let JumpLinks = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinks$impl');
let JumpLinksList = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksList$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {JumpLinksSubComponent<HTMLLIElement, JumpLinksItem>}
 * @implements {ComponentContext<HTMLLIElement, JumpLinksItem>}
 * @implements {ElementTextDelegate<HTMLLIElement, JumpLinksItem>}
 * @implements {HasIdentifier<HTMLLIElement, JumpLinksItem>}
 */
class JumpLinksItem extends JumpLinksSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_jumplinks_JumpLinksItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_jumplinks_JumpLinksItem_;
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_jumplinks_JumpLinksItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_jumplinks_JumpLinksItem_;
  /**@type {JumpLinksList} @nodts*/
  this.f_list__org_patternfly_component_jumplinks_JumpLinksItem;
 }
 /** @nodts @return {JumpLinksItem} */
 static m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ identifier, /** ?string */ text) {
  JumpLinksItem.$clinit();
  return JumpLinksItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(text);
 }
 /** @nodts @return {JumpLinksItem} */
 static m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ href) {
  JumpLinksItem.$clinit();
  return JumpLinksItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(text).m_href__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(href);
 }
 /** @nodts @return {JumpLinksItem} */
 static m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ href, /** ?string */ target) {
  JumpLinksItem.$clinit();
  return JumpLinksItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(text).m_href__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(href).m_target__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(target);
 }
 /** @nodts @return {!JumpLinksItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  JumpLinksItem.$clinit();
  let $instance = new JumpLinksItem();
  $instance.$ctor__org_patternfly_component_jumplinks_JumpLinksItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_jumplinks_JumpLinksItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_jumplinks_JumpLinksSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(JumpLinksItem.f_SUB_COMPONENT_ID__org_patternfly_component_jumplinks_JumpLinksItem, JumpLinksItem.f_SUB_COMPONENT_NAME__org_patternfly_component_jumplinks_JumpLinksItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_jumplinks_JumpLinksItem_ = identifier;
  this.f_data__org_patternfly_component_jumplinks_JumpLinksItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_jumplinks_JumpLinksItem_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder()).m_link__org_patternfly_component_button_Button().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_jumplinks_JumpLinksItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_link__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let jumpLinks = /**@type {JumpLinks}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), JumpLinks));
   jumpLinks.m_select__org_patternfly_component_jumplinks_JumpLinksItem__void(this);
  }), Button)))), HTMLContainerBuilder)));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_jumplinks_JumpLinksItem_;
 }
 /** @nodts @return {JumpLinksItem} */
 m_addList__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(/** JumpLinksList */ list) {
  return this.m_add__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(list);
 }
 /** @nodts @return {JumpLinksItem} */
 m_add__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(/** JumpLinksList */ list) {
  this.f_list__org_patternfly_component_jumplinks_JumpLinksItem = list;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLUListElement}*/ ($Casts.$to(list.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_active__org_patternfly_component_jumplinks_JumpLinksItem() {
  return this.m_active__boolean__org_patternfly_component_jumplinks_JumpLinksItem(true);
 }
 /** @nodts @return {JumpLinksItem} */
 m_active__boolean__org_patternfly_component_jumplinks_JumpLinksItem(/** boolean */ active) {
  this.m_markSelected__boolean__void_$pp_org_patternfly_component_jumplinks(active);
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ text) {
  Elements.m_textNode__elemental2_dom_Element__java_lang_String__void(this.f_textElement__org_patternfly_component_jumplinks_JumpLinksItem_, text);
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_href__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ href) {
  this.f_button__org_patternfly_component_jumplinks_JumpLinksItem_.m_href__java_lang_String__org_patternfly_component_button_Button(href);
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_target__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ target) {
  this.f_button__org_patternfly_component_jumplinks_JumpLinksItem_.m_target__java_lang_String__org_patternfly_component_button_Button(target);
  return this;
 }
 /** @nodts @template T @return {JumpLinksItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_jumplinks_JumpLinksItem_.put(key, value);
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_that__org_patternfly_component_jumplinks_JumpLinksItem() {
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_jumplinks_JumpLinksItem(/** ComponentHandler<JumpLinksItem> */ handler) {
  this.f_button__org_patternfly_component_jumplinks_JumpLinksItem_.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_jumplinks_JumpLinksItem_;
 }
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return Elements.m_textNode__elemental2_dom_Element__java_lang_String(this.f_textElement__org_patternfly_component_jumplinks_JumpLinksItem_);
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_jumplinks_JumpLinksItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_jumplinks_JumpLinksItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_jumplinks_JumpLinksItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_jumplinks(/** boolean */ selected) {
  this.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), selected);
  if (selected) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_current__org_patternfly_core_Aria, 'location');
  } else {
   (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).removeAttribute(Aria.f_current__org_patternfly_core_Aria);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_jumplinks_JumpLinksItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {JumpLinksItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_jumplinks_JumpLinksItem(arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ arg0, /** T */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ arg0, /** Supplier<T> */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(this, arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(arg0);
 }
 /** @nodts */
 static $clinit() {
  JumpLinksItem.$clinit = () =>{};
  JumpLinksItem.$loadModules();
  JumpLinksSubComponent.$clinit();
  ComponentContext.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JumpLinksItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  JumpLinks = goog.module.get('org.patternfly.component.jumplinks.JumpLinks$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
JumpLinksItem.f_SUB_COMPONENT_ID__org_patternfly_component_jumplinks_JumpLinksItem = 'jli';
/**@const {string} @nodts*/
JumpLinksItem.f_SUB_COMPONENT_NAME__org_patternfly_component_jumplinks_JumpLinksItem = 'JumpLinksItem';
ComponentContext.$markImplementor(JumpLinksItem);
ElementTextDelegate.$markImplementor(JumpLinksItem);
HasIdentifier.$markImplementor(JumpLinksItem);
$Util.$setClassMetadata(JumpLinksItem, 'org.patternfly.component.jumplinks.JumpLinksItem');

exports = JumpLinksItem;

//# sourceMappingURL=JumpLinksItem.js.map
