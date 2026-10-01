goog.module('java.util.Map$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SimpleImmutableEntry = goog.forwardDeclare('java.util.AbstractMap.SimpleImmutableEntry$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template K, V
 */
class Map {
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_util_Map() {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf());
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ key, /** V_1 */ value) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(key, value));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2, /** K_1 */ k3, /** V_1 */ v3) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2, k3, v3));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2, /** K_1 */ k3, /** V_1 */ v3, /** K_1 */ k4, /** V_1 */ v4) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2, k3, v3, k4, v4));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2, /** K_1 */ k3, /** V_1 */ v3, /** K_1 */ k4, /** V_1 */ v4, /** K_1 */ k5, /** V_1 */ v5) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2, k3, v3, k4, v4, k5, v5));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2, /** K_1 */ k3, /** V_1 */ v3, /** K_1 */ k4, /** V_1 */ v4, /** K_1 */ k5, /** V_1 */ v5, /** K_1 */ k6, /** V_1 */ v6) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2, k3, v3, k4, v4, k5, v5, k6, v6));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2, /** K_1 */ k3, /** V_1 */ v3, /** K_1 */ k4, /** V_1 */ v4, /** K_1 */ k5, /** V_1 */ v5, /** K_1 */ k6, /** V_1 */ v6, /** K_1 */ k7, /** V_1 */ v7) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2, k3, v3, k4, v4, k5, v5, k6, v6, k7, v7));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2, /** K_1 */ k3, /** V_1 */ v3, /** K_1 */ k4, /** V_1 */ v4, /** K_1 */ k5, /** V_1 */ v5, /** K_1 */ k6, /** V_1 */ v6, /** K_1 */ k7, /** V_1 */ v7, /** K_1 */ k8, /** V_1 */ v8) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2, k3, v3, k4, v4, k5, v5, k6, v6, k7, v7, k8, v8));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2, /** K_1 */ k3, /** V_1 */ v3, /** K_1 */ k4, /** V_1 */ v4, /** K_1 */ k5, /** V_1 */ v5, /** K_1 */ k6, /** V_1 */ v6, /** K_1 */ k7, /** V_1 */ v7, /** K_1 */ k8, /** V_1 */ v8, /** K_1 */ k9, /** V_1 */ v9) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2, k3, v3, k4, v4, k5, v5, k6, v6, k7, v7, k8, v8, k9, v9));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Map(/** K_1 */ k1, /** V_1 */ v1, /** K_1 */ k2, /** V_1 */ v2, /** K_1 */ k3, /** V_1 */ v3, /** K_1 */ k4, /** V_1 */ v4, /** K_1 */ k5, /** V_1 */ v5, /** K_1 */ k6, /** V_1 */ v6, /** K_1 */ k7, /** V_1 */ v7, /** K_1 */ k8, /** V_1 */ v8, /** K_1 */ k9, /** V_1 */ v9, /** K_1 */ k10, /** V_1 */ v10) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.internalMapOf(k1, v1, k2, v2, k3, v3, k4, v4, k5, v5, k6, v6, k7, v7, k8, v8, k9, v9, k10, v10));
 }
 /** @template K_1, V_1 @return {Entry<K_1, V_1>} */
 static entry(/** K_1 */ key, /** V_1 */ value) {
  Map.$clinit();
  return /**@type {!SimpleImmutableEntry<K_1, V_1>}*/ (SimpleImmutableEntry.$create__java_lang_Object__java_lang_Object(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(key), InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(value)));
 }
 /** @nodts @template K_1, V_1 @return {Map<K_1, V_1>} */
 static m_ofEntries__arrayOf_java_util_Map_Entry__java_util_Map(/** Array<Entry<?, ?>> */ entries) {
  Map.$clinit();
  return /**@type {Map<K_1, V_1>}*/ (Collections.m_internalMapFromEntries__java_util_Collection__java_util_Map(/**@type {List<Entry<?, ?>>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(entries))));
 }
 /** @template K_1, V_1 @return {Map<K_1, V_1>} */
 static ofEntries(.../** ...Entry<?, ?> */ entries) {
  Map.$clinit();
  $Arrays.$stampType(entries, /**@type {Function}*/ (Entry));
  return /**@type {Map<K_1, V_1>}*/ (Collections.m_internalMapFromEntries__java_util_Collection__java_util_Map(/**@type {List<Entry<?, ?>>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(entries))));
 }
 /** @nodts @template A, B @return {Map<A, B>} */
 static m_copyOf__java_util_Map__java_util_Map(/** Map<?, ?> */ map) {
  Map.$clinit();
  return /**@type {Map<A, B>}*/ (Collections.m_internalMapFromEntries__java_util_Collection__java_util_Map(map.entrySet()));
 }
 /** @abstract */
 clear() {}
 /** @abstract @nodts @return {V} */
 m_compute__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** K */ key, /** BiFunction<?, ?, ?> */ remappingFunction) {}
 /** @abstract @nodts @return {V} */
 m_computeIfAbsent__java_lang_Object__java_util_function_Function__java_lang_Object(/** K */ key, /** j_u_function_Function<?, ?> */ remappingFunction) {}
 /** @abstract @nodts @return {V} */
 m_computeIfPresent__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** K */ key, /** BiFunction<?, ?, ?> */ remappingFunction) {}
 /** @abstract @return {boolean} */
 containsKey(/** * */ key) {}
 /** @abstract @return {boolean} */
 containsValue(/** * */ value) {}
 /** @abstract @return {Set<Entry<K, V>>} */
 entrySet() {}
 /** @abstract @nodts */
 m_forEach__java_util_function_BiConsumer__void(/** BiConsumer<?, ?> */ consumer) {}
 /** @abstract @return {?V} */
 get(/** * */ key) {}
 /** @abstract @return {?V} */
 getOrDefault(/** * */ key, /** ?V */ defaultValue) {}
 /** @abstract @return {boolean} */
 isEmpty() {}
 /** @abstract @return {!Set<K>} */
 keySet() {}
 /** @abstract @nodts @return {V} */
 m_merge__java_lang_Object__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** K */ key, /** V */ value, /** BiFunction<?, ?, ?> */ remappingFunction) {}
 /** @abstract @return {?V} */
 put(/** K */ key, /** V */ value) {}
 /** @abstract @return {V} */
 putIfAbsent(/** K */ key, /** V */ value) {}
 /** @abstract */
 putAll(/** Map<?, ?> */ t) {}
 /** @abstract @return {?V} */
 remove(/** * */ key) {}
 /** @abstract @nodts @return {boolean} */
 m_remove__java_lang_Object__java_lang_Object__boolean(/** * */ key, /** * */ value) {}
 /** @abstract @return {V} */
 replace(/** K */ key, /** V */ value) {}
 /** @abstract @nodts @return {boolean} */
 m_replace__java_lang_Object__java_lang_Object__java_lang_Object__boolean(/** K */ key, /** V */ oldValue, /** V */ newValue) {}
 /** @abstract @nodts */
 m_replaceAll__java_util_function_BiFunction__void(/** BiFunction<?, ?, ?> */ function_1) {}
 /** @abstract @return {number} */
 size() {}
 /** @abstract @return {!Collection<V>} */
 values() {}
 /** @abstract @return {boolean} */
 equals(/** * */ o) {}
 /** @nodts @template K, V @return {V} */
 static m_compute__$default__java_util_Map__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** !Map<K, V> */ $thisArg, /** K */ key, /** BiFunction<?, ?, ?> */ remappingFunction) {
  Map.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(remappingFunction);
  let value = remappingFunction.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(key, $thisArg.get(key));
  if (!$Equality.$same(value, null)) {
   $thisArg.put(key, value);
  } else {
   $thisArg.remove(key);
  }
  return value;
 }
 /** @nodts @template K, V @return {V} */
 static m_computeIfAbsent__$default__java_util_Map__java_lang_Object__java_util_function_Function__java_lang_Object(/** !Map<K, V> */ $thisArg, /** K */ key, /** j_u_function_Function<?, ?> */ remappingFunction) {
  Map.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(remappingFunction);
  let value = $thisArg.get(key);
  if ($Equality.$same(value, null)) {
   value = remappingFunction.m_apply__java_lang_Object__java_lang_Object(key);
   if (!$Equality.$same(value, null)) {
    $thisArg.put(key, value);
   }
  }
  return value;
 }
 /** @nodts @template K, V @return {V} */
 static m_computeIfPresent__$default__java_util_Map__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** !Map<K, V> */ $thisArg, /** K */ key, /** BiFunction<?, ?, ?> */ remappingFunction) {
  Map.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(remappingFunction);
  let value = $thisArg.get(key);
  if (!$Equality.$same(value, null)) {
   value = remappingFunction.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(key, value);
   if (!$Equality.$same(value, null)) {
    $thisArg.put(key, value);
   } else {
    $thisArg.remove(key);
   }
  }
  return value;
 }
 /** @nodts @template K, V */
 static m_forEach__$default__java_util_Map__java_util_function_BiConsumer__void(/** !Map<K, V> */ $thisArg, /** BiConsumer<?, ?> */ consumer) {
  Map.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  for (let $iterator = $thisArg.entrySet().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
   {
    consumer.m_accept__java_lang_Object__java_lang_Object__void(entry.getKey(), entry.getValue());
   }
  }
 }
 /** @nodts @template K, V @return {?V} */
 static m_getOrDefault__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object(/** !Map<K, V> */ $thisArg, /** * */ key, /** ?V */ defaultValue) {
  Map.$clinit();
  let currentValue = $thisArg.get(key);
  return $Equality.$same(currentValue, null) && !$thisArg.containsKey(key) ? defaultValue : currentValue;
 }
 /** @nodts @template K, V @return {V} */
 static m_merge__$default__java_util_Map__java_lang_Object__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** !Map<K, V> */ $thisArg, /** K */ key, /** V */ value, /** BiFunction<?, ?, ?> */ remappingFunction) {
  Map.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(remappingFunction);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(value);
  let currentValue = $thisArg.get(key);
  let newValue = $Equality.$same(currentValue, null) ? value : remappingFunction.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(currentValue, value);
  if ($Equality.$same(newValue, null)) {
   $thisArg.remove(key);
  } else {
   $thisArg.put(key, newValue);
  }
  return newValue;
 }
 /** @nodts @template K, V @return {V} */
 static m_putIfAbsent__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object(/** !Map<K, V> */ $thisArg, /** K */ key, /** V */ value) {
  Map.$clinit();
  let currentValue = $thisArg.get(key);
  return !$Equality.$same(currentValue, null) ? currentValue : $thisArg.put(key, value);
 }
 /** @nodts @template K, V @return {boolean} */
 static m_remove__$default__java_util_Map__java_lang_Object__java_lang_Object__boolean(/** !Map<K, V> */ $thisArg, /** * */ key, /** * */ value) {
  Map.$clinit();
  let currentValue = $thisArg.get(key);
  if (!Objects.m_equals__java_lang_Object__java_lang_Object__boolean(currentValue, value) || $Equality.$same(currentValue, null) && !$thisArg.containsKey(key)) {
   return false;
  }
  $thisArg.remove(key);
  return true;
 }
 /** @nodts @template K, V @return {V} */
 static m_replace__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object(/** !Map<K, V> */ $thisArg, /** K */ key, /** V */ value) {
  Map.$clinit();
  return $thisArg.containsKey(key) ? $thisArg.put(key, value) : null;
 }
 /** @nodts @template K, V @return {boolean} */
 static m_replace__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object__boolean(/** !Map<K, V> */ $thisArg, /** K */ key, /** V */ oldValue, /** V */ newValue) {
  Map.$clinit();
  let currentValue = $thisArg.get(key);
  if (!Objects.m_equals__java_lang_Object__java_lang_Object__boolean(currentValue, oldValue) || $Equality.$same(currentValue, null) && !$thisArg.containsKey(key)) {
   return false;
  }
  $thisArg.put(key, newValue);
  return true;
 }
 /** @nodts @template K, V */
 static m_replaceAll__$default__java_util_Map__java_util_function_BiFunction__void(/** !Map<K, V> */ $thisArg, /** BiFunction<?, ?, ?> */ function_1) {
  Map.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(function_1);
  for (let $iterator = $thisArg.entrySet().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
   {
    entry.setValue(function_1.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(entry.getKey(), entry.getValue()));
   }
  }
 }
 /** @nodts */
 static $clinit() {
  Map.$clinit = () =>{};
  Map.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Map = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Map;
 }
 
 /** @nodts */
 static $loadModules() {
  SimpleImmutableEntry = goog.module.get('java.util.AbstractMap.SimpleImmutableEntry$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Map.$markImplementor(/**@type {Function}*/ (Map));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Map), 'java.util.Map');

exports = Map;

//# sourceMappingURL=Map.js.map
