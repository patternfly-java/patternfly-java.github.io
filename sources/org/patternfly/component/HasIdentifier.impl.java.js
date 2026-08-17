goog.module('org.patternfly.component.HasIdentifier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HasIdentifier {
 /** @abstract @nodts @return {?string} */
 m_identifier__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  HasIdentifier.$clinit = () =>{};
  HasIdentifier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_HasIdentifier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_HasIdentifier;
 }
 
 /** @nodts */
 static $loadModules() {}
}
HasIdentifier.$markImplementor(/**@type {Function}*/ (HasIdentifier));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HasIdentifier), 'org.patternfly.component.HasIdentifier');

exports = HasIdentifier;

//# sourceMappingURL=HasIdentifier.js.map
