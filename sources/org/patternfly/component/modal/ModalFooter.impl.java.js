goog.module('org.patternfly.component.modal.ModalFooter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const ModalSubComponent = goog.require('org.patternfly.component.modal.ModalSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Modal = goog.forwardDeclare('org.patternfly.component.modal.Modal$impl');
let ButtonHandler = goog.forwardDeclare('org.patternfly.component.modal.ModalFooter.ButtonHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ModalSubComponent<HTMLElement, ModalFooter>}
 * @implements {Attachable}
 */
class ModalFooter extends ModalSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<ButtonHandler>} @nodts*/
  this.f_buttons__org_patternfly_component_modal_ModalFooter_;
 }
 /** @nodts @return {ModalFooter} */
 static m_modalFooter__org_patternfly_component_modal_ModalFooter() {
  ModalFooter.$clinit();
  return ModalFooter.$create__();
 }
 /** @nodts @return {!ModalFooter} */
 static $create__() {
  ModalFooter.$clinit();
  let $instance = new ModalFooter();
  $instance.$ctor__org_patternfly_component_modal_ModalFooter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_modal_ModalFooter__void() {
  this.$ctor__org_patternfly_component_modal_ModalSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ModalFooter.f_SUB_COMPONENT_ID__org_patternfly_component_modal_ModalFooter, ModalFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_modal_ModalFooter, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_footer__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_footer__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_buttons__org_patternfly_component_modal_ModalFooter_ = (/**@type {!ArrayList<ButtonHandler>}*/ (ArrayList.$create__()));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let modal = /**@type {Modal}*/ ($Casts.$to(this.m_lookupComponentDelegate__org_patternfly_component_ComponentDelegate(), Modal));
  for (let $iterator = this.f_buttons__org_patternfly_component_modal_ModalFooter_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let bh = /**@type {ButtonHandler}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ButtonHandler));
   {
    if (!$Equality.$same(bh.f_handler__org_patternfly_component_modal_ModalFooter_ButtonHandler_, null)) {
     bh.f_button__org_patternfly_component_modal_ModalFooter_ButtonHandler_.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ event, /** Button */ component) =>{
      let component_1 = /**@type {Button}*/ ($Casts.$to(component, Button));
      bh.f_handler__org_patternfly_component_modal_ModalFooter_ButtonHandler_.m_handle__elemental2_dom_Event__java_lang_Object__void(event, modal);
     }));
    }
    if (modal.f_autoClose__org_patternfly_component_modal_Modal) {
     bh.f_button__org_patternfly_component_modal_ModalFooter_ButtonHandler_.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ event_1, /** Button */ component_2) =>{
      let component_3 = /**@type {Button}*/ ($Casts.$to(component_2, Button));
      modal.m_close__void();
     }));
    }
   }
  }
 }
 /** @nodts @return {ModalFooter} */
 m_addButton__org_patternfly_component_button_Button__org_patternfly_component_modal_ModalFooter(/** Button */ button) {
  return this.m_add__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_modal_ModalFooter(button, null);
 }
 /** @nodts @return {ModalFooter} */
 m_addButton__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_modal_ModalFooter(/** Button */ button, /** ComponentHandler<Modal> */ handler) {
  return this.m_add__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_modal_ModalFooter(button, handler);
 }
 /** @nodts @return {ModalFooter} */
 m_add__org_patternfly_component_button_Button__org_patternfly_component_modal_ModalFooter(/** Button */ button) {
  return this.m_add__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_modal_ModalFooter(button, null);
 }
 /** @nodts @return {ModalFooter} */
 m_add__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_modal_ModalFooter(/** Button */ button, /** ComponentHandler<Modal> */ handler) {
  this.f_buttons__org_patternfly_component_modal_ModalFooter_.add(ButtonHandler.$create__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler(button, handler));
  return /**@type {ModalFooter}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(button.m_element__elemental2_dom_HTMLElement()), ModalFooter));
 }
 /** @nodts @return {ModalFooter} */
 m_that__org_patternfly_component_modal_ModalFooter() {
  return this;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalFooter} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_modal_ModalFooter();
 }
 /** @nodts */
 static $clinit() {
  ModalFooter.$clinit = () =>{};
  ModalFooter.$loadModules();
  ModalSubComponent.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ModalFooter;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Modal = goog.module.get('org.patternfly.component.modal.Modal$impl');
  ButtonHandler = goog.module.get('org.patternfly.component.modal.ModalFooter.ButtonHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ModalFooter.f_SUB_COMPONENT_ID__org_patternfly_component_modal_ModalFooter = 'mf';
/**@const {string} @nodts*/
ModalFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_modal_ModalFooter = 'ModalFooter';
Attachable.$markImplementor(ModalFooter);
$Util.$setClassMetadata(ModalFooter, 'org.patternfly.component.modal.ModalFooter');

exports = ModalFooter;

//# sourceMappingURL=ModalFooter.js.map
