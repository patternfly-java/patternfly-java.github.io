goog.module('org.jboss.elemento.router.Place$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let LoadData = goog.forwardDeclare('org.jboss.elemento.router.LoadData$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Path = goog.forwardDeclare('org.jboss.elemento.router.Path$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Place extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_route__org_jboss_elemento_router_Place_;
  /**@type {?string} @nodts*/
  this.f_path__org_jboss_elemento_router_Place_;
  /**@type {?string} @nodts*/
  this.f_title__org_jboss_elemento_router_Place_;
  /**@type {boolean} @nodts*/
  this.f_hasParameter__org_jboss_elemento_router_Place = false;
  /**@type {boolean} @nodts*/
  this.f_hasOptionalParameter__org_jboss_elemento_router_Place = false;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_root__org_jboss_elemento_router_Place;
  /**@type {LoadData<?>} @nodts*/
  this.f_loader__org_jboss_elemento_router_Place;
 }
 /** @nodts @return {Place} */
 static m_place__java_lang_String__org_jboss_elemento_router_Place(/** ?string */ route) {
  Place.$clinit();
  return Place.$create__java_lang_String(route);
 }
 //Factory method corresponding to constructor 'Place(String)'.
 /** @nodts @return {!Place} */
 static $create__java_lang_String(/** ?string */ route) {
  Place.$clinit();
  let $instance = new Place();
  $instance.$ctor__org_jboss_elemento_router_Place__java_lang_String__void(route);
  return $instance;
 }
 //Initialization from constructor 'Place(String)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_Place__java_lang_String__void(/** ?string */ route) {
  this.$ctor__java_lang_Object__void();
  if ($Equality.$same(route, null) || j_l_String.m_isEmpty__java_lang_String__boolean(j_l_String.m_trim__java_lang_String__java_lang_String(route))) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Route must not be null or empty!'));
  }
  Parameter.m_validateOptionalParameters__java_lang_String__void(route);
  this.f_route__org_jboss_elemento_router_Place_ = Path.m_normalize__java_lang_String__java_lang_String(route);
  this.f_path__org_jboss_elemento_router_Place_ = Parameter.m_stripOptionalParameters__java_lang_String__java_lang_String(this.f_route__org_jboss_elemento_router_Place_);
  this.f_hasParameter__org_jboss_elemento_router_Place = Parameter.m_hasParameter__java_lang_String__boolean(route);
  this.f_hasOptionalParameter__org_jboss_elemento_router_Place = Parameter.m_hasOptionalParameter__java_lang_String__boolean(route);
  this.f_title__org_jboss_elemento_router_Place_ = null;
  this.f_root__org_jboss_elemento_router_Place = null;
 }
 //Factory method corresponding to constructor 'Place(String, Place)'.
 /** @nodts @return {!Place} */
 static $create__java_lang_String__org_jboss_elemento_router_Place(/** ?string */ route, /** Place */ other) {
  Place.$clinit();
  let $instance = new Place();
  $instance.$ctor__org_jboss_elemento_router_Place__java_lang_String__org_jboss_elemento_router_Place__void(route, other);
  return $instance;
 }
 //Initialization from constructor 'Place(String, Place)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_Place__java_lang_String__org_jboss_elemento_router_Place__void(/** ?string */ route, /** Place */ other) {
  this.$ctor__java_lang_Object__void();
  this.f_route__org_jboss_elemento_router_Place_ = route;
  this.f_path__org_jboss_elemento_router_Place_ = Parameter.m_stripOptionalParameters__java_lang_String__java_lang_String(route);
  this.f_title__org_jboss_elemento_router_Place_ = other.f_title__org_jboss_elemento_router_Place_;
  this.f_root__org_jboss_elemento_router_Place = other.f_root__org_jboss_elemento_router_Place;
  this.f_hasParameter__org_jboss_elemento_router_Place = other.f_hasParameter__org_jboss_elemento_router_Place;
  this.f_hasOptionalParameter__org_jboss_elemento_router_Place = other.f_hasOptionalParameter__org_jboss_elemento_router_Place;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if ($Equality.$same(o, null) || !$Equality.$same(this.m_getClass__java_lang_Class(), $Objects.m_getClass__java_lang_Object__java_lang_Class(o))) {
   return false;
  }
  let place = /**@type {Place}*/ ($Casts.$to(o, Place));
  return Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_route__org_jboss_elemento_router_Place_, place.f_route__org_jboss_elemento_router_Place_);
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hashCode__java_lang_Object__int(this.f_route__org_jboss_elemento_router_Place_);
 }
 /** @override @return {?string} */
 toString() {
  let builder = StringBuilder.$create__();
  builder.m_append__java_lang_String__java_lang_StringBuilder('Place(\'').m_append__java_lang_String__java_lang_StringBuilder(this.f_route__org_jboss_elemento_router_Place_).m_append__java_lang_String__java_lang_StringBuilder('\'');
  if (!$Equality.$same(this.f_title__org_jboss_elemento_router_Place_, null)) {
   builder.m_append__java_lang_String__java_lang_StringBuilder(', \'').m_append__java_lang_String__java_lang_StringBuilder(this.f_title__org_jboss_elemento_router_Place_).m_append__java_lang_String__java_lang_StringBuilder('\'');
  }
  if (!$Equality.$same(this.f_root__org_jboss_elemento_router_Place, null)) {
   builder.m_append__java_lang_String__java_lang_StringBuilder(', custom root');
  }
  if (!$Equality.$same(this.f_loader__org_jboss_elemento_router_Place, null)) {
   builder.m_append__java_lang_String__java_lang_StringBuilder(', <loader>');
  }
  builder.m_append__char__java_lang_StringBuilder(41 /* ')' */);
  return builder.toString();
 }
 /** @nodts @return {Place} */
 m_title__java_lang_String__org_jboss_elemento_router_Place(/** ?string */ title) {
  this.f_title__org_jboss_elemento_router_Place_ = title;
  return this;
 }
 /** @nodts @return {Place} */
 m_root__java_lang_String__org_jboss_elemento_router_Place(/** ?string */ selector) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_Place(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, By.m_selector__java_lang_String__org_jboss_elemento_By(selector));
  })));
 }
 /** @nodts @return {Place} */
 m_root__org_jboss_elemento_By__org_jboss_elemento_router_Place(/** By */ selector) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_Place(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, selector);
  })));
 }
 /** @nodts @return {Place} */
 m_root__elemental2_dom_HTMLElement__org_jboss_elemento_router_Place(/** HTMLElement */ element) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_Place(Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return element;
  })));
 }
 /** @nodts @return {Place} */
 m_root__java_util_function_Supplier__org_jboss_elemento_router_Place(/** Supplier<HTMLElement> */ root) {
  this.f_root__org_jboss_elemento_router_Place = root;
  return this;
 }
 /** @nodts @return {Place} */
 m_loader__org_jboss_elemento_router_LoadData__org_jboss_elemento_router_Place(/** LoadData<?> */ loader) {
  this.f_loader__org_jboss_elemento_router_Place = loader;
  return this;
 }
 /** @nodts @return {?string} */
 m_route__java_lang_String() {
  return this.f_route__org_jboss_elemento_router_Place_;
 }
 /** @nodts @return {?string} */
 m_path__java_lang_String() {
  return this.f_path__org_jboss_elemento_router_Place_;
 }
 /** @nodts @return {?string} */
 m_title__java_lang_String() {
  return this.f_title__org_jboss_elemento_router_Place_;
 }
 /** @nodts */
 static $clinit() {
  Place.$clinit = () =>{};
  Place.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Place;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Parameter = goog.module.get('org.jboss.elemento.router.Parameter$impl');
  Path = goog.module.get('org.jboss.elemento.router.Path$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Place, 'org.jboss.elemento.router.Place');

exports = Place;

//# sourceMappingURL=Place.js.map
