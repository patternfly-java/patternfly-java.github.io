goog.module('org.patternfly.component.help.HelperText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let HelperTextItem = goog.forwardDeclare('org.patternfly.component.help.HelperTextItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, HelperText>}
 */
class HelperText extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HelperTextItem} @nodts*/
  this.f_firstItem__org_patternfly_component_help_HelperText_;
 }
 /** @nodts @return {HelperText} */
 static m_helperText__org_patternfly_component_help_HelperText() {
  HelperText.$clinit();
  return HelperText.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {HelperText} */
 static m_helperText__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_help_HelperText(/** HTMLContainerBuilder<E> */ builder) {
  HelperText.$clinit();
  return HelperText.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @return {HelperText} */
 static m_helperText__java_lang_String__org_patternfly_component_help_HelperText(/** ?string */ text) {
  HelperText.$clinit();
  return HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem(text));
 }
 /** @nodts @return {HelperText} */
 static m_helperText__java_lang_String__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperText(/** ?string */ text, /** ValidationStatus */ status) {
  HelperText.$clinit();
  return HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(text, status));
 }
 /** @nodts @template E @return {!HelperText} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  HelperText.$clinit();
  let $instance = new HelperText();
  $instance.$ctor__org_patternfly_component_help_HelperText__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_help_HelperText__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_HelperText__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_helperText__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {HelperText} */
 m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/** HelperTextItem */ item) {
  return this.m_add__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(item);
 }
 /** @nodts @return {HelperText} */
 m_add__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/** HelperTextItem */ item) {
  if ($Equality.$same(this.f_firstItem__org_patternfly_component_help_HelperText_, null)) {
   this.f_firstItem__org_patternfly_component_help_HelperText_ = item;
  }
  this.m_element__elemental2_dom_HTMLElement().appendChild(item.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {HelperText} */
 m_liveRegion__org_patternfly_component_help_HelperText() {
  return /**@type {HelperText}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_live__org_patternfly_core_Aria, 'polite'), HelperText));
 }
 /** @nodts @return {HelperText} */
 m_that__org_patternfly_component_help_HelperText() {
  return this;
 }
 /** @nodts @return {HelperTextItem} */
 m_firstItem__org_patternfly_component_help_HelperTextItem() {
  if ($Equality.$same(this.f_firstItem__org_patternfly_component_help_HelperText_, null)) {
   HelperText.f_logger__org_patternfly_component_help_HelperText_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Helper text %o does not contain any items. Returning empty item instead', [this.m_element__elemental2_dom_HTMLElement()]);
   return HelperTextItem.m_helperTextItem__org_patternfly_component_help_HelperTextItem();
  }
  return this.f_firstItem__org_patternfly_component_help_HelperText_;
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperText} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_help_HelperText();
 }
 /** @nodts */
 static $clinit() {
  HelperText.$clinit = () =>{};
  HelperText.$loadModules();
  BaseComponent.$clinit();
  HelperText.f_logger__org_patternfly_component_help_HelperText_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(HelperText).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HelperText;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  HelperTextItem = goog.module.get('org.patternfly.component.help.HelperTextItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
HelperText.f_logger__org_patternfly_component_help_HelperText_;
$Util.$setClassMetadata(HelperText, 'org.patternfly.component.help.HelperText');

exports = HelperText;

//# sourceMappingURL=HelperText.js.map
