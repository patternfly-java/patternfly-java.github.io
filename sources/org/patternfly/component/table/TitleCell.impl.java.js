goog.module('org.patternfly.component.table.TitleCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const Cell = goog.require('org.patternfly.component.table.Cell$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Tr = goog.forwardDeclare('org.patternfly.component.table.Tr$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Cell<TitleCell>}
 * @implements {ComponentIcon<HTMLTableCellElement, TitleCell>}
 * @implements {ElementContainerDelegate<HTMLTableCellElement, TitleCell>}
 * @implements {ElementTextDelegate<HTMLTableCellElement, TitleCell>}
 */
class TitleCell extends Cell {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Tr} @nodts*/
  this.f_tr__org_patternfly_component_table_TitleCell;
  /**@type {HTMLElement} @nodts*/
  this.f_mainContainer__org_patternfly_component_table_TitleCell_;
  /**@type {HTMLElement} @nodts*/
  this.f_textContainer__org_patternfly_component_table_TitleCell_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_table_TitleCell_;
  /**@type {HTMLElement} @nodts*/
  this.f_toggleContainer__org_patternfly_component_table_TitleCell_;
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_table_TitleCell_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_table_TitleCell_;
  /**@type {Element} @nodts*/
  this.f_icon__org_patternfly_component_table_TitleCell_;
  /**@type {Element} @nodts*/
  this.f_expandedIcon__org_patternfly_component_table_TitleCell_;
 }
 /** @nodts @return {TitleCell} */
 static m_titleCell__org_patternfly_component_table_TitleCell() {
  TitleCell.$clinit();
  return TitleCell.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([TitleCell.f_SUB_COMPONENT_ID__org_patternfly_component_table_TitleCell], j_l_String))));
 }
 /** @nodts @return {TitleCell} */
 static m_titleCell__java_lang_String__org_patternfly_component_table_TitleCell(/** ?string */ identifier) {
  TitleCell.$clinit();
  return TitleCell.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!TitleCell} */
 static $create__java_lang_String(/** ?string */ identifier) {
  TitleCell.$clinit();
  let $instance = new TitleCell();
  $instance.$ctor__org_patternfly_component_table_TitleCell__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_TitleCell__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_table_Cell__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLTableCellElement__void(TitleCell.f_SUB_COMPONENT_ID__org_patternfly_component_table_TitleCell, TitleCell.f_SUB_COMPONENT_NAME__org_patternfly_component_table_TitleCell, identifier, /**@type {HTMLTableCellElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_th__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_treeView__org_patternfly_style_Classes, Classes.f_titleCell__org_patternfly_style_Classes], j_l_String))), Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_th__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLTableCellElement_$Overlay)));
  (/**@type {HTMLTableCellElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableCellElement_$Overlay))).appendChild(this.f_mainContainer__org_patternfly_component_table_TitleCell_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_treeView__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textContainer__org_patternfly_component_table_TitleCell_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_treeView__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_table_TitleCell_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_treeView__org_patternfly_style_Classes, Classes.f_details__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Show row details'), Button))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_treeView__org_patternfly_style_Classes, Classes.f_details__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhUi.m_ellipsisHorizontal__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), Button))), HTMLContainerBuilder))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_table_TitleCell_;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_textElement__org_patternfly_component_table_TitleCell_;
 }
 /** @nodts @return {TitleCell} */
 m_icon__elemental2_dom_Element__org_patternfly_component_table_TitleCell(/** Element */ icon) {
  this.f_icon__org_patternfly_component_table_TitleCell_ = icon;
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_table_TitleCell().appendChild(icon);
  return this;
 }
 /** @nodts @return {TitleCell} */
 m_removeIcon__org_patternfly_component_table_TitleCell() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_table_TitleCell_);
  this.f_iconContainer__org_patternfly_component_table_TitleCell_ = null;
  this.f_icon__org_patternfly_component_table_TitleCell_ = null;
  this.f_expandedIcon__org_patternfly_component_table_TitleCell_ = null;
  return this;
 }
 /** @nodts @return {TitleCell} */
 m_expandedIcon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_table_TitleCell(/** PredefinedIcon */ icon) {
  return this.m_expandedIcon__elemental2_dom_Element__org_patternfly_component_table_TitleCell(icon.m_element__org_jboss_elemento_svg_SVGElement());
 }
 /** @nodts @return {TitleCell} */
 m_expandedIcon__elemental2_dom_Element__org_patternfly_component_table_TitleCell(/** Element */ icon) {
  this.f_expandedIcon__org_patternfly_component_table_TitleCell_ = icon;
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this.f_tr__org_patternfly_component_table_TitleCell)) {
   if (this.f_tr__org_patternfly_component_table_TitleCell.m_expanded__boolean()) {
    Element_$Overlay.m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_table_TitleCell(), [icon]);
   }
  }
  return this;
 }
 /** @nodts @return {TitleCell} */
 m_that__org_patternfly_component_table_TitleCell() {
  return this;
 }
 /** @nodts */
 m_collapse__void_$pp_org_patternfly_component_table() {
  if (!$Equality.$same(this.f_toggleButton__org_patternfly_component_table_TitleCell_, null)) {
   this.f_toggleButton__org_patternfly_component_table_TitleCell_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false);
   this.f_toggleButton__org_patternfly_component_table_TitleCell_.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes)], j_l_String)));
   if (!$Equality.$same(this.f_iconContainer__org_patternfly_component_table_TitleCell_, null) && !$Equality.$same(this.f_expandedIcon__org_patternfly_component_table_TitleCell_, null)) {
    Element_$Overlay.m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_iconContainer__org_patternfly_component_table_TitleCell_, [this.f_icon__org_patternfly_component_table_TitleCell_]);
   }
  }
 }
 /** @nodts */
 m_expand__void_$pp_org_patternfly_component_table() {
  if (!$Equality.$same(this.f_toggleButton__org_patternfly_component_table_TitleCell_, null)) {
   this.f_toggleButton__org_patternfly_component_table_TitleCell_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, true);
   this.f_toggleButton__org_patternfly_component_table_TitleCell_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes)], j_l_String)));
   if (!$Equality.$same(this.f_iconContainer__org_patternfly_component_table_TitleCell_, null) && !$Equality.$same(this.f_expandedIcon__org_patternfly_component_table_TitleCell_, null)) {
    Element_$Overlay.m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_iconContainer__org_patternfly_component_table_TitleCell_, [this.f_expandedIcon__org_patternfly_component_table_TitleCell_]);
   }
  }
 }
 /** @nodts */
 m_addToggle__void_$pp_org_patternfly_component_table() {
  if ($Equality.$same(this.f_toggleContainer__org_patternfly_component_table_TitleCell_, null) || !this.f_mainContainer__org_patternfly_component_table_TitleCell_.contains(this.f_toggleContainer__org_patternfly_component_table_TitleCell_)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_mainContainer__org_patternfly_component_table_TitleCell_, this.f_toggleContainer__org_patternfly_component_table_TitleCell_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_table_TitleCell_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ c) =>{
    let c_1 = /**@type {Button}*/ ($Casts.$to(c, Button));
    if (!$Equality.$same(this.f_tr__org_patternfly_component_table_TitleCell, null)) {
     this.f_tr__org_patternfly_component_table_TitleCell.m_load__elemental2_promise_Promise();
     this.f_tr__org_patternfly_component_table_TitleCell.m_toggle__void();
    }
   })).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(rhUi.m_caretDown__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
 }
 /** @nodts */
 m_removeToggle__void_$pp_org_patternfly_component_table() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_toggleContainer__org_patternfly_component_table_TitleCell_);
  this.f_toggleButton__org_patternfly_component_table_TitleCell_ = null;
  this.f_toggleContainer__org_patternfly_component_table_TitleCell_ = null;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_table_TitleCell() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_table_TitleCell_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_textContainer__org_patternfly_component_table_TitleCell_, this.f_iconContainer__org_patternfly_component_table_TitleCell_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_treeView__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_table_TitleCell_;
 }
 //Bridge method.
 /** @final @override @nodts @return {TitleCell} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_table_TitleCell();
 }
 //Bridge method.
 /** @final @override @nodts @return {TitleCell} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Bridge method.
 /** @final @override @nodts @return {TitleCell} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_table_TitleCell(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TitleCell} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_table_TitleCell();
 }
 //Bridge method.
 /** @final @override @nodts @return {TitleCell} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Bridge method.
 /** @final @override @nodts @return {TitleCell} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Bridge method.
 /** @final @override @nodts @return {TitleCell} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Bridge method.
 /** @final @override @nodts @return {TitleCell} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {TitleCell} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_table_TitleCell(/** PredefinedIcon */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Default method forwarding stub.
 /** @nodts @return {TitleCell} */
 m_add__java_lang_String__org_patternfly_component_table_TitleCell(/** ?string */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Default method forwarding stub.
 /** @nodts @return {TitleCell} */
 m_add__elemental2_dom_Node__org_patternfly_component_table_TitleCell(/** Node */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Default method forwarding stub.
 /** @nodts @return {TitleCell} */
 m_add__java_util_function_Supplier__org_patternfly_component_table_TitleCell(/** Supplier<Node> */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 //Default method forwarding stub.
 /** @nodts @return {TitleCell} */
 m_text__java_lang_String__org_patternfly_component_table_TitleCell(/** ?string */ arg0) {
  return /**@type {TitleCell}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), TitleCell));
 }
 /** @nodts */
 static $clinit() {
  TitleCell.$clinit = () =>{};
  TitleCell.$loadModules();
  Cell.$clinit();
  ComponentIcon.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleCell;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
TitleCell.f_SUB_COMPONENT_ID__org_patternfly_component_table_TitleCell = 'ttc';
/**@const {string} @nodts*/
TitleCell.f_SUB_COMPONENT_NAME__org_patternfly_component_table_TitleCell = 'TitleCell';
ComponentIcon.$markImplementor(TitleCell);
ElementContainerDelegate.$markImplementor(TitleCell);
ElementTextDelegate.$markImplementor(TitleCell);
$Util.$setClassMetadata(TitleCell, 'org.patternfly.component.table.TitleCell');

exports = TitleCell;

//# sourceMappingURL=TitleCell.js.map
