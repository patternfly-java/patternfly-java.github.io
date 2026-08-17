goog.module('org.patternfly.component.ComponentType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<ComponentType>}
 */
class ComponentType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_ComponentType;
  /**@type {?string} @nodts*/
  this.f_componentName__org_patternfly_component_ComponentType;
 }
 /** @nodts @return {!ComponentType} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ id, /** ?string */ componentName) {
  let $instance = new ComponentType();
  $instance.$ctor__org_patternfly_component_ComponentType__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, id, componentName);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ComponentType__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ id, /** ?string */ componentName) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_id__org_patternfly_component_ComponentType = id;
  this.f_componentName__org_patternfly_component_ComponentType = componentName;
 }
 /** @nodts @return {!ComponentType} */
 static m_valueOf__java_lang_String__org_patternfly_component_ComponentType(/** string */ name) {
  ComponentType.$clinit();
  if ($Equality.$same(ComponentType.f_namesToValuesMap__org_patternfly_component_ComponentType_, null)) {
   ComponentType.f_namesToValuesMap__org_patternfly_component_ComponentType_ = (/**@type {Map<?string, !ComponentType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ComponentType.m_values__arrayOf_org_patternfly_component_ComponentType())));
  }
  return /**@type {ComponentType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ComponentType.f_namesToValuesMap__org_patternfly_component_ComponentType_));
 }
 /** @nodts @return {!Array<!ComponentType>} */
 static m_values__arrayOf_org_patternfly_component_ComponentType() {
  ComponentType.$clinit();
  return /**@type {!Array<!ComponentType>}*/ ($Arrays.$stampType([ComponentType.f__Template__org_patternfly_component_ComponentType, ComponentType.f_Accordion__org_patternfly_component_ComponentType, ComponentType.f_ActionList__org_patternfly_component_ComponentType, ComponentType.f_Alert__org_patternfly_component_ComponentType, ComponentType.f_AlertGroup__org_patternfly_component_ComponentType, ComponentType.f_Avatar__org_patternfly_component_ComponentType, ComponentType.f_Backdrop__org_patternfly_component_ComponentType, ComponentType.f_BackToTop__org_patternfly_component_ComponentType, ComponentType.f_Badge__org_patternfly_component_ComponentType, ComponentType.f_Banner__org_patternfly_component_ComponentType, ComponentType.f_Brand__org_patternfly_component_ComponentType, ComponentType.f_Breadcrumb__org_patternfly_component_ComponentType, ComponentType.f_Button__org_patternfly_component_ComponentType, ComponentType.f_Card__org_patternfly_component_ComponentType, ComponentType.f_Checkbox__org_patternfly_component_ComponentType, ComponentType.f_CodeBlock__org_patternfly_component_ComponentType, ComponentType.f_CodeEditor__org_patternfly_component_ComponentType, ComponentType.f_Content__org_patternfly_component_ComponentType, ComponentType.f_DataList__org_patternfly_component_ComponentType, ComponentType.f_DescriptionList__org_patternfly_component_ComponentType, ComponentType.f_Divider__org_patternfly_component_ComponentType, ComponentType.f_Drawer__org_patternfly_component_ComponentType, ComponentType.f_Dropdown__org_patternfly_component_ComponentType, ComponentType.f_EmptyState__org_patternfly_component_ComponentType, ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType, ComponentType.f_FilterInput__org_patternfly_component_ComponentType, ComponentType.f_Finder__org_patternfly_component_ComponentType, ComponentType.f_Form__org_patternfly_component_ComponentType, ComponentType.f_FormSelect__org_patternfly_component_ComponentType, ComponentType.f_HelperText__org_patternfly_component_ComponentType, ComponentType.f_Hint__org_patternfly_component_ComponentType, ComponentType.f_Icon__org_patternfly_component_ComponentType, ComponentType.f_InputGroup__org_patternfly_component_ComponentType, ComponentType.f_JumpLinks__org_patternfly_component_ComponentType, ComponentType.f_Label__org_patternfly_component_ComponentType, ComponentType.f_LabelGroup__org_patternfly_component_ComponentType, ComponentType.f_List__org_patternfly_component_ComponentType, ComponentType.f_Masthead__org_patternfly_component_ComponentType, ComponentType.f_Menu__org_patternfly_component_ComponentType, ComponentType.f_MenuToggle__org_patternfly_component_ComponentType, ComponentType.f_Modal__org_patternfly_component_ComponentType, ComponentType.f_MultiSelect__org_patternfly_component_ComponentType, ComponentType.f_MultiTypeahead__org_patternfly_component_ComponentType, ComponentType.f_Navigation__org_patternfly_component_ComponentType, ComponentType.f_NotificationBadge__org_patternfly_component_ComponentType, ComponentType.f_NotificationDrawer__org_patternfly_component_ComponentType, ComponentType.f_NumberInput__org_patternfly_component_ComponentType, ComponentType.f_Page__org_patternfly_component_ComponentType, ComponentType.f_PageHeader__org_patternfly_component_ComponentType, ComponentType.f_Panel__org_patternfly_component_ComponentType, ComponentType.f_PopperDropdown__org_patternfly_component_ComponentType, ComponentType.f_PopperMultiSelect__org_patternfly_component_ComponentType, ComponentType.f_PopperMultiTypeahead__org_patternfly_component_ComponentType, ComponentType.f_PopperPopover__org_patternfly_component_ComponentType, ComponentType.f_PopperSingleSelect__org_patternfly_component_ComponentType, ComponentType.f_PopperSingleTypeahead__org_patternfly_component_ComponentType, ComponentType.f_PopperTooltip__org_patternfly_component_ComponentType, ComponentType.f_Popover__org_patternfly_component_ComponentType, ComponentType.f_Progress__org_patternfly_component_ComponentType, ComponentType.f_ProgressStepper__org_patternfly_component_ComponentType, ComponentType.f_Radio__org_patternfly_component_ComponentType, ComponentType.f_SearchInput__org_patternfly_component_ComponentType, ComponentType.f_ServiceCard__org_patternfly_component_ComponentType, ComponentType.f_Sidebar__org_patternfly_component_ComponentType, ComponentType.f_SimpleList__org_patternfly_component_ComponentType, ComponentType.f_SingleSelect__org_patternfly_component_ComponentType, ComponentType.f_SingleTypeahead__org_patternfly_component_ComponentType, ComponentType.f_Skeleton__org_patternfly_component_ComponentType, ComponentType.f_SkipToContent__org_patternfly_component_ComponentType, ComponentType.f_Slider__org_patternfly_component_ComponentType, ComponentType.f_Spinner__org_patternfly_component_ComponentType, ComponentType.f_Switch__org_patternfly_component_ComponentType, ComponentType.f_Tabs__org_patternfly_component_ComponentType, ComponentType.f_Table__org_patternfly_component_ComponentType, ComponentType.f_TextInput__org_patternfly_component_ComponentType, ComponentType.f_TextInputGroup__org_patternfly_component_ComponentType, ComponentType.f_ThemeSelector__org_patternfly_component_ComponentType, ComponentType.f_Timestamp__org_patternfly_component_ComponentType, ComponentType.f_Title__org_patternfly_component_ComponentType, ComponentType.f_ToggleGroup__org_patternfly_component_ComponentType, ComponentType.f_Toolbar__org_patternfly_component_ComponentType, ComponentType.f_Tooltip__org_patternfly_component_ComponentType, ComponentType.f_TreeView__org_patternfly_component_ComponentType, ComponentType.f_Truncate__org_patternfly_component_ComponentType, ComponentType.f_Wizard__org_patternfly_component_ComponentType], ComponentType));
 }
 /** @nodts */
 static $clinit() {
  ComponentType.$clinit = () =>{};
  ComponentType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ComponentType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ComponentType.$ordinal__Template__org_patternfly_component_ComponentType = 0;
/**@const {number} @nodts*/
ComponentType.$ordinal_Accordion__org_patternfly_component_ComponentType = 1;
/**@const {number} @nodts*/
ComponentType.$ordinal_ActionList__org_patternfly_component_ComponentType = 2;
/**@const {number} @nodts*/
ComponentType.$ordinal_Alert__org_patternfly_component_ComponentType = 3;
/**@const {number} @nodts*/
ComponentType.$ordinal_AlertGroup__org_patternfly_component_ComponentType = 4;
/**@const {number} @nodts*/
ComponentType.$ordinal_Avatar__org_patternfly_component_ComponentType = 5;
/**@const {number} @nodts*/
ComponentType.$ordinal_Backdrop__org_patternfly_component_ComponentType = 6;
/**@const {number} @nodts*/
ComponentType.$ordinal_BackToTop__org_patternfly_component_ComponentType = 7;
/**@const {number} @nodts*/
ComponentType.$ordinal_Badge__org_patternfly_component_ComponentType = 8;
/**@const {number} @nodts*/
ComponentType.$ordinal_Banner__org_patternfly_component_ComponentType = 9;
/**@const {number} @nodts*/
ComponentType.$ordinal_Brand__org_patternfly_component_ComponentType = 10;
/**@const {number} @nodts*/
ComponentType.$ordinal_Breadcrumb__org_patternfly_component_ComponentType = 11;
/**@const {number} @nodts*/
ComponentType.$ordinal_Button__org_patternfly_component_ComponentType = 12;
/**@const {number} @nodts*/
ComponentType.$ordinal_Card__org_patternfly_component_ComponentType = 13;
/**@const {number} @nodts*/
ComponentType.$ordinal_Checkbox__org_patternfly_component_ComponentType = 14;
/**@const {number} @nodts*/
ComponentType.$ordinal_CodeBlock__org_patternfly_component_ComponentType = 15;
/**@const {number} @nodts*/
ComponentType.$ordinal_CodeEditor__org_patternfly_component_ComponentType = 16;
/**@const {number} @nodts*/
ComponentType.$ordinal_Content__org_patternfly_component_ComponentType = 17;
/**@const {number} @nodts*/
ComponentType.$ordinal_DataList__org_patternfly_component_ComponentType = 18;
/**@const {number} @nodts*/
ComponentType.$ordinal_DescriptionList__org_patternfly_component_ComponentType = 19;
/**@const {number} @nodts*/
ComponentType.$ordinal_Divider__org_patternfly_component_ComponentType = 20;
/**@const {number} @nodts*/
ComponentType.$ordinal_Drawer__org_patternfly_component_ComponentType = 21;
/**@const {number} @nodts*/
ComponentType.$ordinal_Dropdown__org_patternfly_component_ComponentType = 22;
/**@const {number} @nodts*/
ComponentType.$ordinal_EmptyState__org_patternfly_component_ComponentType = 23;
/**@const {number} @nodts*/
ComponentType.$ordinal_ExpandableSection__org_patternfly_component_ComponentType = 24;
/**@const {number} @nodts*/
ComponentType.$ordinal_FilterInput__org_patternfly_component_ComponentType = 25;
/**@const {number} @nodts*/
ComponentType.$ordinal_Finder__org_patternfly_component_ComponentType = 26;
/**@const {number} @nodts*/
ComponentType.$ordinal_Form__org_patternfly_component_ComponentType = 27;
/**@const {number} @nodts*/
ComponentType.$ordinal_FormSelect__org_patternfly_component_ComponentType = 28;
/**@const {number} @nodts*/
ComponentType.$ordinal_HelperText__org_patternfly_component_ComponentType = 29;
/**@const {number} @nodts*/
ComponentType.$ordinal_Hint__org_patternfly_component_ComponentType = 30;
/**@const {number} @nodts*/
ComponentType.$ordinal_Icon__org_patternfly_component_ComponentType = 31;
/**@const {number} @nodts*/
ComponentType.$ordinal_InputGroup__org_patternfly_component_ComponentType = 32;
/**@const {number} @nodts*/
ComponentType.$ordinal_JumpLinks__org_patternfly_component_ComponentType = 33;
/**@const {number} @nodts*/
ComponentType.$ordinal_Label__org_patternfly_component_ComponentType = 34;
/**@const {number} @nodts*/
ComponentType.$ordinal_LabelGroup__org_patternfly_component_ComponentType = 35;
/**@const {number} @nodts*/
ComponentType.$ordinal_List__org_patternfly_component_ComponentType = 36;
/**@const {number} @nodts*/
ComponentType.$ordinal_Masthead__org_patternfly_component_ComponentType = 37;
/**@const {number} @nodts*/
ComponentType.$ordinal_Menu__org_patternfly_component_ComponentType = 38;
/**@const {number} @nodts*/
ComponentType.$ordinal_MenuToggle__org_patternfly_component_ComponentType = 39;
/**@const {number} @nodts*/
ComponentType.$ordinal_Modal__org_patternfly_component_ComponentType = 40;
/**@const {number} @nodts*/
ComponentType.$ordinal_MultiSelect__org_patternfly_component_ComponentType = 41;
/**@const {number} @nodts*/
ComponentType.$ordinal_MultiTypeahead__org_patternfly_component_ComponentType = 42;
/**@const {number} @nodts*/
ComponentType.$ordinal_Navigation__org_patternfly_component_ComponentType = 43;
/**@const {number} @nodts*/
ComponentType.$ordinal_NotificationBadge__org_patternfly_component_ComponentType = 44;
/**@const {number} @nodts*/
ComponentType.$ordinal_NotificationDrawer__org_patternfly_component_ComponentType = 45;
/**@const {number} @nodts*/
ComponentType.$ordinal_NumberInput__org_patternfly_component_ComponentType = 46;
/**@const {number} @nodts*/
ComponentType.$ordinal_Page__org_patternfly_component_ComponentType = 47;
/**@const {number} @nodts*/
ComponentType.$ordinal_PageHeader__org_patternfly_component_ComponentType = 48;
/**@const {number} @nodts*/
ComponentType.$ordinal_Panel__org_patternfly_component_ComponentType = 49;
/**@const {number} @deprecated @nodts*/
ComponentType.$ordinal_PopperDropdown__org_patternfly_component_ComponentType = 50;
/**@const {number} @deprecated @nodts*/
ComponentType.$ordinal_PopperMultiSelect__org_patternfly_component_ComponentType = 51;
/**@const {number} @deprecated @nodts*/
ComponentType.$ordinal_PopperMultiTypeahead__org_patternfly_component_ComponentType = 52;
/**@const {number} @deprecated @nodts*/
ComponentType.$ordinal_PopperPopover__org_patternfly_component_ComponentType = 53;
/**@const {number} @deprecated @nodts*/
ComponentType.$ordinal_PopperSingleSelect__org_patternfly_component_ComponentType = 54;
/**@const {number} @deprecated @nodts*/
ComponentType.$ordinal_PopperSingleTypeahead__org_patternfly_component_ComponentType = 55;
/**@const {number} @deprecated @nodts*/
ComponentType.$ordinal_PopperTooltip__org_patternfly_component_ComponentType = 56;
/**@const {number} @nodts*/
ComponentType.$ordinal_Popover__org_patternfly_component_ComponentType = 57;
/**@const {number} @nodts*/
ComponentType.$ordinal_Progress__org_patternfly_component_ComponentType = 58;
/**@const {number} @nodts*/
ComponentType.$ordinal_ProgressStepper__org_patternfly_component_ComponentType = 59;
/**@const {number} @nodts*/
ComponentType.$ordinal_Radio__org_patternfly_component_ComponentType = 60;
/**@const {number} @nodts*/
ComponentType.$ordinal_SearchInput__org_patternfly_component_ComponentType = 61;
/**@const {number} @nodts*/
ComponentType.$ordinal_ServiceCard__org_patternfly_component_ComponentType = 62;
/**@const {number} @nodts*/
ComponentType.$ordinal_Sidebar__org_patternfly_component_ComponentType = 63;
/**@const {number} @nodts*/
ComponentType.$ordinal_SimpleList__org_patternfly_component_ComponentType = 64;
/**@const {number} @nodts*/
ComponentType.$ordinal_SingleSelect__org_patternfly_component_ComponentType = 65;
/**@const {number} @nodts*/
ComponentType.$ordinal_SingleTypeahead__org_patternfly_component_ComponentType = 66;
/**@const {number} @nodts*/
ComponentType.$ordinal_Skeleton__org_patternfly_component_ComponentType = 67;
/**@const {number} @nodts*/
ComponentType.$ordinal_SkipToContent__org_patternfly_component_ComponentType = 68;
/**@const {number} @nodts*/
ComponentType.$ordinal_Slider__org_patternfly_component_ComponentType = 69;
/**@const {number} @nodts*/
ComponentType.$ordinal_Spinner__org_patternfly_component_ComponentType = 70;
/**@const {number} @nodts*/
ComponentType.$ordinal_Switch__org_patternfly_component_ComponentType = 71;
/**@const {number} @nodts*/
ComponentType.$ordinal_Tabs__org_patternfly_component_ComponentType = 72;
/**@const {number} @nodts*/
ComponentType.$ordinal_Table__org_patternfly_component_ComponentType = 73;
/**@const {number} @nodts*/
ComponentType.$ordinal_TextInput__org_patternfly_component_ComponentType = 74;
/**@const {number} @nodts*/
ComponentType.$ordinal_TextInputGroup__org_patternfly_component_ComponentType = 75;
/**@const {number} @nodts*/
ComponentType.$ordinal_ThemeSelector__org_patternfly_component_ComponentType = 76;
/**@const {number} @nodts*/
ComponentType.$ordinal_Timestamp__org_patternfly_component_ComponentType = 77;
/**@const {number} @nodts*/
ComponentType.$ordinal_Title__org_patternfly_component_ComponentType = 78;
/**@const {number} @nodts*/
ComponentType.$ordinal_ToggleGroup__org_patternfly_component_ComponentType = 79;
/**@const {number} @nodts*/
ComponentType.$ordinal_Toolbar__org_patternfly_component_ComponentType = 80;
/**@const {number} @nodts*/
ComponentType.$ordinal_Tooltip__org_patternfly_component_ComponentType = 81;
/**@const {number} @nodts*/
ComponentType.$ordinal_TreeView__org_patternfly_component_ComponentType = 82;
/**@const {number} @nodts*/
ComponentType.$ordinal_Truncate__org_patternfly_component_ComponentType = 83;
/**@const {number} @nodts*/
ComponentType.$ordinal_Wizard__org_patternfly_component_ComponentType = 84;
/**@const {!ComponentType} @nodts*/
ComponentType.f__Template__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('_Template'), ComponentType.$ordinal__Template__org_patternfly_component_ComponentType, '_tpl', 'PF6/Component/_Template');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Accordion__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Accordion'), ComponentType.$ordinal_Accordion__org_patternfly_component_ComponentType, 'ac', 'PF6/Component/Accordion');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ActionList__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ActionList'), ComponentType.$ordinal_ActionList__org_patternfly_component_ComponentType, 'al', 'PF6/Component/ActionList');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Alert__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Alert'), ComponentType.$ordinal_Alert__org_patternfly_component_ComponentType, 'at', 'PF6/Component/Alert');
/**@const {!ComponentType} @nodts*/
ComponentType.f_AlertGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('AlertGroup'), ComponentType.$ordinal_AlertGroup__org_patternfly_component_ComponentType, 'ag', 'PF6/Component/AlertGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Avatar__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Avatar'), ComponentType.$ordinal_Avatar__org_patternfly_component_ComponentType, 'av', 'PF6/Component/Avatar');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Backdrop__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Backdrop'), ComponentType.$ordinal_Backdrop__org_patternfly_component_ComponentType, 'bd', 'PF6/Component/Backdrop');
/**@const {!ComponentType} @nodts*/
ComponentType.f_BackToTop__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('BackToTop'), ComponentType.$ordinal_BackToTop__org_patternfly_component_ComponentType, 'btt', 'PF6/Component/BackToTop');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Badge__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Badge'), ComponentType.$ordinal_Badge__org_patternfly_component_ComponentType, 'bdg', 'PF6/Component/Badge');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Banner__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Banner'), ComponentType.$ordinal_Banner__org_patternfly_component_ComponentType, 'bnr', 'PF6/Component/Banner');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Brand__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Brand'), ComponentType.$ordinal_Brand__org_patternfly_component_ComponentType, 'bnd', 'PF6/Component/Brand');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Breadcrumb__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Breadcrumb'), ComponentType.$ordinal_Breadcrumb__org_patternfly_component_ComponentType, 'bc', 'PF6/Component/Breadcrumb');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Button__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Button'), ComponentType.$ordinal_Button__org_patternfly_component_ComponentType, 'btn', 'PF6/Component/Button');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Card__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Card'), ComponentType.$ordinal_Card__org_patternfly_component_ComponentType, 'crd', 'PF6/Component/Card');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Checkbox__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Checkbox'), ComponentType.$ordinal_Checkbox__org_patternfly_component_ComponentType, 'chb', 'PF6/Component/Checkbox');
/**@const {!ComponentType} @nodts*/
ComponentType.f_CodeBlock__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('CodeBlock'), ComponentType.$ordinal_CodeBlock__org_patternfly_component_ComponentType, 'cb', 'PF6/Component/CodeBlock');
/**@const {!ComponentType} @nodts*/
ComponentType.f_CodeEditor__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('CodeEditor'), ComponentType.$ordinal_CodeEditor__org_patternfly_component_ComponentType, 'ce', 'PF6/Component/CodeEditor');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Content__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Content'), ComponentType.$ordinal_Content__org_patternfly_component_ComponentType, 'ct', 'PF6/Component/Content');
/**@const {!ComponentType} @nodts*/
ComponentType.f_DataList__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DataList'), ComponentType.$ordinal_DataList__org_patternfly_component_ComponentType, 'dl', 'PF6/Component/DataList');
/**@const {!ComponentType} @nodts*/
ComponentType.f_DescriptionList__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DescriptionList'), ComponentType.$ordinal_DescriptionList__org_patternfly_component_ComponentType, 'dsl', 'PF6/Component/DescriptionList');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Divider__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Divider'), ComponentType.$ordinal_Divider__org_patternfly_component_ComponentType, 'dvr', 'PF6/Component/Divider');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Drawer__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Drawer'), ComponentType.$ordinal_Drawer__org_patternfly_component_ComponentType, 'dw', 'PF6/Component/Drawer');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Dropdown__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Dropdown'), ComponentType.$ordinal_Dropdown__org_patternfly_component_ComponentType, 'dd', 'PF6/Component/Dropdown');
/**@const {!ComponentType} @nodts*/
ComponentType.f_EmptyState__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('EmptyState'), ComponentType.$ordinal_EmptyState__org_patternfly_component_ComponentType, 'es', 'PF6/Component/EmptyState');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ExpandableSection'), ComponentType.$ordinal_ExpandableSection__org_patternfly_component_ComponentType, 'exs', 'PF6/Component/ExpandableSection');
/**@const {!ComponentType} @nodts*/
ComponentType.f_FilterInput__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('FilterInput'), ComponentType.$ordinal_FilterInput__org_patternfly_component_ComponentType, 'fi', 'PF6/Component/FilterInput');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Finder__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Finder'), ComponentType.$ordinal_Finder__org_patternfly_component_ComponentType, 'fnd', 'PF6/Component/Finder');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Form__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Form'), ComponentType.$ordinal_Form__org_patternfly_component_ComponentType, 'frm', 'PF6/Component/Form');
/**@const {!ComponentType} @nodts*/
ComponentType.f_FormSelect__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('FormSelect'), ComponentType.$ordinal_FormSelect__org_patternfly_component_ComponentType, 'frs', 'PF6/Component/FormSelect');
/**@const {!ComponentType} @nodts*/
ComponentType.f_HelperText__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('HelperText'), ComponentType.$ordinal_HelperText__org_patternfly_component_ComponentType, 'ht', 'PF6/Component/HelperText');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Hint__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Hint'), ComponentType.$ordinal_Hint__org_patternfly_component_ComponentType, 'hnt', 'PF6/Component/Hint');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Icon__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Icon'), ComponentType.$ordinal_Icon__org_patternfly_component_ComponentType, 'icn', 'PF6/Component/Icon');
/**@const {!ComponentType} @nodts*/
ComponentType.f_InputGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('InputGroup'), ComponentType.$ordinal_InputGroup__org_patternfly_component_ComponentType, 'ig', 'PF6/Component/InputGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_JumpLinks__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('JumpLinks'), ComponentType.$ordinal_JumpLinks__org_patternfly_component_ComponentType, 'jl', 'PF6/Component/JumpLinks');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Label__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Label'), ComponentType.$ordinal_Label__org_patternfly_component_ComponentType, 'lbl', 'PF6/Component/Label');
/**@const {!ComponentType} @nodts*/
ComponentType.f_LabelGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('LabelGroup'), ComponentType.$ordinal_LabelGroup__org_patternfly_component_ComponentType, 'lbg', 'PF6/Component/LabelGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_List__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('List'), ComponentType.$ordinal_List__org_patternfly_component_ComponentType, 'lst', 'PF6/Component/List');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Masthead__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Masthead'), ComponentType.$ordinal_Masthead__org_patternfly_component_ComponentType, 'mh', 'PF6/Component/Masthead');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Menu__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Menu'), ComponentType.$ordinal_Menu__org_patternfly_component_ComponentType, 'mu', 'PF6/Component/Menu');
/**@const {!ComponentType} @nodts*/
ComponentType.f_MenuToggle__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('MenuToggle'), ComponentType.$ordinal_MenuToggle__org_patternfly_component_ComponentType, 'mt', 'PF6/Component/MenuToggle');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Modal__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Modal'), ComponentType.$ordinal_Modal__org_patternfly_component_ComponentType, 'mo', 'PF6/Component/Modal');
/**@const {!ComponentType} @nodts*/
ComponentType.f_MultiSelect__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('MultiSelect'), ComponentType.$ordinal_MultiSelect__org_patternfly_component_ComponentType, 'msl', 'PF6/Component/MultiSelect');
/**@const {!ComponentType} @nodts*/
ComponentType.f_MultiTypeahead__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('MultiTypeahead'), ComponentType.$ordinal_MultiTypeahead__org_patternfly_component_ComponentType, 'mty', 'PF6/Component/MultiTypeahead');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Navigation__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Navigation'), ComponentType.$ordinal_Navigation__org_patternfly_component_ComponentType, 'nav', 'PF6/Component/Nav');
/**@const {!ComponentType} @nodts*/
ComponentType.f_NotificationBadge__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('NotificationBadge'), ComponentType.$ordinal_NotificationBadge__org_patternfly_component_ComponentType, 'nb', 'PF6/Component/NotificationBadge');
/**@const {!ComponentType} @nodts*/
ComponentType.f_NotificationDrawer__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('NotificationDrawer'), ComponentType.$ordinal_NotificationDrawer__org_patternfly_component_ComponentType, 'nd', 'PF6/Component/NotificationDrawer');
/**@const {!ComponentType} @nodts*/
ComponentType.f_NumberInput__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('NumberInput'), ComponentType.$ordinal_NumberInput__org_patternfly_component_ComponentType, 'ni', 'PF6/Component/NumberInput');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Page__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Page'), ComponentType.$ordinal_Page__org_patternfly_component_ComponentType, 'pg', 'PF6/Component/Page');
/**@const {!ComponentType} @nodts*/
ComponentType.f_PageHeader__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('PageHeader'), ComponentType.$ordinal_PageHeader__org_patternfly_component_ComponentType, 'ph', 'PF6/Component/PageHeader');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Panel__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Panel'), ComponentType.$ordinal_Panel__org_patternfly_component_ComponentType, 'pnl', 'PF6/Component/Panel');
/**@const {!ComponentType} @deprecated @nodts*/
ComponentType.f_PopperDropdown__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('PopperDropdown'), ComponentType.$ordinal_PopperDropdown__org_patternfly_component_ComponentType, 'pdd', 'PF6/Component/PopperDropdown');
/**@const {!ComponentType} @deprecated @nodts*/
ComponentType.f_PopperMultiSelect__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('PopperMultiSelect'), ComponentType.$ordinal_PopperMultiSelect__org_patternfly_component_ComponentType, 'pmsl', 'PF6/Component/PopperMultiSelect');
/**@const {!ComponentType} @deprecated @nodts*/
ComponentType.f_PopperMultiTypeahead__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('PopperMultiTypeahead'), ComponentType.$ordinal_PopperMultiTypeahead__org_patternfly_component_ComponentType, 'pmty', 'PF6/Component/PopperMultiTypeahead');
/**@const {!ComponentType} @deprecated @nodts*/
ComponentType.f_PopperPopover__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('PopperPopover'), ComponentType.$ordinal_PopperPopover__org_patternfly_component_ComponentType, 'ppvr', 'PF6/Component/PopperPopover');
/**@const {!ComponentType} @deprecated @nodts*/
ComponentType.f_PopperSingleSelect__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('PopperSingleSelect'), ComponentType.$ordinal_PopperSingleSelect__org_patternfly_component_ComponentType, 'pssl', 'PF6/Component/PopperSingleSelect');
/**@const {!ComponentType} @deprecated @nodts*/
ComponentType.f_PopperSingleTypeahead__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('PopperSingleTypeahead'), ComponentType.$ordinal_PopperSingleTypeahead__org_patternfly_component_ComponentType, 'psty', 'PF6/Component/PopperSingleTypeahead');
/**@const {!ComponentType} @deprecated @nodts*/
ComponentType.f_PopperTooltip__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('PopperTooltip'), ComponentType.$ordinal_PopperTooltip__org_patternfly_component_ComponentType, 'ptt', 'PF6/Component/PopperTooltip');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Popover__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Popover'), ComponentType.$ordinal_Popover__org_patternfly_component_ComponentType, 'pvr', 'PF6/Component/Popover');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Progress__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Progress'), ComponentType.$ordinal_Progress__org_patternfly_component_ComponentType, 'prg', 'PF6/Component/Progress');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ProgressStepper__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ProgressStepper'), ComponentType.$ordinal_ProgressStepper__org_patternfly_component_ComponentType, 'ps', 'PF6/Component/ProgressStepper');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Radio__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Radio'), ComponentType.$ordinal_Radio__org_patternfly_component_ComponentType, 'rd', 'PF6/Component/Radio');
/**@const {!ComponentType} @nodts*/
ComponentType.f_SearchInput__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('SearchInput'), ComponentType.$ordinal_SearchInput__org_patternfly_component_ComponentType, 'si', 'PF6/Component/SearchInput');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ServiceCard__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ServiceCard'), ComponentType.$ordinal_ServiceCard__org_patternfly_component_ComponentType, 'sc', 'PF6/Component/ServiceCard');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Sidebar__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Sidebar'), ComponentType.$ordinal_Sidebar__org_patternfly_component_ComponentType, 'sb', 'PF6/Component/Sidebar');
/**@const {!ComponentType} @nodts*/
ComponentType.f_SimpleList__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('SimpleList'), ComponentType.$ordinal_SimpleList__org_patternfly_component_ComponentType, 'sl', 'PF6/Component/SimpleList');
/**@const {!ComponentType} @nodts*/
ComponentType.f_SingleSelect__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('SingleSelect'), ComponentType.$ordinal_SingleSelect__org_patternfly_component_ComponentType, 'ssl', 'PF6/Component/SingleSelect');
/**@const {!ComponentType} @nodts*/
ComponentType.f_SingleTypeahead__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('SingleTypeahead'), ComponentType.$ordinal_SingleTypeahead__org_patternfly_component_ComponentType, 'sty', 'PF6/Component/SingleTypeahead');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Skeleton__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Skeleton'), ComponentType.$ordinal_Skeleton__org_patternfly_component_ComponentType, 'sk', 'PF6/Component/Skeleton');
/**@const {!ComponentType} @nodts*/
ComponentType.f_SkipToContent__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('SkipToContent'), ComponentType.$ordinal_SkipToContent__org_patternfly_component_ComponentType, 'stc', 'PF6/Component/SkipToContent');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Slider__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Slider'), ComponentType.$ordinal_Slider__org_patternfly_component_ComponentType, 'sld', 'PF6/Component/Slider');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Spinner__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Spinner'), ComponentType.$ordinal_Spinner__org_patternfly_component_ComponentType, 'sp', 'PF6/Component/Spinner');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Switch__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Switch'), ComponentType.$ordinal_Switch__org_patternfly_component_ComponentType, 'sw', 'PF6/Component/Switch');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Tabs__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Tabs'), ComponentType.$ordinal_Tabs__org_patternfly_component_ComponentType, 'tbs', 'PF6/Component/Tabs');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Table__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Table'), ComponentType.$ordinal_Table__org_patternfly_component_ComponentType, 'tbl', 'PF6/Component/Table');
/**@const {!ComponentType} @nodts*/
ComponentType.f_TextInput__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('TextInput'), ComponentType.$ordinal_TextInput__org_patternfly_component_ComponentType, 'ti', 'PF6/Component/TextInput');
/**@const {!ComponentType} @nodts*/
ComponentType.f_TextInputGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('TextInputGroup'), ComponentType.$ordinal_TextInputGroup__org_patternfly_component_ComponentType, 'tig', 'PF6/Component/TextInputGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ThemeSelector__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ThemeSelector'), ComponentType.$ordinal_ThemeSelector__org_patternfly_component_ComponentType, 'ths', 'PF6/Component/ThemeSelector');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Timestamp__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Timestamp'), ComponentType.$ordinal_Timestamp__org_patternfly_component_ComponentType, 'ts', 'PF6/Component/Timestamp');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Title__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Title'), ComponentType.$ordinal_Title__org_patternfly_component_ComponentType, 'tlt', 'PF6/Component/Title');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ToggleGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ToggleGroup'), ComponentType.$ordinal_ToggleGroup__org_patternfly_component_ComponentType, 'tg', 'PF6/Component/ToggleGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Toolbar__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Toolbar'), ComponentType.$ordinal_Toolbar__org_patternfly_component_ComponentType, 'tb', 'PF6/Component/Toolbar');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Tooltip__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Tooltip'), ComponentType.$ordinal_Tooltip__org_patternfly_component_ComponentType, 'tt', 'PF6/Component/Tooltip');
/**@const {!ComponentType} @nodts*/
ComponentType.f_TreeView__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('TreeView'), ComponentType.$ordinal_TreeView__org_patternfly_component_ComponentType, 'tv', 'PF6/Component/TreeView');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Truncate__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Truncate'), ComponentType.$ordinal_Truncate__org_patternfly_component_ComponentType, 'tr', 'PF6/Component/Truncate');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Wizard__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Wizard'), ComponentType.$ordinal_Wizard__org_patternfly_component_ComponentType, 'wzd', 'PF6/Component/Wizard');
/**@type {Map<?string, !ComponentType>} @nodts*/
ComponentType.f_namesToValuesMap__org_patternfly_component_ComponentType_;
$Util.$setClassMetadataForEnum(ComponentType, 'org.patternfly.component.ComponentType');

exports = ComponentType;

//# sourceMappingURL=ComponentType.js.map
