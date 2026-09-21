goog.module('org.patternfly.component.brand.Brand$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLPictureElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLPictureElement.$Overlay$impl');
let HTMLSourceElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSourceElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let HTMLBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Brand>}
 */
class Brand extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_picture__org_patternfly_component_brand_Brand_ = false;
 }
 /** @nodts @return {Brand} */
 static m_brand__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand(/** ?string */ src, /** ?string */ alt) {
  Brand.$clinit();
  return Brand.$create__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(/**@type {HTMLImageElement}*/ ($Casts.$to(Elements.m_img__org_jboss_elemento_HTMLElementBuilder().m_element__elemental2_dom_HTMLElement(), $Overlay)), src, alt);
 }
 /** @nodts @return {Brand} */
 static m_brand__org_patternfly_component_brand_Brand() {
  Brand.$clinit();
  return Brand.$create__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(/**@type {HTMLPictureElement}*/ ($Casts.$to(Elements.m_picture__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLPictureElement_$Overlay)), null, null);
 }
 /** @nodts @template E @return {!Brand} */
 static $create__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(/** E */ element, /** ?string */ src, /** ?string */ alt) {
  Brand.$clinit();
  let $instance = new Brand();
  $instance.$ctor__org_patternfly_component_brand_Brand__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(element, src, alt);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_brand_Brand__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(/** E */ element, /** ?string */ src, /** ?string */ alt) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Brand__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ (element));
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_brand__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String)));
  this.f_picture__org_patternfly_component_brand_Brand_ = $Equality.$same(src, null);
  if (this.f_picture__org_patternfly_component_brand_Brand_) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_picture__org_patternfly_style_Classes)], j_l_String)));
  } else {
   (/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(Elements.m_img__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/**@type {Element}*/ (element)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLImageElement */ i) =>{
    let i_1 = /**@type {HTMLImageElement}*/ ($Casts.$to(i, $Overlay));
    i_1.src = src;
    i_1.alt = alt;
   })), HTMLElementBuilder))).m_element__elemental2_dom_HTMLElement();
  }
 }
 /** @nodts @return {Brand} */
 m_addSource__java_lang_String__org_patternfly_component_brand_Brand(/** ?string */ src) {
  return this.m_addSource__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand(src, null);
 }
 /** @nodts @return {Brand} */
 m_addSource__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand(/** ?string */ src, /** ?string */ media) {
  if (this.f_picture__org_patternfly_component_brand_Brand_) {
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLSourceElement>}*/ ($Casts.$to(Elements.m_source__org_jboss_elemento_HTMLElementBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLSourceElement */ s) =>{
    let s_1 = /**@type {HTMLSourceElement}*/ ($Casts.$to(s, HTMLSourceElement_$Overlay));
    s_1.srcset = src;
    if (!$Equality.$same(media, null)) {
     s_1.media = media;
    }
   })), HTMLElementBuilder)));
  } else {
   Brand.f_logger__org_patternfly_component_brand_Brand_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Brand %o contains a <img/> element. Adding sources is not supported.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  return this;
 }
 /** @nodts @return {Brand} */
 m_addImg__org_jboss_elemento_HTMLElementBuilder__org_patternfly_component_brand_Brand(/** HTMLElementBuilder<HTMLImageElement> */ img) {
  return this.m_add__org_jboss_elemento_HTMLElementBuilder__org_patternfly_component_brand_Brand(img);
 }
 /** @nodts @return {Brand} */
 m_add__org_jboss_elemento_HTMLElementBuilder__org_patternfly_component_brand_Brand(/** HTMLElementBuilder<HTMLImageElement> */ img) {
  if (this.f_picture__org_patternfly_component_brand_Brand_) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLImageElement}*/ ($Casts.$to(img.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  } else {
   Brand.f_logger__org_patternfly_component_brand_Brand_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Brand %o contains a <picture/> element. Adding a fallback image is not supported.', [this.m_element__elemental2_dom_HTMLElement()]);
  }
  return this;
 }
 /** @nodts @return {Brand} */
 m_widths__java_lang_String__org_patternfly_component_brand_Brand(/** ?string */ widths) {
  return this.m_widths__org_patternfly_style_Breakpoints__org_patternfly_component_brand_Brand(/**@type {Breakpoints<?string>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, widths)));
 }
 /** @nodts @return {Brand} */
 m_widths__org_patternfly_style_Breakpoints__org_patternfly_component_brand_Brand(/** Breakpoints<?string> */ widths) {
  return /**@type {Brand}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, Brand>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_brand__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_Width__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(widths), Brand));
 }
 /** @nodts @return {Brand} */
 m_heights__java_lang_String__org_patternfly_component_brand_Brand(/** ?string */ heights) {
  return this.m_heights__org_patternfly_style_Breakpoints__org_patternfly_component_brand_Brand(/**@type {Breakpoints<?string>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, heights)));
 }
 /** @nodts @return {Brand} */
 m_heights__org_patternfly_style_Breakpoints__org_patternfly_component_brand_Brand(/** Breakpoints<?string> */ heights) {
  return /**@type {Brand}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, Brand>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_brand__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_Height__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(heights), Brand));
 }
 /** @nodts @return {Brand} */
 m_that__org_patternfly_component_brand_Brand() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Brand} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_brand_Brand();
 }
 /** @nodts */
 static $clinit() {
  Brand.$clinit = () =>{};
  Brand.$loadModules();
  BaseComponent.$clinit();
  Brand.f_logger__org_patternfly_component_brand_Brand_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Brand).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Brand;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLPictureElement_$Overlay = goog.module.get('elemental2.dom.HTMLPictureElement.$Overlay$impl');
  HTMLSourceElement_$Overlay = goog.module.get('elemental2.dom.HTMLSourceElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Brand.f_logger__org_patternfly_component_brand_Brand_;
$Util.$setClassMetadata(Brand, 'org.patternfly.component.brand.Brand');

exports = Brand;

//# sourceMappingURL=Brand.js.map
