goog.module('java.util.stream.LongStream.$6$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongPredicate = goog.forwardDeclare('java.util.function.LongPredicate$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $6 extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!LongStream} @nodts*/
  this.$outer_this__java_util_stream_LongStream_6;
  /**@type {boolean} @nodts*/
  this.f_dropping__java_util_stream_LongStream_6_ = false;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_LongStream_6_ = false;
  /**@type {OfLong} @nodts*/
  this.$captured_prev__java_util_stream_LongStream_6;
  /**@type {LongPredicate} @nodts*/
  this.$captured_predicate__java_util_stream_LongStream_6;
 }
 /** @nodts @return {!$6} */
 static $create__java_util_stream_LongStream__java_util_Spliterator_OfLong__java_util_function_LongPredicate__long__int(/** !LongStream */ $outer_this, /** OfLong */ $captured_prev, /** LongPredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__java_util_stream_LongStream_6__java_util_stream_LongStream__java_util_Spliterator_OfLong__java_util_function_LongPredicate__long__int__void($outer_this, $captured_prev, $captured_predicate, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStream_6__java_util_stream_LongStream__java_util_Spliterator_OfLong__java_util_function_LongPredicate__long__int__void(/** !LongStream */ $outer_this, /** OfLong */ $captured_prev, /** LongPredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  this.$outer_this__java_util_stream_LongStream_6 = $outer_this;
  this.$captured_prev__java_util_stream_LongStream_6 = $captured_prev;
  this.$captured_predicate__java_util_stream_LongStream_6 = $captured_predicate;
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_LongStream_6();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  if (!this.f_dropping__java_util_stream_LongStream_6_) {
   return this.$captured_prev__java_util_stream_LongStream_6.m_tryAdvance__java_lang_Object__boolean(action);
  }
  this.f_found__java_util_stream_LongStream_6_ = false;
  while (this.f_dropping__java_util_stream_LongStream_6_ && this.$captured_prev__java_util_stream_LongStream_6.m_tryAdvance__java_lang_Object__boolean(LongConsumer.$adapt((/** !$Long */ item) =>{
   if (!this.$captured_predicate__java_util_stream_LongStream_6.m_test__long__boolean(item)) {
    this.f_dropping__java_util_stream_LongStream_6_ = false;
    this.f_found__java_util_stream_LongStream_6_ = true;
    action.m_accept__long__void(item);
   }
  }))) {}
  return this.f_found__java_util_stream_LongStream_6_;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, /**@type {Function}*/ (LongConsumer))));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_LongStream_6() {
  this.f_dropping__java_util_stream_LongStream_6_ = true;
 }
 /** @nodts */
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 /** @nodts */
 static $loadModules() {
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($6, 'java.util.stream.LongStream$6');

exports = $6;

//# sourceMappingURL=LongStream$6.js.map
