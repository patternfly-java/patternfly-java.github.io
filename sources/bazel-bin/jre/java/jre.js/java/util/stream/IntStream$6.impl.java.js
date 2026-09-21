goog.module('java.util.stream.IntStream.$6$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntPredicate = goog.forwardDeclare('java.util.function.IntPredicate$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $6 extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!IntStream} @nodts*/
  this.$outer_this__java_util_stream_IntStream_6;
  /**@type {boolean} @nodts*/
  this.f_dropping__java_util_stream_IntStream_6_ = false;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_IntStream_6_ = false;
  /**@type {OfInt} @nodts*/
  this.$captured_prev__java_util_stream_IntStream_6;
  /**@type {IntPredicate} @nodts*/
  this.$captured_predicate__java_util_stream_IntStream_6;
 }
 /** @nodts @return {!$6} */
 static $create__java_util_stream_IntStream__java_util_Spliterator_OfInt__java_util_function_IntPredicate__long__int(/** !IntStream */ $outer_this, /** OfInt */ $captured_prev, /** IntPredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__java_util_stream_IntStream_6__java_util_stream_IntStream__java_util_Spliterator_OfInt__java_util_function_IntPredicate__long__int__void($outer_this, $captured_prev, $captured_predicate, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStream_6__java_util_stream_IntStream__java_util_Spliterator_OfInt__java_util_function_IntPredicate__long__int__void(/** !IntStream */ $outer_this, /** OfInt */ $captured_prev, /** IntPredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  this.$outer_this__java_util_stream_IntStream_6 = $outer_this;
  this.$captured_prev__java_util_stream_IntStream_6 = $captured_prev;
  this.$captured_predicate__java_util_stream_IntStream_6 = $captured_predicate;
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_IntStream_6();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  if (!this.f_dropping__java_util_stream_IntStream_6_) {
   return this.$captured_prev__java_util_stream_IntStream_6.m_tryAdvance__java_lang_Object__boolean(action);
  }
  this.f_found__java_util_stream_IntStream_6_ = false;
  while (this.f_dropping__java_util_stream_IntStream_6_ && this.$captured_prev__java_util_stream_IntStream_6.m_tryAdvance__java_lang_Object__boolean(IntConsumer.$adapt((/** number */ item) =>{
   if (!this.$captured_predicate__java_util_stream_IntStream_6.m_test__int__boolean(item)) {
    this.f_dropping__java_util_stream_IntStream_6_ = false;
    this.f_found__java_util_stream_IntStream_6_ = true;
    action.m_accept__int__void(item);
   }
  }))) {}
  return this.f_found__java_util_stream_IntStream_6_;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, /**@type {Function}*/ (IntConsumer))));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_IntStream_6() {
  this.f_dropping__java_util_stream_IntStream_6_ = true;
 }
 /** @nodts */
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 /** @nodts */
 static $loadModules() {
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($6, 'java.util.stream.IntStream$6');

exports = $6;

//# sourceMappingURL=IntStream$6.js.map
