goog.module('java.util.Set$impl');

const Collection = goog.require('java.util.Collection$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');

/**
 * @interface
 * @template E
 * @extends {Collection<E>}
 */
class Set {
 /** @abstract @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {}
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_util_Set() {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of());
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_util_Set(/** E_1 */ e1) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2, /** E_1 */ e3) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2, e3));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2, /** E_1 */ e3, /** E_1 */ e4) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2, e3, e4));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2, /** E_1 */ e3, /** E_1 */ e4, /** E_1 */ e5) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2, e3, e4, e5));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2, /** E_1 */ e3, /** E_1 */ e4, /** E_1 */ e5, /** E_1 */ e6) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2, e3, e4, e5, e6));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2, /** E_1 */ e3, /** E_1 */ e4, /** E_1 */ e5, /** E_1 */ e6, /** E_1 */ e7) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2, e3, e4, e5, e6, e7));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2, /** E_1 */ e3, /** E_1 */ e4, /** E_1 */ e5, /** E_1 */ e6, /** E_1 */ e7, /** E_1 */ e8) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2, e3, e4, e5, e6, e7, e8));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2, /** E_1 */ e3, /** E_1 */ e4, /** E_1 */ e5, /** E_1 */ e6, /** E_1 */ e7, /** E_1 */ e8, /** E_1 */ e9) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2, e3, e4, e5, e6, e7, e8, e9));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_util_Set(/** E_1 */ e1, /** E_1 */ e2, /** E_1 */ e3, /** E_1 */ e4, /** E_1 */ e5, /** E_1 */ e6, /** E_1 */ e7, /** E_1 */ e8, /** E_1 */ e9, /** E_1 */ e10) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Set.of(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10));
 }
 /** @nodts @template E_1 @return {Set<E_1>} */
 static m_of__arrayOf_java_lang_Object__java_util_Set(/** Array<E_1> */ elements) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Collections.m_internalSetOf__arrayOf_java_lang_Object__boolean__java_util_Set(elements, false));
 }
 /** @template E_1 @return {Set<E_1>} */
 static of(.../** ...E_1 */ elements) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Collections.m_internalSetOf__arrayOf_java_lang_Object__boolean__java_util_Set(elements, false));
 }
 /** @template E_1 @return {Set<E_1>} */
 static copyOf(/** Collection<?> */ coll) {
  Set.$clinit();
  return /**@type {Set<E_1>}*/ (Collections.m_internalSetOf__arrayOf_java_lang_Object__boolean__java_util_Set(/**@type {Array<E_1>}*/ (coll.m_toArray__arrayOf_java_lang_Object()), true));
 }
 /** @abstract @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {}
 /** @nodts @template E @return {Spliterator<E>} */
 static m_spliterator__$default__java_util_Set__java_util_Spliterator(/** !Set<E> */ $thisArg) {
  Set.$clinit();
  return /**@type {Spliterator<E>}*/ (Spliterators.m_spliterator__java_util_Collection__int__java_util_Spliterator($thisArg, Spliterator.f_DISTINCT__java_util_Spliterator));
 }
 /** @nodts */
 static $clinit() {
  Set.$clinit = () =>{};
  Set.$loadModules();
  Collection.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Collection.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Set = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Set;
 }
 
 /** @nodts */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
 }
}
Set.$markImplementor(/**@type {Function}*/ (Set));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Set), 'java.util.Set');

exports = Set;

//# sourceMappingURL=Set.js.map
