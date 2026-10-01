goog.module('org.patternfly.component.HasItems$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AddItemHandler = goog.forwardDeclare('org.patternfly.component.AddItemHandler$impl');
let HasIdentifier = goog.forwardDeclare('org.patternfly.component.HasIdentifier$impl');
let RemoveItemHandler = goog.forwardDeclare('org.patternfly.component.RemoveItemHandler$impl');
let UpdateItemHandler = goog.forwardDeclare('org.patternfly.component.UpdateItemHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, C, S
 * @extends {Iterable<S>}
 * @extends {TypedBuilder<E, C>}
 * @extends {IsElement<E>}
 */
class HasItems {
 /** @abstract @nodts @template T @return {C} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** Iterable<T> */ items, /** j_u_function_Function<T, S> */ display) {}
 /** @abstract @nodts @return {C} */
 m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** S */ item) {}
 /** @abstract @nodts @return {C} */
 m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** S */ item) {}
 /** @abstract @nodts @return {C} */
 m_onAdd__org_patternfly_component_AddItemHandler__org_patternfly_component_HasItems(/** AddItemHandler<C, S> */ onAdd) {}
 /** @abstract @nodts @return {List<S>} */
 m_items__java_util_List() {}
 /** @abstract @nodts @return {number} */
 m_size__int() {}
 /** @abstract @nodts @return {boolean} */
 m_isEmpty__boolean() {}
 /** @abstract @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ identifier) {}
 /** @abstract @nodts @return {S} */
 m_item__java_lang_String__org_patternfly_component_HasIdentifier(/** ?string */ identifier) {}
 /** @abstract @nodts @template T */
 m_updateItem__java_lang_Object__java_util_function_Function__void(/** T */ item, /** j_u_function_Function<T, S> */ display) {}
 /** @abstract @nodts */
 m_updateItem__java_lang_String__void(/** ?string */ identifier) {}
 /** @abstract @nodts */
 m_updateItem__org_patternfly_component_HasIdentifier__void(/** S */ item) {}
 /** @abstract @nodts @return {C} */
 m_onUpdate__org_patternfly_component_UpdateItemHandler__org_patternfly_component_HasItems(/** UpdateItemHandler<C, S> */ onUpdate) {}
 /** @abstract @nodts */
 m_replaceItemElement__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** S */ item, /** BiConsumer<S, S> */ whenReplaced) {}
 /** @abstract @nodts */
 m_removeItem__java_lang_String__void(/** ?string */ identifier) {}
 /** @abstract @nodts @return {C} */
 m_onRemove__org_patternfly_component_RemoveItemHandler__org_patternfly_component_HasItems(/** RemoveItemHandler<C, S> */ onRemove) {}
 /** @abstract @nodts */
 m_clear__void() {}
 /** @nodts @template E, C, S, T @return {C} */
 static m_addItems__$default__org_patternfly_component_HasItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/** !HasItems<E, C, S> */ $thisArg, /** Iterable<T> */ items, /** j_u_function_Function<T, S> */ display) {
  HasItems.$clinit();
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let subComponent = /**@type {?S}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), /**@type {Function}*/ (HasIdentifier)));
    $thisArg.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(subComponent);
   }
  }
  return /**@type {C}*/ ($Casts.$to($thisArg.m_that__org_jboss_elemento_TypedBuilder(), /**@type {Function}*/ (HasItems)));
 }
 /** @nodts @template E, C, S @return {C} */
 static m_addItem__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/** !HasItems<E, C, S> */ $thisArg, /** S */ item) {
  HasItems.$clinit();
  return $thisArg.m_add__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(item);
 }
 /** @nodts @template E, C, S @return {List<S>} */
 static m_items__$default__org_patternfly_component_HasItems__java_util_List(/** !HasItems<E, C, S> */ $thisArg) {
  HasItems.$clinit();
  let items = /**@type {!ArrayList<S>}*/ (ArrayList.$create__());
  $thisArg.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** S */ arg0) =>{
   let arg0_1 = /**@type {S}*/ ($Casts.$to(arg0, /**@type {Function}*/ (HasIdentifier)));
   items.add(arg0_1);
  }));
  return items;
 }
 /** @nodts @template E, C, S, T */
 static m_updateItem__$default__org_patternfly_component_HasItems__java_lang_Object__java_util_function_Function__void(/** !HasItems<E, C, S> */ $thisArg, /** T */ item, /** j_u_function_Function<T, S> */ display) {
  HasItems.$clinit();
  $thisArg.m_updateItem__org_patternfly_component_HasIdentifier__void(/**@type {S}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), /**@type {Function}*/ (HasIdentifier))));
 }
 /** @nodts @template E, C, S */
 static m_updateItem__$default__org_patternfly_component_HasItems__java_lang_String__void(/** !HasItems<E, C, S> */ $thisArg, /** ?string */ identifier) {
  HasItems.$clinit();
  $thisArg.m_updateItem__org_patternfly_component_HasIdentifier__void($thisArg.m_item__java_lang_String__org_patternfly_component_HasIdentifier(identifier));
 }
 /** @nodts @template E, C, S */
 static m_replaceItemElement__$default__org_patternfly_component_HasItems__org_patternfly_component_HasIdentifier__java_util_function_BiConsumer__void(/** !HasItems<E, C, S> */ $thisArg, /** S */ item, /** BiConsumer<S, S> */ whenReplaced) {
  HasItems.$clinit();
  if (!$Equality.$same(item, null)) {
   let old = $thisArg.m_item__java_lang_String__org_patternfly_component_HasIdentifier((/**@type {!HasIdentifier<HTMLElement, TypedBuilder>}*/ (item)).m_identifier__java_lang_String());
   if (!$Equality.$same(old, null)) {
    $Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(/**@type {!Element}*/ ((/**@type {!IsElement<HTMLElement>}*/ (old)).m_element__elemental2_dom_Element()), [/**@type {Node}*/ ((/**@type {!IsElement<HTMLElement>}*/ (item)).m_element__elemental2_dom_Element())]);
    whenReplaced.m_accept__java_lang_Object__java_lang_Object__void(old, item);
   }
  }
 }
 /** @nodts */
 static $clinit() {
  HasItems.$clinit = () =>{};
  HasItems.$loadModules();
  Iterable.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Iterable.$markImplementor(ctor);
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_HasItems = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_HasItems;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HasIdentifier = goog.module.get('org.patternfly.component.HasIdentifier$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasItems.$markImplementor(/**@type {Function}*/ (HasItems));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (HasItems), 'org.patternfly.component.HasItems');

exports = HasItems;

//# sourceMappingURL=HasItems.js.map
