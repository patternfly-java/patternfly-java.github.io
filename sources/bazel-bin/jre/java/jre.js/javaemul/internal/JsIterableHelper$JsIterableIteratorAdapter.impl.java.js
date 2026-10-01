goog.module('javaemul.internal.JsIterableHelper.JsIterableIteratorAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 * @template T
 * @implements {Iterator<T>}
 * @implements {Iterable<T>}
 */
class JsIterableIteratorAdapter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Iterator<T>} @nodts*/
  this.f_delegate__javaemul_internal_JsIterableHelper_JsIterableIteratorAdapter_;
 }
 /** @nodts @template T @return {!JsIterableIteratorAdapter<T>} */
 static $create__javaemul_internal_JsIterableHelper_JsIterator(/** Iterator<T> */ delegate) {
  JsIterableIteratorAdapter.$clinit();
  let $instance = new JsIterableIteratorAdapter();
  $instance.$ctor__javaemul_internal_JsIterableHelper_JsIterableIteratorAdapter__javaemul_internal_JsIterableHelper_JsIterator__void(delegate);
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_JsIterableHelper_JsIterableIteratorAdapter__javaemul_internal_JsIterableHelper_JsIterator__void(/** Iterator<T> */ delegate) {
  this.$ctor__java_lang_Object__void();
  this.f_delegate__javaemul_internal_JsIterableHelper_JsIterableIteratorAdapter_ = delegate;
 }
 /** @final @override @return {IIterableResult<T>} */
 next() {
  return this.f_delegate__javaemul_internal_JsIterableHelper_JsIterableIteratorAdapter_.next();
 }
 /** @final @override @return {Iterator<T>} */
 [Symbol.iterator]() {
  return this;
 }
 /** @nodts */
 static $clinit() {
  JsIterableIteratorAdapter.$clinit = () =>{};
  JsIterableIteratorAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsIterableIteratorAdapter;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(JsIterableIteratorAdapter, 'javaemul.internal.JsIterableHelper$JsIterableIteratorAdapter');

exports = JsIterableIteratorAdapter;

//# sourceMappingURL=JsIterableHelper$JsIterableIteratorAdapter.js.map
