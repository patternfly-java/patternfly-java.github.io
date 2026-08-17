goog.module('java.util.stream.DoubleStream.$6$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoublePredicate = goog.forwardDeclare('java.util.function.DoublePredicate$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $6 extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!DoubleStream} @nodts*/
  this.$outer_this__java_util_stream_DoubleStream_6;
  /**@type {boolean} @nodts*/
  this.f_taking__java_util_stream_DoubleStream_6_ = false;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_DoubleStream_6_ = false;
  /**@type {OfDouble} @nodts*/
  this.$captured_original__java_util_stream_DoubleStream_6;
  /**@type {DoublePredicate} @nodts*/
  this.$captured_predicate__java_util_stream_DoubleStream_6;
 }
 /** @nodts @return {!$6} */
 static $create__java_util_stream_DoubleStream__java_util_Spliterator_OfDouble__java_util_function_DoublePredicate__long__int(/** !DoubleStream */ $outer_this, /** OfDouble */ $captured_original, /** DoublePredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__java_util_stream_DoubleStream_6__java_util_stream_DoubleStream__java_util_Spliterator_OfDouble__java_util_function_DoublePredicate__long__int__void($outer_this, $captured_original, $captured_predicate, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStream_6__java_util_stream_DoubleStream__java_util_Spliterator_OfDouble__java_util_function_DoublePredicate__long__int__void(/** !DoubleStream */ $outer_this, /** OfDouble */ $captured_original, /** DoublePredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  this.$outer_this__java_util_stream_DoubleStream_6 = $outer_this;
  this.$captured_original__java_util_stream_DoubleStream_6 = $captured_original;
  this.$captured_predicate__java_util_stream_DoubleStream_6 = $captured_predicate;
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_DoubleStream_6();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  if (!this.f_taking__java_util_stream_DoubleStream_6_) {
   return false;
  }
  this.f_found__java_util_stream_DoubleStream_6_ = false;
  this.$captured_original__java_util_stream_DoubleStream_6.m_tryAdvance__java_lang_Object__boolean(DoubleConsumer.$adapt((/** number */ item) =>{
   if (this.$captured_predicate__java_util_stream_DoubleStream_6.m_test__double__boolean(item)) {
    this.f_found__java_util_stream_DoubleStream_6_ = true;
    action.m_accept__double__void(item);
   } else {
    this.f_taking__java_util_stream_DoubleStream_6_ = false;
   }
  }));
  return this.f_found__java_util_stream_DoubleStream_6_;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, /**@type {Function}*/ (DoubleConsumer))));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_DoubleStream_6() {
  this.f_taking__java_util_stream_DoubleStream_6_ = true;
 }
 /** @nodts */
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 /** @nodts */
 static $loadModules() {
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($6, 'java.util.stream.DoubleStream$6');

exports = $6;

//# sourceMappingURL=DoubleStream$6.js.map
