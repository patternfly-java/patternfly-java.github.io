goog.module('org.patternfly.layout.LayoutType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<LayoutType>}
 */
class LayoutType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_layout_LayoutType;
  /**@type {?string} @nodts*/
  this.f_layoutName__org_patternfly_layout_LayoutType;
 }
 /** @nodts @return {!LayoutType} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ id, /** ?string */ layoutName) {
  let $instance = new LayoutType();
  $instance.$ctor__org_patternfly_layout_LayoutType__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, id, layoutName);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_LayoutType__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ id, /** ?string */ layoutName) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_id__org_patternfly_layout_LayoutType = id;
  this.f_layoutName__org_patternfly_layout_LayoutType = layoutName;
 }
 /** @nodts @return {!LayoutType} */
 static m_valueOf__java_lang_String__org_patternfly_layout_LayoutType(/** string */ name) {
  LayoutType.$clinit();
  if ($Equality.$same(LayoutType.f_namesToValuesMap__org_patternfly_layout_LayoutType_, null)) {
   LayoutType.f_namesToValuesMap__org_patternfly_layout_LayoutType_ = (/**@type {Map<?string, !LayoutType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(LayoutType.m_values__arrayOf_org_patternfly_layout_LayoutType())));
  }
  return /**@type {LayoutType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, LayoutType.f_namesToValuesMap__org_patternfly_layout_LayoutType_));
 }
 /** @nodts @return {!Array<!LayoutType>} */
 static m_values__arrayOf_org_patternfly_layout_LayoutType() {
  LayoutType.$clinit();
  return /**@type {!Array<!LayoutType>}*/ ($Arrays.$stampType([LayoutType.f_Bullseye__org_patternfly_layout_LayoutType, LayoutType.f_Flex__org_patternfly_layout_LayoutType, LayoutType.f_Gallery__org_patternfly_layout_LayoutType, LayoutType.f_Grid__org_patternfly_layout_LayoutType, LayoutType.f_Level__org_patternfly_layout_LayoutType, LayoutType.f_Split__org_patternfly_layout_LayoutType, LayoutType.f_Stack__org_patternfly_layout_LayoutType], LayoutType));
 }
 /** @nodts */
 static $clinit() {
  LayoutType.$clinit = () =>{};
  LayoutType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LayoutType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
LayoutType.$ordinal_Bullseye__org_patternfly_layout_LayoutType = 0;
/**@const {number} @nodts*/
LayoutType.$ordinal_Flex__org_patternfly_layout_LayoutType = 1;
/**@const {number} @nodts*/
LayoutType.$ordinal_Gallery__org_patternfly_layout_LayoutType = 2;
/**@const {number} @nodts*/
LayoutType.$ordinal_Grid__org_patternfly_layout_LayoutType = 3;
/**@const {number} @nodts*/
LayoutType.$ordinal_Level__org_patternfly_layout_LayoutType = 4;
/**@const {number} @nodts*/
LayoutType.$ordinal_Split__org_patternfly_layout_LayoutType = 5;
/**@const {number} @nodts*/
LayoutType.$ordinal_Stack__org_patternfly_layout_LayoutType = 6;
/**@const {!LayoutType} @nodts*/
LayoutType.f_Bullseye__org_patternfly_layout_LayoutType = /**@pureOrBreakMyCode*/ LayoutType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Bullseye'), LayoutType.$ordinal_Bullseye__org_patternfly_layout_LayoutType, 'be', 'PF6/Layout/Bullseye');
/**@const {!LayoutType} @nodts*/
LayoutType.f_Flex__org_patternfly_layout_LayoutType = /**@pureOrBreakMyCode*/ LayoutType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Flex'), LayoutType.$ordinal_Flex__org_patternfly_layout_LayoutType, 'fx', 'PF6/Layout/Flex');
/**@const {!LayoutType} @nodts*/
LayoutType.f_Gallery__org_patternfly_layout_LayoutType = /**@pureOrBreakMyCode*/ LayoutType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Gallery'), LayoutType.$ordinal_Gallery__org_patternfly_layout_LayoutType, 'gy', 'PF6/Layout/Gallery');
/**@const {!LayoutType} @nodts*/
LayoutType.f_Grid__org_patternfly_layout_LayoutType = /**@pureOrBreakMyCode*/ LayoutType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Grid'), LayoutType.$ordinal_Grid__org_patternfly_layout_LayoutType, 'gr', 'PF6/Layout/Grid');
/**@const {!LayoutType} @nodts*/
LayoutType.f_Level__org_patternfly_layout_LayoutType = /**@pureOrBreakMyCode*/ LayoutType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Level'), LayoutType.$ordinal_Level__org_patternfly_layout_LayoutType, 'lv', 'PF6/Layout/Level');
/**@const {!LayoutType} @nodts*/
LayoutType.f_Split__org_patternfly_layout_LayoutType = /**@pureOrBreakMyCode*/ LayoutType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Split'), LayoutType.$ordinal_Split__org_patternfly_layout_LayoutType, 'sp', 'PF6/Layout/Split');
/**@const {!LayoutType} @nodts*/
LayoutType.f_Stack__org_patternfly_layout_LayoutType = /**@pureOrBreakMyCode*/ LayoutType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Stack'), LayoutType.$ordinal_Stack__org_patternfly_layout_LayoutType, 'st', 'PF6/Layout/Stack');
/**@type {Map<?string, !LayoutType>} @nodts*/
LayoutType.f_namesToValuesMap__org_patternfly_layout_LayoutType_;
$Util.$setClassMetadataForEnum(LayoutType, 'org.patternfly.layout.LayoutType');

exports = LayoutType;

//# sourceMappingURL=LayoutType.js.map
