goog.module('org.patternfly.component.ComponentRegistry$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let BaseComponent = goog.forwardDeclare('org.patternfly.component.BaseComponent$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SubComponent = goog.forwardDeclare('org.patternfly.component.SubComponent$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ComponentRegistry extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<ComponentType, BaseComponent<?, ?>>} @nodts*/
  this.f_components__org_patternfly_component_ComponentRegistry_;
  /**@type {Map<?string, SubComponent<?, ?>>} @nodts*/
  this.f_subComponents__org_patternfly_component_ComponentRegistry_;
 }
 /** @nodts @return {ComponentRegistry} */
 static m_componentRegistry__org_patternfly_component_ComponentRegistry() {
  ComponentRegistry.$clinit();
  if ($Equality.$same(ComponentRegistry.f_instance__org_patternfly_component_ComponentRegistry_, null)) {
   ComponentRegistry.f_instance__org_patternfly_component_ComponentRegistry_ = ComponentRegistry.$create__();
  }
  return ComponentRegistry.f_instance__org_patternfly_component_ComponentRegistry_;
 }
 /** @nodts @return {!ComponentRegistry} */
 static $create__() {
  ComponentRegistry.$clinit();
  let $instance = new ComponentRegistry();
  $instance.$ctor__org_patternfly_component_ComponentRegistry__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ComponentRegistry__void() {
  this.$ctor__java_lang_Object__void();
  this.f_components__org_patternfly_component_ComponentRegistry_ = (/**@type {!HashMap<ComponentType, BaseComponent<?, ?>>}*/ (HashMap.$create__()));
  this.f_subComponents__org_patternfly_component_ComponentRegistry_ = (/**@type {!HashMap<?string, SubComponent<?, ?>>}*/ (HashMap.$create__()));
 }
 /** @nodts */
 m_registerComponent__org_patternfly_component_ComponentType__org_patternfly_component_BaseComponent__void(/** ComponentType */ type, /** BaseComponent<?, ?> */ component) {
  this.f_components__org_patternfly_component_ComponentRegistry_.put(type, component);
 }
 /** @nodts */
 m_registerSubComponent__org_patternfly_component_ComponentType__java_lang_String__org_patternfly_component_SubComponent__void(/** ComponentType */ type, /** ?string */ name, /** SubComponent<?, ?> */ subComponent) {
  this.f_subComponents__org_patternfly_component_ComponentRegistry_.put(this.m_subComponentKey__org_patternfly_component_ComponentType__java_lang_String__java_lang_String_$p_org_patternfly_component_ComponentRegistry(type, name), subComponent);
 }
 /** @nodts */
 m_unregisterComponent__org_patternfly_component_ComponentType__void(/** ComponentType */ type) {
  this.f_components__org_patternfly_component_ComponentRegistry_.remove(type);
 }
 /** @nodts */
 m_unregisterSubComponent__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ type, /** ?string */ name) {
  this.f_subComponents__org_patternfly_component_ComponentRegistry_.remove(this.m_subComponentKey__org_patternfly_component_ComponentType__java_lang_String__java_lang_String_$p_org_patternfly_component_ComponentRegistry(type, name));
 }
 /** @nodts @template C, E, B @return {C} */
 m_lookupComponent__org_patternfly_component_ComponentType__org_patternfly_component_BaseComponent(/** ComponentType */ type) {
  return /**@type {?C}*/ ($Casts.$to(this.f_components__org_patternfly_component_ComponentRegistry_.get(type), BaseComponent));
 }
 /** @nodts @template C, E, B @return {C} */
 m_lookupSubComponent__org_patternfly_component_ComponentType__java_lang_String__org_patternfly_component_SubComponent(/** ComponentType */ type, /** ?string */ name) {
  return /**@type {?C}*/ ($Casts.$to(this.f_subComponents__org_patternfly_component_ComponentRegistry_.get(this.m_subComponentKey__org_patternfly_component_ComponentType__java_lang_String__java_lang_String_$p_org_patternfly_component_ComponentRegistry(type, name)), SubComponent));
 }
 /** @nodts @return {?string} */
 m_subComponentKey__org_patternfly_component_ComponentType__java_lang_String__java_lang_String_$p_org_patternfly_component_ComponentRegistry(/** ComponentType */ componentType, /** ?string */ name) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_id__org_patternfly_component_ComponentType) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts */
 static $clinit() {
  ComponentRegistry.$clinit = () =>{};
  ComponentRegistry.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ComponentRegistry;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BaseComponent = goog.module.get('org.patternfly.component.BaseComponent$impl');
  SubComponent = goog.module.get('org.patternfly.component.SubComponent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {ComponentRegistry} @nodts*/
ComponentRegistry.f_instance__org_patternfly_component_ComponentRegistry_;
$Util.$setClassMetadata(ComponentRegistry, 'org.patternfly.component.ComponentRegistry');

exports = ComponentRegistry;

//# sourceMappingURL=ComponentRegistry.js.map
