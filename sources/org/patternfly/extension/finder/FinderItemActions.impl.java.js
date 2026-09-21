goog.module('org.patternfly.extension.finder.FinderItemActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FinderSubComponent = goog.require('org.patternfly.extension.finder.FinderSubComponent$impl');

let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FinderSubComponent<HTMLElement, FinderItemActions>}
 */
class FinderItemActions extends FinderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FinderItemActions} */
 static m_finderItemActions__org_patternfly_extension_finder_FinderItemActions() {
  FinderItemActions.$clinit();
  return FinderItemActions.$create__();
 }
 /** @nodts @return {!FinderItemActions} */
 static $create__() {
  FinderItemActions.$clinit();
  let $instance = new FinderItemActions();
  $instance.$ctor__org_patternfly_extension_finder_FinderItemActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderItemActions__void() {
  this.$ctor__org_patternfly_extension_finder_FinderSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FinderItemActions.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItemActions, FinderItemActions.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderItemActions, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
   let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
   arg0_1.stopPropagation();
  });
 }
 /** @nodts @return {FinderItemActions} */
 m_addButton__org_patternfly_component_button_Button__org_patternfly_extension_finder_FinderItemActions(/** Button */ button) {
  return /**@type {FinderItemActions}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(button), FinderItemActions));
 }
 /** @nodts @return {FinderItemActions} */
 m_addDropdown__org_patternfly_component_menu_Dropdown__org_patternfly_extension_finder_FinderItemActions(/** Dropdown */ dropdown) {
  return /**@type {FinderItemActions}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(dropdown), FinderItemActions));
 }
 /** @nodts @return {FinderItemActions} */
 m_that__org_patternfly_extension_finder_FinderItemActions() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderItemActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_FinderItemActions();
 }
 /** @nodts */
 static $clinit() {
  FinderItemActions.$clinit = () =>{};
  FinderItemActions.$loadModules();
  FinderSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderItemActions;
 }
 
 /** @nodts */
 static $loadModules() {
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  FinderClasses = goog.module.get('org.patternfly.extension.finder.FinderClasses$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FinderItemActions.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItemActions = 'fia';
/**@const {string} @nodts*/
FinderItemActions.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderItemActions = 'FinderItemActions';
$Util.$setClassMetadata(FinderItemActions, 'org.patternfly.extension.finder.FinderItemActions');

exports = FinderItemActions;

//# sourceMappingURL=FinderItemActions.js.map
