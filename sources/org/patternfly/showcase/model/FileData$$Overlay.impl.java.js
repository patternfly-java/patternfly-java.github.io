goog.module('org.patternfly.showcase.model.FileData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let MenuToggleAction = goog.forwardDeclare('org.patternfly.component.menu.MenuToggleAction$impl');
let MenuToggleType = goog.forwardDeclare('org.patternfly.component.menu.MenuToggleType$impl');
let FinderItemActions = goog.forwardDeclare('org.patternfly.extension.finder.FinderItemActions$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {FinderItemActions} */
 static m_itemActions__$devirt__org_patternfly_showcase_model_FileData__org_patternfly_extension_finder_FinderItemActions(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  if (!$Equality.$same($thisArg.actions, null) && $thisArg.actions.length > 0) {
   let fia = FinderItemActions.m_finderItemActions__org_patternfly_extension_finder_FinderItemActions();
   for (let $iterator = (/**@type {List<?string>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List($thisArg.actions))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let action = /**@type {?string}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), j_l_String));
    {
     let actionElement = $Overlay.m_action__$devirt__org_patternfly_showcase_model_FileData__java_lang_String__org_jboss_elemento_IsElement($thisArg, action);
     if (!$Equality.$same(actionElement, null)) {
      fia.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(actionElement);
     }
    }
   }
   return fia;
  }
  return null;
 }
 /** @final @nodts @return {IsElement<?>} */
 static m_action__$devirt__org_patternfly_showcase_model_FileData__java_lang_String__org_jboss_elemento_IsElement(/** !Object */ $thisArg, /** ?string */ value) {
  $Overlay.$clinit();
  if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(value, ':')) {
   let prefix = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(value, 0, j_l_String.m_indexOf__java_lang_String__java_lang_String__int(value, ':'));
   let suffix = j_l_String.m_substring__java_lang_String__int__java_lang_String(value, j_l_String.m_indexOf__java_lang_String__java_lang_String__int(value, ':') + 1 | 0);
   switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(prefix)) {
    case 'control':
     return Button.m_button__java_lang_String__org_patternfly_component_button_Button(suffix).m_control__org_patternfly_component_button_Button().m_small__org_patternfly_component_button_Button();
    case 'icon':
     return (/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_icon_PredefinedIcon__org_patternfly_component_button_Button(PredefinedIcon.m_predefinedIcon__java_lang_String__org_patternfly_icon_PredefinedIcon(suffix)).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_small__org_patternfly_component_button_Button();
    case 'link':
     return Button.m_button__java_lang_String__org_patternfly_component_button_Button(suffix).m_link__org_patternfly_component_button_Button().m_small__org_patternfly_component_button_Button();
    case 'link-inline':
     return (/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button(suffix).m_link__org_patternfly_component_button_Button().m_inline__org_jboss_elemento_TypedBuilder(), Button))).m_small__org_patternfly_component_button_Button();
    case 'plain':
     return (/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button(suffix).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_small__org_patternfly_component_button_Button();
    case 'kebab':
     return Dropdown.m_dropdown__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(MenuToggle.m_menuToggle__org_patternfly_icon_PredefinedIcon__org_patternfly_component_menu_MenuToggle(rhUi.m_ellipsisVertical__org_patternfly_icon_PredefinedIcon()).m_small__org_patternfly_component_menu_MenuToggle()).m_applyToMenuList__java_util_function_Consumer__org_patternfly_component_menu_Dropdown(Consumer.$adapt((/** MenuList */ list) =>{
      let list_1 = /**@type {MenuList}*/ ($Casts.$to(list, MenuList));
      list_1.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(suffix, '\\|'))), j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ text) =>{
       let text_1 = /**@type {?string}*/ ($Casts.$to(text, j_l_String));
       return MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(text_1, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), text_1);
      })));
     }));
    case 'split':
     let actions = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(suffix, '\\|');
     let first = actions[0];
     let rest = /**@type {Array<?string>}*/ ($Arrays.$castTo(Arrays.m_copyOfRange__arrayOf_java_lang_Object__int__int__arrayOf_java_lang_Object(actions, 1, actions.length), j_l_String, 1));
     return Dropdown.m_dropdown__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(MenuToggle.m_menuToggle__org_patternfly_component_menu_MenuToggleType__org_patternfly_component_menu_MenuToggle(MenuToggleType.f_split__org_patternfly_component_menu_MenuToggleType).m_small__org_patternfly_component_menu_MenuToggle().m_addAction__org_patternfly_component_menu_MenuToggleAction__org_patternfly_component_menu_MenuToggle(MenuToggleAction.m_menuToggleAction__java_lang_String__org_patternfly_component_menu_MenuToggleAction(first))).m_applyToMenuList__java_util_function_Consumer__org_patternfly_component_menu_Dropdown(Consumer.$adapt((/** MenuList */ list_2) =>{
      let list_3 = /**@type {MenuList}*/ ($Casts.$to(list_2, MenuList));
      list_3.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(rest)), j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ text_2) =>{
       let text_3 = /**@type {?string}*/ ($Casts.$to(text_2, j_l_String));
       return MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(text_3, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), text_3);
      })));
     }));
   }
  }
  return null;
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Dropdown = goog.module.get('org.patternfly.component.menu.Dropdown$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  MenuToggleAction = goog.module.get('org.patternfly.component.menu.MenuToggleAction$impl');
  MenuToggleType = goog.module.get('org.patternfly.component.menu.MenuToggleType$impl');
  FinderItemActions = goog.module.get('org.patternfly.extension.finder.FinderItemActions$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  PredefinedIcon = goog.module.get('org.patternfly.icon.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=FileData$$Overlay.js.map
