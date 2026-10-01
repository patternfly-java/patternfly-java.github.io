goog.module('org.patternfly.style.TypedModifier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');

/**
 * @interface
 */
class TypedModifier {
 /** @nodts @template T, E, B @return {B} */
 static m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(/** B */ builder, /** Element */ element, /** T */ value, /** Array<T> */ values) {
  TypedModifier.$clinit();
  if (!$Equality.$same(values, null)) {
   for (let $array = values, $index = 0; $index < $array.length; $index++) {
    let v = $array[$index];
    {
     if (!j_l_String.m_isEmpty__java_lang_String__boolean((/**@type {!TypedModifier}*/ (v)).m_modifier__java_lang_String())) {
      element.classList.remove((/**@type {!TypedModifier}*/ (v)).m_modifier__java_lang_String());
     }
    }
   }
  }
  if (!$Equality.$same(value, null)) {
   if (!j_l_String.m_isEmpty__java_lang_String__boolean((/**@type {!TypedModifier}*/ (value)).m_modifier__java_lang_String())) {
    element.classList.add((/**@type {!TypedModifier}*/ (value)).m_modifier__java_lang_String());
   }
  }
  return builder;
 }
 /** @nodts @template T, E, B @return {B} */
 static m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__org_patternfly_style_TypedModifier__java_lang_Runnable__org_jboss_elemento_TypedBuilder(/** B */ builder, /** Element */ element, /** T */ current, /** T */ previous, /** Runnable */ assignment) {
  TypedModifier.$clinit();
  if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(previous, current)) {
   return builder;
  }
  if (!$Equality.$same(previous, null) && !j_l_String.m_isEmpty__java_lang_String__boolean((/**@type {!TypedModifier}*/ (previous)).m_modifier__java_lang_String())) {
   element.classList.remove((/**@type {!TypedModifier}*/ (previous)).m_modifier__java_lang_String());
  }
  if (!$Equality.$same(assignment, null)) {
   assignment.m_run__void();
  }
  if (!$Equality.$same(current, null) && !j_l_String.m_isEmpty__java_lang_String__boolean((/**@type {!TypedModifier}*/ (current)).m_modifier__java_lang_String())) {
   element.classList.add((/**@type {!TypedModifier}*/ (current)).m_modifier__java_lang_String());
  }
  return builder;
 }
 /** @abstract @nodts @return {?string} */
 m_value__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_modifier__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  TypedModifier.$clinit = () =>{};
  TypedModifier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_style_TypedModifier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_TypedModifier;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
TypedModifier.$markImplementor(/**@type {Function}*/ (TypedModifier));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (TypedModifier), 'org.patternfly.style.TypedModifier');

exports = TypedModifier;

//# sourceMappingURL=TypedModifier.js.map
