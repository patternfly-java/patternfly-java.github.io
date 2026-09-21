goog.module('java.lang.Byte.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Byte = goog.forwardDeclare('java.lang.Byte$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class BoxedValues extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BoxedValues} */
 static $create__() {
  let $instance = new BoxedValues();
  $instance.$ctor__java_lang_Byte_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Byte_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @nosideeffects @return {Byte} */
 static m_get__byte__java_lang_Byte(/** number */ b) {
  BoxedValues.$clinit();
  return BoxedValues.f_boxedValues__java_lang_Byte_BoxedValues_[b + 128 | 0];
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  let values = /**@type {!Array<Byte>}*/ ($Arrays.$create([256], Byte));
  for (let i = 0; i < 256; i = i + 1 | 0) {
   $Arrays.$set(values, i, Byte.$create__byte(Primitives.m_narrowIntToByte__int__int(i - 128 | 0)));
  }
  BoxedValues.f_boxedValues__java_lang_Byte_BoxedValues_ = values;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Byte = goog.module.get('java.lang.Byte$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<Byte>} @nodts*/
BoxedValues.f_boxedValues__java_lang_Byte_BoxedValues_;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Byte$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Byte$BoxedValues.js.map
