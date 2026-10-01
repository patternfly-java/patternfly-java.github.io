goog.module('org.patternfly.style.GridBreakpoint$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<GridBreakpoint>}
 * @implements {TypedModifier}
 */
class GridBreakpoint extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_GridBreakpoint_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_GridBreakpoint_;
 }
 /** @nodts @return {!GridBreakpoint} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new GridBreakpoint();
  $instance.$ctor__org_patternfly_style_GridBreakpoint__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_GridBreakpoint__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_GridBreakpoint_ = value;
  this.f_modifier__org_patternfly_style_GridBreakpoint_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_GridBreakpoint_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_GridBreakpoint_;
 }
 /** @nodts @return {!GridBreakpoint} */
 static m_valueOf__java_lang_String__org_patternfly_style_GridBreakpoint(/** string */ name) {
  GridBreakpoint.$clinit();
  if ($Equality.$same(GridBreakpoint.f_namesToValuesMap__org_patternfly_style_GridBreakpoint_, null)) {
   GridBreakpoint.f_namesToValuesMap__org_patternfly_style_GridBreakpoint_ = (/**@type {Map<?string, !GridBreakpoint>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(GridBreakpoint.m_values__arrayOf_org_patternfly_style_GridBreakpoint())));
  }
  return /**@type {GridBreakpoint}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, GridBreakpoint.f_namesToValuesMap__org_patternfly_style_GridBreakpoint_));
 }
 /** @nodts @return {!Array<!GridBreakpoint>} */
 static m_values__arrayOf_org_patternfly_style_GridBreakpoint() {
  GridBreakpoint.$clinit();
  return /**@type {!Array<!GridBreakpoint>}*/ ($Arrays.$stampType([GridBreakpoint.$static_empty__org_patternfly_style_GridBreakpoint, GridBreakpoint.$static_none__org_patternfly_style_GridBreakpoint, GridBreakpoint.$static_always__org_patternfly_style_GridBreakpoint, GridBreakpoint.$static_grid__org_patternfly_style_GridBreakpoint, GridBreakpoint.$static_gridSm__org_patternfly_style_GridBreakpoint, GridBreakpoint.$static_gridMd__org_patternfly_style_GridBreakpoint, GridBreakpoint.$static_gridLg__org_patternfly_style_GridBreakpoint, GridBreakpoint.$static_gridXl__org_patternfly_style_GridBreakpoint, GridBreakpoint.$static_gird2xl__org_patternfly_style_GridBreakpoint], GridBreakpoint));
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_empty__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_empty__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_none__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_none__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_always__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_always__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_grid__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_grid__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_gridSm__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_gridSm__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_gridMd__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_gridMd__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_gridLg__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_gridLg__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_gridXl__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_gridXl__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts @return {!GridBreakpoint} */
 static get f_gird2xl__org_patternfly_style_GridBreakpoint() {
  return (GridBreakpoint.$clinit(), GridBreakpoint.$static_gird2xl__org_patternfly_style_GridBreakpoint);
 }
 /** @nodts */
 static $clinit() {
  GridBreakpoint.$clinit = () =>{};
  GridBreakpoint.$loadModules();
  Enum.$clinit();
  GridBreakpoint.$static_empty__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('empty'), GridBreakpoint.$ordinal_empty__org_patternfly_style_GridBreakpoint, '');
  GridBreakpoint.$static_none__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), GridBreakpoint.$ordinal_none__org_patternfly_style_GridBreakpoint, 'grid-none');
  GridBreakpoint.$static_always__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('always'), GridBreakpoint.$ordinal_always__org_patternfly_style_GridBreakpoint, 'grid');
  GridBreakpoint.$static_grid__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('grid'), GridBreakpoint.$ordinal_grid__org_patternfly_style_GridBreakpoint, 'grid');
  GridBreakpoint.$static_gridSm__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gridSm'), GridBreakpoint.$ordinal_gridSm__org_patternfly_style_GridBreakpoint, 'grid-sm');
  GridBreakpoint.$static_gridMd__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gridMd'), GridBreakpoint.$ordinal_gridMd__org_patternfly_style_GridBreakpoint, 'grid-md');
  GridBreakpoint.$static_gridLg__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gridLg'), GridBreakpoint.$ordinal_gridLg__org_patternfly_style_GridBreakpoint, 'grid-lg');
  GridBreakpoint.$static_gridXl__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gridXl'), GridBreakpoint.$ordinal_gridXl__org_patternfly_style_GridBreakpoint, 'grid-xl');
  GridBreakpoint.$static_gird2xl__org_patternfly_style_GridBreakpoint = GridBreakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gird2xl'), GridBreakpoint.$ordinal_gird2xl__org_patternfly_style_GridBreakpoint, 'grid-2xl');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GridBreakpoint;
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
GridBreakpoint.$ordinal_empty__org_patternfly_style_GridBreakpoint = 0;
/**@const {number} @nodts*/
GridBreakpoint.$ordinal_none__org_patternfly_style_GridBreakpoint = 1;
/**@const {number} @nodts*/
GridBreakpoint.$ordinal_always__org_patternfly_style_GridBreakpoint = 2;
/**@const {number} @nodts*/
GridBreakpoint.$ordinal_grid__org_patternfly_style_GridBreakpoint = 3;
/**@const {number} @nodts*/
GridBreakpoint.$ordinal_gridSm__org_patternfly_style_GridBreakpoint = 4;
/**@const {number} @nodts*/
GridBreakpoint.$ordinal_gridMd__org_patternfly_style_GridBreakpoint = 5;
/**@const {number} @nodts*/
GridBreakpoint.$ordinal_gridLg__org_patternfly_style_GridBreakpoint = 6;
/**@const {number} @nodts*/
GridBreakpoint.$ordinal_gridXl__org_patternfly_style_GridBreakpoint = 7;
/**@const {number} @nodts*/
GridBreakpoint.$ordinal_gird2xl__org_patternfly_style_GridBreakpoint = 8;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_empty__org_patternfly_style_GridBreakpoint;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_none__org_patternfly_style_GridBreakpoint;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_always__org_patternfly_style_GridBreakpoint;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_grid__org_patternfly_style_GridBreakpoint;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_gridSm__org_patternfly_style_GridBreakpoint;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_gridMd__org_patternfly_style_GridBreakpoint;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_gridLg__org_patternfly_style_GridBreakpoint;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_gridXl__org_patternfly_style_GridBreakpoint;
/**@private {!GridBreakpoint} @nodts*/
GridBreakpoint.$static_gird2xl__org_patternfly_style_GridBreakpoint;
/**@type {Map<?string, !GridBreakpoint>} @nodts*/
GridBreakpoint.f_namesToValuesMap__org_patternfly_style_GridBreakpoint_;
TypedModifier.$markImplementor(GridBreakpoint);
$Util.$setClassMetadataForEnum(GridBreakpoint, 'org.patternfly.style.GridBreakpoint');

exports = GridBreakpoint;

//# sourceMappingURL=GridBreakpoint.js.map
