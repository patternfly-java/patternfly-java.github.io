goog.module('java.util.Enumeration$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $1 = goog.forwardDeclare('java.util.Enumeration.$1$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');

/**
 * @interface
 * @template E
 */
class Enumeration {
 /** @abstract @nodts @return {boolean} */
 m_hasMoreElements__boolean() {}
 /** @abstract @nodts @return {E} */
 m_nextElement__java_lang_Object() {}
 /** @abstract @nodts @return {Iterator<E>} */
 m_asIterator__java_util_Iterator() {}
 /** @nodts @template E @return {Iterator<E>} */
 static m_asIterator__$default__java_util_Enumeration__java_util_Iterator(/** !Enumeration<E> */ $thisArg) {
  Enumeration.$clinit();
  return /**@type {!$1<E>}*/ ($1.$create__java_util_Enumeration($thisArg));
 }
 /** @nodts */
 static $clinit() {
  Enumeration.$clinit = () =>{};
  Enumeration.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Enumeration = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Enumeration;
 }
 
 /** @nodts */
 static $loadModules() {
  $1 = goog.module.get('java.util.Enumeration.$1$impl');
 }
}
Enumeration.$markImplementor(/**@type {Function}*/ (Enumeration));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Enumeration), 'java.util.Enumeration');

exports = Enumeration;

//# sourceMappingURL=Enumeration.js.map
