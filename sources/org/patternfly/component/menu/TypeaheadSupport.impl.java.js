goog.module('org.patternfly.component.menu.TypeaheadSupport$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuToggleMenu = goog.forwardDeclare('org.patternfly.component.menu.MenuToggleMenu$impl');
let NoResults = goog.forwardDeclare('org.patternfly.component.menu.NoResults$impl');
let PopperMenuToggleMenu = goog.forwardDeclare('org.patternfly.component.menu.PopperMenuToggleMenu$impl');
let PopperTypeahead = goog.forwardDeclare('org.patternfly.component.menu.PopperTypeahead$impl');
let Typeahead = goog.forwardDeclare('org.patternfly.component.menu.Typeahead$impl');
let BaseSearchInput = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
let BaseTextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.BaseTextInputGroup$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TypeaheadSupport extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TypeaheadSupport} */
 static $create__() {
  TypeaheadSupport.$clinit();
  let $instance = new TypeaheadSupport();
  $instance.$ctor__org_patternfly_component_menu_TypeaheadSupport__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_TypeaheadSupport__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static m_typeaheadDefaults__org_patternfly_component_menu_MenuToggleMenu__void(/** MenuToggleMenu<?> */ mtm) {
  TypeaheadSupport.$clinit();
  (/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(mtm.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_input__org_jboss_elemento_HTMLInputElementBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_combobox__org_patternfly_core_Roles), HTMLInputElementBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLInputElementBuilder))).m_autocomplete__java_lang_String__org_jboss_elemento_TypedBuilder('off'), HTMLInputElementBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   mtm.m_toggle__void();
  });
  mtm.m_onToggle__org_patternfly_handler_ToggleHandler__org_jboss_elemento_TypedBuilder(ToggleHandler.$adapt((/** Event */ e, /** ? */ c, /** boolean */ expanded) =>{
   let c_1 = /**@type {?}*/ ($Casts.$to(c, /**@type {Function}*/ (TypedBuilder)));
   if (expanded) {
    mtm.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
   }
  }));
  (/**@type {!BaseTextInputGroup<BaseSearchInput>}*/ (mtm.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_onClear__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(ComponentHandler.$adapt((/** Event */ e_1, /** ? */ si) =>{
   let si_1 = /**@type {?}*/ ($Casts.$to(si, BaseSearchInput));
   mtm.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
   mtm.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_unselectAllItems__void_$pp_org_patternfly_component_menu();
   (/**@type {!BaseTextInputGroup<BaseSearchInput>}*/ (si_1)).m_input__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().focus();
  })))).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_2, /** ? */ c_2, /** ?string */ value) =>{
   let c_3 = /**@type {?}*/ ($Casts.$to(c_2, BaseSearchInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   if (j_l_String.m_isEmpty__java_lang_String__boolean(value_1)) {
    mtm.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
   }
  }));
 }
 /** @nodts @return {boolean} */
 static m_shouldExpandOnKeyup__org_patternfly_component_menu_MenuToggleMenu__elemental2_dom_Event__boolean(/** MenuToggleMenu<?> */ mtm, /** Event */ event) {
  TypeaheadSupport.$clinit();
  if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_Event__boolean(event) || Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_Event__boolean(event) || Key.f_Tab__org_jboss_elemento_Key.m_match__elemental2_dom_Event__boolean(event)) {
   return false;
  }
  return !mtm.m_expanded__boolean();
 }
 /** @nodts @return {boolean} */
 static m_utilitiesClick__elemental2_dom_Event__boolean(/** Event */ event) {
  TypeaheadSupport.$clinit();
  return !$Equality.$same(Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Element}*/ ($Casts.$to(event.target, Element_$Overlay)), By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_utilities__org_patternfly_style_Classes], j_l_String))))), null);
 }
 /** @nodts */
 static m_allowNewItems__org_patternfly_component_menu_MenuToggleMenu__org_patternfly_component_menu_Typeahead__java_util_function_Function__java_util_function_Function__void(/** MenuToggleMenu<?> */ mtm, /** Typeahead<?> */ typeahead, /** j_u_function_Function<?string, ?string> */ prompt, /** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {
  TypeaheadSupport.$clinit();
  typeahead.m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_MenuToggleMenu(NoResults.$adapt(/**  @return {MenuItem}*/ ((/** MenuList */ menuList, /** ?string */ text) =>{
   return MenuItem.m_createNewMenuItem__java_lang_String__org_patternfly_component_menu_MenuItem(/**@type {?string}*/ ($Casts.$to(prompt.m_apply__java_lang_Object__java_lang_Object(text), j_l_String))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItem(ComponentHandler.$adapt((/** Event */ e, /** MenuItem */ c) =>{
    let c_1 = /**@type {MenuItem}*/ ($Casts.$to(c, MenuItem));
    (/**@type {!Promise<!*>}*/ ((/**@type {Promise<MenuItem>}*/ ($Casts.$to(createItem.m_apply__java_lang_Object__java_lang_Object(text), Promise_$Overlay))).then(/**  @return {IThenable<*>}*/ ((/** MenuItem */ menuItem) =>{
     let menuItem_1 = /**@type {MenuItem}*/ ($Casts.$to(menuItem, MenuItem));
     mtm.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
     menuList.m_add__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(menuItem_1);
     mtm.f_menu__org_patternfly_component_menu_MenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem_1, true, true);
     return null;
    })))).finally(() =>{
     mtm.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_text__java_lang_String__org_patternfly_component_menu_MenuToggle(text);
     mtm.f_menuToggle__org_patternfly_component_menu_MenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_input__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().focus();
     mtm.m_collapse__boolean__void(false);
    });
   }));
  })));
 }
 /** @nodts @deprecated */
 static m_typeaheadDefaults__org_patternfly_component_menu_PopperMenuToggleMenu__void(/** PopperMenuToggleMenu<?> */ mtm) {
  TypeaheadSupport.$clinit();
  (/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(mtm.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_input__org_jboss_elemento_HTMLInputElementBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_combobox__org_patternfly_core_Roles), HTMLInputElementBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLInputElementBuilder))).m_autocomplete__java_lang_String__org_jboss_elemento_TypedBuilder('off'), HTMLInputElementBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   mtm.m_toggle__void();
  });
  mtm.m_onToggle__org_patternfly_handler_ToggleHandler__org_jboss_elemento_TypedBuilder(ToggleHandler.$adapt((/** Event */ e, /** ? */ c, /** boolean */ expanded) =>{
   let c_1 = /**@type {?}*/ ($Casts.$to(c, /**@type {Function}*/ (TypedBuilder)));
   if (expanded) {
    mtm.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
   }
  }));
  (/**@type {!BaseTextInputGroup<BaseSearchInput>}*/ (mtm.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_onClear__org_patternfly_handler_ComponentHandler__org_patternfly_component_textinputgroup_BaseSearchInput(ComponentHandler.$adapt((/** Event */ e_1, /** ? */ si) =>{
   let si_1 = /**@type {?}*/ ($Casts.$to(si, BaseSearchInput));
   mtm.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
   mtm.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_unselectAllItems__void_$pp_org_patternfly_component_menu();
   (/**@type {!BaseTextInputGroup<BaseSearchInput>}*/ (si_1)).m_input__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().focus();
  })))).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_BaseTextInputGroup(ChangeHandler.$adapt((/** Event */ e_2, /** ? */ c_2, /** ?string */ value) =>{
   let c_3 = /**@type {?}*/ ($Casts.$to(c_2, BaseSearchInput));
   let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
   if (j_l_String.m_isEmpty__java_lang_String__boolean(value_1)) {
    mtm.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
   }
  }));
 }
 /** @nodts @deprecated */
 static m_allowNewItems__org_patternfly_component_menu_PopperMenuToggleMenu__org_patternfly_component_menu_PopperTypeahead__java_util_function_Function__java_util_function_Function__void(/** PopperMenuToggleMenu<?> */ mtm, /** PopperTypeahead<?> */ typeahead, /** j_u_function_Function<?string, ?string> */ prompt, /** j_u_function_Function<?string, Promise<MenuItem>> */ createItem) {
  TypeaheadSupport.$clinit();
  typeahead.m_onNoResults__org_patternfly_component_menu_NoResults__org_patternfly_component_menu_PopperMenuToggleMenu(NoResults.$adapt(/**  @return {MenuItem}*/ ((/** MenuList */ menuList, /** ?string */ text) =>{
   return MenuItem.m_createNewMenuItem__java_lang_String__org_patternfly_component_menu_MenuItem(/**@type {?string}*/ ($Casts.$to(prompt.m_apply__java_lang_Object__java_lang_Object(text), j_l_String))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItem(ComponentHandler.$adapt((/** Event */ e, /** MenuItem */ c) =>{
    let c_1 = /**@type {MenuItem}*/ ($Casts.$to(c, MenuItem));
    (/**@type {!Promise<!*>}*/ ((/**@type {Promise<MenuItem>}*/ ($Casts.$to(createItem.m_apply__java_lang_Object__java_lang_Object(text), Promise_$Overlay))).then(/**  @return {IThenable<*>}*/ ((/** MenuItem */ menuItem) =>{
     let menuItem_1 = /**@type {MenuItem}*/ ($Casts.$to(menuItem, MenuItem));
     mtm.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_clearSearch__void_$pp_org_patternfly_component_menu();
     menuList.m_add__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(menuItem_1);
     mtm.f_menu__org_patternfly_component_menu_PopperMenuToggleMenu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem_1, true, true);
     return null;
    })))).finally(() =>{
     mtm.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_text__java_lang_String__org_patternfly_component_menu_MenuToggle(text);
     mtm.f_menuToggle__org_patternfly_component_menu_PopperMenuToggleMenu.m_searchInput__org_patternfly_component_textinputgroup_BaseSearchInput().m_input__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().focus();
     mtm.m_collapse__boolean__void(false);
    });
   }));
  })));
 }
 /** @nodts @return {boolean} @deprecated */
 static m_shouldExpandOnKeyup__org_patternfly_component_menu_PopperMenuToggleMenu__elemental2_dom_Event__boolean(/** PopperMenuToggleMenu<?> */ mtm, /** Event */ event) {
  TypeaheadSupport.$clinit();
  if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_Event__boolean(event) || Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_Event__boolean(event) || Key.f_Tab__org_jboss_elemento_Key.m_match__elemental2_dom_Event__boolean(event)) {
   return false;
  }
  return !mtm.m_expanded__boolean();
 }
 /** @nodts */
 static $clinit() {
  TypeaheadSupport.$clinit = () =>{};
  TypeaheadSupport.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TypeaheadSupport;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  TypedBuilder = goog.module.get('org.jboss.elemento.TypedBuilder$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  NoResults = goog.module.get('org.patternfly.component.menu.NoResults$impl');
  BaseSearchInput = goog.module.get('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TypeaheadSupport, 'org.patternfly.component.menu.TypeaheadSupport');

exports = TypeaheadSupport;

//# sourceMappingURL=TypeaheadSupport.js.map
