goog.module('org.patternfly.component.alert.Alert$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Inline = goog.require('org.patternfly.style.Modifiers.Inline$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLParagraphElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let AlertActionGroup = goog.forwardDeclare('org.patternfly.component.alert.AlertActionGroup$impl');
let AlertDescription = goog.forwardDeclare('org.patternfly.component.alert.AlertDescription$impl');
let AlertGroup = goog.forwardDeclare('org.patternfly.component.alert.AlertGroup$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Alert>}
 * @implements {Attachable}
 * @implements {Closeable<HTMLDivElement, Alert>}
 * @implements {ComponentContext<HTMLDivElement, Alert>}
 * @implements {ComponentIcon<HTMLDivElement, Alert>}
 * @implements {Expandable<HTMLDivElement, Alert>}
 * @implements {HasIdentifier<HTMLDivElement, Alert>}
 * @implements {Inline<HTMLDivElement, Alert>}
 * @implements {Plain<HTMLDivElement, Alert>}
 */
class Alert extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_timeout__org_patternfly_component_alert_Alert = 0;
  /**@type {boolean} @nodts*/
  this.f_expandable__org_patternfly_component_alert_Alert = false;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_alert_Alert;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_alert_Alert_;
  /**@type {Severity} @nodts*/
  this.f_severity__org_patternfly_component_alert_Alert_;
  /**@type {?string} @nodts*/
  this.f_title__org_patternfly_component_alert_Alert_;
  /**@type {number} @nodts*/
  this.f_timestamp__org_patternfly_component_alert_Alert_ = 0;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_alert_Alert_;
  /**@type {HTMLParagraphElement} @nodts*/
  this.f_titleElement__org_patternfly_component_alert_Alert_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_alert_Alert_;
  /**@type {List<CloseHandler<Alert>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_alert_Alert_;
  /**@type {number} @nodts*/
  this.f_timeoutHandle__org_patternfly_component_alert_Alert_ = 0;
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_alert_Alert_;
  /**@type {AlertDescription} @nodts*/
  this.f_description__org_patternfly_component_alert_Alert_;
  /**@type {ToggleHandler<Alert>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_alert_Alert_;
 }
 /** @nodts @return {Alert} */
 static m_alert__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_alert_Alert(/** Severity */ type, /** ?string */ title) {
  Alert.$clinit();
  return Alert.$create__org_patternfly_component_Severity__java_lang_String__java_lang_String(type, Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Alert__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), title);
 }
 /** @nodts @return {Alert} */
 static m_alert__org_patternfly_component_Severity__java_lang_String__java_lang_String__org_patternfly_component_alert_Alert(/** Severity */ type, /** ?string */ identifier, /** ?string */ title) {
  Alert.$clinit();
  return Alert.$create__org_patternfly_component_Severity__java_lang_String__java_lang_String(type, identifier, title);
 }
 /** @nodts @return {!Alert} */
 static $create__org_patternfly_component_Severity__java_lang_String__java_lang_String(/** Severity */ severity, /** ?string */ identifier, /** ?string */ title) {
  Alert.$clinit();
  let $instance = new Alert();
  $instance.$ctor__org_patternfly_component_alert_Alert__org_patternfly_component_Severity__java_lang_String__java_lang_String__void(severity, identifier, title);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_alert_Alert__org_patternfly_component_Severity__java_lang_String__java_lang_String__void(/** Severity */ severity, /** ?string */ identifier, /** ?string */ title) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Alert__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), severity.f_status__org_patternfly_component_Severity.m_modifier__java_lang_String()], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, j_l_String.m_valueOf__java_lang_Object__java_lang_String(severity.name()) + ' alert'), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_identifier__org_patternfly_component_alert_Alert_ = identifier;
  this.f_severity__org_patternfly_component_alert_Alert_ = severity;
  this.f_title__org_patternfly_component_alert_Alert_ = title;
  this.f_timestamp__org_patternfly_component_alert_Alert_ = Date.now();
  this.f_data__org_patternfly_component_alert_Alert_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_timeoutHandle__org_patternfly_component_alert_Alert_ = 0;
  this.f_timeout__org_patternfly_component_alert_Alert = Alert.f_NO_TIMEOUT__org_patternfly_component_alert_Alert;
  this.f_expandable__org_patternfly_component_alert_Alert = false;
  this.f_closeHandler__org_patternfly_component_alert_Alert_ = (/**@type {!ArrayList<CloseHandler<Alert>>}*/ (ArrayList.$create__()));
  this.m_storeComponent__void();
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_iconContainer__org_patternfly_component_alert_Alert_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(severity.m_icon__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_titleElement__org_patternfly_component_alert_Alert_ = (/**@type {HTMLParagraphElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__java_lang_Object__java_lang_String(severity.name()) + ' alert:'), HTMLContainerBuilder))), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(title), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLParagraphElement_$Overlay))));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_timeout__org_patternfly_component_alert_Alert > Alert.f_MIN_TIMEOUT__org_patternfly_component_alert_Alert) {
   this.m_startTimeout__void_$p_org_patternfly_component_alert_Alert();
   this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_mouseover__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_stopTimeout__void_$p_org_patternfly_component_alert_Alert();
   });
   this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_mouseout__org_jboss_elemento_EventType, (/** MouseEvent */ e_2) =>{
    let e_3 = /**@type {MouseEvent}*/ ($Casts.$to(e_2, MouseEvent_$Overlay));
    this.m_startTimeout__void_$p_org_patternfly_component_alert_Alert();
   });
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  goog.global.clearTimeout(this.f_timeoutHandle__org_patternfly_component_alert_Alert_);
 }
 /** @nodts @return {Alert} */
 m_addActionGroup__org_patternfly_component_alert_AlertActionGroup__org_patternfly_component_alert_Alert(/** AlertActionGroup */ actionGroup) {
  return /**@type {Alert}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(actionGroup), Alert));
 }
 /** @nodts @return {Alert} */
 m_addDescription__java_lang_String__org_patternfly_component_alert_Alert(/** ?string */ description) {
  return this.m_add__org_patternfly_component_alert_AlertDescription__org_patternfly_component_alert_Alert(/**@type {AlertDescription}*/ ($Casts.$to(AlertDescription.m_alertDescription__org_patternfly_component_alert_AlertDescription().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(description), HTMLContainerBuilder))), AlertDescription)));
 }
 /** @nodts @return {Alert} */
 m_addDescription__org_patternfly_component_alert_AlertDescription__org_patternfly_component_alert_Alert(/** AlertDescription */ description) {
  return this.m_add__org_patternfly_component_alert_AlertDescription__org_patternfly_component_alert_Alert(description);
 }
 /** @nodts @return {Alert} */
 m_add__org_patternfly_component_alert_AlertDescription__org_patternfly_component_alert_Alert(/** AlertDescription */ description) {
  this.f_description__org_patternfly_component_alert_Alert_ = description;
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_description__org_patternfly_component_alert_Alert_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).hidden = (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_style_Classes)) && !this.m_expanded__boolean();
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(description.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Alert} */
 m_closable__org_patternfly_component_alert_Alert() {
  return this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_alert_Alert(null);
 }
 /** @nodts @return {Alert} */
 m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_alert_Alert(/** CloseHandler<Alert> */ closeHandler) {
  Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_alert_Alert = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_severity__org_patternfly_component_alert_Alert_.name()) + ' alert: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_title__org_patternfly_component_alert_Alert_)), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
  }), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.f_titleElement__org_patternfly_component_alert_Alert_);
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_alert_Alert(closeHandler);
 }
 /** @nodts @return {Alert} */
 m_icon__elemental2_dom_Element__org_patternfly_component_alert_Alert(/** Element */ icon) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_alert_Alert_);
  this.f_iconContainer__org_patternfly_component_alert_Alert_.appendChild(icon);
  return this;
 }
 /** @nodts @return {Alert} */
 m_removeIcon__org_patternfly_component_alert_Alert() {
  Alert.f_logger__org_patternfly_component_alert_Alert_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Removing the icon is not supported for alert %o', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
  return this;
 }
 /** @nodts @return {Alert} */
 m_expandable__org_patternfly_component_alert_Alert() {
  return this.m_expandable__org_patternfly_handler_ToggleHandler__org_patternfly_component_alert_Alert(null);
 }
 /** @nodts @return {Alert} */
 m_expandable__org_patternfly_handler_ToggleHandler__org_patternfly_component_alert_Alert(/** ToggleHandler<Alert> */ toggleHandler) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_style_Classes)], j_l_String)));
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_alert_Alert_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_toggle__void();
  }), Button))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_severity__org_patternfly_component_alert_Alert_.name()) + ' alert: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_title__org_patternfly_component_alert_Alert_) + ' details'), Button))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretDown__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder))), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_expandable__org_patternfly_component_alert_Alert = true;
  this.f_toggleHandler__org_patternfly_component_alert_Alert_ = toggleHandler;
  return this;
 }
 /** @nodts @return {Alert} */
 m_liveRegion__org_patternfly_component_alert_Alert() {
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_live__org_patternfly_core_Aria, 'polite');
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_atomic__org_patternfly_core_Aria, false);
  return this;
 }
 /** @nodts @return {Alert} */
 m_timeout__org_patternfly_component_alert_Alert() {
  return this.m_timeout__int__org_patternfly_component_alert_Alert(Alert.f_DEFAULT_TIMEOUT__org_patternfly_component_alert_Alert);
 }
 /** @nodts @return {Alert} */
 m_timeout__int__org_patternfly_component_alert_Alert(/** number */ timeout) {
  this.f_timeout__org_patternfly_component_alert_Alert = timeout;
  return this;
 }
 /** @nodts @return {Alert} */
 m_truncate__org_patternfly_component_alert_Alert() {
  return this.m_truncate__int__org_patternfly_component_alert_Alert(1);
 }
 /** @nodts @return {Alert} */
 m_truncate__int__org_patternfly_component_alert_Alert(/** number */ lines) {
  this.f_titleElement__org_patternfly_component_alert_Alert_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes));
  if (lines != 1) {
   Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_title__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['max-lines'], j_l_String))).m_applyTo__elemental2_dom_HTMLElement__org_patternfly_style_VariableAssignments_HTMLElement(this.f_titleElement__org_patternfly_component_alert_Alert_).m_set__int__void(lines);
  }
  return this;
 }
 /** @nodts @template T @return {Alert} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_alert_Alert(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_alert_Alert_.put(key, value);
  return this;
 }
 /** @nodts @return {Alert} */
 m_that__org_patternfly_component_alert_Alert() {
  return this;
 }
 /** @nodts @return {Alert} */
 m_ariaLabel__java_lang_String__org_patternfly_component_alert_Alert(/** ?string */ label) {
  return /**@type {Alert}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Alert));
 }
 /** @nodts @return {Alert} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_alert_Alert(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_alert_Alert, null)) {
   this.f_closeButton__org_patternfly_component_alert_Alert.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Alert} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_alert_Alert(/** CloseHandler<Alert> */ closeHandler) {
  if (!$Equality.$same(closeHandler, null)) {
   this.f_closeHandler__org_patternfly_component_alert_Alert_.add(closeHandler);
  }
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_alert_Alert_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_alert_Alert_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_alert_Alert_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_alert_Alert_.get(key));
  }
  return null;
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_alert_Alert_, event, fireEvent)) {
   this.m_stopTimeout__void_$p_org_patternfly_component_alert_Alert();
   let alertGroup = /**@type {AlertGroup}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_ComponentType__boolean__org_patternfly_component_BaseComponent(ComponentType.f_AlertGroup__org_patternfly_component_ComponentType, true), AlertGroup));
   if (!$Equality.$same(alertGroup, null)) {
    alertGroup.m_closeAlert__org_patternfly_component_alert_Alert__void_$pp_org_patternfly_component_alert(this);
   } else {
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this);
   }
   CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_alert_Alert_, event, fireEvent);
  }
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (!this.f_expandable__org_patternfly_component_alert_Alert) {
   Alert.f_logger__org_patternfly_component_alert_Alert_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Alert %o is not expandable. Please use Alert.expandable() to make this an expandable alert.', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
   return;
  }
  Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.f_toggleButton__org_patternfly_component_alert_Alert_.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_description__org_patternfly_component_alert_Alert_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_alert_Alert_, null)) {
   this.f_toggleHandler__org_patternfly_component_alert_Alert_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  if (!this.f_expandable__org_patternfly_component_alert_Alert) {
   Alert.f_logger__org_patternfly_component_alert_Alert_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Alert %o is not expandable. Please use Alert.expandable() to make this an expandable alert.', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
   return;
  }
  Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.f_toggleButton__org_patternfly_component_alert_Alert_.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_description__org_patternfly_component_alert_Alert_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_alert_Alert_, null)) {
   this.f_toggleHandler__org_patternfly_component_alert_Alert_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
  }
 }
 /** @nodts @return {number} */
 m_timestamp__double() {
  return this.f_timestamp__org_patternfly_component_alert_Alert_;
 }
 /** @nodts */
 m_startTimeout__void_$p_org_patternfly_component_alert_Alert() {
  this.f_timeoutHandle__org_patternfly_component_alert_Alert_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ o) =>{
   this.m_close__void();
  }, this.f_timeout__org_patternfly_component_alert_Alert, []);
 }
 /** @nodts */
 m_stopTimeout__void_$p_org_patternfly_component_alert_Alert() {
  goog.global.clearTimeout(this.f_timeoutHandle__org_patternfly_component_alert_Alert_);
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_alert_Alert();
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Alert> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_alert_Alert(arg0);
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
 //Bridge method.
 /** @final @override @nodts @template T @return {Alert} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_alert_Alert(arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ arg0, /** T */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ arg0, /** Supplier<T> */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(this, arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {Alert}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Alert));
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_alert_Alert(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_alert_Alert();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {Alert}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Alert));
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Alert}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Alert));
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {Alert}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Alert));
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Alert}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Alert));
 }
 //Default method forwarding stub.
 /** @nodts @return {Alert} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_alert_Alert(/** PredefinedIcon */ arg0) {
  return /**@type {Alert}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Alert));
 }
 //Default method forwarding stub.
 /** @nodts @return {Alert} */
 m_inline__org_patternfly_component_alert_Alert() {
  return /**@type {Alert}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Alert));
 }
 //Default method forwarding stub.
 /** @nodts @return {Alert} */
 m_inline__boolean__org_patternfly_component_alert_Alert(/** boolean */ arg0) {
  return /**@type {Alert}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Alert));
 }
 //Default method forwarding stub.
 /** @nodts @return {Alert} */
 m_plain__org_patternfly_component_alert_Alert() {
  return /**@type {Alert}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Alert));
 }
 //Default method forwarding stub.
 /** @nodts @return {Alert} */
 m_plain__boolean__org_patternfly_component_alert_Alert(/** boolean */ arg0) {
  return /**@type {Alert}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Alert));
 }
 /** @nodts */
 static $clinit() {
  Alert.$clinit = () =>{};
  Alert.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Closeable.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  Expandable.$clinit();
  Inline.$clinit();
  Plain.$clinit();
  Alert.f_logger__org_patternfly_component_alert_Alert_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Alert).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Alert;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLParagraphElement_$Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  AlertDescription = goog.module.get('org.patternfly.component.alert.AlertDescription$impl');
  AlertGroup = goog.module.get('org.patternfly.component.alert.AlertGroup$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Alert.f_logger__org_patternfly_component_alert_Alert_;
/**@const {number} @nodts*/
Alert.f_DEFAULT_TIMEOUT__org_patternfly_component_alert_Alert = 8000;
/**@const {number} @nodts*/
Alert.f_NO_TIMEOUT__org_patternfly_component_alert_Alert = -1;
/**@const {number} @nodts*/
Alert.f_MIN_TIMEOUT__org_patternfly_component_alert_Alert = 1000;
Attachable.$markImplementor(Alert);
Closeable.$markImplementor(Alert);
ComponentContext.$markImplementor(Alert);
ComponentIcon.$markImplementor(Alert);
Expandable.$markImplementor(Alert);
HasIdentifier.$markImplementor(Alert);
Inline.$markImplementor(Alert);
Plain.$markImplementor(Alert);
$Util.$setClassMetadata(Alert, 'org.patternfly.component.alert.Alert');

exports = Alert;

//# sourceMappingURL=Alert.js.map
