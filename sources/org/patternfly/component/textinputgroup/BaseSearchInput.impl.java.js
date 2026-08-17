goog.module('org.patternfly.component.textinputgroup.BaseSearchInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseTextInputGroup = goog.require('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let TextInputGroupUtilities = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @extends {BaseTextInputGroup<T>}
 */
class BaseSearchInput extends BaseTextInputGroup {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<ComponentHandler<T>>} @nodts*/
  this.f_onClear__org_patternfly_component_textinputgroup_BaseSearchInput;
  /**@type {ComponentHandler<T>} @nodts*/
  this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput;
  /**@type {BiFunction<T, ?string, ?boolean>} @nodts*/
  this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_BaseSearchInput__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ componentType, /** ?string */ id) {
  this.$ctor__org_patternfly_component_textinputgroup_BaseTextInputGroup__org_patternfly_component_ComponentType__java_lang_String__void(componentType, id);
  this.f_onClear__org_patternfly_component_textinputgroup_BaseSearchInput = (/**@type {!ArrayList<ComponentHandler<T>>}*/ (ArrayList.$create__()));
  this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput = ComponentHandler.$adapt((/** Event */ e, /** T */ si) =>{
   let si_1 = /**@type {T}*/ ($Casts.$to(si, BaseSearchInput));
   (/**@type {!BaseSearchInput<T>}*/ (si_1)).m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput('');
  });
  this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput = BiFunction.$adapt(/**  @return {?boolean}*/ ((/** T */ si_2, /** ?string */ value) =>{
   let si_3 = /**@type {T}*/ ($Casts.$to(si_2, BaseSearchInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   return !j_l_String.m_isEmpty__java_lang_String__boolean(value_1);
  }));
  this.m_toggleUtilities__java_lang_String__void(this.m_value__java_lang_String());
  this.m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_1, /** T */ si_4, /** ?string */ value_2) =>{
   let si_5 = /**@type {T}*/ ($Casts.$to(si_4, BaseSearchInput));
   let value_3 = /**@type {?string}*/ ($Casts.$to(value_2, j_l_String));
   this.m_toggleUtilities__java_lang_String__void(value_3);
  }));
  this.m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_2, /** T */ si_6, /** ?string */ value_4) =>{
   let si_7 = /**@type {T}*/ ($Casts.$to(si_6, BaseSearchInput));
   let value_5 = /**@type {?string}*/ ($Casts.$to(value_4, j_l_String));
   this.m_toggleUtilities__java_lang_String__void(value_5);
  }));
  this.m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_3, /** T */ si_8, /** ?string */ value_6) =>{
   let si_9 = /**@type {T}*/ ($Casts.$to(si_8, BaseSearchInput));
   let value_7 = /**@type {?string}*/ ($Casts.$to(value_6, j_l_String));
   this.m_toggleUtilities__java_lang_String__void(value_7);
  }));
 }
 /** @nodts @return {T} */
 m_noDefaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput() {
  this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput = null;
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_showUtilitiesIf__java_util_function_BiFunction__org_patternfly_component_textinputgroup_BaseSearchInput(/** BiFunction<T, ?string, ?boolean> */ visibility) {
  this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput = visibility;
  this.m_toggleUtilities__java_lang_String__void(this.m_value__java_lang_String());
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_onClear__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(/** ComponentHandler<T> */ onClear) {
  this.f_onClear__org_patternfly_component_textinputgroup_BaseSearchInput.add(onClear);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts @return {T} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput(/** ?string */ value) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseSearchInput(value, false);
 }
 /** @nodts @return {T} */
 m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseSearchInput(/** ?string */ value, /** boolean */ fireEvent) {
  super.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(value, fireEvent);
  this.m_toggleUtilities__java_lang_String__void(value);
  return /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput));
 }
 /** @nodts */
 m_toggleUtilities__java_lang_String__void(/** ?string */ value) {
  if (Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_utilitiesVisibility__org_patternfly_component_textinputgroup_BaseSearchInput.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)), value), Boolean)))) {
   if ($Equality.$same(this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup, null)) {
    this.m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_BaseTextInputGroup(/**@type {TextInputGroupUtilities}*/ ($Casts.$to(TextInputGroupUtilities.m_textInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()), Button))).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ b) =>{
     let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
     if (!$Equality.$same(this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput, null)) {
      this.f_defaultOnClear__org_patternfly_component_textinputgroup_BaseSearchInput.m_handle__elemental2_dom_Event__java_lang_Object__void(e, /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)));
     }
     this.f_onClear__org_patternfly_component_textinputgroup_BaseSearchInput.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<T> */ handler) =>{
      let handler_1 = /**@type {ComponentHandler<T>}*/ ($Casts.$to(handler, /**@type {Function}*/ (ComponentHandler)));
      handler_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e, /**@type {T}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseSearchInput)));
     }));
    }))), TextInputGroupUtilities)));
   }
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup);
   this.f_utilities__org_patternfly_component_textinputgroup_BaseTextInputGroup = null;
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ?string */ arg0) {
  return this.m_value__java_lang_String__org_patternfly_component_textinputgroup_BaseSearchInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {T} */
 m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseTextInputGroup(/** ?string */ arg0, /** boolean */ arg1) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_BaseSearchInput(arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  BaseSearchInput.$clinit = () =>{};
  BaseSearchInput.$loadModules();
  BaseTextInputGroup.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseSearchInput;
 }
 /** @abstract @override @nodts @return {T} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  TextInputGroupUtilities = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BaseSearchInput, 'org.patternfly.component.textinputgroup.BaseSearchInput');

exports = BaseSearchInput;

//# sourceMappingURL=BaseSearchInput.js.map
