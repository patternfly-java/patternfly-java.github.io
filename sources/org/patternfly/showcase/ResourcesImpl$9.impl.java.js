goog.module('org.patternfly.showcase.ResourcesImpl.$9$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.impl.TextResourcePrototype$impl');

let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');

class $9 extends TextResourcePrototype {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!ResourcesImpl} @nodts*/
  this.$outer_this__org_patternfly_showcase_ResourcesImpl_9;
 }
 /** @nodts @return {!$9} */
 static $create__org_patternfly_showcase_ResourcesImpl(/** !ResourcesImpl */ $outer_this) {
  $9.$clinit();
  let $instance = new $9();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl_9__org_patternfly_showcase_ResourcesImpl__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl_9__org_patternfly_showcase_ResourcesImpl__void(/** !ResourcesImpl */ $outer_this) {
  this.$outer_this__org_patternfly_showcase_ResourcesImpl_9 = $outer_this;
  this.$ctor__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype__void();
 }
 /** @override @nodts @return {?string} */
 m_getText__java_lang_String() {
  return '[\n  {\n    \"name\": \"US-Node-1\",\n    \"threads\": 5,\n    \"applications\": 25,\n    \"workspaces\": 5,\n    \"status\": \"STOPPED\",\n    \"location\": \"Raleigh\"\n  },\n  {\n    \"name\": \"US-Node 2\",\n    \"threads\": 5,\n    \"applications\": 30,\n    \"workspaces\": 2,\n    \"status\": \"DOWN\",\n    \"location\": \"Westford\"\n  },\n  {\n    \"name\": \"US-Node 3\",\n    \"threads\": 13,\n    \"applications\": 35,\n    \"workspaces\": 12,\n    \"status\": \"DEGRADED\",\n    \"location\": \"Boston\"\n  },\n  {\n    \"name\": \"US-Node 4\",\n    \"threads\": 2,\n    \"applications\": 5,\n    \"workspaces\": 18,\n    \"status\": \"NEEDS_MAINTENANCE\",\n    \"location\": \"Raleigh\"\n  },\n  {\n    \"name\": \"US-Node 5\",\n    \"threads\": 7,\n    \"applications\": 30,\n    \"workspaces\": 5,\n    \"status\": \"RUNNING\",\n    \"location\": \"Boston\"\n  },\n  {\n    \"name\": \"US-Node 6\",\n    \"threads\": 5,\n    \"applications\": 20,\n    \"workspaces\": 15,\n    \"status\": \"STOPPED\",\n    \"location\": \"Raleigh\"\n  },\n  {\n    \"name\": \"CZ-Node 1\",\n    \"threads\": 12,\n    \"applications\": 48,\n    \"workspaces\": 13,\n    \"status\": \"DOWN\",\n    \"location\": \"Brno\"\n  },\n  {\n    \"name\": \"CZ-Node 2\",\n    \"threads\": 3,\n    \"applications\": 8,\n    \"workspaces\": 20,\n    \"status\": \"RUNNING\",\n    \"location\": \"Brno\"\n  },\n  {\n    \"name\": \"CZ-Remote-Node 1\",\n    \"threads\": 15,\n    \"applications\": 20,\n    \"workspaces\": 10,\n    \"status\": \"DOWN\",\n    \"location\": \"Brno\"\n  },\n  {\n    \"name\": \"Bangalore-Node 1\",\n    \"threads\": 20,\n    \"applications\": 30,\n    \"workspaces\": 30,\n    \"status\": \"RUNNING\",\n    \"location\": \"Bangalore\"\n  }\n]\n';
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'servers';
 }
 /** @nodts */
 static $clinit() {
  $9.$clinit = () =>{};
  $9.$loadModules();
  TextResourcePrototype.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $9;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($9, 'org.patternfly.showcase.ResourcesImpl$9');

exports = $9;

//# sourceMappingURL=ResourcesImpl$9.js.map
