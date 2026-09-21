goog.module('org.patternfly.component.ComponentStore$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Level = goog.forwardDeclare('org.jboss.elemento.logger.Level$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let BaseComponent = goog.forwardDeclare('org.patternfly.component.BaseComponent$impl');
let ComponentDelegate = goog.forwardDeclare('org.patternfly.component.ComponentDelegate$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SubComponent = goog.forwardDeclare('org.patternfly.component.SubComponent$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class ComponentStore extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ComponentStore} */
 static $create__() {
  ComponentStore.$clinit();
  let $instance = new ComponentStore();
  $instance.$ctor__org_patternfly_component_ComponentStore__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ComponentStore__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @template E, B */
 static m_storeComponent__org_patternfly_component_BaseComponent__void(/** BaseComponent<E, B> */ component) {
  ComponentStore.$clinit();
  let uuid = Id.m_uuid__java_lang_String();
  ComponentStore.f_components__org_patternfly_component_ComponentStore_.put(uuid, component);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void((/**@type {!HTMLElement}*/ (component.m_element__elemental2_dom_HTMLElement())).dataset, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String(component.m_componentType__org_patternfly_component_ComponentType()), uuid);
  Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/**@type {HTMLElement}*/ (component.m_element__elemental2_dom_HTMLElement()), ObserverCallback.$adapt((/** MutationRecord */ __) =>{
   let /** Map<?string, BaseComponent<?, ?>> */ $$q;
   ComponentStore.m_remove__java_lang_String__java_lang_String__java_util_function_Function__void(uuid, 'component', ($$q = ComponentStore.f_components__org_patternfly_component_ComponentStore_, j_u_function_Function.$adapt(/**  @return {BaseComponent<?, ?>}*/ ((/** ?string */ arg0) =>{
    let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
    return /**@type {BaseComponent<HTMLElement, TypedBuilder>}*/ ($Casts.$to($$q.remove(arg0_1), BaseComponent));
   }))));
  }));
  if (ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
   ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Store component %s as %s on %o%s', [component.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, uuid, component.m_element__elemental2_dom_HTMLElement(), ComponentStore.m_count__java_lang_String()]);
  }
 }
 /** @nodts @template E, B */
 static m_storeComponentDelegate__org_patternfly_component_ComponentDelegate__void(/** ComponentDelegate<E, B> */ component) {
  ComponentStore.$clinit();
  if ($Equality.$same(component.f_delegate__org_patternfly_component_ComponentDelegate, null)) {
   ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to store component delegate %s. Delegate is null!', [component.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType]);
  } else {
   let uuid = Id.m_uuid__java_lang_String();
   ComponentStore.f_componentDelegates__org_patternfly_component_ComponentStore_.put(uuid, component);
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void((/**@type {!HTMLElement}*/ (component.m_element__elemental2_dom_HTMLElement())).dataset, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String(component.m_componentType__org_patternfly_component_ComponentType()), uuid);
   Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/**@type {HTMLElement}*/ (component.m_element__elemental2_dom_HTMLElement()), ObserverCallback.$adapt((/** MutationRecord */ __) =>{
    let /** Map<?string, ComponentDelegate<?, ?>> */ $$q;
    ComponentStore.m_remove__java_lang_String__java_lang_String__java_util_function_Function__void(uuid, 'component delegate', ($$q = ComponentStore.f_componentDelegates__org_patternfly_component_ComponentStore_, j_u_function_Function.$adapt(/**  @return {ComponentDelegate<?, ?>}*/ ((/** ?string */ arg0) =>{
     let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
     return /**@type {ComponentDelegate<HTMLElement, TypedBuilder>}*/ ($Casts.$to($$q.remove(arg0_1), ComponentDelegate));
    }))));
   }));
   if (ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
    ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Store component delegate %s as %s on %o%s', [component.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, uuid, component.m_element__elemental2_dom_HTMLElement(), ComponentStore.m_count__java_lang_String()]);
   }
  }
 }
 /** @nodts @template E, B */
 static m_storeSubComponent__org_patternfly_component_SubComponent__void(/** SubComponent<E, B> */ subComponent) {
  ComponentStore.$clinit();
  let uuid = Id.m_uuid__java_lang_String();
  ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_.put(uuid, subComponent);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void((/**@type {!HTMLElement}*/ (subComponent.m_element__elemental2_dom_HTMLElement())).dataset, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(subComponent.f_componentType__org_patternfly_component_SubComponent, subComponent.f_subComponentId__org_patternfly_component_SubComponent), uuid);
  Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/**@type {HTMLElement}*/ (subComponent.m_element__elemental2_dom_HTMLElement()), ObserverCallback.$adapt((/** MutationRecord */ mr) =>{
   let /** Map<?string, SubComponent<?, ?>> */ $$q;
   ComponentStore.m_remove__java_lang_String__java_lang_String__java_util_function_Function__void(uuid, 'sub component', ($$q = ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_, j_u_function_Function.$adapt(/**  @return {SubComponent<?, ?>}*/ ((/** ?string */ arg0) =>{
    let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
    return /**@type {SubComponent<HTMLElement, TypedBuilder>}*/ ($Casts.$to($$q.remove(arg0_1), SubComponent));
   }))));
  }));
  if (ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
   ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Store subcomponent %s/%s as %s on %o%s', [subComponent.f_componentType__org_patternfly_component_SubComponent.f_componentName__org_patternfly_component_ComponentType, subComponent.f_subComponentId__org_patternfly_component_SubComponent, uuid, subComponent.m_element__elemental2_dom_HTMLElement(), ComponentStore.m_count__java_lang_String()]);
  }
 }
 /** @nodts @template C, E, B @return {C} */
 static m_lookupComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__boolean__org_patternfly_component_BaseComponent(/** ComponentType */ componentType, /** HTMLElement */ element, /** boolean */ lenient) {
  ComponentStore.$clinit();
  return /**@type {C}*/ ($Casts.$to(ComponentStore.m_lookup__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__boolean__java_lang_String__java_util_function_Function__java_lang_Object(componentType, null, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String(componentType), element, lenient, 'component', j_u_function_Function.$adapt(/**  @return {C}*/ ((/** ?string */ key) =>{
   let key_1 = /**@type {?string}*/ ($Casts.$to(key, j_l_String));
   return /**@type {?C}*/ ($Casts.$to(ComponentStore.f_components__org_patternfly_component_ComponentStore_.get(key_1), BaseComponent));
  }))), BaseComponent));
 }
 /** @nodts @template C, E, B @return {C} */
 static m_lookupComponentDelegate__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__boolean__org_patternfly_component_ComponentDelegate(/** ComponentType */ componentType, /** HTMLElement */ element, /** boolean */ lenient) {
  ComponentStore.$clinit();
  return /**@type {C}*/ ($Casts.$to(ComponentStore.m_lookup__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__boolean__java_lang_String__java_util_function_Function__java_lang_Object(componentType, null, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String(componentType), element, lenient, 'component delegate', j_u_function_Function.$adapt(/**  @return {C}*/ ((/** ?string */ key) =>{
   let key_1 = /**@type {?string}*/ ($Casts.$to(key, j_l_String));
   return /**@type {?C}*/ ($Casts.$to(ComponentStore.f_componentDelegates__org_patternfly_component_ComponentStore_.get(key_1), ComponentDelegate));
  }))), ComponentDelegate));
 }
 /** @nodts @template S, E, B @return {S} */
 static m_lookupSubComponent__org_patternfly_component_ComponentType__java_lang_String__elemental2_dom_HTMLElement__boolean__org_patternfly_component_SubComponent(/** ComponentType */ componentType, /** ?string */ name, /** HTMLElement */ element, /** boolean */ lenient) {
  ComponentStore.$clinit();
  return /**@type {S}*/ ($Casts.$to(ComponentStore.m_lookup__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__boolean__java_lang_String__java_util_function_Function__java_lang_Object(componentType, name, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(componentType, name), element, lenient, 'sub component', j_u_function_Function.$adapt(/**  @return {S}*/ ((/** ?string */ key) =>{
   let key_1 = /**@type {?string}*/ ($Casts.$to(key, j_l_String));
   return /**@type {?S}*/ ($Casts.$to(ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_.get(key_1), SubComponent));
  }))), SubComponent));
 }
 /** @nodts @return {?string} */
 static m_key__org_patternfly_component_ComponentType__java_lang_String(/** ComponentType */ componentType) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.f_KEY_PREFIX__org_patternfly_component_ComponentStore_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_id__org_patternfly_component_ComponentType);
 }
 /** @nodts @return {?string} */
 static m_key__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(/** ComponentType */ componentType, /** ?string */ name) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.f_KEY_PREFIX__org_patternfly_component_ComponentStore_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_id__org_patternfly_component_ComponentType) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts @template T @return {T} */
 static m_lookup__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__boolean__java_lang_String__java_util_function_Function__java_lang_Object(/** ComponentType */ componentType, /** ?string */ name, /** ?string */ key, /** HTMLElement */ element, /** boolean */ lenient, /** ?string */ type, /** j_u_function_Function<?string, T> */ lookupFn) {
  let /** ?T */ value = null;
  let selector = By.m_data__java_lang_String__org_jboss_elemento_By(key);
  let closest = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(element, selector);
  if (!$Equality.$same(closest, null)) {
   let uuid = /**@type {?string}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(closest.dataset, key), j_l_String));
   if (!$Equality.$same(uuid, null)) {
    try {
     value = lookupFn.m_apply__java_lang_Object__java_lang_Object(uuid);
    } catch (__$jsexc) {
     let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
     if (Exception.$isInstance(__$exc)) {
      let e = /**@type {Exception}*/ (__$exc);
      if (!lenient) {
       let target = $Equality.$same(name, null) ? componentType.f_componentName__org_patternfly_component_ComponentType : j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_componentName__org_patternfly_component_ComponentType) + '/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
       ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Cannot cast %s %o to %s', [type, closest, target, name]);
      }
     } else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
     }
    }
   } else {
    if (!lenient) {
     ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_error__java_lang_String__arrayOf_java_lang_Object__void('No UUID found on %s element %o', [element, closest]);
    }
   }
  } else {
   if (!lenient) {
    ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to find element of %s %o using %s', [type, element, selector]);
   }
  }
  return value;
 }
 /** @nodts @template T */
 static m_remove__java_lang_String__java_lang_String__java_util_function_Function__void(/** ?string */ uuid, /** ?string */ type, /** j_u_function_Function<?string, T> */ removeFn) {
  let value = removeFn.m_apply__java_lang_Object__java_lang_Object(uuid);
  if (!$Equality.$same(value, null)) {
   if (ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
    ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Remove %s for %s%s', [type, uuid, ComponentStore.m_count__java_lang_String()]);
   }
  } else {
   ComponentStore.f_logger__org_patternfly_component_ComponentStore_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to remove %s for %s', [type, uuid]);
  }
 }
 /** @nodts @return {?string} */
 static m_count__java_lang_String() {
  return ' (c:' + ComponentStore.f_components__org_patternfly_component_ComponentStore_.size() + '|cd:' + ComponentStore.f_componentDelegates__org_patternfly_component_ComponentStore_.size() + '|sc:' + ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_.size() + ')';
 }
 /** @nodts */
 static $clinit() {
  ComponentStore.$clinit = () =>{};
  ComponentStore.$loadModules();
  j_l_Object.$clinit();
  ComponentStore.f_logger__org_patternfly_component_ComponentStore_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(ComponentStore).m_getName__java_lang_String());
  ComponentStore.f_components__org_patternfly_component_ComponentStore_ = (/**@type {!HashMap<?string, BaseComponent<?, ?>>}*/ (HashMap.$create__()));
  ComponentStore.f_componentDelegates__org_patternfly_component_ComponentStore_ = (/**@type {!HashMap<?string, ComponentDelegate<?, ?>>}*/ (HashMap.$create__()));
  ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_ = (/**@type {!HashMap<?string, SubComponent<?, ?>>}*/ (HashMap.$create__()));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ComponentStore;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ObserverCallback = goog.module.get('org.jboss.elemento.ObserverCallback$impl');
  Level = goog.module.get('org.jboss.elemento.logger.Level$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  BaseComponent = goog.module.get('org.patternfly.component.BaseComponent$impl');
  ComponentDelegate = goog.module.get('org.patternfly.component.ComponentDelegate$impl');
  SubComponent = goog.module.get('org.patternfly.component.SubComponent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
ComponentStore.f_logger__org_patternfly_component_ComponentStore_;
/**@const {string} @nodts*/
ComponentStore.f_KEY_PREFIX__org_patternfly_component_ComponentStore_ = 'pfcs';
/**@type {Map<?string, BaseComponent<?, ?>>} @nodts*/
ComponentStore.f_components__org_patternfly_component_ComponentStore_;
/**@type {Map<?string, ComponentDelegate<?, ?>>} @nodts*/
ComponentStore.f_componentDelegates__org_patternfly_component_ComponentStore_;
/**@type {Map<?string, SubComponent<?, ?>>} @nodts*/
ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_;
$Util.$setClassMetadata(ComponentStore, 'org.patternfly.component.ComponentStore');

exports = ComponentStore;

//# sourceMappingURL=ComponentStore.js.map
