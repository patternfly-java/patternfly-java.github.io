goog.module('java.util.stream.LongStream.$4$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongPredicate = goog.forwardDeclare('java.util.function.LongPredicate$impl');
let LongUnaryOperator = goog.forwardDeclare('java.util.function.LongUnaryOperator$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_next__java_util_stream_LongStream_4_ = $Long.fromInt(0);
  /**@type {boolean} @nodts*/
  this.f_isFirst__java_util_stream_LongStream_4_ = false;
  /**@type {boolean} @nodts*/
  this.f_isTerminated__java_util_stream_LongStream_4_ = false;
  /**@type {!$Long} @nodts*/
  this.$captured_seed__java_util_stream_LongStream_4 = $Long.fromInt(0);
  /**@type {LongUnaryOperator} @nodts*/
  this.$captured_f__java_util_stream_LongStream_4;
  /**@type {LongPredicate} @nodts*/
  this.$captured_hasNext__java_util_stream_LongStream_4;
 }
 /** @nodts @return {!$4} */
 static $create__long__java_util_function_LongUnaryOperator__java_util_function_LongPredicate__long__int(/** !$Long */ $captured_seed, /** LongUnaryOperator */ $captured_f, /** LongPredicate */ $captured_hasNext, /** !$Long */ size, /** number */ characteristics) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__java_util_stream_LongStream_4__long__java_util_function_LongUnaryOperator__java_util_function_LongPredicate__long__int__void($captured_seed, $captured_f, $captured_hasNext, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStream_4__long__java_util_function_LongUnaryOperator__java_util_function_LongPredicate__long__int__void(/** !$Long */ $captured_seed, /** LongUnaryOperator */ $captured_f, /** LongPredicate */ $captured_hasNext, /** !$Long */ size, /** number */ characteristics) {
  this.$captured_seed__java_util_stream_LongStream_4 = $captured_seed;
  this.$captured_f__java_util_stream_LongStream_4 = $captured_f;
  this.$captured_hasNext__java_util_stream_LongStream_4 = $captured_hasNext;
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_LongStream_4();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  if (this.f_isTerminated__java_util_stream_LongStream_4_) {
   return false;
  }
  if (!this.f_isFirst__java_util_stream_LongStream_4_) {
   this.f_next__java_util_stream_LongStream_4_ = this.$captured_f__java_util_stream_LongStream_4.m_applyAsLong__long__long(this.f_next__java_util_stream_LongStream_4_);
  }
  this.f_isFirst__java_util_stream_LongStream_4_ = false;
  if (!this.$captured_hasNext__java_util_stream_LongStream_4.m_test__long__boolean(this.f_next__java_util_stream_LongStream_4_)) {
   this.f_isTerminated__java_util_stream_LongStream_4_ = true;
   return false;
  }
  action.m_accept__long__void(this.f_next__java_util_stream_LongStream_4_);
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, /**@type {Function}*/ (LongConsumer))));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_LongStream_4() {
  this.f_next__java_util_stream_LongStream_4_ = this.$captured_seed__java_util_stream_LongStream_4;
  this.f_isFirst__java_util_stream_LongStream_4_ = true;
  this.f_isTerminated__java_util_stream_LongStream_4_ = false;
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($4, 'java.util.stream.LongStream$4');

exports = $4;

//# sourceMappingURL=LongStream$4.js.map
