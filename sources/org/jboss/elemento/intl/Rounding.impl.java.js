goog.module('org.jboss.elemento.intl.Rounding$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Rounding>}
 */
class Rounding extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Rounding;
 }
 /** @nodts @return {!Rounding} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Rounding();
  $instance.$ctor__org_jboss_elemento_intl_Rounding__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Rounding__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Rounding = value;
 }
 /** @nodts @return {!Rounding} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Rounding(/** string */ name) {
  Rounding.$clinit();
  if ($Equality.$same(Rounding.f_namesToValuesMap__org_jboss_elemento_intl_Rounding_, null)) {
   Rounding.f_namesToValuesMap__org_jboss_elemento_intl_Rounding_ = (/**@type {Map<?string, !Rounding>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Rounding.m_values__arrayOf_org_jboss_elemento_intl_Rounding())));
  }
  return /**@type {Rounding}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Rounding.f_namesToValuesMap__org_jboss_elemento_intl_Rounding_));
 }
 /** @nodts @return {!Array<!Rounding>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Rounding() {
  Rounding.$clinit();
  return /**@type {!Array<!Rounding>}*/ ($Arrays.$stampType([Rounding.f_auto__org_jboss_elemento_intl_Rounding, Rounding.f_ceil__org_jboss_elemento_intl_Rounding, Rounding.f_expand__org_jboss_elemento_intl_Rounding, Rounding.f_floor__org_jboss_elemento_intl_Rounding, Rounding.f_halfCeil__org_jboss_elemento_intl_Rounding, Rounding.f_halfEven__org_jboss_elemento_intl_Rounding, Rounding.f_halfExpand__org_jboss_elemento_intl_Rounding, Rounding.f_halfFloor__org_jboss_elemento_intl_Rounding, Rounding.f_halfTrunc__org_jboss_elemento_intl_Rounding, Rounding.f_lessPrecision__org_jboss_elemento_intl_Rounding, Rounding.f_morePrecision__org_jboss_elemento_intl_Rounding, Rounding.f_trunc__org_jboss_elemento_intl_Rounding], Rounding));
 }
 /** @nodts */
 static $clinit() {
  Rounding.$clinit = () =>{};
  Rounding.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Rounding;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Rounding.$ordinal_auto__org_jboss_elemento_intl_Rounding = 0;
/**@const {number} @nodts*/
Rounding.$ordinal_ceil__org_jboss_elemento_intl_Rounding = 1;
/**@const {number} @nodts*/
Rounding.$ordinal_expand__org_jboss_elemento_intl_Rounding = 2;
/**@const {number} @nodts*/
Rounding.$ordinal_floor__org_jboss_elemento_intl_Rounding = 3;
/**@const {number} @nodts*/
Rounding.$ordinal_halfCeil__org_jboss_elemento_intl_Rounding = 4;
/**@const {number} @nodts*/
Rounding.$ordinal_halfEven__org_jboss_elemento_intl_Rounding = 5;
/**@const {number} @nodts*/
Rounding.$ordinal_halfExpand__org_jboss_elemento_intl_Rounding = 6;
/**@const {number} @nodts*/
Rounding.$ordinal_halfFloor__org_jboss_elemento_intl_Rounding = 7;
/**@const {number} @nodts*/
Rounding.$ordinal_halfTrunc__org_jboss_elemento_intl_Rounding = 8;
/**@const {number} @nodts*/
Rounding.$ordinal_lessPrecision__org_jboss_elemento_intl_Rounding = 9;
/**@const {number} @nodts*/
Rounding.$ordinal_morePrecision__org_jboss_elemento_intl_Rounding = 10;
/**@const {number} @nodts*/
Rounding.$ordinal_trunc__org_jboss_elemento_intl_Rounding = 11;
/**@const {!Rounding} @nodts*/
Rounding.f_auto__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('auto'), Rounding.$ordinal_auto__org_jboss_elemento_intl_Rounding, 'auto');
/**@const {!Rounding} @nodts*/
Rounding.f_ceil__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ceil'), Rounding.$ordinal_ceil__org_jboss_elemento_intl_Rounding, 'ceil');
/**@const {!Rounding} @nodts*/
Rounding.f_expand__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('expand'), Rounding.$ordinal_expand__org_jboss_elemento_intl_Rounding, 'expand');
/**@const {!Rounding} @nodts*/
Rounding.f_floor__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('floor'), Rounding.$ordinal_floor__org_jboss_elemento_intl_Rounding, 'floor');
/**@const {!Rounding} @nodts*/
Rounding.f_halfCeil__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('halfCeil'), Rounding.$ordinal_halfCeil__org_jboss_elemento_intl_Rounding, 'halfCeil');
/**@const {!Rounding} @nodts*/
Rounding.f_halfEven__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('halfEven'), Rounding.$ordinal_halfEven__org_jboss_elemento_intl_Rounding, 'halfEven');
/**@const {!Rounding} @nodts*/
Rounding.f_halfExpand__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('halfExpand'), Rounding.$ordinal_halfExpand__org_jboss_elemento_intl_Rounding, 'halfExpand');
/**@const {!Rounding} @nodts*/
Rounding.f_halfFloor__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('halfFloor'), Rounding.$ordinal_halfFloor__org_jboss_elemento_intl_Rounding, 'halfFloor');
/**@const {!Rounding} @nodts*/
Rounding.f_halfTrunc__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('halfTrunc'), Rounding.$ordinal_halfTrunc__org_jboss_elemento_intl_Rounding, 'halfTrunc');
/**@const {!Rounding} @nodts*/
Rounding.f_lessPrecision__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lessPrecision'), Rounding.$ordinal_lessPrecision__org_jboss_elemento_intl_Rounding, 'lessPrecision');
/**@const {!Rounding} @nodts*/
Rounding.f_morePrecision__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('morePrecision'), Rounding.$ordinal_morePrecision__org_jboss_elemento_intl_Rounding, 'morePrecision');
/**@const {!Rounding} @nodts*/
Rounding.f_trunc__org_jboss_elemento_intl_Rounding = /**@pureOrBreakMyCode*/ Rounding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('trunc'), Rounding.$ordinal_trunc__org_jboss_elemento_intl_Rounding, 'trunc');
/**@type {Map<?string, !Rounding>} @nodts*/
Rounding.f_namesToValuesMap__org_jboss_elemento_intl_Rounding_;
$Util.$setClassMetadataForEnum(Rounding, 'org.jboss.elemento.intl.Rounding');

exports = Rounding;

//# sourceMappingURL=Rounding.js.map
