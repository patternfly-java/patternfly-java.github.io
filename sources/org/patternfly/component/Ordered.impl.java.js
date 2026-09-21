goog.module('org.patternfly.component.Ordered$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasItems = goog.require('org.patternfly.component.HasItems$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let TreeSet = goog.forwardDeclare('java.util.TreeSet$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ElementContainerMethods = goog.forwardDeclare('org.jboss.elemento.ElementContainerMethods$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let HasIdentifier = goog.forwardDeclare('org.patternfly.component.HasIdentifier$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, C, S
 * @extends {HasItems<E, C, S>}
 */
class Ordered {
 /** @abstract @nodts */
 m_addOrdered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** ElementContainerMethods<?, ?> */ container, /** S */ item) {}
 /** @abstract @nodts @return {Comparator<S>} */
 m_defaultOrder__java_util_Comparator() {}
 /** @abstract @nodts @return {C} */
 m_ordered__org_patternfly_component_HasItems() {}
 /** @abstract @nodts @return {C} */
 m_ordered__java_util_Comparator__org_patternfly_component_HasItems(/** Comparator<S> */ comparator) {}
 /** @abstract @nodts @return {Comparator<S>} */
 m_comparator__java_util_Comparator() {}
 /** @nodts @template E, C, S */
 static m_addOrdered__$default__org_patternfly_component_Ordered__org_jboss_elemento_ElementContainerMethods__org_patternfly_component_HasIdentifier__void(/** !Ordered<E, C, S> */ $thisArg, /** ElementContainerMethods<?, ?> */ container, /** S */ item) {
  Ordered.$clinit();
  if (!$Equality.$same($thisArg.m_comparator__java_util_Comparator(), null)) {
   let /** HTMLElement */ elementBefore = null;
   let orderedItems = /**@type {!TreeSet<S>}*/ (TreeSet.$create__java_util_Comparator($thisArg.m_comparator__java_util_Comparator()));
   orderedItems.addAll($thisArg.m_items__java_util_List());
   for (let $iterator = orderedItems.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let existing = /**@type {?S}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (HasIdentifier)));
    {
     if ($thisArg.m_comparator__java_util_Comparator().m_compare__java_lang_Object__java_lang_Object__int(item, existing) < 0) {
      elementBefore = (/**@type {HTMLElement}*/ ($Casts.$to((/**@type {!IsElement<HTMLElement>}*/ (existing)).m_element__elemental2_dom_Element(), HTMLElement_$Overlay)));
      break;
     }
    }
   }
   if (!$Equality.$same(elementBefore, null)) {
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {Element}*/ ((/**@type {!IsElement<HTMLElement>}*/ (item)).m_element__elemental2_dom_Element()), elementBefore);
   } else {
    container.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ ((/**@type {!IsElement<HTMLElement>}*/ (item)).m_element__elemental2_dom_Element()));
   }
  } else {
   container.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ ((/**@type {!IsElement<HTMLElement>}*/ (item)).m_element__elemental2_dom_Element()));
  }
 }
 /** @nodts @template E, C, S @return {Comparator<S>} */
 static m_defaultOrder__$default__org_patternfly_component_Ordered__java_util_Comparator(/** !Ordered<E, C, S> */ $thisArg) {
  Ordered.$clinit();
  return Comparator.$adapt(/**  @return {number}*/ ((/** S */ s1, /** S */ s2) =>{
   let s1_1 = /**@type {S}*/ ($Casts.$to(s1, /**@type {Function}*/ (HasIdentifier)));
   let s2_1 = /**@type {S}*/ ($Casts.$to(s2, /**@type {Function}*/ (HasIdentifier)));
   if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean((/**@type {!HTMLElement}*/ ($Casts.$to((/**@type {!IsElement<HTMLElement>}*/ (s1_1)).m_element__elemental2_dom_Element(), HTMLElement_$Overlay))).dataset, Ordered.f_DATA_ORDER__org_patternfly_component_Ordered) && JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean((/**@type {!HTMLElement}*/ ($Casts.$to((/**@type {!IsElement<HTMLElement>}*/ (s2_1)).m_element__elemental2_dom_Element(), HTMLElement_$Overlay))).dataset, Ordered.f_DATA_ORDER__org_patternfly_component_Ordered)) {
    return j_l_String.m_compareTo__java_lang_String__java_lang_String__int(/**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object((/**@type {!HTMLElement}*/ ($Casts.$to((/**@type {!IsElement<HTMLElement>}*/ (s1_1)).m_element__elemental2_dom_Element(), HTMLElement_$Overlay))).dataset, Ordered.f_DATA_ORDER__org_patternfly_component_Ordered), j_l_String)), /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object((/**@type {!HTMLElement}*/ ($Casts.$to((/**@type {!IsElement<HTMLElement>}*/ (s2_1)).m_element__elemental2_dom_Element(), HTMLElement_$Overlay))).dataset, Ordered.f_DATA_ORDER__org_patternfly_component_Ordered), j_l_String)));
   } else if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean((/**@type {!HTMLElement}*/ ($Casts.$to((/**@type {!IsElement<HTMLElement>}*/ (s1_1)).m_element__elemental2_dom_Element(), HTMLElement_$Overlay))).dataset, Ordered.f_DATA_ORDER__org_patternfly_component_Ordered)) {
    return -1;
   } else if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean((/**@type {!HTMLElement}*/ ($Casts.$to((/**@type {!IsElement<HTMLElement>}*/ (s2_1)).m_element__elemental2_dom_Element(), HTMLElement_$Overlay))).dataset, Ordered.f_DATA_ORDER__org_patternfly_component_Ordered)) {
    return 1;
   } else {
    return 0;
   }
  }));
 }
 /** @nodts @template E, C, S @return {C} */
 static m_ordered__$default__org_patternfly_component_Ordered__org_patternfly_component_HasItems(/** !Ordered<E, C, S> */ $thisArg) {
  Ordered.$clinit();
  return $thisArg.m_ordered__java_util_Comparator__org_patternfly_component_HasItems($thisArg.m_defaultOrder__java_util_Comparator());
 }
 /** @nodts */
 static $clinit() {
  Ordered.$clinit = () =>{};
  Ordered.$loadModules();
  HasItems.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  HasItems.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_Ordered = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_Ordered;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  TreeSet = goog.module.get('java.util.TreeSet$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HasIdentifier = goog.module.get('org.patternfly.component.HasIdentifier$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Ordered.f_DATA_ORDER__org_patternfly_component_Ordered = 'order';
Ordered.$markImplementor(/**@type {Function}*/ (Ordered));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Ordered), 'org.patternfly.component.Ordered');

exports = Ordered;

//# sourceMappingURL=Ordered.js.map
