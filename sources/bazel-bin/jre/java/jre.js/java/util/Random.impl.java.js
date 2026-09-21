goog.module('java.util.Random$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $double = goog.forwardDeclare('javaemul.internal.primitives.$double$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

class Random extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_haveNextNextGaussian__java_util_Random_ = false;
  /**@type {number} @nodts*/
  this.f_nextNextGaussian__java_util_Random_ = 0;
  /**@type {number} @nodts*/
  this.f_seedhi__java_util_Random_ = 0;
  /**@type {number} @nodts*/
  this.f_seedlo__java_util_Random_ = 0;
 }
 //Factory method corresponding to constructor 'Random()'.
 /** @nodts @return {!Random} */
 static $create__() {
  Random.$clinit();
  let $instance = new Random();
  $instance.$ctor__java_util_Random__void();
  return $instance;
 }
 //Initialization from constructor 'Random()'.
 /** @nodts */
 $ctor__java_util_Random__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_Random();
  let /** number */ $value;
  let seed = ($value = Random.f_uniqueSeed__java_util_Random_, Random.f_uniqueSeed__java_util_Random_ = Random.f_uniqueSeed__java_util_Random_ + 1 | 0, $value) + Date.now();
  let hi = Primitives.m_narrowDoubleToInt__int__int(Math.floor(seed * Random.f_twoToTheMinus24__java_util_Random_)) & 16777215;
  let lo = Primitives.m_narrowDoubleToInt__int__int(seed - hi * Random.f_twoToThe24__java_util_Random_);
  this.m_setSeed__int__int__void_$p_java_util_Random(hi, lo);
 }
 //Factory method corresponding to constructor 'Random(long)'.
 /** @nodts @return {!Random} */
 static $create__long(/** !$Long */ seed) {
  Random.$clinit();
  let $instance = new Random();
  $instance.$ctor__java_util_Random__long__void(seed);
  return $instance;
 }
 //Initialization from constructor 'Random(long)'.
 /** @nodts */
 $ctor__java_util_Random__long__void(/** !$Long */ seed) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_Random();
  this.m_setSeed__long__void(seed);
 }
 /** @nodts @return {boolean} */
 m_nextBoolean__boolean() {
  return this.m_nextInternal__int__double_$p_java_util_Random(1) != 0;
 }
 /** @nodts */
 m_nextBytes__arrayOf_byte__void(/** Array<number> */ buf) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(buf);
  let rand = 0;
  let count = 0;
  let loop = 0;
  while (count < buf.length) {
   if (loop == 0) {
    rand = Primitives.m_narrowDoubleToInt__int__int(this.m_nextInternal__int__double_$p_java_util_Random(32));
    loop = 3;
   } else {
    loop = loop - 1 | 0;
   }
   let /** number */ $value;
   $Arrays.$set(buf, ($value = count, count = count + 1 | 0, $value), Primitives.m_narrowIntToByte__int__int(rand));
   rand >>= 8;
  }
 }
 /** @nodts @return {number} */
 m_nextDouble__double() {
  return this.m_nextInternal__int__double_$p_java_util_Random(26) * Random.f_twoToTheMinus26__java_util_Random_ + this.m_nextInternal__int__double_$p_java_util_Random(27) * Random.f_twoToTheMinus53__java_util_Random_;
 }
 /** @nodts @return {number} */
 m_nextFloat__float() {
  return this.m_nextInternal__int__double_$p_java_util_Random(24) * Random.f_twoToTheMinus24__java_util_Random_;
 }
 /** @nodts @return {number} */
 m_nextGaussian__double() {
  if (this.f_haveNextNextGaussian__java_util_Random_) {
   this.f_haveNextNextGaussian__java_util_Random_ = false;
   return this.f_nextNextGaussian__java_util_Random_;
  }
  let /** number */ v1;
  let /** number */ v2;
  let /** number */ s;
  do {
   v1 = 2 * this.m_nextDouble__double() - 1;
   v2 = 2 * this.m_nextDouble__double() - 1;
   s = v1 * v1 + v2 * v2;
  } while (s >= 1);
  let norm = s == 0 ? 0 : Math.sqrt(- 2 * Math.log(s) / s);
  this.f_nextNextGaussian__java_util_Random_ = v2 * norm;
  this.f_haveNextNextGaussian__java_util_Random_ = true;
  return v1 * norm;
 }
 /** @nodts @return {number} */
 m_nextInt__int() {
  return Primitives.m_narrowDoubleToInt__int__int(this.m_nextInternal__int__double_$p_java_util_Random(32));
 }
 /** @nodts @return {number} */
 m_nextInt__int__int(/** number */ n) {
  InternalPreconditions.m_checkCriticalArgument__boolean__void(n > 0);
  if ((n & (- n | 0)) == n) {
   return Primitives.m_narrowDoubleToInt__int__int(n * this.m_nextInternal__int__double_$p_java_util_Random(31) * Random.f_twoToTheMinus31__java_util_Random_);
  }
  let /** number */ bits;
  let /** number */ val;
  do {
   bits = this.m_nextInternal__int__double_$p_java_util_Random(31);
   val = bits % n;
  } while (bits - val + (n - 1 | 0) < 0);
  return Primitives.m_narrowDoubleToInt__int__int(val);
 }
 /** @nodts @return {!$Long} */
 m_nextLong__long() {
  return $LongUtils.plus($LongUtils.leftShift(Primitives.m_narrowDoubleToLong__int__long(this.m_nextInternal__int__double_$p_java_util_Random(32)), 32), Primitives.m_narrowDoubleToLong__int__long(this.m_nextInternal__int__double_$p_java_util_Random(32)));
 }
 /** @nodts */
 m_setSeed__long__void(/** !$Long */ seed) {
  this.m_setSeed__int__int__void_$p_java_util_Random(Primitives.m_narrowLongToInt__long__int($LongUtils.bitAnd($LongUtils.rightShiftSigned(seed, 24), $Long.fromInt(16777215))), Primitives.m_narrowLongToInt__long__int($LongUtils.bitAnd(seed, $Long.fromInt(16777215))));
 }
 /** @nodts @return {number} */
 m_next__int__int(/** number */ bits) {
  return Primitives.m_narrowDoubleToInt__int__int(this.m_nextInternal__int__double_$p_java_util_Random(bits));
 }
 /** @nodts @return {number} */
 m_nextInternal__int__double_$p_java_util_Random(/** number */ bits) {
  let hi = this.f_seedhi__java_util_Random_ * Random.f_multiplierLo__java_util_Random_ + this.f_seedlo__java_util_Random_ * Random.f_multiplierHi__java_util_Random_;
  let lo = this.f_seedlo__java_util_Random_ * Random.f_multiplierLo__java_util_Random_ + 11;
  let carry = Math.floor(lo * Random.f_twoToTheMinus24__java_util_Random_);
  hi += carry;
  lo -= carry * Random.f_twoToThe24__java_util_Random_;
  hi %= Random.f_twoToThe24__java_util_Random_;
  this.f_seedhi__java_util_Random_ = hi;
  this.f_seedlo__java_util_Random_ = lo;
  if (bits <= 24) {
   return Math.floor(this.f_seedhi__java_util_Random_ * Random.f_twoToTheXMinus24__java_util_Random_[bits]);
  } else {
   let h = this.f_seedhi__java_util_Random_ * (1 << (bits - 24 | 0));
   let l = Math.floor(this.f_seedlo__java_util_Random_ * Random.f_twoToTheXMinus48__java_util_Random_[bits]);
   let dval = h + l;
   if (dval >= Random.f_twoToThe31__java_util_Random_) {
    dval -= Random.f_twoToThe32__java_util_Random_;
   }
   return dval;
  }
 }
 /** @nodts */
 m_setSeed__int__int__void_$p_java_util_Random(/** number */ seedhi, /** number */ seedlo) {
  this.f_seedhi__java_util_Random_ = seedhi ^ 1502;
  this.f_seedlo__java_util_Random_ = seedlo ^ 15525485;
  this.f_haveNextNextGaussian__java_util_Random_ = false;
 }
 /** @private @nodts */
 $init__void_$p_java_util_Random() {
  this.f_haveNextNextGaussian__java_util_Random_ = false;
 }
 /** @nodts */
 static $clinit() {
  Random.$clinit = () =>{};
  Random.$loadModules();
  j_l_Object.$clinit();
  Random.f_twoToTheXMinus24__java_util_Random_ = (/**@type {!Array<number>}*/ ($Arrays.$create([25], $double)));
  Random.f_twoToTheXMinus48__java_util_Random_ = (/**@type {!Array<number>}*/ ($Arrays.$create([33], $double)));
  Random.f_uniqueSeed__java_util_Random_ = 0;
  let twoToTheXMinus48Tmp = 1.52587890625E-5;
  for (let i = 32; i >= 0; i = i - 1 | 0) {
   $Arrays.$set(Random.f_twoToTheXMinus48__java_util_Random_, i, twoToTheXMinus48Tmp);
   twoToTheXMinus48Tmp *= 0.5;
  }
  let twoToTheXMinus24Tmp = 1;
  for (let i_1 = 24; i_1 >= 0; i_1 = i_1 - 1 | 0) {
   $Arrays.$set(Random.f_twoToTheXMinus24__java_util_Random_, i_1, twoToTheXMinus24Tmp);
   twoToTheXMinus24Tmp *= 0.5;
  }
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Random;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $double = goog.module.get('javaemul.internal.primitives.$double$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
/**@const {number} @nodts*/
Random.f_multiplierHi__java_util_Random_ = 1502;
/**@const {number} @nodts*/
Random.f_multiplierLo__java_util_Random_ = 15525485;
/**@const {number} @nodts*/
Random.f_twoToThe24__java_util_Random_ = 16777216;
/**@const {number} @nodts*/
Random.f_twoToThe31__java_util_Random_ = 2.147483648E9;
/**@const {number} @nodts*/
Random.f_twoToThe32__java_util_Random_ = 4.294967296E9;
/**@const {number} @nodts*/
Random.f_twoToTheMinus24__java_util_Random_ = 5.960464477539063E-8;
/**@const {number} @nodts*/
Random.f_twoToTheMinus26__java_util_Random_ = 1.4901161193847656E-8;
/**@const {number} @nodts*/
Random.f_twoToTheMinus31__java_util_Random_ = 4.656612873077393E-10;
/**@const {number} @nodts*/
Random.f_twoToTheMinus53__java_util_Random_ = 1.1102230246251565E-16;
/**@type {Array<number>} @nodts*/
Random.f_twoToTheXMinus24__java_util_Random_;
/**@type {Array<number>} @nodts*/
Random.f_twoToTheXMinus48__java_util_Random_;
/**@type {number} @nodts*/
Random.f_uniqueSeed__java_util_Random_ = 0;
$Util.$setClassMetadata(Random, 'java.util.Random');

exports = Random;

//# sourceMappingURL=Random.js.map
