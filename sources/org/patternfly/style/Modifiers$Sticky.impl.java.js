goog.module('org.patternfly.style.Modifiers.Sticky$impl');

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
class Sticky {
 /** @abstract @nodts @return {B} */
 m_sticky__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_sticky__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ sticky) {}
 /** @nodts @template E, B @return {B} */
 static m_sticky__$default__org_patternfly_style_Modifiers_Sticky__org_jboss_elemento_TypedBuilder(/** !Sticky<E, B> */ $thisArg) {
  Sticky.$clinit();
  return $thisArg.m_sticky__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_sticky__$default__org_patternfly_style_Modifiers_Sticky__boolean__org_jboss_elemento_TypedBuilder(/** !Sticky<E, B> */ $thisArg, /** boolean */ sticky) {
  Sticky.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_sticky__org_patternfly_style_Classes, sticky);
 }
 /** @nodts */
 static $clinit() {
  Sticky.$clinit = () =>{};
  Sticky.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Sticky = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Sticky;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Sticky.$markImplementor(/**@type {Function}*/ (Sticky));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Sticky), 'org.patternfly.style.Modifiers$Sticky');

exports = Sticky;

//# sourceMappingURL=Modifiers$Sticky.js.map
