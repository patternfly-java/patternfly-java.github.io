goog.module('javaemul.internal.ArrayIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @final
 * @template T
 * @implements {Iterator<T>}
 */
class ArrayIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<T>} @nodts*/
  this.f_array__javaemul_internal_ArrayIterator_;
  /**@type {number} @nodts*/
  this.f_i__javaemul_internal_ArrayIterator_ = 0;
 }
 /** @nodts @template T @return {!ArrayIterator<T>} */
 static $create__arrayOf_java_lang_Object(/** Array<T> */ array) {
  ArrayIterator.$clinit();
  let $instance = new ArrayIterator();
  $instance.$ctor__javaemul_internal_ArrayIterator__arrayOf_java_lang_Object__void(array);
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_ArrayIterator__arrayOf_java_lang_Object__void(/** Array<T> */ array) {
  this.$ctor__java_lang_Object__void();
  this.f_array__javaemul_internal_ArrayIterator_ = array;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_i__javaemul_internal_ArrayIterator_ < this.f_array__javaemul_internal_ArrayIterator_.length;
 }
 /** @override @nodts @return {T} */
 m_next__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasNext__boolean());
  let /** number */ $value;
  return this.f_array__javaemul_internal_ArrayIterator_[($value = this.f_i__javaemul_internal_ArrayIterator_, this.f_i__javaemul_internal_ArrayIterator_ = this.f_i__javaemul_internal_ArrayIterator_ + 1 | 0, $value)];
 }
 /** @override @nodts */
 m_remove__void() {
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(UnsupportedOperationException.$create__());
 }
 //Default method forwarding stub.
 /** @override @return {IIterableResult<T>} */
 next() {
  return /**@type {IIterableResult<T>}*/ (Iterator.m__private_jsNext____$default__java_util_Iterator__javaemul_internal_JsIterableHelper_IIterableResult(this));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  ArrayIterator.$clinit = () =>{};
  ArrayIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Iterator.$markImplementor(ArrayIterator);
$Util.$setClassMetadata(ArrayIterator, 'javaemul.internal.ArrayIterator');

exports = ArrayIterator;

//# sourceMappingURL=ArrayIterator.js.map
