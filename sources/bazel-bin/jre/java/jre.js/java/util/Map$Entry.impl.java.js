goog.module('java.util.Map.Entry$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let $LambdaAdaptor$1 = goog.forwardDeclare('java.util.Map.Entry.$LambdaAdaptor$1$impl');
let $LambdaAdaptor$2 = goog.forwardDeclare('java.util.Map.Entry.$LambdaAdaptor$2$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template K, V
 */
class Entry {
 /** @abstract @return {boolean} */
 equals(/** * */ o) {}
 /** @abstract @return {K} */
 getKey() {}
 /** @abstract @return {V} */
 getValue() {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @abstract @return {V} */
 setValue(/** V */ value) {}
 /** @nodts @template K_1, V_1 @return {Comparator<Entry<K_1, V_1>>} */
 static m_comparingByKey__java_util_Comparator() {
  Entry.$clinit();
  return /**@type {Comparator<Entry<K_1, V_1>>}*/ (Entry.m_comparingByKey__java_util_Comparator__java_util_Comparator(/**@type {Comparator<K_1>}*/ (Comparator.m_naturalOrder__java_util_Comparator())));
 }
 /** @nodts @template K_1, V_1 @return {Comparator<Entry<K_1, V_1>>} */
 static m_comparingByKey__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ cmp) {
  Entry.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(cmp);
  return /**@type {!Comparator<Entry<K_1, V_1>>}*/ (new $LambdaAdaptor$1(/**  @return {number}*/ ((/** Entry<K_1, V_1> */ a, /** Entry<K_1, V_1> */ b) =>{
   let a_1 = /**@type {Entry<K_1, V_1>}*/ ($Casts.$to(a, /**@type {Function}*/ (Entry)));
   let b_1 = /**@type {Entry<K_1, V_1>}*/ ($Casts.$to(b, /**@type {Function}*/ (Entry)));
   return cmp.m_compare__java_lang_Object__java_lang_Object__int(a_1.getKey(), b_1.getKey());
  })));
 }
 /** @nodts @template K_1, V_1 @return {Comparator<Entry<K_1, V_1>>} */
 static m_comparingByValue__java_util_Comparator() {
  Entry.$clinit();
  return /**@type {Comparator<Entry<K_1, V_1>>}*/ (Entry.m_comparingByValue__java_util_Comparator__java_util_Comparator(/**@type {Comparator<V_1>}*/ (Comparator.m_naturalOrder__java_util_Comparator())));
 }
 /** @nodts @template K_1, V_1 @return {Comparator<Entry<K_1, V_1>>} */
 static m_comparingByValue__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ cmp) {
  Entry.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(cmp);
  return /**@type {!Comparator<Entry<K_1, V_1>>}*/ (new $LambdaAdaptor$2(/**  @return {number}*/ ((/** Entry<K_1, V_1> */ a, /** Entry<K_1, V_1> */ b) =>{
   let a_1 = /**@type {Entry<K_1, V_1>}*/ ($Casts.$to(a, /**@type {Function}*/ (Entry)));
   let b_1 = /**@type {Entry<K_1, V_1>}*/ ($Casts.$to(b, /**@type {Function}*/ (Entry)));
   return cmp.m_compare__java_lang_Object__java_lang_Object__int(a_1.getValue(), b_1.getValue());
  })));
 }
 /** @nodts */
 static $clinit() {
  Entry.$clinit = () =>{};
  Entry.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Map_Entry = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Map_Entry;
 }
 
 /** @nodts */
 static $loadModules() {
  Comparator = goog.module.get('java.util.Comparator$impl');
  $LambdaAdaptor$1 = goog.module.get('java.util.Map.Entry.$LambdaAdaptor$1$impl');
  $LambdaAdaptor$2 = goog.module.get('java.util.Map.Entry.$LambdaAdaptor$2$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Entry.$markImplementor(/**@type {Function}*/ (Entry));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Entry), 'java.util.Map$Entry');

exports = Entry;

//# sourceMappingURL=Map$Entry.js.map
