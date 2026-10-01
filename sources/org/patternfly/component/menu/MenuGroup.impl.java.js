goog.module('org.patternfly.component.menu.MenuGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');

let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuSearch = goog.forwardDeclare('org.patternfly.component.menu.MenuSearch$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLElement, MenuGroup>}
 * @implements {ElementTextDelegate<HTMLElement, MenuGroup>}
 */
class MenuGroup extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {MenuList} @nodts*/
  this.f_list__org_patternfly_component_menu_MenuGroup;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_menu_MenuGroup_;
 }
 /** @nodts @return {MenuGroup} */
 static m_menuGroup__org_patternfly_component_menu_MenuGroup() {
  MenuGroup.$clinit();
  return MenuGroup.$create__();
 }
 /** @nodts @return {MenuGroup} */
 static m_menuGroup__java_lang_String__org_patternfly_component_menu_MenuGroup(/** ?string */ text) {
  MenuGroup.$clinit();
  return MenuGroup.$create__().m_text__java_lang_String__org_patternfly_component_menu_MenuGroup(text);
 }
 /** @nodts @return {!MenuGroup} */
 static $create__() {
  MenuGroup.$clinit();
  let $instance = new MenuGroup();
  $instance.$ctor__org_patternfly_component_menu_MenuGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuGroup__void() {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MenuGroup.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuGroup, MenuGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuGroup, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_textElement__org_patternfly_component_menu_MenuGroup_ = (/**@type {HTMLHeadingElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(3).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_group__org_patternfly_style_Classes, Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay)));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_menu_MenuGroup_;
 }
 /** @nodts @return {MenuGroup} */
 m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(/** MenuList */ list) {
  return this.m_add__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(list);
 }
 /** @nodts @return {MenuGroup} */
 m_add__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(/** MenuList */ list) {
  this.f_list__org_patternfly_component_menu_MenuGroup = list;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLUListElement}*/ ($Casts.$to(list.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  return this;
 }
 /** @nodts @return {MenuGroup} */
 m_addSearch__org_patternfly_component_menu_MenuSearch__org_patternfly_component_menu_MenuGroup(/** MenuSearch */ search) {
  return /**@type {MenuGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(search), MenuGroup));
 }
 /** @nodts @return {MenuGroup} */
 m_text__java_lang_String__org_patternfly_component_menu_MenuGroup(/** ?string */ text) {
  if (!Elements.m_isAttached__elemental2_dom_Node__boolean(this.f_textElement__org_patternfly_component_menu_MenuGroup_)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_menu_MenuGroup_);
  }
  return /**@type {MenuGroup}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, text), MenuGroup));
 }
 /** @nodts @return {MenuGroup} */
 m_that__org_patternfly_component_menu_MenuGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuGroup} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_menu_MenuGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 /** @nodts */
 static $clinit() {
  MenuGroup.$clinit = () =>{};
  MenuGroup.$loadModules();
  MenuSubComponent.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuGroup.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuGroup = 'mg';
/**@const {string} @nodts*/
MenuGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuGroup = 'MenuGroup';
ElementTextDelegate.$markImplementor(MenuGroup);
$Util.$setClassMetadata(MenuGroup, 'org.patternfly.component.menu.MenuGroup');

exports = MenuGroup;

//# sourceMappingURL=MenuGroup.js.map
