goog.module('org.patternfly.component.table.TableText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TableSubComponent = goog.require('org.patternfly.component.table.TableSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Wrap = goog.forwardDeclare('org.patternfly.component.table.Wrap$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TableSubComponent<HTMLElement, TableText>}
 */
class TableText extends TableSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {TableText} */
 static m_tableText__org_patternfly_component_table_TableText() {
  TableText.$clinit();
  return TableText.$create__();
 }
 /** @nodts @return {!TableText} */
 static $create__() {
  TableText.$clinit();
  let $instance = new TableText();
  $instance.$ctor__org_patternfly_component_table_TableText__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_TableText__void() {
  this.$ctor__org_patternfly_component_table_TableSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(TableText.f_SUB_COMPONENT_ID__org_patternfly_component_table_TableText, TableText.f_SUB_COMPONENT_NAME__org_patternfly_component_table_TableText, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {TableText} */
 m_wrap__org_patternfly_component_table_Wrap__org_patternfly_component_table_TableText(/** Wrap */ wrap) {
  return /**@type {TableText}*/ ($Casts.$to(TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_table_TableText(), this.m_element__elemental2_dom_HTMLElement(), wrap, Wrap.m_values__arrayOf_org_patternfly_component_table_Wrap()), TableText));
 }
 /** @nodts @return {TableText} */
 m_that__org_patternfly_component_table_TableText() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {TableText} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_table_TableText();
 }
 /** @nodts */
 static $clinit() {
  TableText.$clinit = () =>{};
  TableText.$loadModules();
  TableSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TableText;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Wrap = goog.module.get('org.patternfly.component.table.Wrap$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
TableText.f_SUB_COMPONENT_ID__org_patternfly_component_table_TableText = 'tt';
/**@const {string} @nodts*/
TableText.f_SUB_COMPONENT_NAME__org_patternfly_component_table_TableText = 'TableText';
$Util.$setClassMetadata(TableText, 'org.patternfly.component.table.TableText');

exports = TableText;

//# sourceMappingURL=TableText.js.map
