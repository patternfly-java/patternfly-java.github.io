goog.module('org.patternfly.component.UpdateItemHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let HasIdentifier = goog.forwardDeclare('org.patternfly.component.HasIdentifier$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C, S
 */
class UpdateItemHandler {
 /** @abstract @nodts */
 m_onUpdate__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__void(/** C */ component, /** S */ oldItem, /** S */ newItem) {}
 /** @nodts @template C, S @return {!UpdateItemHandler<C, S>} */
 static $adapt(/** ?function(C, S, S):void */ fn) {
  UpdateItemHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C, S>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  UpdateItemHandler.$clinit = () =>{};
  UpdateItemHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_UpdateItemHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_UpdateItemHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.UpdateItemHandler.$LambdaAdaptor$impl');
 }
}
UpdateItemHandler.$markImplementor(/**@type {Function}*/ (UpdateItemHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (UpdateItemHandler), 'org.patternfly.component.UpdateItemHandler');

exports = UpdateItemHandler;

//# sourceMappingURL=UpdateItemHandler.js.map
