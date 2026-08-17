goog.module('org.patternfly.component.wizard.WizardFooter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WizardSubComponent = goog.require('org.patternfly.component.wizard.WizardSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ActionList = goog.forwardDeclare('org.patternfly.component.list.ActionList$impl');
let ActionListGroup = goog.forwardDeclare('org.patternfly.component.list.ActionListGroup$impl');
let ActionListItem = goog.forwardDeclare('org.patternfly.component.list.ActionListItem$impl');
let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let WizardFooterButtons = goog.forwardDeclare('org.patternfly.component.wizard.WizardFooterButtons$impl');
let WizardStep = goog.forwardDeclare('org.patternfly.component.wizard.WizardStep$impl');
let WizardStepType = goog.forwardDeclare('org.patternfly.component.wizard.WizardStepType$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {WizardSubComponent<HTMLElement, WizardFooter>}
 */
class WizardFooter extends WizardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_backButton__org_patternfly_component_wizard_WizardFooter_;
  /**@type {Button} @nodts*/
  this.f_nextButton__org_patternfly_component_wizard_WizardFooter_;
  /**@type {Button} @nodts*/
  this.f_cancelButton__org_patternfly_component_wizard_WizardFooter_;
 }
 /** @nodts @return {!WizardFooter} */
 static $create__() {
  WizardFooter.$clinit();
  let $instance = new WizardFooter();
  $instance.$ctor__org_patternfly_component_wizard_WizardFooter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_wizard_WizardFooter__void() {
  this.$ctor__org_patternfly_component_wizard_WizardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(WizardFooter.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardFooter, WizardFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardFooter, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_footer__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_wizard__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_footer__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ActionList}*/ ($Casts.$to((/**@type {ActionList}*/ ($Casts.$to(ActionList.m_actionList__org_patternfly_component_list_ActionList().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {ActionListGroup}*/ ($Casts.$to((/**@type {ActionListGroup}*/ ($Casts.$to(ActionListGroup.m_actionListGroup__org_patternfly_component_list_ActionListGroup().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_backButton__org_patternfly_component_wizard_WizardFooter_ = (/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_secondary__org_jboss_elemento_TypedBuilder(), Button))).m_text__java_lang_String__org_patternfly_component_button_Button('Back').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ c) =>{
   let c_1 = /**@type {Button}*/ ($Casts.$to(c, Button));
   let wizard = /**@type {Wizard}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Wizard));
   wizard.m_previous__void();
  }))), ActionListItem))), ActionListGroup))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_nextButton__org_patternfly_component_wizard_WizardFooter_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_primary__org_jboss_elemento_TypedBuilder(), Button))).m_text__java_lang_String__org_patternfly_component_button_Button('Next').m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('type', 'submit'), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_1, /** Button */ c_2) =>{
   let c_3 = /**@type {Button}*/ ($Casts.$to(c_2, Button));
   let wizard_1 = /**@type {Wizard}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Wizard));
   wizard_1.m_next__void();
  }))), ActionListItem))), ActionListGroup))), ActionList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {ActionListGroup}*/ ($Casts.$to(ActionListGroup.m_actionListGroup__org_patternfly_component_list_ActionListGroup().m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_cancelButton__org_patternfly_component_wizard_WizardFooter_ = Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_text__java_lang_String__org_patternfly_component_button_Button('Cancel').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_2, /** Button */ c_4) =>{
   let c_5 = /**@type {Button}*/ ($Casts.$to(c_4, Button));
   let wizard_2 = /**@type {Wizard}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Wizard));
   wizard_2.m_cancel__void();
  }))), ActionListItem))), ActionListGroup))), ActionList)));
 }
 /** @nodts @return {WizardFooter} */
 m_that__org_patternfly_component_wizard_WizardFooter() {
  return this;
 }
 /** @nodts @return {Button} */
 m_backButton__org_patternfly_component_button_Button() {
  return this.f_backButton__org_patternfly_component_wizard_WizardFooter_;
 }
 /** @nodts @return {Button} */
 m_nextButton__org_patternfly_component_button_Button() {
  return this.f_nextButton__org_patternfly_component_wizard_WizardFooter_;
 }
 /** @nodts @return {Button} */
 m_cancelButton__org_patternfly_component_button_Button() {
  return this.f_cancelButton__org_patternfly_component_wizard_WizardFooter_;
 }
 /** @nodts */
 m_disableButtons__void_$pp_org_patternfly_component_wizard() {
  this.f_backButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(true);
  this.f_nextButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(true);
  this.f_cancelButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(true);
 }
 /** @nodts */
 m_updateButtons__int__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__org_patternfly_component_wizard_WizardStep__void_$pp_org_patternfly_component_wizard(/** number */ steps, /** WizardStep */ head, /** WizardStep */ current, /** WizardStep */ tail) {
  if (current.f_customButtonNames__org_patternfly_component_wizard_WizardStep.containsKey(WizardFooterButtons.f_back__org_patternfly_component_wizard_WizardFooterButtons)) {
   this.f_backButton__org_patternfly_component_wizard_WizardFooter_.m_text__java_lang_String__org_patternfly_component_button_Button(/**@type {?string}*/ ($Casts.$to(current.f_customButtonNames__org_patternfly_component_wizard_WizardStep.get(WizardFooterButtons.f_back__org_patternfly_component_wizard_WizardFooterButtons), j_l_String)));
  }
  if (current.f_customButtonNames__org_patternfly_component_wizard_WizardStep.containsKey(WizardFooterButtons.f_cancel__org_patternfly_component_wizard_WizardFooterButtons)) {
   this.f_cancelButton__org_patternfly_component_wizard_WizardFooter_.m_text__java_lang_String__org_patternfly_component_button_Button(/**@type {?string}*/ ($Casts.$to(current.f_customButtonNames__org_patternfly_component_wizard_WizardStep.get(WizardFooterButtons.f_cancel__org_patternfly_component_wizard_WizardFooterButtons), j_l_String)));
  }
  if ($Equality.$same(current, head)) {
   this.f_backButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(true);
   this.f_nextButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(false);
   this.f_cancelButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(false);
   this.f_nextButton__org_patternfly_component_wizard_WizardFooter_.m_text__java_lang_String__org_patternfly_component_button_Button(/**@type {?string}*/ ($Casts.$to(current.f_customButtonNames__org_patternfly_component_wizard_WizardStep.getOrDefault(WizardFooterButtons.f_next__org_patternfly_component_wizard_WizardFooterButtons, 'Next'), j_l_String)));
  } else if ($Equality.$same(current, tail) || $Equality.$same(current.f_type__org_patternfly_component_wizard_WizardStep, WizardStepType.f_review__org_patternfly_component_wizard_WizardStepType)) {
   this.f_backButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(false);
   this.f_nextButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(false);
   this.f_cancelButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(false);
   this.f_nextButton__org_patternfly_component_wizard_WizardFooter_.m_text__java_lang_String__org_patternfly_component_button_Button(/**@type {?string}*/ ($Casts.$to(current.f_customButtonNames__org_patternfly_component_wizard_WizardStep.getOrDefault(WizardFooterButtons.f_next__org_patternfly_component_wizard_WizardFooterButtons, 'Finish'), j_l_String)));
  } else if (steps > 1) {
   this.f_backButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(false);
   this.f_nextButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(false);
   this.f_cancelButton__org_patternfly_component_wizard_WizardFooter_.m_disabled__boolean__org_patternfly_component_button_Button(false);
   this.f_nextButton__org_patternfly_component_wizard_WizardFooter_.m_text__java_lang_String__org_patternfly_component_button_Button(/**@type {?string}*/ ($Casts.$to(current.f_customButtonNames__org_patternfly_component_wizard_WizardStep.getOrDefault(WizardFooterButtons.f_next__org_patternfly_component_wizard_WizardFooterButtons, 'Next'), j_l_String)));
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {WizardFooter} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_wizard_WizardFooter();
 }
 /** @nodts */
 static $clinit() {
  WizardFooter.$clinit = () =>{};
  WizardFooter.$loadModules();
  WizardSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WizardFooter;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ActionList = goog.module.get('org.patternfly.component.list.ActionList$impl');
  ActionListGroup = goog.module.get('org.patternfly.component.list.ActionListGroup$impl');
  ActionListItem = goog.module.get('org.patternfly.component.list.ActionListItem$impl');
  Wizard = goog.module.get('org.patternfly.component.wizard.Wizard$impl');
  WizardFooterButtons = goog.module.get('org.patternfly.component.wizard.WizardFooterButtons$impl');
  WizardStepType = goog.module.get('org.patternfly.component.wizard.WizardStepType$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
WizardFooter.f_SUB_COMPONENT_ID__org_patternfly_component_wizard_WizardFooter = 'wzf';
/**@const {string} @nodts*/
WizardFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_wizard_WizardFooter = 'WizardFooter';
$Util.$setClassMetadata(WizardFooter, 'org.patternfly.component.wizard.WizardFooter');

exports = WizardFooter;

//# sourceMappingURL=WizardFooter.js.map
