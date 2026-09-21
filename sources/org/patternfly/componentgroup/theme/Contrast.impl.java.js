goog.module('org.patternfly.componentgroup.theme.Contrast$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SystemValue = goog.require('org.patternfly.componentgroup.theme.SystemValue$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let J2clSealedTypeMarker = goog.forwardDeclare('javaemul.internal.J2clSealedTypeMarker');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.componentgroup.theme.Contrast.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @extends {Enum<Contrast>}
 * @implements {SystemValue}
 * @implements {J2clSealedTypeMarker}
 */
class Contrast extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_componentgroup_theme_Contrast;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_componentgroup_theme_Contrast;
 }
 /** @nodts @return {Contrast} */
 static m_fromIdentifier__java_lang_String__org_patternfly_componentgroup_theme_Contrast(/** ?string */ identifier) {
  Contrast.$clinit();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(Contrast.$static_SYSTEM__org_patternfly_componentgroup_theme_Contrast.f_identifier__org_patternfly_componentgroup_theme_Contrast, identifier)) {
   return Contrast.$static_SYSTEM__org_patternfly_componentgroup_theme_Contrast;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(Contrast.$static_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast.f_identifier__org_patternfly_componentgroup_theme_Contrast, identifier)) {
   return Contrast.$static_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(Contrast.$static_GLASS__org_patternfly_componentgroup_theme_Contrast.f_identifier__org_patternfly_componentgroup_theme_Contrast, identifier)) {
   return Contrast.$static_GLASS__org_patternfly_componentgroup_theme_Contrast;
  } else {
   return Contrast.$static_DEFAULT__org_patternfly_componentgroup_theme_Contrast;
  }
 }
 /** @nodts @return {!Contrast} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text) {
  let $instance = new Contrast();
  $instance.$ctor__org_patternfly_componentgroup_theme_Contrast__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, identifier, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_theme_Contrast__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_identifier__org_patternfly_componentgroup_theme_Contrast = identifier;
  this.f_text__org_patternfly_componentgroup_theme_Contrast = text;
 }
 /** @nodts @return {?string} */
 m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme() {
  return this.f_identifier__org_patternfly_componentgroup_theme_Contrast;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_systemValue__boolean() {
  return SystemValue.m_systemValue__$default__org_patternfly_componentgroup_theme_SystemValue__boolean(this);
 }
 /** @nodts @return {!Contrast} */
 static m_valueOf__java_lang_String__org_patternfly_componentgroup_theme_Contrast(/** string */ name) {
  Contrast.$clinit();
  if ($Equality.$same(Contrast.f_namesToValuesMap__org_patternfly_componentgroup_theme_Contrast_, null)) {
   Contrast.f_namesToValuesMap__org_patternfly_componentgroup_theme_Contrast_ = (/**@type {Map<?string, !Contrast>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Contrast.m_values__arrayOf_org_patternfly_componentgroup_theme_Contrast())));
  }
  return /**@type {Contrast}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Contrast.f_namesToValuesMap__org_patternfly_componentgroup_theme_Contrast_));
 }
 /** @nodts @return {!Array<!Contrast>} */
 static m_values__arrayOf_org_patternfly_componentgroup_theme_Contrast() {
  Contrast.$clinit();
  return /**@type {!Array<!Contrast>}*/ ($Arrays.$stampType([Contrast.$static_SYSTEM__org_patternfly_componentgroup_theme_Contrast, Contrast.$static_DEFAULT__org_patternfly_componentgroup_theme_Contrast, Contrast.$static_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast, Contrast.$static_GLASS__org_patternfly_componentgroup_theme_Contrast], Contrast));
 }
 /** @nodts @return {!Contrast} */
 static get f_SYSTEM__org_patternfly_componentgroup_theme_Contrast() {
  return (Contrast.$clinit(), Contrast.$static_SYSTEM__org_patternfly_componentgroup_theme_Contrast);
 }
 /** @nodts @return {!Contrast} */
 static get f_DEFAULT__org_patternfly_componentgroup_theme_Contrast() {
  return (Contrast.$clinit(), Contrast.$static_DEFAULT__org_patternfly_componentgroup_theme_Contrast);
 }
 /** @nodts @return {!Contrast} */
 static get f_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast() {
  return (Contrast.$clinit(), Contrast.$static_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast);
 }
 /** @nodts @return {!Contrast} */
 static get f_GLASS__org_patternfly_componentgroup_theme_Contrast() {
  return (Contrast.$clinit(), Contrast.$static_GLASS__org_patternfly_componentgroup_theme_Contrast);
 }
 /** @nodts */
 static $clinit() {
  Contrast.$clinit = () =>{};
  Contrast.$loadModules();
  Enum.$clinit();
  SystemValue.$clinit();
  Contrast.$static_SYSTEM__org_patternfly_componentgroup_theme_Contrast = $1.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('SYSTEM'), Contrast.$ordinal_SYSTEM__org_patternfly_componentgroup_theme_Contrast, 'contrast-system', 'System');
  Contrast.$static_DEFAULT__org_patternfly_componentgroup_theme_Contrast = Contrast.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DEFAULT'), Contrast.$ordinal_DEFAULT__org_patternfly_componentgroup_theme_Contrast, 'contrast-default', 'Default');
  Contrast.$static_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast = Contrast.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('HIGH_CONTRAST'), Contrast.$ordinal_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast, 'contrast-high', 'High contrast');
  Contrast.$static_GLASS__org_patternfly_componentgroup_theme_Contrast = Contrast.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('GLASS'), Contrast.$ordinal_GLASS__org_patternfly_componentgroup_theme_Contrast, 'contrast-glass', 'Glass');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Contrast;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.componentgroup.theme.Contrast.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Contrast.$ordinal_SYSTEM__org_patternfly_componentgroup_theme_Contrast = 0;
/**@const {number} @nodts*/
Contrast.$ordinal_DEFAULT__org_patternfly_componentgroup_theme_Contrast = 1;
/**@const {number} @nodts*/
Contrast.$ordinal_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast = 2;
/**@const {number} @nodts*/
Contrast.$ordinal_GLASS__org_patternfly_componentgroup_theme_Contrast = 3;
/**@private {!Contrast} @nodts*/
Contrast.$static_SYSTEM__org_patternfly_componentgroup_theme_Contrast;
/**@private {!Contrast} @nodts*/
Contrast.$static_DEFAULT__org_patternfly_componentgroup_theme_Contrast;
/**@private {!Contrast} @nodts*/
Contrast.$static_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast;
/**@private {!Contrast} @nodts*/
Contrast.$static_GLASS__org_patternfly_componentgroup_theme_Contrast;
/**@type {Map<?string, !Contrast>} @nodts*/
Contrast.f_namesToValuesMap__org_patternfly_componentgroup_theme_Contrast_;
SystemValue.$markImplementor(Contrast);
$Util.$setClassMetadataForEnum(Contrast, 'org.patternfly.componentgroup.theme.Contrast');

exports = Contrast;

//# sourceMappingURL=Contrast.js.map
