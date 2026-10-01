goog.module('java.util.Base64$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Decoder = goog.forwardDeclare('java.util.Base64.Decoder$impl');
let Encoder = goog.forwardDeclare('java.util.Base64.Encoder$impl');

/**
 * @final
 */
class Base64 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Base64} */
 static $create__() {
  let $instance = new Base64();
  $instance.$ctor__java_util_Base64__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Base64__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Decoder} */
 static m_getDecoder__java_util_Base64_Decoder() {
  Base64.$clinit();
  return Decoder.$create__();
 }
 /** @nodts @return {Encoder} */
 static m_getEncoder__java_util_Base64_Encoder() {
  Base64.$clinit();
  return Encoder.$create__();
 }
 /** @nodts */
 static $clinit() {
  Base64.$clinit = () =>{};
  Base64.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Base64;
 }
 
 /** @nodts */
 static $loadModules() {
  Decoder = goog.module.get('java.util.Base64.Decoder$impl');
  Encoder = goog.module.get('java.util.Base64.Encoder$impl');
 }
}
$Util.$setClassMetadata(Base64, 'java.util.Base64');

exports = Base64;

//# sourceMappingURL=Base64.js.map
