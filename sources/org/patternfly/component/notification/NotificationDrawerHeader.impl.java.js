goog.module('org.patternfly.component.notification.NotificationDrawerHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const NotificationDrawerSubComponent = goog.require('org.patternfly.component.notification.NotificationDrawerSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let NotificationDrawer = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawer$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NotificationDrawerSubComponent<HTMLElement, NotificationDrawerHeader>}
 * @implements {ElementTextDelegate<HTMLElement, NotificationDrawerHeader>}
 */
class NotificationDrawerHeader extends NotificationDrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_notification_NotificationDrawerHeader_;
  /**@type {HTMLElement} @nodts*/
  this.f_statusElement__org_patternfly_component_notification_NotificationDrawerHeader_;
  /**@type {HTMLElement} @nodts*/
  this.f_closeElement__org_patternfly_component_notification_NotificationDrawerHeader_;
 }
 /** @nodts @return {NotificationDrawerHeader} */
 static m_notificationDrawerHeader__org_patternfly_component_notification_NotificationDrawerHeader() {
  NotificationDrawerHeader.$clinit();
  return NotificationDrawerHeader.$create__();
 }
 /** @nodts @return {!NotificationDrawerHeader} */
 static $create__() {
  NotificationDrawerHeader.$clinit();
  let $instance = new NotificationDrawerHeader();
  $instance.$ctor__org_patternfly_component_notification_NotificationDrawerHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_notification_NotificationDrawerHeader__void() {
  this.$ctor__org_patternfly_component_notification_NotificationDrawerSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(NotificationDrawerHeader.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerHeader, NotificationDrawerHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerHeader, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_notification_NotificationDrawerHeader_ = (/**@type {HTMLHeadingElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(1, 'Notifications').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes, Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay))));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_statusElement__org_patternfly_component_notification_NotificationDrawerHeader_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes, Classes.f_status__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_closeElement__org_patternfly_component_notification_NotificationDrawerHeader_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_notificationDrawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes, Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_icon_PredefinedIcon__org_patternfly_component_button_Button(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close'), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ event, /** Button */ component) =>{
   let component_1 = /**@type {Button}*/ ($Casts.$to(component, Button));
   let drawer = /**@type {NotificationDrawer}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), NotificationDrawer));
   drawer.m_close__void();
  }))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))), HTMLContainerBuilder)));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_notification_NotificationDrawerHeader_;
 }
 /** @nodts @return {NotificationDrawerHeader} */
 m_addAction__org_patternfly_component_menu_Dropdown__org_patternfly_component_notification_NotificationDrawerHeader(/** Dropdown */ dropdown) {
  return this.m_addAction__elemental2_dom_HTMLElement__org_patternfly_component_notification_NotificationDrawerHeader(dropdown.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {NotificationDrawerHeader} */
 m_addAction__elemental2_dom_HTMLElement__org_patternfly_component_notification_NotificationDrawerHeader(/** HTMLElement */ element) {
  Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(element, this.f_closeElement__org_patternfly_component_notification_NotificationDrawerHeader_);
  return this;
 }
 /** @nodts @return {NotificationDrawerHeader} */
 m_status__java_lang_String__org_patternfly_component_notification_NotificationDrawerHeader(/** ?string */ status) {
  this.f_statusElement__org_patternfly_component_notification_NotificationDrawerHeader_.textContent = status;
  return this;
 }
 /** @nodts @return {NotificationDrawerHeader} */
 m_that__org_patternfly_component_notification_NotificationDrawerHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_notification_NotificationDrawerHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationDrawerHeader} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NotificationDrawerHeader}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NotificationDrawerHeader));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {NotificationDrawerHeader} */
 m_text__java_lang_String__org_patternfly_component_notification_NotificationDrawerHeader(/** ?string */ arg0) {
  return /**@type {NotificationDrawerHeader}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NotificationDrawerHeader));
 }
 /** @nodts */
 static $clinit() {
  NotificationDrawerHeader.$clinit = () =>{};
  NotificationDrawerHeader.$loadModules();
  NotificationDrawerSubComponent.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationDrawerHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  NotificationDrawer = goog.module.get('org.patternfly.component.notification.NotificationDrawer$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
NotificationDrawerHeader.f_SUB_COMPONENT_ID__org_patternfly_component_notification_NotificationDrawerHeader = 'ndh';
/**@const {string} @nodts*/
NotificationDrawerHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_notification_NotificationDrawerHeader = 'NotificationDrawerHeader';
ElementTextDelegate.$markImplementor(NotificationDrawerHeader);
$Util.$setClassMetadata(NotificationDrawerHeader, 'org.patternfly.component.notification.NotificationDrawerHeader');

exports = NotificationDrawerHeader;

//# sourceMappingURL=NotificationDrawerHeader.js.map
