goog.module('org.patternfly.componentgroup.theme.Theme$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SystemValue = goog.require('org.patternfly.componentgroup.theme.SystemValue$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Theme>}
 * @implements {SystemValue}
 */
class Theme extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_componentgroup_theme_Theme;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_componentgroup_theme_Theme;
 }
 /** @nodts @return {Theme} */
 static m_fromIdentifier__java_lang_String__org_patternfly_componentgroup_theme_Theme(/** ?string */ identifier) {
  Theme.$clinit();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(Theme.f_FELT__org_patternfly_componentgroup_theme_Theme.f_identifier__org_patternfly_componentgroup_theme_Theme, identifier)) {
   return Theme.f_FELT__org_patternfly_componentgroup_theme_Theme;
  } else {
   return Theme.f_DEFAULT__org_patternfly_componentgroup_theme_Theme;
  }
 }
 /** @nodts @return {!Theme} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text) {
  let $instance = new Theme();
  $instance.$ctor__org_patternfly_componentgroup_theme_Theme__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, identifier, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_theme_Theme__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_identifier__org_patternfly_componentgroup_theme_Theme = identifier;
  this.f_text__org_patternfly_componentgroup_theme_Theme = text;
 }
 /** @nodts @return {?string} */
 m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme() {
  Theme.$clinit();
  return this.f_identifier__org_patternfly_componentgroup_theme_Theme;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_systemValue__boolean() {
  Theme.$clinit();
  return SystemValue.m_systemValue__$default__org_patternfly_componentgroup_theme_SystemValue__boolean(this);
 }
 /** @nodts @return {!Theme} */
 static m_valueOf__java_lang_String__org_patternfly_componentgroup_theme_Theme(/** string */ name) {
  Theme.$clinit();
  if ($Equality.$same(Theme.f_namesToValuesMap__org_patternfly_componentgroup_theme_Theme_, null)) {
   Theme.f_namesToValuesMap__org_patternfly_componentgroup_theme_Theme_ = (/**@type {Map<?string, !Theme>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Theme.m_values__arrayOf_org_patternfly_componentgroup_theme_Theme())));
  }
  return /**@type {Theme}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Theme.f_namesToValuesMap__org_patternfly_componentgroup_theme_Theme_));
 }
 /** @nodts @return {!Array<!Theme>} */
 static m_values__arrayOf_org_patternfly_componentgroup_theme_Theme() {
  Theme.$clinit();
  return /**@type {!Array<!Theme>}*/ ($Arrays.$stampType([Theme.f_DEFAULT__org_patternfly_componentgroup_theme_Theme, Theme.f_FELT__org_patternfly_componentgroup_theme_Theme], Theme));
 }
 /** @nodts */
 static $clinit() {
  Theme.$clinit = () =>{};
  Theme.$loadModules();
  Enum.$clinit();
  SystemValue.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Theme;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Theme.$ordinal_DEFAULT__org_patternfly_componentgroup_theme_Theme = 0;
/**@const {number} @nodts*/
Theme.$ordinal_FELT__org_patternfly_componentgroup_theme_Theme = 1;
/**@const {!Theme} @nodts*/
Theme.f_DEFAULT__org_patternfly_componentgroup_theme_Theme = /**@pureOrBreakMyCode*/ Theme.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DEFAULT'), Theme.$ordinal_DEFAULT__org_patternfly_componentgroup_theme_Theme, 'default', 'Default');
/**@const {!Theme} @nodts*/
Theme.f_FELT__org_patternfly_componentgroup_theme_Theme = /**@pureOrBreakMyCode*/ Theme.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('FELT'), Theme.$ordinal_FELT__org_patternfly_componentgroup_theme_Theme, 'felt', 'Project Felt');
/**@type {Map<?string, !Theme>} @nodts*/
Theme.f_namesToValuesMap__org_patternfly_componentgroup_theme_Theme_;
SystemValue.$markImplementor(Theme);
$Util.$setClassMetadataForEnum(Theme, 'org.patternfly.componentgroup.theme.Theme');

exports = Theme;

//# sourceMappingURL=Theme.js.map
