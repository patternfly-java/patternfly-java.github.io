goog.module('org.patternfly.showcase.model.Discography$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.showcase.model.Record.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Discography extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Discography} */
 static $create__() {
  Discography.$clinit();
  let $instance = new Discography();
  $instance.$ctor__org_patternfly_showcase_model_Discography__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_model_Discography__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {List<Object>} */
 static m_records__java_util_function_Predicate__java_util_List(/** Predicate<Object> */ predicate) {
  Discography.$clinit();
  let records = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
  JsPropertyMap_$Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn__void(Discography.$static_data__org_patternfly_showcase_model_Discography, (/** ?string */ title) =>{
   let record = /**@type {Object}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Discography.$static_data__org_patternfly_showcase_model_Discography, title), $Overlay));
   if (predicate.m_test__java_lang_Object__boolean(record)) {
    records.add(record);
   }
  });
  return records;
 }
 /** @nodts @return {Object<string, Object>} */
 static get f_data__org_patternfly_showcase_model_Discography() {
  return (Discography.$clinit(), Discography.$static_data__org_patternfly_showcase_model_Discography);
 }
 /** @nodts */
 static set f_data__org_patternfly_showcase_model_Discography(/** Object<string, Object> */ value) {
  (Discography.$clinit(), Discography.$static_data__org_patternfly_showcase_model_Discography = value);
 }
 /** @nodts */
 static $clinit() {
  Discography.$clinit = () =>{};
  Discography.$loadModules();
  j_l_Object.$clinit();
  Discography.$static_data__org_patternfly_showcase_model_Discography = (/**@type {Object<string, Object>}*/ (Js.m_cast__java_lang_Object__java_lang_Object(goog.global.JSON.parse(ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_rhcp__org_treblereel_j2cl_processors_common_resources_TextResource().m_getText__java_lang_String()))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Discography;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
  $Overlay = goog.module.get('org.patternfly.showcase.model.Record.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {Object<string, Object>} @nodts*/
Discography.$static_data__org_patternfly_showcase_model_Discography;
$Util.$setClassMetadata(Discography, 'org.patternfly.showcase.model.Discography');

exports = Discography;

//# sourceMappingURL=Discography.js.map
