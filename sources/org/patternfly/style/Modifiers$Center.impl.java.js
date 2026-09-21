goog.module('org.patternfly.style.Modifiers.Center$impl');

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
class Center {
 /** @abstract @nodts @return {B} */
 m_center__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_center__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ center) {}
 /** @nodts @template E, B @return {B} */
 static m_center__$default__org_patternfly_style_Modifiers_Center__org_jboss_elemento_TypedBuilder(/** !Center<E, B> */ $thisArg) {
  Center.$clinit();
  return $thisArg.m_center__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_center__$default__org_patternfly_style_Modifiers_Center__boolean__org_jboss_elemento_TypedBuilder(/** !Center<E, B> */ $thisArg, /** boolean */ center) {
  Center.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_center__org_patternfly_style_Classes, center);
 }
 /** @nodts */
 static $clinit() {
  Center.$clinit = () =>{};
  Center.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Center = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Center;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Center.$markImplementor(/**@type {Function}*/ (Center));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Center), 'org.patternfly.style.Modifiers$Center');

exports = Center;

//# sourceMappingURL=Modifiers$Center.js.map
