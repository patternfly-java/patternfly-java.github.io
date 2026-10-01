goog.module('org.patternfly.component.menu.MenuHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLDivElement, MenuHeader>}
 * @implements {ElementTextMethods<HTMLDivElement, MenuHeader>}
 */
class MenuHeader extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MenuHeader} */
 static m_menuHeader__org_patternfly_component_menu_MenuHeader() {
  MenuHeader.$clinit();
  return MenuHeader.$create__();
 }
 /** @nodts @return {MenuHeader} */
 static m_menuHeader__java_lang_String__org_patternfly_component_menu_MenuHeader(/** ?string */ text) {
  MenuHeader.$clinit();
  return /**@type {MenuHeader}*/ ($Casts.$to(MenuHeader.$create__().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), MenuHeader));
 }
 /** @nodts @return {!MenuHeader} */
 static $create__() {
  MenuHeader.$clinit();
  let $instance = new MenuHeader();
  $instance.$ctor__org_patternfly_component_menu_MenuHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuHeader__void() {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(MenuHeader.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuHeader, MenuHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuHeader, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {MenuHeader} */
 m_that__org_patternfly_component_menu_MenuHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuHeader} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {MenuHeader}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), MenuHeader));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuHeader} */
 m_text__java_lang_String__org_patternfly_component_menu_MenuHeader(/** ?string */ arg0) {
  return /**@type {MenuHeader}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), MenuHeader));
 }
 /** @nodts */
 static $clinit() {
  MenuHeader.$clinit = () =>{};
  MenuHeader.$loadModules();
  MenuSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuHeader.f_SUB_COMPONENT_ID__org_patternfly_component_menu_MenuHeader = 'mh';
/**@const {string} @nodts*/
MenuHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuHeader = 'MenuHeader';
ElementTextMethods.$markImplementor(MenuHeader);
$Util.$setClassMetadata(MenuHeader, 'org.patternfly.component.menu.MenuHeader');

exports = MenuHeader;

//# sourceMappingURL=MenuHeader.js.map
