goog.module('javaemul.internal.JsIterableHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let JsIterableAdapter = goog.forwardDeclare('javaemul.internal.JsIterableHelper.JsIterableAdapter$impl');

/**
 * @final
 */
class JsIterableHelper extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 // /** @template T @return {IIterableResult<T>} */
 // native static makeResult(/** T */ value, /** boolean */ done) 
 /** @nodts @template T @return {Iterable<T>} */
 static m_asJsIterable__java_lang_Iterable__javaemul_internal_JsIterableHelper_JsIterable(/** j_l_Iterable<T> */ iterable) {
  JsIterableHelper.$clinit();
  return /**@type {!JsIterableAdapter<T>}*/ (JsIterableAdapter.$create__java_lang_Iterable(iterable));
 }
 /** @nodts @return {!JsIterableHelper} */
 static $create__() {
  let $instance = new JsIterableHelper();
  $instance.$ctor__javaemul_internal_JsIterableHelper__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_JsIterableHelper__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  JsIterableHelper.$clinit = () =>{};
  JsIterableHelper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsIterableHelper;
 }
 
 /** @nodts */
 static $loadModules() {
  JsIterableAdapter = goog.module.get('javaemul.internal.JsIterableHelper.JsIterableAdapter$impl');
 }
}
$Util.$setClassMetadata(JsIterableHelper, 'javaemul.internal.JsIterableHelper');

/* NATIVE.JS EPILOG */

const javaemul_internal_JsIterableHelper = JsIterableHelper;

/**
 * @param {?T} value
 * @param {boolean} done
 * @return {!IIterableResult<T>}
 * @template T
 */
JsIterableHelper.makeResult = function(value, done) {
  return {value: value, done: done};
};


exports = JsIterableHelper;

//# sourceMappingURL=JsIterableHelper.js.map
