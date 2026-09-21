goog.module('java.util.stream.IntStream.$7$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntPredicate = goog.forwardDeclare('java.util.function.IntPredicate$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $7 extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!IntStream} @nodts*/
  this.$outer_this__java_util_stream_IntStream_7;
  /**@type {boolean} @nodts*/
  this.f_taking__java_util_stream_IntStream_7_ = false;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_IntStream_7_ = false;
  /**@type {OfInt} @nodts*/
  this.$captured_original__java_util_stream_IntStream_7;
  /**@type {IntPredicate} @nodts*/
  this.$captured_predicate__java_util_stream_IntStream_7;
 }
 /** @nodts @return {!$7} */
 static $create__java_util_stream_IntStream__java_util_Spliterator_OfInt__java_util_function_IntPredicate__long__int(/** !IntStream */ $outer_this, /** OfInt */ $captured_original, /** IntPredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__java_util_stream_IntStream_7__java_util_stream_IntStream__java_util_Spliterator_OfInt__java_util_function_IntPredicate__long__int__void($outer_this, $captured_original, $captured_predicate, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStream_7__java_util_stream_IntStream__java_util_Spliterator_OfInt__java_util_function_IntPredicate__long__int__void(/** !IntStream */ $outer_this, /** OfInt */ $captured_original, /** IntPredicate */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  this.$outer_this__java_util_stream_IntStream_7 = $outer_this;
  this.$captured_original__java_util_stream_IntStream_7 = $captured_original;
  this.$captured_predicate__java_util_stream_IntStream_7 = $captured_predicate;
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_IntStream_7();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  if (!this.f_taking__java_util_stream_IntStream_7_) {
   return false;
  }
  this.f_found__java_util_stream_IntStream_7_ = false;
  this.$captured_original__java_util_stream_IntStream_7.m_tryAdvance__java_lang_Object__boolean(IntConsumer.$adapt((/** number */ item) =>{
   if (this.$captured_predicate__java_util_stream_IntStream_7.m_test__int__boolean(item)) {
    this.f_found__java_util_stream_IntStream_7_ = true;
    action.m_accept__int__void(item);
   } else {
    this.f_taking__java_util_stream_IntStream_7_ = false;
   }
  }));
  return this.f_found__java_util_stream_IntStream_7_;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, /**@type {Function}*/ (IntConsumer))));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_IntStream_7() {
  this.f_taking__java_util_stream_IntStream_7_ = true;
 }
 /** @nodts */
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 /** @nodts */
 static $loadModules() {
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($7, 'java.util.stream.IntStream$7');

exports = $7;

//# sourceMappingURL=IntStream$7.js.map
