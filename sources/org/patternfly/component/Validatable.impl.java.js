goog.module('org.patternfly.component.Validatable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 */
class Validatable {
 /** @abstract @nodts @return {B} */
 m_validated__org_patternfly_component_ValidationStatus__org_jboss_elemento_TypedBuilder(/** ValidationStatus */ status) {}
 /** @abstract @nodts */
 m_resetValidation__void() {}
 /** @nodts */
 static $clinit() {
  Validatable.$clinit = () =>{};
  Validatable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_Validatable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_Validatable;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Validatable.$markImplementor(/**@type {Function}*/ (Validatable));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Validatable), 'org.patternfly.component.Validatable');

exports = Validatable;

//# sourceMappingURL=Validatable.js.map
