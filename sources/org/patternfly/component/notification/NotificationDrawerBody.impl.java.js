goog.module('org.patternfly.component.notification.NotificationDrawerBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NotificationDrawerSubComponent = goog.require('org.patternfly.component.notification.NotificationDrawerSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let EmptyState = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyState$impl');
let NotificationDrawerList = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerList$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NotificationDrawerSubComponent<HTMLElement, NotificationDrawerBody>}
 */
class NotificationDrawerBody extends NotificationDrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {NotificationDrawerList} @nodts*/
  this.f_list__org_patternfly_component_notification_NotificationDrawerBody_;
  /**@type {EmptyState} @nodts*/
  this.f_emptyState__org_patternfly_component_notification_NotificationDrawerBody_;
 }
 /** @nodts @return {NotificationDrawerBody} */
 static m_notificationDrawerBody__org_patternfly_component_notification_NotificationDrawerBody() {
  NotificationDrawerBody.$clinit();
  return NotificationDrawerBody.$create__();
 }
 /** @nodts @return {!NotificationDrawerBody} */
 static $create__() {
  NotificationDrawerBody.$clinit();
  let $instance = new NotificationDrawerBody();
  $instance.$ctor__org_patternfly_component_notification_NotificationDrawerBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_notification_NotificationDrawerBody__void() {
  this.$ctor__org_patternfly_component_notification_NotificationDrawerSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(NotificationDrawerBody.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerBody, NotificationDrawerBody.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerBody, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {NotificationDrawerBody} */
 m_addList__org_patternfly_component_notification_NotificationDrawerList__org_patternfly_component_notification_NotificationDrawerBody(/** NotificationDrawerList */ list) {
  return this.m_add__org_patternfly_component_notification_NotificationDrawerList__org_patternfly_component_notification_NotificationDrawerBody(list);
 }
 /** @nodts @return {NotificationDrawerBody} */
 m_add__org_patternfly_component_notification_NotificationDrawerList__org_patternfly_component_notification_NotificationDrawerBody(/** NotificationDrawerList */ list) {
  this.f_list__org_patternfly_component_notification_NotificationDrawerBody_ = list;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(list.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {NotificationDrawerBody} */
 m_addEmptyState__org_patternfly_component_emptystate_EmptyState__org_patternfly_component_notification_NotificationDrawerBody(/** EmptyState */ emptyState) {
  return this.m_add__org_patternfly_component_emptystate_EmptyState__org_patternfly_component_notification_NotificationDrawerBody(emptyState);
 }
 /** @nodts @return {NotificationDrawerBody} */
 m_add__org_patternfly_component_emptystate_EmptyState__org_patternfly_component_notification_NotificationDrawerBody(/** EmptyState */ emptyState) {
  this.f_emptyState__org_patternfly_component_notification_NotificationDrawerBody_ = emptyState;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(emptyState.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {NotificationDrawerBody} */
 m_that__org_patternfly_component_notification_NotificationDrawerBody() {
  return this;
 }
 /** @nodts @return {NotificationDrawerList} */
 m_list__org_patternfly_component_notification_NotificationDrawerList() {
  return this.f_list__org_patternfly_component_notification_NotificationDrawerBody_;
 }
 /** @nodts */
 m_markEmpty__boolean__void(/** boolean */ empty) {
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_list__org_patternfly_component_notification_NotificationDrawerBody_, !empty);
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_emptyState__org_patternfly_component_notification_NotificationDrawerBody_, empty);
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_notification_NotificationDrawerBody();
 }
 /** @nodts */
 static $clinit() {
  NotificationDrawerBody.$clinit = () =>{};
  NotificationDrawerBody.$loadModules();
  NotificationDrawerSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationDrawerBody;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
NotificationDrawerBody.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerBody = 'ndb';
/**@const {string} @nodts*/
NotificationDrawerBody.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerBody = 'NotificationDrawerBody';
$Util.$setClassMetadata(NotificationDrawerBody, 'org.patternfly.component.notification.NotificationDrawerBody');

exports = NotificationDrawerBody;

//# sourceMappingURL=NotificationDrawerBody.js.map
