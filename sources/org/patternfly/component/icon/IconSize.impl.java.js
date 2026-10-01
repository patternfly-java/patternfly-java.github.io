goog.module('org.patternfly.component.icon.IconSize$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<IconSize>}
 * @implements {TypedModifier}
 */
class IconSize extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_icon_IconSize_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_icon_IconSize_;
 }
 /** @nodts @return {!IconSize} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new IconSize();
  $instance.$ctor__org_patternfly_component_icon_IconSize__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_icon_IconSize__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_icon_IconSize_ = value;
  this.f_modifier__org_patternfly_component_icon_IconSize_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_icon_IconSize_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_icon_IconSize_;
 }
 /** @nodts @return {Size} */
 m_asSize__org_patternfly_style_Size_$pp_org_patternfly_component_icon() {
  if ($Equality.$same(this, IconSize.$static_sm__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_bodySm__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_headingSm__org_patternfly_component_icon_IconSize)) {
   return Size.f_sm__org_patternfly_style_Size;
  } else if ($Equality.$same(this, IconSize.$static_md__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_bodyDefault__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_headingMd__org_patternfly_component_icon_IconSize)) {
   return Size.f_md__org_patternfly_style_Size;
  } else if ($Equality.$same(this, IconSize.$static_lg__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_bodyLg__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_headingLg__org_patternfly_component_icon_IconSize)) {
   return Size.f_lg__org_patternfly_style_Size;
  } else if ($Equality.$same(this, IconSize.$static_xl__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_headingXl__org_patternfly_component_icon_IconSize)) {
   return Size.f_xl__org_patternfly_style_Size;
  } else if ($Equality.$same(this, IconSize.$static__2xl__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_heading2xl__org_patternfly_component_icon_IconSize)) {
   return Size.f__2xl__org_patternfly_style_Size;
  } else if ($Equality.$same(this, IconSize.$static__3xl__org_patternfly_component_icon_IconSize) || $Equality.$same(this, IconSize.$static_heading3xl__org_patternfly_component_icon_IconSize)) {
   return Size.f__3xl__org_patternfly_style_Size;
  }
  return Size.f_sm__org_patternfly_style_Size;
 }
 /** @nodts @return {!IconSize} */
 static m_valueOf__java_lang_String__org_patternfly_component_icon_IconSize(/** string */ name) {
  IconSize.$clinit();
  if ($Equality.$same(IconSize.f_namesToValuesMap__org_patternfly_component_icon_IconSize_, null)) {
   IconSize.f_namesToValuesMap__org_patternfly_component_icon_IconSize_ = (/**@type {Map<?string, !IconSize>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(IconSize.m_values__arrayOf_org_patternfly_component_icon_IconSize())));
  }
  return /**@type {IconSize}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, IconSize.f_namesToValuesMap__org_patternfly_component_icon_IconSize_));
 }
 /** @nodts @return {!Array<!IconSize>} */
 static m_values__arrayOf_org_patternfly_component_icon_IconSize() {
  IconSize.$clinit();
  return /**@type {!Array<!IconSize>}*/ ($Arrays.$stampType([IconSize.$static_sm__org_patternfly_component_icon_IconSize, IconSize.$static_md__org_patternfly_component_icon_IconSize, IconSize.$static_lg__org_patternfly_component_icon_IconSize, IconSize.$static_xl__org_patternfly_component_icon_IconSize, IconSize.$static__2xl__org_patternfly_component_icon_IconSize, IconSize.$static__3xl__org_patternfly_component_icon_IconSize, IconSize.$static_bodySm__org_patternfly_component_icon_IconSize, IconSize.$static_bodyDefault__org_patternfly_component_icon_IconSize, IconSize.$static_bodyLg__org_patternfly_component_icon_IconSize, IconSize.$static_headingSm__org_patternfly_component_icon_IconSize, IconSize.$static_headingLg__org_patternfly_component_icon_IconSize, IconSize.$static_headingMd__org_patternfly_component_icon_IconSize, IconSize.$static_headingXl__org_patternfly_component_icon_IconSize, IconSize.$static_heading2xl__org_patternfly_component_icon_IconSize, IconSize.$static_heading3xl__org_patternfly_component_icon_IconSize], IconSize));
 }
 /** @nodts @return {!IconSize} */
 static get f_sm__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_sm__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_md__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_md__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_lg__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_lg__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_xl__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_xl__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f__2xl__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static__2xl__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f__3xl__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static__3xl__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_bodySm__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_bodySm__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_bodyDefault__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_bodyDefault__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_bodyLg__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_bodyLg__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_headingSm__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_headingSm__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_headingLg__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_headingLg__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_headingMd__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_headingMd__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_headingXl__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_headingXl__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_heading2xl__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_heading2xl__org_patternfly_component_icon_IconSize);
 }
 /** @nodts @return {!IconSize} */
 static get f_heading3xl__org_patternfly_component_icon_IconSize() {
  return (IconSize.$clinit(), IconSize.$static_heading3xl__org_patternfly_component_icon_IconSize);
 }
 /** @nodts */
 static $clinit() {
  IconSize.$clinit = () =>{};
  IconSize.$loadModules();
  Enum.$clinit();
  IconSize.$static_sm__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sm'), IconSize.$ordinal_sm__org_patternfly_component_icon_IconSize, 'sm');
  IconSize.$static_md__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('md'), IconSize.$ordinal_md__org_patternfly_component_icon_IconSize, 'md');
  IconSize.$static_lg__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lg'), IconSize.$ordinal_lg__org_patternfly_component_icon_IconSize, 'lg');
  IconSize.$static_xl__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xl'), IconSize.$ordinal_xl__org_patternfly_component_icon_IconSize, 'xl');
  IconSize.$static__2xl__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2xl'), IconSize.$ordinal__2xl__org_patternfly_component_icon_IconSize, '2xl');
  IconSize.$static__3xl__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_3xl'), IconSize.$ordinal__3xl__org_patternfly_component_icon_IconSize, '3xl');
  IconSize.$static_bodySm__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bodySm'), IconSize.$ordinal_bodySm__org_patternfly_component_icon_IconSize, 'body-sm');
  IconSize.$static_bodyDefault__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bodyDefault'), IconSize.$ordinal_bodyDefault__org_patternfly_component_icon_IconSize, 'body-default');
  IconSize.$static_bodyLg__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bodyLg'), IconSize.$ordinal_bodyLg__org_patternfly_component_icon_IconSize, 'body-lg');
  IconSize.$static_headingSm__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('headingSm'), IconSize.$ordinal_headingSm__org_patternfly_component_icon_IconSize, 'heading-sm');
  IconSize.$static_headingLg__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('headingLg'), IconSize.$ordinal_headingLg__org_patternfly_component_icon_IconSize, 'heading-lg');
  IconSize.$static_headingMd__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('headingMd'), IconSize.$ordinal_headingMd__org_patternfly_component_icon_IconSize, 'heading-md');
  IconSize.$static_headingXl__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('headingXl'), IconSize.$ordinal_headingXl__org_patternfly_component_icon_IconSize, 'heading-xl');
  IconSize.$static_heading2xl__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('heading2xl'), IconSize.$ordinal_heading2xl__org_patternfly_component_icon_IconSize, 'heading-2xl');
  IconSize.$static_heading3xl__org_patternfly_component_icon_IconSize = IconSize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('heading3xl'), IconSize.$ordinal_heading3xl__org_patternfly_component_icon_IconSize, 'heading-3xl');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IconSize;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
