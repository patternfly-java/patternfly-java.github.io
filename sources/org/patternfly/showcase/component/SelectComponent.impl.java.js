goog.module('org.patternfly.showcase.component.SelectComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let ResolveCallbackFn_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Link = goog.forwardDeclare('org.jboss.elemento.router.Link$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.component.AsyncItems$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let ContentType = goog.forwardDeclare('org.patternfly.component.content.ContentType$impl');
let HelperText = goog.forwardDeclare('org.patternfly.component.help.HelperText$impl');
let HelperTextItem = goog.forwardDeclare('org.patternfly.component.help.HelperTextItem$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuGroup = goog.forwardDeclare('org.patternfly.component.menu.MenuGroup$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let MultiSelect = goog.forwardDeclare('org.patternfly.component.menu.MultiSelect$impl');
let MultiSelectMenu = goog.forwardDeclare('org.patternfly.component.menu.MultiSelectMenu$impl');
let MultiTypeahead = goog.forwardDeclare('org.patternfly.component.menu.MultiTypeahead$impl');
let SingleSelect = goog.forwardDeclare('org.patternfly.component.menu.SingleSelect$impl');
let SingleSelectMenu = goog.forwardDeclare('org.patternfly.component.menu.SingleSelectMenu$impl');
let SingleTypeahead = goog.forwardDeclare('org.patternfly.component.menu.SingleTypeahead$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Showcase = goog.forwardDeclare('org.patternfly.showcase.Showcase$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SelectComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SelectComponent} */
 static $create__() {
  SelectComponent.$clinit();
  let $instance = new SelectComponent();
  $instance.$ctor__org_patternfly_showcase_component_SelectComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_SelectComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'select'), Component_$Overlay)));
  this.m_startExamples__org_patternfly_component_content_Content__void(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Select builds off of the menu component suite to adapt commonly used properties and functions to create a select menu. See the '), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Link.m_link__org_jboss_elemento_router_PlaceManager__java_lang_String__org_jboss_elemento_router_Link(Showcase.m_placeManager__org_jboss_elemento_router_PlaceManager(), '/components/menus/menu').m_text__java_lang_String__org_jboss_elemento_TypedBuilder('menu documentation'), HTMLContainerBuilder))), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' for a full list of properties that may be used to further customize a select menu.'), Content)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('single-select', 'Single select', Code.m_code__java_lang_String__java_lang_String('single-select'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleSelect}*/ ($Casts.$to((/**@type {SingleSelect}*/ ($Casts.$to(SingleSelect.m_singleSelect__java_lang_String__org_patternfly_component_menu_SingleSelect('Select a value').m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', '200px'), SingleSelect))).m_applyToMenuList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuList */ list) =>{
    let list_1 = /**@type {MenuList}*/ ($Casts.$to(list, MenuList));
    (/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(list_1.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-0', 'Option 1')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-1', 'Option 2')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-2', 'Option 3'));
   })), SingleSelect))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('select-option-variants', 'Select option variants', Code.m_code__java_lang_String__java_lang_String('select-option-variants'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleSelect}*/ ($Casts.$to((/**@type {SingleSelect}*/ ($Casts.$to(SingleSelect.m_singleSelect__java_lang_String__org_patternfly_component_menu_SingleSelect('Select a value').m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', '200px'), SingleSelect))).m_applyToMenuList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuList */ list_2) =>{
    let list_3 = /**@type {MenuList}*/ ($Casts.$to(list_2, MenuList));
    (/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(list_3.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-0', 'Basic option')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-1', 'Option with description').m_description__java_lang_String__org_patternfly_component_menu_MenuItem('This is a description')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-3', 'Option with link', Showcase.m_placeManager__org_jboss_elemento_router_PlaceManager().m_href__java_lang_String__java_lang_String('/components/menus/select')).m_external__org_patternfly_component_menu_MenuItem()), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-4', 'Option with icon').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_bell__org_patternfly_icon_PredefinedIcon()), MenuItem))), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-5', 'Disabled options').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-6', 'See menu for additional variants'));
   })), SingleSelect))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('select-groups', 'With grouped items', Code.m_code__java_lang_String__java_lang_String('select-groups'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleSelect}*/ ($Casts.$to((/**@type {SingleSelect}*/ ($Casts.$to(SingleSelect.m_singleSelect__java_lang_String__org_patternfly_component_menu_SingleSelect('Select a value').m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', '200px'), SingleSelect))).m_addMenu__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(SingleSelectMenu.m_singleSelectMenu__org_patternfly_component_menu_SingleSelectMenu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addGroup__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(MenuGroup.m_menuGroup__java_lang_String__org_patternfly_component_menu_MenuGroup('Group 1').m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-0', 'Option 1')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-1', 'Option 2')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-2', 'Option 3')), MenuList)))).m_addDivider__org_patternfly_component_menu_MenuContent().m_addGroup__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(MenuGroup.m_menuGroup__java_lang_String__org_patternfly_component_menu_MenuGroup('Group 2')).m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-3', 'Option 4')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-4', 'Option 5')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('option-5', 'Option 6')), MenuList))))), SingleSelect))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('select-validation', 'With validation', Code.m_code__java_lang_String__java_lang_String('select-validation'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let menuToggle = MenuToggle.m_menuToggle__java_lang_String__org_patternfly_component_menu_MenuToggle('Select a value');
   let helperText = HelperText.m_helperText__org_patternfly_component_help_HelperText().m_liveRegion__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__org_patternfly_component_help_HelperTextItem());
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(helperText, false);
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleSelect}*/ ($Casts.$to((/**@type {SingleSelect}*/ ($Casts.$to(SingleSelect.m_singleSelect__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_SingleSelect(menuToggle).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', '200px'), SingleSelect))).m_addMenu__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(SingleSelectMenu.m_singleSelectMenu__org_patternfly_component_menu_SingleSelectMenu().m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_menu_Menu(SelectHandler.$adapt((/** Event */ event, /** MenuItem */ menuItem, /** boolean */ selected) =>{
    let menuItem_1 = /**@type {MenuItem}*/ ($Casts.$to(menuItem, MenuItem));
    let validationStatus = /**@type {ValidationStatus}*/ ($Casts.$to(menuItem_1.m_get__java_lang_String__java_lang_Object('status'), ValidationStatus));
    menuToggle.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_menu_MenuToggle(validationStatus);
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(helperText, $Equality.$same(validationStatus, ValidationStatus.f_warning__org_patternfly_component_ValidationStatus) || $Equality.$same(validationStatus, ValidationStatus.f_error__org_patternfly_component_ValidationStatus));
    helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(validationStatus);
    if ($Equality.$same(validationStatus, ValidationStatus.f_warning__org_patternfly_component_ValidationStatus)) {
     helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('Warning text that explains the issue.');
    } else if ($Equality.$same(validationStatus, ValidationStatus.f_error__org_patternfly_component_ValidationStatus)) {
     helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('Error text that explains the issue.');
    }
   })).m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('success', 'Success').m_store__java_lang_String__java_lang_Object__org_patternfly_component_menu_MenuItem('status', ValidationStatus.f_success__org_patternfly_component_ValidationStatus)), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('warning', 'Warning').m_store__java_lang_String__java_lang_Object__org_patternfly_component_menu_MenuItem('status', ValidationStatus.f_warning__org_patternfly_component_ValidationStatus)), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('danger', 'Danger').m_store__java_lang_String__java_lang_Object__org_patternfly_component_menu_MenuItem('status', ValidationStatus.f_error__org_patternfly_component_ValidationStatus)), MenuList))))), SingleSelect))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(helperText), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('multi-select', 'Checkbox select', Code.m_code__java_lang_String__java_lang_String('multi-select'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {MultiSelect}*/ ($Casts.$to(MultiSelect.m_multiSelect__java_lang_String__org_patternfly_component_menu_MultiSelect('Filter by status').m_addMenu__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(MultiSelectMenu.m_multiSelectCheckboxMenu__org_patternfly_component_menu_MultiSelectMenu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_checkboxMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('debug', 'Debug')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_checkboxMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('info', 'Info')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_checkboxMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('warn', 'Warn')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_checkboxMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('error', 'Error').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))), MenuList))))), MultiSelect))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('single-typeahead', 'Typeahead', Code.m_code__java_lang_String__java_lang_String('single-typeahead'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleTypeahead}*/ ($Casts.$to((/**@type {SingleTypeahead}*/ ($Casts.$to(SingleTypeahead.m_singleTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_SingleTypeahead('single-typeahead-0', 'Select a state').m_applyToMenuToggle__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuToggle */ arg0) =>{
    let arg0_1 = /**@type {MenuToggle}*/ ($Casts.$to(arg0, MenuToggle));
    arg0_1.m_fullWidth__org_jboss_elemento_TypedBuilder();
   })), SingleTypeahead))).m_applyToMenuList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuList */ list_4) =>{
    let list_5 = /**@type {MenuList}*/ ($Casts.$to(list_4, MenuList));
    (/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(list_5.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('alabama', 'Alabama')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('florida', 'Florida')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-jersey', 'New Jersey')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-mexico', 'New Mexico')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-york', 'New York')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('north-carolina', 'North Carolina'));
   })), SingleTypeahead))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('single-typeahead-create', 'Typeahead with create option', Code.m_code__java_lang_String__java_lang_String('single-typeahead-create'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {SingleTypeahead}*/ ($Casts.$to((/**@type {SingleTypeahead}*/ ($Casts.$to(SingleTypeahead.m_singleTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_SingleTypeahead('single-typeahead-create-0', 'Select a state').m_applyToMenuToggle__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuToggle */ arg0_2) =>{
    let arg0_3 = /**@type {MenuToggle}*/ ($Casts.$to(arg0_2, MenuToggle));
    arg0_3.m_fullWidth__org_jboss_elemento_TypedBuilder();
   })), SingleTypeahead))).m_applyToMenuList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuList */ list_6) =>{
    let list_7 = /**@type {MenuList}*/ ($Casts.$to(list_6, MenuList));
    (/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(list_7.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('alabama', 'Alabama')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('florida', 'Florida')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-jersey', 'New Jersey')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-mexico', 'New Mexico')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-york', 'New York')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('north-carolina', 'North Carolina'));
   })), SingleTypeahead))).m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_SingleTypeahead(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** ?string */ value) =>{
    let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
    return 'Create new item \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value_1) + '\"';
   })), j_u_function_Function.$adapt(/**  @return {Promise<MenuItem>}*/ ((/** ?string */ value_2) =>{
    let value_3 = /**@type {?string}*/ ($Casts.$to(value_2, j_l_String));
    return /**@type {!Promise<!MenuItem>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(value_3, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), value_3)));
   })))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('single-typeahead-async', 'Typeahead (async)', Code.m_code__java_lang_String__java_lang_String('single-typeahead-async'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let asyncItems = AsyncItems.$adapt(/**  @return {Promise<Iterable<MenuItem>>}*/ ((/** MenuList */ c) =>{
    let c_1 = /**@type {MenuList}*/ ($Casts.$to(c, MenuList));
    return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (new Promise((/** function(?):void */ res, /** function(!*):void */ rej) =>{
     DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
      ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(res, /**@type {List<MenuItem>}*/ ($Casts.$to((/**@type {Stream<MenuItem>}*/ ((/**@type {Stream<?string>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(LoremIpsum.m_words__int__java_lang_String(100), ' ')))).m_distinct__java_util_stream_Stream().m_sorted__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ word) =>{
       let word_1 = /**@type {?string}*/ ($Casts.$to(word, j_l_String));
       return MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('item-', /**@type {!Array<?string>}*/ ($Arrays.$stampType([word_1], j_l_String))), word_1);
      }))))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<MenuItem, *, List<MenuItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))));
     }, 1234 + Random.$create__().m_nextInt__int__int(3456) | 0, []);
    }));
   }));
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleTypeahead}*/ ($Casts.$to((/**@type {SingleTypeahead}*/ ($Casts.$to(SingleTypeahead.m_singleTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_SingleTypeahead('single-typeahead-async-0', 'Lorem ipsum').m_applyToMenuToggle__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuToggle */ arg0_4) =>{
    let arg0_5 = /**@type {MenuToggle}*/ ($Casts.$to(arg0_4, MenuToggle));
    arg0_5.m_fullWidth__org_jboss_elemento_TypedBuilder();
   })), SingleTypeahead))).m_addMenu__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(SingleSelectMenu.m_singleSelectMenu__org_patternfly_component_menu_SingleSelectMenu().m_scrollable__org_patternfly_component_menu_Menu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(asyncItems), MenuList))))), SingleTypeahead))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('multi-typeahead', 'Multiple typeahead with labels', Code.m_code__java_lang_String__java_lang_String('multi-typeahead'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {MultiTypeahead}*/ ($Casts.$to((/**@type {MultiTypeahead}*/ ($Casts.$to(MultiTypeahead.m_multiTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_MultiTypeahead('multi-typeahead-0', 'Select a state').m_applyToMenuToggle__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuToggle */ arg0_6) =>{
    let arg0_7 = /**@type {MenuToggle}*/ ($Casts.$to(arg0_6, MenuToggle));
    arg0_7.m_fullWidth__org_jboss_elemento_TypedBuilder();
   })), MultiTypeahead))).m_applyToMenuList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuList */ list_8) =>{
    let list_9 = /**@type {MenuList}*/ ($Casts.$to(list_8, MenuList));
    (/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(list_9.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('alabama', 'Alabama')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('florida', 'Florida')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-jersey', 'New Jersey')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-mexico', 'New Mexico')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-york', 'New York')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('north-carolina', 'North Carolina'));
   })), MultiTypeahead))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('multi-typeahead-create', 'Multiple typeahead with create option', Code.m_code__java_lang_String__java_lang_String('multi-typeahead-create'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {MultiTypeahead}*/ ($Casts.$to((/**@type {MultiTypeahead}*/ ($Casts.$to(MultiTypeahead.m_multiTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_MultiTypeahead('multi-typeahead-create-0', 'Select a state').m_applyToMenuToggle__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuToggle */ arg0_8) =>{
    let arg0_9 = /**@type {MenuToggle}*/ ($Casts.$to(arg0_8, MenuToggle));
    arg0_9.m_fullWidth__org_jboss_elemento_TypedBuilder();
   })), MultiTypeahead))).m_applyToMenuList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuList */ list_10) =>{
    let list_11 = /**@type {MenuList}*/ ($Casts.$to(list_10, MenuList));
    (/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to((/**@type {MenuList}*/ ($Casts.$to(list_11.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('alabama', 'Alabama')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('florida', 'Florida')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-jersey', 'New Jersey')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-mexico', 'New Mexico')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('new-york', 'New York')), MenuList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('north-carolina', 'North Carolina'));
   })), MultiTypeahead))).m_allowNewItems__java_util_function_Function__java_util_function_Function__org_patternfly_component_menu_MultiTypeahead(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** ?string */ value_4) =>{
    let value_5 = /**@type {?string}*/ ($Casts.$to(value_4, j_l_String));
    return 'Create new item \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value_5) + '\"';
   })), j_u_function_Function.$adapt(/**  @return {Promise<MenuItem>}*/ ((/** ?string */ value_6) =>{
    let value_7 = /**@type {?string}*/ ($Casts.$to(value_6, j_l_String));
    return /**@type {!Promise<!MenuItem>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(value_7, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), value_7)));
   })))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('multi-typeahead-async', 'Multiple typeahead (async)', Code.m_code__java_lang_String__java_lang_String('multi-typeahead-async'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let asyncItems_1 = AsyncItems.$adapt(/**  @return {Promise<Iterable<MenuItem>>}*/ ((/** MenuList */ c_2) =>{
    let c_3 = /**@type {MenuList}*/ ($Casts.$to(c_2, MenuList));
    return /**@type {!Promise<!Iterable<!MenuItem>>}*/ (new Promise((/** function(?):void */ res_1, /** function(!*):void */ rej_1) =>{
     DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ ___1) =>{
      ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(res_1, /**@type {List<MenuItem>}*/ ($Casts.$to((/**@type {Stream<MenuItem>}*/ ((/**@type {Stream<?string>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(LoremIpsum.m_words__int__java_lang_String(100), ' ')))).m_distinct__java_util_stream_Stream().m_sorted__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {MenuItem}*/ ((/** ?string */ word_2) =>{
       let word_3 = /**@type {?string}*/ ($Casts.$to(word_2, j_l_String));
       return MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('item-', /**@type {!Array<?string>}*/ ($Arrays.$stampType([word_3], j_l_String))), word_3);
      }))))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<MenuItem, *, List<MenuItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))));
     }, 1234 + Random.$create__().m_nextInt__int__int(3456) | 0, []);
    }));
   }));
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {MultiTypeahead}*/ ($Casts.$to((/**@type {MultiTypeahead}*/ ($Casts.$to(MultiTypeahead.m_multiTypeahead__java_lang_String__java_lang_String__org_patternfly_component_menu_MultiTypeahead('multi-typeahead-async-0', 'Lorem ipsum').m_applyToMenuToggle__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** MenuToggle */ arg0_10) =>{
    let arg0_11 = /**@type {MenuToggle}*/ ($Casts.$to(arg0_10, MenuToggle));
    arg0_11.m_fullWidth__org_jboss_elemento_TypedBuilder();
   })), MultiTypeahead))).m_addMenu__org_patternfly_component_menu_Menu__org_jboss_elemento_TypedBuilder(MultiSelectMenu.m_multiSelectMenu__org_patternfly_component_menu_MultiSelectMenu().m_scrollable__org_patternfly_component_menu_Menu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/**@type {MenuList}*/ ($Casts.$to(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(asyncItems_1), MenuList))))), MultiTypeahead))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(MultiSelect));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(MultiSelect), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(MultiSelectMenu), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(SingleSelect), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(SingleSelectMenu), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  SelectComponent.$clinit = () =>{};
  SelectComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  ResolveCallbackFn_$Overlay = goog.module.get('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  List = goog.module.get('java.util.List$impl');
  Random = goog.module.get('java.util.Random$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Link = goog.module.get('org.jboss.elemento.router.Link$impl');
  AsyncItems = goog.module.get('org.patternfly.component.AsyncItems$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  ContentType = goog.module.get('org.patternfly.component.content.ContentType$impl');
  HelperText = goog.module.get('org.patternfly.component.help.HelperText$impl');
  HelperTextItem = goog.module.get('org.patternfly.component.help.HelperTextItem$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuGroup = goog.module.get('org.patternfly.component.menu.MenuGroup$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  MultiSelect = goog.module.get('org.patternfly.component.menu.MultiSelect$impl');
  MultiSelectMenu = goog.module.get('org.patternfly.component.menu.MultiSelectMenu$impl');
  MultiTypeahead = goog.module.get('org.patternfly.component.menu.MultiTypeahead$impl');
  SingleSelect = goog.module.get('org.patternfly.component.menu.SingleSelect$impl');
  SingleSelectMenu = goog.module.get('org.patternfly.component.menu.SingleSelectMenu$impl');
  SingleTypeahead = goog.module.get('org.patternfly.component.menu.SingleTypeahead$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Showcase = goog.module.get('org.patternfly.showcase.Showcase$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SelectComponent, 'org.patternfly.showcase.component.SelectComponent');

exports = SelectComponent;

//# sourceMappingURL=SelectComponent.js.map
