goog.module('org.patternfly.showcase.BuildingBlocks$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BuildingBlocks extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BuildingBlocks} */
 static $create__() {
  BuildingBlocks.$clinit();
  let $instance = new BuildingBlocks();
  $instance.$ctor__org_patternfly_showcase_BuildingBlocks__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_BuildingBlocks__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Dropdown} */
 static m_mixedKebab__java_lang_String__org_patternfly_component_menu_Dropdown(/** ?string */ baseId) {
  BuildingBlocks.$clinit();
  return Dropdown.m_dropdown__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_menu_Dropdown(rhUi.m_ellipsisVertical__org_patternfly_icon_PredefinedIcon(), 'Column actions').m_applyToMenuList__java_util_function_Consumer__org_patternfly_component_menu_Dropdown(Consumer.$adapt((/** MenuList */ list) =>{
   let list_1 = /**@type {MenuList}*/ ($Casts.$to(list, MenuList));
   (/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(list_1.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-0'], j_l_String))), 'Action')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-1'], j_l_String))), 'Link', '#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-1'], j_l_String)))))), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-2'], j_l_String))), 'Disabled action').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-3'], j_l_String))), 'Disabled link', '#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-3'], j_l_String))))).m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))), MenuList))).m_addDivider__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-4'], j_l_String))), 'Separated action')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-5'], j_l_String))), 'Separated link', '#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(baseId, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['item-5'], j_l_String))))));
  }));
 }
 /** @nodts */
 static $clinit() {
  BuildingBlocks.$clinit = () =>{};
  BuildingBlocks.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BuildingBlocks;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Dropdown = goog.module.get('org.patternfly.component.menu.Dropdown$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BuildingBlocks, 'org.patternfly.showcase.BuildingBlocks');

exports = BuildingBlocks;

//# sourceMappingURL=BuildingBlocks.js.map