IconSize.$ordinal_sm__org_patternfly_component_icon_IconSize = 0;
/**@const {number} @nodts*/
IconSize.$ordinal_md__org_patternfly_component_icon_IconSize = 1;
/**@const {number} @nodts*/
IconSize.$ordinal_lg__org_patternfly_component_icon_IconSize = 2;
/**@const {number} @nodts*/
IconSize.$ordinal_xl__org_patternfly_component_icon_IconSize = 3;
/**@const {number} @nodts*/
IconSize.$ordinal__2xl__org_patternfly_component_icon_IconSize = 4;
/**@const {number} @nodts*/
IconSize.$ordinal__3xl__org_patternfly_component_icon_IconSize = 5;
/**@const {number} @nodts*/
IconSize.$ordinal_bodySm__org_patternfly_component_icon_IconSize = 6;
/**@const {number} @nodts*/
IconSize.$ordinal_bodyDefault__org_patternfly_component_icon_IconSize = 7;
/**@const {number} @nodts*/
IconSize.$ordinal_bodyLg__org_patternfly_component_icon_IconSize = 8;
/**@const {number} @nodts*/
IconSize.$ordinal_headingSm__org_patternfly_component_icon_IconSize = 9;
/**@const {number} @nodts*/
IconSize.$ordinal_headingLg__org_patternfly_component_icon_IconSize = 10;
/**@const {number} @nodts*/
IconSize.$ordinal_headingMd__org_patternfly_component_icon_IconSize = 11;
/**@const {number} @nodts*/
IconSize.$ordinal_headingXl__org_patternfly_component_icon_IconSize = 12;
/**@const {number} @nodts*/
IconSize.$ordinal_heading2xl__org_patternfly_component_icon_IconSize = 13;
/**@const {number} @nodts*/
IconSize.$ordinal_heading3xl__org_patternfly_component_icon_IconSize = 14;
/**@private {!IconSize} @nodts*/
IconSize.$static_sm__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_md__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_lg__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_xl__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static__2xl__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static__3xl__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_bodySm__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_bodyDefault__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_bodyLg__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_headingSm__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_headingLg__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_headingMd__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_headingXl__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_heading2xl__org_patternfly_component_icon_IconSize;
/**@private {!IconSize} @nodts*/
IconSize.$static_heading3xl__org_patternfly_component_icon_IconSize;
/**@type {Map<?string, !IconSize>} @nodts*/
IconSize.f_namesToValuesMap__org_patternfly_component_icon_IconSize_;
TypedModifier.$markImplementor(IconSize);
$Util.$setClassMetadataForEnum(IconSize, 'org.patternfly.component.icon.IconSize');

exports = IconSize;

//# sourceMappingURL=IconSize.js.map
