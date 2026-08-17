goog.module('org.patternfly.component.card.CardSubtitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const CardSubComponent = goog.require('org.patternfly.component.card.CardSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CardSubComponent<HTMLDivElement, CardSubtitle>}
 * @implements {ElementTextMethods<HTMLDivElement, CardSubtitle>}
 */
class CardSubtitle extends CardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CardSubtitle} */
 static m_cardSubtitle__org_patternfly_component_card_CardSubtitle() {
  CardSubtitle.$clinit();
  return CardSubtitle.$create__java_lang_String(null);
 }
 /** @nodts @return {CardSubtitle} */
 static m_cardSubtitle__java_lang_String__org_patternfly_component_card_CardSubtitle(/** ?string */ text) {
  CardSubtitle.$clinit();
  return CardSubtitle.$create__java_lang_String(text);
 }
 /** @nodts @return {!CardSubtitle} */
 static $create__java_lang_String(/** ?string */ text) {
  CardSubtitle.$clinit();
  let $instance = new CardSubtitle();
  $instance.$ctor__org_patternfly_component_card_CardSubtitle__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardSubtitle__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_card_CardSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(CardSubtitle.f_SUB_COMPONENT_ID__org_patternfly_component_card_CardSubtitle, CardSubtitle.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardSubtitle, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_subtitle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(text, null)) {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))).textContent = text;
  }
 }
 /** @nodts @return {CardSubtitle} */
 m_that__org_patternfly_component_card_CardSubtitle() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CardSubtitle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardSubtitle();
 }
 //Bridge method.
 /** @final @override @nodts @return {CardSubtitle} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {CardSubtitle}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CardSubtitle));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {CardSubtitle} */
 m_text__java_lang_String__org_patternfly_component_card_CardSubtitle(/** ?string */ arg0) {
  return /**@type {CardSubtitle}*/ ($Casts.$to(ElementTextMethods.m_text__$default__org_jboss_elemento_ElementTextMethods__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CardSubtitle));
 }
 /** @nodts */
 static $clinit() {
  CardSubtitle.$clinit = () =>{};
  CardSubtitle.$loadModules();
  CardSubComponent.$clinit();
  ElementTextMethods.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardSubtitle;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CardSubtitle.f_SUB_COMPONENT_ID__org_patternfly_component_card_CardSubtitle = 'cst';
/**@const {string} @nodts*/
CardSubtitle.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardSubtitle = 'CardSubtitle';
ElementTextMethods.$markImplementor(CardSubtitle);
$Util.$setClassMetadata(CardSubtitle, 'org.patternfly.component.card.CardSubtitle');

exports = CardSubtitle;

//# sourceMappingURL=CardSubtitle.js.map
