goog.module('org.patternfly.component.menu.MenuItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const ComponentIconAndText = goog.require('org.patternfly.component.ComponentIconAndText$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ButtonType = goog.forwardDeclare('org.jboss.elemento.ButtonType$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.component.AsyncItems$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItemAction = goog.forwardDeclare('org.patternfly.component.menu.MenuItemAction$impl');
let MenuItemType = goog.forwardDeclare('org.patternfly.component.menu.MenuItemType$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let Skeleton = goog.forwardDeclare('org.patternfly.component.skeleton.Skeleton$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Timeouts = goog.forwardDeclare('org.patternfly.core.Timeouts$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLElement, MenuItem>}
 * @implements {Attachable}
 * @implements {ComponentContext<HTMLElement, MenuItem>}
 * @implements {ComponentIcon<HTMLElement, MenuItem>}
 * @implements {ComponentIconAndText<HTMLElement, MenuItem>}
 * @implements {Disabled<HTMLElement, MenuItem>}
 * @implements {ElementTextDelegate<HTMLElement, MenuItem>}
 * @implements {HasIdentifier<HTMLElement, MenuItem>}
 */
class MenuItem extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {MenuItemType} @nodts*/
  this.f_itemType__org_patternfly_component_menu_MenuItem;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_menu_MenuItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_itemElement__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_mainElement__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_menu_MenuItem_;
  /**@type {List<ComponentHandler<MenuItem>>} @nodts*/
  this.f_onClickHandler__org_patternfly_component_menu_MenuItem_;
  /**@type {List<ComponentHandler<MenuItem>>} @nodts*/
  this.f_loadedHandler__org_patternfly_component_menu_MenuItem_;
  /**@type {MenuItem} @nodts*/
  this.f_sourceItem__org_patternfly_component_menu_MenuItem;
  /**@type {MenuItem} @nodts*/
  this.f_favoriteItem__org_patternfly_component_menu_MenuItem;
  /**@type {MenuItemAction} @nodts*/
  this.f_markAsFavorite__org_patternfly_component_menu_MenuItem;
  /**@type {?string} @nodts*/
  this.f_loadingText__org_patternfly_component_menu_MenuItem_;
  /**@type {number} @nodts*/
  this.f_loadingTimeout__org_patternfly_component_menu_MenuItem_ = 0;
  /**@type {boolean} @nodts*/
  this.f_initialSelection__org_patternfly_component_menu_MenuItem_ = false;
  /**@type {Checkbox} @nodts*/
  this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_;
  /**@type {MenuItemAction} @nodts*/
  this.f_itemAction__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_descriptionElement__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_selectIcon__org_patternfly_component_menu_MenuItem_;
 }
 /** @nodts @return {MenuItem} */
 static m_menuItem__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ identifier) {
  MenuItem.$clinit();
  return MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems(identifier, null, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType, null);
 }
 /** @nodts @return {MenuItem} */
 static m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ identifier, /** ?string */ text) {
  MenuItem.$clinit();
  return MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems(identifier, text, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType, null);
 }
 /** @nodts @return {MenuItem} */
 static m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ href) {
  MenuItem.$clinit();
  return MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems(identifier, text, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType, null).m_href__java_lang_String__org_patternfly_component_menu_MenuItem(href);
 }
 /** @nodts @return {MenuItem} */
 static m_checkboxMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ identifier, /** ?string */ text) {
  MenuItem.$clinit();
  return MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems(identifier, text, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType, null);
 }
 /** @nodts @return {MenuItem} */
 static m_asyncMenuItem__java_lang_String__java_lang_String__org_patternfly_component_AsyncItems__org_patternfly_component_menu_MenuItem(/** ?string */ identifier, /** ?string */ text, /** AsyncItems<MenuList, MenuItem> */ loadItems) {
  MenuItem.$clinit();
  return /**@type {MenuItem}*/ ($Casts.$to(MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems(identifier, text, MenuItemType.f_async__org_patternfly_component_menu_MenuItemType, loadItems).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_load__org_patternfly_style_Classes)], j_l_String))), MenuItem));
 }
 /** @nodts @return {MenuItem} */
 static m_skeletonMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ identifier, /** ?string */ loading) {
  MenuItem.$clinit();
  let menuItem = MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems(identifier, null, MenuItemType.f_async__org_patternfly_component_menu_MenuItemType, null);
  Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(menuItem.f_textElement__org_patternfly_component_menu_MenuItem_, [(/**@type {Skeleton}*/ ($Casts.$to(Skeleton.m_skeleton__org_patternfly_component_skeleton_Skeleton().m_screenReaderText__java_lang_String__org_patternfly_component_skeleton_Skeleton(loading).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String('w-100')], j_l_String))), Skeleton))).m_element__elemental2_dom_HTMLElement()]);
  return menuItem;
 }
 /** @nodts @return {MenuItem} */
 static m_createNewMenuItem__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ text) {
  MenuItem.$clinit();
  return /**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_menuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('create-new', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), text).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(MenuItem.f_CREATE_NEW_MARKER__org_patternfly_component_menu_MenuItem_, ''), MenuItem));
 }
 //Factory method corresponding to constructor 'MenuItem(String, String, MenuItemType, AsyncItems)'.
 /** @nodts @return {!MenuItem} */
 static $create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems(/** ?string */ identifier, /** ?string */ text, /** MenuItemType */ itemType, /** AsyncItems<MenuList, MenuItem> */ loadItems) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_patternfly_component_menu_MenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems__void(identifier, text, itemType, loadItems);
  return $instance;
 }
 //Initialization from constructor 'MenuItem(String, String, MenuItemType, AsyncItems)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_AsyncItems__void(/** ?string */ identifier, /** ?string */ text, /** MenuItemType */ itemType, /** AsyncItems<MenuList, MenuItem> */ loadItems) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MenuItem.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuItem, MenuItem.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_none__org_patternfly_core_Roles), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_menu_MenuItem_ = identifier;
  this.f_itemType__org_patternfly_component_menu_MenuItem = itemType;
  this.f_data__org_patternfly_component_menu_MenuItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_onClickHandler__org_patternfly_component_menu_MenuItem_ = (/**@type {!ArrayList<ComponentHandler<MenuItem>>}*/ (ArrayList.$create__()));
  this.f_loadedHandler__org_patternfly_component_menu_MenuItem_ = (/**@type {!ArrayList<ComponentHandler<MenuItem>>}*/ (ArrayList.$create__()));
  let /** HTMLContainerBuilder<?> */ itemBuilder;
  if ($Equality.$same(itemType, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType) || $Equality.$same(itemType, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType) || $Equality.$same(itemType, MenuItemType.f_async__org_patternfly_component_menu_MenuItemType)) {
   itemBuilder = $Equality.$same(itemType, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType) || $Equality.$same(itemType, MenuItemType.f_async__org_patternfly_component_menu_MenuItemType) ? /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder)) : /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder));
   itemBuilder.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  } else if ($Equality.$same(itemType, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType)) {
   let checkboxId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(identifier, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['check'], j_l_String)));
   itemBuilder = (/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLLabelElement */ l) =>{
    let l_1 = /**@type {HTMLLabelElement}*/ ($Casts.$to(l, HTMLLabelElement_$Overlay));
    l_1.htmlFor = checkboxId;
    l_1.tabIndex = -1;
   })), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_check__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_ = Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(checkboxId, checkboxId).m_standalone__org_patternfly_component_form_Checkbox().m_applyTo__java_util_function_Consumer__org_patternfly_component_form_Checkbox(Consumer.$adapt((/** HTMLInputElementBuilder<HTMLInputElement> */ checkbox) =>{
    let checkbox_1 = /**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(checkbox, HTMLInputElementBuilder));
    checkbox_1.m_tabIndex__int__org_jboss_elemento_TypedBuilder(-1);
   }))), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)));
  } else {
   itemBuilder = (/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))), HTMLContainerBuilder)));
   MenuItem.f_logger__org_patternfly_component_menu_MenuItem_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unknown menu item type %s for %o', [itemType, this.m_element__elemental2_dom_HTMLElement()]);
  }
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_itemElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(itemBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   if (!this.m_isAriaDisabled__elemental2_dom_HTMLElement__boolean_$p_org_patternfly_component_menu_MenuItem(/**@type {HTMLElement}*/ ($Casts.$to(e_1.currentTarget, $Overlay)))) {
    this.f_onClickHandler__org_patternfly_component_menu_MenuItem_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<MenuItem> */ h) =>{
     let h_1 = /**@type {ComponentHandler<MenuItem>}*/ ($Casts.$to(h, /**@type {Function}*/ (ComponentHandler)));
     h_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
    }));
   }
  }), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement())));
  if (!$Equality.$same(text, null)) {
   this.f_textElement__org_patternfly_component_menu_MenuItem_.textContent = text;
  }
  if ($Equality.$same(itemType, MenuItemType.f_async__org_patternfly_component_menu_MenuItemType) && !$Equality.$same(loadItems, null)) {
   this.m_loadItems__org_patternfly_component_AsyncItems__void_$p_org_patternfly_component_menu_MenuItem(loadItems);
  } else if (!$Equality.$same(loadItems, null)) {
   MenuItem.f_logger__org_patternfly_component_menu_MenuItem_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Ignore load items promise for menu item %o with type \'%s\'', [this.m_element__elemental2_dom_HTMLElement(), itemType.name()]);
  }
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 //Factory method corresponding to constructor 'MenuItem(Menu, MenuItem)'.
 /** @nodts @return {!MenuItem} */
 static $create__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem(/** Menu */ menu, /** MenuItem */ sourceItem) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__void(menu, sourceItem);
  return $instance;
 }
 //Initialization from constructor 'MenuItem(Menu, MenuItem)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__void(/** Menu */ menu, /** MenuItem */ sourceItem) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MenuItem.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuItem, MenuItem.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItem, /**@type {HTMLElement}*/ ($Casts.$to(sourceItem.m_element__elemental2_dom_HTMLElement().cloneNode(true), $Overlay)));
  this.f_identifier__org_patternfly_component_menu_MenuItem_ = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(sourceItem.f_identifier__org_patternfly_component_menu_MenuItem_, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['favorite'], j_l_String)));
  this.f_itemType__org_patternfly_component_menu_MenuItem = sourceItem.f_itemType__org_patternfly_component_menu_MenuItem;
  this.f_data__org_patternfly_component_menu_MenuItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_data__org_patternfly_component_menu_MenuItem_.putAll(sourceItem.f_data__org_patternfly_component_menu_MenuItem_);
  this.f_onClickHandler__org_patternfly_component_menu_MenuItem_ = (/**@type {!ArrayList<ComponentHandler<MenuItem>>}*/ (ArrayList.$create__()));
  this.f_onClickHandler__org_patternfly_component_menu_MenuItem_.addAll(sourceItem.f_onClickHandler__org_patternfly_component_menu_MenuItem_);
  this.f_loadedHandler__org_patternfly_component_menu_MenuItem_ = (/**@type {!ArrayList<ComponentHandler<MenuItem>>}*/ (ArrayList.$create__()));
  this.f_loadedHandler__org_patternfly_component_menu_MenuItem_.addAll(sourceItem.f_loadedHandler__org_patternfly_component_menu_MenuItem_);
  this.f_initialSelection__org_patternfly_component_menu_MenuItem_ = false;
  this.f_sourceItem__org_patternfly_component_menu_MenuItem = sourceItem;
  this.f_favoriteItem__org_patternfly_component_menu_MenuItem = null;
  sourceItem.f_favoriteItem__org_patternfly_component_menu_MenuItem = this;
  this.f_itemElement__org_patternfly_component_menu_MenuItem_ = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))));
  this.f_itemElement__org_patternfly_component_menu_MenuItem_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   if (!this.m_isAriaDisabled__elemental2_dom_HTMLElement__boolean_$p_org_patternfly_component_menu_MenuItem(/**@type {HTMLElement}*/ ($Casts.$to(e.currentTarget, $Overlay)))) {
    this.f_onClickHandler__org_patternfly_component_menu_MenuItem_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<MenuItem> */ h) =>{
     let h_1 = /**@type {ComponentHandler<MenuItem>}*/ ($Casts.$to(h, /**@type {Function}*/ (ComponentHandler)));
     h_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e, sourceItem);
    }));
   }
  }));
  this.f_mainElement__org_patternfly_component_menu_MenuItem_ = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))));
  this.f_textElement__org_patternfly_component_menu_MenuItem_ = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))));
  this.f_iconContainer__org_patternfly_component_menu_MenuItem_ = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))));
  this.f_descriptionElement__org_patternfly_component_menu_MenuItem_ = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))));
  let favoriteItemActionElement = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))).m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorite__org_patternfly_style_Classes))));
  if (!$Equality.$same(favoriteItemActionElement, null)) {
   favoriteItemActionElement.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e_1) =>{
    menu.m_removeFavorite__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(this);
   }));
  }
  if (!$Equality.$same(sourceItem.f_itemAction__org_patternfly_component_menu_MenuItem_, null)) {
   let element = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))));
   if (!$Equality.$same(element, null)) {
    this.f_itemAction__org_patternfly_component_menu_MenuItem_ = MenuItemAction.$create__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLElement(sourceItem, sourceItem.f_itemAction__org_patternfly_component_menu_MenuItem_, element);
   }
  }
  this.m_attachSelectionMode__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_menu_MenuItem(menu, sourceItem);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Menu));
  if (!$Equality.$same(this.f_itemAction__org_patternfly_component_menu_MenuItem_, null)) {
   if (this.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes))) {
    this.f_itemAction__org_patternfly_component_menu_MenuItem_.f_action__org_patternfly_component_menu_MenuItemAction.m_disabled__boolean__org_patternfly_component_button_Button(true);
   }
  }
  switch (menu.f_menuType__org_patternfly_component_menu_Menu.ordinal()) {
   case MenuType.$ordinal_menu__org_patternfly_component_menu_MenuType:
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Attributes.f_role__org_patternfly_core_Attributes, Roles.f_menuitem__org_patternfly_core_Roles);
    break;
   case MenuType.$ordinal_select__org_patternfly_component_menu_MenuType:
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Attributes.f_role__org_patternfly_core_Attributes, Roles.f_option__org_patternfly_core_Roles);
    break;
   case MenuType.$ordinal_checkbox__org_patternfly_component_menu_MenuType:
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.m_element__elemental2_dom_HTMLElement(), Attributes.f_role__org_patternfly_core_Attributes, Roles.f_menuitem__org_patternfly_core_Roles);
    break;
  }
  if (!$Equality.$same(this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_, null)) {
   this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_name__java_lang_String__org_jboss_elemento_TypedBuilder(menu.f_menuName__org_patternfly_component_menu_Menu);
  }
  this.m_attachSelectionMode__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_menu_MenuItem(menu, this);
 }
 /** @nodts */
 m_attachSelectionMode__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_menu_MenuItem(/** Menu */ menu, /** MenuItem */ menuItem) {
  if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_component_SelectionMode) || $Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_click__org_patternfly_component_SelectionMode)) {
   this.f_itemElement__org_patternfly_component_menu_MenuItem_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    if (!JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().dataset, MenuItem.f_CREATE_NEW_MARKER__org_patternfly_component_menu_MenuItem_) && !this.m_isAriaDisabled__elemental2_dom_HTMLElement__boolean_$p_org_patternfly_component_menu_MenuItem(/**@type {HTMLElement}*/ ($Casts.$to(e.currentTarget, $Overlay)))) {
     menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem, true, true);
    }
   }));
  } else if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_group__org_patternfly_component_SelectionMode) || $Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
   EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e_1) =>{
    if (!JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().dataset, MenuItem.f_CREATE_NEW_MARKER__org_patternfly_component_menu_MenuItem_) && !this.m_isAriaDisabled__elemental2_dom_HTMLElement__boolean_$p_org_patternfly_component_menu_MenuItem(/**@type {HTMLElement}*/ ($Casts.$to(e_1.currentTarget, $Overlay)))) {
     if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType)) {
      if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean((/**@type {HTMLElement}*/ ($Casts.$to(e_1.target, $Overlay))).id, this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().id)) {
       menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem, this.m_isSelected__boolean_$pp_org_patternfly_component_menu(), true);
      } else {
       e_1.preventDefault();
       menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem, !this.m_isSelected__boolean_$pp_org_patternfly_component_menu(), true);
      }
     } else {
      menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem, !this.m_isSelected__boolean_$pp_org_patternfly_component_menu(), true);
     }
    }
   }), $Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType));
  }
  if (this.f_initialSelection__org_patternfly_component_menu_MenuItem_) {
   menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(menuItem, true, false);
  }
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_menu_MenuItem_;
 }
 /** @nodts @return {MenuItem} */
 m_addAction__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_MenuItem(/** MenuItemAction */ itemAction) {
  return this.m_add__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_MenuItem(itemAction);
 }
 /** @nodts @return {MenuItem} */
 m_add__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_MenuItem(/** MenuItemAction */ itemAction) {
  this.f_itemAction__org_patternfly_component_menu_MenuItem_ = itemAction;
  this.f_itemAction__org_patternfly_component_menu_MenuItem_.f_menuItem__org_patternfly_component_menu_MenuItemAction = this;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(itemAction.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_ariaDisabled__org_patternfly_component_menu_MenuItem() {
  return this.m_ariaDisabled__boolean__org_patternfly_component_menu_MenuItem(true);
 }
 /** @nodts @return {MenuItem} */
 m_ariaDisabled__boolean__org_patternfly_component_menu_MenuItem(/** boolean */ ariaDisabled) {
  this.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_ariaDisabled__org_patternfly_style_Classes), ariaDisabled);
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Aria.f_disabled__org_patternfly_core_Aria, Boolean.m_toString__boolean__java_lang_String(ariaDisabled));
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_danger__org_patternfly_component_menu_MenuItem() {
  return /**@type {MenuItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_danger__org_patternfly_style_Classes)], j_l_String))), MenuItem));
 }
 /** @nodts @return {MenuItem} */
 m_disabled__boolean__org_patternfly_component_menu_MenuItem(/** boolean */ disabled) {
  switch (this.f_itemType__org_patternfly_component_menu_MenuItem.ordinal()) {
   case MenuItemType.$ordinal_action__org_patternfly_component_menu_MenuItemType:
   case MenuItemType.$ordinal_async__org_patternfly_component_menu_MenuItemType:
    (/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_itemElement__org_patternfly_component_menu_MenuItem_, HTMLButtonElement_$Overlay))).disabled = disabled;
    break;
   case MenuItemType.$ordinal_link__org_patternfly_component_menu_MenuItemType:
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Aria.f_disabled__org_patternfly_core_Aria, disabled);
    break;
   case MenuItemType.$ordinal_checkbox__org_patternfly_component_menu_MenuItemType:
    this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_disabled__boolean__org_patternfly_component_form_Checkbox(disabled);
    break;
  }
  if (!$Equality.$same(this.f_itemAction__org_patternfly_component_menu_MenuItem_, null)) {
   this.f_itemAction__org_patternfly_component_menu_MenuItem_.f_action__org_patternfly_component_menu_MenuItemAction.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
  }
  return /**@type {MenuItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), MenuItem));
 }
 /** @nodts @return {MenuItem} */
 m_description__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ description) {
  if (!$Equality.$same(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_, null)) {
   this.f_descriptionElement__org_patternfly_component_menu_MenuItem_.textContent = description;
  } else {
   this.f_itemElement__org_patternfly_component_menu_MenuItem_.appendChild(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(description), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_description__elemental2_dom_HTMLElement__org_patternfly_component_menu_MenuItem(/** HTMLElement */ element) {
  if (!$Equality.$same(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_, null)) {
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_);
   this.f_descriptionElement__org_patternfly_component_menu_MenuItem_.appendChild(element);
  } else {
   this.f_itemElement__org_patternfly_component_menu_MenuItem_.appendChild(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_external__org_patternfly_component_menu_MenuItem() {
  if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType)) {
   (/**@type {HTMLAnchorElement}*/ ($Casts.$to(this.f_itemElement__org_patternfly_component_menu_MenuItem_, HTMLAnchorElement_$Overlay))).target = '_blank';
   this.f_mainElement__org_patternfly_component_menu_MenuItem_.appendChild((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_externalIcon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhUi.m_externalLinkFill__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
   this.f_mainElement__org_patternfly_component_menu_MenuItem_.appendChild((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('(opens a new window)'), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  } else {
   MenuItem.f_logger__org_patternfly_component_menu_MenuItem_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Ignore external flag for menu item %o with type \'%s\'', [this.m_element__elemental2_dom_HTMLElement(), this.f_itemType__org_patternfly_component_menu_MenuItem.name()]);
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_href__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ href) {
  if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType)) {
   (/**@type {HTMLAnchorElement}*/ ($Casts.$to(this.f_itemElement__org_patternfly_component_menu_MenuItem_, HTMLAnchorElement_$Overlay))).href = href;
  } else {
   MenuItem.f_logger__org_patternfly_component_menu_MenuItem_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Ignore href for menu item %o with type \'%s\'', [this.m_element__elemental2_dom_HTMLElement(), this.f_itemType__org_patternfly_component_menu_MenuItem.name()]);
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItem(/** Element */ icon) {
  if (!$Equality.$same(this.f_iconContainer__org_patternfly_component_menu_MenuItem_, null)) {
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_menu_MenuItem_);
   this.f_iconContainer__org_patternfly_component_menu_MenuItem_.appendChild(icon);
  } else {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_mainElement__org_patternfly_component_menu_MenuItem_, this.f_iconContainer__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_menu_MenuItem(/** Element */ icon, /** ?string */ text, /** IconPosition */ iconPosition) {
  this.m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItem(icon);
  return /**@type {MenuItem}*/ ($Casts.$to(this.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), MenuItem));
 }
 /** @nodts @return {MenuItem} */
 m_removeIcon__org_patternfly_component_menu_MenuItem() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_menu_MenuItem_);
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_selected__org_patternfly_component_menu_MenuItem() {
  this.f_initialSelection__org_patternfly_component_menu_MenuItem_ = true;
  return this;
 }
 /** @nodts @template T @return {MenuItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_menu_MenuItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_menu_MenuItem_.put(key, value);
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_text__elemental2_dom_HTMLElement__org_patternfly_component_menu_MenuItem(/** HTMLElement */ element) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_textElement__org_patternfly_component_menu_MenuItem_);
  this.f_textElement__org_patternfly_component_menu_MenuItem_.appendChild(element);
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_that__org_patternfly_component_menu_MenuItem() {
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItem(/** ComponentHandler<MenuItem> */ handler) {
  this.f_onClickHandler__org_patternfly_component_menu_MenuItem_.add(handler);
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_menu_MenuItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_menu_MenuItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_menu_MenuItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_menu_MenuItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_makeCurrent__boolean__void_$pp_org_patternfly_component_menu(/** boolean */ current) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Aria.f_current__org_patternfly_core_Aria, current);
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_menu(/** boolean */ selected) {
  if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType)) {
   this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_value__boolean__org_patternfly_component_form_Checkbox(selected);
  } else {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Aria.f_selected__org_patternfly_core_Aria, selected);
   if (selected) {
    this.f_itemElement__org_patternfly_component_menu_MenuItem_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes));
   } else {
    this.f_itemElement__org_patternfly_component_menu_MenuItem_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes));
   }
  }
  if ($Equality.$same(this.f_selectIcon__org_patternfly_component_menu_MenuItem_, null)) {
   this.f_selectIcon__org_patternfly_component_menu_MenuItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_select__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhUi.m_check__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement();
  }
  if (selected) {
   if (!this.f_mainElement__org_patternfly_component_menu_MenuItem_.contains(this.f_selectIcon__org_patternfly_component_menu_MenuItem_)) {
    this.f_mainElement__org_patternfly_component_menu_MenuItem_.appendChild(this.f_selectIcon__org_patternfly_component_menu_MenuItem_);
   }
  } else {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_selectIcon__org_patternfly_component_menu_MenuItem_);
  }
 }
 /** @nodts @return {boolean} */
 m_isSelected__boolean_$pp_org_patternfly_component_menu() {
  if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType)) {
   return Boolean.m_booleanValue__java_lang_Boolean__boolean(this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_value__java_lang_Boolean());
  } else {
   return Boolean.m_parseBoolean__java_lang_String__boolean(this.f_itemElement__org_patternfly_component_menu_MenuItem_.getAttribute(Aria.f_selected__org_patternfly_core_Aria));
  }
 }
 /** @nodts @return {boolean} */
 m_isAriaDisabled__elemental2_dom_HTMLElement__boolean_$p_org_patternfly_component_menu_MenuItem(/** HTMLElement */ element) {
  return Boolean.m_parseBoolean__java_lang_String__boolean(element.getAttribute(Aria.f_disabled__org_patternfly_core_Aria));
 }
 /** @nodts */
 m_loadItems__org_patternfly_component_AsyncItems__void_$p_org_patternfly_component_menu_MenuItem(/** AsyncItems<MenuList, MenuItem> */ loadItems) {
  this.f_itemElement__org_patternfly_component_menu_MenuItem_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   goog.global.clearTimeout(this.f_loadingTimeout__org_patternfly_component_menu_MenuItem_);
   let menuList = /**@type {MenuList}*/ ($Casts.$to(this.m_lookupSubComponent__java_lang_String__org_patternfly_component_SubComponent(MenuList.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuList), MenuList));
   this.f_loadingTimeout__org_patternfly_component_menu_MenuItem_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
    this.m_startLoading__void_$p_org_patternfly_component_menu_MenuItem();
   }, Timeouts.f_LOADING_TIMEOUT__org_patternfly_core_Timeouts, []);
   (/**@type {!Promise<!*>}*/ ((/**@type {Promise<Iterable<MenuItem>>}*/ ($Casts.$to(loadItems.m_apply__java_lang_Object__java_lang_Object(menuList), Promise_$Overlay))).then(/**  @return {IThenable<*>}*/ ((/** Iterable<MenuItem> */ loadedItems) =>{
    let loadedItems_1 = /**@type {Iterable<MenuItem>}*/ ($Casts.$to(loadedItems, /**@type {Function}*/ (Iterable)));
    this.m_stopLoading__void_$p_org_patternfly_component_menu_MenuItem();
    menuList.m_removeItem__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(this);
    for (let $iterator = loadedItems_1.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let item = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
     {
      menuList.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
     }
    }
    this.f_loadedHandler__org_patternfly_component_menu_MenuItem_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<MenuItem> */ h) =>{
     let h_1 = /**@type {ComponentHandler<MenuItem>}*/ ($Casts.$to(h, /**@type {Function}*/ (ComponentHandler)));
     h_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
    }));
    return null;
   })))).catch(/**  @return {IThenable<*>}*/ ((/** !* */ error) =>{
    this.m_stopLoading__void_$p_org_patternfly_component_menu_MenuItem();
    this.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_loadingText__org_patternfly_component_menu_MenuItem_);
    MenuItem.f_logger__org_patternfly_component_menu_MenuItem_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to load menu items for %o: %s', [this.m_element__elemental2_dom_HTMLElement(), error]);
    return null;
   }));
  }));
 }
 /** @nodts */
 m_startLoading__void_$p_org_patternfly_component_menu_MenuItem() {
  this.f_loadingText__org_patternfly_component_menu_MenuItem_ = this.m_text__java_lang_String();
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_textElement__org_patternfly_component_menu_MenuItem_);
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_load__org_patternfly_style_Classes)], j_l_String)));
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_loading__org_patternfly_style_Classes)], j_l_String)));
  this.f_textElement__org_patternfly_component_menu_MenuItem_.appendChild(Spinner.m_spinner__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(Size.f_lg__org_patternfly_style_Size).m_element__org_jboss_elemento_svg_SVGElement());
 }
 /** @nodts */
 m_stopLoading__void_$p_org_patternfly_component_menu_MenuItem() {
  goog.global.clearTimeout(this.f_loadingTimeout__org_patternfly_component_menu_MenuItem_);
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_textElement__org_patternfly_component_menu_MenuItem_);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {MenuItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_menu_MenuItem(arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ arg0, /** T */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ arg0, /** Supplier<T> */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(this, arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {MenuItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), MenuItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_menu_MenuItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {MenuItem}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), MenuItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {MenuItem}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), MenuItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** Element */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return this.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_menu_MenuItem(arg0, arg1, arg2);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {MenuItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_menu_MenuItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {MenuItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), MenuItem));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_menu_MenuItem(/** PredefinedIcon */ arg0) {
  return /**@type {MenuItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), MenuItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuItem(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {MenuItem}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), MenuItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_menu_MenuItem(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {MenuItem}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), MenuItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_disabled__org_patternfly_component_menu_MenuItem() {
  return /**@type {MenuItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_text__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ arg0) {
  return /**@type {MenuItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), MenuItem));
 }
 /** @nodts */
 static $clinit() {
  MenuItem.$clinit = () =>{};
  MenuItem.$loadModules();
  MenuSubComponent.$clinit();
  Attachable.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  ComponentIconAndText.$clinit();
  Disabled.$clinit();
  ElementTextDelegate.$clinit();
  MenuItem.f_logger__org_patternfly_component_menu_MenuItem_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(MenuItem).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuItem;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ButtonType = goog.module.get('org.jboss.elemento.ButtonType$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuItemAction = goog.module.get('org.patternfly.component.menu.MenuItemAction$impl');
  MenuItemType = goog.module.get('org.patternfly.component.menu.MenuItemType$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  Skeleton = goog.module.get('org.patternfly.component.skeleton.Skeleton$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Timeouts = goog.module.get('org.patternfly.core.Timeouts$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
MenuItem.f_logger__org_patternfly_component_menu_MenuItem_;
/**@const {string} @nodts*/
MenuItem.f_CREATE_NEW_MARKER__org_patternfly_component_menu_MenuItem_ = 'createNew';
/**@const {string} @nodts*/
MenuItem.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuItem = 'mi';
/**@const {string} @nodts*/
MenuItem.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItem = 'MenuItem';
Attachable.$markImplementor(MenuItem);
ComponentContext.$markImplementor(MenuItem);
ComponentIcon.$markImplementor(MenuItem);
ComponentIconAndText.$markImplementor(MenuItem);
Disabled.$markImplementor(MenuItem);
ElementTextDelegate.$markImplementor(MenuItem);
HasIdentifier.$markImplementor(MenuItem);
$Util.$setClassMetadata(MenuItem, 'org.patternfly.component.menu.MenuItem');

exports = MenuItem;

//# sourceMappingURL=MenuItem.js.map
