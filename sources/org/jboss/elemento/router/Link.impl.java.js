goog.module('org.jboss.elemento.router.Link$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HTMLContainerBuilder = goog.require('org.jboss.elemento.HTMLContainerBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HTMLContainerBuilder<HTMLAnchorElement>}
 */
class Link extends HTMLContainerBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Link} */
 static m_link__org_jboss_elemento_router_PlaceManager__java_lang_String__arrayOf_java_lang_String__org_jboss_elemento_router_Link(/** PlaceManager */ placeManager, /** ?string */ route, /** Array<?string> */ values) {
  Link.$clinit();
  return Link.$create__org_jboss_elemento_router_PlaceManager__java_lang_String(placeManager, Parameter.m_encodePath__java_lang_String__arrayOf_java_lang_String__java_lang_String(route, values));
 }
 /** @nodts @return {Link} */
 static m_link__org_jboss_elemento_router_PlaceManager__java_lang_String__org_jboss_elemento_router_Link(/** PlaceManager */ placeManager, /** ?string */ route) {
  Link.$clinit();
  return Link.$create__org_jboss_elemento_router_PlaceManager__java_lang_String(placeManager, route);
 }
 /** @nodts @return {!Link} */
 static $create__org_jboss_elemento_router_PlaceManager__java_lang_String(/** PlaceManager */ placeManager, /** ?string */ route) {
  Link.$clinit();
  let $instance = new Link();
  $instance.$ctor__org_jboss_elemento_router_Link__org_jboss_elemento_router_PlaceManager__java_lang_String__void(placeManager, route);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_Link__org_jboss_elemento_router_PlaceManager__java_lang_String__void(/** PlaceManager */ placeManager, /** ?string */ route) {
  this.$ctor__org_jboss_elemento_HTMLContainerBuilder__elemental2_dom_HTMLElement__void(/**@type {HTMLAnchorElement}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(placeManager.m_href__java_lang_String__java_lang_String(route)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Link} */
 m_that__org_jboss_elemento_router_Link() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Link} */
 m_that__org_jboss_elemento_HTMLContainerBuilder() {
  return this.m_that__org_jboss_elemento_router_Link();
 }
 /** @nodts */
 static $clinit() {
  Link.$clinit = () =>{};
  Link.$loadModules();
  HTMLContainerBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Link;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Parameter = goog.module.get('org.jboss.elemento.router.Parameter$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Link, 'org.jboss.elemento.router.Link');

exports = Link;

//# sourceMappingURL=Link.js.map
