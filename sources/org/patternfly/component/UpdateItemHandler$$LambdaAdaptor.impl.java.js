goog.module('org.patternfly.component.UpdateItemHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UpdateItemHandler = goog.require('org.patternfly.component.UpdateItemHandler$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let HasIdentifier = goog.forwardDeclare('org.patternfly.component.HasIdentifier$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');

/**
 * @template C, S
 * @implements {UpdateItemHandler<C, S>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(C, S, S):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C, S, S):void} @nodts*/
  this.f_fn__org_patternfly_component_UpdateItemHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_UpdateItemHandler_$LambdaAdaptor__org_patternfly_component_UpdateItemHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_UpdateItemHandler_$LambdaAdaptor__org_patternfly_component_UpdateItemHandler_$JsFunction__void(/** ?function(C, S, S):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_UpdateItemHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onUpdate__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__void(/** C */ arg0, /** S */ arg1, /** S */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_component_UpdateItemHandler_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
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
UpdateItemHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.UpdateItemHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=UpdateItemHandler$$LambdaAdaptor.js.map
