goog.module('java.lang.Long.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class BoxedValues extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BoxedValues} */
 static $create__() {
  BoxedValues.$clinit();
  let $instance = new BoxedValues();
  $instance.$ctor__java_lang_Long_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Long_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @nosideeffects @return {$Long} */
 static m_get__int__java_lang_Long(/** number */ i) {
  BoxedValues.$clinit();
  return BoxedValues.f_boxedValues__java_lang_Long_BoxedValues_[i + 128 | 0];
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  let values = /**@type {!Array<$Long>}*/ ($Arrays.$create([256], Long));
  for (let i = 0; i < 256; i = i + 1 | 0) {
   $Arrays.$set(values, i, Long.$create__long(Primitives.m_widenIntToLong__int__long(i - 128 | 0)));
  }
  BoxedValues.f_boxedValues__java_lang_Long_BoxedValues_ = values;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<$Long>} @nodts*/
BoxedValues.f_boxedValues__java_lang_Long_BoxedValues_;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Long$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Long$BoxedValues.js.map
