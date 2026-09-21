goog.module('org.patternfly.component.template.TemplateItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const TemplateSubComponent = goog.require('org.patternfly.component.template.TemplateSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TemplateSubComponent<HTMLElement, TemplateItem>}
 * @implements {ComponentContext<HTMLElement, TemplateItem>}
 * @implements {HasIdentifier<HTMLElement, TemplateItem>}
 */
class TemplateItem extends TemplateSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_foo__org_patternfly_component_template_TemplateItem;
  /**@type {?string} @nodts*/
  this.f_bar__org_patternfly_component_template_TemplateItem;
  /**@type {number} @nodts*/
  this.f_baz__org_patternfly_component_template_TemplateItem = 0;
  /**@type {number} @nodts*/
  this.f_qux__org_patternfly_component_template_TemplateItem = 0;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_template_TemplateItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_template_TemplateItem_;
  /**@type {boolean} @nodts*/
  this.f_someThing__org_patternfly_component_template_TemplateItem_ = false;
 }
 /** @nodts @return {TemplateItem} */
 static m_templateItem__java_lang_String__org_patternfly_component_template_TemplateItem(/** ?string */ identifier) {
  TemplateItem.$clinit();
  return TemplateItem.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!TemplateItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  TemplateItem.$clinit();
  let $instance = new TemplateItem();
  $instance.$ctor__org_patternfly_component_template_TemplateItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_template_TemplateItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_template_TemplateSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(TemplateItem.f_SUB_COMPONENT_ID__org_patternfly_component_template_TemplateItem, TemplateItem.f_SUB_COMPONENT_NAME__org_patternfly_component_template_TemplateItem, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f__template__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_foo__org_patternfly_component_template_TemplateItem = 'bar';
  this.f_baz__org_patternfly_component_template_TemplateItem = 42;
  this.f_identifier__org_patternfly_component_template_TemplateItem_ = identifier;
  this.f_data__org_patternfly_component_template_TemplateItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
 }
 /** @nodts @template T @return {TemplateItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_template_TemplateItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_template_TemplateItem_.put(key, value);
  return this;
 }
 /** @nodts @return {TemplateItem} */
 m_that__org_patternfly_component_template_TemplateItem() {
  return this;
 }
 /** @nodts @return {TemplateItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_template_TemplateItem(/** ComponentHandler<TemplateItem> */ actionHandler) {
  this.m_element__elemental2_dom_HTMLElement().addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   actionHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_template_TemplateItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_template_TemplateItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_template_TemplateItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_template_TemplateItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_template(/** boolean */ selected) {
  this.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), selected);
 }
 //Bridge method.
 /** @final @override @nodts @return {TemplateItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_template_TemplateItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {TemplateItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_template_TemplateItem(arg0, arg1);
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
 /** @nodts */
 static $clinit() {
  TemplateItem.$clinit = () =>{};
  TemplateItem.$loadModules();
  TemplateSubComponent.$clinit();
  ComponentContext.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TemplateItem;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
TemplateItem.f_SUB_COMPONENT_ID__org_patternfly_component_template_TemplateItem = 'ti';
/**@const {string} @nodts*/
TemplateItem.f_SUB_COMPONENT_NAME__org_patternfly_component_template_TemplateItem = 'TemplateItem';
ComponentContext.$markImplementor(TemplateItem);
HasIdentifier.$markImplementor(TemplateItem);
$Util.$setClassMetadata(TemplateItem, 'org.patternfly.component.template.TemplateItem');

exports = TemplateItem;

//# sourceMappingURL=TemplateItem.js.map
