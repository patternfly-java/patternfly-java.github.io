goog.module('org.patternfly.style.Modifiers.NoOffset$impl');

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
class NoOffset {
 /** @abstract @nodts @return {B} */
 m_noOffset__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_noOffset__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ noOffset) {}
 /** @nodts @template E, B @return {B} */
 static m_noOffset__$default__org_patternfly_style_Modifiers_NoOffset__org_jboss_elemento_TypedBuilder(/** !NoOffset<E, B> */ $thisArg) {
  NoOffset.$clinit();
  return $thisArg.m_noOffset__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_noOffset__$default__org_patternfly_style_Modifiers_NoOffset__boolean__org_jboss_elemento_TypedBuilder(/** !NoOffset<E, B> */ $thisArg, /** boolean */ noOffset) {
  NoOffset.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_noOffset__org_patternfly_style_Classes, noOffset);
 }
 /** @nodts */
 static $clinit() {
  NoOffset.$clinit = () =>{};
  NoOffset.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_NoOffset = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_NoOffset;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
NoOffset.$markImplementor(/**@type {Function}*/ (NoOffset));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (NoOffset), 'org.patternfly.style.Modifiers$NoOffset');

exports = NoOffset;

//# sourceMappingURL=Modifiers$NoOffset.js.map
