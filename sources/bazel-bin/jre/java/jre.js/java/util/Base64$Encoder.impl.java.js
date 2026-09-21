goog.module('java.util.Base64.Encoder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StandardCharsets = goog.forwardDeclare('java.nio.charset.StandardCharsets$impl');

class Encoder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Encoder} */
 static $create__() {
  Encoder.$clinit();
  let $instance = new Encoder();
  $instance.$ctor__java_util_Base64_Encoder__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Base64_Encoder__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 m_encodeToString__arrayOf_byte__java_lang_String(/** Array<number> */ b) {
  return btoa(j_l_String.$create__arrayOf_byte__java_nio_charset_Charset(b, StandardCharsets.f_ISO_8859_1__java_nio_charset_StandardCharsets));
 }
 /** @nodts */
 static $clinit() {
  Encoder.$clinit = () =>{};
  Encoder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Encoder;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StandardCharsets = goog.module.get('java.nio.charset.StandardCharsets$impl');
 }
}
$Util.$setClassMetadata(Encoder, 'java.util.Base64$Encoder');

exports = Encoder;

//# sourceMappingURL=Base64$Encoder.js.map
