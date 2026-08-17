goog.module('java.lang.System$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let PrintStream = goog.forwardDeclare('java.io.PrintStream$impl');
let AssertionError = goog.forwardDeclare('java.lang.AssertionError$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let HashCodes = goog.forwardDeclare('javaemul.internal.HashCodes$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @final
 */
class System extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!System} */
 static $create__() {
  System.$clinit();
  let $instance = new System();
  $instance.$ctor__java_lang_System__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_System__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(/** * */ src, /** number */ srcOfs, /** * */ dest, /** number */ destOfs, /** number */ len) {
  System.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object__void(src, 'src');
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object__void(dest, 'dest');
  if (InternalPreconditions.m_isTypeChecked__boolean()) {
   let srcType = $Objects.m_getClass__java_lang_Object__java_lang_Class(src);
   let destType = $Objects.m_getClass__java_lang_Object__java_lang_Class(dest);
   InternalPreconditions.m_checkArrayType__boolean__java_lang_Object__void(srcType.m_isArray__boolean(), 'srcType is not an array');
   InternalPreconditions.m_checkArrayType__boolean__java_lang_Object__void(destType.m_isArray__boolean(), 'destType is not an array');
   let isObjectArray = $Arrays.$instanceIsOfType(src, j_l_Object, 1);
   let /** boolean */ arrayTypeMatch;
   if (isObjectArray) {
    arrayTypeMatch = $Arrays.$instanceIsOfType(dest, j_l_Object, 1);
   } else {
    arrayTypeMatch = $Equality.$same(srcType.m_getComponentType__java_lang_Class(), destType.m_getComponentType__java_lang_Class());
   }
   InternalPreconditions.m_checkArrayType__boolean__java_lang_Object__void(arrayTypeMatch, 'Array types don\'t match');
  }
  ArrayHelper.m_copy__java_lang_Object__int__java_lang_Object__int__int__void(src, srcOfs, dest, destOfs, len);
 }
 /** @nodts @return {!$Long} */
 static m_currentTimeMillis__long() {
  System.$clinit();
  return Primitives.m_narrowDoubleToLong__int__long(Date.now());
 }
 /** @nodts @return {!$Long} */
 static m_nanoTime__long() {
  System.$clinit();
  return Primitives.m_narrowDoubleToLong__int__long(System.m_nanoTimeAsDouble__double());
 }
 /** @nodts @return {number} */
 static m_nanoTimeAsDouble__double() {
  System.$clinit();
  return performance.now() * System.f_MILLIS_TO_NANOS__java_lang_System_;
 }
 /** @nodts */
 static m_gc__void() {
  System.$clinit();
 }
 /** @nodts */
 static m_setProperty__java_lang_String__java_lang_String__void(/** ?string */ key, /** ?string */ value) {
  System.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(AssertionError.$create__());
 }
 /** @nodts */
 static m_setProperties__java_lang_Object__void(/** * */ properties) {
  System.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(AssertionError.$create__());
 }
 /** @nodts */
 static m_clearProperty__java_lang_String__void(/** ?string */ key) {
  System.$clinit();
  throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(AssertionError.$create__());
 }
 /** @nodts @return {number} */
 static m_identityHashCode__java_lang_Object__int(/** * */ o) {
  System.$clinit();
  return HashCodes.getIdentityHashCode(o);
 }
 /** @nodts */
 static m_setErr__java_io_PrintStream__void(/** PrintStream */ err) {
  System.$clinit();
  System.$static_err__java_lang_System = err;
 }
 /** @nodts */
 static m_setOut__java_io_PrintStream__void(/** PrintStream */ out) {
  System.$clinit();
  System.$static_out__java_lang_System = out;
 }
 /** @nodts @return {PrintStream} */
 static get f_err__java_lang_System() {
  return (System.$clinit(), System.$static_err__java_lang_System);
 }
 /** @nodts */
 static set f_err__java_lang_System(/** PrintStream */ value) {
  (System.$clinit(), System.$static_err__java_lang_System = value);
 }
 /** @nodts @return {PrintStream} */
 static get f_out__java_lang_System() {
  return (System.$clinit(), System.$static_out__java_lang_System);
 }
 /** @nodts */
 static set f_out__java_lang_System(/** PrintStream */ value) {
  (System.$clinit(), System.$static_out__java_lang_System = value);
 }
 /** @nodts */
 static $clinit() {
  System.$clinit = () =>{};
  System.$loadModules();
  j_l_Object.$clinit();
  System.$static_err__java_lang_System = PrintStream.$create__java_io_OutputStream(null);
  System.$static_out__java_lang_System = PrintStream.$create__java_io_OutputStream(null);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof System;
 }
 
 /** @nodts */
 static $loadModules() {
  PrintStream = goog.module.get('java.io.PrintStream$impl');
  AssertionError = goog.module.get('java.lang.AssertionError$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  HashCodes = goog.module.get('javaemul.internal.HashCodes$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {number} @nodts*/
System.f_MILLIS_TO_NANOS__java_lang_System_ = 1000000;
/**@private {PrintStream} @nodts*/
System.$static_err__java_lang_System;
/**@private {PrintStream} @nodts*/
System.$static_out__java_lang_System;
$Util.$setClassMetadata(System, 'java.lang.System');

exports = System;

//# sourceMappingURL=System.js.map
