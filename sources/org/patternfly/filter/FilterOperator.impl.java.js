goog.module('org.patternfly.filter.FilterOperator$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<FilterOperator>}
 */
class FilterOperator extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!FilterOperator} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new FilterOperator();
  $instance.$ctor__org_patternfly_filter_FilterOperator__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_filter_FilterOperator__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!FilterOperator} */
 static m_valueOf__java_lang_String__org_patternfly_filter_FilterOperator(/** string */ name) {
  FilterOperator.$clinit();
  if ($Equality.$same(FilterOperator.f_namesToValuesMap__org_patternfly_filter_FilterOperator_, null)) {
   FilterOperator.f_namesToValuesMap__org_patternfly_filter_FilterOperator_ = (/**@type {Map<?string, !FilterOperator>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(FilterOperator.m_values__arrayOf_org_patternfly_filter_FilterOperator())));
  }
  return /**@type {FilterOperator}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, FilterOperator.f_namesToValuesMap__org_patternfly_filter_FilterOperator_));
 }
 /** @nodts @return {!Array<!FilterOperator>} */
 static m_values__arrayOf_org_patternfly_filter_FilterOperator() {
  FilterOperator.$clinit();
  return /**@type {!Array<!FilterOperator>}*/ ($Arrays.$stampType([FilterOperator.f_AND__org_patternfly_filter_FilterOperator, FilterOperator.f_OR__org_patternfly_filter_FilterOperator], FilterOperator));
 }
 /** @nodts */
 static $clinit() {
  FilterOperator.$clinit = () =>{};
  FilterOperator.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
FilterOperator.$ordinal_AND__org_patternfly_filter_FilterOperator = 0;
/**@const {number} @nodts*/
FilterOperator.$ordinal_OR__org_patternfly_filter_FilterOperator = 1;
/**@const {!FilterOperator} @nodts*/
FilterOperator.f_AND__org_patternfly_filter_FilterOperator = /**@pureOrBreakMyCode*/ FilterOperator.$create__java_lang_String__int($Util.$makeEnumName('AND'), FilterOperator.$ordinal_AND__org_patternfly_filter_FilterOperator);
/**@const {!FilterOperator} @nodts*/
FilterOperator.f_OR__org_patternfly_filter_FilterOperator = /**@pureOrBreakMyCode*/ FilterOperator.$create__java_lang_String__int($Util.$makeEnumName('OR'), FilterOperator.$ordinal_OR__org_patternfly_filter_FilterOperator);
/**@type {Map<?string, !FilterOperator>} @nodts*/
FilterOperator.f_namesToValuesMap__org_patternfly_filter_FilterOperator_;
$Util.$setClassMetadataForEnum(FilterOperator, 'org.patternfly.filter.FilterOperator');

exports = FilterOperator;

//# sourceMappingURL=FilterOperator.js.map
