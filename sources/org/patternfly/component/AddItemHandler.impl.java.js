goog.module('org.patternfly.component.AddItemHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.AddItemHandler.$LambdaAdaptor$impl');
let HasIdentifier = goog.forwardDeclare('org.patternfly.component.HasIdentifier$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');

/**
 * @interface
 * @template C, S
 */
class AddItemHandler {
 /** @abstract @nodts */
 m_onAdd__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__void(/** C */ component, /** S */ item) {}
 /** @nodts @template C, S @return {!AddItemHandler<C, S>} */
 static $adapt(/** ?function(C, S):void */ fn) {
  AddItemHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C, S>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  AddItemHandler.$clinit = () =>{};
  AddItemHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_AddItemHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_AddItemHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.AddItemHandler.$LambdaAdaptor$impl');
 }
}
AddItemHandler.$markImplementor(/**@type {Function}*/ (AddItemHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (AddItemHandler), 'org.patternfly.component.AddItemHandler');

exports = AddItemHandler;

//# sourceMappingURL=AddItemHandler.js.map
