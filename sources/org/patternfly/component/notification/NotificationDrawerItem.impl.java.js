goog.module('org.patternfly.component.notification.NotificationDrawerItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const NotificationDrawerSubComponent = goog.require('org.patternfly.component.notification.NotificationDrawerSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let NotificationDrawerItemBody = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerItemBody$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NotificationDrawerSubComponent<HTMLElement, NotificationDrawerItem>}
 * @implements {ComponentContext<HTMLElement, NotificationDrawerItem>}
 * @implements {HasIdentifier<HTMLElement, NotificationDrawerItem>}
 */
class NotificationDrawerItem extends NotificationDrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_notification_NotificationDrawerItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_notification_NotificationDrawerItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_screenReaderElement__org_patternfly_component_notification_NotificationDrawerItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_headerElement__org_patternfly_component_notification_NotificationDrawerItem_;
  /**@type {List<ComponentHandler<NotificationDrawerItem>>} @nodts*/
  this.f_handler__org_patternfly_component_notification_NotificationDrawerItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_actionElement__org_patternfly_component_notification_NotificationDrawerItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_timestampElement__org_patternfly_component_notification_NotificationDrawerItem_;
 }
 /** @nodts @return {NotificationDrawerItem} */
 static m_notificationDrawerItem__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(/** Severity */ type, /** ?string */ title) {
  NotificationDrawerItem.$clinit();
  return NotificationDrawerItem.$create__org_patternfly_component_Severity__java_lang_String__java_lang_String(type, Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_NotificationDrawer__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), title);
 }
 /** @nodts @return {NotificationDrawerItem} */
 static m_notificationDrawerItem__org_patternfly_component_Severity__java_lang_String__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(/** Severity */ type, /** ?string */ identifier, /** ?string */ title) {
  NotificationDrawerItem.$clinit();
  return NotificationDrawerItem.$create__org_patternfly_component_Severity__java_lang_String__java_lang_String(type, identifier, title);
 }
 /** @nodts @return {!NotificationDrawerItem} */
 static $create__org_patternfly_component_Severity__java_lang_String__java_lang_String(/** Severity */ severity, /** ?string */ identifier, /** ?string */ title) {
  NotificationDrawerItem.$clinit();
  let $instance = new NotificationDrawerItem();
  $instance.$ctor__org_patternfly_component_notification_NotificationDrawerItem__org_patternfly_component_Severity__java_lang_String__java_lang_String__void(severity, identifier, title);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_notification_NotificationDrawerItem__org_patternfly_component_Severity__java_lang_String__java_lang_String__void(/** Severity */ severity, /** ?string */ identifier, /** ?string */ title) {
  this.$ctor__org_patternfly_component_notification_NotificationDrawerSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(NotificationDrawerItem.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerItem, NotificationDrawerItem.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String))), severity.f_status__org_patternfly_component_Severity.m_modifier__java_lang_String()], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, 0), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_notification_NotificationDrawerItem_ = identifier;
  this.f_data__org_patternfly_component_notification_NotificationDrawerItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_handler__org_patternfly_component_notification_NotificationDrawerItem_ = (/**@type {!ArrayList<ComponentHandler<NotificationDrawerItem>>}*/ (ArrayList.$create__()));
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.m_element__elemental2_dom_HTMLElement(), EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_handler__org_patternfly_component_notification_NotificationDrawerItem_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<NotificationDrawerItem> */ h) =>{
    let h_1 = /**@type {ComponentHandler<NotificationDrawerItem>}*/ ($Casts.$to(h, /**@type {Function}*/ (ComponentHandler)));
    h_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
   }));
  });
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_screenReaderElement__org_patternfly_component_notification_NotificationDrawerItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('unread'), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_headerElement__org_patternfly_component_notification_NotificationDrawerItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(severity.m_icon__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(2).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes, Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__java_lang_Object__java_lang_String(severity.name()) + ' notification:'), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(title), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_addAction__org_patternfly_component_menu_Dropdown__org_patternfly_component_notification_NotificationDrawerItem(/** Dropdown */ dropdown) {
  return this.m_addAction__elemental2_dom_HTMLElement__org_patternfly_component_notification_NotificationDrawerItem(dropdown.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_addAction__elemental2_dom_HTMLElement__org_patternfly_component_notification_NotificationDrawerItem(/** HTMLElement */ element) {
  this.m_failSafeActionElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_notification_NotificationDrawerItem().appendChild(element);
  return this;
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_addBody__org_patternfly_component_notification_NotificationDrawerItemBody__org_patternfly_component_notification_NotificationDrawerItem(/** NotificationDrawerItemBody */ body) {
  return /**@type {NotificationDrawerItem}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), NotificationDrawerItem));
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_hoverable__org_patternfly_component_notification_NotificationDrawerItem() {
  return this.m_hoverable__boolean__org_patternfly_component_notification_NotificationDrawerItem(true);
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_hoverable__boolean__org_patternfly_component_notification_NotificationDrawerItem(/** boolean */ hoverable) {
  return /**@type {NotificationDrawerItem}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_notification_NotificationDrawerItem(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_hoverable__org_patternfly_style_Classes, hoverable), NotificationDrawerItem));
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_read__org_patternfly_component_notification_NotificationDrawerItem() {
  return this.m_read__boolean__org_patternfly_component_notification_NotificationDrawerItem(true);
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_read__boolean__org_patternfly_component_notification_NotificationDrawerItem(/** boolean */ read) {
  this.f_screenReaderElement__org_patternfly_component_notification_NotificationDrawerItem_.textContent = read ? 'read' : 'unread';
  return /**@type {NotificationDrawerItem}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_notification_NotificationDrawerItem(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_read__org_patternfly_style_Classes, read), NotificationDrawerItem));
 }
 /** @nodts @template T @return {NotificationDrawerItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_notification_NotificationDrawerItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_notification_NotificationDrawerItem_.put(key, value);
  return this;
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_timestamp__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(/** ?string */ timestamp) {
  this.m_failSafeTimestampElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_notification_NotificationDrawerItem().textContent = timestamp;
  return this;
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_that__org_patternfly_component_notification_NotificationDrawerItem() {
  return this;
 }
 /** @nodts @return {NotificationDrawerItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_notification_NotificationDrawerItem(/** ComponentHandler<NotificationDrawerItem> */ handler) {
  this.f_handler__org_patternfly_component_notification_NotificationDrawerItem_.add(handler);
  return this;
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_notification_NotificationDrawerItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_notification_NotificationDrawerItem_.get(key));
  }
  return null;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_notification_NotificationDrawerItem_.containsKey(key);
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_notification_NotificationDrawerItem_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeActionElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_notification_NotificationDrawerItem() {
  if ($Equality.$same(this.f_actionElement__org_patternfly_component_notification_NotificationDrawerItem_, null)) {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(this.f_actionElement__org_patternfly_component_notification_NotificationDrawerItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), this.f_headerElement__org_patternfly_component_notification_NotificationDrawerItem_);
  }
  return this.f_actionElement__org_patternfly_component_notification_NotificationDrawerItem_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTimestampElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_notification_NotificationDrawerItem() {
  if ($Equality.$same(this.f_timestampElement__org_patternfly_component_notification_NotificationDrawerItem_, null)) {
   this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_timestampElement__org_patternfly_component_notification_NotificationDrawerItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes, Classes.f_timestamp__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  }
  return this.f_timestampElement__org_patternfly_component_notification_NotificationDrawerItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_notification_NotificationDrawerItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {NotificationDrawerItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_notification_NotificationDrawerItem(arg0, arg1);
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
 /** @nodts */
 static $clinit() {
  NotificationDrawerItem.$clinit = () =>{};
  NotificationDrawerItem.$loadModules();
  NotificationDrawerSubComponent.$clinit();
  ComponentContext.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationDrawerItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
NotificationDrawerItem.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerItem = 'ndi';
/**@const {string} @nodts*/
NotificationDrawerItem.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerItem = 'NotificationDrawerItem';
ComponentContext.$markImplementor(NotificationDrawerItem);
HasIdentifier.$markImplementor(NotificationDrawerItem);
$Util.$setClassMetadata(NotificationDrawerItem, 'org.patternfly.component.notification.NotificationDrawerItem');

exports = NotificationDrawerItem;

//# sourceMappingURL=NotificationDrawerItem.js.map
