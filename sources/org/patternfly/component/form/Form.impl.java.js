goog.module('org.patternfly.component.form.Form$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const Horizontal = goog.require('org.patternfly.style.Modifiers.Horizontal$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLFormElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let Alert = goog.forwardDeclare('org.patternfly.component.alert.Alert$impl');
let FormActionGroup = goog.forwardDeclare('org.patternfly.component.form.FormActionGroup$impl');
let FormAlert = goog.forwardDeclare('org.patternfly.component.form.FormAlert$impl');
let FormFieldGroup = goog.forwardDeclare('org.patternfly.component.form.FormFieldGroup$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let FormSection = goog.forwardDeclare('org.patternfly.component.form.FormSection$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLFormElement, Form>}
 * @implements {HasItems<HTMLFormElement, Form, FormGroup>}
 * @implements {Horizontal<HTMLFormElement, Form>}
 */
class Form extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, FormGroup>} @nodts*/
  this.f_items__org_patternfly_component_form_Form_;
  /**@type {List<FormAlert>} @nodts*/
  this.f_alerts__org_patternfly_component_form_Form_;
  /**@type {AurHandler<Form, FormGroup>} @nodts*/
  this.f_aur__org_patternfly_component_form_Form_;
 }
 /** @nodts @return {Form} */
 static m_form__org_patternfly_component_form_Form() {
  Form.$clinit();
  return Form.$create__();
 }
 /** @nodts @return {!Form} */
 static $create__() {
  Form.$clinit();
  let $instance = new Form();
  $instance.$ctor__org_patternfly_component_form_Form__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_Form__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Form__org_patternfly_component_ComponentType, /**@type {HTMLFormElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLFormElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLFormElement>}*/ ($Casts.$to(Elements.m_form__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLFormElement */ f) =>{
   let f_1 = /**@type {HTMLFormElement}*/ ($Casts.$to(f, $Overlay));
   f_1.noValidate = true;
  })), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_form_Form_ = (/**@type {!LinkedHashMap<?string, FormGroup>}*/ (LinkedHashMap.$create__()));
  this.f_alerts__org_patternfly_component_form_Form_ = (/**@type {!ArrayList<FormAlert>}*/ (ArrayList.$create__()));
  this.f_aur__org_patternfly_component_form_Form_ = (/**@type {!AurHandler<Form, FormGroup>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.m_storeComponent__void();
 }
 /** @nodts @template T @return {Form} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_Form(/** Iterable<T> */ items, /** j_u_function_Function<T, FormGroup> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let group = /**@type {FormGroup}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), FormGroup));
    this.m_addItem__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(group);
   }
  }
  return this;
 }
 /** @nodts @return {Form} */
 m_addItem__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(/** FormGroup */ item) {
  return this.m_add__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(item);
 }
 /** @nodts @return {Form} */
 m_addGroup__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(/** FormGroup */ group) {
  return this.m_add__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(group);
 }
 /** @nodts @return {Form} */
 m_add__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(/** FormGroup */ item) {
  this.f_items__org_patternfly_component_form_Form_.put(item.m_identifier__java_lang_String(), item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(item.m_element__elemental2_dom_HTMLElement());
  return /**@type {Form}*/ ($Casts.$to(this.f_aur__org_patternfly_component_form_Form_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), Form));
 }
 /** @nodts @return {Form} */
 m_addAlert__org_patternfly_component_alert_Alert__org_patternfly_component_form_Form(/** Alert */ alert) {
  return this.m_add__org_patternfly_component_alert_Alert__org_patternfly_component_form_Form(alert);
 }
 /** @nodts @return {Form} */
 m_add__org_patternfly_component_alert_Alert__org_patternfly_component_form_Form(/** Alert */ alert) {
  return this.m_add__org_patternfly_component_form_FormAlert__org_patternfly_component_form_Form(FormAlert.m_formAlert__org_patternfly_component_form_FormAlert().m_addAlert__org_patternfly_component_alert_Alert__org_patternfly_component_form_FormAlert(alert));
 }
 /** @nodts @return {Form} */
 m_addAlert__org_patternfly_component_form_FormAlert__org_patternfly_component_form_Form(/** FormAlert */ alert) {
  return this.m_add__org_patternfly_component_form_FormAlert__org_patternfly_component_form_Form(alert);
 }
 /** @nodts @return {Form} */
 m_add__org_patternfly_component_form_FormAlert__org_patternfly_component_form_Form(/** FormAlert */ alert) {
  this.f_alerts__org_patternfly_component_form_Form_.add(alert);
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLFormElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), alert.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {Form} */
 m_addSection__org_patternfly_component_form_FormSection__org_patternfly_component_form_Form(/** FormSection */ section) {
  return /**@type {Form}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(section), Form));
 }
 /** @nodts @return {Form} */
 m_addFieldGroup__org_patternfly_component_form_FormFieldGroup__org_patternfly_component_form_Form(/** FormFieldGroup */ fieldGroup) {
  return /**@type {Form}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fieldGroup), Form));
 }
 /** @nodts @return {Form} */
 m_addActionGroup__org_patternfly_component_form_FormActionGroup__org_patternfly_component_form_Form(/** FormActionGroup */ actionGroup) {
  return /**@type {Form}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(actionGroup), Form));
 }
 /** @nodts @return {Form} */
 m_limitWidth__org_patternfly_component_form_Form() {
  return /**@type {Form}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_style_Classes)], j_l_String))), Form));
 }
 /** @nodts @return {Form} */
 m_that__org_patternfly_component_form_Form() {
  return this;
 }
 /** @nodts @return {Form} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_form_Form(/** AddItemHandler<Form, FormGroup> */ onAdd) {
  return /**@type {Form}*/ ($Casts.$to(this.f_aur__org_patternfly_component_form_Form_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), Form));
 }
 /** @nodts @return {Form} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_form_Form(/** UpdateItemHandler<Form, FormGroup> */ onUpdate) {
  return /**@type {Form}*/ ($Casts.$to(this.f_aur__org_patternfly_component_form_Form_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), Form));
 }
 /** @nodts @return {Form} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_form_Form(/** RemoveItemHandler<Form, FormGroup> */ onRemove) {
  return /**@type {Form}*/ ($Casts.$to(this.f_aur__org_patternfly_component_form_Form_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), Form));
 }
 /** @override @nodts @return {Iterator<FormGroup>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_form_Form_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_form_Form_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_form_Form_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_form_Form_.containsKey(identifier);
 }
 /** @nodts @return {FormGroup} */
 m_item__java_lang_String__org_patternfly_component_form_FormGroup(/** ?string */ identifier) {
  return /**@type {FormGroup}*/ ($Casts.$to(this.f_items__org_patternfly_component_form_Form_.get(identifier), FormGroup));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_form_FormGroup__void(/** FormGroup */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** FormGroup */ oldItem, /** FormGroup */ newItem) =>{
   let oldItem_1 = /**@type {FormGroup}*/ ($Casts.$to(oldItem, FormGroup));
   let newItem_1 = /**@type {FormGroup}*/ ($Casts.$to(newItem, FormGroup));
   this.f_items__org_patternfly_component_form_Form_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_form_Form_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {FormGroup}*/ ($Casts.$to(this.f_items__org_patternfly_component_form_Form_.remove(identifier), FormGroup));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_form_Form_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  let iterator = this.f_items__org_patternfly_component_form_Form_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {FormGroup}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), FormGroup));
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_form_Form_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_clearAlerts__void() {
  for (let $iterator = this.f_alerts__org_patternfly_component_form_Form_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let alert = /**@type {FormAlert}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FormAlert));
   {
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(alert);
   }
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<FormGroup>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<FormGroup>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_Form();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Form} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, FormGroup> */ arg1) {
  return this.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_Form(arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** FormGroup */ arg0) {
  return this.m_addItem__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(/**@type {FormGroup}*/ ($Casts.$to(arg0, FormGroup)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** FormGroup */ arg0) {
  return this.m_add__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(/**@type {FormGroup}*/ ($Casts.$to(arg0, FormGroup)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<Form, FormGroup> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_form_Form(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<FormGroup>} */
 m_items__java_util_List() {
  return /**@type {List<FormGroup>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroup} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_form_FormGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, FormGroup> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** FormGroup */ arg0) {
  this.m_updateItem__org_patternfly_component_form_FormGroup__void(/**@type {FormGroup}*/ ($Casts.$to(arg0, FormGroup)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<Form, FormGroup> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_form_Form(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** FormGroup */ arg0, /** BiConsumer<FormGroup, FormGroup> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {FormGroup}*/ ($Casts.$to(arg0, FormGroup)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<Form, FormGroup> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_form_Form(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_horizontal__org_jboss_elemento_TypedBuilder() {
  return /**@type {Form}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(this), Form));
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_horizontal__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Form}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Form));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_form_FormGroup__java_util_function_BiConsumer__void(/** FormGroup */ arg0, /** BiConsumer<FormGroup, FormGroup> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @nodts @return {Form} */
 m_horizontal__org_patternfly_component_form_Form() {
  return /**@type {Form}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(this), Form));
 }
 //Default method forwarding stub.
 /** @nodts @return {Form} */
 m_horizontal__boolean__org_patternfly_component_form_Form(/** boolean */ arg0) {
  return /**@type {Form}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Form));
 }
 /** @nodts */
 static $clinit() {
  Form.$clinit = () =>{};
  Form.$loadModules();
  BaseComponent.$clinit();
  HasItems.$clinit();
  Horizontal.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Form;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLFormElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  FormAlert = goog.module.get('org.patternfly.component.form.FormAlert$impl');
  FormGroup = goog.module.get('org.patternfly.component.form.FormGroup$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasItems.$markImplementor(Form);
Horizontal.$markImplementor(Form);
$Util.$setClassMetadata(Form, 'org.patternfly.component.form.Form');

exports = Form;

//# sourceMappingURL=Form.js.map
