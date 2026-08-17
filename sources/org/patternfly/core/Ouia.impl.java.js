goog.module('org.patternfly.core.Ouia$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let WebStorageWindow_$Overlay = goog.forwardDeclare('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $double = goog.forwardDeclare('javaemul.internal.primitives.$double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.core.Ouia.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 */
class Ouia extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 static m_ouia__elemental2_dom_HTMLElement__java_lang_String__void(/** HTMLElement */ element, /** ?string */ componentType) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && !$Equality.$same(componentType, null) && Ouia.m_isSupported__boolean()) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaComponentType', componentType);
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaSafe', 'true');
  }
 }
 /** @nodts */
 static m_ouia__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(/** HTMLElement */ element, /** ?string */ componentId, /** ?string */ componentType) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && !$Equality.$same(componentType, null) && Ouia.m_isSupported__boolean()) {
   if (!$Equality.$same(componentId, null)) {
    $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaComponentId', componentId);
   }
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaComponentType', componentType);
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaSafe', 'true');
  }
 }
 /** @nodts */
 static m_ouia__org_jboss_elemento_svg_SVGElement__java_lang_String__void(/** SVGElement */ element, /** ?string */ componentType) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && !$Equality.$same(componentType, null) && Ouia.m_isSupported__boolean()) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(Ouia.m_svgDataset__org_jboss_elemento_svg_SVGElement__jsinterop_base_JsPropertyMap(element), 'ouiaComponentType', componentType);
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(Ouia.m_svgDataset__org_jboss_elemento_svg_SVGElement__jsinterop_base_JsPropertyMap(element), 'ouiaSafe', 'true');
  }
 }
 /** @nodts */
 static m_ouia__org_jboss_elemento_svg_SVGElement__java_lang_String__java_lang_String__void(/** SVGElement */ element, /** ?string */ componentId, /** ?string */ componentType) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && !$Equality.$same(componentType, null) && Ouia.m_isSupported__boolean()) {
   if (!$Equality.$same(componentId, null)) {
    $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(Ouia.m_svgDataset__org_jboss_elemento_svg_SVGElement__jsinterop_base_JsPropertyMap(element), 'ouiaComponentId', componentId);
   }
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(Ouia.m_svgDataset__org_jboss_elemento_svg_SVGElement__jsinterop_base_JsPropertyMap(element), 'ouiaComponentType', componentType);
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(Ouia.m_svgDataset__org_jboss_elemento_svg_SVGElement__jsinterop_base_JsPropertyMap(element), 'ouiaSafe', 'true');
  }
 }
 /** @nodts */
 static m_ouiaSafe__elemental2_dom_HTMLElement__boolean__void(/** HTMLElement */ element, /** boolean */ safe) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && Ouia.m_isSupported__boolean()) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaSafe', j_l_String.m_valueOf__boolean__java_lang_String(safe));
  }
 }
 /** @nodts */
 static m_ouiaSafe__org_jboss_elemento_svg_SVGElement__boolean__void(/** SVGElement */ element, /** boolean */ safe) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && Ouia.m_isSupported__boolean()) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(Ouia.m_svgDataset__org_jboss_elemento_svg_SVGElement__jsinterop_base_JsPropertyMap(element), 'ouiaSafe', j_l_String.m_valueOf__boolean__java_lang_String(safe));
  }
 }
 /** @nodts */
 static m_ouiaTransition__elemental2_dom_HTMLElement__void(/** HTMLElement */ element) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && Ouia.m_isSupported__boolean()) {
   Ouia.m_ouiaSafe__elemental2_dom_HTMLElement__boolean__void(element, false);
   let guard = /**@type {!Array<number>}*/ ($Arrays.$stampType([0], $double));
   $Arrays.$set(guard, 0, DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ e) =>{
    Ouia.m_ouiaSafe__elemental2_dom_HTMLElement__boolean__void(element, true);
   }, 300, []));
   element.addEventListener('transitionend', $1.$create__arrayOf_double__elemental2_dom_HTMLElement(guard, element));
  }
 }
 /** @nodts @return {boolean} */
 static m_isSupported__boolean() {
  let localStorage = WebStorageWindow_$Overlay.m_of__elemental2_dom_Window__elemental2_webstorage_WebStorageWindow(goog.global.window).localStorage;
  if (!$Equality.$same(localStorage, null)) {
   return Boolean.m_parseBoolean__java_lang_String__boolean(localStorage.getItem('ouia'));
  }
  return false;
 }
 /** @nodts @return {Object<string, ?string>} */
 static m_svgDataset__org_jboss_elemento_svg_SVGElement__jsinterop_base_JsPropertyMap(/** SVGElement */ element) {
  return /**@type {Object<string, ?string>}*/ (Js.m_cast__java_lang_Object__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object<string, *>}*/ (Js.m_cast__java_lang_Object__java_lang_Object(element)), 'dataset')));
 }
 /** @nodts @return {!Ouia} */
 static $create__() {
  let $instance = new Ouia();
  $instance.$ctor__org_patternfly_core_Ouia__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Ouia__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Ouia.$clinit = () =>{};
  Ouia.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Ouia;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  WebStorageWindow_$Overlay = goog.module.get('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $double = goog.module.get('javaemul.internal.primitives.$double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.core.Ouia.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(Ouia, 'org.patternfly.core.Ouia');

exports = Ouia;

//# sourceMappingURL=Ouia.js.map
