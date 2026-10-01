goog.module('org.patternfly.component.form.RadioDescription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const RadioSubComponent = goog.require('org.patternfly.component.form.RadioSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {RadioSubComponent<HTMLElement, RadioDescription>}
 * @implements {ElementTextMethods<HTMLElement, RadioDescription>}
 */
class RadioDescription extends RadioSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {RadioDescription} */
 static m_radioDescription__org_patternfly_component_form_RadioDescription() {
  RadioDescription.$clinit();
  return RadioDescription.$create__java_lang_String(null);
 }
 /** @nodts @return {RadioDescription} */
 static m_radioDescription__java_lang_String__org_patternfly_component_form_RadioDescription(/** ?string */ description) {
  RadioDescription.$clinit();
  return RadioDescription.$create__java_lang_String(description);
 }
 /** @nodts @return {!RadioDescription} */
 static $create__java_lang_String(/** ?string */ description) {
  RadioDescription.$clinit();
  let $instance = new RadioDescription();
  $instance.$ctor__org_patternfly_component_form_RadioDescription__java_lang_String__void(description);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_RadioDescription__java_lang_String__void(/** ?string */ description) {
  this.$ctor__org_patternfly_component_form_RadioSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(RadioDescription.f_SUB_COMPONENT_ID__org_patternfly_component_form_RadioDescription, RadioDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_form_RadioDescription, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_radio__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(description, null)) {
   this.m_element__elemental2_dom_HTMLElement().textContent = description;
  }
 }
 /** @nodts @return {RadioDescription} */
 m_that__org_patternfly_component_form_RadioDescription() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {RadioDescription} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_RadioDescription();
 }
 //Bridge method.
 /** @final @override @nodts @return {RadioDescription} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {RadioDescription}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), RadioDescription));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {RadioDescription} */
 m_text__java_lang_String__org_patternfly_component_form_RadioDescription(/** ?string */ arg0) {
  return /**@type {RadioDescription}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), RadioDescription));
 }
 /** @nodts */
 static $clinit() {
  RadioDescription.$clinit = () =>{};
  RadioDescription.$loadModules();
  RadioSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadioDescription;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
RadioDescription.f_SUB_COMPONENT_ID__org_patternfly_component_form_RadioDescription = 'rd';
/**@const {string} @nodts*/
RadioDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_form_RadioDescription = 'RadioDescription';
ElementTextMethods.$markImplementor(RadioDescription);
$Util.$setClassMetadata(RadioDescription, 'org.patternfly.component.form.RadioDescription');

exports = RadioDescription;

//# sourceMappingURL=RadioDescription.js.map
