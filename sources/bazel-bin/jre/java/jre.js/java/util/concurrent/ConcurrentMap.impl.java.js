goog.module('java.util.concurrent.ConcurrentMap$impl');

const Map = goog.require('java.util.Map$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @interface
 * @template K, V
 * @extends {Map<K, V>}
 */
class ConcurrentMap {
 /** @abstract @override @return {V} */
 getOrDefault(/** * */ key, /** V */ defaultValue) {}
 /** @abstract @override @return {V} */
 putIfAbsent(/** K */ key, /** V */ value) {}
 /** @abstract @override @nodts @return {boolean} */
 m_remove__java_lang_Object__java_lang_Object__boolean(/** * */ key, /** * */ value) {}
 /** @abstract @override @return {V} */
 replace(/** K */ key, /** V */ value) {}
 /** @abstract @override @nodts @return {boolean} */
 m_replace__java_lang_Object__java_lang_Object__java_lang_Object__boolean(/** K */ key, /** V */ oldValue, /** V */ newValue) {}
 /** @nodts @template K, V @return {V} */
 static m_getOrDefault__$default__java_util_concurrent_ConcurrentMap__java_lang_Object__java_lang_Object__java_lang_Object(/** !ConcurrentMap<K, V> */ $thisArg, /** * */ key, /** V */ defaultValue) {
  ConcurrentMap.$clinit();
  let value = $thisArg.get(key);
  return $Equality.$same(value, null) ? defaultValue : value;
 }
 /** @nodts */
 static $clinit() {
  ConcurrentMap.$clinit = () =>{};
  ConcurrentMap.$loadModules();
  Map.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Map.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_concurrent_ConcurrentMap = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_ConcurrentMap;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
ConcurrentMap.$markImplementor(/**@type {Function}*/ (ConcurrentMap));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ConcurrentMap), 'java.util.concurrent.ConcurrentMap');

exports = ConcurrentMap;

//# sourceMappingURL=ConcurrentMap.js.map
