goog.module('java.lang.Throwable$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let PrintStream = goog.forwardDeclare('java.io.PrintStream$impl');
let PrintWriter = goog.forwardDeclare('java.io.PrintWriter$impl');
let JsException = goog.forwardDeclare('java.lang.JsException$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let StackTraceElement = goog.forwardDeclare('java.lang.StackTraceElement$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let ThrowableUtils = goog.forwardDeclare('javaemul.internal.ThrowableUtils$impl');
let NativeError_$Overlay = goog.forwardDeclare('javaemul.internal.ThrowableUtils.NativeError.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Serializable}
 */
class Throwable extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_detailMessage__java_lang_Throwable_;
  /**@type {Throwable} @nodts*/
  this.f_cause__java_lang_Throwable_;
  /**@type {ArrayList<Throwable>} @nodts*/
  this.f_suppressedExceptions__java_lang_Throwable_;
  /**@type {Array<StackTraceElement>} @nodts*/
  this.f_stackTrace__java_lang_Throwable_;
  /**@type {boolean} @nodts*/
  this.f_disableSuppression__java_lang_Throwable_ = false;
  /**@type {boolean} @nodts*/
  this.f_disableStackTrace__java_lang_Throwable_ = false;
  /**@type {*}*/
  this.backingJsObject;
 }
 //Factory method corresponding to constructor 'Throwable()'.
 /** @nodts @return {!Throwable} */
 static $create__() {
  Throwable.$clinit();
  let $instance = new Throwable();
  $instance.$ctor__java_lang_Throwable__void();
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Throwable()'.
 /** @nodts */
 $ctor__java_lang_Throwable__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_lang_Throwable();
  this.m_fillInStackTrace__java_lang_Throwable();
 }
 //Factory method corresponding to constructor 'Throwable(String)'.
 /** @nodts @return {!Throwable} */
 static $create__java_lang_String(/** ?string */ message) {
  Throwable.$clinit();
  let $instance = new Throwable();
  $instance.$ctor__java_lang_Throwable__java_lang_String__void(message);
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Throwable(String)'.
 /** @nodts */
 $ctor__java_lang_Throwable__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_lang_Throwable();
  this.f_detailMessage__java_lang_Throwable_ = message;
  this.m_fillInStackTrace__java_lang_Throwable();
 }
 //Factory method corresponding to constructor 'Throwable(String, Throwable)'.
 /** @nodts @return {!Throwable} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  Throwable.$clinit();
  let $instance = new Throwable();
  $instance.$ctor__java_lang_Throwable__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Throwable(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_Throwable__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_lang_Throwable();
  this.f_cause__java_lang_Throwable_ = cause;
  this.f_detailMessage__java_lang_Throwable_ = message;
  this.m_fillInStackTrace__java_lang_Throwable();
 }
 //Factory method corresponding to constructor 'Throwable(Throwable)'.
 /** @nodts @return {!Throwable} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  Throwable.$clinit();
  let $instance = new Throwable();
  $instance.$ctor__java_lang_Throwable__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Throwable(Throwable)'.
 /** @nodts */
 $ctor__java_lang_Throwable__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_lang_Throwable();
  this.f_cause__java_lang_Throwable_ = cause;
  if (!$Equality.$same(cause, null)) {
   this.f_detailMessage__java_lang_Throwable_ = cause.toString();
  }
  this.m_fillInStackTrace__java_lang_Throwable();
 }
 //Factory method corresponding to constructor 'Throwable(String, Throwable, boolean, boolean)'.
 /** @nodts @return {!Throwable} */
 static $create__java_lang_String__java_lang_Throwable__boolean__boolean(/** ?string */ message, /** Throwable */ cause, /** boolean */ enableSuppression, /** boolean */ writableStackTrace) {
  Throwable.$clinit();
  let $instance = new Throwable();
  $instance.$ctor__java_lang_Throwable__java_lang_String__java_lang_Throwable__boolean__boolean__void(message, cause, enableSuppression, writableStackTrace);
  $instance.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Throwable(String, Throwable, boolean, boolean)'.
 /** @nodts */
 $ctor__java_lang_Throwable__java_lang_String__java_lang_Throwable__boolean__boolean__void(/** ?string */ message, /** Throwable */ cause, /** boolean */ enableSuppression, /** boolean */ writableStackTrace) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_lang_Throwable();
  this.f_cause__java_lang_Throwable_ = cause;
  this.f_detailMessage__java_lang_Throwable_ = message;
  this.f_disableStackTrace__java_lang_Throwable_ = !writableStackTrace;
  this.f_disableSuppression__java_lang_Throwable_ = !enableSuppression;
  if (writableStackTrace) {
   this.m_fillInStackTrace__java_lang_Throwable();
  }
 }
 /** @nodts */
 m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(/** * */ error) {
  this.backingJsObject = error;
  ThrowableUtils.setJavaThrowable(error, this);
 }
 /** @nodts @return {*} */
 m_getBackingJsObject__javaemul_internal_ThrowableUtils_JsObject() {
  return this.backingJsObject;
 }
 /** @final @nodts */
 m_addSuppressed__java_lang_Throwable__void(/** Throwable */ exception) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object__void(exception, 'Cannot suppress a null exception.');
  InternalPreconditions.m_checkCriticalArgument__boolean__java_lang_Object__void(!$Equality.$same(exception, this), 'Exception can not suppress itself.');
  if (this.f_disableSuppression__java_lang_Throwable_) {
   return;
  }
  if ($Equality.$same(this.f_suppressedExceptions__java_lang_Throwable_, null)) {
   this.f_suppressedExceptions__java_lang_Throwable_ = (/**@type {!ArrayList<Throwable>}*/ (ArrayList.$create__()));
  }
  this.f_suppressedExceptions__java_lang_Throwable_.add(exception);
 }
 /** @nodts @return {Throwable} */
 m_fillInStackTrace__java_lang_Throwable() {
  if (!this.f_disableStackTrace__java_lang_Throwable_) {
   if (ThrowableUtils.m_isError__javaemul_internal_ThrowableUtils_JsObject__boolean(this.backingJsObject)) {
    if (Error.captureStackTrace) {
     Error.captureStackTrace(/**@type {Error}*/ ($Casts.$to(this.backingJsObject, NativeError_$Overlay)));
    } else {
     (/**@type {Error}*/ ($Casts.$to(this.backingJsObject, NativeError_$Overlay))).stack = new Error().stack;
    }
   }
   this.f_stackTrace__java_lang_Throwable_ = null;
  }
  return this;
 }
 /** @return {Throwable} */
 getCause() {
  return this.f_cause__java_lang_Throwable_;
 }
 /** @nodts @return {?string} */
 m_getLocalizedMessage__java_lang_String() {
  return this.m_getMessage__java_lang_String();
 }
 /** @nodts @return {?string} */
 m_getMessage__java_lang_String() {
  return this.f_detailMessage__java_lang_Throwable_;
 }
 /** @nodts @return {Array<StackTraceElement>} */
 m_getStackTrace__arrayOf_java_lang_StackTraceElement() {
  if ($Equality.$same(this.f_stackTrace__java_lang_Throwable_, null)) {
   this.f_stackTrace__java_lang_Throwable_ = this.m_constructJavaStackTrace__arrayOf_java_lang_StackTraceElement_$p_java_lang_Throwable();
  }
  return this.f_stackTrace__java_lang_Throwable_;
 }
 /** @nodts @return {Array<StackTraceElement>} */
 m_constructJavaStackTrace__arrayOf_java_lang_StackTraceElement_$p_java_lang_Throwable() {
  let e = this.backingJsObject;
  if (ThrowableUtils.m_isError__javaemul_internal_ThrowableUtils_JsObject__boolean(e)) {
   let error = /**@type {Error}*/ ($Casts.$to(e, NativeError_$Overlay));
   if (!$Equality.$same(error.stack, null)) {
    let splitStack = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(error.stack, '\n');
    let stackTraceElements = /**@type {!Array<StackTraceElement>}*/ ($Arrays.$create([splitStack.length], StackTraceElement));
    for (let i = 0; i < splitStack.length; i = i + 1 | 0) {
     $Arrays.$set(stackTraceElements, i, StackTraceElement.$create__java_lang_String__java_lang_String__java_lang_String__int('', splitStack[i], null, -1));
    }
    return stackTraceElements;
   }
  }
  return /**@type {!Array<StackTraceElement>}*/ ($Arrays.$create([0], StackTraceElement));
 }
 /** @final @return {Array<Throwable>} */
 getSuppressed() {
  return $Equality.$same(this.f_suppressedExceptions__java_lang_Throwable_, null) ? /**@type {!Array<Throwable>}*/ ($Arrays.$create([0], Throwable)) : /**@type {Array<Throwable>}*/ ($Arrays.$castTo(this.f_suppressedExceptions__java_lang_Throwable_.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/**@type {!Array<Throwable>}*/ ($Arrays.$create([0], Throwable))), Throwable, 1));
 }
 /** @nodts @return {Throwable} */
 m_initCause__java_lang_Throwable__java_lang_Throwable(/** Throwable */ cause) {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($Equality.$same(this.f_cause__java_lang_Throwable_, null), 'Can\'t overwrite cause');
  InternalPreconditions.m_checkCriticalArgument__boolean__java_lang_Object__void(!$Equality.$same(cause, this), 'Self-causation not permitted');
  this.f_cause__java_lang_Throwable_ = cause;
  return this;
 }
 /** @nodts */
 m_printStackTrace__void() {
  this.m_printStackTrace__java_io_PrintStream__void(System.f_err__java_lang_System);
 }
 /** @nodts */
 m_printStackTrace__java_io_PrintStream__void(/** PrintStream */ out) {
  this.m_printStackTraceImpl__java_lang_Throwable_Printer__java_lang_String__java_lang_String__void_$p_java_lang_Throwable((/** ?string */ arg0) =>{
   out.m_println__java_lang_String__void(arg0);
  }, '', '');
 }
 /** @nodts */
 m_printStackTrace__java_io_PrintWriter__void(/** PrintWriter */ out) {
  this.m_printStackTraceImpl__java_lang_Throwable_Printer__java_lang_String__java_lang_String__void_$p_java_lang_Throwable((/** ?string */ arg0) =>{
   out.m_println__java_lang_String__void(arg0);
  }, '', '');
 }
 /** @nodts */
 m_printStackTraceImpl__java_lang_Throwable_Printer__java_lang_String__java_lang_String__void_$p_java_lang_Throwable(/** ?function(?string):void */ out, /** ?string */ prefix, /** ?string */ ident) {
  out(j_l_String.m_valueOf__java_lang_Object__java_lang_String(ident) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(prefix) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this));
  this.m_printStackTraceItems__java_lang_Throwable_Printer__java_lang_String__void_$p_java_lang_Throwable(out, ident);
  for (let $array = this.getSuppressed(), $index = 0; $index < $array.length; $index++) {
   let t = $array[$index];
   {
    t.m_printStackTraceImpl__java_lang_Throwable_Printer__java_lang_String__java_lang_String__void_$p_java_lang_Throwable(out, 'Suppressed: ', '\t' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ident));
   }
  }
  let theCause = this.getCause();
  if (!$Equality.$same(theCause, null)) {
   theCause.m_printStackTraceImpl__java_lang_Throwable_Printer__java_lang_String__java_lang_String__void_$p_java_lang_Throwable(out, 'Caused by: ', ident);
  }
 }
 /** @nodts */
 m_printStackTraceItems__java_lang_Throwable_Printer__java_lang_String__void_$p_java_lang_Throwable(/** ?function(?string):void */ out, /** ?string */ ident) {
  for (let $array = this.m_getStackTrace__arrayOf_java_lang_StackTraceElement(), $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    out(j_l_String.m_valueOf__java_lang_Object__java_lang_String(ident) + '\tat ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(element));
   }
  }
 }
 /** @nodts */
 m_setStackTrace__arrayOf_java_lang_StackTraceElement__void(/** Array<StackTraceElement> */ stackTrace) {
  let length = stackTrace.length;
  let copy = /**@type {!Array<StackTraceElement>}*/ ($Arrays.$create([length], StackTraceElement));
  for (let i = 0; i < length; i = i + 1 | 0) {
   $Arrays.$set(copy, i, /**@type {StackTraceElement}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(stackTrace[i]), StackTraceElement)));
  }
  this.f_stackTrace__java_lang_Throwable_ = copy;
 }
 /** @override @return {?string} */
 toString() {
  let className = this.m_getClass__java_lang_Class().m_getName__java_lang_String();
  let message = this.m_getLocalizedMessage__java_lang_String();
  return $Equality.$same(message, null) ? className : j_l_String.m_valueOf__java_lang_Object__java_lang_String(className) + ': ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(message);
 }
 // /** @return {!Throwable} */
 // native static of(/** * */ e) 
 /** @return {!Throwable} */
 static of(/** * */ e) {
  Throwable.$clinit();
  if (!$Equality.$same(e, null)) {
   let throwable = ThrowableUtils.m_getJavaThrowable__java_lang_Object__java_lang_Throwable(e);
   if (!$Equality.$same(throwable, null)) {
    return throwable;
   }
  }
  let t = ThrowableUtils.m_isTypeError__javaemul_internal_ThrowableUtils_JsObject__boolean(e) ? NullPointerException.$create__() : JsException.$create__();
  t.f_detailMessage__java_lang_Throwable_ = $Equality.$same(e, null) ? 'null' : e.toString();
  t.m_privateInitError__javaemul_internal_ThrowableUtils_JsObject__void_$pp_java_lang(e);
  return t;
 }
 /** @private @nodts */
 $init__void_$p_java_lang_Throwable() {
  this.f_stackTrace__java_lang_Throwable_ = (/**@type {!Array<StackTraceElement>}*/ ($Arrays.$create([0], StackTraceElement)));
 }
 /** @nodts */
 static $clinit() {
  Throwable.$clinit = () =>{};
  Throwable.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Throwable;
 }
 
 /** @nodts */
 static $loadModules() {
  JsException = goog.module.get('java.lang.JsException$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  StackTraceElement = goog.module.get('java.lang.StackTraceElement$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  System = goog.module.get('java.lang.System$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  ThrowableUtils = goog.module.get('javaemul.internal.ThrowableUtils$impl');
  NativeError_$Overlay = goog.module.get('javaemul.internal.ThrowableUtils.NativeError.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Serializable.$markImplementor(Throwable);
$Util.$setClassMetadata(Throwable, 'java.lang.Throwable');

exports = Throwable;

//# sourceMappingURL=Throwable.js.map
