goog.module('org.patternfly.component.accordion.AccordionType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<AccordionType>}
 */
class AccordionType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!AccordionType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new AccordionType();
  $instance.$ctor__org_patternfly_component_accordion_AccordionType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_accordion_AccordionType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!AccordionType} */
 static m_valueOf__java_lang_String__org_patternfly_component_accordion_AccordionType(/** string */ name) {
  AccordionType.$clinit();
  if ($Equality.$same(AccordionType.f_namesToValuesMap__org_patternfly_component_accordion_AccordionType_, null)) {
   AccordionType.f_namesToValuesMap__org_patternfly_component_accordion_AccordionType_ = (/**@type {Map<?string, !AccordionType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(AccordionType.m_values__arrayOf_org_patternfly_component_accordion_AccordionType())));
  }
  return /**@type {AccordionType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, AccordionType.f_namesToValuesMap__org_patternfly_component_accordion_AccordionType_));
 }
 /** @nodts @return {!Array<!AccordionType>} */
 static m_values__arrayOf_org_patternfly_component_accordion_AccordionType() {
  AccordionType.$clinit();
  return /**@type {!Array<!AccordionType>}*/ ($Arrays.$stampType([AccordionType.f_dl__org_patternfly_component_accordion_AccordionType, AccordionType.f_div__org_patternfly_component_accordion_AccordionType], AccordionType));
 }
 /** @nodts */
 static $clinit() {
  AccordionType.$clinit = () =>{};
  AccordionType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AccordionType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
AccordionType.$ordinal_dl__org_patternfly_component_accordion_AccordionType = 0;
/**@const {number} @nodts*/
AccordionType.$ordinal_div__org_patternfly_component_accordion_AccordionType = 1;
/**@const {!AccordionType} @nodts*/
AccordionType.f_dl__org_patternfly_component_accordion_AccordionType = /**@pureOrBreakMyCode*/ AccordionType.$create__java_lang_String__int($Util.$makeEnumName('dl'), AccordionType.$ordinal_dl__org_patternfly_component_accordion_AccordionType);
/**@const {!AccordionType} @nodts*/
AccordionType.f_div__org_patternfly_component_accordion_AccordionType = /**@pureOrBreakMyCode*/ AccordionType.$create__java_lang_String__int($Util.$makeEnumName('div'), AccordionType.$ordinal_div__org_patternfly_component_accordion_AccordionType);
/**@type {Map<?string, !AccordionType>} @nodts*/
AccordionType.f_namesToValuesMap__org_patternfly_component_accordion_AccordionType_;
$Util.$setClassMetadataForEnum(AccordionType, 'org.patternfly.component.accordion.AccordionType');

exports = AccordionType;

//# sourceMappingURL=AccordionType.js.map
