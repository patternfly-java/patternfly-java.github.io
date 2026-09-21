goog.module('org.patternfly.extension.finder.PreviewHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PreviewHandler = goog.require('org.patternfly.extension.finder.PreviewHandler$impl');

let FinderItem = goog.forwardDeclare('org.patternfly.extension.finder.FinderItem$impl');
let FinderPreview = goog.forwardDeclare('org.patternfly.extension.finder.FinderPreview$impl');

/**
 * @implements {PreviewHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(FinderItem, FinderPreview):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(FinderItem, FinderPreview):void} @nodts*/
  this.f_fn__org_patternfly_extension_finder_PreviewHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_extension_finder_PreviewHandler_$LambdaAdaptor__org_patternfly_extension_finder_PreviewHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_PreviewHandler_$LambdaAdaptor__org_patternfly_extension_finder_PreviewHandler_$JsFunction__void(/** ?function(FinderItem, FinderPreview):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_extension_finder_PreviewHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onPreview__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderPreview__void(/** FinderItem */ arg0, /** FinderPreview */ arg1) {
  {
   let $function = this.f_fn__org_patternfly_extension_finder_PreviewHandler_$LambdaAdaptor;
   $function(arg0, arg1);
  }
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
PreviewHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.extension.finder.PreviewHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=PreviewHandler$$LambdaAdaptor.js.map
