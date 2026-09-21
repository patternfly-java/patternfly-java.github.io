goog.module('org.patternfly.component.notification.NotificationBadge$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const HasObservableValue = goog.require('org.patternfly.component.HasObservableValue$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let NotificationStatus = goog.forwardDeclare('org.patternfly.style.NotificationStatus$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, NotificationBadge>}
 * @implements {Expandable<HTMLElement, NotificationBadge>}
 * @implements {HasObservableValue<HTMLElement, NotificationBadge, Integer>}
 * @implements {HasValue<Integer>}
 * @implements {Plain<HTMLElement, NotificationBadge>}
 */
class NotificationBadge extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_notification_NotificationBadge_;
  /**@type {List<ToggleHandler<NotificationBadge>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_notification_NotificationBadge_;
  /**@type {List<ChangeHandler<NotificationBadge, Integer>>} @nodts*/
  this.f_changeValueHandler__org_patternfly_component_notification_NotificationBadge_;
  /**@type {List<ChangeHandler<NotificationBadge, NotificationStatus>>} @nodts*/
  this.f_changeStatusHandler__org_patternfly_component_notification_NotificationBadge_;
  /**@type {number} @nodts*/
  this.f_value__org_patternfly_component_notification_NotificationBadge_ = 0;
  /**@type {boolean} @nodts*/
  this.f_animated__org_patternfly_component_notification_NotificationBadge_ = false;
  /**@type {ObservableValue<Integer>} @nodts*/
  this.f_ov__org_patternfly_component_notification_NotificationBadge_;
  /**@type {ObservableValue<NotificationStatus>} @nodts*/
  this.f_os__org_patternfly_component_notification_NotificationBadge_;
  /**@type {NotificationStatus} @nodts*/
  this.f_status__org_patternfly_component_notification_NotificationBadge_;
 }
 /** @nodts @return {NotificationBadge} */
 static m_notificationBadge__org_patternfly_component_notification_NotificationBadge() {
  NotificationBadge.$clinit();
  return NotificationBadge.m_notificationBadge__int__org_patternfly_component_notification_NotificationBadge(0);
 }
 /** @nodts @return {NotificationBadge} */
 static m_notificationBadge__int__org_patternfly_component_notification_NotificationBadge(/** number */ count) {
  NotificationBadge.$clinit();
  return NotificationBadge.$create__int__org_patternfly_component_button_Button(count, Button.m_button__org_patternfly_component_button_Button().m_stateful__org_patternfly_style_NotificationStatus__org_patternfly_component_button_Button(NotificationStatus.f_read__org_patternfly_style_NotificationStatus));
 }
 /** @nodts @return {!NotificationBadge} */
 static $create__int__org_patternfly_component_button_Button(/** number */ count, /** Button */ button) {
  let $instance = new NotificationBadge();
  $instance.$ctor__org_patternfly_component_notification_NotificationBadge__int__org_patternfly_component_button_Button__void(count, button);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_notification_NotificationBadge__int__org_patternfly_component_button_Button__void(/** number */ count, /** Button */ button) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_NotificationBadge__org_patternfly_component_ComponentType, button.m_element__elemental2_dom_HTMLElement());
  this.f_button__org_patternfly_component_notification_NotificationBadge_ = button;
  this.f_animated__org_patternfly_component_notification_NotificationBadge_ = false;
  this.f_toggleHandler__org_patternfly_component_notification_NotificationBadge_ = (/**@type {!ArrayList<ToggleHandler<NotificationBadge>>}*/ (ArrayList.$create__()));
  this.f_changeValueHandler__org_patternfly_component_notification_NotificationBadge_ = (/**@type {!ArrayList<ChangeHandler<NotificationBadge, Integer>>}*/ (ArrayList.$create__()));
  this.f_changeStatusHandler__org_patternfly_component_notification_NotificationBadge_ = (/**@type {!ArrayList<ChangeHandler<NotificationBadge, NotificationStatus>>}*/ (ArrayList.$create__()));
  this.m_count__int__boolean__org_patternfly_component_notification_NotificationBadge(count, false);
  this.m_status__org_patternfly_style_NotificationStatus__boolean__org_patternfly_component_notification_NotificationBadge(NotificationStatus.f_read__org_patternfly_style_NotificationStatus, false);
  this.m_collapse__boolean__void(false);
 }
 /** @nodts @return {NotificationBadge} */
 m_count__int__org_patternfly_component_notification_NotificationBadge(/** number */ count) {
  return this.m_count__int__boolean__org_patternfly_component_notification_NotificationBadge(count, false);
 }
 /** @nodts @return {NotificationBadge} */
 m_count__int__boolean__org_patternfly_component_notification_NotificationBadge(/** number */ count, /** boolean */ fireEvent) {
  if (count < 0) {
   NotificationBadge.f_logger__org_patternfly_component_notification_NotificationBadge_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Count cannot be negative, ignoring.', []);
   return this;
  }
  let changed = this.f_value__org_patternfly_component_notification_NotificationBadge_ != count;
  if (changed) {
   this.m_internalUpdateValue__int__void_$p_org_patternfly_component_notification_NotificationBadge(count);
   if (fireEvent) {
    this.f_changeValueHandler__org_patternfly_component_notification_NotificationBadge_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<NotificationBadge, Integer> */ handler) =>{
     let handler_1 = /**@type {ChangeHandler<NotificationBadge, Integer>}*/ ($Casts.$to(handler, /**@type {Function}*/ (ChangeHandler)));
     handler_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, Integer.valueOf(this.f_value__org_patternfly_component_notification_NotificationBadge_));
    }));
   }
  }
  return this;
 }
 /** @nodts @return {NotificationBadge} */
 m_bind__org_patternfly_core_ObservableValue__org_patternfly_component_notification_NotificationBadge(/** ObservableValue<Integer> */ ov) {
  this.f_ov__org_patternfly_component_notification_NotificationBadge_ = ov;
  this.f_ov__org_patternfly_component_notification_NotificationBadge_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** Integer */ current, /** Integer */ previous) =>{
   let current_1 = /**@type {Integer}*/ ($Casts.$to(current, Integer));
   let previous_1 = /**@type {Integer}*/ ($Casts.$to(previous, Integer));
   this.m_internalUpdateValue__int__void_$p_org_patternfly_component_notification_NotificationBadge(current_1.intValue());
   ChangeHandler.m_fireIfChanged__java_lang_Object__java_lang_Object__java_lang_Object__java_util_List__void(this, previous_1, current_1, this.f_changeValueHandler__org_patternfly_component_notification_NotificationBadge_);
  }));
  this.m_internalUpdateValue__int__void_$p_org_patternfly_component_notification_NotificationBadge((/**@type {Integer}*/ ($Casts.$to(ov.m_get__java_lang_Object(), Integer))).intValue());
  return this;
 }
 /** @nodts @return {NotificationBadge} */
 m_unread__org_patternfly_component_notification_NotificationBadge() {
  return this.m_status__org_patternfly_style_NotificationStatus__boolean__org_patternfly_component_notification_NotificationBadge(NotificationStatus.f_unread__org_patternfly_style_NotificationStatus, true);
 }
 /** @nodts @return {NotificationBadge} */
 m_read__org_patternfly_component_notification_NotificationBadge() {
  return this.m_status__org_patternfly_style_NotificationStatus__boolean__org_patternfly_component_notification_NotificationBadge(NotificationStatus.f_read__org_patternfly_style_NotificationStatus, true);
 }
 /** @nodts @return {NotificationBadge} */
 m_attention__org_patternfly_component_notification_NotificationBadge() {
  return this.m_status__org_patternfly_style_NotificationStatus__boolean__org_patternfly_component_notification_NotificationBadge(NotificationStatus.f_attention__org_patternfly_style_NotificationStatus, true);
 }
 /** @nodts @return {NotificationBadge} */
 m_status__org_patternfly_style_NotificationStatus__org_patternfly_component_notification_NotificationBadge(/** NotificationStatus */ status) {
  return this.m_status__org_patternfly_style_NotificationStatus__boolean__org_patternfly_component_notification_NotificationBadge(status, false);
 }
 /** @nodts @return {NotificationBadge} */
 m_status__org_patternfly_style_NotificationStatus__boolean__org_patternfly_component_notification_NotificationBadge(/** NotificationStatus */ status, /** boolean */ fireEvent) {
  if ($Equality.$same(status, null)) {
   NotificationBadge.f_logger__org_patternfly_component_notification_NotificationBadge_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Notification status cannot be null, ignoring.', []);
   return this;
  }
  let changed = !$Equality.$same(this.f_status__org_patternfly_component_notification_NotificationBadge_, status);
  if (changed) {
   this.m_internalUpdateStatus__org_patternfly_style_NotificationStatus__org_patternfly_style_NotificationStatus__void_$p_org_patternfly_component_notification_NotificationBadge(this.f_status__org_patternfly_component_notification_NotificationBadge_, status);
   if (fireEvent) {
    this.f_changeStatusHandler__org_patternfly_component_notification_NotificationBadge_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<NotificationBadge, NotificationStatus> */ handler) =>{
     let handler_1 = /**@type {ChangeHandler<NotificationBadge, NotificationStatus>}*/ ($Casts.$to(handler, /**@type {Function}*/ (ChangeHandler)));
     handler_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, status);
    }));
   }
  }
  return this;
 }
 /** @nodts @return {NotificationBadge} */
 m_bindStatus__org_patternfly_core_ObservableValue__org_patternfly_component_notification_NotificationBadge(/** ObservableValue<NotificationStatus> */ os) {
  this.f_os__org_patternfly_component_notification_NotificationBadge_ = os;
  this.f_os__org_patternfly_component_notification_NotificationBadge_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** NotificationStatus */ current, /** NotificationStatus */ previous) =>{
   let current_1 = /**@type {NotificationStatus}*/ ($Casts.$to(current, NotificationStatus));
   let previous_1 = /**@type {NotificationStatus}*/ ($Casts.$to(previous, NotificationStatus));
   this.m_internalUpdateStatus__org_patternfly_style_NotificationStatus__org_patternfly_style_NotificationStatus__void_$p_org_patternfly_component_notification_NotificationBadge(previous_1, current_1);
   ChangeHandler.m_fireIfChanged__java_lang_Object__java_lang_Object__java_lang_Object__java_util_List__void(this, previous_1, current_1, this.f_changeStatusHandler__org_patternfly_component_notification_NotificationBadge_);
  }));
  this.m_internalUpdateStatus__org_patternfly_style_NotificationStatus__org_patternfly_style_NotificationStatus__void_$p_org_patternfly_component_notification_NotificationBadge(null, /**@type {NotificationStatus}*/ ($Casts.$to(os.m_get__java_lang_Object(), NotificationStatus)));
  return this;
 }
 /** @nodts @return {NotificationBadge} */
 m_that__org_patternfly_component_notification_NotificationBadge() {
  return this;
 }
 /** @nodts @return {NotificationBadge} */
 m_ariaLabel__java_lang_String__org_patternfly_component_notification_NotificationBadge(/** ?string */ ariaLabel) {
  return /**@type {NotificationBadge}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, ariaLabel), NotificationBadge));
 }
 /** @nodts @return {NotificationBadge} */
 m_onChangeValue__org_patternfly_handler_ChangeHandler__org_patternfly_component_notification_NotificationBadge(/** ChangeHandler<NotificationBadge, Integer> */ changeHandler) {
  this.f_changeValueHandler__org_patternfly_component_notification_NotificationBadge_.add(changeHandler);
  return this;
 }
 /** @nodts @return {NotificationBadge} */
 m_onChangeStatus__org_patternfly_handler_ChangeHandler__org_patternfly_component_notification_NotificationBadge(/** ChangeHandler<NotificationBadge, NotificationStatus> */ changeHandler) {
  this.f_changeStatusHandler__org_patternfly_component_notification_NotificationBadge_.add(changeHandler);
  return this;
 }
 /** @nodts @return {NotificationBadge} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_notification_NotificationBadge(/** ComponentHandler<NotificationBadge> */ actionHandler) {
  this.f_button__org_patternfly_component_notification_NotificationBadge_.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ c) =>{
   let c_1 = /**@type {Button}*/ ($Casts.$to(c, Button));
   actionHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @nodts @return {NotificationBadge} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_notification_NotificationBadge(/** ToggleHandler<NotificationBadge> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_notification_NotificationBadge_.add(toggleHandler);
  return this;
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, true);
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clicked__org_patternfly_style_Classes)], j_l_String)));
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_notification_NotificationBadge_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<NotificationBadge> */ th) =>{
    let th_1 = /**@type {ToggleHandler<NotificationBadge>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
   }));
  }
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false);
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clicked__org_patternfly_style_Classes)], j_l_String)));
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_notification_NotificationBadge_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<NotificationBadge> */ th) =>{
    let th_1 = /**@type {ToggleHandler<NotificationBadge>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
   }));
  }
 }
 /** @nodts */
 m_triggerNotification__void() {
  if (!this.f_animated__org_patternfly_component_notification_NotificationBadge_) {
   this.f_animated__org_patternfly_component_notification_NotificationBadge_ = true;
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_notify__org_patternfly_style_Classes)], j_l_String)));
   DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
    this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_notify__org_patternfly_style_Classes)], j_l_String)));
    this.f_animated__org_patternfly_component_notification_NotificationBadge_ = false;
   }, 1000, []);
  }
 }
 /** @nodts @return {number} */
 m_count__int() {
  return this.m_value__java_lang_Integer().intValue();
 }
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Boolean.m_parseBoolean__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().getAttribute(Aria.f_expanded__org_patternfly_core_Aria));
 }
 /** @nodts @return {Integer} */
 m_value__java_lang_Integer() {
  return Integer.valueOf(!$Equality.$same(this.f_ov__org_patternfly_component_notification_NotificationBadge_, null) ? (/**@type {Integer}*/ ($Casts.$to(this.f_ov__org_patternfly_component_notification_NotificationBadge_.m_get__java_lang_Object(), Integer))).intValue() : this.f_value__org_patternfly_component_notification_NotificationBadge_);
 }
 /** @nodts @return {NotificationStatus} */
 m_status__org_patternfly_style_NotificationStatus() {
  return !$Equality.$same(this.f_os__org_patternfly_component_notification_NotificationBadge_, null) ? /**@type {NotificationStatus}*/ ($Casts.$to(this.f_os__org_patternfly_component_notification_NotificationBadge_.m_get__java_lang_Object(), NotificationStatus)) : this.f_status__org_patternfly_component_notification_NotificationBadge_;
 }
 /** @nodts */
 m_internalUpdateValue__int__void_$p_org_patternfly_component_notification_NotificationBadge(/** number */ current) {
  this.f_value__org_patternfly_component_notification_NotificationBadge_ = current;
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_button__org_patternfly_component_notification_NotificationBadge_.m_textElement__elemental2_dom_HTMLElement(), current > 0);
  this.f_button__org_patternfly_component_notification_NotificationBadge_.m_text__java_lang_String__org_patternfly_component_button_Button(current > 0 ? j_l_String.m_valueOf__int__java_lang_String(current) : '');
 }
 /** @nodts */
 m_internalUpdateStatus__org_patternfly_style_NotificationStatus__org_patternfly_style_NotificationStatus__void_$p_org_patternfly_component_notification_NotificationBadge(/** NotificationStatus */ previous, /** NotificationStatus */ current) {
  if (!$Equality.$same(previous, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([previous.m_modifier__java_lang_String()], j_l_String)));
  }
  this.f_status__org_patternfly_component_notification_NotificationBadge_ = current;
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([current.m_modifier__java_lang_String()], j_l_String)));
  if ($Equality.$same(current, NotificationStatus.f_attention__org_patternfly_style_NotificationStatus)) {
   this.f_button__org_patternfly_component_notification_NotificationBadge_.m_icon__elemental2_dom_Element__org_patternfly_component_button_Button((/**@type {PredefinedIcon}*/ ($Casts.$to((/**@type {Supplier<PredefinedIcon>}*/ ($Casts.$to(NotificationBadge.f_statusIcons__org_patternfly_component_notification_NotificationBadge_.get(current), /**@type {Function}*/ (Supplier)))).m_get__java_lang_Object(), PredefinedIcon))).m_element__org_jboss_elemento_svg_SVGElement());
  } else {
   this.f_button__org_patternfly_component_notification_NotificationBadge_.m_icon__elemental2_dom_Element__org_patternfly_component_button_Button((/**@type {PredefinedIcon}*/ ($Casts.$to((/**@type {Supplier<PredefinedIcon>}*/ ($Casts.$to(NotificationBadge.f_statusIcons__org_patternfly_component_notification_NotificationBadge_.get(current), /**@type {Function}*/ (Supplier)))).m_get__java_lang_Object(), PredefinedIcon))).m_element__org_jboss_elemento_svg_SVGElement());
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationBadge} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_notification_NotificationBadge();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationBadge} */
 m_bind__org_patternfly_core_ObservableValue__org_jboss_elemento_TypedBuilder(/** ObservableValue<Integer> */ arg0) {
  return this.m_bind__org_patternfly_core_ObservableValue__org_patternfly_component_notification_NotificationBadge(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Integer} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Integer();
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationBadge} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {NotificationBadge}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), NotificationBadge));
 }
 //Bridge method.
 /** @final @override @nodts @return {NotificationBadge} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {NotificationBadge}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), NotificationBadge));
 }
 //Default method forwarding stub.
 /** @nodts @return {NotificationBadge} */
 m_plain__org_patternfly_component_notification_NotificationBadge() {
  return /**@type {NotificationBadge}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), NotificationBadge));
 }
 //Default method forwarding stub.
 /** @nodts @return {NotificationBadge} */
 m_plain__boolean__org_patternfly_component_notification_NotificationBadge(/** boolean */ arg0) {
  return /**@type {NotificationBadge}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), NotificationBadge));
 }
 /** @nodts */
 static $clinit() {
  NotificationBadge.$clinit = () =>{};
  NotificationBadge.$loadModules();
  BaseComponent.$clinit();
  Expandable.$clinit();
  Plain.$clinit();
  NotificationBadge.f_logger__org_patternfly_component_notification_NotificationBadge_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(NotificationBadge).m_getName__java_lang_String());
  NotificationBadge.f_statusIcons__org_patternfly_component_notification_NotificationBadge_ = (/**@type {!HashMap<NotificationStatus, Supplier<PredefinedIcon>>}*/ (HashMap.$create__()));
  NotificationBadge.f_statusIcons__org_patternfly_component_notification_NotificationBadge_.put(NotificationStatus.f_read__org_patternfly_style_NotificationStatus, Supplier.$adapt(/**  @return {PredefinedIcon}*/ (() =>{
   return patternfly.m_bell__org_patternfly_icon_PredefinedIcon();
  })));
  NotificationBadge.f_statusIcons__org_patternfly_component_notification_NotificationBadge_.put(NotificationStatus.f_unread__org_patternfly_style_NotificationStatus, Supplier.$adapt(/**  @return {PredefinedIcon}*/ (() =>{
   return patternfly.m_bell__org_patternfly_icon_PredefinedIcon();
  })));
  NotificationBadge.f_statusIcons__org_patternfly_component_notification_NotificationBadge_.put(NotificationStatus.f_attention__org_patternfly_style_NotificationStatus, Supplier.$adapt(/**  @return {PredefinedIcon}*/ (() =>{
   return patternfly.m_attentionBell__org_patternfly_icon_PredefinedIcon();
  })));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationBadge;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
  PredefinedIcon = goog.module.get('org.patternfly.icon.PredefinedIcon$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  NotificationStatus = goog.module.get('org.patternfly.style.NotificationStatus$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
NotificationBadge.f_logger__org_patternfly_component_notification_NotificationBadge_;
/**@type {Map<NotificationStatus, Supplier<PredefinedIcon>>} @nodts*/
NotificationBadge.f_statusIcons__org_patternfly_component_notification_NotificationBadge_;
Expandable.$markImplementor(NotificationBadge);
HasObservableValue.$markImplementor(NotificationBadge);
HasValue.$markImplementor(NotificationBadge);
Plain.$markImplementor(NotificationBadge);
$Util.$setClassMetadata(NotificationBadge, 'org.patternfly.component.notification.NotificationBadge');

exports = NotificationBadge;

//# sourceMappingURL=NotificationBadge.js.map
