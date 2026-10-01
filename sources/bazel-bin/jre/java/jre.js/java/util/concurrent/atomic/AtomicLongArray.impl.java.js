goog.module('java.util.concurrent.atomic.AtomicLongArray$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let LongBinaryOperator = goog.forwardDeclare('java.util.function.LongBinaryOperator$impl');
let LongUnaryOperator = goog.forwardDeclare('java.util.function.LongUnaryOperator$impl');
let $long = goog.forwardDeclare('javaemul.internal.primitives.$long$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @final
 */
class AtomicLongArray extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<!$Long>} @nodts*/
  this.f_array__java_util_concurrent_atomic_AtomicLongArray_;
 }
 //Factory method corresponding to constructor 'AtomicLongArray(long[])'.
 /** @nodts @return {!AtomicLongArray} */
 static $create__arrayOf_long(/** Array<!$Long> */ array) {
  AtomicLongArray.$clinit();
  let $instance = new AtomicLongArray();
  $instance.$ctor__java_util_concurrent_atomic_AtomicLongArray__arrayOf_long__void(array);
  return $instance;
 }
 //Initialization from constructor 'AtomicLongArray(long[])'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicLongArray__arrayOf_long__void(/** Array<!$Long> */ array) {
  this.$ctor__java_lang_Object__void();
  this.f_array__java_util_concurrent_atomic_AtomicLongArray_ = Arrays.m_copyOf__arrayOf_long__int__arrayOf_long(array, array.length);
 }
 //Factory method corresponding to constructor 'AtomicLongArray(int)'.
 /** @nodts @return {!AtomicLongArray} */
 static $create__int(/** number */ length) {
  AtomicLongArray.$clinit();
  let $instance = new AtomicLongArray();
  $instance.$ctor__java_util_concurrent_atomic_AtomicLongArray__int__void(length);
  return $instance;
 }
 //Initialization from constructor 'AtomicLongArray(int)'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicLongArray__int__void(/** number */ length) {
  this.$ctor__java_lang_Object__void();
  this.f_array__java_util_concurrent_atomic_AtomicLongArray_ = (/**@type {!Array<!$Long>}*/ ($Arrays.$create([length], $long)));
 }
 /** @nodts @return {!$Long} */
 m_get__int__long(/** number */ i) {
  return this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i];
 }
 /** @nodts @return {!$Long} */
 m_getAndAccumulate__int__long__java_util_function_LongBinaryOperator__long(/** number */ i, /** !$Long */ x, /** LongBinaryOperator */ accumulatorFunction) {
  let previous = this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i];
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, accumulatorFunction.m_applyAsLong__long__long__long(previous, x));
  return previous;
 }
 /** @nodts @return {!$Long} */
 m_getAndAdd__int__long__long(/** number */ i, /** !$Long */ delta) {
  let previous = this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i];
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, $LongUtils.plus(previous, delta));
  return previous;
 }
 /** @nodts @return {!$Long} */
 m_getAndIncrement__int__long(/** number */ i) {
  return this.m_getAndAdd__int__long__long(i, $Long.fromInt(1));
 }
 /** @nodts @return {!$Long} */
 m_getAndDecrement__int__long(/** number */ i) {
  return this.m_getAndAdd__int__long__long(i, $Long.fromInt(-1));
 }
 /** @nodts @return {!$Long} */
 m_getAndSet__int__long__long(/** number */ i, /** !$Long */ newValue) {
  let previous = this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i];
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, newValue);
  return previous;
 }
 /** @nodts @return {!$Long} */
 m_getAndUpdate__int__java_util_function_LongUnaryOperator__long(/** number */ i, /** LongUnaryOperator */ updateFunction) {
  let previous = this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i];
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, updateFunction.m_applyAsLong__long__long(previous));
  return previous;
 }
 /** @nodts @return {!$Long} */
 m_accumulateAndGet__int__long__java_util_function_LongBinaryOperator__long(/** number */ i, /** !$Long */ x, /** LongBinaryOperator */ accumulatorFunction) {
  let newValue = accumulatorFunction.m_applyAsLong__long__long__long(this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i], x);
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, newValue);
  return newValue;
 }
 /** @nodts @return {!$Long} */
 m_addAndGet__int__long__long(/** number */ i, /** !$Long */ delta) {
  let newValue = $LongUtils.plus(this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i], delta);
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, newValue);
  return newValue;
 }
 /** @nodts @return {!$Long} */
 m_incrementAndGet__int__long(/** number */ i) {
  return this.m_addAndGet__int__long__long(i, $Long.fromInt(1));
 }
 /** @nodts @return {!$Long} */
 m_decrementAndGet__int__long(/** number */ i) {
  return this.m_addAndGet__int__long__long(i, $Long.fromInt(-1));
 }
 /** @nodts @return {!$Long} */
 m_updateAndGet__int__java_util_function_LongUnaryOperator__long(/** number */ i, /** LongUnaryOperator */ updateFunction) {
  let newValue = updateFunction.m_applyAsLong__long__long(this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i]);
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, newValue);
  return newValue;
 }
 /** @nodts @return {boolean} */
 m_compareAndSet__int__long__long__boolean(/** number */ i, /** !$Long */ expect, /** !$Long */ update) {
  if ($LongUtils.equals(this.f_array__java_util_concurrent_atomic_AtomicLongArray_[i], expect)) {
   $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, update);
   return true;
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_weakCompareAndSet__int__long__long__boolean(/** number */ i, /** !$Long */ expect, /** !$Long */ update) {
  return this.m_compareAndSet__int__long__long__boolean(i, expect, update);
 }
 /** @nodts */
 m_set__int__long__void(/** number */ i, /** !$Long */ newValue) {
  $Arrays.$set(this.f_array__java_util_concurrent_atomic_AtomicLongArray_, i, newValue);
 }
 /** @nodts */
 m_lazySet__int__long__void(/** number */ i, /** !$Long */ newValue) {
  this.m_set__int__long__void(i, newValue);
 }
 /** @nodts @return {number} */
 m_length__int() {
  return this.f_array__java_util_concurrent_atomic_AtomicLongArray_.length;
 }
 /** @override @return {?string} */
 toString() {
  return Arrays.m_toString__arrayOf_long__java_lang_String(this.f_array__java_util_concurrent_atomic_AtomicLongArray_);
 }
 /** @nodts */
 static $clinit() {
  AtomicLongArray.$clinit = () =>{};
  AtomicLongArray.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AtomicLongArray;
 }
 
 /** @nodts */
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  $long = goog.module.get('javaemul.internal.primitives.$long$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata(AtomicLongArray, 'java.util.concurrent.atomic.AtomicLongArray');

exports = AtomicLongArray;

//# sourceMappingURL=AtomicLongArray.js.map
