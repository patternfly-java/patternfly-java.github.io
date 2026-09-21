goog.module('org.jboss.elemento.router.Path$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class Path extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Path} */
 static $create__() {
  Path.$clinit();
  let $instance = new Path();
  $instance.$ctor__org_jboss_elemento_router_Path__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_Path__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 static m_normalize__java_lang_String__java_lang_String(/** ?string */ path) {
  Path.$clinit();
  if (!$Equality.$same(path, null)) {
   let normalized = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(path, '/') ? path : '/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(path);
   return j_l_String.m_length__java_lang_String__int(normalized) > 1 && j_l_String.m_endsWith__java_lang_String__java_lang_String__boolean(normalized, '/') ? j_l_String.m_substring__java_lang_String__int__int__java_lang_String(normalized, 0, j_l_String.m_length__java_lang_String__int(normalized) - 1 | 0) : normalized;
  }
  return null;
 }
 /** @nodts @return {Array<?string>} */
 static m_split__java_lang_String__arrayOf_java_lang_String(/** ?string */ path) {
  Path.$clinit();
  if (!$Equality.$same(path, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(j_l_String.m_trim__java_lang_String__java_lang_String(path))) {
   let normalizedNoSlash = j_l_String.m_substring__java_lang_String__int__java_lang_String(Path.m_normalize__java_lang_String__java_lang_String(path), 1);
   if (!j_l_String.m_isEmpty__java_lang_String__boolean(normalizedNoSlash)) {
    return j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(normalizedNoSlash, '/');
   }
  }
  return /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String));
 }
 /** @nodts */
 static $clinit() {
  Path.$clinit = () =>{};
  Path.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Path;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(Path, 'org.jboss.elemento.router.Path');

exports = Path;

//# sourceMappingURL=Path.js.map
