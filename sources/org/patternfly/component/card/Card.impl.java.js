goog.module('org.patternfly.component.card.Card$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const FullHeight = goog.require('org.patternfly.style.Modifiers.FullHeight$impl');
const Glass = goog.require('org.patternfly.style.Modifiers.Glass$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');
const Secondary = goog.require('org.patternfly.style.Modifiers.Secondary$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let CardBody = goog.forwardDeclare('org.patternfly.component.card.CardBody$impl');
let CardExpandableContent = goog.forwardDeclare('org.patternfly.component.card.CardExpandableContent$impl');
let CardFooter = goog.forwardDeclare('org.patternfly.component.card.CardFooter$impl');
let CardHeader = goog.forwardDeclare('org.patternfly.component.card.CardHeader$impl');
let CardTitle = goog.forwardDeclare('org.patternfly.component.card.CardTitle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Card>}
 * @implements {Compact<HTMLDivElement, Card>}
 * @implements {Disabled<HTMLDivElement, Card>}
 * @implements {Expandable<HTMLDivElement, Card>}
 * @implements {FullHeight<HTMLDivElement, Card>}
 * @implements {Glass<HTMLDivElement, Card>}
 * @implements {Plain<HTMLDivElement, Card>}
 * @implements {Secondary<HTMLDivElement, Card>}
 */
class Card extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_component_card_Card;
  /**@type {SelectionMode} @nodts*/
  this.f_selectionMode__org_patternfly_component_card_Card;
  /**@type {boolean} @nodts*/
  this.f_expandable__org_patternfly_component_card_Card = false;
  /**@type {boolean} @nodts*/
  this.f_toggleRightAligned__org_patternfly_component_card_Card = false;
  /**@type {?string} @nodts*/
  this.f_to__org_patternfly_component_card_Card_;
  /**@type {boolean} @nodts*/
  this.f_external__org_patternfly_component_card_Card_ = false;
  /**@type {CardHeader} @nodts*/
  this.f_header__org_patternfly_component_card_Card_;
  /**@type {CardExpandableContent} @nodts*/
  this.f_expandableContent__org_patternfly_component_card_Card_;
  /**@type {SelectHandler<Card>} @nodts*/
  this.f_selectHandler__org_patternfly_component_card_Card_;
  /**@type {ComponentHandler<Card>} @nodts*/
  this.f_clickHandler__org_patternfly_component_card_Card_;
  /**@type {ToggleHandler<Card>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_card_Card_;
 }
 /** @nodts @return {Card} */
 static m_card__org_patternfly_component_card_Card() {
  Card.$clinit();
  return Card.$create__();
 }
 /** @nodts @return {!Card} */
 static $create__() {
  Card.$clinit();
  let $instance = new Card();
  $instance.$ctor__org_patternfly_component_card_Card__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_Card__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Card__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_storeComponent__void();
 }
 /** @nodts @return {Card} */
 m_addHeader__org_patternfly_component_card_CardHeader__org_patternfly_component_card_Card(/** CardHeader */ header) {
  return this.m_add__org_patternfly_component_card_CardHeader__org_patternfly_component_card_Card(header);
 }
 /** @nodts @return {Card} */
 m_add__org_patternfly_component_card_CardHeader__org_patternfly_component_card_Card(/** CardHeader */ header) {
  this.f_header__org_patternfly_component_card_Card_ = header;
  return /**@type {Card}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(header.m_element__elemental2_dom_HTMLElement(), $Overlay))), Card));
 }
 /** @nodts @return {Card} */
 m_addTitle__org_patternfly_component_card_CardTitle__org_patternfly_component_card_Card(/** CardTitle */ title) {
  return /**@type {Card}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(title), Card));
 }
 /** @nodts @return {Card} */
 m_addBody__org_patternfly_component_card_CardBody__org_patternfly_component_card_Card(/** CardBody */ body) {
  return /**@type {Card}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), Card));
 }
 /** @nodts @return {Card} */
 m_addFooter__org_patternfly_component_card_CardFooter__org_patternfly_component_card_Card(/** CardFooter */ footer) {
  return /**@type {Card}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(footer), Card));
 }
 /** @nodts @return {Card} */
 m_addExpandableContent__org_patternfly_component_card_CardExpandableContent__org_patternfly_component_card_Card(/** CardExpandableContent */ expandableContent) {
  return this.m_add__org_patternfly_component_card_CardExpandableContent__org_patternfly_component_card_Card(expandableContent);
 }
 /** @nodts @return {Card} */
 m_add__org_patternfly_component_card_CardExpandableContent__org_patternfly_component_card_Card(/** CardExpandableContent */ expandableContent) {
  this.f_expandableContent__org_patternfly_component_card_Card_ = expandableContent;
  return /**@type {Card}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(expandableContent.m_element__elemental2_dom_HTMLElement(), $Overlay))), Card));
 }
 /** @nodts @return {Card} */
 m_flat__org_patternfly_component_card_Card() {
  return this.m_flat__boolean__org_patternfly_component_card_Card(true);
 }
 /** @nodts @return {Card} */
 m_flat__boolean__org_patternfly_component_card_Card(/** boolean */ flat) {
  return /**@type {Card}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), Classes.f_flat__org_patternfly_style_Classes, flat), Card));
 }
 /** @nodts @return {Card} */
 m_rounded__org_patternfly_component_card_Card() {
  return this.m_rounded__boolean__org_patternfly_component_card_Card(true);
 }
 /** @nodts @return {Card} */
 m_rounded__boolean__org_patternfly_component_card_Card(/** boolean */ rounded) {
  return /**@type {Card}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), Classes.f_rounded__org_patternfly_style_Classes, rounded), Card));
 }
 /** @nodts @return {Card} */
 m_large__org_patternfly_component_card_Card() {
  return this.m_large__boolean__org_patternfly_component_card_Card(true);
 }
 /** @nodts @return {Card} */
 m_large__boolean__org_patternfly_component_card_Card(/** boolean */ large) {
  if (large) {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.add(Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size));
  } else {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.remove(Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size));
  }
  return this;
 }
 /** @nodts @return {Card} */
 m_selectable__org_patternfly_component_card_Card() {
  return this.m_selectable__org_patternfly_component_SelectionMode__org_patternfly_handler_SelectHandler__org_patternfly_component_card_Card(SelectionMode.f_multi__org_patternfly_component_SelectionMode, null);
 }
 /** @nodts @return {Card} */
 m_selectable__org_patternfly_handler_SelectHandler__org_patternfly_component_card_Card(/** SelectHandler<Card> */ selectHandler) {
  return this.m_selectable__org_patternfly_component_SelectionMode__org_patternfly_handler_SelectHandler__org_patternfly_component_card_Card(SelectionMode.f_multi__org_patternfly_component_SelectionMode, selectHandler);
 }
 /** @nodts @return {Card} */
 m_selectable__org_patternfly_component_SelectionMode__org_patternfly_component_card_Card(/** SelectionMode */ selectionMode) {
  return this.m_selectable__org_patternfly_component_SelectionMode__org_patternfly_handler_SelectHandler__org_patternfly_component_card_Card(selectionMode, null);
 }
 /** @nodts @return {Card} */
 m_selectable__org_patternfly_component_SelectionMode__org_patternfly_handler_SelectHandler__org_patternfly_component_card_Card(/** SelectionMode */ selectionMode, /** SelectHandler<Card> */ selectHandler) {
  if (!Card.f_SUPPORTED_SELECTION_MODES__org_patternfly_component_card_Card_.contains(selectionMode)) {
   Card.f_logger__org_patternfly_component_card_Card_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Selection mode \'%s\' is not supported for card %o. Supported modes are %s', [selectionMode.name(), /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {?string}*/ ($Casts.$to((/**@type {Stream<?string>}*/ (Card.f_SUPPORTED_SELECTION_MODES__org_patternfly_component_card_Card_.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** SelectionMode */ arg0) =>{
    let arg0_1 = /**@type {SelectionMode}*/ ($Casts.$to(arg0, SelectionMode));
    return arg0_1.name();
   }))))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(', ')), j_l_String))]);
   return this;
  }
  this.f_selectionMode__org_patternfly_component_card_Card = selectionMode;
  this.f_selectHandler__org_patternfly_component_card_Card_ = selectHandler;
  return /**@type {Card}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selectable__org_patternfly_style_Classes)], j_l_String))), Card));
 }
 /** @nodts @return {Card} */
 m_clickable__org_patternfly_component_card_Card() {
  return this.m_clickable__org_patternfly_handler_ComponentHandler__org_patternfly_component_card_Card(/**@type {ComponentHandler<Card>}*/ (null));
 }
 /** @nodts @return {Card} */
 m_clickable__org_patternfly_handler_ComponentHandler__org_patternfly_component_card_Card(/** ComponentHandler<Card> */ onClick) {
  this.f_clickHandler__org_patternfly_component_card_Card_ = onClick;
  return /**@type {Card}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clickable__org_patternfly_style_Classes)], j_l_String))), Card));
 }
 /** @nodts @return {Card} */
 m_clickable__java_lang_String__org_patternfly_component_card_Card(/** ?string */ to) {
  return this.m_clickable__java_lang_String__boolean__org_patternfly_component_card_Card(to, false);
 }
 /** @nodts @return {Card} */
 m_clickable__java_lang_String__boolean__org_patternfly_component_card_Card(/** ?string */ to, /** boolean */ external) {
  this.f_to__org_patternfly_component_card_Card_ = to;
  this.f_external__org_patternfly_component_card_Card_ = external;
  return /**@type {Card}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clickable__org_patternfly_style_Classes)], j_l_String))), Card));
 }
 /** @nodts @return {Card} */
 m_disabled__boolean__org_patternfly_component_card_Card(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_header__org_patternfly_component_card_Card_, null)) {
   this.f_header__org_patternfly_component_card_Card_.m_disabled__boolean__void_$pp_org_patternfly_component_card(disabled);
  }
  return /**@type {Card}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), Card));
 }
 /** @nodts @return {Card} */
 m_expandable__org_patternfly_component_card_Card() {
  return this.m_expandable__org_patternfly_handler_ToggleHandler__boolean__org_patternfly_component_card_Card(null, false);
 }
 /** @nodts @return {Card} */
 m_expandable__boolean__org_patternfly_component_card_Card(/** boolean */ toggleRightAligned) {
  return this.m_expandable__org_patternfly_handler_ToggleHandler__boolean__org_patternfly_component_card_Card(null, toggleRightAligned);
 }
 /** @nodts @return {Card} */
 m_expandable__org_patternfly_handler_ToggleHandler__org_patternfly_component_card_Card(/** ToggleHandler<Card> */ toggleHandler) {
  return this.m_expandable__org_patternfly_handler_ToggleHandler__boolean__org_patternfly_component_card_Card(toggleHandler, false);
 }
 /** @nodts @return {Card} */
 m_expandable__org_patternfly_handler_ToggleHandler__boolean__org_patternfly_component_card_Card(/** ToggleHandler<Card> */ toggleHandler, /** boolean */ toggleRightAligned) {
  this.f_expandable__org_patternfly_component_card_Card = true;
  this.f_toggleHandler__org_patternfly_component_card_Card_ = toggleHandler;
  this.f_toggleRightAligned__org_patternfly_component_card_Card = toggleRightAligned;
  return this;
 }
 /** @nodts @return {Card} */
 m_name__java_lang_String__org_patternfly_component_card_Card(/** ?string */ name) {
  this.f_name__org_patternfly_component_card_Card = name;
  return this;
 }
 /** @nodts @return {Card} */
 m_that__org_patternfly_component_card_Card() {
  return this;
 }
 /** @nodts @return {Card} */
 m_ariaLabel__java_lang_String__org_patternfly_component_card_Card(/** ?string */ label) {
  return /**@type {Card}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Card));
 }
 /** @nodts */
 m_select__void() {
  this.m_select__boolean__boolean__void(true, true);
 }
 /** @nodts */
 m_select__boolean__void(/** boolean */ selected) {
  this.m_select__boolean__boolean__void(selected, true);
 }
 /** @nodts */
 m_select__boolean__boolean__void(/** boolean */ selected, /** boolean */ fireEvent) {
  if ($Equality.$same(this.f_selectionMode__org_patternfly_component_card_Card, null)) {
   Card.f_logger__org_patternfly_component_card_Card_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Card %o is not selectable. Please add a call to Card.selectable(SelectionMode), before calling Card.select().', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))]);
   return;
  }
  if (!$Equality.$same(this.f_header__org_patternfly_component_card_Card_, null) && !$Equality.$same(this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader, null) && !$Equality.$same(this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader.f_selectableActions__org_patternfly_component_card_CardActions, null)) {
   this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader.f_selectableActions__org_patternfly_component_card_CardActions.m_markSelected__boolean__void_$pp_org_patternfly_component_card(selected);
  }
  this.m_internalSelect__boolean__boolean__void_$pp_org_patternfly_component_card(selected, fireEvent);
 }
 /** @nodts @return {boolean} */
 m_selected__boolean() {
  if (this.m_isClickable__boolean_$pp_org_patternfly_component_card() && this.m_isSelectable__boolean_$pp_org_patternfly_component_card()) {
   return (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
  } else if (!$Equality.$same(this.f_header__org_patternfly_component_card_Card_, null) && !$Equality.$same(this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader, null) && !$Equality.$same(this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader.f_selectableActions__org_patternfly_component_card_CardActions, null)) {
   if (!$Equality.$same(this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader.f_selectableActions__org_patternfly_component_card_CardActions.f_checkbox__org_patternfly_component_card_CardSelectableActions, null)) {
    return this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader.f_selectableActions__org_patternfly_component_card_CardActions.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().checked;
   } else if (!$Equality.$same(this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader.f_selectableActions__org_patternfly_component_card_CardActions.f_radio__org_patternfly_component_card_CardSelectableActions, null)) {
    return this.f_header__org_patternfly_component_card_Card_.f_actions__org_patternfly_component_card_CardHeader.f_selectableActions__org_patternfly_component_card_CardActions.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__org_jboss_elemento_HTMLInputElementBuilder().m_element__elemental2_dom_HTMLInputElement().checked;
   } else {
    return false;
   }
  } else {
   return false;
  }
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (!this.f_expandable__org_patternfly_component_card_Card || $Equality.$same(this.f_expandableContent__org_patternfly_component_card_Card_, null) || $Equality.$same(this.f_header__org_patternfly_component_card_Card_.f_toggleButton__org_patternfly_component_card_CardHeader, null)) {
   Card.f_logger__org_patternfly_component_card_Card_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Card %o is is not expandable. Please use Card.expandable() to make this an expandable card.', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))]);
   return;
  }
  Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_header__org_patternfly_component_card_Card_.f_toggleButton__org_patternfly_component_card_CardHeader.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_expandableContent__org_patternfly_component_card_Card_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_card_Card_, null)) {
   this.f_toggleHandler__org_patternfly_component_card_Card_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  if (!this.f_expandable__org_patternfly_component_card_Card || $Equality.$same(this.f_expandableContent__org_patternfly_component_card_Card_, null) || $Equality.$same(this.f_header__org_patternfly_component_card_Card_.f_toggleButton__org_patternfly_component_card_CardHeader, null)) {
   Card.f_logger__org_patternfly_component_card_Card_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Card %o is is not expandable. Please use Card.expandable() to make this an expandable card.', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))]);
   return;
  }
  Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_header__org_patternfly_component_card_Card_.f_toggleButton__org_patternfly_component_card_CardHeader.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_expandableContent__org_patternfly_component_card_Card_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_card_Card_, null)) {
   this.f_toggleHandler__org_patternfly_component_card_Card_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
  }
 }
 /** @nodts @return {boolean} */
 m_isSelectable__boolean_$pp_org_patternfly_component_card() {
  return (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selectable__org_patternfly_style_Classes));
 }
 /** @nodts @return {boolean} */
 m_isClickable__boolean_$pp_org_patternfly_component_card() {
  return (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_clickable__org_patternfly_style_Classes));
 }
 /** @nodts */
 m_click__elemental2_dom_Event__void_$pp_org_patternfly_component_card(/** Event */ event) {
  if (!$Equality.$same(this.f_clickHandler__org_patternfly_component_card_Card_, null)) {
   this.f_clickHandler__org_patternfly_component_card_Card_.m_handle__elemental2_dom_Event__java_lang_Object__void(event, this);
  } else if (!$Equality.$same(this.f_to__org_patternfly_component_card_Card_, null)) {
   Window_$Overlay.m_open__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__elemental2_dom_Window(goog.global.window, this.f_to__org_patternfly_component_card_Card_, this.f_external__org_patternfly_component_card_Card_ ? '_blank' : '_self');
  }
 }
 /** @nodts */
 m_internalSelect__boolean__boolean__void_$pp_org_patternfly_component_card(/** boolean */ selected, /** boolean */ fireEvent) {
  if (this.m_isClickable__boolean_$pp_org_patternfly_component_card() && this.m_isSelectable__boolean_$pp_org_patternfly_component_card()) {
   if (selected) {
    (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   } else {
    (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   }
  }
  if (fireEvent && !$Equality.$same(this.f_selectHandler__org_patternfly_component_card_Card_, null)) {
   this.f_selectHandler__org_patternfly_component_card_Card_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, selected);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_Card();
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {Card}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Card}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_card_Card(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
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
 /** @final @override @nodts @return {Card} */
 m_fullHeight__org_jboss_elemento_TypedBuilder() {
  return /**@type {Card}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_fullHeight__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_glass__org_jboss_elemento_TypedBuilder() {
  return /**@type {Card}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_glass__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {Card}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_secondary__org_jboss_elemento_TypedBuilder() {
  return /**@type {Card}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_secondary__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_compact__org_patternfly_component_card_Card() {
  return /**@type {Card}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_compact__boolean__org_patternfly_component_card_Card(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_disabled__org_patternfly_component_card_Card() {
  return /**@type {Card}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_fullHeight__org_patternfly_component_card_Card() {
  return /**@type {Card}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_fullHeight__boolean__org_patternfly_component_card_Card(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_glass__org_patternfly_component_card_Card() {
  return /**@type {Card}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_glass__boolean__org_patternfly_component_card_Card(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(Glass.m_glass__$default__org_patternfly_style_Modifiers_Glass__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_plain__org_patternfly_component_card_Card() {
  return /**@type {Card}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_plain__boolean__org_patternfly_component_card_Card(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_secondary__org_patternfly_component_card_Card() {
  return /**@type {Card}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), Card));
 }
 //Default method forwarding stub.
 /** @nodts @return {Card} */
 m_secondary__boolean__org_patternfly_component_card_Card(/** boolean */ arg0) {
  return /**@type {Card}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Card));
 }
 /** @nodts */
 static $clinit() {
  Card.$clinit = () =>{};
  Card.$loadModules();
  BaseComponent.$clinit();
  Compact.$clinit();
  Disabled.$clinit();
  Expandable.$clinit();
  FullHeight.$clinit();
  Glass.$clinit();
  Plain.$clinit();
  Secondary.$clinit();
  Card.f_logger__org_patternfly_component_card_Card_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Card).m_getName__java_lang_String());
  Card.f_SUPPORTED_SELECTION_MODES__org_patternfly_component_card_Card_ = (/**@type {EnumSet<SelectionMode>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(SelectionMode.f_single__org_patternfly_component_SelectionMode, /**@type {!Array<SelectionMode>}*/ ($Arrays.$stampType([SelectionMode.f_multi__org_patternfly_component_SelectionMode], SelectionMode)))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Card;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Window_$Overlay = goog.module.get('elemental2.dom.Window.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Card.f_logger__org_patternfly_component_card_Card_;
/**@type {Set<SelectionMode>} @nodts*/
Card.f_SUPPORTED_SELECTION_MODES__org_patternfly_component_card_Card_;
Compact.$markImplementor(Card);
Disabled.$markImplementor(Card);
Expandable.$markImplementor(Card);
FullHeight.$markImplementor(Card);
Glass.$markImplementor(Card);
Plain.$markImplementor(Card);
Secondary.$markImplementor(Card);
$Util.$setClassMetadata(Card, 'org.patternfly.component.card.Card');

exports = Card;

//# sourceMappingURL=Card.js.map
