goog.module('org.patternfly.component.RemoveItemHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let HasIdentifier = goog.forwardDeclare('org.patternfly.component.HasIdentifier$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C, S
 */
class RemoveItemHandler {
 /** @abstract @nodts */
 m_onRemove__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__void(/** C */ component, /** S */ item) {}
 /** @nodts @template C, S @return {!RemoveItemHandler<C, S>} */
 static $adapt(/** ?function(C, S):void */ fn) {
  RemoveItemHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C, S>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  RemoveItemHandler.$clinit = () =>{};
  RemoveItemHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_RemoveItemHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_RemoveItemHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.RemoveItemHandler.$LambdaAdaptor$impl');
 }
}
RemoveItemHandler.$markImplementor(/**@type {Function}*/ (RemoveItemHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (RemoveItemHandler), 'org.patternfly.component.RemoveItemHandler');

exports = RemoveItemHandler;

//# sourceMappingURL=RemoveItemHandler.js.map
