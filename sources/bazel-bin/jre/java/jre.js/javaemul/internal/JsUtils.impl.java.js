goog.module('javaemul.internal.JsUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 */
class JsUtils extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 // /** @template T @return {T} */
 // native static uncheckedCast(/** * */ o) 
 // /** @return {number} */
 // native static coerceToInt(/** ?number */ o) 
 // /** @template T @return {T} */
 // native static getProperty(/** * */ map, /** ?string */ key) 
 // 
 // native static setProperty(/** * */ map, /** ?string */ key, /** * */ value) 
 /** @nodts @return {!JsUtils} */
 static $create__() {
  let $instance = new JsUtils();
  $instance.$ctor__javaemul_internal_JsUtils__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_JsUtils__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  JsUtils.$clinit = () =>{};
  JsUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsUtils;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(JsUtils, 'javaemul.internal.JsUtils');

/* NATIVE.JS EPILOG */

const javaemul_internal_JsUtils = JsUtils;

/**
 * @param {*} value
 * @return {*}
 */
javaemul_internal_JsUtils.uncheckedCast = function(value) {
  return value;
};

/**
 * @param {number|undefined} value
 * @return {number}
 */
javaemul_internal_JsUtils.coerceToInt = function(value) {
  return value || 0;
};

/**
 * @param {*} map
 * @param {string} key
 * @return {*}
 */
javaemul_internal_JsUtils.getProperty = function(map, key) {
  return map[key];
};

/**
 * @param {*} map
 * @param {string} key
 * @param {*} value
 */
javaemul_internal_JsUtils.setProperty = function(map, key, value) {
  map[key] = value;
};

exports = JsUtils;

//# sourceMappingURL=JsUtils.js.map
