goog.module('javaemul.internal.JsIterableHelper.JsIterableAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let JsIterableIteratorAdapter = goog.forwardDeclare('javaemul.internal.JsIterableHelper.JsIterableIteratorAdapter$impl');

/**
 * @final
 * @template T
 * @implements {Iterable<T>}
 */
class JsIterableAdapter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {j_l_Iterable<T>} @nodts*/
  this.f_delegate__javaemul_internal_JsIterableHelper_JsIterableAdapter_;
 }
 /** @nodts @template T @return {!JsIterableAdapter<T>} */
 static $create__java_lang_Iterable(/** j_l_Iterable<T> */ delegate) {
  JsIterableAdapter.$clinit();
  let $instance = new JsIterableAdapter();
  $instance.$ctor__javaemul_internal_JsIterableHelper_JsIterableAdapter__java_lang_Iterable__void(delegate);
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_JsIterableHelper_JsIterableAdapter__java_lang_Iterable__void(/** j_l_Iterable<T> */ delegate) {
  this.$ctor__java_lang_Object__void();
  this.f_delegate__javaemul_internal_JsIterableHelper_JsIterableAdapter_ = delegate;
 }
 /** @final @override @return {JsIterableIteratorAdapter<T>} */
 [Symbol.iterator]() {
  return /**@type {!JsIterableIteratorAdapter<T>}*/ (JsIterableIteratorAdapter.$create__javaemul_internal_JsIterableHelper_JsIterator(this.f_delegate__javaemul_internal_JsIterableHelper_JsIterableAdapter_.m_iterator__java_util_Iterator()));
 }
 /** @nodts */
 static $clinit() {
  JsIterableAdapter.$clinit = () =>{};
  JsIterableAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsIterableAdapter;
 }
 
 /** @nodts */
 static $loadModules() {
  JsIterableIteratorAdapter = goog.module.get('javaemul.internal.JsIterableHelper.JsIterableIteratorAdapter$impl');
 }
}
$Util.$setClassMetadata(JsIterableAdapter, 'javaemul.internal.JsIterableHelper$JsIterableAdapter');

exports = JsIterableAdapter;

//# sourceMappingURL=JsIterableHelper$JsIterableAdapter.js.map
