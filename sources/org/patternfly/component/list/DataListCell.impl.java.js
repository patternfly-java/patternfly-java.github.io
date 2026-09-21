goog.module('org.patternfly.component.list.DataListCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const DataListSubComponent = goog.require('org.patternfly.component.list.DataListSubComponent$impl');
const NoFill = goog.require('org.patternfly.style.Modifiers.NoFill$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Wrap = goog.forwardDeclare('org.patternfly.component.table.Wrap$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DataListSubComponent<HTMLElement, DataListCell>}
 * @implements {ComponentIcon<HTMLElement, DataListCell>}
 * @implements {ElementTextMethods<HTMLElement, DataListCell>}
 * @implements {NoFill<HTMLElement, DataListCell>}
 */
class DataListCell extends DataListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Element} @nodts*/
  this.f_icon__org_patternfly_component_list_DataListCell_;
 }
 /** @nodts @return {DataListCell} */
 static m_dataListCell__org_patternfly_component_list_DataListCell() {
  DataListCell.$clinit();
  return DataListCell.$create__();
 }
 /** @nodts @return {!DataListCell} */
 static $create__() {
  DataListCell.$clinit();
  let $instance = new DataListCell();
  $instance.$ctor__org_patternfly_component_list_DataListCell__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DataListCell__void() {
  this.$ctor__org_patternfly_component_list_DataListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(DataListCell.f_SUB_COMPONENT_ID__org_patternfly_component_list_DataListCell, DataListCell.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DataListCell, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_cell__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts @return {DataListCell} */
 m_alignRight__org_patternfly_component_list_DataListCell() {
  return /**@type {DataListCell}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_alignRight__org_patternfly_style_Classes)], j_l_String))), DataListCell));
 }
 /** @nodts @return {DataListCell} */
 m_icon__elemental2_dom_Element__org_patternfly_component_list_DataListCell(/** Element */ icon) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes)], j_l_String)));
  this.f_icon__org_patternfly_component_list_DataListCell_ = icon;
  return /**@type {DataListCell}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_icon__org_patternfly_component_list_DataListCell_), DataListCell));
 }
 /** @nodts @return {DataListCell} */
 m_removeIcon__org_patternfly_component_list_DataListCell() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_icon__org_patternfly_component_list_DataListCell_);
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes)], j_l_String)));
  return this;
 }
 /** @nodts @return {DataListCell} */
 m_width__int__org_patternfly_component_list_DataListCell(/** number */ width) {
  if (Validation.m_verifyRange__elemental2_dom_Element__java_lang_String__int__int__int__boolean(this.m_element__elemental2_dom_HTMLElement(), 'width', width, 1, 5)) {
   if (width > 1) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_flex__org_patternfly_style_Classes)) + '-' + width], j_l_String)));
   }
  }
  return this;
 }
 /** @nodts @return {DataListCell} */
 m_wrap__org_patternfly_component_table_Wrap__org_patternfly_component_list_DataListCell(/** Wrap */ wrap) {
  if (Validation.m_verifyEnum__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_element__elemental2_dom_HTMLElement(), 'wrap', wrap, Wrap.f_nowrap__org_patternfly_component_table_Wrap, /**@type {!Array<Wrap>}*/ ($Arrays.$stampType([Wrap.f_truncate__org_patternfly_component_table_Wrap, Wrap.f_breakWord__org_patternfly_component_table_Wrap], Wrap)))) {
   TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), wrap, Wrap.m_values__arrayOf_org_patternfly_component_table_Wrap());
  }
  return this;
 }
 /** @nodts @return {DataListCell} */
 m_that__org_patternfly_component_list_DataListCell() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListCell} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DataListCell();
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListCell} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {DataListCell}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), DataListCell));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListCell} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_list_DataListCell(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListCell} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_list_DataListCell();
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListCell} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DataListCell}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DataListCell));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListCell} */
 m_noFill__org_jboss_elemento_TypedBuilder() {
  return /**@type {DataListCell}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), DataListCell));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListCell} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DataListCell}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DataListCell));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListCell} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_list_DataListCell(/** PredefinedIcon */ arg0) {
  return /**@type {DataListCell}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), DataListCell));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListCell} */
 m_text__java_lang_String__org_patternfly_component_list_DataListCell(/** ?string */ arg0) {
  return /**@type {DataListCell}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DataListCell));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListCell} */
 m_noFill__org_patternfly_component_list_DataListCell() {
  return /**@type {DataListCell}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), DataListCell));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListCell} */
 m_noFill__boolean__org_patternfly_component_list_DataListCell(/** boolean */ arg0) {
  return /**@type {DataListCell}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DataListCell));
 }
 /** @nodts */
 static $clinit() {
  DataListCell.$clinit = () =>{};
  DataListCell.$loadModules();
  DataListSubComponent.$clinit();
  ComponentIcon.$clinit();
  ElementTextMethods.$clinit();
  NoFill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataListCell;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Wrap = goog.module.get('org.patternfly.component.table.Wrap$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DataListCell.f_SUB_COMPONENT_ID__org_patternfly_component_list_DataListCell = 'dlcl';
/**@const {string} @nodts*/
DataListCell.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DataListCell = 'DataListCell';
ComponentIcon.$markImplementor(DataListCell);
ElementTextMethods.$markImplementor(DataListCell);
NoFill.$markImplementor(DataListCell);
$Util.$setClassMetadata(DataListCell, 'org.patternfly.component.list.DataListCell');

exports = DataListCell;

//# sourceMappingURL=DataListCell.js.map
