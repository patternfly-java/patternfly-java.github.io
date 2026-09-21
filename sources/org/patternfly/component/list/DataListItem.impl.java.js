goog.module('org.patternfly.component.list.DataListItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const DataListSubComponent = goog.require('org.patternfly.component.list.DataListSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let DataListAction = goog.forwardDeclare('org.patternfly.component.list.DataListAction$impl');
let DataListCell = goog.forwardDeclare('org.patternfly.component.list.DataListCell$impl');
let DataListExpandableContent = goog.forwardDeclare('org.patternfly.component.list.DataListExpandableContent$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DataListSubComponent<HTMLLIElement, DataListItem>}
 * @implements {ComponentContext<HTMLLIElement, DataListItem>}
 * @implements {Expandable<HTMLLIElement, DataListItem>}
 * @implements {HasIdentifier<HTMLLIElement, DataListItem>}
 */
class DataListItem extends DataListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_list_DataListItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_list_DataListItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_rowElement__org_patternfly_component_list_DataListItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_controlElement__org_patternfly_component_list_DataListItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_list_DataListItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_actionElement__org_patternfly_component_list_DataListItem_;
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_list_DataListItem_;
  /**@type {DataListExpandableContent} @nodts*/
  this.f_expandableContent__org_patternfly_component_list_DataListItem_;
  /**@type {ToggleHandler<DataListItem>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_list_DataListItem_;
 }
 /** @nodts @return {DataListItem} */
 static m_dataListItem__java_lang_String__org_patternfly_component_list_DataListItem(/** ?string */ identifier) {
  DataListItem.$clinit();
  return DataListItem.$create__java_lang_String(identifier);
 }
 /** @nodts @return {!DataListItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  DataListItem.$clinit();
  let $instance = new DataListItem();
  $instance.$ctor__org_patternfly_component_list_DataListItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DataListItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_component_list_DataListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(DataListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_DataListItem, DataListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DataListItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, identifier), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_list_DataListItem_ = identifier;
  this.f_data__org_patternfly_component_list_DataListItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_rowElement__org_patternfly_component_list_DataListItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_row__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @nodts @template T @return {DataListItem} */
 m_addCells__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_DataListItem(/** Iterable<T> */ items, /** j_u_function_Function<T, DataListCell> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let dlc = /**@type {DataListCell}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), DataListCell));
    this.m_addCell__org_patternfly_component_list_DataListCell__org_patternfly_component_list_DataListItem(dlc);
   }
  }
  return this;
 }
 /** @nodts @return {DataListItem} */
 m_addCell__org_patternfly_component_list_DataListCell__org_patternfly_component_list_DataListItem(/** DataListCell */ cell) {
  return this.m_add__org_patternfly_component_list_DataListCell__org_patternfly_component_list_DataListItem(cell);
 }
 /** @nodts @return {DataListItem} */
 m_add__org_patternfly_component_list_DataListCell__org_patternfly_component_list_DataListItem(/** DataListCell */ cell) {
  this.m_failSafeContentElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_DataListItem().appendChild(cell.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {DataListItem} */
 m_addAction__org_patternfly_component_list_DataListAction__org_patternfly_component_list_DataListItem(/** DataListAction */ action) {
  return this.m_add__org_patternfly_component_list_DataListAction__org_patternfly_component_list_DataListItem(action);
 }
 /** @nodts @return {DataListItem} */
 m_add__org_patternfly_component_list_DataListAction__org_patternfly_component_list_DataListItem(/** DataListAction */ action) {
  action.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('rowid', this.f_identifier__org_patternfly_component_list_DataListItem_);
  this.f_rowElement__org_patternfly_component_list_DataListItem_.appendChild(action.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {DataListItem} */
 m_addExpandableContent__org_patternfly_component_list_DataListExpandableContent__org_patternfly_component_list_DataListItem(/** DataListExpandableContent */ expandableContent) {
  return this.m_add__org_patternfly_component_list_DataListExpandableContent__org_patternfly_component_list_DataListItem(expandableContent);
 }
 /** @nodts @return {DataListItem} */
 m_add__org_patternfly_component_list_DataListExpandableContent__org_patternfly_component_list_DataListItem(/** DataListExpandableContent */ expandableContent) {
  this.f_expandableContent__org_patternfly_component_list_DataListItem_ = expandableContent;
  this.m_wireExpandable__void_$p_org_patternfly_component_list_DataListItem();
  return /**@type {DataListItem}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(expandableContent.m_element__elemental2_dom_HTMLElement()), DataListItem));
 }
 /** @nodts @return {DataListItem} */
 m_expandable__org_patternfly_component_list_DataListItem() {
  return this.m_expandable__org_patternfly_handler_ToggleHandler__org_patternfly_component_list_DataListItem(null);
 }
 /** @nodts @return {DataListItem} */
 m_expandable__org_patternfly_handler_ToggleHandler__org_patternfly_component_list_DataListItem(/** ToggleHandler<DataListItem> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_list_DataListItem_ = toggleHandler;
  this.m_failSafeControlElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_DataListItem().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_list_DataListItem_ = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_toggle__void();
  }), Button))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretDown__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder))), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_wireExpandable__void_$p_org_patternfly_component_list_DataListItem();
  return this;
 }
 /** @nodts @template T @return {DataListItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_DataListItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_list_DataListItem_.put(key, value);
  return this;
 }
 /** @nodts @return {DataListItem} */
 m_that__org_patternfly_component_list_DataListItem() {
  return this;
 }
 /** @nodts @return {DataListItem} */
 m_ariaToggleLabel__java_lang_String__org_patternfly_component_list_DataListItem(/** ?string */ label) {
  if (!$Equality.$same(this.f_toggleButton__org_patternfly_component_list_DataListItem_, null)) {
   this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_list_DataListItem_;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement(), this.f_expandableContent__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement());
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_list_DataListItem_, null)) {
   this.f_toggleHandler__org_patternfly_component_list_DataListItem_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement(), this.f_expandableContent__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement());
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_list_DataListItem_, null)) {
   this.f_toggleHandler__org_patternfly_component_list_DataListItem_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
  }
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_list_DataListItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_list_DataListItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_list_DataListItem_.get(key));
  }
  return null;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeControlElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_DataListItem() {
  if ($Equality.$same(this.f_controlElement__org_patternfly_component_list_DataListItem_, null)) {
   this.f_rowElement__org_patternfly_component_list_DataListItem_.appendChild(this.f_controlElement__org_patternfly_component_list_DataListItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_control__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  }
  return this.f_controlElement__org_patternfly_component_list_DataListItem_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeContentElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_DataListItem() {
  if ($Equality.$same(this.f_contentElement__org_patternfly_component_list_DataListItem_, null)) {
   this.f_rowElement__org_patternfly_component_list_DataListItem_.appendChild(this.f_contentElement__org_patternfly_component_list_DataListItem_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  }
  return this.f_contentElement__org_patternfly_component_list_DataListItem_;
 }
 /** @nodts */
 m_wireExpandable__void_$p_org_patternfly_component_list_DataListItem() {
  if (!$Equality.$same(this.f_toggleButton__org_patternfly_component_list_DataListItem_, null) && !$Equality.$same(this.f_expandableContent__org_patternfly_component_list_DataListItem_, null)) {
   let toggleId = $Equality.$same(this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement().id, null) || j_l_String.m_isEmpty__java_lang_String__boolean(this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement().id) ? Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_DataList__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([this.f_identifier__org_patternfly_component_list_DataListItem_, 'toggle'], j_l_String))) : this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement().id;
   let expandableContentId = $Equality.$same(this.f_expandableContent__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement().id, null) || j_l_String.m_isEmpty__java_lang_String__boolean(this.f_expandableContent__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement().id) ? Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_DataList__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([this.f_identifier__org_patternfly_component_list_DataListItem_, 'expandable', 'content'], j_l_String))) : this.f_expandableContent__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement().id;
   this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, expandableContentId);
   this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_identifier__org_patternfly_component_list_DataListItem_) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(toggleId));
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), this.f_toggleButton__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement(), this.f_expandableContent__org_patternfly_component_list_DataListItem_.m_element__elemental2_dom_HTMLElement(), true);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {DataListItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DataListItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {DataListItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_DataListItem(arg0, arg1);
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
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 /** @nodts */
 static $clinit() {
  DataListItem.$clinit = () =>{};
  DataListItem.$loadModules();
  DataListSubComponent.$clinit();
  ComponentContext.$clinit();
  Expandable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataListItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  DataListCell = goog.module.get('org.patternfly.component.list.DataListCell$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DataListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_DataListItem = 'dli';
/**@const {string} @nodts*/
DataListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DataListItem = 'DataListItem';
ComponentContext.$markImplementor(DataListItem);
Expandable.$markImplementor(DataListItem);
HasIdentifier.$markImplementor(DataListItem);
$Util.$setClassMetadata(DataListItem, 'org.patternfly.component.list.DataListItem');

exports = DataListItem;

//# sourceMappingURL=DataListItem.js.map
