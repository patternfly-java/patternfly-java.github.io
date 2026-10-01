goog.module('org.patternfly.component.AurHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let HasIdentifier = goog.forwardDeclare('org.patternfly.component.HasIdentifier$impl');
let HasItems = goog.forwardDeclare('org.patternfly.component.HasItems$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template C, S
 */
class AurHandler extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {C} @nodts*/
  this.f_component__org_patternfly_component_AurHandler_;
  /**@type {List<AddItemHandler<C, S>>} @nodts*/
  this.f_onAdd__org_patternfly_component_AurHandler_;
  /**@type {List<UpdateItemHandler<C, S>>} @nodts*/
  this.f_onUpdate__org_patternfly_component_AurHandler_;
  /**@type {List<RemoveItemHandler<C, S>>} @nodts*/
  this.f_onRemove__org_patternfly_component_AurHandler_;
 }
 /** @nodts @template C, S @return {!AurHandler<C, S>} */
 static $create__org_patternfly_component_HasItems(/** C */ component) {
  AurHandler.$clinit();
  let $instance = new AurHandler();
  $instance.$ctor__org_patternfly_component_AurHandler__org_patternfly_component_HasItems__void(component);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_AurHandler__org_patternfly_component_HasItems__void(/** C */ component) {
  this.$ctor__java_lang_Object__void();
  this.f_component__org_patternfly_component_AurHandler_ = component;
  this.f_onAdd__org_patternfly_component_AurHandler_ = (/**@type {!ArrayList<AddItemHandler<C, S>>}*/ (ArrayList.$create__()));
  this.f_onUpdate__org_patternfly_component_AurHandler_ = (/**@type {!ArrayList<UpdateItemHandler<C, S>>}*/ (ArrayList.$create__()));
  this.f_onRemove__org_patternfly_component_AurHandler_ = (/**@type {!ArrayList<RemoveItemHandler<C, S>>}*/ (ArrayList.$create__()));
 }
 /** @nodts @return {C} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<C, S> */ onAdd) {
  this.f_onAdd__org_patternfly_component_AurHandler_.add(onAdd);
  return this.f_component__org_patternfly_component_AurHandler_;
 }
 /** @nodts @return {C} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<C, S> */ onUpdate) {
  this.f_onUpdate__org_patternfly_component_AurHandler_.add(onUpdate);
  return this.f_component__org_patternfly_component_AurHandler_;
 }
 /** @nodts @return {C} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<C, S> */ onRemove) {
  this.f_onRemove__org_patternfly_component_AurHandler_.add(onRemove);
  return this.f_component__org_patternfly_component_AurHandler_;
 }
 /** @nodts @return {C} */
 m_added__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** S */ item) {
  if (!$Equality.$same(item, null)) {
   this.f_onAdd__org_patternfly_component_AurHandler_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** AddItemHandler<C, S> */ handler) =>{
    let handler_1 = /**@type {AddItemHandler<C, S>}*/ ($Casts.$to(handler, /**@type {Function}*/ (AddItemHandler)));
    handler_1.m_onAdd__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__void(this.f_component__org_patternfly_component_AurHandler_, item);
   }));
  }
  return this.f_component__org_patternfly_component_AurHandler_;
 }
 /** @nodts @return {C} */
 m_updated__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** S */ oldItem, /** S */ newItem) {
  if (!$Equality.$same(oldItem, null) && !$Equality.$same(newItem, null)) {
   this.f_onUpdate__org_patternfly_component_AurHandler_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** UpdateItemHandler<C, S> */ handler) =>{
    let handler_1 = /**@type {UpdateItemHandler<C, S>}*/ ($Casts.$to(handler, /**@type {Function}*/ (UpdateItemHandler)));
    handler_1.m_onUpdate__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasIdentifier__void(this.f_component__org_patternfly_component_AurHandler_, oldItem, newItem);
   }));
  }
  return this.f_component__org_patternfly_component_AurHandler_;
 }
 /** @nodts @return {C} */
 m_removed__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** S */ item) {
  if (!$Equality.$same(item, null)) {
   this.f_onRemove__org_patternfly_component_AurHandler_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** RemoveItemHandler<C, S> */ handler) =>{
    let handler_1 = /**@type {RemoveItemHandler<C, S>}*/ ($Casts.$to(handler, /**@type {Function}*/ (RemoveItemHandler)));
    handler_1.m_onRemove__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__void(this.f_component__org_patternfly_component_AurHandler_, item);
   }));
  }
  return this.f_component__org_patternfly_component_AurHandler_;
 }
 /** @nodts */
 static $clinit() {
  AurHandler.$clinit = () =>{};
  AurHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AurHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AddItemHandler = goog.module.get('org.patternfly.component.AddItemHandler$impl');
  RemoveItemHandler = goog.module.get('org.patternfly.component.RemoveItemHandler$impl');
  UpdateItemHandler = goog.module.get('org.patternfly.component.UpdateItemHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AurHandler, 'org.patternfly.component.AurHandler');

exports = AurHandler;

//# sourceMappingURL=AurHandler.js.map
