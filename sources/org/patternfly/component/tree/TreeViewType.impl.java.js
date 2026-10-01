goog.module('org.patternfly.component.tree.TreeViewType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<TreeViewType>}
 */
class TreeViewType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TreeViewType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new TreeViewType();
  $instance.$ctor__org_patternfly_component_tree_TreeViewType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tree_TreeViewType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!TreeViewType} */
 static m_valueOf__java_lang_String__org_patternfly_component_tree_TreeViewType(/** string */ name) {
  TreeViewType.$clinit();
  if ($Equality.$same(TreeViewType.f_namesToValuesMap__org_patternfly_component_tree_TreeViewType_, null)) {
   TreeViewType.f_namesToValuesMap__org_patternfly_component_tree_TreeViewType_ = (/**@type {Map<?string, !TreeViewType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(TreeViewType.m_values__arrayOf_org_patternfly_component_tree_TreeViewType())));
  }
  return /**@type {TreeViewType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, TreeViewType.f_namesToValuesMap__org_patternfly_component_tree_TreeViewType_));
 }
 /** @nodts @return {!Array<!TreeViewType>} */
 static m_values__arrayOf_org_patternfly_component_tree_TreeViewType() {
  TreeViewType.$clinit();
  return /**@type {!Array<!TreeViewType>}*/ ($Arrays.$stampType([TreeViewType.f_default___org_patternfly_component_tree_TreeViewType, TreeViewType.f_selectableItems__org_patternfly_component_tree_TreeViewType, TreeViewType.f_checkboxes__org_patternfly_component_tree_TreeViewType], TreeViewType));
 }
 /** @nodts */
 static $clinit() {
  TreeViewType.$clinit = () =>{};
  TreeViewType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeViewType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
TreeViewType.$ordinal_default___org_patternfly_component_tree_TreeViewType = 0;
/**@const {number} @nodts*/
TreeViewType.$ordinal_selectableItems__org_patternfly_component_tree_TreeViewType = 1;
/**@const {number} @nodts*/
TreeViewType.$ordinal_checkboxes__org_patternfly_component_tree_TreeViewType = 2;
/**@const {!TreeViewType} @nodts*/
TreeViewType.f_default___org_patternfly_component_tree_TreeViewType = /**@pureOrBreakMyCode*/ TreeViewType.$create__java_lang_String__int($Util.$makeEnumName('default_'), TreeViewType.$ordinal_default___org_patternfly_component_tree_TreeViewType);
/**@const {!TreeViewType} @nodts*/
TreeViewType.f_selectableItems__org_patternfly_component_tree_TreeViewType = /**@pureOrBreakMyCode*/ TreeViewType.$create__java_lang_String__int($Util.$makeEnumName('selectableItems'), TreeViewType.$ordinal_selectableItems__org_patternfly_component_tree_TreeViewType);
/**@const {!TreeViewType} @nodts*/
TreeViewType.f_checkboxes__org_patternfly_component_tree_TreeViewType = /**@pureOrBreakMyCode*/ TreeViewType.$create__java_lang_String__int($Util.$makeEnumName('checkboxes'), TreeViewType.$ordinal_checkboxes__org_patternfly_component_tree_TreeViewType);
/**@type {Map<?string, !TreeViewType>} @nodts*/
TreeViewType.f_namesToValuesMap__org_patternfly_component_tree_TreeViewType_;
$Util.$setClassMetadataForEnum(TreeViewType, 'org.patternfly.component.tree.TreeViewType');

exports = TreeViewType;

//# sourceMappingURL=TreeViewType.js.map
