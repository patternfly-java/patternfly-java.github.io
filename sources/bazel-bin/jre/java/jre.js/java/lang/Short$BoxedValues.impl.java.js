goog.module('java.lang.Short.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Short = goog.forwardDeclare('java.lang.Short$impl');
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
  $instance.$ctor__java_lang_Short_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Short_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @nosideeffects @return {Short} */
 static m_get__short__java_lang_Short(/** number */ s) {
  BoxedValues.$clinit();
  return BoxedValues.f_boxedValues__java_lang_Short_BoxedValues_[s + 128 | 0];
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  let values = /**@type {!Array<Short>}*/ ($Arrays.$create([256], Short));
  for (let i = 0; i < 256; i = i + 1 | 0) {
   $Arrays.$set(values, i, Short.$create__short(Primitives.m_narrowIntToShort__int__int(i - 128 | 0)));
  }
  BoxedValues.f_boxedValues__java_lang_Short_BoxedValues_ = values;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Short = goog.module.get('java.lang.Short$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<Short>} @nodts*/
BoxedValues.f_boxedValues__java_lang_Short_BoxedValues_;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Short$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Short$BoxedValues.js.map
