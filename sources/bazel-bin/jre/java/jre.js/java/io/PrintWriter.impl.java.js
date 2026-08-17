goog.module('java.io.PrintWriter$impl');

const Writer = goog.require('java.io.Writer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOException = goog.forwardDeclare('java.io.IOException$impl');
let OutputStream = goog.forwardDeclare('java.io.OutputStream$impl');
let OutputStreamWriter = goog.forwardDeclare('java.io.OutputStreamWriter$impl');
let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $char = goog.forwardDeclare('javaemul.internal.primitives.$char$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');

class PrintWriter extends Writer {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Writer} @nodts*/
  this.f_out__java_io_PrintWriter;
  /**@type {boolean} @nodts*/
  this.f_ioError__java_io_PrintWriter_ = false;
  /**@type {boolean} @nodts*/
  this.f_autoFlush__java_io_PrintWriter_ = false;
 }
 //Factory method corresponding to constructor 'PrintWriter(OutputStream)'.
 /** @nodts @return {!PrintWriter} */
 static $create__java_io_OutputStream(/** OutputStream */ out) {
  PrintWriter.$clinit();
  let $instance = new PrintWriter();
  $instance.$ctor__java_io_PrintWriter__java_io_OutputStream__void(out);
  return $instance;
 }
 //Initialization from constructor 'PrintWriter(OutputStream)'.
 /** @nodts */
 $ctor__java_io_PrintWriter__java_io_OutputStream__void(/** OutputStream */ out) {
  this.$ctor__java_io_PrintWriter__java_io_Writer__boolean__void(OutputStreamWriter.$create__java_io_OutputStream(out), false);
 }
 //Factory method corresponding to constructor 'PrintWriter(OutputStream, boolean)'.
 /** @nodts @return {!PrintWriter} */
 static $create__java_io_OutputStream__boolean(/** OutputStream */ out, /** boolean */ autoFlush) {
  PrintWriter.$clinit();
  let $instance = new PrintWriter();
  $instance.$ctor__java_io_PrintWriter__java_io_OutputStream__boolean__void(out, autoFlush);
  return $instance;
 }
 //Initialization from constructor 'PrintWriter(OutputStream, boolean)'.
 /** @nodts */
 $ctor__java_io_PrintWriter__java_io_OutputStream__boolean__void(/** OutputStream */ out, /** boolean */ autoFlush) {
  this.$ctor__java_io_PrintWriter__java_io_Writer__boolean__void(OutputStreamWriter.$create__java_io_OutputStream(out), autoFlush);
 }
 //Factory method corresponding to constructor 'PrintWriter(Writer)'.
 /** @nodts @return {!PrintWriter} */
 static $create__java_io_Writer(/** Writer */ wr) {
  PrintWriter.$clinit();
  let $instance = new PrintWriter();
  $instance.$ctor__java_io_PrintWriter__java_io_Writer__void(wr);
  return $instance;
 }
 //Initialization from constructor 'PrintWriter(Writer)'.
 /** @nodts */
 $ctor__java_io_PrintWriter__java_io_Writer__void(/** Writer */ wr) {
  this.$ctor__java_io_PrintWriter__java_io_Writer__boolean__void(wr, false);
 }
 //Factory method corresponding to constructor 'PrintWriter(Writer, boolean)'.
 /** @nodts @return {!PrintWriter} */
 static $create__java_io_Writer__boolean(/** Writer */ wr, /** boolean */ autoFlush) {
  PrintWriter.$clinit();
  let $instance = new PrintWriter();
  $instance.$ctor__java_io_PrintWriter__java_io_Writer__boolean__void(wr, autoFlush);
  return $instance;
 }
 //Initialization from constructor 'PrintWriter(Writer, boolean)'.
 /** @nodts */
 $ctor__java_io_PrintWriter__java_io_Writer__boolean__void(/** Writer */ wr, /** boolean */ autoFlush) {
  this.$ctor__java_io_Writer__void();
  this.f_autoFlush__java_io_PrintWriter_ = autoFlush;
  this.f_out__java_io_PrintWriter = wr;
 }
 /** @nodts @return {boolean} */
 m_checkError__boolean() {
  let delegate = this.f_out__java_io_PrintWriter;
  if ($Equality.$same(delegate, null)) {
   return this.f_ioError__java_io_PrintWriter_;
  }
  this.m_flush__void();
  if (PrintWriter.$isInstance(delegate)) {
   return (/**@type {PrintWriter}*/ ($Casts.$to(delegate, PrintWriter))).m_checkError__boolean();
  }
  return this.f_ioError__java_io_PrintWriter_;
 }
 /** @nodts */
 m_clearError__void() {
  this.f_ioError__java_io_PrintWriter_ = false;
 }
 /** @override @nodts */
 m_close__void() {
  if (!$Equality.$same(this.f_out__java_io_PrintWriter, null)) {
   try {
    this.f_out__java_io_PrintWriter.m_close__void();
   } catch (__$jsexc) {
    let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
    if (IOException.$isInstance(__$exc)) {
     let e = /**@type {IOException}*/ (__$exc);
     this.m_setError__void();
    } else {
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
    }
   }
   this.f_out__java_io_PrintWriter = null;
  }
 }
 /** @override @nodts */
 m_flush__void() {
  if (!$Equality.$same(this.f_out__java_io_PrintWriter, null)) {
   try {
    this.f_out__java_io_PrintWriter.m_flush__void();
   } catch (__$jsexc) {
    let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
    if (IOException.$isInstance(__$exc)) {
     let e = /**@type {IOException}*/ (__$exc);
     this.m_setError__void();
    } else {
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
    }
   }
  } else {
   this.m_setError__void();
  }
 }
 /** @nodts */
 m_print__arrayOf_char__void(/** Array<number> */ charArray) {
  this.m_print__java_lang_String__void(j_l_String.$create__arrayOf_char__int__int(charArray, 0, charArray.length));
 }
 /** @nodts */
 m_print__char__void(/** number */ ch) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__char__java_lang_String(ch));
 }
 /** @nodts */
 m_print__double__void(/** number */ dnum) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__double__java_lang_String(dnum));
 }
 /** @nodts */
 m_print__float__void(/** number */ fnum) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__float__java_lang_String(fnum));
 }
 /** @nodts */
 m_print__int__void(/** number */ inum) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__int__java_lang_String(inum));
 }
 /** @nodts */
 m_print__long__void(/** !$Long */ lnum) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__long__java_lang_String(lnum));
 }
 /** @nodts */
 m_print__java_lang_Object__void(/** * */ obj) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__java_lang_Object__java_lang_String(obj));
 }
 /** @nodts */
 m_print__java_lang_String__void(/** ?string */ str) {
  this.m_write__java_lang_String__void(!$Equality.$same(str, null) ? str : j_l_String.m_valueOf__java_lang_Object__java_lang_String(null));
 }
 /** @nodts */
 m_print__boolean__void(/** boolean */ bool) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__boolean__java_lang_String(bool));
 }
 /** @nodts */
 m_println__void() {
  this.m_print__char__void(10 /* '\n' */);
  if (this.f_autoFlush__java_io_PrintWriter_) {
   this.m_flush__void();
  }
 }
 /** @nodts */
 m_println__arrayOf_char__void(/** Array<number> */ chars) {
  this.m_println__java_lang_String__void(j_l_String.$create__arrayOf_char__int__int(chars, 0, chars.length));
 }
 /** @nodts */
 m_println__char__void(/** number */ c) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__char__java_lang_String(c));
 }
 /** @nodts */
 m_println__double__void(/** number */ d) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__double__java_lang_String(d));
 }
 /** @nodts */
 m_println__float__void(/** number */ f) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__float__java_lang_String(f));
 }
 /** @nodts */
 m_println__int__void(/** number */ i) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__int__java_lang_String(i));
 }
 /** @nodts */
 m_println__long__void(/** !$Long */ l) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__long__java_lang_String(l));
 }
 /** @nodts */
 m_println__java_lang_Object__void(/** * */ obj) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__java_lang_Object__java_lang_String(obj));
 }
 /** @nodts */
 m_println__java_lang_String__void(/** ?string */ str) {
  this.m_print__java_lang_String__void(str);
  this.m_println__void();
 }
 /** @nodts */
 m_println__boolean__void(/** boolean */ b) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__boolean__java_lang_String(b));
 }
 /** @nodts */
 m_setError__void() {
  this.f_ioError__java_io_PrintWriter_ = true;
 }
 /** @override @nodts */
 m_write__arrayOf_char__void(/** Array<number> */ buf) {
  this.m_write__arrayOf_char__int__int__void(buf, 0, buf.length);
 }
 /** @override @nodts */
 m_write__arrayOf_char__int__int__void(/** Array<number> */ buf, /** number */ offset, /** number */ count) {
  this.m_doWrite__arrayOf_char__int__int__void_$p_java_io_PrintWriter(buf, offset, count);
 }
 /** @override @nodts */
 m_write__int__void(/** number */ oneChar) {
  this.m_doWrite__arrayOf_char__int__int__void_$p_java_io_PrintWriter(/**@type {!Array<number>}*/ ($Arrays.$stampType([Primitives.m_narrowIntToChar__int__int(oneChar)], $char)), 0, 1);
 }
 /** @final @nodts */
 m_doWrite__arrayOf_char__int__int__void_$p_java_io_PrintWriter(/** Array<number> */ buf, /** number */ offset, /** number */ count) {
  if (!$Equality.$same(this.f_out__java_io_PrintWriter, null)) {
   try {
    this.f_out__java_io_PrintWriter.m_write__arrayOf_char__int__int__void(buf, offset, count);
   } catch (__$jsexc) {
    let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
    if (IOException.$isInstance(__$exc)) {
     let e = /**@type {IOException}*/ (__$exc);
     this.m_setError__void();
    } else {
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
    }
   }
  } else {
   this.m_setError__void();
  }
 }
 /** @override @nodts */
 m_write__java_lang_String__void(/** ?string */ str) {
  this.m_write__arrayOf_char__void(j_l_String.m_toCharArray__java_lang_String__arrayOf_char(str));
 }
 /** @override @nodts */
 m_write__java_lang_String__int__int__void(/** ?string */ str, /** number */ offset, /** number */ count) {
  this.m_write__arrayOf_char__void(j_l_String.m_toCharArray__java_lang_String__arrayOf_char(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(str, offset, offset + count | 0)));
 }
 /** @nodts @return {PrintWriter} */
 m_append__char__java_io_PrintWriter(/** number */ c) {
  this.m_write__int__void(c);
  return this;
 }
 /** @nodts @return {PrintWriter} */
 m_append__java_lang_CharSequence__java_io_PrintWriter(/** (CharSequence|string) */ csq) {
  if ($Equality.$same(csq, null)) {
   csq = 'null';
  }
  this.m_append__java_lang_CharSequence__int__int__java_io_PrintWriter(csq, 0, $CharSequences.m_length__java_lang_CharSequence__int(csq));
  return this;
 }
 /** @nodts @return {PrintWriter} */
 m_append__java_lang_CharSequence__int__int__java_io_PrintWriter(/** (CharSequence|string) */ csq, /** number */ start, /** number */ end) {
  if ($Equality.$same(csq, null)) {
   csq = 'null';
  }
  let output = $CharSequences.m_toString__java_lang_CharSequence__java_lang_String($CharSequences.m_subSequence__java_lang_CharSequence__int__int__java_lang_CharSequence(csq, start, end));
  this.m_write__java_lang_String__int__int__void(output, 0, j_l_String.m_length__java_lang_String__int(output));
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PrintWriter} */
 m_append__char__java_io_Writer(/** number */ arg0) {
  return this.m_append__char__java_io_PrintWriter(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PrintWriter} */
 m_append__java_lang_CharSequence__java_io_Writer(/** (CharSequence|string) */ arg0) {
  return this.m_append__java_lang_CharSequence__java_io_PrintWriter(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PrintWriter} */
 m_append__java_lang_CharSequence__int__int__java_io_Writer(/** (CharSequence|string) */ arg0, /** number */ arg1, /** number */ arg2) {
  return this.m_append__java_lang_CharSequence__int__int__java_io_PrintWriter(arg0, arg1, arg2);
 }
 /** @nodts */
 static $clinit() {
  PrintWriter.$clinit = () =>{};
  PrintWriter.$loadModules();
  Writer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PrintWriter;
 }
 
 /** @nodts */
 static $loadModules() {
  IOException = goog.module.get('java.io.IOException$impl');
  OutputStreamWriter = goog.module.get('java.io.OutputStreamWriter$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $char = goog.module.get('javaemul.internal.primitives.$char$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
 }
}
$Util.$setClassMetadata(PrintWriter, 'java.io.PrintWriter');

exports = PrintWriter;

//# sourceMappingURL=PrintWriter.js.map
