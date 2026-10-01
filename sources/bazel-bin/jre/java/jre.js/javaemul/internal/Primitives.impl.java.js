goog.module('javaemul.internal.Primitives$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

class Primitives extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Primitives} */
 static $create__() {
  Primitives.$clinit();
  let $instance = new Primitives();
  $instance.$ctor__javaemul_internal_Primitives__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Primitives__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 static m_toByte__int__int(/** number */ instance) {
  Primitives.$clinit();
  return instance << 24 >> 24;
 }
 /** @nodts @return {number} */
 static m_toChar__int__int(/** number */ instance) {
  Primitives.$clinit();
  return instance & 65535;
 }
 /** @nodts @return {number} */
 static m_toShort__int__int(/** number */ instance) {
  Primitives.$clinit();
  return instance << 16 >> 16;
 }
 /** @nodts @return {number} */
 static m_toInt__int__int(/** number */ instance) {
  Primitives.$clinit();
  return instance | 0;
 }
 /** @nodts @return {number} */
 static m_widenByteToChar__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_toChar__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_narrowCharToByte__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_toByte__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_narrowCharToShort__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_toShort__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_narrowShortToByte__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_toByte__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_narrowShortToChar__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_toChar__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_narrowIntToByte__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_toByte__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_narrowIntToChar__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_toChar__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_narrowIntToShort__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_toShort__int__int(instance);
 }
 /** @nodts @return {!$Long} */
 static m_widenByteToLong__int__long(/** number */ instance) {
  Primitives.$clinit();
  return $LongUtils.fromInt(instance);
 }
 /** @nodts @return {!$Long} */
 static m_widenCharToLong__int__long(/** number */ instance) {
  Primitives.$clinit();
  return $LongUtils.fromInt(instance);
 }
 /** @nodts @return {!$Long} */
 static m_widenShortToLong__int__long(/** number */ instance) {
  Primitives.$clinit();
  return $LongUtils.fromInt(instance);
 }
 /** @nodts @return {!$Long} */
 static m_widenIntToLong__int__long(/** number */ instance) {
  Primitives.$clinit();
  return $LongUtils.fromInt(instance);
 }
 /** @nodts @return {!$Long} */
 static m_narrowFloatToLong__int__long(/** number */ instance) {
  Primitives.$clinit();
  return $LongUtils.fromNumber(instance);
 }
 /** @nodts @return {!$Long} */
 static m_narrowDoubleToLong__int__long(/** number */ instance) {
  Primitives.$clinit();
  return $LongUtils.fromNumber(instance);
 }
 /** @nodts @return {number} */
 static m_narrowLongToByte__long__int(/** !$Long */ instance) {
  Primitives.$clinit();
  let intValue = $LongUtils.toInt(instance);
  return Primitives.m_toByte__int__int(intValue);
 }
 /** @nodts @return {number} */
 static m_narrowLongToChar__long__int(/** !$Long */ instance) {
  Primitives.$clinit();
  let intValue = $LongUtils.toInt(instance);
  return Primitives.m_toChar__int__int(intValue);
 }
 /** @nodts @return {number} */
 static m_narrowLongToShort__long__int(/** !$Long */ instance) {
  Primitives.$clinit();
  let intValue = $LongUtils.toInt(instance);
  return Primitives.m_toShort__int__int(intValue);
 }
 /** @nodts @return {number} */
 static m_narrowLongToInt__long__int(/** !$Long */ instance) {
  Primitives.$clinit();
  return $LongUtils.toInt(instance);
 }
 /** @nodts @return {number} */
 static m_widenLongToFloat__long__double(/** !$Long */ instance) {
  Primitives.$clinit();
  return $LongUtils.toNumber(instance);
 }
 /** @nodts @return {number} */
 static m_widenLongToDouble__long__double(/** !$Long */ instance) {
  Primitives.$clinit();
  return $LongUtils.toNumber(instance);
 }
 /** @nodts @return {number} */
 static m_narrowFloatToByte__int__int(/** number */ instance) {
  Primitives.$clinit();
  let roundInt = Primitives.m_roundToInt__int__int(instance);
  return Primitives.m_toByte__int__int(roundInt);
 }
 /** @nodts @return {number} */
 static m_narrowDoubleToByte__int__int(/** number */ instance) {
  Primitives.$clinit();
  let roundInt = Primitives.m_roundToInt__int__int(instance);
  return Primitives.m_toByte__int__int(roundInt);
 }
 /** @nodts @return {number} */
 static m_narrowFloatToChar__int__int(/** number */ instance) {
  Primitives.$clinit();
  let roundInt = Primitives.m_roundToInt__int__int(instance);
  return Primitives.m_toChar__int__int(roundInt);
 }
 /** @nodts @return {number} */
 static m_narrowDoubleToChar__int__int(/** number */ instance) {
  Primitives.$clinit();
  let roundInt = Primitives.m_roundToInt__int__int(instance);
  return Primitives.m_toChar__int__int(roundInt);
 }
 /** @nodts @return {number} */
 static m_narrowFloatToShort__int__int(/** number */ instance) {
  Primitives.$clinit();
  let roundInt = Primitives.m_roundToInt__int__int(instance);
  return Primitives.m_toShort__int__int(roundInt);
 }
 /** @nodts @return {number} */
 static m_narrowDoubleToShort__int__int(/** number */ instance) {
  Primitives.$clinit();
  let roundInt = Primitives.m_roundToInt__int__int(instance);
  return Primitives.m_toShort__int__int(roundInt);
 }
 /** @nodts @return {number} */
 static m_narrowFloatToInt__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_roundToInt__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_narrowDoubleToInt__int__int(/** number */ instance) {
  Primitives.$clinit();
  return Primitives.m_roundToInt__int__int(instance);
 }
 /** @nodts @return {number} */
 static m_coerceDivision__int__int(/** number */ value) {
  Primitives.$clinit();
  InternalPreconditions.m_checkArithmetic__boolean__void(Double.m_isFinite__double__boolean(value));
  return Primitives.m_toInt__int__int(value);
 }
 /** @nodts @return {number} */
 static m_roundToInt__int__int(/** number */ value) {
  return Primitives.m_toInt__int__int(Math.max(Math.min(value, Integer.f_MAX_VALUE__java_lang_Integer), Integer.f_MIN_VALUE__java_lang_Integer));
 }
 /** @nodts */
 static $clinit() {
  Primitives.$clinit = () =>{};
  Primitives.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Primitives;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata(Primitives, 'javaemul.internal.Primitives');

exports = Primitives;

//# sourceMappingURL=Primitives.js.map
