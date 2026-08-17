goog.module('org.patternfly.component.card.CardSelectableActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const CardSubComponent = goog.require('org.patternfly.component.card.CardSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Radio = goog.forwardDeclare('org.patternfly.component.form.Radio$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CardSubComponent<HTMLDivElement, CardSelectableActions>}
 * @implements {Attachable}
 */
class CardSelectableActions extends CardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Checkbox} @nodts*/
  this.f_checkbox__org_patternfly_component_card_CardSelectableActions;
  /**@type {Radio} @nodts*/
  this.f_radio__org_patternfly_component_card_CardSelectableActions;
 }
 /** @nodts @return {CardSelectableActions} */
 static m_cardSelectableActions__org_patternfly_component_card_CardSelectableActions() {
  CardSelectableActions.$clinit();
  return CardSelectableActions.$create__();
 }
 /** @nodts @return {!CardSelectableActions} */
 static $create__() {
  CardSelectableActions.$clinit();
  let $instance = new CardSelectableActions();
  $instance.$ctor__org_patternfly_component_card_CardSelectableActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardSelectableActions__void() {
  this.$ctor__org_patternfly_component_card_CardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(CardSelectableActions.f_SUB_COMPONENT_ID__org_patternfly_component_card_CardSelectableActions, CardSelectableActions.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardSelectableActions, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_selectable__org_patternfly_style_Classes, Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let card = /**@type {Card}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Card));
  if (card.m_isSelectable__boolean_$pp_org_patternfly_component_card() || card.m_isClickable__boolean_$pp_org_patternfly_component_card()) {
   if ($Equality.$same((/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay))).id, null) || j_l_String.m_isEmpty__java_lang_String__boolean((/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay))).id)) {
    card.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))));
   }
  }
  if (card.m_isClickable__boolean_$pp_org_patternfly_component_card() && !card.m_isSelectable__boolean_$pp_org_patternfly_component_card()) {
   let cardId = (/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay))).id;
   let selectId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['select'], j_l_String)));
   let radioName = card.f_name__org_patternfly_component_card_Card;
   if ($Equality.$same(radioName, null)) {
    radioName = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['name', 'fallback'], j_l_String)));
    CardSelectableActions.f_logger__org_patternfly_component_card_CardSelectableActions_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Name is undefined for clickable card %o. You must provide a common name for all clickable cards using Card.name(String). Fallback to generated name \'%s\', which will cause selection issues!', [/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)), radioName]);
   }
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_radio__org_patternfly_component_card_CardSelectableActions = Radio.m_radio__java_lang_String__java_lang_String__org_patternfly_component_form_Radio(selectId, radioName).m_standalone__boolean__org_patternfly_component_form_Radio(false));
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String)));
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, cardId);
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
    let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
    card.m_click__elemental2_dom_Event__void_$pp_org_patternfly_component_card(arg0_1);
   });
   if ((/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes))) {
    this.f_radio__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Radio(true);
   }
  } else if (card.m_isSelectable__boolean_$pp_org_patternfly_component_card()) {
   let cardId_1 = (/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay))).id;
   let selectId_1 = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['select'], j_l_String)));
   if ($Equality.$same(card.f_selectionMode__org_patternfly_component_card_Card, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
    let radioName_1 = card.f_name__org_patternfly_component_card_Card;
    if ($Equality.$same(radioName_1, null)) {
     radioName_1 = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['name', 'fallback'], j_l_String)));
     CardSelectableActions.f_logger__org_patternfly_component_card_CardSelectableActions_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Name is undefined for single selectable card %o. You must provide a common name for all single selectable cards using Card.name(String). Fallback to generated name \'%s\', which will cause selection issues!', [/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)), radioName_1]);
    }
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_radio__org_patternfly_component_card_CardSelectableActions = Radio.m_radio__java_lang_String__java_lang_String__org_patternfly_component_form_Radio(selectId_1, radioName_1).m_standalone__boolean__org_patternfly_component_form_Radio(false).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Radio(ChangeHandler.$adapt((/** Event */ e, /** Radio */ r, /** ?boolean */ selected) =>{
     let r_1 = /**@type {Radio}*/ ($Casts.$to(r, Radio));
     let selected_1 = /**@type {?boolean}*/ ($Casts.$to(selected, Boolean));
     card.m_internalSelect__boolean__boolean__void_$pp_org_patternfly_component_card(Boolean.m_booleanValue__java_lang_Boolean__boolean(selected_1), true);
    })));
    this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, cardId_1);
    if ((/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes))) {
     this.f_radio__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Radio(true);
    }
   } else {
    let checkboxName = card.f_name__org_patternfly_component_card_Card;
    if ($Equality.$same(checkboxName, null)) {
     checkboxName = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['name', 'fallback'], j_l_String)));
     CardSelectableActions.f_logger__org_patternfly_component_card_CardSelectableActions_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Name is undefined for multi-select card %o. You must provide a common name for all selectable cards using Card.name(String). Fallback to generated name \'%s\', which will cause selection issues!', [/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)), checkboxName]);
    }
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_checkbox__org_patternfly_component_card_CardSelectableActions = Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(selectId_1, checkboxName).m_standalone__boolean__org_patternfly_component_form_Checkbox(false).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((/** Event */ e_1, /** Checkbox */ c, /** ?boolean */ selected_2) =>{
     let c_1 = /**@type {Checkbox}*/ ($Casts.$to(c, Checkbox));
     let selected_3 = /**@type {?boolean}*/ ($Casts.$to(selected_2, Boolean));
     card.m_internalSelect__boolean__boolean__void_$pp_org_patternfly_component_card(Boolean.m_booleanValue__java_lang_Boolean__boolean(selected_3), true);
    })));
    this.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, cardId_1);
    if ((/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes))) {
     this.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Checkbox(true);
    }
   }
  }
 }
 /** @nodts @return {CardSelectableActions} */
 m_that__org_patternfly_component_card_CardSelectableActions() {
  return this;
 }
 /** @nodts */
 m_disabled__boolean__void_$pp_org_patternfly_component_card(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_checkbox__org_patternfly_component_card_CardSelectableActions, null)) {
   this.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Checkbox(disabled);
  }
  if (!$Equality.$same(this.f_radio__org_patternfly_component_card_CardSelectableActions, null)) {
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Radio(disabled);
  }
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_card(/** boolean */ selected) {
  if (!$Equality.$same(this.f_checkbox__org_patternfly_component_card_CardSelectableActions, null)) {
   this.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().checked = selected;
  }
  if (!$Equality.$same(this.f_radio__org_patternfly_component_card_CardSelectableActions, null)) {
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().checked = selected;
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardSelectableActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardSelectableActions();
 }
 /** @nodts */
 static $clinit() {
  CardSelectableActions.$clinit = () =>{};
  CardSelectableActions.$loadModules();
  CardSubComponent.$clinit();
  Attachable.$clinit();
  CardSelectableActions.f_logger__org_patternfly_component_card_CardSelectableActions_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(CardSelectableActions).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardSelectableActions;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Card = goog.module.get('org.patternfly.component.card.Card$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  Radio = goog.module.get('org.patternfly.component.form.Radio$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
CardSelectableActions.f_logger__org_patternfly_component_card_CardSelectableActions_;
/**@const {string} @nodts*/
CardSelectableActions.f_SUB_COMPONENT_ID__org_patternfly_component_card_CardSelectableActions = 'csa';
/**@const {string} @nodts*/
CardSelectableActions.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardSelectableActions = 'CardSelectableActions';
Attachable.$markImplementor(CardSelectableActions);
$Util.$setClassMetadata(CardSelectableActions, 'org.patternfly.component.card.CardSelectableActions');

exports = CardSelectableActions;

//# sourceMappingURL=CardSelectableActions.js.map
