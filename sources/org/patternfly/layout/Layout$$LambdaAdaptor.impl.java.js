goog.module('org.patternfly.layout.Layout.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Layout = goog.require('org.patternfly.layout.Layout$impl');

let LayoutType = goog.forwardDeclare('org.patternfly.layout.LayoutType$impl');

/**
 * @implements {Layout}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():LayoutType */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():LayoutType} @nodts*/
  this.f_fn__org_patternfly_layout_Layout_$LambdaAdaptor;
  this.$ctor__org_patternfly_layout_Layout_$LambdaAdaptor__org_patternfly_layout_Layout_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_layout_Layout_$LambdaAdaptor__org_patternfly_layout_Layout_$JsFunction__void(/** ?function():LayoutType */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_layout_Layout_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {LayoutType} */
 m_layoutType__org_patternfly_layout_LayoutType() {
  let /** ?function():LayoutType */ $function;
  return ($function = this.f_fn__org_patternfly_layout_Layout_$LambdaAdaptor, $function());
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Layout.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.layout.Layout$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Layout$$LambdaAdaptor.js.map
