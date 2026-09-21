goog.module('java.util.stream.Stream.$5$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class $5 extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!Stream<T>} @nodts*/
  this.$outer_this__java_util_stream_Stream_5;
  /**@type {boolean} @nodts*/
  this.f_dropping__java_util_stream_Stream_5_ = false;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_Stream_5_ = false;
  /**@type {Spliterator<T>} @nodts*/
  this.$captured_prev__java_util_stream_Stream_5;
  /**@type {Predicate<?>} @nodts*/
  this.$captured_predicate__java_util_stream_Stream_5;
 }
 /** @nodts @template T @return {!$5<T>} */
 static $create__java_util_stream_Stream__java_util_Spliterator__java_util_function_Predicate__long__int(/** !Stream<T> */ $outer_this, /** Spliterator<T> */ $captured_prev, /** Predicate<?> */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__java_util_stream_Stream_5__java_util_stream_Stream__java_util_Spliterator__java_util_function_Predicate__long__int__void($outer_this, $captured_prev, $captured_predicate, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_Stream_5__java_util_stream_Stream__java_util_Spliterator__java_util_function_Predicate__long__int__void(/** !Stream<T> */ $outer_this, /** Spliterator<T> */ $captured_prev, /** Predicate<?> */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  this.$outer_this__java_util_stream_Stream_5 = $outer_this;
  this.$captured_prev__java_util_stream_Stream_5 = $captured_prev;
  this.$captured_predicate__java_util_stream_Stream_5 = $captured_predicate;
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_Stream_5();
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  if (!this.f_dropping__java_util_stream_Stream_5_) {
   return this.$captured_prev__java_util_stream_Stream_5.m_tryAdvance__java_util_function_Consumer__boolean(action);
  }
  this.f_found__java_util_stream_Stream_5_ = false;
  while (this.f_dropping__java_util_stream_Stream_5_ && this.$captured_prev__java_util_stream_Stream_5.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((/** T */ item) =>{
   if (!this.$captured_predicate__java_util_stream_Stream_5.m_test__java_lang_Object__boolean(item)) {
    this.f_dropping__java_util_stream_Stream_5_ = false;
    this.f_found__java_util_stream_Stream_5_ = true;
    action.m_accept__java_lang_Object__void(item);
   }
  }))) {}
  return this.f_found__java_util_stream_Stream_5_;
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_Stream_5() {
  this.f_dropping__java_util_stream_Stream_5_ = true;
 }
 /** @nodts */
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
 }
}
$Util.$setClassMetadata($5, 'java.util.stream.Stream$5');

exports = $5;

//# sourceMappingURL=Stream$5.js.map
