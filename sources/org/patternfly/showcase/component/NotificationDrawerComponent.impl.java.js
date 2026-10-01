goog.module('org.patternfly.showcase.component.NotificationDrawerComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let NotificationDrawer = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawer$impl');
let NotificationDrawerBody = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerBody$impl');
let NotificationDrawerHeader = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerHeader$impl');
let NotificationDrawerItem = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerItem$impl');
let NotificationDrawerItemBody = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerItemBody$impl');
let NotificationDrawerList = goog.forwardDeclare('org.patternfly.component.notification.NotificationDrawerList$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let BuildingBlocks = goog.forwardDeclare('org.patternfly.showcase.BuildingBlocks$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class NotificationDrawerComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!NotificationDrawerComponent} */
 static $create__() {
  NotificationDrawerComponent.$clinit();
  let $instance = new NotificationDrawerComponent();
  $instance.$ctor__org_patternfly_showcase_component_NotificationDrawerComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_NotificationDrawerComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'notification-drawer'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('notification-drawer-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('notification-drawer-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return NotificationDrawer.m_notificationDrawer__org_patternfly_component_notification_NotificationDrawer().m_addHeader__org_patternfly_component_notification_NotificationDrawerHeader__org_patternfly_component_notification_NotificationDrawer(NotificationDrawerHeader.m_notificationDrawerHeader__org_patternfly_component_notification_NotificationDrawerHeader().m_status__java_lang_String__org_patternfly_component_notification_NotificationDrawerHeader('2 unread').m_addAction__org_patternfly_component_menu_Dropdown__org_patternfly_component_notification_NotificationDrawerHeader(BuildingBlocks.m_mixedKebab__java_lang_String__org_patternfly_component_menu_Dropdown('notification-drawer-basic'))).m_addBody__org_patternfly_component_notification_NotificationDrawerBody__org_patternfly_component_notification_NotificationDrawer(NotificationDrawerBody.m_notificationDrawerBody__org_patternfly_component_notification_NotificationDrawerBody().m_addList__org_patternfly_component_notification_NotificationDrawerList__org_patternfly_component_notification_NotificationDrawerBody(/**@type {NotificationDrawerList}*/ ($Casts.$to((/**@type {NotificationDrawerList}*/ ($Casts.$to((/**@type {NotificationDrawerList}*/ ($Casts.$to((/**@type {NotificationDrawerList}*/ ($Casts.$to((/**@type {NotificationDrawerList}*/ ($Casts.$to(NotificationDrawerList.m_notificationDrawerList__org_patternfly_component_notification_NotificationDrawerList().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(NotificationDrawerItem.m_notificationDrawerItem__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(Severity.f_info__org_patternfly_component_Severity, 'Unread info notification title').m_addBody__org_patternfly_component_notification_NotificationDrawerItemBody__org_patternfly_component_notification_NotificationDrawerItem(NotificationDrawerItemBody.m_notificationDrawerItemBody__java_lang_String__org_patternfly_component_notification_NotificationDrawerItemBody('This is an info notification description.')).m_hoverable__org_patternfly_component_notification_NotificationDrawerItem().m_timestamp__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem('5 minutes ago')), NotificationDrawerList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(NotificationDrawerItem.m_notificationDrawerItem__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(Severity.f_danger__org_patternfly_component_Severity, 'Unread danger notification title ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(LoremIpsum.m_words__int__java_lang_String(20))).m_addBody__org_patternfly_component_notification_NotificationDrawerItemBody__org_patternfly_component_notification_NotificationDrawerItem(NotificationDrawerItemBody.m_notificationDrawerItemBody__java_lang_String__org_patternfly_component_notification_NotificationDrawerItemBody(LoremIpsum.m_paragraphs__int__java_lang_String(5))).m_hoverable__org_patternfly_component_notification_NotificationDrawerItem().m_timestamp__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem('10 minutes ago')), NotificationDrawerList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(NotificationDrawerItem.m_notificationDrawerItem__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(Severity.f_warning__org_patternfly_component_Severity, 'Read warning notification title').m_addBody__org_patternfly_component_notification_NotificationDrawerItemBody__org_patternfly_component_notification_NotificationDrawerItem(NotificationDrawerItemBody.m_notificationDrawerItemBody__java_lang_String__org_patternfly_component_notification_NotificationDrawerItemBody('This is a warning notification description.')).m_read__org_patternfly_component_notification_NotificationDrawerItem().m_hoverable__org_patternfly_component_notification_NotificationDrawerItem().m_timestamp__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem('20 minutes ago')), NotificationDrawerList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(NotificationDrawerItem.m_notificationDrawerItem__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(Severity.f_success__org_patternfly_component_Severity, 'Success notification:Read success notification title').m_addBody__org_patternfly_component_notification_NotificationDrawerItemBody__org_patternfly_component_notification_NotificationDrawerItem(NotificationDrawerItemBody.m_notificationDrawerItemBody__java_lang_String__org_patternfly_component_notification_NotificationDrawerItemBody('This is a success notification description.')).m_read__org_patternfly_component_notification_NotificationDrawerItem().m_hoverable__org_patternfly_component_notification_NotificationDrawerItem().m_timestamp__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem('30 minutes ago')), NotificationDrawerList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(NotificationDrawerItem.m_notificationDrawerItem__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem(Severity.f_custom__org_patternfly_component_Severity, 'Read (default) notification title').m_addBody__org_patternfly_component_notification_NotificationDrawerItemBody__org_patternfly_component_notification_NotificationDrawerItem(NotificationDrawerItemBody.m_notificationDrawerItemBody__java_lang_String__org_patternfly_component_notification_NotificationDrawerItemBody('This is a default notification description.')).m_read__org_patternfly_component_notification_NotificationDrawerItem().m_hoverable__org_patternfly_component_notification_NotificationDrawerItem().m_timestamp__java_lang_String__org_patternfly_component_notification_NotificationDrawerItem('35 minutes ago')), NotificationDrawerList)))).m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(NotificationDrawer));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(NotificationDrawer), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(NotificationDrawerHeader), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(NotificationDrawerBody), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(NotificationDrawerList), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(NotificationDrawerItem), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(NotificationDrawerItemBody), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  NotificationDrawerComponent.$clinit = () =>{};
  NotificationDrawerComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationDrawerComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Severity = goog.module.get('org.patternfly.component.Severity$impl');
  NotificationDrawer = goog.module.get('org.patternfly.component.notification.NotificationDrawer$impl');
  NotificationDrawerBody = goog.module.get('org.patternfly.component.notification.NotificationDrawerBody$impl');
  NotificationDrawerHeader = goog.module.get('org.patternfly.component.notification.NotificationDrawerHeader$impl');
  NotificationDrawerItem = goog.module.get('org.patternfly.component.notification.NotificationDrawerItem$impl');
  NotificationDrawerItemBody = goog.module.get('org.patternfly.component.notification.NotificationDrawerItemBody$impl');
  NotificationDrawerList = goog.module.get('org.patternfly.component.notification.NotificationDrawerList$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  BuildingBlocks = goog.module.get('org.patternfly.showcase.BuildingBlocks$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(NotificationDrawerComponent, 'org.patternfly.showcase.component.NotificationDrawerComponent');

exports = NotificationDrawerComponent;

//# sourceMappingURL=NotificationDrawerComponent.js.map
