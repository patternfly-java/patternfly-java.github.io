goog.module('org.patternfly.componentgroup.theme.Contrast.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Contrast = goog.require('org.patternfly.componentgroup.theme.Contrast$impl');

/**
 * @final
 */
class $1 extends Contrast {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$1} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_patternfly_componentgroup_theme_Contrast_1__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, identifier, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_theme_Contrast_1__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text) {
  this.$ctor__org_patternfly_componentgroup_theme_Contrast__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, identifier, text);
 }
 /** @override @nodts @return {boolean} */
 m_systemValue__boolean() {
  return true;
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  Contrast.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'org.patternfly.componentgroup.theme.Contrast$1');

exports = $1;

//# sourceMappingURL=Contrast$1.js.map
