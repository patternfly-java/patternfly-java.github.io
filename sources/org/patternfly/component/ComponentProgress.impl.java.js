goog.module('org.patternfly.component.ComponentProgress$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ComponentProgress {
 /** @abstract @nodts @return {B} */
 m_startProgress__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_stopProgress__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_toggleProgress__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_progress__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ inProgress) {}
 /** @abstract @nodts @return {B} */
 m_progress__boolean__java_lang_String__org_jboss_elemento_TypedBuilder(/** boolean */ inProgress, /** ?string */ label) {}
 /** @abstract @nodts @return {B} */
 m_progress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** boolean */ inProgress, /** Consumer<Spinner> */ spinnerConsumer) {}
 /** @abstract @nodts @return {B} */
 m_progress__boolean__java_lang_String__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** boolean */ inProgress, /** ?string */ label, /** Consumer<Spinner> */ spinnerConsumer) {}
 /** @abstract @nodts @return {boolean} */
 m_inProgress__boolean() {}
 /** @nodts @template E, B @return {B} */
 static m_startProgress__$default__org_patternfly_component_ComponentProgress__org_jboss_elemento_TypedBuilder(/** !ComponentProgress<E, B> */ $thisArg) {
  ComponentProgress.$clinit();
  if (!$thisArg.m_inProgress__boolean()) {
   $thisArg.m_progress__boolean__org_jboss_elemento_TypedBuilder(true);
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_stopProgress__$default__org_patternfly_component_ComponentProgress__org_jboss_elemento_TypedBuilder(/** !ComponentProgress<E, B> */ $thisArg) {
  ComponentProgress.$clinit();
  if ($thisArg.m_inProgress__boolean()) {
   $thisArg.m_progress__boolean__org_jboss_elemento_TypedBuilder(false);
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_toggleProgress__$default__org_patternfly_component_ComponentProgress__org_jboss_elemento_TypedBuilder(/** !ComponentProgress<E, B> */ $thisArg) {
  ComponentProgress.$clinit();
  return $thisArg.m_progress__boolean__org_jboss_elemento_TypedBuilder(!$thisArg.m_inProgress__boolean());
 }
 /** @nodts @template E, B @return {B} */
 static m_progress__$default__org_patternfly_component_ComponentProgress__boolean__org_jboss_elemento_TypedBuilder(/** !ComponentProgress<E, B> */ $thisArg, /** boolean */ inProgress) {
  ComponentProgress.$clinit();
  return $thisArg.m_progress__boolean__java_lang_String__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(inProgress, 'Loading...', null);
 }
 /** @nodts @template E, B @return {B} */
 static m_progress__$default__org_patternfly_component_ComponentProgress__boolean__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ComponentProgress<E, B> */ $thisArg, /** boolean */ inProgress, /** ?string */ label) {
  ComponentProgress.$clinit();
  return $thisArg.m_progress__boolean__java_lang_String__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(inProgress, label, null);
 }
 /** @nodts @template E, B @return {B} */
 static m_progress__$default__org_patternfly_component_ComponentProgress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** !ComponentProgress<E, B> */ $thisArg, /** boolean */ inProgress, /** Consumer<Spinner> */ spinnerConsumer) {
  ComponentProgress.$clinit();
  return $thisArg.m_progress__boolean__java_lang_String__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(inProgress, 'Loading...', spinnerConsumer);
 }
 /** @nodts @template E, B @return {boolean} */
 static m_inProgress__$default__org_patternfly_component_ComponentProgress__boolean(/** !ComponentProgress<E, B> */ $thisArg) {
  ComponentProgress.$clinit();
  return (/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element())).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inProgress__org_patternfly_style_Classes));
 }
 /** @nodts */
 static $clinit() {
  ComponentProgress.$clinit = () =>{};
  ComponentProgress.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_ComponentProgress = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_ComponentProgress;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
 }
}
ComponentProgress.$markImplementor(/**@type {Function}*/ (ComponentProgress));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ComponentProgress), 'org.patternfly.component.ComponentProgress');

exports = ComponentProgress;

//# sourceMappingURL=ComponentProgress.js.map
