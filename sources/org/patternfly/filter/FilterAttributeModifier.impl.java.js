goog.module('org.patternfly.filter.FilterAttributeModifier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.filter.FilterAttributeModifier.$LambdaAdaptor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template V
 */
class FilterAttributeModifier {
 /** @nodts @template E, V_1 @return {FilterAttributeModifier<V_1>} */
 static m_collectionAdd__java_util_function_Supplier__org_patternfly_filter_FilterAttributeModifier(/** Supplier<V_1> */ collectionFactory) {
  FilterAttributeModifier.$clinit();
  return FilterAttributeModifier.$adapt(/**  @return {V_1}*/ ((/** V_1 */ current, /** V_1 */ value) =>{
   let current_1 = /**@type {V_1}*/ ($Casts.$to(current, /**@type {Function}*/ (Collection)));
   let value_1 = /**@type {V_1}*/ ($Casts.$to(value, /**@type {Function}*/ (Collection)));
   let newValue = /**@type {?V_1}*/ ($Casts.$to(collectionFactory.m_get__java_lang_Object(), /**@type {Function}*/ (Collection)));
   if (!$Equality.$same(current_1, null)) {
    (/**@type {!Collection<E>}*/ (newValue)).addAll(/**@type {Collection<*>}*/ (current_1));
   }
   (/**@type {!Collection<E>}*/ (newValue)).addAll(/**@type {Collection<*>}*/ (value_1));
   return newValue;
  }));
 }
 /** @nodts @template E, V_1 @return {FilterAttributeModifier<V_1>} */
 static m_collectionRemove__java_util_function_Supplier__org_patternfly_filter_FilterAttributeModifier(/** Supplier<V_1> */ collectionFactory) {
  FilterAttributeModifier.$clinit();
  return FilterAttributeModifier.$adapt(/**  @return {V_1}*/ ((/** V_1 */ current, /** V_1 */ value) =>{
   let current_1 = /**@type {V_1}*/ ($Casts.$to(current, /**@type {Function}*/ (Collection)));
   let value_1 = /**@type {V_1}*/ ($Casts.$to(value, /**@type {Function}*/ (Collection)));
   let newValue = /**@type {?V_1}*/ ($Casts.$to(collectionFactory.m_get__java_lang_Object(), /**@type {Function}*/ (Collection)));
   if (!$Equality.$same(current_1, null)) {
    (/**@type {!Collection<E>}*/ (newValue)).addAll(/**@type {Collection<*>}*/ (current_1));
   }
   (/**@type {!Collection<E>}*/ (newValue)).removeAll(/**@type {Collection<*>}*/ (value_1));
   return newValue;
  }));
 }
 /** @abstract @nodts @return {V} */
 m_modify__java_lang_Object__java_lang_Object__java_lang_Object(/** V */ current, /** V */ value) {}
 /** @nodts @template V @return {!FilterAttributeModifier<V>} */
 static $adapt(/** ?function(V, V):V */ fn) {
  FilterAttributeModifier.$clinit();
  return /**@type {!$LambdaAdaptor<V>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  FilterAttributeModifier.$clinit = () =>{};
  FilterAttributeModifier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_filter_FilterAttributeModifier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_filter_FilterAttributeModifier;
 }
 
 /** @nodts */
 static $loadModules() {
  Collection = goog.module.get('java.util.Collection$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.patternfly.filter.FilterAttributeModifier.$LambdaAdaptor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FilterAttributeModifier.$markImplementor(/**@type {Function}*/ (FilterAttributeModifier));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (FilterAttributeModifier), 'org.patternfly.filter.FilterAttributeModifier');

exports = FilterAttributeModifier;

//# sourceMappingURL=FilterAttributeModifier.js.map
