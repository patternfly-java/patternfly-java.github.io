goog.module('org.patternfly.showcase.ResourcesImpl.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.impl.TextResourcePrototype$impl');

let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');

class $4 extends TextResourcePrototype {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!ResourcesImpl} @nodts*/
  this.$outer_this__org_patternfly_showcase_ResourcesImpl_4;
 }
 /** @nodts @return {!$4} */
 static $create__org_patternfly_showcase_ResourcesImpl(/** !ResourcesImpl */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl_4__org_patternfly_showcase_ResourcesImpl__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl_4__org_patternfly_showcase_ResourcesImpl__void(/** !ResourcesImpl */ $outer_this) {
  this.$outer_this__org_patternfly_showcase_ResourcesImpl_4 = $outer_this;
  this.$ctor__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype__void();
 }
 /** @override @nodts @return {?string} */
 m_getText__java_lang_String() {
  return '{\n  \"finder\": {\n    \"name\": \"finder\",\n    \"title\": \"Finder\",\n    \"route\": \"/extensions/finder\",\n    \"clazz\": \"org.patternfly.extension.finder.Finder\",\n    \"summary\": \"A macOS Finder-style column browser for hierarchical navigation\"\n  }\n}\n';
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'extensions';
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  TextResourcePrototype.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($4, 'org.patternfly.showcase.ResourcesImpl$4');

exports = $4;

//# sourceMappingURL=ResourcesImpl$4.js.map
