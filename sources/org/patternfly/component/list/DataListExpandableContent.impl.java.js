goog.module('org.patternfly.component.list.DataListExpandableContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const DataListSubComponent = goog.require('org.patternfly.component.list.DataListSubComponent$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DataListSubComponent<HTMLElement, DataListExpandableContent>}
 * @implements {ElementContainerDelegate<HTMLElement, DataListExpandableContent>}
 * @implements {ElementTextDelegate<HTMLElement, DataListExpandableContent>}
 * @implements {NoPadding<HTMLElement, DataListExpandableContent>}
 */
class DataListExpandableContent extends DataListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_body__org_patternfly_component_list_DataListExpandableContent_;
 }
 /** @nodts @return {DataListExpandableContent} */
 static m_dataListExpandableContent__org_patternfly_component_list_DataListExpandableContent() {
  DataListExpandableContent.$clinit();
  return DataListExpandableContent.$create__();
 }
 /** @nodts @return {!DataListExpandableContent} */
 static $create__() {
  DataListExpandableContent.$clinit();
  let $instance = new DataListExpandableContent();
  $instance.$ctor__org_patternfly_component_list_DataListExpandableContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DataListExpandableContent__void() {
  this.$ctor__org_patternfly_component_list_DataListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(DataListExpandableContent.f_SUB_COMPONENT_ID__org_patternfly_component_list_DataListExpandableContent, DataListExpandableContent.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DataListExpandableContent, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_expandable__org_patternfly_style_Classes, Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_body__org_patternfly_component_list_DataListExpandableContent_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_expandable__org_patternfly_style_Classes, Classes.f_content__org_patternfly_style_Classes, Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_body__org_patternfly_component_list_DataListExpandableContent_;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_body__org_patternfly_component_list_DataListExpandableContent_;
 }
 /** @nodts @return {DataListExpandableContent} */
 m_noPadding__boolean__org_patternfly_component_list_DataListExpandableContent(/** boolean */ noPadding) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DataListExpandableContent(), this.f_body__org_patternfly_component_list_DataListExpandableContent_, Classes.f_noPadding__org_patternfly_style_Classes, noPadding), DataListExpandableContent));
 }
 /** @nodts @return {DataListExpandableContent} */
 m_that__org_patternfly_component_list_DataListExpandableContent() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListExpandableContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DataListExpandableContent();
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListExpandableContent} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DataListExpandableContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListExpandableContent} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DataListExpandableContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListExpandableContent} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), DataListExpandableContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListExpandableContent} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DataListExpandableContent));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListExpandableContent} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DataListExpandableContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListExpandableContent} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_noPadding__boolean__org_patternfly_component_list_DataListExpandableContent(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListExpandableContent} */
 m_add__java_lang_String__org_patternfly_component_list_DataListExpandableContent(/** ?string */ arg0) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DataListExpandableContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListExpandableContent} */
 m_add__elemental2_dom_Node__org_patternfly_component_list_DataListExpandableContent(/** Node */ arg0) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DataListExpandableContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListExpandableContent} */
 m_add__java_util_function_Supplier__org_patternfly_component_list_DataListExpandableContent(/** Supplier<Node> */ arg0) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), DataListExpandableContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListExpandableContent} */
 m_text__java_lang_String__org_patternfly_component_list_DataListExpandableContent(/** ?string */ arg0) {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DataListExpandableContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListExpandableContent} */
 m_noPadding__org_patternfly_component_list_DataListExpandableContent() {
  return /**@type {DataListExpandableContent}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DataListExpandableContent));
 }
 /** @nodts */
 static $clinit() {
  DataListExpandableContent.$clinit = () =>{};
  DataListExpandableContent.$loadModules();
  DataListSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
  NoPadding.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataListExpandableContent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DataListExpandableContent.f_SUB_COMPONENT_ID__org_patternfly_component_list_DataListExpandableContent = 'dlc';
/**@const {string} @nodts*/
DataListExpandableContent.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DataListExpandableContent = 'DataListExpandableContent';
ElementContainerDelegate.$markImplementor(DataListExpandableContent);
ElementTextDelegate.$markImplementor(DataListExpandableContent);
NoPadding.$markImplementor(DataListExpandableContent);
$Util.$setClassMetadata(DataListExpandableContent, 'org.patternfly.component.list.DataListExpandableContent');

exports = DataListExpandableContent;

//# sourceMappingURL=DataListExpandableContent.js.map
