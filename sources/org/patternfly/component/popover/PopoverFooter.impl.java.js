goog.module('org.patternfly.component.popover.PopoverFooter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const PopoverSubComponent = goog.require('org.patternfly.component.popover.PopoverSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PopoverSubComponent<HTMLDivElement, PopoverFooter>}
 * @implements {ElementTextMethods<HTMLDivElement, PopoverFooter>}
 */
class PopoverFooter extends PopoverSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PopoverFooter} */
 static m_popoverFooter__org_patternfly_component_popover_PopoverFooter() {
  PopoverFooter.$clinit();
  return PopoverFooter.$create__();
 }
 /** @nodts @return {!PopoverFooter} */
 static $create__() {
  PopoverFooter.$clinit();
  let $instance = new PopoverFooter();
  $instance.$ctor__org_patternfly_component_popover_PopoverFooter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_popover_PopoverFooter__void() {
  this.$ctor__org_patternfly_component_popover_PopoverSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(PopoverFooter.f_SUB_COMPONENT_ID__org_patternfly_component_popover_PopoverFooter, PopoverFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_popover_PopoverFooter, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_footer__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {PopoverFooter} */
 m_that__org_patternfly_component_popover_PopoverFooter() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverFooter} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_popover_PopoverFooter();
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverFooter} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PopoverFooter}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverFooter));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverFooter} */
 m_text__java_lang_String__org_patternfly_component_popover_PopoverFooter(/** ?string */ arg0) {
  return /**@type {PopoverFooter}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverFooter));
 }
 /** @nodts */
 static $clinit() {
  PopoverFooter.$clinit = () =>{};
  PopoverFooter.$loadModules();
  PopoverSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopoverFooter;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PopoverFooter.f_SUB_COMPONENT_ID__org_patternfly_component_popover_PopoverFooter = 'npf';
/**@const {string} @nodts*/
PopoverFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_popover_PopoverFooter = 'PopoverFooter';
ElementTextMethods.$markImplementor(PopoverFooter);
$Util.$setClassMetadata(PopoverFooter, 'org.patternfly.component.popover.PopoverFooter');

exports = PopoverFooter;

//# sourceMappingURL=PopoverFooter.js.map
