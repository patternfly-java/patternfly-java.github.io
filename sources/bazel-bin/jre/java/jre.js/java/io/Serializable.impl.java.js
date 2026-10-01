goog.module('java.io.Serializable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @interface
 */
class Serializable {
 /** @nodts @return {boolean} */
 static $isInstance(/** * */ instance) {
  Serializable.$clinit();
  if ($Equality.$same(instance, null)) {
   return false;
  }
  let type = typeof(instance);
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(type, 'boolean') || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(type, 'number') || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(type, 'string') || Long.$isInstance(instance) || instance.$implements__java_io_Serializable || Array.isArray(instance);
 }
 /** @nodts */
 static $clinit() {
  Serializable.$clinit = () =>{};
  Serializable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_io_Serializable = true;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Serializable.$markImplementor(/**@type {Function}*/ (Serializable));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Serializable), 'java.io.Serializable');

exports = Serializable;

//# sourceMappingURL=Serializable.js.map
