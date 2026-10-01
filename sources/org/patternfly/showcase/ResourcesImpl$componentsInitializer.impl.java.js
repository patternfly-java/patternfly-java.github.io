goog.module('org.patternfly.showcase.ResourcesImpl.componentsInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

class componentsInitializer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!componentsInitializer} */
 static $create__() {
  let $instance = new componentsInitializer();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl_componentsInitializer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl_componentsInitializer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {TextResource} */
 static m_get__org_treblereel_j2cl_processors_common_resources_TextResource() {
  componentsInitializer.$clinit();
  return ResourcesImpl.f_components__org_patternfly_showcase_ResourcesImpl_;
 }
 /** @nodts */
 static $clinit() {
  componentsInitializer.$clinit = () =>{};
  componentsInitializer.$loadModules();
  j_l_Object.$clinit();
  ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_componentsInitializer__void_$p_org_patternfly_showcase_ResourcesImpl();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof componentsInitializer;
 }
 
 /** @nodts */
 static $loadModules() {
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
 }
}
$Util.$setClassMetadata(componentsInitializer, 'org.patternfly.showcase.ResourcesImpl$componentsInitializer');

exports = componentsInitializer;

//# sourceMappingURL=ResourcesImpl$componentsInitializer.js.map
