goog.module('org.patternfly.showcase.component.NotificationBadgeComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let NotificationBadge = goog.forwardDeclare('org.patternfly.component.notification.NotificationBadge$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let Gap = goog.forwardDeclare('org.patternfly.layout.flex.Gap$impl');
let Stack = goog.forwardDeclare('org.patternfly.layout.stack.Stack$impl');
let StackItem = goog.forwardDeclare('org.patternfly.layout.stack.StackItem$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class NotificationBadgeComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!NotificationBadgeComponent} */
 static $create__() {
  NotificationBadgeComponent.$clinit();
  let $instance = new NotificationBadgeComponent();
  $instance.$ctor__org_patternfly_showcase_component_NotificationBadgeComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_NotificationBadgeComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'notification-badge'), Component_$Overlay)));
  this.m_startExamples__java_lang_String__void('Basic notification badges showing read, unread, and attention variants, plus expanded state. The count example shows how to supply a numeric indicator.');
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('notification-badge-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('notification-badge-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return (/**@type {Flex}*/ ($Casts.$to((/**@type {Flex}*/ ($Casts.$to((/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_columnGap__org_patternfly_layout_flex_Gap__org_patternfly_layout_flex_Flex(Gap.f_sm__org_patternfly_layout_flex_Gap).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('Notifications')), Flex))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('Unread notifications').m_unread__org_patternfly_component_notification_NotificationBadge()), Flex))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('Attention notifications').m_attention__org_patternfly_component_notification_NotificationBadge()), Flex))).m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('notification-badge-with-count', 'With count', Code.m_code__java_lang_String__java_lang_String('notification-badge-with-count'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return (/**@type {Flex}*/ ($Casts.$to((/**@type {Flex}*/ ($Casts.$to((/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_columnGap__org_patternfly_layout_flex_Gap__org_patternfly_layout_flex_Flex(Gap.f_sm__org_patternfly_layout_flex_Gap).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('10 read notifications').m_count__int__org_patternfly_component_notification_NotificationBadge(10)), Flex))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('10 unread notifications').m_unread__org_patternfly_component_notification_NotificationBadge().m_count__int__org_patternfly_component_notification_NotificationBadge(10)), Flex))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('10 attention notifications').m_attention__org_patternfly_component_notification_NotificationBadge().m_count__int__org_patternfly_component_notification_NotificationBadge(10)), Flex))).m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('notification-badge-with-animation', 'With animation', Code.m_code__java_lang_String__java_lang_String('notification-badge-with-count'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let readValue = /**@type {ObservableValue<Integer>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(Integer.valueOf(10)));
   let readBadge = NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('10 read notifications').m_bind__org_patternfly_core_ObservableValue__org_patternfly_component_notification_NotificationBadge(readValue);
   readValue.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** Integer */ current, /** Integer */ __) =>{
    let current_1 = /**@type {Integer}*/ ($Casts.$to(current, Integer));
    let ___1 = /**@type {Integer}*/ ($Casts.$to(__, Integer));
    readBadge.m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge(j_l_String.m_valueOf__java_lang_Object__java_lang_String(current_1) + ' read notifications');
   }));
   let unreadValue = /**@type {ObservableValue<Integer>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(Integer.valueOf(10)));
   let unreadBadge = NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('10 unread notifications').m_bind__org_patternfly_core_ObservableValue__org_patternfly_component_notification_NotificationBadge(unreadValue).m_unread__org_patternfly_component_notification_NotificationBadge();
   unreadValue.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** Integer */ current_2, /** Integer */ ___2) =>{
    let current_3 = /**@type {Integer}*/ ($Casts.$to(current_2, Integer));
    let ___3 = /**@type {Integer}*/ ($Casts.$to(___2, Integer));
    unreadBadge.m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge(j_l_String.m_valueOf__java_lang_Object__java_lang_String(current_3) + ' unread notifications');
   }));
   let attentionValue = /**@type {ObservableValue<Integer>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(Integer.valueOf(10)));
   let attentionBadge = NotificationBadge.m_notificationBadge__org_patternfly_component_notification_NotificationBadge().m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge('10 attention notifications').m_bind__org_patternfly_core_ObservableValue__org_patternfly_component_notification_NotificationBadge(attentionValue).m_attention__org_patternfly_component_notification_NotificationBadge();
   attentionValue.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** Integer */ current_4, /** Integer */ ___4) =>{
    let current_5 = /**@type {Integer}*/ ($Casts.$to(current_4, Integer));
    let ___5 = /**@type {Integer}*/ ($Casts.$to(___4, Integer));
    attentionBadge.m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge(j_l_String.m_valueOf__java_lang_Object__java_lang_String(current_5) + ' attention notifications');
   }));
   return (/**@type {Stack}*/ ($Casts.$to(Stack.m_stack__org_patternfly_layout_stack_Stack().m_gutter__org_jboss_elemento_TypedBuilder(), Stack))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to((/**@type {Flex}*/ ($Casts.$to((/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_columnGap__org_patternfly_layout_flex_Gap__org_patternfly_layout_flex_Flex(Gap.f_sm__org_patternfly_layout_flex_Gap).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(readBadge), Flex))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(unreadBadge), Flex))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(attentionBadge), Flex))), StackItem))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Add notification').m_primary__org_jboss_elemento_TypedBuilder(), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ event, /** Button */ button) =>{
    let button_1 = /**@type {Button}*/ ($Casts.$to(button, Button));
    readValue.m_set__java_lang_Object__void(Integer.valueOf((/**@type {Integer}*/ ($Casts.$to(readValue.m_get__java_lang_Object(), Integer))).intValue() + 1 | 0));
    readBadge.m_triggerNotification__void();
    unreadValue.m_set__java_lang_Object__void(Integer.valueOf((/**@type {Integer}*/ ($Casts.$to(unreadValue.m_get__java_lang_Object(), Integer))).intValue() + 1 | 0));
    unreadBadge.m_triggerNotification__void();
    attentionValue.m_set__java_lang_Object__void(Integer.valueOf((/**@type {Integer}*/ ($Casts.$to(attentionValue.m_get__java_lang_Object(), Integer))).intValue() + 1 | 0));
    attentionBadge.m_triggerNotification__void();
   }))), StackItem))).m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(NotificationBadge));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(NotificationBadge), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  NotificationBadgeComponent.$clinit = () =>{};
  NotificationBadgeComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationBadgeComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  NotificationBadge = goog.module.get('org.patternfly.component.notification.NotificationBadge$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  Gap = goog.module.get('org.patternfly.layout.flex.Gap$impl');
  Stack = goog.module.get('org.patternfly.layout.stack.Stack$impl');
  StackItem = goog.module.get('org.patternfly.layout.stack.StackItem$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(NotificationBadgeComponent, 'org.patternfly.showcase.component.NotificationBadgeComponent');

exports = NotificationBadgeComponent;

//# sourceMappingURL=NotificationBadgeComponent.js.map
