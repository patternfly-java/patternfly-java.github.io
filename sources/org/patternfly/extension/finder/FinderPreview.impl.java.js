goog.module('org.patternfly.extension.finder.FinderPreview$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FinderSubComponent = goog.require('org.patternfly.extension.finder.FinderSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FinderSubComponent<HTMLElement, FinderPreview>}
 */
class FinderPreview extends FinderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FinderPreview} */
 static m_finderPreview__org_patternfly_extension_finder_FinderPreview() {
  FinderPreview.$clinit();
  return FinderPreview.$create__();
 }
 /** @nodts @return {!FinderPreview} */
 static $create__() {
  FinderPreview.$clinit();
  let $instance = new FinderPreview();
  $instance.$ctor__org_patternfly_extension_finder_FinderPreview__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderPreview__void() {
  this.$ctor__org_patternfly_extension_finder_FinderSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FinderPreview.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderPreview, FinderPreview.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderPreview, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderClasses.f_preview__org_patternfly_extension_finder_FinderClasses], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {FinderPreview} */
 m_that__org_patternfly_extension_finder_FinderPreview() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderPreview} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_FinderPreview();
 }
 /** @nodts */
 static $clinit() {
  FinderPreview.$clinit = () =>{};
  FinderPreview.$loadModules();
  FinderSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderPreview;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  FinderClasses = goog.module.get('org.patternfly.extension.finder.FinderClasses$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FinderPreview.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderPreview = 'fp';
/**@const {string} @nodts*/
FinderPreview.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderPreview = 'FinderPreview';
$Util.$setClassMetadata(FinderPreview, 'org.patternfly.extension.finder.FinderPreview');

exports = FinderPreview;

//# sourceMappingURL=FinderPreview.js.map
