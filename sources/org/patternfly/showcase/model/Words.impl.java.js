goog.module('org.patternfly.showcase.model.Words$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Words extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Words} */
 static $create__() {
  Words.$clinit();
  let $instance = new Words();
  $instance.$ctor__org_patternfly_showcase_model_Words__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_model_Words__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<?string>} */
 static get f_data__org_patternfly_showcase_model_Words() {
  return (Words.$clinit(), Words.$static_data__org_patternfly_showcase_model_Words);
 }
 /** @nodts */
 static set f_data__org_patternfly_showcase_model_Words(/** Array<?string> */ value) {
  (Words.$clinit(), Words.$static_data__org_patternfly_showcase_model_Words = value);
 }
 /** @nodts */
 static $clinit() {
  Words.$clinit = () =>{};
  Words.$loadModules();
  j_l_Object.$clinit();
  Words.$static_data__org_patternfly_showcase_model_Words = (/**@type {Array<?string>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(goog.global.JSON.parse(ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_words__org_treblereel_j2cl_processors_common_resources_TextResource().m_getText__java_lang_String())), $Overlay)));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Words;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {Array<?string>} @nodts*/
Words.$static_data__org_patternfly_showcase_model_Words;
$Util.$setClassMetadata(Words, 'org.patternfly.showcase.model.Words');

exports = Words;

//# sourceMappingURL=Words.js.map
