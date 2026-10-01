goog.module('org.patternfly.component.table.TableType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<TableType>}
 */
class TableType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_role__org_patternfly_component_table_TableType;
 }
 /** @nodts @return {!TableType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ role) {
  let $instance = new TableType();
  $instance.$ctor__org_patternfly_component_table_TableType__java_lang_String__int__java_lang_String__void($name, $ordinal, role);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_TableType__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ role) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_role__org_patternfly_component_table_TableType = role;
 }
 /** @nodts @return {!TableType} */
 static m_valueOf__java_lang_String__org_patternfly_component_table_TableType(/** string */ name) {
  TableType.$clinit();
  if ($Equality.$same(TableType.f_namesToValuesMap__org_patternfly_component_table_TableType_, null)) {
   TableType.f_namesToValuesMap__org_patternfly_component_table_TableType_ = (/**@type {Map<?string, !TableType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(TableType.m_values__arrayOf_org_patternfly_component_table_TableType())));
  }
  return /**@type {TableType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, TableType.f_namesToValuesMap__org_patternfly_component_table_TableType_));
 }
 /** @nodts @return {!Array<!TableType>} */
 static m_values__arrayOf_org_patternfly_component_table_TableType() {
  TableType.$clinit();
  return /**@type {!Array<!TableType>}*/ ($Arrays.$stampType([TableType.f_table__org_patternfly_component_table_TableType, TableType.f_treeTable__org_patternfly_component_table_TableType], TableType));
 }
 /** @nodts */
 static $clinit() {
  TableType.$clinit = () =>{};
  TableType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TableType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
TableType.$ordinal_table__org_patternfly_component_table_TableType = 0;
/**@const {number} @nodts*/
TableType.$ordinal_treeTable__org_patternfly_component_table_TableType = 1;
/**@const {!TableType} @nodts*/
TableType.f_table__org_patternfly_component_table_TableType = /**@pureOrBreakMyCode*/ TableType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('table'), TableType.$ordinal_table__org_patternfly_component_table_TableType, 'grid');
/**@const {!TableType} @nodts*/
TableType.f_treeTable__org_patternfly_component_table_TableType = /**@pureOrBreakMyCode*/ TableType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('treeTable'), TableType.$ordinal_treeTable__org_patternfly_component_table_TableType, 'treegrid');
/**@type {Map<?string, !TableType>} @nodts*/
TableType.f_namesToValuesMap__org_patternfly_component_table_TableType_;
$Util.$setClassMetadataForEnum(TableType, 'org.patternfly.component.table.TableType');

exports = TableType;

//# sourceMappingURL=TableType.js.map
