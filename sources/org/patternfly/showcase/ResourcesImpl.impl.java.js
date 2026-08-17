goog.module('org.patternfly.showcase.ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.patternfly.showcase.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$1$impl');
let $10 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$10$impl');
let $2 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$2$impl');
let $3 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$3$impl');
let $4 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$4$impl');
let $5 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$5$impl');
let $6 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$6$impl');
let $7 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$7$impl');
let $8 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$8$impl');
let $9 = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.$9$impl');
let avatarInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.avatarInitializer$impl');
let chartsInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.chartsInitializer$impl');
let componentsInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.componentsInitializer$impl');
let extensionsInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.extensionsInitializer$impl');
let filesInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.filesInitializer$impl');
let layoutsInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.layoutsInitializer$impl');
let pfLogoInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.pfLogoInitializer$impl');
let rhcpInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.rhcpInitializer$impl');
let serversInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.serversInitializer$impl');
let usersInitializer = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl.usersInitializer$impl');
let ResourcePrototype = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
 */
class ResourcesImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HashMap<?string, ResourcePrototype>} @nodts*/
  this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_;
 }
 /** @nodts @return {!ResourcesImpl} */
 static $create__() {
  let $instance = new ResourcesImpl();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 m_avatarInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_avatar__org_patternfly_showcase_ResourcesImpl_ = $1.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_avatar__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return avatarInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_chartsInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_charts__org_patternfly_showcase_ResourcesImpl_ = $2.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_charts__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return chartsInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_componentsInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_components__org_patternfly_showcase_ResourcesImpl_ = $3.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_components__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return componentsInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_extensionsInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_extensions__org_patternfly_showcase_ResourcesImpl_ = $4.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_extensions__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return extensionsInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_filesInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_files__org_patternfly_showcase_ResourcesImpl_ = $5.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_files__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return filesInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_layoutsInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_layouts__org_patternfly_showcase_ResourcesImpl_ = $6.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_layouts__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return layoutsInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_pfLogoInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_pfLogo__org_patternfly_showcase_ResourcesImpl_ = $7.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_pfLogo__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return pfLogoInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_rhcpInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_rhcp__org_patternfly_showcase_ResourcesImpl_ = $8.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_rhcp__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return rhcpInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_serversInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_servers__org_patternfly_showcase_ResourcesImpl_ = $9.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_servers__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return serversInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_usersInitializer__void_$p_org_patternfly_showcase_ResourcesImpl() {
  ResourcesImpl.$static_users__org_patternfly_showcase_ResourcesImpl_ = $10.$create__org_patternfly_showcase_ResourcesImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_users__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return usersInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts @return {ResourcePrototype} */
 m_getResource__java_lang_String__org_treblereel_j2cl_processors_common_resources_ResourcePrototype(/** ?string */ name) {
  if ($Equality.$same(this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_, null)) {
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_ = (/**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__()));
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('avatar', this.m_avatar__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('charts', this.m_charts__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('components', this.m_components__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('extensions', this.m_extensions__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('files', this.m_files__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('layouts', this.m_layouts__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('pfLogo', this.m_pfLogo__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('rhcp', this.m_rhcp__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('servers', this.m_servers__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.put('users', this.m_users__org_treblereel_j2cl_processors_common_resources_TextResource());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(this.f_resourceMap__org_patternfly_showcase_ResourcesImpl_.get(name), /**@type {Function}*/ (ResourcePrototype)));
 }
 /** @nodts @return {ResourcesImpl} */
 static get f_INSTANCE__org_patternfly_showcase_ResourcesImpl() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_INSTANCE__org_patternfly_showcase_ResourcesImpl);
 }
 /** @nodts @return {TextResource} */
 static get f_avatar__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_avatar__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_avatar__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_avatar__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_charts__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_charts__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_charts__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_charts__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_components__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_components__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_components__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_components__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_extensions__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_extensions__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_extensions__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_extensions__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_files__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_files__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_files__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_files__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_layouts__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_layouts__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_layouts__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_layouts__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_pfLogo__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_pfLogo__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_pfLogo__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_pfLogo__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_rhcp__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_rhcp__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_rhcp__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_rhcp__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_servers__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_servers__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_servers__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_servers__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_users__org_patternfly_showcase_ResourcesImpl_() {
  return (ResourcesImpl.$clinit(), ResourcesImpl.$static_users__org_patternfly_showcase_ResourcesImpl_);
 }
 /** @nodts */
 static set f_users__org_patternfly_showcase_ResourcesImpl_(/** TextResource */ value) {
  (ResourcesImpl.$clinit(), ResourcesImpl.$static_users__org_patternfly_showcase_ResourcesImpl_ = value);
 }
 /** @nodts */
 static $clinit() {
  ResourcesImpl.$clinit = () =>{};
  ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  ResourcesImpl.$static_INSTANCE__org_patternfly_showcase_ResourcesImpl = ResourcesImpl.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResourcesImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$1$impl');
  $10 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$10$impl');
  $2 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$2$impl');
  $3 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$3$impl');
  $4 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$4$impl');
  $5 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$5$impl');
  $6 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$6$impl');
  $7 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$7$impl');
  $8 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$8$impl');
  $9 = goog.module.get('org.patternfly.showcase.ResourcesImpl.$9$impl');
  avatarInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.avatarInitializer$impl');
  chartsInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.chartsInitializer$impl');
  componentsInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.componentsInitializer$impl');
  extensionsInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.extensionsInitializer$impl');
  filesInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.filesInitializer$impl');
  layoutsInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.layoutsInitializer$impl');
  pfLogoInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.pfLogoInitializer$impl');
  rhcpInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.rhcpInitializer$impl');
  serversInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.serversInitializer$impl');
  usersInitializer = goog.module.get('org.patternfly.showcase.ResourcesImpl.usersInitializer$impl');
  ResourcePrototype = goog.module.get('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {ResourcesImpl} @nodts*/
ResourcesImpl.$static_INSTANCE__org_patternfly_showcase_ResourcesImpl;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_avatar__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_charts__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_components__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_extensions__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_files__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_layouts__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_pfLogo__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_rhcp__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_servers__org_patternfly_showcase_ResourcesImpl_;
/**@private {TextResource} @nodts*/
ResourcesImpl.$static_users__org_patternfly_showcase_ResourcesImpl_;
Resources.$markImplementor(ResourcesImpl);
$Util.$setClassMetadata(ResourcesImpl, 'org.patternfly.showcase.ResourcesImpl');

exports = ResourcesImpl;

//# sourceMappingURL=ResourcesImpl.js.map
