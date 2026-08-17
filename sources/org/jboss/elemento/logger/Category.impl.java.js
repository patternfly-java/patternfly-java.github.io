goog.module('org.jboss.elemento.logger.Category$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let $byte = goog.forwardDeclare('javaemul.internal.primitives.$byte$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class Category extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Category} */
 static $create__() {
  Category.$clinit();
  let $instance = new Category();
  $instance.$ctor__org_jboss_elemento_logger_Category__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_logger_Category__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 static m_parent__java_lang_String__java_lang_String(/** ?string */ category) {
  Category.$clinit();
  if (!$Equality.$same(category, null) && j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(category, '.')) {
   return j_l_String.m_substring__java_lang_String__int__int__java_lang_String(category, 0, j_l_String.m_lastIndexOf__java_lang_String__int__int(category, 46 /* '.' */));
  }
  return '';
 }
 /** @nodts @return {boolean} */
 static m_isSubcategory__java_lang_String__java_lang_String__boolean(/** ?string */ parent, /** ?string */ child) {
  Category.$clinit();
  if (!$Equality.$same(parent, null) && !$Equality.$same(child, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(parent) && j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(child, '.')) {
   let parentParts = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(parent, '\\.');
   let childParts = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(child, '\\.');
   if (parentParts.length >= childParts.length) {
    return false;
   }
   for (let i = 0; i < parentParts.length; i = i + 1 | 0) {
    if (!j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(parentParts[i], childParts[i])) {
     return false;
    }
   }
   return true;
  }
  return false;
 }
 /** @nodts @return {?string} */
 static m_format__java_lang_String__int__java_lang_String(/** ?string */ category, /** number */ length) {
  Category.$clinit();
  if ($Equality.$same(category, null) || j_l_String.m_isEmpty__java_lang_String__boolean(j_l_String.m_trim__java_lang_String__java_lang_String(category))) {
   return Category.m_rightPad__java_lang_String__int__java_lang_String(Category.f_NONE__org_jboss_elemento_logger_Category_, length);
  }
  let builder = StringBuilder.$create__();
  if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(category, '.')) {
   let parts = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(category, '\\.');
   for (let i = 0; i < (parts.length - 1 | 0); i = i + 1 | 0) {
    builder.m_append__char__java_lang_StringBuilder(j_l_String.m_charAt__java_lang_String__int__char(parts[i], 0)).m_append__char__java_lang_StringBuilder(46 /* '.' */);
   }
   builder.m_append__java_lang_String__java_lang_StringBuilder(parts[parts.length - 1 | 0]);
  } else {
   builder.m_append__java_lang_String__java_lang_StringBuilder(category);
  }
  return Category.m_rightPad__java_lang_String__int__java_lang_String(builder.toString(), length);
 }
 /** @nodts @return {?string} */
 static m_rightPad__java_lang_String__int__java_lang_String(/** ?string */ value, /** number */ length) {
  let diff = j_l_String.m_length__java_lang_String__int(value) - length | 0;
  if (diff > 0) {
   return j_l_String.m_substring__java_lang_String__int__java_lang_String(value, diff);
  } else {
   let bytes = /**@type {!Array<number>}*/ ($Arrays.$create([Math.m_abs__int__int(diff)], $byte));
   Arrays.m_fill__arrayOf_byte__byte__void(bytes, 32);
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.$create__arrayOf_byte(bytes)) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value);
  }
 }
 /** @nodts */
 static $clinit() {
  Category.$clinit = () =>{};
  Category.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Category;
 }
 
 /** @nodts */
 static $loadModules() {
  Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  $byte = goog.module.get('javaemul.internal.primitives.$byte$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {string} @nodts*/
Category.f_NONE__org_jboss_elemento_logger_Category_ = '<none>';
$Util.$setClassMetadata(Category, 'org.jboss.elemento.logger.Category');

exports = Category;

//# sourceMappingURL=Category.js.map
