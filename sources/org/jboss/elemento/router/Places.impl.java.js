goog.module('org.jboss.elemento.router.Places$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let LoadData = goog.forwardDeclare('org.jboss.elemento.router.LoadData$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Path = goog.forwardDeclare('org.jboss.elemento.router.Path$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Iterable<Entry<Place, Supplier<Page>>>}
 */
class Places extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<Place, Supplier<Page>>} @nodts*/
  this.f_pages__org_jboss_elemento_router_Places;
 }
 /** @nodts @return {Places} */
 static m_places__org_jboss_elemento_router_Places() {
  Places.$clinit();
  return Places.$create__();
 }
 /** @nodts @return {!Places} */
 static $create__() {
  Places.$clinit();
  let $instance = new Places();
  $instance.$ctor__org_jboss_elemento_router_Places__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_Places__void() {
  this.$ctor__java_lang_Object__void();
  this.f_pages__org_jboss_elemento_router_Places = (/**@type {!HashMap<Place, Supplier<Page>>}*/ (HashMap.$create__()));
 }
 /** @override @nodts @return {Iterator<Entry<Place, Supplier<Page>>>} */
 m_iterator__java_util_Iterator() {
  return this.f_pages__org_jboss_elemento_router_Places.entrySet().m_iterator__java_util_Iterator();
 }
 /** @nodts @return {Places} */
 m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(/** Place */ place, /** Supplier<Page> */ page) {
  this.f_pages__org_jboss_elemento_router_Places.put(place, page);
  return this;
 }
 /** @nodts @return {Places} */
 m_add__org_jboss_elemento_router_Places__org_jboss_elemento_router_Places(/** Places */ places) {
  this.f_pages__org_jboss_elemento_router_Places.putAll(places.f_pages__org_jboss_elemento_router_Places);
  return this;
 }
 /** @nodts @return {Places} */
 m_children__java_lang_String__org_jboss_elemento_router_Places__org_jboss_elemento_router_Places(/** ?string */ path, /** Places */ places) {
  for (let $iterator = places.f_pages__org_jboss_elemento_router_Places.entrySet().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<Place, Supplier<Page>>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
   {
    let child = Place.$create__java_lang_String__org_jboss_elemento_router_Place(this.m_failSafeRoute__java_lang_String__org_jboss_elemento_router_Place__java_lang_String_$p_org_jboss_elemento_router_Places(path, /**@type {Place}*/ ($Casts.$to(entry.getKey(), Place))), /**@type {Place}*/ ($Casts.$to(entry.getKey(), Place)));
    this.f_pages__org_jboss_elemento_router_Places.put(child, /**@type {Supplier<Page>}*/ ($Casts.$to(entry.getValue(), /**@type {Function}*/ (Supplier))));
   }
  }
  return this;
 }
 /** @nodts @return {Places} */
 m_loader__org_jboss_elemento_router_Place__org_jboss_elemento_router_LoadData__org_jboss_elemento_router_Places(/** Place */ place, /** LoadData<?> */ loader) {
  if (this.f_pages__org_jboss_elemento_router_Places.containsKey(place)) {
   for (let $iterator = this.f_pages__org_jboss_elemento_router_Places.keySet().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let p = /**@type {Place}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Place));
    {
     if (p.equals(place)) {
      p.m_loader__org_jboss_elemento_router_LoadData__org_jboss_elemento_router_Place(loader);
      break;
     }
    }
   }
  }
  return this;
 }
 /** @nodts @return {?string} */
 m_failSafeRoute__java_lang_String__org_jboss_elemento_router_Place__java_lang_String_$p_org_jboss_elemento_router_Places(/** ?string */ parent, /** Place */ child) {
  return Path.m_normalize__java_lang_String__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(Path.m_normalize__java_lang_String__java_lang_String(parent)) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(child.m_route__java_lang_String()));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<Entry<Place, Supplier<Page>>>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<Entry<Place, Supplier<Page>>>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  Places.$clinit = () =>{};
  Places.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Places;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Path = goog.module.get('org.jboss.elemento.router.Path$impl');
  Place = goog.module.get('org.jboss.elemento.router.Place$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterable.$markImplementor(Places);
$Util.$setClassMetadata(Places, 'org.jboss.elemento.router.Places');

exports = Places;

//# sourceMappingURL=Places.js.map
