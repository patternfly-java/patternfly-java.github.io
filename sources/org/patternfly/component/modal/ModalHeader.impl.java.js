goog.module('org.patternfly.component.modal.ModalHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ModalSubComponent = goog.require('org.patternfly.component.modal.ModalSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ModalHeaderDescription = goog.forwardDeclare('org.patternfly.component.modal.ModalHeaderDescription$impl');
let ModalHeaderTitle = goog.forwardDeclare('org.patternfly.component.modal.ModalHeaderTitle$impl');
let Popover = goog.forwardDeclare('org.patternfly.component.popover.Popover$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ModalSubComponent<HTMLElement, ModalHeader>}
 */
class ModalHeader extends ModalSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ModalHeaderTitle} @nodts*/
  this.f_title__org_patternfly_component_modal_ModalHeader;
  /**@type {HTMLElement} @nodts*/
  this.f_mainContainer__org_patternfly_component_modal_ModalHeader_;
 }
 /** @nodts @return {ModalHeader} */
 static m_modalHeader__org_patternfly_component_modal_ModalHeader() {
  ModalHeader.$clinit();
  return ModalHeader.$create__();
 }
 /** @nodts @return {!ModalHeader} */
 static $create__() {
  ModalHeader.$clinit();
  let $instance = new ModalHeader();
  $instance.$ctor__org_patternfly_component_modal_ModalHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_modal_ModalHeader__void() {
  this.$ctor__org_patternfly_component_modal_ModalSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ModalHeader.f_SUB_COMPONENT_ID__org_patternfly_component_modal_ModalHeader, ModalHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_modal_ModalHeader, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {ModalHeader} */
 m_addTitle__java_lang_String__org_patternfly_component_modal_ModalHeader(/** ?string */ title) {
  return this.m_addTitle__org_patternfly_component_modal_ModalHeaderTitle__org_patternfly_component_modal_ModalHeader(ModalHeaderTitle.m_modalHeaderTitle__org_patternfly_component_modal_ModalHeaderTitle().m_text__java_lang_String__org_patternfly_component_modal_ModalHeaderTitle(title));
 }
 /** @nodts @return {ModalHeader} */
 m_addTitle__org_patternfly_component_modal_ModalHeaderTitle__org_patternfly_component_modal_ModalHeader(/** ModalHeaderTitle */ title) {
  return this.m_add__org_patternfly_component_modal_ModalHeaderTitle__org_patternfly_component_modal_ModalHeader(title);
 }
 /** @nodts @return {ModalHeader} */
 m_add__org_patternfly_component_modal_ModalHeaderTitle__org_patternfly_component_modal_ModalHeader(/** ModalHeaderTitle */ title) {
  this.f_title__org_patternfly_component_modal_ModalHeader = title;
  if (!$Equality.$same(this.f_mainContainer__org_patternfly_component_modal_ModalHeader_, null)) {
   this.f_mainContainer__org_patternfly_component_modal_ModalHeader_.appendChild(title.m_element__elemental2_dom_HTMLElement());
  } else {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(title.m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {ModalHeader} */
 m_addDescription__java_lang_String__org_patternfly_component_modal_ModalHeader(/** ?string */ description) {
  return this.m_add__org_patternfly_component_modal_ModalHeaderDescription__org_patternfly_component_modal_ModalHeader(/**@type {ModalHeaderDescription}*/ ($Casts.$to(ModalHeaderDescription.m_modalHeaderDescription__org_patternfly_component_modal_ModalHeaderDescription().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(description), ModalHeaderDescription)));
 }
 /** @nodts @return {ModalHeader} */
 m_addDescription__org_patternfly_component_modal_ModalHeaderDescription__org_patternfly_component_modal_ModalHeader(/** ModalHeaderDescription */ description) {
  return this.m_add__org_patternfly_component_modal_ModalHeaderDescription__org_patternfly_component_modal_ModalHeader(description);
 }
 /** @nodts @return {ModalHeader} */
 m_add__org_patternfly_component_modal_ModalHeaderDescription__org_patternfly_component_modal_ModalHeader(/** ModalHeaderDescription */ description) {
  if (!$Equality.$same(this.f_mainContainer__org_patternfly_component_modal_ModalHeader_, null)) {
   this.f_mainContainer__org_patternfly_component_modal_ModalHeader_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(description.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  } else {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(description.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this;
 }
 /** @nodts @return {ModalHeader} */
 m_help__org_patternfly_component_popover_Popover__org_patternfly_component_modal_ModalHeader(/** Popover */ popover) {
  return this.m_help__org_patternfly_component_popover_Popover__elemental2_dom_HTMLElement__org_patternfly_component_modal_ModalHeader(popover, (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(patternfly.m_help__org_patternfly_icon_PredefinedIcon()), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Help'), Button))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {ModalHeader} */
 m_help__org_patternfly_component_popover_Popover__elemental2_dom_HTMLElement__org_patternfly_component_modal_ModalHeader(/** Popover */ popover, /** HTMLElement */ help) {
  if ($Equality.$same(this.f_mainContainer__org_patternfly_component_modal_ModalHeader_, null)) {
   this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_help__org_patternfly_style_Classes));
   this.f_mainContainer__org_patternfly_component_modal_ModalHeader_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
   for (let $iterator = Elements.m_children__elemental2_dom_HTMLElement__java_lang_Iterable(this.m_element__elemental2_dom_HTMLElement()).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let child = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
    {
     this.f_mainContainer__org_patternfly_component_modal_ModalHeader_.appendChild(child);
    }
   }
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainContainer__org_patternfly_component_modal_ModalHeader_);
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_modalBox__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_header__org_patternfly_style_Classes, Classes.f_help__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(help), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(popover.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(help)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  } else {
   ModalHeader.f_logger__org_patternfly_component_modal_ModalHeader_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Help popover already defined for modal header %o', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  return this;
 }
 /** @nodts @return {ModalHeader} */
 m_that__org_patternfly_component_modal_ModalHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ModalHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_modal_ModalHeader();
 }
 /** @nodts */
 static $clinit() {
  ModalHeader.$clinit = () =>{};
  ModalHeader.$loadModules();
  ModalSubComponent.$clinit();
  ModalHeader.f_logger__org_patternfly_component_modal_ModalHeader_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(ModalHeader).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ModalHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ModalHeaderDescription = goog.module.get('org.patternfly.component.modal.ModalHeaderDescription$impl');
  ModalHeaderTitle = goog.module.get('org.patternfly.component.modal.ModalHeaderTitle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
ModalHeader.f_logger__org_patternfly_component_modal_ModalHeader_;
/**@const {string} @nodts*/
ModalHeader.f_SUB_COMPONENT_ID__org_patternfly_component_modal_ModalHeader = 'mh';
/**@const {string} @nodts*/
ModalHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_modal_ModalHeader = 'ModalHeader';
$Util.$setClassMetadata(ModalHeader, 'org.patternfly.component.modal.ModalHeader');

exports = ModalHeader;

//# sourceMappingURL=ModalHeader.js.map
