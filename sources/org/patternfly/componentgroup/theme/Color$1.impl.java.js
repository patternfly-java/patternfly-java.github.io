goog.module('org.patternfly.componentgroup.theme.Color.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Color = goog.require('org.patternfly.componentgroup.theme.Color$impl');

/**
 * @final
 */
class $1 extends Color {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$1} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text, /** ?string */ description, /** ?string */ path) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_patternfly_componentgroup_theme_Color_1__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String__void($name, $ordinal, identifier, text, description, path);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_theme_Color_1__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text, /** ?string */ description, /** ?string */ path) {
  this.$ctor__org_patternfly_componentgroup_theme_Color__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String__void($name, $ordinal, identifier, text, description, path);
 }
 /** @override @nodts @return {boolean} */
 m_systemValue__boolean() {
  return true;
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  Color.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'org.patternfly.componentgroup.theme.Color$1');

exports = $1;

//# sourceMappingURL=Color$1.js.map
