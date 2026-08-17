goog.module('org.patternfly.component.table.TreeViewGridBreakpoint$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<TreeViewGridBreakpoint>}
 * @implements {TypedModifier}
 */
class TreeViewGridBreakpoint extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_table_TreeViewGridBreakpoint_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_table_TreeViewGridBreakpoint_;
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TreeViewGridBreakpoint();
  $instance.$ctor__org_patternfly_component_table_TreeViewGridBreakpoint__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_TreeViewGridBreakpoint__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_table_TreeViewGridBreakpoint_ = value;
  this.f_modifier__org_patternfly_component_table_TreeViewGridBreakpoint_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_table_TreeViewGridBreakpoint_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_table_TreeViewGridBreakpoint_;
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static m_valueOf__java_lang_String__org_patternfly_component_table_TreeViewGridBreakpoint(/** string */ name) {
  TreeViewGridBreakpoint.$clinit();
  if ($Equality.$same(TreeViewGridBreakpoint.f_namesToValuesMap__org_patternfly_component_table_TreeViewGridBreakpoint_, null)) {
   TreeViewGridBreakpoint.f_namesToValuesMap__org_patternfly_component_table_TreeViewGridBreakpoint_ = (/**@type {Map<?string, !TreeViewGridBreakpoint>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(TreeViewGridBreakpoint.m_values__arrayOf_org_patternfly_component_table_TreeViewGridBreakpoint())));
  }
  return /**@type {TreeViewGridBreakpoint}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, TreeViewGridBreakpoint.f_namesToValuesMap__org_patternfly_component_table_TreeViewGridBreakpoint_));
 }
 /** @nodts @return {!Array<!TreeViewGridBreakpoint>} */
 static m_values__arrayOf_org_patternfly_component_table_TreeViewGridBreakpoint() {
  TreeViewGridBreakpoint.$clinit();
  return /**@type {!Array<!TreeViewGridBreakpoint>}*/ ($Arrays.$stampType([TreeViewGridBreakpoint.$static_empty__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.$static_none__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.$static_always__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.$static_grid__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.$static_gridSm__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.$static_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.$static_gridLg__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.$static_gridXl__org_patternfly_component_table_TreeViewGridBreakpoint, TreeViewGridBreakpoint.$static_gird2xl__org_patternfly_component_table_TreeViewGridBreakpoint], TreeViewGridBreakpoint));
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_empty__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_empty__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_none__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_none__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_always__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_always__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_grid__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_grid__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_gridSm__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_gridSm__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_gridLg__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_gridLg__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_gridXl__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_gridXl__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts @return {!TreeViewGridBreakpoint} */
 static get f_gird2xl__org_patternfly_component_table_TreeViewGridBreakpoint() {
  return (TreeViewGridBreakpoint.$clinit(), TreeViewGridBreakpoint.$static_gird2xl__org_patternfly_component_table_TreeViewGridBreakpoint);
 }
 /** @nodts */
 static $clinit() {
  TreeViewGridBreakpoint.$clinit = () =>{};
  TreeViewGridBreakpoint.$loadModules();
  Enum.$clinit();
  TreeViewGridBreakpoint.$static_empty__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('empty'), TreeViewGridBreakpoint.$ordinal_empty__org_patternfly_component_table_TreeViewGridBreakpoint, '');
  TreeViewGridBreakpoint.$static_none__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), TreeViewGridBreakpoint.$ordinal_none__org_patternfly_component_table_TreeViewGridBreakpoint, 'none');
  TreeViewGridBreakpoint.$static_always__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('always'), TreeViewGridBreakpoint.$ordinal_always__org_patternfly_component_table_TreeViewGridBreakpoint, 'tree-view-grid');
  TreeViewGridBreakpoint.$static_grid__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('grid'), TreeViewGridBreakpoint.$ordinal_grid__org_patternfly_component_table_TreeViewGridBreakpoint, 'tree-view-grid');
  TreeViewGridBreakpoint.$static_gridSm__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gridSm'), TreeViewGridBreakpoint.$ordinal_gridSm__org_patternfly_component_table_TreeViewGridBreakpoint, 'tree-view-grid-sm');
  TreeViewGridBreakpoint.$static_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gridMd'), TreeViewGridBreakpoint.$ordinal_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint, 'tree-view-grid-md');
  TreeViewGridBreakpoint.$static_gridLg__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gridLg'), TreeViewGridBreakpoint.$ordinal_gridLg__org_patternfly_component_table_TreeViewGridBreakpoint, 'tree-view-grid-lg');
  TreeViewGridBreakpoint.$static_gridXl__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gridXl'), TreeViewGridBreakpoint.$ordinal_gridXl__org_patternfly_component_table_TreeViewGridBreakpoint, 'tree-view-grid-xl');
  TreeViewGridBreakpoint.$static_gird2xl__org_patternfly_component_table_TreeViewGridBreakpoint = TreeViewGridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gird2xl'), TreeViewGridBreakpoint.$ordinal_gird2xl__org_patternfly_component_table_TreeViewGridBreakpoint, 'tree-view-grid-2xl');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeViewGridBreakpoint;
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
TreeViewGridBreakpoint.$ordinal_empty__org_patternfly_component_table_TreeViewGridBreakpoint = 0;
/**@const {number} @nodts*/
TreeViewGridBreakpoint.$ordinal_none__org_patternfly_component_table_TreeViewGridBreakpoint = 1;
/**@const {number} @nodts*/
TreeViewGridBreakpoint.$ordinal_always__org_patternfly_component_table_TreeViewGridBreakpoint = 2;
/**@const {number} @nodts*/
TreeViewGridBreakpoint.$ordinal_grid__org_patternfly_component_table_TreeViewGridBreakpoint = 3;
/**@const {number} @nodts*/
TreeViewGridBreakpoint.$ordinal_gridSm__org_patternfly_component_table_TreeViewGridBreakpoint = 4;
/**@const {number} @nodts*/
TreeViewGridBreakpoint.$ordinal_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint = 5;
/**@const {number} @nodts*/
TreeViewGridBreakpoint.$ordinal_gridLg__org_patternfly_component_table_TreeViewGridBreakpoint = 6;
/**@const {number} @nodts*/
TreeViewGridBreakpoint.$ordinal_gridXl__org_patternfly_component_table_TreeViewGridBreakpoint = 7;
/**@const {number} @nodts*/
TreeViewGridBreakpoint.$ordinal_gird2xl__org_patternfly_component_table_TreeViewGridBreakpoint = 8;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_empty__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_none__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_always__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_grid__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_gridSm__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_gridMd__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_gridLg__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_gridXl__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@private {!TreeViewGridBreakpoint} @nodts*/
TreeViewGridBreakpoint.$static_gird2xl__org_patternfly_component_table_TreeViewGridBreakpoint;
/**@type {Map<?string, !TreeViewGridBreakpoint>} @nodts*/
TreeViewGridBreakpoint.f_namesToValuesMap__org_patternfly_component_table_TreeViewGridBreakpoint_;
TypedModifier.$markImplementor(TreeViewGridBreakpoint);
$Util.$setClassMetadataForEnum(TreeViewGridBreakpoint, 'org.patternfly.component.table.TreeViewGridBreakpoint');

exports = TreeViewGridBreakpoint;

//# sourceMappingURL=TreeViewGridBreakpoint.js.map
