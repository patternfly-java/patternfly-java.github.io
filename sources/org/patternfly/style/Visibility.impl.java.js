goog.module('org.patternfly.style.Visibility$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Visibility>}
 * @implements {TypedModifier}
 */
class Visibility extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Visibility_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Visibility_;
 }
 /** @nodts @return {!Visibility} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Visibility();
  $instance.$ctor__org_patternfly_style_Visibility__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Visibility__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Visibility_ = value;
  this.f_modifier__org_patternfly_style_Visibility_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Visibility_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Visibility_;
 }
 /** @nodts @return {!Visibility} */
 static m_valueOf__java_lang_String__org_patternfly_style_Visibility(/** string */ name) {
  Visibility.$clinit();
  if ($Equality.$same(Visibility.f_namesToValuesMap__org_patternfly_style_Visibility_, null)) {
   Visibility.f_namesToValuesMap__org_patternfly_style_Visibility_ = (/**@type {Map<?string, !Visibility>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Visibility.m_values__arrayOf_org_patternfly_style_Visibility())));
  }
  return /**@type {Visibility}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Visibility.f_namesToValuesMap__org_patternfly_style_Visibility_));
 }
 /** @nodts @return {!Array<!Visibility>} */
 static m_values__arrayOf_org_patternfly_style_Visibility() {
  Visibility.$clinit();
  return /**@type {!Array<!Visibility>}*/ ($Arrays.$stampType([Visibility.$static_hidden__org_patternfly_style_Visibility, Visibility.$static_visible__org_patternfly_style_Visibility], Visibility));
 }
 /** @nodts @return {!Visibility} */
 static get f_hidden__org_patternfly_style_Visibility() {
  return (Visibility.$clinit(), Visibility.$static_hidden__org_patternfly_style_Visibility);
 }
 /** @nodts @return {!Visibility} */
 static get f_visible__org_patternfly_style_Visibility() {
  return (Visibility.$clinit(), Visibility.$static_visible__org_patternfly_style_Visibility);
 }
 /** @nodts */
 static $clinit() {
  Visibility.$clinit = () =>{};
  Visibility.$loadModules();
  Enum.$clinit();
  Visibility.$static_hidden__org_patternfly_style_Visibility = Visibility.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('hidden'), Visibility.$ordinal_hidden__org_patternfly_style_Visibility, 'hidden');
  Visibility.$static_visible__org_patternfly_style_Visibility = Visibility.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('visible'), Visibility.$ordinal_visible__org_patternfly_style_Visibility, 'visible');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Visibility;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Visibility.$ordinal_hidden__org_patternfly_style_Visibility = 0;
/**@const {number} @nodts*/
Visibility.$ordinal_visible__org_patternfly_style_Visibility = 1;
/**@private {!Visibility} @nodts*/
Visibility.$static_hidden__org_patternfly_style_Visibility;
/**@private {!Visibility} @nodts*/
Visibility.$static_visible__org_patternfly_style_Visibility;
/**@type {Map<?string, !Visibility>} @nodts*/
Visibility.f_namesToValuesMap__org_patternfly_style_Visibility_;
TypedModifier.$markImplementor(Visibility);
$Util.$setClassMetadataForEnum(Visibility, 'org.patternfly.style.Visibility');

exports = Visibility;

//# sourceMappingURL=Visibility.js.map
