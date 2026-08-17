goog.module('org.patternfly.component.modal.ModalFooter.ButtonHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Modal = goog.forwardDeclare('org.patternfly.component.modal.Modal$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');

class ButtonHandler extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_modal_ModalFooter_ButtonHandler_;
  /**@type {ComponentHandler<Modal>} @nodts*/
  this.f_handler__org_patternfly_component_modal_ModalFooter_ButtonHandler_;
 }
 /** @nodts @return {!ButtonHandler} */
 static $create__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler(/** Button */ button, /** ComponentHandler<Modal> */ handler) {
  ButtonHandler.$clinit();
  let $instance = new ButtonHandler();
  $instance.$ctor__org_patternfly_component_modal_ModalFooter_ButtonHandler__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__void(button, handler);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_modal_ModalFooter_ButtonHandler__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__void(/** Button */ button, /** ComponentHandler<Modal> */ handler) {
  this.$ctor__java_lang_Object__void();
  this.f_button__org_patternfly_component_modal_ModalFooter_ButtonHandler_ = button;
  this.f_handler__org_patternfly_component_modal_ModalFooter_ButtonHandler_ = handler;
 }
 /** @nodts */
 static $clinit() {
  ButtonHandler.$clinit = () =>{};
  ButtonHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ButtonHandler;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ButtonHandler, 'org.patternfly.component.modal.ModalFooter$ButtonHandler');

exports = ButtonHandler;

//# sourceMappingURL=ModalFooter$ButtonHandler.js.map
