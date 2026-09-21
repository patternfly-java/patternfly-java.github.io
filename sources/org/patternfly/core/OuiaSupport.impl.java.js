goog.module('org.patternfly.core.OuiaSupport$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Ouia = goog.forwardDeclare('org.patternfly.core.Ouia$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class OuiaSupport {
 /** @abstract @nodts @return {?string} */
 m_ouiaComponentType__java_lang_String() {}
 /** @abstract @nodts */
 m_initOuia__void() {}
 /** @abstract @nodts */
 m_initOuia__java_lang_String__void(/** ?string */ id) {}
 /** @abstract @nodts @return {B} */
 m_ouiaId__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ id) {}
 /** @abstract @nodts */
 m_ouiaSafe__boolean__void(/** boolean */ safe) {}
 /** @abstract @nodts */
 m_ouiaTransition__void() {}
 /** @nodts @template E, B */
 static m_initOuia__$default__org_patternfly_core_OuiaSupport__void(/** !OuiaSupport<E, B> */ $thisArg) {
  OuiaSupport.$clinit();
  Ouia.m_ouia__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)), $thisArg.m_ouiaComponentType__java_lang_String());
 }
 /** @nodts @template E, B */
 static m_initOuia__$default__org_patternfly_core_OuiaSupport__java_lang_String__void(/** !OuiaSupport<E, B> */ $thisArg, /** ?string */ id) {
  OuiaSupport.$clinit();
  Ouia.m_ouia__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(/**@type {HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)), id, $thisArg.m_ouiaComponentType__java_lang_String());
 }
 /** @nodts @template E, B @return {B} */
 static m_ouiaId__$default__org_patternfly_core_OuiaSupport__java_lang_String__org_jboss_elemento_TypedBuilder(/** !OuiaSupport<E, B> */ $thisArg, /** ?string */ id) {
  OuiaSupport.$clinit();
  Ouia.m_ouia__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(/**@type {HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)), id, $thisArg.m_ouiaComponentType__java_lang_String());
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B */
 static m_ouiaSafe__$default__org_patternfly_core_OuiaSupport__boolean__void(/** !OuiaSupport<E, B> */ $thisArg, /** boolean */ safe) {
  OuiaSupport.$clinit();
  Ouia.m_ouiaSafe__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)), safe);
 }
 /** @nodts @template E, B */
 static m_ouiaTransition__$default__org_patternfly_core_OuiaSupport__void(/** !OuiaSupport<E, B> */ $thisArg) {
  OuiaSupport.$clinit();
  Ouia.m_ouiaTransition__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)));
 }
 /** @nodts */
 static $clinit() {
  OuiaSupport.$clinit = () =>{};
  OuiaSupport.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_core_OuiaSupport = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_OuiaSupport;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Ouia = goog.module.get('org.patternfly.core.Ouia$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OuiaSupport.$markImplementor(/**@type {Function}*/ (OuiaSupport));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (OuiaSupport), 'org.patternfly.core.OuiaSupport');

exports = OuiaSupport;

//# sourceMappingURL=OuiaSupport.js.map
