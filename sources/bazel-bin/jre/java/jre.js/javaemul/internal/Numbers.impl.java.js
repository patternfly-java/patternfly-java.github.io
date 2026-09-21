goog.module('vmbootstrap.Numbers$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let Number = goog.forwardDeclare('java.lang.Number$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

class $Numbers extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$Numbers} */
 static $create__() {
  $Numbers.$clinit();
  let $instance = new $Numbers();
  $instance.$ctor__javaemul_internal_Numbers__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Numbers__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 static m_byteValue__java_lang_Number__byte(/** (Number|number|!$Long) */ obj) {
  $Numbers.$clinit();
  if (Double.$isInstance(obj)) {
   let d = /**@type {?number}*/ (obj);
   return Double.m_byteValue__java_lang_Double__byte(d);
  } else if (Long.$isInstance(obj)) {
   let l = /**@type {$Long}*/ (obj);
   return Long.m_byteValue__java_lang_Long__byte(l);
  }
  return obj.m_byteValue__byte();
 }
 /** @nodts @return {number} */
 static m_doubleValue__java_lang_Number__double(/** (Number|number|!$Long) */ obj) {
  $Numbers.$clinit();
  if (Double.$isInstance(obj)) {
   let d = /**@type {?number}*/ (obj);
   return Double.m_doubleValue__java_lang_Double__double(d);
  } else if (Long.$isInstance(obj)) {
   let l = /**@type {$Long}*/ (obj);
   return Long.m_doubleValue__java_lang_Long__double(l);
  }
  return obj.m_doubleValue__double();
 }
 /** @nodts @return {number} */
 static m_floatValue__java_lang_Number__float(/** (Number|number|!$Long) */ obj) {
  $Numbers.$clinit();
  if (Double.$isInstance(obj)) {
   let d = /**@type {?number}*/ (obj);
   return Double.m_floatValue__java_lang_Double__float(d);
  } else if (Long.$isInstance(obj)) {
   let l = /**@type {$Long}*/ (obj);
   return Long.m_floatValue__java_lang_Long__float(l);
  }
  return obj.m_floatValue__float();
 }
 /** @nodts @return {number} */
 static m_intValue__java_lang_Number__int(/** (Number|number|!$Long) */ obj) {
  $Numbers.$clinit();
  if (Double.$isInstance(obj)) {
   let d = /**@type {?number}*/ (obj);
   return Double.m_intValue__java_lang_Double__int(d);
  } else if (Long.$isInstance(obj)) {
   let l = /**@type {$Long}*/ (obj);
   return Long.m_intValue__java_lang_Long__int(l);
  }
  return obj.m_intValue__int();
 }
 /** @nodts @return {!$Long} */
 static m_longValue__java_lang_Number__long(/** (Number|number|!$Long) */ obj) {
  $Numbers.$clinit();
  if (Double.$isInstance(obj)) {
   let d = /**@type {?number}*/ (obj);
   return Double.m_longValue__java_lang_Double__long(d);
  } else if (Long.$isInstance(obj)) {
   let l = /**@type {$Long}*/ (obj);
   return Long.m_longValue__java_lang_Long__long(l);
  }
  return obj.m_longValue__long();
 }
 /** @nodts @return {number} */
 static m_shortValue__java_lang_Number__short(/** (Number|number|!$Long) */ obj) {
  $Numbers.$clinit();
  if (Double.$isInstance(obj)) {
   let d = /**@type {?number}*/ (obj);
   return Double.m_shortValue__java_lang_Double__short(d);
  } else if (Long.$isInstance(obj)) {
   let l = /**@type {$Long}*/ (obj);
   return Long.m_shortValue__java_lang_Long__short(l);
  }
  return obj.m_shortValue__short();
 }
 /** @nodts */
 static $clinit() {
  $Numbers.$clinit = () =>{};
  $Numbers.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Numbers;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Long = goog.module.get('java.lang.Long$impl');
 }
}
$Util.$setClassMetadata($Numbers, 'javaemul.internal.Numbers');

exports = $Numbers;

//# sourceMappingURL=Numbers.js.map
