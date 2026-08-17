goog.module('org.patternfly.component.modal.Modal$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const ComponentDelegate = goog.require('org.patternfly.component.ComponentDelegate$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Backdrop = goog.forwardDeclare('org.patternfly.component.backdrop.Backdrop$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ModalBody = goog.forwardDeclare('org.patternfly.component.modal.ModalBody$impl');
let ModalFooter = goog.forwardDeclare('org.patternfly.component.modal.ModalFooter$impl');
let ModalHeader = goog.forwardDeclare('org.patternfly.component.modal.ModalHeader$impl');
let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Bullseye = goog.forwardDeclare('org.patternfly.layout.bullseye.Bullseye$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let HTMLBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ComponentDelegate<HTMLElement, Modal>}
 * @implements {Attachable}
 * @implements {Closeable<HTMLElement, Modal>}
 */
class Modal extends ComponentDelegate {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Backdrop} @nodts*/
  this.f_backdrop__org_patternfly_component_modal_Modal_;
  /**@type {HTMLElement} @nodts*/
  this.f_closeContainer__org_patternfly_component_modal_Modal_;
  /**@type {List<CloseHandler<Modal>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_modal_Modal_;
  /**@type {boolean} @nodts*/
  this.f_open__org_patternfly_component_modal_Modal_ = false;
  /**@type {boolean} @nodts*/
  this.f_hideClose__org_patternfly_component_modal_Modal_ = false;
  /**@type {ModalHeader} @nodts*/
  this.f_header__org_patternfly_component_modal_Modal_;
  /**@type {ModalBody} @nodts*/
  this.f_body__org_patternfly_component_modal_Modal_;
  /**@type {ModalFooter} @nodts*/
  this.f_footer__org_patternfly_component_modal_Modal_;
  /**@type {HTMLElement} @nodts*/
  this.f_target__org_patternfly_component_modal_Modal_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_escapeHandler__org_patternfly_component_modal_Modal_;
  /**@type {boolean} @nodts*/
  this.f_closeOnEsc__org_patternfly_component_modal_Modal = false;
  /**@type {boolean} @nodts*/
  this.f_autoClose__org_patternfly_component_modal_Modal = false;
 }
 /** @nodts @return {Modal} */
 static m_modal__org_patternfly_component_modal_Modal() {
  Modal.$clinit();
  return Modal.$create__();
 }
 /** @nodts @return {!Modal} */
 static $create__() {
  Modal.$clinit();
  let $instance = new Modal();
  $instance.$ctor__org_patternfly_component_modal_Modal__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_modal_Modal__void() {
  this.$ctor__org_patternfly_component_ComponentDelegate__org_patternfly_component_ComponentType__void(ComponentType.f_Modal__org_patternfly_component_ComponentType);
  this.f_open__org_patternfly_component_modal_Modal_ = false;
  this.f_closeOnEsc__org_patternfly_component_modal_Modal = true;
  this.f_autoClose__org_patternfly_component_modal_Modal = false;
  this.f_hideClose__org_patternfly_component_modal_Modal_ = false;
  this.f_closeHandler__org_patternfly_component_modal_Modal_ = (/**@type {!ArrayList<CloseHandler<Modal>>}*/ (ArrayList.$create__()));
  let /** HTMLElement */ modalElement;
  this.f_backdrop__org_patternfly_component_modal_Modal_ = (/**@type {Backdrop}*/ ($Casts.$to(Backdrop.m_backdrop__org_patternfly_component_backdrop_Backdrop().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Bullseye}*/ ($Casts.$to(Bullseye.m_bullseye__org_patternfly_layout_bullseye_Bullseye().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(modalElement = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_dialog__org_patternfly_core_Roles), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_modal__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_closeContainer__org_patternfly_component_modal_Modal_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close'), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_close__elemental2_dom_Event__boolean__void(e_1, true);
  }), Button))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))), Bullseye))), Backdrop)));
  this.m_delegateTo__elemental2_dom_HTMLElement__void(modalElement);
  Attachable.m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable__void(modalElement, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_hideClose__org_patternfly_component_modal_Modal_) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_closeContainer__org_patternfly_component_modal_Modal_);
  }
  if (!this.m_element__elemental2_dom_HTMLElement().hasAttribute(Aria.f_labelledBy__org_patternfly_core_Aria)) {
   if (!$Equality.$same(this.f_header__org_patternfly_component_modal_Modal_, null) && !$Equality.$same(this.f_header__org_patternfly_component_modal_Modal_.f_title__org_patternfly_component_modal_ModalHeader, null)) {
    let /** ?string */ titleId;
    if (this.f_header__org_patternfly_component_modal_Modal_.f_title__org_patternfly_component_modal_ModalHeader.m_element__elemental2_dom_HTMLElement().hasAttribute('id')) {
     titleId = this.f_header__org_patternfly_component_modal_Modal_.f_title__org_patternfly_component_modal_ModalHeader.m_element__elemental2_dom_HTMLElement().getAttribute('id');
    } else {
     titleId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['header', 'title'], j_l_String)));
    }
    this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, titleId);
    if (!$Equality.$same(this.f_header__org_patternfly_component_modal_Modal_.f_title__org_patternfly_component_modal_ModalHeader.f_severity__org_patternfly_component_modal_ModalHeaderTitle, null)) {
     this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([this.f_header__org_patternfly_component_modal_Modal_.f_title__org_patternfly_component_modal_ModalHeader.f_severity__org_patternfly_component_modal_ModalHeaderTitle.f_status__org_patternfly_component_Severity.m_modifier__java_lang_String()], j_l_String)));
    }
   }
  }
  if (!this.m_element__elemental2_dom_HTMLElement().hasAttribute(Aria.f_describedBy__org_patternfly_core_Aria)) {
   if (!$Equality.$same(this.f_body__org_patternfly_component_modal_Modal_, null)) {
    let /** ?string */ bodyId;
    if (this.f_body__org_patternfly_component_modal_Modal_.m_element__elemental2_dom_HTMLElement().hasAttribute('id')) {
     bodyId = this.f_body__org_patternfly_component_modal_Modal_.m_element__elemental2_dom_HTMLElement().getAttribute('id');
    } else {
     bodyId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['body'], j_l_String)));
    }
    this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_describedBy__org_patternfly_core_Aria, bodyId);
   }
  }
 }
 /** @nodts @return {Modal} */
 m_appendToBody__org_patternfly_component_modal_Modal() {
  return this.m_appendTo__elemental2_dom_HTMLElement__org_patternfly_component_modal_Modal(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body);
 }
 /** @nodts @return {Modal} */
 m_appendTo__elemental2_dom_HTMLElement__org_patternfly_component_modal_Modal(/** HTMLElement */ element) {
  this.f_target__org_patternfly_component_modal_Modal_ = element;
  return this;
 }
 /** @nodts @return {Modal} */
 m_addHeader__java_lang_String__org_patternfly_component_modal_Modal(/** ?string */ title) {
  return this.m_add__org_patternfly_component_modal_ModalHeader__org_patternfly_component_modal_Modal(ModalHeader.m_modalHeader__org_patternfly_component_modal_ModalHeader().m_addTitle__java_lang_String__org_patternfly_component_modal_ModalHeader(title));
 }
 /** @nodts @return {Modal} */
 m_addHeader__org_patternfly_component_modal_ModalHeader__org_patternfly_component_modal_Modal(/** ModalHeader */ header) {
  return this.m_add__org_patternfly_component_modal_ModalHeader__org_patternfly_component_modal_Modal(header);
 }
 /** @nodts @return {Modal} */
 m_add__org_patternfly_component_modal_ModalHeader__org_patternfly_component_modal_Modal(/** ModalHeader */ header) {
  if (!$Equality.$same(this.f_header__org_patternfly_component_modal_Modal_, null)) {
   Modal.f_logger__org_patternfly_component_modal_Modal_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Header already added to modal %o', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  this.f_header__org_patternfly_component_modal_Modal_ = header;
  Elements.m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(header, this.f_closeContainer__org_patternfly_component_modal_Modal_);
  return this;
 }
 /** @nodts @return {Modal} */
 m_addBody__org_patternfly_component_modal_ModalBody__org_patternfly_component_modal_Modal(/** ModalBody */ body) {
  return this.m_add__org_patternfly_component_modal_ModalBody__org_patternfly_component_modal_Modal(body);
 }
 /** @nodts @return {Modal} */
 m_add__org_patternfly_component_modal_ModalBody__org_patternfly_component_modal_Modal(/** ModalBody */ body) {
  if (!$Equality.$same(this.f_body__org_patternfly_component_modal_Modal_, null)) {
   Modal.f_logger__org_patternfly_component_modal_Modal_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Body already added to modal %o', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  this.f_body__org_patternfly_component_modal_Modal_ = body;
  if (!$Equality.$same(this.f_header__org_patternfly_component_modal_Modal_, null)) {
   Elements.m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(body, this.f_header__org_patternfly_component_modal_Modal_.m_element__elemental2_dom_HTMLElement());
  } else if (!$Equality.$same(this.f_footer__org_patternfly_component_modal_Modal_, null)) {
   Elements.m_insertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element__void(body, this.f_footer__org_patternfly_component_modal_Modal_.m_element__elemental2_dom_HTMLElement());
  } else {
   Elements.m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(body, this.f_closeContainer__org_patternfly_component_modal_Modal_);
  }
  return this;
 }
 /** @nodts @return {Modal} */
 m_addFooter__org_patternfly_component_modal_ModalFooter__org_patternfly_component_modal_Modal(/** ModalFooter */ footer) {
  return this.m_add__org_patternfly_component_modal_ModalFooter__org_patternfly_component_modal_Modal(footer);
 }
 /** @nodts @return {Modal} */
 m_add__org_patternfly_component_modal_ModalFooter__org_patternfly_component_modal_Modal(/** ModalFooter */ footer) {
  if (!$Equality.$same(this.f_footer__org_patternfly_component_modal_Modal_, null)) {
   Modal.f_logger__org_patternfly_component_modal_Modal_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Footer already added to modal %o', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  this.f_footer__org_patternfly_component_modal_Modal_ = footer;
  if (!$Equality.$same(this.f_body__org_patternfly_component_modal_Modal_, null)) {
   Elements.m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(footer, this.f_body__org_patternfly_component_modal_Modal_.m_element__elemental2_dom_HTMLElement());
  } else if (!$Equality.$same(this.f_header__org_patternfly_component_modal_Modal_, null)) {
   Elements.m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(footer, this.f_header__org_patternfly_component_modal_Modal_.m_element__elemental2_dom_HTMLElement());
  } else {
   Elements.m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(footer, this.f_closeContainer__org_patternfly_component_modal_Modal_);
  }
  return this;
 }
 /** @nodts @return {Modal} */
 m_addWizard__org_patternfly_component_wizard_Wizard__org_patternfly_component_modal_Modal(/** Wizard */ wizard) {
  return this.m_add__org_patternfly_component_wizard_Wizard__org_patternfly_component_modal_Modal(wizard);
 }
 /** @nodts @return {Modal} */
 m_add__org_patternfly_component_wizard_Wizard__org_patternfly_component_modal_Modal(/** Wizard */ wizard) {
  this.m_element__elemental2_dom_HTMLElement().appendChild(wizard.m_element__elemental2_dom_HTMLElement());
  this.f_hideClose__org_patternfly_component_modal_Modal_ = true;
  wizard.m_onCancel__org_patternfly_handler_ComponentHandler__org_patternfly_component_wizard_Wizard(ComponentHandler.$adapt((/** Event */ e, /** Wizard */ c) =>{
   let c_1 = /**@type {Wizard}*/ ($Casts.$to(c, Wizard));
   this.m_close__void();
  }));
  wizard.m_onFinish__org_patternfly_handler_ComponentHandler__org_patternfly_component_wizard_Wizard(ComponentHandler.$adapt((/** Event */ e_1, /** Wizard */ c_2) =>{
   let c_3 = /**@type {Wizard}*/ ($Casts.$to(c_2, Wizard));
   this.m_close__void();
  }));
  return this;
 }
 /** @nodts @return {Modal} */
 m_closeOnEsc__boolean__org_patternfly_component_modal_Modal(/** boolean */ closeOnEsc) {
  this.f_closeOnEsc__org_patternfly_component_modal_Modal = closeOnEsc;
  return this;
 }
 /** @nodts @return {Modal} */
 m_autoClose__boolean__org_patternfly_component_modal_Modal(/** boolean */ autoClose) {
  this.f_autoClose__org_patternfly_component_modal_Modal = autoClose;
  return this;
 }
 /** @nodts @return {Modal} */
 m_hideClose__org_patternfly_component_modal_Modal() {
  this.f_hideClose__org_patternfly_component_modal_Modal_ = true;
  return this;
 }
 /** @nodts @return {Modal} */
 m_maxWidth__java_lang_String__org_patternfly_component_modal_Modal(/** ?string */ maxWidth) {
  return /**@type {Modal}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, Modal>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_MaxWidth__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__java_lang_String__org_jboss_elemento_TypedBuilder(maxWidth), Modal));
 }
 /** @nodts @return {Modal} */
 m_size__org_patternfly_style_Size__org_patternfly_component_modal_Modal(/** Size */ size) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_element__elemental2_dom_HTMLElement(), 'size', size, Size.f_sm__org_patternfly_style_Size, /**@type {!Array<Size>}*/ ($Arrays.$stampType([Size.f_md__org_patternfly_style_Size, Size.f_lg__org_patternfly_style_Size], Size)))) {
   TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), size, Size.m_values__arrayOf_org_patternfly_style_Size());
  }
  return this;
 }
 /** @nodts @return {Modal} */
 m_top__org_patternfly_component_modal_Modal() {
  return /**@type {Modal}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_alignTop__org_patternfly_style_Classes)], j_l_String))), Modal));
 }
 /** @nodts @return {Modal} */
 m_width__java_lang_String__org_patternfly_component_modal_Modal(/** ?string */ width) {
  return /**@type {Modal}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, Modal>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_Width__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__java_lang_String__org_jboss_elemento_TypedBuilder(width), Modal));
 }
 /** @nodts @return {Modal} */
 m_that__org_patternfly_component_modal_Modal() {
  return this;
 }
 /** @nodts @return {Modal} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_modal_Modal(/** CloseHandler<Modal> */ closeHandler) {
  if (!$Equality.$same(closeHandler, null)) {
   this.f_closeHandler__org_patternfly_component_modal_Modal_.add(closeHandler);
  }
  return null;
 }
 /** @nodts */
 m_open__void() {
  if (this.f_open__org_patternfly_component_modal_Modal_) {
   Modal.f_logger__org_patternfly_component_modal_Modal_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Modal %o already open', [this.m_element__elemental2_dom_HTMLElement()]);
  } else {
   this.m_storeComponent__void();
   let failSafeTarget = this.m_failSafeTarget__elemental2_dom_HTMLElement_$p_org_patternfly_component_modal_Modal();
   failSafeTarget.appendChild(this.f_backdrop__org_patternfly_component_modal_Modal_.m_element__elemental2_dom_HTMLElement());
   failSafeTarget.classList.add(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_backdrop__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_open__org_patternfly_style_Classes], j_l_String))));
   if (this.f_closeOnEsc__org_patternfly_component_modal_Modal || this.f_autoClose__org_patternfly_component_modal_Modal) {
    this.f_escapeHandler__org_patternfly_component_modal_Modal_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(failSafeTarget, EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ e) =>{
     let e_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(e, KeyboardEvent_$Overlay));
     if (Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_1) && (this.f_closeOnEsc__org_patternfly_component_modal_Modal || this.f_autoClose__org_patternfly_component_modal_Modal)) {
      this.m_close__elemental2_dom_Event__boolean__void(e_1, true);
     }
    });
   }
   this.f_open__org_patternfly_component_modal_Modal_ = true;
  }
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (this.f_open__org_patternfly_component_modal_Modal_ && CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_modal_Modal_, event, fireEvent)) {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_backdrop__org_patternfly_component_modal_Modal_);
   this.m_failSafeTarget__elemental2_dom_HTMLElement_$p_org_patternfly_component_modal_Modal().classList.remove(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_backdrop__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_open__org_patternfly_style_Classes], j_l_String))));
   if (!$Equality.$same(this.f_escapeHandler__org_patternfly_component_modal_Modal_, null)) {
    this.f_escapeHandler__org_patternfly_component_modal_Modal_.m_removeHandler__void();
   }
   CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_modal_Modal_, event, fireEvent);
   this.f_open__org_patternfly_component_modal_Modal_ = false;
  }
 }
 /** @nodts @return {ModalBody} */
 m_body__org_patternfly_component_modal_ModalBody() {
  return this.f_body__org_patternfly_component_modal_Modal_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTarget__elemental2_dom_HTMLElement_$p_org_patternfly_component_modal_Modal() {
  return $Equality.$same(this.f_target__org_patternfly_component_modal_Modal_, null) ? DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body : this.f_target__org_patternfly_component_modal_Modal_;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Modal} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_modal_Modal();
 }
 //Bridge method.
 /** @final @override @nodts @return {Modal} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Modal> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_modal_Modal(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__void() {
  Closeable.m_close__$default__org_patternfly_component_Closeable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__elemental2_dom_Event__void(/** Event */ arg0) {
  Closeable.m_close__$default__org_patternfly_component_Closeable__elemental2_dom_Event__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  Modal.$clinit = () =>{};
  Modal.$loadModules();
  ComponentDelegate.$clinit();
  Attachable.$clinit();
  Closeable.$clinit();
  Modal.f_logger__org_patternfly_component_modal_Modal_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Modal).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Modal;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Backdrop = goog.module.get('org.patternfly.component.backdrop.Backdrop$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ModalHeader = goog.module.get('org.patternfly.component.modal.ModalHeader$impl');
  Wizard = goog.module.get('org.patternfly.component.wizard.Wizard$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Bullseye = goog.module.get('org.patternfly.layout.bullseye.Bullseye$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Modal.f_logger__org_patternfly_component_modal_Modal_;
Attachable.$markImplementor(Modal);
Closeable.$markImplementor(Modal);
$Util.$setClassMetadata(Modal, 'org.patternfly.component.modal.Modal');

exports = Modal;

//# sourceMappingURL=Modal.js.map
