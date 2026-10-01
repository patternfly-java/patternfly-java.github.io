goog.module('java.util.Base64.Decoder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StandardCharsets = goog.forwardDeclare('java.nio.charset.StandardCharsets$impl');

class Decoder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Decoder} */
 static $create__() {
  Decoder.$clinit();
  let $instance = new Decoder();
  $instance.$ctor__java_util_Base64_Decoder__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Base64_Decoder__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<number>} */
 m_decode__java_lang_String__arrayOf_byte(/** ?string */ s) {
  return j_l_String.m_getBytes__java_lang_String__java_nio_charset_Charset__arrayOf_byte(atob(s), StandardCharsets.f_ISO_8859_1__java_nio_charset_StandardCharsets);
 }
 /** @nodts */
 static $clinit() {
  Decoder.$clinit = () =>{};
  Decoder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Decoder;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StandardCharsets = goog.module.get('java.nio.charset.StandardCharsets$impl');
 }
}
$Util.$setClassMetadata(Decoder, 'java.util.Base64$Decoder');

exports = Decoder;

//# sourceMappingURL=Base64$Decoder.js.map
