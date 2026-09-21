goog.module('java.util.Iterator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsIterableHelper = goog.forwardDeclare('javaemul.internal.JsIterableHelper$impl');

/**
 * @interface
 * @template T
 * @extends {Iterator<T>}
 */
class j_u_Iterator {
 /** @abstract @nodts @return {boolean} */
 m_hasNext__boolean() {}
 /** @abstract @nodts @return {T} */
 m_next__java_lang_Object() {}
 /** @abstract @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @abstract @nodts */
 m_remove__void() {}
 /** @abstract @override @return {IIterableResult<T>} */
 next() {}
 /** @nodts @template T */
 static m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(/** !j_u_Iterator<T> */ $thisArg, /** Consumer<?> */ consumer) {
  j_u_Iterator.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  while ($thisArg.m_hasNext__boolean()) {
   consumer.m_accept__java_lang_Object__void($thisArg.m_next__java_lang_Object());
  }
 }
 /** @nodts @template T */
 static m_remove__$default__java_util_Iterator__void(/** !j_u_Iterator<T> */ $thisArg) {
  j_u_Iterator.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(UnsupportedOperationException.$create__());
 }
 /** @nodts @template T @return {IIterableResult<T>} */
 static m__private_jsNext____$default__java_util_Iterator__javaemul_internal_JsIterableHelper_IIterableResult(/** !j_u_Iterator<T> */ $thisArg) {
  j_u_Iterator.$clinit();
  return $thisArg.m_hasNext__boolean() ? /**@type {IIterableResult<T>}*/ (JsIterableHelper.makeResult($thisArg.m_next__java_lang_Object(), false)) : /**@type {IIterableResult<T>}*/ (JsIterableHelper.makeResult(/**@type {?T}*/ (null), true));
 }
 /** @nodts */
 static $clinit() {
  j_u_Iterator.$clinit = () =>{};
  j_u_Iterator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Iterator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Iterator;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsIterableHelper = goog.module.get('javaemul.internal.JsIterableHelper$impl');
 }
}
j_u_Iterator.$markImplementor(/**@type {Function}*/ (j_u_Iterator));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (j_u_Iterator), 'java.util.Iterator');

exports = j_u_Iterator;

//# sourceMappingURL=Iterator.js.map
