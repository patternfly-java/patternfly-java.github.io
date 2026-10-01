goog.module('org.patternfly.component.table.Cell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const TableSubComponent = goog.require('org.patternfly.component.table.TableSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const Center = goog.require('org.patternfly.style.Modifiers.Center$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let TableText = goog.forwardDeclare('org.patternfly.component.table.TableText$impl');
let Wrap = goog.forwardDeclare('org.patternfly.component.table.Wrap$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let Width = goog.forwardDeclare('org.patternfly.style.Width$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template B
 * @extends {TableSubComponent<HTMLTableCellElement, B>}
 * @implements {ComponentContext<HTMLTableCellElement, B>}
 * @implements {Center<HTMLTableCellElement, B>}
 * @implements {ElementTextMethods<HTMLTableCellElement, B>}
 * @implements {HasIdentifier<HTMLTableCellElement, B>}
 */
class Cell extends TableSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_table_Cell_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_table_Cell_;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_Cell__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLTableCellElement__void(/** ?string */ subComponentId, /** ?string */ subComponentName, /** ?string */ identifier, /** HTMLTableCellElement */ element) {
  this.$ctor__org_patternfly_component_table_TableSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(subComponentId, subComponentName, element);
  this.f_identifier__org_patternfly_component_table_Cell_ = identifier;
  this.f_data__org_patternfly_component_table_Cell_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, Dataset.f_identifier__org_patternfly_core_Dataset, identifier);
 }
 /** @nodts @return {B} */
 m_addText__org_patternfly_component_table_TableText__org_jboss_elemento_TypedBuilder(/** TableText */ text) {
  return this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(text);
 }
 /** @nodts @return {B} */
 m_colSpan__int__org_jboss_elemento_TypedBuilder(/** number */ columns) {
  (/**@type {HTMLTableCellElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).colSpan = columns;
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_width__org_patternfly_style_Width__org_jboss_elemento_TypedBuilder(/** Width */ width) {
  return TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this.m_that__org_jboss_elemento_TypedBuilder(), /**@type {HTMLTableCellElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), width, Width.m_values__arrayOf_org_patternfly_style_Width());
 }
 /** @nodts @return {B} */
 m_wrap__org_patternfly_component_table_Wrap__org_jboss_elemento_TypedBuilder(/** Wrap */ wrap) {
  return TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this.m_that__org_jboss_elemento_TypedBuilder(), /**@type {HTMLTableCellElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), wrap, Wrap.m_values__arrayOf_org_patternfly_component_table_Wrap());
 }
 /** @override @nodts @template T @return {B} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_table_Cell_.put(key, value);
  return this.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_table_Cell_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_table_Cell_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_table_Cell_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_table_Cell_.get(key));
  }
  return null;
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
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_center__org_jboss_elemento_TypedBuilder() {
  return Center.m_center__$default__org_patternfly_style_Modifiers_Center__org_jboss_elemento_TypedBuilder(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_center__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return Center.m_center__$default__org_patternfly_style_Modifiers_Center__boolean__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 /** @nodts */
 static $clinit() {
  Cell.$clinit = () =>{};
  Cell.$loadModules();
  TableSubComponent.$clinit();
  ComponentContext.$clinit();
  Center.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Cell;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Wrap = goog.module.get('org.patternfly.component.table.Wrap$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  Width = goog.module.get('org.patternfly.style.Width$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentContext.$markImplementor(Cell);
Center.$markImplementor(Cell);
ElementTextMethods.$markImplementor(Cell);
HasIdentifier.$markImplementor(Cell);
$Util.$setClassMetadata(Cell, 'org.patternfly.component.table.Cell');

exports = Cell;

//# sourceMappingURL=Cell.js.map
