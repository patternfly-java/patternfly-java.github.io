goog.module('org.patternfly.showcase.ResourcesImpl.rhcpInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

class rhcpInitializer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!rhcpInitializer} */
 static $create__() {
  let $instance = new rhcpInitializer();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl_rhcpInitializer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl_rhcpInitializer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {TextResource} */
 static m_get__org_treblereel_j2cl_processors_common_resources_TextResource() {
  rhcpInitializer.$clinit();
  return ResourcesImpl.f_rhcp__org_patternfly_showcase_ResourcesImpl_;
 }
 /** @nodts */
 static $clinit() {
  rhcpInitializer.$clinit = () =>{};
  rhcpInitializer.$loadModules();
  j_l_Object.$clinit();
  ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_rhcpInitializer__void_$p_org_patternfly_showcase_ResourcesImpl();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof rhcpInitializer;
 }
 
 /** @nodts */
 static $loadModules() {
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
 }
}
$Util.$setClassMetadata(rhcpInitializer, 'org.patternfly.showcase.ResourcesImpl$rhcpInitializer');

exports = rhcpInitializer;

//# sourceMappingURL=ResourcesImpl$rhcpInitializer.js.map
