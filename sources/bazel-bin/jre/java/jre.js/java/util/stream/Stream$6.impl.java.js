goog.module('java.util.stream.Stream.$6$impl');

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
class $6 extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!Stream<T>} @nodts*/
  this.$outer_this__java_util_stream_Stream_6;
  /**@type {boolean} @nodts*/
  this.f_taking__java_util_stream_Stream_6_ = false;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_Stream_6_ = false;
  /**@type {Spliterator<T>} @nodts*/
  this.$captured_original__java_util_stream_Stream_6;
  /**@type {Predicate<?>} @nodts*/
  this.$captured_predicate__java_util_stream_Stream_6;
 }
 /** @nodts @template T @return {!$6<T>} */
 static $create__java_util_stream_Stream__java_util_Spliterator__java_util_function_Predicate__long__int(/** !Stream<T> */ $outer_this, /** Spliterator<T> */ $captured_original, /** Predicate<?> */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__java_util_stream_Stream_6__java_util_stream_Stream__java_util_Spliterator__java_util_function_Predicate__long__int__void($outer_this, $captured_original, $captured_predicate, size, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_Stream_6__java_util_stream_Stream__java_util_Spliterator__java_util_function_Predicate__long__int__void(/** !Stream<T> */ $outer_this, /** Spliterator<T> */ $captured_original, /** Predicate<?> */ $captured_predicate, /** !$Long */ size, /** number */ characteristics) {
  this.$outer_this__java_util_stream_Stream_6 = $outer_this;
  this.$captured_original__java_util_stream_Stream_6 = $captured_original;
  this.$captured_predicate__java_util_stream_Stream_6 = $captured_predicate;
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(size, characteristics);
  this.$init__void_$p_java_util_stream_Stream_6();
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  if (!this.f_taking__java_util_stream_Stream_6_) {
   return false;
  }
  this.f_found__java_util_stream_Stream_6_ = false;
  this.$captured_original__java_util_stream_Stream_6.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((/** T */ item) =>{
   if (this.$captured_predicate__java_util_stream_Stream_6.m_test__java_lang_Object__boolean(item)) {
    this.f_found__java_util_stream_Stream_6_ = true;
    action.m_accept__java_lang_Object__void(item);
   } else {
    this.f_taking__java_util_stream_Stream_6_ = false;
   }
  }));
  return this.f_found__java_util_stream_Stream_6_;
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_Stream_6() {
  this.f_taking__java_util_stream_Stream_6_ = true;
 }
 /** @nodts */
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
 }
}
$Util.$setClassMetadata($6, 'java.util.stream.Stream$6');

exports = $6;

//# sourceMappingURL=Stream$6.js.map
