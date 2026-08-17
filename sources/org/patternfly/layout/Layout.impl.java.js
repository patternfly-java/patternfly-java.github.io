goog.module('org.patternfly.layout.Layout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.layout.Layout.$LambdaAdaptor$impl');
let LayoutType = goog.forwardDeclare('org.patternfly.layout.LayoutType$impl');

/**
 * @interface
 */
class Layout {
 /** @abstract @nodts @return {LayoutType} */
 m_layoutType__org_patternfly_layout_LayoutType() {}
 /** @nodts @return {!Layout} */
 static $adapt(/** ?function():LayoutType */ fn) {
  Layout.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Layout.$clinit = () =>{};
  Layout.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_layout_Layout = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_layout_Layout;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.layout.Layout.$LambdaAdaptor$impl');
 }
}
Layout.$markImplementor(/**@type {Function}*/ (Layout));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Layout), 'org.patternfly.layout.Layout');

exports = Layout;

//# sourceMappingURL=Layout.js.map
