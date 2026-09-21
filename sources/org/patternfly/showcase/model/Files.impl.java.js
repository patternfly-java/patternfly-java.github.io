goog.module('org.patternfly.showcase.model.Files$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Files extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Files} */
 static $create__() {
  Files.$clinit();
  let $instance = new Files();
  $instance.$ctor__org_patternfly_showcase_model_Files__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_model_Files__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<Object>} */
 static get f_data__org_patternfly_showcase_model_Files() {
  return (Files.$clinit(), Files.$static_data__org_patternfly_showcase_model_Files);
 }
 /** @nodts */
 static set f_data__org_patternfly_showcase_model_Files(/** Array<Object> */ value) {
  (Files.$clinit(), Files.$static_data__org_patternfly_showcase_model_Files = value);
 }
 /** @nodts */
 static $clinit() {
  Files.$clinit = () =>{};
  Files.$loadModules();
  j_l_Object.$clinit();
  Files.$static_data__org_patternfly_showcase_model_Files = (/**@type {Array<Object>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(goog.global.JSON.parse(ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_files__org_treblereel_j2cl_processors_common_resources_TextResource().m_getText__java_lang_String())), $Overlay)));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Files;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {Array<Object>} @nodts*/
Files.$static_data__org_patternfly_showcase_model_Files;
$Util.$setClassMetadata(Files, 'org.patternfly.showcase.model.Files');

exports = Files;

//# sourceMappingURL=Files.js.map
