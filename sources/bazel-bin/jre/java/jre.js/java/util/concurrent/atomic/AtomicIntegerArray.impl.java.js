goog.module('java.util.concurrent.atomic.AtomicIntegerArray$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let IntBinaryOperator = goog.forwardDeclare('java.util.function.IntBinaryOperator$impl');
let IntUnaryOperator = goog.forwardDeclare('java.util.function.IntUnaryOperator$impl');
let $int = goog.forwardDeclare('javaemul.internal.primitives.$int$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 */
class AtomicIntegerArray extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_;
 }
 //Factory method corresponding to constructor 'AtomicIntegerArray(int[])'.
 /** @nodts @return {!AtomicIntegerArray} */
 static $create__arrayOf_int(/** Array<number> */ array) {
  AtomicIntegerArray.$clinit();
  let $instance = new AtomicIntegerArray();
  $instance.$ctor__java_util_concurrent_atomic_AtomicIntegerArray__arrayOf_int__void(array);
  return $instance;
 }
 //Initialization from constructor 'AtomicIntegerArray(int[])'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicIntegerArray__arrayOf_int__void(/** Array<number> */ array) {
  this.$ctor__java_lang_Object__void();
  this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_ = Arrays.m_copyOf__arrayOf_int__int__arrayOf_int(array, array.length);
 }
 //Factory method corresponding to constructor 'AtomicIntegerArray(int)'.
 /** @nodts @return {!AtomicIntegerArray} */
 static $create__int(/** number */ length) {
  AtomicIntegerArray.$clinit();
  let $instance = new AtomicIntegerArray();
  $instance.$ctor__java_util_concurrent_atomic_AtomicIntegerArray__int__void(length);
  return $instance;
 }
 //Initialization from constructor 'AtomicIntegerArray(int)'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicIntegerArray__int__void(/** number */ length) {
  this.$ctor__java_lang_Object__void();
  this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_ = (/**@type {!Array<number>}*/ ($Arrays.$create([length], $int)));
 }
 /** @nodts @return {number} */
 m_get__int__int(/** number */ i) {
  return this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i];
 }
 /** @nodts @return {number} */
 m_getAndAccumulate__int__int__java_util_function_IntBinaryOperator__int(/** number */ i, /** number */ x, /** IntBinaryOperator */ accumulatorFunction) {
  let previous = this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i];
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, accumulatorFunction.m_applyAsInt__int__int__int(previous, x));
  return previous;
 }
 /** @nodts @return {number} */
 m_getAndAdd__int__int__int(/** number */ i, /** number */ delta) {
  let previous = this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i];
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, previous + delta | 0);
  return previous;
 }
 /** @nodts @return {number} */
 m_getAndIncrement__int__int(/** number */ i) {
  return this.m_getAndAdd__int__int__int(i, 1);
 }
 /** @nodts @return {number} */
 m_getAndDecrement__int__int(/** number */ i) {
  return this.m_getAndAdd__int__int__int(i, -1);
 }
 /** @nodts @return {number} */
 m_getAndSet__int__int__int(/** number */ i, /** number */ newValue) {
  let previous = this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i];
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, newValue);
  return previous;
 }
 /** @nodts @return {number} */
 m_getAndUpdate__int__java_util_function_IntUnaryOperator__int(/** number */ i, /** IntUnaryOperator */ updateFunction) {
  let previous = this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i];
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, updateFunction.m_applyAsInt__int__int(previous));
  return previous;
 }
 /** @nodts @return {number} */
 m_accumulateAndGet__int__int__java_util_function_IntBinaryOperator__int(/** number */ i, /** number */ x, /** IntBinaryOperator */ accumulatorFunction) {
  let newValue = accumulatorFunction.m_applyAsInt__int__int__int(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i], x);
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, newValue);
  return newValue;
 }
 /** @nodts @return {number} */
 m_addAndGet__int__int__int(/** number */ i, /** number */ delta) {
  let newValue = this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i] + delta | 0;
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, newValue);
  return newValue;
 }
 /** @nodts @return {number} */
 m_incrementAndGet__int__int(/** number */ i) {
  return this.m_addAndGet__int__int__int(i, 1);
 }
 /** @nodts @return {number} */
 m_decrementAndGet__int__int(/** number */ i) {
  return this.m_addAndGet__int__int__int(i, -1);
 }
 /** @nodts @return {number} */
 m_updateAndGet__int__java_util_function_IntUnaryOperator__int(/** number */ i, /** IntUnaryOperator */ updateFunction) {
  let newValue = updateFunction.m_applyAsInt__int__int(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i]);
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, newValue);
  return newValue;
 }
 /** @nodts @return {boolean} */
 m_compareAndSet__int__int__int__boolean(/** number */ i, /** number */ expect, /** number */ update) {
  if (this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_[i] == expect) {
   $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, update);
   return true;
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_weakCompareAndSet__int__int__int__boolean(/** number */ i, /** number */ expect, /** number */ update) {
  return this.m_compareAndSet__int__int__int__boolean(i, expect, update);
 }
 /** @nodts */
 m_set__int__int__void(/** number */ i, /** number */ newValue) {
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_, i, newValue);
 }
 /** @nodts */
 m_lazySet__int__int__void(/** number */ i, /** number */ newValue) {
  this.m_set__int__int__void(i, newValue);
 }
 /** @nodts @return {number} */
 m_length__int() {
  return this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_.length;
 }
 /** @override @return {?string} */
 toString() {
  return Arrays.m_toString__arrayOf_int__java_lang_String(this.f_array__java_util_concurrent_atomic_AtomicIntegerArray_);
 }
 /** @nodts */
 static $clinit() {
  AtomicIntegerArray.$clinit = () =>{};
  AtomicIntegerArray.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AtomicIntegerArray;
 }
 
 /** @nodts */
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  $int = goog.module.get('javaemul.internal.primitives.$int$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(AtomicIntegerArray, 'java.util.concurrent.atomic.AtomicIntegerArray');

exports = AtomicIntegerArray;

//# sourceMappingURL=AtomicIntegerArray.js.map
