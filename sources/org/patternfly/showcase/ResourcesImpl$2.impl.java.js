goog.module('org.patternfly.showcase.ResourcesImpl.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.impl.TextResourcePrototype$impl');

let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');

class $2 extends TextResourcePrototype {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!ResourcesImpl} @nodts*/
  this.$outer_this__org_patternfly_showcase_ResourcesImpl_2;
 }
 /** @nodts @return {!$2} */
 static $create__org_patternfly_showcase_ResourcesImpl(/** !ResourcesImpl */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl_2__org_patternfly_showcase_ResourcesImpl__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl_2__org_patternfly_showcase_ResourcesImpl__void(/** !ResourcesImpl */ $outer_this) {
  this.$outer_this__org_patternfly_showcase_ResourcesImpl_2 = $outer_this;
  this.$ctor__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype__void();
 }
 /** @override @nodts @return {?string} */
 m_getText__java_lang_String() {
  return '{\n  \"bullet\": {\n    \"name\": \"bullet\",\n    \"title\": \"Bullet\",\n    \"route\": \"/charts/bullet\",\n    \"clazz\": \"org.patternfly.chart.bullet.Bullet\",\n    \"summary\": \"A bullet chart can be thought of as an extension to a bar chart that measures a dynamic value with thresholds and target values. \"\n  },\n  \"donut\": {\n    \"name\": \"donut\",\n    \"title\": \"Donut\",\n    \"route\": \"/charts/donut\",\n    \"clazz\": \"org.patternfly.chart.donut.Donut\",\n    \"summary\": \"A donut chart represents relative amounts that must add up to 100%.\"\n  },\n  \"donut-utilization\": {\n    \"name\": \"donut-utilization\",\n    \"title\": \"Donut utilization\",\n    \"route\": \"/charts/donut-utilization\",\n    \"clazz\": \"org.patternfly.chart.utilization.DonutUtilization\",\n    \"summary\": \"A donut utilization chart is a donut chart used specifically to show utilization metrics.\"\n  },\n  \"pie\": {\n    \"name\": \"pie\",\n    \"title\": \"Pie\",\n    \"route\": \"/charts/pie\",\n    \"clazz\": \"org.patternfly.chart.pie.Pie\",\n    \"summary\": \"A pie chart is commonly used to show percentages or proportional data.\"\n  }\n}\n';
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'charts';
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  TextResourcePrototype.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($2, 'org.patternfly.showcase.ResourcesImpl$2');

exports = $2;

//# sourceMappingURL=ResourcesImpl$2.js.map
