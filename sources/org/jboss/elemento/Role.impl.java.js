goog.module('org.jboss.elemento.Role$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Role>}
 */
class Role extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_jboss_elemento_Role;
 }
 /** @nodts @return {!Role} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ name) {
  let $instance = new Role();
  $instance.$ctor__org_jboss_elemento_Role__java_lang_String__int__java_lang_String__void($name, $ordinal, name);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Role__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ name) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_name__org_jboss_elemento_Role = name;
 }
 /** @nodts @return {!Role} */
 static m_valueOf__java_lang_String__org_jboss_elemento_Role(/** string */ name) {
  Role.$clinit();
  if ($Equality.$same(Role.f_namesToValuesMap__org_jboss_elemento_Role_, null)) {
   Role.f_namesToValuesMap__org_jboss_elemento_Role_ = (/**@type {Map<?string, !Role>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Role.m_values__arrayOf_org_jboss_elemento_Role())));
  }
  return /**@type {Role}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Role.f_namesToValuesMap__org_jboss_elemento_Role_));
 }
 /** @nodts @return {!Array<!Role>} */
 static m_values__arrayOf_org_jboss_elemento_Role() {
  Role.$clinit();
  return /**@type {!Array<!Role>}*/ ($Arrays.$stampType([Role.f_alert__org_jboss_elemento_Role, Role.f_alertdialog__org_jboss_elemento_Role, Role.f_combobox__org_jboss_elemento_Role, Role.f_dialog__org_jboss_elemento_Role, Role.f_feed__org_jboss_elemento_Role, Role.f_log__org_jboss_elemento_Role, Role.f_marquee__org_jboss_elemento_Role, Role.f_math__org_jboss_elemento_Role, Role.f_menu__org_jboss_elemento_Role, Role.f_menubar__org_jboss_elemento_Role, Role.f_none__org_jboss_elemento_Role, Role.f_note__org_jboss_elemento_Role, Role.f_presentation__org_jboss_elemento_Role, Role.f_scrollbar__org_jboss_elemento_Role, Role.f_searchbox__org_jboss_elemento_Role, Role.f_separator__org_jboss_elemento_Role, Role.f_slider__org_jboss_elemento_Role, Role.f_spinbutton__org_jboss_elemento_Role, Role.f_status__org_jboss_elemento_Role, Role.f_switch___org_jboss_elemento_Role, Role.f_tab__org_jboss_elemento_Role, Role.f_tablist__org_jboss_elemento_Role, Role.f_tabpanel__org_jboss_elemento_Role, Role.f_timer__org_jboss_elemento_Role, Role.f_toolbar__org_jboss_elemento_Role, Role.f_tooltip__org_jboss_elemento_Role, Role.f_tree__org_jboss_elemento_Role, Role.f_treegrid__org_jboss_elemento_Role, Role.f_treeitem__org_jboss_elemento_Role], Role));
 }
 /** @nodts */
 static $clinit() {
  Role.$clinit = () =>{};
  Role.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Role;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Role.$ordinal_alert__org_jboss_elemento_Role = 0;
/**@const {number} @nodts*/
Role.$ordinal_alertdialog__org_jboss_elemento_Role = 1;
/**@const {number} @nodts*/
Role.$ordinal_combobox__org_jboss_elemento_Role = 2;
/**@const {number} @nodts*/
Role.$ordinal_dialog__org_jboss_elemento_Role = 3;
/**@const {number} @nodts*/
Role.$ordinal_feed__org_jboss_elemento_Role = 4;
/**@const {number} @nodts*/
Role.$ordinal_log__org_jboss_elemento_Role = 5;
/**@const {number} @nodts*/
Role.$ordinal_marquee__org_jboss_elemento_Role = 6;
/**@const {number} @nodts*/
Role.$ordinal_math__org_jboss_elemento_Role = 7;
/**@const {number} @nodts*/
Role.$ordinal_menu__org_jboss_elemento_Role = 8;
/**@const {number} @nodts*/
Role.$ordinal_menubar__org_jboss_elemento_Role = 9;
/**@const {number} @nodts*/
Role.$ordinal_none__org_jboss_elemento_Role = 10;
/**@const {number} @nodts*/
Role.$ordinal_note__org_jboss_elemento_Role = 11;
/**@const {number} @nodts*/
Role.$ordinal_presentation__org_jboss_elemento_Role = 12;
/**@const {number} @nodts*/
Role.$ordinal_scrollbar__org_jboss_elemento_Role = 13;
/**@const {number} @nodts*/
Role.$ordinal_searchbox__org_jboss_elemento_Role = 14;
/**@const {number} @nodts*/
Role.$ordinal_separator__org_jboss_elemento_Role = 15;
/**@const {number} @nodts*/
Role.$ordinal_slider__org_jboss_elemento_Role = 16;
/**@const {number} @nodts*/
Role.$ordinal_spinbutton__org_jboss_elemento_Role = 17;
/**@const {number} @nodts*/
Role.$ordinal_status__org_jboss_elemento_Role = 18;
/**@const {number} @nodts*/
Role.$ordinal_switch___org_jboss_elemento_Role = 19;
/**@const {number} @nodts*/
Role.$ordinal_tab__org_jboss_elemento_Role = 20;
/**@const {number} @nodts*/
Role.$ordinal_tablist__org_jboss_elemento_Role = 21;
/**@const {number} @nodts*/
Role.$ordinal_tabpanel__org_jboss_elemento_Role = 22;
/**@const {number} @nodts*/
Role.$ordinal_timer__org_jboss_elemento_Role = 23;
/**@const {number} @nodts*/
Role.$ordinal_toolbar__org_jboss_elemento_Role = 24;
/**@const {number} @nodts*/
Role.$ordinal_tooltip__org_jboss_elemento_Role = 25;
/**@const {number} @nodts*/
Role.$ordinal_tree__org_jboss_elemento_Role = 26;
/**@const {number} @nodts*/
Role.$ordinal_treegrid__org_jboss_elemento_Role = 27;
/**@const {number} @nodts*/
Role.$ordinal_treeitem__org_jboss_elemento_Role = 28;
/**@const {!Role} @nodts*/
Role.f_alert__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('alert'), Role.$ordinal_alert__org_jboss_elemento_Role, 'alert');
/**@const {!Role} @nodts*/
Role.f_alertdialog__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('alertdialog'), Role.$ordinal_alertdialog__org_jboss_elemento_Role, 'alertdialog');
/**@const {!Role} @nodts*/
Role.f_combobox__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('combobox'), Role.$ordinal_combobox__org_jboss_elemento_Role, 'combobox');
/**@const {!Role} @nodts*/
Role.f_dialog__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('dialog'), Role.$ordinal_dialog__org_jboss_elemento_Role, 'dialog');
/**@const {!Role} @nodts*/
Role.f_feed__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('feed'), Role.$ordinal_feed__org_jboss_elemento_Role, 'feed');
/**@const {!Role} @nodts*/
Role.f_log__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('log'), Role.$ordinal_log__org_jboss_elemento_Role, 'log');
/**@const {!Role} @nodts*/
Role.f_marquee__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('marquee'), Role.$ordinal_marquee__org_jboss_elemento_Role, 'marquee');
/**@const {!Role} @nodts*/
Role.f_math__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('math'), Role.$ordinal_math__org_jboss_elemento_Role, 'math');
/**@const {!Role} @nodts*/
Role.f_menu__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('menu'), Role.$ordinal_menu__org_jboss_elemento_Role, 'menu');
/**@const {!Role} @nodts*/
Role.f_menubar__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('menubar'), Role.$ordinal_menubar__org_jboss_elemento_Role, 'menubar');
/**@const {!Role} @nodts*/
Role.f_none__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), Role.$ordinal_none__org_jboss_elemento_Role, 'none');
/**@const {!Role} @nodts*/
Role.f_note__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('note'), Role.$ordinal_note__org_jboss_elemento_Role, 'note');
/**@const {!Role} @nodts*/
Role.f_presentation__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('presentation'), Role.$ordinal_presentation__org_jboss_elemento_Role, 'presentation');
/**@const {!Role} @nodts*/
Role.f_scrollbar__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('scrollbar'), Role.$ordinal_scrollbar__org_jboss_elemento_Role, 'scrollbar');
/**@const {!Role} @nodts*/
Role.f_searchbox__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('searchbox'), Role.$ordinal_searchbox__org_jboss_elemento_Role, 'searchbox');
/**@const {!Role} @nodts*/
Role.f_separator__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('separator'), Role.$ordinal_separator__org_jboss_elemento_Role, 'separator');
/**@const {!Role} @nodts*/
Role.f_slider__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('slider'), Role.$ordinal_slider__org_jboss_elemento_Role, 'slider');
/**@const {!Role} @nodts*/
Role.f_spinbutton__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('spinbutton'), Role.$ordinal_spinbutton__org_jboss_elemento_Role, 'spinbutton');
/**@const {!Role} @nodts*/
Role.f_status__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('status'), Role.$ordinal_status__org_jboss_elemento_Role, 'status');
/**@const {!Role} @nodts*/
Role.f_switch___org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('switch_'), Role.$ordinal_switch___org_jboss_elemento_Role, 'switch');
/**@const {!Role} @nodts*/
Role.f_tab__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tab'), Role.$ordinal_tab__org_jboss_elemento_Role, 'tab');
/**@const {!Role} @nodts*/
Role.f_tablist__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tablist'), Role.$ordinal_tablist__org_jboss_elemento_Role, 'tablist');
/**@const {!Role} @nodts*/
Role.f_tabpanel__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tabpanel'), Role.$ordinal_tabpanel__org_jboss_elemento_Role, 'tabpanel');
/**@const {!Role} @nodts*/
Role.f_timer__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('timer'), Role.$ordinal_timer__org_jboss_elemento_Role, 'timer');
/**@const {!Role} @nodts*/
Role.f_toolbar__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('toolbar'), Role.$ordinal_toolbar__org_jboss_elemento_Role, 'toolbar');
/**@const {!Role} @nodts*/
Role.f_tooltip__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tooltip'), Role.$ordinal_tooltip__org_jboss_elemento_Role, 'tooltip');
/**@const {!Role} @nodts*/
Role.f_tree__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('tree'), Role.$ordinal_tree__org_jboss_elemento_Role, 'tree');
/**@const {!Role} @nodts*/
Role.f_treegrid__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('treegrid'), Role.$ordinal_treegrid__org_jboss_elemento_Role, 'treegrid');
/**@const {!Role} @nodts*/
Role.f_treeitem__org_jboss_elemento_Role = /**@pureOrBreakMyCode*/ Role.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('treeitem'), Role.$ordinal_treeitem__org_jboss_elemento_Role, 'treeitem');
/**@type {Map<?string, !Role>} @nodts*/
Role.f_namesToValuesMap__org_jboss_elemento_Role_;
$Util.$setClassMetadataForEnum(Role, 'org.jboss.elemento.Role');

exports = Role;

//# sourceMappingURL=Role.js.map
