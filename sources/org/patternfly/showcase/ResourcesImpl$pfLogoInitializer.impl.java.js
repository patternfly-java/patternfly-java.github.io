goog.module('org.patternfly.showcase.ResourcesImpl.pfLogoInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

class pfLogoInitializer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!pfLogoInitializer} */
 static $create__() {
  let $instance = new pfLogoInitializer();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl_pfLogoInitializer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl_pfLogoInitializer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {TextResource} */
 static m_get__org_treblereel_j2cl_processors_common_resources_TextResource() {
  pfLogoInitializer.$clinit();
  return ResourcesImpl.f_pfLogo__org_patternfly_showcase_ResourcesImpl_;
 }
 /** @nodts */
 static $clinit() {
  pfLogoInitializer.$clinit = () =>{};
  pfLogoInitializer.$loadModules();
  j_l_Object.$clinit();
  ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_pfLogoInitializer__void_$p_org_patternfly_showcase_ResourcesImpl();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof pfLogoInitializer;
 }
 
 /** @nodts */
 static $loadModules() {
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
 }
}
$Util.$setClassMetadata(pfLogoInitializer, 'org.patternfly.showcase.ResourcesImpl$pfLogoInitializer');

exports = pfLogoInitializer;

//# sourceMappingURL=ResourcesImpl$pfLogoInitializer.js.map
