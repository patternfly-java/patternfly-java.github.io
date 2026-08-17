goog.module('org.patternfly.component.banner.Banner$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Pill = goog.require('org.patternfly.style.Modifiers.Pill$impl');
const Static = goog.require('org.patternfly.style.Modifiers.Static$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Color = goog.forwardDeclare('org.patternfly.style.Color$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Banner>}
 * @implements {ElementTextMethods<HTMLDivElement, Banner>}
 * @implements {Pill<HTMLDivElement, Banner>}
 * @implements {Static<HTMLDivElement, Banner>}
 */
class Banner extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_screenReaderElement__org_patternfly_component_banner_Banner_;
 }
 /** @nodts @return {Banner} */
 static m_banner__org_patternfly_component_banner_Banner() {
  Banner.$clinit();
  return Banner.$create__org_patternfly_style_Color(Color.f_grey__org_patternfly_style_Color);
 }
 /** @nodts @return {Banner} */
 static m_banner__org_patternfly_style_Color__org_patternfly_component_banner_Banner(/** Color */ color) {
  Banner.$clinit();
  return Banner.$create__org_patternfly_style_Color(color);
 }
 /** @nodts @return {Banner} */
 static m_banner__java_lang_String__org_patternfly_component_banner_Banner(/** ?string */ text) {
  Banner.$clinit();
  return Banner.$create__org_patternfly_style_Color(Color.f_grey__org_patternfly_style_Color).m_text__java_lang_String__org_patternfly_component_banner_Banner(text);
 }
 /** @nodts @return {Banner} */
 static m_banner__java_lang_String__org_patternfly_style_Color__org_patternfly_component_banner_Banner(/** ?string */ text, /** Color */ color) {
  Banner.$clinit();
  return Banner.$create__org_patternfly_style_Color(color).m_text__java_lang_String__org_patternfly_component_banner_Banner(text);
 }
 /** @nodts @return {!Banner} */
 static $create__org_patternfly_style_Color(/** Color */ color) {
  Banner.$clinit();
  let $instance = new Banner();
  $instance.$ctor__org_patternfly_component_banner_Banner__org_patternfly_style_Color__void(color);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_banner_Banner__org_patternfly_style_Color__void(/** Color */ color) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Banner__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_banner__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), color.f_modifier__org_patternfly_style_Color], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts @return {Banner} */
 m_status__org_patternfly_style_Status__org_patternfly_component_banner_Banner(/** Status */ status) {
  for (let $array = Color.m_values__arrayOf_org_patternfly_style_Color(), $index = 0; $index < $array.length; $index++) {
   let color = $array[$index];
   {
    (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.remove(color.f_modifier__org_patternfly_style_Color);
   }
  }
  return /**@type {Banner}*/ ($Casts.$to(TypedModifier.m_swap__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__org_patternfly_style_TypedModifier__arrayOf_org_patternfly_style_TypedModifier__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), status, Status.m_values__arrayOf_org_patternfly_style_Status()), Banner));
 }
 /** @nodts @return {Banner} */
 m_screenReader__java_lang_String__org_patternfly_component_banner_Banner(/** ?string */ text) {
  this.m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_banner_Banner().textContent = text;
  return this;
 }
 /** @nodts @return {Banner} */
 m_text__java_lang_String__org_patternfly_component_banner_Banner(/** ?string */ text) {
  Elements.m_textNode__elemental2_dom_Element__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), text);
  return this;
 }
 /** @nodts @return {Banner} */
 m_that__org_patternfly_component_banner_Banner() {
  return this;
 }
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return Elements.m_textNode__elemental2_dom_Element__java_lang_String(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_banner_Banner() {
  if ($Equality.$same(this.f_screenReaderElement__org_patternfly_component_banner_Banner_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.f_screenReaderElement__org_patternfly_component_banner_Banner_ = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
  }
  return this.f_screenReaderElement__org_patternfly_component_banner_Banner_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Banner} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_banner_Banner();
 }
 //Bridge method.
 /** @final @override @nodts @return {Banner} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_banner_Banner(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Banner} */
 m_pill__org_jboss_elemento_TypedBuilder() {
  return /**@type {Banner}*/ ($Casts.$to(Pill.m_pill__$default__org_patternfly_style_Modifiers_Pill__org_jboss_elemento_TypedBuilder(this), Banner));
 }
 //Bridge method.
 /** @final @override @nodts @return {Banner} */
 m_pill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Banner}*/ ($Casts.$to(Pill.m_pill__$default__org_patternfly_style_Modifiers_Pill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Banner));
 }
 //Bridge method.
 /** @final @override @nodts @return {Banner} */
 m_static___org_jboss_elemento_TypedBuilder() {
  return /**@type {Banner}*/ ($Casts.$to(Static.m_static___$default__org_patternfly_style_Modifiers_Static__org_jboss_elemento_TypedBuilder(this), Banner));
 }
 //Bridge method.
 /** @final @override @nodts @return {Banner} */
 m_static___boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Banner}*/ ($Casts.$to(Static.m_static___$default__org_patternfly_style_Modifiers_Static__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Banner));
 }
 //Default method forwarding stub.
 /** @nodts @return {Banner} */
 m_pill__org_patternfly_component_banner_Banner() {
  return /**@type {Banner}*/ ($Casts.$to(Pill.m_pill__$default__org_patternfly_style_Modifiers_Pill__org_jboss_elemento_TypedBuilder(this), Banner));
 }
 //Default method forwarding stub.
 /** @nodts @return {Banner} */
 m_pill__boolean__org_patternfly_component_banner_Banner(/** boolean */ arg0) {
  return /**@type {Banner}*/ ($Casts.$to(Pill.m_pill__$default__org_patternfly_style_Modifiers_Pill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Banner));
 }
 //Default method forwarding stub.
 /** @nodts @return {Banner} */
 m_static___org_patternfly_component_banner_Banner() {
  return /**@type {Banner}*/ ($Casts.$to(Static.m_static___$default__org_patternfly_style_Modifiers_Static__org_jboss_elemento_TypedBuilder(this), Banner));
 }
 //Default method forwarding stub.
 /** @nodts @return {Banner} */
 m_static___boolean__org_patternfly_component_banner_Banner(/** boolean */ arg0) {
  return /**@type {Banner}*/ ($Casts.$to(Static.m_static___$default__org_patternfly_style_Modifiers_Static__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Banner));
 }
 /** @nodts */
 static $clinit() {
  Banner.$clinit = () =>{};
  Banner.$loadModules();
  BaseComponent.$clinit();
  ElementTextMethods.$clinit();
  Pill.$clinit();
  Static.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Banner;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Color = goog.module.get('org.patternfly.style.Color$impl');
  Status = goog.module.get('org.patternfly.style.Status$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementTextMethods.$markImplementor(Banner);
Pill.$markImplementor(Banner);
Static.$markImplementor(Banner);
$Util.$setClassMetadata(Banner, 'org.patternfly.component.banner.Banner');

exports = Banner;

//# sourceMappingURL=Banner.js.map
