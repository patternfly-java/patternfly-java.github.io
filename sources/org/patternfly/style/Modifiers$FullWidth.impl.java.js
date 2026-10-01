goog.module('org.patternfly.style.Modifiers.FullWidth$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class FullWidth {
 /** @abstract @nodts @return {B} */
 m_fullWidth__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_fullWidth__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ fullWidth) {}
 /** @nodts @template E, B @return {B} */
 static m_fullWidth__$default__org_patternfly_style_Modifiers_FullWidth__org_jboss_elemento_TypedBuilder(/** !FullWidth<E, B> */ $thisArg) {
  FullWidth.$clinit();
  return $thisArg.m_fullWidth__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_fullWidth__$default__org_patternfly_style_Modifiers_FullWidth__boolean__org_jboss_elemento_TypedBuilder(/** !FullWidth<E, B> */ $thisArg, /** boolean */ fullWidth) {
  FullWidth.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_fullWidth__org_patternfly_style_Classes, fullWidth);
 }
 /** @nodts */
 static $clinit() {
  FullWidth.$clinit = () =>{};
  FullWidth.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_FullWidth = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_FullWidth;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
FullWidth.$markImplementor(/**@type {Function}*/ (FullWidth));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (FullWidth), 'org.patternfly.style.Modifiers$FullWidth');

exports = FullWidth;

//# sourceMappingURL=Modifiers$FullWidth.js.map
