goog.module('java.util.stream.DoubleStream.$5$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoublePredicate = goog.forwardDeclare('java.util.function.DoublePredicate$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $5 extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!DoubleStream} @nodts*/
  this.$outer_this__java_util_stream_DoubleStream_5;
  /**@type {boolean} @nodts*/
  this.f_dropping__java_util_stream_DoubleStream_5_ = false;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_DoubleStream_5_ = false;
  /**@type {OfDouble} @nodts*/
  this.$captured_prev__java_util_stream_DoubleStream_5;
  /**@type {DoublePredicate} @nodts*/
  this.$captured_predicate__java_util_stream_DoubleStream_5;
 }
 /** @nodts @return {!$5} */
 static $create__java_util_stream_DoubleStream__java_util_Spliterator_OfDouble__java_util_function_DoublePredicate__long__int(/** !DoubleStream */ $outer_this, /** OfDouble */ $captured_prev, /** DoublePredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__java_util_stream_DoubleStream_5__java_util_stream_DoubleStream__java_util_Spliterator_OfDouble__java_util_function_DoublePredicate__long__int__void($outer_this, $captured_prev, $captured_predicate, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStream_5__java_util_stream_DoubleStream__java_util_Spliterator_OfDouble__java_util_function_DoublePredicate__long__int__void(/** !DoubleStream */ $outer_this, /** OfDouble */ $captured_prev, /** DoublePredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  this.$outer_this__java_util_stream_DoubleStream_5 = $outer_this;
  this.$captured_prev__java_util_stream_DoubleStream_5 = $captured_prev;
  this.$captured_predicate__java_util_stream_DoubleStream_5 = $captured_predicate;
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_DoubleStream_5();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  if (!this.f_dropping__java_util_stream_DoubleStream_5_) {
   return this.$captured_prev__java_util_stream_DoubleStream_5.m_tryAdvance__java_lang_Object__boolean(action);
  }
  this.f_found__java_util_stream_DoubleStream_5_ = false;
  while (this.f_dropping__java_util_stream_DoubleStream_5_ && this.$captured_prev__java_util_stream_DoubleStream_5.m_tryAdvance__java_lang_Object__boolean(DoubleConsumer.$adapt((/** number */ item) =>{
   if (!this.$captured_predicate__java_util_stream_DoubleStream_5.m_test__double__boolean(item)) {
    this.f_dropping__java_util_stream_DoubleStream_5_ = false;
    this.f_found__java_util_stream_DoubleStream_5_ = true;
    action.m_accept__double__void(item);
   }
  }))) {}
  return this.f_found__java_util_stream_DoubleStream_5_;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, /**@type {Function}*/ (DoubleConsumer))));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_DoubleStream_5() {
  this.f_dropping__java_util_stream_DoubleStream_5_ = true;
 }
 /** @nodts */
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 /** @nodts */
 static $loadModules() {
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($5, 'java.util.stream.DoubleStream$5');

exports = $5;

//# sourceMappingURL=DoubleStream$5.js.map
