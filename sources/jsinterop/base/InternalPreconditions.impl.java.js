goog.module('jsinterop.base.InternalPreconditions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AssertionError = goog.forwardDeclare('java.lang.AssertionError$impl');
let ClassCastException = goog.forwardDeclare('java.lang.ClassCastException$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @final
 */
class InternalPreconditions extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 static m_checkType__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_TYPE_CHECKED__jsinterop_base_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalType__boolean__void(expression);
  } else if (InternalPreconditions.f_IS_ASSERTED__jsinterop_base_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalType__boolean__void(expression);
   } catch (__$jsexc) {
    let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(AssertionError.$create__java_lang_Object(e));
    } else {
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalType__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(ClassCastException.$create__());
  }
 }
 /** @nodts @return {!InternalPreconditions} */
 static $create__() {
  let $instance = new InternalPreconditions();
  $instance.$ctor__jsinterop_base_InternalPreconditions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__jsinterop_base_InternalPreconditions__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  InternalPreconditions.$clinit = () =>{};
  InternalPreconditions.$loadModules();
  j_l_Object.$clinit();
  InternalPreconditions.f_IS_TYPE_CHECKED__jsinterop_base_InternalPreconditions_ = $Equality.$same($Util.$getDefine('jsinterop.checks'), 'ENABLED');
  InternalPreconditions.f_IS_ASSERTED__jsinterop_base_InternalPreconditions_ = $Equality.$same($Util.$getDefine('jre.checkedMode'), 'ENABLED');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalPreconditions;
 }
 
 /** @nodts */
 static $loadModules() {
  AssertionError = goog.module.get('java.lang.AssertionError$impl');
  ClassCastException = goog.module.get('java.lang.ClassCastException$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
/**@type {boolean} @nodts*/
InternalPreconditions.f_IS_TYPE_CHECKED__jsinterop_base_InternalPreconditions_ = false;
/**@type {boolean} @nodts*/
InternalPreconditions.f_IS_ASSERTED__jsinterop_base_InternalPreconditions_ = false;
$Util.$setClassMetadata(InternalPreconditions, 'jsinterop.base.InternalPreconditions');

/* NATIVE.JS EPILOG */

const jsinterop_base_InternalPreconditions = InternalPreconditions;

// Ensure that jsinterop @defines are included.
/** @suppress {extraRequire} */
const jsinterop = goog.require('jsinterop');


exports = InternalPreconditions;

//# sourceMappingURL=InternalPreconditions.js.map
