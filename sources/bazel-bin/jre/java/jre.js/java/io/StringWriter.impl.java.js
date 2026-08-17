goog.module('java.io.StringWriter$impl');

const Writer = goog.require('java.io.Writer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuffer = goog.forwardDeclare('java.lang.StringBuffer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');

class StringWriter extends Writer {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {StringBuffer} @nodts*/
  this.f_buf__java_io_StringWriter_;
 }
 //Factory method corresponding to constructor 'StringWriter()'.
 /** @nodts @return {!StringWriter} */
 static $create__() {
  StringWriter.$clinit();
  let $instance = new StringWriter();
  $instance.$ctor__java_io_StringWriter__void();
  return $instance;
 }
 //Initialization from constructor 'StringWriter()'.
 /** @nodts */
 $ctor__java_io_StringWriter__void() {
  this.$ctor__java_io_Writer__void();
  this.$init__void_$p_java_io_StringWriter();
 }
 //Factory method corresponding to constructor 'StringWriter(int)'.
 /** @nodts @return {!StringWriter} */
 static $create__int(/** number */ initialSize) {
  StringWriter.$clinit();
  let $instance = new StringWriter();
  $instance.$ctor__java_io_StringWriter__int__void(initialSize);
  return $instance;
 }
 //Initialization from constructor 'StringWriter(int)'.
 /** @nodts */
 $ctor__java_io_StringWriter__int__void(/** number */ initialSize) {
  this.$ctor__java_io_Writer__void();
  this.$init__void_$p_java_io_StringWriter();
  InternalPreconditions.m_checkArgument__boolean__void(initialSize >= 0);
 }
 /** @nodts @return {StringBuffer} */
 m_getBuffer__java_lang_StringBuffer() {
  return this.f_buf__java_io_StringWriter_;
 }
 /** @override @nodts */
 m_close__void() {}
 /** @override @nodts */
 m_flush__void() {}
 /** @override @return {?string} */
 toString() {
  return this.f_buf__java_io_StringWriter_.toString();
 }
 /** @override @nodts */
 m_write__arrayOf_char__int__int__void(/** Array<number> */ chars, /** number */ offset, /** number */ count) {
  IOUtils.m_checkOffsetAndCount__int__int__int__void(chars.length, offset, count);
  if (count == 0) {
   return;
  }
  this.f_buf__java_io_StringWriter_.m_append__arrayOf_char__int__int__java_lang_StringBuffer(chars, offset, count);
 }
 /** @override @nodts */
 m_write__int__void(/** number */ oneChar) {
  this.f_buf__java_io_StringWriter_.m_append__char__java_lang_StringBuffer(Primitives.m_narrowIntToChar__int__int(oneChar));
 }
 /** @override @nodts */
 m_write__java_lang_String__void(/** ?string */ str) {
  this.f_buf__java_io_StringWriter_.m_append__java_lang_String__java_lang_StringBuffer(str);
 }
 /** @override @nodts */
 m_write__java_lang_String__int__int__void(/** ?string */ str, /** number */ offset, /** number */ count) {
  this.f_buf__java_io_StringWriter_.m_append__java_lang_CharSequence__int__int__java_lang_StringBuffer(str, offset, offset + count | 0);
 }
 /** @nodts @return {StringWriter} */
 m_append__char__java_io_StringWriter(/** number */ c) {
  this.m_write__int__void(c);
  return this;
 }
 /** @nodts @return {StringWriter} */
 m_append__java_lang_CharSequence__java_io_StringWriter(/** (CharSequence|string) */ csq) {
  this.m_write__java_lang_String__void(j_l_String.m_valueOf__java_lang_Object__java_lang_String(csq));
  return this;
 }
 /** @nodts @return {StringWriter} */
 m_append__java_lang_CharSequence__int__int__java_io_StringWriter(/** (CharSequence|string) */ csq, /** number */ start, /** number */ end) {
  if ($Equality.$same(csq, null)) {
   csq = 'null';
  }
  return this.m_append__java_lang_CharSequence__java_io_StringWriter($CharSequences.m_subSequence__java_lang_CharSequence__int__int__java_lang_CharSequence(csq, start, end));
 }
 //Bridge method.
 /** @final @override @nodts @return {StringWriter} */
 m_append__char__java_io_Writer(/** number */ arg0) {
  return this.m_append__char__java_io_StringWriter(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {StringWriter} */
 m_append__java_lang_CharSequence__java_io_Writer(/** (CharSequence|string) */ arg0) {
  return this.m_append__java_lang_CharSequence__java_io_StringWriter(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {StringWriter} */
 m_append__java_lang_CharSequence__int__int__java_io_Writer(/** (CharSequence|string) */ arg0, /** number */ arg1, /** number */ arg2) {
  return this.m_append__java_lang_CharSequence__int__int__java_io_StringWriter(arg0, arg1, arg2);
 }
 /** @private @nodts */
 $init__void_$p_java_io_StringWriter() {
  this.f_buf__java_io_StringWriter_ = StringBuffer.$create__();
 }
 /** @nodts */
 static $clinit() {
  StringWriter.$clinit = () =>{};
  StringWriter.$loadModules();
  Writer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringWriter;
 }
 
 /** @nodts */
 static $loadModules() {
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuffer = goog.module.get('java.lang.StringBuffer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
 }
}
$Util.$setClassMetadata(StringWriter, 'java.io.StringWriter');

exports = StringWriter;

//# sourceMappingURL=StringWriter.js.map
