goog.module('org.jboss.elemento.intl.Category$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Category>}
 */
class Category extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_intl_Category;
 }
 /** @nodts @return {!Category} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Category();
  $instance.$ctor__org_jboss_elemento_intl_Category__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_intl_Category__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_intl_Category = value;
 }
 /** @nodts @return {!Category} */
 static m_valueOf__java_lang_String__org_jboss_elemento_intl_Category(/** string */ name) {
  Category.$clinit();
  if ($Equality.$same(Category.f_namesToValuesMap__org_jboss_elemento_intl_Category_, null)) {
   Category.f_namesToValuesMap__org_jboss_elemento_intl_Category_ = (/**@type {Map<?string, !Category>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Category.m_values__arrayOf_org_jboss_elemento_intl_Category())));
  }
  return /**@type {Category}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Category.f_namesToValuesMap__org_jboss_elemento_intl_Category_));
 }
 /** @nodts @return {!Array<!Category>} */
 static m_values__arrayOf_org_jboss_elemento_intl_Category() {
  Category.$clinit();
  return /**@type {!Array<!Category>}*/ ($Arrays.$stampType([Category.f_calendar__org_jboss_elemento_intl_Category, Category.f_collation__org_jboss_elemento_intl_Category, Category.f_currency__org_jboss_elemento_intl_Category, Category.f_numberingSystem__org_jboss_elemento_intl_Category, Category.f_timezone__org_jboss_elemento_intl_Category, Category.f_unit__org_jboss_elemento_intl_Category], Category));
 }
 /** @nodts */
 static $clinit() {
  Category.$clinit = () =>{};
  Category.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Category;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Category.$ordinal_calendar__org_jboss_elemento_intl_Category = 0;
/**@const {number} @nodts*/
Category.$ordinal_collation__org_jboss_elemento_intl_Category = 1;
/**@const {number} @nodts*/
Category.$ordinal_currency__org_jboss_elemento_intl_Category = 2;
/**@const {number} @nodts*/
Category.$ordinal_numberingSystem__org_jboss_elemento_intl_Category = 3;
/**@const {number} @nodts*/
Category.$ordinal_timezone__org_jboss_elemento_intl_Category = 4;
/**@const {number} @nodts*/
Category.$ordinal_unit__org_jboss_elemento_intl_Category = 5;
/**@const {!Category} @nodts*/
Category.f_calendar__org_jboss_elemento_intl_Category = /**@pureOrBreakMyCode*/ Category.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('calendar'), Category.$ordinal_calendar__org_jboss_elemento_intl_Category, 'calendar');
/**@const {!Category} @nodts*/
Category.f_collation__org_jboss_elemento_intl_Category = /**@pureOrBreakMyCode*/ Category.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('collation'), Category.$ordinal_collation__org_jboss_elemento_intl_Category, 'collation');
/**@const {!Category} @nodts*/
Category.f_currency__org_jboss_elemento_intl_Category = /**@pureOrBreakMyCode*/ Category.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('currency'), Category.$ordinal_currency__org_jboss_elemento_intl_Category, 'currency');
/**@const {!Category} @nodts*/
Category.f_numberingSystem__org_jboss_elemento_intl_Category = /**@pureOrBreakMyCode*/ Category.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('numberingSystem'), Category.$ordinal_numberingSystem__org_jboss_elemento_intl_Category, 'numberingSystem');
/**@const {!Category} @nodts*/
Category.f_timezone__org_jboss_elemento_intl_Category = /**@pureOrBreakMyCode*/ Category.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('timezone'), Category.$ordinal_timezone__org_jboss_elemento_intl_Category, 'timezone');
/**@const {!Category} @nodts*/
Category.f_unit__org_jboss_elemento_intl_Category = /**@pureOrBreakMyCode*/ Category.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('unit'), Category.$ordinal_unit__org_jboss_elemento_intl_Category, 'unit');
/**@type {Map<?string, !Category>} @nodts*/
Category.f_namesToValuesMap__org_jboss_elemento_intl_Category_;
$Util.$setClassMetadataForEnum(Category, 'org.jboss.elemento.intl.Category');

exports = Category;

//# sourceMappingURL=Category.js.map
