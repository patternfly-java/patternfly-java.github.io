goog.module('java.lang.Character.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
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
  $instance.$ctor__java_lang_Character_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Character_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @nosideeffects @return {Character} */
 static m_get__char__java_lang_Character(/** number */ c) {
  BoxedValues.$clinit();
  return BoxedValues.f_boxedValues__java_lang_Character_BoxedValues_[c];
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  let values = /**@type {!Array<Character>}*/ ($Arrays.$create([128], Character));
  for (let i = 0; i < 128; i = Primitives.m_narrowIntToChar__int__int(i + 1 /* '\u0001' */ | 0)) {
   $Arrays.$set(values, i, Character.$create__char(i));
  }
  BoxedValues.f_boxedValues__java_lang_Character_BoxedValues_ = values;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<Character>} @nodts*/
BoxedValues.f_boxedValues__java_lang_Character_BoxedValues_;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Character$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Character$BoxedValues.js.map
