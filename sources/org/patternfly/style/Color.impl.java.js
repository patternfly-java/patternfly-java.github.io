goog.module('org.patternfly.style.Color$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Color>}
 */
class Color extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Color;
 }
 /** @nodts @return {!Color} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ color) {
  let $instance = new Color();
  $instance.$ctor__org_patternfly_style_Color__java_lang_String__int__java_lang_String__void($name, $ordinal, color);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Color__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ color) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_style_Color = $Equality.$same(color, null) ? null : Classes.m_modifier__java_lang_String__java_lang_String(color);
 }
 /** @nodts @return {!Color} */
 static m_valueOf__java_lang_String__org_patternfly_style_Color(/** string */ name) {
  Color.$clinit();
  if ($Equality.$same(Color.f_namesToValuesMap__org_patternfly_style_Color_, null)) {
   Color.f_namesToValuesMap__org_patternfly_style_Color_ = (/**@type {Map<?string, !Color>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Color.m_values__arrayOf_org_patternfly_style_Color())));
  }
  return /**@type {Color}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Color.f_namesToValuesMap__org_patternfly_style_Color_));
 }
 /** @nodts @return {!Array<!Color>} */
 static m_values__arrayOf_org_patternfly_style_Color() {
  Color.$clinit();
  return /**@type {!Array<!Color>}*/ ($Arrays.$stampType([Color.$static_grey__org_patternfly_style_Color, Color.$static_blue__org_patternfly_style_Color, Color.$static_green__org_patternfly_style_Color, Color.$static_orange__org_patternfly_style_Color, Color.$static_orangered__org_patternfly_style_Color, Color.$static_red__org_patternfly_style_Color, Color.$static_purple__org_patternfly_style_Color, Color.$static_teal__org_patternfly_style_Color, Color.$static_yellow__org_patternfly_style_Color], Color));
 }
 /** @nodts @return {!Color} */
 static get f_grey__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_grey__org_patternfly_style_Color);
 }
 /** @nodts @return {!Color} */
 static get f_blue__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_blue__org_patternfly_style_Color);
 }
 /** @nodts @return {!Color} */
 static get f_green__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_green__org_patternfly_style_Color);
 }
 /** @nodts @return {!Color} */
 static get f_orange__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_orange__org_patternfly_style_Color);
 }
 /** @nodts @return {!Color} */
 static get f_orangered__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_orangered__org_patternfly_style_Color);
 }
 /** @nodts @return {!Color} */
 static get f_red__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_red__org_patternfly_style_Color);
 }
 /** @nodts @return {!Color} */
 static get f_purple__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_purple__org_patternfly_style_Color);
 }
 /** @nodts @return {!Color} */
 static get f_teal__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_teal__org_patternfly_style_Color);
 }
 /** @nodts @return {!Color} */
 static get f_yellow__org_patternfly_style_Color() {
  return (Color.$clinit(), Color.$static_yellow__org_patternfly_style_Color);
 }
 /** @nodts */
 static $clinit() {
  Color.$clinit = () =>{};
  Color.$loadModules();
  Enum.$clinit();
  Color.$static_grey__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('grey'), Color.$ordinal_grey__org_patternfly_style_Color, null);
  Color.$static_blue__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('blue'), Color.$ordinal_blue__org_patternfly_style_Color, 'blue');
  Color.$static_green__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('green'), Color.$ordinal_green__org_patternfly_style_Color, 'green');
  Color.$static_orange__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('orange'), Color.$ordinal_orange__org_patternfly_style_Color, 'orange');
  Color.$static_orangered__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('orangered'), Color.$ordinal_orangered__org_patternfly_style_Color, 'orangered');
  Color.$static_red__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('red'), Color.$ordinal_red__org_patternfly_style_Color, 'red');
  Color.$static_purple__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('purple'), Color.$ordinal_purple__org_patternfly_style_Color, 'purple');
  Color.$static_teal__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('teal'), Color.$ordinal_teal__org_patternfly_style_Color, 'teal');
  Color.$static_yellow__org_patternfly_style_Color = Color.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('yellow'), Color.$ordinal_yellow__org_patternfly_style_Color, 'yellow');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Color;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Color.$ordinal_grey__org_patternfly_style_Color = 0;
/**@const {number} @nodts*/
Color.$ordinal_blue__org_patternfly_style_Color = 1;
/**@const {number} @nodts*/
Color.$ordinal_green__org_patternfly_style_Color = 2;
/**@const {number} @nodts*/
Color.$ordinal_orange__org_patternfly_style_Color = 3;
/**@const {number} @nodts*/
Color.$ordinal_orangered__org_patternfly_style_Color = 4;
/**@const {number} @nodts*/
Color.$ordinal_red__org_patternfly_style_Color = 5;
/**@const {number} @nodts*/
Color.$ordinal_purple__org_patternfly_style_Color = 6;
/**@const {number} @nodts*/
Color.$ordinal_teal__org_patternfly_style_Color = 7;
/**@const {number} @nodts*/
Color.$ordinal_yellow__org_patternfly_style_Color = 8;
/**@private {!Color} @nodts*/
Color.$static_grey__org_patternfly_style_Color;
/**@private {!Color} @nodts*/
Color.$static_blue__org_patternfly_style_Color;
/**@private {!Color} @nodts*/
Color.$static_green__org_patternfly_style_Color;
/**@private {!Color} @nodts*/
Color.$static_orange__org_patternfly_style_Color;
/**@private {!Color} @nodts*/
Color.$static_orangered__org_patternfly_style_Color;
/**@private {!Color} @nodts*/
Color.$static_red__org_patternfly_style_Color;
/**@private {!Color} @nodts*/
Color.$static_purple__org_patternfly_style_Color;
/**@private {!Color} @nodts*/
Color.$static_teal__org_patternfly_style_Color;
/**@private {!Color} @nodts*/
Color.$static_yellow__org_patternfly_style_Color;
/**@type {Map<?string, !Color>} @nodts*/
Color.f_namesToValuesMap__org_patternfly_style_Color_;
$Util.$setClassMetadataForEnum(Color, 'org.patternfly.style.Color');

exports = Color;

//# sourceMappingURL=Color.js.map
