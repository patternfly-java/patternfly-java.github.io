goog.module('org.patternfly.component.notification.NotificationDrawer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let NotificationDrawerBody = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerBody$impl');
let NotificationDrawerHeader = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerHeader$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, NotificationDrawer>}
 * @implements {Closeable<HTMLElement, NotificationDrawer>}
 */
class NotificationDrawer extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {NotificationDrawerHeader} @nodts*/
  this.f_header__org_patternfly_component_notification_NotificationDrawer_;
  /**@type {NotificationDrawerBody} @nodts*/
  this.f_body__org_patternfly_component_notification_NotificationDrawer_;
  /**@type {List<CloseHandler<NotificationDrawer>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_notification_NotificationDrawer_;
 }
 /** @nodts @return {NotificationDrawer} */
 static m_notificationDrawer__org_patternfly_component_notification_NotificationDrawer() {
  NotificationDrawer.$clinit();
  return NotificationDrawer.$create__();
 }
 /** @nodts @return {!NotificationDrawer} */
 static $create__() {
  let $instance = new NotificationDrawer();
  $instance.$ctor__org_patternfly_component_notification_NotificationDrawer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_notification_NotificationDrawer__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_NotificationDrawer__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_closeHandler__org_patternfly_component_notification_NotificationDrawer_ = (/**@type {!ArrayList<CloseHandler<NotificationDrawer>>}*/ (ArrayList.$create__()));
  this.m_storeComponent__void();
 }
 /** @nodts @return {NotificationDrawer} */
 m_addHeader__org_patternfly_component_notification_NotificationDrawerHeader__org_patternfly_component_notification_NotificationDrawer(/** NotificationDrawerHeader */ header) {
  return this.m_add__org_patternfly_component_notification_NotificationDrawerHeader__org_patternfly_component_notification_NotificationDrawer(header);
 }
 /** @nodts @return {NotificationDrawer} */
 m_add__org_patternfly_component_notification_NotificationDrawerHeader__org_patternfly_component_notification_NotificationDrawer(/** NotificationDrawerHeader */ header) {
  this.f_header__org_patternfly_component_notification_NotificationDrawer_ = header;
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), header.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {NotificationDrawer} */
 m_addBody__org_patternfly_component_notification_NotificationDrawerBody__org_patternfly_component_notification_NotificationDrawer(/** NotificationDrawerBody */ body) {
  return this.m_add__org_patternfly_component_notification_NotificationDrawerBody__org_patternfly_component_notification_NotificationDrawer(body);
 }
 /** @nodts @return {NotificationDrawer} */
 m_add__org_patternfly_component_notification_NotificationDrawerBody__org_patternfly_component_notification_NotificationDrawer(/** NotificationDrawerBody */ body) {
  this.f_body__org_patternfly_component_notification_NotificationDrawer_ = body;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(body.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {NotificationDrawer} */
 m_that__org_patternfly_component_notification_NotificationDrawer() {
  return null;
 }
 /** @nodts @return {NotificationDrawer} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_notification_NotificationDrawer(/** CloseHandler<NotificationDrawer> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_notification_NotificationDrawer_.add(closeHandler);
  return this;
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_notification_NotificationDrawer_, event, fireEvent)) {
   CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_notification_NotificationDrawer_, event, fireEvent);
  }
 }
 /** @nodts @return {NotificationDrawerHeader} */
 m_header__org_patternfly_component_notification_NotificationDrawerHeader() {
  return this.f_header__org_patternfly_component_notification_NotificationDrawer_;
 }
 /** @nodts @return {NotificationDrawerBody} */
 m_body__org_patternfly_component_notification_NotificationDrawerBody() {
  return this.f_body__org_patternfly_component_notification_NotificationDrawer_;
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawer} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_notification_NotificationDrawer();
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawer} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<NotificationDrawer> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_notification_NotificationDrawer(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__void() {
  Closeable.m_close__$default__org_patternfly_component_Closeable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__elemental2_dom_Event__void(/** Event */ arg0) {
  Closeable.m_close__$default__org_patternfly_component_Closeable__elemental2_dom_Event__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  NotificationDrawer.$clinit = () =>{};
  NotificationDrawer.$loadModules();
  BaseComponent.$clinit();
  Closeable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationDrawer;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Closeable.$markImplementor(NotificationDrawer);
$Util.$setClassMetadata(NotificationDrawer, 'org.patternfly.component.notification.NotificationDrawer');

exports = NotificationDrawer;

//# sourceMappingURL=NotificationDrawer.js.map
