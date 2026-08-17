goog.module('org.patternfly.style.Width$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Width>}
 * @implements {TypedModifier}
 */
class Width extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Width_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Width_;
 }
 /** @nodts @return {!Width} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Width();
  $instance.$ctor__org_patternfly_style_Width__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Width__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Width_ = value;
  this.f_modifier__org_patternfly_style_Width_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Width_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Width_;
 }
 /** @nodts @return {!Width} */
 static m_valueOf__java_lang_String__org_patternfly_style_Width(/** string */ name) {
  Width.$clinit();
  if ($Equality.$same(Width.f_namesToValuesMap__org_patternfly_style_Width_, null)) {
   Width.f_namesToValuesMap__org_patternfly_style_Width_ = (/**@type {Map<?string, !Width>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Width.m_values__arrayOf_org_patternfly_style_Width())));
  }
  return /**@type {Width}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Width.f_namesToValuesMap__org_patternfly_style_Width_));
 }
 /** @nodts @return {!Array<!Width>} */
 static m_values__arrayOf_org_patternfly_style_Width() {
  Width.$clinit();
  return /**@type {!Array<!Width>}*/ ($Arrays.$stampType([Width.$static_width10__org_patternfly_style_Width, Width.$static_width15__org_patternfly_style_Width, Width.$static_width20__org_patternfly_style_Width, Width.$static_width25__org_patternfly_style_Width, Width.$static_width30__org_patternfly_style_Width, Width.$static_width35__org_patternfly_style_Width, Width.$static_width40__org_patternfly_style_Width, Width.$static_width45__org_patternfly_style_Width, Width.$static_width50__org_patternfly_style_Width, Width.$static_width60__org_patternfly_style_Width, Width.$static_width70__org_patternfly_style_Width, Width.$static_width80__org_patternfly_style_Width, Width.$static_width90__org_patternfly_style_Width, Width.$static_width100__org_patternfly_style_Width], Width));
 }
 /** @nodts @return {!Width} */
 static get f_width10__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width10__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width15__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width15__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width20__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width20__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width25__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width25__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width30__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width30__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width35__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width35__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width40__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width40__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width45__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width45__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width50__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width50__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width60__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width60__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width70__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width70__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width80__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width80__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width90__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width90__org_patternfly_style_Width);
 }
 /** @nodts @return {!Width} */
 static get f_width100__org_patternfly_style_Width() {
  return (Width.$clinit(), Width.$static_width100__org_patternfly_style_Width);
 }
 /** @nodts */
 static $clinit() {
  Width.$clinit = () =>{};
  Width.$loadModules();
  Enum.$clinit();
  Width.$static_width10__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width10'), Width.$ordinal_width10__org_patternfly_style_Width, 'width-10');
  Width.$static_width15__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width15'), Width.$ordinal_width15__org_patternfly_style_Width, 'width-15');
  Width.$static_width20__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width20'), Width.$ordinal_width20__org_patternfly_style_Width, 'width-20');
  Width.$static_width25__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width25'), Width.$ordinal_width25__org_patternfly_style_Width, 'width-25');
  Width.$static_width30__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width30'), Width.$ordinal_width30__org_patternfly_style_Width, 'width-30');
  Width.$static_width35__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width35'), Width.$ordinal_width35__org_patternfly_style_Width, 'width-35');
  Width.$static_width40__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width40'), Width.$ordinal_width40__org_patternfly_style_Width, 'width-40');
  Width.$static_width45__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width45'), Width.$ordinal_width45__org_patternfly_style_Width, 'width-45');
  Width.$static_width50__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width50'), Width.$ordinal_width50__org_patternfly_style_Width, 'width-50');
  Width.$static_width60__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width60'), Width.$ordinal_width60__org_patternfly_style_Width, 'width-60');
  Width.$static_width70__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width70'), Width.$ordinal_width70__org_patternfly_style_Width, 'width-70');
  Width.$static_width80__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width80'), Width.$ordinal_width80__org_patternfly_style_Width, 'width-80');
  Width.$static_width90__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width90'), Width.$ordinal_width90__org_patternfly_style_Width, 'width-90');
  Width.$static_width100__org_patternfly_style_Width = Width.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width100'), Width.$ordinal_width100__org_patternfly_style_Width, 'width-100');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Width;
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
Width.$ordinal_width10__org_patternfly_style_Width = 0;
/**@const {number} @nodts*/
Width.$ordinal_width15__org_patternfly_style_Width = 1;
/**@const {number} @nodts*/
Width.$ordinal_width20__org_patternfly_style_Width = 2;
/**@const {number} @nodts*/
Width.$ordinal_width25__org_patternfly_style_Width = 3;
/**@const {number} @nodts*/
Width.$ordinal_width30__org_patternfly_style_Width = 4;
/**@const {number} @nodts*/
Width.$ordinal_width35__org_patternfly_style_Width = 5;
/**@const {number} @nodts*/
Width.$ordinal_width40__org_patternfly_style_Width = 6;
/**@const {number} @nodts*/
Width.$ordinal_width45__org_patternfly_style_Width = 7;
/**@const {number} @nodts*/
Width.$ordinal_width50__org_patternfly_style_Width = 8;
/**@const {number} @nodts*/
Width.$ordinal_width60__org_patternfly_style_Width = 9;
/**@const {number} @nodts*/
Width.$ordinal_width70__org_patternfly_style_Width = 10;
/**@const {number} @nodts*/
Width.$ordinal_width80__org_patternfly_style_Width = 11;
/**@const {number} @nodts*/
Width.$ordinal_width90__org_patternfly_style_Width = 12;
/**@const {number} @nodts*/
Width.$ordinal_width100__org_patternfly_style_Width = 13;
/**@private {!Width} @nodts*/
Width.$static_width10__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width15__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width20__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width25__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width30__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width35__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width40__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width45__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width50__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width60__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width70__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width80__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width90__org_patternfly_style_Width;
/**@private {!Width} @nodts*/
Width.$static_width100__org_patternfly_style_Width;
/**@type {Map<?string, !Width>} @nodts*/
Width.f_namesToValuesMap__org_patternfly_style_Width_;
TypedModifier.$markImplementor(Width);
$Util.$setClassMetadataForEnum(Width, 'org.patternfly.style.Width');

exports = Width;

//# sourceMappingURL=Width.js.map
