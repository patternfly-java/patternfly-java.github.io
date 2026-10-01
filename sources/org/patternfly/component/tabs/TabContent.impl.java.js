goog.module('org.patternfly.component.tabs.TabContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const TabSubComponent = goog.require('org.patternfly.component.tabs.TabSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let TabContentBody = goog.forwardDeclare('org.patternfly.component.tabs.TabContentBody$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Roles = goog.forwardDeclare('org.patternfly.core.Roles$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TabSubComponent<HTMLElement, TabContent>}
 * @implements {ComponentContext<HTMLElement, TabContent>}
 * @implements {Disabled<HTMLElement, TabContent>}
 * @implements {ElementTextMethods<HTMLElement, TabContent>}
 */
class TabContent extends TabSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_tabs_TabContent_;
 }
 /** @nodts @return {TabContent} */
 static m_tabContent__org_patternfly_component_tabs_TabContent() {
  TabContent.$clinit();
  return TabContent.$create__();
 }
 /** @nodts @return {!TabContent} */
 static $create__() {
  TabContent.$clinit();
  let $instance = new TabContent();
  $instance.$ctor__org_patternfly_component_tabs_TabContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tabs_TabContent__void() {
  this.$ctor__org_patternfly_component_tabs_TabSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(TabContent.f_SUB_COMPONENT_ID__org_patternfly_component_tabs_TabContent, TabContent.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_TabContent, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabContent__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLElement */ s) =>{
   let s_1 = /**@type {HTMLElement}*/ ($Casts.$to(s, $Overlay));
   s_1.tabIndex = 0;
  })), HTMLContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Roles.f_tabpanel__org_patternfly_core_Roles), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.f_data__org_patternfly_component_tabs_TabContent_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
 }
 /** @nodts @return {TabContent} */
 m_addBody__org_patternfly_component_tabs_TabContentBody__org_patternfly_component_tabs_TabContent(/** TabContentBody */ body) {
  return /**@type {TabContent}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), TabContent));
 }
 /** @nodts @template T @return {TabContent} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_tabs_TabContent(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_tabs_TabContent_.put(key, value);
  return this;
 }
 /** @nodts @return {TabContent} */
 m_that__org_patternfly_component_tabs_TabContent() {
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_tabs_TabContent_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_tabs_TabContent_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_tabs_TabContent_.get(key));
  }
  return null;
 }
 //Bridge method.
 /** @final @override @nodts @return {TabContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_TabContent();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {TabContent} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_tabs_TabContent(arg0, arg1);
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
 /** @final @override @nodts @return {TabContent} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TabContent}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TabContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {TabContent} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TabContent}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TabContent));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {TabContent} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {TabContent}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), TabContent));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {TabContent} */
 m_disabled__org_patternfly_component_tabs_TabContent() {
  return /**@type {TabContent}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TabContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TabContent} */
 m_disabled__boolean__org_patternfly_component_tabs_TabContent(/** boolean */ arg0) {
  return /**@type {TabContent}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TabContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {TabContent} */
 m_text__java_lang_String__org_patternfly_component_tabs_TabContent(/** ?string */ arg0) {
  return /**@type {TabContent}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), TabContent));
 }
 /** @nodts */
 static $clinit() {
  TabContent.$clinit = () =>{};
  TabContent.$loadModules();
  TabSubComponent.$clinit();
  ComponentContext.$clinit();
  Disabled.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TabContent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Roles = goog.module.get('org.patternfly.core.Roles$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
TabContent.f_SUB_COMPONENT_ID__org_patternfly_component_tabs_TabContent = 'tc';
/**@const {string} @nodts*/
TabContent.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_TabContent = 'TabContent';
ComponentContext.$markImplementor(TabContent);
Disabled.$markImplementor(TabContent);
ElementTextMethods.$markImplementor(TabContent);
$Util.$setClassMetadata(TabContent, 'org.patternfly.component.tabs.TabContent');

exports = TabContent;

//# sourceMappingURL=TabContent.js.map
