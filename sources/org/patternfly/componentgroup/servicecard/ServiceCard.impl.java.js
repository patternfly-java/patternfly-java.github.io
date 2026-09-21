goog.module('org.patternfly.componentgroup.servicecard.ServiceCard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, ServiceCard>}
 * @implements {ComponentIcon<HTMLElement, ServiceCard>}
 */
class ServiceCard extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {ServiceCard} */
 m_serviceCard__org_patternfly_componentgroup_servicecard_ServiceCard() {
  return ServiceCard.$create__();
 }
 /** @nodts @return {!ServiceCard} */
 static $create__() {
  ServiceCard.$clinit();
  let $instance = new ServiceCard();
  $instance.$ctor__org_patternfly_componentgroup_servicecard_ServiceCard__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_servicecard_ServiceCard__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ServiceCard__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {ServiceCard} */
 m_icon__elemental2_dom_Element__org_patternfly_componentgroup_servicecard_ServiceCard(/** Element */ icon) {
  return this;
 }
 /** @nodts @return {ServiceCard} */
 m_removeIcon__org_patternfly_componentgroup_servicecard_ServiceCard() {
  return this;
 }
 /** @nodts @return {ServiceCard} */
 m_title__java_lang_String__org_patternfly_componentgroup_servicecard_ServiceCard(/** ?string */ title) {
  return this;
 }
 /** @nodts @return {ServiceCard} */
 m_subTitle__java_lang_String__org_patternfly_componentgroup_servicecard_ServiceCard(/** ?string */ subTitle) {
  return this;
 }
 /** @nodts @return {ServiceCard} */
 m_description__java_lang_String__org_patternfly_componentgroup_servicecard_ServiceCard(/** ?string */ description) {
  return this;
 }
 /** @nodts @return {ServiceCard} */
 m_that__org_patternfly_componentgroup_servicecard_ServiceCard() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ServiceCard} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_componentgroup_servicecard_ServiceCard();
 }
 //Bridge method.
 /** @final @override @nodts @return {ServiceCard} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {ServiceCard}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ServiceCard));
 }
 //Bridge method.
 /** @final @override @nodts @return {ServiceCard} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_componentgroup_servicecard_ServiceCard(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ServiceCard} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_componentgroup_servicecard_ServiceCard();
 }
 //Bridge method.
 /** @final @override @nodts @return {ServiceCard} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_title__java_lang_String__org_patternfly_componentgroup_servicecard_ServiceCard(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ServiceCard} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_componentgroup_servicecard_ServiceCard(/** PredefinedIcon */ arg0) {
  return /**@type {ServiceCard}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ServiceCard));
 }
 /** @nodts */
 static $clinit() {
  ServiceCard.$clinit = () =>{};
  ServiceCard.$loadModules();
  BaseComponent.$clinit();
  ComponentIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ServiceCard;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentIcon.$markImplementor(ServiceCard);
$Util.$setClassMetadata(ServiceCard, 'org.patternfly.componentgroup.servicecard.ServiceCard');

exports = ServiceCard;

//# sourceMappingURL=ServiceCard.js.map
