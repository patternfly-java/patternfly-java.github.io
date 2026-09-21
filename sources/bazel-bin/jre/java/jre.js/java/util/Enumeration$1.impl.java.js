goog.module('java.util.Enumeration.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enumeration = goog.forwardDeclare('java.util.Enumeration$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @template E
 * @implements {Iterator<E>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!Enumeration<E>} @nodts*/
  this.$outer_this__java_util_Enumeration_1;
 }
 /** @nodts @template E @return {!$1<E>} */
 static $create__java_util_Enumeration(/** !Enumeration<E> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_Enumeration_1__java_util_Enumeration__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Enumeration_1__java_util_Enumeration__void(/** !Enumeration<E> */ $outer_this) {
  this.$outer_this__java_util_Enumeration_1 = $outer_this;
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.$outer_this__java_util_Enumeration_1.m_hasMoreElements__boolean();
 }
 /** @override @nodts @return {E} */
 m_next__java_lang_Object() {
  return this.$outer_this__java_util_Enumeration_1.m_nextElement__java_lang_Object();
 }
 //Default method forwarding stub.
 /** @override @return {IIterableResult<E>} */
 next() {
  return /**@type {IIterableResult<E>}*/ (Iterator.m__private_jsNext____$default__java_util_Iterator__javaemul_internal_JsIterableHelper_IIterableResult(this));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_remove__void() {
  Iterator.m_remove__$default__java_util_Iterator__void(this);
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Iterator.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.Enumeration$1');

exports = $1;

//# sourceMappingURL=Enumeration$1.js.map
