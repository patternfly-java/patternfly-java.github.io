goog.module('org.patternfly.component.notification.NotificationDrawerItemBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const NotificationDrawerSubComponent = goog.require('org.patternfly.component.notification.NotificationDrawerSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NotificationDrawerSubComponent<HTMLElement, NotificationDrawerItemBody>}
 * @implements {ElementTextMethods<HTMLElement, NotificationDrawerItemBody>}
 */
class NotificationDrawerItemBody extends NotificationDrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {NotificationDrawerItemBody} */
 static m_notificationDrawerItemBody__org_patternfly_component_notification_NotificationDrawerItemBody() {
  NotificationDrawerItemBody.$clinit();
  return NotificationDrawerItemBody.$create__();
 }
 /** @nodts @return {NotificationDrawerItemBody} */
 static m_notificationDrawerItemBody__java_lang_String__org_patternfly_component_notification_NotificationDrawerItemBody(/** ?string */ text) {
  NotificationDrawerItemBody.$clinit();
  return /**@type {NotificationDrawerItemBody}*/ ($Casts.$to(NotificationDrawerItemBody.$create__().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), NotificationDrawerItemBody));
 }
 /** @nodts @return {!NotificationDrawerItemBody} */
 static $create__() {
  NotificationDrawerItemBody.$clinit();
  let $instance = new NotificationDrawerItemBody();
  $instance.$ctor__org_patternfly_component_notification_NotificationDrawerItemBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_notification_NotificationDrawerItemBody__void() {
  this.$ctor__org_patternfly_component_notification_NotificationDrawerSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(NotificationDrawerItemBody.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerItemBody, NotificationDrawerItemBody.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerItemBody, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {NotificationDrawerItemBody} */
 m_that__org_patternfly_component_notification_NotificationDrawerItemBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerItemBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_notification_NotificationDrawerItemBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerItemBody} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NotificationDrawerItemBody}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NotificationDrawerItemBody));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {NotificationDrawerItemBody} */
 m_text__java_lang_String__org_patternfly_component_notification_NotificationDrawerItemBody(/** ?string */ arg0) {
  return /**@type {NotificationDrawerItemBody}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NotificationDrawerItemBody));
 }
 /** @nodts */
 static $clinit() {
  NotificationDrawerItemBody.$clinit = () =>{};
  NotificationDrawerItemBody.$loadModules();
  NotificationDrawerSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationDrawerItemBody;
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
NotificationDrawerItemBody.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerItemBody = 'ndib';
/**@const {string} @nodts*/
NotificationDrawerItemBody.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerItemBody = 'NotificationDrawerItemBody';
ElementTextMethods.$markImplementor(NotificationDrawerItemBody);
$Util.$setClassMetadata(NotificationDrawerItemBody, 'org.patternfly.component.notification.NotificationDrawerItemBody');

exports = NotificationDrawerItemBody;

//# sourceMappingURL=NotificationDrawerItemBody.js.map
