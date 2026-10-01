goog.module('org.patternfly.component.label.Label$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const ComponentIconAndText = goog.require('org.patternfly.component.ComponentIconAndText$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let ButtonType = goog.forwardDeclare('org.jboss.elemento.ButtonType$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let LabelEditCancelHandler = goog.forwardDeclare('org.patternfly.component.label.LabelEditCancelHandler$impl');
let LabelEditCompleteHandler = goog.forwardDeclare('org.patternfly.component.label.LabelEditCompleteHandler$impl');
let LabelGroup = goog.forwardDeclare('org.patternfly.component.label.LabelGroup$impl');
let TooltipToggle = goog.forwardDeclare('org.patternfly.component.tooltip.TooltipToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Color = goog.forwardDeclare('org.patternfly.style.Color$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {BaseComponent<HTMLElement, Label>}
 * @implements {Attachable}
 * @implements {Closeable<HTMLElement, Label>}
 * @implements {Compact<HTMLElement, Label>}
 * @implements {ComponentContext<HTMLElement, Label>}
 * @implements {ComponentIcon<HTMLElement, Label>}
 * @implements {ComponentIconAndText<HTMLElement, Label>}
 * @implements {Disabled<HTMLElement, Label>}
 * @implements {ElementTextDelegate<HTMLElement, Label>}
 * @implements {HasIdentifier<HTMLElement, Label>}
 * @implements {HasValue<?string>}
 */
class Label extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_label_Label;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_label_Label_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_label_Label_;
  /**@type {TooltipToggle} @nodts*/
  this.f_tooltipToggle__org_patternfly_component_label_Label_;
  /**@type {List<CloseHandler<Label>>} @nodts*/
  this.f_closeHandler__org_patternfly_component_label_Label_;
  /**@type {List<ComponentHandler<Label>>} @nodts*/
  this.f_clickHandler__org_patternfly_component_label_Label_;
  /**@type {List<LabelEditCancelHandler>} @nodts*/
  this.f_editCancelHandler__org_patternfly_component_label_Label_;
  /**@type {List<LabelEditCompleteHandler>} @nodts*/
  this.f_editCompleteHandler__org_patternfly_component_label_Label_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_label_Label_;
  /**@type {HTMLElement} @nodts*/
  this.f_actionsElement__org_patternfly_component_label_Label_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_label_Label_;
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_label_Label_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_label_Label_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_cancelEditModeOnDocumentClick__org_patternfly_component_label_Label_;
 }
 /** @nodts @return {Label} */
 static m_label__java_lang_String__org_patternfly_component_label_Label(/** ?string */ text) {
  Label.$clinit();
  return Label.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder(), Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Label__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), text, Color.f_grey__org_patternfly_style_Color);
 }
 /** @nodts @return {Label} */
 static m_label__java_lang_String__java_lang_String__org_patternfly_component_label_Label(/** ?string */ identifier, /** ?string */ text) {
  Label.$clinit();
  return Label.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder(), identifier, text, Color.f_grey__org_patternfly_style_Color);
 }
 /** @nodts @return {Label} */
 static m_label__java_lang_String__org_patternfly_style_Color__org_patternfly_component_label_Label(/** ?string */ text, /** Color */ color) {
  Label.$clinit();
  return Label.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder(), Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Label__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), text, color);
 }
 /** @nodts @return {Label} */
 static m_label__java_lang_String__java_lang_String__org_patternfly_style_Color__org_patternfly_component_label_Label(/** ?string */ identifier, /** ?string */ text, /** Color */ color) {
  Label.$clinit();
  return Label.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder(), identifier, text, color);
 }
 /** @nodts @template E @return {Label} */
 static m_label__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color__org_patternfly_component_label_Label(/** HTMLContainerBuilder<E> */ builder, /** ?string */ identifier, /** ?string */ text, /** Color */ color) {
  Label.$clinit();
  return Label.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color(builder, identifier, text, color);
 }
 /** @nodts @template E @return {!Label} */
 static $create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color(/** HTMLContainerBuilder<E> */ builder, /** ?string */ identifier, /** ?string */ text, /** Color */ color) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_patternfly_component_label_Label__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color__void(builder, identifier, text, color);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_label_Label__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_lang_String__org_patternfly_style_Color__void(/** HTMLContainerBuilder<E> */ builder, /** ?string */ identifier, /** ?string */ text, /** Color */ color) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Label__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), color.f_modifier__org_patternfly_style_Color], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()));
  this.f_identifier__org_patternfly_component_label_Label_ = identifier;
  this.f_data__org_patternfly_component_label_Label_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_closeHandler__org_patternfly_component_label_Label_ = (/**@type {!ArrayList<CloseHandler<Label>>}*/ (ArrayList.$create__()));
  this.f_clickHandler__org_patternfly_component_label_Label_ = (/**@type {!ArrayList<ComponentHandler<Label>>}*/ (ArrayList.$create__()));
  this.f_editCancelHandler__org_patternfly_component_label_Label_ = (/**@type {!ArrayList<LabelEditCancelHandler>}*/ (ArrayList.$create__()));
  this.f_editCompleteHandler__org_patternfly_component_label_Label_ = (/**@type {!ArrayList<LabelEditCompleteHandler>}*/ (ArrayList.$create__()));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_contentElement__org_patternfly_component_label_Label_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_label_Label = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_tooltipToggle__org_patternfly_component_label_Label_ = TooltipToggle.$create__elemental2_dom_HTMLElement(this.f_textElement__org_patternfly_component_label_Label);
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_label_Label;
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_eval__void();
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_stop__void();
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if ($Equality.$same(o, null) || !$Equality.$same(this.m_getClass__java_lang_Class(), $Objects.m_getClass__java_lang_Object__java_lang_Class(o))) {
   return false;
  }
  let label = /**@type {Label}*/ ($Casts.$to(o, Label));
  return Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_identifier__org_patternfly_component_label_Label_, label.f_identifier__org_patternfly_component_label_Label_);
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hash__arrayOf_java_lang_Object__int([this.f_identifier__org_patternfly_component_label_Label_]);
 }
 /** @nodts @return {Label} */
 m_disabled__boolean__org_patternfly_component_label_Label(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_label_Label_, null)) {
   this.f_closeButton__org_patternfly_component_label_Label_.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
  }
  return /**@type {Label}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), Label));
 }
 /** @nodts @return {Label} */
 m_filled__org_patternfly_component_label_Label() {
  return this.m_filled__boolean__org_patternfly_component_label_Label(true);
 }
 /** @nodts @return {Label} */
 m_filled__boolean__org_patternfly_component_label_Label(/** boolean */ filled) {
  return /**@type {Label}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_label_Label(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_filled__org_patternfly_style_Classes, filled), Label));
 }
 /** @nodts @return {Label} */
 m_add__org_patternfly_component_label_Label() {
  return this.m_add__boolean__org_patternfly_component_label_Label(true);
 }
 /** @nodts @return {Label} */
 m_add__boolean__org_patternfly_component_label_Label(/** boolean */ add) {
  return /**@type {Label}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_label_Label(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_add__org_patternfly_style_Classes, add), Label));
 }
 /** @nodts @return {Label} */
 m_outline__org_patternfly_component_label_Label() {
  return this.m_outline__boolean__org_patternfly_component_label_Label(true);
 }
 /** @nodts @return {Label} */
 m_outline__boolean__org_patternfly_component_label_Label(/** boolean */ outline) {
  return /**@type {Label}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_label_Label(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_outline__org_patternfly_style_Classes, outline), Label));
 }
 /** @nodts @return {Label} */
 m_closable__org_patternfly_component_label_Label() {
  return this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(null);
 }
 /** @nodts @return {Label} */
 m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(/** CloseHandler<Label> */ closeHandler) {
  this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(closeHandler);
  Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(this.f_actionsElement__org_patternfly_component_label_Label_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_label_Label_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon()), Button))).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_noPadding__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_textElement__org_patternfly_component_label_Label.textContent)), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
  }), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), this.f_contentElement__org_patternfly_component_label_Label_);
  return this;
 }
 /** @nodts @return {Label} */
 m_clickable__org_patternfly_component_label_Label() {
  return this.m_clickable__org_patternfly_handler_ComponentHandler__org_patternfly_component_label_Label(null);
 }
 /** @nodts @return {Label} */
 m_clickable__org_patternfly_handler_ComponentHandler__org_patternfly_component_label_Label(/** ComponentHandler<Label> */ clickHandler) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clickable__org_patternfly_style_Classes)], j_l_String)));
  this.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_label_Label(clickHandler);
  this.m_replaceContent__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_label_Label(/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   if (!$Equality.$same(this.f_clickHandler__org_patternfly_component_label_Label_, null)) {
    this.f_clickHandler__org_patternfly_component_label_Label_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ComponentHandler<Label> */ ch) =>{
     let ch_1 = /**@type {ComponentHandler<Label>}*/ ($Casts.$to(ch, /**@type {Function}*/ (ComponentHandler)));
     ch_1.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
    }));
   }
  }), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Label} */
 m_editable__org_patternfly_component_label_Label() {
  return this.m_editable__org_patternfly_component_label_LabelEditCancelHandler__org_patternfly_component_label_LabelEditCompleteHandler__org_patternfly_component_label_Label(null, null);
 }
 /** @nodts @return {Label} */
 m_editable__org_patternfly_component_label_LabelEditCancelHandler__org_patternfly_component_label_LabelEditCompleteHandler__org_patternfly_component_label_Label(/** LabelEditCancelHandler */ cancelHandler, /** LabelEditCompleteHandler */ completeHandler) {
  this.m_onEditCancel__org_patternfly_component_label_LabelEditCancelHandler__org_patternfly_component_label_Label(cancelHandler);
  this.m_onEditComplete__org_patternfly_component_label_LabelEditCompleteHandler__org_patternfly_component_label_Label(completeHandler);
  this.m_replaceContent__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_label_Label(/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Editable label with text ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_textElement__org_patternfly_component_label_Label.textContent)), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_enterEdit__void_$p_org_patternfly_component_label_Label();
  }), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ e_2) =>{
   let e_3 = /**@type {KeyboardEvent}*/ ($Casts.$to(e_2, KeyboardEvent_$Overlay));
   if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_3)) {
    this.m_enterEdit__void_$p_org_patternfly_component_label_Label();
   }
  }), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  return /**@type {Label}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_editable__org_patternfly_style_Classes)], j_l_String))), Label));
 }
 /** @nodts @return {Label} */
 m_icon__elemental2_dom_Element__org_patternfly_component_label_Label(/** Element */ icon) {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_label_Label_, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_label_Label_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), this.f_textElement__org_patternfly_component_label_Label);
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_label_Label_);
  this.f_iconContainer__org_patternfly_component_label_Label_.appendChild(icon);
  return this;
 }
 /** @nodts @return {Label} */
 m_removeIcon__org_patternfly_component_label_Label() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_label_Label_);
  return this;
 }
 /** @nodts @return {Label} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_label_Label(/** Element */ icon, /** ?string */ text, /** IconPosition */ iconPosition) {
  this.m_icon__elemental2_dom_Element__org_patternfly_component_label_Label(icon);
  return this.m_text__java_lang_String__org_patternfly_component_label_Label(text);
 }
 /** @nodts @return {Label} */
 m_href__java_lang_String__org_patternfly_component_label_Label(/** ?string */ href) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clickable__org_patternfly_style_Classes)], j_l_String)));
  this.m_replaceContent__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_label_Label(/**@type {HTMLAnchorElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(href).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLAnchorElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Label} */
 m_status__org_patternfly_component_Severity__org_patternfly_component_label_Label(/** Severity */ severity) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([severity.f_status__org_patternfly_component_Severity.m_modifier__java_lang_String()], j_l_String)));
  this.m_removeIcon__org_patternfly_component_label_Label();
  this.m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(severity.m_icon__org_patternfly_icon_PredefinedIcon());
  return this;
 }
 /** @nodts @return {Label} */
 m_text__java_lang_String__org_patternfly_component_label_Label(/** ?string */ text) {
  Elements.m_textNode__elemental2_dom_Element__java_lang_String__void(this.f_textElement__org_patternfly_component_label_Label, text);
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_eval__void();
  return this;
 }
 /** @nodts @return {Label} */
 m_textMaxWidth__java_lang_String__org_patternfly_component_label_Label(/** ?string */ maxWidth) {
  Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_text__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_MaxWidth__org_patternfly_style_Variables], j_l_String))).m_applyTo__elemental2_dom_HTMLElement__org_patternfly_style_VariableAssignments_HTMLElement(this.f_textElement__org_patternfly_component_label_Label).m_set__java_lang_String__void(maxWidth);
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_eval__void();
  return this;
 }
 /** @nodts @template T @return {Label} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_label_Label(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_label_Label_.put(key, value);
  return this;
 }
 /** @nodts @return {Label} */
 m_that__org_patternfly_component_label_Label() {
  return this;
 }
 /** @nodts @return {Label} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_label_Label(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_label_Label_, null)) {
   this.f_closeButton__org_patternfly_component_label_Label_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Label} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(/** CloseHandler<Label> */ closeHandler) {
  if (!$Equality.$same(closeHandler, null)) {
   this.f_closeHandler__org_patternfly_component_label_Label_.add(closeHandler);
  }
  return this;
 }
 /** @nodts @return {Label} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_label_Label(/** ComponentHandler<Label> */ clickHandler) {
  if (!$Equality.$same(clickHandler, null)) {
   this.f_clickHandler__org_patternfly_component_label_Label_.add(clickHandler);
  }
  return this;
 }
 /** @nodts @return {Label} */
 m_onEditCancel__org_patternfly_component_label_LabelEditCancelHandler__org_patternfly_component_label_Label(/** LabelEditCancelHandler */ cancelHandler) {
  if (!$Equality.$same(cancelHandler, null)) {
   this.f_editCancelHandler__org_patternfly_component_label_Label_.add(cancelHandler);
  }
  return this;
 }
 /** @nodts @return {Label} */
 m_onEditComplete__org_patternfly_component_label_LabelEditCompleteHandler__org_patternfly_component_label_Label(/** LabelEditCompleteHandler */ completeHandler) {
  if (!$Equality.$same(completeHandler, null)) {
   this.f_editCompleteHandler__org_patternfly_component_label_Label_.add(completeHandler);
  }
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_label_Label_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_label_Label_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_label_Label_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_label_Label_.get(key));
  }
  return null;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_textElement__org_patternfly_component_label_Label.textContent;
 }
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return Elements.m_textNode__elemental2_dom_Element__java_lang_String(this.f_textElement__org_patternfly_component_label_Label);
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_label_Label_, event, fireEvent)) {
   let labelGroup = /**@type {LabelGroup}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_ComponentType__boolean__org_patternfly_component_BaseComponent(ComponentType.f_LabelGroup__org_patternfly_component_ComponentType, true), LabelGroup));
   if (!$Equality.$same(labelGroup, null)) {
    labelGroup.m_close__org_patternfly_component_label_Label__void_$pp_org_patternfly_component_label(this);
   } else {
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this);
   }
   CloseHandler.m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_label_Label_, event, fireEvent);
  }
 }
 /** @nodts */
 m_replaceContent__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_label_Label(/** HTMLElement */ newContent) {
  for (let iterator = Elements.m_iterator__elemental2_dom_HTMLElement__java_util_Iterator(this.f_contentElement__org_patternfly_component_label_Label_); iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), $Overlay));
   newContent.appendChild(element);
  }
  Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_contentElement__org_patternfly_component_label_Label_, [newContent]);
  this.f_contentElement__org_patternfly_component_label_Label_ = newContent;
 }
 /** @nodts */
 m_enterEdit__void_$p_org_patternfly_component_label_Label() {
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_stop__void();
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_contentElement__org_patternfly_component_label_Label_, false);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_actionsElement__org_patternfly_component_label_Label_, false);
  this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label().value = this.f_textElement__org_patternfly_component_label_Label.textContent;
  this.f_cancelEditModeOnDocumentClick__org_patternfly_component_label_Label_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_click__org_jboss_elemento_EventType, true, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   if (!this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label().contains(/**@type {Node}*/ ($Casts.$to(e_1.target, Node_$Overlay)))) {
    this.m_completeEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(e_1, this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label().value);
   }
  });
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_editableActive__org_patternfly_style_Classes));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label(), true);
  this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label().focus();
 }
 /** @nodts */
 m_cancelEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(/** Event */ event, /** ?string */ previousText) {
  this.f_editCancelHandler__org_patternfly_component_label_Label_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** LabelEditCancelHandler */ ech) =>{
   let ech_1 = /**@type {LabelEditCancelHandler}*/ ($Casts.$to(ech, /**@type {Function}*/ (LabelEditCancelHandler)));
   ech_1.m_cancel__elemental2_dom_Event__org_patternfly_component_label_Label__java_lang_String__void(event, this, previousText);
  }));
  this.m_leaveEdit__void_$p_org_patternfly_component_label_Label();
 }
 /** @nodts */
 m_completeEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(/** Event */ event, /** ?string */ newText) {
  Elements.m_textNode__elemental2_dom_Element__java_lang_String__void(this.f_textElement__org_patternfly_component_label_Label, newText);
  this.f_editCompleteHandler__org_patternfly_component_label_Label_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** LabelEditCompleteHandler */ ech) =>{
   let ech_1 = /**@type {LabelEditCompleteHandler}*/ ($Casts.$to(ech, /**@type {Function}*/ (LabelEditCompleteHandler)));
   ech_1.m_complete__elemental2_dom_Event__org_patternfly_component_label_Label__java_lang_String__void(event, this, newText);
  }));
  this.m_leaveEdit__void_$p_org_patternfly_component_label_Label();
 }
 /** @nodts */
 m_leaveEdit__void_$p_org_patternfly_component_label_Label() {
  if (!$Equality.$same(this.f_cancelEditModeOnDocumentClick__org_patternfly_component_label_Label_, null)) {
   this.f_cancelEditModeOnDocumentClick__org_patternfly_component_label_Label_.m_removeHandler__void();
  }
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label(), false);
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_editableActive__org_patternfly_style_Classes));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_contentElement__org_patternfly_component_label_Label_, true);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_actionsElement__org_patternfly_component_label_Label_, true);
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_eval__void();
 }
 /** @nodts @return {HTMLInputElement} */
 m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label() {
  if ($Equality.$same(this.f_inputElement__org_patternfly_component_label_Label_, null)) {
   this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_inputElement__org_patternfly_component_label_Label_ = (/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to((/**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_HTMLInputElementBuilder(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLInputElementBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keydown__org_jboss_elemento_EventType, (/** KeyboardEvent */ e) =>{
    let e_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(e, KeyboardEvent_$Overlay));
    if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_1)) {
     this.m_completeEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(e_1, (/**@type {HTMLInputElement}*/ ($Casts.$to(e_1.target, HTMLInputElement_$Overlay))).value);
    } else if (Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_1)) {
     this.m_cancelEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(e_1, this.f_textElement__org_patternfly_component_label_Label.textContent);
    }
   }), HTMLInputElementBuilder))).m_element__elemental2_dom_HTMLInputElement());
  }
  return this.f_inputElement__org_patternfly_component_label_Label_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_label_Label();
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Label> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(arg0);
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
 /** @final @override @nodts @return {Label} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {Label}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Label}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Label));
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {Label} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_label_Label(arg0, arg1);
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
 /** @final @override @nodts @return {Label} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {Label}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_label_Label(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_label_Label();
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {Label}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {Label}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** Element */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return this.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_label_Label(arg0, arg1, arg2);
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Label}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_label_Label(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_label_Label(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_compact__org_patternfly_component_label_Label() {
  return /**@type {Label}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_compact__boolean__org_patternfly_component_label_Label(/** boolean */ arg0) {
  return /**@type {Label}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_label_Label(/** PredefinedIcon */ arg0) {
  return /**@type {Label}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_label_Label(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {Label}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_label_Label(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {Label}*/ ($Casts.$to(ComponentIconAndText.m_iconAndText__$default__org_patternfly_component_ComponentIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_disabled__org_patternfly_component_label_Label() {
  return /**@type {Label}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Label));
 }
 /** @nodts */
 static $clinit() {
  Label.$clinit = () =>{};
  Label.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Closeable.$clinit();
  Compact.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  ComponentIconAndText.$clinit();
  Disabled.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Label;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ButtonType = goog.module.get('org.jboss.elemento.ButtonType$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  LabelEditCancelHandler = goog.module.get('org.patternfly.component.label.LabelEditCancelHandler$impl');
  LabelEditCompleteHandler = goog.module.get('org.patternfly.component.label.LabelEditCompleteHandler$impl');
  LabelGroup = goog.module.get('org.patternfly.component.label.LabelGroup$impl');
  TooltipToggle = goog.module.get('org.patternfly.component.tooltip.TooltipToggle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Color = goog.module.get('org.patternfly.style.Color$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Attachable.$markImplementor(Label);
Closeable.$markImplementor(Label);
Compact.$markImplementor(Label);
ComponentContext.$markImplementor(Label);
ComponentIcon.$markImplementor(Label);
ComponentIconAndText.$markImplementor(Label);
Disabled.$markImplementor(Label);
ElementTextDelegate.$markImplementor(Label);
HasIdentifier.$markImplementor(Label);
HasValue.$markImplementor(Label);
$Util.$setClassMetadata(Label, 'org.patternfly.component.label.Label');

exports = Label;

//# sourceMappingURL=Label.js.map
