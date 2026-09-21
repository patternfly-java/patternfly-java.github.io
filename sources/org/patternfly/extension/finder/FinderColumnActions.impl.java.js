goog.module('org.patternfly.extension.finder.FinderColumnActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FinderSubComponent = goog.require('org.patternfly.extension.finder.FinderSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FinderSubComponent<HTMLElement, FinderColumnActions>}
 */
class FinderColumnActions extends FinderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FinderColumnActions} */
 static m_finderColumnActions__org_patternfly_extension_finder_FinderColumnActions() {
  FinderColumnActions.$clinit();
  return FinderColumnActions.$create__();
 }
 /** @nodts @return {!FinderColumnActions} */
 static $create__() {
  FinderColumnActions.$clinit();
  let $instance = new FinderColumnActions();
  $instance.$ctor__org_patternfly_extension_finder_FinderColumnActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderColumnActions__void() {
  this.$ctor__org_patternfly_extension_finder_FinderSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FinderColumnActions.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumnActions, FinderColumnActions.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderColumnActions, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderClasses.f_column__org_patternfly_extension_finder_FinderClasses, Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {FinderColumnActions} */
 m_addButton__org_patternfly_component_button_Button__org_patternfly_extension_finder_FinderColumnActions(/** Button */ button) {
  return /**@type {FinderColumnActions}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(button), FinderColumnActions));
 }
 /** @nodts @return {FinderColumnActions} */
 m_addDropdown__org_patternfly_component_menu_Dropdown__org_patternfly_extension_finder_FinderColumnActions(/** Dropdown */ dropdown) {
  return /**@type {FinderColumnActions}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(dropdown), FinderColumnActions));
 }
 /** @nodts @return {FinderColumnActions} */
 m_that__org_patternfly_extension_finder_FinderColumnActions() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderColumnActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_FinderColumnActions();
 }
 /** @nodts */
 static $clinit() {
  FinderColumnActions.$clinit = () =>{};
  FinderColumnActions.$loadModules();
  FinderSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderColumnActions;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  FinderClasses = goog.module.get('org.patternfly.extension.finder.FinderClasses$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FinderColumnActions.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderColumnActions = 'fca';
/**@const {string} @nodts*/
FinderColumnActions.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderColumnActions = 'FinderColumnActions';
$Util.$setClassMetadata(FinderColumnActions, 'org.patternfly.extension.finder.FinderColumnActions');

exports = FinderColumnActions;

//# sourceMappingURL=FinderColumnActions.js.map
