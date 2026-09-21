goog.module('org.patternfly.component.list.DataListAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const DataListSubComponent = goog.require('org.patternfly.component.list.DataListSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Visibility = goog.forwardDeclare('org.patternfly.style.Visibility$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DataListSubComponent<HTMLElement, DataListAction>}
 * @implements {ElementContainerDelegate<HTMLElement, DataListAction>}
 */
class DataListAction extends DataListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_plainButtonAction__org_patternfly_component_list_DataListAction_ = false;
  /**@type {HTMLElement} @nodts*/
  this.f_delegate__org_patternfly_component_list_DataListAction_;
 }
 /** @nodts @return {DataListAction} */
 static m_dataListAction__org_patternfly_component_list_DataListAction() {
  DataListAction.$clinit();
  return DataListAction.$create__boolean(false);
 }
 /** @nodts @return {DataListAction} */
 static m_dataListAction__boolean__org_patternfly_component_list_DataListAction(/** boolean */ plainButtonAction) {
  DataListAction.$clinit();
  return DataListAction.$create__boolean(plainButtonAction);
 }
 /** @nodts @return {!DataListAction} */
 static $create__boolean(/** boolean */ plainButtonAction) {
  DataListAction.$clinit();
  let $instance = new DataListAction();
  $instance.$ctor__org_patternfly_component_list_DataListAction__boolean__void(plainButtonAction);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DataListAction__boolean__void(/** boolean */ plainButtonAction) {
  this.$ctor__org_patternfly_component_list_DataListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(DataListAction.f_SUB_COMPONENT_ID__org_patternfly_component_list_DataListAction, DataListAction.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DataListAction, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_plainButtonAction__org_patternfly_component_list_DataListAction_ = plainButtonAction;
  if (plainButtonAction) {
   this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_delegate__org_patternfly_component_list_DataListAction_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  } else {
   this.f_delegate__org_patternfly_component_list_DataListAction_ = null;
  }
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  if (this.f_plainButtonAction__org_patternfly_component_list_DataListAction_) {
   return this.f_delegate__org_patternfly_component_list_DataListAction_;
  }
  return this.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts @return {DataListAction} */
 m_visibility__org_patternfly_style_Breakpoints__org_patternfly_component_list_DataListAction(/** Breakpoints<Visibility> */ visibility) {
  return /**@type {DataListAction}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([visibility.m_modifiers__java_lang_String()], j_l_String))), DataListAction));
 }
 /** @nodts @return {DataListAction} */
 m_that__org_patternfly_component_list_DataListAction() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DataListAction();
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListAction} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DataListAction}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DataListAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListAction} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {DataListAction}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DataListAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListAction} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {DataListAction}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), DataListAction));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListAction} */
 m_add__java_lang_String__org_patternfly_component_list_DataListAction(/** ?string */ arg0) {
  return /**@type {DataListAction}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DataListAction));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListAction} */
 m_add__elemental2_dom_Node__org_patternfly_component_list_DataListAction(/** Node */ arg0) {
  return /**@type {DataListAction}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DataListAction));
 }
 //Default method forwarding stub.
 /** @nodts @return {DataListAction} */
 m_add__java_util_function_Supplier__org_patternfly_component_list_DataListAction(/** Supplier<Node> */ arg0) {
  return /**@type {DataListAction}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), DataListAction));
 }
 /** @nodts */
 static $clinit() {
  DataListAction.$clinit = () =>{};
  DataListAction.$loadModules();
  DataListSubComponent.$clinit();
  ElementContainerDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataListAction;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DataListAction.f_SUB_COMPONENT_ID__org_patternfly_component_list_DataListAction = 'dla';
/**@const {string} @nodts*/
DataListAction.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DataListAction = 'DataListAction';
ElementContainerDelegate.$markImplementor(DataListAction);
$Util.$setClassMetadata(DataListAction, 'org.patternfly.component.list.DataListAction');

exports = DataListAction;

//# sourceMappingURL=DataListAction.js.map
