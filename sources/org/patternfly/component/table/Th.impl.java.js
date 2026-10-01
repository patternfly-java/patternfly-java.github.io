goog.module('org.patternfly.component.table.Th$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const Cell = goog.require('org.patternfly.component.table.Cell$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Table = goog.forwardDeclare('org.patternfly.component.table.Table$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let TooltipToggle = goog.forwardDeclare('org.patternfly.component.tooltip.TooltipToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Cell<Th>}
 * @implements {Attachable}
 */
class Th extends Cell {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TooltipToggle} @nodts*/
  this.f_tooltipToggle__org_patternfly_component_table_Th_;
 }
 /** @nodts @return {Th} */
 static m_th__org_patternfly_component_table_Th() {
  Th.$clinit();
  return Th.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Th.f_SUB_COMPONENT_ID__org_patternfly_component_table_Th], j_l_String))));
 }
 /** @nodts @return {Th} */
 static m_th__java_lang_String__org_patternfly_component_table_Th(/** ?string */ identifier) {
  Th.$clinit();
  return Th.$create__java_lang_String(identifier);
 }
 /** @nodts @return {Th} */
 static m_checkboxTh__org_patternfly_component_table_Th() {
  Th.$clinit();
  return Th.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Th.f_SUB_COMPONENT_ID__org_patternfly_component_table_Th, 'checkbox'], j_l_String)))).m_addCheckbox__org_patternfly_component_table_Th_$p_org_patternfly_component_table_Th();
 }
 /** @nodts @return {!Th} */
 static $create__java_lang_String(/** ?string */ identifier) {
  Th.$clinit();
  let $instance = new Th();
  $instance.$ctor__org_patternfly_component_table_Th__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_Th__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_table_Cell__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLTableCellElement__void(Th.f_SUB_COMPONENT_ID__org_patternfly_component_table_Th, Th.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Th, identifier, /**@type {HTMLTableCellElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_th__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_th__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLTableCellElement */ th) =>{
   let th_1 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(th, $Overlay));
   th_1.scope = 'col';
  })), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_columnheader__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_tooltipToggle__org_patternfly_component_table_Th_ = TooltipToggle.$create__elemental2_dom_HTMLElement(/**@type {HTMLTableCellElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_tooltipToggle__org_patternfly_component_table_Th_.m_eval__java_util_function_Consumer__java_util_function_Consumer__void(Consumer.$adapt((/** Tooltip */ tt) =>{
   let tt_1 = /**@type {Tooltip}*/ ($Casts.$to(tt, Tooltip));
   (/**@type {HTMLTableCellElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).tabIndex = 0;
  }), Consumer.$adapt((/** Tooltip */ tt_2) =>{
   let tt_3 = /**@type {Tooltip}*/ ($Casts.$to(tt_2, Tooltip));
   (/**@type {HTMLTableCellElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).tabIndex = -1;
  }));
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_tooltipToggle__org_patternfly_component_table_Th_.m_stop__void();
 }
 /** @nodts @return {Th} */
 m_screenReader__java_lang_String__org_patternfly_component_table_Th(/** ?string */ text) {
  return /**@type {Th}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder))), Th));
 }
 /** @nodts @return {Th} */
 m_that__org_patternfly_component_table_Th() {
  return this;
 }
 /** @nodts @return {Th} */
 m_addCheckbox__org_patternfly_component_table_Th_$p_org_patternfly_component_table_Th() {
  let id = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Th.f_SUB_COMPONENT_ID__org_patternfly_component_table_Th, 'checkbox'], j_l_String)));
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_check__org_patternfly_style_Classes], j_l_String)))], j_l_String)));
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Row selector');
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(id, id).m_standalone__org_patternfly_component_form_Checkbox().m_applyTo__java_util_function_Consumer__org_patternfly_component_form_Checkbox(Consumer.$adapt((/** HTMLInputElementBuilder<HTMLInputElement> */ input) =>{
   let input_1 = /**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(input, HTMLInputElementBuilder));
   input_1.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Select all rows');
   input_1.m_data__java_lang_String__org_jboss_elemento_TypedBuilder(Th.f_CHECKBOX_DATA_MARKER__org_patternfly_component_table_Th);
  })).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((/** Event */ e, /** Checkbox */ c, /** ?boolean */ value) =>{
   let c_1 = /**@type {Checkbox}*/ ($Casts.$to(c, Checkbox));
   let value_1 = /**@type {?boolean}*/ ($Casts.$to(value, Boolean));
   let table = /**@type {Table}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Table));
   if (Boolean.m_booleanValue__java_lang_Boolean__boolean(value_1)) {
    table.m_selectAll__void();
   } else {
    table.m_selectNone__void();
   }
  })));
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Th} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_table_Th();
 }
 /** @nodts */
 static $clinit() {
  Th.$clinit = () =>{};
  Th.$loadModules();
  Cell.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Th;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  Table = goog.module.get('org.patternfly.component.table.Table$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  TooltipToggle = goog.module.get('org.patternfly.component.tooltip.TooltipToggle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Th.f_SUB_COMPONENT_ID__org_patternfly_component_table_Th = 'th';
/**@const {string} @nodts*/
Th.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Th = 'Th';
/**@const {string} @nodts*/
Th.f_CHECKBOX_DATA_MARKER__org_patternfly_component_table_Th = 'tableCheckbox';
Attachable.$markImplementor(Th);
$Util.$setClassMetadata(Th, 'org.patternfly.component.table.Th');

exports = Th;

//# sourceMappingURL=Th.js.map
