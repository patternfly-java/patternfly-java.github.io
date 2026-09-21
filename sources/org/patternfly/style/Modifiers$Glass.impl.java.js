goog.module('org.patternfly.style.Modifiers.Glass$impl');

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
class Glass {
 /** @abstract @nodts @return {B} */
 m_glass__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_glass__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ glass) {}
 /** @nodts @template E, B @return {B} */
 static m_glass__$default__org_patternfly_style_Modifiers_Glass__org_jboss_elemento_TypedBuilder(/** !Glass<E, B> */ $thisArg) {
  Glass.$clinit();
  return $thisArg.m_glass__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_glass__$default__org_patternfly_style_Modifiers_Glass__boolean__org_jboss_elemento_TypedBuilder(/** !Glass<E, B> */ $thisArg, /** boolean */ glass) {
  Glass.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_glass__org_patternfly_style_Classes, glass);
 }
 /** @nodts */
 static $clinit() {
  Glass.$clinit = () =>{};
  Glass.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Glass = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Glass;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Glass.$markImplementor(/**@type {Function}*/ (Glass));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Glass), 'org.patternfly.style.Modifiers$Glass');

exports = Glass;

//# sourceMappingURL=Modifiers$Glass.js.map
