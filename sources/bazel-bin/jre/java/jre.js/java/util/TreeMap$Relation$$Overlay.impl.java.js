goog.module('java.util.TreeMap.Relation.$Overlay$impl');

const Enums = goog.require('javaemul.internal.Enums$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Relation = goog.forwardDeclare('java.util.TreeMap.Relation$impl');
let BoxedComparableLightEnum = goog.forwardDeclare('javaemul.internal.Enums.BoxedComparableLightEnum$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?Relation} */
 static m_forOrder__$devirt__java_util_TreeMap_Relation__boolean__java_util_TreeMap_Relation(/** !Relation */ $thisArg, /** boolean */ ascending) {
  $Overlay.$clinit();
  if (ascending) {
   return $thisArg;
  }
  switch ((InternalPreconditions.m_checkNotNull__boolean__void(!$Equality.$same($thisArg, null)), $thisArg)) {
   case Relation.LOWER:
    return Relation.HIGHER;
   case Relation.FLOOR:
    return Relation.CEILING;
   case Relation.CEILING:
    return Relation.FLOOR;
   case Relation.HIGHER:
    return Relation.LOWER;
   default:
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalStateException.$create__());
  }
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return Enums.m_isInstanceOf__java_lang_Object__javaemul_internal_Constructor__boolean(instance, $Overlay);
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Relation = goog.module.get('java.util.TreeMap.Relation$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'java.util.TreeMap$Relation');

exports = $Overlay;

//# sourceMappingURL=TreeMap$Relation$$Overlay.js.map
