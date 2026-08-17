goog.module('org.patternfly.componentgroup.pageheader.PageHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let ContentType = goog.forwardDeclare('org.patternfly.component.content.ContentType$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.icon.Icon$impl');
let IconSize = goog.forwardDeclare('org.patternfly.component.icon.IconSize$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let AlignSelf = goog.forwardDeclare('org.patternfly.layout.flex.AlignSelf$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let FlexItem = goog.forwardDeclare('org.patternfly.layout.flex.FlexItem$impl');
let FlexShorthand = goog.forwardDeclare('org.patternfly.layout.flex.FlexShorthand$impl');
let Split = goog.forwardDeclare('org.patternfly.layout.split.Split$impl');
let SplitItem = goog.forwardDeclare('org.patternfly.layout.split.SplitItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Orientation = goog.forwardDeclare('org.patternfly.style.Orientation$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, PageHeader>}
 * @implements {ComponentIcon<HTMLElement, PageHeader>}
 * @implements {ElementContainerDelegate<HTMLElement, PageHeader>}
 */
class PageHeader extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {FlexItem} @nodts*/
  this.f_body__org_patternfly_componentgroup_pageheader_PageHeader_;
  /**@type {Split} @nodts*/
  this.f_split__org_patternfly_componentgroup_pageheader_PageHeader_;
  /**@type {Content} @nodts*/
  this.f_header__org_patternfly_componentgroup_pageheader_PageHeader_;
  /**@type {FlexItem} @nodts*/
  this.f_iconContainer__org_patternfly_componentgroup_pageheader_PageHeader_;
  /**@type {Divider} @nodts*/
  this.f_divider__org_patternfly_componentgroup_pageheader_PageHeader_;
  /**@type {SplitItem} @nodts*/
  this.f_labelsContainer__org_patternfly_componentgroup_pageheader_PageHeader_;
 }
 /** @nodts @return {PageHeader} */
 static m_pageHeader__org_patternfly_componentgroup_pageheader_PageHeader() {
  PageHeader.$clinit();
  return PageHeader.$create__();
 }
 /** @nodts @return {!PageHeader} */
 static $create__() {
  PageHeader.$clinit();
  let $instance = new PageHeader();
  $instance.$ctor__org_patternfly_componentgroup_pageheader_PageHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_pageheader_PageHeader__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_PageHeader__org_patternfly_component_ComponentType, Flex.m_flex__org_patternfly_layout_flex_Flex().m_element__elemental2_dom_HTMLElement());
  this.f_body__org_patternfly_componentgroup_pageheader_PageHeader_ = (/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_flex__org_patternfly_layout_flex_FlexShorthand__org_patternfly_layout_flex_FlexItem(FlexShorthand.f__1__org_patternfly_layout_flex_FlexShorthand).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_split__org_patternfly_componentgroup_pageheader_PageHeader_ = (/**@type {Split}*/ ($Casts.$to(Split.m_split__org_patternfly_layout_split_Split().m_gutter__org_jboss_elemento_TypedBuilder(), Split))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_header__org_patternfly_componentgroup_pageheader_PageHeader_ = (/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_h1__org_patternfly_component_content_ContentType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String('mb-sm')], j_l_String))), Content)))), SplitItem)))), FlexItem)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_body__org_patternfly_componentgroup_pageheader_PageHeader_.m_element__elemental2_dom_HTMLElement());
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_body__org_patternfly_componentgroup_pageheader_PageHeader_.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts @return {PageHeader} */
 m_addHeader__java_lang_String__org_patternfly_componentgroup_pageheader_PageHeader(/** ?string */ header) {
  this.f_header__org_patternfly_componentgroup_pageheader_PageHeader_.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(header);
  return this;
 }
 /** @nodts @return {PageHeader} */
 m_addHeader__elemental2_dom_HTMLElement__org_patternfly_componentgroup_pageheader_PageHeader(/** HTMLElement */ header) {
  this.f_header__org_patternfly_componentgroup_pageheader_PageHeader_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(header);
  return this;
 }
 /** @nodts @return {PageHeader} */
 m_addDescription__java_lang_String__org_patternfly_componentgroup_pageheader_PageHeader(/** ?string */ description) {
  return this.m_addDescription__elemental2_dom_HTMLElement__org_patternfly_componentgroup_pageheader_PageHeader((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(description), Content))).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageHeader} */
 m_addDescription__elemental2_dom_HTMLElement__org_patternfly_componentgroup_pageheader_PageHeader(/** HTMLElement */ description) {
  return /**@type {PageHeader}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(description), PageHeader));
 }
 /** @nodts @return {PageHeader} */
 m_addLabel__org_patternfly_component_label_Label__org_patternfly_componentgroup_pageheader_PageHeader(/** Label */ label) {
  return this.m_addLabel__elemental2_dom_HTMLElement__org_patternfly_componentgroup_pageheader_PageHeader(label.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageHeader} */
 m_add__org_patternfly_component_label_Label__org_patternfly_componentgroup_pageheader_PageHeader(/** Label */ label) {
  return this.m_addLabel__elemental2_dom_HTMLElement__org_patternfly_componentgroup_pageheader_PageHeader(label.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageHeader} */
 m_addLabel__elemental2_dom_HTMLElement__org_patternfly_componentgroup_pageheader_PageHeader(/** HTMLElement */ label) {
  if ($Equality.$same(this.f_labelsContainer__org_patternfly_componentgroup_pageheader_PageHeader_, null)) {
   this.f_labelsContainer__org_patternfly_componentgroup_pageheader_PageHeader_ = SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem();
   this.f_split__org_patternfly_componentgroup_pageheader_PageHeader_.m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(this.f_labelsContainer__org_patternfly_componentgroup_pageheader_PageHeader_);
  }
  this.f_labelsContainer__org_patternfly_componentgroup_pageheader_PageHeader_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(label);
  return this;
 }
 /** @nodts @return {PageHeader} */
 m_icon__elemental2_dom_Element__org_patternfly_componentgroup_pageheader_PageHeader(/** Element */ icon) {
  this.m_removeIcon__org_patternfly_componentgroup_pageheader_PageHeader();
  this.f_divider__org_patternfly_componentgroup_pageheader_PageHeader_ = Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_orientation__org_patternfly_style_Orientation__org_patternfly_component_divider_Divider(Orientation.f_vertical__org_patternfly_style_Orientation);
  this.f_iconContainer__org_patternfly_componentgroup_pageheader_PageHeader_ = (/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_alignSelf__org_patternfly_layout_flex_AlignSelf__org_patternfly_layout_flex_FlexItem(AlignSelf.f_center__org_patternfly_layout_flex_AlignSelf).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__elemental2_dom_Element__org_patternfly_component_icon_Icon(icon).m_size__org_patternfly_component_icon_IconSize__org_patternfly_component_icon_Icon(IconSize.f__2xl__org_patternfly_component_icon_IconSize)), FlexItem)));
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_divider__org_patternfly_componentgroup_pageheader_PageHeader_);
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_iconContainer__org_patternfly_componentgroup_pageheader_PageHeader_);
  return this;
 }
 /** @nodts @return {PageHeader} */
 m_removeIcon__org_patternfly_componentgroup_pageheader_PageHeader() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_iconContainer__org_patternfly_componentgroup_pageheader_PageHeader_);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_divider__org_patternfly_componentgroup_pageheader_PageHeader_);
  this.f_iconContainer__org_patternfly_componentgroup_pageheader_PageHeader_ = null;
  this.f_divider__org_patternfly_componentgroup_pageheader_PageHeader_ = null;
  return this;
 }
 /** @nodts @return {PageHeader} */
 m_that__org_patternfly_componentgroup_pageheader_PageHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_componentgroup_pageheader_PageHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {PageHeader} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {PageHeader}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), PageHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageHeader} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_componentgroup_pageheader_PageHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {PageHeader} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_componentgroup_pageheader_PageHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {PageHeader} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PageHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageHeader} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {PageHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PageHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageHeader} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {PageHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PageHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageHeader} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_componentgroup_pageheader_PageHeader(/** PredefinedIcon */ arg0) {
  return /**@type {PageHeader}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), PageHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageHeader} */
 m_add__java_lang_String__org_patternfly_componentgroup_pageheader_PageHeader(/** ?string */ arg0) {
  return /**@type {PageHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PageHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageHeader} */
 m_add__elemental2_dom_Node__org_patternfly_componentgroup_pageheader_PageHeader(/** Node */ arg0) {
  return /**@type {PageHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PageHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageHeader} */
 m_add__java_util_function_Supplier__org_patternfly_componentgroup_pageheader_PageHeader(/** Supplier<Node> */ arg0) {
  return /**@type {PageHeader}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), PageHeader));
 }
 /** @nodts */
 static $clinit() {
  PageHeader.$clinit = () =>{};
  PageHeader.$loadModules();
  BaseComponent.$clinit();
  ComponentIcon.$clinit();
  ElementContainerDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  ContentType = goog.module.get('org.patternfly.component.content.ContentType$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  Icon = goog.module.get('org.patternfly.component.icon.Icon$impl');
  IconSize = goog.module.get('org.patternfly.component.icon.IconSize$impl');
  AlignSelf = goog.module.get('org.patternfly.layout.flex.AlignSelf$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  FlexItem = goog.module.get('org.patternfly.layout.flex.FlexItem$impl');
  FlexShorthand = goog.module.get('org.patternfly.layout.flex.FlexShorthand$impl');
  Split = goog.module.get('org.patternfly.layout.split.Split$impl');
  SplitItem = goog.module.get('org.patternfly.layout.split.SplitItem$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Orientation = goog.module.get('org.patternfly.style.Orientation$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentIcon.$markImplementor(PageHeader);
ElementContainerDelegate.$markImplementor(PageHeader);
$Util.$setClassMetadata(PageHeader, 'org.patternfly.componentgroup.pageheader.PageHeader');

exports = PageHeader;

//# sourceMappingURL=PageHeader.js.map
