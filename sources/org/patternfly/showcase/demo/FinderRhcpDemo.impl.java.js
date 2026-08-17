goog.module('org.patternfly.showcase.demo.FinderRhcpDemo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class FinderRhcpDemo extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!FinderRhcpDemo} */
 static $create__() {
  FinderRhcpDemo.$clinit();
  let $instance = new FinderRhcpDemo();
  $instance.$ctor__org_patternfly_showcase_demo_FinderRhcpDemo__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_demo_FinderRhcpDemo__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  FinderRhcpDemo.$clinit = () =>{};
  FinderRhcpDemo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderRhcpDemo;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(FinderRhcpDemo, 'org.patternfly.showcase.demo.FinderRhcpDemo');

exports = FinderRhcpDemo;

//# sourceMappingURL=FinderRhcpDemo.js.map
