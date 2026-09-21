goog.module('org.patternfly.componentgroup.theme.ThemeSelector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuGroup = goog.forwardDeclare('org.patternfly.component.menu.MenuGroup$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let SingleSelect = goog.forwardDeclare('org.patternfly.component.menu.SingleSelect$impl');
let SingleSelectMenu = goog.forwardDeclare('org.patternfly.component.menu.SingleSelectMenu$impl');
let ToggleGroup = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroup$impl');
let ToggleGroupItem = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
let Color = goog.forwardDeclare('org.patternfly.componentgroup.theme.Color$impl');
let Contrast = goog.forwardDeclare('org.patternfly.componentgroup.theme.Contrast$impl');
let Theme = goog.forwardDeclare('org.patternfly.componentgroup.theme.Theme$impl');
let ThemeManager = goog.forwardDeclare('org.patternfly.componentgroup.theme.ThemeManager$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Placement = goog.forwardDeclare('org.patternfly.style.Placement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, ThemeSelector>}
 * @implements {Attachable}
 */
class ThemeSelector extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ThemeManager<Theme>} @nodts*/
  this.f_themeManager__org_patternfly_componentgroup_theme_ThemeSelector_;
  /**@type {ThemeManager<Color>} @nodts*/
  this.f_colorManager__org_patternfly_componentgroup_theme_ThemeSelector_;
  /**@type {ThemeManager<Contrast>} @nodts*/
  this.f_contrastManager__org_patternfly_componentgroup_theme_ThemeSelector_;
  /**@type {SingleSelect} @nodts*/
  this.f_singleSelect__org_patternfly_componentgroup_theme_ThemeSelector_;
 }
 /** @nodts @return {ThemeSelector} */
 static m_themeSelector__org_patternfly_componentgroup_theme_ThemeSelector() {
  ThemeSelector.$clinit();
  return ThemeSelector.$create__java_lang_String(null);
 }
 /** @nodts @return {ThemeSelector} */
 static m_themeSelector__java_lang_String__org_patternfly_componentgroup_theme_ThemeSelector(/** ?string */ storagePrefix) {
  ThemeSelector.$clinit();
  return ThemeSelector.$create__java_lang_String(storagePrefix);
 }
 /** @nodts @return {!ThemeSelector} */
 static $create__java_lang_String(/** ?string */ storagePrefix) {
  ThemeSelector.$clinit();
  let $instance = new ThemeSelector();
  $instance.$ctor__org_patternfly_componentgroup_theme_ThemeSelector__java_lang_String__void(storagePrefix);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_theme_ThemeSelector__java_lang_String__void(/** ?string */ storagePrefix) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ThemeSelector__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_themeSelector__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  let themeKey = $Equality.$same(storagePrefix, null) ? 'theme-variant-preference' : Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(storagePrefix, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['theme-variant-preference'], j_l_String)));
  let colorKey = $Equality.$same(storagePrefix, null) ? 'theme-preference' : Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(storagePrefix, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['theme-preference'], j_l_String)));
  let contrastKey = $Equality.$same(storagePrefix, null) ? 'contrast-preference' : Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(storagePrefix, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['contrast-preference'], j_l_String)));
  this.f_themeManager__org_patternfly_componentgroup_theme_ThemeSelector_ = (/**@type {!ThemeManager<Theme>}*/ (ThemeManager.$create__java_lang_String__java_util_function_Function__java_lang_String__java_lang_Enum__java_lang_Enum__java_util_function_Function__java_util_function_Function__arrayOf_java_lang_Enum(themeKey, j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Theme */ t) =>{
   let t_1 = /**@type {Theme}*/ ($Casts.$to(t, Theme));
   return $Equality.$same(t_1, Theme.f_FELT__org_patternfly_componentgroup_theme_Theme) ? 'pf-v6-theme-felt' : null;
  })), '(prefers-color-scheme: dark)', Theme.f_DEFAULT__org_patternfly_componentgroup_theme_Theme, Theme.f_DEFAULT__org_patternfly_componentgroup_theme_Theme, j_u_function_Function.$adapt(/**  @return {Theme}*/ ((/** ?string */ arg0) =>{
   let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
   return Theme.m_fromIdentifier__java_lang_String__org_patternfly_componentgroup_theme_Theme(arg0_1);
  })), j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Theme */ arg0_2) =>{
   let arg0_3 = /**@type {Theme}*/ ($Casts.$to(arg0_2, Theme));
   return arg0_3.m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme();
  })), Theme.m_values__arrayOf_org_patternfly_componentgroup_theme_Theme())));
  this.f_colorManager__org_patternfly_componentgroup_theme_ThemeSelector_ = (/**@type {!ThemeManager<Color>}*/ (ThemeManager.$create__java_lang_String__java_util_function_Function__java_lang_String__java_lang_Enum__java_lang_Enum__java_util_function_Function__java_util_function_Function__arrayOf_java_lang_Enum(colorKey, j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Color */ c) =>{
   let c_1 = /**@type {Color}*/ ($Casts.$to(c, Color));
   return $Equality.$same(c_1, Color.f_DARK__org_patternfly_componentgroup_theme_Color) ? 'pf-v6-theme-dark' : null;
  })), '(prefers-color-scheme: dark)', Color.f_SYSTEM__org_patternfly_componentgroup_theme_Color, Color.f_DARK__org_patternfly_componentgroup_theme_Color, j_u_function_Function.$adapt(/**  @return {Color}*/ ((/** ?string */ arg0_4) =>{
   let arg0_5 = /**@type {?string}*/ ($Casts.$to(arg0_4, j_l_String));
   return Color.m_fromIdentifier__java_lang_String__org_patternfly_componentgroup_theme_Color(arg0_5);
  })), j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Color */ arg0_6) =>{
   let arg0_7 = /**@type {Color}*/ ($Casts.$to(arg0_6, Color));
   return arg0_7.m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme();
  })), Color.m_values__arrayOf_org_patternfly_componentgroup_theme_Color())));
  this.f_contrastManager__org_patternfly_componentgroup_theme_ThemeSelector_ = (/**@type {!ThemeManager<Contrast>}*/ (ThemeManager.$create__java_lang_String__java_util_function_Function__java_lang_String__java_lang_Enum__java_lang_Enum__java_util_function_Function__java_util_function_Function__arrayOf_java_lang_Enum(contrastKey, j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Contrast */ c_2) =>{
   let c_3 = /**@type {Contrast}*/ ($Casts.$to(c_2, Contrast));
   if ($Equality.$same(c_3, Contrast.f_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast)) {
    return 'pf-v6-theme-high-contrast';
   } else if ($Equality.$same(c_3, Contrast.f_GLASS__org_patternfly_componentgroup_theme_Contrast)) {
    return 'pf-v6-theme-glass';
   }
   return null;
  })), '(prefers-contrast: more)', Contrast.f_SYSTEM__org_patternfly_componentgroup_theme_Contrast, Contrast.f_HIGH_CONTRAST__org_patternfly_componentgroup_theme_Contrast, j_u_function_Function.$adapt(/**  @return {Contrast}*/ ((/** ?string */ arg0_8) =>{
   let arg0_9 = /**@type {?string}*/ ($Casts.$to(arg0_8, j_l_String));
   return Contrast.m_fromIdentifier__java_lang_String__org_patternfly_componentgroup_theme_Contrast(arg0_9);
  })), j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** Contrast */ arg0_10) =>{
   let arg0_11 = /**@type {Contrast}*/ ($Casts.$to(arg0_10, Contrast));
   return arg0_11.m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme();
  })), Contrast.m_values__arrayOf_org_patternfly_componentgroup_theme_Contrast())));
  let themeToggleGroup = (/**@type {ToggleGroup}*/ ($Casts.$to(ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_single__org_patternfly_component_SelectionMode).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Theme>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(Theme.m_values__arrayOf_org_patternfly_componentgroup_theme_Theme())), j_u_function_Function.$adapt(/**  @return {ToggleGroupItem}*/ ((/** Theme */ theme) =>{
   let theme_1 = /**@type {Theme}*/ ($Casts.$to(theme, Theme));
   return ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(theme_1.m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme(), theme_1.f_text__org_patternfly_componentgroup_theme_Theme).m_store__java_lang_String__java_lang_Object__org_patternfly_component_togglegroup_ToggleGroupItem(ThemeSelector.f_THEME_KEY__org_patternfly_componentgroup_theme_ThemeSelector_, theme_1);
  }))), ToggleGroup))).m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_togglegroup_ToggleGroup(SelectHandler.$adapt((/** Event */ e, /** ToggleGroupItem */ item, /** boolean */ selected) =>{
   let item_1 = /**@type {ToggleGroupItem}*/ ($Casts.$to(item, ToggleGroupItem));
   let theme_2 = /**@type {Theme}*/ ($Casts.$to(item_1.m_get__java_lang_String__java_lang_Object(ThemeSelector.f_THEME_KEY__org_patternfly_componentgroup_theme_ThemeSelector_), Theme));
   if (!$Equality.$same(theme_2, this.f_themeManager__org_patternfly_componentgroup_theme_ThemeSelector_.f_value__org_patternfly_componentgroup_theme_ThemeManager)) {
    this.f_themeManager__org_patternfly_componentgroup_theme_ThemeSelector_.m_apply__java_lang_Enum__void_$pp_org_patternfly_componentgroup_theme(theme_2);
   }
  }));
  themeToggleGroup.m_select__java_lang_String__void((/**@type {Theme}*/ ($Casts.$to(this.f_themeManager__org_patternfly_componentgroup_theme_ThemeSelector_.f_value__org_patternfly_componentgroup_theme_ThemeManager, Theme))).m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme());
  let colorToggleGroup = (/**@type {ToggleGroup}*/ ($Casts.$to(ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_single__org_patternfly_component_SelectionMode).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Color>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(Color.m_values__arrayOf_org_patternfly_componentgroup_theme_Color())), j_u_function_Function.$adapt(/**  @return {ToggleGroupItem}*/ ((/** Color */ color) =>{
   let color_1 = /**@type {Color}*/ ($Casts.$to(color, Color));
   return ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(color_1.m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme(), color_1.f_text__org_patternfly_componentgroup_theme_Color).m_store__java_lang_String__java_lang_Object__org_patternfly_component_togglegroup_ToggleGroupItem(ThemeSelector.f_COLOR_KEY__org_patternfly_componentgroup_theme_ThemeSelector_, color_1);
  }))), ToggleGroup))).m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_togglegroup_ToggleGroup(SelectHandler.$adapt((/** Event */ e_1, /** ToggleGroupItem */ item_2, /** boolean */ selected_1) =>{
   let item_3 = /**@type {ToggleGroupItem}*/ ($Casts.$to(item_2, ToggleGroupItem));
   let color_2 = /**@type {Color}*/ ($Casts.$to(item_3.m_get__java_lang_String__java_lang_Object(ThemeSelector.f_COLOR_KEY__org_patternfly_componentgroup_theme_ThemeSelector_), Color));
   if (!$Equality.$same(color_2, this.f_colorManager__org_patternfly_componentgroup_theme_ThemeSelector_.f_value__org_patternfly_componentgroup_theme_ThemeManager)) {
    this.f_colorManager__org_patternfly_componentgroup_theme_ThemeSelector_.m_apply__java_lang_Enum__void_$pp_org_patternfly_componentgroup_theme(color_2);
   }
  }));
  colorToggleGroup.m_select__java_lang_String__void((/**@type {Color}*/ ($Casts.$to(this.f_colorManager__org_patternfly_componentgroup_theme_ThemeSelector_.f_value__org_patternfly_componentgroup_theme_ThemeManager, Color))).m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme());
  let contrastToggleGroup = (/**@type {ToggleGroup}*/ ($Casts.$to(ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_single__org_patternfly_component_SelectionMode).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Contrast>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(Contrast.m_values__arrayOf_org_patternfly_componentgroup_theme_Contrast())), j_u_function_Function.$adapt(/**  @return {ToggleGroupItem}*/ ((/** Contrast */ contrast) =>{
   let contrast_1 = /**@type {Contrast}*/ ($Casts.$to(contrast, Contrast));
   return ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(contrast_1.m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme(), contrast_1.f_text__org_patternfly_componentgroup_theme_Contrast).m_store__java_lang_String__java_lang_Object__org_patternfly_component_togglegroup_ToggleGroupItem(ThemeSelector.f_CONTRAST_KEY__org_patternfly_componentgroup_theme_ThemeSelector_, contrast_1);
  }))), ToggleGroup))).m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_togglegroup_ToggleGroup(SelectHandler.$adapt((/** Event */ e_2, /** ToggleGroupItem */ item_4, /** boolean */ selected_2) =>{
   let item_5 = /**@type {ToggleGroupItem}*/ ($Casts.$to(item_4, ToggleGroupItem));
   let contrast_2 = /**@type {Contrast}*/ ($Casts.$to(item_5.m_get__java_lang_String__java_lang_Object(ThemeSelector.f_CONTRAST_KEY__org_patternfly_componentgroup_theme_ThemeSelector_), Contrast));
   if (!$Equality.$same(contrast_2, this.f_contrastManager__org_patternfly_componentgroup_theme_ThemeSelector_.f_value__org_patternfly_componentgroup_theme_ThemeManager)) {
    this.f_contrastManager__org_patternfly_componentgroup_theme_ThemeSelector_.m_apply__java_lang_Enum__void_$pp_org_patternfly_componentgroup_theme(contrast_2);
   }
  }));
  contrastToggleGroup.m_select__java_lang_String__void((/**@type {Contrast}*/ ($Casts.$to(this.f_contrastManager__org_patternfly_componentgroup_theme_ThemeSelector_.f_value__org_patternfly_componentgroup_theme_ThemeManager, Contrast))).m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme());
  let menuToggle = MenuToggle.m_menuToggle__org_patternfly_component_menu_MenuToggle().m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuToggle((/**@type {Color}*/ ($Casts.$to(this.f_colorManager__org_patternfly_componentgroup_theme_ThemeSelector_.f_value__org_patternfly_componentgroup_theme_ThemeManager, Color))).m_icon__elemental2_dom_Element_$pp_org_patternfly_componentgroup_theme());
  this.f_singleSelect__org_patternfly_componentgroup_theme_ThemeSelector_ = (/**@type {SingleSelect}*/ ($Casts.$to((/**@type {SingleSelect}*/ ($Casts.$to(SingleSelect.m_singleSelect__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_SingleSelect(menuToggle).m_noDefaultSelectHandler__org_jboss_elemento_TypedBuilder(), SingleSelect))).m_addMenu__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(SingleSelectMenu.m_singleSelectMenu__org_patternfly_component_menu_SingleSelectMenu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addGroup__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(/**@type {MenuGroup}*/ ($Casts.$to(MenuGroup.m_menuGroup__java_lang_String__org_patternfly_component_menu_MenuGroup('Theme').m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_search__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(themeToggleGroup), HTMLContainerBuilder))), MenuGroup))).m_addDivider__org_patternfly_component_menu_MenuContent().m_addGroup__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(/**@type {MenuGroup}*/ ($Casts.$to(MenuGroup.m_menuGroup__java_lang_String__org_patternfly_component_menu_MenuGroup('Color scheme').m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_search__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(colorToggleGroup), HTMLContainerBuilder))), MenuGroup))).m_addDivider__org_patternfly_component_menu_MenuContent().m_addGroup__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(/**@type {MenuGroup}*/ ($Casts.$to(MenuGroup.m_menuGroup__java_lang_String__org_patternfly_component_menu_MenuGroup('Contrast mode').m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_search__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(contrastToggleGroup), HTMLContainerBuilder))), MenuGroup))))), SingleSelect)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_singleSelect__org_patternfly_componentgroup_theme_ThemeSelector_);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {}
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_themeManager__org_patternfly_componentgroup_theme_ThemeSelector_.m_cleanup__void_$pp_org_patternfly_componentgroup_theme();
  this.f_colorManager__org_patternfly_componentgroup_theme_ThemeSelector_.m_cleanup__void_$pp_org_patternfly_componentgroup_theme();
  this.f_contrastManager__org_patternfly_componentgroup_theme_ThemeSelector_.m_cleanup__void_$pp_org_patternfly_componentgroup_theme();
 }
 /** @nodts @return {ThemeSelector} */
 m_placement__org_patternfly_style_Placement__org_patternfly_componentgroup_theme_ThemeSelector(/** Placement */ placement) {
  this.f_singleSelect__org_patternfly_componentgroup_theme_ThemeSelector_.m_placement__org_patternfly_style_Placement__org_jboss_elemento_TypedBuilder(placement);
  return this;
 }
 /** @nodts @return {ThemeSelector} */
 m_that__org_patternfly_componentgroup_theme_ThemeSelector() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ThemeSelector} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_componentgroup_theme_ThemeSelector();
 }
 /** @nodts */
 static $clinit() {
  ThemeSelector.$clinit = () =>{};
  ThemeSelector.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ThemeSelector;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuGroup = goog.module.get('org.patternfly.component.menu.MenuGroup$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  SingleSelect = goog.module.get('org.patternfly.component.menu.SingleSelect$impl');
  SingleSelectMenu = goog.module.get('org.patternfly.component.menu.SingleSelectMenu$impl');
  ToggleGroup = goog.module.get('org.patternfly.component.togglegroup.ToggleGroup$impl');
  ToggleGroupItem = goog.module.get('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
  Color = goog.module.get('org.patternfly.componentgroup.theme.Color$impl');
  Contrast = goog.module.get('org.patternfly.componentgroup.theme.Contrast$impl');
  Theme = goog.module.get('org.patternfly.componentgroup.theme.Theme$impl');
  ThemeManager = goog.module.get('org.patternfly.componentgroup.theme.ThemeManager$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ThemeSelector.f_THEME_KEY__org_patternfly_componentgroup_theme_ThemeSelector_ = 'theme';
/**@const {string} @nodts*/
ThemeSelector.f_COLOR_KEY__org_patternfly_componentgroup_theme_ThemeSelector_ = 'color';
/**@const {string} @nodts*/
ThemeSelector.f_CONTRAST_KEY__org_patternfly_componentgroup_theme_ThemeSelector_ = 'contrast';
Attachable.$markImplementor(ThemeSelector);
$Util.$setClassMetadata(ThemeSelector, 'org.patternfly.componentgroup.theme.ThemeSelector');

exports = ThemeSelector;

//# sourceMappingURL=ThemeSelector.js.map
