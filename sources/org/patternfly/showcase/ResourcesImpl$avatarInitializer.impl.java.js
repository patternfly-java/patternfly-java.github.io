goog.module('org.patternfly.showcase.ResourcesImpl.avatarInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

class avatarInitializer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!avatarInitializer} */
 static $create__() {
  let $instance = new avatarInitializer();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl_avatarInitializer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl_avatarInitializer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {TextResource} */
 static m_get__org_treblereel_j2cl_processors_common_resources_TextResource() {
  avatarInitializer.$clinit();
  return ResourcesImpl.f_avatar__org_patternfly_showcase_ResourcesImpl_;
 }
 /** @nodts */
 static $clinit() {
  avatarInitializer.$clinit = () =>{};
  avatarInitializer.$loadModules();
  j_l_Object.$clinit();
  ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_avatarInitializer__void_$p_org_patternfly_showcase_ResourcesImpl();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof avatarInitializer;
 }
 
 /** @nodts */
 static $loadModules() {
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
 }
}
$Util.$setClassMetadata(avatarInitializer, 'org.patternfly.showcase.ResourcesImpl$avatarInitializer');

exports = avatarInitializer;

//# sourceMappingURL=ResourcesImpl$avatarInitializer.js.map
