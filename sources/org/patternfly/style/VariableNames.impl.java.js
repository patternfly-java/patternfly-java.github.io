goog.module('org.patternfly.style.VariableNames$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Version = goog.forwardDeclare('org.patternfly.core.Version$impl');

class VariableNames extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!VariableNames} */
 static $create__() {
  VariableNames.$clinit();
  let $instance = new VariableNames();
  $instance.$ctor__org_patternfly_style_VariableNames__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_VariableNames__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 static m_utilName__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ firstElement, /** Array<?string> */ otherElements) {
  VariableNames.$clinit();
  let builder = StringBuilder.$create__();
  if (!$Equality.$same(firstElement, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(firstElement)) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('--pf-').m_append__java_lang_String__java_lang_StringBuilder(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version).m_append__java_lang_String__java_lang_StringBuilder('-u-').m_append__java_lang_String__java_lang_StringBuilder(firstElement);
   if (!$Equality.$same(otherElements, null) && otherElements.length != 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder('--');
    for (let i = 0; i < otherElements.length; i = i + 1 | 0) {
     builder.m_append__java_lang_String__java_lang_StringBuilder(otherElements[i]);
     if (i < (otherElements.length - 1 | 0)) {
      builder.m_append__java_lang_String__java_lang_StringBuilder('--');
     }
    }
   }
  }
  return builder.toString();
 }
 /** @nodts @return {?string} */
 static m_componentName__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ component, /** Array<?string> */ elements) {
  VariableNames.$clinit();
  let builder = StringBuilder.$create__();
  if (!$Equality.$same(component, null) && j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(component, 'pf-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version) + '-')) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('--').m_append__java_lang_String__java_lang_StringBuilder(component);
   if (!$Equality.$same(elements, null) && elements.length != 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder('--');
    for (let i = 0; i < elements.length; i = i + 1 | 0) {
     builder.m_append__java_lang_String__java_lang_StringBuilder(elements[i]);
     if (i < (elements.length - 1 | 0)) {
      builder.m_append__java_lang_String__java_lang_StringBuilder('--');
     }
    }
   }
  }
  return builder.toString();
 }
 /** @nodts */
 static $clinit() {
  VariableNames.$clinit = () =>{};
  VariableNames.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VariableNames;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Version = goog.module.get('org.patternfly.core.Version$impl');
 }
}
$Util.$setClassMetadata(VariableNames, 'org.patternfly.style.VariableNames');

exports = VariableNames;

//# sourceMappingURL=VariableNames.js.map
