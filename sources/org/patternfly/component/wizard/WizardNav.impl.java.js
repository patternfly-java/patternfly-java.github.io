goog.module('org.patternfly.component.wizard.WizardNav$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');
const WizardSubComponent = goog.require('org.patternfly.component.wizard.WizardSubComponent$impl');

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
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let AurHandler = goog.forwardDeclare('org.patternfly.component.AurHandler$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let WizardNavItem = goog.forwardDeclare('org.patternfly.component.wizard.WizardNavItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {WizardSubComponent<HTMLElement, WizardNav>}
 * @implements {HasItems<HTMLElement, WizardNav, WizardNavItem>}
 */
class WizardNav extends WizardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, WizardNavItem>} @nodts*/
  this.f_items__org_patternfly_component_wizard_WizardNav_;
  /**@type {AurHandler<WizardNav, WizardNavItem>} @nodts*/
  this.f_aur__org_patternfly_component_wizard_WizardNav_;
  /**@type {HTMLContainerBuilder<HTMLOListElement>} @nodts*/
  this.f_ol__org_patternfly_component_wizard_WizardNav_;
 }
 /** @nodts @return {!WizardNav} */
 static $create__() {
  WizardNav.$clinit();
  let $instance = new WizardNav();
  $instance.$ctor__org_patternfly_component_wizard_WizardNav__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardNav__void() {
  this.$ctor__org_patternfly_component_wizard_WizardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(WizardNav.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardNav, WizardNav.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardNav, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_nav__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Wizard steps'), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_items__org_patternfly_component_wizard_WizardNav_ = (/**@type {!LinkedHashMap<?string, WizardNavItem>}*/ (LinkedHashMap.$create__()));
  this.f_aur__org_patternfly_component_wizard_WizardNav_ = (/**@type {!AurHandler<WizardNav, WizardNavItem>}*/ (AurHandler.$create__org_patternfly_component_HasItems(this)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_ol__org_patternfly_component_wizard_WizardNav_ = (/**@type {HTMLContainerBuilder<HTMLOListElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLOListElement>}*/ ($Casts.$to(Elements.m_ol__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_nav__org_patternfly_style_Classes, Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_role__java_lang_String__org_jboss_elemento_TypedBuilder(Roles.f_list__org_patternfly_core_Roles), HTMLContainerBuilder))));
 }
 /** @nodts @return {WizardNav} */
 m_add__org_patternfly_component_wizard_WizardNavItem__org_patternfly_component_wizard_WizardNav(/** WizardNavItem */ item) {
  this.f_items__org_patternfly_component_wizard_WizardNav_.put(item.m_identifier__java_lang_String(), item);
  this.f_ol__org_patternfly_component_wizard_WizardNav_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item);
  return /**@type {WizardNav}*/ ($Casts.$to(this.f_aur__org_patternfly_component_wizard_WizardNav_.m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item), WizardNav));
 }
 /** @nodts @return {WizardNav} */
 m_that__org_patternfly_component_wizard_WizardNav() {
  return this;
 }
 /** @nodts @return {WizardNav} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_wizard_WizardNav(/** AddItemHandler<WizardNav, WizardNavItem> */ onAdd) {
  return /**@type {WizardNav}*/ ($Casts.$to(this.f_aur__org_patternfly_component_wizard_WizardNav_.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(onAdd), WizardNav));
 }
 /** @nodts @return {WizardNav} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_wizard_WizardNav(/** UpdateItemHandler<WizardNav, WizardNavItem> */ onUpdate) {
  return /**@type {WizardNav}*/ ($Casts.$to(this.f_aur__org_patternfly_component_wizard_WizardNav_.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(onUpdate), WizardNav));
 }
 /** @nodts @return {WizardNav} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_wizard_WizardNav(/** RemoveItemHandler<WizardNav, WizardNavItem> */ onRemove) {
  return /**@type {WizardNav}*/ ($Casts.$to(this.f_aur__org_patternfly_component_wizard_WizardNav_.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(onRemove), WizardNav));
 }
 /** @override @nodts @return {Iterator<WizardNavItem>} */
 m_iterator__java_util_Iterator() {
  return this.f_items__org_patternfly_component_wizard_WizardNav_.values().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {number} */
 m_size__int() {
  return this.f_items__org_patternfly_component_wizard_WizardNav_.size();
 }
 /** @override @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_items__org_patternfly_component_wizard_WizardNav_.isEmpty();
 }
 /** @override @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {
  return this.f_items__org_patternfly_component_wizard_WizardNav_.containsKey(identifier);
 }
 /** @nodts @return {WizardNavItem} */
 m_item__java_lang_String__org_patternfly_component_wizard_WizardNavItem(/** ?string */ identifier) {
  return /**@type {WizardNavItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_wizard_WizardNav_.get(identifier), WizardNavItem));
 }
 /** @nodts */
 m_updateItem__org_patternfly_component_wizard_WizardNavItem__void(/** WizardNavItem */ item) {
  this.m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(item, BiConsumer.$adapt((/** WizardNavItem */ oldItem, /** WizardNavItem */ newItem) =>{
   let oldItem_1 = /**@type {WizardNavItem}*/ ($Casts.$to(oldItem, WizardNavItem));
   let newItem_1 = /**@type {WizardNavItem}*/ ($Casts.$to(newItem, WizardNavItem));
   this.f_items__org_patternfly_component_wizard_WizardNav_.put(newItem_1.m_identifier__java_lang_String(), newItem_1);
   this.f_aur__org_patternfly_component_wizard_WizardNav_.m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(oldItem_1, newItem_1);
  }));
 }
 /** @override @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {
  let item = /**@type {WizardNavItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_wizard_WizardNav_.remove(identifier), WizardNavItem));
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(item);
  this.f_aur__org_patternfly_component_wizard_WizardNav_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @override @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  let iterator = this.f_items__org_patternfly_component_wizard_WizardNav_.values().m_iterator__java_util_Iterator();
  while (iterator.m_hasNext__boolean()) {
   let item = /**@type {WizardNavItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), WizardNavItem));
   iterator.m_remove__void();
   this.f_aur__org_patternfly_component_wizard_WizardNav_.m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
  }
 }
 /** @nodts */
 m_select__java_lang_String__void_$pp_org_patternfly_component_wizard(/** ?string */ identifier) {
  for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {WizardNavItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), WizardNavItem));
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(identifier, item.m_identifier__java_lang_String())) {
     item.m_disabled__boolean__org_patternfly_component_wizard_WizardNavItem(false);
     item.f_button__org_patternfly_component_wizard_WizardNavItem.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_current__org_patternfly_core_Aria, 'step');
     item.f_button__org_patternfly_component_wizard_WizardNavItem.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
    } else {
     item.f_button__org_patternfly_component_wizard_WizardNavItem.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_current__org_patternfly_core_Aria, 'false');
     item.f_button__org_patternfly_component_wizard_WizardNavItem.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
    }
   }
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<WizardNavItem>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<WizardNavItem>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNav} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_WizardNav();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {WizardNav} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ arg0, /** j_u_function_Function<T, WizardNavItem> */ arg1) {
  return /**@type {WizardNav}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), WizardNav));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNav} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** WizardNavItem */ arg0) {
  return /**@type {WizardNav}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, /**@type {WizardNavItem}*/ ($Casts.$to(arg0, WizardNavItem))), WizardNav));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNav} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** WizardNavItem */ arg0) {
  return this.m_add__org_patternfly_component_wizard_WizardNavItem__org_patternfly_component_wizard_WizardNav(/**@type {WizardNavItem}*/ ($Casts.$to(arg0, WizardNavItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNav} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<WizardNav, WizardNavItem> */ arg0) {
  return this.m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_wizard_WizardNav(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {List<WizardNavItem>} */
 m_items__java_util_List() {
  return /**@type {List<WizardNavItem>}*/ (HasItems.m_items__$default__org_patternfly_component_HasItems__java_util_List(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNavItem} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ arg0) {
  return this.m_item__java_lang_String__org_patternfly_component_wizard_WizardNavItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ arg0, /** j_u_function_Function<T, WizardNavItem> */ arg1) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ arg0) {
  HasItems.m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** WizardNavItem */ arg0) {
  this.m_updateItem__org_patternfly_component_wizard_WizardNavItem__void(/**@type {WizardNavItem}*/ ($Casts.$to(arg0, WizardNavItem)));
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNav} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<WizardNav, WizardNavItem> */ arg0) {
  return this.m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_wizard_WizardNav(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** WizardNavItem */ arg0, /** BiConsumer<WizardNavItem, WizardNavItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, /**@type {WizardNavItem}*/ ($Casts.$to(arg0, WizardNavItem)), arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardNav} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<WizardNav, WizardNavItem> */ arg0) {
  return this.m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_wizard_WizardNav(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @template T @return {WizardNav} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_wizard_WizardNav(/** Iterable<T> */ arg0, /** j_u_function_Function<T, WizardNavItem> */ arg1) {
  return /**@type {WizardNav}*/ ($Casts.$to(HasItems.m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(this, arg0, arg1), WizardNav));
 }
 //Default method forwarding stub.
 /** @nodts @return {WizardNav} */
 m_addItem__org_patternfly_component_wizard_WizardNavItem__org_patternfly_component_wizard_WizardNav(/** WizardNavItem */ arg0) {
  return /**@type {WizardNav}*/ ($Casts.$to(HasItems.m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(this, arg0), WizardNav));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_replaceItemElement__org_patternfly_component_wizard_WizardNavItem__java_util_function_BiConsumer__void(/** WizardNavItem */ arg0, /** BiConsumer<WizardNavItem, WizardNavItem> */ arg1) {
  HasItems.m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  WizardNav.$clinit = () =>{};
  WizardNav.$loadModules();
  WizardSubComponent.$clinit();
  HasItems.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardNav;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  AurHandler = goog.module.get('org.patternfly.component.AurHandler$impl');
  WizardNavItem = goog.module.get('org.patternfly.component.wizard.WizardNavItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
WizardNav.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardNav = 'wzn';
/**@const {string} @nodts*/
WizardNav.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardNav = 'WizardNav';
HasItems.$markImplementor(WizardNav);
$Util.$setClassMetadata(WizardNav, 'org.patternfly.component.wizard.WizardNav');

exports = WizardNav;

//# sourceMappingURL=WizardNav.js.map
