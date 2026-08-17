goog.module('org.jboss.elemento.intl.NumberingSystem$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<NumberingSystem>}
 */
class NumberingSystem extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_NumberingSystem;
 }
 /** @nodts @return {!NumberingSystem} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new NumberingSystem();
  $instance.$ctor__org_jboss_elemento_intl_NumberingSystem__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_NumberingSystem__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_NumberingSystem = value;
 }
 /** @nodts @return {!NumberingSystem} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_NumberingSystem(/** string */ name) {
  NumberingSystem.$clinit();
  if ($Equality.$same(NumberingSystem.f_namesToValuesMap__org_jboss_elemento_intl_NumberingSystem_, null)) {
   NumberingSystem.f_namesToValuesMap__org_jboss_elemento_intl_NumberingSystem_ = (/**@type {Map<?string, !NumberingSystem>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(NumberingSystem.m_values__arrayOf_org_jboss_elemento_intl_NumberingSystem())));
  }
  return /**@type {NumberingSystem}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, NumberingSystem.f_namesToValuesMap__org_jboss_elemento_intl_NumberingSystem_));
 }
 /** @nodts @return {!Array<!NumberingSystem>} */
 static m_values__arrayOf_org_jboss_elemento_intl_NumberingSystem() {
  NumberingSystem.$clinit();
  return /**@type {!Array<!NumberingSystem>}*/ ($Arrays.$stampType([NumberingSystem.f_adlm__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_ahom__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_arab__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_arabext__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_bali__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_beng__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_bhks__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_brah__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_cakm__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_cham__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_deva__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_diak__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_fullwide__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_gara__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_gong__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_gonm__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_gujr__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_gukh__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_guru__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_hanidec__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_hmng__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_hmnp__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_java__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_kali__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_kawi__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_khmr__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_knda__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_krai__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_lana__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_lanatham__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_laoo__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_latn__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_lepc__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_limb__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mathbold__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mathdbl__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mathmono__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mathsanb__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mathsans__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mlym__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_modi__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mong__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mroo__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mtei__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mymr__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mymrepka__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mymrpao__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mymrshan__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_mymrtlng__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_nagm__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_newa__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_nkoo__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_olck__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_onao__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_orya__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_osma__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_outlined__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_rohg__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_saur__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_segment__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_shrd__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_sind__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_sinh__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_sora__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_sund__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_sunu__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_takr__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_talu__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_tamldec__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_telu__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_thai__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_tibt__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_tirh__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_tnsa__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_vaii__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_wara__org_jboss_elemento_intl_NumberingSystem, NumberingSystem.f_wcho__org_jboss_elemento_intl_NumberingSystem], NumberingSystem));
 }
 /** @nodts */
 static $clinit() {
  NumberingSystem.$clinit = () =>{};
  NumberingSystem.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberingSystem;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
NumberingSystem.$ordinal_adlm__org_jboss_elemento_intl_NumberingSystem = 0;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_ahom__org_jboss_elemento_intl_NumberingSystem = 1;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_arab__org_jboss_elemento_intl_NumberingSystem = 2;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_arabext__org_jboss_elemento_intl_NumberingSystem = 3;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_bali__org_jboss_elemento_intl_NumberingSystem = 4;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_beng__org_jboss_elemento_intl_NumberingSystem = 5;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_bhks__org_jboss_elemento_intl_NumberingSystem = 6;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_brah__org_jboss_elemento_intl_NumberingSystem = 7;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_cakm__org_jboss_elemento_intl_NumberingSystem = 8;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_cham__org_jboss_elemento_intl_NumberingSystem = 9;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_deva__org_jboss_elemento_intl_NumberingSystem = 10;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_diak__org_jboss_elemento_intl_NumberingSystem = 11;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_fullwide__org_jboss_elemento_intl_NumberingSystem = 12;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_gara__org_jboss_elemento_intl_NumberingSystem = 13;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_gong__org_jboss_elemento_intl_NumberingSystem = 14;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_gonm__org_jboss_elemento_intl_NumberingSystem = 15;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_gujr__org_jboss_elemento_intl_NumberingSystem = 16;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_gukh__org_jboss_elemento_intl_NumberingSystem = 17;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_guru__org_jboss_elemento_intl_NumberingSystem = 18;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_hanidec__org_jboss_elemento_intl_NumberingSystem = 19;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_hmng__org_jboss_elemento_intl_NumberingSystem = 20;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_hmnp__org_jboss_elemento_intl_NumberingSystem = 21;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_java__org_jboss_elemento_intl_NumberingSystem = 22;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_kali__org_jboss_elemento_intl_NumberingSystem = 23;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_kawi__org_jboss_elemento_intl_NumberingSystem = 24;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_khmr__org_jboss_elemento_intl_NumberingSystem = 25;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_knda__org_jboss_elemento_intl_NumberingSystem = 26;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_krai__org_jboss_elemento_intl_NumberingSystem = 27;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_lana__org_jboss_elemento_intl_NumberingSystem = 28;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_lanatham__org_jboss_elemento_intl_NumberingSystem = 29;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_laoo__org_jboss_elemento_intl_NumberingSystem = 30;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_latn__org_jboss_elemento_intl_NumberingSystem = 31;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_lepc__org_jboss_elemento_intl_NumberingSystem = 32;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_limb__org_jboss_elemento_intl_NumberingSystem = 33;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mathbold__org_jboss_elemento_intl_NumberingSystem = 34;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mathdbl__org_jboss_elemento_intl_NumberingSystem = 35;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mathmono__org_jboss_elemento_intl_NumberingSystem = 36;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mathsanb__org_jboss_elemento_intl_NumberingSystem = 37;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mathsans__org_jboss_elemento_intl_NumberingSystem = 38;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mlym__org_jboss_elemento_intl_NumberingSystem = 39;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_modi__org_jboss_elemento_intl_NumberingSystem = 40;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mong__org_jboss_elemento_intl_NumberingSystem = 41;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mroo__org_jboss_elemento_intl_NumberingSystem = 42;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mtei__org_jboss_elemento_intl_NumberingSystem = 43;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mymr__org_jboss_elemento_intl_NumberingSystem = 44;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mymrepka__org_jboss_elemento_intl_NumberingSystem = 45;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mymrpao__org_jboss_elemento_intl_NumberingSystem = 46;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mymrshan__org_jboss_elemento_intl_NumberingSystem = 47;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_mymrtlng__org_jboss_elemento_intl_NumberingSystem = 48;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_nagm__org_jboss_elemento_intl_NumberingSystem = 49;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_newa__org_jboss_elemento_intl_NumberingSystem = 50;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_nkoo__org_jboss_elemento_intl_NumberingSystem = 51;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_olck__org_jboss_elemento_intl_NumberingSystem = 52;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_onao__org_jboss_elemento_intl_NumberingSystem = 53;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_orya__org_jboss_elemento_intl_NumberingSystem = 54;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_osma__org_jboss_elemento_intl_NumberingSystem = 55;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_outlined__org_jboss_elemento_intl_NumberingSystem = 56;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_rohg__org_jboss_elemento_intl_NumberingSystem = 57;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_saur__org_jboss_elemento_intl_NumberingSystem = 58;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_segment__org_jboss_elemento_intl_NumberingSystem = 59;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_shrd__org_jboss_elemento_intl_NumberingSystem = 60;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_sind__org_jboss_elemento_intl_NumberingSystem = 61;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_sinh__org_jboss_elemento_intl_NumberingSystem = 62;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_sora__org_jboss_elemento_intl_NumberingSystem = 63;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_sund__org_jboss_elemento_intl_NumberingSystem = 64;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_sunu__org_jboss_elemento_intl_NumberingSystem = 65;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_takr__org_jboss_elemento_intl_NumberingSystem = 66;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_talu__org_jboss_elemento_intl_NumberingSystem = 67;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_tamldec__org_jboss_elemento_intl_NumberingSystem = 68;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_telu__org_jboss_elemento_intl_NumberingSystem = 69;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_thai__org_jboss_elemento_intl_NumberingSystem = 70;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_tibt__org_jboss_elemento_intl_NumberingSystem = 71;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_tirh__org_jboss_elemento_intl_NumberingSystem = 72;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_tnsa__org_jboss_elemento_intl_NumberingSystem = 73;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_vaii__org_jboss_elemento_intl_NumberingSystem = 74;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_wara__org_jboss_elemento_intl_NumberingSystem = 75;
/**@const {number} @nodts*/
NumberingSystem.$ordinal_wcho__org_jboss_elemento_intl_NumberingSystem = 76;
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_adlm__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('adlm'), NumberingSystem.$ordinal_adlm__org_jboss_elemento_intl_NumberingSystem, 'adlm');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_ahom__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ahom'), NumberingSystem.$ordinal_ahom__org_jboss_elemento_intl_NumberingSystem, 'ahom');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_arab__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('arab'), NumberingSystem.$ordinal_arab__org_jboss_elemento_intl_NumberingSystem, 'arab');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_arabext__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('arabext'), NumberingSystem.$ordinal_arabext__org_jboss_elemento_intl_NumberingSystem, 'arabext');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_bali__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bali'), NumberingSystem.$ordinal_bali__org_jboss_elemento_intl_NumberingSystem, 'bali');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_beng__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('beng'), NumberingSystem.$ordinal_beng__org_jboss_elemento_intl_NumberingSystem, 'beng');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_bhks__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bhks'), NumberingSystem.$ordinal_bhks__org_jboss_elemento_intl_NumberingSystem, 'bhks');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_brah__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('brah'), NumberingSystem.$ordinal_brah__org_jboss_elemento_intl_NumberingSystem, 'brah');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_cakm__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('cakm'), NumberingSystem.$ordinal_cakm__org_jboss_elemento_intl_NumberingSystem, 'cakm');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_cham__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('cham'), NumberingSystem.$ordinal_cham__org_jboss_elemento_intl_NumberingSystem, 'cham');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_deva__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('deva'), NumberingSystem.$ordinal_deva__org_jboss_elemento_intl_NumberingSystem, 'deva');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_diak__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('diak'), NumberingSystem.$ordinal_diak__org_jboss_elemento_intl_NumberingSystem, 'diak');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_fullwide__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('fullwide'), NumberingSystem.$ordinal_fullwide__org_jboss_elemento_intl_NumberingSystem, 'fullwide');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_gara__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gara'), NumberingSystem.$ordinal_gara__org_jboss_elemento_intl_NumberingSystem, 'gara');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_gong__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gong'), NumberingSystem.$ordinal_gong__org_jboss_elemento_intl_NumberingSystem, 'gong');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_gonm__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gonm'), NumberingSystem.$ordinal_gonm__org_jboss_elemento_intl_NumberingSystem, 'gonm');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_gujr__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gujr'), NumberingSystem.$ordinal_gujr__org_jboss_elemento_intl_NumberingSystem, 'gujr');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_gukh__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gukh'), NumberingSystem.$ordinal_gukh__org_jboss_elemento_intl_NumberingSystem, 'gukh');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_guru__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('guru'), NumberingSystem.$ordinal_guru__org_jboss_elemento_intl_NumberingSystem, 'guru');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_hanidec__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('hanidec'), NumberingSystem.$ordinal_hanidec__org_jboss_elemento_intl_NumberingSystem, 'hanidec');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_hmng__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('hmng'), NumberingSystem.$ordinal_hmng__org_jboss_elemento_intl_NumberingSystem, 'hmng');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_hmnp__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('hmnp'), NumberingSystem.$ordinal_hmnp__org_jboss_elemento_intl_NumberingSystem, 'hmnp');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_java__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('java'), NumberingSystem.$ordinal_java__org_jboss_elemento_intl_NumberingSystem, 'java');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_kali__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('kali'), NumberingSystem.$ordinal_kali__org_jboss_elemento_intl_NumberingSystem, 'kali');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_kawi__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('kawi'), NumberingSystem.$ordinal_kawi__org_jboss_elemento_intl_NumberingSystem, 'kawi');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_khmr__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('khmr'), NumberingSystem.$ordinal_khmr__org_jboss_elemento_intl_NumberingSystem, 'khmr');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_knda__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('knda'), NumberingSystem.$ordinal_knda__org_jboss_elemento_intl_NumberingSystem, 'knda');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_krai__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('krai'), NumberingSystem.$ordinal_krai__org_jboss_elemento_intl_NumberingSystem, 'krai');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_lana__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lana'), NumberingSystem.$ordinal_lana__org_jboss_elemento_intl_NumberingSystem, 'lana');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_lanatham__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lanatham'), NumberingSystem.$ordinal_lanatham__org_jboss_elemento_intl_NumberingSystem, 'lanatham');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_laoo__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('laoo'), NumberingSystem.$ordinal_laoo__org_jboss_elemento_intl_NumberingSystem, 'laoo');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_latn__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('latn'), NumberingSystem.$ordinal_latn__org_jboss_elemento_intl_NumberingSystem, 'latn');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_lepc__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lepc'), NumberingSystem.$ordinal_lepc__org_jboss_elemento_intl_NumberingSystem, 'lepc');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_limb__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('limb'), NumberingSystem.$ordinal_limb__org_jboss_elemento_intl_NumberingSystem, 'limb');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mathbold__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mathbold'), NumberingSystem.$ordinal_mathbold__org_jboss_elemento_intl_NumberingSystem, 'mathbold');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mathdbl__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mathdbl'), NumberingSystem.$ordinal_mathdbl__org_jboss_elemento_intl_NumberingSystem, 'mathdbl');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mathmono__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mathmono'), NumberingSystem.$ordinal_mathmono__org_jboss_elemento_intl_NumberingSystem, 'mathmono');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mathsanb__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mathsanb'), NumberingSystem.$ordinal_mathsanb__org_jboss_elemento_intl_NumberingSystem, 'mathsanb');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mathsans__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mathsans'), NumberingSystem.$ordinal_mathsans__org_jboss_elemento_intl_NumberingSystem, 'mathsans');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mlym__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mlym'), NumberingSystem.$ordinal_mlym__org_jboss_elemento_intl_NumberingSystem, 'mlym');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_modi__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('modi'), NumberingSystem.$ordinal_modi__org_jboss_elemento_intl_NumberingSystem, 'modi');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mong__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mong'), NumberingSystem.$ordinal_mong__org_jboss_elemento_intl_NumberingSystem, 'mong');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mroo__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mroo'), NumberingSystem.$ordinal_mroo__org_jboss_elemento_intl_NumberingSystem, 'mroo');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mtei__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mtei'), NumberingSystem.$ordinal_mtei__org_jboss_elemento_intl_NumberingSystem, 'mtei');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mymr__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mymr'), NumberingSystem.$ordinal_mymr__org_jboss_elemento_intl_NumberingSystem, 'mymr');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mymrepka__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mymrepka'), NumberingSystem.$ordinal_mymrepka__org_jboss_elemento_intl_NumberingSystem, 'mymrepka');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mymrpao__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mymrpao'), NumberingSystem.$ordinal_mymrpao__org_jboss_elemento_intl_NumberingSystem, 'mymrpao');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mymrshan__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mymrshan'), NumberingSystem.$ordinal_mymrshan__org_jboss_elemento_intl_NumberingSystem, 'mymrshan');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_mymrtlng__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('mymrtlng'), NumberingSystem.$ordinal_mymrtlng__org_jboss_elemento_intl_NumberingSystem, 'mymrtlng');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_nagm__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('nagm'), NumberingSystem.$ordinal_nagm__org_jboss_elemento_intl_NumberingSystem, 'nagm');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_newa__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('newa'), NumberingSystem.$ordinal_newa__org_jboss_elemento_intl_NumberingSystem, 'newa');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_nkoo__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('nkoo'), NumberingSystem.$ordinal_nkoo__org_jboss_elemento_intl_NumberingSystem, 'nkoo');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_olck__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('olck'), NumberingSystem.$ordinal_olck__org_jboss_elemento_intl_NumberingSystem, 'olck');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_onao__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('onao'), NumberingSystem.$ordinal_onao__org_jboss_elemento_intl_NumberingSystem, 'onao');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_orya__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('orya'), NumberingSystem.$ordinal_orya__org_jboss_elemento_intl_NumberingSystem, 'orya');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_osma__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('osma'), NumberingSystem.$ordinal_osma__org_jboss_elemento_intl_NumberingSystem, 'osma');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_outlined__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('outlined'), NumberingSystem.$ordinal_outlined__org_jboss_elemento_intl_NumberingSystem, 'outlined');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_rohg__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('rohg'), NumberingSystem.$ordinal_rohg__org_jboss_elemento_intl_NumberingSystem, 'rohg');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_saur__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('saur'), NumberingSystem.$ordinal_saur__org_jboss_elemento_intl_NumberingSystem, 'saur');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_segment__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('segment'), NumberingSystem.$ordinal_segment__org_jboss_elemento_intl_NumberingSystem, 'segment');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_shrd__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('shrd'), NumberingSystem.$ordinal_shrd__org_jboss_elemento_intl_NumberingSystem, 'shrd');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_sind__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sind'), NumberingSystem.$ordinal_sind__org_jboss_elemento_intl_NumberingSystem, 'sind');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_sinh__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sinh'), NumberingSystem.$ordinal_sinh__org_jboss_elemento_intl_NumberingSystem, 'sinh');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_sora__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sora'), NumberingSystem.$ordinal_sora__org_jboss_elemento_intl_NumberingSystem, 'sora');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_sund__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sund'), NumberingSystem.$ordinal_sund__org_jboss_elemento_intl_NumberingSystem, 'sund');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_sunu__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sunu'), NumberingSystem.$ordinal_sunu__org_jboss_elemento_intl_NumberingSystem, 'sunu');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_takr__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('takr'), NumberingSystem.$ordinal_takr__org_jboss_elemento_intl_NumberingSystem, 'takr');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_talu__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('talu'), NumberingSystem.$ordinal_talu__org_jboss_elemento_intl_NumberingSystem, 'talu');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_tamldec__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tamldec'), NumberingSystem.$ordinal_tamldec__org_jboss_elemento_intl_NumberingSystem, 'tamldec');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_telu__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('telu'), NumberingSystem.$ordinal_telu__org_jboss_elemento_intl_NumberingSystem, 'telu');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_thai__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('thai'), NumberingSystem.$ordinal_thai__org_jboss_elemento_intl_NumberingSystem, 'thai');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_tibt__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tibt'), NumberingSystem.$ordinal_tibt__org_jboss_elemento_intl_NumberingSystem, 'tibt');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_tirh__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tirh'), NumberingSystem.$ordinal_tirh__org_jboss_elemento_intl_NumberingSystem, 'tirh');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_tnsa__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tnsa'), NumberingSystem.$ordinal_tnsa__org_jboss_elemento_intl_NumberingSystem, 'tnsa');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_vaii__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('vaii'), NumberingSystem.$ordinal_vaii__org_jboss_elemento_intl_NumberingSystem, 'vaii');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_wara__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('wara'), NumberingSystem.$ordinal_wara__org_jboss_elemento_intl_NumberingSystem, 'wara');
/**@const {!NumberingSystem} @nodts*/
NumberingSystem.f_wcho__org_jboss_elemento_intl_NumberingSystem = /**@pureOrBreakMyCode*/ NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('wcho'), NumberingSystem.$ordinal_wcho__org_jboss_elemento_intl_NumberingSystem, 'wcho');
/**@type {Map<?string, !NumberingSystem>} @nodts*/
NumberingSystem.f_namesToValuesMap__org_jboss_elemento_intl_NumberingSystem_;
$Util.$setClassMetadataForEnum(NumberingSystem, 'org.jboss.elemento.intl.NumberingSystem');

exports = NumberingSystem;

//# sourceMappingURL=NumberingSystem.js.map
