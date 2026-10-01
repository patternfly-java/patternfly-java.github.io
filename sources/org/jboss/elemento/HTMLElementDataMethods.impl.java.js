goog.module('org.jboss.elemento.HTMLElementDataMethods$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HTMLElementDataMethods {
 /** @abstract @nodts @return {B} */
 m_data__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name) {}
 /** @abstract @nodts @return {B} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** ?string */ value) {}
 /** @nodts @template E, B @return {B} */
 static m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLElementDataMethods<E, B> */ $thisArg, /** ?string */ name) {
  HTMLElementDataMethods.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void((/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).dataset, j_l_String.m_replaceFirst__java_lang_String__java_lang_String__java_lang_String__java_lang_String(name, '^data-', ''), '');
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_data__$default__org_jboss_elemento_HTMLElementDataMethods__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HTMLElementDataMethods<E, B> */ $thisArg, /** ?string */ name, /** ?string */ value) {
  HTMLElementDataMethods.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void((/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay))).dataset, j_l_String.m_replaceFirst__java_lang_String__java_lang_String__java_lang_String__java_lang_String(name, '^data-', ''), value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HTMLElementDataMethods.$clinit = () =>{};
  HTMLElementDataMethods.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HTMLElementDataMethods = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HTMLElementDataMethods;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HTMLElementDataMethods.$markImplementor(/**@type {Function}*/ (HTMLElementDataMethods));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HTMLElementDataMethods), 'org.jboss.elemento.HTMLElementDataMethods');

exports = HTMLElementDataMethods;

//# sourceMappingURL=HTMLElementDataMethods.js.map
