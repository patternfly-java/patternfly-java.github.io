goog.module('org.patternfly.component.table.Thead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TableSubComponent = goog.require('org.patternfly.component.table.TableSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Tr = goog.forwardDeclare('org.patternfly.component.table.Tr$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TableSubComponent<HTMLTableSectionElement, Thead>}
 */
class Thead extends TableSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Thead} */
 static m_thead__org_patternfly_component_table_Thead() {
  Thead.$clinit();
  return Thead.$create__();
 }
 /** @nodts @return {!Thead} */
 static $create__() {
  Thead.$clinit();
  let $instance = new Thead();
  $instance.$ctor__org_patternfly_component_table_Thead__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_Thead__void() {
  this.$ctor__org_patternfly_component_table_TableSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(Thead.f_SUB_COMPONENT_ID__org_patternfly_component_table_Thead, Thead.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Thead, /**@type {HTMLTableSectionElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to(Elements.m_thead__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_thead__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Thead} */
 m_addRow__org_patternfly_component_table_Tr__org_patternfly_component_table_Thead(/** Tr */ row) {
  return /**@type {Thead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(row), Thead));
 }
 /** @nodts @return {Thead} */
 m_that__org_patternfly_component_table_Thead() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Thead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_table_Thead();
 }
 /** @nodts */
 static $clinit() {
  Thead.$clinit = () =>{};
  Thead.$loadModules();
  TableSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Thead;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Thead.f_SUB_COMPONENT_ID__org_patternfly_component_table_Thead = 'thd';
/**@const {string} @nodts*/
Thead.f_SUB_COMPONENT_NAME__org_patternfly_component_table_Thead = 'Thead';
$Util.$setClassMetadata(Thead, 'org.patternfly.component.table.Thead');

exports = Thead;

//# sourceMappingURL=Thead.js.map
