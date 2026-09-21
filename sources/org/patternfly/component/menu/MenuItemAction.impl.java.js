goog.module('org.patternfly.component.menu.MenuItemAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuActionHandler = goog.forwardDeclare('org.patternfly.component.menu.MenuActionHandler$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLElement, MenuItemAction>}
 * @implements {HasIdentifier<HTMLElement, MenuItemAction>}
 * @implements {ComponentIcon<HTMLElement, MenuItemAction>}
 */
class MenuItemAction extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_menu_MenuItemAction_;
  /**@type {List<ComponentHandler<MenuItemAction>>} @nodts*/
  this.f_handler__org_patternfly_component_menu_MenuItemAction_;
  /**@type {Button} @nodts*/
  this.f_action__org_patternfly_component_menu_MenuItemAction;
  /**@type {MenuItem} @nodts*/
  this.f_menuItem__org_patternfly_component_menu_MenuItemAction;
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__org_patternfly_component_menu_MenuItemAction(/** ?string */ identifier) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__elemental2_dom_Element__boolean(identifier, null, false);
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__org_patternfly_icon_PredefinedIcon__org_patternfly_component_menu_MenuItemAction(/** ?string */ identifier, /** PredefinedIcon */ icon) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__elemental2_dom_Element__boolean(identifier, icon.m_element__org_jboss_elemento_svg_SVGElement(), false);
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__elemental2_dom_Element__org_patternfly_component_menu_MenuItemAction(/** ?string */ identifier, /** Element */ icon) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__elemental2_dom_Element__boolean(identifier, icon, false);
 }
 //Factory method corresponding to constructor 'MenuItemAction(String, Element, boolean)'.
 /** @nodts @return {!MenuItemAction} */
 static $create__java_lang_String__elemental2_dom_Element__boolean(/** ?string */ identifier, /** Element */ icon, /** boolean */ favorite) {
  MenuItemAction.$clinit();
  let $instance = new MenuItemAction();
  $instance.$ctor__org_patternfly_component_menu_MenuItemAction__java_lang_String__elemental2_dom_Element__boolean__void(identifier, icon, favorite);
  return $instance;
 }
 //Initialization from constructor 'MenuItemAction(String, Element, boolean)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItemAction__java_lang_String__elemental2_dom_Element__boolean__void(/** ?string */ identifier, /** Element */ icon, /** boolean */ favorite) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MenuItemAction.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuItemAction, MenuItemAction.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItemAction, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_identifier__org_patternfly_component_menu_MenuItemAction_ = identifier;
  this.f_handler__org_patternfly_component_menu_MenuItemAction_ = (/**@type {!ArrayList<ComponentHandler<MenuItemAction>>}*/ (ArrayList.$create__()));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_action__org_patternfly_component_menu_MenuItemAction = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(icon).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLElement */ b) =>{
   let b_1 = /**@type {HTMLElement}*/ ($Casts.$to(b, HTMLElement_$Overlay));
   b_1.tabIndex = -1;
  })), Button))));
  this.f_action__org_patternfly_component_menu_MenuItemAction.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ b_2) =>{
   let b_3 = /**@type {Button}*/ ($Casts.$to(b_2, Button));
   this.f_handler__org_patternfly_component_menu_MenuItemAction_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<MenuItemAction> */ h) =>{
    let h_1 = /**@type {ComponentHandler<MenuItemAction>}*/ ($Casts.$to(h, /**@type {Function}*/ (ComponentHandler)));
    h_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
   }));
  }));
  if (!favorite) {
   this.f_action__org_patternfly_component_menu_MenuItemAction.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_1, /** Button */ b_4) =>{
    let b_5 = /**@type {Button}*/ ($Casts.$to(b_4, Button));
    let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Menu));
    menu.f_actionHandler__org_patternfly_component_menu_Menu.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** MenuActionHandler */ ah) =>{
     let ah_1 = /**@type {MenuActionHandler}*/ ($Casts.$to(ah, /**@type {Function}*/ (MenuActionHandler)));
     ah_1.m_onAction__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__void(menu, this.f_menuItem__org_patternfly_component_menu_MenuItemAction, this);
    }));
   }));
  }
 }
 //Factory method corresponding to constructor 'MenuItemAction(MenuItem, MenuItemAction, HTMLElement)'.
 /** @nodts @return {!MenuItemAction} */
 static $create__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLElement(/** MenuItem */ sourceItem, /** MenuItemAction */ sourceItemAction, /** HTMLElement */ rootElement) {
  MenuItemAction.$clinit();
  let $instance = new MenuItemAction();
  $instance.$ctor__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLElement__void(sourceItem, sourceItemAction, rootElement);
  return $instance;
 }
 //Initialization from constructor 'MenuItemAction(MenuItem, MenuItemAction, HTMLElement)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLElement__void(/** MenuItem */ sourceItem, /** MenuItemAction */ sourceItemAction, /** HTMLElement */ rootElement) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MenuItemAction.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuItemAction, MenuItemAction.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItemAction, rootElement);
  this.f_identifier__org_patternfly_component_menu_MenuItemAction_ = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(sourceItemAction.f_identifier__org_patternfly_component_menu_MenuItemAction_, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['favorite'], j_l_String)));
  this.f_handler__org_patternfly_component_menu_MenuItemAction_ = (/**@type {!ArrayList<ComponentHandler<MenuItemAction>>}*/ (ArrayList.$create__()));
  this.f_handler__org_patternfly_component_menu_MenuItemAction_.addAll(sourceItemAction.f_handler__org_patternfly_component_menu_MenuItemAction_);
  this.f_menuItem__org_patternfly_component_menu_MenuItemAction = sourceItem;
  this.f_action__org_patternfly_component_menu_MenuItemAction = sourceItemAction.f_action__org_patternfly_component_menu_MenuItemAction;
  let actionElement = this.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))));
  if (!$Equality.$same(actionElement, null)) {
   let eb = /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(actionElement));
   eb.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.f_handler__org_patternfly_component_menu_MenuItemAction_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<MenuItemAction> */ h) =>{
     let h_1 = /**@type {ComponentHandler<MenuItemAction>}*/ ($Casts.$to(h, /**@type {Function}*/ (ComponentHandler)));
     h_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, sourceItemAction);
    }));
   });
   eb.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e_2) =>{
    let e_3 = /**@type {MouseEvent}*/ ($Casts.$to(e_2, MouseEvent_$Overlay));
    let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Menu));
    menu.f_actionHandler__org_patternfly_component_menu_Menu.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** MenuActionHandler */ ah) =>{
     let ah_1 = /**@type {MenuActionHandler}*/ ($Casts.$to(ah, /**@type {Function}*/ (MenuActionHandler)));
     ah_1.m_onAction__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__void(menu, this.f_menuItem__org_patternfly_component_menu_MenuItemAction, sourceItemAction);
    }));
   });
  }
 }
 /** @nodts @return {MenuItemAction} */
 m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItemAction(/** Element */ icon) {
  this.f_action__org_patternfly_component_menu_MenuItemAction.m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(icon);
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_removeIcon__org_patternfly_component_menu_MenuItemAction() {
  this.f_action__org_patternfly_component_menu_MenuItemAction.m_removeIcon__org_patternfly_component_button_Button();
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_that__org_patternfly_component_menu_MenuItemAction() {
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItemAction(/** ComponentHandler<MenuItemAction> */ handler) {
  this.f_handler__org_patternfly_component_menu_MenuItemAction_.add(handler);
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_menu_MenuItemAction_;
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuItemAction();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {MenuItemAction}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), MenuItemAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItemAction(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_menu_MenuItemAction();
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItemAction} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_menu_MenuItemAction(/** PredefinedIcon */ arg0) {
  return /**@type {MenuItemAction}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), MenuItemAction));
 }
 /** @nodts */
 static $clinit() {
  MenuItemAction.$clinit = () =>{};
  MenuItemAction.$loadModules();
  MenuSubComponent.$clinit();
  ComponentIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuItemAction;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuActionHandler = goog.module.get('org.patternfly.component.menu.MenuActionHandler$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuItemAction.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuItemAction = 'mia';
/**@const {string} @nodts*/
MenuItemAction.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItemAction = 'MenuItemAction';
HasIdentifier.$markImplementor(MenuItemAction);
ComponentIcon.$markImplementor(MenuItemAction);
$Util.$setClassMetadata(MenuItemAction, 'org.patternfly.component.menu.MenuItemAction');

exports = MenuItemAction;

//# sourceMappingURL=MenuItemAction.js.map
