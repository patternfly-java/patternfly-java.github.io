goog.module('org.patternfly.component.table.Td$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cell = goog.require('org.patternfly.component.table.Cell$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLInputElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLInputElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Table = goog.forwardDeclare('org.patternfly.component.table.Table$impl');
let Tr = goog.forwardDeclare('org.patternfly.component.table.Tr$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Cell<Td>}
 */
class Td extends Cell {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Td} */
 static m_td__org_patternfly_component_table_Td() {
  Td.$clinit();
  return Td.$create__java_lang_String__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Td.f_SUB_COMPONENT_ID__org_patternfly_component_table_Td], j_l_String))), null);
 }
 /** @nodts @return {Td} */
 static m_td__java_lang_String__org_patternfly_component_table_Td(/** ?string */ column) {
  Td.$clinit();
  return Td.$create__java_lang_String__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Td.f_SUB_COMPONENT_ID__org_patternfly_component_table_Td], j_l_String))), column);
 }
 /** @nodts @return {Td} */
 static m_td__java_lang_String__java_lang_String__org_patternfly_component_table_Td(/** ?string */ identifier, /** ?string */ column) {
  Td.$clinit();
  return Td.$create__java_lang_String__java_lang_String(identifier, column);
 }
 /** @nodts @return {Td} */
 static m_checkboxTd__org_patternfly_component_table_Td() {
  Td.$clinit();
  return Td.$create__java_lang_String__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Td.f_SUB_COMPONENT_ID__org_patternfly_component_table_Td, 'checkbox'], j_l_String))), null).m_addCheckbox__org_patternfly_component_table_Td_$p_org_patternfly_component_table_Td();
 }
 /** @nodts @return {!Td} */
 static $create__java_lang_String__java_lang_String(/** ?string */ identifier, /** ?string */ column) {
  Td.$clinit();
  let $instance = new Td();
  $instance.$ctor__org_patternfly_component_table_Td__java_lang_String__java_lang_String__void(identifier, column);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_Td__java_lang_String__java_lang_String__void(/** ?string */ identifier, /** ?string */ column) {
  this.$ctor__org_patternfly_component_table_Cell__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLTableCellElement__void(Td.f_SUB_COMPONENT_ID__org_patternfly_component_table_Td, Td.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Td, identifier, /**@type {HTMLTableCellElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_td__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_td__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_cell__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(column, null)) {
   this.m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_label__org_patternfly_core_Dataset, column);
  }
 }
 /** @nodts @return {Td} */
 m_action__org_patternfly_component_table_Td() {
  return /**@type {Td}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_action__org_patternfly_style_Classes)], j_l_String))), Td));
 }
 /** @nodts @return {Td} */
 m_actions__org_patternfly_component_table_Td() {
  return /**@type {Td}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), Td));
 }
 /** @nodts @return {Td} */
 m_that__org_patternfly_component_table_Td() {
  return this;
 }
 /** @nodts @return {Td} */
 m_addCheckbox__org_patternfly_component_table_Td_$p_org_patternfly_component_table_Td() {
  let id = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Table__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Td.f_SUB_COMPONENT_ID__org_patternfly_component_table_Td, 'checkbox'], j_l_String)));
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_check__org_patternfly_style_Classes], j_l_String)))], j_l_String)));
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Check row');
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(id, id).m_standalone__org_patternfly_component_form_Checkbox().m_applyTo__java_util_function_Consumer__org_patternfly_component_form_Checkbox(Consumer.$adapt((/** HTMLInputElementBuilder<HTMLInputElement> */ input) =>{
   let input_1 = /**@type {HTMLInputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(input, HTMLInputElementBuilder));
   input_1.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Select row');
   input_1.m_data__java_lang_String__org_jboss_elemento_TypedBuilder(Td.f_CHECKBOX_DATA_MARKER__org_patternfly_component_table_Td);
  })).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((/** Event */ e, /** Checkbox */ c, /** ?boolean */ value) =>{
   let c_1 = /**@type {Checkbox}*/ ($Casts.$to(c, Checkbox));
   let value_1 = /**@type {?boolean}*/ ($Casts.$to(value, Boolean));
   let table = /**@type {Table}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Table));
   let tr = /**@type {Tr}*/ ($Casts.$to(this.m_lookupSubComponent__java_lang_String__org_patternfly_component_SubComponent(Tr.f_SUB_COMPONENT_ID__org_patternfly_component_table_Tr), Tr));
   table.m_select__org_patternfly_component_table_Tr__boolean__void(tr, Boolean.m_booleanValue__java_lang_Boolean__boolean(value_1));
  })));
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Td} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_table_Td();
 }
 /** @nodts */
 static $clinit() {
  Td.$clinit = () =>{};
  Td.$loadModules();
  Cell.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Td;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLInputElementBuilder = goog.module.get('org.jboss.elemento.HTMLInputElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  Table = goog.module.get('org.patternfly.component.table.Table$impl');
  Tr = goog.module.get('org.patternfly.component.table.Tr$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Td.f_SUB_COMPONENT_ID__org_patternfly_component_table_Td = 'td';
/**@const {string} @nodts*/
Td.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Td = 'Td';
/**@const {string} @nodts*/
Td.f_CHECKBOX_DATA_MARKER__org_patternfly_component_table_Td = 'rowCheckbox';
$Util.$setClassMetadata(Td, 'org.patternfly.component.table.Td');

exports = Td;

//# sourceMappingURL=Td.js.map
