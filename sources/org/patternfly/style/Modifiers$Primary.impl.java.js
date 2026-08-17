goog.module('org.patternfly.style.Modifiers.Primary$impl');

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
class Primary {
 /** @abstract @nodts @return {B} */
 m_primary__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_primary__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ primary) {}
 /** @nodts @template E, B @return {B} */
 static m_primary__$default__org_patternfly_style_Modifiers_Primary__org_jboss_elemento_TypedBuilder(/** !Primary<E, B> */ $thisArg) {
  Primary.$clinit();
  return $thisArg.m_primary__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_primary__$default__org_patternfly_style_Modifiers_Primary__boolean__org_jboss_elemento_TypedBuilder(/** !Primary<E, B> */ $thisArg, /** boolean */ primary) {
  Primary.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_primary__org_patternfly_style_Classes, primary);
 }
 /** @nodts */
 static $clinit() {
  Primary.$clinit = () =>{};
  Primary.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Primary = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Primary;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Primary.$markImplementor(/**@type {Function}*/ (Primary));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Primary), 'org.patternfly.style.Modifiers$Primary');

exports = Primary;

//# sourceMappingURL=Modifiers$Primary.js.map
