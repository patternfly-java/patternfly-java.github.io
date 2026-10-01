goog.module('org.patternfly.style.Modifiers.Circle$impl');

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
class Circle {
 /** @abstract @nodts @return {B} */
 m_circle__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_circle__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ circle) {}
 /** @nodts @template E, B @return {B} */
 static m_circle__$default__org_patternfly_style_Modifiers_Circle__org_jboss_elemento_TypedBuilder(/** !Circle<E, B> */ $thisArg) {
  Circle.$clinit();
  return $thisArg.m_circle__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_circle__$default__org_patternfly_style_Modifiers_Circle__boolean__org_jboss_elemento_TypedBuilder(/** !Circle<E, B> */ $thisArg, /** boolean */ circle) {
  Circle.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_circle__org_patternfly_style_Classes, circle);
 }
 /** @nodts */
 static $clinit() {
  Circle.$clinit = () =>{};
  Circle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Circle = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Circle;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Circle.$markImplementor(/**@type {Function}*/ (Circle));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Circle), 'org.patternfly.style.Modifiers$Circle');

exports = Circle;

//# sourceMappingURL=Modifiers$Circle.js.map
