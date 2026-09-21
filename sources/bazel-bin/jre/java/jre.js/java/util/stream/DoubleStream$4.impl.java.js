goog.module('java.util.stream.DoubleStream.$4$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoublePredicate = goog.forwardDeclare('java.util.function.DoublePredicate$impl');
let DoubleUnaryOperator = goog.forwardDeclare('java.util.function.DoubleUnaryOperator$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_next__java_util_stream_DoubleStream_4_ = 0;
  /**@type {boolean} @nodts*/
  this.f_isFirst__java_util_stream_DoubleStream_4_ = false;
  /**@type {boolean} @nodts*/
  this.f_isTerminated__java_util_stream_DoubleStream_4_ = false;
  /**@type {number} @nodts*/
  this.$captured_seed__java_util_stream_DoubleStream_4 = 0;
  /**@type {DoubleUnaryOperator} @nodts*/
  this.$captured_f__java_util_stream_DoubleStream_4;
  /**@type {DoublePredicate} @nodts*/
  this.$captured_hasNext__java_util_stream_DoubleStream_4;
 }
 /** @nodts @return {!$4} */
 static $create__double__java_util_function_DoubleUnaryOperator__java_util_function_DoublePredicate__long__int(/** number */ $captured_seed, /** DoubleUnaryOperator */ $captured_f, /** DoublePredicate */ $captured_hasNext, /** !$Long */ size, /** number */ characteristics) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__java_util_stream_DoubleStream_4__double__java_util_function_DoubleUnaryOperator__java_util_function_DoublePredicate__long__int__void($captured_seed, $captured_f, $captured_hasNext, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStream_4__double__java_util_function_DoubleUnaryOperator__java_util_function_DoublePredicate__long__int__void(/** number */ $captured_seed, /** DoubleUnaryOperator */ $captured_f, /** DoublePredicate */ $captured_hasNext, /** !$Long */ size, /** number */ characteristics) {
  this.$captured_seed__java_util_stream_DoubleStream_4 = $captured_seed;
  this.$captured_f__java_util_stream_DoubleStream_4 = $captured_f;
  this.$captured_hasNext__java_util_stream_DoubleStream_4 = $captured_hasNext;
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_DoubleStream_4();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  if (this.f_isTerminated__java_util_stream_DoubleStream_4_) {
   return false;
  }
  if (!this.f_isFirst__java_util_stream_DoubleStream_4_) {
   this.f_next__java_util_stream_DoubleStream_4_ = this.$captured_f__java_util_stream_DoubleStream_4.m_applyAsDouble__double__double(this.f_next__java_util_stream_DoubleStream_4_);
  }
  this.f_isFirst__java_util_stream_DoubleStream_4_ = false;
  if (!this.$captured_hasNext__java_util_stream_DoubleStream_4.m_test__double__boolean(this.f_next__java_util_stream_DoubleStream_4_)) {
   this.f_isTerminated__java_util_stream_DoubleStream_4_ = true;
   return false;
  }
  action.m_accept__double__void(this.f_next__java_util_stream_DoubleStream_4_);
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, /**@type {Function}*/ (DoubleConsumer))));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_DoubleStream_4() {
  this.f_next__java_util_stream_DoubleStream_4_ = this.$captured_seed__java_util_stream_DoubleStream_4;
  this.f_isFirst__java_util_stream_DoubleStream_4_ = true;
  this.f_isTerminated__java_util_stream_DoubleStream_4_ = false;
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($4, 'java.util.stream.DoubleStream$4');

exports = $4;

//# sourceMappingURL=DoubleStream$4.js.map
