goog.module('java.io.OutputStreamWriter$impl');

const Writer = goog.require('java.io.Writer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let OutputStream = goog.forwardDeclare('java.io.OutputStream$impl');
let Character = goog.forwardDeclare('java.lang.Character$impl');
let Charset = goog.forwardDeclare('java.nio.charset.Charset$impl');
let EmulatedCharset = goog.forwardDeclare('javaemul.internal.EmulatedCharset$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $char = goog.forwardDeclare('javaemul.internal.primitives.$char$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class OutputStreamWriter extends Writer {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OutputStream} @nodts*/
  this.f_out__java_io_OutputStreamWriter_;
  /**@type {Charset} @nodts*/
  this.f_charset__java_io_OutputStreamWriter_;
  /**@type {Array<number>} @nodts*/
  this.f_surrogateBuffer__java_io_OutputStreamWriter_;
 }
 //Factory method corresponding to constructor 'OutputStreamWriter(OutputStream)'.
 /** @nodts @return {!OutputStreamWriter} */
 static $create__java_io_OutputStream(/** OutputStream */ out) {
  OutputStreamWriter.$clinit();
  let $instance = new OutputStreamWriter();
  $instance.$ctor__java_io_OutputStreamWriter__java_io_OutputStream__void(out);
  return $instance;
 }
 //Initialization from constructor 'OutputStreamWriter(OutputStream)'.
 /** @nodts */
 $ctor__java_io_OutputStreamWriter__java_io_OutputStream__void(/** OutputStream */ out) {
  this.$ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_nio_charset_Charset__void(out, Charset.m_defaultCharset__java_nio_charset_Charset());
 }
 //Factory method corresponding to constructor 'OutputStreamWriter(OutputStream, String)'.
 /** @nodts @return {!OutputStreamWriter} */
 static $create__java_io_OutputStream__java_lang_String(/** OutputStream */ out, /** ?string */ charsetName) {
  OutputStreamWriter.$clinit();
  let $instance = new OutputStreamWriter();
  $instance.$ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_lang_String__void(out, charsetName);
  return $instance;
 }
 //Initialization from constructor 'OutputStreamWriter(OutputStream, String)'.
 /** @nodts */
 $ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_lang_String__void(/** OutputStream */ out, /** ?string */ charsetName) {
  this.$ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_nio_charset_Charset__void(out, Charset.m_forName__java_lang_String__java_nio_charset_Charset(charsetName));
 }
 //Factory method corresponding to constructor 'OutputStreamWriter(OutputStream, Charset)'.
 /** @nodts @return {!OutputStreamWriter} */
 static $create__java_io_OutputStream__java_nio_charset_Charset(/** OutputStream */ out, /** Charset */ charset) {
  OutputStreamWriter.$clinit();
  let $instance = new OutputStreamWriter();
  $instance.$ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_nio_charset_Charset__void(out, charset);
  return $instance;
 }
 //Initialization from constructor 'OutputStreamWriter(OutputStream, Charset)'.
 /** @nodts */
 $ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_nio_charset_Charset__void(/** OutputStream */ out, /** Charset */ charset) {
  this.$ctor__java_io_Writer__void();
  this.$init__void_$p_java_io_OutputStreamWriter();
  this.f_out__java_io_OutputStreamWriter_ = (/**@type {OutputStream}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(out), OutputStream)));
  this.f_charset__java_io_OutputStreamWriter_ = (/**@type {Charset}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(charset), Charset)));
 }
 /** @override @nodts */
 m_close__void() {
  if (this.f_surrogateBuffer__java_io_OutputStreamWriter_[0] != 0) {
   this.f_out__java_io_OutputStreamWriter_.m_write__int__void(63 /* '?' */);
  }
  this.f_out__java_io_OutputStreamWriter_.m_close__void();
 }
 /** @override @nodts */
 m_flush__void() {
  this.f_out__java_io_OutputStreamWriter_.m_flush__void();
 }
 /** @nodts @return {?string} */
 m_getEncoding__java_lang_String() {
  return this.f_charset__java_io_OutputStreamWriter_.m_name__java_lang_String();
 }
 /** @override @nodts */
 m_write__arrayOf_char__int__int__void(/** Array<number> */ buffer, /** number */ offset, /** number */ count) {
  IOUtils.m_checkOffsetAndCount__arrayOf_char__int__int__void(buffer, offset, count);
  if (count == 0) {
   return;
  }
  if (this.f_surrogateBuffer__java_io_OutputStreamWriter_[0] != 0) {
   let /** number */ $value;
   $Arrays.$set(this.f_surrogateBuffer__java_io_OutputStreamWriter_, 1, buffer[($value = offset, offset = offset + 1 | 0, $value)]);
   count = count - 1 | 0;
   this.f_out__java_io_OutputStreamWriter_.m_write__arrayOf_byte__void((/**@type {EmulatedCharset}*/ ($Casts.$to(this.f_charset__java_io_OutputStreamWriter_, EmulatedCharset))).m_getBytes__arrayOf_char__int__int__arrayOf_byte(this.f_surrogateBuffer__java_io_OutputStreamWriter_, 0, 2));
   $Arrays.$set(this.f_surrogateBuffer__java_io_OutputStreamWriter_, 0, 0);
  }
  if (count > 0 && Character.m_isHighSurrogate__char__boolean(buffer[count - 1 | 0])) {
   $Arrays.$set(this.f_surrogateBuffer__java_io_OutputStreamWriter_, 0, buffer[count = count - 1 | 0]);
  }
  let bytes = (/**@type {EmulatedCharset}*/ ($Casts.$to(this.f_charset__java_io_OutputStreamWriter_, EmulatedCharset))).m_getBytes__arrayOf_char__int__int__arrayOf_byte(buffer, offset, count);
  this.f_out__java_io_OutputStreamWriter_.m_write__arrayOf_byte__int__int__void(bytes, 0, bytes.length);
 }
 /** @private @nodts */
 $init__void_$p_java_io_OutputStreamWriter() {
  this.f_surrogateBuffer__java_io_OutputStreamWriter_ = (/**@type {!Array<number>}*/ ($Arrays.$create([2], $char)));
 }
 /** @nodts */
 static $clinit() {
  OutputStreamWriter.$clinit = () =>{};
  OutputStreamWriter.$loadModules();
  Writer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OutputStreamWriter;
 }
 
 /** @nodts */
 static $loadModules() {
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  OutputStream = goog.module.get('java.io.OutputStream$impl');
  Character = goog.module.get('java.lang.Character$impl');
  Charset = goog.module.get('java.nio.charset.Charset$impl');
  EmulatedCharset = goog.module.get('javaemul.internal.EmulatedCharset$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $char = goog.module.get('javaemul.internal.primitives.$char$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(OutputStreamWriter, 'java.io.OutputStreamWriter');

exports = OutputStreamWriter;

//# sourceMappingURL=OutputStreamWriter.js.map
