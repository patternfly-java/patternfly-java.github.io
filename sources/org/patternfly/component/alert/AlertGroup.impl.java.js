goog.module('org.patternfly.component.alert.AlertGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Alert = goog.forwardDeclare('org.patternfly.component.alert.Alert$impl');
let AlertGroupType = goog.forwardDeclare('org.patternfly.component.alert.AlertGroupType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Timeouts = goog.forwardDeclare('org.patternfly.core.Timeouts$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLUListElement, AlertGroup>}
 * @implements {HasItems<HTMLUListElement, AlertGroup, Alert>}
 */
class AlertGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {AlertGroupType} @nodts*/
  this.f_type__org_patternfly_component_alert_AlertGroup_;
  /**@type {Map<?string, Alert>} @nodts*/
  this.f_items__org_patternfly_component_alert_AlertGroup_;
  /**@type {number} @nodts*/
  this.f_timeout__org_patternfly_component_alert_AlertGroup_ = 0;
  /**@type {AurHandler<AlertGroup, Alert>} @nodts*/
  this.f_aur__org_patternfly_component_alert_AlertGroup_;
 }
 /** @nodts @return {AlertGroup} */
 static m_alertGroup__org_patternfly_component_alert_AlertGroupType__org_patternfly_component_alert_AlertGroup(/** AlertGroupType */ type) {
  AlertGroup.$clinit();
  return AlertGroup.m_alertGroup__org_patternfly_component_alert_AlertGroupType__int__org_patternfly_component_alert_AlertGroup(type, Alert.f_NO_TIMEOUT__org_patternfly_component_alert_Alert);
 }
 /** @nodts @return {AlertGroup} */
 static m_alertGroup__org_patternfly_component_alert_AlertGroupType__int__org_patternfly_component_alert_AlertGroup(/** AlertGroupType */ type, /** number */ timeout) {
  AlertGroup.$clinit();
  if ($Equality.$same(type, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType)) {
   if ($Equality.$same(AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_, null)) {
    AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_ = AlertGroup.$create__org_patternfly_component_alert_AlertGroupType__int(type, timeout);
    Elements.m_body__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_), HTMLContainerBuilder)));
   }
   return AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_;
  } else {
   return AlertGroup.$create__org_patternfly_component_alert_AlertGroupType__int(type, timeout);
  }
 }
 /** @nodts @return {AlertGroup} */
 static m_toastAlertGroup__org_patternfly_component_alert_AlertGroup() {
  AlertGroup.$clinit();
  return AlertGroup.m_alertGroup__org_patternfly_component_alert_AlertGroupType__int__org_patternfly_component_alert_AlertGroup(AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType, Timeouts.f_TOAST_TIMEOUT__org_patternfly_core_Timeouts);
 }
 /** @nodts @return {!AlertGroup} */
 static $create__org_patternfly_component_alert_AlertGroupType__int(/** AlertGroupType */ type, /** number */ timeout) {
  AlertGroup.$clinit();
  let $instance = new AlertGroup();
  $instance.$ctor__org_patternfly_component_alert_AlertGroup__org_patternfly_component_alert_AlertGroupType__int__void(type, timeout);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_alert_AlertGroup__org_patternfly_component_alert_AlertGroupType__int__void(/** AlertGroupType */ type, /** number */ timeout) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_AlertGroup__org_patternfly_component_ComponentType, /**@type {HTMLUListElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alertGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  this.f_type__org_patternfly_component_alert_AlertGroup_ = type;
  this.f_timeout__org_patternfly_component_alert_AlertGroup_ = timeout;
  this.f_items__org_patternfly_component_alert_AlertGroup_ = (/**@type {!LinkedHashMap<?string, Alert>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_alert_AlertGroup_ = (/**@type {!AurHandler<AlertGroup, Alert>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.m_storeComponent__void();
  if ($Equality.$same(type, AlertGroupType.f_dynamic__org_patternfly_component_alert_AlertGroupType) || $Equality.$same(type, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType)) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_live__org_patternfly_core_Aria, 'polite');
   this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_atomic__org_patternfly_core_Aria, false);
   if ($Equality.$same(type, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_toast__org_patternfly_style_Classes)], j_l_String)));
   }
  }
 }
 /** @nodts @return {AlertGroup} */
 m_add__org_patternfly_component_alert_Alert__org_patternfly_component_alert_AlertGroup(/** Alert */ alert) {
  this.f_items__org_patternfly_component_alert_AlertGroup_.put(alert.m_identifier__java_lang_String(), alert);
  if ($Equality.$same(this.f_type__org_patternfly_component_alert_AlertGroup_, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType)) {
   if (this.f_timeout__org_patternfly_component_alert_AlertGroup_ != Alert.f_NO_TIMEOUT__org_patternfly_component_alert_Alert && alert.f_timeout__org_patternfly_component_alert_Alert == Alert.f_NO_TIMEOUT__org_patternfly_component_alert_Alert) {
    alert.m_timeout__int__org_patternfly_component_alert_Alert(this.f_timeout__org_patternfly_component_alert_AlertGroup_);
   }
   if ($Equality.$same(alert.f_closeButton__org_patternfly_component_alert_Alert, null)) {
    alert.m_closable__org_patternfly_component_alert_Alert();
   }
   Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)), /**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(alert), HTMLContainerBuilder)));
  } else {
   if ($Equality.$same(this.f_type__org_patternfly_component_alert_AlertGroup_, AlertGroupType.f_staticInline__org_patternfly_component_alert_AlertGroupType)) {
    if (!(/**@type {HTMLDivElement}*/ ($Casts.$to(alert.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inline__org_patternfly_style_Classes))) {
     alert.m_inline__org_jboss_elemento_TypedBuilder();
    }
   }
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(alert), HTMLContainerBuilder)));
  }
  return /**@type {AlertGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_alert_AlertGroup_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(alert), AlertGroup));
 }
 /** @nodts @return {AlertGroup} */
 m_that__org_patternfly_component_alert_AlertGroup() {
  return this;
 }
 /** @nodts @return {AlertGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_alert_AlertGroup(/** AddItemHandler<AlertGroup, Alert> */ onAdd) {
  return /**@type {AlertGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_alert_AlertGroup_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), AlertGroup));
 }
 /** @nodts @return {AlertGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_alert_AlertGroup(/** UpdateItemHandler<AlertGroup, Alert> */ onUpdate) {
  return /**@type {AlertGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_alert_AlertGroup_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), AlertGroup));
 }
 /** @nodts @return {AlertGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_alert_AlertGroup(/** RemoveItemHandler<AlertGroup, Alert> */ onRemove) {
  return /**@type {AlertGroup}*/ ($Casts.$to(this.f_aur__org_patternfly_component_alert_AlertGroup_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), AlertGroup));
 }
 /** @override @nodts @return {Iterator<Alert>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_alert_AlertGroup_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_alert_AlertGroup_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_alert_AlertGroup_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_alert_AlertGroup_.containsKey(identifier);
 }
 /** @nodts @return {Alert} */
 m_item__java_lang_String__org_patternfly_component_alert_Alert(/** ?string */ identifier) {
  return /**@type {Alert}*/ ($Casts.$to(this.f_items__org_patternfly_component_alert_AlertGroup_.get(identifier), Alert));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_alert_Alert__void(/** Alert */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** Alert */ oldItem, /** Alert */ newItem) =>{
   let oldItem_1 = /**@type {Alert}*/ ($Casts.$to(oldItem, Alert));
   let newItem_1 = /**@type {Alert}*/ ($Casts.$to(newItem, Alert));
   this.f_items__org_patternfly_component_alert_AlertGroup_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_alert_AlertGroup_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {Alert}*/ ($Casts.$to(this.f_items__org_patternfly_component_alert_AlertGroup_.remove(identifier), Alert));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_alert_AlertGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  let iterator = this.f_items__org_patternfly_component_alert_AlertGroup_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {Alert}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), Alert));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_alert_AlertGroup_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_closeAlert__org_patternfly_component_alert_Alert__void_$pp_org_patternfly_component_alert(/** Alert */ alert) {
  let element = (/**@type {HTMLDivElement}*/ ($Casts.$to(alert.m_element__elemental2_dom_HTMLElement(), $Overlay))).parentElement;
  if (!$Equality.$same(element, null)) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(element);
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(alert);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<Alert>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<Alert>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_alert_AlertGroup();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {AlertGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, Alert> */ arg1) {
  return /**@type {AlertGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), AlertGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertGroup} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** Alert */ arg0) {
  return /**@type {AlertGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {Alert}*/ ($Casts.$to(arg0, Alert))), AlertGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertGroup} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** Alert */ arg0) {
  return this.m_add__org_patternfly_component_alert_Alert__org_patternfly_component_alert_AlertGroup(/**@type {Alert}*/ ($Casts.$to(arg0, Alert)));
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertGroup} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<AlertGroup, Alert> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_alert_AlertGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<Alert>} */
 m_items__java_util_List() {
  return /**@type {List<Alert>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_alert_Alert(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, Alert> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** Alert */ arg0) {
  this.m_updateItem__org_patternfly_component_alert_Alert__void(/**@type {Alert}*/ ($Casts.$to(arg0, Alert)));
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertGroup} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<AlertGroup, Alert> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_alert_AlertGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** Alert */ arg0, /** BiConsumer<Alert, Alert> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {Alert}*/ ($Casts.$to(arg0, Alert)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertGroup} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<AlertGroup, Alert> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_alert_AlertGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {AlertGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_alert_AlertGroup(/** Iterable<T> */ arg0, /** j_u_function_Function<T, Alert> */ arg1) {
  return /**@type {AlertGroup}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), AlertGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {AlertGroup} */
 m_addItem__org_patternfly_component_alert_Alert__org_patternfly_component_alert_AlertGroup(/** Alert */ arg0) {
  return /**@type {AlertGroup}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), AlertGroup));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_alert_Alert__java_util_function_BiConsumer__void(/** Alert */ arg0, /** BiConsumer<Alert, Alert> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  AlertGroup.$clinit = () =>{};
  AlertGroup.$loadModules();
  BaseComponent.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlertGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Alert = goog.module.get('org.patternfly.component.alert.Alert$impl');
  AlertGroupType = goog.module.get('org.patternfly.component.alert.AlertGroupType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Timeouts = goog.module.get('org.patternfly.core.Timeouts$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {AlertGroup} @nodts*/
AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_;
HasItems.$markImplementor(AlertGroup);
$Util.$setClassMetadata(AlertGroup, 'org.patternfly.component.alert.AlertGroup');

exports = AlertGroup;

//# sourceMappingURL=AlertGroup.js.map
