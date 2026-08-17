goog.module('org.patternfly.core.ComponentContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class ComponentContext {
 /** @abstract @nodts @template T @return {B} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ key, /** T */ value) {}
 /** @abstract @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {}
 /** @abstract @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {}
 /** @abstract @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ key, /** T */ defaultValue) {}
 /** @abstract @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ key, /** Supplier<T> */ defaultValue) {}
 /** @nodts @template E, B, T @return {T} */
 static m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(/** !ComponentContext<E, B> */ $thisArg, /** ?string */ key, /** T */ defaultValue) {
  ComponentContext.$clinit();
  if ($thisArg.m_has__java_lang_String__boolean(key)) {
   return $thisArg.m_get__java_lang_String__java_lang_Object(key);
  }
  return defaultValue;
 }
 /** @nodts @template E, B, T @return {T} */
 static m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(/** !ComponentContext<E, B> */ $thisArg, /** ?string */ key, /** Supplier<T> */ defaultValue) {
  ComponentContext.$clinit();
  if ($thisArg.m_has__java_lang_String__boolean(key)) {
   return $thisArg.m_get__java_lang_String__java_lang_Object(key);
  }
  return defaultValue.m_get__java_lang_Object();
 }
 /** @nodts */
 static $clinit() {
  ComponentContext.$clinit = () =>{};
  ComponentContext.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_core_ComponentContext = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_ComponentContext;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ComponentContext.$markImplementor(/**@type {Function}*/ (ComponentContext));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ComponentContext), 'org.patternfly.core.ComponentContext');

exports = ComponentContext;

//# sourceMappingURL=ComponentContext.js.map
