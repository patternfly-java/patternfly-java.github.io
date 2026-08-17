goog.module('org.patternfly.showcase.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.treblereel.j2cl.processors.common.resources.ClientBundle$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @nodts @return {?string} */
 static m_avatarData__java_lang_String() {
  Resources.$clinit();
  return 'data:image/svg+xml;base64,' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(goog.global.btoa(ResourcesImpl.f_INSTANCE__org_patternfly_showcase_ResourcesImpl.m_avatar__org_treblereel_j2cl_processors_common_resources_TextResource().m_getText__java_lang_String()));
 }
 /** @abstract @nodts @return {TextResource} */
 m_avatar__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_charts__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_components__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_extensions__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_files__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_layouts__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_pfLogo__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_rhcp__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_servers__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_users__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @nodts */
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_showcase_Resources = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_showcase_Resources;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ResourcesImpl = goog.module.get('org.patternfly.showcase.ResourcesImpl$impl');
 }
}
Resources.$markImplementor(/**@type {Function}*/ (Resources));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Resources), 'org.patternfly.showcase.Resources');

exports = Resources;

//# sourceMappingURL=Resources.js.map
