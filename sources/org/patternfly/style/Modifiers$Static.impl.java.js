goog.module('org.patternfly.style.Modifiers.Static$impl');

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
class Static {
 /** @abstract @nodts @return {B} */
 m_static___org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_static___boolean__org_jboss_elemento_TypedBuilder(/** boolean */ static_) {}
 /** @nodts @template E, B @return {B} */
 static m_static___$default__org_patternfly_style_Modifiers_Static__org_jboss_elemento_TypedBuilder(/** !Static<E, B> */ $thisArg) {
  Static.$clinit();
  return $thisArg.m_static___boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_static___$default__org_patternfly_style_Modifiers_Static__boolean__org_jboss_elemento_TypedBuilder(/** !Static<E, B> */ $thisArg, /** boolean */ static_) {
  Static.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_static___org_patternfly_style_Classes, static_);
 }
 /** @nodts */
 static $clinit() {
  Static.$clinit = () =>{};
  Static.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Static = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Static;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Static.$markImplementor(/**@type {Function}*/ (Static));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Static), 'org.patternfly.style.Modifiers$Static');

exports = Static;

//# sourceMappingURL=Modifiers$Static.js.map
