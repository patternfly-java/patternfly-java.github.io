goog.module('org.patternfly.component.modal.ModalBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const ModalSubComponent = goog.require('org.patternfly.component.modal.ModalSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ModalSubComponent<HTMLElement, ModalBody>}
 * @implements {ElementTextMethods<HTMLElement, ModalBody>}
 */
class ModalBody extends ModalSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {ModalBody} */
 static m_modalBody__org_patternfly_component_modal_ModalBody() {
  ModalBody.$clinit();
  return ModalBody.$create__();
 }
 /** @nodts @return {!ModalBody} */
 static $create__() {
  ModalBody.$clinit();
  let $instance = new ModalBody();
  $instance.$ctor__org_patternfly_component_modal_ModalBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_modal_ModalBody__void() {
  this.$ctor__org_patternfly_component_modal_ModalSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ModalBody.f_SUB_COMPONENT_ID__org_patternfly_component_modal_ModalBody, ModalBody.f_SUB_COMPONENT_NAME__org_patternfly_component_modal_ModalBody, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {ModalBody} */
 m_that__org_patternfly_component_modal_ModalBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_modal_ModalBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalBody} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ModalBody}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ModalBody));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {ModalBody} */
 m_text__java_lang_String__org_patternfly_component_modal_ModalBody(/** ?string */ arg0) {
  return /**@type {ModalBody}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ModalBody));
 }
 /** @nodts */
 static $clinit() {
  ModalBody.$clinit = () =>{};
  ModalBody.$loadModules();
  ModalSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ModalBody;
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
ModalBody.f_SUB_COMPONENT_ID__org_patternfly_component_modal_ModalBody = 'mb';
/**@const {string} @nodts*/
ModalBody.f_SUB_COMPONENT_NAME__org_patternfly_component_modal_ModalBody = 'ModalBody';
ElementTextMethods.$markImplementor(ModalBody);
$Util.$setClassMetadata(ModalBody, 'org.patternfly.component.modal.ModalBody');

exports = ModalBody;

//# sourceMappingURL=ModalBody.js.map
