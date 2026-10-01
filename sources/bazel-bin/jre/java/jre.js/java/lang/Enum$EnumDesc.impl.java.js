goog.module('java.lang.Enum.EnumDesc$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');

/**
 * @final
 * @template E
 */
class EnumDesc extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template E @return {!EnumDesc<E>} */
 static $create__() {
  EnumDesc.$clinit();
  let $instance = new EnumDesc();
  $instance.$ctor__java_lang_Enum_EnumDesc__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Enum_EnumDesc__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @template E_1 @return {EnumDesc<E_1>} */
 static m_of__arrayOf_java_lang_Object__java_lang_Enum_EnumDesc(/** Array<*> */ args) {
  EnumDesc.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(UnsupportedOperationException.$create__());
 }
 /** @nodts */
 static $clinit() {
  EnumDesc.$clinit = () =>{};
  EnumDesc.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EnumDesc;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
 }
}
$Util.$setClassMetadata(EnumDesc, 'java.lang.Enum$EnumDesc');

exports = EnumDesc;

//# sourceMappingURL=Enum$EnumDesc.js.map
