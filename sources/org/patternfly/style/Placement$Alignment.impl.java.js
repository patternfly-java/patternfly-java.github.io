goog.module('org.patternfly.style.Placement.Alignment$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Alignment>}
 */
class Alignment extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Alignment} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Alignment();
  $instance.$ctor__org_patternfly_style_Placement_Alignment__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Placement_Alignment__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Alignment} */
 static m_valueOf__java_lang_String__org_patternfly_style_Placement_Alignment(/** string */ name) {
  if ($Equality.$same(Alignment.f_namesToValuesMap__org_patternfly_style_Placement_Alignment_, null)) {
   Alignment.f_namesToValuesMap__org_patternfly_style_Placement_Alignment_ = (/**@type {Map<?string, !Alignment>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Alignment.m_values__arrayOf_org_patternfly_style_Placement_Alignment())));
  }
  return /**@type {Alignment}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Alignment.f_namesToValuesMap__org_patternfly_style_Placement_Alignment_));
 }
 /** @nodts @return {!Array<!Alignment>} */
 static m_values__arrayOf_org_patternfly_style_Placement_Alignment() {
  return /**@type {!Array<!Alignment>}*/ ($Arrays.$stampType([Alignment.f_NONE__org_patternfly_style_Placement_Alignment, Alignment.f_START__org_patternfly_style_Placement_Alignment, Alignment.f_END__org_patternfly_style_Placement_Alignment], Alignment));
 }
 /** @nodts */
 static $clinit() {
  Alignment.$clinit = () =>{};
  Alignment.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Alignment;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Alignment.$ordinal_NONE__org_patternfly_style_Placement_Alignment = 0;
/**@const {number} @nodts*/
Alignment.$ordinal_START__org_patternfly_style_Placement_Alignment = 1;
/**@const {number} @nodts*/
Alignment.$ordinal_END__org_patternfly_style_Placement_Alignment = 2;
/**@const {!Alignment} @nodts*/
Alignment.f_NONE__org_patternfly_style_Placement_Alignment = /**@pureOrBreakMyCode*/ Alignment.$create__java_lang_String__int($Util.$makeEnumName('NONE'), Alignment.$ordinal_NONE__org_patternfly_style_Placement_Alignment);
/**@const {!Alignment} @nodts*/
Alignment.f_START__org_patternfly_style_Placement_Alignment = /**@pureOrBreakMyCode*/ Alignment.$create__java_lang_String__int($Util.$makeEnumName('START'), Alignment.$ordinal_START__org_patternfly_style_Placement_Alignment);
/**@const {!Alignment} @nodts*/
Alignment.f_END__org_patternfly_style_Placement_Alignment = /**@pureOrBreakMyCode*/ Alignment.$create__java_lang_String__int($Util.$makeEnumName('END'), Alignment.$ordinal_END__org_patternfly_style_Placement_Alignment);
/**@type {Map<?string, !Alignment>} @nodts*/
Alignment.f_namesToValuesMap__org_patternfly_style_Placement_Alignment_;
$Util.$setClassMetadataForEnum(Alignment, 'org.patternfly.style.Placement$Alignment');

exports = Alignment;

//# sourceMappingURL=Placement$Alignment.js.map
