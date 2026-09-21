goog.module('org.patternfly.extension.finder.PreviewHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let FinderItem = goog.forwardDeclare('org.patternfly.extension.finder.FinderItem$impl');
let FinderPreview = goog.forwardDeclare('org.patternfly.extension.finder.FinderPreview$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.extension.finder.PreviewHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class PreviewHandler {
 /** @abstract @nodts */
 m_onPreview__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderPreview__void(/** FinderItem */ item, /** FinderPreview */ preview) {}
 /** @nodts @return {!PreviewHandler} */
 static $adapt(/** ?function(FinderItem, FinderPreview):void */ fn) {
  PreviewHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  PreviewHandler.$clinit = () =>{};
  PreviewHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_extension_finder_PreviewHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_extension_finder_PreviewHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.extension.finder.PreviewHandler.$LambdaAdaptor$impl');
 }
}
PreviewHandler.$markImplementor(/**@type {Function}*/ (PreviewHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (PreviewHandler), 'org.patternfly.extension.finder.PreviewHandler');

exports = PreviewHandler;

//# sourceMappingURL=PreviewHandler.js.map
