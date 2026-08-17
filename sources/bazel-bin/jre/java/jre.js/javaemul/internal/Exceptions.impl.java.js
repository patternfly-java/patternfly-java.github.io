goog.module('javaemul.internal.Exceptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AutoCloseable = goog.forwardDeclare('java.lang.AutoCloseable$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class Exceptions extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Exceptions} */
 static $create__() {
  Exceptions.$clinit();
  let $instance = new Exceptions();
  $instance.$ctor__javaemul_internal_Exceptions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Exceptions__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Throwable} */
 static m_safeClose__java_lang_AutoCloseable__java_lang_Throwable__java_lang_Throwable(/** AutoCloseable */ resource, /** Throwable */ currentException) {
  Exceptions.$clinit();
  if ($Equality.$same(resource, null)) {
   return currentException;
  }
  try {
   resource.m_close__void();
  } catch (__$jsexc) {
   let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
   {
    let t = /**@type {Throwable}*/ (__$exc);
    if ($Equality.$same(currentException, null)) {
     return t;
    }
    currentException.m_addSuppressed__java_lang_Throwable__void(t);
   }
  }
  return currentException;
 }
 /** @nodts @return {Throwable} */
 static m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(/** * */ e) {
  Exceptions.$clinit();
  return Throwable.of(e);
 }
 /** @nodts @return {*} */
 static m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(/** Throwable */ t) {
  Exceptions.$clinit();
  return t.m_getBackingJsObject__javaemul_internal_ThrowableUtils_JsObject();
 }
 /** @nodts */
 static $clinit() {
  Exceptions.$clinit = () =>{};
  Exceptions.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Exceptions;
 }
 
 /** @nodts */
 static $loadModules() {
  Throwable = goog.module.get('java.lang.Throwable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(Exceptions, 'javaemul.internal.Exceptions');

exports = Exceptions;

//# sourceMappingURL=Exceptions.js.map
